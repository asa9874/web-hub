import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 고대인 — 원초 법칙의 화신 | Act 3 최종 보스 | HP 360 | 페이즈 전환: 40% | 페이즈 2: 힘+5 */
export class AncientOne extends Boss {
  readonly name = '고대인';
  readonly subtitle = '원초 법칙의 화신 | Act 3 최종 보스';
  readonly lore = '법칙이 살아있다면 이런 모습일 것이다. 고대인은 형태가 없으면서 형태가 있다—필요에 따라 인간처럼 보이기도 하고, 그다음 순간에는 별빛의 거대한 소용돌이처럼 보이기도 한다. 인간형으로 나타났을 때의 외형은: 4미터의 거체, 순수한 흰빛과 별빛 금색이 교차하는 피부, 머리카락이 없으며 두상에서 직접 별빛이 방사된다. 눈은 두 개이며—완전히 텅 빈 백색 공이다. 홍채도 동공도 없으며, 그 속에서 우주의 시작과 끝이 동시에 보인다고 한다. 입을 열면 소리가 나오지 않고 빛이 나온다. 이 존재 주변에서는 물리 법칙이 유동적이 된다—중력의 방향이 바뀌고, 물체의 색이 반전되고, 시간이 역행한다. 가장 무서운 것은 이 존재가 위협을 받았을 때 표정이 변한다는 것이다. 당황한 것처럼 보인다.';
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
