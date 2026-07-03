import GoldNeedleSilhouette from '../assets/GoldNeedleSilhouette.jsx';

export default function Hero() {
  return (
    <section className="cover" id="top">
      <div className="cover__atmosphere" aria-hidden="true" />
      <div className="cover__halftone" aria-hidden="true" />

      <div className="cover__top-banner">
        <span className="cover__top-banner-stars">★ ★ ★</span>
        A Civic Proposal · Seattle, Washington · MCMLXII — MMXXIV
        <span className="cover__top-banner-stars">★ ★ ★</span>
      </div>

      <div className="container">
        <div className="cover__inner">
          <div className="cover__type">
            <p className="cover__supertitle">Join the Campaign for</p>

            <h1 className="cover__title">
              <span className="cover__title-line">Two</span>
              <span className="cover__title-line cover__title-line--accent">Space</span>
              <span className="cover__title-line">Needles.</span>
            </h1>

            <p className="cover__tagline">Timeless view, times two.</p>

            <p className="cover__sub">
              It&rsquo;s been 62 years since the &rsquo;62 Seattle World&rsquo;s Fair.
              Isn&rsquo;t it time we build a second Space Needle?
            </p>

            <div className="cover__meta">
              <div className="c2-seal" aria-hidden="true">
                Proposal
                <span className="c2-seal__big">02</span>
                Seattle WA
              </div>
              <p className="cover__meta-text">
                Advocating for a second monument, from which we may better
                admire the first monument.
              </p>
            </div>
          </div>

          <div className="cover__panel" aria-hidden="true">
            <div className="cover__panel-rays" />
            <div className="cover__panel-halftone" />
            <div className="cover__panel-needle">
              <GoldNeedleSilhouette />
            </div>
            <div className="cover__panel-caption">
              <span>Fig. 01</span>
              <span>Space Needle — Elevation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
