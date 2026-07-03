const ITEMS = [
  {
    num: '01',
    title: 'Unparalleled views',
    body: 'See the Space Needle from the top of the Space Needle. The ultimate Seattle experience.',
  },
  {
    num: '02',
    title: 'Double the capacity',
    body: 'Twice the observation-deck capacity, without disturbing the original landmark.',
  },
  {
    num: '03',
    title: 'A skyline that resolves',
    body: 'A cityscape that finally celebrates its most recognizable symbol — in all its glory.',
  },
  {
    num: '04',
    title: 'A promise kept twice',
    body: 'Cementing Seattle’s status as an architectural and cultural gem, for another sixty-two years.',
  },
];

export default function Vision() {
  return (
    <section className="section vision" id="vision">
      <div className="vision__halftone" aria-hidden="true" />

      <div className="container">
        <div className="vision__inner">
          <div className="vision__head">
            <p className="t-label">03 · Our Vision</p>

            <h2 className="vision__title">
              The skyline, <em>completed.</em>
            </h2>

            <p className="vision__body">
              Seattle deserves a skyline that celebrates its most iconic
              landmark in all its glory. With two Space Needles gracing the
              cityscape, locals and visitors alike will enjoy unparalleled
              views, creating unforgettable memories and cementing
              Seattle&rsquo;s status as an architectural and cultural gem.
            </p>
          </div>

          <div className="vision__list">
            {ITEMS.map((it) => (
              <article className="vision__item" key={it.num}>
                <span className="vision__item-num">{it.num}</span>
                <div className="vision__item-body">
                  <h3 className="vision__item-title">{it.title}</h3>
                  <p className="vision__item-desc">{it.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
