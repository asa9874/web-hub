import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 지식 수집귀 — 오염된 지식 정령 | Act 2 일반 | 가중치 25 */
export class KnowledgeCollector extends SeqMonster {
  readonly name = '지식 수집귀';
  readonly description = '탑 도서관에 깃들어 있던 지식 수집 정령이 금서에 닿아 암흑 지식에 오염되었다.';

  readonly patterns: AttackPattern[] = [
    {
      id: 'curse_decree',
      name: '저주 포고',
      description: '독 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'poison', 3),
    },
    {
      id: 'forbidden_throw',
      name: '금서 투척',
      description: '12의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 12, s),
    },
  ];

  constructor() { super(65); }
}
