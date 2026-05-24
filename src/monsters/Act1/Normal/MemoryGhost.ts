import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 망각의 도깨비 — 소형 기억 정령 | Act 1 일반 | 가중치 30 */
export class MemoryGhost extends SeqMonster {
  readonly name = '망각의 도깨비';
  readonly subtitle = '소형 기억 정령 | Act 1 일반';
  readonly lore = '손바닥 안에 쥘 수 있을 것 같은 크기의 이 정령은, 사실 보는 것 자체가 불안하다. 몸통은 반투명한 연보라색과 흰색이 섞인 젤리 같은 질감으로, 내부가 흐릿하게 비쳐 보인다. 머리는 몸통에 비해 크고 둥글며, 두 눈은 크고 동그란 형태로 별빛을 품은 듯 옅은 황금색으로 반짝인다. 머릿속에는—그 투명한 두개골 너머로—수십 개의 별빛 파편이 천천히 공전하며 주황빛과 흰빛 사이를 오간다. 팔은 짧고 가늘며 손가락이 없이 뭉툭하다. 이 존재가 흥분하면 머릿속의 파편들이 빠르게 회전하며 옅은 빛의 고리를 형성한다. 이름을 잃은 자들의 기억이라는 말이 딱 맞는 형태다.';
  readonly quote = '"그 아이는 오늘도 자기 이름을 잊었어요."';
  readonly imagePath = 'images/monster/book/memory_ghost.png';
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
