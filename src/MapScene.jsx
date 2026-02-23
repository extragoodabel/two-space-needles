import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

/** Real Space Needle, Seattle Center (400 Broad St) — single source of truth for map center and default needle. */
const SEATTLE_CENTER = { lat: 47.6205, lng: -122.3493, altitude: 0 };
const ORIGINAL_NEEDLE_POSITION = { lat: 47.6205, lng: -122.3493, altitude: 0 };

/** Default map view: oblique aerial, Belltown/water behind needle, Seattle Center in front. */
const DEFAULT_TILT = 67;
const DEFAULT_HEADING = 230; /* opposite side of needle, Belltown behind */
const DEFAULT_RANGE = 900;

// Footprint ~400 ft radius (SPEC). In meters for polygon radius.
const FOOTPRINT_RADIUS_M = 122;
const CIRCLE_POINTS = 32;
/** Set true to log pointer->latLng and nearest.d in console for hover debugging. */
const DEBUG_HOVER = false;
/** Radius (m) of the 3D glow at the needle base when it's the hint target. Same "node" as the needle. */
const HINT_GLOW_RADIUS_M = 20;

// Model paths: default (set in place), blue-tinted (placing / moving / highlighted), permanent original at Seattle Center.
const GHOST_MODEL_SRC = "/models/space-needle-park.glb";
const HIGHLIGHT_MODEL_SRC = "/models/low_poly_space_needle.glb";
/** Permanent original Space Needle at Seattle Center — original GLB model. */
const ORIGINAL_NEEDLE_MODEL_SRC = GHOST_MODEL_SRC;
/** Altitude offset (m) for original needle so it aligns with footprint; tune if the GLB origin is not at the base. */
const ORIGINAL_NEEDLE_ALTITUDE_OFFSET_M = 0;

/** Third-party asset credits (single source of truth). Fill in creator, license, sourceUrl, notes. */
const CREDITS = [
  { category: "3D Model", name: "Space Needle (default)", creator: "—", license: "—", sourceUrl: "", notes: "space-needle-park.glb" },
  { category: "3D Model", name: "Space Needle (highlight)", creator: "—", license: "—", sourceUrl: "", notes: "low_poly_space_needle.glb" },
  { category: "Sound", name: "crunch", creator: "—", license: "—", sourceUrl: "", notes: "crunch.mp3" },
  { category: "Sound", name: "glass smash", creator: "—", license: "—", sourceUrl: "", notes: "glass-smash.mp3" },
  { category: "Sound", name: "splash", creator: "—", license: "—", sourceUrl: "", notes: "splash.mp3" },
  { category: "Sound", name: "dog bark", creator: "—", license: "—", sourceUrl: "", notes: "dog-bark.mp3" },
  { category: "Sound", name: "baseball organ", creator: "—", license: "—", sourceUrl: "", notes: "baseball-organ.mp3" },
  { category: "Sound", name: "crowd stomp", creator: "—", license: "—", sourceUrl: "", notes: "crowd-stomp.mp3" },
  { category: "Sound", name: "air horn", creator: "—", license: "—", sourceUrl: "", notes: "air-horn.mp3" },
  { category: "Sound", name: "wilhelm", creator: "—", license: "—", sourceUrl: "", notes: "wilhelm.mp3" },
  { category: "Sound", name: "poof", creator: "—", license: "—", sourceUrl: "", notes: "poof.mp3" },
  { category: "Sound", name: "move", creator: "—", license: "—", sourceUrl: "", notes: "move.mp3" },
  { category: "Sound", name: "visit", creator: "—", license: "—", sourceUrl: "", notes: "visit.mp3" },
];

const NEEDLE_SCALE = 3.5 * (7 / 8);

/** Visit Needle camera: primary directive = exactly 520 ft above sea level, facing the new needle. */
const VISIT_ALTITUDE_ASL_M = 520 * 0.3048; // 158.496 m
/** Fixed close range (m) so visited needle is large in foreground. */
const VISIT_RANGE_M = 200;

// --- Land Value / Build Cost (jokey, deterministic) ---
// Valuation uses a larger "parcel" than the literal model base (land assembly).
const NEEDLE_BASE_RADIUS_M = 60;
const NEEDLE_BASE_AREA_SQFT = Math.PI * NEEDLE_BASE_RADIUS_M ** 2 * 10.7639;
const NEEDLE_BUILD_COST = 350_000_000;
/** Projected additional tourism revenue: range 0.6B–1.4B in city (diminishes with distance); outside city <0.5B. */
const TOURISM_REVENUE_MIN_B = 0.6;
const TOURISM_REVENUE_MAX_B = 1.4;
const TOURISM_FLUCTUATION_B = 0.3;
const TOURISM_OUTSIDE_CITY_MAX_B = 0.5;
const TOURISM_DISTANCE_DECAY_KM = 12;
const SOFT_COST_MULT = 1.25;
const DEFAULT_RATE_PER_SQFT = 900;
const QUANTIZE_GRID = 0.0002;

// --- Land Displaced (visual plaza/podium = ~1 block) — display only, not used for valuation ---
const SQFT_PER_ACRE = 43560;
const NEEDLE_PARCEL_ACRES = 1.75;
const NEEDLE_PARCEL_SQFT = NEEDLE_PARCEL_ACRES * SQFT_PER_ACRE; // 76,230

/** Point-in-polygon (ray casting east). Polygon = array of [lat, lng]. Cast ray at lat; count crossings to the right of lng. */
function pointInPolygon(lat, lng, polygon) {
  const n = polygon.length;
  if (n < 3) return false;
  let inside = false;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const [latI, lngI] = polygon[i];
    const [latJ, lngJ] = polygon[j];
    if (latI === latJ) continue;
    const crossesHorizontal = (latI > lat) !== (latJ > lat);
    const lngCross = lngI + (lngJ - lngI) * (lat - latI) / (latJ - latI);
    if (crossesHorizontal && lngCross > lng) inside = !inside;
  }
  return inside;
}

/** Seattle neighborhood boundaries (GeoJSON). Land inside any neighborhood = crunch. Source: seattleio/seattle-boundaries-data. */
const SEATTLE_NEIGHBORHOODS_GEOJSON_URL =
  "https://raw.githubusercontent.com/seattleio/seattle-boundaries-data/master/data/neighborhoods.geojson";

/** Cached list of neighborhood polygons for point-in-polygon. Each polygon = array of [lat, lng] (from GeoJSON [lng, lat]). */
let seattleNeighborhoodPolygons = null;

function extractPolygonsFromGeoJSON(featureCollection) {
  if (!featureCollection?.features?.length) return [];
  const polygons = [];
  for (const f of featureCollection.features) {
    const g = f.geometry;
    if (!g?.coordinates) continue;
    if (g.type === "Polygon") {
      const ring = g.coordinates[0].map(([lng, lat]) => [lat, lng]);
      if (ring.length >= 3) polygons.push(ring);
    } else if (g.type === "MultiPolygon") {
      for (const ring of g.coordinates.map((c) => c[0].map(([lng, lat]) => [lat, lng]))) {
        if (ring.length >= 3) polygons.push(ring);
      }
    }
  }
  return polygons;
}

function isInSeattleNeighborhood(lat, lng) {
  if (!seattleNeighborhoodPolygons?.length) return false;
  return seattleNeighborhoodPolygons.some((poly) => pointInPolygon(lat, lng, poly));
}

/** Water bounds (axis-aligned). Used only for points NOT inside a Seattle neighborhood; follows that land = neighborhoods. */
const WATER_BOUNDS = [
  { latMin: 47.53, latMax: 47.68, lngMin: -122.48, lngMax: -122.32 },   // Elliott Bay / Puget Sound (generous; land carved out by neighborhoods)
  { latMin: 47.634, latMax: 47.648, lngMin: -122.338, lngMax: -122.318 }, // Lake Union
  { latMin: 47.53, latMax: 47.66, lngMin: -122.318, lngMax: -122.24 },   // Lake Washington
  { latMin: 47.648, latMax: 47.658, lngMin: -122.318, lngMax: -122.298 }, // Union Bay
];

function isInWaterBounds(lat, lng) {
  return WATER_BOUNDS.some(
    (b) => lat >= b.latMin && lat <= b.latMax && lng >= b.lngMin && lng <= b.lngMax
  );
}

/** Land vs water: Seattle neighborhoods (from official GeoJSON) = land (crunch). Water bounds and not in a neighborhood = water (splash). */
function isWaterPlacement(lat, lng, elevation) {
  if (isInSeattleNeighborhood(lat, lng)) return false;
  if (isInWaterBounds(lat, lng)) return true;
  if (elevation !== null && typeof elevation === "number") return elevation <= 1;
  return false;
}

/** UW campus and Husky Stadium (dog-bark drop sound); includes full stadium to the east. */
const UW_CAMPUS_BOUNDS = {
  latMin: 47.6498,
  latMax: 47.6578,
  lngMin: -122.314,
  lngMax: -122.296,
};
function isOnUWCampusOrStadiums(lat, lng) {
  return (
    lat >= UW_CAMPUS_BOUNDS.latMin &&
    lat <= UW_CAMPUS_BOUNDS.latMax &&
    lng >= UW_CAMPUS_BOUNDS.lngMin &&
    lng <= UW_CAMPUS_BOUNDS.lngMax
  );
}

/** Lumen Field (Seahawks) — one block only (crowd-stomp drop sound). */
const LUMEN_FIELD_BOUNDS = {
  latMin: 47.5942,
  latMax: 47.5958,
  lngMin: -122.3328,
  lngMax: -122.3302,
};
function isAtLumenField(lat, lng) {
  return (
    lat >= LUMEN_FIELD_BOUNDS.latMin &&
    lat <= LUMEN_FIELD_BOUNDS.latMax &&
    lng >= LUMEN_FIELD_BOUNDS.lngMin &&
    lng <= LUMEN_FIELD_BOUNDS.lngMax
  );
}

/** T-Mobile Park — full ballpark (baseball-organ drop sound). */
const T_MOBILE_PARK_BOUNDS = {
  latMin: 47.5906,
  latMax: 47.5932,
  lngMin: -122.3348,
  lngMax: -122.3302,
};
function isAtTMobileParkOrAdjacent(lat, lng) {
  return (
    lat >= T_MOBILE_PARK_BOUNDS.latMin &&
    lat <= T_MOBILE_PARK_BOUNDS.latMax &&
    lng >= T_MOBILE_PARK_BOUNDS.lngMin &&
    lng <= T_MOBILE_PARK_BOUNDS.lngMax
  );
}

/** Climate Pledge Arena building only (air-horn); arena footprint only, not fountain. */
const CLIMATE_PLEDGE_ARENA_BOUNDS = {
  latMin: 47.6214,
  latMax: 47.6226,
  lngMin: -122.3542,
  lngMax: -122.3518,
};
function isAtClimatePledgeArena(lat, lng) {
  return (
    lat >= CLIMATE_PLEDGE_ARENA_BOUNDS.latMin &&
    lat <= CLIMATE_PLEDGE_ARENA_BOUNDS.latMax &&
    lng >= CLIMATE_PLEDGE_ARENA_BOUNDS.lngMin &&
    lng <= CLIMATE_PLEDGE_ARENA_BOUNDS.lngMax
  );
}

/** MoPop (Museum of Pop Culture) building footprint only — glass-smash drop sound. */
const MOPOP_BOUNDS = {
  latMin: 47.62115,
  latMax: 47.62163,
  lngMin: -122.34835,
  lngMax: -122.34777,
};
function isAtMoPop(lat, lng) {
  return (
    lat >= MOPOP_BOUNDS.latMin &&
    lat <= MOPOP_BOUNDS.latMax &&
    lng >= MOPOP_BOUNDS.lngMin &&
    lng <= MOPOP_BOUNDS.lngMax
  );
}

/** Chihuly Garden and Glass building footprint only — glass-smash drop sound. */
const CHIHULY_BOUNDS = {
  latMin: 47.61995,
  latMax: 47.62055,
  lngMin: -122.3510,
  lngMax: -122.3504,
};
function isAtChihuly(lat, lng) {
  return (
    lat >= CHIHULY_BOUNDS.latMin &&
    lat <= CHIHULY_BOUNDS.latMax &&
    lng >= CHIHULY_BOUNDS.lngMin &&
    lng <= CHIHULY_BOUNDS.lngMax
  );
}

/** Seattle city limits (approximate bounding box for "inside city" tourism logic). */
const SEATTLE_CITY_LIMITS = {
  latMin: 47.53,
  latMax: 47.68,
  lngMin: -122.44,
  lngMax: -122.25,
};
function isInsideCityLimits(lat, lng) {
  return (
    lat >= SEATTLE_CITY_LIMITS.latMin &&
    lat <= SEATTLE_CITY_LIMITS.latMax &&
    lng >= SEATTLE_CITY_LIMITS.lngMin &&
    lng <= SEATTLE_CITY_LIMITS.lngMax
  );
}

const ZONES = [
  { id: "downtown", name: "Downtown", center: { lat: 47.6097, lng: -122.3331 }, radiusM: 650, ratePerSqFt: 2800 },
  { id: "slu", name: "South Lake Union", center: { lat: 47.6279, lng: -122.3372 }, radiusM: 520, ratePerSqFt: 2200 },
  { id: "belltown", name: "Belltown", center: { lat: 47.6163, lng: -122.3456 }, radiusM: 480, ratePerSqFt: 2500 },
  { id: "queen-anne", name: "Queen Anne", center: { lat: 47.6354, lng: -122.3570 }, radiusM: 600, ratePerSqFt: 1700 },
  { id: "capitol-hill", name: "Capitol Hill", center: { lat: 47.6252, lng: -122.3212 }, radiusM: 580, ratePerSqFt: 1800 },
  { id: "ballard", name: "Ballard", center: { lat: 47.6684, lng: -122.3846 }, radiusM: 550, ratePerSqFt: 1200 },
  { id: "fremont", name: "Fremont", center: { lat: 47.6513, lng: -122.3507 }, radiusM: 400, ratePerSqFt: 1100 },
  { id: "udistrict", name: "U District", center: { lat: 47.6605, lng: -122.3140 }, radiusM: 500, ratePerSqFt: 1000 },
  { id: "magnolia", name: "Magnolia", center: { lat: 47.6397, lng: -122.3992 }, radiusM: 600, ratePerSqFt: 1100 },
  { id: "west-seattle", name: "West Seattle", center: { lat: 47.5652, lng: -122.3868 }, radiusM: 700, ratePerSqFt: 800 },
  { id: "beacon-hill", name: "Beacon Hill", center: { lat: 47.5805, lng: -122.3102 }, radiusM: 500, ratePerSqFt: 700 },
  { id: "rainier-valley", name: "Rainier Valley", center: { lat: 47.5575, lng: -122.2845 }, radiusM: 600, ratePerSqFt: 600 },
  { id: "seattle-center", name: "Seattle Center", center: { lat: 47.6205, lng: -122.3493 }, radiusM: 400, ratePerSqFt: 2000 },
  { id: "first-hill", name: "First Hill", center: { lat: 47.6102, lng: -122.3258 }, radiusM: 380, ratePerSqFt: 1900 },
];

// Calibration hack for MVP: pointer-to-lat/lng without projection API. 1:1 so footprint tracks cursor.
const POINTER_SENSITIVITY = 1;

/**
 * Approximate pointer (container pixel) to lat/lng using map center, range, heading, and tilt.
 * Uses the provided rect (e.g. wrapper) for x/y so footprint uses a consistent coordinate system.
 * Tilt is used so that in Needle View (high tilt) the vertical axis maps to ground distance correctly.
 */
function pixelToApproxLatLng(mapEl, rect, clientX, clientY) {
  if (!rect) return null;
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  if (x < 0 || x > rect.width || y < 0 || y > rect.height) return null;
  const center = mapEl.center;
  const range = mapEl.range ?? 1200;
  if (!center || typeof center.lat !== "number") return null;
  const lat = center.lat;
  const metersPerPx = (range * 2.2) / Math.min(rect.width, rect.height);
  const dx = (x - rect.width / 2) * POINTER_SENSITIVITY;
  let dy = (y - rect.height / 2) * POINTER_SENSITIVITY;
  const tiltDeg = mapEl.tilt ?? 0;
  const tiltRad = (tiltDeg * Math.PI) / 180;
  const yScale = 1 / Math.max(0.25, Math.cos(tiltRad));
  dy *= yScale;
  const headingDeg = mapEl.heading ?? 0;
  const h = (headingDeg * Math.PI) / 180;
  const eastM = (dx * Math.cos(h) - dy * Math.sin(h)) * metersPerPx;
  const northM = (-dx * Math.sin(h) - dy * Math.cos(h)) * metersPerPx;
  const latDelta = (northM * 0.5) / 111320;
  const lngDelta = (eastM * 0.5) / (111320 * Math.cos((lat * Math.PI) / 180));
  return {
    lat: lat + latDelta,
    lng: center.lng + lngDelta,
    altitude: 0,
  };
}

/**
 * Convert lat/lng to container pixel (x,y) for menu/poof anchoring.
 * Uses same math as pixelToApproxLatLng in reverse (including tilt).
 */
function latLngToContainerPixel(mapEl, containerRect, latLng) {
  if (!mapEl || !containerRect || !latLng) return null;
  const center = mapEl.center;
  const range = mapEl.range ?? 1200;
  if (!center || typeof center.lat !== "number") return null;
  const lat = center.lat;
  const metersPerPx = (range * 2.2) / Math.min(containerRect.width, containerRect.height);
  const northM = (latLng.lat - center.lat) * 111320 * 2;
  const eastM = (latLng.lng - center.lng) * (111320 * Math.cos((lat * Math.PI) / 180)) * 2;
  const headingDeg = mapEl.heading ?? 0;
  const h = (headingDeg * Math.PI) / 180;
  let dx = (eastM * Math.cos(h) - northM * Math.sin(h)) / metersPerPx;
  let dy = (-eastM * Math.sin(h) - northM * Math.cos(h)) / metersPerPx;
  const tiltDeg = mapEl.tilt ?? 0;
  const tiltRad = (tiltDeg * Math.PI) / 180;
  const yScale = 1 / Math.max(0.25, Math.cos(tiltRad));
  dy /= yScale;
  const x = containerRect.width / 2 + dx / POINTER_SENSITIVITY;
  const y = containerRect.height / 2 + dy / POINTER_SENSITIVITY;
  return { x, y };
}

/**
 * Project needle lat/lng to wrapper-local pixel coordinates for UI anchoring.
 * Prefers Google Maps projection (OverlayView.getProjection()) when available; else approximate math.
 * Returns {x,y} where (0,0) is top-left of wrapper, or null if projection fails.
 */
function latLngToWrapperPixelWithProjection(mapEl, wrapperEl, latLng, overlayRef) {
  if (!mapEl || !wrapperEl || !latLng) return null;
  const innerMap = mapEl.innerMap;
  const overlay = overlayRef?.current;
  const proj = overlay?.getProjection?.();
  if (innerMap && proj && typeof google !== "undefined" && google.maps?.LatLng) {
    try {
      const latLngObj = new google.maps.LatLng(latLng.lat, latLng.lng);
      const divPixel = proj.fromLatLngToDivPixel(latLngObj);
      if (divPixel == null) return null;
      const innerDiv = innerMap.getDiv();
      if (!innerDiv) return null;
      const innerRect = innerDiv.getBoundingClientRect();
      const wrapperRect = wrapperEl.getBoundingClientRect();
      const wrapperX = innerRect.left - wrapperRect.left + divPixel.x;
      const wrapperY = innerRect.top - wrapperRect.top + divPixel.y;
      return { x: wrapperX, y: wrapperY };
    } catch (e) {
      /* fall through to approximate */
    }
  }
  const wrapperRect = wrapperEl.getBoundingClientRect();
  return latLngToContainerPixel(mapEl, wrapperRect, latLng);
}

/**
 * Convert pointer (clientX/clientY) to lat/lng using OverlayView projection.
 * Pixel frame is the inner map div only; wrapper is not used (use fallback for approximate math).
 * Returns { lat, lng, altitude: 0 } or null.
 */
function wrapperPixelToLatLngWithProjection(mapEl, clientX, clientY, overlayRef) {
  if (!mapEl) return null;
  const innerMap = mapEl.innerMap;
  const overlay = overlayRef?.current;
  const proj = overlay?.getProjection?.();
  if (!innerMap || !proj || typeof google === "undefined" || !google.maps?.Point) return null;

  const mapDiv = innerMap.getDiv?.();
  if (!mapDiv) return null;

  const mapDivRect = mapDiv.getBoundingClientRect();
  const px = clientX - mapDivRect.left;
  const py = clientY - mapDivRect.top;

  if (px < 0 || px > mapDivRect.width || py < 0 || py > mapDivRect.height) return null;

  try {
    const pt = new google.maps.Point(px, py);
    const ll =
      (typeof proj.fromContainerPixelToLatLng === "function" && proj.fromContainerPixelToLatLng(pt)) ||
      (typeof proj.fromDivPixelToLatLng === "function" && proj.fromDivPixelToLatLng(pt));
    if (!ll) return null;
    return { lat: ll.lat(), lng: ll.lng(), altitude: 0 };
  } catch {
    return null;
  }
}

/** Fallback: wrapper-local pixels from approximate inverse math only. */
function latLngToWrapperPixel(mapEl, wrapperEl, latLng) {
  if (!mapEl || !wrapperEl || !latLng) return null;
  const wrapperRect = wrapperEl.getBoundingClientRect();
  return latLngToContainerPixel(mapEl, wrapperRect, latLng);
}

/** Approximate distance in meters between two lat/lng points (Haversine). */
function distanceMeters(a, b) {
  const R = 6371000;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) *
      Math.cos((b.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

/** Deterministic seed from quantized lat/lng to avoid flicker. */
function seedFromQuantizedLatLng(lat, lng) {
  const qLat = Math.round(lat / QUANTIZE_GRID) * QUANTIZE_GRID;
  const qLng = Math.round(lng / QUANTIZE_GRID) * QUANTIZE_GRID;
  const s = `${qLat.toFixed(6)}${qLng.toFixed(6)}`;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Seeded random: returns 0–1, deterministic for same seed. */
function seededRandom(seed) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

/**
 * Projected additional tourism revenue for a needle at (lat, lng).
 * Inside city: 0.6B–1.4B range, ±~0.3 fluctuation, diminished by distance from original Space Needle.
 * Outside city: below 0.5B, continues fluctuating. Returns dollars.
 */
function computeTourismRevenue(lat, lng) {
  const distM = distanceMeters({ lat, lng }, ORIGINAL_NEEDLE_POSITION);
  const distKm = distM / 1000;
  const distanceFactor = Math.max(0.2, 1 - distKm / TOURISM_DISTANCE_DECAY_KM);
  const seed = seedFromQuantizedLatLng(lat, lng);
  const rng = seededRandom(seed);
  const insideCity = isInsideCityLimits(lat, lng);
  let valueB;
  if (insideCity) {
    const base = TOURISM_REVENUE_MIN_B + rng() * (TOURISM_REVENUE_MAX_B - TOURISM_REVENUE_MIN_B);
    const fluct = (rng() - 0.5) * 2 * TOURISM_FLUCTUATION_B;
    valueB = (base + fluct) * distanceFactor;
    valueB = Math.max(0.3, Math.min(TOURISM_REVENUE_MAX_B, valueB));
  } else {
    const base = 0.2 + rng() * (TOURISM_OUTSIDE_CITY_MAX_B - 0.25);
    const fluct = (rng() - 0.5) * 0.2;
    valueB = (base + fluct) * distanceFactor;
    valueB = Math.max(0.05, Math.min(TOURISM_OUTSIDE_CITY_MAX_B, valueB));
  }
  return valueB * 1e9;
}

/**
 * Get land valuation at a point: zone overlap (average rate), deterministic jitter ±5%, soft-cost multiplier.
 * Returns { ratePerSqFt, landValue, neighborhoodLabel }. landValue is "Land Acquisition" (includes assembly/friction).
 */
function getValuationAtLatLng(lat, lng) {
  const hover = { lat, lng };
  const matches = ZONES.filter((z) => distanceMeters(hover, z.center) <= z.radiusM);
  let rate;
  let neighborhoodLabel;
  if (matches.length === 0) {
    rate = DEFAULT_RATE_PER_SQFT;
    neighborhoodLabel = "Seattle (General)";
  } else if (matches.length === 1) {
    rate = matches[0].ratePerSqFt;
    neighborhoodLabel = matches[0].name;
  } else {
    rate = matches.reduce((sum, z) => sum + z.ratePerSqFt, 0) / matches.length;
    neighborhoodLabel = "Border Zone: " + matches.map((z) => z.name).join(" + ");
  }
  const seed = seedFromQuantizedLatLng(lat, lng);
  const r = seededRandom(seed);
  const multiplier = 0.95 + r() * 0.1;
  const finalRate = rate * multiplier;
  const rawLandValue = finalRate * NEEDLE_BASE_AREA_SQFT;
  const landValue = Math.round((rawLandValue * SOFT_COST_MULT) / 10000) * 10000;
  return {
    ratePerSqFt: finalRate,
    landValue,
    neighborhoodLabel,
  };
}

function formatCurrency(n) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

/** Format as $X.XB/year for tourism revenue. */
function formatCurrencyPerYear(n) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B/year`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M/year`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K/year`;
  return `$${n.toFixed(1)}/year`;
}

function formatRate(ratePerSqFt) {
  return `$${Math.round(ratePerSqFt)}/sqft`;
}

/** Animate a number from current value to target over duration ms. Returns current value. */
function useCountUp(target, options = {}) {
  const { duration = 600 } = options;
  const [display, setDisplay] = useState(() => target);
  const displayRef = useRef(target);
  const fromRef = useRef(target);
  const prevTargetRef = useRef(target);
  const rafRef = useRef(null);

  displayRef.current = display;

  useEffect(() => {
    if (target === prevTargetRef.current) return;
    const from = displayRef.current;
    prevTargetRef.current = target;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - t) ** 2;
      const value = from + (target - from) * eased;
      setDisplay(value);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = target;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return display;
}

/**
 * Get ground elevation in meters at a point (for water detection).
 * Returns null if unavailable. Used with neighborhood (land) and water bounds for splash vs crunch.
 */
async function getElevationAt(lat, lng) {
  try {
    const { ElevationService } = await importLibrary("elevation");
    const service = new ElevationService();
    const response = await service.getElevationForLocations({
      locations: [{ lat, lng }],
    });
    if (response?.results?.[0] != null && typeof response.results[0].elevation === "number") {
      return response.results[0].elevation;
    }
  } catch (err) {
    console.warn("Elevation check failed, using land sound:", err?.message);
  }
  return null;
}

/** Bearing in degrees (0–360) from point a to point b (for camera heading so b is "ahead"). */
function bearingDegrees(a, b) {
  const dLon = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const x = Math.sin(dLon) * Math.cos(lat2);
  const y = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  const bearing = (Math.atan2(x, y) * 180) / Math.PI;
  return (bearing + 360) % 360;
}

/** Return true if the pointer/click is on the map surface (not UI or map controls). Used for both click and pointermove. */
function isPointerOnMapSurface(ev) {
  const path = ev.composedPath?.() ?? [];
  return !path.some((el) => {
    if (!el || typeof el.classList?.contains !== "function") return false;
    if (
      el.classList.contains("exhibit-footer") ||
      el.classList.contains("exhibit-legend") ||
      el.classList.contains("exhibit-header") ||
      el.classList.contains("exhibit-buttons-section") ||
      el.classList.contains("exhibit-data") ||
      el.classList.contains("map-overlay") ||
      el.classList.contains("needle-action-menu") ||
      el.classList.contains("needle-exit-view")
    )
      return true;
    if (el.tagName === "BUTTON") return true;
    if (el.classList.contains("gmnoprint")) return true;
    if (el.getAttribute?.("role") === "button") return true;
    return false;
  });
}

function isClickOnMapSurface(ev) {
  return isPointerOnMapSurface(ev);
}

/** Build a circle of LatLngAltitude points for footprint polygon (closed loop). */
function circleCoordinates(centerLat, centerLng, radiusMeters, numPoints) {
  const latDegPerM = 1 / 111320;
  const lngDegPerM = 1 / (111320 * Math.cos((centerLat * Math.PI) / 180));
  const radiusLat = radiusMeters * latDegPerM;
  const radiusLng = radiusMeters * lngDegPerM;
  const coords = [];
  for (let i = 0; i <= numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    coords.push({
      lat: centerLat + radiusLat * Math.cos(angle),
      lng: centerLng + radiusLng * Math.sin(angle),
      altitude: 0,
    });
  }
  return coords;
}

function ensureMapLoaded() {
  if (!window.__TWO_NEEDLES_MAPS3D_PROMISE__) {
    const opts = {
      key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      v: "beta",
    };

    const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;
    if (mapId) opts.mapIds = [mapId];

    setOptions(opts);
    window.__TWO_NEEDLES_MAPS3D_PROMISE__ = importLibrary("maps3d");
  }
  return window.__TWO_NEEDLES_MAPS3D_PROMISE__;
}

export default function MapScene() {
  const [mapLibReady, setMapLibReady] = useState(false);
  const [mapSteady, setMapSteady] = useState(false);
  const [mapError, setMapError] = useState(null);
  const [hoverLatLng, setHoverLatLng] = useState(null);
  const [overlayReady, setOverlayReady] = useState(false);
  const [placements, setPlacements] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isPlacing, setIsPlacing] = useState(true);
  const [pointerOverMap, setPointerOverMap] = useState(false);
  const [hoveredNeedleId, setHoveredNeedleId] = useState(null);
  const [hintNeedleId, setHintNeedleId] = useState(null);
  const [pressAt, setPressAt] = useState(null);
  const [movingNeedleId, setMovingNeedleId] = useState(null);
  const [visitMode, setVisitMode] = useState(false);
  const [poofAt, setPoofAt] = useState(null);
  const [showPlaceAnotherButton, setShowPlaceAnotherButton] = useState(false);
  const [menuAnchorXY, setMenuAnchorXY] = useState(null);
  const [hintPosition, setHintPosition] = useState(null);
  const [anchorsVersion, setAnchorsVersion] = useState(0);
  const [creditsOpen, setCreditsOpen] = useState(false);

  const needleAnchorsRef = useRef(new Map());

  const totalNeedles = 1 + placements.length;
  const countUpNeedles = useCountUp(totalNeedles);
  const countUpAcres = useCountUp(totalNeedles * NEEDLE_PARCEL_ACRES);
  const countUpCost = useCountUp(
    totalNeedles * NEEDLE_BUILD_COST + placements.reduce((sum, p) => sum + (p.landValue ?? 0), 0)
  );
  const totalTourismRevenue = placements.reduce(
    (sum, p) => sum + (p.tourismRevenue ?? computeTourismRevenue(p.lat, p.lng)),
    0
  );
  const countUpRevenue = useCountUp(totalTourismRevenue);

  const mapRef = useRef(null);
  const placementsRef = useRef([]);
  const placeAnotherRevealTimeoutRef = useRef(null);
  const mapWrapperRef = useRef(null);
  const originalNeedleRef = useRef(null);
  const ghostModelRef = useRef(null);
  const footprintRef = useRef(null);
  const hintGlowRef = useRef(null);
  const footprintHighlightRef = useRef(null);
  const crunchAudioRef = useRef(null);
  const glassSmashAudioRef = useRef(null);
  const splashAudioRef = useRef(null);
  const dogBarkAudioRef = useRef(null);
  const baseballOrganAudioRef = useRef(null);
  const crowdStompAudioRef = useRef(null);
  const airHornAudioRef = useRef(null);
  const wilhelmAudioRef = useRef(null);
  const poofAudioRef = useRef(null);
  const moveAudioRef = useRef(null);
  const visitAudioRef = useRef(null);
  const placementCountRef = useRef(0);
  const modelClassRef = useRef(null);
  const placedModelsRef = useRef(new Map());
  const nextPlacementIdRef = useRef(1);
  const hoverLatLngRef = useRef(null);
  const hoveredNeedleIdRef = useRef(null);
  const projectionOverlayRef = useRef(null);
  const projectionReadyRef = useRef(false);

  useEffect(() => {
    hoveredNeedleIdRef.current = hoveredNeedleId;
  }, [hoveredNeedleId]);

  useEffect(() => {
    ensureMapLoaded()
      .then(() => setMapLibReady(true))
      .catch((err) => {
        console.error(err);
        setMapError(err?.message || String(err));
      });
  }, []);

  // Authoritative land/water: load Seattle neighborhood boundaries (land = crunch; water = not in any neighborhood)
  useEffect(() => {
    fetch(SEATTLE_NEIGHBORHOODS_GEOJSON_URL)
      .then((r) => r.json())
      .then((fc) => {
        seattleNeighborhoodPolygons = extractPolygonsFromGeoJSON(fc);
      })
      .catch((err) => console.warn("Seattle neighborhoods GeoJSON load failed, using water bounds only:", err));
  }, []);

  useEffect(() => {
    if (!mapLibReady || !mapRef.current) return;

    const el = mapRef.current;

    // Core camera: oblique view with Belltown/water behind needle, Seattle Center in front
    el.center = SEATTLE_CENTER;
    el.tilt = DEFAULT_TILT;
    el.heading = DEFAULT_HEADING;
    el.range = DEFAULT_RANGE;

    // Required for 3D to render reliably
    el.mode = "HYBRID";

    // Map ID (must exist in the same Google Cloud project as the API key)
    if (import.meta.env.VITE_GOOGLE_MAP_ID) {
      el.mapId = import.meta.env.VITE_GOOGLE_MAP_ID;
    }

    // Sizing
    el.style.width = "100%";
    el.style.height = "100%";

    // Steady-state listeners (some environments fire one but not the other)
    const onSteady = (e) => {
      const isSteady = e?.detail?.isSteady ?? e?.isSteady;
      if (isSteady) setMapSteady(true);
    };

    el.addEventListener("gmp-steadystate", onSteady);
    el.addEventListener("gmp-steadychange", onSteady);

    // Fallback: if it never reports steady, clear loading after a short delay
    const t = window.setTimeout(() => setMapSteady(true), 2500);

    if (el.isSteady) setMapSteady(true);

    return () => {
      window.clearTimeout(t);
      el.removeEventListener("gmp-steadystate", onSteady);
      el.removeEventListener("gmp-steadychange", onSteady);
    };
  }, [mapLibReady]);

  // Create ghost model, footprint polygon, and permanent original needle once map is steady (Model3DElement / Polygon3DElement from maps3d).
  useEffect(() => {
    if (!mapSteady || !mapRef.current || overlayReady) return;
    const mapEl = mapRef.current;
    (async () => {
      try {
        const lib = await importLibrary("maps3d");
        const { Model3DElement, Polygon3DElement } = lib;
        if (Model3DElement) {
          modelClassRef.current = Model3DElement;

          // Permanent original Space Needle at real coordinates (47.6205, -122.3493). Append first so it stays anchored.
          if (originalNeedleRef.current) {
            if (!mapEl.contains(originalNeedleRef.current)) mapEl.appendChild(originalNeedleRef.current);
          } else {
            const originalNeedle = new Model3DElement({
              src: ORIGINAL_NEEDLE_MODEL_SRC,
              position: {
                lat: ORIGINAL_NEEDLE_POSITION.lat,
                lng: ORIGINAL_NEEDLE_POSITION.lng,
                altitude: (ORIGINAL_NEEDLE_POSITION.altitude ?? 0) + ORIGINAL_NEEDLE_ALTITUDE_OFFSET_M,
              },
              scale: NEEDLE_SCALE,
              orientation: { tilt: 270 },
            });
            originalNeedleRef.current = originalNeedle;
            mapEl.appendChild(originalNeedle);
          }

          const ghost = new Model3DElement({
            src: HIGHLIGHT_MODEL_SRC,
            position: SEATTLE_CENTER,
            scale: NEEDLE_SCALE,
            orientation: { tilt: 270 },
          });
          ghostModelRef.current = ghost;
          mapEl.appendChild(ghost);
        } else {
          console.warn("Model3DElement not in maps3d library (try v=alpha). Ghost model disabled.");
        }
        if (Polygon3DElement) {
          const footprint = new Polygon3DElement({
            path: circleCoordinates(
              SEATTLE_CENTER.lat,
              SEATTLE_CENTER.lng,
              FOOTPRINT_RADIUS_M,
              CIRCLE_POINTS
            ),
            fillColor: "rgba(124, 179, 66, 0.25)",
            strokeColor: "rgba(85, 139, 47, 0.8)",
            strokeWidth: 2,
            altitudeMode: "RELATIVE_TO_GROUND",
          });
          footprintRef.current = footprint;
          const hintGlow = new Polygon3DElement({
            path: circleCoordinates(SEATTLE_CENTER.lat, SEATTLE_CENTER.lng, HINT_GLOW_RADIUS_M, CIRCLE_POINTS),
            fillColor: "rgba(224, 162, 26, 0.35)",
            strokeColor: "rgba(224, 162, 26, 0.6)",
            strokeWidth: 2,
            altitudeMode: "RELATIVE_TO_GROUND",
          });
          hintGlowRef.current = hintGlow;
          const footprintHighlight = new Polygon3DElement({
            path: circleCoordinates(SEATTLE_CENTER.lat, SEATTLE_CENTER.lng, FOOTPRINT_RADIUS_M, CIRCLE_POINTS),
            fillColor: "rgba(124, 179, 66, 0.45)",
            strokeColor: "rgba(85, 139, 47, 1)",
            strokeWidth: 3,
            altitudeMode: "RELATIVE_TO_GROUND",
          });
          footprintHighlightRef.current = footprintHighlight;
        } else {
          console.warn("Polygon3DElement missing; footprint disabled.");
        }
        setOverlayReady(true);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [mapSteady, overlayReady]);

  // Pointer move: ghost/footprint and hint. Menu opens when cursor is inside a needle's footprint circle (lat/lng proximity).
  useEffect(() => {
    const wrapper = mapWrapperRef.current;
    const mapEl = mapRef.current;
    if (!wrapper || !mapEl || !overlayReady) return;
    const isOverMenu = (pathOrElements) =>
      pathOrElements.some((el) => el?.classList?.contains?.("needle-action-menu"));
    const onPointerMove = (e) => {
      const path = e.composedPath?.() ?? [];
      const atPoint = typeof document.elementsFromPoint === "function" ? document.elementsFromPoint(e.clientX, e.clientY) : path;
      const overMenu = isOverMenu(path) || isOverMenu(atPoint);
      if (!isPointerOnMapSurface(e)) {
        if (!overMenu) {
          setHoveredNeedleId(null);
          setMenuAnchorXY(null);
        }
        return;
      }
      let pos = wrapperPixelToLatLngWithProjection(mapEl, e.clientX, e.clientY, projectionOverlayRef);
      if (!pos) {
        const rect = wrapper.getBoundingClientRect();
        pos = pixelToApproxLatLng(mapEl, rect, e.clientX, e.clientY);
      }
      hoverLatLngRef.current = pos;
      setHoverLatLng(pos);
      if (!isPlacing && !movingNeedleId && !visitMode) {
        if (overMenu) {
          /* keep current hoveredNeedleId so menu stays open while pointer is on menu */
        } else if (pos && placementsRef.current?.length) {
          const nearest = placementsRef.current.reduce(
            (best, p) => {
              const d = distanceMeters(pos, { lat: p.lat, lng: p.lng });
              return d < best.d ? { id: p.id, d } : best;
            },
            { id: null, d: Infinity }
          );
          if (DEBUG_HOVER && nearest.id != null) {
            console.log("hover pos", pos.lat.toFixed(6), pos.lng.toFixed(6), "nearest.d(m)", nearest.d.toFixed(1), "inside?", nearest.d < FOOTPRINT_RADIUS_M);
          }
          if (nearest.id != null && nearest.d < FOOTPRINT_RADIUS_M) {
            setHoveredNeedleId(nearest.id);
          } else {
            setHoveredNeedleId(null);
            setMenuAnchorXY(null);
          }
        } else {
          setHoveredNeedleId(null);
          setMenuAnchorXY(null);
        }
        if (hoveredNeedleIdRef.current == null && pos) {
          const list = placementsRef.current;
          if (list?.length) {
            const nearest = list.reduce(
              (best, p) => {
                const d = distanceMeters(pos, { lat: p.lat, lng: p.lng });
                return d < best.d ? { id: p.id, d } : best;
              },
              { id: null, d: Infinity }
            );
            if (nearest.id != null && nearest.d < FOOTPRINT_RADIUS_M) {
              const currentHintId = hintNeedleId;
              if (currentHintId == null) {
                setHintNeedleId(nearest.id);
              } else if (nearest.id === currentHintId) {
                setHintNeedleId(nearest.id);
              } else {
                const currentPlacement = list.find((p) => p.id === currentHintId);
                const distToCurrent = currentPlacement ? distanceMeters(pos, { lat: currentPlacement.lat, lng: currentPlacement.lng }) : Infinity;
                if (nearest.d < distToCurrent * 0.75) setHintNeedleId(nearest.id);
              }
            } else setHintNeedleId(null);
          } else setHintNeedleId(null);
        }
      } else setHintNeedleId(null);
    };
    const onPointerLeave = () => {
      hoverLatLngRef.current = null;
      setHoverLatLng(null);
      setHintNeedleId(null);
      setHoveredNeedleId(null);
      setMenuAnchorXY(null);
    };
    wrapper.addEventListener("pointermove", onPointerMove);
    wrapper.addEventListener("pointerleave", onPointerLeave);
    return () => {
      wrapper.removeEventListener("pointermove", onPointerMove);
      wrapper.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [overlayReady, isPlacing, movingNeedleId, visitMode, hoveredNeedleId, hintNeedleId]);

  // Compute hint circle position in layout effect (and on camera/size change) so it never wavers on hover.
  const syncHintPosition = useCallback(() => {
    if (hintNeedleId == null) {
      setHintPosition(null);
      return;
    }
    const mapEl = mapRef.current;
    const wrapper = mapWrapperRef.current;
    const placement = placements.find((p) => p.id === hintNeedleId);
    if (!mapEl || !wrapper || !placement) {
      setHintPosition(null);
      return;
    }
    const rect = wrapper.getBoundingClientRect();
    const xy = latLngToContainerPixel(mapEl, rect, { lat: placement.lat, lng: placement.lng });
    if (xy) setHintPosition(xy);
    else setHintPosition(null);
  }, [hintNeedleId, placements]);

  useLayoutEffect(() => {
    syncHintPosition();
  }, [syncHintPosition]);

  // Update hint position when map camera or wrapper size changes so circle stays over the needle.
  useEffect(() => {
    const mapEl = mapRef.current;
    const wrapper = mapWrapperRef.current;
    if (!mapEl || !wrapper || hintNeedleId == null) return;
    const onCameraChange = () => syncHintPosition();
    mapEl.addEventListener("gmp-centerchange", onCameraChange);
    mapEl.addEventListener("gmp-headingchange", onCameraChange);
    mapEl.addEventListener("gmp-rangechange", onCameraChange);
    const ro = new ResizeObserver(onCameraChange);
    ro.observe(wrapper);
    return () => {
      mapEl.removeEventListener("gmp-centerchange", onCameraChange);
      mapEl.removeEventListener("gmp-headingchange", onCameraChange);
      mapEl.removeEventListener("gmp-rangechange", onCameraChange);
      ro.disconnect();
    };
  }, [hintNeedleId, syncHintPosition]);

  // Screen-space anchors for every placed needle (one source of truth for hit targets and menu position).
  const recomputeNeedleAnchors = useCallback(() => {
    const mapEl = mapRef.current;
    const wrapper = mapWrapperRef.current;
    if (!mapEl || !wrapper) return;
    const anchors = needleAnchorsRef.current;
    anchors.clear();
    for (const p of placements) {
      const xy = latLngToWrapperPixelWithProjection(mapEl, wrapper, { lat: p.lat, lng: p.lng }, projectionOverlayRef);
      if (xy != null) anchors.set(p.id, xy);
    }
    setAnchorsVersion((v) => v + 1);
    setMenuAnchorXY((prev) => {
      if (hoveredNeedleId == null) return null;
      return needleAnchorsRef.current.get(hoveredNeedleId) ?? null;
    });
  }, [placements, hoveredNeedleId]);

  useEffect(() => {
    recomputeNeedleAnchors();
  }, [recomputeNeedleAnchors]);

  useEffect(() => {
    const mapEl = mapRef.current;
    const wrapper = mapWrapperRef.current;
    if (!mapEl || !wrapper) return;
    const onCameraOrResize = () => {
      const anchors = needleAnchorsRef.current;
      anchors.clear();
      for (const p of placements) {
        const xy = latLngToWrapperPixelWithProjection(mapEl, wrapper, { lat: p.lat, lng: p.lng }, projectionOverlayRef);
        if (xy != null) anchors.set(p.id, xy);
      }
      setAnchorsVersion((v) => v + 1);
      setMenuAnchorXY((prev) => (hoveredNeedleId != null ? needleAnchorsRef.current.get(hoveredNeedleId) ?? null : null));
    };
    mapEl.addEventListener("gmp-centerchange", onCameraOrResize);
    mapEl.addEventListener("gmp-headingchange", onCameraOrResize);
    mapEl.addEventListener("gmp-rangechange", onCameraOrResize);
    mapEl.addEventListener("gmp-tiltchange", onCameraOrResize);
    const ro = new ResizeObserver(onCameraOrResize);
    ro.observe(wrapper);
    return () => {
      mapEl.removeEventListener("gmp-centerchange", onCameraOrResize);
      mapEl.removeEventListener("gmp-headingchange", onCameraOrResize);
      mapEl.removeEventListener("gmp-rangechange", onCameraOrResize);
      mapEl.removeEventListener("gmp-tiltchange", onCameraOrResize);
      ro.disconnect();
    };
  }, [placements, hoveredNeedleId]);

  useLayoutEffect(() => {
    setMenuAnchorXY(hoveredNeedleId != null ? needleAnchorsRef.current.get(hoveredNeedleId) ?? null : null);
  }, [hoveredNeedleId]);

  useEffect(() => {
    if (!creditsOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setCreditsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [creditsOpen]);

  // OverlayView projection helper (when Map3DElement exposes innerMap). Uses getProjection().fromLatLngToContainerPixel.
  useEffect(() => {
    if (!mapSteady || !mapRef.current) return;
    const mapEl = mapRef.current;
    const innerMap = mapEl.innerMap;
    if (!innerMap) return;
    importLibrary("maps")
      .then(({ OverlayView }) => {
        class ProjOverlay extends OverlayView {
          onAdd() {}
          draw() {
            projectionReadyRef.current = true;
          }
          onRemove() {
            projectionReadyRef.current = false;
          }
        }
        const ov = new ProjOverlay();
        ov.setMap(innerMap);
        projectionOverlayRef.current = ov;
      })
      .catch(() => {});
  }, [mapSteady]);

  // Click to drop: only on map surface when placing or moving. Click-to-open menu when clicking near a needle.
  // Recompute position from click event so placement is correct in Needle View (avoids stale hover).
  useEffect(() => {
    const wrapper = mapWrapperRef.current;
    const mapEl = mapRef.current;
    if (!wrapper || !mapEl || !overlayReady) return;
    const onClick = async (e) => {
      if (!isClickOnMapSurface(e)) return;
      let atFromClick = wrapperPixelToLatLngWithProjection(mapEl, e.clientX, e.clientY, projectionOverlayRef);
      if (!atFromClick) {
        const rect = wrapper.getBoundingClientRect();
        atFromClick = pixelToApproxLatLng(mapEl, rect, e.clientX, e.clientY);
      }
      const at = atFromClick ?? hoverLatLngRef.current;
      if (!at) return;

      if (movingNeedleId != null) {
        const elevation = await getElevationAt(at.lat, at.lng);
        const isWater = isWaterPlacement(at.lat, at.lng, elevation);
        if (soundEnabled) {
          if (isOnUWCampusOrStadiums(at.lat, at.lng)) {
            const dogEl = dogBarkAudioRef.current;
            if (dogEl) {
              dogEl.volume = 0.9;
              dogEl.currentTime = 0;
              dogEl.play().catch((err) => console.error("audio play failed", err));
            }
          } else if (isAtLumenField(at.lat, at.lng)) {
            const stompEl = crowdStompAudioRef.current;
            if (stompEl) {
              stompEl.volume = 0.9;
              stompEl.currentTime = 0;
              stompEl.play().catch((err) => console.error("audio play failed", err));
            }
          } else if (isAtTMobileParkOrAdjacent(at.lat, at.lng)) {
            const organEl = baseballOrganAudioRef.current;
            if (organEl) {
              organEl.volume = 0.9;
              organEl.currentTime = 0;
              organEl.play().catch((err) => console.error("audio play failed", err));
            }
          } else if (isAtClimatePledgeArena(at.lat, at.lng)) {
            const hornEl = airHornAudioRef.current;
            if (hornEl) {
              hornEl.volume = 0.9;
              hornEl.currentTime = 0;
              hornEl.play().catch((err) => console.error("audio play failed", err));
            }
          } else if (isAtMoPop(at.lat, at.lng) || isAtChihuly(at.lat, at.lng)) {
            const glassEl = glassSmashAudioRef.current;
            if (glassEl) {
              glassEl.volume = 0.9;
              glassEl.currentTime = 0;
              glassEl.play().catch((err) => console.error("audio play failed", err));
            }
          } else if (isWater) {
            const splashEl = splashAudioRef.current;
            if (splashEl) {
              splashEl.volume = 0.9;
              splashEl.currentTime = 0;
              splashEl.play().catch((err) => console.error("audio play failed", err));
            }
          } else {
            const crunchEl = crunchAudioRef.current;
            if (crunchEl) {
              crunchEl.volume = 0.9;
              crunchEl.currentTime = 0;
              crunchEl.play().catch((err) => console.error("audio play failed", err));
            }
          }
        }
        const valuation = getValuationAtLatLng(at.lat, at.lng);
        setPlacements((prev) =>
          prev.map((p) =>
            p.id === movingNeedleId
              ? {
                  ...p,
                  lat: at.lat,
                  lng: at.lng,
                  altitude: at.altitude ?? 0,
                  neighborhoodLabel: valuation.neighborhoodLabel,
                  landValue: valuation.landValue,
                  ratePerSqFt: valuation.ratePerSqFt,
                  tourismRevenue: computeTourismRevenue(at.lat, at.lng),
                }
              : p
          )
        );
        setMovingNeedleId(null);
        setIsPlacing(false);
        return;
      }

      if (!isPlacing && !visitMode) {
        const path = e.composedPath?.() ?? [];
        let needleId = path.find((node) => node?.dataset?.needleId)?.dataset?.needleId;
        if (!needleId && placements.length > 0) {
          const nearest = placements.reduce(
            (best, p) => {
              const d = distanceMeters(at, { lat: p.lat, lng: p.lng });
              return d < best.d ? { id: p.id, d } : best;
            },
            { id: null, d: Infinity }
          );
          if (nearest.id != null && nearest.d < FOOTPRINT_RADIUS_M) needleId = String(nearest.id);
        }
        if (needleId != null) {
          const id = Number(needleId);
          const placement = placements.find((p) => p.id === id);
          if (placement) {
            const mapEl = mapRef.current;
            const rect = wrapper.getBoundingClientRect();
            const xy = mapEl && rect ? latLngToContainerPixel(mapEl, rect, { lat: placement.lat, lng: placement.lng }) : null;
            if (xy) {
              setPressAt({ x: xy.x, y: xy.y });
              setTimeout(() => setPressAt(null), 280);
            }
          }
          setHintNeedleId(null);
          setHoveredNeedleId(id);
          return;
        }
        setHoveredNeedleId(null);
        setMenuAnchorXY(null);
      }

      if (!isPlacing) return;
      const newCount = placementCountRef.current + 1;
      const elevation = await getElevationAt(at.lat, at.lng);
      const isWater = isWaterPlacement(at.lat, at.lng, elevation);
      if (soundEnabled) {
        if (isOnUWCampusOrStadiums(at.lat, at.lng)) {
          const dogEl = dogBarkAudioRef.current;
          if (dogEl) {
            dogEl.volume = 0.9;
            dogEl.currentTime = 0;
            dogEl.play().catch((err) => console.error("audio play failed", err));
          }
        } else if (isAtLumenField(at.lat, at.lng)) {
          const stompEl = crowdStompAudioRef.current;
          if (stompEl) {
            stompEl.volume = 0.9;
            stompEl.currentTime = 0;
            stompEl.play().catch((err) => console.error("audio play failed", err));
          }
        } else if (isAtTMobileParkOrAdjacent(at.lat, at.lng)) {
          const organEl = baseballOrganAudioRef.current;
          if (organEl) {
            organEl.volume = 0.9;
            organEl.currentTime = 0;
            organEl.play().catch((err) => console.error("audio play failed", err));
          }
        } else if (isAtClimatePledgeArena(at.lat, at.lng)) {
          const hornEl = airHornAudioRef.current;
          if (hornEl) {
            hornEl.volume = 0.9;
            hornEl.currentTime = 0;
            hornEl.play().catch((err) => console.error("audio play failed", err));
          }
        } else if (isAtMoPop(at.lat, at.lng) || isAtChihuly(at.lat, at.lng)) {
          const glassEl = glassSmashAudioRef.current;
          if (glassEl) {
            glassEl.volume = 0.9;
            glassEl.currentTime = 0;
            glassEl.play().catch((err) => console.error("audio play failed", err));
          }
        } else if (isWater) {
          const splashEl = splashAudioRef.current;
          if (splashEl) {
            splashEl.volume = 0.9;
            splashEl.currentTime = 0;
            splashEl.play().catch((err) => console.error("audio play failed", err));
          }
        } else {
          const crunchEl = crunchAudioRef.current;
          if (crunchEl) {
            crunchEl.volume = 0.9;
            crunchEl.currentTime = 0;
            crunchEl.play().catch((err) => console.error("audio play failed", err));
          }
          if (newCount >= 5 && (newCount - 5) % 10 === 0) {
            const wilhelmEl = wilhelmAudioRef.current;
            if (wilhelmEl) {
              wilhelmEl.volume = 0.02;
              wilhelmEl.currentTime = 0;
              wilhelmEl.play().catch((err) => console.error("audio play failed", err));
            }
          }
        }
      }
      const valuation = getValuationAtLatLng(at.lat, at.lng);
      setPlacements((prev) => [
        ...prev,
        {
          id: nextPlacementIdRef.current++,
          lat: at.lat,
          lng: at.lng,
          altitude: at.altitude ?? 0,
          neighborhoodLabel: valuation.neighborhoodLabel,
          landValue: valuation.landValue,
          ratePerSqFt: valuation.ratePerSqFt,
          tourismRevenue: computeTourismRevenue(at.lat, at.lng),
        },
      ]);
      setIsPlacing(false);
    };
    wrapper.addEventListener("click", onClick, true);
    return () => wrapper.removeEventListener("click", onClick, true);
  }, [overlayReady, soundEnabled, isPlacing, movingNeedleId, visitMode, placements]);

  // Sync placements to map: one solid Model3DElement per placement (separate from ghost).
  useEffect(() => {
    const mapEl = mapRef.current;
    const ModelClass = modelClassRef.current;
    if (!mapEl || !ModelClass) return;
    const placed = placedModelsRef.current;
    for (const p of placements) {
      if (placed.has(p.id)) continue;
      const el = new ModelClass({
        src: GHOST_MODEL_SRC,
        position: { lat: p.lat, lng: p.lng, altitude: p.altitude ?? 0 },
        scale: NEEDLE_SCALE,
        orientation: { tilt: 270 },
      });
      el.dataset.needleId = String(p.id);
      placed.set(p.id, el);
      mapEl.appendChild(el);
    }
  }, [placements]);

  useEffect(() => {
    placementCountRef.current = placements.length;
    placementsRef.current = placements;
  }, [placements]);

  // Reveal "Place another needle?" 2s after first placement.
  useEffect(() => {
    if (placements.length >= 1 && !showPlaceAnotherButton) {
      placeAnotherRevealTimeoutRef.current = window.setTimeout(() => {
        setShowPlaceAnotherButton(true);
      }, 2000);
    }
    return () => {
      if (placeAnotherRevealTimeoutRef.current) {
        window.clearTimeout(placeAnotherRevealTimeoutRef.current);
        placeAnotherRevealTimeoutRef.current = null;
      }
    };
  }, [placements.length, showPlaceAnotherButton]);

  // Clear poof visual after animation
  useEffect(() => {
    if (!poofAt) return;
    const t = setTimeout(() => setPoofAt(null), 450);
    return () => clearTimeout(t);
  }, [poofAt]);

  // Update ghost position and footprint when hoverLatLng changes; only show when placing (not in visit or move-only).
  useEffect(() => {
    const mapEl = mapRef.current;
    const ghost = ghostModelRef.current;
    const footprint = footprintRef.current;
    if (!mapEl || !footprint) return;
    const showGhost = isPlacing && hoverLatLng;
    if (showGhost) {
      if (ghost) {
        ghost.position = hoverLatLng;
        if (!ghost.parentElement) mapEl.appendChild(ghost);
        ghost.classList?.add?.("needle-model-outlined");
      }
      footprint.path = circleCoordinates(
        hoverLatLng.lat,
        hoverLatLng.lng,
        FOOTPRINT_RADIUS_M,
        CIRCLE_POINTS
      );
      if (!footprint.parentElement) mapEl.appendChild(footprint);
    } else {
      ghost?.classList?.remove?.("needle-model-outlined");
      if (ghost?.parentElement) mapEl.removeChild(ghost);
      if (footprint.parentElement) mapEl.removeChild(footprint);
    }
  }, [isPlacing, hoverLatLng]);

  // Show 3D glow at the needle's exact position when it's the hint target (same node as the needle).
  useEffect(() => {
    const mapEl = mapRef.current;
    const glow = hintGlowRef.current;
    if (!mapEl || !glow) return;
    const showHint = hintNeedleId != null && hoveredNeedleId == null && !isPlacing && !movingNeedleId && !visitMode;
    const placement = showHint ? placements.find((p) => p.id === hintNeedleId) : null;
    if (placement) {
      glow.path = circleCoordinates(placement.lat, placement.lng, HINT_GLOW_RADIUS_M, CIRCLE_POINTS);
      if (!glow.parentElement) mapEl.appendChild(glow);
    } else {
      if (glow.parentElement) mapEl.removeChild(glow);
    }
  }, [hintNeedleId, hoveredNeedleId, isPlacing, movingNeedleId, visitMode, placements]);

  // Green glowing footprint when cursor is over a needle's footprint circle; menu is for that needle.
  useEffect(() => {
    const mapEl = mapRef.current;
    const highlight = footprintHighlightRef.current;
    if (!mapEl || !highlight) return;
    const show = hoveredNeedleId != null && !isPlacing && !movingNeedleId && !visitMode;
    const placement = show ? placements.find((p) => p.id === hoveredNeedleId) : null;
    if (placement) {
      highlight.path = circleCoordinates(placement.lat, placement.lng, FOOTPRINT_RADIUS_M, CIRCLE_POINTS);
      if (!highlight.parentElement) mapEl.appendChild(highlight);
    } else {
      if (highlight.parentElement) mapEl.removeChild(highlight);
    }
  }, [hoveredNeedleId, isPlacing, movingNeedleId, visitMode, placements]);

  // Blue-tinted model and outline for the hovered needle; default model when set in place.
  useEffect(() => {
    const placed = placedModelsRef.current;
    const hoveredId = hoveredNeedleId != null && !isPlacing && !movingNeedleId && !visitMode ? hoveredNeedleId : null;
    placed.forEach((el, id) => {
      if (!el) return;
      const useHighlight = id === hoveredId;
      if (el.src !== undefined) el.src = useHighlight ? HIGHLIGHT_MODEL_SRC : GHOST_MODEL_SRC;
      if (el?.classList != null) {
        if (useHighlight) el.classList.add("needle-model-outlined");
        else el.classList.remove("needle-model-outlined");
      }
    });
  }, [hoveredNeedleId, isPlacing, movingNeedleId, visitMode]);

  const showLoading = !mapLibReady || !mapSteady;

  const unlockAudio = () => {
    const crunchEl = crunchAudioRef.current;
    if (crunchEl) {
      crunchEl.volume = 0;
      crunchEl.play().then(() => { crunchEl.pause(); crunchEl.currentTime = 0; }).catch((err) => console.error("audio play failed", err));
    }
    const glassEl = glassSmashAudioRef.current;
    if (glassEl) {
      glassEl.volume = 0;
      glassEl.play().then(() => { glassEl.pause(); glassEl.currentTime = 0; }).catch((err) => console.error("audio play failed", err));
    }
    const wilhelmEl = wilhelmAudioRef.current;
    if (wilhelmEl) {
      wilhelmEl.volume = 0;
      wilhelmEl.play().then(() => { wilhelmEl.pause(); wilhelmEl.currentTime = 0; }).catch((err) => console.error("audio play failed", err));
    }
    const moveEl = moveAudioRef.current;
    if (moveEl) {
      moveEl.volume = 0;
      moveEl.play().then(() => { moveEl.pause(); moveEl.currentTime = 0; }).catch((err) => console.error("audio play failed", err));
    }
    const visitEl = visitAudioRef.current;
    if (visitEl) {
      visitEl.volume = 0;
      visitEl.play().then(() => { visitEl.pause(); visitEl.currentTime = 0; }).catch((err) => console.error("audio play failed", err));
    }
    const poofEl = poofAudioRef.current;
    if (poofEl) {
      poofEl.volume = 0;
      poofEl.play().then(() => { poofEl.pause(); poofEl.currentTime = 0; }).catch((err) => console.error("audio play failed", err));
    }
  };

  const onEnableSound = () => {
    unlockAudio();
    setSoundEnabled(true);
  };

  const onDisableSound = () => {
    unlockAudio();
    setSoundEnabled(false);
  };

  const onRemoveNeedle = (id) => {
    if (soundEnabled && poofAudioRef.current) {
      poofAudioRef.current.volume = 0.6;
      poofAudioRef.current.currentTime = 0;
      poofAudioRef.current.play().catch((err) => console.error("poof play failed", err));
    }
    const mapEl = mapRef.current;
    const wrapper = mapWrapperRef.current;
    const placement = placements.find((p) => p.id === id);
    const willHaveNoNeedles = placements.filter((p) => p.id !== id).length === 0;
    setPlacements((prev) => prev.filter((p) => p.id !== id));
    const el = placedModelsRef.current.get(id);
    if (el?.parentElement) el.parentElement.removeChild(el);
    placedModelsRef.current.delete(id);
    if (placement && mapEl && wrapper) {
      const rect = wrapper.getBoundingClientRect();
      const xy = latLngToContainerPixel(mapEl, rect, { lat: placement.lat, lng: placement.lng });
      if (xy) setPoofAt({ x: xy.x, y: xy.y });
    }
    setHoveredNeedleId(null);
    setMenuAnchorXY(null);
    if (willHaveNoNeedles) setIsPlacing(true);
  };

  const onMoveNeedle = (id) => {
    if (soundEnabled && moveAudioRef.current) {
      moveAudioRef.current.volume = 0.5;
      moveAudioRef.current.currentTime = 0;
      moveAudioRef.current.play().catch((err) => console.error("move play failed", err));
    }
    const el = placedModelsRef.current.get(id);
    if (el?.parentElement) el.parentElement.removeChild(el);
    placedModelsRef.current.delete(id);
    setMovingNeedleId(id);
    setIsPlacing(true);
    setHoveredNeedleId(null);
    setMenuAnchorXY(null);
  };

  const onVisitNeedle = (id) => {
    const placement = placements.find((p) => p.id === id);
    const mapEl = mapRef.current;
    if (!placement || !mapEl) return;
    if (soundEnabled && visitAudioRef.current) {
      visitAudioRef.current.volume = 0.5;
      visitAudioRef.current.currentTime = 0;
      visitAudioRef.current.play().catch((err) => console.error("visit play failed", err));
    }
    setHoveredNeedleId(null);
    setMenuAnchorXY(null);
    setVisitMode(true);
    const visited = { lat: placement.lat, lng: placement.lng };
    const original = { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng };
    const bearingToOther = bearingDegrees(visited, original);
    // Directive 1: Camera at exactly 520 ft ASL, facing the new needle. Directive 2 (if possible): original in background — small heading offset to keep it in frame.
    const VISIT_HEADING_OFFSET_DEG = 15;
    const heading = (bearingToOther + VISIT_HEADING_OFFSET_DEG + 360) % 360;
    const endCamera = {
      center: { lat: placement.lat, lng: placement.lng, altitude: VISIT_ALTITUDE_ASL_M },
      tilt: 82,
      range: VISIT_RANGE_M,
      heading,
    };
    if (typeof mapEl.flyCameraTo === "function") {
      mapEl.flyCameraTo({
        endCamera,
        durationMillis: 1800,
      });
    } else {
      mapEl.center = endCamera.center;
      mapEl.tilt = endCamera.tilt;
      mapEl.range = endCamera.range;
      mapEl.heading = endCamera.heading;
    }
  };

  const onExitVisit = () => {
    const mapEl = mapRef.current;
    if (mapEl) {
      mapEl.center = SEATTLE_CENTER;
      mapEl.tilt = DEFAULT_TILT;
      mapEl.heading = DEFAULT_HEADING;
      mapEl.range = DEFAULT_RANGE;
    }
    setVisitMode(false);
  };

  const onClearNeedles = () => {
    if (soundEnabled && poofAudioRef.current) {
      poofAudioRef.current.volume = 0.6;
      poofAudioRef.current.currentTime = 0;
      poofAudioRef.current.play().catch((err) => console.error("poof play failed", err));
    }
    const mapEl = mapRef.current;
    const placed = placedModelsRef.current;
    placed.forEach((el) => {
      if (el?.parentElement) el.parentElement.removeChild(el);
    });
    placed.clear();
    setPlacements([]);
    setMovingNeedleId(null);
    setHoveredNeedleId(null);
    setVisitMode(false);
    setShowPlaceAnotherButton(false);
    setIsPlacing(true);
    if (mapEl) {
      mapEl.center = SEATTLE_CENTER;
      mapEl.tilt = DEFAULT_TILT;
      mapEl.heading = DEFAULT_HEADING;
      mapEl.range = DEFAULT_RANGE;
    }
  };

  return (
    <div className="exhibit-page">
      <audio ref={crunchAudioRef} src="/audio/crunch.mp3" preload="auto" />
      <audio ref={glassSmashAudioRef} src="/audio/glass-smash.mp3" preload="auto" />
      <audio ref={splashAudioRef} src="/audio/splash.mp3" preload="auto" />
      <audio ref={dogBarkAudioRef} src="/audio/dog-bark.mp3" preload="auto" />
      <audio ref={baseballOrganAudioRef} src="/audio/baseball-organ.mp3" preload="auto" />
      <audio ref={crowdStompAudioRef} src="/audio/crowd-stomp.mp3" preload="auto" />
      <audio ref={airHornAudioRef} src="/audio/air-horn.mp3" preload="auto" />
      <audio ref={wilhelmAudioRef} src="/audio/wilhelm.mp3" preload="auto" />
      <audio ref={poofAudioRef} src="/audio/poof.mp3" preload="auto" />
      <audio ref={moveAudioRef} src="/audio/move.mp3" preload="auto" />
      <audio ref={visitAudioRef} src="/audio/visit.mp3" preload="auto" />
      <button
        type="button"
        className="exhibit-sound-toggle"
        onClick={soundEnabled ? onDisableSound : onEnableSound}
      >
        {soundEnabled ? "Mute" : "Enable Sound"}
      </button>
      <div className="exhibit-panel">
        <span className="exhibit-registration-top-left" aria-hidden="true" />
        <span className="exhibit-registration-top-right" aria-hidden="true" />
        <span className="exhibit-registration-bottom-left" aria-hidden="true" />
        <span className="exhibit-registration-bottom-right" aria-hidden="true" />
        <header className="exhibit-header">
          <h1 className="exhibit-title">PLACE NEEDLES</h1>
          <p className="exhibit-subhead">
            A civic expansion simulator by{" "}
            <a
              href="https://www.twospaceneedles.com"
              target="_blank"
              rel="noopener noreferrer"
              className="exhibit-header-link"
            >
              the campaign for Two Space Needles
            </a>.
          </p>
          <p className="exhibit-instructions">
            Click to place your new Space Needle. Observe civic impact.
          </p>
        </header>
        <div className="exhibit-viewport">
          <div
            ref={mapWrapperRef}
            className={`exhibit-viewport-inner${isPlacing && pointerOverMap ? " is-placing" : ""}`}
            onPointerEnter={() => setPointerOverMap(true)}
            onPointerLeave={() => setPointerOverMap(false)}
          >
            {mapLibReady && (
              <gmp-map-3d
                ref={mapRef}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                }}
              />
            )}
            <div className="needle-ui-overlay" aria-hidden="true">
            {(() => {
              const showHint = hintNeedleId != null && hoveredNeedleId == null && !isPlacing && !movingNeedleId && !visitMode;
              const hintPlacement = showHint ? placements.find((p) => p.id === hintNeedleId) : null;
              return (
                <>
                  {/* Invisible hit area at same position as 3D glow (glow is at needle node in 3D scene) */}
                  {showHint && hintPlacement && hintPosition && (
                    <div
                      className="needle-click-hint needle-click-hint-hit-only"
                      aria-label="Click to open needle menu"
                      data-needle-id={hintPlacement.id}
                      style={{
                        position: "absolute",
                        left: hintPosition.x,
                        top: hintPosition.y,
                        transform: "translate(-50%, -50%)",
                        zIndex: 9996,
                      }}
                    />
                  )}
                  {pressAt && (
                    <div
                      className="needle-click-press"
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: pressAt.x,
                        top: pressAt.y,
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        zIndex: 9997,
                      }}
                    />
                  )}
                </>
              );
            })()}
            {(() => {
              const showMenu = hoveredNeedleId != null && !isPlacing && !movingNeedleId && !visitMode;
              const placement = showMenu ? placements.find((p) => p.id === hoveredNeedleId) : null;
              const wrapper = mapWrapperRef.current;
              const anchor = showMenu ? menuAnchorXY : null;
              const rect = wrapper?.getBoundingClientRect?.();
              const inBounds =
                anchor != null &&
                Number.isFinite(anchor.x) &&
                Number.isFinite(anchor.y) &&
                rect != null &&
                anchor.x >= 0 &&
                anchor.y >= 0 &&
                anchor.x <= rect.width &&
                anchor.y <= rect.height;
              return (
                showMenu &&
                placement &&
                anchor &&
                inBounds && (
                  <div
                    className="needle-action-menu"
                    style={{
                      position: "absolute",
                      left: anchor.x,
                      top: anchor.y,
                      transform: "translate(12px, -12px)",
                      pointerEvents: "auto",
                      zIndex: 9998,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                    }}
                  >
                    <button type="button" onClick={() => onMoveNeedle(hoveredNeedleId)}>
                      Move Needle
                    </button>
                    {placements.length > 1 && (
                      <button
                        type="button"
                        className="exhibit-btn-destructive"
                        onClick={() => onRemoveNeedle(hoveredNeedleId)}
                      >
                        Remove Needle
                      </button>
                    )}
                    <button type="button" onClick={() => onVisitNeedle(hoveredNeedleId)}>
                      Visit Needle
                    </button>
                  </div>
                )
              );
            })()}
            {poofAt && (
              <div
                className="needle-poof"
                aria-hidden
                style={{
                  position: "absolute",
                  left: poofAt.x,
                  top: poofAt.y,
                  transform: "translate(-50%, -50%)",
                  width: 60,
                  height: 60,
                  pointerEvents: "none",
                  zIndex: 9997,
                }}
              />
            )}
            </div>
          </div>
          {visitMode && (
            <button
              type="button"
              className="needle-exit-view exhibit-btn-primary map-overlay"
              style={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 100,
                pointerEvents: "auto",
              }}
              onClick={onExitVisit}
            >
              Exit View
            </button>
          )}
          {showLoading && (
            <div className="exhibit-loading-overlay map-overlay">
              Loading map…
            </div>
          )}
          {mapError && (
            <div className="exhibit-error-overlay map-overlay">
              <div className="exhibit-error-title">Map load error</div>
              <div>{mapError}</div>
            </div>
          )}
        </div>
        <div className="exhibit-buttons-section">
          <button
            type="button"
            className="exhibit-btn-clear"
            disabled={placements.length < 1}
            onClick={() => {
              if (placements.length < 1) return;
              onClearNeedles();
            }}
          >
            Erase Needles
          </button>
          <button
            type="button"
            className="exhibit-place-another"
            disabled={(placements.length < 1 && !isPlacing) || movingNeedleId != null}
            onClick={() => {
              if ((placements.length < 1 && !isPlacing) || movingNeedleId != null) return;
              setIsPlacing(true);
            }}
          >
            Place Needle
          </button>
        </div>
        <div className="exhibit-data">
          <div className="exhibit-live-estimate">
            <h3>LIVE ESTIMATE</h3>
            {(() => {
              const placingValuation =
                isPlacing && hoverLatLng
                  ? getValuationAtLatLng(hoverLatLng.lat, hoverLatLng.lng)
                  : null;
              const activePlacement =
                !isPlacing && !movingNeedleId && !visitMode && hoveredNeedleId != null
                  ? placements.find((p) => p.id === hoveredNeedleId)
                  : null;
              return (
                <>
                  <div className="exhibit-live-row">
                    <span className="exhibit-live-label">Neighborhood</span>
                    <span className="exhibit-live-value">
                      {placingValuation
                        ? placingValuation.neighborhoodLabel
                        : activePlacement
                          ? activePlacement.neighborhoodLabel
                          : "—"}
                    </span>
                  </div>
                  <div className="exhibit-live-row">
                    <span className="exhibit-live-label">Land Acquisition</span>
                    <span className="exhibit-live-value">
                      {placingValuation
                        ? formatCurrency(placingValuation.landValue)
                        : activePlacement != null && activePlacement.landValue != null
                          ? formatCurrency(activePlacement.landValue)
                          : "—"}
                    </span>
                  </div>
                  <div className="exhibit-live-row">
                    <span className="exhibit-live-label">Rate</span>
                    <span className="exhibit-live-value">
                      {placingValuation
                        ? formatRate(placingValuation.ratePerSqFt)
                        : activePlacement != null && activePlacement.ratePerSqFt != null
                          ? formatRate(activePlacement.ratePerSqFt)
                          : "—"}
                    </span>
                  </div>
                </>
              );
            })()}
          </div>
          <div className="exhibit-civic">
            <h3>CIVIC IMPACT</h3>
            <div className="exhibit-civic-row">
              <span className="exhibit-civic-label">Needles Constructed</span>
              <span className="exhibit-civic-value">{Math.round(countUpNeedles)}</span>
            </div>
            <div className="exhibit-civic-row">
              <span className="exhibit-civic-label">Land Required</span>
              <span className="exhibit-civic-value">
                {countUpAcres.toFixed(2)} acres
              </span>
            </div>
            <div className="exhibit-civic-row">
              <span className="exhibit-civic-label">Estimated Total Cost</span>
              <span className="exhibit-civic-value">
                {formatCurrency(countUpCost)}
              </span>
            </div>
            <div className="exhibit-civic-row">
              <span className="exhibit-civic-label">Projected Tourism Revenue</span>
              <span className="exhibit-civic-value">
                {formatCurrencyPerYear(countUpRevenue)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="exhibit-credits-button"
        onClick={() => setCreditsOpen(true)}
        aria-label="Open credits"
      >
        Credits
      </button>
      {creditsOpen && (
        <>
          <div
            className="exhibit-credits-backdrop"
            aria-hidden
            onClick={() => setCreditsOpen(false)}
          />
          <div className="exhibit-credits-modal" role="dialog" aria-labelledby="credits-title" aria-modal="true">
            <div className="exhibit-credits-modal-inner">
              <div className="exhibit-credits-modal-header">
                <h2 id="credits-title" className="exhibit-credits-modal-title">Credits</h2>
                <button
                  type="button"
                  className="exhibit-credits-modal-close"
                  onClick={() => setCreditsOpen(false)}
                  aria-label="Close credits"
                >
                  ×
                </button>
              </div>
              <div className="exhibit-credits-modal-body">
                {["3D Model", "Sound"].map((cat) => (
                  <section key={cat} className="exhibit-credits-section">
                    <h3 className="exhibit-credits-category">{cat}</h3>
                    <ul className="exhibit-credits-list">
                      {CREDITS.filter((c) => c.category === cat).map((c, i) => (
                        <li key={`${cat}-${i}`} className="exhibit-credits-item">
                          <span className="exhibit-credits-name">{c.name}</span>
                          {c.creator && <span className="exhibit-credits-creator">{c.creator}</span>}
                          {c.license && <span className="exhibit-credits-license">{c.license}</span>}
                          {c.sourceUrl && (
                            <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="exhibit-credits-link">Source</a>
                          )}
                          {c.notes && <span className="exhibit-credits-notes">{c.notes}</span>}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}