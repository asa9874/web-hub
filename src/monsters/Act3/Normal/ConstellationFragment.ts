import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 성좌 파편 정령 — 별의 심장 파편 정령 | Act 3 일반 | 가중치 10 */
export class ConstellationFragment extends SeqMonster {
  readonly name = '성좌 파편 정령';
  readonly subtitle = '별의 심장 파편 정령 | Act 3 일반';
  readonly lore = '손바닥만 한 이 존재는, 그 크기가 무색하게 별의 심장의 원초 에너지를 그대로 담고 있다. 형태는 사람처럼 보이지만 완전히 별빛으로 구성되어 있어—몸 전체가 투명한 수정처럼 반짝이며, 피부 표면에 성좌 문양이 황금색과 청백색이 번갈아가며 선명하게 발광한다. 움직일 때마다 이 문양들이 다음 별자리로 이동하는 것처럼 흐른다. 눈은 두 개의 작은 별 형태로, 완전한 오각별 모양이며 눈부신 흰 빛을 방사한다. 이 존재 주변 30센티미터 반경에서는 중력이 약해지며, 먼지 입자들이 살짝 부유하기 시작한다. 위협을 받으면 몸 전체의 별빛이 강렬해지며, 피부에서 별의 파편이 실제로 분리되어 사방으로 포격된다.';
  readonly quote = '"나는 별의 심장의 작은 조각. 하지만 그 에너지는 온전합니다."';
  readonly statType = '별의 심장 파편 정령';
  readonly weight = 10;

  readonly patterns: AttackPattern[] = [
    {
      id: 'constellation_shock',
      name: '성좌 충격',
      description: '독 3 + 취약 3 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'poison', 3); addStatus(t, 'vulnerable', 3); },
    },
    {
      id: 'starlight_barrage',
      name: '별빛 포격',
      description: '22의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 22, s),
    },
  ];

  constructor() { super(70); }
}
