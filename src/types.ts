// ── 상태이상 ──────────────────────────────────────────────────────────────────

/** 상태이상 종류 식별자 */
export type StatusId = 'poison' | 'strength' | 'vulnerable' | 'weak';

/**
 * 엔티티가 가진 모든 상태이상 수치.
 * - poison: 턴 시작 시 해당 수치의 HP 손실(방어도 무시), 이후 1 감소
 * - strength: 모든 공격에 고정 추가 피해 (지속)
 * - vulnerable: 해당 수치(턴)만큼 받는 피해 50% 증가, 매 턴 말 1 감소
 * - weak: 해당 수치(턴)만큼 주는 피해 25% 감소, 매 턴 말 1 감소
 */
export type StatusEffects = Record<StatusId, number>;

/** 전투에 참여하는 모든 개체의 공통 속성 */
export interface Entity {
  name: string;
  hp: number;
  maxHp: number;
  block: number; // 방어도: 피해를 먼저 흡수한 뒤 남은 수치를 HP에 적용
  statuses: StatusEffects;
}

/** 플레이어 전용 속성 — 마나 시스템 포함 */
export interface Player extends Entity {
  mana: number;
  maxMana: number;
  bonusDmg: number; // 유물(Blood Sword 등)에서 오는 일시적 공격 보너스
}

/**
 * 카드 인터페이스.
 * onPlay 함수에 효과를 캡슐화하여 if/else 없이 데이터 기반으로 동작.
 * - targetType 'single': primaryTarget 1개만 targets에 담겨 전달
 * - targetType 'all':    살아있는 모든 적이 targets에 담겨 전달
 */
/** 카드 종류 — Flame Amulet 등 일부 유물이 cardType을 참조 */
export type CardType = 'attack' | 'skill';

export interface Card {
  id: string;
  name: string;
  cost: number;
  description: string;
  targetType: 'single' | 'all';
  cardType?: CardType;
  onPlay: (user: Player, targets: Entity[]) => void;
  upgraded?: boolean;
  upgrade?: (self: Card) => void;
}

// ── 턴 시스템 타입 ─────────────────────────────────────────────────────────

/** 현재 턴 소유자 */
export type TurnPhase = 'player' | 'monster';

/** 전투 모드 — GameState 생성 시 사용할 몬스터 구성 결정 */
export type BattleMode = 'default' | 'five_monsters' | 'boss' | 'elite_giant' | 'elite_spider';

// ── 맵 시스템 타입 ────────────────────────────────────────────────────────────

export type NodeType = 'battle' | 'elite' | 'boss' | 'event' | 'shop' | 'rest' | 'treasure';

/** 던전 맵의 노드 하나 */
export interface MapNode {
  type: NodeType;
  row: number;
  col: number;
  connections: number[]; // 다음 row에서 연결된 col 인덱스 목록
  jitterX: number;       // 렌더링 시 X 좌표 오프셋 (픽셀)
  jitterY: number;       // 렌더링 시 Y 좌표 오프셋 (픽셀)
}

/**
 * 몬스터 행동 패턴.
 * weight가 클수록 선택 확률이 높음.
 */
export interface AttackPattern {
  id: string;
  name: string;
  description: string;
  weight: number;
  execute: (target: Entity, self: Entity) => void;
}

// ── 대화 시스템 타입 ──────────────────────────────────────────────────────

/** 대화에서 말하는 주체의 역할 */
export type SpeakerRole = 'protagonist' | 'other' | 'narrator';

/** 대화 스크립트의 한 줄 */
export interface DialogueLine {
  speaker: SpeakerRole;
  characterName?: string;
  text: string;
}

/** 하나의 완전한 대화 시퀀스 */
export interface DialogueScript {
  id: string;
  showOtherCharacter: boolean;
  lines: DialogueLine[];
}

/** DialogueScene 초기화 시 전달할 데이터 구조 */
export interface DialogueSceneData {
  scriptId: string;
  returnScene: string;
  resumeScene?: string;
}

/** VictoryScene 초기화 시 전달할 데이터 구조 */
export interface VictorySceneData {
  gold?: number;       // 생략 시 GameState.pendingGold 사용 (보스/엘리트 → RelicReward 경유 시)
  returnScene?: string; // 생략 시 GameState.pendingReturnScene 사용
}

/** CardRewardScene 초기화 시 전달할 데이터 구조 */
export interface CardRewardSceneData {
  cards: Card[];
  returnScene: string;
}

/** PileViewerScene 초기화 시 전달할 데이터 구조 */
export interface PileViewerSceneData {
  cards: Card[];
  title: string;
}

/** RestScene 초기화 시 전달할 데이터 구조 */
export interface RestSceneData {
  returnScene: string;
}

/** ShopScene 초기화 시 전달할 데이터 구조 */
export interface ShopSceneData {
  returnScene: string;
}

/** EventScene 초기화 시 전달할 데이터 구조 */
export interface EventSceneData {
  eventId?: string;  // 생략 시 랜덤 이벤트
  returnScene: string;
}

// ── 포션 시스템 타입 ───────────────────────────────────────────────────────

export type PotionId = 'heal_potion' | 'strength_potion' | 'explosive_potion' | 'draw_potion';

/** 전투 중 사용 가능한 일회용 소모품 */
export interface Potion {
  id: PotionId;
  name: string;
  description: string;
}

// ── 유물 시스템 타입 ───────────────────────────────────────────────────────

export type RelicId =
  | 'flame_amulet'
  | 'bone_ring'
  | 'toxic_crystal'
  | 'blood_sword'
  | 'old_coin'
  | 'mana_crystal';

export type RelicTier = 'common' | 'rare' | 'boss';

/** 전투 간 지속되는 패시브 아이템 */
export interface Relic {
  id: RelicId;
  name: string;
  description: string;
  tier: RelicTier;
}

/** RelicRewardScene 초기화 시 전달할 데이터 구조 */
export interface RelicRewardSceneData {
  relics: Relic[];
  returnScene: string;
}

// ── 도전 과제 시스템 타입 ──────────────────────────────────────────────────────

export type AchievementId =
  | 'first_victory'
  | 'untouchable'
  | 'boss_slayer'
  | 'elite_slayer'
  | 'relic_collector'
  | 'card_master'
  | 'big_earner'
  | 'survivor';

export type AchievementRewardType = 'gold' | 'heal' | 'max_hp';

export interface AchievementReward {
  type: AchievementRewardType;
  amount: number;
  description: string;
}

export interface Achievement {
  id: AchievementId;
  name: string;
  description: string;
  reward: AchievementReward;
}
