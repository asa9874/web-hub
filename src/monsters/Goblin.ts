import type { Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { Monster } from './Monster';

export class Goblin extends Monster {
  readonly name = '고블린';
  readonly description = '날쌘 소형 몬스터. 빠른 공격을 여러 번 날린다.';

  readonly patterns = [
    {
      id: 'goblin_slash',
      name: '빠른 베기',
      description: '5의 피해를 입힌다.',
      weight: 5,
      execute: (target: Entity, self: Entity) => applyDamage(target, 5, self),
    },
    {
      id: 'goblin_double',
      name: '두 번 베기',
      description: '3의 피해를 2회 입힌다.',
      weight: 3,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 3, self);
        applyDamage(target, 3, self);
      },
    },
    {
      id: 'goblin_dodge',
      name: '회피 자세',
      description: '방어도 4를 획득한다.',
      weight: 2,
      execute: (_target: Entity, self: Entity) => { self.block += 4; },
    },
    {
      id: 'goblin_poison',
      name: '독 단검',
      description: '4의 피해 + 독 2를 부여한다.',
      weight: 2,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 4, self);
        addStatus(target, 'poison', 2);
      },
    },
  ];

  constructor() {
    super(30);
  }
}
