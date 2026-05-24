import type { Card, Entity, Player, AttackPattern, BattleMode, Relic, RelicId, RelicTier, MapNode, Potion } from './types';
import { generateMap } from './data/mapGenerator';
import { POTION_LIBRARY } from './potions/potionLibrary';
import { applyPoison, addStatus, tickDuration, emptyStatuses } from './utils/combat';
import { RELIC_LIBRARY } from './relics/relicLibrary';
import { CARD_LIBRARY, STARTER_DECK_IDS } from './data/cardLibrary';
import { MemoryGhost } from './monsters/Act1/Normal/MemoryGhost';
import { DarkKnight } from './monsters/Act1/Normal/DarkKnight';
import { ShadowCat } from './monsters/Act1/Normal/ShadowCat';
import { StarAbsorber } from './monsters/Act1/Normal/StarAbsorber';
import { MirrorPhantom } from './monsters/Act1/Normal/MirrorPhantom';
import { CorruptedKnight } from './monsters/Act1/Elite/CorruptedKnight';
import { DarkPriest } from './monsters/Act1/Elite/DarkPriest';
import { AbyssBeast } from './monsters/Act1/Elite/AbyssBeast';
import { DarkLord } from './monsters/Act1/Boss/DarkLord';
import { StarDestroyer } from './monsters/Act1/Boss/StarDestroyer';
import { MemoryKing } from './monsters/Act1/Boss/MemoryKing';
import { AbyssGuard } from './monsters/Act2/Normal/AbyssGuard';
import { KnowledgeCollector } from './monsters/Act2/Normal/KnowledgeCollector';
import { TwistedDoll } from './monsters/Act2/Normal/TwistedDoll';
import { EchoDemon } from './monsters/Act2/Normal/EchoDemon';
import { BookSpirit } from './monsters/Act2/Normal/BookSpirit';
import { TowerWatcher } from './monsters/Act2/Elite/TowerWatcher';
import { FearCrystal } from './monsters/Act2/Elite/FearCrystal';
import { AbyssMage } from './monsters/Act2/Elite/AbyssMage';
import { ShadowTitan } from './monsters/Act2/Boss/ShadowTitan';
import { FearQueen } from './monsters/Act2/Boss/FearQueen';
import { TowerMaster } from './monsters/Act2/Boss/TowerMaster';
import { AncientOne } from './monsters/Act3/Boss/AncientOne';
import { TimeWarden } from './monsters/Act3/Normal/TimeWarden';
import { AncientGuardDoll } from './monsters/Act3/Normal/AncientGuardDoll';
import { StarJudge } from './monsters/Act3/Normal/StarJudge';
import { DimensionRift } from './monsters/Act3/Normal/DimensionRift';
import { ConstellationFragment } from './monsters/Act3/Normal/ConstellationFragment';
import { CosmicWarden } from './monsters/Act3/Elite/CosmicWarden';
import { ConstellationGuardian } from './monsters/Act3/Elite/ConstellationGuardian';
import { TimeRuler } from './monsters/Act3/Elite/TimeRuler';
import { StarHeartGuardian } from './monsters/Act3/Boss/StarHeartGuardian';
import { LordOfTime } from './monsters/Act3/Boss/LordOfTime';
import type { Monster } from './monsters/Monster';


/** 전체 게임 상태를 관리하는 싱글톤 */
export class GameState {
  private static _instance: GameState;

  static readonly DRAW_PER_TURN = 3;
  static readonly MAX_ENEMIES = 5;

  // ── 전투 간 유지되는 정적 상태 ──────────────────────────────────────────
  static gold = 0;
  static bonusCards: Card[] = [];
  static playerHp = 80;
  static playerMaxHp = 80;
  static playerMaxMana = 3;
  static upgradedCardIds: string[] = [];
  static equippedRelics: Relic[] = [];
  static cardRemovalCost = 75;
  static removedCardIds: string[] = [];
  static pendingGold = 0;           // 보스/엘리트 전투 → RelicReward 경유 시 VictoryScene이 읽을 골드
  static pendingReturnScene = '';   // RelicReward → VictoryScene 경유 시 returnScene 전달용
  static potionSlots: (Potion | null)[] = [null, null];  // 포션 슬롯 (최대 2개)

  // ── 맵 상태 ───────────────────────────────────────────────────────────────
  static mapSeed = 0;
  static mapNodes: MapNode[][] = [];
  static visitedNodeKeys: string[] = [];
  static currentMapNode: { row: number; col: number } | null = null;
  static lastBattleWon = false;

  static readonly MAX_RELICS = 5;

  // ── 액트 진행 ─────────────────────────────────────────────────────────────
  /** 현재 액트 번호 (1 = 던전 탐험, 2 = 심연의 탑, 3 = 고대의 전당) */
  static currentAct = 1;

  // ── 도전 과제 추적용 ─────────────────────────────────────────────────────
  /** 현재 런에서 전투 승리 횟수 */
  static totalBattlesWon = 0;
  /** 현재 전투 시작 시 플레이어 HP (무적 달성 여부 판정용) */
  static battleStartHp = 80;

  player: Player;
  enemies: Monster[];  // 최대 5마리
  hand: Card[];
  deck: Card[];
  discard: Card[];

  private firstAttackPlayedThisTurn = false; // Flame Amulet용

  private static buildRunCards(): Card[] {
    const libMap = new Map(CARD_LIBRARY.map(c => [c.id, c]));
    const starterInstances = STARTER_DECK_IDS
      .map((baseId, i) => {
        const tmpl = libMap.get(baseId);
        return tmpl ? { ...tmpl, id: `${baseId}_s${i}` } : null;
      })
      .filter(Boolean) as Card[];

    return [
      ...starterInstances
        .filter(c => !GameState.removedCardIds.includes(c.id))
        .map(c => GameState.applyUpgrade({ ...c })),
      ...GameState.bonusCards
        .filter(c => !GameState.removedCardIds.includes(c.id))
        .map(c => GameState.applyUpgrade({ ...c })),
    ];
  }

  private constructor(mode: BattleMode = 'default') {
    this.player = {
      name: '루나 실버',
      hp: GameState.playerHp,
      maxHp: GameState.playerMaxHp,
      block: 0,
      mana: GameState.playerMaxMana,
      maxMana: GameState.playerMaxMana,
      statuses: emptyStatuses(),
      bonusDmg: 0,
    };

    if (mode === 'five_monsters') {
      this.enemies = [
        GameState.spawnNormalMonster(),
        GameState.spawnNormalMonster(),
        GameState.spawnNormalMonster(),
        GameState.spawnNormalMonster(),
        GameState.spawnNormalMonster(),
      ];
    } else if (mode === 'boss') {
      if (GameState.currentAct === 3) this.enemies = [GameState.spawnAct3BossMonster()];
      else if (GameState.currentAct === 2) this.enemies = [GameState.spawnAct2BossMonster()];
      else this.enemies = [GameState.spawnBossMonster()];
    } else if (mode === 'elite') {
      this.enemies = [GameState.spawnEliteMonster()];
    } else {
      this.enemies = [GameState.spawnNormalMonster()];
    }
    this.enemies.forEach(e => e.prepareNextAction());

    this.deck = this.shuffleArray(GameState.buildRunCards());
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

    // Flame Amulet: 매 턴 첫 공격 카드 비용 1 감소
    let costReduction = 0;
    if (
      GameState.hasRelic('flame_amulet') &&
      !this.firstAttackPlayedThisTurn &&
      card.cardType === 'attack'
    ) {
      costReduction = 1;
      this.firstAttackPlayedThisTurn = true;
    }
    const effectiveCost = Math.max(0, card.cost - costReduction);
    if (this.player.mana < effectiveCost) return false;

    this.player.mana -= effectiveCost;

    // Blood Sword: HP 50% 이하일 때 공격 +3
    this.player.bonusDmg =
      GameState.hasRelic('blood_sword') &&
      this.player.hp <= this.player.maxHp / 2 &&
      card.cardType === 'attack'
        ? 3
        : 0;

    // Toxic Crystal: 독 부여량 +1 — 카드 실행 전 적 독 스택 스냅샷
    const poisonBefore = this.enemies.map(e => e.statuses.poison);

    const targets: Entity[] = card.targetType === 'all'
      ? this.enemies.filter(e => e.hp > 0)
      : [primaryTarget];
    card.onPlay(this.player, targets);

    // pendingDraw: draw-card effects signal via player field (avoids circular import)
    if (this.player.pendingDraw && this.player.pendingDraw > 0) {
      this.drawCards(this.player.pendingDraw);
      this.player.pendingDraw = 0;
    }

    // Toxic Crystal 사후 처리
    if (GameState.hasRelic('toxic_crystal')) {
      this.enemies.forEach((e, i) => {
        if (e.statuses.poison > poisonBefore[i]) addStatus(e, 'poison', 1);
      });
    }

    this.player.bonusDmg = 0;
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

    // Bone Ring: 턴 시작 시 방어도 4 획득
    if (GameState.hasRelic('bone_ring')) this.player.block += 4;

    // Flame Amulet: 매 턴 첫 번째 공격 카드 할인 초기화
    this.firstAttackPlayedThisTurn = false;

    this.drawCards(GameState.DRAW_PER_TURN);

    // starAura: 턴 시작 시 방어도 추가
    if (this.player.statuses.starAura > 0) {
      this.player.block += this.player.statuses.starAura;
    }
    // constellation: 턴 시작 시 추가 드로우
    if (this.player.statuses.constellation > 0) {
      this.drawCards(this.player.statuses.constellation);
    }

    return poisonDmg;
  }

  static reset(mode: BattleMode = 'default'): void {
    GameState._instance = new GameState(mode);
  }

  /** 전투 간 유지되는 모든 진행 상태를 초기화 (런 종료 시 호출). */
  static hardReset(): void {
    GameState.gold = 0;
    GameState.bonusCards = [];
    GameState.playerHp = 80;
    GameState.playerMaxHp = 80;
    GameState.playerMaxMana = 3;
    GameState.upgradedCardIds = [];
    GameState.equippedRelics = [];
    GameState.cardRemovalCost = 75;
    GameState.removedCardIds = [];
    GameState.pendingGold = 0;
    GameState.pendingReturnScene = '';
    GameState.potionSlots = [null, null];
    GameState.mapSeed = 0;
    GameState.mapNodes = [];
    GameState.visitedNodeKeys = [];
    GameState.currentMapNode = null;
    GameState.lastBattleWon = false;
    GameState.currentAct = 1;
    GameState.totalBattlesWon = 0;
    GameState.battleStartHp = 80;
  }

  // ── 유물 관련 정적 메서드 ────────────────────────────────────────────────

  /** 유물 장착. Mana Crystal은 즉시 maxMana +1 적용. */
  static addRelic(relic: Relic): void {
    if (GameState.equippedRelics.length >= GameState.MAX_RELICS) return;
    if (GameState.equippedRelics.some(r => r.id === relic.id)) return;
    GameState.equippedRelics.push(relic);
    if (relic.id === 'mana_crystal') GameState.playerMaxMana += 1;
  }

  static hasRelic(id: RelicId): boolean {
    return GameState.equippedRelics.some(r => r.id === id);
  }

  /**
   * 지정 등급의 미획득 유물을 무작위로 n개 반환.
   * 풀이 부족하면 있는 것만 반환.
   */
  static getRandomRelics(tier: RelicTier, n: number): Relic[] {
    const pool = RELIC_LIBRARY.filter(
      r => r.tier === tier && !GameState.equippedRelics.some(e => e.id === r.id),
    );
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.min(n, pool.length));
  }

  /** 상점 가격 계산 시 사용 — Old Coin 장착 시 10% 할인. */
  static getShopDiscount(): number {
    return GameState.hasRelic('old_coin') ? 0.1 : 0;
  }

  /** 카드 상점 가격. 코스트 기준 범위 + 할인 적용. */
  static getCardShopPrice(card: Card): number {
    let base: number;
    if (card.cost <= 1) base = 50 + Math.floor(Math.random() * 26);       // 50–75G
    else if (card.cost === 2) base = 75 + Math.floor(Math.random() * 36); // 75–110G
    else base = 120 + Math.floor(Math.random() * 61);                     // 120–180G
    return Math.floor(base * (1 - GameState.getShopDiscount()));
  }

  /** 유물 상점 가격. 등급 기준 + 할인 적용. */
  static getRelicShopPrice(relic: Relic): number {
    const base = relic.tier === 'common' ? 120 : relic.tier === 'rare' ? 200 : 320;
    return Math.floor(base * (1 - GameState.getShopDiscount()));
  }

  /** 카드를 영구 제거 (상점). 다음 전투부터 덱에서 빠지며 제거 비용 +25. */
  static removeCard(cardId: string): void {
    if (!GameState.removedCardIds.includes(cardId)) {
      GameState.removedCardIds.push(cardId);
      GameState.cardRemovalCost += 25;
    }
  }

  /** 카드를 영구 제거 (이벤트 무료). 비용 증가 없음. */
  static removeCardFree(cardId: string): void {
    if (!GameState.removedCardIds.includes(cardId)) {
      GameState.removedCardIds.push(cardId);
    }
  }

  /** 전투 종료 시 현재 HP를 정적 상태에 저장. */
  static savePlayerState(hp: number): void {
    GameState.playerHp = Math.max(0, hp);
  }

  /** 캠프파이어 휴식 — 최대 HP의 30%를 회복. 실제 회복량 반환. */
  static restHeal(): number {
    const heal = Math.floor(GameState.playerMaxHp * 0.3);
    const actual = Math.min(heal, GameState.playerMaxHp - GameState.playerHp);
    GameState.playerHp += actual;
    return actual;
  }

  /** 카드 업그레이드 ID 등록. 다음 전투부터 적용. */
  static upgradeCard(cardId: string): void {
    if (!GameState.upgradedCardIds.includes(cardId)) {
      GameState.upgradedCardIds.push(cardId);
    }
  }

  /** 현재 런의 전체 카드 목록 (업그레이드 상태 반영). 캠프파이어 UI에서 사용. */
  static getAllRunCards(): Card[] {
    return GameState.buildRunCards();
  }

  private static applyUpgrade(copy: Card): Card {
    if (GameState.upgradedCardIds.includes(copy.id) && copy.upgrade) {
      copy.upgrade(copy);
    }
    return copy;
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

  // ── 맵 시스템 정적 메서드 ─────────────────────────────────────────────────

  /** 새 던전 맵을 생성. seed 생략 시 랜덤 시드 사용. */
  static initMap(seed?: number): void {
    GameState.mapSeed = seed ?? Math.floor(Math.random() * 999999) + 1;
    GameState.mapNodes = generateMap(GameState.mapSeed, GameState.currentAct);
    GameState.visitedNodeKeys = [];
    GameState.currentMapNode = null;
    GameState.lastBattleWon = false;
  }

  /** 노드 방문 완료 표시 */
  static markNodeVisited(row: number, col: number): void {
    const key = `${row}_${col}`;
    if (!GameState.visitedNodeKeys.includes(key)) {
      GameState.visitedNodeKeys.push(key);
    }
  }

  /** 현재 진행 상황에서 이동 가능한 노드 목록 반환 */
  static getAvailableMapNodes(): MapNode[] {
    const visited = new Set(GameState.visitedNodeKeys);
    const map = GameState.mapNodes;
    if (!map.length) return [];

    // 첫 턴: row 0 전체
    if (visited.size === 0) return map[0] ?? [];

    // 방문한 최고 row 탐색
    let maxRow = -1;
    for (const key of visited) {
      const r = parseInt(key.split('_')[0], 10);
      if (r > maxRow) maxRow = r;
    }

    const nextRowNodes = map[maxRow + 1];
    if (!nextRowNodes) return [];

    // maxRow에서 방문된 노드의 connections를 모아 다음 row 가용 노드 결정
    const availableCols = new Set<number>();
    (map[maxRow] ?? []).forEach(node => {
      if (visited.has(`${node.row}_${node.col}`)) {
        node.connections.forEach(c => availableCols.add(c));
      }
    });

    return nextRowNodes.filter(n => availableCols.has(n.col));
  }

  // ── 포션 시스템 정적 메서드 ─────────────────────────────────────────────────

  /** 비어있는 슬롯에 포션 추가. 슬롯 가득 차면 false 반환. */
  static addPotion(potion: Potion): boolean {
    const slot = GameState.potionSlots.findIndex(s => s === null);
    if (slot === -1) return false;
    GameState.potionSlots[slot] = potion;
    return true;
  }

  /** 라이브러리에서 무작위 포션 1개 반환. */
  static getRandomPotion(): Potion {
    return POTION_LIBRARY[Math.floor(Math.random() * POTION_LIBRARY.length)];
  }

  /** 포션 상점 가격 (할인 적용). */
  static getPotionShopPrice(): number {
    const base = 50 + Math.floor(Math.random() * 31); // 50–80G
    return Math.floor(base * (1 - GameState.getShopDiscount()));
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

  // ── Act 1 몬스터 스폰 ─────────────────────────────────────────────────────

  static spawnNormalMonster(): Monster {
    if (GameState.currentAct === 3) return GameState.spawnAct3NormalMonster();
    if (GameState.currentAct === 2) return GameState.spawnAct2NormalMonster();
    const r = Math.random() * 100;
    if (r < 30) return new MemoryGhost();
    if (r < 55) return new DarkKnight();
    if (r < 75) return new ShadowCat();
    if (r < 90) return new StarAbsorber();
    return new MirrorPhantom();
  }

  static spawnEliteMonster(): Monster {
    if (GameState.currentAct === 3) return GameState.spawnAct3EliteMonster();
    if (GameState.currentAct === 2) return GameState.spawnAct2EliteMonster();
    const r = Math.random() * 100;
    if (r < 45) return new CorruptedKnight();
    if (r < 80) return new DarkPriest();
    return new AbyssBeast();
  }

  static spawnBossMonster(): Monster {
    const r = Math.floor(Math.random() * 3);
    if (r === 0) return new DarkLord();
    if (r === 1) return new StarDestroyer();
    return new MemoryKing();
  }

  // ── Act 2 몬스터 스폰 ─────────────────────────────────────────────────────

  static spawnAct2NormalMonster(): Monster {
    const r = Math.random() * 100;
    if (r < 30) return new AbyssGuard();
    if (r < 55) return new KnowledgeCollector();
    if (r < 75) return new TwistedDoll();
    if (r < 90) return new EchoDemon();
    return new BookSpirit();
  }

  static spawnAct2EliteMonster(): Monster {
    const r = Math.random() * 100;
    if (r < 40) return new TowerWatcher();
    if (r < 75) return new FearCrystal();
    return new AbyssMage();
  }

  static spawnAct2BossMonster(): Monster {
    const r = Math.floor(Math.random() * 3);
    if (r === 0) return new ShadowTitan();
    if (r === 1) return new FearQueen();
    return new TowerMaster();
  }

  // ── Act 3 몬스터 스폰 ─────────────────────────────────────────────────────

  static spawnAct3NormalMonster(): Monster {
    const r = Math.random() * 100;
    if (r < 30) return new TimeWarden();
    if (r < 55) return new AncientGuardDoll();
    if (r < 75) return new StarJudge();
    if (r < 90) return new DimensionRift();
    return new ConstellationFragment();
  }

  static spawnAct3EliteMonster(): Monster {
    const r = Math.random() * 100;
    if (r < 40) return new CosmicWarden();
    if (r < 75) return new ConstellationGuardian();
    return new TimeRuler();
  }

  static spawnAct3BossMonster(): Monster {
    const r = Math.floor(Math.random() * 3);
    if (r === 0) return new StarHeartGuardian();
    if (r === 1) return new LordOfTime();
    return new AncientOne();
  }
}
