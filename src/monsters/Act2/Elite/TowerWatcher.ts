import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 탑의 감시자 — 최상급 자동인형 | Act 2 엘리트 | 가중치 40 */
export class TowerWatcher extends SeqMonster {
  readonly name = '탑의 감시자';
  readonly subtitle = '최상급 자동인형 | Act 2 엘리트';
  readonly lore = '탑 창건자가 최후의 방어를 위해 만든 최고급 경비 인형. 암흑 에너지가 전원을 강제 가동시켰다. 갑주 표면 전체에 금서 봉인 문양이 새겨져 있다.';
  readonly quote = '"가동하지 않는 것이 원칙이라고 적혀 있었어요."';
  readonly statType = '최상급 자동인형';
  readonly weight = 40;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'watch_strike',
      name: '감시 강타',
      description: '25의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 25, s),
    },
    {
      id: 'steel_fortress',
      name: '강철 요새',
      description: '방어도 28 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 28; },
    },
    {
      id: 'em_pulse',
      name: '전자기 파동',
      description: '18의 피해 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 18, s); addStatus(t, 'vulnerable', 2); },
    },
  ];

  constructor() { super(185); }
}
