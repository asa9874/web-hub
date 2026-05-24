import type { AttackPattern, Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { SeqMonster } from './SeqMonster';

/** 심연 괴수 — 심연에서 소환된 엘리트 | Act 1 엘리트 | 가중치 20 */
export class AbyssBeast extends SeqMonster {
  readonly name = '심연 괴수';
  readonly description = '별빛항 항만 아래 심연에서 암흑 에너지에 이끌려 올라온 거대 괴수.';
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'charge',
      name: '맹진',
      description: '18의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 18, s),
    },
    {
      id: 'roar',
      name: '포효',
      description: '약화 2 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'weak', 2); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'charge_2',
      name: '맹진',
      description: '18의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 18, s),
    },
    {
      id: 'charge_3',
      name: '맹진',
      description: '18의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 18, s),
    },
  ];

  constructor() { super(150); }
}
