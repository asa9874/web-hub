import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 시간의 군주 — 시공 법칙의 화신 | Act 3 보스 | HP 340 | 페이즈 전환: 40% | 페이즈 2: 힘+5 */
export class LordOfTime extends Boss {
  readonly name = '시간의 군주';
  readonly subtitle = '시공 법칙의 화신 | Act 3 보스';
  readonly lore = '그와 싸운다는 것은, 이미 패배한 미래에서 싸우는 것과 같다. 시간의 군주는 고대인의 화신 중 가장 논리적인 형태를 취한다—3.5미터의 인간형이지만, 그 몸 주변에 시간의 축이 물리적으로 가시화되어 있다. 과거·현재·미래의 이미지가 그의 몸을 중심으로 동심원 형태의 레이어를 이루며 회전한다. 피부색은 밤하늘 같은 짙은 청흑색이며 그 표면에 황금색 별자리 선들이 새겨져 있다. 눈은 두 개이며—하나는 과거를 담은 불투명한 회색, 하나는 미래를 담은 순수한 흰색이다. 두 손은 항상 펼쳐진 상태이며, 손바닥에서 시간의 흐름이 가시화되어 작은 모래시계 형태의 에너지들이 생성되었다가 소멸한다. 공격을 받으면 현재 위치에서 사라지고 0.2초 후 다른 위치에서 나타난다.';
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
