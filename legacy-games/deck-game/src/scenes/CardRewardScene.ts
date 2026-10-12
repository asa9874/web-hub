import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { Card, CardRewardSceneData } from '../types';

/**
 * 카드 보상(드래프트) 화면.
 * 1~4장의 카드를 제시하고 플레이어가 1장을 선택하거나 건너뛸 수 있다.
 * 선택된 카드는 GameState.bonusCards에 추가되어 다음 전투부터 덱에 포함된다.
 */
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

  // ── 렌더링 ────────────────────────────────────────────────────────────────

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, 0x0d1117);
    this.add.rectangle(640, 2, 1280, 4, 0x6c5ce7).setOrigin(0.5, 0);
  }

  private renderTitle(): void {
    this.add.text(640, 88, '카드를 1장 선택하세요', {
      fontSize: '28px', color: '#e6edf3', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(640, 132, '선택한 카드가 덱에 영구적으로 추가됩니다', {
      fontSize: '14px', color: '#7d8590',
    }).setOrigin(0.5);

    // 현재 보너스 카드 누적 현황
    if (GameState.bonusCards.length > 0) {
      this.add.text(640, 158, `(보너스 카드 보유: ${GameState.bonusCards.length}장)`, {
        fontSize: '12px', color: '#4a5260',
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

    const borderColor = card.targetType === 'all' ? 0xe17055 : 0x30363d;

    const bg = this.add.rectangle(0, 0, w, h, 0x161b22);
    bg.setStrokeStyle(2, borderColor);

    const costBadge = this.add.circle(-w / 2 + 18, -h / 2 + 18, 14, 0x6c5ce7);
    const costText = this.add.text(-w / 2 + 18, -h / 2 + 18, String(card.cost), {
      fontSize: '14px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    const nameText = this.add.text(0, -h / 2 + 42, card.name, {
      fontSize: '16px', color: '#e6edf3', fontStyle: 'bold',
      wordWrap: { width: w - 24 }, align: 'center',
    }).setOrigin(0.5);

    const divider = this.add.rectangle(0, -h / 2 + 62, w - 24, 1, 0x30363d);

    const descText = this.add.text(0, 20, card.description, {
      fontSize: '13px', color: '#b2bec3',
      wordWrap: { width: w - 24 }, align: 'center', lineSpacing: 4,
    }).setOrigin(0.5);

    const items: Phaser.GameObjects.GameObject[] = [bg, costBadge, costText, nameText, divider, descText];

    if (card.targetType === 'all') {
      const tag = this.add.text(w / 2 - 6, -h / 2 + 6, '전체', {
        fontSize: '10px', color: '#e17055',
      }).setOrigin(1, 0);
      items.push(tag);
    }

    container.add(items);

    // 호버: 확대 + 테두리 강조
    container.on('pointerover', () => {
      if (this.selected) return;
      this.tweens.add({
        targets: container,
        scaleX: 1.07, scaleY: 1.07,
        duration: 130, ease: 'Power2.Out',
      });
      bg.setStrokeStyle(3, 0xf9ca24);
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
    const btn = this.add.rectangle(bx, by, 180, 44, 0x21262d);
    btn.setStrokeStyle(1, 0x30363d);
    btn.setInteractive({ useHandCursor: true });

    this.add.text(bx, by, '건너뛰기', {
      fontSize: '15px', color: '#7d8590',
    }).setOrigin(0.5);

    btn.on('pointerover', () => btn.setFillStyle(0x2d3436));
    btn.on('pointerout', () => btn.setFillStyle(0x21262d));
    btn.on('pointerdown', () => {
      if (this.selected) return;
      this.finish(null);
    });
  }

  // ── 카드 선택 ─────────────────────────────────────────────────────────────

  private selectCard(card: Card): void {
    if (this.selected) return;
    this.selected = true;

    GameState.addBonusCard(card);

    const msg = this.add.text(640, 580, `"${card.name}" 카드가 덱에 추가되었습니다!`, {
      fontSize: '16px', color: '#f9ca24', fontStyle: 'bold',
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
