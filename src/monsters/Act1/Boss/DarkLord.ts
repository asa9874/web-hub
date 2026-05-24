import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 암흑 군주 — 오염된 기사단장 케인 아스타르 | Act 1 보스 | HP 240 | 페이즈 2: 힘+3 */
export class DarkLord extends Boss {
  readonly name = '암흑 군주';
  readonly subtitle = '오염된 기사단장 케인 아스타르 | Act 1 보스';
  readonly lore = '별빛항 수호 기사단 단장 케인 아스타르가 암흑 에너지에 잠식된 형태. 본인의 의식은 갑옷 깊은 곳에 남아 있다. 칠흑색 전신 갑옷에 가슴에 달빛 같은 균열이 나 있다.';
  readonly quote = '"나는 한때 이 도시를 지켰다. 그러나 빛이란 결국 사람을 배신하더군."';
  readonly statType = '오염된 인간 (의식 잔존)';
  readonly phaseChangeMessage = '암흑 군주가 진정한 힘을 해방했다!';
  readonly phase2BuffDescription = '힘 +3';

  readonly phasePatterns = [
    [
      {
        id: 'dark_strike',
        name: '암흑 강타',
        description: '12의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 12, self),
      },
      {
        id: 'dark_veil',
        name: '암흑 장막',
        description: '방어도 18을 획득한다.',
        weight: 1,
        execute: (_target: Entity, self: Entity) => { self.block += 18; },
      },
      {
        id: 'curse',
        name: '저주',
        description: '취약 2와 약화 2를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'vulnerable', 2);
          addStatus(target, 'weak', 2);
        },
      },
      {
        id: 'sinister_blow',
        name: '흉악한 일격',
        description: '18의 피해 + 취약 1을 부여한다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 18, self);
          addStatus(target, 'vulnerable', 1);
        },
      },
    ],
    [
      {
        id: 'rage_strike',
        name: '분노의 일격',
        description: '20의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 20, self),
      },
      {
        id: 'domination',
        name: '지배',
        description: '취약 3 + 독 2를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'vulnerable', 3);
          addStatus(target, 'poison', 2);
        },
      },
      {
        id: 'twin_blade',
        name: '쌍검 난무',
        description: '12의 피해를 2번 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 12, self);
          applyDamage(target, 12, self);
        },
      },
      {
        id: 'despair',
        name: '절망',
        description: '30의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 30, self),
      },
    ],
  ];

  constructor() { super(240); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 3;
  }
}
