import type { AttackPattern, Entity } from '../../../types';
import { addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 어둠의 사제 — 오염된 마법사형 | Act 1 엘리트 | 가중치 35 */
export class DarkPriest extends SeqMonster {
  readonly name = '어둠의 사제';
  readonly subtitle = '오염된 마법사형 | Act 1 엘리트';
  readonly lore = '로브는 원래 회색이었던 것 같지만, 지금은 칠흑색 안료를 두껍게 덧입힌 것처럼 빛을 삼키고 있다. 로브의 옷자락이 땅에 끌리며, 그 주변에 어둠의 문자들이 써졌다 지워지기를 반복한다. 얼굴은 지나치게 창백하고 광대뼈가 도드라져 있으며, 눈은 반쯤 감겨 있다. 홍채는 사라지고 흰자위에 검은 정맥처럼 균열이 퍼져 있다. 두 손에서 가장 특징적인 것이 나타난다—검은 비단처럼 가늘고 연속적인 어둠 문자들이 손목에서 손가락 끝까지 흘러내리는데, 문자들은 공중에서 잠시 부유하다가 사라진다. 문자가 쓰여지는 속도가 빠를수록 이 존재의 마력이 집중되고 있다는 신호다. 허리에는 금서가 여러 권 매달려 있다.';
  readonly quote = '"떠날 때는 스스로 돌아가지 않겠다고 했고요."';
  readonly imagePath = 'images/monster/book/dark_priest.png';
  readonly statType = '오염된 마법사형';
  readonly weight = 35;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'curse_barrage',
      name: '저주 포격',
      description: '독 4 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'poison', 4); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'dark_magic',
      name: '흑마술',
      description: '약화 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 3),
    },
    {
      id: 'dark_prayer',
      name: '암흑 기도',
      description: '방어도 12 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 12; },
    },
  ];

  constructor() { super(100); }
}
