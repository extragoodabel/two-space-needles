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
// STAGE MAP (scroll progress 0 → 1)
//   0     → 0.80  INTRO: needle 6 rises + lit, then the world rises into the
//                 clustered-low composition, all dimmed. (Self-driving run 1.)
//   0.80  → 1.00  SECOND NEEDLE: on the next scroll, needle 12 emerges from
//                 directly behind needle 6 and slides sideways into its resting
//                 spot; the back treeline (11) creeps up a touch to sell it.
//                 (Self-driving run 2.)
const PARKED = [[0, 140], [1, 140]];
const LAYER_DEFS = [
  // BUILDINGS — rise out of the ground from hidden (≈70) to a clustered-LOW
  // position (NOT final), at a CONSTANT (linear) pace, slightly faster than the
  // treelines, front-first. Stay DIMMED so they don't pull focus. All intro
  // breakpoints are scaled into [0, 0.80] to leave room for the second needle.
  // STAGE 3 (progress 1.0 → 1.25): every lower layer shifts UP in parallax
  // (closer layers — bigger `grow` — travel more) so the viewpoint reads as
  // rising, revealing more of the landscape below. Tails appended as
  // [1.0, hold][1.25, hold − rise]; the needles barely move (far = least
  // parallax) but get a hair of rise so they don't feel detached.
  // STAGE 4 (progress 1.25 → 1.5): the dimmed layers continue UP and lock into
  // their final composed positions (offset 0), and each ILLUMINATES (uniform
  // dark→colour) one by one, BACK → FRONT (treeline 11 first … plaza last).
  // illum ramps from each layer's dim floor up to full colour over [start,end].
  { id: '1', src: 'A1.webp', grow: 1.2, linear: true, kf: [[0, 70], [0.496, 70], [0.704, 3], [1.0, 3], [1.25, 0], [1.5, 0]], dim: true, illum: { mode: 'uniform', start: 1.414, end: 1.5 } }, // plaza (front) — locks flush to the window bottom; illuminates LAST
  { id: '2i', src: '2i.webp', grow: 0.6, linear: true, kf: [[0, 70], [0.528, 70], [0.736, 6], [1.0, 6], [1.25, 1], [1.5, 0]], dim: true, illum: { mode: 'uniform', start: 1.315, end: 1.405 } }, // glove statue — TALLEST of these; illuminates before the monorail (reads above it)
  { id: '2ii', src: '2ii.webp', grow: 0.4, linear: true, kf: [[0, 70], [0.544, 70], [0.752, 4], [1.0, 4], [1.25, 0], [1.5, 0]], dim: true, illum: { mode: 'uniform', start: 1.386, end: 1.476 } }, // pavilion
  { id: '3', src: 'A3.webp', grow: 0.55, linear: true, kf: [[0, 70], [0.56, 70], [0.768, 4], [1.0, 4], [1.25, -1], [1.5, 0]], dim: 0.1, illum: { mode: 'uniform', start: 1.345, end: 1.435 } }, // monorail — TALL, illuminates after the glove statue (which reads above it); dim floor 0.1 sinks its corner hot spot until it lights
  { id: '4', src: 'A4.webp', grow: 0.45, linear: true, kf: [[0, 70], [0.576, 70], [0.784, 4], [1.0, 4], [1.25, 0], [1.5, 0]], dim: true, illum: { mode: 'uniform', start: 1.358, end: 1.448 } }, // arch panel
  { id: 'ground', src: 'ground.webp', grow: 1.2, origin: [0.5, 0.864], linear: true, kf: [[0, 70], [0.512, 70], [0.72, 10], [1.0, 10], [1.25, -1], [1.5, 0]], dim: true, illum: { mode: 'uniform', start: 1.344, end: 1.434 } }, // floor
  { id: '5', src: 'A5.webp', grow: 0.9, linear: true, kf: [[0, 21], [0.79, 6], [1.0, 6], [1.25, -2], [1.5, -6]], dim: true, illum: { mode: 'uniform', start: 1.33, end: 1.42 } }, // treeline 5 (front planting) — final raised so full tree trunks show at bottom-left
  { id: '6', src: 'A6.webp', grow: 0.18, kf: [[0, 56], [0.496, 0], [1.0, 0], [1.25, -1.5]], kfX: [[0, -5.5], [1, -5.5]], illum: { start: 0.248, end: 0.56, reach: 70 } }, // NEEDLE near — already lit (top-down); shifted 5.5% LEFT throughout to open the centre
  { id: '7', src: '7i.webp', grow: 0.18, panX: -0.18, linear: true, kf: [[0, 70], [0.4, 70], [0.76, 14], [1.0, 14], [1.25, 12], [1.5, 0]], kfX: [[0, -5], [1, -5]], scale: 0.9, origin: [0.196, 0.70], dim: 0.09, illum: { mode: 'uniform', start: 1.316, end: 1.406 } }, // balloons (7i) — nudged 3% LEFT + shrunk 10% (anchored at the pole bases); dim floor 0.09 sinks its flag hot spot until it lights
  { id: '8', src: 'A8.webp', grow: 1.5, panX: 0.25, linear: true, kf: [[0, 70], [0.416, 70], [0.776, 14], [1.0, 14], [1.25, 2], [1.5, 0]], dim: true, illum: { mode: 'uniform', start: 1.302, end: 1.392 } }, // golden arches
  { id: '9', src: 'A9.webp', grow: 0.4, linear: true, kf: [[0, 32], [0.79, 9], [1.0, 9], [1.25, 5], [1.5, -1]], dim: true, illum: { mode: 'uniform', start: 1.288, end: 1.378 } }, // treeline 9 (mid) — final raised so balloon-pole bottoms end within the foliage
  { id: '10', src: 'A10.webp', grow: 0.3, linear: true, kf: [[0, 70], [0.432, 70], [0.79, 14], [1.0, 14], [1.25, 11], [1.5, 0]], dim: true, illum: { mode: 'uniform', start: 1.274, end: 1.364 } }, // roof (climate-pledge arena)
  { id: '11', src: 'A11.webp', grow: 0.14, linear: true, kf: [[0, 30], [0.85, 12], [1.0, 10], [1.25, 8], [1.5, 0]], dim: true, illum: { mode: 'uniform', start: 1.26, end: 1.35 } }, // treeline 11 (back) — illuminates FIRST
  // NEEDLE far (12) — hides DIRECTLY BEHIND needle 6 through the whole intro
  // (its disc tracks 6's disc: +8.9% lower, −19.6% left), then on run 2 slides
  // sideways/up into its own resting spot and lights from the top, as if the
  // first needle split in two. Stage 3 gives it the same hair of rise as 6.
  { id: '12', src: 'A12.webp', grow: 0.12,
    kf:  [[0, 65], [0.496, 9], [0.86, 9], [1.0, 0], [1.25, -1.5]],
    kfX: [[0, -25.1], [0.86, -25.1], [1.0, -5.5]],
    illum: { start: 0.88, end: 0.99, reach: 70 } },

  // ── ELEVATORS (decorative; ride the needle trunks) ──────────────────────
  // `decor` = not independently hoverable; `deckParent` = lifts with its needle.
  // FRONT elevator clones needle 6's motion exactly (the art is baked to that
  // trunk), so it stays on the trunk through the whole sequence. Sits just in
  // front of needle 6 (z 931).
  { id: '6e', src: 'elevator-top.webp', decor: true, deckParent: '6', z: 931, dim: true,
    kf:  [[0, 56], [0.496, 0], [1.0, 0], [1.25, -1.5]],
    kfX: [[0, -4.6], [1, -4.6]],
    illum: { mode: 'uniform', start: 0.248, end: 0.56 } },
  // BACK elevator: needle 12's motion + a constant offset that relocates the car
  // from the front-needle trunk onto the BACK needle's trunk (the translation
  // cancels, so a constant offset tracks it everywhere), shrunk 0.78. Scales
  // around the car (origin) so it stays put. Sits just in front of needle 12.
  { id: '12e', src: 'elevator-bottom.webp', decor: true, deckParent: '12', z: 871, dim: true,
    scale: 0.78, origin: [0.2144, 0.7615],
    kf:  [[0, 28.85], [0.496, -27.15], [0.86, -27.15], [1.0, -36.15], [1.25, -37.65]],
    kfX: [[0, -3.04], [0.86, -3.04], [1.0, 16.56]],
    illum: { mode: 'uniform', start: 0.88, end: 0.99 } },
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
  17: [
    { src: asset('17-a.webp'), period: 2.3, delay: -0.0 },
    { src: asset('17-b.webp'), period: 3.1, delay: -0.7 },
    { src: asset('17-c.webp'), period: 1.9, delay: -1.5 },
    { src: asset('17-d.webp'), period: 2.7, delay: -2.2 },
    { src: asset('17-e.webp'), period: 3.6, delay: -0.4 },
    { src: asset('17-f.webp'), period: 2.1, delay: -2.9 },
    { src: asset('17-g.webp'), period: 4.2, delay: -1.1 },
    { src: asset('17-h.webp'), period: 2.9, delay: -3.4 },
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
