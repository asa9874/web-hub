import type { PatternBase } from './PatternBase';
import type { BulletManager } from '../entities/BulletManager';
import type Phaser from 'phaser';

const BULLET_COUNT = 20;
const FIRE_INTERVAL_MS = 800;
const SPEED = 210;

export class RingBurst implements PatternBase {
  readonly durationMs = 10_000;

  private readonly pool: BulletManager;
  private readonly getBossPos: () => Phaser.Math.Vector2;
  private fireTimer = 0;

  constructor(
    _scene: unknown,
    pool: BulletManager,
    getBossPos: () => Phaser.Math.Vector2,
  ) {
    this.pool = pool;
    this.getBossPos = getBossPos;
  }

  start(): void {
    this.fireTimer = 0;
    this.fire();
  }

  update(_time: number, delta: number): void {
    this.fireTimer += delta;
    if (this.fireTimer >= FIRE_INTERVAL_MS) {
      this.fireTimer -= FIRE_INTERVAL_MS;
      this.fire();
    }
  }

  stop(): void { /* nothing to tear down */ }

  private fire(): void {
    const { x, y } = this.getBossPos();
    const step = (Math.PI * 2) / BULLET_COUNT;
    for (let i = 0; i < BULLET_COUNT; i++) {
      this.pool.fire(x, y, step * i, SPEED, 0xaaaaaa);
    }
  }
}
