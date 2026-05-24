import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 공포의 결정체 — 감정 결정화 | Act 2 엘리트 | 가중치 35 */
export class FearCrystal extends SeqMonster {
  readonly name = '공포의 결정체';
  readonly description = '탑을 방문한 수백 년치 마법사들의 패닉과 실패가 축적되어 결정화된 존재.';
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'fear_radiation',
      name: '공포 방사',
      description: '취약 3 + 약화 3 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'vulnerable', 3); addStatus(t, 'weak', 3); },
    },
    {
      id: 'crystal_barrier',
      name: '수정 방벽',
      description: '방어도 24 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 24; },
    },
    {
      id: 'fear_shock',
      name: '공포 충격',
      description: '22의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 22, s),
    },
  ];

  constructor() { super(160); }
}
