import Phaser from 'phaser';
import { GameState } from '../GameState';
import { bgm } from '../audio/BGMManager';
import { addSettingsButton } from './SettingsScene';
import {
  BG_DEEP, BG_PANEL,
  PINK, ROSE, PINK_SOFT, LAVENDER, GOLD,
  TEXT_PRIMARY, FONT,
} from '../theme';

// ── 레이아웃 ─────────────────────────────────────────────────────────────────
const DIAG_TOP_X = 480;   // 왼쪽 패널 오른쪽-상단 x (대각선 시작)
const DIAG_BOT_X = 560;   // 왼쪽 패널 오른쪽-하단 x (대각선 끝)
const BTN_CX     = 248;   // 버튼/콘텐츠 중심 x
const BTN_W      = 340;   // 버튼 너비
const BTN_H      = 62;    // 버튼 높이
const BTN_GAP    = 16;    // 버튼 간 간격

// 왼쪽 패널 다각형 좌표 (반시계 방향)
const PANEL_POLY = [
  { x: 0,          y: 0   },
  { x: DIAG_TOP_X, y: 0   },
  { x: DIAG_BOT_X, y: 720 },
  { x: 0,          y: 720 },
];

export class TitleScene extends Phaser.Scene {
  constructor() { super({ key: 'TitleScene' }); }

  create(): void {
    bgm.play('bgm01');
    this.cameras.main.fadeIn(700, 0, 0, 0);
    this.renderBackground();
    this.renderRightHero();
    this.renderPanelShadow();
    this.renderLeftPanel();
    this.renderTitleLogo();
    this.renderButtons();
    addSettingsButton(this);
  }

  // ── 배경 (우측 영역 위주) ────────────────────────────────────────────────

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, BG_DEEP);

    // 우측에 집중된 분위기 오브
    const orbs: [number, number, number, number, number][] = [
      [950,  200, 230, PINK,     0.07],
      [1150, 560, 260, LAVENDER, 0.08],
      [780,  400, 200, ROSE,     0.04],
      [1060, 130, 140, GOLD,     0.04],
      [680,  620, 110, LAVENDER, 0.05],
    ];
    orbs.forEach(([x, y, r, c, a]) => {
      const orb = this.add.circle(x, y, r, c).setAlpha(a);
      this.tweens.add({
        targets: orb,
        alpha: { from: a * 0.3, to: a },
        duration: Phaser.Math.Between(2500, 5500),
        yoyo: true, repeat: -1,
        delay: Phaser.Math.Between(0, 3000),
        ease: 'Sine.InOut',
      });
    });

    // 우측 절반 별빛
    for (let i = 0; i < 75; i++) {
      const x = Phaser.Math.Between(500, 1280);
      const y = Phaser.Math.Between(0, 720);
      const r = Math.random() < 0.12 ? 2 : 1;
      const a = Phaser.Math.FloatBetween(0.10, 0.65);
      const star = this.add.circle(x, y, r, 0xFFFFFF).setAlpha(a);
      this.tweens.add({
        targets: star,
        alpha: { from: a * 0.1, to: a },
        duration: Phaser.Math.Between(1400, 4200),
        yoyo: true, repeat: -1,
        delay: Phaser.Math.Between(0, 4000),
        ease: 'Sine.InOut',
      });
    }
  }

  // ── 우측 히어로 아트 플레이스홀더 ────────────────────────────────────────

  private renderRightHero(): void {
    const rx = 890, ry = 360;
    const rw = 600, rh = 580;

    // 외부 장식 프레임
    const outerFrame = this.add.graphics();
    outerFrame.lineStyle(1, GOLD, 0.22);
    outerFrame.strokeRoundedRect(rx - rw / 2, ry - rh / 2, rw, rh, 10);

    // 이미지 교체 영역 (어두운 배경)
    const imgArea = this.add.graphics();
    imgArea.fillStyle(0x18062E, 0.55);
    imgArea.fillRoundedRect(rx - rw / 2 + 8, ry - rh / 2 + 8, rw - 16, rh - 16, 7);

    // 코너 장식
    const corners = this.add.graphics();
    corners.lineStyle(2, GOLD, 0.5);
    const cs = 22, mx = rx - rw / 2 + 12, my = ry - rh / 2 + 12;
    const mxr = rx + rw / 2 - 12, myr = ry + rh / 2 - 12;
    // top-left
    corners.beginPath(); corners.moveTo(mx, my + cs); corners.lineTo(mx, my); corners.lineTo(mx + cs, my); corners.strokePath();
    // top-right
    corners.beginPath(); corners.moveTo(mxr - cs, my); corners.lineTo(mxr, my); corners.lineTo(mxr, my + cs); corners.strokePath();
    // bottom-left
    corners.beginPath(); corners.moveTo(mx, myr - cs); corners.lineTo(mx, myr); corners.lineTo(mx + cs, myr); corners.strokePath();
    // bottom-right
    corners.beginPath(); corners.moveTo(mxr - cs, myr); corners.lineTo(mxr, myr); corners.lineTo(mxr, myr - cs); corners.strokePath();

    // 플레이스홀더 텍스트
    const placeholderStar = this.add.text(rx, ry - 42, '✦', {
      fontSize: '40px', color: '#FFD70028', fontFamily: FONT,
    }).setOrigin(0.5);
    this.tweens.add({
      targets: placeholderStar, alpha: { from: 0.15, to: 0.6 },
      duration: 2400, yoyo: true, repeat: -1, ease: 'Sine.InOut',
    });

    this.add.text(rx, ry + 22, '캐릭터 일러스트', {
      fontSize: '16px', color: '#2A0A3A', fontFamily: FONT,
    }).setOrigin(0.5);
    this.add.text(rx, ry + 50, '이미지 교체 영역', {
      fontSize: '12px', color: '#1E0828', fontFamily: FONT,
    }).setOrigin(0.5);
  }

  // ── 대각선 그림자 (패널 오른쪽 모서리 뎁스) ─────────────────────────────

  private renderPanelShadow(): void {
    // 대각선 모서리를 따라 우측으로 퍼지는 그림자 띠
    const steps = 8;
    for (let i = steps; i >= 1; i--) {
      const alpha = i === steps ? 0.04 : (steps - i) * 0.04 + 0.04;
      const w = i * 14;
      const g = this.add.graphics();
      g.fillStyle(0x000000, alpha);
      g.fillPoints([
        { x: DIAG_TOP_X + (i - 1) * 14, y: 0 },
        { x: DIAG_TOP_X + w,             y: 0 },
        { x: DIAG_BOT_X + w,             y: 720 },
        { x: DIAG_BOT_X + (i - 1) * 14, y: 720 },
      ] as unknown as Phaser.Math.Vector2[], true);
    }
  }

  // ── 왼쪽 패널 ────────────────────────────────────────────────────────────

  private renderLeftPanel(): void {
    // 메인 패널 채우기
    const panel = this.add.graphics();
    panel.fillStyle(BG_PANEL, 0.97);
    panel.fillPoints(PANEL_POLY as unknown as Phaser.Math.Vector2[], true);

    // 패널 안쪽 핑크 서브틀 그라디언트 (상단)
    const topGlow = this.add.graphics();
    topGlow.fillStyle(PINK, 0.04);
    topGlow.fillPoints(PANEL_POLY as unknown as Phaser.Math.Vector2[], true);

    // 골드 상·하단 라인
    this.add.rectangle(BTN_CX, 2, BTN_CX * 2 + 60, 3, GOLD)
      .setOrigin(0.5, 0).setAlpha(0.65);
    this.add.rectangle(BTN_CX, 718, BTN_CX * 2 + 60, 3, GOLD)
      .setOrigin(0.5, 1).setAlpha(0.65);

    // 대각선 모서리 골드 하이라이트
    const edge = this.add.graphics();
    edge.lineStyle(1.5, GOLD, 0.55);
    edge.beginPath();
    edge.moveTo(DIAG_TOP_X, 0);
    edge.lineTo(DIAG_BOT_X, 720);
    edge.strokePath();
  }

  // ── 타이틀 로고 플레이스홀더 ─────────────────────────────────────────────

  private renderTitleLogo(): void {
    const lx = BTN_CX, ly = 148, lw = BTN_W, lh = 92;

    // 로고 이미지 교체 영역
    const logoBg = this.add.graphics();
    logoBg.fillStyle(0xFFFFFF, 0.03);
    logoBg.fillRoundedRect(lx - lw / 2, ly - lh / 2, lw, lh, 10);
    logoBg.lineStyle(1.5, GOLD, 0.35);
    logoBg.strokeRoundedRect(lx - lw / 2, ly - lh / 2, lw, lh, 10);

    // 타이틀 텍스트 (이미지로 교체될 자리)
    this.add.text(lx, ly - 14, '마법 덱 어드벤처', {
      fontSize: '25px', color: TEXT_PRIMARY,
      fontStyle: 'bold', fontFamily: FONT,
      stroke: '#8B0045', strokeThickness: 4,
      shadow: { offsetX: 0, offsetY: 0, color: '#FF69B4', blur: 14, fill: true },
    }).setOrigin(0.5);

    this.add.text(lx, ly + 24, '↑ 타이틀 로고 이미지 교체', {
      fontSize: '10px', color: '#3A1A5A', fontFamily: FONT,
    }).setOrigin(0.5);
  }

  // ── 버튼 배치 ────────────────────────────────────────────────────────────

  private renderButtons(): void {
    const START_Y = 278;
    const defs: [string, () => void][] = [
      ['게임 시작',          () => { GameState.hardReset(); this.goto('MapScene'); }],
      ['별빛 마법서 (도감)', () => this.goto('LoreBookScene')],
      ['개발자 테스트',      () => this.goto('HubScene')],
    ];
    defs.forEach(([label, cb], i) => {
      this.createMagicalButton(BTN_CX, START_Y + i * (BTN_H + BTN_GAP), label, cb);
    });

    // 하단 버전 텍스트
    this.add.text(BTN_CX, 695, 'ver 0.1 · Prototype', {
      fontSize: '10px', color: '#2A1040', fontFamily: FONT,
    }).setOrigin(0.5);
  }

  // ── 마법소녀 버튼 ────────────────────────────────────────────────────────

  private createMagicalButton(
    x: number, y: number,
    label: string,
    onClick: () => void,
  ): void {
    const BW = BTN_W, BH = BTN_H, R = 14;
    const container = this.add.container(x, y);

    // 외부 글로우 (호버 시 활성)
    const glow = this.add.graphics();
    glow.fillStyle(PINK, 0.20);
    glow.fillRoundedRect(-BW / 2 - 14, -BH / 2 - 14, BW + 28, BH + 28, R + 5);
    glow.setAlpha(0);

    // 그라디언트 바디: 핑크(상) → 라벤더(하)
    const body = this.add.graphics();
    body.fillGradientStyle(PINK_SOFT, PINK_SOFT, LAVENDER, LAVENDER, 0.92);
    body.fillRoundedRect(-BW / 2, -BH / 2, BW, BH, R);

    // 상단 광택 레이어
    const hilight = this.add.graphics();
    hilight.fillStyle(0xFFFFFF, 0.18);
    hilight.fillRoundedRect(
      -BW / 2 + 5, -BH / 2 + 5,
      BW - 10, BH * 0.36,
      { tl: R - 2, tr: R - 2, bl: 0, br: 0 },
    );

    // 골드 테두리
    const border = this.add.graphics();
    border.lineStyle(2.5, GOLD, 1);
    border.strokeRoundedRect(-BW / 2, -BH / 2, BW, BH, R);

    // 빛 줄기 (좌→우 스윕)
    const shine = this.add.graphics();
    shine.fillStyle(0xFFFFFF, 0.55);
    shine.fillRect(0, -BH / 2 + 8, 16, BH - 16);
    shine.x = -BW / 2 - 30;
    shine.setAlpha(0);

    // 레이블
    const txt = this.add.text(0, 1, label, {
      fontSize: '21px', color: '#3D0A1E',
      fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    container.add([glow, body, hilight, shine, border, txt]);
    container.setSize(BW, BH);
    container.setInteractive({ useHandCursor: true });

    // 호버 진입
    container.on('pointerover', () => {
      this.tweens.killTweensOf([container, glow, shine]);
      this.tweens.add({ targets: container, scaleX: 1.06, scaleY: 1.06, duration: 140, ease: 'Back.Out' });
      this.tweens.add({ targets: glow, alpha: 1, duration: 180 });
      // 빛 줄기 스윕
      shine.x = -BW / 2 - 30;
      this.tweens.add({
        targets: shine, alpha: 0.55, duration: 60,
        onComplete: () => {
          this.tweens.add({
            targets: shine, x: BW / 2 + 30, duration: 440, ease: 'Power1.Out',
            onComplete: () => this.tweens.add({ targets: shine, alpha: 0, duration: 130 }),
          });
        },
      });
    });

    // 호버 이탈
    container.on('pointerout', () => {
      this.tweens.killTweensOf([container, glow]);
      this.tweens.add({ targets: container, scaleX: 1, scaleY: 1, duration: 200, ease: 'Power2.Out' });
      this.tweens.add({ targets: glow, alpha: 0, duration: 260 });
    });

    // 클릭: 인덴트 → 반동 → 씬 이동
    container.on('pointerdown', () => {
      this.tweens.killTweensOf(container);
      this.tweens.add({
        targets: container, scaleX: 0.94, scaleY: 0.94,
        duration: 75, ease: 'Power2.In',
        onComplete: () => {
          this.tweens.add({
            targets: container, scaleX: 1.04, scaleY: 1.04,
            duration: 110, ease: 'Back.Out',
            onComplete: () => { container.disableInteractive(); onClick(); },
          });
        },
      });
    });
  }

  // ── 씬 이동 ──────────────────────────────────────────────────────────────

  private goto(sceneKey: string): void {
    this.cameras.main.fadeOut(300, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start(sceneKey));
  }
}
