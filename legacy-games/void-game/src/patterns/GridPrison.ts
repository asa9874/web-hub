import Phaser from 'phaser';
import type { PatternBase } from './PatternBase';
import type { BulletManager } from '../entities/BulletManager';

const LAUNCH_INTERVAL_MS = 1400;
const BULLET_SPEED = 175;
const H_LANES = 11;  // vertical bullets (top → bottom)
const V_LANES = 9;   // horizontal bullets (left → right)

export class GridPrison implements PatternBase {
  readonly durationMs = 15_000;

  private readonly scene: Phaser.Scene;
  private readonly pool: BulletManager;
  private launchTimer = 0;

  constructor(
    scene: Phaser.Scene,
    pool: BulletManager,
    _getBossPos: unknown,
  ) {
    this.scene = scene;
    this.pool = pool;
  }

  start(): void {
    this.launchTimer = 0;
    this.fireWave();
  }

  update(_time: number, delta: number): void {
    this.launchTimer += delta;
    if (this.launchTimer >= LAUNCH_INTERVAL_MS) {
      this.launchTimer -= LAUNCH_INTERVAL_MS;
      this.fireWave();
    }
  }

  stop(): void { /* nothing to tear down */ }

  private fireWave(): void {
    const { width, height } = this.scene.scale;

    for (let c = 0; c < H_LANES; c++) {
      const x = (width / (H_LANES + 1)) * (c + 1);
      this.pool.fire(x, -8, Math.PI / 2, BULLET_SPEED, 0x777777);
    }

    for (let r = 0; r < V_LANES; r++) {
      const y = (height / (V_LANES + 1)) * (r + 1);
      this.pool.fire(-8, y, 0, BULLET_SPEED, 0x777777);
    }
  }
}
