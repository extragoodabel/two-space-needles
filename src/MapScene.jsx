import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import * as THREE from "three";

/** Real Space Needle, Seattle Center (400 Broad St) — single source of truth for map center and default needle. */
const SEATTLE_CENTER = { lat: 47.6205, lng: -122.3493, altitude: 0 };
const ORIGINAL_NEEDLE_POSITION = { lat: 47.6205, lng: -122.3493, altitude: 0 };
/** Sentinel id for the original needle (used for menu/data box when it is highlighted). */
const ORIGINAL_NEEDLE_ID = 0;

/** Default map view: oblique aerial, Belltown/water behind needle, Seattle Center in front. */
const DEFAULT_TILT = 67;
const DEFAULT_HEADING = 230; /* opposite side of needle, Belltown behind */
const DEFAULT_RANGE = 900;

// Footprint ~400 ft radius (SPEC). In meters for polygon radius.
const FOOTPRINT_RADIUS_M = 122;
const CIRCLE_POINTS = 32;
/** Set true to log pointer->latLng and nearest.d in console for hover debugging. */
const DEBUG_HOVER = false;
/** Set true to log one line per placeholder render: visited lat/lng, sceneContext, zone, heading, needles, env counts. */
const DEBUG_PLACEHOLDER_ENV = false;
/** Cap on env meshes (buildings, trees, POIs) in placeholder scene; addEnv() enforces this when used. */
const MAX_ENV_MESHES = 60;
/** Min angular separation (deg) between needles in photo frame; camera yaw is nudged so stacked needles separate. */
const PHOTO_MIN_SEPARATION_DEG = 10;
/** Oblique offset (deg) so camera is never collinear with featured–original; enforces triangle, no stacking. */
const PHOTO_OBLIQUE_OFFSET_DEG = 20;

/** Seeded PRNG (mulberry32) for deterministic placeholder env placement. Same seed => same sequence in [0,1). */
function mulberry32(seed) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Z bands for placeholder env: foreground (sparse), midground, background, farBackground (mountains). Needles at/near 0. */
function getPlaceholderZBands() {
  return {
    foregroundZ: { min: -55, max: -20 },
    midgroundZ: { min: -120, max: -55 },
    backgroundZ: { min: -240, max: -120 },
    farBackgroundZ: { min: -350, max: -240 },
  };
}

const PLACEHOLDER_NO_SPAWN_RADIUS = 12;

/** Nudge (x,z) outward if inside no-spawn radius so env does not occlude featured needle. */
function clampOutOfNoSpawnRadius(x, z, minRadius = PLACEHOLDER_NO_SPAWN_RADIUS) {
  const r2 = x * x + z * z;
  if (r2 < minRadius * minRadius && r2 > 0) {
    const r = Math.sqrt(r2);
    const scale = (minRadius + 1) / r;
    return { x: x * scale, z: z * scale };
  }
  return { x, z };
}

/**
 * Simple water detection for placeholder. Bounding boxes only.
 * Returns { isWaterZone, isCoastlineZone, waterType } with waterType one of
 * "puget_sound" | "lake_union" | "lake_washington" | null.
 */
function getWaterProximity(lat, lng) {
  const la = Number(lat);
  const ln = Number(lng);
  let isWaterZone = false;
  let isCoastlineZone = false;
  let waterType = null;
  if (la >= 47.58 && la <= 47.65 && ln >= -122.42 && ln <= -122.34) {
    waterType = "puget_sound";
    isWaterZone = true;
  }
  if (la >= 47.618 && la <= 47.648 && ln >= -122.345 && ln <= -122.318) {
    waterType = "lake_union";
    isWaterZone = true;
  }
  if (la >= 47.52 && la <= 47.68 && ln >= -122.32 && ln <= -122.22) {
    waterType = "lake_washington";
    isWaterZone = true;
  }
  if (la >= 47.598 && la <= 47.622 && ln >= -122.362 && ln <= -122.338) {
    isCoastlineZone = true;
    if (!waterType) waterType = "puget_sound";
  }
  return { isWaterZone, isCoastlineZone, waterType };
}

/** Placeholder env: buildingStyle (tall/medium/small), parkFactor (0–1), no new data sources. */
const NEIGHBORHOOD_ZONES = [
  { name: "downtown", latMin: 47.605, latMax: 47.613, lngMin: -122.346, lngMax: -122.330, buildingStyle: "tall", parkFactor: 0 },
  { name: "belltown", latMin: 47.612, latMax: 47.619, lngMin: -122.358, lngMax: -122.342, buildingStyle: "medium", parkFactor: 0 },
  { name: "south_lake_union", latMin: 47.616, latMax: 47.626, lngMin: -122.340, lngMax: -122.330, buildingStyle: "tall", parkFactor: 0.2 },
  { name: "queen_anne", latMin: 47.633, latMax: 47.644, lngMin: -122.365, lngMax: -122.345, buildingStyle: "small", parkFactor: 0.3 },
  { name: "capitol_hill", latMin: 47.618, latMax: 47.636, lngMin: -122.325, lngMax: -122.298, buildingStyle: "small", parkFactor: 0.4 },
  { name: "volunteer_park", latMin: 47.628, latMax: 47.633, lngMin: -122.321, lngMax: -122.314, buildingStyle: "small", parkFactor: 1 },
  { name: "green_lake", latMin: 47.675, latMax: 47.684, lngMin: -122.335, lngMax: -122.318, buildingStyle: "small", parkFactor: 1 },
  { name: "ballard", latMin: 47.664, latMax: 47.672, lngMin: -122.388, lngMax: -122.370, buildingStyle: "medium", parkFactor: 0.2 },
  { name: "freemont", latMin: 47.648, latMax: 47.656, lngMin: -122.358, lngMax: -122.345, buildingStyle: "medium", parkFactor: 0.3 },
  { name: "u_district", latMin: 47.654, latMax: 47.664, lngMin: -122.322, lngMax: -122.308, buildingStyle: "medium", parkFactor: 0.2 },
  { name: "seattle_center_park", latMin: 47.619, latMax: 47.622, lngMin: -122.354, lngMax: -122.348, buildingStyle: "small", parkFactor: 0.7 },
  { name: "sodo", latMin: 47.578, latMax: 47.592, lngMin: -122.338, lngMax: -122.318, buildingStyle: "medium", parkFactor: 0 },
  { name: "georgetown", latMin: 47.548, latMax: 47.558, lngMin: -122.332, lngMax: -122.318, buildingStyle: "small", parkFactor: 0.2 },
];
const DEFAULT_ZONE_RULES = { buildingStyle: "medium", parkFactor: 0.2 };

function getPlaceholderZoneRules(lat, lng) {
  const la = Number(lat);
  const ln = Number(lng);
  for (const z of NEIGHBORHOOD_ZONES) {
    if (la >= z.latMin && la <= z.latMax && ln >= z.lngMin && ln <= z.lngMax) {
      return { buildingStyle: z.buildingStyle, parkFactor: z.parkFactor, zoneName: z.name };
    }
  }
  return { ...DEFAULT_ZONE_RULES };
}

/** Placeholder zone category for env rules: downtown, residential, park, waterfront, stadium, general. */
function getPlaceholderZoneCategory(zoneRules, sceneContext, showWater) {
  const ctx = (sceneContext ?? "").toLowerCase();
  if (ctx === "stadiums") return "stadium";
  if ((ctx === "waterfront" || ctx === "ferris_wheel") && showWater) return "waterfront";
  const parkFactor = zoneRules.parkFactor ?? 0.2;
  if (parkFactor >= 0.7) return "park";
  const style = zoneRules.buildingStyle ?? "medium";
  const name = (zoneRules.zoneName ?? "").toLowerCase();
  if (style === "tall" || name === "downtown" || name === "belltown" || name === "south_lake_union") return "downtown";
  if (style === "small" || style === "medium") return "residential";
  return "general";
}

/** Building height range by zone category (hMin, hMax). */
function getPlaceholderBuildingHeightRange(category) {
  switch (category) {
    case "downtown": return { hMin: 20, hMax: 40 };
    case "residential": return { hMin: 6, hMax: 14 };
    case "park": return { hMin: 4, hMax: 8 };
    default: return null;
  }
}

/** Building profile: tallNarrow, mediumBlock, wideLow. Returns { w, d } footprint scale. */
function pickBuildingProfile(rng) {
  const t = rng();
  if (t < 0.33) return { w: 0.7, d: 1.1 };
  if (t < 0.66) return { w: 1, d: 1 };
  return { w: 1.4, d: 0.8 };
}
/** Radius (m) of the 3D glow at the needle base when it's the hint target. Same "node" as the needle. */
const HINT_GLOW_RADIUS_M = 20;

// Model paths: default (set in place), blue-tinted (placing / moving / highlighted), permanent original at Seattle Center.
const GHOST_MODEL_SRC = "/models/space-needle-park.glb";
const HIGHLIGHT_MODEL_SRC = "/models/low_poly_space_needle.glb";
/** Permanent original Space Needle at Seattle Center — original GLB model. */
const ORIGINAL_NEEDLE_MODEL_SRC = GHOST_MODEL_SRC;
/** Altitude offset (m) for original needle so it aligns with footprint; tune if the GLB origin is not at the base. */
const ORIGINAL_NEEDLE_ALTITUDE_OFFSET_M = 0;

/** Third-party asset credits. Sources: Pixabay, Freesound, Sketchfab. */
const CREDITS = [
  { category: "3D Model", name: "Space Needle", creator: "Microsoft", license: "Sketchfab", sourceUrl: "", notes: "space-needle (default)" },
  { category: "3D Model", name: "Low Poly Space Needle", creator: "Mejje mobile coffee", license: "Sketchfab", sourceUrl: "", notes: "low_poly_space_needle.glb" },
  { category: "Sound", name: "Dog Bark", creator: "Dragon Studio", license: "Pixabay", sourceUrl: "", notes: "Free Dog Bark" },
  { category: "Sound", name: "Crowd Stomp", creator: "Djart music", license: "Pixabay", sourceUrl: "", notes: "Powerful Stomps Claps Cheering (Sport Rhythmic Applause)" },
  { category: "Sound", name: "Baseball organ", creator: "Freesound Community", license: "Freesound", sourceUrl: "", notes: "baseball cavalry sting short sustain 80564" },
  { category: "Sound", name: "Musical saw hit", creator: "Freesound Community", license: "Freesound", sourceUrl: "", notes: "81382" },
  { category: "Sound", name: "Crunch", creator: "Freesound Community", license: "Freesound", sourceUrl: "", notes: "plastic crunch 83779" },
  { category: "Sound", name: "Poof", creator: "Freesound Community", license: "Freesound", sourceUrl: "", notes: "poof of smoke 87381" },
  { category: "Sound", name: "Splash", creator: "Freesound Community", license: "Freesound", sourceUrl: "", notes: "6213" },
  { category: "Sound", name: "Wilhelm", creator: "Freesound Community", license: "Freesound", sourceUrl: "", notes: "wilhelm 1 86895" },
  { category: "Sound", name: "Glass smash", creator: "Freesound Community", license: "Freesound", sourceUrl: "", notes: "6266" },
  { category: "Sound", name: "Camera", creator: "Irinairinafomicheva", license: "Freesound", sourceUrl: "", notes: "13695" },
  { category: "Sound", name: "Percussive hit 02", creator: "Freesound Community", license: "Freesound", sourceUrl: "", notes: "105799" },
];

const NEEDLE_SCALE = 3.5 * (7 / 8);

/** View Mode elevation lock: deck height 520 ft. Only camera elevation is overridden; horizontal position and orientation unchanged. */
const VIEW_ELEVATION_FT = 520;
const VIEW_ELEVATION_M = 158.5; // 520 * 0.3048
/** Fixed close range (m) so visited needle is large in foreground. */
const VISIT_RANGE_M = 200;
/** View Mode fixed tilt (deck view). */
const VISIT_TILT = 82;
/** Fly duration and settling buffer before we treat user as "arrived" and enable exit-on-movement. */
const VIEW_MODE_FLY_DURATION_MS = 1800;
const VIEW_MODE_FLY_SETTLE_MS = 250;
/** Movement detection: if camera drifts more than this from arrival pose, exit View Mode (no snap). */
const VIEW_MODE_MOVE_CENTER_EPSILON_DEG = 0.0001;
const VIEW_MODE_MOVE_RANGE_M = 5;
const VIEW_MODE_MOVE_TILT_DEG = 1;
const VIEW_MODE_MOVE_HEADING_DEG = 2;

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

/** MoPop (Museum of Pop Culture) — glass-smash drop sound; bounds expanded to cover full building. */
const MOPOP_BOUNDS = {
  latMin: 47.62105,
  latMax: 47.62173,
  lngMin: -122.34845,
  lngMax: -122.34767,
};
function isAtMoPop(lat, lng) {
  return (
    lat >= MOPOP_BOUNDS.latMin &&
    lat <= MOPOP_BOUNDS.latMax &&
    lng >= MOPOP_BOUNDS.lngMin &&
    lng <= MOPOP_BOUNDS.lngMax
  );
}

/** Chihuly Garden and Glass — glass-smash drop sound; small footprint close to building. */
const CHIHULY_BOUNDS = {
  latMin: 47.61998,
  latMax: 47.62048,
  lngMin: -122.35095,
  lngMax: -122.35048,
};
function isAtChihuly(lat, lng) {
  return (
    lat >= CHIHULY_BOUNDS.latMin &&
    lat <= CHIHULY_BOUNDS.latMax &&
    lng >= CHIHULY_BOUNDS.lngMin &&
    lng <= CHIHULY_BOUNDS.lngMax
  );
}

/** Pacific Science Center — glass-smash drop sound; small footprint close to building. */
const PACIFIC_SCIENCE_CENTER_BOUNDS = {
  latMin: 47.61928,
  latMax: 47.61968,
  lngMin: -122.35108,
  lngMax: -122.35052,
};
function isAtPacificScienceCenter(lat, lng) {
  return (
    lat >= PACIFIC_SCIENCE_CENTER_BOUNDS.latMin &&
    lat <= PACIFIC_SCIENCE_CENTER_BOUNDS.latMax &&
    lng >= PACIFIC_SCIENCE_CENTER_BOUNDS.lngMin &&
    lng <= PACIFIC_SCIENCE_CENTER_BOUNDS.lngMax
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
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
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

/** Format lat/lng with degree symbol and N/S, E/W. Optional separator (default ", "; use " · " for postcard style). */
function formatLatLngDirectional(lat, lng, separator = ", ") {
  const la = Number(lat);
  const lo = Number(lng);
  const latDir = la >= 0 ? "N" : "S";
  const lngDir = lo >= 0 ? "E" : "W";
  const latStr = `${Math.abs(la).toFixed(5)}° ${latDir}`;
  const lngStr = `${Math.abs(lo).toFixed(5)}° ${lngDir}`;
  return `${latStr}${separator}${lngStr}`;
}

function formatCoordLabel(lat, lng) {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(Number(lat)).toFixed(5)}° ${latDir}, ${Math.abs(Number(lng)).toFixed(5)}° ${lngDir}`;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function downloadPostcardJpg(polaroid) {
  if (!polaroid?.dataUrl) return;

  const [img, logoImg] = await Promise.all([
    loadImage(polaroid.dataUrl),
    loadImage("/eg_logo_postcard.png").catch(() => null),
  ]);

  const W = 1600;
  const H = 1200;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const bg = "#f6f4ef";
  const white = "#ffffff";
  const ink = "#111111";
  const muted = "rgba(17,17,17,0.75)";

  const margin = 70;
  const infoBlockH = 220;
  const framePad = 24;

  const frameX = margin;
  const frameY = margin;
  const frameW = W - margin * 2;
  const frameH = H - margin * 2 - infoBlockH;

  const photoX = frameX + framePad;
  const photoY = frameY + framePad;
  const photoW = frameW - framePad * 2;
  const photoH = frameH - framePad * 2;

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = white;
  ctx.fillRect(frameX, frameY, frameW, frameH);

  const imgAR = img.width / img.height;
  const boxAR = photoW / photoH;

  let sx = 0; let sy = 0; let sw = img.width; let sh = img.height;

  if (imgAR > boxAR) {
    sh = img.height;
    sw = sh * boxAR;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / boxAR;
    sx = 0;
    sy = (img.height - sh) / 2;
  }

  ctx.drawImage(img, sx, sy, sw, sh, photoX, photoY, photoW, photoH);

  const blockX = margin;
  const blockY = frameY + frameH;
  const blockW = frameW;
  const blockH = infoBlockH;

  ctx.fillStyle = white;
  ctx.fillRect(blockX, blockY, blockW, blockH);

  const needleNum = polaroid.needleNumber ?? polaroid.needleId ?? "";
  const coord = formatCoordLabel(polaroid.lat ?? 0, polaroid.lng ?? 0);

  const leftX = blockX + 34;
  const rightX = blockX + blockW - 34;
  const topLineY = blockY + 72;

  ctx.fillStyle = ink;
  ctx.font = "600 34px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.fillText(`Greetings from Space Needle #${needleNum}`, leftX, topLineY);

  ctx.fillStyle = muted;
  ctx.font = "500 26px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
  ctx.fillText(coord, leftX, topLineY + 40);

  ctx.fillStyle = ink;
  ctx.font = "600 24px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
  ctx.fillText("twospaceneedles.org | @twospaceneedles", leftX, blockY + blockH - 44);

  ctx.textAlign = "right";
  if (logoImg && logoImg.width > 0 && logoImg.height > 0) {
    const logoH = 48;
    const logoW = (logoImg.width / logoImg.height) * logoH;
    ctx.drawImage(logoImg, rightX - logoW, topLineY - logoH, logoW, logoH);
  } else {
    ctx.fillStyle = ink;
    ctx.font = "800 30px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
    ctx.fillText("EXTRA GOOD", rightX, topLineY);
  }

  ctx.fillStyle = muted;
  ctx.font = "600 24px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
  ctx.fillText("extragood.studio | @extragood.studio", rightX, blockY + blockH - 44);

  const jpgUrl = canvas.toDataURL("image/jpeg", 0.92);

  const a = document.createElement("a");
  a.href = jpgUrl;
  a.download = `two-space-needles-postcard-needle-${needleNum}.jpg`;
  document.body.appendChild(a);
  a.click();
  a.remove();
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

/** Smallest angle difference in degrees between two headings (0–360). */
function smallestAngleDiff(a, b) {
  let d = Math.abs((a % 360) - (b % 360));
  if (d > 180) d = 360 - d;
  return d;
}

/**
 * Generate an instant placeholder polaroid image using an offscreen Three.js scene.
 * Scene: sky gradient (fog), ground, simple city silhouettes, two Space Needle proxies.
 * Visited needle at origin; original needle placed by bearing/distance (scaled down).
 * Returns PNG data URL. Optional vignette applied for camera aesthetic.
 */
function generatePlaceholderPolaroid(metadata, width = 1200, height = 900) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xb8d4e8);
  const fogNear = 80;
  const fogFar = 320;
  scene.fog = new THREE.Fog(0xcccccc, fogNear, fogFar);

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 500);
  const visitedLat = metadata.visitedLat ?? 47.62;
  const visitedLng = metadata.visitedLng ?? -122.35;
  const originalLat = metadata.originalLat ?? 47.6205;
  const originalLng = metadata.originalLng ?? -122.3493;
  const metadataHeading = metadata.cameraHeading ?? 0;
  const MAX_DISTANCE_M = 12000;
  /** Meters to scene units: 1 unit ≈ 20m so 600m → 30 units, 3km → 150 units (visible space between needles). */
  const metersToUnits = 1 / 20;
  const scaleDown = metersToUnits;
  const maxScaledDist = MAX_DISTANCE_M * metersToUnits;
  const visibleNeedles = metadata.visibleNeedles ?? [];
  const zoneRules = getPlaceholderZoneRules(visitedLat, visitedLng);

  const visited = { lat: visitedLat, lng: visitedLng };
  const original = { lat: originalLat, lng: originalLng };
  const hasOriginal = visibleNeedles.some((n) => n.needleId === ORIGINAL_NEEDLE_ID);
  const viewDirDeg =
    hasOriginal && (originalLat !== visitedLat || originalLng !== visitedLng)
      ? bearingDegrees(visited, original)
      : Math.round(Number(metadataHeading) / 30) * 30;
  let bearingRad = ((360 - viewDirDeg) * Math.PI) / 180;

  function allowedFOVDeg(distanceMeters) {
    if (distanceMeters <= 750) return 180;
    if (distanceMeters <= 1500) return 95;
    return 70;
  }

  const featuredEntry = visibleNeedles[0];
  const needlesInFrame = [];
  if (featuredEntry) needlesInFrame.push(featuredEntry);
  const originalFromList = visibleNeedles.find((n) => n.needleId === ORIGINAL_NEEDLE_ID);
  const others = visibleNeedles.slice(1).filter((e) => e.needleId !== ORIGINAL_NEEDLE_ID);
  const inPlane = others.filter((entry) => {
    const dist = entry.distanceMeters ?? 0;
    const bearing = entry.bearingDeg ?? 0;
    const angleDiff = smallestAngleDiff(bearing, viewDirDeg);
    return dist <= MAX_DISTANCE_M && angleDiff <= allowedFOVDeg(dist);
  });
  if (originalFromList != null) {
    needlesInFrame.push(originalFromList);
  }
  const sorted = [...inPlane].sort((a, b) => (a.distanceMeters ?? 0) - (b.distanceMeters ?? 0));
  const mustInclude = sorted.filter((e) => (e.distanceMeters ?? 0) <= 2000);
  const nearest10 = sorted.filter((e) => !mustInclude.includes(e)).slice(0, 10);
  const added = new Set(needlesInFrame.map((n) => n.needleId));
  for (const e of mustInclude) {
    if (!added.has(e.needleId)) {
      needlesInFrame.push(e);
      added.add(e.needleId);
    }
  }
  for (const e of nearest10) {
    if (!added.has(e.needleId)) {
      needlesInFrame.push(e);
      added.add(e.needleId);
    }
  }
  needlesInFrame.sort((a, b) => (a.distanceMeters ?? 0) - (b.distanceMeters ?? 0));

  const bearingFO = viewDirDeg;
  const origInFrame = needlesInFrame.find((n) => n.needleId === ORIGINAL_NEEDLE_ID);
  const testDist = 55;
  const sideForHeading = (headingDeg) => {
    if (origInFrame == null) return "right";
    const br = ((360 - headingDeg) * Math.PI) / 180;
    const oBr = ((origInFrame.bearingDeg ?? 0) * Math.PI) / 180;
    const oD = Math.min(maxScaledDist, (origInFrame.distanceMeters ?? 0) * scaleDown);
    const oX = Math.sin(oBr) * oD;
    const oZ = -Math.cos(oBr) * oD;
    const cX = Math.sin(br) * testDist;
    const cZ = Math.cos(br) * testDist;
    const toX = oX - cX;
    const toZ = oZ - cZ;
    const rightX = Math.cos(br);
    const rightZ = -Math.sin(br);
    return toX * rightX + toZ * rightZ >= 0 ? "right" : "left";
  };
  const headingPlus = (bearingFO + PHOTO_OBLIQUE_OFFSET_DEG + 360) % 360;
  const headingMinus = (bearingFO - PHOTO_OBLIQUE_OFFSET_DEG + 360) % 360;
  let finalHeading = sideForHeading(headingPlus) === "left" ? headingPlus : headingMinus;
  const otherBearings = needlesInFrame.slice(1).map((n) => (n.bearingDeg ?? 0) % 360);
  let minSeparationDeg = otherBearings.length >= 2 ? 360 : 0;
  if (otherBearings.length >= 2) {
    let bestI = 0;
    let bestJ = 1;
    for (let i = 0; i < otherBearings.length; i++) {
      for (let j = i + 1; j < otherBearings.length; j++) {
        const sep = smallestAngleDiff(otherBearings[i], otherBearings[j]);
        if (sep < minSeparationDeg) {
          minSeparationDeg = sep;
          bestI = i;
          bestJ = j;
        }
      }
    }
    if (minSeparationDeg < PHOTO_MIN_SEPARATION_DEG) {
      const a = otherBearings[bestI];
      const b = otherBearings[bestJ];
      let mid = (a + b) / 2;
      if (Math.abs(a - b) > 180) mid = (mid + 180) % 360;
      const midHeading = (mid + 360) % 360;
      if (sideForHeading(midHeading) === "left" || origInFrame == null) finalHeading = midHeading;
    }
  }
  bearingRad = ((360 - finalHeading) * Math.PI) / 180;

  const hasVisibleList = needlesInFrame.length > 0;

  const headingBucket = Math.round(Number(viewDirDeg) / 30) * 30;
  const seed =
    (Math.round(visitedLat * 10000) * 10000 + Math.round(visitedLng * 10000)) ^ (headingBucket + 1);
  const rng = mulberry32(seed);

  let envCount = 0;
  const addEnv = (mesh) => {
    if (envCount >= MAX_ENV_MESHES) return false;
    scene.add(mesh);
    envCount++;
    return true;
  };

  const ambient = new THREE.AmbientLight(0xffffff, 0.55);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xfff5e6, 0.85);
  sun.position.set(80, 120, 60);
  sun.castShadow = false;
  scene.add(sun);

  const groundColor =
    (zoneRules.parkFactor ?? 0) >= 0.6 ||
    zoneRules.zoneName === "seattle_center_park" ||
    (Math.abs(visitedLat - SEATTLE_CENTER.lat) < 0.002 && Math.abs(visitedLng - SEATTLE_CENTER.lng) < 0.002)
      ? 0x5a8a5a
      : 0x7a9e7e;
  const groundGeo = new THREE.PlaneGeometry(400, 400);
  const groundMat = new THREE.MeshLambertMaterial({ color: groundColor });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.5;
  scene.add(ground);

  const bands = getPlaceholderZBands();
  const waterProximity = getWaterProximity(visitedLat, visitedLng);
  const { isWaterZone, isCoastlineZone, waterType } = waterProximity;
  if (isWaterZone || isCoastlineZone) {
    const waterZ = (bands.backgroundZ.min + bands.backgroundZ.max) / 2;
    const waterGeo = new THREE.PlaneGeometry(500, 180);
    const waterMat = new THREE.MeshLambertMaterial({ color: 0x3a6f98 });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, -2, waterZ);
    scene.add(water);
    if (isCoastlineZone || waterType === "puget_sound") {
      const shoreZ = bands.backgroundZ.max;
      const shoreGeo = new THREE.PlaneGeometry(500, 10);
      const shoreMat = new THREE.MeshLambertMaterial({ color: 0x5a6a5a });
      const shore = new THREE.Mesh(shoreGeo, shoreMat);
      shore.rotation.x = -Math.PI / 2;
      shore.position.set(0, -1.5, shoreZ);
      scene.add(shore);
    }
  }
  const showWater = isWaterZone || isCoastlineZone;
  const shoreZ = showWater ? bands.backgroundZ.max : null;
  const waterRegion = showWater
    ? { zMin: bands.backgroundZ.min, zMax: bands.backgroundZ.max }
    : null;
  const isInWaterRegion = (x, z) =>
    waterRegion != null && z >= waterRegion.zMin && z <= waterRegion.zMax;
  const sceneContext = metadata.sceneContext ?? "seattle_general";
  const zoneCategory = getPlaceholderZoneCategory(zoneRules, sceneContext, showWater);
  const zoneHeightRange = getPlaceholderBuildingHeightRange(zoneCategory);

  const style = zoneRules.buildingStyle ?? "medium";
  const parkFactor = zoneRules.parkFactor ?? 0.2;
  const styleConfig = {
    tall: { skyline: 6, mid: 12, backH: 28, hMin: 18, hMax: 32, footW: 14, footD: 10 },
    medium: { skyline: 2, mid: 10, backH: 16, hMin: 8, hMax: 18, footW: 10, footD: 8 },
    small: { skyline: 0, mid: 10, backH: 0, hMin: 4, hMax: 10, footW: 8, footD: 6 },
  };
  const cfg = styleConfig[style] ?? styleConfig.medium;
  let nBuild = cfg.skyline + cfg.mid;
  if (parkFactor >= 0.7) nBuild = Math.min(nBuild, 5);

  const farBg = bands.farBackgroundZ;
  if (farBg && envCount < MAX_ENV_MESHES) {
    const mountainMat = new THREE.MeshLambertMaterial({ color: 0x9aabbc });
    const nMountains = 5;
    for (let i = 0; i < nMountains && envCount < MAX_ENV_MESHES; i++) {
      const height = 12 + rng() * 10;
      const radius = 24 + rng() * 20;
      const coneGeo = new THREE.ConeGeometry(radius, height, 8);
      const mountain = new THREE.Mesh(coneGeo, mountainMat);
      const z = farBg.min + rng() * (farBg.max - farBg.min);
      const x = (rng() - 0.5) * 160;
      mountain.position.set(x, height / 2 + (rng() - 0.5) * 2, z);
      if (addEnv(mountain)) {}
    }
  }

  const cityMat = new THREE.MeshLambertMaterial({ color: 0x4a5568 });
  const vegMat = new THREE.MeshLambertMaterial({ color: 0x2d5a2d });
  const MAX_PLACEMENT_ATTEMPTS = 5;
  const midZ = (bands.midgroundZ.min + bands.midgroundZ.max) / 2;
  const backZ = (bands.backgroundZ.min + bands.backgroundZ.max) / 2;
  let towerGeo = null;

  const MAX_BUILDINGS = 14;
  const MAX_TREES = 14;
  const MAX_SHRUBS = 6;
  let buildIdx = 0;
  const isPikePlace = sceneContext === "pike_place";
  if (cfg.skyline > 0 && !showWater && !isPikePlace) {
    for (let i = 0; i < cfg.skyline && envCount < MAX_ENV_MESHES && buildIdx < MAX_BUILDINGS; i++) {
      const x = (i % 2 === 0 ? -1 : 1) * (25 + rng() * 20);
      let z = backZ + (rng() - 0.5) * 30;
      z = Math.max(bands.backgroundZ.min, Math.min(z, bands.backgroundZ.max));
      const out = clampOutOfNoSpawnRadius(x, z);
      const profile = pickBuildingProfile(rng);
      let backH = zoneCategory === "downtown" && zoneHeightRange
        ? zoneHeightRange.hMin + rng() * (zoneHeightRange.hMax - zoneHeightRange.hMin)
        : cfg.backH;
      const footW = Math.max(4, Math.round(cfg.footW * profile.w));
      const footD = Math.max(4, Math.round(cfg.footD * profile.d));
      const g = new THREE.BoxGeometry(footW, backH, footD);
      const m = new THREE.Mesh(g, cityMat);
      m.position.set(out.x, backH / 2, out.z);
      m.rotation.y = (rng() - 0.5) * 0.4;
      if (addEnv(m)) buildIdx++;
    }
  }
  const midCount = isPikePlace ? 12 : cfg.mid;
  for (let i = 0; i < midCount && envCount < MAX_ENV_MESHES && buildIdx < MAX_BUILDINGS; i++) {
    let x, z, h, footW, footD;
    if (isPikePlace) {
      x = (rng() - 0.5) * 40;
      z = midZ + (rng() - 0.5) * 28;
      h = 4 + (i % 3) * 2;
      footW = 8;
      footD = 6;
    } else {
      x = (i % 6 - 2.5) * 45 + (i % 3) * 8;
      z = -90 - Math.floor(i / 6) * 35 - (i % 2) * 15;
      if (zoneHeightRange) {
        h = zoneHeightRange.hMin + rng() * (zoneHeightRange.hMax - zoneHeightRange.hMin);
      } else {
        h = cfg.hMin + rng() * (cfg.hMax - cfg.hMin);
      }
      const profile = pickBuildingProfile(rng);
      footW = Math.max(4, Math.round(cfg.footW * profile.w));
      footD = Math.max(4, Math.round(cfg.footD * profile.d));
    }
    z = Math.max(bands.backgroundZ.min, Math.min(z, bands.midgroundZ.max));
    if (showWater) {
      z = Math.max(bands.backgroundZ.max + 5, z);
      z = Math.min(z, bands.midgroundZ.max);
    }
    let attempts = 0;
    while (showWater && isInWaterRegion(x, z) && attempts < MAX_PLACEMENT_ATTEMPTS) {
      x = -40 + rng() * 80;
      z = bands.backgroundZ.max + 5 + rng() * (bands.midgroundZ.max - bands.backgroundZ.max - 10);
      attempts++;
    }
    if (showWater && isInWaterRegion(x, z)) continue;
    const out = clampOutOfNoSpawnRadius(x, z);
    const g = new THREE.BoxGeometry(footW, h, footD);
    const m = new THREE.Mesh(g, cityMat);
    m.position.set(out.x, h / 2, out.z);
    if (!isPikePlace) m.rotation.y = (rng() - 0.5) * 0.4;
    if (addEnv(m)) buildIdx++;
  }

  if ((style === "tall" || style === "medium") && !showWater && envCount < MAX_ENV_MESHES) {
    const th = style === "tall" ? 38 : 24;
    towerGeo = new THREE.BoxGeometry(14, th, 12);
    const towerOut = clampOutOfNoSpawnRadius(55, -140);
    const tower = new THREE.Mesh(towerGeo, cityMat);
    tower.position.set(towerOut.x, th / 2, towerOut.z);
    addEnv(tower);
    if (envCount < MAX_ENV_MESHES) {
      const tower2Out = clampOutOfNoSpawnRadius(-50, -130);
      const tower2 = new THREE.Mesh(towerGeo.clone(), cityMat);
      tower2.position.set(tower2Out.x, th / 2, tower2Out.z);
      addEnv(tower2);
    }
  }

  if (sceneContext === "stadiums" && envCount < MAX_ENV_MESHES) {
    const stadiumZ = (bands.midgroundZ.max + bands.backgroundZ.min) / 2 - 8;
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(32, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.2),
      new THREE.MeshLambertMaterial({ color: 0x5a5a62 })
    );
    dome.position.set(-58, 16, stadiumZ);
    addEnv(dome);
  }

  if ((sceneContext === "waterfront" || sceneContext === "ferris_wheel") && showWater && shoreZ != null && envCount < MAX_ENV_MESHES) {
    const pierMat = new THREE.MeshLambertMaterial({ color: 0x5a4a3a });
    const pierZBase = shoreZ - 12;
    for (let i = 0; i < 4 && envCount < MAX_ENV_MESHES; i++) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(80, 1.5, 6), pierMat);
      pier.position.set(-35 + i * 26, 0.75, pierZBase - i * 20);
      addEnv(pier);
    }
  }

  if (sceneContext === "ferris_wheel" && envCount < MAX_ENV_MESHES) {
    const wheelZ = showWater && shoreZ != null ? shoreZ + 10 : bands.backgroundZ.max - 20;
    const wheel = new THREE.Mesh(
      new THREE.TorusGeometry(18, 1.2, 8, 24),
      new THREE.MeshLambertMaterial({ color: 0x2a2a2a })
    );
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(32, 20, wheelZ);
    addEnv(wheel);
  }

  if (envCount < MAX_ENV_MESHES) {
    const landmarkMat = new THREE.MeshLambertMaterial({ color: 0x5a5a52 });
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(6, 7, 14, 8), landmarkMat);
    cyl.position.set(-70 + rng() * 40, 7, backZ - 20);
    const cylOut = clampOutOfNoSpawnRadius(cyl.position.x, cyl.position.z);
    cyl.position.set(cylOut.x, 7, cylOut.z);
    if (addEnv(cyl) && envCount < MAX_ENV_MESHES) {
      const boxLandmark = new THREE.Mesh(new THREE.BoxGeometry(10, 8, 6), landmarkMat);
      boxLandmark.position.set(50 - rng() * 30, 4, backZ - 30);
      const boxOut = clampOutOfNoSpawnRadius(boxLandmark.position.x, boxLandmark.position.z);
      boxLandmark.position.set(boxOut.x, 4, boxOut.z);
      boxLandmark.rotation.y = (rng() - 0.5) * 0.3;
      addEnv(boxLandmark);
    }
  }

  let nTrees = style === "tall" ? 4 : style === "medium" ? 8 : 14;
  if (parkFactor >= 0.6) nTrees += 10;
  nTrees = Math.min(nTrees, MAX_TREES);
  const treeConeGeo = new THREE.ConeGeometry(4, 10, 6);
  const treeTrunkGeo = new THREE.CylinderGeometry(0.5, 0.7, 2, 6);
  for (let i = 0; i < nTrees && envCount < MAX_ENV_MESHES; i++) {
    const x = -50 + rng() * 100;
    const z = midZ + (rng() - 0.5) * 50;
    const out = clampOutOfNoSpawnRadius(x, z);
    const coneScale = 0.7 + rng() * 0.6;
    const treeGroup = new THREE.Group();
    const trunk = new THREE.Mesh(treeTrunkGeo, vegMat);
    trunk.position.y = 1;
    treeGroup.add(trunk);
    const cone = new THREE.Mesh(treeConeGeo, vegMat);
    cone.position.y = 2 + 5 * coneScale;
    cone.scale.setScalar(coneScale);
    treeGroup.add(cone);
    treeGroup.position.set(out.x, 0, out.z);
    if (addEnv(treeGroup)) {}
  }

  const shrubMat = new THREE.MeshLambertMaterial({ color: 0x2a4a2a });
  const nShrubs = Math.min(parkFactor >= 0.5 ? 8 : 4, MAX_SHRUBS);
  const shrubSphereGeo = new THREE.SphereGeometry(2, 6, 5);
  const shrubConeGeo = new THREE.ConeGeometry(1.5, 3, 5);
  for (let i = 0; i < nShrubs && envCount < MAX_ENV_MESHES; i++) {
    const x = (rng() - 0.5) * 100;
    const z = Math.max(bands.midgroundZ.min, bands.midgroundZ.max * 0.3 + rng() * (bands.midgroundZ.max - bands.midgroundZ.min) * 0.7);
    const out = clampOutOfNoSpawnRadius(x, z);
    const isSphere = rng() < 0.6;
    const shrub = new THREE.Mesh(isSphere ? shrubSphereGeo : shrubConeGeo, shrubMat);
    const scale = 0.8 + rng() * 0.6;
    shrub.scale.setScalar(scale);
    shrub.position.set(out.x, (isSphere ? 2 : 1.5) * scale, out.z);
    if (addEnv(shrub)) {}
  }

  const MUTED_NEEDLE_COLOR = 0x6b7b8b;
  function lerpColor(hexFrom, hexTo, t) {
    t = Math.max(0, Math.min(1, t));
    const r1 = (hexFrom >> 16) & 0xff;
    const g1 = (hexFrom >> 8) & 0xff;
    const b1 = hexFrom & 0xff;
    const r2 = (hexTo >> 16) & 0xff;
    const g2 = (hexTo >> 8) & 0xff;
    const b2 = hexTo & 0xff;
    return (
      (Math.round(r1 + (r2 - r1) * t) << 16) |
      (Math.round(g1 + (g2 - g1) * t) << 8) |
      Math.round(b1 + (b2 - b1) * t)
    );
  }

  function needleDetailLevel(distanceMeters) {
    if (distanceMeters > 9000) return "silhouette";
    if (distanceMeters > 6000) return "simplified";
    return "full";
  }

  function makeNeedleMesh(detailLevel, color = 0x2c5282) {
    const group = new THREE.Group();
    if (detailLevel === "silhouette") {
      const coneGeo = new THREE.CylinderGeometry(0.8, 2.2, 28, 6);
      const coneMat = new THREE.MeshLambertMaterial({ color });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.position.y = 14;
      group.add(cone);
      const diskGeo = new THREE.CylinderGeometry(4, 4, 0.6, 8);
      const diskMat = new THREE.MeshLambertMaterial({ color: lerpColor(0xe2e8f0, color, 0.3) });
      const disk = new THREE.Mesh(diskGeo, diskMat);
      disk.position.y = 28.6;
      group.add(disk);
      return group;
    }
    const shaftGeo = new THREE.CylinderGeometry(1.2, 2.2, 28, detailLevel === "simplified" ? 6 : 8);
    const shaftMat = new THREE.MeshLambertMaterial({ color });
    const shaft = new THREE.Mesh(shaftGeo, shaftMat);
    shaft.position.y = 14;
    group.add(shaft);
    const saucerGeo = new THREE.CylinderGeometry(4.5, 4.8, 1.2, detailLevel === "simplified" ? 8 : 16);
    const saucerMat = new THREE.MeshLambertMaterial({ color: 0xe2e8f0 });
    const saucer = new THREE.Mesh(saucerGeo, saucerMat);
    saucer.position.y = 28.6;
    group.add(saucer);
    if (detailLevel === "full") {
      const rimGeo = new THREE.TorusGeometry(5, 0.4, 8, 24);
      const rimMat = new THREE.MeshLambertMaterial({ color: 0xcbd5e0 });
      const rim = new THREE.Mesh(rimGeo, rimMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 29.2;
      group.add(rim);
      const spireGeo = new THREE.CylinderGeometry(0.15, 0.2, 6, 6);
      const spireMat = new THREE.MeshLambertMaterial({ color: 0x4a5568 });
      const spire = new THREE.Mesh(spireGeo, spireMat);
      spire.position.y = 31.2;
      group.add(spire);
    }
    return group;
  }

  const needleScaleFromDistanceM = (distanceMeters) =>
    Math.max(0.12, Math.min(1, 1 - (distanceMeters / MAX_DISTANCE_M) * 0.85));

  const needleColors = [0x2c5282, 0x1e4d6b, 0x2563a8, 0x1e3a5f, 0x334d6b, 0x2d4a6e];
  let countFull = 0;
  let countSimplified = 0;
  let countSilhouette = 0;
  const distancesInFrame = [];

  if (hasVisibleList) {
    needlesInFrame.forEach((entry, i) => {
      const distM = entry.distanceMeters ?? 0;
      distancesInFrame.push(distM);
      const baseColor = needleColors[i % needleColors.length];
      const colorT = Math.min(1, (distM / MAX_DISTANCE_M) * 0.7);
      const color = distM === 0 ? baseColor : lerpColor(baseColor, MUTED_NEEDLE_COLOR, colorT);
      const detail = needleDetailLevel(distM);
      if (detail === "full") countFull++;
      else if (detail === "simplified") countSimplified++;
      else countSilhouette++;
      const needleMesh = makeNeedleMesh(detail, color);
      if (i === 0) {
        needleMesh.position.set(0, 0, 0);
        needleMesh.scale.setScalar(1);
      } else {
        const distScaled = Math.min(maxScaledDist, distM * scaleDown);
        const br = ((entry.bearingDeg ?? 0) * Math.PI) / 180;
        needleMesh.position.set(Math.sin(br) * distScaled, 0, -Math.cos(br) * distScaled);
        needleMesh.scale.setScalar(needleScaleFromDistanceM(distM));
      }
      scene.add(needleMesh);
    });
  } else {
    const distM = typeof distanceMeters === "function"
      ? distanceMeters(visited, original)
      : 500;
    distancesInFrame.push(0, distM);
    const detail = needleDetailLevel(distM);
    countFull = 1;
    countSimplified = detail === "simplified" ? 1 : 0;
    countSilhouette = detail === "silhouette" ? 1 : 0;
    const backDist = Math.min(maxScaledDist, distM * scaleDown);
    const backX = Math.sin(bearingRad) * backDist;
    const backZ = -Math.cos(bearingRad) * backDist;
    const visitedNeedle = makeNeedleMesh("full", 0x2c5282);
    visitedNeedle.position.set(0, 0, 0);
    visitedNeedle.scale.setScalar(1);
    scene.add(visitedNeedle);
    const scale = needleScaleFromDistanceM(distM);
    const color = lerpColor(0x1e4d6b, MUTED_NEEDLE_COLOR, (distM / MAX_DISTANCE_M) * 0.7);
    const originalNeedle = makeNeedleMesh(detail, color);
    originalNeedle.position.set(backX, 0, backZ);
    originalNeedle.scale.setScalar(scale);
    scene.add(originalNeedle);
  }

  const featuredLookAtY = 15;
  const baseDist = 55;
  const maxDist = 80;
  let finalDist = baseDist;
  let originalNeedleConsidered = false;
  const otherNeedlesCount = hasVisibleList ? Math.max(0, needlesInFrame.length - 1) : 1;
  const originalEntry = needlesInFrame.find((n) => n.needleId === ORIGINAL_NEEDLE_ID);
  let otherX = 0;
  let otherZ = 0;
  if (otherNeedlesCount > 0) {
    if (originalEntry != null) {
      const backDist = Math.min(maxScaledDist, (originalEntry.distanceMeters ?? 0) * scaleDown);
      const br0 = ((originalEntry.bearingDeg ?? 0) * Math.PI) / 180;
      otherX = Math.sin(br0) * backDist;
      otherZ = -Math.cos(br0) * backDist;
      originalNeedleConsidered = true;
    } else if (!hasVisibleList) {
      const distM = typeof distanceMeters === "function" ? distanceMeters(visited, original) : 500;
      const backDist = Math.min(maxScaledDist, distM * scaleDown);
      otherX = Math.sin(bearingRad) * backDist;
      otherZ = -Math.cos(bearingRad) * backDist;
      originalNeedleConsidered = true;
    }
    if (originalNeedleConsidered) {
      const camX = Math.sin(bearingRad) * baseDist;
      const camZ = Math.cos(bearingRad) * baseDist;
      const dirX = -camX;
      const dirY = featuredLookAtY - 25;
      const dirZ = -camZ;
      const lenD = Math.sqrt(dirX * dirX + dirY * dirY + dirZ * dirZ) || 1;
      const pqX = otherX - camX;
      const pqZ = otherZ - camZ;
      const dot = (pqX * dirX + dirY * (0 - 25) + pqZ * dirZ) / lenD;
      const lenPQ = Math.sqrt(pqX * pqX + (0 - 25) * (0 - 25) + pqZ * pqZ) || 1;
      const cosHalfFov = Math.cos((22.5 * Math.PI) / 180);
      if (dot < 0 || (lenPQ > 0 && dot / lenPQ < cosHalfFov)) {
        finalDist = Math.min(maxDist, baseDist + 12);
      }
    }
  }

  if (DEBUG_PLACEHOLDER_ENV) {
    const distMin = distancesInFrame.length ? Math.min(...distancesInFrame) : 0;
    const distMax = distancesInFrame.length ? Math.max(...distancesInFrame) : 0;
    const orig = needlesInFrame.find((n) => n.needleId === ORIGINAL_NEEDLE_ID);
    const origBr = orig ? ((orig.bearingDeg ?? 0) * Math.PI) / 180 : 0;
    const origDist = orig ? Math.min(maxScaledDist, (orig.distanceMeters ?? 0) * scaleDown) : 0;
    console.info("[NeedleScale]", { metersToUnits: 1 / 20, maxScaledDist });
    console.table(
      needlesInFrame.map((n) => {
        const distM = n.distanceMeters ?? 0;
        const br = ((n.bearingDeg ?? 0) * Math.PI) / 180;
        const d = Math.min(maxScaledDist, distM * scaleDown);
        const x = Math.sin(br) * d;
        const z = -Math.cos(br) * d;
        return {
          id: n.needleId,
          distM: Math.round(distM),
          bearing: Math.round(n.bearingDeg ?? 0),
          x: Math.round(x * 10) / 10,
          z: Math.round(z * 10) / 10,
        };
      })
    );
    console.info("[NeedlesInFrame]", {
      featuredId: needlesInFrame[0]?.needleId ?? "n/a",
      originalInList: needlesInFrame.some((n) => n.needleId === ORIGINAL_NEEDLE_ID),
      viewDirDeg,
      originalBearingDeg: orig?.bearingDeg ?? "n/a",
      originalXZ: orig ? [Math.sin(origBr) * origDist, -Math.cos(origBr) * origDist] : "n/a",
      fovUsed: "±70° base, ±95° ≤1500m, always ≤750m",
      needlesInFrameCount: needlesInFrame.length,
      distancesMinMax: [distMin, distMax],
      fullDetail: countFull,
      simplified: countSimplified,
      silhouette: countSilhouette,
    });
    const debugPayload = {
      featuredId: needlesInFrame[0]?.needleId ?? "n/a",
      visibleNeedleCount: needlesInFrame.length,
      cameraDist: finalDist,
      headingBucket,
      viewDirDeg,
      visitedLat: Math.round(visitedLat * 1e4) / 1e4,
      visitedLng: Math.round(visitedLng * 1e4) / 1e4,
      sceneContext: metadata.sceneContext ?? "n/a",
      visibleNeedlesIds: needlesInFrame.map((n) => n.needleId).filter((id) => id != null),
      isWaterZone,
      isCoastlineZone,
      waterType,
    };
    if (typeof zoneRules !== "undefined" && zoneRules != null) {
      debugPayload.zoneName = zoneRules.zoneName ?? "n/a";
      debugPayload.buildingStyle = zoneRules.buildingStyle ?? "n/a";
    }
    if (typeof countBuildings !== "undefined") debugPayload.buildings = countBuildings;
    if (typeof countTrees !== "undefined") debugPayload.trees = countTrees;
    if (typeof countPOI !== "undefined") debugPayload.poi = countPOI;
    console.info("[Polaroid env]", debugPayload);
    console.info("[Camera]", { baseDist, finalDist, originalNeedleConsidered });
    console.info("[PhotoCamera]", {
      baseHeading: bearingFO,
      finalHeading,
      minSeparationDeg,
      needles: needlesInFrame.map((n) => ({ id: n.needleId, bearingDeg: n.bearingDeg ?? null })),
    });
    const origEntry = needlesInFrame.find((n) => n.needleId === ORIGINAL_NEEDLE_ID);
    if (origEntry != null) {
      const oBr = ((origEntry.bearingDeg ?? 0) * Math.PI) / 180;
      const oDist = Math.min(maxScaledDist, (origEntry.distanceMeters ?? 0) * scaleDown);
      const oX = Math.sin(oBr) * oDist;
      const oZ = -Math.cos(oBr) * oDist;
      const camXDbg = Math.sin(bearingRad) * finalDist;
      const camZDbg = Math.cos(bearingRad) * finalDist;
      const toOrigX = oX - camXDbg;
      const toOrigZ = oZ - camZDbg;
      const rightX = Math.cos(bearingRad);
      const rightZ = -Math.sin(bearingRad);
      const dot = toOrigX * rightX + toOrigZ * rightZ;
      const side = dot >= 0 ? "right" : "left";
      console.info("[LRCheck]", { bearingFO, cameraHeading: finalHeading, side });
    }
  }

  const camX = Math.sin(bearingRad) * finalDist;
  const camZ = Math.cos(bearingRad) * finalDist;
  camera.position.set(camX, featuredLookAtY + 10, camZ);
  camera.lookAt(0, featuredLookAtY, 0);
  camera.updateProjectionMatrix();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0xb8d4e8);
  renderer.render(scene, camera);

  let dataUrl = renderer.domElement.toDataURL("image/png");

  const vignetteCanvas = document.createElement("canvas");
  vignetteCanvas.width = width;
  vignetteCanvas.height = height;
  const vctx = vignetteCanvas.getContext("2d");
  if (vctx) {
    vctx.drawImage(renderer.domElement, 0, 0);
    const grad = vctx.createRadialGradient(width / 2, height / 2, width * 0.2, width / 2, height / 2, width * 0.75);
    grad.addColorStop(0, "rgba(255,255,255,0)");
    grad.addColorStop(0.6, "rgba(200,200,200,0.15)");
    grad.addColorStop(1, "rgba(80,80,80,0.4)");
    vctx.globalCompositeOperation = "multiply";
    vctx.fillStyle = grad;
    vctx.fillRect(0, 0, width, height);
    dataUrl = vignetteCanvas.toDataURL("image/png");
  }

  renderer.dispose();
  groundGeo.dispose();
  groundMat.dispose();
  cityMat.dispose();
  vegMat.dispose();
  if (towerGeo) towerGeo.dispose();
  return dataUrl;
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
  const [viewIsDirty, setViewIsDirty] = useState(false);
  const [panelNeedleId, setPanelNeedleId] = useState(null);
  const [poofAt, setPoofAt] = useState(null);
  const [showPlaceAnotherButton, setShowPlaceAnotherButton] = useState(false);
  const [menuAnchorXY, setMenuAnchorXY] = useState(null);
  const [hintPosition, setHintPosition] = useState(null);
  const [anchorsVersion, setAnchorsVersion] = useState(0);
  const [creditsOpen, setCreditsOpen] = useState(false);
  const [polaroid, setPolaroid] = useState(null);
  const [isDeveloping, setIsDeveloping] = useState(false);
  const [visitedNeedleId, setVisitedNeedleId] = useState(null);
  const [photoFlash, setPhotoFlash] = useState(false);
  const [batteryWarning, setBatteryWarning] = useState(false);
  const [batteryBlackout, setBatteryBlackout] = useState(false);
  const [asciiNeedle, setAsciiNeedle] = useState(false);
  const polaroidAbortRef = useRef(null);
  const visitModeRef = useRef(visitMode);
  visitModeRef.current = visitMode;

  const viewModeInitialPoseRef = useRef(null);
  const movementDetectionEnabledRef = useRef(false);
  const viewModeFlyTimeoutRef = useRef(null);

  const needleAnchorsRef = useRef(new Map());

  const totalNeedles = 1 + placements.length;
  const countUpNeedles = useCountUp(totalNeedles);
  const countUpAcres = useCountUp(0.33 + placements.length * NEEDLE_PARCEL_ACRES);
  const countUpCost = useCountUp(
    4_500_000 + placements.length * NEEDLE_BUILD_COST + placements.reduce((sum, p) => sum + (p.landValue ?? 0), 0)
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
  const cameraShutterAudioRef = useRef(null);
  const placeNeedleAudioRef = useRef(null);
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
        } else if (pos) {
          const distToOriginal = distanceMeters(pos, { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng });
          const list = placementsRef.current ?? [];
          const nearest = list.reduce(
            (best, p) => {
              const d = distanceMeters(pos, { lat: p.lat, lng: p.lng });
              return d < best.d ? { id: p.id, d } : best;
            },
            { id: null, d: Infinity }
          );
          const inOriginal = distToOriginal < FOOTPRINT_RADIUS_M;
          const inNearest = nearest.id != null && nearest.d < FOOTPRINT_RADIUS_M;
          const originalCloser = inOriginal && (!inNearest || distToOriginal <= nearest.d);
          if (originalCloser) {
            setHoveredNeedleId(ORIGINAL_NEEDLE_ID);
          } else if (inNearest) {
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
          const distToOriginal = distanceMeters(pos, { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng });
          const inOriginal = distToOriginal < FOOTPRINT_RADIUS_M;
          if (list?.length) {
            const nearest = list.reduce(
              (best, p) => {
                const d = distanceMeters(pos, { lat: p.lat, lng: p.lng });
                return d < best.d ? { id: p.id, d } : best;
              },
              { id: null, d: Infinity }
            );
            if (inOriginal && (!nearest.id || nearest.d >= FOOTPRINT_RADIUS_M || distToOriginal <= nearest.d)) {
              setHintNeedleId(ORIGINAL_NEEDLE_ID);
            } else if (nearest.id != null && nearest.d < FOOTPRINT_RADIUS_M) {
              const currentHintId = hintNeedleId;
              if (currentHintId == null) {
                setHintNeedleId(nearest.id);
              } else if (nearest.id === currentHintId) {
                setHintNeedleId(nearest.id);
              } else {
                const currentPlacement = list.find((p) => p.id === currentHintId);
                const distToCurrent = currentPlacement ? distanceMeters(pos, { lat: currentPlacement.lat, lng: currentPlacement.lng }) : (currentHintId === ORIGINAL_NEEDLE_ID ? distToOriginal : Infinity);
                if (nearest.d < distToCurrent * 0.75) setHintNeedleId(nearest.id);
              }
            } else setHintNeedleId(null);
          } else if (inOriginal) {
            setHintNeedleId(ORIGINAL_NEEDLE_ID);
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
    if (!mapEl || !wrapper) {
      setHintPosition(null);
      return;
    }
    if (hintNeedleId === ORIGINAL_NEEDLE_ID) {
      const xy = needleAnchorsRef.current.get(ORIGINAL_NEEDLE_ID) ?? latLngToWrapperPixelWithProjection(mapEl, wrapper, { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng }, projectionOverlayRef);
      setHintPosition(xy ?? null);
      return;
    }
    const placement = placements.find((p) => p.id === hintNeedleId);
    if (!placement) {
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
    const origXY = latLngToWrapperPixelWithProjection(mapEl, wrapper, { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng }, projectionOverlayRef);
    if (origXY != null) anchors.set(ORIGINAL_NEEDLE_ID, origXY);
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
      const origXY = latLngToWrapperPixelWithProjection(mapEl, wrapper, { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng }, projectionOverlayRef);
      if (origXY != null) anchors.set(ORIGINAL_NEEDLE_ID, origXY);
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
          } else if (isAtMoPop(at.lat, at.lng) || isAtChihuly(at.lat, at.lng) || isAtPacificScienceCenter(at.lat, at.lng)) {
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
        if (needleId == null) {
          const distToOriginal = distanceMeters(at, { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng });
          const nearest = placements.reduce(
            (best, p) => {
              const d = distanceMeters(at, { lat: p.lat, lng: p.lng });
              return d < best.d ? { id: p.id, d } : best;
            },
            { id: null, d: Infinity }
          );
          if (distToOriginal < FOOTPRINT_RADIUS_M && (nearest.id == null || nearest.d >= FOOTPRINT_RADIUS_M || distToOriginal <= nearest.d)) {
            needleId = String(ORIGINAL_NEEDLE_ID);
          }
        }
        if (needleId != null) {
          const id = Number(needleId);
          const placement = id === ORIGINAL_NEEDLE_ID ? null : placements.find((p) => p.id === id);
          if (placement || id === ORIGINAL_NEEDLE_ID) {
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
        } else if (isAtMoPop(at.lat, at.lng) || isAtChihuly(at.lat, at.lng) || isAtPacificScienceCenter(at.lat, at.lng)) {
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
        if (newCount >= 5 && (newCount - 5) % 10 === 0) {
          const wilhelmEl = wilhelmAudioRef.current;
          if (wilhelmEl) {
            wilhelmEl.volume = 0.2;
            wilhelmEl.currentTime = 0;
            wilhelmEl.play().catch((err) => console.error("audio play failed", err));
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

  // View Mode: exit on movement. After arrival (fly + settle), if user pans/zooms/rotates, exit View Mode and leave camera where it is. No lock, no snap.
  useEffect(() => {
    if (!visitMode) return;
    const mapEl = mapRef.current;
    if (!mapEl) return;
    const initial = viewModeInitialPoseRef.current;
    if (!initial?.center) return;

    const checkMovementAndExit = () => {
      if (!visitModeRef.current) return;
      if (!movementDetectionEnabledRef.current) return;
      const c = mapEl.center;
      const range = mapEl.range ?? initial.range;
      const tilt = mapEl.tilt ?? initial.tilt;
      const heading = mapEl.heading ?? 0;
      const centerMoved =
        Math.abs((c?.lat ?? 0) - initial.center.lat) > VIEW_MODE_MOVE_CENTER_EPSILON_DEG ||
        Math.abs((c?.lng ?? 0) - initial.center.lng) > VIEW_MODE_MOVE_CENTER_EPSILON_DEG;
      const rangeMoved = Math.abs(range - initial.range) > VIEW_MODE_MOVE_RANGE_M;
      const tiltMoved = Math.abs(tilt - initial.tilt) > VIEW_MODE_MOVE_TILT_DEG;
      let headingDiff = Math.abs((heading % 360) - (initial.heading % 360));
      if (headingDiff > 180) headingDiff = 360 - headingDiff;
      const headingMoved = headingDiff > VIEW_MODE_MOVE_HEADING_DEG;
      if (centerMoved || rangeMoved || tiltMoved || headingMoved) {
        setVisitMode(false);
      }
    };
    mapEl.addEventListener("gmp-centerchange", checkMovementAndExit);
    mapEl.addEventListener("gmp-rangechange", checkMovementAndExit);
    mapEl.addEventListener("gmp-tiltchange", checkMovementAndExit);
    mapEl.addEventListener("gmp-headingchange", checkMovementAndExit);
    return () => {
      mapEl.removeEventListener("gmp-centerchange", checkMovementAndExit);
      mapEl.removeEventListener("gmp-rangechange", checkMovementAndExit);
      mapEl.removeEventListener("gmp-tiltchange", checkMovementAndExit);
      mapEl.removeEventListener("gmp-headingchange", checkMovementAndExit);
    };
  }, [visitMode]);

  // When leaving View Mode, disable movement detection and clear fly timeout.
  useEffect(() => {
    if (visitMode) return;
    movementDetectionEnabledRef.current = false;
    if (viewModeFlyTimeoutRef.current) {
      clearTimeout(viewModeFlyTimeoutRef.current);
      viewModeFlyTimeoutRef.current = null;
    }
  }, [visitMode]);

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
    const placement = showHint && hintNeedleId !== ORIGINAL_NEEDLE_ID ? placements.find((p) => p.id === hintNeedleId) : null;
    const isOriginalHint = showHint && hintNeedleId === ORIGINAL_NEEDLE_ID;
    if (placement) {
      glow.path = circleCoordinates(placement.lat, placement.lng, HINT_GLOW_RADIUS_M, CIRCLE_POINTS);
      if (!glow.parentElement) mapEl.appendChild(glow);
    } else if (isOriginalHint) {
      glow.path = circleCoordinates(SEATTLE_CENTER.lat, SEATTLE_CENTER.lng, HINT_GLOW_RADIUS_M, CIRCLE_POINTS);
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
    const placement = show && hoveredNeedleId !== ORIGINAL_NEEDLE_ID ? placements.find((p) => p.id === hoveredNeedleId) : null;
    const isOriginalHovered = show && hoveredNeedleId === ORIGINAL_NEEDLE_ID;
    if (placement) {
      highlight.path = circleCoordinates(placement.lat, placement.lng, FOOTPRINT_RADIUS_M, CIRCLE_POINTS);
      if (!highlight.parentElement) mapEl.appendChild(highlight);
    } else if (isOriginalHovered) {
      highlight.path = circleCoordinates(SEATTLE_CENTER.lat, SEATTLE_CENTER.lng, FOOTPRINT_RADIUS_M, CIRCLE_POINTS);
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

  // Original needle: swap to highlight model and outline when hovered (same behavior as placed needles).
  useEffect(() => {
    const original = originalNeedleRef.current;
    if (!original) return;
    const useHighlight = hoveredNeedleId === ORIGINAL_NEEDLE_ID && !isPlacing && !movingNeedleId && !visitMode;
    if (original.src !== undefined) original.src = useHighlight ? HIGHLIGHT_MODEL_SRC : ORIGINAL_NEEDLE_MODEL_SRC;
    if (original?.classList != null) {
      if (useHighlight) original.classList.add("needle-model-outlined");
      else original.classList.remove("needle-model-outlined");
    }
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
    const placeNeedleEl = placeNeedleAudioRef.current;
    if (placeNeedleEl) {
      placeNeedleEl.volume = 0;
      placeNeedleEl.play().then(() => { placeNeedleEl.pause(); placeNeedleEl.currentTime = 0; }).catch((err) => console.error("audio play failed", err));
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
    const isOriginal = id === ORIGINAL_NEEDLE_ID;
    const placement = isOriginal ? null : placements.find((p) => p.id === id);
    const mapEl = mapRef.current;
    const visited = isOriginal ? { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng } : placement ? { lat: placement.lat, lng: placement.lng } : null;
    if (!visited || !mapEl) return;
    if (soundEnabled && visitAudioRef.current) {
      visitAudioRef.current.volume = 0.5;
      visitAudioRef.current.currentTime = 0;
      visitAudioRef.current.play().catch((err) => console.error("visit play failed", err));
    }
    setHoveredNeedleId(null);
    setMenuAnchorXY(null);
    setPanelNeedleId(id);
    setVisitedNeedleId(id);
    setVisitMode(true);
    setViewIsDirty(false);
    movementDetectionEnabledRef.current = false;
    if (viewModeFlyTimeoutRef.current) {
      clearTimeout(viewModeFlyTimeoutRef.current);
      viewModeFlyTimeoutRef.current = null;
    }

    const original = { lat: SEATTLE_CENTER.lat, lng: SEATTLE_CENTER.lng };
    const bearingToOther = bearingDegrees(visited, original);
    const VISIT_HEADING_OFFSET_DEG = 15;
    const heading = (bearingToOther + VISIT_HEADING_OFFSET_DEG + 360) % 360;
    const arrivalPose = {
      center: { lat: visited.lat, lng: visited.lng, altitude: VIEW_ELEVATION_M },
      tilt: VISIT_TILT,
      range: VISIT_RANGE_M,
      heading,
    };
    viewModeInitialPoseRef.current = arrivalPose;

    if (typeof mapEl.flyCameraTo === "function") {
      mapEl.flyCameraTo({
        endCamera: arrivalPose,
        durationMillis: VIEW_MODE_FLY_DURATION_MS,
      });
    } else {
      mapEl.center = arrivalPose.center;
      mapEl.tilt = arrivalPose.tilt;
      mapEl.range = arrivalPose.range;
      mapEl.heading = arrivalPose.heading;
    }
    viewModeFlyTimeoutRef.current = window.setTimeout(() => {
      movementDetectionEnabledRef.current = true;
      viewModeFlyTimeoutRef.current = null;
    }, VIEW_MODE_FLY_DURATION_MS + VIEW_MODE_FLY_SETTLE_MS);
  };

  const onExitVisit = () => {
    if (viewModeFlyTimeoutRef.current) {
      clearTimeout(viewModeFlyTimeoutRef.current);
      viewModeFlyTimeoutRef.current = null;
    }
    movementDetectionEnabledRef.current = false;
    viewModeInitialPoseRef.current = null;
    const mapEl = mapRef.current;
    if (mapEl) {
      mapEl.center = SEATTLE_CENTER;
      mapEl.tilt = DEFAULT_TILT;
      mapEl.heading = DEFAULT_HEADING;
      mapEl.range = DEFAULT_RANGE;
    }
    setPanelNeedleId(null);
    setVisitMode(false);
    setViewIsDirty(false);
    setVisitedNeedleId(null);
  };

  /** Fallback placeholder if Three.js render fails. */
  const getFallbackPlaceholderUrl = useCallback(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 300;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#e8e8e0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#333";
    ctx.font = "16px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Screenshot unavailable", canvas.width / 2, canvas.height / 2);
    return canvas.toDataURL("image/png");
  }, []);

  const dismissPolaroid = useCallback(() => {
    polaroidAbortRef.current?.abort();
    polaroidAbortRef.current = null;
    setPolaroid(null);
    setIsDeveloping(false);
  }, []);

  useEffect(() => {
    const id = polaroid?.id;
    if (!id) {
      setBatteryWarning(false);
      setBatteryBlackout(false);
      setAsciiNeedle(false);
      return;
    }
    setBatteryWarning(false);
    setBatteryBlackout(false);
    setAsciiNeedle(false);
    const t5 = window.setTimeout(() => setBatteryWarning(true), 5000);
    const t10 = window.setTimeout(() => setBatteryBlackout(true), 10000);
    const t12 = window.setTimeout(() => setBatteryWarning(false), 12000);
    const t15 = window.setTimeout(() => setAsciiNeedle(true), 15000);
    return () => {
      window.clearTimeout(t5);
      window.clearTimeout(t10);
      window.clearTimeout(t12);
      window.clearTimeout(t15);
      setBatteryWarning(false);
      setBatteryBlackout(false);
      setAsciiNeedle(false);
    };
  }, [polaroid?.id]);

  const onTakePhoto = useCallback(async () => {
    if (soundEnabled && cameraShutterAudioRef.current) {
      cameraShutterAudioRef.current.volume = 0.5;
      cameraShutterAudioRef.current.currentTime = 0;
      cameraShutterAudioRef.current.play().catch((err) => console.error("camera shutter play failed", err));
    }
    setPhotoFlash(true);
    const flashDuration = 150;
    setTimeout(() => setPhotoFlash(false), flashDuration);

    const needleId = visitedNeedleId ?? panelNeedleId;
    const isOriginal = needleId === ORIGINAL_NEEDLE_ID;
    const placement = !isOriginal ? placements.find((p) => p.id === needleId) : null;
    const visitedLat = isOriginal ? SEATTLE_CENTER.lat : (placement?.lat ?? SEATTLE_CENTER.lat);
    const visitedLng = isOriginal ? SEATTLE_CENTER.lng : (placement?.lng ?? SEATTLE_CENTER.lng);
    const needleNumber = isOriginal ? 1 : placements.findIndex((p) => p.id === needleId) + 2;
    const lat = Number(visitedLat.toFixed(5));
    const lng = Number(visitedLng.toFixed(5));
    const originalLat = Number(SEATTLE_CENTER.lat.toFixed(5));
    const originalLng = Number(SEATTLE_CENTER.lng.toFixed(5));

    const mapEl = mapRef.current;
    let cameraHeading;
    let cameraTilt;
    let cameraRange;
    if (mapEl) {
      cameraHeading = mapEl.heading ?? undefined;
      cameraTilt = mapEl.tilt ?? undefined;
      cameraRange = mapEl.range ?? undefined;
    }

    const landAcquisition = placement?.landValue ?? (isOriginal ? getValuationAtLatLng(visitedLat, visitedLng).landValue : 0);
    const constructionCost = NEEDLE_BUILD_COST;
    const projectedTourismRevenue = placement?.tourismRevenue ?? computeTourismRevenue(visitedLat, visitedLng);
    const createdAt = Date.now();

    const visited = { lat: visitedLat, lng: visitedLng };
    const original = { lat: originalLat, lng: originalLng };
    const MAX_DISTANCE_M = 12000;

    const visibleNeedles = [];
    visibleNeedles.push({ needleId, lat: visitedLat, lng: visitedLng, distanceMeters: 0, bearingDeg: 0 });
    if (!isOriginal) {
      visibleNeedles.push({
        needleId: ORIGINAL_NEEDLE_ID,
        lat: originalLat,
        lng: originalLng,
        distanceMeters: distanceMeters(visited, original),
        bearingDeg: bearingDegrees(visited, original),
      });
    }
    const others = placements
      .filter((p) => p.id !== needleId)
      .map((p) => {
        const dist = distanceMeters(visited, { lat: p.lat, lng: p.lng });
        const bearing = bearingDegrees(visited, { lat: p.lat, lng: p.lng });
        return {
          needleId: p.id,
          lat: p.lat,
          lng: p.lng,
          distanceMeters: dist,
          bearingDeg: bearing,
        };
      })
      .filter((c) => c.distanceMeters <= MAX_DISTANCE_M);
    visibleNeedles.push(...others);

    const metadata = {
      visitedLat,
      visitedLng,
      originalLat,
      originalLng,
      cameraHeading,
      cameraTilt,
      cameraRange,
      landAcquisition,
      constructionCost,
      projectedTourismRevenue,
      createdAt,
      needleId,
      needleNumber,
      visibleNeedles,
    };

    let placeholderUrl;
    try {
      placeholderUrl = generatePlaceholderPolaroid(metadata, 1200, 900);
    } catch (err) {
      console.warn("Placeholder polaroid render failed:", err?.message ?? err);
      placeholderUrl = getFallbackPlaceholderUrl();
    }
    if (!placeholderUrl) placeholderUrl = getFallbackPlaceholderUrl();

    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `polaroid-${createdAt}`;
    setPolaroid({
      id,
      dataUrl: placeholderUrl,
      placeholderUrl,
      aiUrl: null,
      needleId,
      needleNumber,
      lat,
      lng,
      createdAt,
      status: "developing",
    });
    setIsDeveloping(true);

    const controller = new AbortController();
    polaroidAbortRef.current = controller;

    try {
      const res = await fetch("/api/generate-polaroid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...metadata, stylePreset: "photoreal_postcard" }),
        signal: controller.signal,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.dataUrl) {
        setPolaroid((prev) =>
          prev && prev.id === id ? { ...prev, dataUrl: json.dataUrl, aiUrl: json.dataUrl, status: "ready" } : prev
        );
      } else {
        setPolaroid((prev) => (prev && prev.id === id ? { ...prev, status: "failed" } : prev));
      }
    } catch (err) {
      if (err?.name !== "AbortError") {
        setPolaroid((prev) => (prev && prev.id === id ? { ...prev, status: "failed" } : prev));
      }
    } finally {
      if (polaroidAbortRef.current === controller) polaroidAbortRef.current = null;
      setIsDeveloping(false);
    }
  }, [
    soundEnabled,
    visitedNeedleId,
    panelNeedleId,
    placements,
    getFallbackPlaceholderUrl,
  ]);

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
    setPanelNeedleId(null);
    setVisitMode(false);
    setViewIsDirty(false);
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
      <audio ref={cameraShutterAudioRef} src="/audio/camera-shutter.mp3" preload="auto" />
      <audio ref={placeNeedleAudioRef} src="/audio/percussive-hit.mp3" preload="auto" />
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
            Civic expansion simulator by{" "}
            <a
              href="https://www.twospaceneedles.com"
              target="_blank"
              rel="noopener noreferrer"
              className="exhibit-header-link"
            >
              Two Space Needles campaign
            </a>.
          </p>
          <p className="exhibit-instructions">
            Click to place Needle. Observe civic impact.
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
              const hintPlacement = showHint && hintNeedleId !== ORIGINAL_NEEDLE_ID ? placements.find((p) => p.id === hintNeedleId) : null;
              const hintIsOriginal = showHint && hintNeedleId === ORIGINAL_NEEDLE_ID;
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
                  {hintIsOriginal && hintPosition && (
                    <div
                      className="needle-click-hint needle-click-hint-hit-only"
                      aria-label="Click to open needle menu"
                      data-needle-id={ORIGINAL_NEEDLE_ID}
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
              const isOriginal = hoveredNeedleId === ORIGINAL_NEEDLE_ID;
              const placement = showMenu && !isOriginal ? placements.find((p) => p.id === hoveredNeedleId) : null;
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
                (placement != null || isOriginal) &&
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
                    {isOriginal && (
                      <div className="needle-action-menu-title" aria-hidden>
                        Space Needle #1
                      </div>
                    )}
                    {!isOriginal && (
                      <button type="button" onClick={() => onMoveNeedle(hoveredNeedleId)}>
                        Move Needle
                      </button>
                    )}
                    {!isOriginal && placements.length > 1 && (
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
            <div
              className="needle-visit-actions map-overlay"
              style={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 100,
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <button
                type="button"
                className="needle-exit-view exhibit-btn-primary"
                style={{ pointerEvents: "auto" }}
                onClick={onExitVisit}
              >
                Exit View
              </button>
              <button
                type="button"
                className="needle-take-photo exhibit-btn-primary"
                style={{ pointerEvents: "auto" }}
                disabled={isDeveloping}
                onClick={onTakePhoto}
              >
                Take Photo
              </button>
            </div>
          )}
          {photoFlash && (
            <div
              className="photo-flash-overlay map-overlay"
              aria-hidden
              style={{ pointerEvents: "none" }}
            />
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
              if (soundEnabled && placeNeedleAudioRef.current) {
                placeNeedleAudioRef.current.volume = 0.5;
                placeNeedleAudioRef.current.currentTime = 0;
                placeNeedleAudioRef.current.play().catch((err) => console.error("place needle sound play failed", err));
              }
              setPanelNeedleId(null);
              setIsPlacing(true);
            }}
          >
            Place Needle
          </button>
        </div>
        <div className="exhibit-data">
          <div className="exhibit-live-estimate">
            {(() => {
              const placingValuation =
                isPlacing && hoverLatLng
                  ? getValuationAtLatLng(hoverLatLng.lat, hoverLatLng.lng)
                  : null;
              const showPanelNeedle = visitMode && panelNeedleId != null;
              const isOriginalHighlighted =
                !showPanelNeedle &&
                !isPlacing &&
                !movingNeedleId &&
                !visitMode &&
                hoveredNeedleId === ORIGINAL_NEEDLE_ID;
              const activePlacement =
                showPanelNeedle && panelNeedleId !== ORIGINAL_NEEDLE_ID
                  ? placements.find((p) => p.id === panelNeedleId)
                  : !showPanelNeedle &&
                      !isPlacing &&
                      !movingNeedleId &&
                      !visitMode &&
                      hoveredNeedleId != null &&
                      hoveredNeedleId !== ORIGINAL_NEEDLE_ID
                    ? placements.find((p) => p.id === hoveredNeedleId)
                    : null;
              const isOriginalInPanel = showPanelNeedle && panelNeedleId === ORIGINAL_NEEDLE_ID;
              const movingPlacement = movingNeedleId != null ? placements.find((p) => p.id === movingNeedleId) : null;
              const boxTitle =
                isOriginalInPanel || isOriginalHighlighted
                  ? "Space Needle #1"
                  : activePlacement != null
                    ? `Space Needle #${placements.findIndex((p) => p.id === (showPanelNeedle ? panelNeedleId : hoveredNeedleId)) + 2}`
                    : "LIVE ESTIMATE";
              const coordsSource = isPlacing && hoverLatLng
                ? { lat: hoverLatLng.lat, lng: hoverLatLng.lng }
                : (activePlacement || movingPlacement)
                  ? { lat: (activePlacement || movingPlacement).lat, lng: (activePlacement || movingPlacement).lng }
                  : null;
              return (
                <>
                  <h3>{boxTitle}</h3>
                  {isOriginalInPanel || isOriginalHighlighted ? (
                    <>
                      <div className="exhibit-live-row">
                        <span className="exhibit-live-label">Year constructed</span>
                        <span className="exhibit-live-value">1962</span>
                      </div>
                      <div className="exhibit-live-row">
                        <span className="exhibit-live-label">Land required</span>
                        <span className="exhibit-live-value">0.33 acres</span>
                      </div>
                      <div className="exhibit-live-row">
                        <span className="exhibit-live-label">Total Cost</span>
                        <span className="exhibit-live-value">$4.5M</span>
                      </div>
                      <div className="exhibit-live-row">
                        <span className="exhibit-live-label">Coordinates</span>
                        <span className="exhibit-live-value">
                          {formatLatLngDirectional(SEATTLE_CENTER.lat, SEATTLE_CENTER.lng)}
                        </span>
                      </div>
                    </>
                  ) : (
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
                      <div className="exhibit-live-row">
                        <span className="exhibit-live-label">Coordinates</span>
                        <span className="exhibit-live-value">
                          {coordsSource ? formatLatLngDirectional(coordsSource.lat, coordsSource.lng) : "—"}
                        </span>
                      </div>
                    </>
                  )}
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
      {polaroid && (
        <>
          <div
            className="exhibit-polaroid-backdrop"
            aria-hidden
            onClick={dismissPolaroid}
          />
          <div className="exhibit-polaroid-wrap" role="dialog" aria-label="Polaroid photo">
            <div className="exhibit-polaroid-card">
              <button
                type="button"
                className="exhibit-polaroid-close"
                onClick={dismissPolaroid}
                aria-label="Close polaroid"
              >
                ×
              </button>
              <div className="exhibit-polaroid-frame">
                {polaroid.dataUrl ? (
                  <img src={polaroid.dataUrl} alt="" className="exhibit-polaroid-img" />
                ) : (
                  <div className="exhibit-polaroid-unavailable">Screenshot unavailable</div>
                )}
                {polaroid.status === "developing" && (
                  <div className="exhibit-polaroid-developing">Developing…</div>
                )}
                {/* Display-only layers: do not affect download. Timeline: 0–5s photo; 5–10s photo + warning; 10–12s warning over black; 12–15s black only; 15s+ emoticons + production text. */}
                {batteryBlackout && (
                  <div className="exhibit-polaroid-blackout" aria-hidden />
                )}
                {batteryWarning && (
                  <div className="exhibit-polaroid-battery-corner" aria-hidden>
                    <div className="polaroid-warning blink">
                      <span className="led" />
                      <span className="battery" />
                      <span className="polaroid-warning-label">CAMERA BATTERY DEAD</span>
                    </div>
                  </div>
                )}
                {asciiNeedle && (
                  <div className="exhibit-polaroid-ascii-overlay" aria-hidden>
                    <div className="exhibit-polaroid-ascii-needles">
                      <pre className="exhibit-polaroid-ascii-needle">
{`         |
     --------
    ----------
     --------
       \\   /
        \\-/
        |||
        |||
        |||
       /   \\
      /     \\
     /       \\
    -----------`}
                      </pre>
                      <pre className="exhibit-polaroid-ascii-needle">
{`         |
     --------
    ----------
     --------
       \\   /
        \\-/
        |||
        |||
        |||
       /   \\
      /     \\
     /       \\
    -----------`}
                      </pre>
                    </div>
                    <div className="exhibit-polaroid-production">
                      <a href="https://www.extragood.studio" target="_blank" rel="noopener noreferrer" className="exhibit-polaroid-production-link">
                        an Extra Good Studio production
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="exhibit-polaroid-caption">
                <div className="exhibit-polaroid-greeting">Greetings from Space Needle #{polaroid.needleNumber}!</div>
                <div className="exhibit-polaroid-coords">
                  {formatLatLngDirectional(polaroid.lat, polaroid.lng, " · ")}
                </div>
              </div>
              <div className="exhibit-polaroid-actions">
                <button
                  type="button"
                  className="exhibit-polaroid-delete"
                  onClick={dismissPolaroid}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="exhibit-polaroid-download"
                  disabled={!polaroid.dataUrl}
                  onClick={() => polaroid.dataUrl && downloadPostcardJpg(polaroid)}
                >
                  Download photo
                </button>
              </div>
            </div>
          </div>
        </>
      )}
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
                <p className="exhibit-credits-intro">
                  Place Needles is an{" "}
                  <a href="https://www.extragood.studio" target="_blank" rel="noopener noreferrer" className="exhibit-credits-eg-link">
                    Extra Good Studio
                  </a>{" "}
                  production.
                </p>
                <div className="exhibit-credits-eg-logo-wrap">
                  <a href="https://www.extragood.studio" target="_blank" rel="noopener noreferrer" className="exhibit-credits-eg-logo-link" aria-label="Extra Good Studio">
                    <img src="/eg_logo.png" alt="" className="exhibit-credits-eg-logo" />
                  </a>
                </div>
                {[
                  ["3D Model", "3D Model Sources"],
                  ["Sound", "Sound Sources"],
                ].map(([cat, label]) => (
                  <section key={cat} className="exhibit-credits-section">
                    <h3 className="exhibit-credits-category">{label}</h3>
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