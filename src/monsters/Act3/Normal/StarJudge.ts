import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 별의 심판관 — 고대인 집행 정령 | Act 3 일반 | 가중치 20 */
export class StarJudge extends SeqMonster {
  readonly name = '별의 심판관';
  readonly subtitle = '고대인 집행 정령 | Act 3 일반';
  readonly lore = '고대인의 의지를 집행하기 위해 창조된 정령. 침입자를 판결하고 형을 집행한다. 눈 부위에서 별빛 레이저가 방사된다.';
  readonly quote = '"당신은 이미 유죄 판결을 받았습니다."';
  readonly statType = '고대인 집행 정령';
  readonly weight = 20;

  readonly patterns: AttackPattern[] = [
    {
      id: 'light_of_judgment',
      name: '심판의 빛',
      description: '16의 피해 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 16, s); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'star_shield',
      name: '별의 방패',
      description: '방어도 20 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 20; },
    },
    {
      id: 'sentence',
      name: '선고',
      description: '약화 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 3),
    },
  ];

  constructor() { super(100); }
}
