import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 오염된 수호 기사 — 오염된 인간형 (고위) | Act 1 엘리트 | 가중치 45 */
export class CorruptedKnight extends SeqMonster {
  readonly name = '오염된 수호 기사';
  readonly subtitle = '오염된 인간형 (고위) | Act 1 엘리트';
  readonly lore = '기사단 문장이 새겨진 갑주는 부식된 흑철빛으로 얼룩져 있다. 기사단 표준 갑주의 형태이지만 전체적으로 두꺼운 암흑 에너지의 피막이 겹쳐 있어, 갑주 표면이 번들거리는 유류막처럼 보인다. 가장 눈에 띄는 것은 등 부분이다—어깨에서 양 옆으로 4분의 1쯤 자란 것 같은 형태의 검은 날개 유체가 뿌리 형태로만 남아 있다. 완전히 자라지 못하고 부러진 날개처럼 처진 이 구조체에서는 검은 깃털 같은 파편들이 끊임없이 떨어지며 허공에서 연기처럼 소멸한다. 투구 아랫부분 눈 슬릿에서는 흰색에 가까운 빛이 새어나오며, 그 빛은 분노라기보다 고통처럼 보인다. 검의 날 전체가 어둠 에너지로 코팅되어 있다.';
  readonly quote = '"케인 단장이 쓰러진 뒤, 부관은 혼자 방어선에 남았다."';
  readonly imagePath = 'images/monster/book/corrupted_knight.png';
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
