import Phaser from 'phaser';
import { Player } from '../entities/Player';
import { BulletManager } from '../entities/BulletManager';

const PANEL_X = 316;
const PANEL_W = 164;
const BOSS_X  = 158;
const BOSS_Y  = 82;
const PH      = 640;   // play area height

// ── Pattern descriptor ────────────────────────────────────────────────────────
interface PatternDef {
  label: string;
  color: number;
  start: (
    scene: Phaser.Scene,
    bm: BulletManager,
    bx: number,
    by: number,
    pp: () => Phaser.Math.Vector2,
  ) => Phaser.Time.TimerEvent[];
}

// ── 20 Boss Patterns ──────────────────────────────────────────────────────────
const PATTERN_DEFS: PatternDef[] = [

  // 1 ─ 꽃잎 춤: 2 counter-rotating arms, wave (CW) + curve (CCW)
  {
    label: '꽃잎 춤',
    color: 0xff88cc,
    start: (scene, bm, bx, by) => {
      let arm1 = 0, arm2 = Math.PI;
      const s3 = Math.PI * 2 / 3;
      const t1 = scene.time.addEvent({ delay: 240, loop: true, callback: () => {
        arm1 += 0.55;
        for (let i = 0; i < 3; i++) bm.fireWave(bx, by, arm1 + s3 * i, 145, 75, 2.5, 0xff88cc);
      }});
      const t2 = scene.time.addEvent({ delay: 280, loop: true, callback: () => {
        arm2 -= 0.5;
        for (let i = 0; i < 3; i++) bm.fireCurve(bx, by, arm2 + s3 * i, 170, 1.8, 0xffaaee);
      }});
      return [t1, t2];
    },
  },

  // 2 ─ 번개 반지: 8-zigzag rotating ring, angle advances each salvo
  {
    label: '번개 반지',
    color: 0xffff88,
    start: (scene, bm, bx, by) => {
      let ring = 0;
      const t = scene.time.addEvent({ delay: 115, loop: true, callback: () => {
        ring += 0.18;
        const s = Math.PI * 2 / 8;
        for (let i = 0; i < 8; i++) bm.fireZigzag(bx, by, ring + s * i, 305, 0.46, 90, 0xffff88);
      }});
      return [t];
    },
  },

  // 3 ─ 공전 성운: 6 orbitals at 3 different radii, all release together
  {
    label: '공전 성운',
    color: 0xffcc44,
    start: (scene, bm, bx, by) => {
      const fire = () => {
        bm.fireOrbital(bx, by, 0,              55, 3.8, 2200, 0xffcc44);
        bm.fireOrbital(bx, by, Math.PI,        55, 3.8, 2200, 0xffaa22);
        bm.fireOrbital(bx, by, Math.PI / 3,    85, 2.8, 2200, 0xffdd66);
        bm.fireOrbital(bx, by, Math.PI * 4/3,  85, 2.8, 2200, 0xffdd66);
        bm.fireOrbital(bx, by, Math.PI * 2/3, 115, 2.0, 2200, 0xffe888);
        bm.fireOrbital(bx, by, Math.PI * 5/3, 115, 2.0, 2200, 0xffe888);
      };
      fire();
      return [scene.time.addEvent({ delay: 3000, loop: true, callback: fire })];
    },
  },

  // 4 ─ 분기 폭포: 4 fork bullets per wave angled slightly, fans into 5
  {
    label: '분기 폭포',
    color: 0xffff44,
    start: (scene, bm, bx, by) => {
      const t = scene.time.addEvent({ delay: 275, loop: true, callback: () => {
        for (let i = 0; i < 4; i++) {
          bm.fireFork(bx + (i - 1.5) * 50, by, Math.PI / 2 + (i - 1.5) * 0.18, 210, 5, 0.65, 650, 0xffff44);
        }
      }});
      return [t];
    },
  },

  // 5 ─ 중력 포격: full ring of gravity bullets — upward ones arc back down
  {
    label: '중력 포격',
    color: 0x4488ff,
    start: (scene, bm, bx, by) => {
      const t = scene.time.addEvent({ delay: 380, loop: true, callback: () => {
        const n = 12, s = Math.PI * 2 / n;
        for (let i = 0; i < n; i++) bm.fireGravity(bx, by, s * i, 155, 290, 0x4488ff);
      }});
      return [t];
    },
  },

  // 6 ─ 귀환 폭풍: ring of 12 boomerangs — brief clear window then danger returns
  {
    label: '귀환 폭풍',
    color: 0x44ddff,
    start: (scene, bm, bx, by) => {
      const fire = () => {
        const n = 12, s = Math.PI * 2 / n;
        for (let i = 0; i < n; i++) bm.fireBoomerang(bx, by, s * i, 230, 1900, 0x44ddff);
      };
      fire();
      return [scene.time.addEvent({ delay: 2200, loop: true, callback: fire })];
    },
  },

  // 7 ─ 공명 오케스트라: 8-phase resonance ripples alternating from 3 positions
  {
    label: '공명 오케스트라',
    color: 0x66ccff,
    start: (scene, bm, bx, by) => {
      const pos = [
        { x: bx - 65, a: Math.PI / 2 + 0.3 },
        { x: bx,      a: Math.PI / 2        },
        { x: bx + 65, a: Math.PI / 2 - 0.3 },
      ];
      let w = 0;
      const t = scene.time.addEvent({ delay: 380, loop: true, callback: () => {
        const p = pos[w % 3];
        bm.fireResonance(p.x, by, p.a, 8, 155, 85, 2.5, 0x66ccff);
        w++;
      }});
      return [t];
    },
  },

  // 8 ─ 뱀 소용돌이: 4-arm snake, base angle rotates → sweeping vortex
  {
    label: '뱀 소용돌이',
    color: 0x44ff66,
    start: (scene, bm, bx, by) => {
      let base = 0;
      const t = scene.time.addEvent({ delay: 340, loop: true, callback: () => {
        base += 0.4;
        const s = Math.PI * 2 / 4;
        for (let i = 0; i < 4; i++) bm.fireSnake(bx, by, base + s * i, 185, 1.3, 1.4, 0x44ff66);
      }});
      return [t];
    },
  },

  // 9 ─ 8자 선회: 10 figure-8 with ascending frequencies → complex interference
  {
    label: '8자 선회',
    color: 0xff6699,
    start: (scene, bm, bx, by) => {
      const fire = () => {
        for (let i = 0; i < 10; i++) {
          bm.fireFigure8(bx + (i - 4.5) * 24, by, Math.PI / 2, 50, 60, 0.8 + i * 0.2, 0xff6699);
        }
      };
      fire();
      return [scene.time.addEvent({ delay: 7200, loop: true, callback: fire })];
    },
  },

  // 10 ─ 산탄 세례: rapid randomised scatter shots with brief pause rhythm
  {
    label: '산탄 세례',
    color: 0xffbbbb,
    start: (scene, bm, bx, by) => {
      const t = scene.time.addEvent({ delay: 440, loop: true, callback: () => {
        bm.fireScatter(bx, by, Math.PI / 2, 22, 1.3, 220, 0xffbbbb);
      }});
      return [t];
    },
  },

  // 11 ─ 충격파 연쇄: shockwaves from 3 alternating positions → overlapping rings
  {
    label: '충격파 연쇄',
    color: 0xff8833,
    start: (scene, bm, bx, by) => {
      let idx = 0;
      const xs = [bx - 80, bx, bx + 80];
      const t = scene.time.addEvent({ delay: 570, loop: true, callback: () => {
        bm.fireShockwave(xs[idx % 3], by, 18, 305, 385, 0xff8833);
        idx++;
      }});
      return [t];
    },
  },

  // 12 ─ 소환 포위: V-formation of 5 spawners that continuously fire at player
  {
    label: '소환 포위',
    color: 0xff4455,
    start: (scene, bm, bx, by) => {
      const fire = () => {
        for (let i = 0; i < 5; i++) {
          bm.fireSpawner(bx, by, Math.PI / 2 + (i - 2) * 0.35, 55, 460, 4500, 0xff4455);
        }
      };
      fire();
      return [scene.time.addEvent({ delay: 5000, loop: true, callback: fire })];
    },
  },

  // 13 ─ 가속 회오리: 3-spoke accel pairs rotating fast → pinwheel vortex
  {
    label: '가속 회오리',
    color: 0xff44ff,
    start: (scene, bm, bx, by) => {
      let ang = 0;
      const t = scene.time.addEvent({ delay: 45, loop: true, callback: () => {
        ang += 0.15;
        bm.fireAccel(bx, by, ang,                    28, 225, 460, 0xff44ff);
        bm.fireAccel(bx, by, ang + Math.PI * 2 / 3,  28, 225, 460, 0xff88cc);
        bm.fireAccel(bx, by, ang + Math.PI * 4 / 3,  28, 225, 460, 0xdd44ff);
      }});
      return [t];
    },
  },

  // 14 ─ 시한 지뢰밭: 12 delayed bullets scatter across play area, re-seeded each wave
  {
    label: '시한 지뢰밭',
    color: 0xff88cc,
    start: (scene, bm) => {
      const fire = () => {
        for (let i = 0; i < 12; i++) {
          const x = 20 + Math.random() * (PANEL_X - 40);
          const y = 140 + Math.random() * 380;
          bm.fireDelayed(x, y, 1000, 240, 0xff88cc);
        }
      };
      fire();
      return [scene.time.addEvent({ delay: 1600, loop: true, callback: fire })];
    },
  },

  // 15 ─ 레이저 십자가: 8-beam star burst aimed at player, angle rotates each volley
  {
    label: '레이저 십자가',
    color: 0xffffff,
    start: (scene, bm, bx, by, pp) => {
      let offset = 0;
      const fire = () => {
        const p  = pp();
        const a0 = Math.atan2(p.y - by, p.x - bx) + offset;
        for (let i = 0; i < 8; i++) bm.fireLaser(bx, by, a0 + i * Math.PI / 4, 560, 14, 0xffffff);
        offset += 0.35;
      };
      fire();
      return [scene.time.addEvent({ delay: 1800, loop: true, callback: fire })];
    },
  },

  // 16 ─ 분열 폭풍: 6-ring of split bullets, ring rotates each wave
  {
    label: '분열 폭풍',
    color: 0xdddddd,
    start: (scene, bm, bx, by) => {
      let ang = 0;
      const t = scene.time.addEvent({ delay: 540, loop: true, callback: () => {
        ang += Math.PI / 6;
        const n = 6, s = Math.PI * 2 / n;
        for (let i = 0; i < n; i++) bm.fireSplit(bx, by, ang + s * i, 130, 10, 185, 900, 0xdddddd);
      }});
      return [t];
    },
  },

  // 17 ─ 곡선 나비: 4-arm simultaneous CW + CCW curve pairs → butterfly symmetry
  {
    label: '곡선 나비',
    color: 0x9944ff,
    start: (scene, bm, bx, by) => {
      let ang = 0;
      const t = scene.time.addEvent({ delay: 155, loop: true, callback: () => {
        ang += 0.2;
        const s = Math.PI / 2;
        for (let i = 0; i < 4; i++) {
          const a = ang + s * i;
          bm.fireCurve(bx, by, a,  175,  2.2, 0x9944ff);
          bm.fireCurve(bx, by, a,  175, -2.2, 0xcc66ff);
        }
      }});
      return [t];
    },
  },

  // 18 ─ 혼돈의 신: random bullet type every 250 ms — 8 options in rotation
  {
    label: '혼돈의 신',
    color: 0xff6644,
    start: (scene, bm, bx, by, pp) => {
      const n8 = () => Math.PI * 2 / 8;
      const opts = [
        () => bm.fireScatter(bx, by, Math.PI / 2, 18, 1.3, 220, 0xffbbbb),
        () => { const s=n8(); for (let i=0;i<8;i++) bm.fireSplit(bx,by,s*i,115,8,180,900,0xdddddd); },
        () => { const s=n8(); for (let i=0;i<8;i++) bm.fireZigzag(bx,by,s*i,300,0.46,90,0xffff88); },
        () => { for (let i=0;i<5;i++) bm.fireFork(bx,by,Math.PI/2+(i-2)*0.3,205,4,0.6,700,0xffff44); },
        () => bm.fireShockwave(bx, by, 16, 295, 380, 0xff8833),
        () => bm.fireResonance(bx, by, Math.PI/2, 8, 155, 85, 2.5, 0x66ccff),
        () => { const s=n8(); for (let i=0;i<8;i++) bm.fireGravity(bx,by,s*i,150,290,0x4488ff); },
        () => { const p=pp(); bm.fireLaser(bx,by,Math.atan2(p.y-by,p.x-bx),560,14,0xffffff); },
      ];
      const t = scene.time.addEvent({ delay: 250, loop: true, callback: () => {
        opts[Math.floor(Math.random() * opts.length)]();
      }});
      return [t];
    },
  },

  // 19 ─ 포위 절멸: bullets from all 4 edges converging on player each wave
  {
    label: '포위 절멸',
    color: 0xff4466,
    start: (scene, bm, _bx, _by, pp) => {
      const t = scene.time.addEvent({ delay: 750, loop: true, callback: () => {
        const pos = pp();
        const rnd = () => (Math.random() - 0.5) * 0.25;
        for (let i = 0; i < 7; i++) {
          const x = 20 + i * 42;
          bm.fire(x,       -5,    Math.atan2(pos.y + 5,       pos.x - x) + rnd(), 185, 0xff4466);
          bm.fire(x,       PH+5,  Math.atan2(pos.y - PH - 5,  pos.x - x) + rnd(), 185, 0x4466ff);
        }
        for (let i = 0; i < 5; i++) {
          const y = 120 + i * 100;
          bm.fire(-5,       y, Math.atan2(pos.y - y, pos.x + 5)           + rnd(), 185, 0xff8844);
          bm.fire(PANEL_X+5,y, Math.atan2(pos.y - y, pos.x - PANEL_X - 5) + rnd(), 185, 0x44ff88);
        }
      }});
      return [t];
    },
  },

  // 20 ─ 최후의 심판: 4 simultaneous repeating timers — everything at once
  {
    label: '최후의 심판',
    color: 0xff2222,
    start: (scene, bm, bx, by) => {
      // Orbital wave every 2800 ms
      let orbOff = 0;
      const fire6 = (off: number) => {
        const s = Math.PI / 3;
        for (let i = 0; i < 6; i++) bm.fireOrbital(bx, by, off + s * i, 85, 2.8, 2200, 0xffcc44);
      };
      fire6(0);
      const t1 = scene.time.addEvent({ delay: 2800, loop: true, callback: () => { orbOff += Math.PI/6; fire6(orbOff); }});

      // Bi-directional resonance every 1100 ms
      let resOff = 0;
      const t2 = scene.time.addEvent({ delay: 1100, loop: true, callback: () => {
        resOff += 0.4;
        bm.fireResonance(bx, by, Math.PI / 2 + resOff, 6, 155, 80, 2.5, 0x66ccff);
        bm.fireResonance(bx, by, Math.PI / 2 - resOff, 6, 155, 80, 2.5, 0x6699ff);
      }});

      // 3-arm fork ring every 310 ms
      let forkOff = 0;
      const t3 = scene.time.addEvent({ delay: 310, loop: true, callback: () => {
        forkOff += 0.18;
        const s = Math.PI * 2 / 3;
        for (let i = 0; i < 3; i++) bm.fireFork(bx, by, forkOff + s * i, 200, 4, 0.6, 750, 0xffff44);
      }});

      // 6-zigzag rotating ring every 190 ms
      let zigOff = 0;
      const t4 = scene.time.addEvent({ delay: 190, loop: true, callback: () => {
        zigOff += 0.12;
        const s = Math.PI / 3;
        for (let i = 0; i < 6; i++) bm.fireZigzag(bx, by, zigOff + s * i, 295, 0.45, 92, 0xffee88);
      }});

      return [t1, t2, t3, t4];
    },
  },

];

// ── Scene ─────────────────────────────────────────────────────────────────────
export class PatternTestScene extends Phaser.Scene {
  private player!: Player;
  private bm!: BulletManager;
  private infoText!: Phaser.GameObjects.Text;
  private activeTimers: Phaser.Time.TimerEvent[] = [];
  private activeBtns: Phaser.GameObjects.Rectangle[] = [];
  private activeIdx = -1;

  constructor() { super({ key: 'PatternTestScene' }); }

  create(): void {
    const { width, height } = this.scale;
    this.physics.world.setBounds(0, 0, width, height);
    this.activeTimers = [];
    this.activeIdx    = -1;

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
    back.on('pointerdown', () => { this.stopPattern(); this.scene.start('StartScene'); });

    this.input.keyboard!.on('keydown-ESC', () => { this.stopPattern(); this.scene.start('StartScene'); });

    this.infoText = this.add.text(BOSS_X, BOSS_Y + 52, '← 패턴을 선택하세요', {
      fontSize: '10px', color: '#333333', fontFamily: 'monospace', align: 'center',
    }).setOrigin(0.5, 0).setDepth(15);
  }

  update(_time: number, delta: number): void {
    this.player.update();
    this.bm.update(delta);
  }

  // ── Pattern lifecycle ────────────────────────────────────────────────────

  private stopPattern(): void {
    for (const t of this.activeTimers) t.remove();
    this.activeTimers = [];
    this.bm.killAll();
  }

  private activatePattern(def: PatternDef, idx: number): void {
    this.stopPattern();
    this.infoText.setText(`▶ ${def.label}`);
    this.activeTimers = def.start(this, this.bm, BOSS_X, BOSS_Y, () => this.player.getPosition());
    // Highlight active button
    this.activeBtns.forEach((btn, i) => btn.setFillStyle(i === idx ? 0x2a2a2a : 0x181818));
    this.activeIdx = idx;
  }

  // ── Panel ─────────────────────────────────────────────────────────────────

  private buildPanel(height: number): void {
    const cx = PANEL_X + PANEL_W / 2;

    this.add.rectangle(PANEL_X + PANEL_W / 2, height / 2, PANEL_W, height, 0x0d0d0d).setDepth(50);
    this.add.rectangle(PANEL_X, height / 2, 1, height, 0x242424).setDepth(51);
    this.add.text(cx, 10, '패턴 테스트', {
      fontSize: '11px', color: '#444444', fontFamily: 'monospace',
    }).setOrigin(0.5, 0).setDepth(51);

    const BTN_H   = 24;
    const GAP     = 2;
    const START_Y = 26;

    PATTERN_DEFS.forEach((def, i) => {
      const by  = START_Y + i * (BTN_H + GAP);
      const btn = this.add.rectangle(cx, by + BTN_H / 2, PANEL_W - 14, BTN_H, 0x181818)
        .setInteractive({ useHandCursor: true }).setDepth(52);

      this.activeBtns.push(btn);
      this.add.rectangle(PANEL_X + 5, by + BTN_H / 2, 2, BTN_H - 4, def.color).setDepth(53);

      const num = this.add.text(PANEL_X + 14, by + BTN_H / 2, `${i + 1}`, {
        fontSize: '8px', color: '#333333', fontFamily: 'monospace',
      }).setOrigin(0, 0.5).setDepth(53);

      const txt = this.add.text(cx + 6, by + BTN_H / 2, def.label, {
        fontSize: '10px', color: '#777777', fontFamily: 'monospace',
      }).setOrigin(0.5).setDepth(53);

      btn.on('pointerover', () => { if (this.activeIdx !== i) btn.setFillStyle(0x232323); txt.setStyle({ color: '#cccccc' }); num.setStyle({ color: '#555555' }); });
      btn.on('pointerout',  () => { if (this.activeIdx !== i) btn.setFillStyle(0x181818); txt.setStyle({ color: this.activeIdx === i ? '#ffffff' : '#777777' }); num.setStyle({ color: '#333333' }); });
      btn.on('pointerdown', () => this.activatePattern(def, i));
    });

    const retY = height - 14;
    const ret  = this.add.rectangle(cx, retY, PANEL_W - 14, 20, 0x1a1a1a)
      .setInteractive({ useHandCursor: true }).setDepth(52);
    this.add.text(cx, retY, '처음으로', {
      fontSize: '10px', color: '#444444', fontFamily: 'monospace',
    }).setOrigin(0.5).setDepth(53);
    ret.on('pointerover', () => ret.setFillStyle(0x252525));
    ret.on('pointerout',  () => ret.setFillStyle(0x1a1a1a));
    ret.on('pointerdown', () => { this.stopPattern(); this.scene.start('StartScene'); });
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
