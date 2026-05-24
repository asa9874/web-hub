import Phaser from 'phaser';
import { GameState } from '../GameState';
import { AchievementManager } from '../achievements/AchievementManager';
import type { Card, CardRewardSceneData } from '../types';
import {
  BG_DEEP, BG_PANEL, BG_HOVER, BG_DIVIDER,
  BORDER_DIM,
  PINK, ROSE,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, TEXT_GOLD, FONT,
} from '../theme';

export class CardRewardScene extends Phaser.Scene {
  private rewardCards: Card[] = [];
  private returnScene = 'HubScene';
  private selected = false;

  constructor() {
    super({ key: 'CardRewardScene' });
  }

  init(data: CardRewardSceneData): void {
    this.rewardCards = data.cards ?? [];
    this.returnScene = data.returnScene ?? 'HubScene';
    this.selected = false;
  }

  create(): void {
    this.cameras.main.fadeIn(350, 0, 0, 0);
    this.renderBackground();
    this.renderTitle();
    this.renderCards();
    this.renderSkipButton();
  }

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, BG_DEEP);
    this.add.rectangle(640, 2, 1280, 4, PINK).setOrigin(0.5, 0);
  }

  private renderTitle(): void {
    this.add.text(640, 88, '카드를 1장 선택하세요', {
      fontSize: '28px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.text(640, 132, '선택한 카드가 덱에 영구적으로 추가됩니다', {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);

    if (GameState.bonusCards.length > 0) {
      this.add.text(640, 158, `(보너스 카드 보유: ${GameState.bonusCards.length}장)`, {
        fontSize: '12px', color: TEXT_DIM, fontFamily: FONT,
      }).setOrigin(0.5);
    }
  }

  private renderCards(): void {
    const n = this.rewardCards.length;
    const CARD_W = 160, CARD_H = 230, GAP = 210;
    const startX = 640 - ((n - 1) * GAP) / 2;

    this.rewardCards.forEach((card, i) => {
      this.createRewardCard(card, startX + i * GAP, 370, CARD_W, CARD_H);
    });
  }

  private createRewardCard(card: Card, x: number, y: number, w: number, h: number): void {
    const container = this.add.container(x, y);
    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });

    const borderColor = card.targetType === 'all' ? ROSE : BORDER_DIM;

    const bg = this.add.rectangle(0, 0, w, h, BG_PANEL);
    bg.setStrokeStyle(2, borderColor);

    const costBadge = this.add.circle(-w / 2 + 18, -h / 2 + 18, 14, PINK);
    const costText = this.add.text(-w / 2 + 18, -h / 2 + 18, String(card.cost), {
      fontSize: '14px', color: '#ffffff', fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    const nameText = this.add.text(0, -h / 2 + 42, card.name, {
      fontSize: '16px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
      wordWrap: { width: w - 24 }, align: 'center',
    }).setOrigin(0.5);

    const divider = this.add.rectangle(0, -h / 2 + 62, w - 24, 1, BG_DIVIDER);

    const descText = this.add.text(0, 20, card.description, {
      fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
      wordWrap: { width: w - 24 }, align: 'center', lineSpacing: 4,
    }).setOrigin(0.5);

    const items: Phaser.GameObjects.GameObject[] = [bg, costBadge, costText, nameText, divider, descText];

    if (card.targetType === 'all') {
      const tag = this.add.text(w / 2 - 6, -h / 2 + 6, '전체', {
        fontSize: '10px', color: '#FF1493', fontFamily: FONT,
      }).setOrigin(1, 0);
      items.push(tag);
    }

    container.add(items);

    container.on('pointerover', () => {
      if (this.selected) return;
      this.tweens.add({
        targets: container,
        scaleX: 1.07, scaleY: 1.07,
        duration: 130, ease: 'Power2.Out',
      });
      bg.setStrokeStyle(3, 0xFFD700);
    });

    container.on('pointerout', () => {
      if (this.selected) return;
      this.tweens.add({
        targets: container,
        scaleX: 1, scaleY: 1,
        duration: 130, ease: 'Power2.Out',
      });
      bg.setStrokeStyle(2, borderColor);
    });

    container.on('pointerdown', () => this.selectCard(card));
  }

  private renderSkipButton(): void {
    const bx = 640, by = 610;
    const btn = this.add.rectangle(bx, by, 180, 44, BG_PANEL);
    btn.setStrokeStyle(1, BORDER_DIM);
    btn.setInteractive({ useHandCursor: true });

    this.add.text(bx, by, '건너뛰기', {
      fontSize: '15px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);

    btn.on('pointerover', () => btn.setFillStyle(BG_HOVER));
    btn.on('pointerout', () => btn.setFillStyle(BG_PANEL));
    btn.on('pointerdown', () => {
      if (this.selected) return;
      this.finish(null);
    });
  }

  private selectCard(card: Card): void {
    if (this.selected) return;
    this.selected = true;

    GameState.addBonusCard(card);
    AchievementManager.checkAfterCardAdded();

    const msg = this.add.text(640, 580, `"${card.name}" 카드가 덱에 추가되었습니다!`, {
      fontSize: '16px', color: TEXT_GOLD, fontStyle: 'bold', fontFamily: FONT,
      stroke: '#000000', strokeThickness: 3,
    }).setOrigin(0.5).setDepth(20);

    this.time.delayedCall(900, () => {
      msg.destroy();
      this.finish(card);
    });
  }

  private finish(_card: Card | null): void {
    this.cameras.main.fadeOut(320, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.scene.start(this.returnScene);
    });
  }
}
