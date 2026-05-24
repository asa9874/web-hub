import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 차원 균열체 — 인과율 생성체 | Act 3 일반 | 가중치 15 */
export class DimensionRift extends SeqMonster {
  readonly name = '차원 균열체';
  readonly subtitle = '인과율 생성체 | Act 3 일반';
  readonly lore = '이것은 생명체라는 개념에 맞지 않는다. 인과율이 무너진 자리에서 생겨난 이 존재는, 그 모습이 한시도 같지 않다. 기본적인 윤곽은 인간형이지만—그 경계선이 지속적으로 일그러진다. 왼팔이 있다고 생각하면 사라지고, 없다고 생각하면 나타난다. 색조 자체가 특이하다: 보라색, 청록색, 검은색이 층층이 겹쳐지며 끊임없이 층위가 바뀐다. 이것이 이동할 때 공간이 접혀지는 것처럼 주변 공기가 일그러지며, 뒤의 배경이 굴절되어 보인다. 가장 이상한 것은—이 존재와 눈이 마주치면, 그 눈이 어디에 있는지 알 수 없다. 얼굴이 고정되어 있지 않아서다. 내부에서 짧은 섬광 형태의 균열이 끊임없이 생성되었다가 닫힌다.';
  readonly quote = '"원인과 결과가 뒤바뀌었습니다. 당신이 먼저 쓰러진 다음 싸움이 시작됩니다."';
  readonly imagePath = 'images/monster/book/dimension_rift.png';
  readonly statType = '인과율 생성체';
  readonly weight = 15;

  readonly patterns: AttackPattern[] = [
    {
      id: 'rift_shock',
      name: '균열 충격',
      description: '20의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 20, s),
    },
    {
      id: 'dimension_warp',
      name: '차원 왜곡',
      description: '취약 2 + 약화 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'vulnerable', 2); addStatus(t, 'weak', 2); },
    },
  ];

  constructor() { super(80); }
}
