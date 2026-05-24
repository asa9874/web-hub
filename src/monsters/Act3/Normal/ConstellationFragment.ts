import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 성좌 파편 정령 — 별의 심장 파편 정령 | Act 3 일반 | 가중치 10 */
export class ConstellationFragment extends SeqMonster {
  readonly name = '성좌 파편 정령';
  readonly subtitle = '별의 심장 파편 정령 | Act 3 일반';
  readonly lore = '별의 심장에서 분리된 별빛 파편이 정령화된 존재. 작지만 별의 심장의 원초적 에너지를 그대로 담고 있다. 몸 전체가 성좌 문양으로 빛난다.';
  readonly quote = '"나는 별의 심장의 작은 조각. 하지만 그 에너지는 온전합니다."';
  readonly statType = '별의 심장 파편 정령';
  readonly weight = 10;

  readonly patterns: AttackPattern[] = [
    {
      id: 'constellation_shock',
      name: '성좌 충격',
      description: '독 3 + 취약 3 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'poison', 3); addStatus(t, 'vulnerable', 3); },
    },
    {
      id: 'starlight_barrage',
      name: '별빛 포격',
      description: '22의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 22, s),
    },
  ];

  constructor() { super(70); }
}
