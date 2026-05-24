import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 그림자 고양이 — 오염된 소형 정령 | Act 1 일반 | 가중치 20 */
export class ShadowCat extends SeqMonster {
  readonly name = '그림자 고양이';
  readonly subtitle = '오염된 소형 정령 | Act 1 일반';
  readonly lore = '별빛항 항구를 떠돌던 고양이 정령이 암흑 안개에 동화된 형태. 그림자 그 자체처럼 형태가 흔들리며 눈만 은빛으로 빛난다.';
  readonly quote = '"어두운 뒷골목에서 가끔 눈이 보이는데… 셋인지 넷인지 모르겠어요."';
  readonly statType = '오염된 소형 정령';
  readonly weight = 20;

  readonly patterns: AttackPattern[] = [
    {
      id: 'shadow_scratch',
      name: '그림자 할퀴기',
      description: '6의 피해 2회',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 6, s); applyDamage(t, 6, s); },
    },
    {
      id: 'dark_leap',
      name: '어둠 도약',
      description: '취약 1 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'vulnerable', 1),
    },
  ];

  constructor() { super(40); }
}
