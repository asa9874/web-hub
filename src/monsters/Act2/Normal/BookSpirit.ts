import type { AttackPattern, Entity } from '../../../types';
import { addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 오염된 서적 정령 — 금서 결박 정령 | Act 2 일반 | 가중치 10 */
export class BookSpirit extends SeqMonster {
  readonly name = '오염된 서적 정령';
  readonly subtitle = '금서 결박 정령 | Act 2 일반';
  readonly lore = '거대한 책이 먼저 보인다. 가로 1미터, 세로 70센티미터, 두께가 20센티미터에 달하는 검고 무거운 책이 허공에 펼쳐진 채 부유하고 있다. 표지는 인간의 피부를 닮은 소재로 만들어졌고, 거기에 빼곡하게 새겨진 저주 문자들이 심홍색으로 반짝인다. 이 책 위에 앉아 있는 것이 정령이다. 크기는 30센티미터 정도로 작지만 그 밀도가 보통이 아니다. 몸통은 반투명한 잉크 같은 질감의 검흑색이며, 경계가 번지듯 흔들린다. 눈은 두 개이며 황록색 형광빛이다. 손가락이 없는 손에서 끊임없이 저주 문자들이 흘러나와 공중에 궤적을 그린다. 그 문자들은 30센티미터쯤 이동한 후 소멸하지 않고 주변 공기에 흡수된다. 이 정령의 호흡을 맞출 때마다 책의 페이지가 혼자 넘어간다.';
  readonly quote = '"그 책은 스스로 읽히길 원합니다. 읽으면 안 됩니다."';
  readonly statType = '금서 결박 정령';
  readonly weight = 10;

  readonly patterns: AttackPattern[] = [
    {
      id: 'curse_script',
      name: '저주 문자',
      description: '독 4 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'poison', 4); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'sealed_tome',
      name: '봉인의 서',
      description: '약화 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 3),
    },
  ];

  constructor() { super(55); }
}
