import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 별의 심판관 — 고대인 집행 정령 | Act 3 일반 | 가중치 20 */
export class StarJudge extends SeqMonster {
  readonly name = '별의 심판관';
  readonly subtitle = '고대인 집행 정령 | Act 3 일반';
  readonly lore = '이 정령의 외형은 의외로 엄격하게 균형 잡혀 있다. 키 180센티미터 내외의 인간형 실루엣이며, 전신을 감싼 법복 같은 복장은 짙은 남색에 황금 성좌 문양이 자수처럼 새겨져 있다. 머리는 두건으로 가려져 있으며, 두건 밖으로는 반투명한 성좌빛의 피부 색조만 보인다. 가장 두드러진 특징은 눈이다—양쪽 눈에서 별빛 레이저가 사방으로 방사된다. 섬세한 광선이 약 10센티미터씩 눈 밖으로 뻗어 있으며, 심판 대상을 지목할 때 이 광선이 한 줄기로 집중되어 굵어진다. 왼손에는 평결을 기록하는 석판을 들고 있으며, 오른손의 두 손가락이 항상 심판을 내리는 제스처 형태로 곧게 뻗어 있다. 이 존재 앞에서는, 자신이 무엇을 했는지 선명하게 기억난다고 한다.';
  readonly quote = '"당신은 이미 유죄 판결을 받았습니다."';
  readonly statType = '고대인 집행 정령';
  readonly weight = 20;

  readonly patterns: AttackPattern[] = [
    {
      id: 'light_of_judgment',
      name: '심판의 빛',
      description: '16의 피해 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 16, s); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'star_shield',
      name: '별의 방패',
      description: '방어도 20 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 20; },
    },
    {
      id: 'sentence',
      name: '선고',
      description: '약화 3 부여',
      weight: 1,
      execute: (t: Entity) => addStatus(t, 'weak', 3),
    },
  ];

  constructor() { super(100); }
}
