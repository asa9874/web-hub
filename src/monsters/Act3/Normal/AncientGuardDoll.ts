import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 고대 수호 기관 — 고대 자동 수호 기관 | Act 3 일반 | 가중치 25 */
export class AncientGuardDoll extends SeqMonster {
  readonly name = '고대 수호 기관';
  readonly subtitle = '고대 자동 수호 기관 | Act 3 일반';
  readonly lore = '고대인이 별의 심장 주위에 배치한 수호 자동인형. 수천 년이 지난 지금도 원래 명령을 수행한다. 관절부에서 별빛이 새어나온다.';
  readonly quote = '"접근 금지. 경고는 한 번만 합니다."';
  readonly statType = '고대 자동 수호 기관';
  readonly weight = 25;

  readonly patterns: AttackPattern[] = [
    {
      id: 'ancient_smash',
      name: '고대 강타',
      description: '15의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 15, s),
    },
    {
      id: 'guard_stance',
      name: '방어 자세',
      description: '방어도 22 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 22; },
    },
  ];

  constructor() { super(95); }
}
