/**
 * Web Audio API 기반 효과음 매니저.
 *
 * 오디오 파일 없이 오실레이터 톤으로 효과음을 생성한다.
 * 실제 에셋이 준비되면 playTone() 호출 블록을 Phaser sound.play('sfx_xxx') 로 교체하면 된다.
 *
 * 싱글톤이므로 씬이 교체되어도 인스턴스와 muted 상태가 유지된다.
 */
export class SoundManager {
  private static _instance: SoundManager;
  private ctx: AudioContext | null = null;
  private _muted = false;

  static get instance(): SoundManager {
    if (!SoundManager._instance) SoundManager._instance = new SoundManager();
    return SoundManager._instance;
  }

  // ── 내부 유틸 ─────────────────────────────────────────────────────────────

  private getCtx(): AudioContext | null {
    try {
      if (!this.ctx) this.ctx = new AudioContext();
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return this.ctx;
    } catch {
      return null;
    }
  }

  /**
   * 오실레이터 기반 단순 톤 재생.
   * freq: 시작 주파수(Hz), duration: 지속 시간(초),
   * freqEnd: 종료 주파수 (undefined = 일정 주파수)
   */
  private playTone(
    freq: number,
    duration: number,
    volume = 0.15,
    type: OscillatorType = 'sine',
    freqEnd?: number,
  ): void {
    if (this._muted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    if (freqEnd !== undefined) {
      osc.frequency.linearRampToValueAtTime(freqEnd, ctx.currentTime + duration);
    }
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration + 0.01);
  }

  // ── 공개 효과음 API ───────────────────────────────────────────────────────

  /** 공격 카드 사용 */
  playAttack(): void {
    this.playTone(260, 0.12, 0.18, 'sawtooth', 180);
  }

  /** 방어 / 스킬 카드 사용 */
  playDefend(): void {
    this.playTone(440, 0.1, 0.12, 'square');
  }

  /** 카드 드로우 (부드러운 상승음) */
  playCardDraw(): void {
    this.playTone(600, 0.07, 0.08, 'sine', 740);
  }

  /** 독 피해 (낮고 음울한 음) */
  playPoison(): void {
    this.playTone(175, 0.22, 0.12, 'sine', 130);
  }

  /** HP 회복 (밝은 상승음) */
  playHeal(): void {
    this.playTone(523, 0.18, 0.14, 'sine', 659);
  }

  /** 적 사망 (하강 충격음) */
  playMonsterDeath(): void {
    this.playTone(210, 0.3, 0.22, 'sawtooth', 70);
  }

  /** 전투 승리 (3음 상승 팡파르) */
  playVictory(): void {
    const notes = [523, 659, 784];
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.28, 0.18, 'sine'), i * 120);
    });
  }

  /** 보스 페이즈 전환 (무거운 저음 충격) */
  playBossPhase(): void {
    this.playTone(100, 0.55, 0.28, 'sawtooth', 60);
  }

  /** 포션 사용 (생기 있는 음) */
  playPotion(): void {
    this.playTone(440, 0.2, 0.15, 'sine', 660);
  }

  /** 카드 드래그 픽업 (짧고 부드럽게) */
  playCardPickup(): void {
    this.playTone(380, 0.06, 0.07, 'sine', 420);
  }

  // ── 음소거 ────────────────────────────────────────────────────────────────

  get muted(): boolean { return this._muted; }

  toggleMute(): boolean {
    this._muted = !this._muted;
    return this._muted;
  }
}

export const sfx = SoundManager.instance;
