import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 별의 심장 수호자 — 별의 심장 계약 수호자 | Act 3 보스 | HP 320 | 페이즈 전환: 40% | 페이즈 2: 힘+5 */
export class StarHeartGuardian extends Boss {
  readonly name = '별의 심장 수호자';
  readonly subtitle = '별의 심장 계약 수호자 | Act 3 보스';
  readonly lore = '별의 심장을 지키기 위해 수천 년 전 고대인과 계약한 존재. 별의 심장이 위협받을 때 비로소 그 진정한 힘이 해방된다.';
  readonly quote = '"이 계약은 수천 년 전부터 이어졌습니다. 당신이 그 끝이 되겠군요."';
  readonly statType = '별의 심장 계약 수호자';
  readonly phase2BuffDescription = '힘 +5';
  readonly phaseChangeMessage = '별의 심장 수호자의 계약 봉인이 해제되었다!';

  protected override phaseThreshold = 0.4;

  readonly phasePatterns = [
    [
      {
        id: 'starlight_guard',
        name: '별빛 수호',
        description: '20의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 20, self),
      },
      {
        id: 'heart_shield',
        name: '심장 방패',
        description: '방어도 32를 획득한다.',
        weight: 1,
        execute: (_target: Entity, self: Entity) => { self.block += 32; },
      },
      {
        id: 'contract_rupture',
        name: '계약 파열',
        description: '독 4 + 취약 3 + 약화 3을 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'poison', 4);
          addStatus(target, 'vulnerable', 3);
          addStatus(target, 'weak', 3);
        },
      },
      {
        id: 'star_judgment',
        name: '별의 심판',
        description: '25의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 25, self),
      },
    ],
    [
      {
        id: 'dance_of_annihilation',
        name: '소멸의 춤',
        description: '22의 피해를 2번 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 22, self);
          applyDamage(target, 22, self);
        },
      },
      {
        id: 'memory_war',
        name: '기억 전쟁',
        description: '취약 5 + 약화 5를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'vulnerable', 5);
          addStatus(target, 'weak', 5);
        },
      },
      {
        id: 'heart_explosion',
        name: '심장 폭발',
        description: '40의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 40, self),
      },
      {
        id: 'primordial_light',
        name: '태초의 빛',
        description: '55의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 55, self),
      },
    ],
  ];

  constructor() { super(320); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 5;
  }
}
