import { useEffect, useRef, useState } from 'react';

/**
 * Drives a 0→1 progress value from how far a tall section has scrolled past a
 * pinned (sticky) stage inside it.
 *
 * Markup contract:
 *   <div ref={trackRef} style={{ height: `${(1 + length) * 100}vh` }}>
 *     <div className="parallax-stage">   // height:100vh; position:sticky; top:0
 *       ...layers...
 *     </div>
 *   </div>
 *
 * progress = scrolled distance / total scrollable distance, clamped to [0,1].
 * The raw value is smoothed with a rAF lerp for a controlled, cinematic feel.
 * Smoothing is bypassed under prefers-reduced-motion.
 */
export function useScrollProgress(trackRef, { smoothing = 0.12 } = {}) {
  const [progress, setProgress] = useState(0);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable <= 0 ? 0 : -rect.top / scrollable;
      target.current = p < 0 ? 0 : p > 1 ? 1 : p;
    };

    const loop = () => {
      const t = target.current;
      const c = current.current;
      const next = reduce ? t : c + (t - c) * smoothing;
      const settled = Math.abs(t - next) < 0.0004;
      current.current = settled ? t : next;
      setProgress(current.current);
      if (settled) {
        raf.current = 0; // pause until next scroll/resize
      } else {
        raf.current = requestAnimationFrame(loop);
      }
    };

    const kick = () => {
      measure();
      if (!raf.current) raf.current = requestAnimationFrame(loop);
    };

    measure();
    current.current = target.current;
    setProgress(target.current);

    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);

    return () => {
      window.removeEventListener('scroll', kick);
      window.removeEventListener('resize', kick);
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = 0;
    };
  }, [trackRef, smoothing]);

  return progress;
}
