import { Fragment, useRef, useState, useCallback, useEffect, useMemo } from 'react';
import {
  MOVING_LAYERS,
  BACKGROUND_LAYERS,
  PREVIEW,
  smoothstep,
} from './layers.js';
import { useParallaxInput } from '../../hooks/useParallaxInput.js';
import { INSERTS } from '../../data/inserts.js';
import CardReader from './CardReader.jsx';
import './parallax.css';

// Dev-only diagnostic readout. Auto-off in production builds.
const DEBUG = import.meta.env.DEV;

// Motion model:
//  'slide' — layers are flat 2D, locked horizontally, shifting up/down from
//            their A position to their B position (ACTIVE).
//  'dolly' — layers scale up from a locked bottom edge (paused experiment,
//            kept for later). Uses grow / panX / offsetY / origin.
const MODE = 'slide';

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const byId = (id) => INSERTS.find((i) => i.id === id);

// Self-driving "commit" runs (autoplay pacing; scrub users bypass these —
// runs only play via the chevron).
// ── ONE GLOBAL RATE ──────────────────────────────────────────────────────
// The crawl must NEVER speed up, slow down, or pause. Copy position is linear
// in progress, so progress must advance at ONE constant rate everywhere:
// every segment's duration is span × SECONDS_PER_PROGRESS via seg(). Do NOT
// hand-set a duration — that reintroduces visible copy-speed changes. All
// timing is landed with SPACING (CRAWL_LINES `at`) and layer keyframes only.
const SECONDS_PER_PROGRESS = 12.8; // was 20 → 15.4 (+30%) → 12.8 (+20% again, 2026-07)
const seg = (start, end, opts) => ({ start, end, duration: (end - start) * SECONDS_PER_PROGRESS, ...opts });
const COMMIT_RUNS = [
  [
    seg(0.024, 0.496), // needle rises + lights; c1 rides up and out
    seg(0.496, 0.95), // treelines rise through c2's transit + c3's emergence, settling as c3 climbs
  ],
  [
    seg(0.955, 1.3), // buildings continue front-first with c3
    seg(1.3, 1.78), // NO PARK: as c4 rides off, the needle slides out [1.47–1.74]
    // and TSN crests mid-slide (≈1.53) — needle and copy land together ≈1.74
  ],
  [
    seg(1.785, 2.4), // park on the completed split; then viewpoint rises, layers lock + illuminate
    seg(2.4, 2.95), // iconic + times two ride FULLY off; then the campaign lockup MATERIALIZES as the scroll completes — the end
  ],
];
const MAX_PROGRESS = 2.95;

// ── NARRATION CRAWL ────────────────────────────────────────────────────────
// ALL copy rides ONE column at CONSTANT speed (CRAWL_KF is a single linear
// span — the crawl NEVER slows or speeds up to meet the animation; beat
// alignment comes purely from the BUFFER SPACE between word blocks). The
// column rises from behind the treeline (z 300: behind every moving layer,
// in front of the sky plates), each block dissipates in the mask band near
// the frame top. The campaign lockup does NOT ride the crawl: it
// MATERIALIZES at its resting position (blur+scale glimmer-in, 2.82→2.92)
// as "times two" rides off, landing just as the scroll completes at
// MAX_PROGRESS. The site rests on it — no cycling, no swaps.
//   `at` = block offset down the column, in cqh (% of frame height).
//   Speed is 120 (%/progress), column-top 40 at p=0 → a block sits at screen
//   row R at progress p when `at = R − 40 + 120p`. Readable band ≈ rows 15–54.
//   RELAY SPACING (2026-07): each block enters (row ≈63) as the previous
//   exits the top, and the layer stages are timed to each block's transit —
//   see the STAGE MAP in layers.js.
const CRAWL_LINES = [
  { key: 'c1', lines: ['The Space Needle', 'offers unparalleled', 'views of the', 'Seattle Skyline', '...'], fit: true, at: 0 }, // rows 40–54 at p=0; exits ≈0.33 as c2 enters
  { key: 'c2', text: 'But with one glaring design flaw', dots: true, at: 62 },   // enters ≈0.33 (needle placed); transits with the TREELINES [0.35–0.78]
  { key: 'c3', text: 'From the top of the Space Needle, you can’t see the Space Needle itself.', at: 109 }, // emerges ≈0.72 (c2 high in the sky) behind the still-moving treeline; centre ≈1.02
  { key: 'c4', lines: ['That is why', 'we propose', '...'], at: 145 },      // enters ≈1.02, rides high while TSN crests below
  { key: 'c5', lines: ['TWO', 'SPACE', 'NEEDLES'], at: 207.4, tsn: true }, // shifted with the needle (Δ−0.08, sync preserved): crests ≈1.53 mid-slide, copy and needle arrive at the balanced point TOGETHER ≈1.74
  // ENDING (2026-07, v2 — no face switching):
  //   c6 "AN / ICONIC / VIEW / ..." rides the crawl like any statement.
  //   c7 "TIMES / TWO" sits beneath it but MATERIALIZES in place (fadeIn
  //      window) mid-sky, then both ride up and off together.
  //   The campaign lockup NO LONGER rides the crawl — it MATERIALIZES in
  //      place (see the parallax-lockup element) as "times two" scrolls off.
  // c6 + its FOLLOW GROUP read as one five-row statement (AN/ICONIC/VIEW/
  // TIMES/TWO) with EQUAL spacing between every row on any screen — "times
  // two" flows directly under "view" at the same line rhythm (it used to be
  // a separate block positioned in cqh, which collided on tall/narrow
  // phones). Three phases preserved: c6 assembled and ALONE 2.34→2.46 ·
  // "TIMES TWO" materializes in place 2.46→2.54 · the completed statement
  // holds through the illumination, then rides off together — fully gone
  // ≈2.8 — THEN the lockup materializes (2.82).
  { key: 'c6', lines: ['An', 'Iconic', 'View'], at: 280, iconic: true, follow: { lines: ['times', 'two'], fadeIn: [2.46, 2.54] } }, // enters ≈2.14, once TSN is riding off
];
// Column-top keyframes (% of frame height) — ONE linear span = constant
// crawl speed (120% of frame height per 1.0 progress). kfPos clamps at the
// ends, so the finale block freezes in place at MAX_PROGRESS.
const CRAWL_KF = [
  [0, 40],
  [2.95, -314],
];

// Progress values where the experience RESTS waiting for a scroll to start the
// next stage. The "Scroll" cue shows whenever the playhead is parked near one.
const HINT_POINTS = [0, 0.95, 1.78];

// Logo lockup (black-on-transparent) used as a gold MASK so it matches the
// mustard ink exactly. No-stars version — the sky already has the starfield.
const LOGO_SRC = `${import.meta.env.BASE_URL || '/'}logo/logo.webp`;

// ── DESKTOP BLEED v3: ONE small canvas (480×270, ~24fps), upscaled by
// CSS. Base + swaying baked-soft beams + twinkling star plates are drawn
// per frame — a single composited layer, no live filters, no full-screen
// animated elements. rAF stops automatically in background tabs.
function BleedCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(max-width: 700px) and (max-aspect-ratio: 3/5)').matches) return undefined; // true phones: bleed hidden
    const canvas = ref.current;
    if (!canvas) return undefined;
    const W = 480, H = 270;
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    const BASE = import.meta.env.BASE_URL || '/';
    const load = (name) => { const im = new Image(); im.src = `${BASE}parallax/${name}`; return im; };
    const base = load('bleed-base.webp');
    const beams = [];
    const stars = [];
    BACKGROUND_LAYERS.forEach((bg) => {
      if (bg.spot) beams.push({ img: load(`bleed-beam-${bg.n}.webp`), spot: bg.spot });
      if (bg.twinkle) bg.twinkle.forEach((part, i) => {
        stars.push({ img: load(`bleed-star-${bg.n}-${'abcdefgh'[i]}.webp`), period: part.period * 1.6, delay: part.delay });
      });
    });
    let raf = 0;
    let last = 0;
    const step = (ts) => {
      raf = requestAnimationFrame(step);
      if (ts - last < 41) return; // ~24fps is plenty for ambience
      last = ts;
      const t = ts / 1000;
      ctx.clearRect(0, 0, W, H);
      if (base.complete) ctx.drawImage(base, 0, 0, W, H);
      for (const st of stars) {
        if (!st.img.complete) continue;
        ctx.globalAlpha = 0.18 + 0.72 * (0.5 + 0.5 * Math.sin((Math.PI * (t - st.delay)) / st.period));
        ctx.drawImage(st.img, 0, 0, W, H);
      }
      ctx.globalAlpha = 1;
      for (const bm of beams) {
        if (!bm.img.complete) continue;
        const { pivot, amp, period, delay, stretch = 1.9 } = bm.spot;
        const px = pivot[0] * W;
        const py = pivot[1] * H + H * 0.14; // lamp drop, as in the frame
        const ang = ((amp * Math.PI) / 180) * Math.cos((Math.PI * (t - delay)) / period);
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(ang);
        ctx.scale(stretch, stretch);
        ctx.translate(-px, -py);
        ctx.drawImage(bm.img, 0, H * 0.14, W, H);
        ctx.restore();
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="parallax-bleed-canvas" aria-hidden="true" />;
}

// ── JIMOTHY (2026-07): the campaign's raccoon. Crosses the frame left to
// right at the 1-minute mark, then once every five minutes (6:00, 11:00, …).
// Non-interactive, reduced-motion aware. Art: public/jimothy/jimothy2.gif
function Jimothy() {
  const [walking, setWalking] = useState(false);
  useEffect(() => {
    // ABSOLUTE schedule (2026-07): crossings are anchored to the moment the
    // PAGE opened (performance.now() = ms since navigation), not to when
    // this component happened to mount — 1:00, then every 90s (2:30, 4:00,
    // …), identical on desktop and mobile, immune to remounts.
    const FIRST = 60 * 1000;
    const EVERY = 90 * 1000;
    // PRELOAD: the gif is ~880KB — fetch it at page open so the FIRST
    // crossing isn't invisible on slower (mobile) connections while the
    // browser races to download him mid-walk
    const preload = new Image();
    preload.src = `${import.meta.env.BASE_URL || '/'}jimothy/jimothy2.gif`;
    let walkT;
    let next = FIRST;
    while (performance.now() > next) next += EVERY; // if we woke late, skip what was missed
    const cross = () => {
      setWalking(true);
      clearTimeout(walkT);
      walkT = setTimeout(() => setWalking(false), 3200); // 3s crossing + teardown
    };
    const tick = setInterval(() => {
      if (performance.now() >= next) {
        next += EVERY;
        cross();
      }
    }, 500);
    return () => { clearInterval(tick); clearTimeout(walkT); };
  }, []);
  if (!walking) return null;
  return (
    <div className="jimothy" aria-hidden="true">
      <span className="jimothy-shadow" />
      <img
        className="jimothy-img"
        src={`${import.meta.env.BASE_URL || '/'}jimothy/jimothy2.gif`}
        alt=""
        draggable="false"
      />
    </div>
  );
}

// ── BASEJUMPERS (2026-07): full-frame overlay gif — two jumpers leap from
// the back needle and parachute off. Registered to the RESTING composition,
// so it only plays when the scene is assembled and unshifted (no menu
// compression, no card). One ~2.5s pass per showing; the query param forces
// the gif to restart from frame one each time.
// SCHEDULE: first jump 8s after the home screen locks in (menu button
// arrived), then every minute — and ONLY while on the home screen (ticks
// during menus/cards/game are skipped). Re-anchors if the splash replays.
function Basejumpers({ ready, active }) {
  const [showing, setShowing] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;
  useEffect(() => {
    if (!ready) return undefined;
    let hideT;
    let interval;
    const jump = () => {
      if (!activeRef.current) return; // not on the home screen — skip
      setShowing(Date.now());
      clearTimeout(hideT);
      hideT = setTimeout(() => setShowing(0), 2600);
    };
    const first = setTimeout(() => {
      jump();
      interval = setInterval(jump, 60 * 1000);
    }, 8 * 1000);
    return () => { clearTimeout(first); clearInterval(interval); clearTimeout(hideT); };
  }, [ready]);
  if (!showing) return null;
  return (
    <img
      className="basejumpers"
      src={`${import.meta.env.BASE_URL || '/'}basejumpers.gif?${showing}`}
      alt=""
      aria-hidden="true"
      draggable="false"
    />
  );
}

// Layers that should NOT sparkle (organic / ground — plaza + the three treelines)
const GLIMMER_EXCLUDE = new Set(['1', '5', '9', '11']);
// Layers that are STATIC in the deck (like the background): they occlude the
// cursor but never lift or compress — only the ground plane now. The
// plaza/people layer ('1') joined the elastic deck (2026-07): it drags,
// stretches and bounces like every other layer.
const DECK_STATIC = new Set(['ground']);

// Menu layers → their full-card art + the % the card is pushed DOWN at the start
// so its (top-of-card) illustration lines up with that layer in the scene. From
// there the card glides up to 0 (illustration at top, content field fills below).
const CARD_BASE = `${import.meta.env.BASE_URL || '/'}parallax/`;
// Each card carries its full-card art, the % it starts pushed down (aligned to
// its landmark), where the content field begins below the illustration, and the
// insert(s) whose copy lives on it.
const CARD_MAP = {
  // FIVE PAGES (restructured 2026-07): About (blind spot + proposal + vision,
  // merged from the petition) · FAQ · Merch · Game · Get Involved.
  // Entry ORDER = the expanded menu's link order. startY stays with its
  // landmark (tuned live — do not touch). contentTop values (2026-07) are
  // MEASURED from each card's art: the illustration's bottom edge + ~3%,
  // so copy always sits just below the top image.
  '2ii': { src: `${CARD_BASE}A2A4A5_fullcard.webp`,   startY: 63.6, contentTop: 22, menuSolid: true, credits: true, section: 'About',        inserts: ['about-lead', 'about-blindspot', 'about-proposal', 'about-vision'] }, // science pavilion
  '7':   { src: `${CARD_BASE}A7A11_fullcard.webp`,    startY: 43.3, restPx: 50, contentTop: 19, ctaRight: true, section: 'FAQ',          inserts: ['faq'], headRight: true },  // balloons — eyebrow+heading right-justified to balance the upper-left illustration
  '8':   { src: `${CARD_BASE}A8A9_fullcard.webp`,     startY: 42.7, restPx: 90, contentTop: 11, section: 'Merch',        inserts: ['merch'], ctaRight: true },                 // golden arches
  '3':   { src: `${CARD_BASE}A3A5_fullcard.webp`,     startY: 68.5, restPx: 70, contentTop: 17.5, section: 'Civic Expansion Simulator', inserts: ['game'] },   // monorail
  '10':  { src: `${CARD_BASE}A9A10A11_fullcard.webp`, startY: 44.1, restPx: 60, contentTop: 24, ctaRight: true, section: 'Get Involved', inserts: ['getinvolved-lead', 'movement', 'donate-land', 'subscribe'] }, // arena
};

// Expanded-menu links, top to bottom (user-specified order).
const MENU_LINKS = [
  { label: 'About', layer: '2ii' },
  { label: 'Simulator', layer: '3' },
  { label: 'Get Involved', layer: '10' },
  { label: 'Merch', layer: '8' },
  { label: 'FAQ', layer: '7' },
];

// URL state: every page (card) has a hash slug, and the running game overlay
// is #play — refreshing any of these boots straight back into that page over
// the finished scene instead of restarting the splash.
const CARD_SLUGS = { '2ii': 'about', '7': 'faq', '8': 'merch', '3': 'game', '10': 'get-involved' };
const SLUG_TO_LAYER = Object.fromEntries(Object.entries(CARD_SLUGS).map(([k, v]) => [v, k]));

/** Renders one insert's copy on a card body (title, tagline, body, list, faq, cta). */
// CLICK MECHANIC for card CTAs: hold the pressed pose (down + red) for a
// beat so the press reads, THEN fire the action.
function pressFire(e, fn) {
  const el = e.currentTarget;
  el.classList.add('is-pressed');
  setTimeout(() => { el.classList.remove('is-pressed'); fn(); }, 200);
}

// minimal inline emphasis for insert copy: *text* → <em>text</em>
const renderEm = (t) =>
  t.split(/\*([^*]+)\*/g).map((seg, i) => (i % 2 ? <em key={i}>{seg}</em> : seg));

// native Kit subscribe: posts to the campaign's Kit form (9687388) with the
// site's own field + push-button — no Kit script, no Kit styling
const KIT_FORM_ACTION = 'https://app.kit.com/forms/9687388/subscriptions';
function KitSubscribe() {
  const [state, setState] = useState('idle'); // idle | busy | done | error
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setState('busy');
    fetch(KIT_FORM_ACTION, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then((r) => r.json())
      .then((j) => setState(j && (j.status === 'success' || j.status === 'quarantined') ? 'done' : 'error'))
      .catch(() => setState('error'));
  };
  if (state === 'done') {
    return <p className="card-section-body kit-success">Success! Now check your email to confirm your subscription.</p>;
  }
  return (
    <form className="kit-subscribe" onSubmit={onSubmit}>
      <input
        className="kit-input"
        type="email"
        name="email_address"
        placeholder="Email address"
        aria-label="Email address"
        required
      />
      <button type="submit" className="card-section-cta kit-submit" disabled={state === 'busy'}>
        {state === 'busy' ? 'One sec…' : 'Subscribe'}
      </button>
      {state === 'error' && <p className="kit-error">That didn’t go through. Try again?</p>}
    </form>
  );
}

// credits at the foot of the About card — always visible, right-justified:
// logo, two mandated lines, legal copy beneath
function CardCredits() {
  return (
    <div className="card-credits">
      <div className="card-credits-body">
        <a href="https://www.extragood.studio/" target="_blank" rel="noreferrer" aria-label="Extra Good Studio">
          <img className="card-credits-logo" src="/logo/eg-logo-mustard.png" alt="Extra Good!" draggable="false" />
        </a>
        <p>
          <span className="card-credits-line">The Campaign for Two Space Needles</span>
          <span className="card-credits-line">
            is an <a href="https://www.extragood.studio/" target="_blank" rel="noreferrer">{'Extra\u00A0Good\u00A0Studio'}</a> production.
          </span>
        </p>
        <p>
          Two Space Needles is in no way related to the original Space Needle, the Space Needle
          Corporation, or the Wright family.
        </p>
      </div>
    </div>
  );
}

function CardSection({ insert, onPlayGame }) {
  if (!insert) return null;
  return (
    <section className={`card-section${insert.lead ? ' is-lead' : ''}`} data-accent={insert.accent}>
      <h3 className="card-section-title">
        {insert.titleLines ? insert.titleLines.map((l, i) => <span key={i} className="card-section-titleline">{l}</span>) : insert.title}
      </h3>
      {insert.tagline && <p className="card-section-tagline">{insert.tagline}</p>}
      <div className="card-section-rule" aria-hidden="true" />
      {insert.body && insert.body.map((p, i) => <p key={i} className="card-section-body">{renderEm(p)}</p>)}
      {insert.list && (
        <ol className="card-section-list">
          {insert.list.map((it, i) => (
            <li key={i}><span className="card-section-listnum">{it.num}</span><span><strong>{it.title}.</strong> {it.desc}</span></li>
          ))}
        </ol>
      )}
      {insert.faq && (
        <dl className="card-section-faq">
          {insert.faq.map((qa, i) => (
            <div key={i} className="card-section-qa"><dt>{qa.q}</dt><dd>{qa.a}</dd></div>
          ))}
        </dl>
      )}
      {insert.cta && !insert.cta.game && (
        <a
          className="card-section-cta"
          href={insert.cta.href}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            e.preventDefault();
            const href = insert.cta.href;
            pressFire(e, () => {
              if (href.startsWith('mailto:')) window.location.href = href;
              else window.open(href, '_blank', 'noopener');
            });
          }}
        >{insert.cta.label}</a>
      )}
      {insert.image && <img className="card-section-image card-section-image--below" src={insert.image.src} alt={insert.image.alt || ''} draggable="false" />}
      {insert.kit && <KitSubscribe />}
      {insert.socials && insert.socials.map((soc) => (
        <Fragment key={soc.href}>
          {soc.text && <p className="card-section-body card-section-followline">{soc.text}</p>}
          <a
            className="card-section-cta"
            href={soc.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              e.preventDefault();
              pressFire(e, () => window.open(soc.href, '_blank', 'noopener'));
            }}
          >{soc.label}</a>
        </Fragment>
      ))}
      {insert.secondary && <p className="card-section-secondary">{insert.secondary}</p>}
    </section>
  );
}

/**
 * Sparkle overlay. A canvas over the frame spawns short-lived warm glints at
 * random points where the TOPMOST opaque layer is a sparkle-eligible one, so it
 * reads as light catching the illustrated objects. Reuses the hover alpha maps.
 */
function GlimmerLayer({ frameRef, alphaMaps, transforms, intensity }) {
  const canvasRef = useRef(null);
  const intensityRef = useRef(intensity);
  intensityRef.current = intensity;

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let raf = 0, last = 0, spawnAcc = 0;
    let sparkles = [];

    const resize = () => {
      const r = frame.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(r.width * dpr));
      canvas.height = Math.max(1, Math.round(r.height * dpr));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(frame);

    // true only if the topmost opaque layer at (nx,ny) is sparkle-eligible
    const eligibleAt = (nx, ny) => {
      for (const t of transforms) { // front → back
        const m = alphaMaps.current[t.id];
        if (!m) continue;
        const ix = t.ox + (nx - t.tx - t.ox) / t.sc;
        const iy = t.oy + (ny - t.ty - t.oy) / t.sc;
        if (ix < 0 || ix >= 1 || iy < 0 || iy >= 1) continue;
        const a = m.data[Math.min(m.h - 1, (iy * m.h) | 0) * m.w + Math.min(m.w - 1, (ix * m.w) | 0)];
        if (a > 60) return !t.excl; // topmost opaque found → sparkle only if eligible
      }
      return false;
    };

    const tick = (now) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
      last = now;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const I = intensityRef.current;
      if (I > 0.01) {
        spawnAcc += dt * 16 * I; // ~16 glints/sec at full intensity
        let tries = 0;
        while (spawnAcc >= 1 && sparkles.length < 46 && tries < 40) {
          spawnAcc -= 1; tries++;
          const nx = Math.random(), ny = Math.random();
          if (eligibleAt(nx, ny)) {
            sparkles.push({ x: nx * W, y: ny * H, age: 0, life: 0.7 + Math.random() * 1.1, size: (0.9 + Math.random() * 2) * dpr });
          }
        }
      }
      ctx.globalCompositeOperation = 'lighter';
      sparkles = sparkles.filter((s) => (s.age += dt) < s.life);
      for (const s of sparkles) {
        const a = Math.sin(Math.PI * (s.age / s.life)) * I;
        if (a <= 0.01) continue;
        const r = s.size * 3;
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r);
        g.addColorStop(0, `rgba(255,244,212,${a})`);
        g.addColorStop(1, 'rgba(255,244,212,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(s.x, s.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = `rgba(255,250,236,${a * 0.85})`;
        ctx.lineWidth = Math.max(1, dpr * 0.5);
        ctx.beginPath();
        ctx.moveTo(s.x - r, s.y); ctx.lineTo(s.x + r, s.y);
        ctx.moveTo(s.x, s.y - r); ctx.lineTo(s.x, s.y + r);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [frameRef, alphaMaps, transforms]);

  return <canvas ref={canvasRef} className="parallax-glimmers" aria-hidden="true" />;
}

const lerp = (a, b, t) => a + (b - a) * t;
// Multi-keyframe position: kf is an array of [progress, yOffset%] points,
// eased (smoothstep) between successive points and clamped at the ends.
// Lets a layer hold, then rise, then hold again — so motions overlap into one
// cohesive parallax rather than each layer doing a single isolated move.
const kfPos = (kf, progress, linear) => {
  if (!kf || !kf.length) return 0;
  if (progress <= kf[0][0]) return kf[0][1];
  const last = kf[kf.length - 1];
  if (progress >= last[0]) return last[1];
  for (let i = 0; i < kf.length - 1; i++) {
    const [p0, y0] = kf[i];
    const [p1, y1] = kf[i + 1];
    if (progress <= p1) {
      const r = (progress - p0) / (p1 - p0);
      return lerp(y0, y1, linear ? r : smoothstep(r)); // linear = constant pace
    }
  }
  return last[1];
};

// Split a headline into per-letter spans that "coagulate" into place: each
// letter blurs + scales in on a stagger and settles, as though the spotlights
// are catching the words and pulling them together. Flat mustard ink — the only
// treatment is the motion.
// `step` = per-letter stagger; long narration sentences pass a smaller step so
// a whole line finishes coagulating in ~1.8s regardless of length.
// Letters are grouped into unbreakable WORD spans (.ico-word) so multi-line
// copy only ever wraps at spaces — never mid-word.
const splitLetters = (text, prefix, step = 0.045) => {
  let li = 0; // running letter index — continuous stagger across the line
  return text.split(' ').flatMap((word, w) => [
    <span key={`${prefix}w${w}`} className="ico-word">
      {Array.from(word).map((ch, j) => (
        <span
          key={`${prefix}${w}-${j}`}
          className="ico-letter"
          style={{ animationDelay: `${(li++ * step).toFixed(3)}s` }}
        >
          {ch}
        </span>
      ))}
    </span>,
    ' ', // real space between words = the only wrap opportunity
  ]);
};


/**
 * Scrollytelling chapters. As progress passes each chapter's `at`, its layer
 * lifts out of the assembled scene and a printed tab fades in; the tab parks
 * in place (building an indexed deck). Clicking a tab expands that layer's
 * landmark into a full-length card (CardReader) with the original copy.
 * POC: three chapters wired; extend this array to all seven.
 */
const CHAPTERS = [
  { insertId: 'oversight', layerId: '2ii', art: 'A2A4A5_fullcard.webp', at: 0.12, tab: [50, 30] },
  { insertId: 'proposal', layerId: '6', art: 'A_fullcard.webp', at: 0.34, tab: [50, 42] },
  { insertId: 'vision', layerId: '3', art: 'A3A5_fullcard.webp', at: 0.56, tab: [50, 54] },
];
const CHAPTER_BY_LAYER = Object.fromEntries(CHAPTERS.map((c) => [c.layerId, c]));

/**
 * The illustrated Century 21 fairgrounds. The scene is a PINNED full-viewport
 * stage that owns its own scroll: wheel/trackpad/touch input is intercepted and
 * converted to a normalized 0→1 progress (see useParallaxInput). The document
 * never scrolls, so there is no overscroll, bounce, or snap-back at either end.
 *
 * progress 0 assembles Position A (high overlook); as progress rises each layer
 * scales up from a locked bottom edge (dolly-through), near layers fastest, so
 * the viewer moves forward into the fairgrounds.
 *
 * Background plates (13–18) stay fixed as the far distance.
 */
export default function ParallaxScene({ motionGain = 1 }) {
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  // active full card (chapter object) + the screen point it expanded from
  const [activeCard, setActiveCard] = useState(null);
  const [originRect, setOriginRect] = useState(null);

  // ── DECK MENU (post-intro): once the scene has fully assembled, it becomes an
  // interactive deck — hover (desktop) or tap/drag (mobile) a layer to ease it
  // up out of the stack while the others compress slightly.
  const [deckReadyState, setDeckReadyState] = useState(false);
  const [hovered, setHovered] = useState(null); // layer id under the cursor (desktop hover)
  const [active, setActive] = useState(null); // layer id pulled up (click / tap / drag)
  const [openLayer, setOpenLayer] = useState(null); // menu layer whose card is open
  const [cardRaised, setCardRaised] = useState(false); // card glides up when true
  const [cardClosing, setCardClosing] = useState(false); // card fades out as it rolls back down
  const [rippling, setRippling] = useState(false); // idle attract wave across the layers
  // ELASTIC DECK (2026-07): the deck is "stitched" — dragging a layer pulls
  // the whole stack with falloff; release springs it back with a bounce.
  const [pull, setPull] = useState(null); // { id, delta } — live displacement (% frame height)
  const pullRef = useRef(null);
  const dragRef = useRef(null); // { id, startY, moved } during a press
  const springRaf = useRef(0);
  // MENU button: once everything is in place (deck ready), let the scene
  // breathe for a moment, then materialize it beneath the logo. Resets on
  // scroll-back.
  const [menuOn, setMenuOn] = useState(false);
  // MENU state: button + lockup dissolve, the world compresses back down to
  // its clustered-low intro composition, and the menu expands in the freed
  // sky as the five page links. Closes via empty-sky tap.
  const [menuOpen, setMenuOpen] = useState(false);
  const [flashLink, setFlashLink] = useState(null); // brief invert-flash before a link opens its page
  const [cardMenuOpen, setCardMenuOpen] = useState(false); // the card-foot MENU (page links)
  const [cardSwitching, setCardSwitching] = useState(false); // card→card: scene stays parked
  const [outgoingCard, setOutgoingCard] = useState(null); // { id, dropped } — the old card sliding off
  // PLACE NEEDLES: the game is mounted same-origin at /game/ (public/game).
  // It opens as a fullscreen overlay iframe — instant (same origin), and
  // closing returns to the site exactly where the user left it.
  // The overlay is reflected in the URL as #play: a refresh on that URL
  // reloads the GAME (overlay reopens immediately over a fresh iframe)
  // instead of booting the user back to the splash; back/forward work too.
  const [gameOpen, setGameOpen] = useState(() => typeof window !== 'undefined' && window.location.hash === '#play');
  // PUSH CHOREOGRAPHY (one coupled motion, beats per direction):
  //   0) the card holds its place · 1) the game slides in from stage-right ·
  //   2) its left edge CONTACTS the card's right edge (the frame edge) ·
  //   3) from contact on, game and card move in rigid sync — the game
  //      pushes the card · 4) the card exits fully as the game locks
  //      full-frame. Closing runs the same motion in reverse.
  // A single eased scalar (gamePush 0→1) drives BOTH transforms per frame —
  // CSS transitions can't couple two elements around a geometry-dependent
  // contact point, so this is rAF-driven.
  const [gamePush, setGamePush] = useState(() => (typeof window !== 'undefined' && window.location.hash === '#play' ? 1 : 0));
  const pushGeom = useRef({ W: 0, F: 0 }); // viewport width, frame width (measured at animation start)
  const pushRaf = useRef(0);
  const gameOpenRef = useRef(false);
  gameOpenRef.current = gameOpen;
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const animatePush = useCallback((from, to, ms, done) => {
    cancelAnimationFrame(pushRaf.current);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / ms);
      setGamePush(from + (to - from) * easeInOutCubic(t));
      if (t < 1) pushRaf.current = requestAnimationFrame(tick);
      else if (done) done();
    };
    pushRaf.current = requestAnimationFrame(tick);
  }, []);
  useEffect(() => () => cancelAnimationFrame(pushRaf.current), []);
  const rawOpenGame = useCallback(() => {
    if (gameOpenRef.current) return;
    setGameOpen(true);
    requestAnimationFrame(() => {
      pushGeom.current = {
        W: window.innerWidth,
        F: frameRef.current ? frameRef.current.getBoundingClientRect().width : window.innerWidth,
      };
      animatePush(0, 1, 950);
    });
  }, [animatePush]);
  const rawCloseGame = useCallback(() => {
    if (!gameOpenRef.current) return;
    animatePush(1, 0, 950, () => setGameOpen(false));
  }, [animatePush]);
  const openGame = useCallback(() => {
    rawOpenGame();
    if (window.location.hash !== '#play') window.history.pushState(null, '', '#play');
  }, [rawOpenGame]);
  const closeGame = useCallback(() => {
    rawCloseGame();
    // X = HOME (2026-07): drop the underlying game card instantly — it's
    // hidden behind the overlay — so the push-back reveals the resting
    // homescreen (lockup + MENU), not the card. Menu chrome resets closed.
    setOpenLayer(null); setCardRaised(false); setCardClosing(false);
    setMenuOpen(false);
    if (window.location.hash) window.history.pushState(null, '', window.location.pathname + window.location.search);
  }, [rawCloseGame]);
  const deckReady = deckReadyState && activeCard === null;
  const zById = useMemo(() => Object.fromEntries(MOVING_LAYERS.map((l) => [l.id, l.z])), []);
  // stack order for the elastic pull (front → back, decor excluded — the
  // elevators follow their needle via deckParent)
  const elasticIndex = useMemo(() => {
    const ids = MOVING_LAYERS.filter((l) => !l.decor).map((l) => l.id);
    return Object.fromEntries(ids.map((id, i) => [id, i]));
  }, []);

  // The parallax owns scroll, EXCEPT while a card is open OR the deck is live
  // (then the deck owns pointer input).
  const [progress, parallax] = useParallaxInput(stageRef, {
    hasContentAbove: false,
    hasContentBelow: false,
    enabled: activeCard === null && !deckReady,
    // SCRUB MODE: scroll drives progress directly, both directions — the user
    // reads/plays at their own pace. The chevron (playAll) autoplays the whole
    // sequence at the designed pace, holding chainPause ms at each stage
    // boundary so parked copy beats get read.
    scrub: true,
    chainPause: 0, // NO pause between chained runs — the crawl must never halt mid-air
    wheelSpan: 2200, // px of wheel per 1.0 progress — full scrub ≈ 4000px of scroll
    touchSpan: 900,
    commit: COMMIT_RUNS,
    maxProgress: MAX_PROGRESS,
    debug: DEBUG,
  });
  // flip the deck on only when the playhead settles at the final composition
  useEffect(() => {
    const ready = progress >= MAX_PROGRESS - 0.01;
    setDeckReadyState((prev) => (prev === ready ? prev : ready));
  }, [progress]);
  const deckOn = deckReady;
  const fade = smoothstep(progress);
  // "Scroll" cue: visible whenever the playhead is parked at a stage trigger
  const hintOpacity = activeCard
    ? 0
    : HINT_POINTS.reduce((m, p) => Math.max(m, 1 - Math.min(1, Math.abs(progress - p) / 0.03)), 0);

  const openCard = useCallback((chapter, evt) => {
    if (evt && evt.currentTarget) {
      const r = evt.currentTarget.getBoundingClientRect();
      setOriginRect({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }
    setActiveCard(chapter);
  }, []);
  const closeCard = useCallback(() => setActiveCard(null), []);

  // track which assets exist so missing files never show a broken icon
  const [missing, setMissing] = useState(() => new Set());
  const [loadedMoving, setLoadedMoving] = useState(0);

  const markMissing = useCallback((key) => {
    setMissing((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  }, []);

  const onMovingLoad = useCallback(() => setLoadedMoving((n) => n + 1), []);
  const usePreview = loadedMoving === 0;

  // final (resting) transform of each layer, for sparkle placement (sorted
  // front → back by z so the topmost-opaque test is accurate)
  const finalTransforms = useMemo(() => [...MOVING_LAYERS]
    .sort((a, b) => b.z - a.z)
    .map((l) => ({
      id: l.id,
      tx: kfPos(l.kfX, MAX_PROGRESS, l.linear) / 100,
      ty: (kfPos(l.kf, MAX_PROGRESS, l.linear) + (l.offsetY || 0) * 100) / 100,
      sc: l.scale || 1,
      ox: l.origin ? l.origin[0] : 0.5,
      oy: l.origin ? l.origin[1] : 1.0,
      excl: GLIMMER_EXCLUDE.has(l.id) || !!l.decor,
    })), []);
  // glints ramp in as the scene finishes illuminating, then persist
  const glimmerIntensity = activeCard || (openLayer && cardRaised) ? 0 : clamp01((progress - 2.3) / 0.1);
  // copy + logo fade out as a card raises, and fade back in as it closes (kept
  // mounted so they blend rather than pop). Transitions only at the deck.
  const chromeOpacity = (openLayer && cardRaised) || cardSwitching ? 0 : 1;
  const chromeTransition = deckOn ? 'opacity 0.55s ease' : undefined;

  // ── Alpha maps for pixel-accurate hover ────────────────────────────────
  // Each moving layer is a full-frame transparent image; to know which landmark
  // the cursor is really over we sample each layer's alpha (downscaled grid).
  const alphaMaps = useRef({});
  useEffect(() => {
    let cancelled = false;
    const SW = 180, SH = 320; // 9:16 sampling grid
    MOVING_LAYERS.forEach((layer) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = layer.src;
      img.onload = () => {
        if (cancelled) return;
        try {
          const c = document.createElement('canvas');
          c.width = SW; c.height = SH;
          const ctx = c.getContext('2d', { willReadFrequently: true });
          ctx.drawImage(img, 0, 0, SW, SH);
          const px = ctx.getImageData(0, 0, SW, SH).data;
          const a = new Uint8Array(SW * SH);
          for (let i = 0; i < a.length; i++) a[i] = px[i * 4 + 3];
          alphaMaps.current[layer.id] = { w: SW, h: SH, data: a };
        } catch { /* tainted/oversized — skip; layer just won't be hoverable */ }
      };
    });
    return () => { cancelled = true; };
  }, []);

  // Topmost layer with an opaque pixel under (clientX, clientY), or null.
  const deckHitTest = useCallback((clientX, clientY) => {
    const el = frameRef.current;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const nx = (clientX - r.left) / r.width;
    const ny = (clientY - r.top) / r.height;
    if (nx < 0 || nx > 1 || ny < 0 || ny > 1) return null;
    for (const layer of MOVING_LAYERS) { // array is front → back
      if (layer.decor) continue; // elevators ride a needle; not independently hoverable
      const m = alphaMaps.current[layer.id];
      if (!m) continue;
      const tx = kfPos(layer.kfX, MAX_PROGRESS, layer.linear) / 100;
      const ty = (kfPos(layer.kf, MAX_PROGRESS, layer.linear) + (layer.offsetY || 0) * 100) / 100;
      const sc = layer.scale || 1;
      const ox = layer.origin ? layer.origin[0] : 0.5;
      const oy = layer.origin ? layer.origin[1] : 1.0;
      // invert: screen = origin + sc*(img - origin) + translate
      const ix = ox + (nx - tx - ox) / sc;
      const iy = oy + (ny - ty - oy) / sc;
      if (ix < 0 || ix >= 1 || iy < 0 || iy >= 1) continue;
      const a = m.data[(Math.min(m.h - 1, (iy * m.h) | 0)) * m.w + Math.min(m.w - 1, (ix * m.w) | 0)];
      // topmost opaque layer: a static layer (ground) blocks but isn't selectable
      if (a > 40) return DECK_STATIC.has(layer.id) ? null : layer.id;
    }
    return null;
  }, []);


  // clear deck selection when we leave the deck state
  useEffect(() => { if (!deckOn) { setHovered(null); setActive(null); } }, [deckOn]);

  // a beat after the lockup lands, the MENU button appears
  useEffect(() => {
    if (!deckReadyState) { setMenuOn(false); setMenuOpen(false); return; }
    const t = setTimeout(() => setMenuOn(true), 450);
    return () => clearTimeout(t);
  }, [deckReadyState]);

  // Idle ATTRACT ripple — once the scene is assembled, a wave rolls across the
  // layers (first at 5s, then every 15s) to hint that they're interactive. It's
  // skipped whenever the user is engaging the deck.
  const interactingRef = useRef(false);
  interactingRef.current = !!(hovered || active || openLayer || menuOpen || pull);
  pullRef.current = pull;
  useEffect(() => {
    if (!deckOn) return;
    let interval;
    let clearRipple;
    const fire = () => {
      if (interactingRef.current) return;
      setRippling(true);
      clearTimeout(clearRipple);
      clearRipple = setTimeout(() => setRippling(false), 1500); // full wave duration
    };
    const first = setTimeout(() => { fire(); interval = setInterval(fire, 15000); }, 5000);
    return () => { clearTimeout(first); clearInterval(interval); clearTimeout(clearRipple); setRippling(false); };
  }, [deckOn]);

  // open a menu layer's card: mount it aligned to the landmark, then (next
  // frame) raise it so it glides up to fill the screen.
  const rawOpenCard = useCallback((id) => {
    setHovered(null); setActive(null); setCardClosing(false);
    setOpenLayer(id); setCardRaised(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setCardRaised(true)));
  }, []);
  const openCardFor = useCallback((id) => {
    rawOpenCard(id);
    const slug = CARD_SLUGS[id];
    if (slug && window.location.hash !== `#${slug}`) window.history.pushState(null, '', `#${slug}`);
  }, [rawOpenCard]);
  const rawCloseCard = useCallback(() => {
    setCardRaised(false);
    setCardClosing(true); // fade the card out as it rolls down, so it vanishes as the layer returns
    // wait out the staggered ripple (max delay ~0.46s + 0.8s transition) before
    // tearing down, so card-mode isn't removed mid-wave
    setTimeout(() => { setOpenLayer(null); setCardClosing(false); }, 1350);
  }, []);
  // card→card navigation (dropdown): BOTH cards are on screen for the whole
  // transition — the old card SLIDES fully off the bottom (no fade, no early
  // unmount) while the new card rises beneath it, so the background is never
  // exposed. cardSwitching keeps the scene parked in card mode throughout.
  const switchCardTo = useCallback((id) => {
    const from = openLayerRef.current;
    setCardSwitching(true);
    setOutgoingCard({ id: from, dropped: false });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setOutgoingCard((o) => (o ? { ...o, dropped: true } : o));
    }));
    rawOpenCard(id); // the new card mounts at its landmark and rises NOW
    const slug = CARD_SLUGS[id];
    if (slug && window.location.hash !== `#${slug}`) window.history.pushState(null, '', `#${slug}`);
    setTimeout(() => { setOutgoingCard(null); setCardSwitching(false); }, 1500);
  }, [rawOpenCard]);

  // the card-foot menu never carries over between pages
  useEffect(() => { setCardMenuOpen(false); }, [openLayer]);

  const closeMenuCard = useCallback(() => {
    rawCloseCard();
    if (SLUG_TO_LAYER[window.location.hash.slice(1)]) window.history.pushState(null, '', window.location.pathname + window.location.search);
  }, [rawCloseCard]);

  // back/forward sync for the overlay AND the pages
  const openLayerRef = useRef(null);
  openLayerRef.current = openLayer;
  useEffect(() => {
    const onPop = () => {
      const h = window.location.hash;
      if (h === '#play') rawOpenGame(); else rawCloseGame();
      const layer = SLUG_TO_LAYER[h.slice(1)];
      if (layer && openLayerRef.current !== layer) rawOpenCard(layer);
      else if (!layer && openLayerRef.current) rawCloseCard();
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [rawOpenCard, rawCloseCard, rawOpenGame, rawCloseGame]);

  // booted straight into a page or the game (#about/#faq/…/#play refresh or
  // deep-link)? Fast-forward the scene to the deck and open that page, so a
  // refresh refreshes the PAGE — never the whole splash.
  useEffect(() => {
    const h = window.location.hash;
    const layer = SLUG_TO_LAYER[h.slice(1)];
    if (h === '#play' || layer) parallax.goTo(MAX_PROGRESS);
    // (#play refresh lands directly in the game — gamePush initialises to 1)
    if (layer) rawOpenCard(layer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // release: every displaced layer springs home with a light underdamped
  // bounce — one strong return, a small overshoot, settle (~0.7s)
  const startSpring = useCallback((from) => {
    cancelAnimationFrame(springRaf.current);
    const t0 = performance.now();
    const step = () => {
      const t = (performance.now() - t0) / 1000;
      const sv = Math.exp(-5 * t) * Math.cos(2 * Math.PI * 2.2 * t);
      if (t > 0.75 || Math.abs(sv) < 0.004) { setPull(null); return; }
      setPull({ id: from.id, delta: from.delta * sv, springing: true });
      springRaf.current = requestAnimationFrame(step);
    };
    springRaf.current = requestAnimationFrame(step);
  }, []);
  useEffect(() => () => cancelAnimationFrame(springRaf.current), []);

  const onDeckPointerDown = useCallback((e) => {
    if (!deckOn) return;
    if (openLayer) return; // a card is open — the ✕ button closes it
    if (menuOpen) { setMenuOpen(false); return; } // any tap outside the menu chrome closes it
    const id = deckHitTest(e.clientX, e.clientY);
    if (id == null) { setActive(null); return; } // empty sky: release any preview lift
    // NOTE (2026-07): layers NO LONGER open cards — the MENU is the only
    // navigation. A press GRABS the layer for the elastic drag; a clean tap
    // (no movement) toggles its preview lift instead.
    cancelAnimationFrame(springRaf.current); // grabbing mid-bounce catches the deck
    dragRef.current = { id, startY: e.clientY, moved: false };
  }, [deckOn, openLayer, menuOpen, deckHitTest]);

  const onDeckPointerMove = useCallback((e) => {
    if (!deckOn || openLayer) return;
    const drag = dragRef.current;
    if (drag) {
      if (Math.abs(e.clientY - drag.startY) > 6) drag.moved = true;
      if (drag.moved) {
        const el = frameRef.current;
        const h = el ? el.getBoundingClientRect().height : 800;
        const delta = Math.max(-16, Math.min(16, ((e.clientY - drag.startY) / h) * 100));
        setPull({ id: drag.id, delta });
      }
      return;
    }
    if (e.pointerType === 'mouse' && e.buttons === 0) {
      const id = deckHitTest(e.clientX, e.clientY);
      setHovered((cur) => (cur === id ? cur : id)); // hover ease
    }
  }, [deckOn, openLayer, deckHitTest]);

  const onDeckPointerUp = useCallback(() => {
    const drag = dragRef.current;
    dragRef.current = null;
    if (!deckOn) return;
    if (pullRef.current) startSpring(pullRef.current); // rubber-band home
    if (drag && !drag.moved) setActive((cur) => (cur === drag.id ? null : drag.id)); // tap: preview lift
  }, [deckOn, startSpring]);

  const onDeckPointerLeave = useCallback(() => {
    setHovered(null);
    if (dragRef.current) { dragRef.current = null; if (pullRef.current) startSpring(pullRef.current); }
  }, [startSpring]);

  return (
    <div
      className="parallax-stage"
      ref={stageRef}
      aria-label="Illustrated tour of the proposed Century 21 fairgrounds, from overlook to street level"
      onPointerMove={onDeckPointerMove}
      onPointerDown={onDeckPointerDown}
      onPointerUp={onDeckPointerUp}
      onPointerCancel={onDeckPointerUp}
      onPointerLeave={onDeckPointerLeave}
      style={{ cursor: deckOn && (hovered || openLayer) ? 'pointer' : undefined }}
    >
      {DEBUG && (
        <div className="parallax-debug">
          progress {progress.toFixed(3)}
          {'\n'}atStart {String(progress <= 1e-3)}  atEnd {String(progress >= 1 - 1e-3)}
          {'\n'}delta {parallax.debug.delta}  card {activeCard ? activeCard.insertId : 'none'}
          {'\n'}{parallax.debug.released ? 'RELEASED' : parallax.debug.consumed ? 'consumed' : 'suppressed'}
        </div>
      )}

      {/* header + logo lockup RETIRED (2026-07): every piece of copy — the
          statements, "An Iconic View... / times two.", "The Campaign / For",
          and the logo — now rides the narration crawl (see CRAWL_LINES).
          splitLetters + the .ico-* / .parallax-narration-* / .parallax-header
          / .parallax-logo styles are kept for reference/reuse elsewhere. */}

      {/* ── DESKTOP BLEED (v3): one small canvas, upscaled — all motion
          drawn by hand at ~24fps. Single composited layer; cannot tax the
          page the way per-element animation did. */}
      <div className="parallax-bleed" aria-hidden="true">
        <BleedCanvas />
      </div>

      <div className={`parallax-frame${deckOn ? ' deck-on' : ''}${openLayer ? ' card-mode' : ''}${pull ? ' deck-drag' : ''}`} ref={frameRef}>
          {/* ── Shared background plates + spotlights (13–18) ────
              kept clipped to the 9:16 frame so atmosphere never spills */}
          <div className="parallax-bg-clip">
          {BACKGROUND_LAYERS.map((bg) => {
            const key = `bg-${bg.n}`;
            if (missing.has(key)) return null;
            const spot = bg.spot;
            return (
              <div
                key={key}
                className="parallax-layer parallax-bg"
                style={{
                  zIndex: bg.z,
                  // lower spotlights so their lamp/hinge hides behind the treeline
                  transform: spot && spot.drop ? `translateY(${spot.drop * 100}%)` : undefined,
                }}
              >
                {bg.twinkle ? (
                  // star field: independent groups, each glimmering subtly
                  bg.twinkle.map((part, i) => (
                    <img
                      key={i}
                      src={part.src}
                      alt=""
                      draggable="false"
                      className="parallax-star"
                      style={{
                        animationDuration: `${part.period}s`,
                        animationDelay: `${part.delay}s`,
                      }}
                    />
                  ))
                ) : (
                  <>
                  <img
                    src={bg.src}
                    alt=""
                    draggable="false"
                    // beams switch ON one-by-one past their onAt; the fade itself
                    // is a CSS transition — quick in, but delayed + slow out, so
                    // reversing lets each beam linger then dim gently.
                    className={
                      spot
                        ? `parallax-spotlight${progress > (spot.onAt ?? 0) ? ' is-on' : ''}`
                        : undefined
                    }
                    style={
                      spot
                        ? {
                            transformOrigin: `${spot.pivot[0] * 100}% ${spot.pivot[1] * 100}%`,
                            '--spot-amp': `${spot.amp}deg`,
                            '--spot-stretch': spot.stretch ?? 1.9,
                            animationDuration: `${spot.period}s`,
                            animationDelay: `${spot.delay}s`,
                          }
                        : undefined
                    }
                    onError={() => markMissing(key)}
                  />
                  {/* the backmost plate has a bright pink horizon band at its
                      bottom; overlay a dimmed, bottom-masked copy so that pink
                      reads dark to match the dimmed layers above it */}
                  {bg.n === 18 && (
                    <img
                      src={bg.src}
                      alt=""
                      draggable="false"
                      aria-hidden="true"
                      className="parallax-bg-pinkdim"
                    />
                  )}
                  </>
                )}
              </div>
            );
          })}
          </div>

          {/* ── NARRATION CRAWL ─────────────────────────────────
              THE copy column: every block rides it at constant speed (kfPos,
              linear), climbing out from behind the treeline (z 300: behind
              every moving layer, in front of the sky) and dissipating in the
              mask band near the top. The campaign lockup is NOT part of it —
              it materializes separately (below). Fades with the chrome when
              a card opens. */}
          <div
            className="parallax-crawl"
            style={{
              zIndex: 300,
              opacity: chromeOpacity,
              transition: chromeTransition,
            }}
          >
            <div
              className="parallax-crawl-col"
              style={{ top: `${kfPos(CRAWL_KF, progress, true).toFixed(3)}%` }}
            >
              {CRAWL_LINES.map((l) => (                <span
                  key={l.key}
                  className={`parallax-crawl-line${l.tsn ? ' parallax-crawl-line--tsn' : ''}${l.iconic ? ' parallax-crawl-line--iconic' : ''}${l.fit ? ' parallax-crawl-line--fit' : ''}`}
                  style={(() => {
                    // `fadeIn` = the block MATERIALIZES in place mid-sky
                    // (opacity + blur window) instead of emerging at the horizon
                    const t = l.fadeIn ? smoothstep(clamp01((progress - l.fadeIn[0]) / (l.fadeIn[1] - l.fadeIn[0]))) : 1;
                    return { top: `${l.at}cqh`, opacity: t, filter: t < 1 ? `blur(${((1 - t) * 6).toFixed(2)}px)` : undefined };
                  })()}
                >
                  {/* `lines` = mandated line breaks (each sub-line unbreakable);
                      `dots` = the trailing ellipsis gets its own row */}
                  {l.lines ? l.lines.map((ln, i) => <span key={i} className="parallax-crawl-subline">{ln}</span>) : l.text}
                  {l.dots && <span className="parallax-crawl-subline">...</span>}
                  {l.follow && (() => {
                    const ft = smoothstep(clamp01((progress - l.follow.fadeIn[0]) / (l.follow.fadeIn[1] - l.follow.fadeIn[0])));
                    return (
                      <span
                        className="parallax-crawl-follow"
                        style={{ opacity: ft, filter: ft < 1 ? `blur(${((1 - ft) * 6).toFixed(2)}px)` : undefined }}
                      >
                        {l.follow.lines.map((ln, i) => <span key={i} className="parallax-crawl-subline">{ln}</span>)}
                      </span>
                    );
                  })()}
                </span>
              ))}
            </div>
          </div>

          {/* ── CAMPAIGN LOCKUP — the ending. Fixed at its resting spot
              (text row 4, logo beneath, right edge on the copy column's
              margin); MATERIALIZES powerfully (blur + scale glimmer-in) at
              2.82→2.92, just as "times two" rides off and the scroll
              completes. Progress-driven, so it dissolves on scroll-back. */}
          {(() => {
            const t = smoothstep(clamp01((progress - 2.82) / 0.1));
            if (t <= 0.001) return null;
            return (
              <div className="parallax-lockup" style={{ zIndex: 300, opacity: t * chromeOpacity * (menuOpen ? 0 : 1), transition: chromeTransition }}>
                <div
                  className="parallax-lockup-inner"
                  style={{ filter: `blur(${((1 - t) * 8).toFixed(2)}px)`, transform: `scale(${(0.94 + 0.06 * t).toFixed(3)})` }}
                >
                  <span className="parallax-crawl-campline">The Campaign</span>
                  <span className="parallax-crawl-campline">For</span>
                  <div
                    className="parallax-crawl-logo"
                    role="img"
                    aria-label="Two Space Needles"
                    style={{ WebkitMaskImage: `url(${LOGO_SRC})`, maskImage: `url(${LOGO_SRC})` }}
                  />
                </div>
              </div>
            );
          })()}

          {/* ── MENU button — materializes beneath the locked lockup after a
              1.5s breath at the deck. High z (above the layers) so it's
              clickable; hidden while a card is open. Click destination TBD. */}
          {deckReadyState && (
            <div
              className="parallax-menubtn-wrap"
              style={{ opacity: chromeOpacity, transition: chromeTransition, pointerEvents: openLayer ? 'none' : undefined }}
            >
              <button
                type="button"
                className={`parallax-menubtn${menuOn && !menuOpen ? ' is-on' : ''}`}
                style={{ pointerEvents: menuOpen || openLayer ? 'none' : undefined }}
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setMenuOpen(true); }}
              >
                Menu
              </button>
              {/* ✕ — materializes in EXACTLY the MENU button's slot (same box,
                  same anchor): a natural open/close position */}
              <button
                type="button"
                className={`parallax-menubtn parallax-menubtn--close${menuOpen ? ' is-on' : ''}`}
                style={{ pointerEvents: menuOpen && !openLayer ? undefined : 'none' }}
                aria-label="Close menu"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }}
              >
                ✕
              </button>
              {/* the EXPANDED MENU — the button grows into the page links,
                  staggered in, in the sky freed by the compression */}
              <nav className={`parallax-menupanel${menuOpen ? ' is-on' : ''}`} aria-hidden={!menuOpen}>
                {MENU_LINKS.map(({ label, layer }, i) => (
                  <button
                    key={label}
                    type="button"
                    className={`parallax-menulink${flashLink === label ? ' is-flash' : ''}`}
                    // per-PROPERTY delays: the entrance stagger applies only to
                    // opacity/filter/transform — background-color and color get
                    // 0s so the hover invert is IMMEDIATE (a single delay value
                    // was silently postponing the hover on lower cells)
                    style={{
                      transitionDelay: menuOpen
                        ? `${(i * 0.07).toFixed(2)}s, ${(i * 0.07).toFixed(2)}s, ${(i * 0.07).toFixed(2)}s, 0s, 0s`
                        : '0s',
                      pointerEvents: menuOpen && !openLayer ? undefined : 'none',
                    }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      // brief invert flash (like the MENU button), then open
                      setFlashLink(label);
                      setTimeout(() => { setFlashLink(null); openCardFor(layer); }, 160);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </nav>


            </div>
          )}

          {/* ── Whole-comp preview fallback (until real layers exist) ── */}
          {usePreview && (
            <div className="parallax-layer parallax-preview" style={{ zIndex: 500 }}>
              <img
                className="parallax-preview-a"
                src={PREVIEW.a}
                alt="Proposed fairgrounds — overlook view"
                draggable="false"
                style={{ opacity: 1 - fade }}
              />
              <img
                className="parallax-preview-b"
                src={PREVIEW.b}
                alt="Proposed fairgrounds — street-level view"
                draggable="false"
                style={{ opacity: fade }}
              />
            </div>
          )}

          {/* ── Moving layers (front → back) ─────────────────────
              DOLLY-THROUGH: each layer scales up from a locked bottom edge as
              we scroll, so content expands sideways and up. Near layers grow
              fast and rush past; far layers (needles) barely grow. This reads
              as moving forward through the scene. progress 0 = A comp. */}
          {MOVING_LAYERS.map((layer) => {
            const aKey = `a-${layer.id}`;
            if (missing.has(aKey)) return null;

            // ground keeps its regular depth (behind the plaza/people) — it just
            // slides back in behind the foreground rather than blocking on top.
            const layerZ = layer.z;

            // on card CLOSE, layers ripple back up front → back (by depth): the
            // frontmost returns first, each one behind it a beat later. (No delay
            // on the drop — that stays a quick uniform clear.)
            const cardReturnDelay = openLayer && !cardRaised
              ? `${((1000 - layer.z) * 0.0035).toFixed(3)}s`
              : '0s';

            // idle attract wave — bounce staggered front → back by depth (skips
            // the elevators, which run their own travel animation)
            const rippleOn = rippling && !openLayer && !layer.decor;
            const layerClass = `parallax-layer${rippleOn ? ' rippling' : ''}`;
            const rippleDelay = rippleOn ? `${((1000 - layer.z) * 0.005).toFixed(3)}s` : undefined;

            let transform, transformOrigin, filter = 'none';
            if (MODE === 'dolly') {
              // paused experiment: scale up from a locked edge, optional pan/offset
              const scale = 1 + (layer.grow || 0) * motionGain * progress;
              const panX = (layer.panX || 0) * 100 * progress; // % of frame width
              const offsetY = (layer.offsetY || 0) * 100; // % of frame height
              transform = `translate(${panX}%, ${offsetY}%) scale(${scale})`;
              transformOrigin = layer.origin
                ? `${layer.origin[0] * 100}% ${layer.origin[1] * 100}%`
                : '50% 100%';
            } else {
              // ACTIVE: scrollytelling entrances. Each layer rises from its `kf`
              // start (below the viewport, or low for the needles) to rest as
              // progress moves through its range — assembling the scene from the
              // bottom up, one layer at a time. offsetY is a constant reseat.
              const ty = kfPos(layer.kf, progress, layer.linear) * motionGain; // % frame height
              const tx = kfPos(layer.kfX, progress, layer.linear) * motionGain; // % frame width (sideways slides, e.g. 2nd needle)
              const off = (layer.offsetY || 0) * 100; // constant reseat %
              const baseScale = layer.scale || 1;
              // DECK interaction: hovered layer eases up, the pulled (active)
              // layer eases up further, and the rest compress slightly.
              let deckLift = 0;
              if (deckOn && !DECK_STATIC.has(layer.id)) {
                const liftId = layer.deckParent || layer.id; // elevators lift with their needle
                if (active === liftId) deckLift = -8;
                else if (hovered === liftId) deckLift = -3;
                // COMPANION lift: treeline 11 fronts the BACK needle (12) — it
                // rises a touch with it so the needle's bottom edge stays
                // tucked behind the trees instead of floating in space
                if (layer.id === '11') {
                  if (active === '12') deckLift += -5;
                  else if (hovered === '12') deckLift += -2;
                }
                // ELASTIC PULL — TIGHT STITCH (rev 2): adjacent layers move
                // almost together (0.85/step in front, 0.68/step behind), so
                // a pulled layer's bottom edge stays tucked behind its front
                // neighbor AND the whole stack visibly participates — a
                // distant layer still carries ~40% of the pull.
                if (pull) {
                  const gi = elasticIndex[pull.id];
                  const li = elasticIndex[liftId];
                  if (gi != null && li != null) {
                    const d = li - gi; // negative = in front of the grabbed layer
                    const k = d === 0 ? 1 : d < 0 ? Math.pow(0.85, -d) : Math.pow(0.68, d);
                    deckLift += pull.delta * k;
                  }
                }
              }
              // MENU state: the whole world COMPRESSES back down to the
              // clustered-low composition from the intro (the scene as it
              // first assembled), clearing the sky for the expanded menu.
              // Derived from each layer's OWN keyframes — its value just
              // before the finale lift (2.05) minus its final rest — so no
              // new hand-tuned numbers are introduced. Elevators follow
              // their own kf the same way; the needles stay put (both remain
              // visible — only the y compression is reapplied, not the
              // pre-split composition).
              if (deckOn && menuOpen) {
                deckLift += kfPos(layer.kf, 2.05, layer.linear) - kfPos(layer.kf, MAX_PROGRESS, layer.linear);
              }
              // card open: EVERY moving layer drops fully off-screen (only the
              // background plates stay). On close they all scroll back up together
              // as the card rolls down.
              if ((openLayer && cardRaised) || cardSwitching) deckLift += 120;
              const sc = baseScale !== 1 ? ` scale(${baseScale.toFixed(3)})` : '';
              transform = `translate(${tx}%, ${ty + off + deckLift}%)${sc}`;
              // origin only matters when a layer is scaled; defaults to bottom-centre
              transformOrigin = layer.origin
                ? `${layer.origin[0] * 100}% ${layer.origin[1] * 100}%`
                : '50% 100%';
              // layers flagged `dim` stay as dark silhouettes until a later
              // stage gives them an illumination range. `dim` may be a number to
              // dim a layer harder (e.g. to sink a near-white hot spot to navy).
              if (layer.dim) {
                const b = typeof layer.dim === 'number' ? layer.dim : 0.16;
                filter = `brightness(${b}) saturate(0.35)`;
              }
            }

            // FRONT ELEVATOR — special render: a needle-tracking wrapper clipped
            // by a hard line at the disc/spine junction, with the car image
            // traveling the spine inside it (flipped to face the other way).
            if (layer.id === '6e') {
              const et = clamp01((progress - layer.illum.start) / (layer.illum.end - layer.illum.start));
              const eb = (0.16 + 0.84 * et).toFixed(3);
              const es = (0.35 + 0.65 * et).toFixed(3);
              return (
                <div key={`layer-${layer.id}`} className="parallax-layer" style={{ zIndex: layerZ }}>
                  <div className="elevator-clip" style={{ transform, transformOrigin, transitionDelay: cardReturnDelay }}>
                    <img
                      className="elevator-front"
                      src={layer.src}
                      alt=""
                      draggable="false"
                      style={{ filter: `brightness(${eb}) saturate(${es})` }}
                      onLoad={onMovingLoad}
                      onError={() => markMissing(aKey)}
                    />
                  </div>
                </div>
              );
            }

            // BACK ELEVATOR — same masked-travel structure, remapped bands (its
            // wrapper carries the back needle's scale/offset), not flipped.
            if (layer.id === '12e') {
              const et = clamp01((progress - layer.illum.start) / (layer.illum.end - layer.illum.start));
              const eb = (0.16 + 0.84 * et).toFixed(3);
              const es = (0.35 + 0.65 * et).toFixed(3);
              return (
                <div key={`layer-${layer.id}`} className="parallax-layer" style={{ zIndex: layerZ }}>
                  <div className="elevator-clip elevator-clip--back" style={{ transform, transformOrigin, transitionDelay: cardReturnDelay }}>
                    <img
                      className="elevator-back"
                      src={layer.src}
                      alt=""
                      draggable="false"
                      style={{ filter: `brightness(${eb}) saturate(${es})` }}
                      onLoad={onMovingLoad}
                      onError={() => markMissing(aKey)}
                    />
                  </div>
                </div>
              );
            }

            // Top-down illumination: a layer marked `illum` starts as a dark
            // silhouette and reveals its full colour from the top down as
            // progress moves through [start,end] (reverses on scroll-up). Built
            // as a dark base + a full-colour copy unmasked from the top.
            if (layer.illum) {
              const t = clamp01(
                (progress - layer.illum.start) /
                  (layer.illum.end - layer.illum.start)
              );

              // 'uniform' — whole layer ramps dark→lit together (treelines)
              if (layer.illum.mode === 'uniform') {
                // ramp from the layer's dim floor (0.16, or its custom `dim`
                // value for layers sunk harder) up to full colour
                const b0 = typeof layer.dim === 'number' ? layer.dim : 0.16;
                const b = (b0 + (1 - b0) * t).toFixed(3);
                const s = (0.35 + 0.65 * t).toFixed(3);
                return (
                  <div
                    key={`layer-${layer.id}`}
                    className={layerClass}
                    style={{ zIndex: layerZ, animationDelay: rippleDelay }}
                  >
                    <img
                      src={layer.src}
                      alt=""
                      draggable="false"
                      style={{ transform, transformOrigin, filter: `brightness(${b}) saturate(${s})`, transitionDelay: cardReturnDelay }}
                      onLoad={onMovingLoad}
                      onError={() => markMissing(aKey)}
                    />
                  </div>
                );
              }

              // 'topdown' (default) — dark base + colour revealed from the top.
              // `reach` caps how far down the light goes so the base stays dark
              // and blends into the treeline (no hard bright bottom edge).
              const reach = layer.illum.reach ?? 112;
              const feather = 13; // soft edge of the light
              // Start the lit band fully ABOVE the frame at t=0 so an unlit layer
              // reads completely dark (no top sliver leaking — e.g. the hidden
              // second needle's spire). At t=1 the solid edge reaches `reach`.
              const reveal = t * (reach + feather) - feather; // % down the frame
              const mask = `linear-gradient(to bottom, #000 ${reveal}%, rgba(0,0,0,0) ${reveal + feather}%)`;
              return (
                <div
                  key={`layer-${layer.id}`}
                  className={layerClass}
                  style={{ zIndex: layerZ, animationDelay: rippleDelay }}
                >
                  <img
                    src={layer.src}
                    alt=""
                    draggable="false"
                    style={{ transform, transformOrigin, filter: 'brightness(0.16) saturate(0.35)', transitionDelay: cardReturnDelay }}
                    onLoad={onMovingLoad}
                    onError={() => markMissing(aKey)}
                  />
                  <img
                    src={layer.src}
                    alt=""
                    draggable="false"
                    style={{
                      transform,
                      transformOrigin,
                      transitionDelay: cardReturnDelay,
                      WebkitMaskImage: mask,
                      maskImage: mask,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskSize: '100% 100%',
                      maskSize: '100% 100%',
                    }}
                  />
                </div>
              );
            }

            return (
              <div
                key={`layer-${layer.id}`}
                className={layerClass}
                style={{ zIndex: layerZ, animationDelay: rippleDelay }}
              >
                <img
                  src={layer.src}
                  alt=""
                  draggable="false"
                  style={{ transform, transformOrigin, filter, transitionDelay: cardReturnDelay }}
                  onLoad={onMovingLoad}
                  onError={() => markMissing(aKey)}
                />
              </div>
            );
          })}

          <Jimothy />
          <Basejumpers ready={menuOn} active={deckOn && !menuOpen && !openLayer && !gameOpen} />

          {/* warm glints that sparkle across the illustrated objects as the
              scene catches the light (skips plaza + treelines) */}
          <GlimmerLayer
            frameRef={frameRef}
            alphaMaps={alphaMaps}
            transforms={finalTransforms}
            intensity={glimmerIntensity}
          />

          {/* full-card for the opened menu layer — mounts aligned to the layer,
              then glides up to fill the screen. Sits just above the layer it
              replaces (covers it + everything behind); front layers stay ahead. */}
          {openLayer && CARD_MAP[openLayer] && (
            <div
              key={openLayer}
              className="parallax-card"
              onPointerDown={() => { if (cardMenuOpen) setCardMenuOpen(false); }}
              style={{
                zIndex: (zById[openLayer] || 0) + 5,
                // PUSH follow: 0 until the game's left edge reaches the frame's
                // right edge, then rigidly coupled to the game's motion
                transform: (() => {
                  let pushPct = 0;
                  if (gamePush > 0 && pushGeom.current.W) {
                    const { W, F } = pushGeom.current;
                    const px = Math.min(0, W * (1 - gamePush) - (W + F) / 2);
                    pushPct = (px / F) * 100;
                  }
                  return `translate(${pushPct.toFixed(3)}%, ${cardRaised ? `${CARD_MAP[openLayer].restPx || 0}px` : cardSwitching ? '120%' : `${CARD_MAP[openLayer].startY}%`})`;
                })(),
                transition: gameOpen ? 'opacity 0.6s ease' : cardSwitching ? 'transform 1.4s cubic-bezier(0.45, 0.05, 0.3, 1), opacity 0.6s ease' : undefined, // switch = slow matched glide; game push = per-frame
                opacity: cardClosing ? 0 : 1, // fades out on the roll-down so it vanishes as its layer arrives
              }}
            >
              <img src={CARD_MAP[openLayer].src} alt="" draggable="false" />
              <div
                className={`parallax-card-content${CARD_MAP[openLayer].headRight ? ' head-right' : ''}${CARD_MAP[openLayer].ctaRight ? ' cta-right' : ''}`}
                style={{ top: `${CARD_MAP[openLayer].contentTop}%`, opacity: cardRaised && !cardClosing ? 1 : 0 }}
              >
                <h2 className="card-section-heading">{CARD_MAP[openLayer].section}</h2>
                {CARD_MAP[openLayer].inserts.map((id) => <CardSection key={id} insert={byId(id)} onPlayGame={openGame} />)}
                {CARD_MAP[openLayer].credits && <CardCredits />}
              </div>
              <button
                className="parallax-card-close"
                // the card parks restPx below the frame — pull the ✕ back up
                // so it sits at the bottom of the SCREEN on every page
                style={{ bottom: `calc(clamp(0.2rem, 1.2vw, 0.6rem) + ${CARD_MAP[openLayer].restPx || 0}px)` }}
                onClick={closeMenuCard}
                aria-label="Close"
              >✕</button>
              <div className="parallax-cardmenu-wrap">
              <div
                className={`parallax-cardmenu${cardMenuOpen ? ' is-open' : ''}${CARD_MAP[openLayer].menuSolid ? ' menu-solid' : ''}`}
                // the card parks restPx lower, but the MENU stays at the GLOBAL
                // 5.5cqh line — compensate for the card's drop
                style={{ top: `calc(5.5cqh - ${CARD_MAP[openLayer].restPx || 0}px)` }}
                onPointerDown={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className={`parallax-cardmenu-btn${cardMenuOpen ? ' is-open' : ''}`}
                  onClick={(e) => {
                    if (!cardMenuOpen) { setCardMenuOpen(true); return; }
                    // second click: MAIN MENU — flash, then exit to the home
                    // screen with the main menu already open
                    const el = e.currentTarget;
                    el.classList.add('is-flash');
                    setTimeout(() => {
                      el.classList.remove('is-flash');
                      setCardMenuOpen(false);
                      setMenuOpen(true);
                      closeMenuCard();
                    }, 160);
                  }}
                >
                  {cardMenuOpen ? 'Main Menu' : 'Menu'}
                </button>
                <nav className={`parallax-cardmenu-panel${cardMenuOpen ? ' is-on' : ''}`} aria-hidden={!cardMenuOpen}>
                    {MENU_LINKS.filter((l) => l.layer !== openLayer).map(({ label, layer }) => (
                      <button
                        key={label}
                        type="button"
                        className="parallax-cardmenu-link"
                        onClick={(e) => {
                          const el = e.currentTarget;
                          el.classList.add('is-flash');
                          setTimeout(() => {
                            el.classList.remove('is-flash');
                            setCardMenuOpen(false);
                            switchCardTo(layer);
                          }, 160);
                        }}
                      >
                        {label}
                      </button>
                    ))}
                </nav>
              </div>
              </div>
              {openLayer === '3' && (
                <button type="button" className="card-section-cta parallax-card-playfixed" onClick={(e) => pressFire(e, openGame)}>Simulate.</button>
              )}
            </div>
          )}

          {/* OUTGOING card (card→card switch): rides ABOVE the incoming card
              and slides fully off the bottom — no fade, so the pair always
              covers the scene behind */}
          {outgoingCard && outgoingCard.id && CARD_MAP[outgoingCard.id] && (
            <div
              className="parallax-card"
              style={{
                zIndex: Math.max(zById[outgoingCard.id] || 0, zById[openLayer] || 0) + 6,
                transform: outgoingCard.dropped
                  ? 'translate(0%, 130%)'
                  : `translate(0%, ${CARD_MAP[outgoingCard.id].restPx || 0}px)`,
                transition: 'transform 1.4s cubic-bezier(0.45, 0.05, 0.3, 1)',
              }}
            >
              <img src={CARD_MAP[outgoingCard.id].src} alt="" draggable="false" />
              <div
                className={`parallax-card-content${CARD_MAP[outgoingCard.id].headRight ? ' head-right' : ''}${CARD_MAP[outgoingCard.id].ctaRight ? ' cta-right' : ''}`}
                style={{ top: `${CARD_MAP[outgoingCard.id].contentTop}%`, opacity: 1 }}
              >
                <h2 className="card-section-heading">{CARD_MAP[outgoingCard.id].section}</h2>
                {CARD_MAP[outgoingCard.id].inserts.map((id) => <CardSection key={id} insert={byId(id)} onPlayGame={openGame} />)}
              </div>
            </div>
          )}
        </div>

      {/* chapter tabs removed for now (CHAPTERS / CardReader preserved for later) */}

      {/* scroll cue — a pulsing up wedge; appears whenever the experience is
          parked waiting for a scroll. It's also a BUTTON: clicking it plays
          through the whole sequence (no need to scroll stage by stage). */}
      <button
        type="button"
        className="parallax-hint"
        style={{ opacity: hintOpacity, pointerEvents: hintOpacity > 0.05 ? 'auto' : 'none' }}
        onClick={() => parallax.playAll()}
        aria-label="Play the full sequence"
      >
        <span className="parallax-hint-arrow" aria-hidden="true" />
      </button>

      {/* ── PLACE NEEDLES overlay — the game, native to the site ── */}
      {gameOpen && (
        <div className="parallax-gameoverlay" style={{ transform: `translateX(${((1 - gamePush) * 100).toFixed(3)}%)` }}>
          <iframe
            className="parallax-gameoverlay-frame"
            src="/game/index.html"
            title="Place Needles"
            allow="fullscreen"
          />
          <button
            type="button"
            className="parallax-gameoverlay-close"
            aria-label="Exit game"
            onClick={closeGame}
          >
            ✕
          </button>
        </div>
      )}

      {/* full-length campaign card expanded from a selected layer */}
      {activeCard && (
        <CardReader
          insert={byId(activeCard.insertId)}
          art={activeCard.art}
          originRect={originRect}
          onClose={closeCard}
        />
      )}
    </div>
  );
}
