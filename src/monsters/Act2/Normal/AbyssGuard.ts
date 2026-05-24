import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 심연 경비병 — 오염된 마법 자동인형 | Act 2 일반 | 가중치 30 */
export class AbyssGuard extends SeqMonster {
  readonly name = '심연 경비병';
  readonly subtitle = '오염된 마법 자동인형 | Act 2 일반';
  readonly lore = '탑을 지키도록 제작된 경비 자동인형. 암흑 에너지 감염으로 판단 기준이 역전되었다. 눈 부위에 심홍색 광점이 두 개 있다.';
  readonly quote = '"이제 살아있는 자를 침입자로 처리합니다."';
  readonly statType = '오염된 마법 자동인형';
  readonly weight = 30;

  readonly patterns: AttackPattern[] = [
    {
      id: 'guard_strike',
      name: '경비 타격',
      description: '12의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 12, s),
    },
    {
      id: 'defense_stance',
      name: '방어 자세',
      description: '방어도 14 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 14; },
    },
  ];

  constructor() { super(80); }
}
