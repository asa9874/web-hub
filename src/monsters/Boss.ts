import type { AttackPattern } from '../types';
import { Monster } from './Monster';

/**
 * 보스 몬스터 추상 기반 클래스.
 * 패턴을 가중치 랜덤 대신 순차 실행하고, HP 50% 이하에서 페이즈 2로 전환한다.
 */
export abstract class Boss extends Monster {
  protected phase = 1;
  protected seqIdx = 0;
  /** HP 비율 — 이 값 이하로 떨어지면 페이즈 2 전환. 기본 50%. */
  protected phaseThreshold = 0.5;

  abstract readonly phasePatterns: AttackPattern[][];
  abstract readonly phaseChangeMessage: string;

  // Monster의 abstract patterns 요건 충족 — 현재 페이즈의 패턴 배열 반환
  get patterns(): AttackPattern[] {
    return this.phasePatterns[this.phase - 1] ?? [];
  }

  /** 순차 실행: 현재 페이즈의 패턴을 seqIdx % length 순서로 예약 */
  override prepareNextAction(): void {
    if (this.hp <= 0) return;
    const p = this.phasePatterns[this.phase - 1] ?? [];
    if (p.length > 0) {
      this.nextPattern = p[this.seqIdx % p.length];
      this.seqIdx++;
    }
  }

  /**
   * HP가 maxHp/2 이하일 때 페이즈 2로 전환.
   * BattleScene이 카드 사용 직후 호출 — 전환 시 true 반환.
   */
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
