import type { Entity, StatusEffects, StatusId } from '../types';

/** 빈 상태이상 객체를 새로 생성 (엔티티 초기화용) */
export function emptyStatuses(): StatusEffects {
  return { poison: 0, strength: 0, vulnerable: 0, weak: 0 };
}

/**
 * 공격 피해 적용.
 * - attacker.strength: 피해에 고정 추가
 * - attacker.weak: 피해 25% 감소
 * - target.vulnerable: 받는 피해 50% 증가
 * attacker를 생략하면 상태이상 보정 없이 기본 피해만 적용.
 */
export function applyDamage(target: Entity, amount: number, attacker?: Entity): void {
  let dmg = amount;
  if (attacker && attacker.statuses.strength > 0) dmg += attacker.statuses.strength;
  if (attacker && attacker.statuses.weak > 0)     dmg = Math.floor(dmg * 0.75);
  if (target.statuses.vulnerable > 0)              dmg = Math.floor(dmg * 1.5);

  const absorbed = Math.min(target.block, dmg);
  target.block -= absorbed;
  target.hp = Math.max(0, target.hp - (dmg - absorbed));
}

/**
 * 독 피해 처리 (방어도 무시, 직접 HP 감소).
 * stacks만큼 피해를 주고 stacks를 1 감소.
 * @returns 실제로 처리된 독 수치 (0이면 독 없음)
 */
export function applyPoison(target: Entity): number {
  const stacks = target.statuses.poison;
  if (stacks <= 0) return 0;
  target.hp = Math.max(0, target.hp - stacks);
  target.statuses.poison = stacks - 1;
  return stacks;
}

/** 상태이상 수치를 amount만큼 누적 (음수는 0 이하로 내려가지 않음) */
export function addStatus(target: Entity, id: StatusId, amount: number): void {
  target.statuses[id] = Math.max(0, target.statuses[id] + amount);
}

/** 지속 시간 기반 상태이상(vulnerable, weak)을 1 감소 */
export function tickDuration(target: Entity, id: StatusId): void {
  if (target.statuses[id] > 0) target.statuses[id]--;
}
