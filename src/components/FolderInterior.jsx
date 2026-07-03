import Pocket from './Pocket.jsx';
import NeedleMotif from './NeedleMotif.jsx';

/**
 * FolderInterior — the two-panel printed interior, revealed when
 * the cover is open. Pockets are split across the left and right
 * panels; two Needle motifs frame the outer edges.
 */
export default function FolderInterior({ inserts, activeId, onSelect, isOpen }) {
  // Split pockets roughly evenly between left and right panels.
  const mid = Math.ceil(inserts.length / 2);
  const left = inserts.slice(0, mid);
  const right = inserts.slice(mid);

  return (
    <div className="interior" aria-hidden={!isOpen}>
      <div className="interior__paper" aria-hidden="true" />
      <div className="interior__halftone" aria-hidden="true" />
      <div className="interior__spine" aria-hidden="true" />

      <header className="interior__masthead">
        <span className="interior__masthead-stars">★ ★</span>
        <span className="interior__masthead-text">Two Space Needles</span>
        <span className="interior__masthead-italic">— Times Two</span>
        <span className="interior__masthead-stars">★ ★</span>
      </header>

      <div className="interior__panels">
        <section className="interior__panel interior__panel--left" aria-label="Folder, left panel">
          <NeedleMotif variant="silhouette" className="interior__bookend" />
          <div className="interior__pockets">
            {left.map((it) => (
              <Pocket
                key={it.id}
                insert={it}
                active={activeId === it.id}
                onClick={() => onSelect(it.id)}
                tabIndex={isOpen ? 0 : -1}
              />
            ))}
          </div>
        </section>

        <section className="interior__panel interior__panel--right" aria-label="Folder, right panel">
          <div className="interior__pockets">
            {right.map((it) => (
              <Pocket
                key={it.id}
                insert={it}
                active={activeId === it.id}
                onClick={() => onSelect(it.id)}
                tabIndex={isOpen ? 0 : -1}
              />
            ))}
          </div>
          <NeedleMotif variant="silhouette" className="interior__bookend interior__bookend--right" />
        </section>
      </div>

      <footer className="interior__colophon">
        <span>Filed MMXXIV · Seattle WA</span>
        <span>twospaceneedles@gmail.com</span>
        <span>@twospaceneedles</span>
      </footer>
    </div>
  );
}
