import type { AttackPattern, Entity } from '../../../types';
import { addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 어둠의 사제 — 오염된 마법사형 | Act 1 엘리트 | 가중치 35 */
export class DarkPriest extends SeqMonster {
  readonly name = '어둠의 사제';
  readonly description = '별빛항 신전의 사제. 암흑 의식에 빠져들어 저주와 독을 퍼뜨리는 존재가 되었다.';
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'curse_barrage',
      name: '저주 포격',
      description: '독 4 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'poison', 4); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'dark_magic',
      name: '흑마술',
      description: '약화 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 3),
    },
    {
      id: 'dark_prayer',
      name: '암흑 기도',
      description: '방어도 12 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 12; },
    },
  ];

  constructor() { super(100); }
}
