import GoldNeedleSilhouette from '../assets/GoldNeedleSilhouette.jsx';

/**
 * Proposal — diagrammatic "Two Space Needles" exhibit.
 * The simplest possible visual statement of the campaign:
 *   Needle (existing)  +  Needle (proposed)  =  the proposal.
 */
export default function Proposal() {
  return (
    <section className="section proposal" id="proposal">
      <div className="tex-paper" aria-hidden="true" />

      <div className="container">
        <div className="proposal__head">
          <span className="proposal__label">
            <span className="proposal__label-num">02</span>
            <span className="proposal__label-text">The Proposal</span>
          </span>

          <h2 className="proposal__title">
            That is why we propose <em>Two Space Needles.</em>
          </h2>

          <p className="proposal__sub">
            A bold proposal to invest in building a second Space Needle —
            an identical twin tower adjacent to the original — so that
            visitors and locals alike may at last enjoy the ultimate Seattle
            experience: seeing the Space Needle from the top of the
            Space Needle.
          </p>
        </div>

        <div className="proposal__diagram" aria-hidden="true">
          <figure className="proposal__needle">
            <div className="proposal__needle-svg">
              <GoldNeedleSilhouette />
            </div>
            <figcaption className="proposal__needle-label">
              <span className="proposal__needle-label-num">01</span>
              The original
            </figcaption>
          </figure>

          <div className="proposal__equals">+</div>

          <figure className="proposal__needle">
            <div className="proposal__needle-svg">
              <GoldNeedleSilhouette />
            </div>
            <figcaption className="proposal__needle-label">
              <span className="proposal__needle-label-num proposal__needle-label-num--plus">02</span>
              The proposed
            </figcaption>
          </figure>
        </div>

        <p className="proposal__caption">
          Fig. 03 · Comparative elevation · Drawn 1:5000
        </p>
      </div>
    </section>
  );
}
