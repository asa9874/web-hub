import type { PlayerState, Outcome } from '../types/index.ts';

function clamp(v: number, min: number, max: number): number {
  return Math.min(Math.max(v, min), max);
}

export function applyOutcome(state: PlayerState, outcome: Outcome): PlayerState {
  const hp         = clamp(state.hp + (outcome.hpDelta ?? 0), 0, state.maxHp);
  const corruption = clamp(state.corruption + (outcome.corruptionDelta ?? 0), 0, state.maxCorruption);
  const gained     = outcome.itemsGained ?? [];
  const lost       = new Set(outcome.itemsLost ?? []);
  const inventory: string[] = [
    ...state.inventory.filter(id => !lost.has(id)),
    ...gained.filter(id => !state.inventory.includes(id)),
  ];
  return {
    ...state,
    hp,
    corruption,
    inventory,
    currentSceneId: outcome.nextSceneId,
    isAlive: hp > 0 && corruption < state.maxCorruption,
  };
}
