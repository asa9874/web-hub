import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 망각의 도깨비 — 소형 기억 정령 | Act 1 일반 | 가중치 30 */
export class MemoryGhost extends SeqMonster {
  readonly name = '망각의 도깨비';
  readonly subtitle = '소형 기억 정령 | Act 1 일반';
  readonly lore = '별빛항 주민들이 잃어버린 기억 조각이 정령으로 결집된 형태. 손바닥만 한 크기의 반투명 도깨비로, 머릿속에 별빛 파편이 빛나고 있다.';
  readonly quote = '"그 아이는 오늘도 자기 이름을 잊었어요."';
  readonly statType = '소형 기억 정령';
  readonly weight = 30;

  readonly patterns: AttackPattern[] = [
    {
      id: 'memory_gnaw',
      name: '기억 갉기',
      description: '8의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 8, s),
    },
    {
      id: 'touch_of_oblivion',
      name: '망각의 손길',
      description: '약화 2 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 2),
    },
  ];

  constructor() { super(45); }
}
