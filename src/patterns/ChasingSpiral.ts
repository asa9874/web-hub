import type Phaser from 'phaser';
import type { PatternBase } from './PatternBase';
import type { BulletManager } from '../entities/BulletManager';

const ARMS = 4;
const SPIN_SPEED = 3.2;         // radians per second
const BULLET_SPEED = 240;
const FIRE_INTERVAL_MS = 35;    // ms between each multi-arm salvo
const TRACK_SPEED_RAD_S = 2.2; // max angular velocity of aim offset toward player

export class ChasingSpiral implements PatternBase {
  readonly durationMs = 15_000;

  private readonly pool: BulletManager;
  private readonly getBossPos: () => Phaser.Math.Vector2;
  private readonly getPlayerPos: () => Phaser.Math.Vector2;

  private spinAngle = 0;
  private aimOffset = 0;
  private fireTimer = 0;

  constructor(
    _scene: unknown,
    pool: BulletManager,
    getBossPos: () => Phaser.Math.Vector2,
    getPlayerPos: () => Phaser.Math.Vector2,
  ) {
    this.pool = pool;
    this.getBossPos = getBossPos;
    this.getPlayerPos = getPlayerPos;
  }

  start(): void {
    this.spinAngle = 0;
    this.fireTimer = 0;
    const boss = this.getBossPos();
    const player = this.getPlayerPos();
    this.aimOffset = Math.atan2(player.y - boss.y, player.x - boss.x);
  }

  update(_time: number, delta: number): void {
    const dt = delta / 1000;
    this.spinAngle += SPIN_SPEED * dt;

    const boss = this.getBossPos();
    const player = this.getPlayerPos();
    const target = Math.atan2(player.y - boss.y, player.x - boss.x);

    let diff = target - this.aimOffset;
    // Wrap diff to (−π, π] — always take the shorter arc
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;

    this.aimOffset += Math.sign(diff) * Math.min(Math.abs(diff), TRACK_SPEED_RAD_S * dt);

    this.fireTimer += delta;
    if (this.fireTimer >= FIRE_INTERVAL_MS) {
      this.fireTimer -= FIRE_INTERVAL_MS;
      this.salvo(boss.x, boss.y);
    }
  }

  stop(): void { /* nothing to tear down */ }

  private salvo(bx: number, by: number): void {
    for (let arm = 0; arm < ARMS; arm++) {
      const angle = this.spinAngle + this.aimOffset + (Math.PI * 2 / ARMS) * arm;
      this.pool.fire(bx, by, angle, BULLET_SPEED, 0xcccccc);
    }
  }
}
