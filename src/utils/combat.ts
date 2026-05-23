import type { Entity } from '../types';

/** 방어도를 먼저 소모하고 남은 수치를 HP에 적용하는 순수 헬퍼 */
export function applyDamage(target: Entity, amount: number): void {
  const absorbed = Math.min(target.block, amount);
  target.block -= absorbed;
  target.hp = Math.max(0, target.hp - (amount - absorbed));
}
