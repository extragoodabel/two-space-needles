const PLATES = [
  { num: '01', code: 'I',   title: 'Elevation, Northwest', place: 'Queen Anne',    src: '/images/plate-01.jpg' },
  { num: '02', code: 'II',  title: 'Twin Profile, Dusk',    place: 'Belltown',      src: '/images/plate-02.jpg' },
  { num: '03', code: 'III', title: 'From the Market',       place: 'Pike Place',    src: '/images/plate-03.jpg' },
  { num: '04', code: 'IV',  title: 'Plan View',             place: 'Drawn 1:5000',  src: '/images/plate-04.jpg' },
  { num: '05', code: 'V',   title: 'Across the Sound',      place: 'West Seattle',  src: '/images/plate-05.jpg' },
  { num: '06', code: 'VI',  title: 'Monorail Approach',     place: 'Center Grounds',src: '/images/plate-06.jpg' },
];

export default function Plates() {
  return (
    <section className="section section--paper" id="plates" data-bg="paper">
      <div className="tex-paper" aria-hidden="true" />

      <div className="container">
        <div className="section__head plates__head">
          <p className="t-label">Plates I — V · Catalogue</p>
          <h2 className="plates__title">
            The proposal, <em>illustrated.</em>
          </h2>
          <p className="plates__lede t-lead">
            Six views, each one a small argument. Read in any order; the
            sequence is not the point — the symmetry is.
          </p>
        </div>

        <div className="plates">
          {PLATES.map((p) => (
            <article key={p.num} className="plate">
              <header className="plate__exhibit-label">
                <span className="plate__exhibit-num">{p.num}</span>
                <span className="plate__exhibit-title">Plate {p.code} · {p.title}</span>
              </header>

              <div className="plate__frame">
                <PlateImage src={p.src} alt={`Plate ${p.code} — ${p.title}`} />
              </div>

              <div className="plate__caption">
                <span>{p.title}</span>
                <span className="plate__caption-place">{p.place}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlateImage({ src, alt }) {
  const handleError = (e) => {
    const frame = e.currentTarget.parentElement;
    if (!frame) return;
    e.currentTarget.style.display = 'none';
    if (!frame.querySelector('.plate__placeholder')) {
      const ph = document.createElement('div');
      ph.className = 'plate__placeholder';
      ph.textContent = 'Plate forthcoming';
      frame.appendChild(ph);
    }
  };

  return (
    <img
      className="plate__img"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
}
