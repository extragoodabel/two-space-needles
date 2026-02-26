import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const MUSIC_KEY = "tsn_audio_music_enabled_v1";
const SFX_KEY = "tsn_audio_sfx_enabled_v1";

function readBool(key, defaultValue = true) {
  try {
    const v = localStorage.getItem(key);
    if (v === null) return defaultValue;
    return v === "true";
  } catch {
    return defaultValue;
  }
}

function writeBool(key, value) {
  try {
    localStorage.setItem(key, value ? "true" : "false");
  } catch (_) {}
}

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [musicEnabled, setMusicEnabled] = useState(() => readBool(MUSIC_KEY, true));
  const [sfxEnabled, setSfxEnabled] = useState(() => readBool(SFX_KEY, true));
  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
  const [audioModalOpen, setAudioModalOpen] = useState(false);
  const musicAudioRef = useRef(null);
  const unlockSfxRef = useRef(null);
  const openCreditsRef = useRef(null);
  const playShootingSoundRef = useRef(null);
  const firstInteractionDoneRef = useRef(false);
  const isUnlockingRef = useRef(false);
  const musicEnabledRef = useRef(musicEnabled);
  musicEnabledRef.current = musicEnabled;

  const MUSIC_VOLUME = 0.04; // Low so music stays background; mobile speakers often feel loud

  const toggleMusic = useCallback(() => {
    setMusicEnabled((prev) => {
      const next = !prev;
      writeBool(MUSIC_KEY, next);
      const el = musicAudioRef.current;
      if (el) {
        if (next) {
          el.volume = MUSIC_VOLUME;
          el.play().catch(() => {});
        } else {
          el.pause();
          el.currentTime = 0;
        }
      }
      return next;
    });
  }, []);

  const toggleSfx = useCallback(() => {
    setSfxEnabled((prev) => {
      const next = !prev;
      writeBool(SFX_KEY, next);
      return next;
    });
  }, []);

  const openAudioModal = useCallback(() => setAudioModalOpen(true), []);
  const closeAudioModal = useCallback(() => setAudioModalOpen(false), []);

  // Register callback for MapScene to unlock its SFX elements on first interaction
  const registerUnlockSfxCallback = useCallback((fn) => {
    unlockSfxRef.current = fn;
  }, []);

  const registerOpenCreditsCallback = useCallback((fn) => {
    openCreditsRef.current = fn;
  }, []);

  const registerPlayShootingSoundCallback = useCallback((fn) => {
    playShootingSoundRef.current = fn;
  }, []);

  const onSeeCredits = useCallback(() => {
    playShootingSoundRef.current?.();
    closeAudioModal();
    openCreditsRef.current?.();
  }, [closeAudioModal]);

  const onCloseAudioModal = useCallback(() => {
    playShootingSoundRef.current?.();
    closeAudioModal();
  }, [closeAudioModal]);

  useEffect(() => {
    const handleFirst = () => {
      if (firstInteractionDoneRef.current) return;
      firstInteractionDoneRef.current = true;
      isUnlockingRef.current = true;
      setIsAudioUnlocked(true);
      // Do NOT prime SFX elements here—on mobile that can cause a burst. Prime after the guard clears.
      const el = musicAudioRef.current;
      if (el && musicEnabledRef.current) {
        el.volume = MUSIC_VOLUME;
        el.play().catch(() => {});
      }
      // Clear after first tap completes: on mobile, synthetic click fires after pointerup.
      // Then prime SFX elements so they're ready for the next interaction (no burst during first tap).
      const unlockGuardMs = 300;
      setTimeout(() => {
        isUnlockingRef.current = false;
        unlockSfxRef.current?.();
      }, unlockGuardMs);
      window.removeEventListener("pointerdown", handleFirst);
      window.removeEventListener("touchstart", handleFirst);
    };
    window.addEventListener("pointerdown", handleFirst, { passive: true });
    window.addEventListener("touchstart", handleFirst, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", handleFirst);
      window.removeEventListener("touchstart", handleFirst);
    };
  }, []);

  // When music is toggled on after unlock, start playback
  useEffect(() => {
    if (!isAudioUnlocked || !musicEnabled) return;
    const el = musicAudioRef.current;
    if (el) {
      el.volume = MUSIC_VOLUME;
      el.play().catch(() => {});
    }
  }, [isAudioUnlocked, musicEnabled]);

  const value = {
    musicEnabled,
    sfxEnabled,
    isAudioUnlocked,
    isUnlockingRef,
    toggleMusic,
    toggleSfx,
    openAudioModal,
    closeAudioModal,
    audioModalOpen,
    registerUnlockSfxCallback,
    registerOpenCreditsCallback,
    registerPlayShootingSoundCallback,
    onSeeCredits,
    onCloseAudioModal,
  };

  return (
    <AudioContext.Provider value={value}>
      <audio
        ref={musicAudioRef}
        src="/audio/thrift-shop-8bit-cover-oscar.mp3"
        preload="auto"
        loop
        playsInline
      />
      {children}
      {audioModalOpen && (
        <>
          <div
            className="exhibit-audio-backdrop"
            aria-hidden
            onClick={onCloseAudioModal}
          />
          <div className="exhibit-audio-modal" role="dialog" aria-labelledby="audio-modal-title" aria-modal="true">
            <div className="exhibit-audio-modal-inner">
              <div className="exhibit-audio-modal-header">
                <h2 id="audio-modal-title" className="exhibit-audio-modal-title">Audio</h2>
                <button
                  type="button"
                  className="exhibit-audio-modal-close"
                  onClick={onCloseAudioModal}
                  aria-label="Close audio settings"
                >
                  ×
                </button>
              </div>
              <div className="exhibit-audio-modal-body">
                <div className="exhibit-audio-row">
                  <span className="exhibit-audio-label">Music</span>
                  <button
                    type="button"
                    className={`exhibit-audio-toggle ${musicEnabled ? "is-on" : ""}`}
                    onClick={toggleMusic}
                    aria-pressed={musicEnabled}
                  >
                    {musicEnabled ? "On" : "Off"}
                  </button>
                </div>
                <div className="exhibit-audio-row">
                  <span className="exhibit-audio-label">Effects</span>
                  <button
                    type="button"
                    className={`exhibit-audio-toggle ${sfxEnabled ? "is-on" : ""}`}
                    onClick={toggleSfx}
                    aria-pressed={sfxEnabled}
                  >
                    {sfxEnabled ? "On" : "Off"}
                  </button>
                </div>
                <div className="exhibit-audio-credits-wrap">
                  <button
                    type="button"
                    className="exhibit-audio-see-credits"
                    onClick={onSeeCredits}
                  >
                    See Credits
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AudioContext.Provider>
  );
}

const defaultAudioContext = {
  musicEnabled: true,
  sfxEnabled: true,
  isAudioUnlocked: false,
  isUnlockingRef: { current: false },
  toggleMusic: () => {},
  toggleSfx: () => {},
  openAudioModal: () => {},
  closeAudioModal: () => {},
  audioModalOpen: false,
  registerUnlockSfxCallback: () => {},
  registerOpenCreditsCallback: () => {},
  registerPlayShootingSoundCallback: () => {},
  onSeeCredits: () => {},
  onCloseAudioModal: () => {},
};

export function useAudio() {
  const ctx = useContext(AudioContext);
  return ctx ?? defaultAudioContext;
}
