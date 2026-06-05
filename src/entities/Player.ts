import Phaser from 'phaser';

export class Player {
  public readonly sprite: Phaser.GameObjects.Rectangle;
  private readonly hitboxDot: Phaser.GameObjects.Arc;
  private readonly cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private readonly shiftKey: Phaser.Input.Keyboard.Key;

  private readonly normalSpeed = 220;
  private readonly focusSpeed = 90;

  public isDead = false;

  /** Collision circle radius — smaller than the sprite for a forgiving hitbox */
  public readonly hitRadius = 4;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.sprite = scene.add.rectangle(x, y, 18, 22, 0xc8c8c8);
    this.sprite.setDepth(5);
    scene.physics.add.existing(this.sprite);

    const body = this.sprite.body as Phaser.Physics.Arcade.Body;
    body.setCollideWorldBounds(true);
    // Shrink the physics body to a small circle (bullet hell convention)
    body.setCircle(this.hitRadius, 9 - this.hitRadius, 11 - this.hitRadius);

    // Red dot shown only in focus (Shift) mode to indicate the exact hitbox
    this.hitboxDot = scene.add.circle(x, y, 3, 0xff2222);
    this.hitboxDot.setDepth(10).setVisible(false);

    this.cursors = scene.input.keyboard!.createCursorKeys();
    this.shiftKey = scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
  }

  update(): void {
    if (this.isDead) return;

    const body = this.sprite.body as Phaser.Physics.Arcade.Body;
    const isFocused = this.shiftKey.isDown;
    const speed = isFocused ? this.focusSpeed : this.normalSpeed;

    let vx = 0;
    let vy = 0;
    if (this.cursors.left.isDown) vx = -1;
    else if (this.cursors.right.isDown) vx = 1;
    if (this.cursors.up.isDown) vy = -1;
    else if (this.cursors.down.isDown) vy = 1;

    // Normalize diagonal movement so speed is consistent in all directions
    if (vx !== 0 && vy !== 0) {
      vx *= Math.SQRT1_2;
      vy *= Math.SQRT1_2;
    }

    body.setVelocity(vx * speed, vy * speed);

    this.hitboxDot.setPosition(this.sprite.x, this.sprite.y).setVisible(isFocused);
  }

  getPosition(): Phaser.Math.Vector2 {
    return new Phaser.Math.Vector2(this.sprite.x, this.sprite.y);
  }

  die(): void {
    if (this.isDead) return;
    this.isDead = true;
    this.sprite.setFillStyle(0x333333);
    this.hitboxDot.setVisible(false);
    (this.sprite.body as Phaser.Physics.Arcade.Body).setVelocity(0, 0);
  }

  destroy(): void {
    this.sprite.destroy();
    this.hitboxDot.destroy();
  }
}
