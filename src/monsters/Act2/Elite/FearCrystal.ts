import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 공포의 결정체 — 감정 결정화 | Act 2 엘리트 | 가중치 35 */
export class FearCrystal extends SeqMonster {
  readonly name = '공포의 결정체';
  readonly subtitle = '감정 결정화 | Act 2 엘리트';
  readonly lore = '처음에는 그저 커다란 수정 덩어리인 줄 알았다. 가까이 다가가서야, 수정 표면에 얼굴이 맺힌다는 것을 알게 되었다. 높이 1.5미터 가량의 이 존재는 순수한 반투명 수정 결정체 구조를 기본으로 한다. 주 색조는 연보라색과 냉담한 청백색이 내부에서 굴절하며 아른거린다. 조명이 어떤 방향에서 오든, 이 존재의 내부에서는 항상 차갑고 청백한 빛이 방사된다. 가장 섬뜩한 특징은 수정 표면 곳곳에서 얼굴이 나타났다 사라진다는 것이다. 고통에 일그러진 얼굴, 절망으로 울부짖는 얼굴, 공포로 눈을 크게 뜬 얼굴들이 수정 안쪽에서 수면 위로 떠오르듯 교체된다. 이 얼굴들은 수백 년에 걸쳐 탑을 방문했다가 공포에 굴복한 마법사들의 것이다.';
  readonly quote = '"이것이 수백 명의 절망을 합친 형태입니다."';
  readonly imagePath = 'images/monster/book/fear_crystal.png';
  readonly statType = '감정 결정화';
  readonly weight = 35;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'fear_radiation',
      name: '공포 방사',
      description: '취약 3 + 약화 3 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'vulnerable', 3); addStatus(t, 'weak', 3); },
    },
    {
      id: 'crystal_barrier',
      name: '수정 방벽',
      description: '방어도 24 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 24; },
    },
    {
      id: 'fear_shock',
      name: '공포 충격',
      description: '22의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 22, s),
    },
  ];

  constructor() { super(160); }
}
