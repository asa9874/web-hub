import Phaser from 'phaser';
import type { PatternBase } from '../patterns/PatternBase';
import type { BulletManager } from '../entities/BulletManager';

type BossState = 'idle' | 'transition' | 'pattern' | 'dead';

export abstract class BossBase {
  protected patterns: PatternBase[] = [];
  protected patternNames: string[] = [];

  public isDefeated = false;
  public onDefeated?: () => void;
  public onPatternChanged?: (index: number, name: string) => void;

  private state: BossState = 'idle';
  private currentIndex = -1;
  private patternElapsed = 0;
  private transitionTimer = 0;

  private static readonly TRANSITION_MS = 1400;

  protected readonly scene: Phaser.Scene;
  protected readonly pool: BulletManager;

  constructor(scene: Phaser.Scene, pool: BulletManager) {
    this.scene = scene;
    this.pool = pool;
  }

  protected abstract createPatterns(): void;
  public abstract getPosition(): Phaser.Math.Vector2;

  startSequence(): void {
    this.createPatterns();
    this.state = 'transition';
    this.transitionTimer = BossBase.TRANSITION_MS;
  }

  update(time: number, delta: number): void {
    if (this.isDefeated) return;

    switch (this.state) {
      case 'idle': break;

      case 'transition':
        this.transitionTimer -= delta;
        if (this.transitionTimer <= 0) this.advancePattern();
        break;

      case 'pattern': {
        const pattern = this.patterns[this.currentIndex];
        this.patternElapsed += delta;
        if (this.patternElapsed >= pattern.durationMs) {
          pattern.stop();
          this.pool.killAll();
          if (this.currentIndex >= this.patterns.length - 1) {
            this.isDefeated = true;
            this.state = 'dead';
            this.onDefeated?.();
          } else {
            this.state = 'transition';
            this.transitionTimer = BossBase.TRANSITION_MS;
          }
        } else {
          pattern.update(time, delta);
        }
        break;
      }

      case 'dead': break;
    }
  }

  getPatternProgress(): { index: number; total: number; elapsed: number; duration: number } {
    return {
      index: this.currentIndex,
      total: this.patterns.length,
      elapsed: this.patternElapsed,
      duration: this.currentIndex >= 0 ? this.patterns[this.currentIndex].durationMs : 1,
    };
  }

  getState(): BossState { return this.state; }

  private advancePattern(): void {
    this.currentIndex++;
    this.patternElapsed = 0;
    this.state = 'pattern';
    this.patterns[this.currentIndex].start();
    this.onPatternChanged?.(this.currentIndex, this.patternNames[this.currentIndex] ?? '');
  }
}
