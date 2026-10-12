import Phaser from 'phaser';
import type { Card, PileViewerSceneData } from '../types';

// ── 레이아웃 상수 ──────────────────────────────────────────────────────────────
const PANEL_CX = 640;
const PANEL_CY = 375;
const PANEL_W  = 900;
const PANEL_H  = 580;

// 카드 썸네일 크기 & 그리드 설정
const CARD_W   = 112;
const CARD_H   = 148;
const GAP      = 10;
const COLS     = 5;
const MAX_VISIBLE = 15;   // 3행 × 5열

/**
 * 덱 또는 버림 더미의 카드 목록을 그리드로 보여주는 오버레이 씬.
 * BattleScene 위에 launch()로 올라가며, 닫기 버튼 또는 패널 외부 클릭으로 종료.
 */
export class PileViewerScene extends Phaser.Scene {
  private cards: Card[] = [];
  private title = '';

  constructor() {
    super({ key: 'PileViewerScene' });
  }

  init(data: PileViewerSceneData): void {
    this.cards = data.cards ?? [];
    this.title = data.title ?? '';
  }

  create(): void {
    this.renderDimOverlay();
    this.renderPanel();
    this.renderGrid();
  }

  // ── 배경 어둠 처리 ────────────────────────────────────────────────────────

  private renderDimOverlay(): void {
    // 패널 바깥 전체 — 클릭 시 닫기
    const dim = this.add.rectangle(PANEL_CX, PANEL_CY, 1280, 720, 0x000000, 0.68);
    dim.setInteractive();
    dim.on('pointerdown', () => this.close());
  }

  // ── 패널 ──────────────────────────────────────────────────────────────────

  private renderPanel(): void {
    const panel = this.add.rectangle(PANEL_CX, PANEL_CY, PANEL_W, PANEL_H, 0x0d1117);
    panel.setStrokeStyle(2, 0x30363d);
    // 패널 자체 클릭은 dim의 close를 막기 위해 interactive 설정
    panel.setInteractive();

    // 제목
    this.add.text(PANEL_CX, PANEL_CY - PANEL_H / 2 + 38, this.title, {
      fontSize: '20px', color: '#e6edf3', fontStyle: 'bold',
    }).setOrigin(0.5);

    // 구분선
    this.add.rectangle(
      PANEL_CX,
      PANEL_CY - PANEL_H / 2 + 66,
      PANEL_W - 40, 1, 0x21262d,
    );

    // 닫기 버튼
    const closeX = PANEL_CX + PANEL_W / 2 - 28;
    const closeY = PANEL_CY - PANEL_H / 2 + 32;
    const closeBtn = this.add.text(closeX, closeY, '✕', {
      fontSize: '18px', color: '#7d8590',
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    closeBtn.on('pointerover', () => closeBtn.setColor('#e6edf3'));
    closeBtn.on('pointerout',  () => closeBtn.setColor('#7d8590'));
    closeBtn.on('pointerdown', () => this.close());
  }

  // ── 카드 그리드 ───────────────────────────────────────────────────────────

  private renderGrid(): void {
    const gridTop = PANEL_CY - PANEL_H / 2 + 82;

    if (this.cards.length === 0) {
      this.add.text(PANEL_CX, PANEL_CY, '카드가 없습니다', {
        fontSize: '16px', color: '#4a5260',
      }).setOrigin(0.5);
      return;
    }

    const visible = this.cards.slice(0, MAX_VISIBLE);
    const overflow = this.cards.length - visible.length;

    // 열 간격: CARD_W + GAP
    const step = CARD_W + GAP;
    const totalW = COLS * CARD_W + (COLS - 1) * GAP;
    const startX = PANEL_CX - totalW / 2 + CARD_W / 2;

    visible.forEach((card, idx) => {
      const col = idx % COLS;
      const row = Math.floor(idx / COLS);
      const cx = startX + col * step;
      const cy = gridTop + CARD_H / 2 + row * (CARD_H + GAP);
      this.createCardThumbnail(card, cx, cy);
    });

    // 넘침 표시
    if (overflow > 0) {
      const rows = Math.ceil(visible.length / COLS);
      const indicatorY = gridTop + rows * (CARD_H + GAP) + 12;
      this.add.text(PANEL_CX, indicatorY, `... 외 ${overflow}장 더 있습니다`, {
        fontSize: '12px', color: '#4a5260',
      }).setOrigin(0.5);
    }
  }

  private createCardThumbnail(card: Card, cx: number, cy: number): void {
    const borderColor = card.targetType === 'all' ? 0xe17055 : 0x30363d;

    const bg = this.add.rectangle(cx, cy, CARD_W, CARD_H, 0x161b22);
    bg.setStrokeStyle(1.5, borderColor);

    // 비용 배지
    this.add.circle(cx - CARD_W / 2 + 14, cy - CARD_H / 2 + 14, 11, 0x6c5ce7);
    this.add.text(cx - CARD_W / 2 + 14, cy - CARD_H / 2 + 14, String(card.cost), {
      fontSize: '11px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    // 카드 이름
    this.add.text(cx, cy - CARD_H / 2 + 34, card.name, {
      fontSize: '13px', color: '#e6edf3', fontStyle: 'bold',
      wordWrap: { width: CARD_W - 16 }, align: 'center',
    }).setOrigin(0.5);

    // 구분선
    this.add.rectangle(cx, cy - CARD_H / 2 + 50, CARD_W - 18, 1, 0x21262d);

    // 설명
    this.add.text(cx, cy + 14, card.description, {
      fontSize: '10px', color: '#8a9ab0',
      wordWrap: { width: CARD_W - 16 }, align: 'center', lineSpacing: 3,
    }).setOrigin(0.5);

    // AoE 태그
    if (card.targetType === 'all') {
      this.add.text(cx + CARD_W / 2 - 4, cy - CARD_H / 2 + 4, '전체', {
        fontSize: '9px', color: '#e17055',
      }).setOrigin(1, 0);
    }
  }

  // ── 닫기 ──────────────────────────────────────────────────────────────────

  private close(): void {
    this.scene.stop();
  }
}
