import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 별의 심장 수호자 — 별의 심장 계약 수호자 | Act 3 보스 | HP 320 | 페이즈 전환: 40% | 페이즈 2: 힘+5 */
export class StarHeartGuardian extends Boss {
  readonly name = '별의 심장 수호자';
  readonly subtitle = '별의 심장 계약 수호자 | Act 3 보스';
  readonly lore = '수천 년을 기다렸다. 그리고 지금 내가 왔다. 별의 심장 수호자는 고대인과의 계약으로 봉인되어 있던 존재라—그 봉인의 흔적이 몸 전체에 남아있다. 키 3미터의 반투명한 형태이며, 기본 색조는 깊은 별빛 남색이다. 몸 전체에 봉인 문자들이 황금색 빛으로 새겨져 있으며, 이 문자들이 봉인의 힘을 제어하고 있다. 계약이 깨지기 시작하면 이 문자들이 하나씩 꺼지며 몸에서 떨어져 나간다—그와 동시에 내부의 별의 심장 에너지가 백색의 폭발 직전 수준으로 방사된다. 눈은 완벽한 황금색 원형 홍채이며, 세로로 가느다란 동공을 가지고 있다. 양 손등에는 별의 심장과 계약한 문양이 선명하게 새겨져 있다. 마지막 봉인을 해제할 때, 두 눈에서 눈물이 흐른다—별빛으로 만들어진 눈물이.';
  readonly quote = '"이 계약은 수천 년 전부터 이어졌습니다. 당신이 그 끝이 되겠군요."';
  readonly imagePath = 'images/monster/book/star_heart_guardian.png';
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
