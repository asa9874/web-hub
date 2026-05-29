import { create } from 'zustand';

export type TypingSpeed = 'slow' | 'normal' | 'fast';
export type TextScale   = 'small' | 'medium' | 'large';

interface SettingsState {
  typingSpeed:    TypingSpeed;
  textScale:      TextScale;
  soundEnabled:   boolean;
  isPanelOpen:    boolean;

  setTypingSpeed: (s: TypingSpeed) => void;
  setTextScale:   (s: TextScale)   => void;
  setSoundEnabled:(v: boolean)     => void;
  togglePanel:    () => void;
  closePanel:     () => void;
}

export const DESC_SPEED: Record<TypingSpeed, number> = { slow: 40, normal: 18, fast:  5 };
export const NARR_SPEED: Record<TypingSpeed, number> = { slow: 60, normal: 28, fast:  8 };

const STORAGE_KEY = 'text_game_settings';

interface Saved { typingSpeed: TypingSpeed; textScale: TextScale; soundEnabled: boolean; }

function loadSaved(): Saved {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Saved;
  } catch { /* ignore */ }
  return { typingSpeed: 'normal', textScale: 'medium', soundEnabled: true };
}

function persist(patch: Partial<Saved>): void {
  const cur = loadSaved();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...cur, ...patch }));
}

const saved = loadSaved();

export const useSettingsStore = create<SettingsState>((set) => ({
  typingSpeed:    saved.typingSpeed,
  textScale:      saved.textScale,
  soundEnabled:   saved.soundEnabled ?? true,
  isPanelOpen:    false,

  setTypingSpeed:  (typingSpeed)  => { persist({ typingSpeed });  set({ typingSpeed });  },
  setTextScale:    (textScale)    => { persist({ textScale });    set({ textScale });    },
  setSoundEnabled: (soundEnabled) => { persist({ soundEnabled }); set({ soundEnabled }); },

  togglePanel: () => set(s => ({ isPanelOpen: !s.isPanelOpen })),
  closePanel:  () => set({ isPanelOpen: false }),
}));
