/**
 * Parallax layer manifest + measured A→B geometry.
 *
 * The scene interpolates between two fully composed illustrated views:
 *   Position A  (progress 0) — high-vantage overlook   → every layer at its A spot
 *   Position B  (progress 1) — street-level arrival     → every layer at its B spot
 *
 * Depth order: lower number = closer to the camera = renders in FRONT.
 *   1  = foremost moving layer … 12 = deepest moving layer
 *   13–18 = shared, fixed background plates (no A/B pair, no motion)
 *
 * HOW A LAYER MOVES
 * Each layer holds its A artwork and its B artwork. Both are full-canvas, with
 * the element baked at a different position/size in each state. We measured the
 * element's bounding box in both images (see GEOMETRY below: dx/dy = the B-minus-A
 * shift as a fraction of the frame, s = B/A size, acx/acy & bcx/bcy = the element
 * centre in each state).
 *
 * During the transition we slide the A art toward the B location while the B art
 * slides out from the A location, so at every point the two are spatially aligned
 * and the opacity crossfade reads as ONE element translating (mostly up/down) and
 * rescaling — not a dissolve. At progress 0 the A art sits exactly at rest; at
 * progress 1 the B art sits exactly at rest → both authoritative comps reproduced.
 */

const ASSET_BASE = `${import.meta.env.BASE_URL || '/'}parallax/`;
export const asset = (name) => `${ASSET_BASE}${name}`;

const BG_START = 13;
const BG_END = 18;

export const smoothstep = (p) => p * p * (3 - 2 * p);
export const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
export const lerp = (a, b, t) => a + (b - a) * t;

/**
 * Moving layers, listed FRONT → BACK. z-index follows list order.
 *
 * Two motion models are supported (selected by MODE in ParallaxScene.jsx):
 *   - 'slide'  (ACTIVE): each layer shifts vertically from its A position to
 *              its B position. `dy` = travel as a fraction of frame height.
 *   - 'dolly'  (paused, kept for later): each layer scales up from a locked
 *              bottom edge as we move through the scene. Uses `grow` / `panX` /
 *              `offsetY` / `origin`. Left intact so we can switch back.
 *
 * Layer set:
 *   L1 plaza · 2i atomic streetlight · 2ii pavilion (2 split into near/far)
 *   L3 monorail · L4 science-arch panel · ground (pink ground plane, behind L4)
 *   L5 front planting · L6 needle (near) · L7 balloons · L8 golden arches
 *   L9 treeline foliage · L10 roof · L11 treeline · L12 needle (far)
 *
 * `dy` for the original layers is the measured A→B shift; 2i/2ii inherit old
 * layer-2's shift and `ground` is an estimate (no B artwork for the new layers).
 */
// ── Scrollytelling entrance keyframes ────────────────────────────────────
// `kf` is an array of [progress, yOffset%] keyframes (see kfPos in
// ParallaxScene). Holds at the first/last value outside the range, eases
// between points — so a layer can hold below, then rise, then settle, letting
// all the motions overlap into one cohesive parallax.
//   y 140 → parked fully below the viewport     y 0 → rest (A-comp position)
//
// COHESIVE RISE: after the needle is placed (~0.45), every remaining layer
// (except far needle 12) rises into the clustered bottom composition in DEPTH
// ORDER — front layers (low id) lead, each layer behind following just after,
// back layers last — so it reads as an expansive world rising into view rather
// than objects popping in. All the lower/foreground layers stay DIMMED so they
// don't pull focus from the lit needle.
// STAGE MAP (RE-CHOREOGRAPHED 2026-07 — copy-relay structure, MAX_PROGRESS 2.5).
// Every stage is timed to a crawl block (see CRAWL_LINES in ParallaxScene);
// ONLY progress timings changed in this remap — all position/offset numbers
// are the original hand-tuned values.
//   0     → 0.496  NEEDLE 6 rises + lights (unchanged). c1 rides up with it.
//   0.35  → 0.95   TREELINES (5, 9, 11) rise — c3 emerges from behind them
//                  (≈0.72, while c2 sits high) and they settle as c3 climbs.
//   0.80  → 1.30   BUILDINGS rise to clustered-low, front-first, with c3.
//   1.42  → 1.56   SECOND NEEDLE slides out + lights — fires DURING the
//                  c4-exit / TSN-entry handoff (no park in between: the
//                  three events are ONE continuous motion).
//   1.75  → 2.10   FINALE: viewpoint rises, layers lock + illuminate
//                  back→front (c5 exits during this). Was 1.0→1.5; affine
//                  remap t' = 1.75 + (t − 1.0) × 0.7.
//   2.10  → 2.5    iconic block + materializing "times two" ride off; the
//                  campaign lockup MATERIALIZES in place at 2.38–2.48 (deck at 2.5).
const PARKED = [[0, 140], [1, 140]];
const LAYER_DEFS = [
  // BUILDINGS — rise out of the ground from hidden (≈70) to a clustered-LOW
  // position (NOT final) at a CONSTANT (linear) pace, front-first, DIMMED.
  // Rise windows remapped into [0.80, 1.30] (riding c3); the final lift +
  // illumination happens in the finale stage [1.75, 2.10].
  { id: '1', src: 'A1.webp', grow: 1.2, linear: true, kf: [[0, 70], [0.923, 70], [1.19, 3], [1.75, 3], [1.925, 0], [2.1, 0]], dim: true, illum: { mode: 'uniform', start: 2.04, end: 2.1 } }, // plaza (front) — locks flush to the window bottom; illuminates LAST
  { id: '2i', src: '2i.webp', grow: 0.6, linear: true, kf: [[0, 70], [0.964, 70], [1.231, 6], [1.75, 6], [1.925, 1], [2.1, 0]], dim: true, illum: { mode: 'uniform', start: 1.971, end: 2.034 } }, // glove statue — TALLEST of these; illuminates before the monorail (reads above it)
  { id: '2ii', src: '2ii.webp', grow: 0.4, linear: true, kf: [[0, 70], [0.985, 70], [1.251, 4], [1.75, 4], [1.925, 0], [2.1, 0]], dim: true, illum: { mode: 'uniform', start: 2.02, end: 2.083 } }, // pavilion
  { id: '3', src: 'A3.webp', grow: 0.55, linear: true, kf: [[0, 70], [1.005, 70], [1.272, 4], [1.75, 4], [1.925, -1], [2.1, 0]], dim: 0.1, illum: { mode: 'uniform', start: 1.992, end: 2.055 } }, // monorail — TALL, illuminates after the glove statue; dim floor 0.1 sinks its corner hot spot until it lights
  { id: '4', src: 'A4.webp', grow: 0.45, linear: true, kf: [[0, 70], [1.026, 70], [1.292, 4], [1.75, 4], [1.925, 0], [2.1, 0]], dim: true, illum: { mode: 'uniform', start: 2.001, end: 2.064 } }, // arch panel
  { id: 'ground', src: 'ground.webp', grow: 1.2, origin: [0.5, 0.864], linear: true, kf: [[0, 70], [0.944, 70], [1.21, 10], [1.75, 10], [1.925, -1], [2.1, 0]], dim: true, illum: { mode: 'uniform', start: 1.991, end: 2.054 } }, // floor
  // TREELINES — hold parked, then rise [0.35, 0.95]: moving through c2's
  // transit AND c3's emergence, settling only as c3 climbs the sky.
  { id: '5', src: 'A5.webp', grow: 0.9, linear: true, kf: [[0, 21], [0.35, 21], [0.95, 6], [1.75, 6], [1.925, -2], [2.1, -6]], dim: true, illum: { mode: 'uniform', start: 1.981, end: 2.044 } }, // treeline 5 (front planting) — final raised so full tree trunks show at bottom-left
  { id: '6', src: 'A6.webp', grow: 0.18, kf: [[0, 56], [0.496, 0], [1.75, 0], [1.925, -1.5]], kfX: [[0, -5.5], [1, -5.5]], illum: { start: 0.248, end: 0.56, reach: 70 } }, // NEEDLE near — already lit (top-down); shifted 5.5% LEFT throughout to open the centre
  { id: '7', src: '7i.webp', grow: 0.18, panX: -0.18, linear: true, kf: [[0, 70], [0.8, 70], [1.262, 14], [1.75, 14], [1.925, 12], [2.1, 0]], kfX: [[0, -5], [1, -5]], scale: 0.9, origin: [0.196, 0.70], dim: 0.09, illum: { mode: 'uniform', start: 1.971, end: 2.034 } }, // balloons (7i) — nudged 3% LEFT + shrunk 10% (anchored at the pole bases); dim floor 0.09 sinks its flag hot spot until it lights
  { id: '8', src: 'A8.webp', grow: 1.5, panX: 0.25, linear: true, kf: [[0, 70], [0.821, 70], [1.282, 14], [1.75, 14], [1.925, 2], [2.1, 0]], dim: true, illum: { mode: 'uniform', start: 1.961, end: 2.024 } }, // golden arches
  { id: '9', src: 'A9.webp', grow: 0.4, linear: true, kf: [[0, 32], [0.35, 32], [0.95, 9], [1.75, 9], [1.925, 5], [2.1, -1]], dim: true, illum: { mode: 'uniform', start: 1.952, end: 2.015 } }, // treeline 9 (mid) — final raised so balloon-pole bottoms end within the foliage
  { id: '10', src: 'A10.webp', grow: 0.3, linear: true, kf: [[0, 70], [0.841, 70], [1.3, 14], [1.75, 14], [1.925, 11], [2.1, 0]], dim: true, illum: { mode: 'uniform', start: 1.942, end: 2.005 } }, // roof (climate-pledge arena)
  { id: '11', src: 'A11.webp', grow: 0.14, linear: true, kf: [[0, 30], [0.35, 30], [0.95, 12], [1.42, 12], [1.56, 10], [1.925, 8], [2.1, 0]], dim: true, illum: { mode: 'uniform', start: 1.932, end: 1.995 } }, // treeline 11 (back) — creeps up a touch during the split to sell it; illuminates FIRST
  // NEEDLE far (12) — hides DIRECTLY BEHIND needle 6 (its disc tracks 6's disc:
  // +8.9% lower, −19.6% left) until c4 sits 3/4 up screen, then slides
  // sideways/up into its resting spot and lights from the top [1.57, 1.71].
  { id: '12', src: 'A12.webp', grow: 0.12,
    kf:  [[0, 65], [0.496, 9], [1.42, 9], [1.56, 0], [1.925, -1.5]],
    kfX: [[0, -25.1], [1.42, -25.1], [1.56, -5.5]],
    illum: { start: 1.44, end: 1.55, reach: 70 } },

  // ── ELEVATORS (decorative; ride the needle trunks) ──────────────────────
  // `decor` = not independently hoverable; `deckParent` = lifts with its needle.
  // FRONT elevator clones needle 6's motion exactly (the art is baked to that
  // trunk), so it stays on the trunk through the whole sequence. Sits just in
  // front of needle 6 (z 931).
  { id: '6e', src: 'elevator-top.webp', decor: true, deckParent: '6', z: 931, dim: true,
    kf:  [[0, 56], [0.496, 0], [1.75, 0], [1.925, -1.5]],
    kfX: [[0, -4.6], [1, -4.6]],
    illum: { mode: 'uniform', start: 0.248, end: 0.56 } },
  // BACK elevator: needle 12's motion + a constant offset that relocates the car
  // from the front-needle trunk onto the BACK needle's trunk (the translation
  // cancels, so a constant offset tracks it everywhere), shrunk 0.78. Scales
  // around the car (origin) so it stays put. Sits just in front of needle 12.
  { id: '12e', src: 'elevator-bottom.webp', decor: true, deckParent: '12', z: 871, dim: true,
    scale: 0.78, origin: [0.2144, 0.7615],
    kf:  [[0, 28.85], [0.496, -27.15], [1.42, -27.15], [1.56, -36.15], [1.925, -37.65]],
    kfX: [[0, -3.04], [1.42, -3.04], [1.56, 16.56]],
    illum: { mode: 'uniform', start: 1.44, end: 1.55 } },
];

export const MOVING_LAYERS = LAYER_DEFS.map((d, i) => ({
  ...d, // id, grow, and any panX / origin / scale / decor / deckParent
  src: asset(d.src),
  z: d.z != null ? d.z : 1000 - i * 10, // explicit z wins; else front-to-back order
}));

/**
 * Spotlights (searchlights). Layers 13–16 are soft, semi-transparent beams
 * hinged at their lamp (the narrow base of each wedge, measured from the art).
 * Each swings back and forth ~90° (±`amp`) about that hinge with an eased
 * pendulum motion. All share the same `period` (same speed) but carry a
 * different `delay` so they are never synchronized. Time-based — independent
 * of scroll.
 */
export const SPOTLIGHTS = {
  // `stretch` lengthens each beam from its lamp so the far tip runs off the
  // frame and gets clipped — no visible terminus, so no fade needed.
  // `onAt` = scroll progress at which the beam switches on (one-by-one), timed
  // to begin as the needle finishes rising. `drop` lowers the whole beam so its
  // lamp/hinge sits behind the treeline (hidden); raise it later as the
  // treelines lift with perspective.
  13: { pivot: [0.32, 0.72], amp: 45, period: 17.0, delay: -0.0, stretch: 1.9, onAt: 0.192, drop: 0.16 },
  14: { pivot: [0.82, 0.70], amp: 45, period: 17.0, delay: -5.3, stretch: 1.9, onAt: 0.256, drop: 0.16 },
  15: { pivot: [1.0, 0.65], amp: 45, period: 17.0, delay: -9.7, stretch: 1.9, onAt: 0.32, drop: 0.16 },
  16: { pivot: [0.01, 0.65], amp: 45, period: 17.0, delay: -13.1, stretch: 1.9, onAt: 0.384, drop: 0.16 },
};

/**
 * Star field (layer 17). Split into independent groups so neighbouring stars
 * glimmer out of sync — a single field pulsing in unison reads as fake. Each
 * group fades very subtly on its own slow cycle.
 */
export const STARFIELD = {
  // periods ~×0.8 of the originals (2026-07) — livelier than the slow
  // breathe, calmer than the first frantic pass
  17: [
    { src: asset('17-a.webp'), period: 1.8, delay: -0.0 },
    { src: asset('17-b.webp'), period: 2.5, delay: -0.7 },
    { src: asset('17-c.webp'), period: 1.5, delay: -1.5 },
    { src: asset('17-d.webp'), period: 2.1, delay: -2.2 },
    { src: asset('17-e.webp'), period: 2.9, delay: -0.4 },
    { src: asset('17-f.webp'), period: 1.7, delay: -2.9 },
    { src: asset('17-g.webp'), period: 3.3, delay: -1.1 },
    { src: asset('17-h.webp'), period: 2.3, delay: -3.4 },
  ],
};

export const BACKGROUND_LAYERS = Array.from(
  { length: BG_END - BG_START + 1 },
  (_, i) => {
    const n = BG_START + i;
    return {
      n,
      src: asset(`${n}.webp`),
      z: 100 - n,
      spot: SPOTLIGHTS[n] || null,
      twinkle: STARFIELD[n] || null,
    };
  }
);

// Temporary whole-comp fallback used only if no real layers load.
export const PREVIEW = {
  a: asset('_preview-A.png'),
  b: asset('_preview-B.png'),
};
