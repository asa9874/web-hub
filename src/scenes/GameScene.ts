import Phaser from 'phaser';
import { Player } from '../entities/Player';
import { BulletManager } from '../entities/BulletManager';
import { Monolith } from '../boss/Monolith';

const HUD_DEPTH     = 20;
const OVERLAY_DEPTH = 30;

export class GameScene extends Phaser.Scene {
  private player!: Player;
  private bm!: BulletManager;
  private boss!: Monolith;

  private gameOver = false;
  private gameWon  = false;

  private patternNameText!: Phaser.GameObjects.Text;
  private timerText!: Phaser.GameObjects.Text;
  private indicators: Phaser.GameObjects.Rectangle[] = [];
  private overlayText!: Phaser.GameObjects.Text;

  constructor() { super({ key: 'GameScene' }); }

  // ── create ──────────────────────────────────────────────────────────────────

  create(): void {
    const { width, height } = this.scale;

    this.gameOver = false;
    this.gameWon  = false;
    this.indicators = [];

    this.drawPlayfield(width, height);
    this.physics.world.setBounds(0, 0, width, height);

    this.bm     = new BulletManager(this, () => this.player.getPosition());
    this.player = new Player(this, width / 2, height - 100);

    this.boss = new Monolith(this, this.bm, () => this.player.getPosition());
    this.boss.onDefeated       = () => this.handleWin();
    this.boss.onPatternChanged = (idx, name) => this.handlePatternChange(idx, name);
    this.boss.startSequence();

    this.createHUD(width);

    this.physics.add.overlap(
      this.player.sprite,
      this.bm.group,
      this.onBulletHit,
      undefined,
      this,
    );

    this.input.keyboard!.on('keydown-R',   () => { if (this.gameOver) this.scene.restart(); });
    this.input.keyboard!.on('keydown-ESC', () => {
      if (this.gameOver || this.gameWon) this.scene.start('StartScene');
    });
  }

  // ── update ──────────────────────────────────────────────────────────────────

  update(time: number, delta: number): void {
    if (!this.gameOver) this.player.update();
    this.boss.update(time, delta);
    this.bm.update(delta);       // handles all bullet behavior + off-screen recycling
    this.refreshTimerHUD();
  }

  // ── HUD ─────────────────────────────────────────────────────────────────────

  private createHUD(width: number): void {
    this.patternNameText = this.add.text(width / 2, 8, '준비 중...', {
      fontSize: '15px', color: '#777777', fontFamily: 'monospace',
    }).setOrigin(0.5, 0).setDepth(HUD_DEPTH);

    this.timerText = this.add.text(width / 2, 27, '', {
      fontSize: '12px', color: '#444444', fontFamily: 'monospace',
    }).setOrigin(0.5, 0).setDepth(HUD_DEPTH);

    for (let i = 0; i < 3; i++) {
      const ind = this.add.rectangle(width - 18 - i * 20, 16, 12, 12, 0x222222).setDepth(HUD_DEPTH);
      this.indicators.unshift(ind);
    }

    this.overlayText = this.add.text(width / 2, this.scale.height / 2, '', {
      fontSize: '26px', color: '#ffffff', fontFamily: 'monospace',
      fontStyle: 'bold', align: 'center',
    }).setOrigin(0.5).setDepth(OVERLAY_DEPTH).setVisible(false);
  }

  private handlePatternChange(idx: number, name: string): void {
    this.patternNameText.setText(name);
    this.indicators.forEach((ind, i) => {
      if (i < idx)      ind.setFillStyle(0x3a3a3a);
      else if (i === idx) ind.setFillStyle(0xffffff);
      else              ind.setFillStyle(0x222222);
    });

    const { width, height } = this.scale;
    const sub  = this.add.text(width / 2, height / 2 - 30, `패턴 ${idx + 1}`, {
      fontSize: '13px', color: '#555555', fontFamily: 'monospace',
    }).setOrigin(0.5).setDepth(OVERLAY_DEPTH).setAlpha(0);
    const main = this.add.text(width / 2, height / 2, name, {
      fontSize: '28px', color: '#ffffff', fontFamily: 'monospace', fontStyle: 'bold',
    }).setOrigin(0.5).setDepth(OVERLAY_DEPTH).setAlpha(0);

    this.tweens.add({
      targets: [sub, main], alpha: 1, duration: 300, ease: 'Power1',
      yoyo: true, hold: 600,
      onComplete: () => { sub.destroy(); main.destroy(); },
    });
  }

  private refreshTimerHUD(): void {
    const state = this.boss.getState();
    if (state === 'pattern') {
      const { elapsed, duration } = this.boss.getPatternProgress();
      const remaining = Math.max(0, (duration - elapsed) / 1000);
      this.timerText.setText(`${remaining.toFixed(1)}초 생존`);
    } else if (state === 'transition') {
      this.timerText.setText('다음 패턴...');
    } else {
      this.timerText.setText('');
    }
  }

  // ── Collision ────────────────────────────────────────────────────────────────

  private readonly onBulletHit: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback = (
    _playerObj,
    bulletObj,
  ) => {
    if (this.player.isDead || this.gameOver) return;

    this.bm.killBullet(bulletObj as Phaser.GameObjects.Sprite);
    this.player.die();
    this.gameOver = true;
    this.bm.killAll();

    this.overlayText.setText('피격!\n\n[R] 재시작   [ESC] 처음으로').setVisible(true);
  };

  // ── Win ──────────────────────────────────────────────────────────────────────

  private handleWin(): void {
    if (this.gameWon) return;
    this.gameWon = true;
    this.time.delayedCall(1600, () => this.scene.start('ClearScene'));
  }

  // ── Playfield ────────────────────────────────────────────────────────────────

  private drawPlayfield(width: number, height: number): void {
    const g = this.add.graphics();
    g.lineStyle(1, 0x141414);
    for (let x = 0; x < width; x += 40) g.lineBetween(x, 0, x, height);
    for (let y = 0; y < height; y += 40) g.lineBetween(0, y, width, y);
    g.lineStyle(1, 0x252525).strokeRect(0, 0, width, height);
    g.lineStyle(1, 0x1e1e1e).lineBetween(0, 160, width, 160);
    this.add.text(4, 163, '보스 구역', { fontSize: '9px', color: '#2a2a2a', fontFamily: 'monospace' });
  }
}
