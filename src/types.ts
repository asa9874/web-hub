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
  mana: number;    // 현재 마나
  maxMana: number; // 최대 마나 (턴 시작 시 이 값으로 회복)
}

/**
 * 카드 인터페이스.
 * onPlay 함수에 효과를 캡슐화하여 if/else 없이 데이터 기반으로 동작.
 * - targetType 'single': primaryTarget 1개만 targets에 담겨 전달
 * - targetType 'all':    살아있는 모든 적이 targets에 담겨 전달
 */
export interface Card {
  id: string;
  name: string;
  cost: number;
  description: string;
  targetType: 'single' | 'all';
  onPlay: (user: Player, targets: Entity[]) => void;
  upgraded?: boolean;
  upgrade?: (self: Card) => void;
}

// ── 턴 시스템 타입 ─────────────────────────────────────────────────────────

/** 현재 턴 소유자 */
export type TurnPhase = 'player' | 'monster';

/** 전투 모드 — GameState 생성 시 사용할 몬스터 구성 결정 */
export type BattleMode = 'default' | 'five_monsters';

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
  gold: number;
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
