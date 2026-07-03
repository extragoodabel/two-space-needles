export default function Premise() {
  return (
    <section className="section oversight" id="premise">
      <div className="tex-paper" aria-hidden="true" />

      <div className="container">
        <div className="oversight__inner">
          <div className="oversight__head">
            <span className="oversight__label">
              <span className="oversight__label-num">01</span>
              <span className="oversight__label-text">The Oversight</span>
            </span>

            <h2 className="oversight__title">
              A glaring <em>design flaw</em> in the Seattle skyline.
            </h2>

            <div className="oversight__body">
              <p>
                The Space Needle is an iconic Seattle landmark, offering visitors
                and locals alike unparalleled views of the city skyline. However,
                there is one glaring design flaw: from the top of the Space Needle,
                you can&rsquo;t see Seattle&rsquo;s most iconic structure&mdash;the
                Space Needle itself.
              </p>
              <p>
                Imagine reaching the summit of the architectural marvel that is
                the Space Needle, eagerly anticipating breathtaking vistas of
                Seattle&rsquo;s skyline, only to find that the crown jewel is
                absent from your view. It&rsquo;s a disappointing realization for
                tourists seeking the quintessential Seattle experience, and for
                locals proud of their city&rsquo;s most recognizable symbol.
              </p>
            </div>
          </div>

          <aside className="oversight__aside">
            <blockquote className="oversight__quote">
              &ldquo;From the top of the Space Needle, you cannot see the
              Space Needle.&rdquo;
              <span className="oversight__quote-attrib">
                Fig. 02 · The oversight, stated plainly
              </span>
            </blockquote>
          </aside>
        </div>
      </div>
    </section>
  );
}
