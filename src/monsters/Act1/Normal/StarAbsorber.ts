import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 별빛 흡수충 — 오염된 곤충 정령 | Act 1 일반 | 가중치 15 */
export class StarAbsorber extends SeqMonster {
  readonly name = '별빛 흡수충';
  readonly subtitle = '오염된 곤충 정령 | Act 1 일반';
  readonly lore = '성운 숲에 서식하던 광명충 정령. 빛을 흡수해 에너지로 전환하는 특성이 뒤틀려, 커다란 검은 나방 형태가 되었다.';
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
