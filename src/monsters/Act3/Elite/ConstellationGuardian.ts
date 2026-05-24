import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 성좌의 수호자 — 별자리 수호 정령 | Act 3 엘리트 | 가중치 35 */
export class ConstellationGuardian extends SeqMonster {
  readonly name = '성좌의 수호자';
  readonly subtitle = '별자리 수호 정령 | Act 3 엘리트';
  readonly lore = '별의 심장을 구성하는 주요 성좌에 깃든 수호 정령. 성좌 문양을 무기로 삼아 침입자를 격퇴한다. 몸에서 12개의 별자리가 회전한다.';
  readonly quote = '"당신이 보는 별자리는 모두 나의 방패입니다."';
  readonly statType = '별자리 수호 정령';
  readonly weight = 35;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'constellation_strike',
      name: '별자리 강타',
      description: '28의 피해 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 28, s); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'cosmic_shield',
      name: '우주 방패',
      description: '방어도 30 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 30; },
    },
    {
      id: 'constellation_combo',
      name: '성좌 연격',
      description: '18의 피해 2회',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 18, s); applyDamage(t, 18, s); },
    },
  ];

  constructor() { super(220); }
}
