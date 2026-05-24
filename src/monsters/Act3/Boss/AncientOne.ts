import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 고대인 — 원초 법칙의 화신 | Act 3 최종 보스 | HP 360 | 페이즈 전환: 40% | 페이즈 2: 힘+5 */
export class AncientOne extends Boss {
  readonly name = '고대인';
  readonly subtitle = '원초 법칙의 화신 | Act 3 최종 보스';
  readonly lore = '시간과 공간을 초월한 존재. 별의 심장에 깃들어 우주의 법칙을 집행해온 의식체. 그의 의지 하나로 세계가 뒤틀린다.';
  readonly quote = '"법칙이 있는 곳에 나는 존재한다."';
  readonly statType = '원초 의식 · 우주 법칙 화신';
  readonly phase2BuffDescription = '힘 +5';
  readonly phaseChangeMessage = '고대인의 진정한 각성이 시작되었다!';

  protected override phaseThreshold = 0.4;

  readonly phasePatterns = [
    [
      {
        id: 'primordial_strike',
        name: '원초적 강타',
        description: '18의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 18, self),
      },
      {
        id: 'ancient_curse',
        name: '고대의 저주',
        description: '독 3 + 취약 3 + 약화 3을 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'poison', 3);
          addStatus(target, 'vulnerable', 3);
          addStatus(target, 'weak', 3);
        },
      },
      {
        id: 'cosmic_shield',
        name: '우주 방패',
        description: '방어도 28을 획득한다.',
        weight: 1,
        execute: (_target: Entity, self: Entity) => { self.block += 28; },
      },
      {
        id: 'time_crush',
        name: '시간 분쇄',
        description: '22의 피해 + 취약 2를 부여한다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 22, self);
          addStatus(target, 'vulnerable', 2);
        },
      },
    ],
    [
      {
        id: 'obliterate',
        name: '소멸',
        description: '32의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 32, self),
      },
      {
        id: 'dimension_rift',
        name: '차원 분열',
        description: '18의 피해를 2번 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 18, self);
          applyDamage(target, 18, self);
        },
      },
      {
        id: 'almighty_curse',
        name: '전능한 저주',
        description: '취약 4 + 약화 4 + 독 5를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'vulnerable', 4);
          addStatus(target, 'weak', 4);
          addStatus(target, 'poison', 5);
        },
      },
      {
        id: 'final_judgment',
        name: '최후의 심판',
        description: '48의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 48, self),
      },
    ],
  ];

  constructor() { super(360); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 5;
  }
}
