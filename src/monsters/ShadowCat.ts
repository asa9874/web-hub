import type { AttackPattern, Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { SeqMonster } from './SeqMonster';

/** 그림자 고양이 — 오염된 소형 정령 | Act 1 일반 | 가중치 20 */
export class ShadowCat extends SeqMonster {
  readonly name = '그림자 고양이';
  readonly description = '별빛항 항구를 떠돌던 고양이 정령이 암흑 안개에 동화된 형태.';

  readonly patterns: AttackPattern[] = [
    {
      id: 'shadow_scratch',
      name: '그림자 할퀴기',
      description: '6의 피해 2회',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 6, s); applyDamage(t, 6, s); },
    },
    {
      id: 'dark_leap',
      name: '어둠 도약',
      description: '취약 1 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'vulnerable', 1),
    },
  ];

  constructor() { super(40); }
}
