import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 시간의 지배자 — 시공 지배 정령 | Act 3 엘리트 | 가중치 25 */
export class TimeRuler extends SeqMonster {
  readonly name = '시간의 지배자';
  readonly subtitle = '시공 지배 정령 | Act 3 엘리트';
  readonly lore = '시간과 공간의 흐름을 직접 제어하는 고위 정령. 그 주변에서는 시간이 불규칙하게 흐른다. 손을 뻗으면 과거와 미래가 동시에 보인다.';
  readonly quote = '"나에게는 당신의 다음 행동이 이미 과거입니다."';
  readonly statType = '시공 지배 정령';
  readonly weight = 25;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'time_stop',
      name: '시간 정지',
      description: '약화 4 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 4),
    },
    {
      id: 'time_reverse',
      name: '역류',
      description: '취약 4 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'vulnerable', 4),
    },
    {
      id: 'time_shock',
      name: '시간 충격',
      description: '30의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 30, s),
    },
  ];

  constructor() { super(200); }
}
