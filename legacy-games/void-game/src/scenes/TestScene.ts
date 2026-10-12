import Phaser from 'phaser';
import { Player } from '../entities/Player';
import { BulletManager } from '../entities/BulletManager';

// ── Layout ────────────────────────────────────────────────────────────────────
const PANEL_X = 316;
const PANEL_W = 164;
const BOSS_X  = 158;
const BOSS_Y  = 82;

interface BtnDef {
  label: string;
  color: number;
  demo: (bm: BulletManager, bx: number, by: number, getPlayerPos: () => Phaser.Math.Vector2) => void;
}

const BULLET_DEFS: BtnDef[] = [
  // ── Original types ──────────────────────────────────────────────────────
  {
    label: '기본탄',
    color: 0xaaaaaa,
    demo: (bm, bx, by) => {
      const n = 14, step = (Math.PI * 2) / n;
      for (let i = 0; i < n; i++) bm.fire(bx, by, step * i, 200, 0xaaaaaa);
    },
  },
  {
    label: '관성 유도탄',
    color: 0xffaa00,
    demo: (bm, bx, by) => {
      // Curves toward player for 1500 ms, then flies straight — dodge the initial arc!
      for (let i = 0; i < 7; i++) {
        const a = Math.PI / 2 + (i - 3) * 0.28;
        bm.fireInertial(bx, by, a, 195, 2.8, 1500, 0xffaa00);
      }
    },
  },
  {
    label: '분열탄',
    color: 0xdddddd,
    demo: (bm, bx, by) => {
      for (let i = 0; i < 4; i++) {
        const a = Math.PI / 2 + (i - 1.5) * 0.38;
        bm.fireSplit(bx, by, a, 130, 10, 185, 1000, 0xdddddd);
      }
    },
  },
  {
    label: '파동탄',
    color: 0x00ccff,
    demo: (bm, bx, by) => {
      for (let i = 0; i < 5; i++) {
        const a = Math.PI / 2 + (i - 2) * 0.38;
        bm.fireWave(bx, by, a, 150, 85, 2.8, 0x00ccff);
      }
    },
  },
  {
    label: '가속탄',
    color: 0xff44ff,
    demo: (bm, bx, by) => {
      const n = 10, step = (Math.PI * 2) / n;
      for (let i = 0; i < n; i++) bm.fireAccel(bx, by, step * i, 35, 210, 480, 0xff44ff);
    },
  },
  {
    label: '반사탄',
    color: 0x44ff88,
    demo: (bm, bx, by) => {
      const n = 8, step = (Math.PI * 2) / n;
      for (let i = 0; i < n; i++) bm.fireBounce(bx, by, step * i, 200, 3, 0x44ff88);
    },
  },
  {
    label: '지연탄',
    color: 0xff88cc,
    demo: (bm, bx, by) => {
      for (let i = 0; i < 7; i++) bm.fireDelayed(bx + (i - 3) * 26, by + 65, 900, 250, 0xff88cc);
    },
  },
  {
    label: '곡선탄',
    color: 0x9944ff,
    demo: (bm, bx, by) => {
      for (let i = 0; i < 5; i++) {
        const a = Math.PI / 2 + (i - 2) * 0.32;
        bm.fireCurve(bx, by, a, 185,  2.2, 0x9944ff);
        bm.fireCurve(bx, by, a, 185, -2.2, 0xcc66ff);
      }
    },
  },
  {
    label: '폭발탄',
    color: 0xff3333,
    demo: (bm, bx, by) => {
      for (let i = 0; i < 5; i++) {
        const a = Math.PI / 2 + (i - 2) * 0.38;
        bm.fireBurst(bx, by, a, 150, 950, 14, 205, 0xff3333);
      }
    },
  },
  {
    label: '중력탄',
    color: 0x4488ff,
    demo: (bm, bx, by) => {
      for (let i = 0; i < 7; i++) {
        const a = Math.PI / 2 - 0.9 + i * 0.3;
        bm.fireGravity(bx, by, a, 260, 320, 0x4488ff);
      }
    },
  },
  {
    label: '레이저탄',
    color: 0xffffff,
    demo: (bm, bx, by, getPlayerPos) => {
      const p = getPlayerPos();
      bm.fireLaser(bx, by, Math.atan2(p.y - by, p.x - bx), 580, 18, 0xffffff);
    },
  },
  // ── New types ───────────────────────────────────────────────────────────
  {
    label: '궤도탄',
    color: 0xffcc44,
    demo: (bm, bx, by) => {
      // 8 bullets orbit the boss then release tangentially all at once
      const n = 8, step = (Math.PI * 2) / n;
      for (let i = 0; i < n; i++) bm.fireOrbital(bx, by, step * i, 80, 2.8, 2200, 0xffcc44);
    },
  },
  {
    label: '8자탄',
    color: 0xff6699,
    demo: (bm, bx, by) => {
      // 5 parallel figure-8 Lissajous paths drifting downward
      for (let i = 0; i < 5; i++) {
        bm.fireFigure8(bx + (i - 2) * 22, by, Math.PI / 2, 55, 65, 1.6, 0xff6699);
      }
    },
  },
  {
    label: '분기탄',
    color: 0xffff44,
    demo: (bm, bx, by) => {
      // Each bullet flies straight then fans into 4 at 700 ms
      for (let i = 0; i < 5; i++) {
        const a = Math.PI / 2 + (i - 2) * 0.3;
        bm.fireFork(bx, by, a, 210, 4, 0.6, 700, 0xffff44);
      }
    },
  },
  {
    label: '소환탄',
    color: 0xff4455,
    demo: (bm, bx, by) => {
      // 3 slow bullets that spawn homing children every 480 ms
      for (let i = 0; i < 3; i++) {
        const a = Math.PI / 2 + (i - 1) * 0.38;
        bm.fireSpawner(bx, by, a, 55, 480, 4000, 0xff4455);
      }
    },
  },
  {
    label: '귀환탄',
    color: 0x44ddff,
    demo: (bm, bx, by) => {
      // Ring of 8 boomerangs — fly out, slow down, return
      const n = 8, step = (Math.PI * 2) / n;
      for (let i = 0; i < n; i++) bm.fireBoomerang(bx, by, step * i, 230, 1900, 0x44ddff);
    },
  },
  {
    label: '번개탄',
    color: 0xffff88,
    demo: (bm, bx, by) => {
      // Rapid zigzag — electric crackling motion
      for (let i = 0; i < 7; i++) {
        const a = Math.PI / 2 + (i - 3) * 0.26;
        bm.fireZigzag(bx, by, a, 310, 0.46, 90, 0xffff88);
      }
    },
  },
  {
    label: '뱀탄',
    color: 0x44ff66,
    demo: (bm, bx, by) => {
      // Sinusoidal heading — sweeping wide S-curves
      for (let i = 0; i < 5; i++) {
        const a = Math.PI / 2 + (i - 2) * 0.33;
        bm.fireSnake(bx, by, a, 185, 1.3, 1.4, 0x44ff66);
      }
    },
  },
  {
    label: '충격파탄',
    color: 0xff8833,
    demo: (bm, bx, by) => {
      // Expanding ring that decelerates and vanishes
      bm.fireShockwave(bx, by, 20, 310, 400, 0xff8833);
    },
  },
  {
    label: '공명탄',
    color: 0x66ccff,
    demo: (bm, bx, by) => {
      // 8 phase-offset wave bullets forming a ripple
      bm.fireResonance(bx, by, Math.PI / 2, 8, 155, 90, 2.5, 0x66ccff);
    },
  },
  {
    label: '산탄',
    color: 0xffbbbb,
    demo: (bm, bx, by) => {
      // Dense random cone spray
      bm.fireScatter(bx, by, Math.PI / 2, 22, 1.2, 220, 0xffbbbb);
    },
  },
];

// ── Scene ─────────────────────────────────────────────────────────────────────
export class TestScene extends Phaser.Scene {
  private player!: Player;
  private bm!: BulletManager;
  private infoText!: Phaser.GameObjects.Text;

  constructor() { super({ key: 'TestScene' }); }

  create(): void {
    const { width, height } = this.scale;
    this.physics.world.setBounds(0, 0, width, height);

    this.drawBackground(height);
    this.drawBossShape();

    this.bm     = new BulletManager(this, () => this.player.getPosition());
    this.player = new Player(this, BOSS_X, height - 110);

    this.buildPanel(height);

    const back = this.add.text(10, 8, '← 뒤로', {
      fontSize: '13px', color: '#555555', fontFamily: 'monospace',
    }).setInteractive({ useHandCursor: true }).setDepth(60);
    back.on('pointerover', () => back.setStyle({ color: '#aaaaaa' }));
    back.on('pointerout',  () => back.setStyle({ color: '#555555' }));
    back.on('pointerdown', () => this.scene.start('StartScene'));

    this.input.keyboard!.on('keydown-ESC', () => this.scene.start('StartScene'));

    this.infoText = this.add.text(BOSS_X, BOSS_Y + 52, '', {
      fontSize: '10px', color: '#444444', fontFamily: 'monospace', align: 'center',
    }).setOrigin(0.5, 0).setDepth(15);


  }

  update(_time: number, delta: number): void {
    this.player.update();
    this.bm.update(delta);
  }

  // ── Panel ─────────────────────────────────────────────────────────────────

  private buildPanel(height: number): void {
    const cx = PANEL_X + PANEL_W / 2;

    this.add.rectangle(PANEL_X + PANEL_W / 2, height / 2, PANEL_W, height, 0x0d0d0d).setDepth(50);
    this.add.rectangle(PANEL_X, height / 2, 1, height, 0x242424).setDepth(51);
    this.add.text(cx, 10, '탄 테스트', {
      fontSize: '11px', color: '#444444', fontFamily: 'monospace',
    }).setOrigin(0.5, 0).setDepth(51);

    const BTN_H   = 24;
    const GAP     = 2;
    const START_Y = 26;

    BULLET_DEFS.forEach((def, i) => {
      const by  = START_Y + i * (BTN_H + GAP);
      const btn = this.add.rectangle(cx, by + BTN_H / 2, PANEL_W - 14, BTN_H, 0x181818)
        .setInteractive({ useHandCursor: true }).setDepth(52);

      this.add.rectangle(PANEL_X + 5, by + BTN_H / 2, 2, BTN_H - 4, def.color).setDepth(53);

      const txt = this.add.text(cx + 3, by + BTN_H / 2, def.label, {
        fontSize: '10px', color: '#777777', fontFamily: 'monospace',
      }).setOrigin(0.5).setDepth(53);

      btn.on('pointerover', () => { btn.setFillStyle(0x232323); txt.setStyle({ color: '#cccccc' }); });
      btn.on('pointerout',  () => { btn.setFillStyle(0x181818); txt.setStyle({ color: '#777777' }); });
      btn.on('pointerdown', () => {
        this.infoText.setText(`▶ ${def.label}`);
        def.demo(this.bm, BOSS_X, BOSS_Y, () => this.player.getPosition());
      });
    });

    const retY = height - 14;
    const ret  = this.add.rectangle(cx, retY, PANEL_W - 14, 20, 0x1a1a1a)
      .setInteractive({ useHandCursor: true }).setDepth(52);
    this.add.text(cx, retY, '처음으로', {
      fontSize: '10px', color: '#444444', fontFamily: 'monospace',
    }).setOrigin(0.5).setDepth(53);
    ret.on('pointerover', () => ret.setFillStyle(0x252525));
    ret.on('pointerout',  () => ret.setFillStyle(0x1a1a1a));
    ret.on('pointerdown', () => this.scene.start('StartScene'));
  }

  // ── Visuals ───────────────────────────────────────────────────────────────

  private drawBackground(height: number): void {
    const g = this.add.graphics();
    g.lineStyle(1, 0x141414);
    for (let x = 0; x < PANEL_X; x += 40) g.lineBetween(x, 0, x, height);
    for (let y = 0; y < height; y += 40) g.lineBetween(0, y, PANEL_X, y);
    g.lineStyle(1, 0x1e1e1e).strokeRect(0, 0, PANEL_X, height);
    this.add.text(6, height - 14, '방향키로 플레이어 이동', {
      fontSize: '9px', color: '#282828', fontFamily: 'monospace',
    });
  }

  private drawBossShape(): void {
    const g = this.add.graphics().setDepth(2);
    g.fillStyle(0x1e1e1e).fillRect(BOSS_X - 40, BOSS_Y - 28, 80, 56);
    g.lineStyle(1, 0x444444).strokeRect(BOSS_X - 40, BOSS_Y - 28, 80, 56);
    g.lineStyle(1, 0x2c2c2c).strokeRect(BOSS_X - 30, BOSS_Y - 18, 60, 36);
    g.fillStyle(0x555555).fillCircle(BOSS_X, BOSS_Y, 5);
  }
}
