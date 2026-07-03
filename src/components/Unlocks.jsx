const ITEMS = [
  { num: '01', code: 'I',   title: 'Sightline',   body: 'The first Needle, finally visible from the first Needle.' },
  { num: '02', code: 'II',  title: 'Capacity',    body: 'Annual observation-deck capacity doubles without disturbing the original.' },
  { num: '03', code: 'III', title: 'Symmetry',    body: 'A skyline that resolves rather than gestures.' },
  { num: '04', code: 'IV',  title: 'Inheritance', body: 'The 1962 promise, kept twice.' },
];

export default function Unlocks() {
  return (
    <section className="section section--midnight" id="unlocks" data-bg="midnight">
      <div className="tex-halftone" style={{ color: '#F4D272' }} aria-hidden="true" />

      <div className="container">
        <div className="section__head unlocks-head">
          <p className="t-label">What It Unlocks · Exhibits I–IV</p>
          <h2 className="unlocks-head-title">
            Four arguments for the <em>second Needle.</em>
          </h2>
        </div>

        <div className="unlocks">
          {ITEMS.map((it) => (
            <div className="unlock" key={it.num}>
              <span className="unlock__num">{it.num}</span>
              <h3 className="unlock__title">{it.title}.</h3>
              <p className="unlock__body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
