import { useCallback, useEffect, useRef, useState } from 'react';

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/**
 * Deliberate scroll ownership for the pinned parallax scene.
 *
 * The scene does NOT use native document scroll. Wheel/trackpad/touch input is
 * intercepted on a fixed full-viewport element and converted to a normalized
 * 0→1 progress. Every gesture that stays inside the parallax preventDefault()s,
 * so the browser never scrolls the document, overscrolls, or rubber-bands.
 *
 *  - `enabled: false` suspends interception entirely (e.g. while a full card is
 *    open and owns scrolling). Progress is preserved so we resume where we left.
 *  - returned `goTo(p)` eases progress to a target chapter (used by tab nav).
 *
 * @returns [progress, { goTo, debug }]
 */
export function useParallaxInput(
  ref,
  {
    wheelSpan = 2600,
    touchSpan = 1000,
    smoothing = 0.18,
    hasContentAbove = false,
    hasContentBelow = false,
    enabled = true,
    debug = false,
    // commit: an ARRAY of { start, end, duration } segments — a self-driving
    // run. Once the user scrolls forward across the first segment's `start`,
    // progress advances to the last segment's `end` ON ITS OWN, ignoring further
    // scroll. Each segment plays at its own pace (its duration in seconds), so
    // different beats (e.g. the dramatic needle rise vs the measured building
    // rise) can run at different speeds. Reversing back below the first `start`
    // re-arms it.
    commit = null,
    // Upper bound for progress. Stages live in [0,1] by default, but extra
    // stages can extend the range (e.g. 1.25) so they append WITHOUT rescaling
    // every earlier keyframe — layers simply hold past their last keyframe.
    maxProgress = 1,
    // scrub: scrolling NEVER arms a commit run — the user scrubs progress
    // freely in both directions. Runs then only play via playAll() (the
    // chevron), which autoplays the remaining sequence at the designed pace.
    scrub = false,
    // chainPause: ms to hold at each run boundary during playAll, so a copy
    // beat that lands at a park is readable before the next stage rolls.
    chainPause = 0,
  } = {}
) {
  const clampP = (v) => (v < 0 ? 0 : v > maxProgress ? maxProgress : v);
  const [progress, setProgress] = useState(0);
  const [debugState, setDebugState] = useState({
    delta: 0, consumed: false, released: false, atStart: true, atEnd: false,
  });

  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef(0);
  const touchY = useRef(null);
  const enabledRef = useRef(enabled);
  const kickRef = useRef(null);
  const advanceRef = useRef(null); // exposes the internal advance() so a click can nudge forward
  const committing = useRef(false); // self-driving a commit run
  const activeRun = useRef(null); // which run (array of segments) is playing
  const chaining = useRef(false); // play straight through every remaining run (arrow click)
  const chainTimer = useRef(0); // pending chainPause hold between runs
  const startChainRef = useRef(null); // exposes the internal startChain() to playAll

  useEffect(() => { enabledRef.current = enabled; }, [enabled]);

  // Programmatic forward nudge — behaves like a single scroll (arms the next run).
  const nudge = useCallback((d = 0.06) => {
    advanceRef.current && advanceRef.current(d, d * 1000);
  }, []);

  // Clicking the scroll arrow plays through EVERY remaining stage — chain each
  // run into the next until the end (with an optional chainPause hold between
  // runs). Arms the next run DIRECTLY (not via a scroll nudge), so it works in
  // scrub mode too, from wherever the playhead currently sits.
  const playAll = useCallback(() => {
    startChainRef.current && startChainRef.current();
  }, []);

  const goTo = useCallback((p) => {
    target.current = clampP(p);
    kickRef.current && kickRef.current();
  }, [maxProgress]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // `commit` may be a single run (array of segments) or several independent
    // runs (array of arrays). Normalize to an array of runs. Each run self-drives
    // once the user scrolls forward across its first segment's `start`.
    const runs = commit && commit.length
      ? (Array.isArray(commit[0]) ? commit : [commit])
      : null;

    let lastT = 0;
    const tick = (now) => {
      const dt = lastT ? Math.min(0.05, (now - lastT) / 1000) : 0.016;
      lastT = now;

      // self-driving commit: drive `target` forward through the active run, using
      // the pace of whichever segment the playhead is in, until the run's last end.
      if (committing.current && activeRun.current) {
        const run = activeRun.current;
        const last = run[run.length - 1];
        let seg = run.find((s) => current.current >= s.start - 1e-4 && current.current < s.end);
        if (!seg) seg = current.current < run[0].start ? run[0] : last;
        const rate = (seg.end - seg.start) / seg.duration; // per second
        target.current = Math.min(last.end, target.current + rate * dt);
        if (current.current >= last.end - 0.002) {
          committing.current = false; activeRun.current = null;
          // play-through (arrow click): arm the next run instead of waiting
          // for another scroll, until there are none left. With chainPause,
          // hold at the boundary first so the just-landed copy beat reads.
          if (chaining.current && runs) {
            const next = runs.find((r) => r[0].start > current.current - 1e-4);
            if (!next) chaining.current = false;
            else if (chainPause > 0) {
              clearTimeout(chainTimer.current);
              chainTimer.current = setTimeout(() => {
                if (!chaining.current) return; // user reversed during the hold
                committing.current = true; activeRun.current = next;
                kickRef.current && kickRef.current();
              }, chainPause);
            } else { committing.current = true; activeRun.current = next; }
          }
        }
      }

      const t = target.current;
      const c = current.current;
      const next = reduce ? t : c + (t - c) * smoothing;
      const settled = Math.abs(t - next) < 0.0004 && !committing.current;
      current.current = settled ? t : next;
      setProgress(current.current);
      raf.current = settled ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf.current) { lastT = 0; raf.current = requestAnimationFrame(tick); }
    };
    kickRef.current = kick;

    // playAll: arm the first run that still has ground to cover from the
    // current position and chain from there (works mid-run and in scrub mode).
    const startChain = () => {
      if (!runs) return;
      const next = runs.find((r) => r[r.length - 1].end > current.current + 1e-3);
      if (!next) return;
      chaining.current = true;
      committing.current = true;
      activeRun.current = next;
      kick();
    };
    startChainRef.current = startChain;

    const report = (raw, consumed, released, atStart, atEnd) => {

      if (debug) setDebugState({ delta: Math.round(raw), consumed, released, atStart, atEnd });
    };

    const advance = (dProgress, raw) => {
      // any backward gesture cancels a play-through — including during a
      // chainPause hold (committing is false then, so the check below misses it)
      if (dProgress < 0) chaining.current = false;
      // While a run is self-driving: the auto-advance (in tick) is a FLOOR pace.
      // A forward gesture ACCELERATES it — the push is added on top of the floor
      // (capped at the current stage's end), so impatient users can fast-forward
      // through a stage while passive users get the dramatic auto-play. A
      // BACKWARD gesture HIJACKS it — cancels the auto-play and reverses.
      if (committing.current) {
        if (dProgress < 0) {
          committing.current = false;
          activeRun.current = null;
          chaining.current = false; // cancel any play-through
          // fall through and handle this backward input normally
        } else {
          const run = activeRun.current;
          // a `lockPace` run ignores forward scroll, so it always plays at its
          // deliberate auto-pace (e.g. the second-needle reveal stays dramatic
          // even when the user is scrolling fast). Others accelerate.
          if (run[0].lockPace) {
            kick();
            report(raw, true, false, false, false);
            return 'suppress';
          }
          const lastEnd = run[run.length - 1].end;
          target.current = Math.min(lastEnd, target.current + dProgress);
          kick();
          report(raw, true, false, false, false);
          return 'consume';
        }
      }
      const p = target.current;
      const atStart = p <= 1e-5;
      const atEnd = p >= maxProgress - 1e-5;
      const fwd = dProgress > 0;
      const back = dProgress < 0;
      const intoScene = (!atStart && !atEnd) || (atStart && fwd) || (atEnd && back);
      if (intoScene) {
        const nextTarget = clampP(p + dProgress);
        // arm a self-driving run when scrolling forward across its first start
        // (never in scrub mode — there, runs only play via playAll)
        if (runs && fwd && !scrub) {
          for (const run of runs) {
            const s0 = run[0].start;
            if (p < s0 && nextTarget >= s0) { committing.current = true; activeRun.current = run; break; }
          }
        }
        target.current = nextTarget;
        kick();
        report(raw, true, false, atStart, atEnd);
        return 'consume';
      }
      const release =
        (atStart && back && hasContentAbove) || (atEnd && fwd && hasContentBelow);
      report(raw, !release, release, atStart, atEnd);
      return release ? 'release' : 'suppress';
    };
    advanceRef.current = advance;

    const normalizeWheel = (e) => {
      let d = e.deltaY;
      if (e.deltaMode === 1) d *= 16;
      else if (e.deltaMode === 2) d *= window.innerHeight;
      return d;
    };

    const onWheel = (e) => {
      if (!enabledRef.current) return;
      const px = normalizeWheel(e);
      if (px === 0) return;
      const result = advance(px / wheelSpan, px);
      if (result !== 'release') e.preventDefault();
    };
    const onTouchStart = (e) => {
      if (!enabledRef.current) return;
      touchY.current = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (!enabledRef.current || touchY.current == null) return;
      const y = e.touches[0].clientY;
      const dy = touchY.current - y;
      touchY.current = y;
      const result = advance(dy / touchSpan, dy);
      if (result !== 'release') e.preventDefault();
    };
    const onTouchEnd = () => { touchY.current = null; };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('touchcancel', onTouchEnd, { passive: true });

    const prevBodyOverflow = document.body.style.overflow;
    const prevRootOB = document.documentElement.style.overscrollBehavior;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchEnd);
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = 0;
      clearTimeout(chainTimer.current);
      kickRef.current = null;
      advanceRef.current = null;
      startChainRef.current = null;
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overscrollBehavior = prevRootOB;
    };
  }, [ref, wheelSpan, touchSpan, smoothing, hasContentAbove, hasContentBelow, debug, commit, maxProgress, scrub, chainPause]);

  return [progress, { goTo, nudge, playAll, debug: debugState }];
}
