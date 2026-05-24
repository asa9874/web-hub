import type { AttackPattern } from '../types';
import type { LoreEntry } from '../data/bestiaryTypes';
import { Monster } from './Monster';

/**
 * 보스 몬스터 추상 기반 클래스.
 * 패턴을 가중치 랜덤 대신 순차 실행하고, HP 임계값에서 페이즈 2로 전환한다.
 * toBestiaryEntry() 오버라이드로 페이즈 2 데이터를 도감에 자동 포함.
 */
export abstract class Boss extends Monster {
  protected phase = 1;
  protected seqIdx = 0;
  protected phaseThreshold = 0.5;

  abstract readonly phasePatterns: AttackPattern[][];
  abstract readonly phaseChangeMessage: string;
  abstract readonly phase2BuffDescription: string;

  get patterns(): AttackPattern[] {
    return this.phasePatterns[this.phase - 1] ?? [];
  }

  override toBestiaryEntry(id: string, category: string): LoreEntry {
    const base = super.toBestiaryEntry(id, category);
    const pct = Math.round(this.phaseThreshold * 100);
    return {
      ...base,
      phase2: {
        trigger: `HP ${pct}% 이하`,
        buff: this.phase2BuffDescription,
        patterns: (this.phasePatterns[1] ?? []).map(p => ({
          name: p.name,
          effect: p.description,
        })),
      },
    };
  }

  override prepareNextAction(): void {
    if (this.hp <= 0) return;
    const p = this.phasePatterns[this.phase - 1] ?? [];
    if (p.length > 0) {
      this.nextPattern = p[this.seqIdx % p.length];
      this.seqIdx++;
    }
  }

  checkPhaseTransition(): boolean {
    if (this.phase === 1 && this.hp > 0 && this.hp <= this.maxHp * this.phaseThreshold) {
      this.phase = 2;
      this.seqIdx = 1;
      this.onPhaseChange();
      const p2 = this.phasePatterns[1] ?? [];
      if (p2.length > 0) this.nextPattern = p2[0];
      return true;
    }
    return false;
  }

  protected onPhaseChange(): void {}
}
