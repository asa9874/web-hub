import type { Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { Monster } from './Monster';

export class Slime extends Monster {
  readonly name = '슬라임';
  readonly description = '축축하고 끈적한 점액질 생명체. 단순하지만 집요하게 공격한다.';

  readonly patterns = [
    {
      id: 'slime_smash',
      name: '점액 강타',
      description: '8의 피해를 입힌다.',
      weight: 5,
      execute: (target: Entity, self: Entity) => applyDamage(target, 8, self),
    },
    {
      id: 'slime_double',
      name: '연속 공격',
      description: '5의 피해를 2회 입힌다.',
      weight: 3,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 5, self);
        applyDamage(target, 5, self);
      },
    },
    {
      id: 'slime_shield',
      name: '점액 막',
      description: '방어도 6을 획득한다.',
      weight: 2,
      execute: (_target: Entity, self: Entity) => { self.block += 6; },
    },
    {
      id: 'slime_spit',
      name: '독성 점액',
      description: '독 2를 부여한다.',
      weight: 2,
      execute: (target: Entity, _self: Entity) => addStatus(target, 'poison', 2),
    },
  ];

  constructor() {
    super(50);
  }
}
