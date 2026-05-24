import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 공포의 여왕 — 수정화된 선행 마법소녀 리라 아세나 | Act 2 보스 | HP 260 | 페이즈 2: 힘+4 */
export class FearQueen extends Boss {
  readonly name = '공포의 여왕';
  readonly subtitle = '수정화된 선행 마법소녀 리라 아세나 | Act 2 보스';
  readonly lore = '그녀는 아직 서 있다. 수정이 되어서도, 암흑 에너지에 각성한 후에도. 리라 아세나. 몸의 3분의 2가 반투명한 보라빛 수정에 잠식되어 있다. 얼굴과 한쪽 팔만이 수정 밖으로 드러나 있으며, 나머지는 수정의 내부에서 윤곽이 흐릿하게 보인다. 수정의 내부 색조는 차갑고 창백한 보랏빛이 기본이며, 가끔 심홍색 맥박이 내부에서 한 번씩 파동처럼 지나간다—심장 박동이다. 드러난 얼굴은 아직 인간의 아름다움을 갖고 있지만, 두 눈의 홍채가 수정화되어 완전히 보라색 결정 무늬로 채워졌다. 머리카락은 은백색이며 일부가 수정화되어 유리 섬유처럼 투명하다. 수정에서 공포의 에너지가 방사될 때 내부의 심장 박동이 빨라진다.';
  readonly quote = '"나는 무서웠어요. 그게 죄가 되었죠."';
  readonly statType = '수정화된 마법소녀';
  readonly phase2BuffDescription = '힘 +4';
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
