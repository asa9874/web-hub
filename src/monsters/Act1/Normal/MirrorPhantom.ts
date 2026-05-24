import type { AttackPattern, Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 거울 환영 — 유적 결박 정령 | Act 1 일반 | 가중치 10 */
export class MirrorPhantom extends SeqMonster {
  readonly name = '거울 환영';
  readonly subtitle = '유적 결박 정령 | Act 1 일반';
  readonly lore = '고대 신전 유적의 의식용 거울에 깃든 정령이 암흑 에너지로 자아를 잃었다. 루나의 실루엣과 흡사하지만 표정이 없다.';
  readonly quote = '"유적 안의 거울을 만지지 마세요. 당신의 모습이 웃고 있을 테니까요."';
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
