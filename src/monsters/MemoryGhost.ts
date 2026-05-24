import type { AttackPattern, Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { SeqMonster } from './SeqMonster';

/** 망각의 도깨비 — 소형 기억 정령 | Act 1 일반 | 가중치 30 */
export class MemoryGhost extends SeqMonster {
  readonly name = '망각의 도깨비';
  readonly description = '별빛항 주민들이 잃어버린 기억 조각이 정령으로 결집된 형태.';

  readonly patterns: AttackPattern[] = [
    {
      id: 'memory_gnaw',
      name: '기억 갉기',
      description: '8의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 8, s),
    },
    {
      id: 'touch_of_oblivion',
      name: '망각의 손길',
      description: '약화 2 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 2),
    },
  ];

  constructor() { super(45); }
}
