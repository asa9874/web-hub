import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';
import type { PlayerState, GameAction } from '../types/index.ts';
import { calculateOutcome }   from '../engine/rng.ts';
import { applyOutcome }       from '../engine/state-mutations.ts';
import { resolveScene }       from '../engine/scene-resolver.ts';
import { meetsRequirement }   from '../engine/requirements.ts';
import { scenes }             from '../data/scenes/index.ts';
import { items }              from '../data/items/index.ts';

const INITIAL_PLAYER: PlayerState = {
  hp: 100, maxHp: 100,
  corruption: 0, maxCorruption: 100,
  inventory: [],
  currentSceneId: 'apartment_start',
  isAlive: true,
  chosenScenes: [],
  usedChoices:  [],
};

interface GameState {
  player:        PlayerState;
  narrativeText: string;
}

const INITIAL_STATE: GameState = { player: INITIAL_PLAYER, narrativeText: '' };

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {

    case 'CHOOSE': {
      const sceneId = state.player.currentSceneId;
      if (state.player.usedChoices.includes(action.choiceId)) return state;
      const scene  = resolveScene(sceneId, scenes);
      const choice = scene.choices.find(c => c.id === action.choiceId);
      if (!choice) return state;
      if (!meetsRequirement(state.player, choice.required)) return state;
      const outcome      = calculateOutcome(choice);
      const next         = applyOutcome(state.player, outcome);
      const usedChoices  = [...state.player.usedChoices, action.choiceId];
      const chosenScenes = state.player.chosenScenes.includes(sceneId)
        ? state.player.chosenScenes
        : [...state.player.chosenScenes, sceneId];
      return {
        player:        { ...next, usedChoices, chosenScenes },
        narrativeText: outcome.narrativeText,
      };
    }

    case 'RESET':
      return INITIAL_STATE;

    case 'ENTER_ROOM':
      return {
        player:        { ...state.player, currentSceneId: action.sceneId },
        narrativeText: '',
      };

    case 'ROOM_ENTER': {
      const hp         = clamp(state.player.hp + action.hpDelta, 0, state.player.maxHp);
      const corruption = clamp(state.player.corruption + action.corruptionDelta, 0, state.player.maxCorruption);
      const sceneId    = action.sceneId ?? state.player.currentSceneId;
      return {
        player:        { ...state.player, hp, corruption, currentSceneId: sceneId,
                         isAlive: hp > 0 && corruption < state.player.maxCorruption },
        narrativeText: action.message,
      };
    }

    case 'USE_ITEM': {
      const item = items[action.itemId];
      if (!item || !state.player.inventory.includes(action.itemId)) return state;

      const effect     = item.effect ?? {};
      const hp         = clamp(state.player.hp + (effect.hpDelta ?? 0), 0, state.player.maxHp);
      const corruption = clamp(state.player.corruption + (effect.corruptionDelta ?? 0), 0, state.player.maxCorruption);
      const inventory  = state.player.inventory.filter(id => id !== action.itemId);

      const narrative = effect.hpDelta || effect.corruptionDelta
        ? `${item.name}을(를) 사용했다.`
        : `${item.name}은(는) 사용할 수 없다.`;

      return {
        player:        { ...state.player, hp, corruption, inventory,
                         isAlive: hp > 0 && corruption < state.player.maxCorruption },
        narrativeText: narrative,
      };
    }

    case 'LOAD_SAVE':
      return {
        player:        { ...action.data,
                         chosenScenes: action.data.chosenScenes ?? [],
                         usedChoices:  action.data.usedChoices  ?? [],
                         isAlive: action.data.hp > 0 && action.data.corruption < action.data.maxCorruption },
        narrativeText: '',
      };

    case 'SET_NARRATIVE':
      return { ...state, narrativeText: action.text };

    case 'DEBUG_PATCH': {
      const merged = { ...state.player, ...action.patch };
      return {
        player:        { ...merged, isAlive: merged.hp > 0 && merged.corruption < merged.maxCorruption },
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
