# Two Space Needles — Project Handoff

This file is the orientation doc for any Claude session working on this project.
Read it fully before editing. It captures the intent, the architecture, the many
hand‑tuned values, and the conventions — so you don't re‑derive (or accidentally
undo) work that took a lot of iteration.

---

## 1. What this is

A cinematic, mobile‑first campaign website for **Two Space Needles** — a
tongue‑in‑cheek but sincerely‑presented civic proposal to build a second,
identical Space Needle beside the first (so that, finally, you can see the Space
Needle from the top of the Space Needle).

It is **not** a normal marketing site. It opens as a staged, self‑playing
cinematic sequence built from a layered illustration of the 1962 Century 21
World's Fair, and then becomes an **interactive "deck of cards" menu**: the
illustrated landmarks are grabbable, and pulling one up opens a full‑screen card
carrying that section's copy.

**Tone / art direction:** retro‑futuristic (1962 World's Fair), architectural,
deliberate. Palette: midnight navy, cerulean, vermilion, mustard/gold, cream.
Copy is tight, declarative, deadpan, quietly absurd but never winking. Avoid
filler and "AI‑drafted" connective tissue ("Introducing the… a bold proposal
to…"). See §14 for the real approved copy source.

There is a **separate "Place Needles" game** in sibling folders. **Do not touch
it.** This project is only the website (`two-space-needles/`).

---

## 2. Golden rules (read these)

- **Do NOT "clean up" numbers.** The animation is full of hand‑eyeballed values
  (offsets, clip‑band percentages, kfX nudges measured in "pixels"). They look
  arbitrary because they *are* — tuned against the user's screen over many
  iterations. Never round, normalize, or "simplify" them without being asked.
- **This site does NOT call the Claude API.** It's a plain React/Vite app. There
  is no model ID, no `thinking`/`effort` config, nothing from the API migration
  guide applies here. Switching the model that powers your session changes
  nothing in this codebase.
- **Preserve the campaign copy in `src/data/inserts.js` unless asked.** Use the
  user's exact words. When improving copy, propose it and get sign‑off — the
  user is sensitive to unrequested rewrites.
- **Do not reintroduce the retired systems** (dolly motion model, A/B artwork
  crossfade, the `PromotionalFolder` component). They're kept in the tree for
  reference only.
- **Validate JSX/JS after every edit** (see §3) — `npm run build` does not work
  in the sandbox.
- Work through changes with the user's **pixel‑level, iterative** style: small
  targeted edits, expect follow‑up nudges ("up 5px", "slightly more left").

---

## 3. Tech stack, running, and validating

- **React 18 + Vite 5.** Vanilla JSX (no TypeScript). One global stylesheet per
  concern; the parallax has its own `parallax.css`. No CSS framework.
- Dev pipeline (user's): **Cursor → GitHub → Vercel.** Vite auto‑detected on
  Vercel (`npm run build`, output `dist`).

**Run locally:**
```
cd two-space-needles
npm install          # do a FRESH install — committed node_modules is sandbox-built and won't run on macOS
npm run dev
npm run build        # produces dist/
```

**Build gotcha in this sandbox:** `npm run build` fails here with a rollup native
binary error (`@rollup/rollup-linux-…` / macOS mismatch) because `node_modules`
was populated on a different OS. This is an environment issue, **not** a code
bug — it builds fine on the user's Mac after a fresh `npm install`.

**Validation trick (use this instead of building):** parse the file with the
project's own Babel to catch syntax errors:
```
node --input-type=module - <<'PY'
import { parse } from './node_modules/@babel/parser/lib/index.js';
import { readFileSync } from 'fs';
parse(readFileSync('src/components/parallax/ParallaxScene.jsx','utf8'),{sourceType:'module',plugins:['jsx']});
console.log('OK');
PY
```

**Verifying visuals:** there is no live browser here. Geometry/animation was
verified throughout by writing throwaway **Python + PIL** scripts that composite
the `public/parallax/*.webp` layers with the same transforms the code uses, then
viewing the output PNG. This is the go‑to way to check a layer/mask/travel
position before handing back to the user.

---

## 4. File map

```
two-space-needles/
├─ index.html
├─ src/
│  ├─ App.jsx                      # renders <ParallaxScene/>; PromotionalFolder import commented out
│  ├─ main.jsx                     # React entry
│  ├─ data/
│  │  └─ inserts.js                # campaign copy (7 inserts) — see §14
│  ├─ hooks/
│  │  └─ useParallaxInput.js       # scroll ownership + self-playing "commit" runs (§7)
│  └─ components/parallax/
│     ├─ ParallaxScene.jsx         # THE component — renders everything, owns deck/card/glimmer state
│     ├─ layers.js                 # layer manifest: LAYER_DEFS, MOVING_LAYERS, SPOTLIGHTS, STARFIELD, BACKGROUND_LAYERS
│     ├─ parallax.css              # ALL styles (frame, layers, transitions, elevators, cards, hint, glimmers)
│     └─ CardReader.jsx            # OLD modal card reader — preserved but UNUSED by the current flow
└─ public/
   ├─ parallax/                    # all illustration assets (see below)
   └─ logo/                        # logo.webp (no stars) + logo-stars.webp
```

**`public/parallax/` asset inventory:**
- `A1.webp … A12.webp` — the 12 illustrated moving layers (front→back). `B1…B12`
  exist but are unused (retired A/B system).
- `2i.webp`, `2ii.webp` — old layer 2 split into two (glove/atomic streetlight +
  pavilion). `ground.webp` — the pink floor plane. `7i.webp` — the current
  balloons art (replaced `A7.webp`).
- `13.webp…18.webp` — background plates. `13–16` are the searchlight beams,
  `17` is the starfield (also split into `17-a.webp … 17-h.webp` for independent
  twinkle), `18` is the sky plate (navy + a pink horizon band at the bottom).
- `elevator-top.webp`, `elevator-bottom.webp` — the elevator car baked high /
  low on the FRONT needle's trunk (the two extremes). Also space‑named originals
  `"elevator top.webp"` etc. — use the hyphenated copies.
- `A2A4A5_fullcard.webp`, `A3A5_fullcard.webp`, `A7A11_fullcard.webp`,
  `A8A9_fullcard.webp`, `A9A10A11_fullcard.webp` — the five full‑screen cards
  (illustration up top, dark body below for copy). Note: `A_fullcard.webp` was
  removed and is intentionally NOT mapped (the front needle is not a card).
- `*_preview-A/B.png`, `A9A10A11_fullcard.jpg` — misc/legacy.

All coordinates in the code are expressed against the **1080×1920 (9:16)** art
canvas.

---

## 5. The core model: one `progress` value drives everything

Everything is a function of a single scalar **`progress`** that runs `0 → 1.8`
(`MAX_PROGRESS`). The document never scrolls; `useParallaxInput` intercepts
wheel/touch and converts it to `progress`, and the whole scene is rendered from
that number every frame. There is no native scroll, so no bounce/overscroll.

`MODE = 'slide'` is active: each moving layer is a full‑frame image translated
**up/down** (and sometimes sideways) from a start position to its rest position.
(`'dolly'` — scale‑from‑bottom — is retired but its branch remains.)

---

## 6. The layer system (`layers.js`)

`LAYER_DEFS` is an array **front → back**. `MOVING_LAYERS` maps it, assigning
`z = 1000 − index*10` unless a `z` is given explicitly (elevators do). Per‑layer
fields:

- **`kf`** — vertical keyframes: array of `[progress, yOffsetPercent]`. `kfPos()`
  interpolates (smoothstep, or **linear** if `linear: true`), holding at the
  first/last value outside the range. `yOffset` is % of frame height; **positive
  = down**, negative = up. `0` = the layer's baked ("A composition") rest spot.
  `[[0,140],[1,140]]` (`PARKED`) = fully below the viewport.
- **`kfX`** — horizontal keyframes, same shape (% of frame width). Used for the
  needles' leftward shift and the 2nd needle's slide, and the elevators.
- **`dim`** — `true` → static dark silhouette `brightness(0.16) saturate(0.35)`.
  A **number** dims harder (e.g. monorail `0.1`, balloons `0.09`) to sink a
  near‑white hot‑spot into the navy until it illuminates.
- **`illum`** — how the layer lights up (see §8).
- **`scale` + `origin`** — optional static resize about a point (balloons `0.9`;
  back elevator `0.78`). `origin` is `[x,y]` fractions.
- **`grow` / `panX` / `offsetY`** — only used by the retired dolly mode; ignore.
- **`decor: true`** — elevators: not independently hoverable; excluded from the
  attract ripple. **`deckParent`** — the layer id this decor rides (lifts with).

`kfPos(kf, progress, linear)` lives in `ParallaxScene.jsx` and is the single
interpolation function used everywhere (render, hit‑testing, glimmers).

---

## 7. The staged animation (`useParallaxInput.js` + `COMMIT_RUNS`)

The scroll hook converts input to progress AND runs **self‑playing "commit"
runs**. `COMMIT_RUNS` is an array of **runs**; each run is an array of segments
`{start, end, duration}`. When the user scrolls forward across a run's first
`start`, that run **auto‑advances progress on its own** at each segment's pace,
then stops at the run's end and waits for the next scroll. So: **3 runs = 3
scrolls**, each self‑completing.

Current structure (`MAX_PROGRESS = 1.8`):

- **Stage 1 (intro)** `run[0]`: `0.024→0.496` (1.95s, first needle rises,
  dramatic) · `0.496→0.79` (2.7s, the world rises into a clustered‑low, dimmed
  composition, front‑first) · `0.79→0.85` (1.3s, the back treeline alone drifts
  up and locks in — a soft tail).
- **Stage 2 (second needle)** `run[1]`: `0.86→1.0` (2.6s, `lockPace: true`). The
  far needle (12) slides out from directly behind needle 6 and lights top‑down,
  "as if the first split in two." `lockPace` means forward scroll can't rush it —
  stays dramatic.
- **Stage 3 (finale)** `run[2]`: `1.005→1.25` (3.1s, viewpoint rises — all lower
  layers shift up in parallax) · `1.25→1.5` (4.2s, layers lock into final
  positions and **illuminate one‑by‑one back→front**) · `1.5→1.8` (3.0s, the
  copy swaps to the campaign line, then the logo reveals beneath it).

**Key hook behaviors (all in `useParallaxInput.js`):**
- `maxProgress` option lets progress exceed 1.0 (so stages append without
  rescaling earlier keyframes). Currently `1.8`.
- **Scroll‑to‑accelerate:** while a run auto‑plays, a *forward* gesture ADDS to
  the playhead (capped at the current stage's end) — impatient users fast‑forward;
  passive users get the deliberate pace. A `lockPace` run ignores this.
- **Reverse hijack:** a *backward* gesture at any time cancels the auto‑play and
  hands control back (also cancels play‑through).
- **`nudge()` / `playAll()`** are returned for the scroll‑cue button: `playAll`
  chains every remaining run together (the ✕/arrow "play the whole thing").
- The hook is disabled (`enabled:false`) once the deck is live (see §9) so the
  card content and page can scroll natively.

**The end state (`progress ≈ 1.8`) is the fully assembled, illuminated scene =
the interactive deck.**

---

## 8. Illumination

Dimmed layers light up via `illum`. Two modes, both rendered in `ParallaxScene`:

- **`mode: 'uniform'`** — the whole layer ramps `brightness/saturate` from its
  dim floor (`0.16`, or its numeric `dim`) up to full colour over
  `[illum.start, illum.end]`. Used by every building/treeline. In Stage 3 these
  windows are **staggered back→front** (treeline 11 first at `1.26`, plaza last
  at `1.414`). Tall layers (glove statue `2i`, monorail `3`) are pulled earlier
  because they read above their neighbours.
- **top‑down (default)** — used by the needles: a dark base + a full‑colour copy
  revealed from the top down via a CSS mask, `reach` capping how far down the
  light goes (needles use `reach: 70`, so the base stays dark and blends into the
  treeline). The reveal band starts fully above the frame at `t=0` so an unlit
  needle reads completely dark (fixes the "spire pokes out" bug for the hidden
  2nd needle).

---

## 9. The deck (post‑intro interactive menu) — in `ParallaxScene.jsx`

Once `progress ≥ MAX_PROGRESS − 0.01`, `deckReady/deckOn` is true and the scene
becomes interactive. Scroll input is disabled so the deck owns pointer input.

**Alpha‑accurate hit‑testing.** Layers are full‑frame transparent PNGs stacked
on top of each other, so a plain hover would trigger the topmost image
everywhere. Instead, on mount each moving layer's alpha is sampled into a
downscaled grid (`alphaMaps`, 180×320). `deckHitTest(x,y)` inverts each layer's
final transform (translate/scale/origin, using `kfPos` at `MAX_PROGRESS`) and
returns the **topmost layer that's actually opaque** under the cursor.
- `DECK_STATIC = {ground, 1}`: these occlude the cursor (block) but are never
  selectable and never lift — they read as the ground/foreground.
- `decor` layers (elevators) are skipped in hit‑testing; they lift with their
  `deckParent` needle.

**Interaction:**
- **Desktop hover** → the hit layer lifts `−3%` (`deckLift`); others hold.
- **Click / tap / drag** → `active` layer lifts `−8%`. (There is no compress —
  it was removed; only the hovered/active layer moves.)
- **Idle attract ripple** — after the deck settles, at **5s then every 15s**, a
  wave rolls across the layers (each layer's *container* bounces up ~3% with a
  slight overshoot, staggered front→back by depth) to hint interactivity. It's
  suppressed while the user is hovering/dragging or a card is open. It runs on
  the container (`.parallax-layer.rippling`) so it composes with the image's
  positioning transform. Elevators are excluded (they have their own animation).

The layer‑transition timing is split by a class on `.parallax-frame`:
`deck-on` = 0.3s (snappy hover); `card-mode` = 0.8s bouncy (card open/close, see
§10). Per‑layer `transition-delay` (set inline) makes the card‑close a ripple.

---

## 10. The cards (open a menu layer)

`CARD_MAP` maps five menu layer ids to a card:

| layer | landmark        | card art               | section       | inserts                          |
|-------|-----------------|------------------------|---------------|----------------------------------|
| `2ii` | science pavilion| A2A4A5_fullcard        | **About**     | oversight                        |
| `3`   | monorail        | A3A5_fullcard          | **The Proposal** | proposal                      |
| `7`   | balloons        | A7A11_fullcard         | **FAQ**       | faq                              |
| `8`   | golden arches   | A8A9_fullcard          | **The Vision**| vision                           |
| `10`  | arena/roof      | A9A10A11_fullcard      | **Get Involved** | movement, merch, donate-land  |

Each entry also has `startY` (how far the card is pushed DOWN at open so its
top‑of‑card illustration lines up with that landmark in the scene) and
`contentTop` (where the copy field begins below the illustration). These are
per‑card, measured from the art — tune them live.

**Open/close choreography** (state: `openLayer`, `cardRaised`, `cardClosing`):
- **Open:** clicking a menu layer mounts its card at `startY` (aligned to the
  landmark — a seamless swap), then a rAF flips `cardRaised` so it **glides up to
  `translateY(0)`** and fills the screen. Simultaneously **every moving layer
  drops fully off‑screen** (`deckLift += 120`) — only the background plates stay.
  The copy/logo/glimmers fade out; the card z is `layerZ+5`.
- **Close:** the card **fades out (opacity, 0.6s) as it rolls back down** (0.85s),
  so it vanishes as its counterpart layer slides back — a crossfade that hides
  any endpoint mismatch. All layers **scroll back up together**, staggered
  front→back (the `card-mode` per‑layer `transition-delay`) with a small landing
  bounce (a "ripple"). Teardown (`openLayer=null`) waits ~1.35s so the wave
  finishes before `card-mode` is removed.
- **Ground** keeps its regular z (behind the plaza) and rides back in behind the
  foreground — it does NOT boost on top.
- **Close control:** a **✕ button at the bottom‑right of the card**
  (`.parallax-card-close`). Click‑anywhere‑to‑close was removed so content links
  and scrolling work; the card body is reserved for copy.
- **Content:** `.parallax-card-content` is an absolutely‑positioned, scrollable
  field starting at `contentTop`. It renders a big **section heading**
  (`CARD_MAP.section`, the intuitive nav‑style label) followed by `CardSection`
  per insert (title = subheading, tagline, rule, body, list, FAQ, CTA, secondary).
  It fades in once the card is raised.

The logo, while a card is open, drops to `z:850` (below the cards) AND fades, so
cards roll up **in front of** it in the sky rather than the logo flashing on top.

---

## 11. The elevators (masked clip + travel) — `layers.js` + `parallax.css`

Both needles have a small elevator car that (a) is locked to its needle and (b)
travels the spine on its own continuous cycle, disappearing behind the disc and
the mid support arms. This is the most intricate piece; read carefully.

Each elevator has a **custom render branch** in `ParallaxScene.jsx` (search
`layer.id === '6e'` and `'12e'`), not the generic layer render:
```
<div class="parallax-layer">                        // z-index
  <div class="elevator-clip[ elevator-clip--back]"  // WRAPPER: needle-tracking transform + hard mask
       style={transform, transformOrigin, transitionDelay}>
    <img class="elevator-front|elevator-back"       // CAR: travel animation + illum filter
         style={filter}/>
  </div>
</div>
```
- The **wrapper** carries the needle‑tracking `transform` (the elevator's
  `kf`/`kfX`/`scale`) and a **hard mask** (`.elevator-clip`) with two invisible
  bands defined by CSS vars: `--disc` (top: the spine/disc junction) and
  `--mid-top`/`--mid-bot` (the support‑arm section). The car is visible only
  *between* those bands — crisp edges, no fade. The mask is on the wrapper (in
  wrapper‑local coords, before the transform) so a stationary line correctly
  clips the **moving** car inside.
- The **car image** runs the `@keyframes elevator-travel` (front) /
  `elevator-travel-back` (back) — a constant‑speed (`linear`) `translateY` with
  **pauses at both ends**: ~9s up, ~9s paused (tucked into the disc), ~9s down,
  ~9s paused at bottom. The front is **flipped** (`scaleX(-1)` about the car's
  x‑origin, `22% 50%`) to face the other way; the back is not flipped and runs a
  **37s** cycle (one extra second at the top) so the two are out of sync.
- Front mask vars (in `.elevator-clip`): `--disc: 23.1%`, `--mid-top: 36.5%`,
  `--mid-bot: 52%`. Back overrides (`.elevator-clip--back`): `--disc: 42%`,
  `--mid-top: 55%`, `--mid-bot: 70%` (its wrapper is scaled 0.78, so screen‑pixel
  nudges ≈ 1.28× in these percentages).
- The wrapper is added to the `deck-on`/`card-mode` transition selectors so it
  drops/hovers smoothly with the deck and cards.

Elevator geometry was tuned in "pixels" per the user's eye — **do not normalize
these numbers.**

---

## 12. Glimmers (`GlimmerLayer`)

A `<canvas>` over the frame (`z:1050`, below the atmospheric film) spawns
short‑lived warm glints at random points where the **topmost opaque layer is
sparkle‑eligible**, so light appears to catch the illustrated objects. It reuses
`alphaMaps` and the same transform inversion as hit‑testing (sorted by z).
`GLIMMER_EXCLUDE = {1,5,9,11}` (plaza + the three treelines) and `decor` layers
never sparkle. Intensity ramps in as the scene finishes illuminating
(`progress 1.4→1.5`) and is 0 while a card is open.

---

## 13. Scroll cue

`.parallax-hint` is a mustard **up chevron** (a `<button>`) that appears whenever
the playhead is parked at a stage trigger (`HINT_POINTS = [0, 0.85, 1.0]`).
Clicking it runs `parallax.playAll()` — plays the entire sequence straight
through (each stage still at its own pace). It pulses/bobs and respects
reduced‑motion.

---

## 14. Copy / content (`src/data/inserts.js`)

`INSERTS` holds 7 entries (`oversight, proposal, vision, movement, faq, merch,
donate-land`), each `{ id, title, tagline, body[], list?, faq?, cta?, secondary?,
… }`. The cards render `title` as a **subheading** under the card's `section`
heading. The old `stamp`/`tabNum` "Exhibit A / № I" chrome was removed from the
render (fields remain in the data, unused).

The copy was tightened to match the user's real Squarespace site and de‑AI'd.
**Source of truth for approved wording is the user's live site** (Home / About /
Donate / Shop / the change.org petition). Notable real lines to keep in the
voice: *"From the top of the Space Needle, you can't see the Space Needle,"* and
the petition title *"Construct a Second Space Needle so we may better admire the
first."* Get sign‑off before rewording.

---

## 15. Background plates (`SPOTLIGHTS`, `STARFIELD`, `BACKGROUND_LAYERS`)

- **Searchlights** (13–16): soft `mix-blend: screen` beams hinged at a lamp
  pivot, each swinging ±45° on an eased pendulum, same period, desynced by
  `delay`, `stretch`ed so tips run off‑frame, `drop`ped so hinges hide behind the
  treeline. They switch ON one‑by‑one past their `onAt` via a binary `is-on`
  class with **asymmetric transitions** (quick in, delayed slow out on reverse).
  On‑opacity is `0.44`.
- **Stars** (17): 8 independent groups (`17-a…h`) each twinkling on its own slow
  cycle so they never pulse in unison.
- **Pink‑dim** (18): the sky plate has a bright pink horizon band at the bottom.
  A dimmed, bottom‑masked copy is overlaid (`.parallax-bg-pinkdim`) so that pink
  reads dark while the layers above it are dimmed silhouettes.

---

## 16. Known issues / gotchas

- `npm run build` fails **in the sandbox only** (rollup native binary / OS
  mismatch). Fine on the user's Mac after fresh `npm install`. Use the Babel
  parse check to validate.
- No live browser in the sandbox → verify visuals with Python/PIL composites.
- Two elevator source files have spaces in their names (`"elevator top.webp"`);
  the code uses the hyphenated copies (`elevator-top.webp`). Keep both.
- `A_fullcard.webp` was deleted; the front needle (layer `6`) is intentionally
  NOT in `CARD_MAP` (clicking it just does the deck lift). Don't re‑add it.
- Lots of `_fullcard` / `B*` / `preview` assets are legacy; only the five cards
  in `CARD_MAP` and the `A1–A12`/support layers are live.

---

## 17. Open / next items

- **Desktop version.** Everything so far is the **mobile‑first / universal**
  build. The richer "About" scrollytelling (the fuller narrative, the 4‑point
  vision list, longer paragraphs) is **deferred to a desktop‑exclusive build**.
  Keep the mobile cards concise.
- **Card `contentTop` per card** — placement of copy below each illustration;
  best dialed in live.
- **Back‑elevator band tuning** — its `--disc/--mid-top/--mid-bot` and travel
  extremes (`elevator-travel-back` `translateY` values) are best‑estimates that
  benefit from a live pass (the front's were tuned pixel‑by‑pixel).
- **Card ↔ landmark mapping / section labels** — all in `CARD_MAP`; easy to
  re‑pair.
- Possible future: wire the copy improvements the user approves, and revisit
  whether the second‑needle "times two" splash line should match the live site's
  *"timeless view, times two."*

---

## 18. Deployment reminder

The whole app is self‑contained in `two-space-needles/` with all assets under
`public/`. To ship: `git init` → push to GitHub → import on Vercel (auto‑detects
Vite). No backend, no env vars, no external asset host.
