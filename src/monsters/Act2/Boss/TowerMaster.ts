import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 탑의 주인 — 오염된 탑 창건자 마기스터 암브로시우스 | Act 2 보스 | HP 300 | 페이즈 2: 힘+3 */
export class TowerMaster extends Boss {
  readonly name = '탑의 주인';
  readonly subtitle = '오염된 탑 창건자 마기스터 암브로시우스 | Act 2 보스';
  readonly lore = '별의 첨탑을 설계하고 건립한 전설적 마법사. 별의 심장 연구 도중 고대인의 의지에 직접 닿아 잠식되었다. 그의 연구 노트가 아직 탑 꼭대기에 남아있다.';
  readonly quote = '"이 탑은 나의 인생 작품이오. 이제는 나의 무덤이기도 하지."';
  readonly statType = '오염된 탑 창건자';
  readonly phase2BuffDescription = '힘 +3';
  readonly phaseChangeMessage = '탑의 주인이 금지된 고대 마술을 해방했다!';

  readonly phasePatterns = [
    [
      {
        id: 'knowledge_curse',
        name: '지식의 저주',
        description: '독 5를 부여한다.',
        weight: 1,
        execute: (target: Entity) => addStatus(target, 'poison', 5),
      },
      {
        id: 'magic_barrier',
        name: '마력 방벽',
        description: '방어도 30을 획득한다.',
        weight: 1,
        execute: (_target: Entity, self: Entity) => { self.block += 30; },
      },
      {
        id: 'ancient_magic',
        name: '고대 마술',
        description: '20의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 20, self),
      },
      {
        id: 'tower_law',
        name: '탑의 법칙',
        description: '약화 4를 부여한다.',
        weight: 1,
        execute: (target: Entity) => addStatus(target, 'weak', 4),
      },
    ],
    [
      {
        id: 'abyss_open',
        name: '심연 개방',
        description: '32의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 32, self),
      },
      {
        id: 'forbidden_knowledge',
        name: '금지된 지식',
        description: '독 4 + 취약 4 + 약화 4를 부여한다.',
        weight: 1,
        execute: (target: Entity) => {
          addStatus(target, 'poison', 4);
          addStatus(target, 'vulnerable', 4);
          addStatus(target, 'weak', 4);
        },
      },
      {
        id: 'magic_combo',
        name: '마력 연격',
        description: '16의 피해를 2번 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => {
          applyDamage(target, 16, self);
          applyDamage(target, 16, self);
        },
      },
      {
        id: 'final_lecture',
        name: '마지막 강의',
        description: '42의 피해를 입힌다.',
        weight: 1,
        execute: (target: Entity, self: Entity) => applyDamage(target, 42, self),
      },
    ],
  ];

  constructor() { super(300); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 3;
  }
}
