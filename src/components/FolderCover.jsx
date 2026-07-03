import NeedleMotif from './NeedleMotif.jsx';

/**
 * FolderCover — the closed peach cover of the folder.
 * Click to open. Once open, becomes non-interactive (and animates away).
 */
export default function FolderCover({ onOpen, isOpen }) {
  return (
    <button
      type="button"
      className="folder__cover"
      onClick={onOpen}
      aria-label="Open the promotional folder"
      aria-expanded={isOpen}
      disabled={isOpen}
    >
      <div className="cover-face">
        {/* Subtle paper texture on the peach stock */}
        <div className="cover-face__paper" aria-hidden="true" />

        {/* Halftone shading — gentle gradient, ink-printed feel */}
        <div className="cover-face__halftone" aria-hidden="true" />

        {/* Top printed band: small caps stamp */}
        <div className="cover-face__band cover-face__band--top">
          <span className="cover-face__band-stars">★ ★ ★</span>
          A Civic Proposal
          <span className="cover-face__band-stars">★ ★ ★</span>
        </div>

        {/* Main illustration + tagline */}
        <div className="cover-face__main">
          <p className="cover-face__supertitle">Two Space Needles</p>

          <div className="cover-face__needle">
            <NeedleMotif variant="cover" className="cover-face__needle-svg" />
          </div>

          <h1 className="cover-face__title">A Timeless View</h1>

          <p className="cover-face__sub">
            Seattle, Washington · MCMLXII—MMXXIV
          </p>
        </div>

        {/* Bottom printed band: open the folder cue */}
        <div className="cover-face__band cover-face__band--bottom">
          <span className="cover-face__cue">Open ▸</span>
          <span>The Movement to Build a Second Space Needle</span>
          <span className="cover-face__exhibit">№ 02</span>
        </div>

        {/* Hairline frame inside the cover edge */}
        <div className="cover-face__frame" aria-hidden="true" />
      </div>
    </button>
  );
}
