export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-block">
            <div className="footer__title">Two Space Needles</div>
            <p className="footer__statement">
              The Movement to Build a Second Space Needle.
              Advocating for a second monument, from which we may better
              admire the first monument. Seattle, Washington.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Campaign</div>
            <div className="footer__list">
              <a href="#premise">The Oversight</a>
              <a href="#proposal">The Proposal</a>
              <a href="#vision">Our Vision</a>
              <a href="#faq">Frequently Raised</a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Take Action</div>
            <div className="footer__list">
              <a
                href="https://chng.it/JXYHqQGvLn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign the Petition
              </a>
              <a
                href="https://www.bonfire.com/store/two-space-needles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop the Campaign
              </a>
              <a
                href="https://www.instagram.com/twospaceneedles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram · @twospaceneedles
              </a>
              <a href="mailto:twospaceneedles@gmail.com">twospaceneedles@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <span>© MMXXVI &nbsp;·&nbsp; Two Space Needles &nbsp;·&nbsp; Seattle WA</span>
          <span>A Civic Proposal &nbsp;·&nbsp; Filed MMXXIV</span>
        </div>
      </div>
    </footer>
  );
}
