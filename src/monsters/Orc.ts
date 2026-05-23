import type { Entity } from '../types';
import { applyDamage } from '../utils/combat';
import { Monster } from './Monster';

export class Orc extends Monster {
  readonly name = '오크';
  readonly description = '거대한 체구의 전사. 느리지만 한 방이 강력하다.';

  readonly patterns = [
    {
      id: 'orc_smash',
      name: '대검 강타',
      description: '14의 피해를 입힌다.',
      weight: 4,
      execute: (target: Entity, _self: Entity) => applyDamage(target, 14),
    },
    {
      id: 'orc_guard',
      name: '방패 올리기',
      description: '방어도 8을 획득한다.',
      weight: 3,
      execute: (_target: Entity, self: Entity) => { self.block += 8; },
    },
    {
      id: 'orc_fury',
      name: '분노의 일격',
      description: '10의 피해를 입힌다.',
      weight: 3,
      execute: (target: Entity, _self: Entity) => applyDamage(target, 10),
    },
  ];

  constructor() {
    super(80);
  }
}
