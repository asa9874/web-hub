import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 뒤틀린 인형 — 오염된 마법 인형 | Act 2 일반 | 가중치 20 */
export class TwistedDoll extends SeqMonster {
  readonly name = '뒤틀린 인형';
  readonly subtitle = '오염된 마법 인형 | Act 2 일반';
  readonly lore = '실험실에서 연구 목적으로 제작된 마법 인형. 암흑 에너지 유입으로 명령 체계가 붕괴되었다. 관절 사이로 검은 에너지가 새어 나온다.';
  readonly quote = '"우리가 만든 것들이 맞는데, 왜 우리를 보고 고개를 젓는지 모르겠습니다."';
  readonly statType = '오염된 마법 인형';
  readonly weight = 20;

  readonly patterns: AttackPattern[] = [
    {
      id: 'doll_strike',
      name: '인형 타격',
      description: '9의 피해 2회',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 9, s); applyDamage(t, 9, s); },
    },
    {
      id: 'overload',
      name: '과부하',
      description: '약화 2 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 2),
    },
    {
      id: 'repair_mode',
      name: '수리 모드',
      description: '방어도 8 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 8; },
    },
  ];

  constructor() { super(75); }
}
