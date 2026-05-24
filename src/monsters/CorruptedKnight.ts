import type { AttackPattern, Entity } from '../types';
import { applyDamage } from '../utils/combat';
import { SeqMonster } from './SeqMonster';

/** 오염된 수호 기사 — 오염된 엘리트 인간형 | Act 1 엘리트 | 가중치 45 */
export class CorruptedKnight extends SeqMonster {
  readonly name = '오염된 수호 기사';
  readonly description = '수호 기사단의 정예 병사. 암흑 파편에 깊이 물들어 잔혹한 심판자로 변질되었다.';
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'judgement_blade',
      name: '심판의 검',
      description: '20의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 20, s),
    },
    {
      id: 'iron_wall',
      name: '철벽 방어',
      description: '방어도 18 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 18; },
    },
    {
      id: 'rapid_slash',
      name: '연참',
      description: '10의 피해 2회',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 10, s); applyDamage(t, 10, s); },
    },
  ];

  constructor() { super(125); }
}
