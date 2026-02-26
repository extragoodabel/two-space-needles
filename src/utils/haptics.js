/**
 * Light haptic feedback for mobile only. No-op on desktop or unsupported devices.
 */

const COOLDOWN_MS = 120;
let lastHapticAt = 0;

function isMobile() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window
  );
}

/**
 * Trigger a light haptic tap. Only runs on mobile; uses 120ms cooldown to avoid
 * rapid multi-vibrate when touch + click both fire.
 * @param {string} [type='light'] - Reserved for future use (e.g. 'light' | 'medium').
 */
export function hapticTap(type = "light") {
  if (!isMobile()) return;
  const now = typeof performance !== "undefined" ? performance.now() : Date.now();
  if (now - lastHapticAt < COOLDOWN_MS) return;
  lastHapticAt = now;
  try {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  } catch (_) {}
}
