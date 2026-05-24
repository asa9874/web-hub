import Phaser from 'phaser';
import { GameState } from '../GameState';
import { AchievementManager } from '../achievements/AchievementManager';
import {
  BG_DEEP, BG_PANEL, BG_HOVER, BG_DIVIDER,
  BORDER_DIM,
  PINK, ROSE, PINK_SOFT, LAVENDER, GOLD, GREEN,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, FONT,
} from '../theme';

interface SceneCard {
  title: string;
  description: string;
  accentColor: number;
  onClick: () => void;
  cardW?: number;
  cardH?: number;
}

export class HubScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HubScene' });
  }

  create(): void {
    this.cameras.main.fadeIn(350, 0, 0, 0);
    // ToastScene은 항상 살아있는 오버레이 씬 — 중복 실행 방지 후 최초 1회만 launch
    if (!this.scene.isActive('ToastScene')) {
      this.scene.launch('ToastScene');
    }
    this.renderBackground();
    this.renderTitle();
    this.renderRunStatus();
    this.renderSceneCards();
  }

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, BG_DEEP);
    this.add.rectangle(640, 2, 1280, 4, PINK).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, BG_DIVIDER).setOrigin(0.5, 1);
  }

  private renderTitle(): void {
    this.add.text(640, 72, '개발자 테스트 메뉴', {
      fontSize: '32px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.text(640, 116, '플레이할 시스템을 선택하세요', {
      fontSize: '16px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.rectangle(640, 148, 860, 1, BG_DIVIDER);
  }

  private renderRunStatus(): void {
    const hasProgress = GameState.gold > 0
      || GameState.bonusCards.length > 0
      || GameState.playerHp < GameState.playerMaxHp
      || GameState.upgradedCardIds.length > 0;

    if (!hasProgress) {
      this.add.text(640, 190, '새 게임을 시작하세요', {
        fontSize: '13px', color: TEXT_DIM, fontFamily: FONT,
      }).setOrigin(0.5);
      return;
    }

    this.add.rectangle(640, 190, 900, 34, BG_PANEL).setStrokeStyle(1, BG_DIVIDER);

    const statusText = [
      `HP  ${GameState.playerHp} / ${GameState.playerMaxHp}`,
      `골드  ${GameState.gold} G`,
      `보너스 카드  ${GameState.bonusCards.length}장`,
      `업그레이드  ${GameState.upgradedCardIds.length}건`,
    ].join('   |   ');

    this.add.text(640, 190, statusText, {
      fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5, 0.5);

    const resetBtn = this.add.text(1060, 190, '[ 런 초기화 ]', {
      fontSize: '12px', color: '#FF69B4', fontFamily: FONT,
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    resetBtn.on('pointerover', () => resetBtn.setColor('#FFB6C1'));
    resetBtn.on('pointerout',  () => resetBtn.setColor('#FF69B4'));
    resetBtn.on('pointerdown', () => {
      GameState.hardReset(); AchievementManager.reset();
      this.scene.restart();
    });
  }

  private renderSceneCards(): void {
    const CW = 330, CH = 155;
    const xs = [213, 640, 1067];
    const ys = [285, 460, 635];

    const cards: [number, number, SceneCard][] = [
      [xs[0], ys[0], {
        title: '전투 시스템',
        description: '카드를 드래그하여 적을 공격하는\n덱 빌딩 전투 화면',
        accentColor: ROSE, cardW: CW, cardH: CH,
        onClick: () => this.launchScene('DialogueScene', {
          scriptId: 'battle_intro', returnScene: 'BattleScene',
        }),
      }],
      [xs[1], ys[0], {
        title: '대화 시스템',
        description: '비주얼 노벨 형식의\n캐릭터 대화 화면',
        accentColor: PINK, cardW: CW, cardH: CH,
        onClick: () => this.launchScene('DialogueScene', {
          scriptId: 'test_intro', returnScene: 'HubScene',
        }),
      }],
      [xs[2], ys[0], {
        title: '5인 전투 테스트',
        description: '5마리 몬스터와의\n동시 전투 테스트',
        accentColor: LAVENDER, cardW: CW, cardH: CH,
        onClick: () => this.launchScene('BattleScene', { mode: 'five_monsters' }),
      }],
      [xs[0], ys[1], {
        title: '캠프파이어',
        description: '휴식으로 HP를 회복하거나\n카드를 업그레이드합니다',
        accentColor: PINK_SOFT, cardW: CW, cardH: CH,
        onClick: () => this.launchScene('RestScene', { returnScene: 'HubScene' }),
      }],
      [xs[1], ys[1], {
        title: '보스 유물 보상',
        description: '보스 격파 시 보스 유물 3개 중\n1개를 선택하는 화면',
        accentColor: 0xFF1493, cardW: CW, cardH: CH,
        onClick: () => this.launchScene('RelicRewardScene', {
          relics: GameState.getRandomRelics('boss', 3),
          returnScene: 'HubScene',
        }),
      }],
      [xs[2], ys[1], {
        title: '일반 유물 보상',
        description: 'Common·Rare 유물을 무작위로\n2개씩 섞어 3개 제시',
        accentColor: LAVENDER, cardW: CW, cardH: CH,
        onClick: () => {
          const relics = [
            ...GameState.getRandomRelics('common', 2),
            ...GameState.getRandomRelics('rare', 1),
          ];
          this.launchScene('RelicRewardScene', { relics, returnScene: 'HubScene' });
        },
      }],
      [128, ys[2], {
        title: '상점',
        description: '카드 구매 / 제거\n유물 구매',
        accentColor: GOLD, cardW: 200, cardH: CH,
        onClick: () => this.launchScene('ShopScene', { returnScene: 'HubScene' }),
      }],
      [384, ys[2], {
        title: '이벤트',
        description: '선택지에 따라\n보상 또는 패널티',
        accentColor: PINK, cardW: 200, cardH: CH,
        onClick: () => this.launchScene('EventScene', { returnScene: 'HubScene' }),
      }],
      [640, ys[2], {
        title: '던전 탐험',
        description: 'Act 1 맵 — 10개 노드\n전투·이벤트·상점·보스',
        accentColor: GREEN, cardW: 200, cardH: CH,
        onClick: () => this.launchScene('MapScene'),
      }],
      [896, ys[2], {
        title: '보스 전투',
        description: '암흑 군주\n페이즈 전환 보스',
        accentColor: ROSE, cardW: 200, cardH: CH,
        onClick: () => this.launchScene('BattleScene', { mode: 'boss' }),
      }],
      [1152, ys[2], {
        title: '엘리트 전투',
        description: '숲 거인 / 독거미 여왕\n유물 드롭',
        accentColor: LAVENDER, cardW: 200, cardH: CH,
        onClick: () => this.launchScene('BattleScene', {
          mode: Math.random() < 0.5 ? 'elite_giant' : 'elite_spider',
        }),
      }],
    ];

    cards.forEach(([x, y, cfg]) => this.createSceneCard(x, y, cfg));
  }

  private createSceneCard(x: number, y: number, cfg: SceneCard): void {
    const W = cfg.cardW ?? 320, H = cfg.cardH ?? 220;

    const bg = this.add.rectangle(x, y, W, H, BG_PANEL);
    bg.setStrokeStyle(2, BORDER_DIM);
    bg.setInteractive({ useHandCursor: true });

    this.add.rectangle(x, y - H / 2 + 3, W, 6, cfg.accentColor);

    const title = this.add.text(x, y - 58, cfg.title, {
      fontSize: '24px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.text(x, y - 4, cfg.description, {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
      lineSpacing: 6, align: 'center',
      wordWrap: { width: W - 48 },
    }).setOrigin(0.5);

    this.add.text(x, y + H / 2 - 16, '클릭하여 입장', {
      fontSize: '13px', fontFamily: FONT,
      color: '#' + cfg.accentColor.toString(16).padStart(6, '0'),
    }).setOrigin(0.5);

    bg.on('pointerover', () => {
      bg.setFillStyle(BG_HOVER);
      bg.setStrokeStyle(2, cfg.accentColor);
      title.setColor('#' + cfg.accentColor.toString(16).padStart(6, '0'));
    });
    bg.on('pointerout', () => {
      bg.setFillStyle(BG_PANEL);
      bg.setStrokeStyle(2, BORDER_DIM);
      title.setColor(TEXT_PRIMARY);
    });

    bg.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', cfg.onClick);
    });
  }

  private launchScene(key: string, data?: object): void {
    this.scene.start(key, data);
  }
}
