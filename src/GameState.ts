import type { Card, Entity, Player, AttackPattern } from './types';
import { applyDamage } from './utils/combat';
import { Slime } from './monsters/Slime';
import type { Monster } from './monsters/Monster';

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

  /** 턴 시작 시 드로우할 카드 수 */
  static readonly DRAW_PER_TURN = 3;

  player: Player;
  enemy: Monster;
  hand: Card[];    // 현재 손패
  deck: Card[];    // 뽑기 더미 (앞면 아래, 무작위 순서)
  discard: Card[]; // 버림 더미 (사용한 카드 누적)

  private constructor() {
    this.player = {
      name: '영웅',
      hp: 80,
      maxHp: 80,
      block: 0,
      mana: 3,
      maxMana: 3,
    };

    this.enemy = new Slime();
    this.enemy.prepareNextAction();

    this.deck = this.shuffleArray(CARD_LIBRARY.map(c => ({ ...c })));
    this.discard = [];
    this.hand = [];
    this.drawCards(GameState.DRAW_PER_TURN); // 전투 시작 첫 손패
  }

  static get instance(): GameState {
    if (!GameState._instance) {
      GameState._instance = new GameState();
    }
    return GameState._instance;
  }

  /** Fisher-Yates 알고리즘으로 배열을 제자리 셔플 */
  private shuffleArray<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /**
   * 뽑기 더미에서 n장을 손패로 가져옴.
   * 더미가 비면 버림 더미를 셔플해 자동으로 보충.
   */
  drawCards(n: number): void {
    for (let i = 0; i < n; i++) {
      if (this.deck.length === 0) {
        if (this.discard.length === 0) break; // 남은 카드 없음
        this.deck = this.shuffleArray(this.discard);
        this.discard = [];
      }
      this.hand.push(this.deck.pop()!);
    }
  }

  /**
   * 카드 사용.
   * 순서: 마나 검사 → 마나 차감 → onPlay 실행 → 손패에서 버림 더미로 이동.
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
    this.discard.push(card); // 사용된 카드는 버림 더미로
    return true;
  }

  /** 몬스터의 다음 예약 행동 (UI 의도 표시용) */
  get monsterIntent(): AttackPattern | null {
    return this.enemy.nextPattern;
  }

  /** 플레이어 턴 종료: 남은 손패를 버림 더미로 이동 */
  endPlayerTurn(): void {
    this.discard.push(...this.hand);
    this.hand = [];
  }

  /**
   * 몬스터 턴 실행.
   * 방어도 초기화 후 예약 패턴을 수행하고 다음 패턴을 예약.
   * @returns 실행된 AttackPattern
   */
  executeMonsterTurn(): AttackPattern {
    this.enemy.block = 0;
    return this.enemy.executeTurn(this.player);
  }

  /** 플레이어 턴 시작: 방어도 초기화 → 마나 회복 → 카드 드로우 */
  startPlayerTurn(): void {
    this.player.block = 0;
    this.player.mana = this.player.maxMana;
    this.drawCards(GameState.DRAW_PER_TURN);
  }

  /** 상태를 초기값으로 완전히 재설정 (BattleScene 재진입 시 호출) */
  static reset(): void {
    GameState._instance = new GameState();
  }
}
