import type { Card, Entity, Player } from './types';

/** 방어도를 먼저 소모하고 남은 수치를 HP에 적용하는 순수 헬퍼 */
function applyDamage(target: Entity, amount: number): void {
  const absorbed = Math.min(target.block, amount);
  target.block -= absorbed;
  target.hp = Math.max(0, target.hp - (amount - absorbed));
}

/**
 * 카드 라이브러리.
 * 새 카드 추가 시 이 배열에만 항목을 추가하면 됨 — 씬이나 GameState 로직 수정 불필요.
 */
const CARD_LIBRARY: Card[] = [
  {
    id: 'strike_a',
    name: '타격',
    cost: 1,
    description: '적에게 6의\n피해를 입힙니다.',
    onPlay: (_user, target) => applyDamage(target, 6),
  },
  {
    id: 'strike_b',
    name: '타격',
    cost: 1,
    description: '적에게 6의\n피해를 입힙니다.',
    onPlay: (_user, target) => applyDamage(target, 6),
  },
  {
    id: 'defend_a',
    name: '방어',
    cost: 1,
    description: '방어도 5를\n획득합니다.',
    onPlay: (user, _target) => { user.block += 5; },
  },
  {
    id: 'heavy_blow',
    name: '강타',
    cost: 2,
    description: '적에게 14의\n피해를 입힙니다.',
    onPlay: (_user, target) => applyDamage(target, 14),
  },
  {
    id: 'twin_strike',
    name: '쌍격',
    cost: 1,
    description: '5의 피해를\n2번 입힙니다.',
    onPlay: (_user, target) => {
      applyDamage(target, 5);
      applyDamage(target, 5);
    },
  },
];

/** 전체 게임 상태를 관리하는 싱글톤 */
export class GameState {
  private static _instance: GameState;

  player: Player;
  enemy: Entity;
  hand: Card[];

  private constructor() {
    // 플레이어 초기 상태
    this.player = {
      name: '영웅',
      hp: 80,
      maxHp: 80,
      block: 0,
      mana: 3,
      maxMana: 3,
    };

    // 적 초기 상태
    this.enemy = {
      name: '슬라임',
      hp: 50,
      maxHp: 50,
      block: 0,
    };

    // 초기 패: 라이브러리를 얕게 복사해 독립된 인스턴스로 사용
    this.hand = CARD_LIBRARY.map(c => ({ ...c }));
  }

  static get instance(): GameState {
    if (!GameState._instance) {
      GameState._instance = new GameState();
    }
    return GameState._instance;
  }

  /**
   * 카드 사용.
   * 순서: 마나 검사 → 마나 차감 → onPlay 실행 → 패에서 제거.
   * @returns 성공 true / 마나 부족·카드 없음 false
   */
  playCard(cardId: string, target: Entity): boolean {
    const idx = this.hand.findIndex(c => c.id === cardId);
    if (idx === -1) return false;

    const card = this.hand[idx];
    if (this.player.mana < card.cost) return false;

    this.player.mana -= card.cost;
    card.onPlay(this.player, target);
    this.hand.splice(idx, 1);
    return true;
  }

  /** 턴 종료: 마나 회복 및 플레이어 방어도 초기화 */
  endTurn(): void {
    this.player.mana = this.player.maxMana;
    this.player.block = 0;
    // Phase 2: 적 행동 및 새 카드 드로우 추가 예정
  }
}
