import { useEffect, useState } from 'react';

/**
 * BookendNeedles
 * Two SVG Space Needles pinned to the left and right edges of the
 * viewport, holding page content between them like a guidebook spread.
 *
 * Color scheme follows the actual 1962 Century 21 paint scheme as
 * depicted in /public/references: cream-white legs and central
 * column, vermilion red observation disc and antenna.
 */
export default function BookendNeedles({ shown }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!shown) return;
    const t = window.setTimeout(() => setMounted(true), 400);
    return () => window.clearTimeout(t);
  }, [shown]);

  return (
    <div className={`bookends ${mounted ? 'bookends--shown' : ''}`} aria-hidden="true">
      <div className="bookend bookend--left">
        <BookendNeedleSVG />
      </div>
      <div className="bookend bookend--right">
        <BookendNeedleSVG />
      </div>
    </div>
  );
}

function BookendNeedleSVG() {
  return (
    <svg
      className="bookend__svg"
      viewBox="0 0 200 800"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* Antenna spire — vermilion */}
      <g fill="#D9342B">
        <circle cx="100" cy="32" r="5" />
        <rect x="97.5" y="32" width="5" height="130" />
        {/* Spire collar */}
        <path d="M 90 162 L 110 162 L 113 178 L 87 178 Z" />
      </g>

      {/* Observation disc — vermilion red, the iconic UFO */}
      <g fill="#D9342B">
        <ellipse cx="100" cy="184" rx="40" ry="7" />
        <path d="M 48 198 Q 48 184 100 184 Q 152 184 152 198 L 152 220 Q 100 240 48 220 Z" />
      </g>

      {/* Disc underside detail — slightly darker red */}
      <path d="M 60 220 L 76 256 L 124 256 L 140 220 Z" fill="#B5251D" />

      {/* Central elevator column — cream */}
      <g fill="#F2E8CC">
        <path d="M 89 256 L 92 620 L 108 620 L 111 256 Z" />
        {/* Curved legs */}
        <path d="M 111 620 Q 130 680 162 780 L 178 780 Q 150 680 119 632 Z" />
        <path d="M 89 620 Q 70 680 38 780 L 22 780 Q 50 680 81 632 Z" />
        <path d="M 96 620 L 90 780 L 110 780 L 104 620 Z" />
        <rect x="16" y="780" width="168" height="6" />
      </g>

      {/* Subtle inner edge shadow on column for dimensionality */}
      <g fill="#000" opacity="0.25">
        <path d="M 89 256 L 91 620 L 96 620 L 96 256 Z" />
      </g>

      {/* Elevation tick marks — mustard */}
      <g stroke="#E8B842" strokeWidth="0.6" opacity="0.8">
        <line x1="146" y1="260" x2="160" y2="260" />
        <line x1="146" y1="360" x2="160" y2="360" />
        <line x1="146" y1="460" x2="160" y2="460" />
        <line x1="146" y1="560" x2="160" y2="560" />
      </g>
    </svg>
  );
}
