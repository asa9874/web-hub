import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 심연의 마법사 — 오염된 고위 마법사 | Act 2 엘리트 | 가중치 25 */
export class AbyssMage extends SeqMonster {
  readonly name = '심연의 마법사';
  readonly subtitle = '오염된 고위 마법사 | Act 2 엘리트';
  readonly lore = '고위 마법사의 위엄은 로브의 천 하나에만 남아있다. 한때 탑의 연구원들이 착용하던 고급 자수 로브의 윤곽이 있지만, 그 자수는 완전히 암흑 에너지에 잠식되어 검게 타버렸다. 키는 크고 체형은 말랐으며, 긴 로브가 발밑까지 흘러내린다. 눈이 가장 충격적이다—두 눈에서 검은 안개가 끊임없이 흘러나온다. 짙은 묵색 안개가 눈꼬리부터 눈 밖으로 새어나와 공중에서 증발한다. 마치 눈물이 검은 안개로 바뀐 것처럼. 손가락이 긴 손 주변에는 심연의 에너지가 보랏빛 소용돌이 형태로 응집되어 있으며, 마력을 집중할수록 이 소용돌이의 밀도가 높아진다. 머리카락은 일부가 검게 타버려 불규칙하게 끊겨 있다.';
  readonly quote = '"아름다운 지식이야. 돌아올 수가 없어."';
  readonly imagePath = 'images/monster/book/abyss_mage.png';
  readonly statType = '오염된 고위 마법사';
  readonly weight = 25;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'poison_cloud',
      name: '독 구름',
      description: '독 6 + 약화 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'poison', 6); addStatus(t, 'weak', 2); },
    },
    {
      id: 'dark_power',
      name: '암흑 마력',
      description: '힘 2 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => addStatus(s, 'strength', 2),
    },
    {
      id: 'abyss_barrage',
      name: '심연 포격',
      description: '20의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 20, s),
    },
  ];

  constructor() { super(140); }
}
