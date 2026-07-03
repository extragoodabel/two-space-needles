import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

/**
 * SplashIntro — World's Fair edition
 * ────────────────────────────────────────────────────────────────
 * Sequence (in seconds from mount):
 *   0.0  black
 *   0.4  gold sky-glow blooms low on the horizon
 *   0.6  speckled skyline silhouette fades in
 *   1.2  gold rays shoot up from behind the skyline
 *   2.2  3D Needle (low-angle, towering, close) fades in over the scene
 *   3.5  KINETIC SPIN — everything rotates (skyline+rays via CSS, Needle via R3F)
 *   4.5  Needle splits — second copy materializes during the spin
 *   5.7  Spin completes; both Needles settled at left/right
 *   6.2  Headline "Seattle was built for two." fades in between them
 *   7.5  Sequence ends; parent unmounts splash and reveals the site
 *
 * Skippable on any pointer / wheel / touch / non-Tab keypress.
 *
 * Model: /models/space-needle-park.glb (the low-poly "park" version).
 * To test the higher-detail model later, swap the path in MODEL_URL.
 */

const MODEL_URL = '/models/space-needle-park.glb';

// Preload so the GLB starts downloading immediately on first render.
useGLTF.preload(MODEL_URL);

// Timeline keyframes (seconds from mount start)
const T = {
  SPIN_START:   3.5,
  SPIN_END:     5.7,
  SPLIT_START:  4.5,
  SPLIT_END:    5.7,
  HEADLINE_IN:  6.2,
  TOTAL:        7.5,
};

export default function SplashIntro({ onComplete }) {
  const rootRef = useRef(null);
  const doneRef = useRef(false);
  const [phase, setPhase] = useState('intro'); // intro → spin → done

  // Phase + auto-complete timeline (independent of R3F's internal clock so
  // CSS keyframes can sync against the same wall-clock).
  useEffect(() => {
    const tSpin = window.setTimeout(() => setPhase('spin'), T.SPIN_START * 1000);
    const tDone = window.setTimeout(finish, T.TOTAL * 1000);

    function finish() {
      if (doneRef.current) return;
      doneRef.current = true;
      if (rootRef.current) {
        rootRef.current.style.transition = 'opacity 600ms ease-out';
        rootRef.current.style.opacity = '0';
      }
      window.setTimeout(onComplete, 620);
    }

    function skip(e) {
      if (e && e.type === 'keydown' && e.key === 'Tab') return;
      finish();
    }

    window.addEventListener('click', skip, { passive: true });
    window.addEventListener('wheel', skip, { passive: true });
    window.addEventListener('touchstart', skip, { passive: true });
    window.addEventListener('keydown', skip);

    return () => {
      window.clearTimeout(tSpin);
      window.clearTimeout(tDone);
      window.removeEventListener('click', skip);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('touchstart', skip);
      window.removeEventListener('keydown', skip);
    };
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className={`splash splash--${phase}`}
      role="presentation"
      aria-hidden="true"
    >
      {/* Layer 1 — radial gold sky-glow behind everything */}
      <div className="splash__sky-glow" />

      {/* Layer 2 — gold rays fanning upward from the horizon */}
      <div className="splash__rays">
        <RaysSVG />
      </div>

      {/* Layer 3 — speckled gold skyline silhouette */}
      <div className="splash__skyline">
        <SkylineSVG />
      </div>

      {/* Layer 4 — 3D Needle (R3F) */}
      <div className="splash__canvas">
        <Canvas
          dpr={[1, 1.75]}
          gl={{ alpha: true, antialias: true }}
          camera={{ position: [0, 1.4, 7.5], fov: 52, near: 0.1, far: 100 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <SplashScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Layer 5 — Headline between the split Needles */}
      <div className="splash__headline">
        <span className="splash__headline-eyebrow">★ A Proposal · No. 02 ★</span>
        <span className="splash__headline-main">Seattle was built for two.</span>
        <span className="splash__headline-rule" />
      </div>

      <div className="splash__scroll-cue">★ Scroll to read ★</div>

      <button
        type="button"
        className="splash__skip"
        onClick={() => {
          if (doneRef.current) return;
          doneRef.current = true;
          if (rootRef.current) {
            rootRef.current.style.transition = 'opacity 250ms';
            rootRef.current.style.opacity = '0';
          }
          window.setTimeout(onComplete, 260);
        }}
      >
        Skip intro
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   R3F Scene: two cloned Needles in a rotating group
   ───────────────────────────────────────────────────────────── */

function SplashScene() {
  const { scene } = useGLTF(MODEL_URL);

  // Clone scenes so each Needle has its own materials we can tween.
  const left = useMemo(() => prepareScene(scene), [scene]);
  const right = useMemo(() => prepareScene(scene, /* startInvisible */ true), [scene]);

  const groupRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const startedAt = useRef(null);

  useFrame(({ clock }) => {
    if (startedAt.current === null) startedAt.current = clock.elapsedTime;
    const t = clock.elapsedTime - startedAt.current;

    // Slow ambient drift before the spin — gives the Needle quiet motion.
    const ambient = Math.sin(t * 0.4) * 0.04;

    // Spin phase: smooth 360° rotation
    const spinT = clamp01((t - T.SPIN_START) / (T.SPIN_END - T.SPIN_START));
    const spinEased = easeInOutCubic(spinT);
    if (groupRef.current) {
      groupRef.current.rotation.y = ambient + spinEased * Math.PI * 2;
    }

    // Split phase: needles drift apart along X
    const splitT = clamp01((t - T.SPLIT_START) / (T.SPLIT_END - T.SPLIT_START));
    const splitEased = easeOutCubic(splitT);
    const offset = splitEased * 2.6;
    if (leftRef.current)  leftRef.current.position.x = -offset;
    if (rightRef.current) rightRef.current.position.x =  offset;

    // Fade the right Needle in as the split begins so the "duplicate"
    // visibly emerges rather than just appearing in place.
    setSceneOpacity(right, easeOutCubic(splitT));
  });

  return (
    <>
      {/* Lighting — warm directional beacon + cool ambient fill */}
      <ambientLight intensity={0.45} color="#7BA4B4" />
      <directionalLight
        position={[3, 9, 5]}
        intensity={3.2}
        color="#F5D17A"
      />
      <directionalLight
        position={[-4, 2, 3]}
        intensity={0.7}
        color="#D86B4A"
      />
      {/* Soft warm rim from below — suggests the gold rays catching the Needle */}
      <pointLight position={[0, -2, 4]} intensity={1.1} color="#E5A93B" distance={14} />

      <group ref={groupRef} position={[0, -1.2, 0]}>
        <primitive ref={leftRef}  object={left}  position={[0, 0, 0]} />
        <primitive ref={rightRef} object={right} position={[0, 0, 0]} />
      </group>
    </>
  );
}

/* ── helpers ─────────────────────────────────────────────── */

function prepareScene(originalScene, startInvisible = false) {
  const cloned = originalScene.clone(true);
  cloned.traverse((obj) => {
    if (obj.isMesh && obj.material) {
      // Clone material so opacity changes on one don't affect the other.
      obj.material = obj.material.clone();
      obj.material.transparent = true;
      obj.material.opacity = startInvisible ? 0 : 1;
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });
  return cloned;
}

function setSceneOpacity(sceneObj, opacity) {
  sceneObj.traverse((obj) => {
    if (obj.isMesh && obj.material) {
      obj.material.opacity = opacity;
    }
  });
}

function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/* ─────────────────────────────────────────────────────────────
   Stylized Seattle skyline silhouette — gold speckled black
   ───────────────────────────────────────────────────────────── */

function SkylineSVG() {
  return (
    <svg
      viewBox="0 0 1600 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        {/* Gold speckled fill (windows / lit panels) */}
        <pattern id="cityWindows" x="0" y="0" width="14" height="18" patternUnits="userSpaceOnUse">
          <rect width="14" height="18" fill="#0B0710" />
          <circle cx="3"  cy="4"  r="0.9" fill="#F5D17A" opacity="0.85" />
          <circle cx="10" cy="9"  r="0.7" fill="#E5A93B" opacity="0.7" />
          <circle cx="6"  cy="14" r="0.5" fill="#F5D17A" opacity="0.5" />
        </pattern>
        <linearGradient id="cityEdgeGlow" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%"  stopColor="#F5D17A" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#F5D17A" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      {/* Subtle warm edge atmosphere bleed above buildings */}
      <rect x="0" y="80" width="1600" height="200" fill="url(#cityEdgeGlow)" opacity="0.55" />

      {/* Skyline — stylized Seattle: low buildings, peaks, antennas */}
      <g fill="url(#cityWindows)" stroke="#F5D17A" strokeWidth="0.6" strokeOpacity="0.4">
        {/* Far left low buildings */}
        <rect x="0"   y="240" width="80" height="80" />
        <rect x="78"  y="210" width="60" height="110" />
        <rect x="136" y="225" width="42" height="95" />
        <rect x="176" y="195" width="70" height="125" />

        {/* Pyramid-topped tower (Smith Tower analogue) */}
        <polygon points="246,195 268,150 290,195" />
        <rect x="246" y="195" width="44" height="125" />
        <rect x="266" y="120" width="4" height="30" />

        {/* Mid-rise cluster */}
        <rect x="298" y="225" width="56" height="95" />
        <rect x="352" y="180" width="80" height="140" />
        <rect x="432" y="205" width="48" height="115" />

        {/* Tall tower with stepped top */}
        <rect x="488" y="120" width="76" height="200" />
        <rect x="498" y="105" width="56" height="15" />
        <rect x="510" y="80"  width="32" height="25" />
        <rect x="522" y="55"  width="8"  height="25" />

        {/* Center: tall block + slim spires */}
        <rect x="572" y="155" width="56" height="165" />
        <rect x="636" y="105" width="90" height="215" />
        <rect x="660" y="80"  width="44" height="25" />
        <rect x="678" y="48"  width="8"  height="32" />

        {/* Right of center — tallest skyscraper silhouette */}
        <rect x="734" y="68"  width="98" height="252" />
        <rect x="754" y="42"  width="58" height="26" />
        <rect x="780" y="20"  width="6"  height="22" />

        {/* Right cluster */}
        <rect x="838" y="170" width="60" height="150" />
        <rect x="898" y="140" width="48" height="180" />
        <rect x="946" y="195" width="74" height="125" />

        {/* Mid-right peaked tower */}
        <polygon points="1024,200 1052,160 1080,200" />
        <rect x="1024" y="200" width="56" height="120" />

        <rect x="1086" y="225" width="50" height="95" />
        <rect x="1138" y="200" width="68" height="120" />
        <rect x="1206" y="240" width="44" height="80" />
        <rect x="1252" y="215" width="60" height="105" />
        <rect x="1314" y="225" width="92" height="95" />
        <rect x="1408" y="245" width="56" height="75" />
        <rect x="1466" y="225" width="66" height="95" />
        <rect x="1534" y="250" width="66" height="70" />
      </g>

      {/* Scattered foreground gold sparkles */}
      <g fill="#F5D17A">
        <circle cx="120"  cy="270" r="1.2" opacity="0.8" />
        <circle cx="285"  cy="245" r="1"   opacity="0.7" />
        <circle cx="440"  cy="260" r="1.4" opacity="0.9" />
        <circle cx="660"  cy="180" r="1"   opacity="0.7" />
        <circle cx="780"  cy="120" r="1.6" opacity="1" />
        <circle cx="950"  cy="240" r="1.1" opacity="0.7" />
        <circle cx="1100" cy="260" r="1.3" opacity="0.85" />
        <circle cx="1280" cy="250" r="1"   opacity="0.75" />
        <circle cx="1420" cy="270" r="1.5" opacity="0.9" />
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Gold rays — fanning upward from the skyline horizon
   ───────────────────────────────────────────────────────────── */

function RaysSVG() {
  const rays = [];
  // Generate 13 rays at varied angles and widths
  const angles = [-60, -50, -38, -28, -18, -9, 0, 9, 18, 28, 38, 50, 60];
  for (let i = 0; i < angles.length; i++) {
    const a = angles[i];
    const width = 14 + (Math.abs(a) < 20 ? 6 : 0);
    const opacity = 0.35 + (i % 2 === 0 ? 0.15 : 0);
    rays.push(
      <g key={i} transform={`rotate(${a})`}>
        <polygon
          points={`-${width / 2},0 ${width / 2},0 ${width / 6},-2400 -${width / 6},-2400`}
          fill="url(#rayGrad)"
          opacity={opacity}
          style={{
            animation: `ray-grow 1800ms cubic-bezier(.22,.61,.36,1) ${1200 + i * 60}ms both`,
            transformOrigin: 'center bottom',
          }}
        />
      </g>
    );
  }

  return (
    <svg
      viewBox="-800 -1800 1600 1800"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rayGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%"   stopColor="#F5D17A" stopOpacity="0.85" />
          <stop offset="40%"  stopColor="#E5A93B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E5A93B" stopOpacity="0" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ray-grow {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); }
        }
      `}</style>

      <g transform="translate(0 0)">{rays}</g>
    </svg>
  );
}
