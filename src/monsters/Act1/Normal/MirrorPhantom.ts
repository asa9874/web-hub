import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 거울 환영 — 유적 결박 정령 | Act 1 일반 | 가중치 10 */
export class MirrorPhantom extends SeqMonster {
  readonly name = '거울 환영';
  readonly subtitle = '유적 결박 정령 | Act 1 일반';
  readonly lore = '고대 신전 유적의 의식용 거울 앞에 서면, 내 모습이 보인다. 정확하게는, 내 모습처럼 보이는 것이 보인다. 이 정령은 회백색의 반투명 실루엣으로, 거울에 비친 반사상처럼 좌우가 미묘하게 뒤집혀 있다. 얼굴은 루나와 닮아 있지만 모든 표정이 지워져 있다—마치 밀랍으로 다시 빚어 놓은 것처럼. 눈 부위만이 텅 빈 은색의 빛으로 채워져 있으며, 광채가 없는 평평한 빛이다. 몸 전체에서 잿빛 안개가 미세하게 증발하며, 가끔 그 안개 속에서 다른 누군가의 옆얼굴이 순간적으로 맺혔다 사라진다. 걸음을 딛지 않고 미끄러지듯 이동하며, 발 아래에 아무 그림자도 지지 않는다.';
  readonly quote = '"유적 안의 거울을 만지지 마세요. 당신의 모습이 웃고 있을 테니까요."';
  readonly imagePath = 'images/monster/book/mirror_phantom.png';
  readonly statType = '유적 결박 정령';
  readonly weight = 10;

  readonly patterns: AttackPattern[] = [
    {
      id: 'phantom_copy',
      name: '환영 복사',
      description: '약화 2 + 취약 2 부여',
      weight: 1,
      execute: (t: Entity) => { addStatus(t, 'weak', 2); addStatus(t, 'vulnerable', 2); },
    },
    {
      id: 'phantom_strike',
      name: '환영 공격',
      description: '12의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 12, s),
    },
  ];

  constructor() { super(35); }
}
