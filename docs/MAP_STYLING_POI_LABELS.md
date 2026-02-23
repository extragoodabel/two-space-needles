# Remove POI Labels from 3D Map (Cloud Styling)

Goal: No place-name labels (e.g. "Bill & Melinda Gates Foundation") over the map at launch. Use **Google Maps Platform map styling** (Map ID) only—no DOM hacks.

---

## 1. Confirm the app uses your Map ID

The app already applies the Map ID from env:

- **Env variable:** `VITE_GOOGLE_MAP_ID` (e.g. in `.env.local`)
- **In code:** `MapScene.jsx` sets `el.mapId = import.meta.env.VITE_GOOGLE_MAP_ID` when the map element is configured.
- **Value in use:** Whatever is in `VITE_GOOGLE_MAP_ID` (e.g. `e61fa144b288162660c04ef5`) is the Map ID you must edit in Cloud Console.

No code changes are required for Map ID; only Cloud styling changes below.

---

## 2. In Google Cloud Console: Map Management

1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Select the project that owns your Maps JavaScript API key and Map ID.
3. Go to **Google Maps Platform** → **Map Management** (or **APIs & Services** → **Map Management** / **Map Styles**).
4. Find the Map ID that matches `VITE_GOOGLE_MAP_ID` (e.g. `e61fa144b288162660c04ef5`) and open it.

---

## 3. Edit map style: turn off POI labels

1. In the Map ID details, open **Edit style** (or the Cloud-based map style editor).
2. In the style layers / feature list, find **Points of interest** (POI).
3. For **Points of interest**:
   - Set **Visibility** to **OFF** (or disable the POI labels layer).
4. If you want a completely label-free basemap:
   - Turn **Visibility** **OFF** for **All labels** (or each label type: POI, road labels, etc.), as needed.
5. **Save** and **Publish** the style so the Map ID serves the updated style.

---

## 4. Verify

1. Ensure `.env.local` (or your env) has `VITE_GOOGLE_MAP_ID=<your-map-id>`.
2. Hard refresh the app (e.g. Cmd+Shift+R / Ctrl+Shift+R) so the map reloads with the new style.
3. Confirm no POI label text appears over the map at launch, especially over Seattle Center.

---

## Summary of what to toggle (Cloud styling only)

| What to turn off        | Where in style editor     | Effect                          |
|-------------------------|---------------------------|---------------------------------|
| **Points of interest**  | POI / Points of interest  | Removes place-name labels (e.g. Gates Foundation). |
| **All labels** (optional) | Labels / All labels     | Removes all map labels if you want a fully clean basemap. |

The exact menu names may vary slightly by console UI (e.g. "Points of interest", "POI labels", "Place labels"). Use the option that controls **point-of-interest / place-name** labels. No game logic or React DOM changes are required.
