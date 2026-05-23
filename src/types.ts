/** 전투에 참여하는 모든 개체의 공통 속성 */
export interface Entity {
  name: string;
  hp: number;
  maxHp: number;
  block: number; // 방어도: 피해를 먼저 흡수한 뒤 남은 수치를 HP에 적용
}

/** 플레이어 전용 속성 — 마나 시스템 포함 */
export interface Player extends Entity {
  mana: number;    // 현재 마나
  maxMana: number; // 최대 마나 (턴 시작 시 이 값으로 회복)
}

/**
 * 카드 인터페이스.
 * onPlay 함수에 효과를 캡슐화하여 if/else 없이 데이터 기반으로 동작.
 * 새 카드 추가 = 이 타입을 따르는 객체 한 개 추가, 씬·로직 수정 없음.
 */
export interface Card {
  id: string;          // 패 내 고유 식별자
  name: string;        // 카드 이름 (한국어)
  cost: number;        // 마나 비용
  description: string; // 화면에 표시될 카드 설명 (한국어)
  onPlay: (user: Player, target: Entity) => void;
}
