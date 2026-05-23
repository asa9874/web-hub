import type { Entity } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { Monster } from './Monster';

export class SpiderQueen extends Monster {
  readonly name = '독거미 여왕';
  readonly description = '독액으로 먹이를 사냥하는 거대 거미. 독 공격에 특화되어 있다.';
  readonly isElite = true;

  readonly patterns = [
    {
      id: 'venom_bite',
      name: '독성 물기',
      description: '8의 피해 + 독 4를 부여한다.',
      weight: 3,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 8, self);
        addStatus(target, 'poison', 4);
      },
    },
    {
      id: 'web_trap',
      name: '거미줄 덫',
      description: '약화 3을 부여한다.',
      weight: 2,
      execute: (target: Entity) => addStatus(target, 'weak', 3),
    },
    {
      id: 'toxic_fang',
      name: '독 송곳니',
      description: '12의 피해 + 독 2를 부여한다.',
      weight: 2,
      execute: (target: Entity, self: Entity) => {
        applyDamage(target, 12, self);
        addStatus(target, 'poison', 2);
      },
    },
    {
      id: 'poison_spray',
      name: '독액 분사',
      description: '취약 2 + 독 3을 부여한다.',
      weight: 1,
      execute: (target: Entity) => {
        addStatus(target, 'vulnerable', 2);
        addStatus(target, 'poison', 3);
      },
    },
  ];

  constructor() {
    super(80);
  }
}
