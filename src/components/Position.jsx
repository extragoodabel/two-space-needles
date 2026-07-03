const QA = [
  {
    q: 'Are you not concerned about tightrope walkers attempting to traverse the airspace between the two Space Needles?',
    a: 'Not only are we not concerned about tightrope walkers, we actively invite them. We believe it would be good for publicity, both for the cause and the city.',
  },
  {
    q: 'I have never been to the top of the Space Needle. Is it worth all the hype?',
    a: 'Yes, the top of the Space Needle is worth all the hype — but it could be worth even more hype if you could see the Space Needle from the top of the Space Needle. Potentially twice as much hype.',
  },
  {
    q: 'What if having two Space Needles brings too much tourism to Seattle?',
    a: 'We understand the concern that doubling our Space Needles may bring too much attention to Seattle, and threaten to over-tax our city’s infrastructure and traffic. In that event, we can build a third Space Needle further outside the city limits, from where we can lure tourists to comfortably view both Space Needles from a comfortable distance.',
  },
];

export default function Position() {
  return (
    <section className="section faq" id="faq">
      <div className="tex-paper" aria-hidden="true" />

      <div className="container">
        <div className="faq__head">
          <p className="t-label">04 · Frequently Raised</p>
          <h2 className="faq__title">
            On the <em>record.</em>
          </h2>
        </div>

        <div className="faq__col">
          {QA.map(({ q, a }) => (
            <div className="qa" key={q}>
              <span className="qa__marker">Q.</span>
              <p className="qa__q">{q}</p>
              <span className="qa__marker qa__marker--a">A.</span>
              <p className="qa__a">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
