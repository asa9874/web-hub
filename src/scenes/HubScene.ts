import Phaser from 'phaser';

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
    this.renderSceneCards();
  }

  // ── 렌더링 ──────────────────────────────────────────────────────────────

  private renderBackground(): void {
    // 배경
    this.add.rectangle(400, 300, 800, 600, 0x0d1117);
    // 상단 강조 바
    this.add.rectangle(400, 2, 800, 4, 0x6c5ce7).setOrigin(0.5, 0);
    // 하단 장식 선
    this.add.rectangle(400, 598, 800, 2, 0x21262d).setOrigin(0.5, 1);
  }

  private renderTitle(): void {
    this.add.text(400, 72, '개발자 테스트 메뉴', {
      fontSize: '32px', color: '#e6edf3', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(400, 116, '플레이할 시스템을 선택하세요', {
      fontSize: '16px', color: '#7d8590',
    }).setOrigin(0.5);

    // 구분선
    this.add.rectangle(400, 148, 560, 1, 0x21262d);
  }

  private renderSceneCards(): void {
    // 전투 씬 카드 (좌측)
    this.createSceneCard(200, 330, {
      title: '전투 시스템',
      description: '카드를 드래그하여 적을 공격하는\n덱 빌딩 전투 화면',
      accentColor: 0x0984e3,
      onClick: () => this.launchScene('DialogueScene', {
        scriptId: 'battle_intro',
        returnScene: 'BattleScene',
      }),
    });

    // 대화 씬 카드 (우측)
    this.createSceneCard(580, 330, {
      title: '대화 시스템',
      description: '비주얼 노벨 형식의\n캐릭터 대화 화면',
      accentColor: 0x6c5ce7,
      onClick: () => this.launchScene('DialogueScene', {
        scriptId: 'test_intro',
        returnScene: 'HubScene',
      }),
    });
  }

  /** 씬 카드 버튼 하나를 생성 */
  private createSceneCard(x: number, y: number, cfg: SceneCard): void {
    const W = 320, H = 220;

    // 카드 배경
    const bg = this.add.rectangle(x, y, W, H, 0x161b22);
    bg.setStrokeStyle(2, 0x30363d);
    bg.setInteractive({ useHandCursor: true });

    // 상단 색상 악센트 바 (카드 상단 6px)
    this.add.rectangle(x, y - H / 2 + 3, W, 6, cfg.accentColor);

    // 시스템 제목
    const title = this.add.text(x, y - 58, cfg.title, {
      fontSize: '24px', color: '#e6edf3', fontStyle: 'bold',
    }).setOrigin(0.5);

    // 설명 텍스트
    this.add.text(x, y - 4, cfg.description, {
      fontSize: '14px', color: '#7d8590',
      lineSpacing: 6, align: 'center',
      wordWrap: { width: W - 48 },
    }).setOrigin(0.5);

    // 입장 힌트 텍스트
    this.add.text(x, y + 74, '클릭하여 입장', {
      fontSize: '13px',
      color: '#' + cfg.accentColor.toString(16).padStart(6, '0'),
    }).setOrigin(0.5);

    // 호버: 배경 밝아지고 테두리·제목이 악센트 색상으로 강조
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

    // 클릭: 페이드 아웃 후 씬 전환
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
