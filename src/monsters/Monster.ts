import type { Entity, AttackPattern } from '../types';

/**
 * 몬스터 추상 기반 클래스.
 * 새 몬스터 추가 = 이 클래스를 상속받고 name·description·patterns만 정의하면 됨.
 */
export abstract class Monster implements Entity {
  abstract readonly name: string;
  abstract readonly description: string;
  abstract readonly patterns: AttackPattern[];

  hp: number;
  maxHp: number;
  block: number = 0;

  /** 이번 턴에 실행할 패턴 (플레이어 턴 중 UI에 미리 표시) */
  nextPattern: AttackPattern | null = null;

  constructor(maxHp: number) {
    this.maxHp = maxHp;
    this.hp = maxHp;
  }

  /** 가중치(weight) 기반 무작위 패턴 선택 */
  selectPattern(): AttackPattern {
    const total = this.patterns.reduce((s, p) => s + p.weight, 0);
    let roll = Math.random() * total;
    for (const p of this.patterns) {
      roll -= p.weight;
      if (roll <= 0) return p;
    }
    return this.patterns[this.patterns.length - 1];
  }

  /** 다음 행동 예약 — UI 의도 표시용 */
  prepareNextAction(): void {
    this.nextPattern = this.selectPattern();
  }

  /**
   * 예약된 패턴을 실행하고 다음 행동을 재예약.
   * @returns 실행된 AttackPattern
   */
  executeTurn(target: Entity): AttackPattern {
    if (!this.nextPattern) this.prepareNextAction();
    const pattern = this.nextPattern!;
    pattern.execute(target, this);
    this.prepareNextAction();
    return pattern;
  }
}
