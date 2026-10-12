import Phaser from 'phaser';

export class ClearScene extends Phaser.Scene {
  constructor() { super({ key: 'ClearScene' }); }

  create(): void {
    const { width, height } = this.scale;
    const cx = width / 2;

    // White flash that fades out
    const flash = this.add.rectangle(cx, height / 2, width, height, 0xffffff).setDepth(50);
    this.tweens.add({
      targets: flash, alpha: 0, duration: 900, ease: 'Power2',
      onComplete: () => flash.destroy(),
    });

    this.add.text(cx, 220, '스테이지 클리어!', {
      fontSize: '38px', color: '#ffffff', fontFamily: 'monospace', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(cx, 280, '더 모놀리스 격파', {
      fontSize: '20px', color: '#888888', fontFamily: 'monospace',
    }).setOrigin(0.5);

    this.add.rectangle(cx, 325, 280, 1, 0x2a2a2a);

    this.add.text(cx, 365, '모든 패턴 생존 성공!', {
      fontSize: '15px', color: '#555555', fontFamily: 'monospace',
    }).setOrigin(0.5);

    // Return button
    const btn = this.add.rectangle(cx, 470, 200, 46, 0x2a2a2a)
      .setInteractive({ useHandCursor: true });

    this.add.text(cx, 470, '처음으로', {
      fontSize: '20px', color: '#ffffff', fontFamily: 'monospace',
    }).setOrigin(0.5);

    btn.on('pointerover', () => btn.setFillStyle(0x3a3a3a));
    btn.on('pointerout', () => btn.setFillStyle(0x2a2a2a));
    btn.on('pointerdown', () => this.scene.start('StartScene'));
  }
}
