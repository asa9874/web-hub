import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 그림자 고양이 — 오염된 소형 정령 | Act 1 일반 | 가중치 20 */
export class ShadowCat extends SeqMonster {
  readonly name = '그림자 고양이';
  readonly subtitle = '오염된 소형 정령 | Act 1 일반';
  readonly lore = '항구 골목에서 처음 마주쳤을 때, 나는 고양이라고 생각했다. 그것이 실수였다. 이 생명체의 체표는 밤의 허공처럼 순수한 먹빛—광원이 없으면 형태조차 구분되지 않는다. 고양이 크기의 실루엣은 끊임없이 가장자리가 흔들리며 연기처럼 번지다가 수렴하기를 반복한다. 귀는 뾰족하게 솟아있고 꼬리는 두 갈래로 갈라져 있다. 오직 눈만이 차갑고 날카로운 은백색으로 빛나는데, 동공은 세로로 가느다란 수직 슬릿이다. 움직일 때마다 발밑에서 짙은 보라색 안개가 피어오르며, 그 안에 미세한 별빛 파편이 서서히 소멸한다. 빛을 흡수하는 것인지, 주변 공기가 0.5미터 반경으로 한 단계 어두워진다.';
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
