import Phaser from 'phaser';

type Body = Phaser.Physics.Arcade.Body;

// ── Textures ──────────────────────────────────────────────────────────────────
const TEX_SM  = 'bm_s';
const TEX_LG  = 'bm_l';
const SMALL_R = 5;
const LARGE_R = 14;
const POOL_SIZE = 900;

// ── Bullet type identifiers ───────────────────────────────────────────────────
export const BT = {
  BASIC:    'basic',
  INERTIAL: 'inertial',   // curves toward player for trackDuration ms then flies straight
  SPLIT:    'split',      // large bullet → ring explosion
  WAVE:     'wave',       // sinusoidal perpendicular oscillation
  ACCEL:    'accel',      // accelerates (or decelerates when accelRate < 0)
  BOUNCE:   'bounce',     // reflects off world bounds
  DELAYED:  'delayed',    // stationary blink then fires at player
  CURVE:    'curve',      // constant angular velocity rotation
  BURST:    'burst',      // flies then detonates into ring
  GRAVITY:  'gravity',    // parabolic arc (vertical gravity)
  LASER:    'laser',      // rapid sequential beam bullets
  ORBITAL:  'orbital',    // orbits a center point, releases tangentially after timeout
  FIGURE8:  'figure8',    // Lissajous figure-8 path while drifting forward
  FORK:     'fork',       // straight bullet → fan of children at splitAt ms
  SPAWNER:  'spawner',    // slow bullet that fires homing children periodically
  BOOMERANG:'boomerang',  // flies out, slows, reverses back
  ZIGZAG:   'zigzag',     // rapid alternating-angle "lightning" motion
  SNAKE:    'snake',      // sinusoidal heading — dramatic wide S-curves
} as const;

type BulletType = typeof BT[keyof typeof BT];

// Per-bullet behavior data stored as sprite.setData('bd', ...)
interface BD {
  type:          BulletType;
  age:           number;
  color:         number;
  // universal motion
  currentAngle?: number;
  currentSpeed?: number;
  // INERTIAL
  turnSpeed?:    number;
  trackDuration?: number;   // stop tracking after this many ms
  // WAVE / SNAKE / FIGURE8
  baseAngle?:    number;
  baseSpeed?:    number;
  amplitude?:    number;
  frequency?:    number;
  // ACCEL
  accelRate?:    number;
  maxSpeed?:     number;
  // BOUNCE / reused as "last event time"
  bounceLeft?:   number;
  lastBounceAge?: number;
  // DELAYED
  delayMs?:      number;
  // SPLIT / BURST / FORK — general "first event" timer
  splitAt?:      number;
  splitCount?:   number;
  splitSpeed?:   number;
  hasExploded?:  boolean;
  // CURVE
  angularVel?:   number;
  // GRAVITY
  gravityAccel?: number;
  gravityVy?:    number;
  // ORBITAL / FIGURE8 — reference origin
  cx?:           number;
  cy?:           number;
  radius?:       number;
  // SPAWNER / ZIGZAG — periodic interval
  splitInterval?: number;
  lifetime?:      number;
}

// ── Texture setup ─────────────────────────────────────────────────────────────
function ensureTextures(scene: Phaser.Scene): void {
  if (!scene.textures.exists(TEX_SM)) {
    const g = scene.add.graphics();
    g.fillStyle(0xffffff).fillCircle(SMALL_R, SMALL_R, SMALL_R);
    g.generateTexture(TEX_SM, SMALL_R * 2, SMALL_R * 2);
    g.destroy();
  }
  if (!scene.textures.exists(TEX_LG)) {
    const g = scene.add.graphics();
    g.fillStyle(0xffffff).fillCircle(LARGE_R, LARGE_R, LARGE_R);
    g.generateTexture(TEX_LG, LARGE_R * 2, LARGE_R * 2);
    g.destroy();
  }
}

// ── BulletManager ─────────────────────────────────────────────────────────────
export class BulletManager {
  public readonly group: Phaser.Physics.Arcade.Group;

  private readonly scene: Phaser.Scene;
  private readonly getPlayerPos: () => Phaser.Math.Vector2;

  constructor(scene: Phaser.Scene, getPlayerPos: () => Phaser.Math.Vector2) {
    this.scene = scene;
    this.getPlayerPos = getPlayerPos;
    ensureTextures(scene);

    this.group = scene.physics.add.group({
      classType: Phaser.GameObjects.Sprite,
      maxSize: POOL_SIZE,
      runChildUpdate: false,
    });
    this.group.createMultiple({
      classType: Phaser.GameObjects.Sprite,
      key: TEX_SM,
      quantity: POOL_SIZE,
      active: false,
      visible: false,
    });
    this.group.getChildren().forEach(go => {
      ((go as Phaser.GameObjects.Sprite).body as Body).setCircle(SMALL_R);
    });
  }

  // ── Pool helpers ──────────────────────────────────────────────────────────

  private acquire(x: number, y: number, large: boolean, color: number): Phaser.GameObjects.Sprite | null {
    const s = this.group.getFirstDead(false) as Phaser.GameObjects.Sprite | null;
    if (!s) return null;
    s.setTexture(large ? TEX_LG : TEX_SM)
      .setTint(color).setAlpha(1).setScale(1)
      .setActive(true).setVisible(true);
    const body = s.body as Body;
    body.reset(x, y);
    body.setCircle(large ? LARGE_R : SMALL_R);
    body.setVelocity(0, 0);
    body.setBounce(0, 0);
    body.setCollideWorldBounds(false);
    body.enable = true;
    return s;
  }

  killBullet(s: Phaser.GameObjects.Sprite): void {
    const body = s.body as Body;
    body.setVelocity(0, 0);
    body.setBounce(0, 0);
    body.setCollideWorldBounds(false);
    body.setCircle(SMALL_R);
    this.group.killAndHide(s);
  }

  killAll(): void {
    this.group.getChildren().forEach(go => {
      const s = go as Phaser.GameObjects.Sprite;
      if (s.active) this.killBullet(s);
    });
  }

  // ── Master update ─────────────────────────────────────────────────────────

  update(delta: number): void {
    const dt = delta / 1000;
    const { width, height } = this.scene.scale;
    const margin = 40;
    const pp = this.getPlayerPos();

    const toKill: Phaser.GameObjects.Sprite[] = [];
    type RingJob  = { x: number; y: number; count: number; speed: number; color: number };
    type ForkJob  = { x: number; y: number; angles: number[]; speed: number; color: number };
    type SpawnJob = { x: number; y: number; color: number };
    const rings:  RingJob[]  = [];
    const forks:  ForkJob[]  = [];
    const spawns: SpawnJob[] = [];

    this.group.getChildren().forEach(go => {
      const s = go as Phaser.GameObjects.Sprite;
      if (!s.active) return;
      const bd = s.getData('bd') as BD | undefined;
      if (!bd) return;

      bd.age += delta;
      const body = s.body as Body;

      // Off-screen cull — position-controlled bullets use age timeout instead
      if (bd.type === BT.ORBITAL || bd.type === BT.FIGURE8) {
        if (bd.age > 7000) { toKill.push(s); return; }
      } else if (bd.type !== BT.BOUNCE) {
        if (s.x < -margin || s.x > width + margin ||
            s.y < -margin || s.y > height + margin) {
          toKill.push(s); return;
        }
      }

      switch (bd.type) {

        // ── Existing types ──────────────────────────────────────────────────

        case BT.BASIC:
          break;

        case BT.INERTIAL: {
          const trackDur = bd.trackDuration ?? 1500;
          if (bd.age < trackDur) {
            const cur  = bd.currentAngle ?? 0;
            const spd  = bd.currentSpeed ?? 200;
            const tgt  = Math.atan2(pp.y - s.y, pp.x - s.x);
            let   diff = tgt - cur;
            while (diff >  Math.PI) diff -= Math.PI * 2;
            while (diff < -Math.PI) diff += Math.PI * 2;
            const maxTurn  = (bd.turnSpeed ?? 2.5) * dt;
            const newAngle = cur + Math.sign(diff) * Math.min(Math.abs(diff), maxTurn);
            bd.currentAngle = newAngle;
            body.setVelocity(Math.cos(newAngle) * spd, Math.sin(newAngle) * spd);
          }
          // After trackDur: velocity unchanged — flies straight
          break;
        }

        case BT.SPLIT: {
          if (!bd.hasExploded && bd.age >= (bd.splitAt ?? 900)) {
            bd.hasExploded = true;
            const count = bd.splitCount ?? 10;
            const spd   = bd.splitSpeed ?? 185;
            const step  = (Math.PI * 2) / count;
            for (let i = 0; i < count; i++) {
              const child = this.acquire(s.x, s.y, false, bd.color);
              if (child) {
                const a = step * i;
                (child.body as Body).setVelocity(Math.cos(a) * spd, Math.sin(a) * spd);
                child.setData('bd', { type: BT.BASIC, age: 0, color: bd.color } satisfies BD);
              }
            }
            toKill.push(s);
          }
          break;
        }

        case BT.WAVE: {
          const a    = bd.baseAngle  ?? Math.PI / 2;
          const spd  = bd.baseSpeed  ?? 150;
          const amp  = bd.amplitude  ?? 80;
          const freq = bd.frequency  ?? 2.5;
          const perp = a + Math.PI / 2;
          const sine = Math.sin(bd.age / 1000 * freq * Math.PI * 2) * amp;
          body.setVelocity(
            Math.cos(a) * spd + Math.cos(perp) * sine,
            Math.sin(a) * spd + Math.sin(perp) * sine,
          );
          break;
        }

        case BT.ACCEL: {
          const a     = bd.currentAngle ?? 0;
          const accel = bd.accelRate    ?? 130;
          let   nspd  = (bd.currentSpeed ?? 50) + accel * dt;
          if (accel < 0) {
            if (nspd <= 0) { toKill.push(s); break; }
          } else {
            nspd = Math.min(nspd, bd.maxSpeed ?? 450);
          }
          bd.currentSpeed = nspd;
          body.setVelocity(Math.cos(a) * nspd, Math.sin(a) * nspd);
          break;
        }

        case BT.BOUNCE: {
          const MIN_GAP = 80;
          if (body.blocked.up || body.blocked.down || body.blocked.left || body.blocked.right) {
            if (bd.age - (bd.lastBounceAge ?? -MIN_GAP) > MIN_GAP) {
              bd.lastBounceAge = bd.age;
              bd.bounceLeft    = (bd.bounceLeft ?? 3) - 1;
            }
          }
          if ((bd.bounceLeft ?? 3) <= 0) toKill.push(s);
          break;
        }

        case BT.DELAYED: {
          if (bd.age < (bd.delayMs ?? 900)) {
            s.setAlpha(Math.floor(bd.age / 110) % 2 === 0 ? 0.9 : 0.15);
          } else if (!bd.hasExploded) {
            bd.hasExploded = true;
            s.setAlpha(1);
            const pp2 = this.getPlayerPos();
            const a   = Math.atan2(pp2.y - s.y, pp2.x - s.x);
            const spd = bd.currentSpeed ?? 260;
            body.setVelocity(Math.cos(a) * spd, Math.sin(a) * spd);
            bd.type = BT.BASIC;
          }
          break;
        }

        case BT.CURVE: {
          const omega = bd.angularVel ?? 2.0;
          bd.currentAngle = (bd.currentAngle ?? 0) + omega * dt;
          const spd = bd.currentSpeed ?? 185;
          body.setVelocity(Math.cos(bd.currentAngle) * spd, Math.sin(bd.currentAngle) * spd);
          break;
        }

        case BT.BURST: {
          if (!bd.hasExploded && bd.age >= (bd.splitAt ?? 900)) {
            bd.hasExploded = true;
            rings.push({ x: s.x, y: s.y, count: bd.splitCount ?? 14, speed: bd.splitSpeed ?? 200, color: bd.color });
            toKill.push(s);
          }
          break;
        }

        case BT.GRAVITY: {
          const vy = (bd.gravityVy ?? 0) + (bd.gravityAccel ?? 380) * dt;
          bd.gravityVy = vy;
          body.setVelocityY(vy);
          break;
        }

        case BT.LASER:
          break;

        // ── New types ───────────────────────────────────────────────────────

        case BT.ORBITAL: {
          const cx    = bd.cx     ?? this.scene.scale.width / 2;
          const cy    = bd.cy     ?? 100;
          const r     = bd.radius ?? 80;
          const omega = bd.currentSpeed   ?? 2.8;   // rad/s
          const relDur = bd.splitAt       ?? 2200;  // ms before release

          bd.currentAngle = (bd.currentAngle ?? 0) + omega * dt;
          const ang = bd.currentAngle;
          body.reset(cx + r * Math.cos(ang), cy + r * Math.sin(ang));

          if (bd.age >= relDur && !bd.hasExploded) {
            bd.hasExploded = true;
            const tangAngle = ang + Math.PI / 2 * Math.sign(omega);
            body.setVelocity(Math.cos(tangAngle) * Math.abs(r * omega), Math.sin(tangAngle) * Math.abs(r * omega));
            bd.type = BT.BASIC;
          }
          break;
        }

        case BT.FIGURE8: {
          const ox    = bd.cx     ?? 0;
          const oy    = bd.cy     ?? 0;
          const fa    = bd.currentAngle ?? Math.PI / 2;
          const fspd  = bd.currentSpeed ?? 55;
          const amp   = bd.amplitude    ?? 65;
          const freq  = bd.frequency    ?? 1.6;
          const t     = bd.age / 1000;
          const perp  = fa + Math.PI / 2;
          // Lissajous: sin(ωt) on X-axis, sin(2ωt) on drift-axis → figure-8
          const lat  = amp * Math.sin(t * freq * Math.PI * 2);
          const longi = amp * 0.5 * Math.sin(2 * t * freq * Math.PI * 2);
          body.reset(
            ox + Math.cos(fa) * (fspd * t + longi) + Math.cos(perp) * lat,
            oy + Math.sin(fa) * (fspd * t + longi) + Math.sin(perp) * lat,
          );
          break;
        }

        case BT.FORK: {
          if (!bd.hasExploded && bd.age >= (bd.splitAt ?? 700)) {
            bd.hasExploded = true;
            const base   = Math.atan2(body.velocity.y, body.velocity.x);
            const count  = bd.splitCount ?? 4;
            const spread = bd.amplitude  ?? 0.55;
            const spd    = bd.currentSpeed ?? 210;
            const angles: number[] = [];
            for (let i = 0; i < count; i++) {
              angles.push(base - spread / 2 + (spread / Math.max(1, count - 1)) * i);
            }
            forks.push({ x: s.x, y: s.y, angles, speed: spd, color: bd.color });
            toKill.push(s);
          }
          break;
        }

        case BT.SPAWNER: {
          const interval = bd.splitInterval ?? 480;
          if (bd.age >= (bd.lifetime ?? 4000)) { toKill.push(s); break; }
          if (bd.age - (bd.lastBounceAge ?? 0) >= interval) {
            bd.lastBounceAge = bd.age;
            spawns.push({ x: s.x, y: s.y, color: bd.color });
          }
          break;
        }

        case BT.BOOMERANG: {
          const life = bd.splitAt     ?? 1900;
          const half = life / 2;
          const spd  = bd.currentSpeed ?? 230;
          const a    = bd.currentAngle  ?? Math.PI / 2;

          if (bd.age < half * 0.45) {
            body.setVelocity(Math.cos(a) * spd, Math.sin(a) * spd);
          } else if (bd.age < half) {
            const t = (bd.age - half * 0.45) / (half * 0.55);
            body.setVelocity(Math.cos(a) * spd * (1 - t), Math.sin(a) * spd * (1 - t));
          } else if (bd.age < life) {
            const t = (bd.age - half) / half;
            const rs = spd * t * 0.88;
            body.setVelocity(-Math.cos(a) * rs, -Math.sin(a) * rs);
          } else {
            toKill.push(s);
          }
          break;
        }

        case BT.ZIGZAG: {
          const interval = bd.splitInterval ?? 95;
          const spd      = bd.currentSpeed  ?? 320;
          const base     = bd.baseAngle     ?? Math.PI / 2;
          const dev      = bd.amplitude     ?? 0.5;
          const phase    = Math.floor(bd.age / interval) % 2;
          const a        = base + (phase === 0 ? dev : -dev);
          body.setVelocity(Math.cos(a) * spd, Math.sin(a) * spd);
          break;
        }

        case BT.SNAKE: {
          const spd  = bd.currentSpeed ?? 190;
          const base = bd.baseAngle    ?? Math.PI / 2;
          const amp  = bd.amplitude    ?? 1.3;
          const freq = bd.frequency    ?? 1.4;
          const t    = bd.age / 1000;
          const a    = base + Math.sin(t * freq * Math.PI * 2) * amp;
          body.setVelocity(Math.cos(a) * spd, Math.sin(a) * spd);
          break;
        }

        default: break;
      }
    });

    // ── Deferred operations (avoid modifying group during forEach) ──────────

    for (const s of toKill) this.killBullet(s);

    for (const ring of rings) {
      const step = (Math.PI * 2) / ring.count;
      for (let i = 0; i < ring.count; i++) {
        const a = step * i;
        const child = this.acquire(ring.x, ring.y, false, ring.color);
        if (child) {
          (child.body as Body).setVelocity(Math.cos(a) * ring.speed, Math.sin(a) * ring.speed);
          child.setData('bd', { type: BT.BASIC, age: 0, color: ring.color } satisfies BD);
        }
      }
    }

    for (const fork of forks) {
      for (const a of fork.angles) {
        const child = this.acquire(fork.x, fork.y, false, fork.color);
        if (child) {
          (child.body as Body).setVelocity(Math.cos(a) * fork.speed, Math.sin(a) * fork.speed);
          child.setData('bd', { type: BT.BASIC, age: 0, color: fork.color } satisfies BD);
        }
      }
    }

    for (const sp of spawns) {
      const dx = pp.x - sp.x;
      const dy = pp.y - sp.y;
      const a  = Math.atan2(dy, dx);
      const child = this.acquire(sp.x, sp.y, false, sp.color);
      if (child) {
        (child.body as Body).setVelocity(Math.cos(a) * 195, Math.sin(a) * 195);
        child.setData('bd', { type: BT.BASIC, age: 0, color: sp.color } satisfies BD);
      }
    }
  }

  // ── Fire methods ──────────────────────────────────────────────────────────

  /** 기본탄 */
  fire(x: number, y: number, angle: number, speed: number, color = 0xffffff): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', { type: BT.BASIC, age: 0, color } satisfies BD);
  }

  /** 관성 유도탄 — tracks player for trackDuration ms then flies straight */
  fireInertial(x: number, y: number, angle: number, speed: number, turnSpeed: number, trackDuration: number, color = 0xffaa00): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', {
      type: BT.INERTIAL, age: 0, color,
      currentAngle: angle, currentSpeed: speed, turnSpeed, trackDuration,
    } satisfies BD);
  }

  /** 분열탄 */
  fireSplit(x: number, y: number, angle: number, speed: number, splitCount: number, splitSpeed: number, splitAt: number, color = 0xdddddd): void {
    const s = this.acquire(x, y, true, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', { type: BT.SPLIT, age: 0, color, splitCount, splitSpeed, splitAt, hasExploded: false } satisfies BD);
  }

  /** 파동탄 */
  fireWave(x: number, y: number, angle: number, speed: number, amplitude: number, frequency: number, color = 0x00ccff): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', { type: BT.WAVE, age: 0, color, baseAngle: angle, baseSpeed: speed, amplitude, frequency } satisfies BD);
  }

  /** 가속탄 — also used for shockwave deceleration (accelRate < 0) */
  fireAccel(x: number, y: number, angle: number, initSpeed: number, accelRate: number, maxSpeed: number, color = 0xff44ff): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * initSpeed, Math.sin(angle) * initSpeed);
    s.setData('bd', { type: BT.ACCEL, age: 0, color, currentAngle: angle, currentSpeed: initSpeed, accelRate, maxSpeed } satisfies BD);
  }

  /** 반사탄 */
  fireBounce(x: number, y: number, angle: number, speed: number, bounceCount: number, color = 0x44ff88): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    const body = s.body as Body;
    body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    body.setBounce(1, 1);
    body.setCollideWorldBounds(true);
    s.setData('bd', { type: BT.BOUNCE, age: 0, color, bounceLeft: bounceCount, lastBounceAge: 0 } satisfies BD);
  }

  /** 지연탄 — aims at player's position at fire time */
  fireDelayed(x: number, y: number, delayMs: number, speed: number, color = 0xff88cc): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(0, 0);
    s.setAlpha(0.9);
    s.setData('bd', { type: BT.DELAYED, age: 0, color, delayMs, currentSpeed: speed, hasExploded: false } satisfies BD);
  }

  /** 곡선탄 */
  fireCurve(x: number, y: number, angle: number, speed: number, angularVel: number, color = 0x9944ff): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', { type: BT.CURVE, age: 0, color, currentAngle: angle, currentSpeed: speed, angularVel } satisfies BD);
  }

  /** 폭발탄 */
  fireBurst(x: number, y: number, angle: number, speed: number, splitAt: number, splitCount: number, splitSpeed: number, color = 0xff3333): void {
    const s = this.acquire(x, y, true, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', { type: BT.BURST, age: 0, color, splitAt, splitCount, splitSpeed, hasExploded: false } satisfies BD);
  }

  /** 중력탄 */
  fireGravity(x: number, y: number, angle: number, speed: number, gravityAccel: number, color = 0x4488ff): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    const vy = Math.sin(angle) * speed;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, vy);
    s.setData('bd', { type: BT.GRAVITY, age: 0, color, gravityAccel, gravityVy: vy } satisfies BD);
  }

  /** 레이저탄 — staggered sequential beam */
  fireLaser(x: number, y: number, angle: number, speed: number, count = 16, color = 0xffffff): void {
    for (let i = 0; i < count; i++) {
      this.scene.time.delayedCall(i * 13, () => {
        const s = this.acquire(x, y, false, color);
        if (!s) return;
        (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
        s.setData('bd', { type: BT.LASER, age: 0, color } satisfies BD);
      });
    }
  }

  // ── New single-bullet fire methods ────────────────────────────────────────

  /** 궤도탄 — orbits (cx,cy) at radius, releases tangentially after releaseDuration ms */
  fireOrbital(cx: number, cy: number, startAngle: number, radius: number, angularSpeed: number, releaseDuration: number, color = 0xffcc44): void {
    const x = cx + radius * Math.cos(startAngle);
    const y = cy + radius * Math.sin(startAngle);
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    s.setData('bd', {
      type: BT.ORBITAL, age: 0, color,
      cx, cy, radius,
      currentAngle: startAngle,
      currentSpeed: angularSpeed,
      splitAt: releaseDuration,
      hasExploded: false,
    } satisfies BD);
  }

  /** 8자탄 — Lissajous figure-8 path while drifting in driftAngle direction */
  fireFigure8(x: number, y: number, driftAngle: number, driftSpeed: number, amplitude: number, frequency: number, color = 0xff6699): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    s.setData('bd', {
      type: BT.FIGURE8, age: 0, color,
      cx: x, cy: y,
      currentAngle: driftAngle,
      currentSpeed: driftSpeed,
      amplitude, frequency,
    } satisfies BD);
  }

  /** 분기탄 — straight flight, then fans out into forkCount children at forkAt ms */
  fireFork(x: number, y: number, angle: number, speed: number, forkCount: number, spreadAngle: number, forkAt: number, color = 0xffff44): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', {
      type: BT.FORK, age: 0, color,
      currentAngle: angle, currentSpeed: speed,
      splitAt: forkAt, splitCount: forkCount, amplitude: spreadAngle,
      hasExploded: false,
    } satisfies BD);
  }

  /** 소환탄 — slow large bullet; fires basic children toward player every spawnInterval ms */
  fireSpawner(x: number, y: number, angle: number, speed: number, spawnInterval: number, lifetime: number, color = 0xff4444): void {
    const s = this.acquire(x, y, true, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', {
      type: BT.SPAWNER, age: 0, color,
      currentAngle: angle, currentSpeed: speed,
      splitInterval: spawnInterval, lifetime,
      lastBounceAge: 0,
    } satisfies BD);
  }

  /** 귀환탄 — flies out, decelerates, then returns along the same path */
  fireBoomerang(x: number, y: number, angle: number, speed: number, lifetime: number, color = 0x44ddff): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    s.setData('bd', {
      type: BT.BOOMERANG, age: 0, color,
      currentAngle: angle, currentSpeed: speed, splitAt: lifetime,
    } satisfies BD);
  }

  /** 번개탄 — rapid direction alternation creating electric zigzag motion */
  fireZigzag(x: number, y: number, baseAngle: number, speed: number, deviation: number, switchInterval: number, color = 0xffff99): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(baseAngle + deviation) * speed, Math.sin(baseAngle + deviation) * speed);
    s.setData('bd', {
      type: BT.ZIGZAG, age: 0, color,
      baseAngle, currentSpeed: speed, amplitude: deviation, splitInterval: switchInterval,
    } satisfies BD);
  }

  /** 뱀탄 — sinusoidal heading creates sweeping S-curves */
  fireSnake(x: number, y: number, baseAngle: number, speed: number, amplitude: number, frequency: number, color = 0x44ff44): void {
    const s = this.acquire(x, y, false, color);
    if (!s) return;
    (s.body as Body).setVelocity(Math.cos(baseAngle) * speed, Math.sin(baseAngle) * speed);
    s.setData('bd', {
      type: BT.SNAKE, age: 0, color,
      baseAngle, currentSpeed: speed, amplitude, frequency,
    } satisfies BD);
  }

  // ── Composite pattern fire methods ────────────────────────────────────────

  /** 충격파탄 — expanding ring of decelerating bullets that vanish when stopped */
  fireShockwave(x: number, y: number, count: number, speed: number, decelRate: number, color = 0xff8833): void {
    const step = (Math.PI * 2) / count;
    for (let i = 0; i < count; i++) {
      this.fireAccel(x, y, step * i, speed, -decelRate, 0, color);
    }
  }

  /** 공명탄 — N wave bullets fired with evenly-spaced phase offsets */
  fireResonance(x: number, y: number, baseAngle: number, count: number, speed: number, amplitude: number, frequency: number, color = 0x66ccff): void {
    const periodMs = 1000 / frequency;
    for (let i = 0; i < count; i++) {
      const phaseAge = (i / count) * periodMs;
      const s = this.acquire(x, y, false, color);
      if (!s) return;
      (s.body as Body).setVelocity(Math.cos(baseAngle) * speed, Math.sin(baseAngle) * speed);
      s.setData('bd', {
        type: BT.WAVE, age: phaseAge, color,
        baseAngle, baseSpeed: speed, amplitude, frequency,
      } satisfies BD);
    }
  }

  /** 산탄 — random spray of basic bullets within a cone */
  fireScatter(x: number, y: number, baseAngle: number, count: number, spread: number, speed: number, color = 0xffbbbb): void {
    for (let i = 0; i < count; i++) {
      const a   = baseAngle + (Math.random() - 0.5) * spread;
      const spd = speed + (Math.random() - 0.5) * 40;
      this.fire(x, y, a, spd, color);
    }
  }
}
