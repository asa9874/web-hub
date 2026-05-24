import Phaser from 'phaser';
import { GameState } from '../GameState';
import { AchievementManager } from '../achievements/AchievementManager';
import type { Relic, RelicRewardSceneData } from '../types';
import {
  BG_DEEP, BG_PANEL, BG_HOVER,
  BORDER_DIM,
  PINK, ROSE, LAVENDER, GOLD,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, TEXT_PINK, FONT,
} from '../theme';

const W = 1280;
const H = 720;

const TIER_COLOR: Record<string, number> = {
  common: LAVENDER,
  rare:   GOLD,
  boss:   ROSE,
};

const TIER_LABEL: Record<string, string> = {
  common: '일반',
  rare:   '희귀',
  boss:   '보스',
};

export class RelicRewardScene extends Phaser.Scene {
  private returnScene = 'HubScene';
  private relics: Relic[] = [];

  constructor() {
    super({ key: 'RelicRewardScene' });
  }

  init(data: RelicRewardSceneData): void {
    this.relics = data?.relics ?? [];
    this.returnScene = data?.returnScene ?? 'HubScene';
  }

  create(): void {
    this.cameras.main.fadeIn(300, 0, 0, 0);
    this.renderBg();
    this.renderHeader();
    this.renderRelicCards();
    this.renderSkipButton();
  }

  private renderBg(): void {
    this.add.rectangle(W / 2, H / 2, W, H, BG_DEEP);
    this.add.rectangle(W / 2, H / 2, W, H, PINK).setAlpha(0.04);
  }

  private renderHeader(): void {
    this.add.text(W / 2, 68, '보스 격파 — 유물을 획득하세요', {
      fontSize: '28px', color: TEXT_PINK, fontStyle: 'bold', fontFamily: FONT,
      stroke: '#5A0030', strokeThickness: 4,
    }).setOrigin(0.5);

    this.add.text(W / 2, 118, '유물 1개를 선택합니다. 건너뛰기를 선택하면 획득하지 않습니다.', {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.text(W / 2, 148, `보유 유물  ${GameState.equippedRelics.length} / ${GameState.MAX_RELICS}`, {
      fontSize: '13px', color: TEXT_DIM, fontFamily: FONT,
    }).setOrigin(0.5);
  }

  private renderRelicCards(): void {
    if (this.relics.length === 0) return;

    const CARD_W = 280, CARD_H = 320;
    const GAP = 40;
    const totalW = this.relics.length * CARD_W + (this.relics.length - 1) * GAP;
    const startX = W / 2 - totalW / 2 + CARD_W / 2;

    this.relics.forEach((relic, i) => {
      const cx = startX + i * (CARD_W + GAP);
      const cy = 410;
      this.renderRelicCard(cx, cy, relic, CARD_W, CARD_H);
    });
  }

  private renderRelicCard(
    cx: number, cy: number,
    relic: Relic,
    cw: number, ch: number,
  ): void {
    const tierColor = TIER_COLOR[relic.tier] ?? PINK;
    const isFull = GameState.equippedRelics.length >= GameState.MAX_RELICS;

    const bg = this.add.rectangle(cx, cy, cw, ch, BG_PANEL);
    bg.setStrokeStyle(2, tierColor);

    if (!isFull) {
      bg.setInteractive({ useHandCursor: true });
      bg.on('pointerover', () => {
        bg.setFillStyle(BG_HOVER);
        bg.setStrokeStyle(3, 0xffffff);
      });
      bg.on('pointerout', () => {
        bg.setFillStyle(BG_PANEL);
        bg.setStrokeStyle(2, tierColor);
      });
      bg.on('pointerdown', () => this.pickRelic(relic));
    }

    const tierHex = '#' + tierColor.toString(16).padStart(6, '0');
    this.add.text(cx, cy - ch / 2 + 22, TIER_LABEL[relic.tier] ?? relic.tier, {
      fontSize: '12px', color: tierHex, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.rectangle(cx, cy - ch / 2 + 36, cw - 30, 1, tierColor).setAlpha(0.5);

    this.add.text(cx, cy - 50, relic.name, {
      fontSize: '22px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
      wordWrap: { width: cw - 30 }, align: 'center',
    }).setOrigin(0.5);

    this.add.text(cx, cy + 30, relic.description, {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
      wordWrap: { width: cw - 30 }, align: 'center',
      lineSpacing: 4,
    }).setOrigin(0.5);

    if (isFull) {
      this.add.text(cx, cy + ch / 2 - 24, '유물 슬롯 초과', {
        fontSize: '11px', color: '#FF1493', fontFamily: FONT,
      }).setOrigin(0.5);
    }
  }

  private renderSkipButton(): void {
    const btn = this.add.rectangle(W / 2, H - 52, 200, 46, BG_PANEL);
    btn.setStrokeStyle(1, BORDER_DIM);
    btn.setInteractive({ useHandCursor: true });
    btn.on('pointerover', () => btn.setFillStyle(BG_HOVER));
    btn.on('pointerout',  () => btn.setFillStyle(BG_PANEL));
    btn.on('pointerdown', () => this.leave());
    this.add.text(W / 2, H - 52, '건너뛰기', {
      fontSize: '16px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);
  }

  private pickRelic(relic: Relic): void {
    GameState.addRelic(relic);
    AchievementManager.checkAfterRelicAdded();

    const tierColor = TIER_COLOR[relic.tier] ?? PINK;
    const flash = this.add.text(W / 2, H / 2, `"${relic.name}" 획득!`, {
      fontSize: '32px', color: '#' + tierColor.toString(16).padStart(6, '0'),
      fontStyle: 'bold', stroke: '#000000', strokeThickness: 5, fontFamily: FONT,
    }).setOrigin(0.5).setDepth(30);

    this.tweens.add({
      targets: flash,
      alpha: 0,
      y: H / 2 - 60,
      duration: 900,
      ease: 'Power2',
      onComplete: () => { flash.destroy(); this.leave(); },
    });
  }

  private leave(): void {
    this.cameras.main.fadeOut(300, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.scene.start(this.returnScene);
    });
  }
}
