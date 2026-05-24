import Phaser from 'phaser';
import { GameState } from '../GameState';
import { AchievementManager } from '../achievements/AchievementManager';
import type { BattleMode, Card, StatusEffects, TurnPhase } from '../types';
import { applyDamage, addStatus } from '../utils/combat';
import { shakeObject, flashHit, spawnDamageNumber, spawnHealNumber, playDeathTween } from '../utils/fx';
import { sfx } from '../audio/SoundManager';
import {
  BG_DEEP, BG_PANEL, BG_HOVER, BG_DIVIDER,
  BORDER_DIM,
  PINK, ROSE, PINK_SOFT, LAVENDER,
  TEXT_SECONDARY, FONT,
} from '../theme';
import { getActTheme, type ActTheme } from '../data/actTheme';

// ── 레이아웃 상수 (1280×720) ────────────────────────────────────────────────
const W = 1280;
const ENEMY_CY = 185;        // 몬스터 스프라이트 중심 y
const PLAYER_CX = 160;       // 플레이어 스프라이트 중심 x
const PLAYER_CY = 460;       // 플레이어 스프라이트 중심 y (하단 30%가 카드 섹션에 가려짐)
const DIVIDER_Y = 492;       // 패 영역 구분선 y
const PILE_Y = 615;          // 덱·버림·카드 중심 y
const PILE_MANA_Y = 515;     // 마나 pip 및 턴종료 버튼 y
const SNAP_RADIUS = 140;     // 공격 카드 근접 자동 타겟 범위 (px)
const DECK_X = 65;           // 덱 아이콘 x (드로우 애니메이션 출발점)
const DISCARD_X = 1215;      // 버림 더미 아이콘 x (버림 애니메이션 도착점)

interface CardView {
  cardId: string;
  container: Phaser.GameObjects.Container;
  originX: number;
  originY: number;
  /** 드래그 중 호버 스케일을 억제하기 위한 상태 토글. */
  setDragging: (v: boolean) => void;
}

/**
 * 전투 씬 — 렌더링·입력만 담당. 모든 수치 로직은 GameState에 위임.
 * 1280×720 (16:9), 최대 5몬스터 동시 전투 지원.
 */
export class BattleScene extends Phaser.Scene {
  private gs!: GameState;
  private actTheme!: ActTheme;
  private battleMode: BattleMode = 'default';
  private returnScene = 'HubScene';
  private turnPhase: TurnPhase = 'player';

  // ── 플레이어 UI ────────────────────────────────────────────────────────
  private playerSprite!: Phaser.GameObjects.Image;
  private txtPlayerHp!: Phaser.GameObjects.Text;
  private txtPlayerBlock!: Phaser.GameObjects.Text;
  private txtPlayerStatus!: Phaser.GameObjects.Text;

  // ── 몬스터 UI 배열 (인덱스 = enemies 배열 순서) ──────────────────────
  private enemyBodies: Phaser.GameObjects.Rectangle[] = [];
  private enemyBodyColors: number[] = [];       // 원래 채우기 색 (flashHit 복원용)
  private enemyDeathTriggered: boolean[] = [];  // 사망 애니메이션 중복 방지
  private txtEnemyHp: Phaser.GameObjects.Text[] = [];
  private txtEnemyBlock: Phaser.GameObjects.Text[] = [];
  private txtEnemyStatus: Phaser.GameObjects.Text[] = [];
  private txtIntentLabels: Phaser.GameObjects.Text[] = [];
  private enemyDropZones: (Phaser.Geom.Rectangle | null)[] = [];

  // ── 패 영역 UI ─────────────────────────────────────────────────────────
  private manaPips: Phaser.GameObjects.Arc[] = [];
  private txtMana!: Phaser.GameObjects.Text;
  private txtDeckCount!: Phaser.GameObjects.Text;
  private txtDiscardCount!: Phaser.GameObjects.Text;

  // ── 턴 종료 버튼 ────────────────────────────────────────────────────────
  private endTurnBtn!: Phaser.GameObjects.Rectangle;

  private cardViews: CardView[] = [];
  private potionSlotObjs: Phaser.GameObjects.GameObject[] = [];

  // ── 타겟 하이라이트 ────────────────────────────────────────────────────
  private enemyHighlights: Phaser.GameObjects.Graphics[] = [];
  private enemyCenterPos: { cx: number; cy: number; w: number; h: number }[] = [];
  private currentSnapTarget = -1;

  constructor() {
    super({ key: 'BattleScene' });
  }

  preload(): void {
    if (!this.textures.exists('player_standing'))
      this.load.image('player_standing', 'images/Player/Player_standing.png');
    if (!this.textures.exists('player_attack'))
      this.load.image('player_attack', 'images/Player/Player_attack.png');
  }

  init(data: { mode?: string; returnScene?: string }): void {
    const m = data?.mode;
    this.battleMode =
      m === 'five_monsters' || m === 'boss' || m === 'elite'
        ? (m as BattleMode)
        : 'default';
    this.returnScene = data?.returnScene ?? 'HubScene';
  }

  create(): void {
    this.turnPhase = 'player';
    this.actTheme = getActTheme(GameState.currentAct);
    GameState.battleStartHp = GameState.playerHp; // 도전 과제 '무적' 판정용
    GameState.reset(this.battleMode);
    this.gs = GameState.instance;

    this.cameras.main.fadeIn(350, 0, 0, 0);

    this.renderBackground();
    this.renderEnemies();
    this.renderPlayer();
    this.renderRelicPanel();
    this.renderPileUI();
    this.renderPotionSlots();
    this.renderHand(true);   // 첫 드로우 애니메이션
    this.renderEndTurnButton();
    this.renderBackButton();
    this.setupDragDrop();
    this.updateAllIntents();
    this.updateUI();
  }

  // ── 렌더링 ────────────────────────────────────────────────────────────────

  private renderBackground(): void {
    this.add.rectangle(W / 2, 360, W, 720, this.actTheme.bg);
    this.add.rectangle(W / 2, DIVIDER_Y, W, 2, this.actTheme.battleDivider);
    // 카드 섹션 패널 — 90% 불투명도로 플레이어 하단이 은은하게 비침
    const cardSectionH = 720 - DIVIDER_Y;
    this.add.rectangle(W / 2, DIVIDER_Y + cardSectionH / 2, W, cardSectionH, this.actTheme.bg)
      .setAlpha(0.9)
      .setDepth(2);
  }

  /** 전투 모드에 맞게 몬스터 슬롯을 동적으로 생성 */
  private renderEnemies(): void {
    this.enemyBodies = [];
    this.enemyBodyColors = [];
    this.enemyDeathTriggered = [];
    this.txtEnemyHp = [];
    this.txtEnemyBlock = [];
    this.txtEnemyStatus = [];
    this.txtIntentLabels = [];
    this.enemyDropZones = [];
    this.enemyHighlights = [];
    this.enemyCenterPos = [];

    const positions = this.getEnemyPositions(this.gs.enemies.length);
    const cy = ENEMY_CY;
    const MONSTER_COLORS: number[] = [
      0x6a0dad, // 슬라임 (보라)
      0x27ae60, // 고블린 (초록)
      0x8B4513, // 오크 (갈색) — Phaser은 0x로 hex 처리
      0xb0a090, // 해골 (뼈색)
      0x4a1a7a, // 박쥐 (어두운 보라)
    ];

    this.gs.enemies.forEach((monster, i) => {
      const cx = positions[i];

      const isBossMonster = 'phasePatterns' in monster;
      const isEliteMonster = !isBossMonster && 'isElite' in monster && (monster as Record<string, unknown>).isElite === true;

      let bodyW = 70, bodyH = 80;
      let bodyColor = MONSTER_COLORS[i] ?? 0x6a0dad;
      let strokeColor = 0xe17055;

      if (isBossMonster) {
        bodyW = 90; bodyH = 110; bodyColor = 0xc0392b; strokeColor = 0xff6b6b;
      } else if (isEliteMonster) {
        bodyW = 80; bodyH = 95; bodyColor = 0x8e44ad; strokeColor = 0xb39ddb;
      }

      // 스프라이트
      const body = this.add.rectangle(cx, cy, bodyW, bodyH, bodyColor);
      body.setStrokeStyle(2, strokeColor);
      this.enemyBodies.push(body);
      this.enemyBodyColors.push(bodyColor);
      this.enemyDeathTriggered.push(false);

      // 타겟 하이라이트 — 드래그 시 근접 범위 안에서 활성화됨
      const highlight = this.add.graphics().setDepth(3);
      this.enemyHighlights.push(highlight);
      this.enemyCenterPos.push({ cx, cy, w: bodyW, h: bodyH });

      // 보스/엘리트 배지
      if (isBossMonster) {
        this.add.rectangle(cx, cy - bodyH / 2 + 9, bodyW - 4, 17, 0x7f0000);
        this.add.text(cx, cy - bodyH / 2 + 9, 'BOSS', {
          fontSize: '10px', color: '#ffcccc', fontStyle: 'bold',
        }).setOrigin(0.5);
      } else if (isEliteMonster) {
        this.add.rectangle(cx, cy - bodyH / 2 + 9, bodyW - 4, 17, 0x4a0d6d);
        this.add.text(cx, cy - bodyH / 2 + 9, 'ELITE', {
          fontSize: '10px', color: '#e0b8ff', fontStyle: 'bold',
        }).setOrigin(0.5);
      }

      // 이름
      const nameY = cy - Math.floor(bodyH / 2) - 14;
      this.add.text(cx, nameY, monster.name, {
        fontSize: '13px', color: '#ffffff', fontStyle: 'bold',
      }).setOrigin(0.5);

      // HP
      const hp = this.add.text(cx, cy + 50, `HP ${monster.hp}/${monster.maxHp}`, {
        fontSize: '11px', color: '#ff7675',
      }).setOrigin(0.5);
      this.txtEnemyHp.push(hp);

      // 방어도
      const blk = this.add.text(cx, cy + 63, `방어도: ${monster.block}`, {
        fontSize: '11px', color: '#74b9ff',
      }).setOrigin(0.5);
      this.txtEnemyBlock.push(blk);

      // 상태이상
      const statusTxt = this.add.text(cx, cy + 76, '', {
        fontSize: '10px', color: '#a29bfe',
        wordWrap: { width: 140 }, align: 'center',
      }).setOrigin(0.5);
      this.txtEnemyStatus.push(statusTxt);

      // 의도 표시 (다음 행동)
      this.add.text(cx, cy + 91, '다음 행동', {
        fontSize: '10px', color: '#556688',
      }).setOrigin(0.5);

      const intentTxt = this.add.text(cx, cy + 105, '', {
        fontSize: '12px', color: '#fdcb6e', fontStyle: 'bold',
        wordWrap: { width: 130 }, align: 'center',
      }).setOrigin(0.5);
      this.txtIntentLabels.push(intentTxt);

      // 드롭 존
      this.enemyDropZones.push(
        new Phaser.Geom.Rectangle(cx - bodyW / 2, cy - bodyH / 2, bodyW, bodyH),
      );
    });
  }

  private renderPlayer(): void {
    const { player } = this.gs;
    const cx = PLAYER_CX, cy = PLAYER_CY;
    const TARGET_H = 480;
    const imgTop = cy - TARGET_H / 2; // 380

    this.playerSprite = this.add.image(cx, cy, 'player_standing');
    this.playerSprite.setScale(TARGET_H / this.playerSprite.height);
    this.playerSprite.setDepth(1);

    // 플레이어 정보는 이미지 위에 표기
    this.add.text(cx, imgTop - 62, player.name, {
      fontSize: '15px', color: '#ffffff', fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.txtPlayerHp = this.add.text(cx, imgTop - 46, `HP ${player.hp}/${player.maxHp}`, {
      fontSize: '12px', color: '#ff7675',
    }).setOrigin(0.5);

    this.txtPlayerBlock = this.add.text(cx, imgTop - 30, `방어도: ${player.block}`, {
      fontSize: '12px', color: '#74b9ff',
    }).setOrigin(0.5);

    this.txtPlayerStatus = this.add.text(cx, imgTop - 14, '', {
      fontSize: '10px', color: '#a29bfe',
      wordWrap: { width: 140 }, align: 'center',
    }).setOrigin(0.5);
  }

  /**
   * 패 영역 하단 UI: 마나 pip + "X/Y" 텍스트 / 덱 아이콘 / 버림 더미 아이콘.
   * PILE_MANA_Y: 마나·버튼 행 / PILE_Y: 카드·덱·버림 행.
   */
  private renderPileUI(): void {
    const { player } = this.gs;
    const PY = PILE_Y;

    // ── 덱 (좌측) — 클릭 시 내용 보기 ────────────────────────────────
    this.add.text(65, PY - 40, '덱', {
      fontSize: '11px', color: '#5888a8',
    }).setOrigin(0.5).setDepth(3);
    this.add.rectangle(68, PY - 3, 40, 54, 0x1e2535).setStrokeStyle(1, 0x2d4060).setDepth(3);
    const deckRect = this.add.rectangle(65, PY, 40, 54, 0x2a3548);
    deckRect.setStrokeStyle(1.5, 0x4080b0).setDepth(3);
    deckRect.setInteractive({ useHandCursor: true });
    deckRect.on('pointerover', () => deckRect.setStrokeStyle(2, 0x74b9ff));
    deckRect.on('pointerout',  () => deckRect.setStrokeStyle(1.5, 0x4080b0));
    deckRect.on('pointerdown', () => this.openPileViewer(
      [...this.gs.deck],
      `덱 (${this.gs.deck.length}장)`,
    ));
    this.txtDeckCount = this.add.text(65, PY + 36, `${this.gs.deck.length}장`, {
      fontSize: '12px', color: '#90a0b0',
    }).setOrigin(0.5).setDepth(3);

    // ── 버림 더미 (우측) — 클릭 시 내용 보기 ──────────────────────────
    this.add.text(1215, PY - 40, '버림', {
      fontSize: '11px', color: '#a86050',
    }).setOrigin(0.5).setDepth(3);
    this.add.rectangle(1218, PY - 3, 40, 54, 0x1e2535).setStrokeStyle(1, 0x2d4060).setDepth(3);
    const discardRect = this.add.rectangle(1215, PY, 40, 54, 0x3d2a2a);
    discardRect.setStrokeStyle(1.5, 0xb06040).setDepth(3);
    discardRect.setInteractive({ useHandCursor: true });
    discardRect.on('pointerover', () => discardRect.setStrokeStyle(2, 0xff9f7f));
    discardRect.on('pointerout',  () => discardRect.setStrokeStyle(1.5, 0xb06040));
    discardRect.on('pointerdown', () => this.openPileViewer(
      [...this.gs.discard],
      `버림 더미 (${this.gs.discard.length}장)`,
    ));
    this.txtDiscardCount = this.add.text(1215, PY + 36, `${this.gs.discard.length}장`, {
      fontSize: '12px', color: '#90a0b0',
    }).setOrigin(0.5).setDepth(3);

    // ── 마나 pip (패 영역 우측 상단) ────────────────────────────────────
    this.add.text(890, PILE_MANA_Y, '마나', {
      fontSize: '11px', color: '#6060a0',
    }).setOrigin(0.5).setDepth(3);

    this.manaPips = [];
    const pipStartX = 916;
    const pipSpacing = 24;
    for (let i = 0; i < player.maxMana; i++) {
      const pip = this.add.circle(pipStartX + i * pipSpacing, PILE_MANA_Y, 10, PINK);
      pip.setStrokeStyle(2, PINK_SOFT).setDepth(3);
      this.manaPips.push(pip);
    }
    this.txtMana = this.add.text(
      pipStartX + player.maxMana * pipSpacing + 6,
      PILE_MANA_Y,
      `${player.mana}/${player.maxMana}`,
      { fontSize: '13px', color: '#8080c0' },
    ).setOrigin(0, 0.5).setDepth(3);
  }

  /** 포션 슬롯 2개를 PILE_MANA_Y 행 좌측에 렌더링. 재호출 시 이전 오브젝트 제거. */
  private renderPotionSlots(): void {
    this.potionSlotObjs.forEach(o => o.destroy());
    this.potionSlotObjs = [];

    const label = this.add.text(150, PILE_MANA_Y - 20, '포션', {
      fontSize: '10px', color: '#556688',
    }).setOrigin(0.5).setDepth(3);
    this.potionSlotObjs.push(label);

    const SLOT_W = 58, SLOT_H = 46;
    const POTION_COLORS: Record<string, number> = {
      heal_potion: 0x00b894,
      strength_potion: 0xe17055,
      explosive_potion: 0xff4757,
      draw_potion: 0x0984e3,
    };
    const POTION_SHORT: Record<string, string> = {
      heal_potion: '치유',
      strength_potion: '힘',
      explosive_potion: '폭발',
      draw_potion: '드로우',
    };

    const slotXs = [120, 184];
    for (let i = 0; i < 2; i++) {
      const cx = slotXs[i];
      const potion = GameState.potionSlots[i];

      if (potion) {
        const col = POTION_COLORS[potion.id] ?? 0x74b9ff;
        const bg = this.add.rectangle(cx, PILE_MANA_Y, SLOT_W, SLOT_H, col, 0.22);
        bg.setStrokeStyle(1.5, col).setDepth(3);
        bg.setInteractive({ useHandCursor: true });
        this.potionSlotObjs.push(bg);

        const txt = this.add.text(cx, PILE_MANA_Y - 6, POTION_SHORT[potion.id] ?? potion.name, {
          fontSize: '10px', color: '#ffffff', fontStyle: 'bold',
        }).setOrigin(0.5).setDepth(3);
        this.potionSlotObjs.push(txt);

        const hint = this.add.text(cx, PILE_MANA_Y + 10, '클릭 사용', {
          fontSize: '8px', color: '#aaaacc',
        }).setOrigin(0.5).setDepth(3);
        this.potionSlotObjs.push(hint);

        const slotIdx = i;
        bg.on('pointerover', () => bg.setStrokeStyle(2, 0xffffff));
        bg.on('pointerout',  () => bg.setStrokeStyle(1.5, col));
        bg.on('pointerdown', () => {
          if (this.turnPhase === 'player') this.usePotionAtSlot(slotIdx);
        });
      } else {
        const bg = this.add.rectangle(cx, PILE_MANA_Y, SLOT_W, SLOT_H, BG_DEEP);
        bg.setStrokeStyle(1, BORDER_DIM).setDepth(3);
        this.potionSlotObjs.push(bg);

        const empty = this.add.text(cx, PILE_MANA_Y, '비어있음', {
          fontSize: '8px', color: '#333355',
        }).setOrigin(0.5).setDepth(3);
        this.potionSlotObjs.push(empty);
      }
    }
  }

  /** 슬롯 idx의 포션을 사용. 플레이어 턴에만 호출됨. */
  private usePotionAtSlot(slot: number): void {
    const potion = GameState.potionSlots[slot];
    if (!potion) return;
    GameState.potionSlots[slot] = null;

    sfx.playPotion();
    switch (potion.id) {
      case 'heal_potion': {
        const heal = Math.min(20, this.gs.player.maxHp - this.gs.player.hp);
        this.gs.player.hp += heal;
        GameState.playerHp = this.gs.player.hp;
        spawnHealNumber(this, PLAYER_CX, PLAYER_CY - 30, heal);
        this.flashMessage(`HP +${heal} 회복!`, 0x00b894);
        break;
      }
      case 'strength_potion':
        addStatus(this.gs.player, 'strength', 3);
        this.flashMessage('힘 +3!', 0xe17055);
        break;
      case 'explosive_potion': {
        const alive = this.gs.enemies.filter(e => e.hp > 0);
        const hpBefore = this.gs.enemies.map(e => e.hp);
        alive.forEach(e => applyDamage(e, 10, this.gs.player));
        const positions = this.getEnemyPositions(this.gs.enemies.length);
        this.gs.enemies.forEach((enemy, i) => {
          const dmg = hpBefore[i] - enemy.hp;
          if (dmg > 0) spawnDamageNumber(this, positions[i], ENEMY_CY + 35, dmg);
        });
        this.cameras.main.shake(180, 0.006);
        this.flashMessage('폭발! 전체 10 피해', 0xff4757);
        this.updateUI();
        if (this.gs.enemies.every(e => e.hp <= 0)) {
          GameState.savePlayerState(this.gs.player.hp);
          this.cardViews.forEach(cv => cv.container.disableInteractive());
          this.renderPotionSlots();
          this.handleVictory();
          return;
        }
        break;
      }
      case 'draw_potion':
        this.gs.drawCards(3);
        this.renderHand();
        sfx.playCardDraw();
        this.flashMessage('카드 3장 드로우!', 0x0984e3);
        break;
    }

    this.renderPotionSlots();
    this.updateUI();
  }

  /**
   * 현재 손패를 화면 하단 중앙에 균등 배치.
   * animate=true 이면 각 카드가 덱 위치에서 슬라이드인 (드로우 VFX).
   */
  private renderHand(animate = false): void {
    this.cardViews.forEach(cv => cv.container.destroy());
    this.cardViews = [];

    const { hand } = this.gs;
    if (hand.length === 0) return;

    const CARD_W = 100, CARD_H = 138, GAP = 120;
    const startX = W / 2 - ((hand.length - 1) * GAP) / 2;

    hand.forEach((card, i) => {
      const tx = startX + i * GAP;
      const view = this.createCardView(card, tx, PILE_Y, CARD_W, CARD_H);

      if (animate) {
        // 덱 위치에서 시작해 목표 위치로 슬라이드
        view.container.setPosition(DECK_X, PILE_Y);
        view.container.setAlpha(0);
        view.container.setScale(0.35);
        this.tweens.add({
          targets: view.container,
          x: tx,
          y: PILE_Y,
          alpha: 1,
          scaleX: 1,
          scaleY: 1,
          duration: 270,
          ease: 'Back.Out',
          delay: i * 75,
        });
      }

      this.cardViews.push(view);
    });
  }

  private createCardView(card: Card, x: number, y: number, w: number, h: number): CardView {
    const container = this.add.container(x, y);

    const bg = this.add.rectangle(0, 0, w, h, BG_PANEL);
    bg.setStrokeStyle(2, card.targetType === 'all' ? ROSE : LAVENDER);

    const badge = this.add.circle(-w / 2 + 14, -h / 2 + 14, 12, PINK);
    const costText = this.add.text(-w / 2 + 14, -h / 2 + 14, String(card.cost), {
      fontSize: '13px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    const nameText = this.add.text(0, -h / 2 + 30, card.name, {
      fontSize: '13px', color: '#dfe6e9', fontStyle: 'bold',
      wordWrap: { width: w - 20 }, align: 'center',
    }).setOrigin(0.5);

    const divider = this.add.rectangle(0, -h / 2 + 44, w - 20, 1, BG_DIVIDER);

    const descText = this.add.text(0, 14, card.description, {
      fontSize: '11px', color: '#b2bec3',
      wordWrap: { width: w - 16 }, align: 'center',
    }).setOrigin(0.5);

    // AoE 카드에 작은 "전체" 태그 표시
    if (card.targetType === 'all') {
      const tag = this.add.text(w / 2 - 4, -h / 2 + 4, '전체', {
        fontSize: '9px', color: '#e17055',
      }).setOrigin(1, 0);
      container.add(tag);
    }

    container.add([bg, badge, costText, nameText, divider, descText]);
    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });
    this.input.setDraggable(container);
    container.setDepth(3);

    // ── 호버 스케일 VFX ────────────────────────────────────────────────
    let dragging = false;

    container.on('pointerover', () => {
      if (dragging) return;
      this.tweens.killTweensOf(container);
      this.tweens.add({
        targets: container,
        scaleX: 1.14, scaleY: 1.14,
        duration: 100,
        ease: 'Power2',
      });
      container.setDepth(5);
    });

    container.on('pointerout', () => {
      if (dragging) return;
      this.tweens.killTweensOf(container);
      this.tweens.add({
        targets: container,
        scaleX: 1, scaleY: 1,
        duration: 120,
        ease: 'Power2',
      });
      container.setDepth(3);
    });

    return {
      cardId: card.id,
      container,
      originX: x,
      originY: y,
      setDragging: (v: boolean) => {
        dragging = v;
        if (v) {
          // 드래그 시작 시 호버 트윈 즉시 취소 + 스케일 리셋
          this.tweens.killTweensOf(container);
          container.setScale(1);
        }
      },
    };
  }

  /**
   * 턴 종료 버튼 — 구분선 위 우측.
   * 몬스터 턴에는 회색으로 비활성화.
   */
  private renderEndTurnButton(): void {
    const bx = 1155, by = PILE_MANA_Y;

    const btnColor = this.actTheme.endTurnActive;
    this.endTurnBtn = this.add.rectangle(bx, by, 140, 46, btnColor);
    this.endTurnBtn.setStrokeStyle(2, btnColor).setDepth(3);
    this.endTurnBtn.setInteractive({ useHandCursor: true });

    this.add.text(bx, by, '턴 종료', {
      fontSize: '16px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5).setDepth(3);

    this.endTurnBtn.on('pointerover', () => {
      if (this.turnPhase === 'player') this.endTurnBtn.setFillStyle(this.actTheme.endTurnActive);
    });
    this.endTurnBtn.on('pointerout', () => {
      if (this.turnPhase === 'player') this.endTurnBtn.setFillStyle(this.actTheme.endTurnActive);
    });
    this.endTurnBtn.on('pointerdown', () => {
      if (this.turnPhase !== 'player') return;
      this.startMonsterTurn();
    });
  }

  /** 장착된 유물 목록을 왼쪽 상단에 표시 (전투 중 변하지 않으므로 1회만 그림) */
  private renderRelicPanel(): void {
    const relics = GameState.equippedRelics;
    const px = 10, py = 44;

    this.add.text(px, py, '유물', {
      fontSize: '10px', color: '#444455',
    });

    if (relics.length === 0) {
      this.add.text(px, py + 14, '없음', {
        fontSize: '10px', color: '#333344',
      });
      return;
    }

    const TIER_DOT: Record<string, string> = {
      common: '#74b9ff', rare: '#fdcb6e', boss: '#e17055',
    };

    relics.forEach((r, i) => {
      const dotColor = TIER_DOT[r.tier] ?? '#aaaaaa';
      const dot = this.add.circle(px + 5, py + 16 + i * 17, 4, parseInt(dotColor.replace('#', ''), 16));
      dot.setAlpha(0.9);
      this.add.text(px + 14, py + 10 + i * 17, r.name, {
        fontSize: '10px', color: '#8888aa',
      });
    });
  }

  private renderBackButton(): void {
    const btn = this.add.rectangle(50, 24, 80, 30, BG_PANEL);
    btn.setStrokeStyle(1, BORDER_DIM);
    btn.setInteractive({ useHandCursor: true });

    this.add.text(50, 24, '◀ 뒤로', {
      fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);

    btn.on('pointerover', () => btn.setFillStyle(BG_HOVER));
    btn.on('pointerout', () => btn.setFillStyle(BG_PANEL));
    btn.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start(this.returnScene);
      });
    });

    this.renderMuteButton();
  }

  private renderMuteButton(): void {
    const bx = 140, by = 24;
    const getLabel = () => sfx.muted ? '🔇' : '🔊';

    const btn = this.add.rectangle(bx, by, 38, 28, BG_PANEL);
    btn.setStrokeStyle(1, BORDER_DIM);
    btn.setInteractive({ useHandCursor: true });

    const txt = this.add.text(bx, by, getLabel(), {
      fontSize: '14px',
    }).setOrigin(0.5);

    btn.on('pointerover', () => btn.setFillStyle(BG_HOVER));
    btn.on('pointerout', () => btn.setFillStyle(BG_PANEL));
    btn.on('pointerdown', () => {
      sfx.toggleMute();
      txt.setText(getLabel());
    });
  }

  // ── 드래그 앤 드롭 ─────────────────────────────────────────────────────────

  private setupDragDrop(): void {
    this.input.on('dragstart', (_p: unknown, obj: unknown) => {
      const container = obj as Phaser.GameObjects.Container;
      const view = this.cardViews.find(cv => cv.container === container);
      view?.setDragging(true);
      container.setDepth(10);
      sfx.playCardPickup();
    });

    this.input.on('drag', (_p: unknown, obj: unknown, dragX: number, dragY: number) => {
      const container = obj as Phaser.GameObjects.Container;
      container.setPosition(dragX, dragY);

      // 공격 카드일 때만 근접 타겟 하이라이트 갱신
      const view = this.cardViews.find(cv => cv.container === container);
      if (view) {
        const card = this.gs.hand.find(c => c.id === view.cardId);
        if (card?.cardType === 'attack') this.updateSnapHighlight(dragX, dragY);
        else this.clearSnapHighlights();
      }
    });

    this.input.on('dragend', (pointer: Phaser.Input.Pointer, obj: unknown) => {
      const container = obj as Phaser.GameObjects.Container;
      const view = this.cardViews.find(cv => cv.container === container);
      if (!view) return;

      view.setDragging(false);
      this.clearSnapHighlights();

      if (this.turnPhase !== 'player') {
        this.returnCard(container, view);
        return;
      }

      const card = this.gs.hand.find(c => c.id === view.cardId);
      const isAttack = card?.cardType === 'attack';

      // ① 정확한 드롭 존 탐색 (모든 카드 유형)
      let targetIdx = -1;
      for (let i = 0; i < this.gs.enemies.length; i++) {
        const zone = this.enemyDropZones[i];
        if (zone && this.gs.enemies[i].hp > 0 &&
            Phaser.Geom.Rectangle.Contains(zone, pointer.x, pointer.y)) {
          targetIdx = i;
          break;
        }
      }

      // ② 근접 자동 스냅 — 공격 카드이고 드롭 존 미스 시
      if (targetIdx === -1 && isAttack) {
        let nearestDist = SNAP_RADIUS;
        for (let i = 0; i < this.gs.enemies.length; i++) {
          if (this.gs.enemies[i].hp <= 0) continue;
          const pos = this.enemyCenterPos[i];
          const dist = Phaser.Math.Distance.Between(pointer.x, pointer.y, pos.cx, pos.cy);
          if (dist < nearestDist) { nearestDist = dist; targetIdx = i; }
        }
      }

      const targetMonster = targetIdx >= 0 ? this.gs.enemies[targetIdx] : null;

      if (targetMonster) {
        const hpBefore = this.gs.enemies.map(e => e.hp);
        const success = this.gs.playCard(view.cardId, targetMonster);

        if (success) {
          isAttack ? sfx.playAttack() : sfx.playDefend();

          // 뷰 배열에서 즉시 제거 → 재드래그 방지
          this.cardViews = this.cardViews.filter(cv => cv !== view);
          container.disableInteractive();
          container.setDepth(3);

          // 버림 더미로 날아가는 버림 VFX
          this.tweens.add({
            targets: container,
            x: DISCARD_X, y: PILE_Y,
            scaleX: 0.3, scaleY: 0.3,
            alpha: 0,
            duration: 260,
            ease: 'Power2.In',
            onComplete: () => container.destroy(),
          });

          // 피격 이펙트 — 공격 카드는 런지 피크(onLand)에서, 나머지는 즉시
          const positions = this.getEnemyPositions(this.gs.enemies.length);
          const applyHitEffects = () => {
            let maxDmg = 0;
            this.gs.enemies.forEach((enemy, i) => {
              const dmg = hpBefore[i] - enemy.hp;
              if (dmg > 0) {
                spawnDamageNumber(this, positions[i], ENEMY_CY + 35, dmg);
                shakeObject(this, this.enemyBodies[i]);
                flashHit(this, this.enemyBodies[i], this.enemyBodyColors[i]);
                maxDmg = Math.max(maxDmg, dmg);
              }
            });
            if (maxDmg >= 10) this.cameras.main.shake(130, 0.004);
          };

          if (isAttack) {
            this.flashPlayerAttack();
            this.lungeAndReturn(this.playerSprite, 70, 0, applyHitEffects);
          } else {
            applyHitEffects();
          }

          this.updateUI();
          this.handlePostCardPlay();
        } else {
          this.returnCard(container, view);
          this.flashMessage('마나가 부족합니다!', 0xff7675);
        }
      } else {
        this.returnCard(container, view);
      }
    });
  }

  /**
   * 드래그 중인 공격 카드가 적 근접 범위(SNAP_RADIUS) 안에 있을 때
   * 가장 가까운 살아있는 적 하나에만 핑크 글로우 아웃라인을 표시한다.
   */
  private updateSnapHighlight(px: number, py: number): void {
    let nearestIdx = -1;
    let nearestDist = SNAP_RADIUS;

    for (let i = 0; i < this.gs.enemies.length; i++) {
      if (this.gs.enemies[i].hp <= 0) continue;
      const pos = this.enemyCenterPos[i];
      const dist = Phaser.Math.Distance.Between(px, py, pos.cx, pos.cy);
      if (dist < nearestDist) { nearestDist = dist; nearestIdx = i; }
    }

    if (nearestIdx === this.currentSnapTarget) return; // 변화 없으면 재드로우 생략
    this.currentSnapTarget = nearestIdx;

    this.enemyHighlights.forEach((g, i) => {
      g.clear();
      if (i !== nearestIdx) return;
      const { cx, cy, w, h } = this.enemyCenterPos[i];
      // 넓은 외부 글로우
      g.lineStyle(12, this.actTheme.targetGlow, 0.22);
      g.strokeRect(cx - w / 2 - 10, cy - h / 2 - 10, w + 20, h + 20);
      // 선명한 내부 아웃라인
      g.lineStyle(3, this.actTheme.targetGlow, 0.95);
      g.strokeRect(cx - w / 2 - 4, cy - h / 2 - 4, w + 8, h + 8);
    });
  }

  private clearSnapHighlights(): void {
    this.currentSnapTarget = -1;
    this.enemyHighlights.forEach(g => g.clear());
  }

  private returnCard(container: Phaser.GameObjects.Container, view: CardView): void {
    container.setDepth(3);
    this.tweens.add({
      targets: container,
      x: view.originX,
      y: view.originY,
      duration: 180,
      ease: 'Back.Out',
    });
  }

  private flashMessage(text: string, color: number): void {
    const hex = '#' + color.toString(16).padStart(6, '0');
    const msg = this.add.text(W / 2, 360, text, {
      fontSize: '24px', color: hex, fontStyle: 'bold',
      stroke: '#000000', strokeThickness: 4,
    }).setOrigin(0.5).setDepth(20);

    this.tweens.add({
      targets: msg,
      alpha: 0,
      y: 320,
      duration: 900,
      ease: 'Power2',
      onComplete: () => msg.destroy(),
    });
  }

  // ── 턴 시스템 ──────────────────────────────────────────────────────────────

  /** 플레이어 턴 종료 → 손패 버림 애니메이션 → 몬스터들 순차 행동 → 플레이어 턴 복귀 */
  private startMonsterTurn(): void {
    this.turnPhase = 'monster';
    this.endTurnBtn.setFillStyle(0x1A1A2A); // dim inactive — act-agnostic
    this.endTurnBtn.disableInteractive();

    const views = [...this.cardViews];
    // cardViews를 즉시 비워 renderHand()가 이 컨테이너를 다시 건드리지 않도록 함
    this.cardViews = [];

    if (views.length === 0) {
      this._finishMonsterTurnStart();
      return;
    }

    let completed = 0;
    views.forEach((cv, i) => {
      this.tweens.add({
        targets: cv.container,
        x: DISCARD_X,
        y: PILE_Y,
        scaleX: 0.35,
        scaleY: 0.35,
        alpha: 0,
        duration: 220,
        ease: 'Power2.In',
        delay: i * 40,
        onComplete: () => {
          cv.container.destroy(); // 개별 카드 애니메이션 완료 즉시 제거
          if (++completed === views.length) this._finishMonsterTurnStart();
        },
      });
    });
  }

  private _finishMonsterTurnStart(): void {
    // endPlayerTurn()을 먼저 호출해 gs.hand를 비운 뒤 renderHand()를 실행해야
    // 빈 손패가 렌더링된다 (순서가 역전되면 카드가 다시 생성됨)
    this.gs.endPlayerTurn();
    this.renderHand();
    this.clearAllIntents();
    this.updateUI();
    this.flashMessage('몬스터의 턴!', 0xe17055);
    this.time.delayedCall(700, () => this.executeNextMonsterTurn(0));
  }

  // ── 공격 모션 헬퍼 ────────────────────────────────────────────────────

  /**
   * 전진-복귀 런지 트윈.
   * sprite를 (ox+dx, oy+dy)로 빠르게 밀었다가 원래 위치로 탄성 복귀.
   * onLand: 전진 완료 즉시 호출 — 피격 이펙트 타이밍에 사용.
   */
  private lungeAndReturn(
    sprite: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle,
    dx: number,
    dy: number,
    onLand?: () => void,
  ): void {
    const ox = sprite.x, oy = sprite.y;
    this.tweens.add({
      targets: sprite,
      x: ox + dx,
      y: oy + dy,
      duration: 110,
      ease: 'Power2.Out',
      onComplete: () => {
        onLand?.();
        this.tweens.add({
          targets: sprite,
          x: ox,
          y: oy,
          duration: 190,
          ease: 'Back.Out',
        });
      },
    });
  }

  /** 플레이어 공격 모션: attack 텍스처로 전환 후 standing으로 복원 */
  private flashPlayerAttack(holdMs = 280): void {
    if (!this.playerSprite.active) return;
    this.playerSprite.setTexture('player_attack');
    this.time.delayedCall(holdMs, () => {
      if (this.playerSprite.active) this.playerSprite.setTexture('player_standing');
    });
  }

  /** 몬스터 피격 색 플래시 */
  private flashAttackSprite(
    sprite: Phaser.GameObjects.Rectangle,
    baseColor: number,
    attackColor = 0xff2233,
    holdMs = 100,
  ): void {
    sprite.setFillStyle(attackColor);
    this.time.delayedCall(holdMs, () => {
      if (sprite.active) sprite.setFillStyle(baseColor);
    });
  }

  /** idx번 몬스터부터 순차적으로 행동. 전부 끝나면 플레이어 턴 복귀. */
  private executeNextMonsterTurn(idx: number): void {
    // 이미 죽은 몬스터는 건너뜀
    while (idx < this.gs.enemies.length && this.gs.enemies[idx].hp <= 0) {
      idx++;
    }

    if (idx >= this.gs.enemies.length) {
      this.beginPlayerTurn();
      return;
    }

    const monster = this.gs.enemies[idx];
    const body = this.enemyBodies[idx];
    const playerHpBefore = this.gs.player.hp;
    const pattern = this.gs.executeMonsterTurn(idx);

    if (pattern) {
      this.flashMessage(`${monster.name}: ${pattern.name}`, 0xff7675);
    } else if (monster.hp <= 0) {
      this.flashMessage(`${monster.name}: 독으로 쓰러짐`, 0x55efc4);
    }

    const playerDmg = playerHpBefore - this.gs.player.hp;
    this.updateUI();

    if (this.gs.player.hp <= 0) {
      this.handleGameOver();
      return;
    }

    // 독으로 모든 적이 사망한 경우 승리 처리
    if (this.gs.enemies.every(e => e.hp <= 0)) {
      GameState.savePlayerState(this.gs.player.hp);
      this.handleVictory();
      return;
    }

    // 런지 + 피격 이펙트 — 런지 피크(onLand)에 플레이어 피해 팝업
    const applyPlayerHitEffects = () => {
      if (playerDmg > 0) {
        spawnDamageNumber(this, PLAYER_CX, PLAYER_CY - 30, playerDmg);
        this.cameras.main.shake(90, 0.0035);
      }
    };

    if (body?.active) {
      this.flashAttackSprite(body, this.enemyBodyColors[idx]);
      this.lungeAndReturn(body, -70, 0, applyPlayerHitEffects);
    } else {
      applyPlayerHitEffects();
    }

    this.time.delayedCall(700, () => this.executeNextMonsterTurn(idx + 1));
  }

  private beginPlayerTurn(): void {
    const poisonDmg = this.gs.startPlayerTurn();
    this.turnPhase = 'player';
    this.renderHand(true);   // 턴 시작 드로우 애니메이션
    this.updateUI();
    this.updateAllIntents();

    this.endTurnBtn.setFillStyle(this.actTheme.endTurnActive);
    this.endTurnBtn.setInteractive({ useHandCursor: true });

    if (poisonDmg > 0) {
      sfx.playPoison();
      spawnDamageNumber(this, PLAYER_CX, PLAYER_CY - 30, poisonDmg, '#55efc4');
      this.flashMessage(`독 피해 -${poisonDmg}`, 0x55efc4);
      if (this.gs.player.hp <= 0) {
        this.handleGameOver();
        return;
      }
    }
    sfx.playCardDraw();
    this.flashMessage('플레이어의 턴!', 0x00b894);
  }

  private handleGameOver(): void {
    this.time.delayedCall(1000, () => {
      this.flashMessage('게임 오버...', 0xff4444);
      this.time.delayedCall(1800, () => {
        this.cameras.main.fadeOut(400, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
          GameState.hardReset(); AchievementManager.reset();
          this.scene.start('TitleScene');
        });
      });
    });
  }

  // ── 상태 반영 ─────────────────────────────────────────────────────────────

  private updateUI(): void {
    const { player } = this.gs;

    this.txtPlayerHp.setText(`HP ${player.hp}/${player.maxHp}`);
    this.txtPlayerBlock.setText(`방어도: ${player.block}`);
    this.txtPlayerStatus.setText(this.formatStatuses(player.statuses));

    this.gs.enemies.forEach((monster, i) => {
      this.txtEnemyHp[i].setText(`HP ${monster.hp}/${monster.maxHp}`);
      this.txtEnemyBlock[i].setText(`방어도: ${monster.block}`);
      this.txtEnemyStatus[i].setText(this.formatStatuses(monster.statuses));
      if (monster.hp <= 0 && !this.enemyDeathTriggered[i]) {
        this.enemyDeathTriggered[i] = true;
        this.enemyDropZones[i] = null;
        sfx.playMonsterDeath();
        playDeathTween(this, this.enemyBodies[i]);
      }
    });

    // 마나 pip
    this.manaPips.forEach((pip, i) => {
      if (i < player.mana) {
        pip.setFillStyle(PINK);
        pip.setStrokeStyle(2, PINK_SOFT);
      } else {
        pip.setFillStyle(BG_PANEL);
        pip.setStrokeStyle(2, BORDER_DIM);
      }
    });
    this.txtMana.setText(`${player.mana}/${player.maxMana}`);

    this.txtDeckCount.setText(`${this.gs.deck.length}장`);
    this.txtDiscardCount.setText(`${this.gs.discard.length}장`);
  }

  /** 각 몬스터의 예약된 다음 행동을 의도 레이블에 표시 */
  private updateAllIntents(): void {
    this.gs.enemies.forEach((monster, i) => {
      if (monster.hp > 0 && monster.nextPattern) {
        this.txtIntentLabels[i].setText(monster.nextPattern.name);
      } else {
        this.txtIntentLabels[i].setText('');
      }
    });
  }

  private clearAllIntents(): void {
    this.txtIntentLabels.forEach(t => t.setText(''));
  }

  /**
   * 카드 사용 후 전투 상태 분기.
   * - 전체 승리 → handleVictory()
   * - 보스 페이즈 전환 감지 → 플래시 메시지 + 인텐트 갱신
   * - 단일 일반 적: HP 절반 이하 첫 도달 → mid 대화
   */
  private handlePostCardPlay(): void {
    if (this.gs.enemies.every(e => e.hp <= 0)) {
      this.cardViews.forEach(cv => cv.container.disableInteractive());
      GameState.savePlayerState(this.gs.player.hp);
      this.handleVictory();
      return;
    }

    // 보스 페이즈 전환 확인
    for (const monster of this.gs.enemies) {
      if (monster.hp > 0 && 'checkPhaseTransition' in monster) {
        const boss = monster as unknown as { checkPhaseTransition(): boolean; phaseChangeMessage: string };
        if (boss.checkPhaseTransition()) {
          sfx.playBossPhase();
          this.cameras.main.shake(300, 0.008);
          this.flashMessage(boss.phaseChangeMessage, 0xff4757);
          this.updateAllIntents();
        }
      }
    }

  }

  /**
   * 전투 승리 처리.
   * - 보스/엘리트: GameState.pendingGold 설정 후 RelicRewardScene → VictoryScene
   * - 일반: VictoryScene에 gold 직접 전달
   */
  private handleVictory(): void {
    AchievementManager.checkAfterVictory(this.gs.player.hp, this.battleMode);
    sfx.playVictory();
    this.cameras.main.fadeOut(450, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => {
      if (this.battleMode === 'boss') {
        GameState.pendingGold = Phaser.Math.Between(120, 160);
        GameState.pendingReturnScene = this.returnScene;
        this.scene.start('RelicRewardScene', {
          relics: GameState.getRandomRelics('boss', 3),
          returnScene: 'VictoryScene',
        });
      } else if (this.battleMode === 'elite') {
        GameState.pendingGold = Phaser.Math.Between(80, 110);
        GameState.pendingReturnScene = this.returnScene;
        const tier = Math.random() < 0.5 ? 'common' as const : 'rare' as const;
        this.scene.start('RelicRewardScene', {
          relics: GameState.getRandomRelics(tier, 3),
          returnScene: 'VictoryScene',
        });
      } else {
        this.scene.start('VictoryScene', { gold: Phaser.Math.Between(40, 70), returnScene: this.returnScene });
      }
    });
  }

  // ── 유틸리티 ────────────────────────────────────────────────────────────────

  /**
   * n마리의 몬스터를 화면 폭 안에 균등 배분.
   * 1마리일 때는 중앙(640), 복수일 때는 x=200~1080 구간에 고르게 배치.
   */
  private getEnemyPositions(n: number): number[] {
    if (n === 1) return [W / 2];
    const left = 200, right = 1080;
    const span = right - left;
    return Array.from({ length: n }, (_, i) => left + (span / (n - 1)) * i);
  }

  /** 덱 또는 버림 더미의 카드 목록을 그리드 오버레이로 표시. */
  private openPileViewer(cards: Card[], title: string): void {
    if (this.scene.isActive('PileViewerScene')) return;
    this.scene.launch('PileViewerScene', { cards, title });
  }

  private formatStatuses(s: StatusEffects): string {
    const parts: string[] = [];
    if (s.poison > 0)     parts.push(`독${s.poison}`);
    if (s.strength > 0)   parts.push(`힘${s.strength}`);
    if (s.vulnerable > 0) parts.push(`취약${s.vulnerable}`);
    if (s.weak > 0)       parts.push(`약화${s.weak}`);
    return parts.join(' ');
  }
}
