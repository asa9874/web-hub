import type { Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { Monster } from './Monster';

export class ForestGiant extends Monster {
  readonly name = '숲 거인';
  readonly description = '고대 숲을 지키는 거대한 존재. 강력한 힘과 재생 능력을 가지고 있다.';
  readonly isElite = true;

  readonly patterns = [
    {
      id: 'rush',
      name: '돌진',
      description: '18의 피해 + 약화 3을 부여한다.',
      weight: 3,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 18, self);
        addStatus(target, 'weak', 3);
      },
    },
    {
      id: 'ground_slam',
      name: '대지 강타',
      description: '14의 피해 + 취약 2를 부여한다.',
      weight: 2,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 14, self);
        addStatus(target, 'vulnerable', 2);
      },
    },
    {
      id: 'regenerate',
      name: '재생',
      description: '방어도 14를 획득한다.',
      weight: 2,
      execute: (_target: Entity, self: Entity) => { self.block += 14; },
    },
    {
      id: 'stone_hand',
      name: '돌 주먹',
      description: '10의 피해 + 힘 1을 획득한다.',
      weight: 1,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 10, self);
        addStatus(self, 'strength', 1);
      },
    },
  ];

  constructor() {
    super(120);
  }
}
