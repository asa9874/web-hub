import type { AttackPattern, Entity } from '../../../types';
import { addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 오염된 서적 정령 — 금서 결박 정령 | Act 2 일반 | 가중치 10 */
export class BookSpirit extends SeqMonster {
  readonly name = '오염된 서적 정령';
  readonly subtitle = '금서 결박 정령 | Act 2 일반';
  readonly lore = '탑의 가장 오래된 금서에 봉인되어 있던 저주 정령. 봉인이 해제되며 탈출하여, 거대한 검은 책 위에 앉아 저주 문자를 방사한다.';
  readonly quote = '"그 책은 스스로 읽히길 원합니다. 읽으면 안 됩니다."';
  readonly statType = '금서 결박 정령';
  readonly weight = 10;

  readonly patterns: AttackPattern[] = [
    {
      id: 'curse_script',
      name: '저주 문자',
      description: '독 4 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'poison', 4); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'sealed_tome',
      name: '봉인의 서',
      description: '약화 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 3),
    },
  ];

  constructor() { super(55); }
}
