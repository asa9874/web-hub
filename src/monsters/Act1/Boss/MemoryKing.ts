import type { Entity } from '../../../types';
import { applyDamage, addStatus } from '../../../utils/combat';
import { Boss } from '../../Boss';

/** 기억 도적왕 — 감정 결집체 | Act 1 보스 | HP 200 | 페이즈 2: 힘+4 */
export class MemoryKing extends Boss {
  readonly name = '기억 도적왕';
  readonly subtitle = '감정 결집체 — 이름 없는 군주 | Act 1 보스';
  readonly lore = '왕좌에 앉아 있다고는 했지만, 왕좌가 없다. 이 존재 자체가 좌표를 가지지 않는다. 반투명한 거대 실루엣—키는 3미터를 훌쩍 넘으며, 경계선이 흐릿하게 번지며 끊임없이 안개처럼 희미해진다. 기본 색조는 유령빛의 연보라색과 공허 회색이 층층이 쌓인 형태다. 가장 압도적인 것은 머리 위다—수천 개의 기억 파편이 왕관 형태로 궤도를 그리며 공전하고 있다. 각 파편은 작은 별빛 결정체로, 옅은 황금색·흰색·하늘색이 뒤섞여 있다. 가장 기묘한 것은 얼굴이다—계속 바뀐다. 노인의 얼굴이 나타났다 아이의 얼굴로, 여성의 얼굴로, 알 수 없는 얼굴로 매 순간 용해되어 다시 형성된다. 손에서는 기억 파편들이 끊임없이 흘러나와 공전 궤도에 합류한다.';
  readonly quote = '"별빛항 사람들이 잃은 기억이 한 곳에 모여 왕좌에 앉았습니다."';
  readonly statType = '감정 결집체';
  readonly phaseChangeMessage = '기억 도적왕이 모든 기억을 해방했다!';
  readonly phase2BuffDescription = '힘 +4';

  readonly phasePatterns = [
    [
      {
        id: 'memory_absorb',
        name: '기억 흡수',
        description: '10의 피해 + 약화 2 부여',
        weight: 1,
        execute: (t: Entity, s: Entity) => { applyDamage(t, 10, s); addStatus(t, 'weak', 2); },
      },
      {
        id: 'memory_shield',
        name: '기억 방패',
        description: '방어도 15 획득',
        weight: 1,
        execute: (_t: Entity, s: Entity) => { s.block += 15; },
      },
      {
        id: 'memory_storm',
        name: '기억 폭풍',
        description: '독 4 + 취약 2 부여',
        weight: 1,
        execute: (t: Entity) => { addStatus(t, 'poison', 4); addStatus(t, 'vulnerable', 2); },
      },
      {
        id: 'weight_of_memory',
        name: '기억의 무게',
        description: '14의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 14, s),
      },
    ],
    [
      {
        id: 'memory_of_despair',
        name: '절망의 기억',
        description: '20의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 20, s),
      },
      {
        id: 'void',
        name: '공허',
        description: '취약 4 + 약화 4 부여',
        weight: 1,
        execute: (t: Entity) => { addStatus(t, 'vulnerable', 4); addStatus(t, 'weak', 4); },
      },
      {
        id: 'memory_combo',
        name: '기억 연격',
        description: '12의 피해 2회',
        weight: 1,
        execute: (t: Entity, s: Entity) => { applyDamage(t, 12, s); applyDamage(t, 12, s); },
      },
      {
        id: 'annihilation',
        name: '소멸',
        description: '35의 피해',
        weight: 1,
        execute: (t: Entity, s: Entity) => applyDamage(t, 35, s),
      },
    ],
  ];

  constructor() { super(200); }

  protected override onPhaseChange(): void {
    this.statuses.strength += 4;
  }
}
