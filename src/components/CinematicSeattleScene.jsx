import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

/**
 * CinematicSeattleScene
 * ────────────────────────────────────────────────────────────────
 * A non-interactive, looping background scene.
 *
 * THE RULE: only two Needles are ever visible at once.
 *   - The original Needle is fixed at ORIGINAL_NEEDLE_POSITION
 *     (tune this if it ends up offset from the city model's real
 *     Needle location).
 *   - The second Needle relocates between curated positions, but
 *     ONLY during the PAN_AWAY phase, when the camera is facing
 *     the horizon — so the move is never visible.
 *
 * THE LOOP (~32s per scene change):
 *   ESTABLISH  (8s)  — low, wide, both Needles in frame
 *   SWEEP      (7s)  — rise to second Needle's observation deck
 *   PAN_AWAY   (5s)  — camera holds; lookAt sweeps to the horizon
 *                       └─ teleport happens mid-way through this phase
 *   APPROACH   (8s)  — fly toward the newly relocated second Needle
 *   SETTLE     (4s)  — composed shot of both Needles, gentle drift
 *
 * After SETTLE the cycle restarts on ESTABLISH with the new
 * arrangement. Cycles forever.
 *
 * Tuning notes
 * ────────────
 * The numeric constants below (positions, camera offsets, fog
 * distance) assume the Seattle GLB is roughly a 100×100 unit
 * patch centered near the origin. They WILL need adjustment to
 * the actual model. The easiest knobs:
 *   - ORIGINAL_NEEDLE_POSITION   (anchor)
 *   - SECOND_POSITIONS           (curated points)
 *   - CAM_*                      (offsets from second needle)
 *   - FOG_NEAR / FOG_FAR
 *   - DIR_LIGHT_POS / colors
 */

const CITY_URL   = '/models/seattle_washington_usa.glb';
const NEEDLE_URL = '/models/space-needle-park.glb';

useGLTF.preload(CITY_URL);
useGLTF.preload(NEEDLE_URL);

// ── Anchor positions ────────────────────────────────────────
const ORIGINAL_NEEDLE_POSITION = new THREE.Vector3(0, 0, 0);

// Curated relocations for the second Needle. Six strong, distinct
// vantages spaced around the city. Avoid placing too close to origin.
const SECOND_POSITIONS = [
  new THREE.Vector3( 28,  0,  12),
  new THREE.Vector3(-26,  0,  18),
  new THREE.Vector3( 14,  0, -30),
  new THREE.Vector3(-20,  0, -24),
  new THREE.Vector3( 32,  0,  28),
  new THREE.Vector3(-30,  0,  -8),
];

// ── Phase durations (seconds) ───────────────────────────────
const PHASE = {
  ESTABLISH: 8.0,
  SWEEP:     7.0,
  PAN_AWAY:  5.0,
  APPROACH:  8.0,
  SETTLE:    4.0,
};
const PHASE_ORDER = ['ESTABLISH', 'SWEEP', 'PAN_AWAY', 'APPROACH', 'SETTLE'];
const CYCLE_DURATION = PHASE_ORDER.reduce((s, p) => s + PHASE[p], 0);

// ── Lighting / atmosphere ───────────────────────────────────
const FOG_COLOR  = '#E8AA62';  // warm haze (sunset/expo light)
const FOG_NEAR   = 40;
const FOG_FAR    = 220;
const SUN_COLOR  = '#F5D17A';
const FILL_COLOR = '#A8C5D0';

export default function CinematicSeattleScene() {
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="cine-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [45, 6, 55], fov: 50, near: 0.1, far: 800 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
      <div className="cine-scene__overlay" aria-hidden="true" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

function Scene({ reducedMotion }) {
  const cityGltf   = useGLTF(CITY_URL);
  const needleGltf = useGLTF(NEEDLE_URL);

  // Independent clones so each Needle has its own transform & materials.
  const originalNeedle = useMemo(() => prepareNeedle(needleGltf.scene), [needleGltf]);
  const secondNeedle   = useMemo(() => prepareNeedle(needleGltf.scene), [needleGltf]);

  const secondRef       = useRef(null);
  const elapsedRef      = useRef(0);
  const currentIdxRef   = useRef(0);
  const teleportedRef   = useRef(false);
  const lastPhaseRef    = useRef('ESTABLISH');

  // Place second needle at starting position.
  useEffect(() => {
    if (secondRef.current) {
      secondRef.current.position.copy(SECOND_POSITIONS[0]);
    }
  }, []);

  useFrame(({ camera }, delta) => {
    // Reduced-motion: hold a single, well-composed poster frame.
    if (reducedMotion) {
      const second = SECOND_POSITIONS[0];
      camera.position.set(40, 10, 55);
      camera.lookAt(
        (ORIGINAL_NEEDLE_POSITION.x + second.x) / 2,
        26,
        (ORIGINAL_NEEDLE_POSITION.z + second.z) / 2
      );
      return;
    }

    elapsedRef.current += delta;
    const cycleT = elapsedRef.current % CYCLE_DURATION;

    // Determine current phase + local progress within it.
    let acc = 0;
    let phase = 'ESTABLISH';
    let localStart = 0;
    for (const name of PHASE_ORDER) {
      if (cycleT < acc + PHASE[name]) {
        phase = name;
        localStart = acc;
        break;
      }
      acc += PHASE[name];
    }
    const localT = (cycleT - localStart) / PHASE[phase];

    // Reset the teleport flag when the cycle restarts (ESTABLISH).
    if (phase === 'ESTABLISH' && lastPhaseRef.current !== 'ESTABLISH') {
      teleportedRef.current = false;
    }
    lastPhaseRef.current = phase;

    // Teleport second Needle midway through PAN_AWAY.
    if (
      phase === 'PAN_AWAY' &&
      localT > 0.55 &&
      !teleportedRef.current &&
      secondRef.current
    ) {
      currentIdxRef.current =
        (currentIdxRef.current + 1) % SECOND_POSITIONS.length;
      secondRef.current.position.copy(
        SECOND_POSITIONS[currentIdxRef.current]
      );
      teleportedRef.current = true;
    }

    const second = SECOND_POSITIONS[currentIdxRef.current];
    const eased = smoothstep(localT);

    // Per-phase camera framing.
    let camPos, lookAt;

    switch (phase) {
      case 'ESTABLISH': {
        // Wide, low, both Needles visible.
        const start = new THREE.Vector3(48,  3, 58);
        const end   = new THREE.Vector3(36,  9, 44);
        camPos = lerp(start, end, eased);

        const lookStart = midpoint(ORIGINAL_NEEDLE_POSITION, second).setY(24);
        const lookEnd   = midpoint(ORIGINAL_NEEDLE_POSITION, second).setY(28);
        lookAt = lerp(lookStart, lookEnd, eased);
        break;
      }
      case 'SWEEP': {
        // Rise toward second Needle's deck. Original drifts into BG.
        const start = new THREE.Vector3(36, 9, 44);
        const end   = second.clone().add(new THREE.Vector3(14, 46, 18));
        camPos = lerp(start, end, eased);

        const lookStart = midpoint(ORIGINAL_NEEDLE_POSITION, second).setY(28);
        const lookEnd   = second.clone().setY(48);
        lookAt = lerp(lookStart, lookEnd, eased);
        break;
      }
      case 'PAN_AWAY': {
        // Camera holds; lookAt sweeps from second Needle to far horizon.
        camPos = second.clone().add(new THREE.Vector3(14, 46, 18));

        const lookStart = second.clone().setY(48);
        const lookEnd   = new THREE.Vector3(120, 38, -100); // distant nothing
        lookAt = lerp(lookStart, lookEnd, eased);
        break;
      }
      case 'APPROACH': {
        // Glide from "looking away" back toward the new second Needle.
        // `second` is now the NEW position (teleport already happened).
        const start = second.clone().add(new THREE.Vector3(14, 46, 18));
        // Wait — `second` is the new position, so `start` here is
        // computed relative to the new needle. That's a small jump
        // compared to the camera's actual previous frame. Acceptable
        // because the look direction is far off-axis (the horizon),
        // so a few units of XYZ shift is unnoticeable.
        const end = second.clone().add(new THREE.Vector3(22, 14, 30));
        camPos = lerp(start, end, eased);

        const lookStart = new THREE.Vector3(120, 38, -100);
        const lookEnd   = midpoint(ORIGINAL_NEEDLE_POSITION, second).setY(26);
        lookAt = lerp(lookStart, lookEnd, eased);
        break;
      }
      case 'SETTLE': {
        // Composed shot of both Needles, gentle orbit drift.
        const base = second.clone().add(new THREE.Vector3(22, 14, 30));
        const drift = elapsedRef.current * 0.18;
        camPos = base
          .clone()
          .add(new THREE.Vector3(Math.sin(drift) * 1.8, Math.cos(drift) * 0.6, 0));

        lookAt = midpoint(ORIGINAL_NEEDLE_POSITION, second).setY(26);
        break;
      }
      default:
        camPos = camera.position.clone();
        lookAt = new THREE.Vector3(0, 25, 0);
    }

    camera.position.copy(camPos);
    camera.lookAt(lookAt);
  });

  return (
    <>
      <fog attach="fog" args={[FOG_COLOR, FOG_NEAR, FOG_FAR]} />

      {/* One ambient (cool fill) + one directional (warm sun). */}
      <ambientLight intensity={0.55} color={FILL_COLOR} />
      <directionalLight
        position={[60, 80, 40]}
        intensity={2.2}
        color={SUN_COLOR}
      />

      {/* Seattle base */}
      <primitive object={cityGltf.scene} />

      {/* The two Needles */}
      <primitive
        object={originalNeedle}
        position={ORIGINAL_NEEDLE_POSITION.toArray()}
      />
      <primitive ref={secondRef} object={secondNeedle} />
    </>
  );
}

/* ── helpers ─────────────────────────────────────────────── */

function prepareNeedle(originalScene) {
  const cloned = originalScene.clone(true);
  cloned.traverse((obj) => {
    if (obj.isMesh && obj.material) {
      // Clone material so opacity / color tweaks on one don't bleed.
      obj.material = obj.material.clone();
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });
  return cloned;
}

function midpoint(a, b) {
  return new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
}

function lerp(a, b, t) {
  return new THREE.Vector3().lerpVectors(a, b, t);
}

function smoothstep(t) {
  t = Math.max(0, Math.min(1, t));
  return t * t * (3 - 2 * t);
}
