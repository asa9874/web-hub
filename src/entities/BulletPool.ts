import Phaser from 'phaser';

const TEXTURE_KEY = 'bullet_tex';
const POOL_SIZE = 500;
// Bullet radius in the generated texture (texture is 2*R x 2*R pixels)
const BULLET_RADIUS = 5;
const TEXTURE_SIZE = BULLET_RADIUS * 2;

function ensureTexture(scene: Phaser.Scene): void {
  if (scene.textures.exists(TEXTURE_KEY)) return;
  const g = scene.add.graphics();
  g.fillStyle(0xffffff, 1);
  g.fillCircle(BULLET_RADIUS, BULLET_RADIUS, BULLET_RADIUS);
  g.generateTexture(TEXTURE_KEY, TEXTURE_SIZE, TEXTURE_SIZE);
  g.destroy();
}

export class BulletPool {
  public readonly group: Phaser.Physics.Arcade.Group;
  private readonly scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    ensureTexture(scene);

    this.group = scene.physics.add.group({
      classType: Phaser.GameObjects.Sprite,
      maxSize: POOL_SIZE,
      runChildUpdate: false,
    });

    // Pre-warm the pool so bullets are ready immediately
    this.group.createMultiple({
      classType: Phaser.GameObjects.Sprite,
      key: TEXTURE_KEY,
      quantity: POOL_SIZE,
      active: false,
      visible: false,
    });

    // Give every bullet a circular physics body
    this.group.getChildren().forEach((go) => {
      const body = (go as Phaser.GameObjects.Sprite).body as Phaser.Physics.Arcade.Body;
      body.setCircle(BULLET_RADIUS);
    });
  }

  fire(x: number, y: number, angle: number, speed: number, color = 0xffffff): void {
    const bullet = this.group.getFirstDead(false) as Phaser.GameObjects.Sprite | null;
    if (!bullet) return;

    bullet.setActive(true).setVisible(true).setTint(color);

    const body = bullet.body as Phaser.Physics.Arcade.Body;
    body.reset(x, y);
    body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    body.enable = true;
  }

  /** Call every frame to return off-screen bullets to the pool */
  recycleOffscreen(): void {
    const { width, height } = this.scene.scale;
    const margin = 30;
    this.group.getChildren().forEach((go) => {
      const spr = go as Phaser.GameObjects.Sprite;
      if (!spr.active) return;
      if (spr.x < -margin || spr.x > width + margin || spr.y < -margin || spr.y > height + margin) {
        this.killBullet(spr);
      }
    });
  }

  killBullet(bullet: Phaser.GameObjects.Sprite): void {
    this.group.killAndHide(bullet);
    (bullet.body as Phaser.Physics.Arcade.Body).reset(0, 0);
  }

  killAll(): void {
    this.group.getChildren().forEach((go) => {
      const spr = go as Phaser.GameObjects.Sprite;
      if (spr.active) this.killBullet(spr);
    });
  }
}
