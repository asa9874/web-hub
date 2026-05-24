import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 공포의 여왕 — 수정화된 선행 마법소녀 리라 아세나 | Act 2 보스 | HP 260 | 페이즈 2: 힘+4 */
export class FearQueen extends Boss {
  readonly name = '공포의 여왕';
  readonly description = '60년 전 탑에서 공포에 굴복한 마법소녀. 자신의 두려움에 삼켜져 수정이 되었다가 암흑 에너지에 의해 각성했다.';
  readonly phaseChangeMessage = '공포의 여왕이 절대 공포를 해방했다!';

  readonly phasePatterns = [
    [
      {
        id: 'fear_dominance',
        name: '공포 지배',
        description: '취약 3 + 약화 3을 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'vulnerable', 3);
          addStatus(target, 'weak', 3);
        },
      },
      {
        id: 'crystal_shield',
        name: '수정 방패',
        description: '방어도 25를 획득한다.',
        weight: 1,
        execute: (_target: Entity, self: Entity) => { self.block += 25; },
      },
      {
        id: 'fear_roar',
        name: '공포의 포효',
        description: '18의 피해 + 취약 2를 부여한다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 18, self);
          addStatus(target, 'vulnerable', 2);
        },
      },
      {
        id: 'despair_howl',
        name: '절망의 울부짖음',
        description: '22의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 22, self),
      },
    ],
    [
      {
        id: 'absolute_fear',
        name: '절대 공포',
        description: '취약 4 + 약화 4를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'vulnerable', 4);
          addStatus(target, 'weak', 4);
        },
      },
      {
        id: 'crystal_explosion',
        name: '수정 폭발',
        description: '20의 피해를 2번 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 20, self);
          applyDamage(target, 20, self);
        },
      },
      {
        id: 'dominance_scream',
        name: '지배의 비명',
        description: '30의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 30, self),
      },
      {
        id: 'final_fear',
        name: '최후의 공포',
        description: '40의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 40, self),
      },
    ],
  ];

  constructor() { super(260); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 4;
  }
}
