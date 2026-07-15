/**
 * Insert content for the promotional folder.
 *
 * Each entry:
 *   id          unique slug
 *   tabNum      Roman or numeric numeral printed on the pocket tab
 *   label       short title on the pocket tab
 *   preview     1-line summary printed on the pocket body
 *   paper       paper tone for the insert sheet (CSS var name suffix)
 *   accent      accent color for the insert's stamps and labels
 *   stamp       small all-caps stamp on the insert ("Exhibit A" etc.)
 *   title       headline at the top of the insert
 *   tagline?    optional italic tagline under the title
 *   layout      hint for insert layout variant: 'pamphlet' | 'manifesto'
 *               | 'classified' | 'petition' | 'merch' | 'diagram' | 'faq'
 *   body        array of paragraph strings (used by most layouts)
 *   list?       optional bullet list (for 'manifesto')
 *   faq?        optional [{q,a}] array (for 'faq')
 *   cta?        { label, href }  primary action
 *   secondary?  small note printed at the bottom of the insert
 */
export const INSERTS = [
  // ── ABOUT — one page, three movements (restructured 2026-07 from the
  // petition, the campaign's founding document). Replaces the separate
  // Oversight / Proposal / Vision pages.
  {
    // the page's LEAD STATEMENT — the campaign line, set as the About card's
    // main heading (first section = main heading, per the global hierarchy)
    id: 'about-lead',
    tabNum: 'I',
    label: 'About',
    preview: 'The campaign, in one line.',
    paper: 'cream',
    accent: 'mustard',
    stamp: 'Exhibit A',
    title: 'Advocating for a second monument from which we may better admire the first.',
    layout: 'pamphlet',
    lead: true, // statement-only section: no trailing gap before the next section
    body: [],
  },
  {
    id: 'about-blindspot',
    tabNum: 'I',
    label: 'The Blind Spot',
    preview: 'A glaring design flaw in Seattle’s skyline.',
    paper: 'cream',
    accent: 'vermilion',
    stamp: 'Exhibit A',
    title: 'The Blind Spot',
    layout: 'pamphlet',
    body: [
      'The Space Needle was built for the 1962 World’s Fair and has been the symbol of Seattle ever since. More than a million people a year ride to the top, anticipating the definitive view of the city.',
      'And the view delivers, except for one thing. Stand at the top and look out: the crown jewel of the skyline, the Space Needle itself, is nowhere in sight. Locals notice. Tourists notice. It is a glaring design flaw, and it deprives every visitor of the one landmark that defines the view.',
    ],
  },
  {
    id: 'about-proposal',
    tabNum: 'II',
    label: 'The Proposal',
    preview: 'A second Space Needle, identical to the first.',
    paper: 'cream-warm',
    accent: 'sky',
    stamp: 'Exhibit B',
    title: 'The Proposal',
    tagline: 'A second Space Needle. Identical. Beside the first.',
    layout: 'diagram',
    body: [
      'We propose constructing a twin tower beside the original, rectifying the oversight and completing the quintessential Seattle experience: seeing the Space Needle from the top of the Space Needle.',
    ],
  },
  {
    id: 'about-vision',
    tabNum: 'III',
    label: 'The Vision',
    preview: 'Two icons instead of one.',
    paper: 'cream',
    accent: 'mustard',
    stamp: 'Exhibit C',
    title: 'The Vision',
    tagline: 'Like looking in a mirror.',
    layout: 'manifesto',
    body: [
      'Seattle deserves a skyline that celebrates its most iconic landmark in full. Two needles double the view and double the capacity to enjoy it. Twice the decks. Twice the visitors. A silhouette finally shown off whole.',
      'Future generations deserve every aspect of it. Let’s make sure they see two icons instead of one.',
    ],
  },

  // ── GAME — Place Needles (link wired once the game ships alongside)
  {
    id: 'game',
    tabNum: 'IV',
    label: 'Place Needles',
    preview: 'Where should the second one go? You decide.',
    paper: 'sky',
    accent: 'vermilion',
    stamp: 'Exhibit D',
    title: 'Place Needles',
    layout: 'pamphlet',
    body: [
      // *…* renders italic (see renderEm in ParallaxScene)
      'Where should the second one go? The site selection process is open to the public. In our Civic Expansion Simulator, *you* choose the next location.',
    ],
    cta: {
      label: 'Play.',
      game: true, // opens the same-origin /game/ overlay (see parallax-gameoverlay)
    },
  },

  // ── GET INVOLVED ──
  {
    // the page's LEAD STATEMENT (main heading)
    id: 'getinvolved-lead',
    tabNum: 'V',
    label: 'Get Involved',
    preview: 'Be part of the view.',
    paper: 'vermilion',
    accent: 'mustard',
    stamp: 'Exhibit E',
    title: 'Be part of the view.',
    layout: 'petition',
    lead: true,
    body: [],
  },
  {
    id: 'movement',
    tabNum: 'V',
    label: 'Join the Movement',
    preview: 'It’s time to make history and shape Seattle’s future.',
    paper: 'vermilion',
    accent: 'mustard',
    stamp: 'Exhibit E',
    title: 'Sign the Petition',
    tagline: '',
    layout: 'petition',
    body: [
      'Add your name to our Change.org petition: “Construct a Second Space Needle so we may better admire the first.”',
    ],
    cta: {
      label: 'Sign the Petition',
      href: 'https://c.org/cfM57M6fjh',
    },
  },
  {
    id: 'volunteer',
    tabNum: 'V',
    label: 'Volunteer',
    preview: 'Movements are built by hand.',
    paper: 'cream',
    accent: 'sky',
    stamp: 'Exhibit E',
    title: 'Volunteer',
    tagline: '',
    layout: 'petition',
    body: [
      'Movements are built by hand. Ours needs yours — events, outreach, and the occasional needle-related errand.',
    ],
    // placeholder action until the Kit form is wired in
    cta: {
      label: 'Raise Your Hand',
      href: 'mailto:twospaceneedles@gmail.com?subject=Volunteer',
    },
  },
  {
    id: 'subscribe',
    tabNum: 'V',
    label: 'Subscribe',
    preview: 'Campaign news, as it happens.',
    paper: 'cream-warm',
    accent: 'vermilion',
    stamp: 'Exhibit E',
    title: 'Keep in Touch',
    tagline: '',
    layout: 'petition',
    body: [
      'Campaign updates, milestones, site-selection news, and volunteer opportunities straight to your inbox.',
    ],
    kit: true, // native subscribe form → Kit form 9687388
    social: {
      text: 'Follow us on Instagram',
      label: '@TWOSPACENEEDLES',
      href: 'https://www.instagram.com/twospaceneedles/',
    },
  },

  {
    id: 'faq',
    tabNum: 'VI',
    label: 'Frequently Raised',
    preview: 'Tightrope walkers · The view · Tourism, in excess.',
    paper: 'cream-cool',
    accent: 'sky',
    stamp: 'Exhibit F',
    title: 'On the Record',
    tagline: '',
    layout: 'faq',
    body: [],
    faq: [
      {
        q: 'Are you not concerned about tight-rope-walkers attempting to traverse the air space in-between the two Space Needles?',
        a: 'Not only are we not concerned about tight-rope-walkers, we actively encourage and invite them and other stunts-people. We believe their publicity would be good both for the cause and the city.',
      },
      {
        q: 'I have never been to the top of the Space Needle. Is it worth all the hype?',
        a: 'Yes, the top of the Space Needle is worth all the hype, but it could be worth even more hype if you could see the Space Needle from the top of the Space Needle. Potentially twice as much hype.',
      },
      {
        q: 'What if having two Space Needles brings too much tourism to Seattle?',
        a: 'We understand the concern that doubling our Space Needles may bring too much attention to Seattle, and threaten to over-tax our city’s infrastructure and traffic. In that event, we can build a third Space Needle further outside the city limits, from where we can lure tourists to view both Space Needles from a comfortable distance.',
      },
      {
        q: 'Do you have questions that are not answered here?',
        a: 'Get in touch.',
      },
    ],
    cta: {
      label: 'twospaceneedles@gmail.com',
      href: 'mailto:twospaceneedles@gmail.com',
    },
  },

  {
    id: 'merch',
    tabNum: 'VII',
    label: 'Wear Your Support',
    preview: 'Campaign apparel. Profits do not fund construction.',
    paper: 'sky',
    accent: 'mustard',
    stamp: 'Exhibit G',
    title: 'Wear Your Support',
    tagline: '',
    layout: 'merch',
    image: { src: '/merch/merch-post-1.webp', alt: 'Two Space Needles campaign apparel' },
    body: [
      'Our campaign apparel helps spread awareness for this important cause.\u002A',
    ],
    cta: {
      label: 'Shop Merch',
      href: 'https://www.bonfire.com/store/two-space-needles/',
    },
    secondary: '*Note: Merch profits do not go towards construction costs of the second Space Needle.',
  },

  {
    id: 'donate-land',
    tabNum: 'VIII',
    label: 'Donate Real Estate',
    preview: 'Do you wish to construct a Space Needle on your property?',
    paper: 'cream-warm',
    accent: 'vermilion',
    stamp: 'Exhibit H',
    title: 'Donate Real Estate',
    tagline: '',
    layout: 'classified',
    body: [
      'Want a Space Needle on your property? Get in touch. Please Note: We are only considering locations with a direct eyeline to the current Space Needle.',
    ],
    cta: {
      label: 'twospaceneedles@gmail.com',
      href: 'mailto:twospaceneedles@gmail.com',
    },
  },
];
