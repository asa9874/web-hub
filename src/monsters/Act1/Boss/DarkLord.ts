import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 암흑 군주 — 오염된 기사단장 케인 아스타르 | Act 1 보스 | HP 240 | 페이즈 2: 힘+3 */
export class DarkLord extends Boss {
  readonly name = '암흑 군주';
  readonly subtitle = '오염된 기사단장 케인 아스타르 | Act 1 보스';
  readonly lore = '케인 아스타르. 기사단장. 한때 별빛항에서 가장 용맹한 이름이었다. 지금 내 앞에 선 것은 그 이름의 껍데기다. 키 2미터에 달하는 거체를 감싼 전신 갑주는 빛 흡수율이 거의 완벽한 흑체에 가깝다. 단 하나의 예외가 있다—가슴 한복판을 대각선으로 가로지르는 균열이다. 그 균열에서 새어나오는 빛은 달빛을 닮은 은청색으로, 규칙적이지 않게 맥동한다. 심장 박동처럼, 혹은 고통의 경련처럼. 어깨판은 날카로운 검은 가시가 돋아있으며, 투구는 완전히 봉인된 형태로 눈 슬릿조차 없다. 그 대신 투구 전면에서 짙은 보랏빛 안개가 끊임없이 스며 나온다. 등 뒤에는 반쯤 피어난 어둠의 날개—깃털 하나하나가 검은 결정체처럼 날카롭다. 걸음을 딛을 때마다 바닥에 어둠의 문장이 새겨진다.';
  readonly quote = '"나는 한때 이 도시를 지켰다. 그러나 빛이란 결국 사람을 배신하더군."';
  readonly imagePath = 'images/monster/book/dark_lord.png';
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
