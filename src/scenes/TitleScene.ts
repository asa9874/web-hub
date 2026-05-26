import Phaser from 'phaser';
import { GameState } from '../GameState';
import { bgm } from '../audio/BGMManager';
import {
  BG_DEEP,
  PINK, ROSE, LAVENDER, GOLD,
  FONT,
} from '../theme';

// ── 레이아웃 ─────────────────────────────────────────────────────────────────
const DIAG_TOP_X = 480;   // 왼쪽 패널 오른쪽-상단 x (대각선 시작)
const DIAG_BOT_X = 560;   // 왼쪽 패널 오른쪽-하단 x (대각선 끝)
const BTN_CX     = 248;   // 버튼/콘텐츠 중심 x
const BTN_H      = 90;    // 버튼 높이
const BTN_GAP    = 0;     // 버튼 간 간격

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
    bgm.startBackgroundLoad(); // Act 2/3 트랙 백그라운드 로드 시작
    this.cameras.main.fadeIn(700, 0, 0, 0);
    this.renderBackground();
    this.renderRightHero();
    this.renderPanelShadow();
    this.renderLeftPanel();
    this.renderTitleLogo();
    this.renderButtons();
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

  // ── 우측 배경 이미지 ──────────────────────────────────────────────────────

  private renderRightHero(): void {
    // 우측 영역(x 480~1280, 800×720)을 titlebg로 꽉 채움
    this.add.image(880, 360, 'title_bg').setDisplaySize(800, 720);
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
    // 메인 패널 — 우주 검정
    const panel = this.add.graphics();
    panel.fillStyle(0x04040C, 0.96);
    panel.fillPoints(PANEL_POLY as unknown as Phaser.Math.Vector2[], true);

    // 상단 은하 티끌 — 아주 미세한 보랏빛 그라디언트
    const topTint = this.add.graphics();
    topTint.fillStyle(0x8888FF, 0.025);
    topTint.fillPoints(PANEL_POLY as unknown as Phaser.Math.Vector2[], true);

    // 상·하단 실버 라인
    this.add.rectangle(BTN_CX, 2, BTN_CX * 2 + 60, 1, 0x6670A0)
      .setOrigin(0.5, 0).setAlpha(0.6);
    this.add.rectangle(BTN_CX, 718, BTN_CX * 2 + 60, 1, 0x6670A0)
      .setOrigin(0.5, 1).setAlpha(0.6);

    // 대각선 경계 — 냉청색
    const edge = this.add.graphics();
    edge.lineStyle(1, 0x4455AA, 0.35);
    edge.beginPath();
    edge.moveTo(DIAG_TOP_X, 0);
    edge.lineTo(DIAG_BOT_X, 720);
    edge.strokePath();
  }

  // ── 타이틀 로고 ──────────────────────────────────────────────────────────

  private panelRightEdge(y: number): number {
    return DIAG_TOP_X + (DIAG_BOT_X - DIAG_TOP_X) * (y / 720);
  }

  private renderTitleLogo(): void {
    const ly = 200;
    const re = this.panelRightEdge(ly);
    const lw = re - 8;    // 양쪽 4px 여백
    const lx = re / 2;
    const lh = 360;
    const img = this.add.image(lx, ly, 'title_logo').setOrigin(0.5);
    img.setScale(Math.min(lw / img.width, lh / img.height));
  }

  // ── 버튼 배치 ────────────────────────────────────────────────────────────

  private renderButtons(): void {
    const START_Y = 405;
    const defs: [string, () => void][] = [
      ['게임 시작',          () => { GameState.hardReset(); this.goto('MapScene'); }],
      ['별빛 마법서 (도감)', () => this.goto('LoreBookScene')],
      ['개발자 테스트',      () => this.goto('HubScene')],
      ['설정',               () => this.scene.launch('SettingsScene')],
    ];
    defs.forEach(([label, cb], i) => {
      this.createButton(START_Y + i * BTN_H, label, cb);
    });
  }

  // ── 사다리꼴 버튼 (패널 대각선에 우측면 밀착) ────────────────────────────

  private createButton(y: number, label: string, onClick: () => void): void {
    const BH = BTN_H, ML = 0;

    // 버튼 상단·하단 각각의 패널 우측 엣지 좌표
    const xTR = this.panelRightEdge(y - BH / 2);
    const xBR = this.panelRightEdge(y + BH / 2);

    // 사다리꼴 꼭짓점 (절대 좌표)
    const trap = [
      { x: ML,  y: y - BH / 2 },
      { x: xTR, y: y - BH / 2 },
      { x: xBR, y: y + BH / 2 },
      { x: ML,  y: y + BH / 2 },
    ] as unknown as Phaser.Math.Vector2[];

    // 외부 글로우용 살짝 확장된 사다리꼴
    const G = 7;
    const trapGlow = [
      { x: ML - G,  y: y - BH / 2 - G },
      { x: xTR + G, y: y - BH / 2 - G },
      { x: xBR + G, y: y + BH / 2 + G },
      { x: ML - G,  y: y + BH / 2 + G },
    ] as unknown as Phaser.Math.Vector2[];

    // 글로우 (호버 시 활성)
    const glowG = this.add.graphics();
    glowG.fillStyle(0x2244AA, 0.25);
    glowG.fillPoints(trapGlow, true);
    glowG.setAlpha(0);

    // 베이스
    const base = this.add.graphics();
    base.fillStyle(0x06060E, 0.95);
    base.fillPoints(trap, true);
    base.lineStyle(1, 0x334477, 0.55);
    base.strokePoints(trap, true);

    // 호버 색상 오버레이 (딥 인디고)
    const hoverG = this.add.graphics();
    hoverG.fillStyle(0x1A2860, 0.78);
    hoverG.fillPoints(trap, true);
    hoverG.lineStyle(1.5, 0x6688EE, 1.0);
    hoverG.strokePoints(trap, true);
    hoverG.setAlpha(0);

    // 레이블 — 사다리꼴 수평 중심
    const labelX = (ML + (xTR + xBR) / 2) / 2;
    const txt = this.add.text(labelX, y, label, {
      fontSize: '26px', color: '#9AAACE',
      fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    // 히트 영역 — base Graphics에 사각형으로 등록
    base.setInteractive(
      new Phaser.Geom.Rectangle(ML, y - BH / 2, xBR - ML, BH),
      Phaser.Geom.Rectangle.Contains,
    );
    base.input!.cursor = 'pointer';

    base.on('pointerover', () => {
      this.tweens.killTweensOf([hoverG, glowG]);
      this.tweens.add({ targets: hoverG, alpha: 1, duration: 180, ease: 'Sine.Out' });
      this.tweens.add({ targets: glowG,  alpha: 1, duration: 180, ease: 'Sine.Out' });
      txt.setStyle({ color: '#D8E4FF' });
    });

    base.on('pointerout', () => {
      this.tweens.killTweensOf([hoverG, glowG]);
      this.tweens.add({ targets: hoverG, alpha: 0, duration: 220, ease: 'Sine.Out' });
      this.tweens.add({ targets: glowG,  alpha: 0, duration: 220, ease: 'Sine.Out' });
      txt.setStyle({ color: '#9AAACE' });
    });

    base.on('pointerdown', () => {
      base.disableInteractive();
      // 호버 상태 즉시 초기화
      this.tweens.killTweensOf([hoverG, glowG]);
      hoverG.setAlpha(0);
      glowG.setAlpha(0);
      txt.setStyle({ color: '#9AAACE' });

      this.tweens.add({
        targets: base, alpha: 0.55, duration: 60,
        onComplete: () => this.tweens.add({
          targets: base, alpha: 1, duration: 80,
          onComplete: () => {
            onClick();
            // SettingsScene처럼 현재 씬이 유지되는 경우 버튼 재활성화
            this.time.delayedCall(80, () => {
              if (this.scene.isActive('SettingsScene')) {
                this.scene.get('SettingsScene')!.events.once('shutdown', () => {
                  base.setInteractive(
                    new Phaser.Geom.Rectangle(ML, y - BH / 2, xBR - ML, BH),
                    Phaser.Geom.Rectangle.Contains,
                  );
                  base.input!.cursor = 'pointer';
                });
              }
            });
          },
        }),
      });
    });
  }

  // ── 씬 이동 ──────────────────────────────────────────────────────────────

  private goto(sceneKey: string): void {
    this.cameras.main.fadeOut(300, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start(sceneKey));
  }
}
