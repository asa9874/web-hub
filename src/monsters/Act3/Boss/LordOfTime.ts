import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 시간의 군주 — 시공 법칙의 화신 | Act 3 보스 | HP 340 | 페이즈 전환: 40% | 페이즈 2: 힘+5 */
export class LordOfTime extends Boss {
  readonly name = '시간의 군주';
  readonly subtitle = '시공 법칙의 화신 | Act 3 보스';
  readonly lore = '시간의 흐름을 직접 관장하는 고대인의 화신. 과거, 현재, 미래가 그의 손에서 동시에 펼쳐진다. 그와 싸우는 것은 시간 자체와 싸우는 것이다.';
  readonly quote = '"당신의 모든 가능성은 이미 내 손 안에 있습니다."';
  readonly statType = '시공 법칙의 화신';
  readonly phase2BuffDescription = '힘 +5';
  readonly phaseChangeMessage = '시간의 군주가 절대 시공을 개방했다!';

  protected override phaseThreshold = 0.4;

  readonly phasePatterns = [
    [
      {
        id: 'time_reverse_strike',
        name: '시간 역류',
        description: '22의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 22, self),
      },
      {
        id: 'spacetime_barrier',
        name: '시공 방벽',
        description: '방어도 35를 획득한다.',
        weight: 1,
        execute: (_target: Entity, self: Entity) => { self.block += 35; },
      },
      {
        id: 'fate_brand',
        name: '운명 각인',
        description: '독 3 + 취약 4를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'poison', 3);
          addStatus(target, 'vulnerable', 4);
        },
      },
      {
        id: 'time_crush',
        name: '시간 분쇄',
        description: '28의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 28, self),
      },
    ],
    [
      {
        id: 'time_explosion',
        name: '시간 폭발',
        description: '38의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 38, self),
      },
      {
        id: 'spacetime_rift',
        name: '시공 균열',
        description: '20의 피해를 2번 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 20, self);
          applyDamage(target, 20, self);
        },
      },
      {
        id: 'absolute_time',
        name: '절대 시간',
        description: '취약 5 + 약화 5 + 독 4를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'vulnerable', 5);
          addStatus(target, 'weak', 5);
          addStatus(target, 'poison', 4);
        },
      },
      {
        id: 'clock_of_doom',
        name: '종말의 시계',
        description: '52의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 52, self),
      },
    ],
  ];

  constructor() { super(340); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 5;
  }
}
