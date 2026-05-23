import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { Card } from '../types';

/** 카드 게임 오브젝트와 상태 데이터를 연결하는 뷰 구조체 */
interface CardView {
  cardId: string;
  container: Phaser.GameObjects.Container;
  originX: number;
  originY: number;
}

/**
 * 전투 씬 — 렌더링과 입력 이벤트 처리만 담당.
 * 비즈니스 로직(피해 계산, 마나 소비 등)은 모두 GameState에 위임.
 */
export class BattleScene extends Phaser.Scene {
  private gs!: GameState;

  // 중간 대화 씬 트리거 여부 (전투당 최초 1회만 발동)
  private midBattleTriggered = false;

  // UI 텍스트 참조 — updateUI()에서 갱신
  private txtPlayerHp!: Phaser.GameObjects.Text;
  private txtPlayerBlock!: Phaser.GameObjects.Text;
  private txtPlayerMana!: Phaser.GameObjects.Text;
  private txtEnemyHp!: Phaser.GameObjects.Text;
  private txtEnemyBlock!: Phaser.GameObjects.Text;

  // 카드를 드롭해야 하는 적 충돌 영역
  private enemyDropZone!: Phaser.Geom.Rectangle;

  // 화면에 표시 중인 카드 뷰 목록
  private cardViews: CardView[] = [];

  constructor() {
    super({ key: 'BattleScene' });
  }

  create(): void {
    // 씬 재진입 시에도 항상 새 게임으로 시작
    this.midBattleTriggered = false;
    GameState.reset();
    this.gs = GameState.instance;

    this.cameras.main.fadeIn(350, 0, 0, 0);

    this.renderBackground();
    this.renderEnemy();
    this.renderPlayer();
    this.renderHand();
    this.renderEndTurnButton();
    this.renderBackButton();
    this.setupDragDrop();
  }

  // ── 렌더링 메서드 ──────────────────────────────────────────────────────

  private renderBackground(): void {
    // 배경 패널
    this.add.rectangle(400, 300, 800, 600, 0x1a1a2e);
    // 패 영역 구분선
    this.add.rectangle(400, 460, 800, 2, 0x2d3561);
  }

  private renderEnemy(): void {
    const { enemy } = this.gs;
    const cx = 400, cy = 180;

    // 적 몸통
    const body = this.add.rectangle(cx, cy, 110, 130, 0x6a0dad);
    body.setStrokeStyle(2, 0xe17055);

    // 적 이름
    this.add.text(cx, cy - 88, enemy.name, {
      fontSize: '18px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    // 적 HP 텍스트
    this.txtEnemyHp = this.add.text(cx, cy + 82, `HP ${enemy.hp} / ${enemy.maxHp}`, {
      fontSize: '12px', color: '#ff7675',
    }).setOrigin(0.5);

    // 적 방어도 텍스트
    this.txtEnemyBlock = this.add.text(cx, cy + 99, `방어도: ${enemy.block}`, {
      fontSize: '12px', color: '#74b9ff',
    }).setOrigin(0.5);

    // 드롭 감지 영역 — 몸통 직사각형과 동일한 크기로 설정
    this.enemyDropZone = new Phaser.Geom.Rectangle(cx - 55, cy - 65, 110, 130);
  }

  private renderPlayer(): void {
    const { player } = this.gs;
    const cx = 110, cy = 385;

    // 플레이어 몸통
    const body = this.add.rectangle(cx, cy, 90, 110, 0x0984e3);
    body.setStrokeStyle(2, 0x00cec9);

    // 플레이어 이름
    this.add.text(cx, cy - 72, player.name, {
      fontSize: '16px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    // HP 텍스트
    this.txtPlayerHp = this.add.text(cx, cy + 62, `HP ${player.hp} / ${player.maxHp}`, {
      fontSize: '12px', color: '#ff7675',
    }).setOrigin(0.5);

    // 방어도 텍스트
    this.txtPlayerBlock = this.add.text(cx, cy + 78, `방어도: ${player.block}`, {
      fontSize: '12px', color: '#74b9ff',
    }).setOrigin(0.5);

    // 마나 텍스트
    this.txtPlayerMana = this.add.text(cx, cy + 94, `마나: ${player.mana} / ${player.maxMana}`, {
      fontSize: '12px', color: '#a29bfe',
    }).setOrigin(0.5);
  }

  /** 현재 패를 화면 하단에 균등 간격으로 렌더링 */
  private renderHand(): void {
    // 이전 카드 비주얼 전부 정리
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

  /** 카드 한 장의 컨테이너(배경 + 텍스트)를 생성하고 드래그 가능으로 등록 */
  private createCardView(card: Card, x: number, y: number, w: number, h: number): CardView {
    const container = this.add.container(x, y);

    // 카드 배경 직사각형
    const bg = this.add.rectangle(0, 0, w, h, 0x2d3436);
    bg.setStrokeStyle(2, 0xb2bec3);

    // 마나 비용 배지 (좌상단 원)
    const badge = this.add.circle(-w / 2 + 14, -h / 2 + 14, 12, 0x6c5ce7);
    const costText = this.add.text(-w / 2 + 14, -h / 2 + 14, String(card.cost), {
      fontSize: '13px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    // 카드 이름 (상단)
    const nameText = this.add.text(0, -h / 2 + 30, card.name, {
      fontSize: '14px', color: '#dfe6e9', fontStyle: 'bold',
      wordWrap: { width: w - 20 }, align: 'center',
    }).setOrigin(0.5);

    // 구분선
    const divider = this.add.rectangle(0, -h / 2 + 44, w - 20, 1, 0x636e72);

    // 카드 설명 (중앙)
    const descText = this.add.text(0, 14, card.description, {
      fontSize: '12px', color: '#b2bec3',
      wordWrap: { width: w - 16 }, align: 'center',
    }).setOrigin(0.5);

    container.add([bg, badge, costText, nameText, divider, descText]);

    // 히트 영역 설정 후 드래그 등록
    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });
    this.input.setDraggable(container);
    container.setDepth(1);

    return { cardId: card.id, container, originX: x, originY: y };
  }

  private renderEndTurnButton(): void {
    const bx = 700, by = 530;

    const btn = this.add.rectangle(bx, by, 128, 44, 0x27ae60);
    btn.setStrokeStyle(2, 0x2ecc71);
    btn.setInteractive({ useHandCursor: true });

    this.add.text(bx, by, '턴 종료', {
      fontSize: '16px', color: '#ffffff', fontStyle: 'bold',
    }).setOrigin(0.5);

    // 호버 강조
    btn.on('pointerover', () => btn.setFillStyle(0x2ecc71));
    btn.on('pointerout', () => btn.setFillStyle(0x27ae60));
    btn.on('pointerdown', () => {
      this.gs.endTurn();
      this.updateUI();
    });
  }

  /** 허브로 돌아가는 뒤로가기 버튼 */
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
    // 드래그 시작: 해당 카드를 다른 카드 위로 올림
    this.input.on('dragstart', (_p: unknown, obj: unknown) => {
      (obj as Phaser.GameObjects.Container).setDepth(10);
    });

    // 드래그 중: 포인터를 따라 카드 이동
    this.input.on('drag', (_p: unknown, obj: unknown, dragX: number, dragY: number) => {
      (obj as Phaser.GameObjects.Container).setPosition(dragX, dragY);
    });

    // 드래그 종료: 적 영역 판정 후 사용 또는 원위치 복귀
    this.input.on('dragend', (pointer: Phaser.Input.Pointer, obj: unknown) => {
      const container = obj as Phaser.GameObjects.Container;
      const view = this.cardViews.find(cv => cv.container === container);
      if (!view) return;

      if (Phaser.Geom.Rectangle.Contains(this.enemyDropZone, pointer.x, pointer.y)) {
        const success = this.gs.playCard(view.cardId, this.gs.enemy);

        if (success) {
          // 카드 사용 성공: 비주얼 파괴 및 UI 즉시 갱신
          container.destroy();
          this.cardViews = this.cardViews.filter(cv => cv !== view);
          this.updateUI();
          this.handlePostCardPlay();
        } else {
          // 마나 부족: 원위치로 복귀
          this.returnCard(container, view);
          this.flashMessage('마나가 부족합니다!', 0xff7675);
        }
      } else {
        // 적 영역 밖: 원위치로 복귀
        this.returnCard(container, view);
      }
    });
  }

  /** 카드를 트위닝으로 원래 위치에 부드럽게 복귀 */
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

  /** 화면 중앙에 잠깐 표시되는 플로팅 알림 텍스트 */
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

  // ── 상태 반영 ────────────────────────────────────────────────────────────

  /** GameState 최신 값을 읽어 화면의 모든 텍스트를 갱신 */
  private updateUI(): void {
    const { player, enemy } = this.gs;
    this.txtPlayerHp.setText(`HP ${player.hp} / ${player.maxHp}`);
    this.txtPlayerBlock.setText(`방어도: ${player.block}`);
    this.txtPlayerMana.setText(`마나: ${player.mana} / ${player.maxMana}`);
    this.txtEnemyHp.setText(`HP ${enemy.hp} / ${enemy.maxHp}`);
    this.txtEnemyBlock.setText(`방어도: ${enemy.block}`);
  }

  /**
   * 카드 사용 후 전투 상태 분기.
   * 우선순위: 적 사망(승리) > HP 절반 중간 대화 > 계속 진행.
   */
  private handlePostCardPlay(): void {
    const { enemy } = this.gs;

    // 1. 적 사망 → 승리 대화 씬 오버레이
    if (enemy.hp <= 0) {
      this.cardViews.forEach(cv => cv.container.disableInteractive());
      this.scene.pause();
      this.scene.launch('DialogueScene', {
        scriptId: 'battle_victory',
        returnScene: 'HubScene',
      });
      return;
    }

    // 2. 최초로 HP 절반 이하 도달 → 중간 대화 오버레이 (이후 전투 재개)
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
