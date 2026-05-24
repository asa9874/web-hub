import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 탑의 주인 — 오염된 탑 창건자 마기스터 암브로시우스 | Act 2 보스 | HP 300 | 페이즈 2: 힘+3 */
export class TowerMaster extends Boss {
  readonly name = '탑의 주인';
  readonly subtitle = '오염된 탑 창건자 마기스터 암브로시우스 | Act 2 보스';
  readonly lore = '탑의 창건자 마기스터 암브로시우스. 500년 전의 전설적 마법사가 지금 내 앞에 서 있다. 노년의 체형이지만 자세는 완벽하게 곧다. 로브는 탑의 역사만큼이나 오래된 심보랏빛과 황금색 자수가 새겨진 격조 있는 복장인데—지금은 그 자수들이 검게 타버렸다. 흰 수염은 그대로이지만, 그 끝에서 검은 에너지 실들이 뻗어나와 공중에서 흔들린다. 가장 충격적인 것은 눈이다—흰자위 전체가 짙은 남색으로 물들어 있으며, 홍채는 은빛과 흑색이 뒤섞인 복잡한 패턴이다. 오른손에는 탑 전체 설계도가 새겨진 마법사 지팡이를 들고 있으며, 지팡이 끝의 수정구에서 고대 마술의 에너지가 끊임없이 방사된다. 그의 발밑 바닥에는 항상 고대 문자로 된 마법진이 생성되어 있다.';
  readonly quote = '"이 탑은 나의 인생 작품이오. 이제는 나의 무덤이기도 하지."';
  readonly imagePath = 'images/monster/book/tower_master.png';
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
