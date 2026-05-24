import type { AttackPattern, Entity } from '../../../types';
import { applyDamage } from '../../../utils/combat';
import { SeqMonster } from '../../SeqMonster';

/** 암흑 갑주병 — 오염된 인간형 | Act 1 일반 | 가중치 25 */
export class DarkKnight extends SeqMonster {
  readonly name = '암흑 갑주병';
  readonly subtitle = '오염된 인간형 | Act 1 일반';
  readonly lore = '수호 기사단 병사. 암흑 파편에 닿아 의식을 잃고 변질되었다. 빛을 흡수해 완전히 검어진 갑주를 두르고 있으며, 투구 안은 비어있다.';
  readonly quote = '"명령이 없어도 그들은 행진합니다. 빛을 향해."';
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
