import type { Card, Entity, Player, AttackPattern, BattleMode } from './types';
import { applyDamage, applyPoison, addStatus, tickDuration, emptyStatuses } from './utils/combat';
import { Slime } from './monsters/Slime';
import { Goblin } from './monsters/Goblin';
import { Orc } from './monsters/Orc';
import { Skeleton } from './monsters/Skeleton';
import { Bat } from './monsters/Bat';
import type { Monster } from './monsters/Monster';

/**
 * 카드 라이브러리.
 * - targetType 'single': 드롭된 적 한 명에게만 적용
 * - targetType 'all':    살아있는 모든 적에게 적용
 * 공격 카드는 모두 applyDamage(target, amount, u)를 사용하여
 * 플레이어의 strength/weak 상태이상이 반영됨.
 */
const CARD_LIBRARY: Card[] = [
  // ── 기본 카드 ──────────────────────────────────────────────────────────────
  {
    id: 'strike_a',
    name: '타격',
    cost: 1,
    targetType: 'single',
    description: '적에게 6의\n피해를 입힙니다.',
    onPlay: (u, targets) => applyDamage(targets[0], 6, u),
  },
  {
    id: 'strike_b',
    name: '타격',
    cost: 1,
    targetType: 'single',
    description: '적에게 6의\n피해를 입힙니다.',
    onPlay: (u, targets) => applyDamage(targets[0], 6, u),
  },
  {
    id: 'defend_a',
    name: '방어',
    cost: 1,
    targetType: 'single',
    description: '방어도 5를\n획득합니다.',
    onPlay: (u, _targets) => { u.block += 5; },
  },
  {
    id: 'heavy_blow',
    name: '강타',
    cost: 2,
    targetType: 'single',
    description: '적에게 14의\n피해를 입힙니다.',
    onPlay: (u, targets) => applyDamage(targets[0], 14, u),
  },
  {
    id: 'twin_strike',
    name: '쌍격',
    cost: 1,
    targetType: 'single',
    description: '5의 피해를\n2번 입힙니다.',
    onPlay: (u, targets) => {
      applyDamage(targets[0], 5, u);
      applyDamage(targets[0], 5, u);
    },
  },
  {
    id: 'explosion',
    name: '폭발',
    cost: 2,
    targetType: 'all',
    description: '모든 적에게\n4의 피해를 입힙니다.',
    onPlay: (u, targets) => targets.forEach(t => applyDamage(t, 4, u)),
  },
  {
    id: 'chain_attack',
    name: '연쇄 공격',
    cost: 1,
    targetType: 'single',
    description: '3의 피해를\n3번 입힙니다.',
    onPlay: (u, targets) => {
      applyDamage(targets[0], 3, u);
      applyDamage(targets[0], 3, u);
      applyDamage(targets[0], 3, u);
    },
  },
  {
    id: 'storm_blast',
    name: '폭풍격',
    cost: 3,
    targetType: 'all',
    description: '모든 적에게\n8의 피해를 입힙니다.',
    onPlay: (u, targets) => targets.forEach(t => applyDamage(t, 8, u)),
  },
  // ── 상태이상 카드 ──────────────────────────────────────────────────────────
  {
    id: 'poison_strike',
    name: '독침',
    cost: 1,
    targetType: 'single',
    description: '5의 피해 +\n독 3을 부여합니다.',
    onPlay: (u, targets) => {
      applyDamage(targets[0], 5, u);
      addStatus(targets[0], 'poison', 3);
    },
  },
  {
    id: 'toxic_cloud',
    name: '독기 방출',
    cost: 1,
    targetType: 'single',
    description: '대상에게\n독 5를 부여합니다.',
    onPlay: (_u, targets) => addStatus(targets[0], 'poison', 5),
  },
  {
    id: 'weaken',
    name: '취약화',
    cost: 1,
    targetType: 'single',
    description: '8의 피해 +\n취약 2를 부여합니다.',
    onPlay: (u, targets) => {
      applyDamage(targets[0], 8, u);
      addStatus(targets[0], 'vulnerable', 2);
    },
  },
  {
    id: 'empower',
    name: '역량 강화',
    cost: 1,
    targetType: 'single',
    description: '힘 2를 획득합니다.\n(자신에게 적용)',
    onPlay: (u, _targets) => addStatus(u, 'strength', 2),
  },
  {
    id: 'mass_poison',
    name: '독 폭풍',
    cost: 2,
    targetType: 'all',
    description: '모든 적에게\n독 3을 부여합니다.',
    onPlay: (_u, targets) => targets.forEach(t => addStatus(t, 'poison', 3)),
  },
];

/** 전체 게임 상태를 관리하는 싱글톤 */
export class GameState {
  private static _instance: GameState;

  static readonly DRAW_PER_TURN = 3;
  static readonly MAX_ENEMIES = 5;

  // ── 전투 간 유지되는 정적 상태 ──────────────────────────────────────────
  static gold = 0;
  static bonusCards: Card[] = [];

  player: Player;
  enemies: Monster[];  // 최대 5마리
  hand: Card[];
  deck: Card[];
  discard: Card[];

  private constructor(mode: BattleMode = 'default') {
    this.player = {
      name: '영웅',
      hp: 80,
      maxHp: 80,
      block: 0,
      mana: 3,
      maxMana: 3,
      statuses: emptyStatuses(),
    };

    if (mode === 'five_monsters') {
      this.enemies = [new Slime(), new Goblin(), new Orc(), new Skeleton(), new Bat()];
    } else {
      this.enemies = [new Slime()];
    }
    this.enemies.forEach(e => e.prepareNextAction());

    this.deck = this.shuffleArray([
      ...CARD_LIBRARY.map(c => ({ ...c })),
      ...GameState.bonusCards.map(c => ({ ...c })),
    ]);
    this.discard = [];
    this.hand = [];
    this.drawCards(GameState.DRAW_PER_TURN);
  }

  static get instance(): GameState {
    if (!GameState._instance) {
      GameState._instance = new GameState();
    }
    return GameState._instance;
  }

  private shuffleArray<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  drawCards(n: number): void {
    for (let i = 0; i < n; i++) {
      if (this.deck.length === 0) {
        if (this.discard.length === 0) break;
        this.deck = this.shuffleArray(this.discard);
        this.discard = [];
      }
      this.hand.push(this.deck.pop()!);
    }
  }

  /**
   * 카드 사용.
   * targetType='single' → [primaryTarget], targetType='all' → 살아있는 전체 적
   */
  playCard(cardId: string, primaryTarget: Monster): boolean {
    const idx = this.hand.findIndex(c => c.id === cardId);
    if (idx === -1) return false;

    const card = this.hand[idx];
    if (this.player.mana < card.cost) return false;

    this.player.mana -= card.cost;
    const targets: Entity[] = card.targetType === 'all'
      ? this.enemies.filter(e => e.hp > 0)
      : [primaryTarget];
    card.onPlay(this.player, targets);
    this.hand.splice(idx, 1);
    this.discard.push(card);
    return true;
  }

  /** 플레이어 턴 종료: 손패 버림 + 지속 상태이상 감소 */
  endPlayerTurn(): void {
    this.discard.push(...this.hand);
    this.hand = [];
    tickDuration(this.player, 'vulnerable');
    tickDuration(this.player, 'weak');
  }

  /**
   * idx번 몬스터의 턴 실행.
   * 독 선처리 → 행동 실행 → 지속 상태이상 감소.
   * @returns 실행된 패턴 (독으로 사망하거나 이미 죽었으면 null)
   */
  executeMonsterTurn(idx: number): AttackPattern | null {
    const monster = this.enemies[idx];
    if (!monster || monster.hp <= 0) return null;
    monster.block = 0;

    applyPoison(monster);
    if (monster.hp <= 0) {
      tickDuration(monster, 'vulnerable');
      tickDuration(monster, 'weak');
      return null;
    }

    const result = monster.executeTurn(this.player);
    tickDuration(monster, 'vulnerable');
    tickDuration(monster, 'weak');
    return result;
  }

  /**
   * 플레이어 턴 시작: 방어도 초기화 → 독 처리 → 마나 회복 → 카드 드로우.
   * @returns 독으로 처리된 피해량 (0이면 독 없음)
   */
  startPlayerTurn(): number {
    this.player.block = 0;
    const poisonDmg = applyPoison(this.player);
    this.player.mana = this.player.maxMana;
    this.drawCards(GameState.DRAW_PER_TURN);
    return poisonDmg;
  }

  static reset(mode: BattleMode = 'default'): void {
    GameState._instance = new GameState(mode);
  }

  /** 전투 간 유지되는 모든 진행 상태를 초기화 (런 종료 시 호출). */
  static hardReset(): void {
    GameState.gold = 0;
    GameState.bonusCards = [];
  }

  /**
   * 카드를 덱 보너스 풀에 영구 추가.
   * 다음 전투 시작 시 기본 덱 위에 함께 셔플됨.
   */
  static addBonusCard(card: Card): void {
    GameState.bonusCards.push({
      ...card,
      id: `${card.id}_bonus_${GameState.bonusCards.length}`,
    });
  }

  /**
   * 카드 라이브러리에서 n장을 무작위로 반환 (이름 중복 없음).
   * 카드 보상 화면에서 사용.
   */
  static getRandomRewardCards(n: number): Card[] {
    const unique = CARD_LIBRARY.filter(
      (c, i) => CARD_LIBRARY.findIndex(x => x.name === c.name) === i,
    );
    const pool = unique.map(c => ({ ...c }));
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.min(n, pool.length));
  }
}
