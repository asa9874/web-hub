import type { Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { Monster } from './Monster';

export class Bat extends Monster {
  readonly name = '박쥐';
  readonly description = '빠르게 날아다니는 소형 몬스터. 연속으로 물어뜯는다.';

  readonly patterns = [
    {
      id: 'bat_bite',
      name: '물기',
      description: '7의 피해를 입힌다.',
      weight: 5,
      execute: (target: Entity, self: Entity) => applyDamage(target, 7, self),
    },
    {
      id: 'bat_swoop',
      name: '급강하',
      description: '4의 피해를 2회 입힌다.',
      weight: 4,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 4, self);
        applyDamage(target, 4, self);
      },
    },
    {
      id: 'bat_drain',
      name: '흡혈',
      description: '3의 피해 + 힘 1 획득.',
      weight: 3,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 3, self);
        addStatus(self, 'strength', 1);
      },
    },
  ];

  constructor() {
    super(20);
  }
}
