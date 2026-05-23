import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { BattleMode, Card, TurnPhase } from '../types';
import type { Monster } from '../monsters/Monster';

// ── 레이아웃 상수 (1280×720) ────────────────────────────────────────────────
const W = 1280;
const ENEMY_CY = 185;        // 몬스터 스프라이트 중심 y
const PLAYER_CX = 90;        // 플레이어 스프라이트 중심 x
const PLAYER_CY = 400;       // 플레이어 스프라이트 중심 y
const DIVIDER_Y = 492;       // 패 영역 구분선 y
const PILE_Y = 615;          // 덱·버림·카드 중심 y
const PILE_MANA_Y = 515;     // 마나 pip 및 턴종료 버튼 y

interface CardView {
  cardId: string;
  container: Phaser.GameObjects.Container;
  originX: number;
  originY: number;
}

/**
 * 전투 씬 — 렌더링·입력만 담당. 모든 수치 로직은 GameState에 위임.
 * 1280×720 (16:9), 최대 5몬스터 동시 전투 지원.
 */
export class BattleScene extends Phaser.Scene {
  private gs!: GameState;
  private battleMode: BattleMode = 'default';
  private midBattleTriggered = false;
  private turnPhase: TurnPhase = 'player';

  // ── 플레이어 UI ────────────────────────────────────────────────────────
  private txtPlayerHp!: Phaser.GameObjects.Text;
  private txtPlayerBlock!: Phaser.GameObjects.Text;

  // ── 몬스터 UI 배열 (인덱스 = enemies 배열 순서) ──────────────────────
  private enemyBodies: Phaser.GameObjects.Rectangle[] = [];
  private txtEnemyHp: Phaser.GameObjects.Text[] = [];
  private txtEnemyBlock: Phaser.GameObjects.Text[] = [];
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

  constructor() {
    super({ key: 'BattleScene' });
  }

  init(data: { mode?: string }): void {
    this.battleMode = data?.mode === 'five_monsters' ? 'five_monsters' : 'default';
  }

  create(): void {
    this.midBattleTriggered = false;
    this.turnPhase = 'player';
    GameState.reset(this.battleMode);
    this.gs = GameState.instance;

    this.cameras.main.fadeIn(350, 0, 0, 0);

    this.renderBackground();
    this.renderEnemies();
    this.renderPlayer();
    this.renderPileUI();
    this.renderHand();
    this.renderEndTurnButton();
    this.renderBackButton();
    this.setupDragDrop();
    this.updateAllIntents();
    this.updateUI();
  }

  // ── 렌더링 ────────────────────────────────────────────────────────────────

  private renderBackground(): void {
    this.add.rectangle(W / 2, 360, W, 720, 0x1a1a2e);
    this.add.rectangle(W / 2, DIVIDER_Y, W, 2, 0x2d3561);
  }

  /** 전투 모드에 맞게 몬스터 슬롯을 동적으로 생성 */
  private renderEnemies(): void {
    this.enemyBodies = [];
    this.txtEnemyHp = [];
    this.txtEnemyBlock = [];
    this.txtIntentLabels = [];
    this.enemyDropZones = [];

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
      const color = MONSTER_COLORS[i] ?? 0x6a0dad;

      // 스프라이트
      const body = this.add.rectangle(cx, cy, 70, 80, color);
      body.setStrokeStyle(2, 0xe17055);
      this.enemyBodies.push(body);

      // 이름
      this.add.text(cx, cy - 57, monster.name, {
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

      // 의도 표시 (다음 행동)
      this.add.text(cx, cy + 79, '다음 행동', {
        fontSize: '10px', color: '#556688',
      }).setOrigin(0.5);

      const intentTxt = this.add.text(cx, cy + 93, '', {
        fontSize: '12px', color: '#fdcb6e', fontStyle: 'bold',
        wordWrap: { width: 130 }, align: 'center',
      }).setOrigin(0.5);
      this.txtIntentLabels.push(intentTxt);

      // 드롭 존
      this.enemyDropZones.push(
        new Phaser.Geom.Rectangle(cx - 35, cy - 40, 70, 80),
      );
    });
  }

  private renderPlayer(): void {
    const { player } = this.gs;
    const cx = PLAYER_CX, cy = PLAYER_CY;

    this.add.rectangle(cx, cy, 80, 100, 0x0984e3).setStrokeStyle(2, 0x00cec9);
    this.add.text(cx, cy - 68, player.name, {
      fontSize: '15px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.txtPlayerHp = this.add.text(cx, cy + 62, `HP ${player.hp}/${player.maxHp}`, {
      fontSize: '12px', color: '#ff7675',
    }).setOrigin(0.5);

    this.txtPlayerBlock = this.add.text(cx, cy + 78, `방어도: ${player.block}`, {
      fontSize: '12px', color: '#74b9ff',
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
    }).setOrigin(0.5);
    this.add.rectangle(68, PY - 3, 40, 54, 0x1e2535).setStrokeStyle(1, 0x2d4060);
    const deckRect = this.add.rectangle(65, PY, 40, 54, 0x2a3548);
    deckRect.setStrokeStyle(1.5, 0x4080b0);
    deckRect.setInteractive({ useHandCursor: true });
    deckRect.on('pointerover', () => deckRect.setStrokeStyle(2, 0x74b9ff));
    deckRect.on('pointerout',  () => deckRect.setStrokeStyle(1.5, 0x4080b0));
    deckRect.on('pointerdown', () => this.openPileViewer(
      [...this.gs.deck],
      `덱 (${this.gs.deck.length}장)`,
    ));
    this.txtDeckCount = this.add.text(65, PY + 36, `${this.gs.deck.length}장`, {
      fontSize: '12px', color: '#90a0b0',
    }).setOrigin(0.5);

    // ── 버림 더미 (우측) — 클릭 시 내용 보기 ──────────────────────────
    this.add.text(1215, PY - 40, '버림', {
      fontSize: '11px', color: '#a86050',
    }).setOrigin(0.5);
    this.add.rectangle(1218, PY - 3, 40, 54, 0x1e2535).setStrokeStyle(1, 0x2d4060);
    const discardRect = this.add.rectangle(1215, PY, 40, 54, 0x3d2a2a);
    discardRect.setStrokeStyle(1.5, 0xb06040);
    discardRect.setInteractive({ useHandCursor: true });
    discardRect.on('pointerover', () => discardRect.setStrokeStyle(2, 0xff9f7f));
    discardRect.on('pointerout',  () => discardRect.setStrokeStyle(1.5, 0xb06040));
    discardRect.on('pointerdown', () => this.openPileViewer(
      [...this.gs.discard],
      `버림 더미 (${this.gs.discard.length}장)`,
    ));
    this.txtDiscardCount = this.add.text(1215, PY + 36, `${this.gs.discard.length}장`, {
      fontSize: '12px', color: '#90a0b0',
    }).setOrigin(0.5);

    // ── 마나 pip (패 영역 우측 상단) ────────────────────────────────────
    this.add.text(890, PILE_MANA_Y, '마나', {
      fontSize: '11px', color: '#6060a0',
    }).setOrigin(0.5);

    this.manaPips = [];
    const pipStartX = 916;
    const pipSpacing = 24;
    for (let i = 0; i < player.maxMana; i++) {
      const pip = this.add.circle(pipStartX + i * pipSpacing, PILE_MANA_Y, 10, 0x0984e3);
      pip.setStrokeStyle(2, 0x74b9ff);
      this.manaPips.push(pip);
    }
    this.txtMana = this.add.text(
      pipStartX + player.maxMana * pipSpacing + 6,
      PILE_MANA_Y,
      `${player.mana}/${player.maxMana}`,
      { fontSize: '13px', color: '#8080c0' },
    ).setOrigin(0, 0.5);
  }

  /** 현재 손패를 화면 하단 중앙에 균등 배치 */
  private renderHand(): void {
    this.cardViews.forEach(cv => cv.container.destroy());
    this.cardViews = [];

    const { hand } = this.gs;
    if (hand.length === 0) return;

    const CARD_W = 100, CARD_H = 138, GAP = 120;
    const startX = W / 2 - ((hand.length - 1) * GAP) / 2;

    hand.forEach((card, i) => {
      const view = this.createCardView(card, startX + i * GAP, PILE_Y, CARD_W, CARD_H);
      this.cardViews.push(view);
    });
  }

  private createCardView(card: Card, x: number, y: number, w: number, h: number): CardView {
    const container = this.add.container(x, y);

    const bg = this.add.rectangle(0, 0, w, h, 0x2d3436);
    bg.setStrokeStyle(2, card.targetType === 'all' ? 0xe17055 : 0xb2bec3);

    const badge = this.add.circle(-w / 2 + 14, -h / 2 + 14, 12, 0x6c5ce7);
    const costText = this.add.text(-w / 2 + 14, -h / 2 + 14, String(card.cost), {
      fontSize: '13px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    const nameText = this.add.text(0, -h / 2 + 30, card.name, {
      fontSize: '13px', color: '#dfe6e9', fontStyle: 'bold',
      wordWrap: { width: w - 20 }, align: 'center',
    }).setOrigin(0.5);

    const divider = this.add.rectangle(0, -h / 2 + 44, w - 20, 1, 0x636e72);

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
    container.setDepth(1);

    return { cardId: card.id, container, originX: x, originY: y };
  }

  /**
   * 턴 종료 버튼 — 구분선 위 우측.
   * 몬스터 턴에는 회색으로 비활성화.
   */
  private renderEndTurnButton(): void {
    const bx = 1155, by = PILE_MANA_Y;

    this.endTurnBtn = this.add.rectangle(bx, by, 140, 46, 0x27ae60);
    this.endTurnBtn.setStrokeStyle(2, 0x2ecc71);
    this.endTurnBtn.setInteractive({ useHandCursor: true });

    this.add.text(bx, by, '턴 종료', {
      fontSize: '16px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.endTurnBtn.on('pointerover', () => {
      if (this.turnPhase === 'player') this.endTurnBtn.setFillStyle(0x2ecc71);
    });
    this.endTurnBtn.on('pointerout', () => {
      if (this.turnPhase === 'player') this.endTurnBtn.setFillStyle(0x27ae60);
    });
    this.endTurnBtn.on('pointerdown', () => {
      if (this.turnPhase !== 'player') return;
      this.startMonsterTurn();
    });
  }

  private renderBackButton(): void {
    const btn = this.add.rectangle(50, 24, 80, 30, 0x2d3436);
    btn.setStrokeStyle(1, 0x636e72);
    btn.setInteractive({ useHandCursor: true });

    this.add.text(50, 24, '◀ 뒤로', {
      fontSize: '13px', color: '#b2bec3',
    }).setOrigin(0.5);

    btn.on('pointerover', () => btn.setFillStyle(0x3d4451));
    btn.on('pointerout', () => btn.setFillStyle(0x2d3436));
    btn.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start('HubScene');
      });
    });
  }

  // ── 드래그 앤 드롭 ─────────────────────────────────────────────────────────

  private setupDragDrop(): void {
    this.input.on('dragstart', (_p: unknown, obj: unknown) => {
      (obj as Phaser.GameObjects.Container).setDepth(10);
    });

    this.input.on('drag', (_p: unknown, obj: unknown, dragX: number, dragY: number) => {
      (obj as Phaser.GameObjects.Container).setPosition(dragX, dragY);
    });

    this.input.on('dragend', (pointer: Phaser.Input.Pointer, obj: unknown) => {
      const container = obj as Phaser.GameObjects.Container;
      const view = this.cardViews.find(cv => cv.container === container);
      if (!view) return;

      if (this.turnPhase !== 'player') {
        this.returnCard(container, view);
        return;
      }

      // 어느 몬스터 드롭 존에 올려놨는지 탐색
      let targetMonster: Monster | null = null;
      for (let i = 0; i < this.gs.enemies.length; i++) {
        const zone = this.enemyDropZones[i];
        if (zone && this.gs.enemies[i].hp > 0 &&
            Phaser.Geom.Rectangle.Contains(zone, pointer.x, pointer.y)) {
          targetMonster = this.gs.enemies[i];
          break;
        }
      }

      if (targetMonster) {
        const success = this.gs.playCard(view.cardId, targetMonster);
        if (success) {
          container.destroy();
          this.cardViews = this.cardViews.filter(cv => cv !== view);
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

  private returnCard(container: Phaser.GameObjects.Container, view: CardView): void {
    this.tweens.add({
      targets: container,
      x: view.originX,
      y: view.originY,
      duration: 180,
      ease: 'Back.Out',
    });
    container.setDepth(1);
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

  /** 플레이어 턴 종료 → 몬스터들 순차 행동 → 플레이어 턴 복귀 */
  private startMonsterTurn(): void {
    this.turnPhase = 'monster';
    this.endTurnBtn.setFillStyle(0x4a4a4a);
    this.endTurnBtn.disableInteractive();

    // 손패 비주얼 제거 + 배열 이동
    this.renderHand();
    this.gs.endPlayerTurn();
    this.clearAllIntents();
    this.updateUI();
    this.flashMessage('몬스터의 턴!', 0xe17055);

    this.time.delayedCall(700, () => this.executeNextMonsterTurn(0));
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
    const pattern = this.gs.executeMonsterTurn(idx);

    if (pattern) {
      this.flashMessage(`${monster.name}: ${pattern.name}`, 0xff7675);
      this.updateUI();

      if (this.gs.player.hp <= 0) {
        this.handleGameOver();
        return;
      }
    }

    this.time.delayedCall(700, () => this.executeNextMonsterTurn(idx + 1));
  }

  private beginPlayerTurn(): void {
    this.gs.startPlayerTurn();
    this.turnPhase = 'player';
    this.renderHand();
    this.updateUI();
    this.updateAllIntents();

    this.endTurnBtn.setFillStyle(0x27ae60);
    this.endTurnBtn.setInteractive({ useHandCursor: true });
    this.flashMessage('플레이어의 턴!', 0x00b894);
  }

  private handleGameOver(): void {
    this.time.delayedCall(1000, () => {
      this.flashMessage('게임 오버...', 0xff4444);
      this.time.delayedCall(1800, () => {
        this.cameras.main.fadeOut(400, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
          GameState.hardReset();
          this.scene.start('HubScene');
        });
      });
    });
  }

  // ── 상태 반영 ─────────────────────────────────────────────────────────────

  private updateUI(): void {
    const { player } = this.gs;

    this.txtPlayerHp.setText(`HP ${player.hp}/${player.maxHp}`);
    this.txtPlayerBlock.setText(`방어도: ${player.block}`);

    this.gs.enemies.forEach((monster, i) => {
      this.txtEnemyHp[i].setText(`HP ${monster.hp}/${monster.maxHp}`);
      this.txtEnemyBlock[i].setText(`방어도: ${monster.block}`);
      if (monster.hp <= 0 && this.enemyBodies[i].alpha > 0.5) {
        this.enemyBodies[i].setFillStyle(0x3a3a3a);
        this.enemyBodies[i].setAlpha(0.35);
        // 드롭 존 무효화 (죽은 적에게 카드 사용 불가)
        this.enemyDropZones[i] = null;
      }
    });

    // 마나 pip
    this.manaPips.forEach((pip, i) => {
      if (i < player.mana) {
        pip.setFillStyle(0x0984e3);
        pip.setStrokeStyle(2, 0x74b9ff);
      } else {
        pip.setFillStyle(0x1e2535);
        pip.setStrokeStyle(2, 0x3a4860);
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
   * - 전체 승리: 모든 적 HP ≤ 0 → VictoryScene
   * - 단일 전투 중간 이벤트: 적 HP 절반 이하 첫 도달 → mid 대화
   */
  private handlePostCardPlay(): void {
    if (this.gs.enemies.every(e => e.hp <= 0)) {
      this.cardViews.forEach(cv => cv.container.disableInteractive());
      const gold = Phaser.Math.Between(40, 70);
      this.cameras.main.fadeOut(450, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start('VictoryScene', { gold });
      });
      return;
    }

    // 단일 적 전투에서만 중간 대화 트리거
    if (this.gs.enemies.length === 1) {
      const enemy = this.gs.enemies[0];
      if (!this.midBattleTriggered && enemy.hp <= enemy.maxHp / 2) {
        this.midBattleTriggered = true;
        this.scene.pause();
        this.scene.launch('DialogueScene', {
          scriptId: 'battle_mid',
          returnScene: 'BattleScene',
          resumeScene: 'BattleScene',
        });
      }
    }
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
}
