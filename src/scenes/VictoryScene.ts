import Phaser from 'phaser';
import { GameState } from '../GameState';
import { bgm } from '../audio/BGMManager';
import { AchievementManager } from '../achievements/AchievementManager';
import type { VictorySceneData } from '../types';
import {
  BG_DEEP, BG_PANEL,
  BORDER_DIM,
  PINK, ROSE, GOLD,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_GOLD, FONT,
} from '../theme';

export class VictoryScene extends Phaser.Scene {
  private goldEarned = 0;
  private returnScene = 'HubScene';

  constructor() {
    super({ key: 'VictoryScene' });
  }

  init(data: VictorySceneData): void {
    this.goldEarned = data?.gold ?? GameState.pendingGold;
    GameState.pendingGold = 0;
    this.returnScene = data?.returnScene ?? (GameState.pendingReturnScene || 'HubScene');
    GameState.pendingReturnScene = '';
    GameState.lastBattleWon = true;
    GameState.gold += this.goldEarned;
    AchievementManager.checkAfterGoldAdded();
  }

  create(): void {
    bgm.play('bgm07', false);
    this.cameras.main.fadeIn(450, 0, 0, 0);
    this.renderBackground();
    this.renderTitle();
    this.renderGoldPanel();
    this.renderButtons();
  }

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, BG_DEEP);
    if (this.textures.exists('bg_victory')) {
      this.add.image(640, 360, 'bg_victory').setDisplaySize(1280, 720).setAlpha(0.72);
    }
    this.add.rectangle(640, 2, 1280, 4, PINK).setOrigin(0.5, 0);
    this.add.circle(640, 320, 320, ROSE, 0.08);
  }

  private renderTitle(): void {
    this.add.text(640, 155, '전투 승리!', {
      fontSize: '52px', color: '#FFB6C1', fontStyle: 'bold', fontFamily: FONT,
      stroke: '#8B0045', strokeThickness: 5,
    }).setOrigin(0.5);

    this.add.text(640, 222, '모든 적을 물리쳤습니다', {
      fontSize: '16px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);
  }

  private renderGoldPanel(): void {
    const px = 640, py = 365;

    const panel = this.add.rectangle(px, py, 380, 160, BG_PANEL);
    panel.setStrokeStyle(2, GOLD);

    this.add.text(px, py - 52, '골드 보상', {
      fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.text(px, py - 10, `+${this.goldEarned} G`, {
      fontSize: '44px', color: TEXT_GOLD, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.text(px, py + 52, `보유 골드: ${GameState.gold} G`, {
      fontSize: '14px', color: '#C8A060', fontFamily: FONT,
    }).setOrigin(0.5);
  }

  private renderButtons(): void {
    this.createButton(430, 500, '카드 선택', ROSE, 0xFF1493, () => {
      this.cameras.main.fadeOut(300, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start('CardRewardScene', {
          cards: GameState.getRandomRewardCards(3),
          returnScene: this.returnScene,
        });
      });
    });

    this.createButton(850, 500, '메인 메뉴', BG_PANEL, BG_PANEL, () => {
      this.cameras.main.fadeOut(300, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        GameState.hardReset(); AchievementManager.reset();
        this.scene.start('TitleScene');
      });
    });

    this.add.text(640, 560, '카드를 선택하여 덱을 강화하세요', {
      fontSize: '13px', color: '#5A2A5A', fontFamily: FONT,
    }).setOrigin(0.5);
  }

  private createButton(
    x: number, y: number, label: string,
    fill: number, hoverFill: number,
    onClick: () => void,
  ): void {
    const btn = this.add.rectangle(x, y, 240, 52, fill);
    btn.setStrokeStyle(2, BORDER_DIM);
    btn.setInteractive({ useHandCursor: true });

    this.add.text(x, y, label, {
      fontSize: '18px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    btn.on('pointerover', () => btn.setFillStyle(hoverFill));
    btn.on('pointerout', () => btn.setFillStyle(fill));
    btn.on('pointerdown', onClick);
  }
}
