import Phaser from 'phaser';
import { GameState } from '../GameState';
import { bgm } from '../audio/BGMManager';
import { addSettingsButton } from './SettingsScene';
import { AchievementManager } from '../achievements/AchievementManager';
import {
  BG_DEEP, BG_PANEL, BG_HOVER, BG_DIVIDER,
  BORDER_DIM,
  PINK, ROSE, PINK_SOFT, LAVENDER, GOLD, GREEN,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, FONT,
} from '../theme';

interface ListItem {
  title: string;
  description: string;
  accentColor: number;
  onClick: () => void;
}

interface ListSection {
  sectionLabel: string;
  items: ListItem[];
}

const ITEM_W = 900;
const ITEM_H = 76;
const ITEM_GAP = 8;
const SECTION_H = 40;
const LIST_TOP = 218;
const LIST_BOT = 712;

export class HubScene extends Phaser.Scene {
  private listContainer!: Phaser.GameObjects.Container;
  private totalContentH = 0;
  private scrollThumb!: Phaser.GameObjects.Rectangle;

  constructor() {
    super({ key: 'HubScene' });
  }

  create(): void {
    bgm.play('bgm02');
    this.cameras.main.fadeIn(350, 0, 0, 0);
    if (!this.scene.isActive('ToastScene')) this.scene.launch('ToastScene');
    this.renderBackground();
    this.renderHeader();
    this.renderRunStatus();
    this.renderScrollableList();
    this.setupScroll();
    addSettingsButton(this);
  }

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, BG_DEEP).setDepth(0);
    // Top/bottom accent lines drawn at depth 6 (re-drawn above overflow covers in renderScrollableList)
  }

  private renderHeader(): void {
    const D = 6; // above overflow covers (depth 5)
    this.add.text(640, 50, '개발자 테스트 메뉴', {
      fontSize: '30px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5).setDepth(D);

    this.add.text(640, 88, '플레이할 시스템을 선택하세요', {
      fontSize: '15px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5).setDepth(D);

    this.add.rectangle(640, 112, ITEM_W, 1, BG_DIVIDER).setDepth(D);

    const loreBtn = this.add.text(1230, 50, '📖 별빛 마법서', {
      fontSize: '13px', color: '#5A3A7A', fontFamily: FONT,
    }).setOrigin(1, 0.5).setInteractive({ useHandCursor: true }).setDepth(D);
    loreBtn.on('pointerover', () => loreBtn.setColor('#FFD700'));
    loreBtn.on('pointerout',  () => loreBtn.setColor('#5A3A7A'));
    loreBtn.on('pointerdown', () => {
      this.cameras.main.fadeOut(250, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () =>
        this.scene.start('LoreBookScene', { returnScene: 'HubScene' }));
    });
  }

  private renderRunStatus(): void {
    const D = 6;
    const hasProgress = GameState.gold > 0
      || GameState.bonusCards.length > 0
      || GameState.playerHp < GameState.playerMaxHp
      || GameState.upgradedCardIds.length > 0;

    if (!hasProgress) {
      this.add.text(640, 158, '새 게임을 시작하세요', {
        fontSize: '13px', color: TEXT_DIM, fontFamily: FONT,
      }).setOrigin(0.5).setDepth(D);
    } else {
      this.add.rectangle(640, 158, ITEM_W, 32, BG_PANEL).setStrokeStyle(1, BG_DIVIDER).setDepth(D);
      const statusText = [
        `HP  ${GameState.playerHp} / ${GameState.playerMaxHp}`,
        `골드  ${GameState.gold} G`,
        `보너스 카드  ${GameState.bonusCards.length}장`,
        `업그레이드  ${GameState.upgradedCardIds.length}건`,
      ].join('   |   ');
      this.add.text(205, 158, statusText, {
        fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
      }).setOrigin(0, 0.5).setDepth(D);

      const resetBtn = this.add.text(1064, 158, '[ 런 초기화 ]', {
        fontSize: '12px', color: '#FF69B4', fontFamily: FONT,
      }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(D);
      resetBtn.on('pointerover', () => resetBtn.setColor('#FFB6C1'));
      resetBtn.on('pointerout',  () => resetBtn.setColor('#FF69B4'));
      resetBtn.on('pointerdown', () => {
        GameState.hardReset(); AchievementManager.reset();
        this.scene.restart();
      });
    }

    this.add.rectangle(640, 200, 1280, 1, BG_DIVIDER).setDepth(D);
  }

  private renderScrollableList(): void {
    const listAreaH = LIST_BOT - LIST_TOP;

    const sections: ListSection[] = [
      {
        sectionLabel: '◆  던전 탐험',
        items: [
          {
            title: 'Act 1 플레이 테스트',
            description: '별빛항 · 성운 숲 — Act 1 맵 10노드 · Act 1 몬스터 & 보스',
            accentColor: GREEN,
            onClick: () => {
              GameState.hardReset(); AchievementManager.reset();
              GameState.initMap();
              this.launchScene('MapScene');
            },
          },
          {
            title: 'Act 2 플레이 테스트',
            description: '별의 첨탑 — Act 2 맵 10노드 · Act 2 몬스터 & 보스',
            accentColor: 0x00CFFF,
            onClick: () => {
              GameState.hardReset(); AchievementManager.reset();
              GameState.currentAct = 2;
              GameState.initMap();
              this.launchScene('MapScene');
            },
          },
          {
            title: 'Act 3 플레이 테스트',
            description: '성천원 — Act 3 맵 10노드 · Act 3 몬스터 & 최종 보스',
            accentColor: GOLD,
            onClick: () => {
              GameState.hardReset(); AchievementManager.reset();
              GameState.currentAct = 3;
              GameState.initMap();
              this.launchScene('MapScene');
            },
          },
        ],
      },
      {
        sectionLabel: '◆  전투',
        items: [
          {
            title: '전투 시스템',
            description: '카드를 드래그하여 적을 공격하는 덱 빌딩 전투',
            accentColor: ROSE,
            onClick: () => this.launchScene('DialogueScene', { scriptId: 'battle_intro', returnScene: 'BattleScene' }),
          },
          {
            title: '5인 전투 테스트',
            description: '5마리 몬스터와의 동시 전투 테스트',
            accentColor: LAVENDER,
            onClick: () => this.launchScene('BattleScene', { mode: 'five_monsters' }),
          },
          {
            title: '보스 전투',
            description: '페이즈 전환 보스 — 현재 Act 보스 등장',
            accentColor: ROSE,
            onClick: () => this.launchScene('BattleScene', { mode: 'boss' }),
          },
          {
            title: '엘리트 전투',
            description: '오염된 엘리트 몬스터 — 현재 Act 엘리트 등장 · 유물 드롭',
            accentColor: LAVENDER,
            onClick: () => this.launchScene('BattleScene', { mode: 'elite' }),
          },
        ],
      },
      {
        sectionLabel: '◆  보상 & 상점',
        items: [
          {
            title: '캠프파이어',
            description: 'HP 회복 또는 카드 업그레이드',
            accentColor: PINK_SOFT,
            onClick: () => this.launchScene('RestScene', { returnScene: 'HubScene' }),
          },
          {
            title: '보스 유물 보상',
            description: '보스 유물 3개 중 1개를 선택하는 화면',
            accentColor: 0xFF1493,
            onClick: () => this.launchScene('RelicRewardScene', {
              relics: GameState.getRandomRelics('boss', 3),
              returnScene: 'HubScene',
            }),
          },
          {
            title: '일반 유물 보상',
            description: 'Common · Rare 유물을 혼합하여 3개 제시',
            accentColor: LAVENDER,
            onClick: () => {
              const relics = [
                ...GameState.getRandomRelics('common', 2),
                ...GameState.getRandomRelics('rare', 1),
              ];
              this.launchScene('RelicRewardScene', { relics, returnScene: 'HubScene' });
            },
          },
          {
            title: '상점',
            description: '카드 구매 / 제거 · 유물 구매',
            accentColor: GOLD,
            onClick: () => this.launchScene('ShopScene', { returnScene: 'HubScene' }),
          },
          {
            title: '이벤트',
            description: '선택지에 따라 보상 또는 패널티 발생',
            accentColor: PINK,
            onClick: () => this.launchScene('EventScene', { returnScene: 'HubScene' }),
          },
        ],
      },
      {
        sectionLabel: '◆  스토리',
        items: [
          {
            title: '대화 시스템',
            description: '비주얼 노벨 형식의 캐릭터 대화 화면',
            accentColor: PINK,
            onClick: () => this.launchScene('DialogueScene', { scriptId: 'test_intro', returnScene: 'HubScene' }),
          },
        ],
      },
    ];

    // Scrollable region mask — pass addToScene=false so the Graphics object is
    // NOT in the display list and won't render a white rect over the content.
    // (The second-arg overload exists in Phaser source but is missing from TS types.)
    type MakeGfx = (cfg: object, addToScene: boolean) => Phaser.GameObjects.Graphics;
    const maskG = (this.make.graphics as unknown as MakeGfx)({}, false);
    maskG.fillStyle(0xffffff);
    maskG.fillRect(0, LIST_TOP, 1280, listAreaH);
    const listMask = maskG.createGeometryMask();

    // Container positioned at (0, LIST_TOP); item coords are local to it
    this.listContainer = this.add.container(0, LIST_TOP).setDepth(2);
    this.listContainer.setMask(listMask);

    let curY = 0;
    for (const section of sections) {
      const header = this.add.text(640 - ITEM_W / 2 + 2, curY + SECTION_H / 2, section.sectionLabel, {
        fontSize: '11px', color: TEXT_DIM, fontFamily: FONT, fontStyle: 'bold',
        letterSpacing: 1,
      }).setOrigin(0, 0.5);
      this.listContainer.add(header);
      curY += SECTION_H;

      for (const item of section.items) {
        this.addListItem(curY, item);
        curY += ITEM_H + ITEM_GAP;
      }
      curY += 12;
    }
    this.totalContentH = curY;

    // Overflow covers — solid BG rects at depth 5 that hide any pixel that
    // bleeds outside the list bounds (same technique as LoreBookScene).
    // Header cover: y=0 to y=LIST_TOP
    this.add.rectangle(640, LIST_TOP / 2, 1280, LIST_TOP, BG_DEEP).setDepth(5);
    // Footer cover: y=LIST_BOT to y=720
    const footerH = 720 - LIST_BOT;
    if (footerH > 0) {
      this.add.rectangle(640, LIST_BOT + footerH / 2, 1280, footerH, BG_DEEP).setDepth(5);
    }
    // Re-draw the fixed top accent line and bottom line over the cover
    this.add.rectangle(640, 2, 1280, 4, PINK).setOrigin(0.5, 0).setDepth(6);
    this.add.rectangle(640, 718, 1280, 2, BG_DIVIDER).setOrigin(0.5, 1).setDepth(6);

    // Scrollbar track + thumb at depth 5 (above overflow covers)
    const TRACK_X = 640 + ITEM_W / 2 + 18;
    this.add.rectangle(TRACK_X, LIST_TOP + listAreaH / 2, 3, listAreaH, BG_DIVIDER)
      .setOrigin(0.5).setDepth(5);
    const thumbH = Math.max(36, listAreaH * (listAreaH / this.totalContentH));
    this.scrollThumb = this.add.rectangle(TRACK_X, LIST_TOP + thumbH / 2, 3, thumbH, BORDER_DIM)
      .setOrigin(0.5).setDepth(5);

    // Scroll hint
    this.add.text(640 + ITEM_W / 2 + 28, LIST_TOP + listAreaH / 2, '↑\n↓', {
      fontSize: '11px', color: TEXT_DIM, fontFamily: FONT, align: 'center', lineSpacing: 4,
    }).setOrigin(0.5).setDepth(5);
  }

  private addListItem(localY: number, item: ListItem): void {
    const cx = 640;
    const accentHex = '#' + item.accentColor.toString(16).padStart(6, '0');

    const bg = this.add.rectangle(cx, localY + ITEM_H / 2, ITEM_W, ITEM_H, BG_PANEL);
    bg.setStrokeStyle(1, BORDER_DIM);
    bg.setInteractive({ useHandCursor: true });

    const stripe = this.add.rectangle(cx - ITEM_W / 2 + 2, localY + ITEM_H / 2, 4, ITEM_H, item.accentColor);

    const titleTxt = this.add.text(cx - ITEM_W / 2 + 22, localY + ITEM_H * 0.33, item.title, {
      fontSize: '18px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0, 0.5);

    const descTxt = this.add.text(cx - ITEM_W / 2 + 22, localY + ITEM_H * 0.68, item.description, {
      fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0, 0.5);

    const arrow = this.add.text(cx + ITEM_W / 2 - 22, localY + ITEM_H / 2, '→', {
      fontSize: '22px', color: accentHex, fontFamily: FONT,
    }).setOrigin(1, 0.5);

    this.listContainer.add([bg, stripe, titleTxt, descTxt, arrow]);

    bg.on('pointerover', () => {
      bg.setFillStyle(BG_HOVER);
      bg.setStrokeStyle(1, item.accentColor);
      titleTxt.setColor(accentHex);
    });
    bg.on('pointerout', () => {
      bg.setFillStyle(BG_PANEL);
      bg.setStrokeStyle(1, BORDER_DIM);
      titleTxt.setColor(TEXT_PRIMARY);
    });
    bg.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', item.onClick);
    });
  }

  private setupScroll(): void {
    const listAreaH = LIST_BOT - LIST_TOP;
    const maxScroll = Math.max(0, this.totalContentH - listAreaH);
    if (maxScroll === 0) return; // content fits — no scroll needed

    const thumbH = Math.max(36, listAreaH * (listAreaH / this.totalContentH));
    const thumbTravel = listAreaH - thumbH;

    this.input.on('wheel', (_p: unknown, _go: unknown, _dx: number, dy: number) => {
      const raw = this.listContainer.y - dy * 0.8;
      this.listContainer.y = Phaser.Math.Clamp(raw, LIST_TOP - maxScroll, LIST_TOP);

      const scrollOffset = LIST_TOP - this.listContainer.y;
      const thumbY = LIST_TOP + (scrollOffset / maxScroll) * thumbTravel + thumbH / 2;
      this.scrollThumb.setY(thumbY);
    });
  }

  private launchScene(key: string, data?: object): void {
    this.scene.start(key, data);
  }
}
