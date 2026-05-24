import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 메아리 악마 — 공명 정령 변질체 | Act 2 일반 | 가중치 15 */
export class EchoDemon extends SeqMonster {
  readonly name = '메아리 악마';
  readonly subtitle = '공명 정령 변질체 | Act 2 일반';
  readonly lore = '탑 내부 음향 공명을 담당하던 정령이 암흑 오염 후 흡수한 소리를 공격 에너지로 역이용한다. 음파를 시각화한 물결 무늬가 공중에 떠있는 것처럼 보인다.';
  readonly quote = '"소리를 지르지 마세요. 지를수록 당신에게 돌아오는 것이 더 커집니다."';
  readonly statType = '공명 정령 변질체';
  readonly weight = 15;

  readonly patterns: AttackPattern[] = [
    {
      id: 'echo_reflect',
      name: '메아리 반사',
      description: '취약 2 + 약화 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'vulnerable', 2); addStatus(t, 'weak', 2); },
    },
    {
      id: 'sonic_attack',
      name: '음파 공격',
      description: '10의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 10, s),
    },
  ];

  constructor() { super(60); }
}
