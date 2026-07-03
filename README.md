# Two Space Needles

A cinematic single-page campaign site. React + Vite, static front-end only.

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to GitHub, import into Vercel. Framework preset: **Vite**. No env vars required.

## Assets to drop in

Placeholders are wired up. Replace these files with the real assets when ready:

```
public/
├── models/
│   └── low_poly_space_needle.glb     ← from your uploads (for future R3F splash)
└── images/
    ├── plate-01.jpg                  ← gallery plates
    ├── plate-02.jpg
    ├── plate-03.jpg
    ├── plate-04.jpg
    └── plate-05.jpg
```

The current splash uses an inline SVG silhouette and CSS animation — no 3D dependencies. To upgrade to WebGL with the `.glb` model later, see the `// TODO: GLB`
comments in `src/components/SplashIntro.jsx`.

## Replay the intro

The splash plays once per browser session. Clear it via:

```js
sessionStorage.removeItem('tsn:splash')
```

…or click "Replay intro" in the footer.
