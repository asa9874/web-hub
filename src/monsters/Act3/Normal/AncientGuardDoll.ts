import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 고대 수호 기관 — 고대 자동 수호 기관 | Act 3 일반 | 가중치 25 */
export class AncientGuardDoll extends SeqMonster {
  readonly name = '고대 수호 기관';
  readonly subtitle = '고대 자동 수호 기관 | Act 3 일반';
  readonly lore = '고대인의 기술이 이런 것이었다는 것이 경이롭다. 이 자동인형은 수천 년이 지난 지금도 원래 설계 의도대로 작동하고 있다. 키는 2미터 남짓으로, 소재는 현대 마법사들도 재현하지 못하는 별빛 함유 합금—검은빛을 기반으로 하되, 광원이 닿으면 심청색과 금색 빛이 내부에서 굴절하며 나온다. 외형은 갑주 형태이지만 관절부에서 별빛이 직접 새어나온다—별의 심장 에너지가 동력원이다. 눈 부위에는 두 개의 별빛 렌즈가 장착되어 있으며, 밝고 냉담한 청백색으로 빛난다. 등에는 고대인의 언어로 된 명령 코드가 부조로 새겨져 있다. 이 명령 코드는 한 줄뿐이다: \'침입자를 소멸시켜라.\'';
  readonly quote = '"접근 금지. 경고는 한 번만 합니다."';
  readonly imagePath = 'images/monster/book/ancient_guard_doll.png';
  readonly statType = '고대 자동 수호 기관';
  readonly weight = 25;

  readonly patterns: AttackPattern[] = [
    {
      id: 'ancient_smash',
      name: '고대 강타',
      description: '15의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 15, s),
    },
    {
      id: 'guard_stance',
      name: '방어 자세',
      description: '방어도 22 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 22; },
    },
  ];

  constructor() { super(95); }
}
