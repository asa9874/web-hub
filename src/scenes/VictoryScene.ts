import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { VictorySceneData } from '../types';

/**
 * 전투 승리 화면.
 * 골드 보상을 표시하고 카드 선택 화면(CardRewardScene)으로 진입하거나
 * 메인 메뉴(HubScene)로 돌아갈 수 있다.
 */
export class VictoryScene extends Phaser.Scene {
  private goldEarned = 0;

  constructor() {
    super({ key: 'VictoryScene' });
  }

  init(data: VictorySceneData): void {
    this.goldEarned = data?.gold ?? GameState.pendingGold;
    GameState.pendingGold = 0;
    GameState.gold += this.goldEarned;
  }

  create(): void {
    this.cameras.main.fadeIn(450, 0, 0, 0);
    this.renderBackground();
    this.renderTitle();
    this.renderGoldPanel();
    this.renderButtons();
  }

  // ── 렌더링 ────────────────────────────────────────────────────────────────

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, 0x0d1117);
    // 상단 골드 악센트 바
    this.add.rectangle(640, 2, 1280, 4, 0xf9ca24).setOrigin(0.5, 0);
    // 미묘한 중앙 글로우 효과 (겹친 반투명 원형)
    this.add.circle(640, 320, 320, 0x2c2200, 0.18);
  }

  private renderTitle(): void {
    this.add.text(640, 155, '전투 승리!', {
      fontSize: '52px', color: '#f9ca24', fontStyle: 'bold',
      stroke: '#7a5a00', strokeThickness: 5,
    }).setOrigin(0.5);

    this.add.text(640, 222, '모든 적을 물리쳤습니다', {
      fontSize: '16px', color: '#7d8590',
    }).setOrigin(0.5);
  }

  private renderGoldPanel(): void {
    const px = 640, py = 365;

    // 패널 배경
    const panel = this.add.rectangle(px, py, 380, 160, 0x161b22);
    panel.setStrokeStyle(2, 0xf9ca24);

    // 골드 라벨
    this.add.text(px, py - 52, '골드 보상', {
      fontSize: '13px', color: '#7d8590',
    }).setOrigin(0.5);

    // 획득량 (크게 강조)
    this.add.text(px, py - 10, `+${this.goldEarned} G`, {
      fontSize: '44px', color: '#f9ca24', fontStyle: 'bold',
    }).setOrigin(0.5);

    // 보유 합계
    this.add.text(px, py + 52, `보유 골드: ${GameState.gold} G`, {
      fontSize: '14px', color: '#b0a060',
    }).setOrigin(0.5);
  }

  private renderButtons(): void {
    // 카드 선택 버튼 (주요 액션 — 파랑)
    this.createButton(430, 500, '카드 선택', 0x0984e3, 0x2980b9, () => {
      this.cameras.main.fadeOut(300, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start('CardRewardScene', {
          cards: GameState.getRandomRewardCards(3),
          returnScene: 'HubScene',
        });
      });
    });

    // 메인 메뉴 버튼 — 런 종료: hardReset 후 허브로
    this.createButton(850, 500, '메인 메뉴', 0x21262d, 0x2d3436, () => {
      this.cameras.main.fadeOut(300, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        GameState.hardReset();
        this.scene.start('HubScene');
      });
    });

    this.add.text(640, 560, '카드를 선택하여 덱을 강화하세요', {
      fontSize: '13px', color: '#4a5260',
    }).setOrigin(0.5);
  }

  private createButton(
    x: number, y: number, label: string,
    fill: number, hoverFill: number,
    onClick: () => void,
  ): void {
    const btn = this.add.rectangle(x, y, 240, 52, fill);
    btn.setStrokeStyle(2, 0x30363d);
    btn.setInteractive({ useHandCursor: true });

    this.add.text(x, y, label, {
      fontSize: '18px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    btn.on('pointerover', () => btn.setFillStyle(hoverFill));
    btn.on('pointerout', () => btn.setFillStyle(fill));
    btn.on('pointerdown', onClick);
  }
}
