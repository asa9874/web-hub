import Phaser from 'phaser';
import { GameState } from '../GameState';

/** 씬 카드 버튼 설정 구조체 */
interface SceneCard {
  title: string;
  description: string;
  accentColor: number;
  onClick: () => void;
}

/** 개발자 테스트 허브 — 각 게임 시스템으로 진입하는 메뉴 씬 */
export class HubScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HubScene' });
  }

  create(): void {
    this.cameras.main.fadeIn(350, 0, 0, 0);
    this.renderBackground();
    this.renderTitle();
    this.renderRunStatus();
    this.renderSceneCards();
  }

  // ── 렌더링 ──────────────────────────────────────────────────────────────

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, 0x0d1117);
    this.add.rectangle(640, 2, 1280, 4, 0x6c5ce7).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, 0x21262d).setOrigin(0.5, 1);
  }

  private renderTitle(): void {
    this.add.text(640, 72, '개발자 테스트 메뉴', {
      fontSize: '32px', color: '#e6edf3', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(640, 116, '플레이할 시스템을 선택하세요', {
      fontSize: '16px', color: '#7d8590',
    }).setOrigin(0.5);

    this.add.rectangle(640, 148, 860, 1, 0x21262d);
  }

  /**
   * 현재 런 진행 상태를 표시.
   * gold > 0 또는 보너스 카드가 있을 때만 표시하고 초기화 버튼을 제공.
   */
  private renderRunStatus(): void {
    const hasProgress = GameState.gold > 0 || GameState.bonusCards.length > 0;

    if (!hasProgress) {
      this.add.text(640, 190, '새 게임을 시작하세요', {
        fontSize: '13px', color: '#2d3436',
      }).setOrigin(0.5);
      return;
    }

    // 상태 배경 바
    this.add.rectangle(640, 190, 780, 34, 0x161b22)
      .setStrokeStyle(1, 0x21262d);

    const statusText = [
      `골드  ${GameState.gold} G`,
      `보너스 카드  ${GameState.bonusCards.length}장`,
    ].join('   |   ');

    this.add.text(530, 190, statusText, {
      fontSize: '13px', color: '#7d8590',
    }).setOrigin(0, 0.5);

    // 초기화 버튼
    const resetBtn = this.add.text(940, 190, '[ 런 초기화 ]', {
      fontSize: '12px', color: '#e17055',
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    resetBtn.on('pointerover', () => resetBtn.setColor('#ff9f7f'));
    resetBtn.on('pointerout',  () => resetBtn.setColor('#e17055'));
    resetBtn.on('pointerdown', () => {
      GameState.hardReset();
      this.scene.restart();
    });
  }

  private renderSceneCards(): void {
    // 전투 씬 카드 (좌측)
    this.createSceneCard(240, 380, {
      title: '전투 시스템',
      description: '카드를 드래그하여 적을 공격하는\n덱 빌딩 전투 화면',
      accentColor: 0x0984e3,
      onClick: () => this.launchScene('DialogueScene', {
        scriptId: 'battle_intro',
        returnScene: 'BattleScene',
      }),
    });

    // 대화 씬 카드 (중앙)
    this.createSceneCard(640, 380, {
      title: '대화 시스템',
      description: '비주얼 노벨 형식의\n캐릭터 대화 화면',
      accentColor: 0x6c5ce7,
      onClick: () => this.launchScene('DialogueScene', {
        scriptId: 'test_intro',
        returnScene: 'HubScene',
      }),
    });

    // 5인 전투 테스트 카드 (우측)
    this.createSceneCard(1040, 380, {
      title: '5인 전투 테스트',
      description: '슬라임·고블린·오크·스켈레톤·박쥐\n5마리와의 전투 테스트',
      accentColor: 0xe17055,
      onClick: () => this.launchScene('BattleScene', { mode: 'five_monsters' }),
    });
  }

  /** 씬 카드 버튼 하나를 생성 */
  private createSceneCard(x: number, y: number, cfg: SceneCard): void {
    const W = 320, H = 220;

    const bg = this.add.rectangle(x, y, W, H, 0x161b22);
    bg.setStrokeStyle(2, 0x30363d);
    bg.setInteractive({ useHandCursor: true });

    this.add.rectangle(x, y - H / 2 + 3, W, 6, cfg.accentColor);

    const title = this.add.text(x, y - 58, cfg.title, {
      fontSize: '24px', color: '#e6edf3', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(x, y - 4, cfg.description, {
      fontSize: '14px', color: '#7d8590',
      lineSpacing: 6, align: 'center',
      wordWrap: { width: W - 48 },
    }).setOrigin(0.5);

    this.add.text(x, y + 74, '클릭하여 입장', {
      fontSize: '13px',
      color: '#' + cfg.accentColor.toString(16).padStart(6, '0'),
    }).setOrigin(0.5);

    bg.on('pointerover', () => {
      bg.setFillStyle(0x21262d);
      bg.setStrokeStyle(2, cfg.accentColor);
      title.setColor('#' + cfg.accentColor.toString(16).padStart(6, '0'));
    });
    bg.on('pointerout', () => {
      bg.setFillStyle(0x161b22);
      bg.setStrokeStyle(2, 0x30363d);
      title.setColor('#e6edf3');
    });

    bg.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', cfg.onClick);
    });
  }

  /** 지정한 씬으로 이동 */
  private launchScene(key: string, data?: object): void {
    this.scene.start(key, data);
  }
}
