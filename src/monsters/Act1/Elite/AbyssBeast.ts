import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 심연 괴수 — 오염된 대형 야수 | Act 1 엘리트 | 가중치 20 */
export class AbyssBeast extends SeqMonster {
  readonly name = '심연 괴수';
  readonly subtitle = '오염된 대형 야수 | Act 1 엘리트';
  readonly lore = '별늑대의 형체는 남아있지만, 이 존재를 늑대라 부르기엔 너무 변했다. 말 크기의 이 야수는 원래 은빛 털을 가졌을 것이다. 지금은 털이 하나도 없고—모든 털이 검은 가시로 변해 있다. 5~10센티미터 길이의 광택 없는 검은 가시들이 몸 전체를 뒤덮고 있으며, 움직일 때마다 서로 마찰하는 소리가 난다. 피부는 가시 사이로 흑자색이 보이고, 근육의 윤곽이 뚜렷하게 드러난다. 눈은 두 개이며, 각막 전체가 짙은 핏빛 적색으로 물들어 있고 동공은 사라졌다. 입을 벌리면 이빨 사이에서도 검은 안개가 흘러나온다. 발걸음이 땅에 닿을 때 발자국 주변에 심연색 파문이 퍼진다.';
  readonly quote = '"성운 숲의 별늑대가 이렇게 변한 건지 모르겠어요."';
  readonly imagePath = 'images/monster/book/abyss_beast.png';
  readonly statType = '오염된 대형 야수';
  readonly weight = 20;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'charge',
      name: '맹진',
      description: '18의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 18, s),
    },
    {
      id: 'roar',
      name: '포효',
      description: '약화 2 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'weak', 2); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'charge_2',
      name: '맹진',
      description: '18의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 18, s),
    },
    {
      id: 'charge_3',
      name: '맹진',
      description: '18의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 18, s),
    },
  ];

  constructor() { super(150); }
}
