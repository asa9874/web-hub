import Phaser from 'phaser';
import { BossBase } from './BossBase';
import type { BulletManager } from '../entities/BulletManager';
import { RingBurst } from '../patterns/RingBurst';
import { GridPrison } from '../patterns/GridPrison';
import { ChasingSpiral } from '../patterns/ChasingSpiral';

/**
 * 더 모놀리스 — a towering geometric slab at the top of the screen.
 * Drawn entirely with Phaser Graphics (no external assets).
 */
export class Monolith extends BossBase {
  private readonly gfx: Phaser.GameObjects.Graphics;
  private readonly cx: number;
  private readonly cy: number;
  private readonly getPlayerPos: () => Phaser.Math.Vector2;

  // Subtle idle pulse animation
  private pulseT = 0;

  constructor(
    scene: Phaser.Scene,
    pool: BulletManager,
    getPlayerPos: () => Phaser.Math.Vector2,
  ) {
    super(scene, pool);
    this.cx = scene.scale.width / 2;
    this.cy = 85;
    this.getPlayerPos = getPlayerPos;

    this.gfx = scene.add.graphics();
    this.gfx.setDepth(2);
    this.drawBody(0);
  }

  getPosition(): Phaser.Math.Vector2 {
    return new Phaser.Math.Vector2(this.cx, this.cy);
  }

  /** Called by BossBase.update — override to animate the boss */
  override update(time: number, delta: number): void {
    super.update(time, delta);
    this.pulseT += delta / 1000;
    this.drawBody(this.pulseT);
  }

  protected createPatterns(): void {
    const bossPos = () => this.getPosition();

    this.patternNames = ['원형 확산', '격자 감옥', '추적 나선'];
    this.patterns = [
      new RingBurst(this.scene, this.pool, bossPos),
      new GridPrison(this.scene, this.pool, bossPos),
      new ChasingSpiral(this.scene, this.pool, bossPos, this.getPlayerPos),
    ];
  }

  // ── Visual ────────────────────────────────────────────────────────────────

  private drawBody(t: number): void {
    const g = this.gfx;
    g.clear();

    const pulse = Math.sin(t * 1.8) * 0.5 + 0.5; // 0–1

    // Outer glow
    g.lineStyle(1, 0x444444, 0.3 + pulse * 0.3);
    g.strokeRect(this.cx - 58, this.cy - 48, 116, 96);

    // Main slab body
    g.fillStyle(0x1e1e1e, 1);
    g.fillRect(this.cx - 52, this.cy - 42, 104, 84);

    // Slab border
    g.lineStyle(1, 0x555555, 1);
    g.strokeRect(this.cx - 52, this.cy - 42, 104, 84);

    // Inner frame
    g.lineStyle(1, 0x333333, 1);
    g.strokeRect(this.cx - 42, this.cy - 32, 84, 64);

    // Horizontal etching lines
    for (let i = 1; i <= 3; i++) {
      const ly = this.cy - 32 + (64 / 4) * i;
      g.lineStyle(1, 0x2a2a2a, 1);
      g.lineBetween(this.cx - 42, ly, this.cx + 42, ly);
    }

    // Centre orb — pulses between dim and bright
    const orbBrightness = Math.floor(0x33 + pulse * 0x44);
    const orbColor = (orbBrightness << 16) | (orbBrightness << 8) | orbBrightness;
    g.fillStyle(orbColor, 1);
    g.fillCircle(this.cx, this.cy, 5 + pulse * 2);

    // Orb ring
    g.lineStyle(1, 0x555555, 0.5 + pulse * 0.5);
    g.strokeCircle(this.cx, this.cy, 12 + pulse * 3);
  }
}
