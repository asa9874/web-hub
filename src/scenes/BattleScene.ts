import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { Card, TurnPhase } from '../types';

/** 카드 게임 오브젝트와 상태 데이터를 연결하는 뷰 구조체 */
interface CardView {
  cardId: string;
  container: Phaser.GameObjects.Container;
  originX: number;
  originY: number;
}

/**
 * 전투 씬 — 렌더링과 입력 이벤트 처리만 담당.
 * 비즈니스 로직(피해 계산, 마나 소비, 덱 관리)은 모두 GameState에 위임.
 */
export class BattleScene extends Phaser.Scene {
  private gs!: GameState;

  private midBattleTriggered = false;
  private turnPhase: TurnPhase = 'player';

  // ── 플레이어·적 UI 텍스트 ──────────────────────────────────────────────
  private txtPlayerHp!: Phaser.GameObjects.Text;
  private txtPlayerBlock!: Phaser.GameObjects.Text;
  private txtEnemyHp!: Phaser.GameObjects.Text;
  private txtEnemyBlock!: Phaser.GameObjects.Text;

  // ── 패 영역 UI (마나·덱·버림 더미) ────────────────────────────────────
  private manaPips!: Phaser.GameObjects.Arc[];   // 마나 pip 동그라미 목록
  private txtMana!: Phaser.GameObjects.Text;     // "X/Y" 수치 텍스트
  private txtDeckCount!: Phaser.GameObjects.Text;
  private txtDiscardCount!: Phaser.GameObjects.Text;

  // ── 몬스터 의도 패널 ──────────────────────────────────────────────────
  private txtIntentName!: Phaser.GameObjects.Text;
  private txtIntentDesc!: Phaser.GameObjects.Text;

  // ── 턴 종료 버튼 (몬스터 턴 중 비활성화) ─────────────────────────────
  private endTurnBtn!: Phaser.GameObjects.Rectangle;

  // ── 드래그 시스템 ────────────────────────────────────────────────────
  private enemyDropZone!: Phaser.Geom.Rectangle;
  private cardViews: CardView[] = [];

  constructor() {
    super({ key: 'BattleScene' });
  }

  create(): void {
    this.midBattleTriggered = false;
    this.turnPhase = 'player';
    GameState.reset();
    this.gs = GameState.instance;

    this.cameras.main.fadeIn(350, 0, 0, 0);

    this.renderBackground();
    this.renderEnemy();
    this.renderPlayer();
    this.renderPileUI();   // 마나·덱·버림 더미 패널
    this.renderHand();
    this.renderEndTurnButton();
    this.renderBackButton();
    this.setupDragDrop();
    this.updateMonsterIntent();
    this.updateUI();
  }

  // ── 렌더링 메서드 ──────────────────────────────────────────────────────

  private renderBackground(): void {
    this.add.rectangle(400, 300, 800, 600, 0x1a1a2e);
    this.add.rectangle(400, 460, 800, 2, 0x2d3561);
  }

  private renderEnemy(): void {
    const { enemy } = this.gs;
    const cx = 400, cy = 180;

    const body = this.add.rectangle(cx, cy, 110, 130, 0x6a0dad);
    body.setStrokeStyle(2, 0xe17055);

    this.add.text(cx, cy - 88, enemy.name, {
      fontSize: '18px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.txtEnemyHp = this.add.text(cx, cy + 82, `HP ${enemy.hp} / ${enemy.maxHp}`, {
      fontSize: '12px', color: '#ff7675',
    }).setOrigin(0.5);

    this.txtEnemyBlock = this.add.text(cx, cy + 99, `방어도: ${enemy.block}`, {
      fontSize: '12px', color: '#74b9ff',
    }).setOrigin(0.5);

    this.enemyDropZone = new Phaser.Geom.Rectangle(cx - 55, cy - 65, 110, 130);

    // ── 몬스터 의도 패널 (화면 우측 빈 공간) ──
    const ix = 650;
    this.add.rectangle(ix, 190, 175, 95, 0x141e2d).setStrokeStyle(1, 0x2d4060);
    this.add.text(ix, 155, '다음 행동', {
      fontSize: '11px', color: '#556688',
    }).setOrigin(0.5);

    this.txtIntentName = this.add.text(ix, 180, '', {
      fontSize: '14px', color: '#fdcb6e', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.txtIntentDesc = this.add.text(ix, 205, '', {
      fontSize: '12px', color: '#a0b0c0',
      wordWrap: { width: 160 }, align: 'center',
    }).setOrigin(0.5);
  }

  private renderPlayer(): void {
    const { player } = this.gs;
    const cx = 110, cy = 385;

    const body = this.add.rectangle(cx, cy, 90, 110, 0x0984e3);
    body.setStrokeStyle(2, 0x00cec9);

    this.add.text(cx, cy - 72, player.name, {
      fontSize: '16px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.txtPlayerHp = this.add.text(cx, cy + 62, `HP ${player.hp} / ${player.maxHp}`, {
      fontSize: '12px', color: '#ff7675',
    }).setOrigin(0.5);

    this.txtPlayerBlock = this.add.text(cx, cy + 78, `방어도: ${player.block}`, {
      fontSize: '12px', color: '#74b9ff',
    }).setOrigin(0.5);
    // 마나는 하단 패 영역 renderPileUI()에서 pip + 수치로 표시
  }

  /**
   * 패 영역(y>460) 상단 우측에 마나 pip을 그리고,
   * 좌우 끝에 덱·버림 더미 아이콘을 그림.
   *
   * 레이아웃 (y=460 구분선 아래):
   *   left  x≈50  : 덱 아이콘 + 장수
   *   right x≈750 : 버림 더미 아이콘 + 장수
   *   top-right x≈600–710, y≈476 : 마나 pip + "X/Y"
   */
  private renderPileUI(): void {
    const { player } = this.gs;

    // ── 덱 (좌측) ────────────────────────────────────────────────────────
    this.add.text(50, 478, '덱', {
      fontSize: '11px', color: '#5888a8',
    }).setOrigin(0.5);
    // 뒤쪽 카드 (Stack 효과)
    this.add.rectangle(53, 527, 38, 52, 0x1e2535).setStrokeStyle(1, 0x2d4060);
    // 앞쪽 카드
    this.add.rectangle(50, 530, 38, 52, 0x2a3548).setStrokeStyle(1.5, 0x4080b0);
    this.txtDeckCount = this.add.text(50, 562, `${this.gs.deck.length}장`, {
      fontSize: '12px', color: '#90a0b0',
    }).setOrigin(0.5);

    // ── 버림 더미 (우측) ─────────────────────────────────────────────────
    this.add.text(750, 478, '버림', {
      fontSize: '11px', color: '#a86050',
    }).setOrigin(0.5);
    this.add.rectangle(753, 527, 38, 52, 0x1e2535).setStrokeStyle(1, 0x2d4060);
    this.add.rectangle(750, 530, 38, 52, 0x3d2a2a).setStrokeStyle(1.5, 0xb06040);
    this.txtDiscardCount = this.add.text(750, 562, `${this.gs.discard.length}장`, {
      fontSize: '12px', color: '#90a0b0',
    }).setOrigin(0.5);

    // ── 마나 pip (패 영역 우측 상단) ─────────────────────────────────────
    this.add.text(596, 476, '마나', {
      fontSize: '11px', color: '#6060a0',
    }).setOrigin(0.5);

    // maxMana 개수만큼 동그라미 생성 (active = 파랑, spent = 어두운 회색)
    this.manaPips = [];
    const pipStartX = 622;
    const pipSpacing = 22;
    for (let i = 0; i < player.maxMana; i++) {
      const pip = this.add.circle(pipStartX + i * pipSpacing, 476, 9, 0x0984e3);
      pip.setStrokeStyle(1.5, 0x74b9ff);
      this.manaPips.push(pip);
    }

    // "X/Y" 수치 텍스트 (pip 오른쪽)
    this.txtMana = this.add.text(
      pipStartX + player.maxMana * pipSpacing + 4,
      476,
      `${player.mana}/${player.maxMana}`,
      { fontSize: '12px', color: '#8080c0' },
    ).setOrigin(0, 0.5);
  }

  /** 현재 패를 화면 하단 중앙에 균등 간격으로 렌더링 */
  private renderHand(): void {
    this.cardViews.forEach(cv => cv.container.destroy());
    this.cardViews = [];

    const { hand } = this.gs;
    if (hand.length === 0) return;

    const CARD_W = 100;
    const CARD_H = 138;
    const GAP = 114;
    const startX = 400 - ((hand.length - 1) * GAP) / 2;
    const cardY = 530;

    hand.forEach((card, i) => {
      const x = startX + i * GAP;
      const view = this.createCardView(card, x, cardY, CARD_W, CARD_H);
      this.cardViews.push(view);
    });
  }

  /** 카드 한 장의 컨테이너를 생성하고 드래그 가능으로 등록 */
  private createCardView(card: Card, x: number, y: number, w: number, h: number): CardView {
    const container = this.add.container(x, y);

    const bg = this.add.rectangle(0, 0, w, h, 0x2d3436);
    bg.setStrokeStyle(2, 0xb2bec3);

    const badge = this.add.circle(-w / 2 + 14, -h / 2 + 14, 12, 0x6c5ce7);
    const costText = this.add.text(-w / 2 + 14, -h / 2 + 14, String(card.cost), {
      fontSize: '13px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    const nameText = this.add.text(0, -h / 2 + 30, card.name, {
      fontSize: '14px', color: '#dfe6e9', fontStyle: 'bold',
      wordWrap: { width: w - 20 }, align: 'center',
    }).setOrigin(0.5);

    const divider = this.add.rectangle(0, -h / 2 + 44, w - 20, 1, 0x636e72);

    const descText = this.add.text(0, 14, card.description, {
      fontSize: '12px', color: '#b2bec3',
      wordWrap: { width: w - 16 }, align: 'center',
    }).setOrigin(0.5);

    container.add([bg, badge, costText, nameText, divider, descText]);
    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });
    this.input.setDraggable(container);
    container.setDepth(1);

    return { cardId: card.id, container, originX: x, originY: y };
  }

  /**
   * 턴 종료 버튼 — 패 영역(y>460) 위쪽 우측 모서리에 배치.
   * 몬스터 턴 중에는 회색으로 비활성화됨.
   */
  private renderEndTurnButton(): void {
    const bx = 730, by = 428; // 구분선(y=460) 위, 우측

    this.endTurnBtn = this.add.rectangle(bx, by, 128, 44, 0x27ae60);
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
    const btn = this.add.rectangle(44, 24, 76, 30, 0x2d3436);
    btn.setStrokeStyle(1, 0x636e72);
    btn.setInteractive({ useHandCursor: true });

    this.add.text(44, 24, '◀ 뒤로', {
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

  // ── 드래그 앤 드롭 ──────────────────────────────────────────────────────

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

      // 몬스터 턴 중에는 카드 사용 불가 — 원위치 복귀
      if (this.turnPhase !== 'player') {
        this.returnCard(container, view);
        return;
      }

      if (Phaser.Geom.Rectangle.Contains(this.enemyDropZone, pointer.x, pointer.y)) {
        const success = this.gs.playCard(view.cardId, this.gs.enemy);

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
    const msg = this.add.text(400, 310, text, {
      fontSize: '22px', color: hex, fontStyle: 'bold',
      stroke: '#000000', strokeThickness: 4,
    }).setOrigin(0.5).setDepth(20);

    this.tweens.add({
      targets: msg,
      alpha: 0,
      y: 270,
      duration: 900,
      ease: 'Power2',
      onComplete: () => msg.destroy(),
    });
  }

  // ── 턴 시스템 ────────────────────────────────────────────────────────────

  /**
   * 플레이어 턴 종료 → 몬스터 행동 → 플레이어 턴 복귀 흐름을 관리.
   * 손패는 턴 종료 시 버림 더미로, 턴 시작 시 덱에서 새로 드로우.
   */
  private startMonsterTurn(): void {
    this.turnPhase = 'monster';

    // 버튼 비활성화 + 손패 비주얼 제거
    this.endTurnBtn.setFillStyle(0x4a4a4a);
    this.endTurnBtn.disableInteractive();
    this.renderHand(); // 남은 카드 컨테이너 destroy

    this.gs.endPlayerTurn(); // hand → discard 배열 이동

    // 의도 표시 숨김 (몬스터 행동 중에는 표시 불필요)
    this.txtIntentName.setText('');
    this.txtIntentDesc.setText('');

    this.updateUI(); // 버림 더미 카운트 즉시 반영
    this.flashMessage('몬스터의 턴!', 0xe17055);

    // 잠시 후 몬스터 행동 실행
    this.time.delayedCall(900, () => {
      const pattern = this.gs.executeMonsterTurn();
      this.updateUI();
      this.flashMessage(`${this.gs.enemy.name}: ${pattern.name}`, 0xff7675);

      // 플레이어 사망 체크
      if (this.gs.player.hp <= 0) {
        this.time.delayedCall(1000, () => {
          this.flashMessage('게임 오버...', 0xff4444);
          this.time.delayedCall(1800, () => {
            this.cameras.main.fadeOut(400, 0, 0, 0);
            this.cameras.main.once('camerafadeoutcomplete', () => {
              this.scene.start('HubScene');
            });
          });
        });
        return;
      }

      // 몬스터 행동 후 잠시 대기 → 플레이어 턴 복귀
      this.time.delayedCall(1400, () => {
        this.gs.startPlayerTurn();  // 마나 회복 + drawCards(3)
        this.turnPhase = 'player';
        this.renderHand();          // 새 손패 비주얼 생성 (interactive 자동 등록)
        this.updateUI();
        this.updateMonsterIntent();

        this.endTurnBtn.setFillStyle(0x27ae60);
        this.endTurnBtn.setInteractive({ useHandCursor: true });

        this.flashMessage('플레이어의 턴!', 0x00b894);
      });
    });
  }

  // ── 상태 반영 ────────────────────────────────────────────────────────────

  /** GameState 최신 값을 읽어 모든 UI 요소를 갱신 */
  private updateUI(): void {
    const { player, enemy } = this.gs;

    // 플레이어·적 스탯
    this.txtPlayerHp.setText(`HP ${player.hp} / ${player.maxHp}`);
    this.txtPlayerBlock.setText(`방어도: ${player.block}`);
    this.txtEnemyHp.setText(`HP ${enemy.hp} / ${enemy.maxHp}`);
    this.txtEnemyBlock.setText(`방어도: ${enemy.block}`);

    // 마나 pip: active(파랑) / spent(어두운 회색)
    this.manaPips.forEach((pip, i) => {
      if (i < player.mana) {
        pip.setFillStyle(0x0984e3);
        pip.setStrokeStyle(1.5, 0x74b9ff);
      } else {
        pip.setFillStyle(0x1e2535);
        pip.setStrokeStyle(1.5, 0x3a4860);
      }
    });
    this.txtMana.setText(`${player.mana}/${player.maxMana}`);

    // 더미 카운트
    this.txtDeckCount.setText(`${this.gs.deck.length}장`);
    this.txtDiscardCount.setText(`${this.gs.discard.length}장`);
  }

  /** 몬스터의 예약된 다음 행동을 의도 패널에 반영 */
  private updateMonsterIntent(): void {
    const intent = this.gs.monsterIntent;
    if (intent) {
      this.txtIntentName.setText(intent.name);
      this.txtIntentDesc.setText(intent.description);
    } else {
      this.txtIntentName.setText('');
      this.txtIntentDesc.setText('');
    }
  }

  /**
   * 카드 사용 후 전투 상태 분기.
   * 우선순위: 적 사망(승리) > HP 절반 중간 대화 > 계속 진행.
   */
  private handlePostCardPlay(): void {
    const { enemy } = this.gs;

    if (enemy.hp <= 0) {
      this.cardViews.forEach(cv => cv.container.disableInteractive());
      this.scene.pause();
      this.scene.launch('DialogueScene', {
        scriptId: 'battle_victory',
        returnScene: 'HubScene',
      });
      return;
    }

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
