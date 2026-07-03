export default function TakeAction() {
  return (
    <section className="petition" id="petition">
      <div className="petition__halftone" aria-hidden="true" />

      <p className="petition__supertitle">★ ★ &nbsp; Join the Movement &nbsp; ★ ★</p>

      <h2 className="petition__mega">Sign the Petition.</h2>

      <p className="petition__sub">
        It&rsquo;s time to make history and shape Seattle&rsquo;s future.
        Stand with us in advocating for this visionary project. Sign the
        petition, spread the word, and let&rsquo;s transform Seattle&rsquo;s
        skyline together.
      </p>

      <a
        className="petition__cta"
        href="https://chng.it/JXYHqQGvLn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign the Petition
        <span aria-hidden="true">→</span>
      </a>

      <p className="petition__secondary">
        <a
          href="https://www.instagram.com/twospaceneedles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spread the Word
        </a>
        <span className="petition__sep">·</span>
        <a
          href="https://www.bonfire.com/store/two-space-needles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wear Your Support
        </a>
      </p>
    </section>
  );
}
