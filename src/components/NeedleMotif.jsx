/**
 * NeedleMotif — printed Century 21–style Space Needle illustration.
 * Pure inline SVG, no animation. Three variants:
 *
 *   'cover'      — large dramatic version for the folder cover, with
 *                  painted sky + light rays + halftone ground shadow.
 *   'silhouette' — clean two-color print for interior bookends.
 *   'mark'       — compact monochrome glyph for tabs and small marks.
 */
export default function NeedleMotif({ variant = 'silhouette', className }) {
  if (variant === 'cover')      return <NeedleCover className={className} />;
  if (variant === 'mark')       return <NeedleMark className={className} />;
  return <NeedleSilhouette className={className} />;
}

/* ── 'silhouette' — printed two-color Needle ───────────────── */
function NeedleSilhouette({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 800"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <pattern id="discHalftone" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.9" fill="#B5251D" />
        </pattern>
        <pattern id="groundHalftone" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.7" fill="#0F1118" opacity="0.55" />
        </pattern>
      </defs>

      {/* Antenna spire */}
      <g fill="#D9342B">
        <circle cx="100" cy="30" r="4.5" />
        <rect x="97.5" y="30" width="5" height="132" />
        <path d="M 90 162 L 110 162 L 113 178 L 87 178 Z" />
      </g>

      {/* Observation disc — vermilion with halftone shading */}
      <g>
        <ellipse cx="100" cy="184" rx="40" ry="7" fill="#D9342B" />
        <path
          d="M 48 198 Q 48 184 100 184 Q 152 184 152 198 L 152 220 Q 100 240 48 220 Z"
          fill="#D9342B"
        />
        <ellipse cx="100" cy="206" rx="48" ry="14" fill="url(#discHalftone)" opacity="0.6" />
        <path d="M 60 220 L 76 256 L 124 256 L 140 220 Z" fill="#B5251D" />
      </g>

      {/* Central column — cream/white with ink edges */}
      <g>
        <path d="M 89 256 L 92 620 L 108 620 L 111 256 Z" fill="#F2E8CC" />
        <line x1="92" y1="256" x2="92" y2="620" stroke="#0F1118" strokeWidth="0.7" />
        <line x1="108" y1="256" x2="108" y2="620" stroke="#0F1118" strokeWidth="0.7" />
        {/* a few horizontal rungs to suggest the elevator shaft */}
        <line x1="92" y1="340" x2="108" y2="340" stroke="#0F1118" strokeWidth="0.5" opacity="0.5" />
        <line x1="92" y1="430" x2="108" y2="430" stroke="#0F1118" strokeWidth="0.5" opacity="0.5" />
        <line x1="92" y1="520" x2="108" y2="520" stroke="#0F1118" strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* Legs — cream with ink outlines */}
      <g fill="#F2E8CC" stroke="#0F1118" strokeWidth="0.8">
        <path d="M 111 620 Q 130 680 162 780 L 178 780 Q 150 680 119 632 Z" />
        <path d="M 89 620 Q 70 680 38 780 L 22 780 Q 50 680 81 632 Z" />
        <path d="M 96 620 L 90 780 L 110 780 L 104 620 Z" />
      </g>

      {/* Ground line + halftone shadow */}
      <rect x="14" y="780" width="172" height="5" fill="#0F1118" />
      <rect x="0" y="785" width="200" height="14" fill="url(#groundHalftone)" />
    </svg>
  );
}

/* ── 'cover' — dramatic illustration with sky + rays ───────── */
function NeedleCover({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 520"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        {/* Painted sky gradient — midnight to peach */}
        <linearGradient id="coverSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#13243F" />
          <stop offset="55%" stopColor="#3B5778" />
          <stop offset="85%" stopColor="#E8B842" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E8A075" stopOpacity="0.0" />
        </linearGradient>
        <pattern id="coverHalftoneSky" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="3.5" cy="3.5" r="0.9" fill="#F4D272" />
        </pattern>
        <pattern id="coverDiscDots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="0.7" fill="#B5251D" />
        </pattern>
        <pattern id="coverGround" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="0.6" fill="#0F1118" opacity="0.5" />
        </pattern>
        <linearGradient id="rayGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%"   stopColor="#F4D272" stopOpacity="0.0" />
          <stop offset="40%"  stopColor="#F4D272" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F4D272" stopOpacity="0.0" />
        </linearGradient>
        <mask id="haloMask">
          <radialGradient id="haloMaskGrad" cx="50%" cy="78%" r="60%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          <rect width="360" height="520" fill="url(#haloMaskGrad)" />
        </mask>
      </defs>

      {/* Painted sky behind everything */}
      <rect width="360" height="520" fill="url(#coverSky)" />

      {/* Halftone glow concentrated low-horizon */}
      <rect
        width="360" height="520"
        fill="url(#coverHalftoneSky)"
        mask="url(#haloMask)"
        opacity="0.55"
      />

      {/* Light rays radiating from the base */}
      <g transform="translate(180 460)">
        {[-55, -38, -22, -8, 8, 22, 38, 55].map((a, i) => (
          <polygon
            key={i}
            points="-10,0 10,0 3,-560 -3,-560"
            fill="url(#rayGrad)"
            transform={`rotate(${a})`}
          />
        ))}
      </g>

      {/* The Needle itself, centered */}
      <g transform="translate(180 480)">
        {/* spire */}
        <circle cx="0" cy="-440" r="3.5" fill="#D9342B" />
        <rect x="-2" y="-440" width="4" height="100" fill="#D9342B" />
        <path d="M -8 -340 L 8 -340 L 10 -326 L -10 -326 Z" fill="#D9342B" />
        {/* disc */}
        <ellipse cx="0" cy="-308" rx="34" ry="6" fill="#D9342B" />
        <path d="M -42 -296 Q -42 -308 0 -308 Q 42 -308 42 -296 L 42 -278 Q 0 -262 -42 -278 Z" fill="#D9342B" />
        <ellipse cx="0" cy="-286" rx="40" ry="10" fill="url(#coverDiscDots)" opacity="0.65" />
        <path d="M -34 -278 L -22 -250 L 22 -250 L 34 -278 Z" fill="#B5251D" />
        {/* column */}
        <path d="M -9 -250 L -8 -40 L 8 -40 L 9 -250 Z" fill="#F2E8CC" />
        <line x1="-8" y1="-250" x2="-8" y2="-40" stroke="#0F1118" strokeWidth="0.6" />
        <line x1="8" y1="-250" x2="8" y2="-40" stroke="#0F1118" strokeWidth="0.6" />
        {[-220, -160, -100, -60].map((y) => (
          <line key={y} x1="-8" y1={y} x2="8" y2={y} stroke="#0F1118" strokeWidth="0.4" opacity="0.5" />
        ))}
        {/* legs */}
        <g fill="#F2E8CC" stroke="#0F1118" strokeWidth="0.7">
          <path d="M 9 -40 Q 26 6 56 60 L 70 60 Q 44 6 16 -32 Z" />
          <path d="M -9 -40 Q -26 6 -56 60 L -70 60 Q -44 6 -16 -32 Z" />
          <path d="M -4 -40 L -7 60 L 7 60 L 4 -40 Z" />
        </g>
        {/* ground line + halftone */}
        <rect x="-90" y="60" width="180" height="5" fill="#0F1118" />
        <rect x="-180" y="65" width="360" height="20" fill="url(#coverGround)" opacity="0.85" />
      </g>
    </svg>
  );
}

/* ── 'mark' — compact glyph for tabs and small marks ──────── */
function NeedleMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="19" y="2" width="2" height="14" />
        <ellipse cx="20" cy="18" rx="9" ry="2" />
        <path d="M 11 22 Q 11 18 20 18 Q 29 18 29 22 L 29 26 Q 20 30 11 26 Z" />
        <path d="M 18 28 L 18 50 L 22 50 L 22 28 Z" />
        <path d="M 22 50 Q 27 55 33 58 L 36 58 Q 28 53 24 51 Z" />
        <path d="M 18 50 Q 13 55 7 58 L 4 58 Q 12 53 16 51 Z" />
        <rect x="3" y="58" width="34" height="1.5" />
      </g>
    </svg>
  );
}
