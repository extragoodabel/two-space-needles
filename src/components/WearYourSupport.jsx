/**
 * WearYourSupport — full-bleed cerulean section with a marquee of
 * repeated "WEAR YOUR SUPPORT" text (referencing the original site)
 * and a clear note that merch profits do NOT fund construction.
 */
export default function WearYourSupport() {
  // Repeat the phrase enough times to fill a wide screen and loop seamlessly.
  const PHRASE = 'Wear Your Support';
  const STARS  = '★';
  const cells = Array.from({ length: 8 }, (_, i) => (
    <span key={i}>
      {PHRASE}
      <span className="merch__marquee-star" aria-hidden="true">&nbsp;{STARS}&nbsp;</span>
    </span>
  ));

  return (
    <section className="section merch" id="merch">
      <div className="merch__halftone" aria-hidden="true" />

      <div className="merch__marquee" aria-hidden="true">
        <div className="merch__marquee-track">{cells}</div>
        <div className="merch__marquee-track">{cells}</div>
      </div>

      <div className="container">
        <div className="merch__inner">
          <p className="merch__body">
            Our campaign apparel helps spread awareness for this important
            cause. Shirts, sweatshirts, hats — wear the proposal proudly.
            <span className="merch__note">
              Note · Merch profits do not go toward construction costs of
              the second Space Needle.
            </span>
          </p>

          <a
            className="merch__cta"
            href="https://www.bonfire.com/store/two-space-needles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop the Campaign
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
