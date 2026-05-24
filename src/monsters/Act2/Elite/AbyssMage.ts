import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 심연의 마법사 — 오염된 고위 마법사 | Act 2 엘리트 | 가중치 25 */
export class AbyssMage extends SeqMonster {
  readonly name = '심연의 마법사';
  readonly subtitle = '오염된 고위 마법사 | Act 2 엘리트';
  readonly lore = '탑의 고위 연구원이 심연과 연결된 통로를 직접 들여다보다 완전히 잠식되었다. 눈에서 검은 안개가 끊임없이 흘러나온다.';
  readonly quote = '"아름다운 지식이야. 돌아올 수가 없어."';
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
