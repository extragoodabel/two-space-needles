/**
 * GoldNeedleSilhouette
 * ─────────────────────────────────────────────────────────────
 * Stylized SVG of a Space Needle with a warm gold gradient body
 * and a subtle backlight highlight stripe across the observation
 * deck. Built originally for the v1 CSS-only splash sequence.
 *
 * Preserved here for potential future use (poster motifs, ticker
 * elements, small marks). Not currently mounted anywhere — import
 * from this file when you need it.
 *
 * Usage:
 *   import GoldNeedleSilhouette from '../assets/GoldNeedleSilhouette.jsx';
 *   <GoldNeedleSilhouette />
 */
export default function GoldNeedleSilhouette() {
  return (
    <svg
      viewBox="0 0 200 600"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldNeedleBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F3D8A3" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#E5B665" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8A6B36" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="goldNeedleHighlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFF3D6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g fill="url(#goldNeedleBody)" stroke="none">
        <circle cx="100" cy="22" r="3.5" />
        <rect x="98.5" y="22" width="3" height="100" />
        <path d="M 92 122 L 108 122 L 110 138 L 90 138 Z" />
        <ellipse cx="100" cy="142" rx="34" ry="6" />
        <path d="M 50 156 Q 50 142 100 142 Q 150 142 150 156 L 150 172 Q 100 188 50 172 Z" />
        <path d="M 62 172 L 76 200 L 124 200 L 138 172 Z" />
        <path d="M 89 200 L 92 460 L 108 460 L 111 200 Z" />
        <path d="M 111 460 Q 130 510 158 580 L 170 580 Q 150 510 119 470 Z" />
        <path d="M 89 460 Q 70 510 42 580 L 30 580 Q 50 510 81 470 Z" />
        <path d="M 96 460 L 92 580 L 108 580 L 104 460 Z" />
        <rect x="22" y="580" width="156" height="5" />
      </g>

      <rect
        x="60" y="142"
        width="80" height="32"
        fill="url(#goldNeedleHighlight)"
        opacity="0.45"
      />
    </svg>
  );
}
