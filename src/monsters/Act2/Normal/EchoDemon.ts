import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 메아리 악마 — 공명 정령 변질체 | Act 2 일반 | 가중치 15 */
export class EchoDemon extends SeqMonster {
  readonly name = '메아리 악마';
  readonly subtitle = '공명 정령 변질체 | Act 2 일반';
  readonly lore = '이 존재의 가장 두드러진 특징은 몸에서 음파의 시각화가 일어난다는 것이다. 반투명한 회청색 실루엣을 중심으로, 동심원 형태의 음파 고리들이 끊임없이 바깥으로 퍼져나간다. 고리의 색은 진동수에 따라 달라지는데—낮은 음은 짙은 남색, 높은 음은 흰색에 가까운 청백색으로 표시된다. 몸통은 과도하게 큰 귀를 특징으로 한다—접시만 한 귀 두 개가 양 옆으로 펼쳐져 있으며 귓바퀴 안쪽이 공명 표면처럼 반짝인다. 입은 항상 조금 열려 있으며, 거기서 파동 형태의 에너지가 흘러나온다. 눈은 없는 것처럼 보이지만, 귀의 진동으로 주변을 탐지한다. 이 존재 근처에서 소리를 내면 그것이 증폭되어 돌아온다.';
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
