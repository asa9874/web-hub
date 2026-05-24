import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 심연 괴수 — 오염된 대형 야수 | Act 1 엘리트 | 가중치 20 */
export class AbyssBeast extends SeqMonster {
  readonly name = '심연 괴수';
  readonly subtitle = '오염된 대형 야수 | Act 1 엘리트';
  readonly lore = '성운 숲 깊은 곳에 서식하던 별늑대 정령. 심연 에너지 파열 지점에 오래 노출되어 변질했다. 말 크기이며 털이 모두 검은 가시로 변해 있다.';
  readonly quote = '"성운 숲의 별늑대가 이렇게 변한 건지 모르겠어요."';
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
