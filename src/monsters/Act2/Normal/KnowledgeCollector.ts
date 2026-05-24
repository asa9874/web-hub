import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 지식 수집귀 — 오염된 지식 정령 | Act 2 일반 | 가중치 25 */
export class KnowledgeCollector extends SeqMonster {
  readonly name = '지식 수집귀';
  readonly subtitle = '오염된 지식 정령 | Act 2 일반';
  readonly lore = '도서관 사서처럼 보이지만, 그건 잘못된 인상이다. 키는 성인보다 약간 작고 체형은 가늘며, 겉에 걸친 것은 탄화된 것 같은 어두운 로브다. 얼굴은 지나치게 큰 눈을 가지고 있으며—눈의 홍채는 완전히 문자로 채워져 있다. 아주 작은 글씨들이 동심원을 이루며 빽빽하게 쓰여 있다. 손에서 흘러나오는 어둠의 문자들은 마치 연기처럼 손가락 사이를 통과해 공중에 쓰여지는데, 이 문자들은 무작위한 것이 아니라 이 정령이 흡수한 지식의 단편들이다. 허리 주변에는 여러 권의 작은 책이 마치 위성처럼 공전하고 있으며, 그 책들의 페이지가 혼자 뒤집히며 내용이 바뀐다. 검지를 뻗으면 거기서 묵빛 에너지가 집중되어 저주 포고가 방사된다.';
  readonly quote = '"도서관의 책들이 스스로 자리를 바꾼다고 보고가 들어왔을 때, 우리는 웃었습니다."';
  readonly statType = '오염된 지식 정령';
  readonly weight = 25;

  readonly patterns: AttackPattern[] = [
    {
      id: 'curse_decree',
      name: '저주 포고',
      description: '독 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'poison', 3),
    },
    {
      id: 'forbidden_throw',
      name: '금서 투척',
      description: '12의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 12, s),
    },
  ];

  constructor() { super(65); }
}
