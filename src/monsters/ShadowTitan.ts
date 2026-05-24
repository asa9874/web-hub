import type { Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { Boss } from './Boss';

/** Act 2 보스 — 그림자 타이탄. 강력한 독과 압박으로 플레이어를 제압한다. */
export class ShadowTitan extends Boss {
  readonly name = '그림자 타이탄';
  readonly description = '심연에서 소환된 고대 전사. 공포의 오라가 전장을 뒤덮는다.';
  readonly phaseChangeMessage = '그림자 타이탄이 분노의 힘을 해방했다!';

  readonly phasePatterns = [
    // ── 페이즈 1 (순차) ─────────────────────────────────────────────────────
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
    // ── 페이즈 2 (순차) ─────────────────────────────────────────────────────
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

  constructor() {
    super(280);
  }

  protected override onPhaseChange(): void {
    this.statuses.strength += 4;
  }
}
