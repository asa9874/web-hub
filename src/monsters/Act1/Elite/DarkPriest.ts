import type { AttackPattern, Entity } from '../../../types';
import { addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 어둠의 사제 — 오염된 마법사형 | Act 1 엘리트 | 가중치 35 */
export class DarkPriest extends SeqMonster {
  readonly name = '어둠의 사제';
  readonly subtitle = '오염된 마법사형 | Act 1 엘리트';
  readonly lore = '고대 신전 유적을 연구하던 마법사. 별의 파편이 뿜는 암흑 에너지를 자발적으로 흡수했다. 손에서 계속 어둠의 문자가 흘러나온다.';
  readonly quote = '"떠날 때는 스스로 돌아가지 않겠다고 했고요."';
  readonly statType = '오염된 마법사형';
  readonly weight = 35;
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
