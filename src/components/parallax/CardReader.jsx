import { useState, useCallback } from 'react';

const asset = (name) => `${import.meta.env.BASE_URL || '/'}parallax/${name}`;

/**
 * Full-length campaign card. A selected illustrated layer "expands" into this:
 * the layer's card artwork sits at the top, and the original campaign copy from
 * inserts.js flows down a tall navy/paper field below. Scrolls as a normal
 * document; the parallax behind it is suspended while this is open.
 */
export default function CardReader({ insert, art, originRect, onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 340);
  }, [onClose]);

  // anchor the rise animation to where the layer was clicked
  const styleVars = originRect
    ? {
        '--origin-x': `${originRect.x}px`,
        '--origin-y': `${originRect.y}px`,
      }
    : undefined;

  return (
    <div
      className={`card-reader${closing ? ' is-closing' : ''}`}
      style={styleVars}
      role="dialog"
      aria-label={insert.title}
    >
      <div className="card-reader-scroll">
        <div
          className={`card-reader-sheet paper-${insert.paper || 'cream'}`}
          data-accent={insert.accent}
        >
          {/* illustrated header lifted from the parallax layer */}
          <div
            className="card-reader-art"
            style={{ backgroundImage: `url(${asset(art)})` }}
            aria-hidden="true"
          />

          <div className="card-reader-body">
            <div className="card-reader-meta">
              <span className="card-reader-exhibit">{insert.stamp}</span>
              <span className="card-reader-num">№ {insert.tabNum}</span>
            </div>

            <h1 className="card-reader-title">{insert.title}</h1>
            {insert.tagline && <p className="card-reader-tagline">{insert.tagline}</p>}

            <div className="card-reader-rule" aria-hidden="true" />

            {insert.body && insert.body.map((p, i) => (
              <p key={i} className="card-reader-para">{p}</p>
            ))}

            {insert.list && (
              <ol className="card-reader-list">
                {insert.list.map((item, i) => (
                  <li key={i}>
                    <span className="card-reader-list-num">{item.num}</span>
                    <span>
                      <strong>{item.title}.</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ol>
            )}

            {insert.faq && (
              <dl className="card-reader-faq">
                {insert.faq.map((qa, i) => (
                  <div key={i} className="card-reader-qa">
                    <dt>{qa.q}</dt>
                    <dd>{qa.a}</dd>
                  </div>
                ))}
              </dl>
            )}

            {insert.cta && (
              <a className="card-reader-cta" href={insert.cta.href} target="_blank" rel="noreferrer">
                {insert.cta.label}
              </a>
            )}

            {insert.secondary && <p className="card-reader-secondary">{insert.secondary}</p>}
          </div>
        </div>
      </div>

      <button className="card-reader-return" onClick={handleClose}>
        ← Return to the Fairgrounds
      </button>
    </div>
  );
}
