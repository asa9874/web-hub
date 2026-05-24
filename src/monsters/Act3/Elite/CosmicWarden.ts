import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 우주 수호자 — 원초 우주 수호 정령 | Act 3 엘리트 | 가중치 40 */
export class CosmicWarden extends SeqMonster {
  readonly name = '우주 수호자';
  readonly subtitle = '원초 우주 수호 정령 | Act 3 엘리트';
  readonly lore = '고대인이 우주의 법칙을 수호하기 위해 소환한 원초 정령. 그 몸은 은하수를 압축한 형태이며, 등장만으로도 공간이 휘어진다.';
  readonly quote = '"우주의 법칙이 곧 나다. 법칙을 어기면 소멸한다."';
  readonly statType = '원초 우주 수호 정령';
  readonly weight = 40;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'cosmic_smash',
      name: '우주 강타',
      description: '35의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 35, s),
    },
    {
      id: 'nebula_barrier',
      name: '성운 방벽',
      description: '방어도 35 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 35; },
    },
    {
      id: 'interstellar_charge',
      name: '성간 돌격',
      description: '25의 피해 + 취약 3 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 25, s); addStatus(t, 'vulnerable', 3); },
    },
  ];

  constructor() { super(245); }
}
