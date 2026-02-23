# Two Space Needles MVP Spec

Goal: A web-based interactive 3D Seattle map that lets a user place Space Needles, see a placement footprint preview, “drop” the needle with a crunch + dust puff, view a cost estimate, take photos from preset viewpoints, store photos in a simple album, and export a packet with a letter.

Primary implementation: Map3DElement + Model3DElement, no WebGLOverlayView. WebGLOverlayView + Three.js is permitted only if one of these blockers occurs: model cannot move smoothly with mouse, or screenshot capture is not feasible.

Primary implementation must use Google Maps JavaScript API 3D Maps with Map3DElement and Model3DElement (maps3d library). Do NOT introduce Three.js or WebGLOverlayView unless I explicitly approve due to a blocker:
- cannot move the model smoothly with the mouse, OR
- cannot capture a screenshot image at all.

No backend. No user accounts. No external data APIs. Use hard-coded constants only.

Core loop:
1) Explore 3D Seattle map
2) Hover ghost needle follows mouse and shows footprint
3) Click to drop needle with crunch sound + dust puff
4) Cost panel updates (hover estimate + totals)
5) Photo mode presets and capture to album
6) Export packet with letter + print-to-PDF + mailto

Must-have UI:
- Fullscreen 3D map
- Top bar: Photo Mode (disabled until 1 placement), Export (disabled until a photo is selected), Reset
- Corner panel: Needles placed, land value displaced (hover), total land value, total build cost

Needle placement:
- Multi-needle always on
- Ghost remains active after each drop

Visual masking:
- Use a combined model: space-needle-park.glb includes needle + landscaped base.
- Dust is a simple CSS animated element at click position (screen coords).

Economics:
- Use a fixed footprint radius.
- Use 3–5 coarse neighborhood zones (lat/lng bounding boxes) with hard-coded $/sqft.
- Build cost baseline 1.5B with 10% escalation per additional needle.

Non-goals:
- Parcel-level accuracy
- Real email sending from backend
- Terrain deformation
- Multiplayer