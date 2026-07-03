/**
 * DonateLand — small classified-ad style callout for the
 * "donate real estate" angle from the original site.
 */
export default function DonateLand() {
  return (
    <section className="classified" id="donate-land">
      <div className="container">
        <div className="classified__box">
          <span className="classified__tag">Interested in Donating Real Estate?</span>

          <div className="classified__body">
            <strong>Do you wish to construct a Space Needle on your property?</strong>
            Don&rsquo;t hesitate to reach out. We are eager to hear from
            property owners across the greater Seattle area.
            <span className="classified__note">
              Note · Only properties within the greater Seattle area will
              be considered at this time.
            </span>
          </div>

          <a className="classified__cta" href="mailto:twospaceneedles@gmail.com">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
