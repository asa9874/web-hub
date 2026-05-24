import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 오염된 수호 기사 — 오염된 인간형 (고위) | Act 1 엘리트 | 가중치 45 */
export class CorruptedKnight extends SeqMonster {
  readonly name = '오염된 수호 기사';
  readonly subtitle = '오염된 인간형 (고위) | Act 1 엘리트';
  readonly lore = '기사단 고참 부관. 단장 실종 후 홀로 도시를 지키다 암흑 파편에 직접 잠식되었다. 등 뒤에 검은 날개 흔적이 있다.';
  readonly quote = '"케인 단장이 쓰러진 뒤, 부관은 혼자 방어선에 남았다."';
  readonly statType = '오염된 인간형 (고위)';
  readonly weight = 45;
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
