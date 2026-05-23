import type { Entity } from '../types';
import { applyDamage } from '../utils/combat';
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
      execute: (target: Entity, _self: Entity) => applyDamage(target, 7),
    },
    {
      id: 'bat_swoop',
      name: '급강하',
      description: '4의 피해를 2회 입힌다.',
      weight: 5,
      execute: (target: Entity, _self: Entity) => {
        applyDamage(target, 4);
        applyDamage(target, 4);
      },
    },
  ];

  constructor() {
    super(20);
  }
}
