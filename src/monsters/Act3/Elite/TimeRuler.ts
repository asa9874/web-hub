import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 시간의 지배자 — 시공 지배 정령 | Act 3 엘리트 | 가중치 25 */
export class TimeRuler extends SeqMonster {
  readonly name = '시간의 지배자';
  readonly subtitle = '시공 지배 정령 | Act 3 엘리트';
  readonly lore = '이 존재 옆에 서면 시계를 믿을 수 없게 된다. 시간의 지배자는 인간형이지만 고위 정령 특유의 초연함이 전신에서 풍긴다. 키는 190센티미터 내외이며, 정석적인 마법사 로브를 착용했지만 그 소재가 다르다—천이 아니라 시간의 흐름 자체를 직조한 것 같은, 반투명하게 빛나는 은회색의 직물이다. 그 직물 위에서 과거와 미래의 이미지가 슬라이드처럼 반사된다. 두 손을 앞으로 뻗으면—양 손바닥에서 시간의 결정체가 나타난다. 왼손에는 과거의 이미지, 오른손에는 미래의 이미지가 결정화되어 있다. 눈의 홍채는 모래시계 패턴이다. 이 존재 주변에서는 자신이 방금 한 행동이 다시 반복되는 잔상이 보이며, 0.5초의 시간 지연이 발생한다.';
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
