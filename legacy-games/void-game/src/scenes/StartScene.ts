import Phaser from 'phaser';

export class StartScene extends Phaser.Scene {
  constructor() { super({ key: 'StartScene' }); }

  create(): void {
    const { width, height } = this.scale;
    const cx = width / 2;

    // ── Background decoration ───────────────────────────────────────────────
    const bg = this.add.graphics();
    // Subtle grid
    bg.lineStyle(1, 0x1a1a1a, 1);
    for (let x = 0; x < width; x += 40) bg.lineBetween(x, 0, x, height);
    for (let y = 0; y < height; y += 40) bg.lineBetween(0, y, width, y);

    // ── Title ───────────────────────────────────────────────────────────────
    this.add.text(cx, 110, 'VOID', {
      fontSize: '80px', color: '#ffffff', fontFamily: 'monospace', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(cx, 185, '탄막 슈팅', {
      fontSize: '20px', color: '#666666', fontFamily: 'monospace',
    }).setOrigin(0.5);

    this.add.rectangle(cx, 222, 320, 1, 0x2a2a2a);

    // ── Boss selection label ────────────────────────────────────────────────
    this.add.text(cx, 255, '보스 선택', {
      fontSize: '14px', color: '#555555', fontFamily: 'monospace',
    }).setOrigin(0.5);

    // ── Boss card ───────────────────────────────────────────────────────────
    const cardY = 355;
    const card = this.add.rectangle(cx, cardY, 290, 110, 0x141414)
      .setInteractive({ useHandCursor: true });

    // Card border (drawn via Graphics so we can use strokeRect cleanly)
    const cardBorder = this.add.graphics();
    cardBorder.lineStyle(1, 0x3a3a3a, 1);
    cardBorder.strokeRect(cx - 145, cardY - 55, 290, 110);

    this.add.text(cx, cardY - 22, '더 모놀리스', {
      fontSize: '24px', color: '#dddddd', fontFamily: 'monospace', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(cx, cardY + 8, '난이도: ★★★', {
      fontSize: '13px', color: '#666666', fontFamily: 'monospace',
    }).setOrigin(0.5);

    this.add.text(cx, cardY + 30, '패턴 3개  |  생존이 목표', {
      fontSize: '11px', color: '#444444', fontFamily: 'monospace',
    }).setOrigin(0.5);

    card.on('pointerover', () => card.setFillStyle(0x1e1e1e));
    card.on('pointerout', () => card.setFillStyle(0x141414));

    // ── Buttons ──────────────────────────────────────────────────────────────
    // Game start — wide, prominent
    const btn = this.add.rectangle(cx - 58, 487, 206, 42, 0x2a2a2a)
      .setInteractive({ useHandCursor: true });
    this.add.text(cx - 58, 487, '게임 시작', {
      fontSize: '18px', color: '#ffffff', fontFamily: 'monospace',
    }).setOrigin(0.5);
    btn.on('pointerover', () => btn.setFillStyle(0x3a3a3a));
    btn.on('pointerout',  () => btn.setFillStyle(0x2a2a2a));
    btn.on('pointerdown', () => this.scene.start('GameScene'));
    card.on('pointerdown', () => this.scene.start('GameScene'));

    // 탄 테스트
    const testBtn = this.add.rectangle(cx + 92, 473, 110, 28, 0x1e1e1e)
      .setInteractive({ useHandCursor: true });
    this.add.text(cx + 92, 473, '탄 테스트', {
      fontSize: '12px', color: '#888888', fontFamily: 'monospace',
    }).setOrigin(0.5);
    testBtn.on('pointerover', () => testBtn.setFillStyle(0x282828));
    testBtn.on('pointerout',  () => testBtn.setFillStyle(0x1e1e1e));
    testBtn.on('pointerdown', () => this.scene.start('TestScene'));

    // 패턴 테스트
    const ptBtn = this.add.rectangle(cx + 92, 507, 110, 28, 0x1e1e1e)
      .setInteractive({ useHandCursor: true });
    this.add.text(cx + 92, 507, '패턴 테스트', {
      fontSize: '12px', color: '#888888', fontFamily: 'monospace',
    }).setOrigin(0.5);
    ptBtn.on('pointerover', () => ptBtn.setFillStyle(0x282828));
    ptBtn.on('pointerout',  () => ptBtn.setFillStyle(0x1e1e1e));
    ptBtn.on('pointerdown', () => this.scene.start('PatternTestScene'));

    // ── Controls hint ───────────────────────────────────────────────────────
    this.add.text(cx, 590, '방향키: 이동   |   Shift: 집중 이동 (속도 감소 + 히트박스 표시)', {
      fontSize: '9px', color: '#333333', fontFamily: 'monospace', wordWrap: { width: 400 },
      align: 'center',
    }).setOrigin(0.5);
  }
}
