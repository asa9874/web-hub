import type { PlayerState, ChoiceRequirement } from '../types/index.ts';
import type { Item } from '../types/index.ts';

export function meetsRequirement(
  state:    PlayerState,
  required: ChoiceRequirement | undefined,
): boolean {
  if (!required) return true;
  if (required.items && !required.items.every(id => state.inventory.includes(id))) return false;
  if (required.minHp         !== undefined && state.hp         <  required.minHp)         return false;
  if (required.maxCorruption !== undefined && state.corruption >  required.maxCorruption) return false;
  return true;
}

export function getLockReason(
  state:       PlayerState,
  required:    ChoiceRequirement,
  itemCatalog: Record<string, Item>,
): string {
  if (required.items) {
    const missing = required.items
      .filter(id => !state.inventory.includes(id))
      .map(id => itemCatalog[id]?.name ?? id);
    if (missing.length > 0) return `필요 아이템: ${missing.join(', ')}`;
  }
  if (required.minHp !== undefined && state.hp < required.minHp)
    return `HP ${required.minHp} 이상 필요 (현재 ${state.hp})`;
  if (required.maxCorruption !== undefined && state.corruption > required.maxCorruption)
    return `오염도 ${required.maxCorruption} 이하 필요 (현재 ${state.corruption})`;
  return '';
}
