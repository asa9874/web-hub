import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 암흑 갑주병 — 오염된 인간형 | Act 1 일반 | 가중치 25 */
export class DarkKnight extends SeqMonster {
  readonly name = '암흑 갑주병';
  readonly subtitle = '오염된 인간형 | Act 1 일반';
  readonly lore = '인간이었다는 흔적은 갑주의 실루엣뿐이다. 전신 갑주는 완전히 빛을 삼킨 순수한 흑으로, 심지어 갑주의 금속 광택조차 남아있지 않다. 빛이 닿으면 반사되지 않고 그냥 사라진다. 투구의 시야창 안쪽은 완전히 비어 있는데—거기에 어떤 눈도, 어떤 얼굴도 없다. 다만 텅 빈 어둠 속에서 아주 가끔, 은청색 빛 점이 0.5초 동안 나타났다가 꺼진다. 갑주 표면 전체에는 암흑 파편의 균열이 잔금처럼 패여 있으며, 그 틈에서 짙은 남보라색 연기가 끊임없이 배어나온다. 무거운 검을 들고 행진하는 보폭이 완전히 기계적으로 동일해서, 오히려 더 소름 끼친다.';
  readonly quote = '"명령이 없어도 그들은 행진합니다. 빛을 향해."';
  readonly imagePath = 'images/monster/book/dark_knight.png';
  readonly statType = '오염된 인간형';
  readonly weight = 25;

  readonly patterns: AttackPattern[] = [
    {
      id: 'dark_slash_a',
      name: '암흑검',
      description: '10의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 10, s),
    },
    {
      id: 'light_block',
      name: '빛의 차단',
      description: '방어도 10 획득',
      weight: 1,
      execute: (_t: Entity, s: Entity) => { s.block += 10; },
    },
    {
      id: 'dark_slash_b',
      name: '암흑검',
      description: '10의 피해',
      weight: 1,
      execute: (t: Entity, s: Entity) => applyDamage(t, 10, s),
    },
  ];

  constructor() { super(65); }
}
