import type { Entity, AttackPattern, StatusEffects } from '../types';
import type { LoreEntry } from '../data/bestiaryTypes';
import { emptyStatuses } from '../utils/combat';

/**
 * 몬스터 추상 기반 클래스.
 * 새 몬스터 추가 = 이 클래스를 상속받고 필드만 정의하면 됨.
 * toBestiaryEntry()를 통해 도감 UI에 자동으로 바인딩된다.
 */
export abstract class Monster implements Entity {
  abstract readonly name: string;
  abstract readonly subtitle: string;  // "소형 기억 정령 | Act 1 일반"
  abstract readonly lore: string;      // 도감에 표시할 상세 설명
  abstract readonly statType: string;  // 유형 문자열 ("소형 기억 정령")
  abstract readonly patterns: AttackPattern[];

  readonly quote?: string;      // 인용구 (선택)
  readonly weight?: number;     // 스폰 가중치 (보스는 undefined)
  readonly imagePath?: string;  // 일러스트 이미지 경로 (선택)

  hp: number;
  maxHp: number;
  block: number = 0;
  statuses: StatusEffects;

  nextPattern: AttackPattern | null = null;

  constructor(maxHp: number) {
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.statuses = emptyStatuses();
  }

  /** 이 몬스터의 도감 데이터를 반환. 클래스 필드가 SSOT이며 UI가 이 데이터를 읽는다. */
  toBestiaryEntry(id: string, category: string): LoreEntry {
    return {
      id,
      title: this.name,
      subtitle: this.subtitle,
      category,
      quote: this.quote,
      lore: this.lore,
      imagePath: this.imagePath,
      stats: {
        hp: this.maxHp,
        type: this.statType,
        weight: this.weight,
      },
      patterns: this.patterns.map(p => ({ name: p.name, effect: p.description })),
    };
  }

  selectPattern(): AttackPattern {
    const total = this.patterns.reduce((s, p) => s + p.weight, 0);
    let roll = Math.random() * total;
    for (const p of this.patterns) {
      roll -= p.weight;
      if (roll <= 0) return p;
    }
    return this.patterns[this.patterns.length - 1];
  }

  prepareNextAction(): void {
    this.nextPattern = this.selectPattern();
  }

  executeTurn(target: Entity): AttackPattern {
    if (!this.nextPattern) this.prepareNextAction();
    const pattern = this.nextPattern!;
    pattern.execute(target, this);
    this.prepareNextAction();
    return pattern;
  }
}
