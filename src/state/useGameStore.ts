import { useGameContext } from './GameContext.tsx';

export function useGameStore() {
  return useGameContext();
}
