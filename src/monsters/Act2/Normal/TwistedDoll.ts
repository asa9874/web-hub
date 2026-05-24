import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 뒤틀린 인형 — 오염된 마법 인형 | Act 2 일반 | 가중치 20 */
export class TwistedDoll extends SeqMonster {
  readonly name = '뒤틀린 인형';
  readonly subtitle = '오염된 마법 인형 | Act 2 일반';
  readonly lore = '관절 마디마다 검은 에너지가 스며나오는 이 인형은 걷는 게 아니라 삐걱거리며 이동한다. 키는 어린아이 정도이며, 몸 전체가 도자기 같은 흰 도료로 도색되어 있다—그런데 그 도료가 여기저기 박리되어 아래의 회색 금속 뼈대가 보인다. 특히 가슴과 허벅지 부위는 도료가 크게 떨어져 나갔다. 얼굴은 인형 특유의 밀랍 표정인데—표정 자체는 웃는 얼굴로 고정되어 있지만 그 눈에서 눈물처럼 검은 액체가 흘러내린다. 눈의 색은 유리구슬 같은 탁한 파란색이지만 생기가 없다. 등 뒤에는 원래 태엽 구멍이 있는데, 지금은 그 구멍에서 검은 에너지가 배어나오며 인형을 자가 구동시키고 있다. 움직임이 부자연스러워서, 마치 조종당하는 것 같다. 사실 그게 맞다.';
  readonly quote = '"우리가 만든 것들이 맞는데, 왜 우리를 보고 고개를 젓는지 모르겠습니다."';
  readonly statType = '오염된 마법 인형';
  readonly weight = 20;

  readonly patterns: AttackPattern[] = [
    {
      id: 'doll_strike',
      name: '인형 타격',
      description: '9의 피해 2회',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 9, s); applyDamage(t, 9, s); },
    },
    {
      id: 'overload',
      name: '과부하',
      description: '약화 2 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 2),
    },
    {
      id: 'repair_mode',
      name: '수리 모드',
      description: '방어도 8 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 8; },
    },
  ];

  constructor() { super(75); }
}
