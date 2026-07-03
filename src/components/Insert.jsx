import { useEffect, useRef } from 'react';
import NeedleMotif from './NeedleMotif.jsx';

/**
 * Insert — the printed document that has been pulled out of a pocket.
 * Renders as a full-screen overlay; the visible "sheet" is centered
 * and styled per the insert's `paper` tone and `layout` variant.
 */
export default function Insert({ insert, onClose }) {
  const ref = useRef(null);

  // Focus the sheet so Esc / Tab work predictably.
  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, [insert.id]);

  const {
    paper, accent, layout,
    stamp, tabNum, title, tagline, body,
    list, faq, cta, secondary,
  } = insert;

  return (
    <div
      className="insert-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`insert-${insert.id}-title`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <article
        ref={ref}
        tabIndex={-1}
        className={`insert insert--paper-${paper} insert--accent-${accent} insert--layout-${layout}`}
      >
        {/* Pristine paper texture */}
        <div className="insert__paper" aria-hidden="true" />

        <button
          type="button"
          className="insert__close"
          onClick={onClose}
          aria-label="Close insert"
        >
          ✕
        </button>

        <header className="insert__head">
          <span className="insert__stamp">
            <span className="insert__stamp-num">{tabNum}</span>
            <span className="insert__stamp-text">{stamp}</span>
          </span>
          <h2 id={`insert-${insert.id}-title`} className="insert__title">
            {title}
          </h2>
          {tagline && <p className="insert__tagline">{tagline}</p>}
        </header>

        <div className="insert__body">
          {layout === 'pamphlet' && <PamphletBody body={body} />}
          {layout === 'diagram' && <DiagramBody body={body} />}
          {layout === 'manifesto' && <ManifestoBody body={body} list={list} />}
          {layout === 'petition' && (
            <PetitionBody body={body} cta={cta} secondary={secondary} />
          )}
          {layout === 'faq' && <FaqBody faq={faq} />}
          {layout === 'merch' && (
            <MerchBody body={body} cta={cta} secondary={secondary} />
          )}
          {layout === 'classified' && (
            <ClassifiedBody body={body} cta={cta} secondary={secondary} />
          )}
        </div>

        {/* Footer line: secondary note for layouts that didn't render it */}
        {secondary && !['petition', 'merch', 'classified'].includes(layout) && (
          <footer className="insert__foot">{secondary}</footer>
        )}
      </article>
    </div>
  );
}

/* ── Layout variants ──────────────────────────────────────── */

function PamphletBody({ body }) {
  return (
    <div className="insert-pamphlet">
      {body.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

function DiagramBody({ body }) {
  return (
    <div className="insert-diagram">
      <div className="insert-diagram__row" aria-hidden="true">
        <figure className="insert-diagram__needle">
          <NeedleMotif variant="silhouette" className="insert-diagram__svg" />
          <figcaption>
            <span className="insert-diagram__num">01</span> The original
          </figcaption>
        </figure>
        <div className="insert-diagram__plus">+</div>
        <figure className="insert-diagram__needle">
          <NeedleMotif variant="silhouette" className="insert-diagram__svg" />
          <figcaption>
            <span className="insert-diagram__num insert-diagram__num--alt">02</span> The proposed
          </figcaption>
        </figure>
      </div>
      <div className="insert-diagram__copy">
        {body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  );
}

function ManifestoBody({ body, list }) {
  return (
    <div className="insert-manifesto">
      {body.map((p, i) => <p key={i}>{p}</p>)}
      {list && (
        <ul className="insert-manifesto__list">
          {list.map((it) => (
            <li key={it.num} className="insert-manifesto__item">
              <span className="insert-manifesto__num">{it.num}</span>
              <div>
                <strong>{it.title}.</strong>
                <span> {it.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PetitionBody({ body, cta, secondary }) {
  return (
    <div className="insert-petition">
      {body.map((p, i) => <p key={i}>{p}</p>)}
      {cta && (
        <a className="insert-petition__cta" href={cta.href} target="_blank" rel="noopener noreferrer">
          {cta.label} <span aria-hidden="true">→</span>
        </a>
      )}
      {secondary && <p className="insert-petition__note">{secondary}</p>}
    </div>
  );
}

function FaqBody({ faq }) {
  return (
    <dl className="insert-faq">
      {faq.map(({ q, a }) => (
        <div key={q} className="insert-faq__pair">
          <dt>
            <span className="insert-faq__marker">Q.</span>
            {q}
          </dt>
          <dd>
            <span className="insert-faq__marker insert-faq__marker--a">A.</span>
            {a}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function MerchBody({ body, cta, secondary }) {
  return (
    <div className="insert-merch">
      {body.map((p, i) => <p key={i}>{p}</p>)}
      {cta && (
        <a className="insert-merch__cta" href={cta.href} target="_blank" rel="noopener noreferrer">
          {cta.label} <span aria-hidden="true">→</span>
        </a>
      )}
      {secondary && <p className="insert-merch__note">{secondary}</p>}
    </div>
  );
}

function ClassifiedBody({ body, cta, secondary }) {
  return (
    <div className="insert-classified">
      {body.map((p, i) => <p key={i}>{p}</p>)}
      {cta && (
        <a className="insert-classified__cta" href={cta.href}>
          {cta.label} <span aria-hidden="true">→</span>
        </a>
      )}
      {secondary && <p className="insert-classified__note">{secondary}</p>}
    </div>
  );
}
