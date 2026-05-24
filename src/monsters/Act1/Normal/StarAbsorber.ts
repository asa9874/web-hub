import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 별빛 흡수충 — 오염된 곤충 정령 | Act 1 일반 | 가중치 15 */
export class StarAbsorber extends SeqMonster {
  readonly name = '별빛 흡수충';
  readonly description = '성운 숲에 서식하던 광명충 정령. 빛을 흡수하는 특성이 뒤틀려 검은 나방이 되었다.';

  readonly patterns: AttackPattern[] = [
    {
      id: 'starlight_drain',
      name: '별빛 흡수',
      description: '8의 피해 + 약화 1 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 8, s); addStatus(t, 'weak', 1); },
    },
    {
      id: 'poison_sting',
      name: '독침',
      description: '독 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'poison', 3),
    },
  ];

  constructor() { super(55); }
}
