# Google Maps "Oops!" on Mobile / LAN – Troubleshooting

When testing on your phone at `http://<your-ip>:5173`, the map may show the generic **"Oops! Something went wrong…"** message. The real cause is in the browser console. Use this guide to fix it.

## 1. Get the exact Maps error

On **desktop**, open the **same URL** (e.g. `http://192.168.1.12:5173`), open DevTools → **Console**, and look for a line like:

- `Google Maps JavaScript API error: RefererNotAllowedMapError`
- `Google Maps JavaScript API error: InvalidKeyMapError`
- `Google Maps JavaScript API error: ApiNotActivatedMapError`
- `Google Maps JavaScript API error: BillingNotEnabledMapError`
- `You must enable Billing on the Google Cloud Project`
- `This API project is not authorized to use this API`
- `MissingKeyMapError`
- `Request denied`

Then apply the fix below that matches your error.

---

## 2. RefererNotAllowedMapError (most common on mobile/LAN)

If your API key is restricted by **HTTP referrers**, you probably allowed only `localhost` and not your LAN IP.

**Fix:** Google Cloud Console → **APIs & Services** → **Credentials** → (your API key) → **Application restrictions**.

If set to **HTTP referrers (web sites)**, add:

- `http://localhost:5173/*`
- `http://127.0.0.1:5173/*`
- `http://<YOUR_LAN_IP>:5173/*` (e.g. `http://192.168.1.12:5173/*`)
- Optional: `http://<YOUR_IP>:*/*` if you use other ports.

Use **http** (not https); the Vite dev server on LAN is usually http.

---

## 3. ApiNotActivatedMapError

The project doesn’t have the required APIs enabled.

**Fix:** Google Cloud Console → **APIs & Services** → **Library**. Enable at least:

- **Maps JavaScript API**
- **Maps Static API** (only if the app uses it)
- **Places API** (only if the app uses it)

For 3D / Map IDs, ensure the Map ID is valid and allowed for Maps JavaScript API (see [MAP_STYLING_POI_LABELS.md](./MAP_STYLING_POI_LABELS.md)).

---

## 4. BillingNotEnabledMapError

Maps will not render without billing enabled on the Google Cloud project.

**Fix:** Enable billing for that project in Google Cloud Console.

---

## 5. Map ID issues (3D / cloud-styled maps)

If the app uses a **Map ID** (e.g. via `VITE_GOOGLE_MAP_ID`):

- The Map ID must exist in the **same** Google Cloud project as the API key.
- It must be allowed for the Maps JavaScript API usage you’re doing.
- It must be correctly passed into the map (see `MapScene.jsx` and `VITE_GOOGLE_MAP_ID`).

A wrong or missing Map ID can also produce "Oops!" with console hints.

---

## 6. Quick checks for mobile/LAN

- Phone and laptop on the **same Wi‑Fi**.
- Use the **laptop’s LAN IP** in the URL (e.g. `http://192.168.1.12:5173`), not `localhost`.
- If you use a **VPN**, it can change routing; try without it.
- Dev server should show something like: `Local: http://localhost:5173/`.
- Env: if you use a `.env` key, it must be exposed to Vite (e.g. `VITE_GOOGLE_MAPS_API_KEY`); see [Vite env docs](https://vitejs.dev/guide/env-and-mode.html).
