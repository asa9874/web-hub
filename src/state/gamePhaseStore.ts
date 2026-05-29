import { create } from 'zustand';

export type GamePhase = 'menu' | 'prologue' | 'playing';

interface GamePhaseStore {
  phase:      GamePhase;
  toMenu:     () => void;
  toPrologue: () => void;
  toPlaying:  () => void;
}

export const useGamePhaseStore = create<GamePhaseStore>((set) => ({
  phase:      'menu',
  toMenu:     () => set({ phase: 'menu' }),
  toPrologue: () => set({ phase: 'prologue' }),
  toPlaying:  () => set({ phase: 'playing' }),
}));
