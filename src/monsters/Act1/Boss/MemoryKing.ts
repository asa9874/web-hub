import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 기억 도적왕 — 감정 결집체 | Act 1 보스 | HP 200 | 페이즈 2: 힘+4 */
export class MemoryKing extends Boss {
  readonly name = '기억 도적왕';
  readonly description = '별빛항 주민들의 기억을 훔쳐 힘을 축적해온 고대의 도적. 수많은 기억이 응집된 최강의 악의.';
  readonly phaseChangeMessage = '기억 도적왕이 모든 기억을 해방했다!';

  readonly phasePatterns = [
    [
      {
        id: 'memory_absorb',
        name: '기억 흡수',
        description: '10의 피해 + 약화 2 부여',
        weight: 1,
        execute: (t: Entity, s: Entity) => { applyDamage(t, 10, s); addStatus(t, 'weak', 2); },
      },
      {
        id: 'memory_shield',
        name: '기억 방패',
        description: '방어도 15 획득',
        weight: 1,
        execute: (_t: Entity, s: Entity) => { s.block += 15; },
      },
      {
        id: 'memory_storm',
        name: '기억 폭풍',
        description: '독 4 + 취약 2 부여',
        weight: 1,
        execute: (t: Entity) => { addStatus(t, 'poison', 4); addStatus(t, 'vulnerable', 2); },
      },
      {
        id: 'weight_of_memory',
        name: '기억의 무게',
        description: '14의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 14, s),
      },
    ],
    [
      {
        id: 'memory_of_despair',
        name: '절망의 기억',
        description: '20의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 20, s),
      },
      {
        id: 'void',
        name: '공허',
        description: '취약 4 + 약화 4 부여',
        weight: 1,
        execute: (t: Entity) => { addStatus(t, 'vulnerable', 4); addStatus(t, 'weak', 4); },
      },
      {
        id: 'memory_combo',
        name: '기억 연격',
        description: '12의 피해 2회',
        weight: 1,
        execute: (t: Entity, s: Entity) => { applyDamage(t, 12, s); applyDamage(t, 12, s); },
      },
      {
        id: 'annihilation',
        name: '소멸',
        description: '35의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 35, s),
      },
    ],
  ];

  constructor() { super(200); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 4;
  }
}
