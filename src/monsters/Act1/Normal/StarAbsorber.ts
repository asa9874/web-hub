import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 별빛 흡수충 — 오염된 곤충 정령 | Act 1 일반 | 가중치 15 */
export class StarAbsorber extends SeqMonster {
  readonly name = '별빛 흡수충';
  readonly subtitle = '오염된 곤충 정령 | Act 1 일반';
  readonly lore = '날개 폭이 80센티미터에 달하는 이 나방은, 원래 성운 숲을 밝히던 광명충이었다고 한다. 지금은 날개 전체가 짙은 먹빛이며, 날개 문양이 뒤집혀서 원래 빛을 방사하던 눈알 무늬들이 이제 주변의 빛을 빨아들이는 어두운 소용돌이 형태가 되었다. 날개를 펄럭일 때마다 주변 공기에서 희미한 별빛 파편들이 나방 쪽으로 빨려들어 소멸하는 것이 보인다. 몸통은 짙은 자주색 털로 덮여 있으며 더듬이는 검은 수정처럼 단단하다. 눈은 여섯 개의 복안으로, 각각 적자색 형광빛을 발한다. 날개 아랫면에는 독침이 여러 개 숨겨져 있다.';
  readonly quote = '"성운 숲의 반딧불이들이 달라진 것 같아요."';
  readonly statType = '오염된 곤충 정령';
  readonly weight = 15;

  readonly patterns: AttackPattern[] = [
    {
      id: 'starlight_drain',
      name: '별빛 흡수',
      description: '8의 피해 + 약화 1 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 8, s); addStatus(t, 'weak', 1); },
    },
    {
      id: 'poison_sting',
      name: '독침',
      description: '독 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'poison', 3),
    },
  ];

  constructor() { super(55); }
}
