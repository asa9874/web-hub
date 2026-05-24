import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 차원 균열체 — 인과율 생성체 | Act 3 일반 | 가중치 15 */
export class DimensionRift extends SeqMonster {
  readonly name = '차원 균열체';
  readonly subtitle = '인과율 생성체 | Act 3 일반';
  readonly lore = '시간과 공간의 경계가 무너지며 생성된 존재. 인과율의 붕괴 자체가 의식을 갖게 된 형태. 그 모습이 끊임없이 일그러진다.';
  readonly quote = '"원인과 결과가 뒤바뀌었습니다. 당신이 먼저 쓰러진 다음 싸움이 시작됩니다."';
  readonly statType = '인과율 생성체';
  readonly weight = 15;

  readonly patterns: AttackPattern[] = [
    {
      id: 'rift_shock',
      name: '균열 충격',
      description: '20의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 20, s),
    },
    {
      id: 'dimension_warp',
      name: '차원 왜곡',
      description: '취약 2 + 약화 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'vulnerable', 2); addStatus(t, 'weak', 2); },
    },
  ];

  constructor() { super(80); }
}
