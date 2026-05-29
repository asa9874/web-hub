import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';
import type { PlayerState, GameAction } from '../types/index.ts';
import { calculateOutcome } from '../engine/rng.ts';
import { applyOutcome }     from '../engine/state-mutations.ts';
import { resolveScene }     from '../engine/scene-resolver.ts';
import { scenes }           from '../data/scenes/index.ts';

const INITIAL_STATE: PlayerState = {
  hp: 100, maxHp: 100,
  corruption: 0, maxCorruption: 100,
  inventory: [],
  currentSceneId: 'apartment_start',
  isAlive: true,
};

function reducer(state: PlayerState, action: GameAction): PlayerState {
  switch (action.type) {
    case 'CHOOSE': {
      const scene  = resolveScene(state.currentSceneId, scenes);
      const choice = scene.choices.find(c => c.id === action.choiceId);
      if (!choice) return state;
      return applyOutcome(state, calculateOutcome(choice));
    }
    case 'RESET':
      return INITIAL_STATE;
  }
}

interface GameContextValue {
  state:    PlayerState;
  dispatch: Dispatch<GameAction>;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGameContext must be used within a GameProvider');
  return ctx;
}
