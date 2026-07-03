export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__brand">
        <span className="header__brand-mark" aria-hidden="true" />
        Two Space Needles
      </a>

      <nav className="header__nav" aria-label="Primary">
        <a className="header__link" href="#premise">Oversight</a>
        <a className="header__link" href="#proposal">Proposal</a>
        <a className="header__link" href="#vision">Vision</a>
        <a className="header__link" href="#faq">FAQ</a>
        <a className="header__link" href="#merch">Shop</a>
        <a
          className="header__cta"
          href="https://chng.it/JXYHqQGvLn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign
        </a>
      </nav>
    </header>
  );
}
