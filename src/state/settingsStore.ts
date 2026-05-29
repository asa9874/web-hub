import { create } from 'zustand';

export type TypingSpeed = 'slow' | 'normal' | 'fast';
export type TextScale   = 'small' | 'medium' | 'large';

interface SettingsState {
  typingSpeed:     TypingSpeed;
  textScale:       TextScale;
  isPanelOpen:     boolean;

  setTypingSpeed:  (s: TypingSpeed) => void;
  setTextScale:    (s: TextScale)   => void;
  togglePanel:     () => void;
  closePanel:      () => void;
}

// 설명 타이핑 지연 (ms/char)
export const DESC_SPEED: Record<TypingSpeed, number> = {
  slow:   40,
  normal: 18,
  fast:    5,
};

// 내러티브 타이핑 지연 (ms/char)
export const NARR_SPEED: Record<TypingSpeed, number> = {
  slow:   60,
  normal: 28,
  fast:    8,
};

const STORAGE_KEY = 'text_game_settings';

function loadSaved(): Pick<SettingsState, 'typingSpeed' | 'textScale'> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Pick<SettingsState, 'typingSpeed' | 'textScale'>;
  } catch { /* ignore */ }
  return { typingSpeed: 'normal', textScale: 'medium' };
}

const saved = loadSaved();

export const useSettingsStore = create<SettingsState>((set) => ({
  typingSpeed: saved.typingSpeed,
  textScale:   saved.textScale,
  isPanelOpen: false,

  setTypingSpeed: (typingSpeed) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      typingSpeed, textScale: useSettingsStore.getState().textScale,
    }));
    set({ typingSpeed });
  },

  setTextScale: (textScale) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      typingSpeed: useSettingsStore.getState().typingSpeed, textScale,
    }));
    set({ textScale });
  },

  togglePanel: () => set(s => ({ isPanelOpen: !s.isPanelOpen })),
  closePanel:  () => set({ isPanelOpen: false }),
}));
