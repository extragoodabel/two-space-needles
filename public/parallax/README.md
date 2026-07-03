# Parallax layer assets — drop them here

This folder is read directly by the parallax engine (`src/components/parallax/`).
Export your Affinity layers as **transparent PNGs** and name them exactly as below.
No code changes are needed — files appear in the scene automatically on save.

## Required filenames

### Moving layers — one A/B pair per depth (12 pairs)
Lower number = closer to the camera = renders in front. `1` is foremost, `12` is the deepest moving layer.

```
A1.png   B1.png      ← foreground (people, plaza, nearest planting)
A2.png   B2.png
A3.png   B3.png
A4.png   B4.png
A5.png   B5.png
A6.png   B6.png
A7.png   B7.png
A8.png   B8.png
A9.png   B9.png
A10.png  B10.png
A11.png  B11.png
A12.png  B12.png     ← deepest moving layer (far Needles / horizon structures)
```

- `A#` = the **high-vantage (Position A)** state of that layer.
- `B#` = the **street-level (Position B)** state of the *same* layer.
- A# and B# must be the **same physical element** so the crossfade reads as one
  object moving through space, never two copies dissolving.

### Shared background layers — no A/B pair (6 plates)
Stable atmosphere. These barely move (very subtle drift only).

```
13.png   ← e.g. night sky
14.png   ← e.g. stars
15.png   ← e.g. searchlight rays
16.png   ← e.g. distant foliage
17.png   ← e.g. distant environmental texture
18.png   ← e.g. other non-moving atmosphere
```

(13 = nearest background, 18 = deepest. Exact contents are up to you; the engine
just renders them behind all moving layers in numeric order.)

## Export rules (critical for alignment)

1. **Same canvas for every file.** Export each layer at the **full artboard size**,
   not cropped to the artwork. A layer that only occupies the bottom of the frame
   must still be a full-frame PNG with transparency everywhere else. This is what
   keeps every layer pixel-aligned when stacked.
2. **Transparent background** (PNG-24 / "transparent" preset). Only layers 13–18
   may be fully opaque if they're meant to be the backdrop.
3. **Consistent dimensions** across all files (e.g. 1242 × 2208, portrait 9:16).
   Whatever you choose, use it for all 30 files.
4. Keep filenames exactly as listed — case-sensitive, `.png`.

## What's here now

`_preview-A.png` / `_preview-B.png` are low-res placeholders extracted from the
Affinity thumbnails. The engine falls back to these as a single whole-comp
crossfade until the real `A#`/`B#` files exist. Delete them once your layers are in
(or leave them; they're ignored when real layers are present).

## Per-layer tuning (optional)

Depth feel (how much each layer drifts/scales during the descent) is configured in
`src/components/parallax/layers.js`. Defaults give foreground layers more travel
than deep ones. Adjust there if a layer needs nudging to stay seamless.
