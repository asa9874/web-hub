import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 우주 수호자 — 원초 우주 수호 정령 | Act 3 엘리트 | 가중치 40 */
export class CosmicWarden extends SeqMonster {
  readonly name = '우주 수호자';
  readonly subtitle = '원초 우주 수호 정령 | Act 3 엘리트';
  readonly lore = '은하수를 압축한 형태라는 말이 과장이 아니다. 3미터에 달하는 이 존재의 몸은 무수한 성단과 성운을 담고 있다—몸통 내부가 완전히 투명하며, 그 안에 실제 우주처럼 보이는 깊이가 있다. 짙은 남색과 청보랏빛이 기저를 이루며, 그 속에서 수천 개의 흰 광점들이 천천히 이동한다. 팔을 뻗으면 그 팔의 내부에서 성운의 분홍빛과 청록빛 가스 구름이 소용돌이치는 것이 보인다. 눈은 두 개가 아니라—수십 개의 광점이 얼굴 부위에 성좌처럼 배열되어 있다. 이 존재가 등장하면 주변 공간이 실제로 휘어진다: 직선이 곡선처럼 보이고, 거리 감각이 무너진다. 숨을 쉬듯 방사하는 중력파가 느껴진다.';
  readonly quote = '"우주의 법칙이 곧 나다. 법칙을 어기면 소멸한다."';
  readonly statType = '원초 우주 수호 정령';
  readonly weight = 40;
  readonly isElite = true;

  readonly patterns: AttackPattern[] = [
    {
      id: 'cosmic_smash',
      name: '우주 강타',
      description: '35의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 35, s),
    },
    {
      id: 'nebula_barrier',
      name: '성운 방벽',
      description: '방어도 35 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 35; },
    },
    {
      id: 'interstellar_charge',
      name: '성간 돌격',
      description: '25의 피해 + 취약 3 부여',
      weight: 1,
      execute: (t: Entity, s: Entity) => { applyDamage(t, 25, s); addStatus(t, 'vulnerable', 3); },
    },
  ];

  constructor() { super(245); }
}
