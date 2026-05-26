import Phaser from 'phaser';
import { GameState } from '../GameState';
import { bgm } from '../audio/BGMManager';
import type { Card, EventSceneData } from '../types';
import { EVENT_LIBRARY, type EventData, type EventChoice, type EventEffect } from '../data/events';
import {
  BG_DEEP, BG_PANEL, BG_HOVER, BG_DIVIDER,
  BORDER_DIM,
  PINK, ROSE, LAVENDER,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_PINK, FONT,
} from '../theme';

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
    bgm.play('bgm11');
    this.cameras.main.fadeIn(350, 0, 0, 0);
    this.renderBase();
    this.showEvent();
  }

  private track<T extends Phaser.GameObjects.GameObject>(obj: T): T {
    this.content.push(obj);
    return obj;
  }

  private clearContent(): void {
    this.content.forEach(o => o.destroy());
    this.content = [];
  }

  private renderBase(): void {
    this.add.rectangle(640, 360, 1280, 720, BG_DEEP);
    if (this.textures.exists('bg_event')) {
      this.add.image(640, 360, 'bg_event').setAlpha(0.50);
    }
    this.add.rectangle(640, 2, 1280, 4, PINK).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, BG_DIVIDER).setOrigin(0.5, 1);
  }

  private showEvent(): void {
    this.clearContent();

    const panel = this.track(this.add.rectangle(PANEL_CX, PANEL_CY, PANEL_W, PANEL_H, BG_PANEL));
    panel.setStrokeStyle(1, BORDER_DIM);
    this.track(this.add.rectangle(PANEL_CX, PANEL_CY - PANEL_H / 2 + 3, PANEL_W, 6, PINK));

    this.track(this.add.text(PANEL_CX, PANEL_CY - PANEL_H / 2 + 36, this.event.title, {
      fontSize: '26px', color: TEXT_PINK, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.text(PANEL_CX, PANEL_CY - PANEL_H / 2 + 86, this.event.description, {
      fontSize: '15px', color: TEXT_PRIMARY, fontFamily: FONT,
      wordWrap: { width: PANEL_W - 80 },
      lineSpacing: 6, align: 'center',
    }).setOrigin(0.5, 0));

    this.track(this.add.rectangle(PANEL_CX, PANEL_CY - 44, PANEL_W - 60, 1, BG_DIVIDER));

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
      available ? 0x2D1550 : 0x1A0A2E));
    bg.setStrokeStyle(1, available ? PINK : 0x3D1F5A);

    const labelY = available ? cy : cy - 10;
    const label = this.track(this.add.text(cx - W / 2 + 20, labelY, choice.label, {
      fontSize: '15px', color: available ? TEXT_PRIMARY : '#555577', fontFamily: FONT,
    }).setOrigin(0, 0.5));

    const preview = this.effectPreview(choice);
    if (preview) {
      this.track(this.add.text(cx + W / 2 - 16, labelY, preview, {
        fontSize: '13px', color: available ? TEXT_SECONDARY : '#3A2A3A', fontFamily: FONT,
      }).setOrigin(1, 0.5));
    }

    if (!available) {
      this.track(this.add.text(cx - W / 2 + 20, cy + 10,
        this.unavailableReason(choice), {
          fontSize: '11px', color: '#8B3A5A', fontFamily: FONT,
        }).setOrigin(0, 0.5));
    }

    if (!available) return;

    bg.setInteractive({ useHandCursor: true });
    bg.on('pointerover', () => {
      bg.setFillStyle(BG_HOVER);
      bg.setStrokeStyle(2, 0xFFB6C1);
      (label as Phaser.GameObjects.Text).setColor('#ffffff');
    });
    bg.on('pointerout', () => {
      bg.setFillStyle(0x2D1550);
      bg.setStrokeStyle(1, PINK);
      (label as Phaser.GameObjects.Text).setColor(TEXT_PRIMARY);
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
    if (choice.effects.some(e => e.type === 'potion_reward')) {
      if (GameState.potionSlots.every(s => s !== null)) return false;
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
        case 'potion_reward':   parts.push(`포션 ${e.count}개`); break;
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
    if (choice.effects.some(e => e.type === 'potion_reward'))
      return '포션 슬롯이 가득 찼습니다';
    return '';
  }

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
        case 'potion_reward': {
          let added = 0;
          for (let i = 0; i < effect.count; i++) {
            if (GameState.addPotion(GameState.getRandomPotion())) added++;
          }
          const outcomeText = added > 0
            ? `포션 ${added}개를 획득했습니다!`
            : '포션 슬롯이 가득 차 받을 수 없었습니다.';
          this.showOutcome(choice.outcome ?? outcomeText);
          return;
        }
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

  private showOutcome(text: string): void {
    this.clearContent();

    const W = 720, H = 290, CX = 640, CY = 340;
    const box = this.track(this.add.rectangle(CX, CY, W, H, BG_PANEL));
    box.setStrokeStyle(1, PINK);

    this.track(this.add.text(CX, CY - H / 2 + 28, this.event.title, {
      fontSize: '16px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.text(CX, CY - 18, text, {
      fontSize: '16px', color: TEXT_PRIMARY, fontFamily: FONT,
      wordWrap: { width: W - 80 },
      lineSpacing: 6, align: 'center',
    }).setOrigin(0.5));

    const btn = this.track(this.add.text(CX, CY + H / 2 - 30, '[ 계속하기 ]', {
      fontSize: '18px', color: '#FF69B4', fontFamily: FONT,
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }));
    btn.on('pointerover', () => btn.setColor('#FFB6C1'));
    btn.on('pointerout',  () => btn.setColor('#FF69B4'));
    btn.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start(this.returnScene));
    });
  }

  private showCardUpgradeScreen(): void {
    this.clearContent();

    this.track(this.add.text(640, 46, '업그레이드할 카드를 선택하세요', {
      fontSize: '22px', color: TEXT_PINK, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));
    this.track(this.add.text(640, 82, '선택한 카드가 무료로 업그레이드됩니다.', {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5));

    const upgradable = GameState.getAllRunCards().filter(c => c.upgrade && !c.upgraded);
    this.renderCardGrid(upgradable, LAVENDER, 0x200A3A, card => {
      GameState.upgradeCard(card.id);
      this.showOutcome(`"${card.name}" 카드가 업그레이드되었습니다.`);
    });

    this.renderBackBtn(() => this.showEvent());
  }

  private showCardRemoveScreen(): void {
    this.clearContent();

    this.track(this.add.text(640, 46, '제거할 카드를 선택하세요', {
      fontSize: '22px', color: '#FF1493', fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));
    this.track(this.add.text(640, 82, '선택한 카드가 덱에서 영구적으로 제거됩니다. (무료)', {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5));

    const allCards = GameState.getAllRunCards();
    this.renderCardGrid(allCards, ROSE, 0x2A0A1A, card => {
      GameState.removeCardFree(card.id);
      this.showOutcome(`"${card.name}" 카드가 덱에서 제거되었습니다.`);
    });

    this.renderBackBtn(() => this.showEvent());
  }

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

      const bg = this.track(this.add.rectangle(cx, cy, CW, CH, BG_PANEL));
      bg.setStrokeStyle(1, BORDER_DIM);

      this.track(this.add.text(cx, cy - 58,
        card.name + (card.upgraded ? '+' : ''), {
          fontSize: '13px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
          wordWrap: { width: CW - 10 }, align: 'center',
        }).setOrigin(0.5));

      this.track(this.add.text(cx, cy - 14, card.description, {
        fontSize: '10px', color: TEXT_SECONDARY, fontFamily: FONT,
        lineSpacing: 3, align: 'center',
        wordWrap: { width: CW - 12 },
      }).setOrigin(0.5));

      this.track(this.add.text(cx, cy + 60, `${card.cost}코스트`, {
        fontSize: '11px', color: '#C8A0FF', fontFamily: FONT,
      }).setOrigin(0.5));

      bg.setInteractive({ useHandCursor: true });
      bg.on('pointerover', () => {
        bg.setStrokeStyle(2, borderHover);
        bg.setFillStyle(fillHover);
      });
      bg.on('pointerout', () => {
        bg.setStrokeStyle(1, BORDER_DIM);
        bg.setFillStyle(BG_PANEL);
      });
      bg.on('pointerdown', () => onSelect(card));
    });
  }

  private renderBackBtn(onBack: () => void): void {
    const btn = this.track(this.add.text(640, 692, '[ 돌아가기 ]', {
      fontSize: '16px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }));
    btn.on('pointerover', () => btn.setColor(TEXT_PRIMARY));
    btn.on('pointerout',  () => btn.setColor(TEXT_SECONDARY));
    btn.on('pointerdown', () => onBack());
  }
}
