import ParallaxScene from './components/parallax/ParallaxScene.jsx';
// import PromotionalFolder from './components/PromotionalFolder.jsx';

// ─── Primary experience: the illustrated Century 21 fairgrounds ───
// ParallaxScene is the visual spine — a printed diorama that descends
// from the high-vantage Position A to the street-level Position B as
// the viewer scrolls. Drop exported layer PNGs into /public/parallax
// (see public/parallax/README.md) and they assemble automatically.
//
// The existing promotional-folder content remains reachable below the
// scene for now. How the seven inserts get woven INTO the diorama
// (embedded placards, tactile inserts emerging at scroll positions, a
// restrained persistent nav) is deliberately deferred — first we
// establish the parallax scene and its endpoint fidelity.
//
// Paused, preserved in /src for possible reuse: SplashIntro,
// BookendNeedles, CinematicSeattleScene, Header, Hero, Premise,
// Proposal, Vision, Position, Plates, Unlocks, WearYourSupport,
// TakeAction, DonateLand, Footer.

export default function App() {
  // Isolated while we dial in the parallax. The promotional-folder content
  // (<PromotionalFolder />) is preserved and will be reintroduced below the
  // scene once the depth transition is locked.
  return <ParallaxScene />;
}
