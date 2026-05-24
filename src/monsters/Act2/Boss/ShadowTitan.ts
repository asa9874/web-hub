import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 그림자 타이탄 — 공포 결정화 거인 | Act 2 보스 | HP 280 | 페이즈 2: 힘+4 */
export class ShadowTitan extends Boss {
  readonly name = '그림자 타이탄';
  readonly subtitle = '공포 결정화 거인 | Act 2 보스';
  readonly lore = '탑에서 수백 년간 축적된 인간의 공포와 절망이 결정화된 존재. 높이 5미터의 검은 수정 거인으로, 발걸음마다 바닥이 갈라진다.';
  readonly quote = '"당신의 공포가 나를 이루고 있습니다."';
  readonly statType = '공포 결정화 거인';
  readonly phase2BuffDescription = '힘 +4';
  readonly phaseChangeMessage = '그림자 타이탄이 분노의 힘을 해방했다!';

  readonly phasePatterns = [
    [
      {
        id: 'shadow_strike',
        name: '그림자 강타',
        description: '15의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 15, self),
      },
      {
        id: 'iron_veil',
        name: '강철 장막',
        description: '방어도 22를 획득한다.',
        weight: 1,
        execute: (_target: Entity, self: Entity) => { self.block += 22; },
      },
      {
        id: 'shadow_taint',
        name: '암흑 오염',
        description: '독 4와 약화 2를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'poison', 4);
          addStatus(target, 'weak', 2);
        },
      },
      {
        id: 'overwhelm',
        name: '압도',
        description: '20의 피해 + 취약 2를 부여한다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 20, self);
          addStatus(target, 'vulnerable', 2);
        },
      },
    ],
    [
      {
        id: 'annihilate',
        name: '말살',
        description: '25의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 25, self),
      },
      {
        id: 'terror_roar',
        name: '공포의 포효',
        description: '취약 3과 약화 3을 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'vulnerable', 3);
          addStatus(target, 'weak', 3);
        },
      },
      {
        id: 'twin_blow',
        name: '쌍격 강타',
        description: '15의 피해를 2번 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 15, self);
          applyDamage(target, 15, self);
        },
      },
      {
        id: 'absolute_pressure',
        name: '절대 압박',
        description: '35의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 35, self),
      },
    ],
  ];

  constructor() { super(280); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 4;
  }
}
