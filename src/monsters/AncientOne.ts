import type { Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { Boss } from './Boss';

/**
 * Act 3 최종 보스 — 고대인.
 * HP 40%에서 페이즈 전환 (일반 보스의 50%보다 빠름).
 * 페이즈 2에서 힘 +5 — 가장 강력한 적.
 */
export class AncientOne extends Boss {
  readonly name = '고대인';
  readonly description = '시간과 공간을 초월한 존재. 그의 의지 하나로 세계가 뒤틀린다.';
  readonly phaseChangeMessage = '고대인의 진정한 각성이 시작되었다!';

  // 40% HP에서 페이즈 전환
  protected override phaseThreshold = 0.4;

  readonly phasePatterns = [
    // ── 페이즈 1 (순차) ─────────────────────────────────────────────────────
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
    // ── 페이즈 2 (순차) ─────────────────────────────────────────────────────
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

  constructor() {
    super(360);
  }

  protected override onPhaseChange(): void {
    this.statuses.strength += 5;
  }
}
