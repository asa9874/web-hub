import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';
import type { PlayerState, GameAction } from '../types/index.ts';
import { calculateOutcome } from '../engine/rng.ts';
import { applyOutcome }     from '../engine/state-mutations.ts';
import { resolveScene }     from '../engine/scene-resolver.ts';
import { scenes }           from '../data/scenes/index.ts';

const INITIAL_PLAYER: PlayerState = {
  hp: 100, maxHp: 100,
  corruption: 0, maxCorruption: 100,
  inventory: [],
  currentSceneId: 'apartment_start',
  isAlive: true,
};

interface GameState {
  player:        PlayerState;
  narrativeText: string;
}

const INITIAL_STATE: GameState = { player: INITIAL_PLAYER, narrativeText: '' };

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CHOOSE': {
      const scene  = resolveScene(state.player.currentSceneId, scenes);
      const choice = scene.choices.find(c => c.id === action.choiceId);
      if (!choice) return state;
      const outcome = calculateOutcome(choice);
      return {
        player:        applyOutcome(state.player, outcome),
        narrativeText: outcome.narrativeText,
      };
    }
    case 'RESET':
      return INITIAL_STATE;
    case 'DEBUG_PATCH': {
      const merged = { ...state.player, ...action.patch };
      return {
        player:        { ...merged, isAlive: merged.hp > 0 },
        narrativeText: '',
      };
    }
  }
}

export interface GameContextValue {
  state:         PlayerState;
  narrativeText: string;
  dispatch:      Dispatch<GameAction>;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <GameContext.Provider value={{ state: gameState.player, narrativeText: gameState.narrativeText, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGameContext must be used within a GameProvider');
  return ctx;
}
