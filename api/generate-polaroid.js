/**
 * Vercel serverless function: POST /api/generate-polaroid
 * Body: { visitedLat, visitedLng, originalLat, originalLng, cameraHeading?, stylePreset, ... }
 * Returns: { dataUrl } (base64 image) or { error }.
 *
 * Wire to a hosted image generation API (OpenAI DALL-E, Replicate, Stability, etc.)
 * using env vars (e.g. OPENAI_API_KEY). If no key is set, returns a placeholder so the flow does not break.
 */

const PLACEHOLDER_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAFeQP+3fQfIgAAAABJRU5ErkJggg==";

function buildPrompt(metadata) {
  const { visitedLat, visitedLng, originalLat, originalLng, needleNumber, visibleNeedles } = metadata;
  const needles = Array.isArray(visibleNeedles) ? visibleNeedles : [];
  const hasExtra = needles.length > 2;

  let sceneDesc;
  if (hasExtra) {
    sceneDesc =
      `A realistic tourist postcard photo of Seattle showing ${needles.length} identical Space Needle towers. ` +
      `The featured needle (Space Needle #${needleNumber}) is at the viewer's location (foreground). ` +
      `The other ${needles.length - 1} Space Needles must appear in the scene at their correct relative positions: ` +
      `further needles smaller and in the background or midground, nearer needles larger. ` +
      `Place them naturally (not perfectly aligned or symmetrical unless the geometry implies it). ` +
      `Do not add any Space Needles beyond those listed in visibleNeedles. ` +
      `Photorealistic, sunny day, Seattle skyline. Coordinates approximately ${visitedLat}, ${visitedLng} (foreground) and others in frame.`;
  } else {
    sceneDesc =
      `A realistic tourist postcard photo of Seattle showing two identical Space Needle towers. ` +
      `One Space Needle at the viewer's location (foreground), one in the distance. ` +
      `Photorealistic, sunny day, Seattle skyline. Coordinates approximately ${visitedLat}, ${visitedLng} and ${originalLat}, ${originalLng}. Space Needle #${needleNumber} in foreground.`;
  }
  return sceneDesc;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let metadata;
  try {
    metadata = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  } catch {
    res.status(400).json({ error: "Invalid JSON body" });
    return;
  }

  const stylePreset = metadata.stylePreset || "photoreal_postcard";

  // Optional: call a real image API when env is set
  const apiKey = process.env.OPENAI_API_KEY || process.env.REPLICATE_API_TOKEN;
  if (apiKey && process.env.OPENAI_API_KEY) {
    try {
      const prompt = buildPrompt(metadata);
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "dall-e-3",
          prompt,
          n: 1,
          size: "1024x1024",
          response_format: "b64_json",
          quality: "standard",
        }),
      });
      const data = await response.json();
      if (data.data?.[0]?.b64_json) {
        const dataUrl = `data:image/png;base64,${data.data[0].b64_json}`;
        res.status(200).json({ dataUrl });
        return;
      }
    } catch (err) {
      console.error("OpenAI image generation failed:", err?.message ?? err);
    }
  }

  // No API key: return 503 so client keeps Three.js placeholder and shows "Could not develop photo"
  res.status(503).json({ error: "Image generation not configured" });
};
