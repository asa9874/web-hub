import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 시간의 파수꾼 — 시간 루프 잔상 | Act 3 일반 | 가중치 30 */
export class TimeWarden extends SeqMonster {
  readonly name = '시간의 파수꾼';
  readonly subtitle = '시간 루프 잔상 | Act 3 일반';
  readonly lore = '별의 심장 주변 시간 루프 속에서 생성된 잔상 정령. 같은 순간을 무한히 반복하며 침입자를 저지한다. 그 모습이 실루엣처럼 흔들린다.';
  readonly quote = '"이미 이 순간은 수천 번 지났습니다."';
  readonly statType = '시간 루프 잔상';
  readonly weight = 30;

  readonly patterns: AttackPattern[] = [
    {
      id: 'time_slash',
      name: '시간 참격',
      description: '18의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 18, s),
    },
    {
      id: 'time_shield',
      name: '시간 방패',
      description: '방어도 15 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 15; },
    },
    {
      id: 'time_combo',
      name: '시간 연격',
      description: '12의 피해 2회',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 12, s); applyDamage(t, 12, s); },
    },
  ];

  constructor() { super(90); }
}
