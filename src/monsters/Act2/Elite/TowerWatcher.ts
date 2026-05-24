import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 탑의 감시자 — 최상급 자동인형 | Act 2 엘리트 | 가중치 40 */
export class TowerWatcher extends SeqMonster {
  readonly name = '탑의 감시자';
  readonly subtitle = '최상급 자동인형 | Act 2 엘리트';
  readonly lore = '단순히 크다는 것만으로는 설명이 부족하다. 키 2.5미터의 이 자동인형은 탑 창건자가 설계한 최상위 경비 병기이며, 그것이 그대로 느껴진다. 전신 갑주의 소재는 일반 철이 아닌 마법 강철—어둑한 은색에 청보라색 금속 광택이 더해진다. 갑주 표면 전체를 빼곡히 채운 것은 금서 봉인 문양들이다. 수십 개의 봉인이 기하학적 패턴으로 새겨져 있으며, 그 문양들이 활성화되면 청백색 빛으로 발광한다. 눈 부위에는 두 개의 광학 유닛이 내장되어 있으며, 침입자를 포착하면 황백색 빛으로 켜진다. 어깨 판에 새겨진 기호를 해석하면 \'비상 가동 금지\'라는 뜻이라고 했다. 어쩌다 지금 가동 중인지는, 물어봐도 대답이 없다.';
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
