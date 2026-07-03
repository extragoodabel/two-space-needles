/**
 * Pocket — a single physical pocket inside the folder.
 *
 * Each pocket shows:
 *   • a tab at the top (numeral + label)
 *   • a short preview line
 *   • a colored "edge" suggesting an insert sticking out
 *
 * Clicking the pocket "pulls" the insert out (handled by the parent).
 */
export default function Pocket({ insert, active, onClick, tabIndex }) {
  const { tabNum, label, preview, accent } = insert;

  return (
    <button
      type="button"
      className={`pocket pocket--accent-${accent} ${active ? 'pocket--active' : ''}`}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={`Open insert: ${label}`}
    >
      {/* Tab — projects above the pocket body */}
      <span className="pocket__tab">
        <span className="pocket__tab-num">{tabNum}</span>
        <span className="pocket__tab-label">{label}</span>
      </span>

      {/* Inserted document peeking out — colored top edge */}
      <span className="pocket__insert-edge" aria-hidden="true" />

      {/* Pocket body */}
      <span className="pocket__body">
        <span className="pocket__preview">{preview}</span>
        <span className="pocket__pull">Pull ▸</span>
      </span>
    </button>
  );
}
