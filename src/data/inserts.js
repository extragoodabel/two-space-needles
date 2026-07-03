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
  {
    id: 'oversight',
    tabNum: 'I',
    label: 'The Oversight',
    preview: 'A glaring design flaw in Seattle’s skyline.',
    paper: 'cream',
    accent: 'vermilion',
    stamp: 'Exhibit A',
    title: 'The Blind Spot',
    tagline: 'From the top of the Space Needle, you can’t see the Space Needle.',
    layout: 'pamphlet',
    body: [
      'A million people a year ride to the top for the view. The one landmark they came to see is the one thing they can’t.',
    ],
  },

  {
    id: 'proposal',
    tabNum: 'II',
    label: 'The Proposal',
    preview: 'A second Space Needle, identical to the first.',
    paper: 'cream-warm',
    accent: 'sky',
    stamp: 'Exhibit B',
    title: 'So We Propose a Second',
    tagline: 'A twin tower, beside the first.',
    layout: 'diagram',
    body: [
      'One identical Space Needle, built beside the original. From the top of either, you finally see the Space Needle — the way it was meant to be seen.',
    ],
  },

  {
    id: 'vision',
    tabNum: 'III',
    label: 'Our Vision',
    preview: 'A skyline that celebrates its most iconic landmark in all its glory.',
    paper: 'cream',
    accent: 'mustard',
    stamp: 'Exhibit C',
    title: 'The Skyline, Completed',
    tagline: 'Two on the horizon.',
    layout: 'manifesto',
    body: [
      'Two needles on the horizon. Twice the decks, twice the view, and a skyline that shows off its most famous silhouette in full.',
    ],
  },

  {
    id: 'movement',
    tabNum: 'IV',
    label: 'Join the Movement',
    preview: 'It’s time to make history and shape Seattle’s future.',
    paper: 'vermilion',
    accent: 'mustard',
    stamp: 'Exhibit D',
    title: 'Sign the Petition',
    tagline: '',
    layout: 'petition',
    body: [
      'Add your name: “Construct a Second Space Needle so we may better admire the first.”',
    ],
    cta: {
      label: 'Sign the Petition',
      href: 'https://chng.it/JXYHqQGvLn',
    },
  },

  {
    id: 'faq',
    tabNum: 'V',
    label: 'Frequently Raised',
    preview: 'Tightrope walkers · The view · Tourism, in excess.',
    paper: 'cream-cool',
    accent: 'sky',
    stamp: 'Exhibit E',
    title: 'On the Record',
    tagline: '',
    layout: 'faq',
    body: [],
    faq: [
      {
        q: 'Tightrope walkers between the two needles?',
        a: 'We’re not worried — we’re inviting them. Good publicity, for the cause and the city.',
      },
      {
        q: 'Is the top of the Space Needle worth the hype?',
        a: 'Yes. Twice as much, once you can see the Space Needle from it.',
      },
      {
        q: 'Won’t two Space Needles bring too much tourism?',
        a: 'Then we build a third, outside the city, and lure the crowds there to admire both from a comfortable distance.',
      },
    ],
  },

  {
    id: 'merch',
    tabNum: 'VI',
    label: 'Wear Your Support',
    preview: 'Campaign apparel. Profits do not fund construction.',
    paper: 'sky',
    accent: 'mustard',
    stamp: 'Exhibit F',
    title: 'Wear Your Support',
    tagline: '',
    layout: 'merch',
    body: [
      'Campaign apparel spreads the word. Profits don’t fund construction.',
    ],
    cta: {
      label: 'Shop Merch',
      href: 'https://www.bonfire.com/store/two-space-needles/',
    },
  },

  {
    id: 'donate-land',
    tabNum: 'VII',
    label: 'Donate Real Estate',
    preview: 'Do you wish to construct a Space Needle on your property?',
    paper: 'cream-warm',
    accent: 'vermilion',
    stamp: 'Exhibit G',
    title: 'Donate Real Estate',
    tagline: '',
    layout: 'classified',
    body: [
      'Want a Space Needle on your property? Get in touch.',
    ],
    cta: {
      label: 'twospaceneedles@gmail.com',
      href: 'mailto:twospaceneedles@gmail.com',
    },
    secondary: 'We’re only considering properties in the greater Seattle area.',
  },
];
