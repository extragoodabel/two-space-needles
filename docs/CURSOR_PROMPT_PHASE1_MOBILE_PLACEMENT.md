# Cursor Prompt: Phase 1 Mobile — Needle Placement Only

**Copy and paste the section below into Cursor. Do not change desktop behavior.**

---

## Phase 1 Mobile: Needle Placement Mode (mobile-only) — DO NOT CHANGE DESKTOP

### Context

We are adding mobile usability without breaking desktop behavior. Desktop placement (cursor-follow needle preview + click-to-place) must remain exactly as-is.

### Goal (mobile only)

On mobile, needle placement is explicit and mode-driven:

1. User taps **Place Needle** to enter placement mode.
2. While in placement mode, show a faint overlay: **Tap on map to place needle**.
3. The next tap on the map places a new needle at that lat/lng.
4. Placement mode turns OFF immediately after placement.
5. When placement mode is OFF, Google Maps gestures behave normally (pan, pinch zoom, rotate, tilt).
6. When placement mode is ON, avoid accidental map interactions where practical, but do **not** break pinch-to-zoom globally.

### Strict constraints

- **Do NOT** refactor desktop placement logic.
- **Do NOT** change: photo pipeline, view mode, camera logic, polaroid UI, needle rendering, or existing needle data model.
- Only add mobile-specific UI and event handling for placement.

---

### Implementation steps

#### A) Mobile detection (centralized)

Add a helper (hook or function) that returns `isMobile`:

- Use: `window.matchMedia("(pointer: coarse)").matches` **or** `navigator.maxTouchPoints > 0`.
- Prefer `(pointer: coarse)`.
- Use this only to branch mobile behavior; do not use it to change desktop logic.

#### B) State: placement mode

At MapScene level, add:

- `const [isPlacementMode, setIsPlacementMode] = useState(false);`

#### C) Mobile-only “Place Needle” toggle button

- Render this button **only** when `isMobile === true` and **not** in View Mode.
- **When OFF:** label **Place Needle**; onClick → `setIsPlacementMode(true)`.
- **When ON:** label **Tap map to place** (or similar); onClick → `setIsPlacementMode(false)` (cancel).

#### D) Overlay instruction when placement mode is ON

When `isMobile && isPlacementMode`:

- Render a small, faint overlay **near top or bottom** of the map container: **Tap on map to place needle**.
- Overlay must **not** block map gestures; taps must reach the map. Use `pointer-events: none` on the overlay so the tap reaches the map.

#### E) Single-tap on map places needle (mobile only)

When `isMobile && isPlacementMode`:

- Use the **existing** map click/tap listener or add a **temporary** listener (e.g. `map.addListener("click", ...)`).
- On click: get `latLng` from the map event, call the **existing** place-needle function (same as desktop click placement — no duplicate business logic).
- Immediately after placing: `setIsPlacementMode(false)` and remove the temporary listener if you added one.

Important:

- Do **not** attach raw `touchstart`/`touchmove` handlers that prevent default map gestures.
- Prefer Google Maps `"click"` (or equivalent) so pinch/pan remain intact. Attach only while placement mode is ON; remove when OFF.

#### F) Normal map when placement mode is OFF

When `isPlacementMode === false`:

- No extra map listeners for placement.
- Default map behavior unchanged.

#### G) Guard: no placement while panning/zooming

Avoid placing a needle when the user was trying to pan/zoom:

- On map **dragstart**: set a flag `mapWasDragged = true`.
- On map **dragend**: keep flag true, then reset to `false` after ~250 ms (setTimeout).
- In the placement **click** handler: if `mapWasDragged`, **ignore** the click (do not place, do not exit mode if you prefer).

#### H) CSS: map container only (mobile)

So the page doesn’t scroll when the user intends to interact with the map:

- **Do not** set global `touch-action: none`.
- On the **map container wrapper** only, add:
  - `touch-action: pan-x pan-y pinch-zoom;` (or equivalent so map gestures work)
  - `overscroll-behavior: contain;`

---

### Acceptance criteria

- **Desktop:** Unchanged (hover preview + click placement still works).
- **Mobile:** Place Needle toggles placement mode on/off.
- **Mobile:** Overlay “Tap on map to place needle” shows only when placement mode is ON.
- **Mobile:** One tap on map places needle and exits placement mode.
- **Mobile:** Pinch zoom and pan work when placement mode is OFF.
- **Mobile:** No accidental placement after panning; drag guard works.

### Deliverable

Implement **Phase 1 only**: mobile placement mode, overlay, map tap-to-place, drag guard, and map-wrapper CSS. Do **not** implement selection, highlight, move, or visit changes yet.
