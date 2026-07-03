import { useEffect, useState } from 'react';
import FolderCover from './FolderCover.jsx';
import FolderInterior from './FolderInterior.jsx';
import Insert from './Insert.jsx';
import { INSERTS } from '../data/inserts.js';

/**
 * PromotionalFolder
 * ─────────────────────────────────────────────────────────────
 * Owns the whole object experience:
 *   phase    : 'closed' | 'open'   — the folder cover state
 *   activeId : string | null       — which insert is currently
 *                                    pulled out for reading
 *
 * Interactions:
 *   • Click the closed cover → folder opens
 *   • Click a pocket tab     → insert "pulls out" overlay
 *   • Click X / press Esc    → insert closes back into pocket
 *
 * The folder, once opened, stays open for the session. There's no
 * close-the-folder gesture; this is an object you've already
 * picked up.
 */
export default function PromotionalFolder() {
  const [phase, setPhase] = useState('closed');
  const [activeId, setActiveId] = useState(null);

  const openFolder = () => setPhase('open');
  const openInsert = (id) => setActiveId(id);
  const closeInsert = () => setActiveId(null);

  // Escape closes the active insert.
  useEffect(() => {
    if (!activeId) return;
    const onKey = (e) => { if (e.key === 'Escape') closeInsert(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeId]);

  // Lock body scroll while an insert is open.
  useEffect(() => {
    document.body.style.overflow = activeId ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeId]);

  const active = INSERTS.find((i) => i.id === activeId) || null;

  return (
    <div className="stage">
      <div className={`stage__halftone`} aria-hidden="true" />

      <div className={`folder folder--${phase}`}>
        <FolderInterior
          inserts={INSERTS}
          activeId={activeId}
          onSelect={openInsert}
          isOpen={phase === 'open'}
        />
        <FolderCover onOpen={openFolder} isOpen={phase === 'open'} />
      </div>

      {active && <Insert insert={active} onClose={closeInsert} />}
    </div>
  );
}
