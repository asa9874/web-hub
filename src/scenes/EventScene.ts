import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { Card, EventSceneData } from '../types';
import { EVENT_LIBRARY, type EventData, type EventChoice, type EventEffect } from '../data/events';

const PANEL_W = 860;
const PANEL_H = 520;
const PANEL_CX = 640;
const PANEL_CY = 340;

export class EventScene extends Phaser.Scene {
  private returnScene = 'HubScene';
  private event!: EventData;
  private content: Phaser.GameObjects.GameObject[] = [];

  constructor() { super({ key: 'EventScene' }); }

  init(data: EventSceneData): void {
    this.returnScene = data?.returnScene ?? 'HubScene';
    const id = data?.eventId;
    this.event = id
      ? (EVENT_LIBRARY.find(e => e.id === id) ?? EVENT_LIBRARY[0])
      : EVENT_LIBRARY[Math.floor(Math.random() * EVENT_LIBRARY.length)];
  }

  create(): void {
    this.cameras.main.fadeIn(350, 0, 0, 0);
    this.renderBase();
    this.showEvent();
  }

  // ── 공통 헬퍼 ─────────────────────────────────────────────────────────────

  private track<T extends Phaser.GameObjects.GameObject>(obj: T): T {
    this.content.push(obj);
    return obj;
  }

  private clearContent(): void {
    this.content.forEach(o => o.destroy());
    this.content = [];
  }

  private renderBase(): void {
    this.add.rectangle(640, 360, 1280, 720, 0x0d1117);
    this.add.rectangle(640, 2, 1280, 4, 0x6c5ce7).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, 0x21262d).setOrigin(0.5, 1);
  }

  // ── 이벤트 선택 화면 ──────────────────────────────────────────────────────

  private showEvent(): void {
    this.clearContent();

    // 패널 배경
    const panel = this.track(this.add.rectangle(PANEL_CX, PANEL_CY, PANEL_W, PANEL_H, 0x161b22));
    panel.setStrokeStyle(1, 0x30363d);
    this.track(this.add.rectangle(PANEL_CX, PANEL_CY - PANEL_H / 2 + 3, PANEL_W, 6, 0x6c5ce7));

    // 제목
    this.track(this.add.text(PANEL_CX, PANEL_CY - PANEL_H / 2 + 36, this.event.title, {
      fontSize: '26px', color: '#c8a2ff', fontStyle: 'bold',
    }).setOrigin(0.5));

    // 배경 설명
    this.track(this.add.text(PANEL_CX, PANEL_CY - PANEL_H / 2 + 86, this.event.description, {
      fontSize: '15px', color: '#adb5bd',
      wordWrap: { width: PANEL_W - 80 },
      lineSpacing: 6, align: 'center',
    }).setOrigin(0.5, 0));

    // 구분선
    this.track(this.add.rectangle(PANEL_CX, PANEL_CY - 44, PANEL_W - 60, 1, 0x30363d));

    // 선택지 버튼
    const BTN_H = 54, BTN_GAP = 10;
    const totalH = this.event.choices.length * BTN_H + (this.event.choices.length - 1) * BTN_GAP;
    const startY = PANEL_CY + PANEL_H / 2 - 16 - totalH;

    this.event.choices.forEach((choice, i) => {
      const btnCY = startY + i * (BTN_H + BTN_GAP) + BTN_H / 2;
      this.renderChoiceButton(PANEL_CX, btnCY, PANEL_W - 80, BTN_H, choice);
    });
  }

  private renderChoiceButton(
    cx: number, cy: number, W: number, H: number,
    choice: EventChoice,
  ): void {
    const available = this.isAvailable(choice);

    const bg = this.track(this.add.rectangle(cx, cy, W, H,
      available ? 0x1a1a2e : 0x0d0d17));
    bg.setStrokeStyle(1, available ? 0x6c5ce7 : 0x252535);

    // 선택지 레이블
    const labelY = available ? cy : cy - 10;
    const label = this.track(this.add.text(cx - W / 2 + 20, labelY, choice.label, {
      fontSize: '15px', color: available ? '#e6edf3' : '#555',
    }).setOrigin(0, 0.5));

    // 효과 미리보기 (오른쪽 끝)
    const preview = this.effectPreview(choice);
    if (preview) {
      this.track(this.add.text(cx + W / 2 - 16, labelY, preview, {
        fontSize: '13px', color: available ? '#7d8590' : '#333',
      }).setOrigin(1, 0.5));
    }

    // 비활성 이유
    if (!available) {
      this.track(this.add.text(cx - W / 2 + 20, cy + 10,
        this.unavailableReason(choice), {
          fontSize: '11px', color: '#8b3a3a',
        }).setOrigin(0, 0.5));
    }

    if (!available) return;

    bg.setInteractive({ useHandCursor: true });
    bg.on('pointerover', () => {
      bg.setFillStyle(0x2a2a4e);
      bg.setStrokeStyle(2, 0x9b8eff);
      (label as Phaser.GameObjects.Text).setColor('#ffffff');
    });
    bg.on('pointerout', () => {
      bg.setFillStyle(0x1a1a2e);
      bg.setStrokeStyle(1, 0x6c5ce7);
      (label as Phaser.GameObjects.Text).setColor('#e6edf3');
    });
    bg.on('pointerdown', () => this.executeChoice(choice));
  }

  private isAvailable(choice: EventChoice): boolean {
    if (choice.requireGold !== undefined && GameState.gold < choice.requireGold) return false;
    if (choice.requireHp  !== undefined && GameState.playerHp < choice.requireHp) return false;
    if (choice.effects.some(e => e.type === 'card_upgrade')) {
      if (GameState.getAllRunCards().filter(c => c.upgrade && !c.upgraded).length === 0) return false;
    }
    if (choice.effects.some(e => e.type === 'card_remove_free')) {
      if (GameState.getAllRunCards().length === 0) return false;
    }
    return true;
  }

  private effectPreview(choice: EventChoice): string {
    const parts: string[] = [];
    for (const e of choice.effects) {
      switch (e.type) {
        case 'gold':           parts.push(e.amount > 0 ? `+${e.amount}G` : `${e.amount}G`); break;
        case 'hp':             parts.push(e.amount > 0 ? `HP +${e.amount}` : `HP ${e.amount}`); break;
        case 'max_hp':         parts.push(`최대HP ${e.amount}`); break;
        case 'card_reward':    parts.push(`카드 ${e.count}장`); break;
        case 'relic_reward':   parts.push('유물 획득'); break;
        case 'card_upgrade':   parts.push('카드 업그레이드'); break;
        case 'card_remove_free': parts.push('카드 제거'); break;
      }
    }
    return parts.join(' / ');
  }

  private unavailableReason(choice: EventChoice): string {
    if (choice.requireGold !== undefined && GameState.gold < choice.requireGold)
      return `골드 부족 (필요: ${choice.requireGold}G · 보유: ${GameState.gold}G)`;
    if (choice.requireHp !== undefined && GameState.playerHp < choice.requireHp)
      return `HP 부족 (최소 ${choice.requireHp} 필요 · 현재: ${GameState.playerHp})`;
    if (choice.effects.some(e => e.type === 'card_upgrade'))
      return '업그레이드 가능한 카드가 없습니다';
    if (choice.effects.some(e => e.type === 'card_remove_free'))
      return '제거할 카드가 없습니다';
    return '';
  }

  // ── 선택지 실행 ───────────────────────────────────────────────────────────

  private executeChoice(choice: EventChoice): void {
    let transition: EventEffect | null = null;
    let inline: EventEffect | null = null;

    for (const effect of choice.effects) {
      switch (effect.type) {
        case 'gold':
          GameState.gold = Math.max(0, GameState.gold + effect.amount);
          break;
        case 'hp':
          GameState.playerHp = Math.min(
            GameState.playerMaxHp,
            Math.max(1, GameState.playerHp + effect.amount),
          );
          break;
        case 'max_hp':
          GameState.playerMaxHp = Math.max(1, GameState.playerMaxHp + effect.amount);
          GameState.playerHp = Math.min(GameState.playerHp, GameState.playerMaxHp);
          break;
        case 'card_reward':
        case 'relic_reward':
          transition = effect;
          break;
        case 'card_upgrade':
        case 'card_remove_free':
          inline = effect;
          break;
      }
    }

    if (transition) {
      const t = transition;
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => {
        if (t.type === 'card_reward') {
          this.scene.start('CardRewardScene', {
            cards: GameState.getRandomRewardCards(t.count),
            returnScene: this.returnScene,
          });
        } else if (t.type === 'relic_reward') {
          const tier = Math.random() < 0.5 ? 'common' as const : 'rare' as const;
          const relics = GameState.getRandomRelics(tier, t.count);
          this.scene.start('RelicRewardScene', {
            relics,
            returnScene: this.returnScene,
          });
        }
      });
    } else if (inline) {
      if (inline.type === 'card_upgrade') {
        this.showCardUpgradeScreen();
      } else {
        this.showCardRemoveScreen();
      }
    } else {
      this.showOutcome(choice.outcome ?? '아무 일도 일어나지 않았습니다.');
    }
  }

  // ── 결과 화면 ─────────────────────────────────────────────────────────────

  private showOutcome(text: string): void {
    this.clearContent();

    const W = 720, H = 290, CX = 640, CY = 340;
    const box = this.track(this.add.rectangle(CX, CY, W, H, 0x161b22));
    box.setStrokeStyle(1, 0x6c5ce7);

    this.track(this.add.text(CX, CY - H / 2 + 28, this.event.title, {
      fontSize: '16px', color: '#7d8590',
    }).setOrigin(0.5));

    this.track(this.add.text(CX, CY - 18, text, {
      fontSize: '16px', color: '#e6edf3',
      wordWrap: { width: W - 80 },
      lineSpacing: 6, align: 'center',
    }).setOrigin(0.5));

    const btn = this.track(this.add.text(CX, CY + H / 2 - 30, '[ 계속하기 ]', {
      fontSize: '18px', color: '#6c5ce7',
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }));
    btn.on('pointerover', () => btn.setColor('#a29bfe'));
    btn.on('pointerout',  () => btn.setColor('#6c5ce7'));
    btn.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start(this.returnScene));
    });
  }

  // ── 카드 업그레이드 화면 ──────────────────────────────────────────────────

  private showCardUpgradeScreen(): void {
    this.clearContent();

    this.track(this.add.text(640, 46, '업그레이드할 카드를 선택하세요', {
      fontSize: '22px', color: '#c8a2ff', fontStyle: 'bold',
    }).setOrigin(0.5));
    this.track(this.add.text(640, 82, '선택한 카드가 무료로 업그레이드됩니다.', {
      fontSize: '14px', color: '#7d8590',
    }).setOrigin(0.5));

    const upgradable = GameState.getAllRunCards().filter(c => c.upgrade && !c.upgraded);
    this.renderCardGrid(upgradable, 0xc8a2ff, 0x20102a, card => {
      GameState.upgradeCard(card.id);
      this.showOutcome(`"${card.name}" 카드가 업그레이드되었습니다.`);
    });

    this.renderBackBtn(() => this.showEvent());
  }

  // ── 카드 제거 화면 (무료) ─────────────────────────────────────────────────

  private showCardRemoveScreen(): void {
    this.clearContent();

    this.track(this.add.text(640, 46, '제거할 카드를 선택하세요', {
      fontSize: '22px', color: '#e17055', fontStyle: 'bold',
    }).setOrigin(0.5));
    this.track(this.add.text(640, 82, '선택한 카드가 덱에서 영구적으로 제거됩니다. (무료)', {
      fontSize: '14px', color: '#7d8590',
    }).setOrigin(0.5));

    const allCards = GameState.getAllRunCards();
    this.renderCardGrid(allCards, 0xe17055, 0x2a1010, card => {
      GameState.removeCardFree(card.id);
      this.showOutcome(`"${card.name}" 카드가 덱에서 제거되었습니다.`);
    });

    this.renderBackBtn(() => this.showEvent());
  }

  // ── 공용 카드 그리드 ──────────────────────────────────────────────────────

  private renderCardGrid(
    cards: Card[],
    borderHover: number,
    fillHover: number,
    onSelect: (card: Card) => void,
  ): void {
    const COLS = 6, CW = 140, CH = 175, GAP = 10;
    const totalW = COLS * CW + (COLS - 1) * GAP;
    const startX = (1280 - totalW) / 2 + CW / 2;
    const startY = 108;

    cards.forEach((card, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const cx = startX + col * (CW + GAP);
      const cy = startY + row * (CH + GAP) + CH / 2;

      const bg = this.track(this.add.rectangle(cx, cy, CW, CH, 0x161b22));
      bg.setStrokeStyle(1, 0x30363d);

      this.track(this.add.text(cx, cy - 58,
        card.name + (card.upgraded ? '+' : ''), {
          fontSize: '13px', color: '#e6edf3', fontStyle: 'bold',
          wordWrap: { width: CW - 10 }, align: 'center',
        }).setOrigin(0.5));

      this.track(this.add.text(cx, cy - 14, card.description, {
        fontSize: '10px', color: '#7d8590',
        lineSpacing: 3, align: 'center',
        wordWrap: { width: CW - 12 },
      }).setOrigin(0.5));

      this.track(this.add.text(cx, cy + 60, `${card.cost}코스트`, {
        fontSize: '11px', color: '#74b9ff',
      }).setOrigin(0.5));

      bg.setInteractive({ useHandCursor: true });
      bg.on('pointerover', () => {
        bg.setStrokeStyle(2, borderHover);
        bg.setFillStyle(fillHover);
      });
      bg.on('pointerout', () => {
        bg.setStrokeStyle(1, 0x30363d);
        bg.setFillStyle(0x161b22);
      });
      bg.on('pointerdown', () => onSelect(card));
    });
  }

  private renderBackBtn(onBack: () => void): void {
    const btn = this.track(this.add.text(640, 692, '[ 돌아가기 ]', {
      fontSize: '16px', color: '#7d8590',
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }));
    btn.on('pointerover', () => btn.setColor('#e6edf3'));
    btn.on('pointerout',  () => btn.setColor('#7d8590'));
    btn.on('pointerdown', () => onBack());
  }
}
