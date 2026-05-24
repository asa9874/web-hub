import type { AttackPattern, Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { SeqMonster } from './SeqMonster';

/** 거울 환영 — 오염된 환영 정령 | Act 1 일반 | 가중치 10 */
export class MirrorPhantom extends SeqMonster {
  readonly name = '거울 환영';
  readonly description = '별빛항 대거울에 깃들었던 반사 정령. 암흑에 물들어 뒤틀린 복사본을 만들어낸다.';

  readonly patterns: AttackPattern[] = [
    {
      id: 'phantom_copy',
      name: '환영 복사',
      description: '약화 2 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'weak', 2); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'phantom_strike',
      name: '환영 공격',
      description: '12의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 12, s),
    },
  ];

  constructor() { super(35); }
}
