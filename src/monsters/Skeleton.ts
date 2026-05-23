import type { Entity } from '../types';
import { applyDamage } from '../utils/combat';
import { Monster } from './Monster';

export class Skeleton extends Monster {
  readonly name = '해골';
  readonly description = '뼈로 이루어진 언데드. 여러 번 나눠 공격하거나 방어도를 쌓는다.';

  readonly patterns = [
    {
      id: 'skeleton_throw',
      name: '뼈 던지기',
      description: '6의 피해를 입힌다.',
      weight: 4,
      execute: (target: Entity, _self: Entity) => applyDamage(target, 6),
    },
    {
      id: 'skeleton_shield',
      name: '뼈 방패',
      description: '방어도 7을 획득한다.',
      weight: 3,
      execute: (_target: Entity, self: Entity) => { self.block += 7; },
    },
    {
      id: 'skeleton_barrage',
      name: '뼈 폭격',
      description: '3의 피해를 3회 입힌다.',
      weight: 3,
      execute: (target: Entity, _self: Entity) => {
        applyDamage(target, 3);
        applyDamage(target, 3);
        applyDamage(target, 3);
      },
    },
  ];

  constructor() {
    super(40);
  }
}
