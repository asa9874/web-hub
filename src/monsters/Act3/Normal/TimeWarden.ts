import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 시간의 파수꾼 — 시간 루프 잔상 | Act 3 일반 | 가중치 30 */
export class TimeWarden extends SeqMonster {
  readonly name = '시간의 파수꾼';
  readonly subtitle = '시간 루프 잔상 | Act 3 일반';
  readonly lore = '같은 장소를 맴돌고 있었다. 얼마나 오래인지는 알 수 없다. 이 존재는 시간 루프 속에서 형성된 잔상 정령이라—그 모습이 실루엣에 가깝다. 반투명한 회청색의 인간형 형태이지만, 명확한 경계선이 없다. 가장자리가 안개처럼 번지며, 그 번진 부분에서 시간의 흔적들이 보인다—같은 동작의 잔상이 0.3초 간격으로 겹쳐져 있는 것처럼. 걸음을 딛을 때마다 그 자리에 희미한 발자국 잔상이 0.5초 동안 남았다가 사라진다. 눈은 두 개의 흰 빛이며, 표정은 굳어있다. 이 존재를 공격하면, 공격이 그 잔상을 통과한 뒤 실체에 닿는 구조라 조준이 쉽지 않다. 손에는 모래시계를 들고 있으며, 그 안의 모래가 거꾸로 흐른다.';
  readonly quote = '"이미 이 순간은 수천 번 지났습니다."';
  readonly imagePath = 'images/monster/book/time_warden.png';
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
