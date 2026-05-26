import Phaser from 'phaser';
import { GameState } from '../GameState';
import { bgm } from '../audio/BGMManager';
import type { Card, Potion, Relic, ShopSceneData } from '../types';
import {
  BG_DEEP, BG_PANEL, BG_DIVIDER,
  BORDER_DIM,
  PINK, ROSE, LAVENDER, GOLD, GREEN,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, TEXT_GOLD, FONT,
} from '../theme';

interface ShopCardItem  { card: Card;   price: number; soldOut: boolean; }
interface ShopRelicItem { relic: Relic; price: number; soldOut: boolean; }
interface ShopPotionItem { potion: Potion; price: number; soldOut: boolean; }

const CARD_W = 190;
const CARD_H = 270;
const CARD_CY = 262;

export class ShopScene extends Phaser.Scene {
  private returnScene = 'HubScene';
  private shopCards: ShopCardItem[] = [];
  private shopRelic: ShopRelicItem | null = null;
  private shopPotion: ShopPotionItem | null = null;
  private content: Phaser.GameObjects.GameObject[] = [];

  constructor() { super({ key: 'ShopScene' }); }

  init(data: ShopSceneData): void {
    this.returnScene = data?.returnScene ?? 'HubScene';
  }

  create(): void {
    bgm.play('bgm09');
    this.cameras.main.fadeIn(350, 0, 0, 0);
    this.generateInventory();
    this.renderBase();
    this.showMain();
  }

  private generateInventory(): void {
    const cards = GameState.getRandomRewardCards(3);
    this.shopCards = cards.map(card => ({
      card,
      price: GameState.getCardShopPrice(card),
      soldOut: false,
    }));

    const tier = Math.random() < 0.6 ? 'common' as const : 'rare' as const;
    const relics = GameState.getRandomRelics(tier, 1);
    this.shopRelic = relics.length > 0
      ? { relic: relics[0], price: GameState.getRelicShopPrice(relics[0]), soldOut: false }
      : null;

    this.shopPotion = {
      potion: GameState.getRandomPotion(),
      price: GameState.getPotionShopPrice(),
      soldOut: false,
    };
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
    if (this.textures.exists('bg_shop')) {
      this.add.image(640, 360, 'bg_shop').setAlpha(0.55);
    }
    this.add.rectangle(640, 2, 1280, 4, GOLD).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, BG_DIVIDER).setOrigin(0.5, 1);
  }

  private showMain(): void {
    this.clearContent();

    this.track(this.add.text(640, 46, '상점', {
      fontSize: '36px', color: TEXT_GOLD, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.text(640, 90, this.goldText(), {
      fontSize: '15px', color: '#C8A060', fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.rectangle(640, 114, 1200, 1, BG_DIVIDER));
    this.track(this.add.text(640, 130, '── 판매 카드 ──', {
      fontSize: '13px', color: TEXT_DIM, fontFamily: FONT,
    }).setOrigin(0.5));

    const xs = [213, 640, 1067];
    this.shopCards.forEach((item, i) => this.renderCardSlot(xs[i], item));

    this.track(this.add.rectangle(640, 430, 1200, 1, BG_DIVIDER));
    this.track(this.add.text(640, 446, '── 서비스 ──', {
      fontSize: '13px', color: TEXT_DIM, fontFamily: FONT,
    }).setOrigin(0.5));

    this.renderRemovalService();
    if (this.shopPotion) this.renderPotionService(this.shopPotion);
    if (this.shopRelic) this.renderRelicService(this.shopRelic);

    const back = this.track(this.add.text(640, 692, '[ 나가기 ]', {
      fontSize: '16px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }));
    back.on('pointerover', () => back.setColor(TEXT_PRIMARY));
    back.on('pointerout',  () => back.setColor(TEXT_SECONDARY));
    back.on('pointerdown', () => {
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start(this.returnScene));
    });
  }

  private goldText(): string {
    const disc = GameState.getShopDiscount();
    const base = `보유 골드: ${GameState.gold} G`;
    return disc > 0 ? `${base}   ●   낡은 동전: 10% 할인 적용 중` : base;
  }

  private renderCardSlot(cx: number, item: ShopCardItem): void {
    const cy = CARD_CY;
    const dimBorder  = BORDER_DIM;
    const liveBorder = item.card.cardType === 'attack' ? ROSE : LAVENDER;
    const liveColor  = item.card.cardType === 'attack' ? '#FF1493' : '#C8A0FF';

    const bg = this.track(this.add.rectangle(cx, cy, CARD_W, CARD_H, BG_PANEL));
    bg.setStrokeStyle(1, item.soldOut ? dimBorder : liveBorder);

    this.track(this.add.text(cx - CARD_W / 2 + 10, cy - CARD_H / 2 + 14,
      '●'.repeat(item.card.cost), {
        fontSize: '11px', color: item.soldOut ? '#444466' : '#C8A0FF', fontFamily: FONT,
      }).setOrigin(0, 0.5));

    if (!item.soldOut) {
      this.track(this.add.text(cx, cy - CARD_H / 2 + 14,
        item.card.cardType === 'attack' ? '공격' : '스킬', {
          fontSize: '11px', color: liveColor, fontFamily: FONT,
        }).setOrigin(0.5));
    }

    this.track(this.add.text(cx, cy - 70,
      item.card.name + (item.card.upgraded ? '+' : ''), {
        fontSize: '17px',
        color: item.soldOut ? '#555577' : TEXT_PRIMARY,
        fontStyle: 'bold', fontFamily: FONT,
      }).setOrigin(0.5));

    this.track(this.add.text(cx, cy - 10, item.card.description, {
      fontSize: '12px',
      color: item.soldOut ? '#3A2A3A' : TEXT_SECONDARY, fontFamily: FONT,
      lineSpacing: 4, align: 'center',
      wordWrap: { width: CARD_W - 20 },
    }).setOrigin(0.5));

    if (item.soldOut) {
      this.track(this.add.text(cx, cy + 100, '매진', {
        fontSize: '18px', color: '#555577', fontStyle: 'bold', fontFamily: FONT,
      }).setOrigin(0.5));
      return;
    }

    const canBuy = GameState.gold >= item.price;
    this.track(this.add.text(cx, cy + 78, `${item.price} G`, {
      fontSize: '15px',
      color: canBuy ? TEXT_GOLD : '#FF1493',
      fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    const btnY = cy + 112;
    const btnBg = this.track(this.add.rectangle(cx, btnY, CARD_W - 24, 32,
      canBuy ? 0x3A1540 : 0x1A0A2E));
    btnBg.setStrokeStyle(1, canBuy ? LAVENDER : BORDER_DIM);
    const btnTxt = this.track(this.add.text(cx, btnY, '구매', {
      fontSize: '14px', color: canBuy ? '#C8A0FF' : '#555577', fontFamily: FONT,
    }).setOrigin(0.5));

    if (canBuy) {
      (btnBg as Phaser.GameObjects.Rectangle).setInteractive({ useHandCursor: true });
      btnBg.on('pointerover', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x5A2A6A);
        (btnTxt as Phaser.GameObjects.Text).setColor('#E0C8FF');
      });
      btnBg.on('pointerout', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x3A1540);
        (btnTxt as Phaser.GameObjects.Text).setColor('#C8A0FF');
      });
      btnBg.on('pointerdown', () => {
        this.showConfirmOverlay(
          `"${item.card.name}"을(를) ${item.price}G에 구매합니다.`,
          () => {
            GameState.gold -= item.price;
            GameState.addBonusCard(item.card);
            item.soldOut = true;
            this.showMain();
          },
        );
      });
    }
  }

  private renderRemovalService(): void {
    const cx = 213, cy = 552, W = 380, H = 155;
    const cost = GameState.cardRemovalCost;
    const canAfford = GameState.gold >= cost;
    const hasCards = GameState.getAllRunCards().length > 0;
    const available = canAfford && hasCards;

    const bg = this.track(this.add.rectangle(cx, cy, W, H, BG_PANEL));
    bg.setStrokeStyle(1, BORDER_DIM);

    this.track(this.add.text(cx, cy - 52, '카드 제거', {
      fontSize: '17px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy - 22, '덱에서 카드 1장을 영구적으로 제거합니다.', {
      fontSize: '12px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy + 8, `비용: ${cost} G`, {
      fontSize: '13px',
      color: available ? TEXT_GOLD : '#FF1493',
      fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    const btnW = W - 60, btnY = cy + 50;
    const btnBg = this.track(this.add.rectangle(cx, btnY, btnW, 32,
      available ? 0x3A1040 : 0x1A0A2E));
    btnBg.setStrokeStyle(1, available ? ROSE : BORDER_DIM);
    const btnTxt = this.track(this.add.text(cx, btnY, '카드 선택', {
      fontSize: '14px', color: available ? '#FF1493' : '#555577', fontFamily: FONT,
    }).setOrigin(0.5));

    if (available) {
      (btnBg as Phaser.GameObjects.Rectangle).setInteractive({ useHandCursor: true });
      btnBg.on('pointerover', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x5A1A5A);
        (btnTxt as Phaser.GameObjects.Text).setColor('#FF69B4');
      });
      btnBg.on('pointerout', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x3A1040);
        (btnTxt as Phaser.GameObjects.Text).setColor('#FF1493');
      });
      btnBg.on('pointerdown', () => this.showCardRemovalScreen());
    }
  }

  private renderPotionService(item: ShopPotionItem): void {
    const cx = 640, cy = 552, W = 380, H = 155;
    const POTION_COLORS: Record<string, number> = {
      heal_potion: GREEN,
      strength_potion: ROSE,
      explosive_potion: 0xFF4757,
      draw_potion: LAVENDER,
    };
    const col = POTION_COLORS[item.potion.id] ?? LAVENDER;
    const colStr = '#' + col.toString(16).padStart(6, '0');

    const bg = this.track(this.add.rectangle(cx, cy, W, H, BG_PANEL));
    bg.setStrokeStyle(1, item.soldOut ? BORDER_DIM : col);

    if (item.soldOut) {
      this.track(this.add.text(cx, cy, '매진', {
        fontSize: '20px', color: '#555577', fontStyle: 'bold', fontFamily: FONT,
      }).setOrigin(0.5));
      return;
    }

    const slotsFull = GameState.potionSlots.every(s => s !== null);
    const canBuy = !slotsFull && GameState.gold >= item.price;

    this.track(this.add.text(cx, cy - 52, item.potion.name, {
      fontSize: '17px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy - 22, item.potion.description, {
      fontSize: '12px', color: TEXT_SECONDARY, align: 'center', fontFamily: FONT,
      wordWrap: { width: W - 40 },
    }).setOrigin(0.5));

    if (slotsFull) {
      this.track(this.add.text(cx, cy + 8, '포션 슬롯 가득참', {
        fontSize: '12px', color: '#FF1493', fontFamily: FONT,
      }).setOrigin(0.5));
    } else {
      this.track(this.add.text(cx, cy + 8, `${item.price} G`, {
        fontSize: '13px', color: canBuy ? TEXT_GOLD : '#FF1493', fontStyle: 'bold', fontFamily: FONT,
      }).setOrigin(0.5));
    }

    const btnW = W - 60, btnY = cy + 50;
    const btnBg = this.track(this.add.rectangle(cx, btnY, btnW, 32,
      canBuy ? 0x0D1A2A : 0x1A0A2E));
    btnBg.setStrokeStyle(1, canBuy ? col : BORDER_DIM);
    const btnTxt = this.track(this.add.text(cx, btnY, '구매', {
      fontSize: '14px', color: canBuy ? colStr : '#555577', fontFamily: FONT,
    }).setOrigin(0.5));

    if (canBuy) {
      (btnBg as Phaser.GameObjects.Rectangle).setInteractive({ useHandCursor: true });
      btnBg.on('pointerover', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x1A3040);
        (btnTxt as Phaser.GameObjects.Text).setColor('#E0F0FF');
      });
      btnBg.on('pointerout', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x0D1A2A);
        (btnTxt as Phaser.GameObjects.Text).setColor(colStr);
      });
      btnBg.on('pointerdown', () => {
        this.showConfirmOverlay(
          `"${item.potion.name}"을(를) ${item.price}G에 구매합니다.`,
          () => {
            GameState.gold -= item.price;
            GameState.addPotion(item.potion);
            item.soldOut = true;
            this.showMain();
          },
        );
      });
    }
  }

  private renderRelicService(item: ShopRelicItem): void {
    const cx = 1067, cy = 552, W = 380, H = 155;
    const tierHex = item.relic.tier === 'common' ? LAVENDER
      : item.relic.tier === 'rare' ? GOLD : ROSE;
    const tierStr = item.relic.tier === 'common' ? '#C8A0FF'
      : item.relic.tier === 'rare' ? '#FFD700' : '#FF1493';

    const bg = this.track(this.add.rectangle(cx, cy, W, H, BG_PANEL));
    bg.setStrokeStyle(1, item.soldOut ? BORDER_DIM : tierHex);

    if (item.soldOut) {
      this.track(this.add.text(cx, cy, '매진', {
        fontSize: '20px', color: '#555577', fontStyle: 'bold', fontFamily: FONT,
      }).setOrigin(0.5));
      return;
    }

    const slotFull = GameState.equippedRelics.length >= GameState.MAX_RELICS;
    const canBuy = !slotFull && GameState.gold >= item.price;

    this.track(this.add.text(cx - W / 2 + 14, cy - 52,
      `[${item.relic.tier.toUpperCase()}]`, {
        fontSize: '11px', color: tierStr, fontFamily: FONT,
      }).setOrigin(0, 0.5));

    this.track(this.add.text(cx, cy - 52, item.relic.name, {
      fontSize: '17px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy - 18, item.relic.description.replace(/\n/g, ' '), {
      fontSize: '12px', color: TEXT_SECONDARY, align: 'center', fontFamily: FONT,
      wordWrap: { width: W - 40 },
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy + 14, `${item.price} G`, {
      fontSize: '13px', color: canBuy ? TEXT_GOLD : '#FF1493', fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    const btnW = W - 60, btnY = cy + 50;
    const btnLabel = slotFull ? '슬롯 가득참' : '구매';
    const btnBg = this.track(this.add.rectangle(cx, btnY, btnW, 32,
      canBuy ? 0x1A2A1A : 0x1A0A2E));
    btnBg.setStrokeStyle(1, canBuy ? tierHex : BORDER_DIM);
    const btnTxt = this.track(this.add.text(cx, btnY, btnLabel, {
      fontSize: '14px', color: canBuy ? tierStr : '#555577', fontFamily: FONT,
    }).setOrigin(0.5));

    if (canBuy) {
      (btnBg as Phaser.GameObjects.Rectangle).setInteractive({ useHandCursor: true });
      btnBg.on('pointerover', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x2A4A2A);
        (btnTxt as Phaser.GameObjects.Text).setColor('#C0FFC8');
      });
      btnBg.on('pointerout', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x1A2A1A);
        (btnTxt as Phaser.GameObjects.Text).setColor(tierStr);
      });
      btnBg.on('pointerdown', () => {
        this.showConfirmOverlay(
          `"${item.relic.name}"을(를) ${item.price}G에 구매합니다.`,
          () => {
            GameState.gold -= item.price;
            GameState.addRelic(item.relic);
            item.soldOut = true;
            this.showMain();
          },
        );
      });
    }
  }

  private showCardRemovalScreen(): void {
    this.clearContent();

    this.track(this.add.text(640, 46, '제거할 카드를 선택하세요', {
      fontSize: '22px', color: '#FF1493', fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5));

    this.track(this.add.text(640, 84, `제거 비용: ${GameState.cardRemovalCost} G   ●   덱에서 영구 삭제됩니다`, {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5));

    const allCards = GameState.getAllRunCards();

    if (allCards.length === 0) {
      this.track(this.add.text(640, 380, '제거할 카드가 없습니다.', {
        fontSize: '18px', color: '#555577', fontFamily: FONT,
      }).setOrigin(0.5));
    } else {
      const COLS = 6;
      const CW = 140, CH = 175, GAP = 10;
      const totalW = COLS * CW + (COLS - 1) * GAP;
      const startX = (1280 - totalW) / 2 + CW / 2;
      const startY = 128;

      allCards.forEach((card, i) => {
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
          bg.setStrokeStyle(2, ROSE);
          bg.setFillStyle(0x2A0A1A);
        });
        bg.on('pointerout', () => {
          bg.setStrokeStyle(1, BORDER_DIM);
          bg.setFillStyle(BG_PANEL);
        });
        bg.on('pointerdown', () => {
          this.showConfirmOverlay(
            `"${card.name}" 카드를 ${GameState.cardRemovalCost}G에 영구 제거합니까?`,
            () => {
              GameState.gold -= GameState.cardRemovalCost;
              GameState.removeCard(card.id);
              this.showMain();
            },
          );
        });
      });
    }

    const back = this.track(this.add.text(640, 692, '[ 돌아가기 ]', {
      fontSize: '16px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }));
    back.on('pointerover', () => back.setColor(TEXT_PRIMARY));
    back.on('pointerout',  () => back.setColor(TEXT_SECONDARY));
    back.on('pointerdown', () => this.showMain());
  }

  private showConfirmOverlay(message: string, onConfirm: () => void): void {
    const overlay = this.add.rectangle(640, 360, 1280, 720, 0x000000, 0.75).setDepth(10);
    const box     = this.add.rectangle(640, 360, 580, 210, BG_PANEL).setDepth(11);
    box.setStrokeStyle(2, PINK);

    const msg = this.add.text(640, 318, message, {
      fontSize: '16px', color: TEXT_PRIMARY, align: 'center', fontFamily: FONT,
      wordWrap: { width: 520 },
    }).setOrigin(0.5).setDepth(12);

    const confirmBg = this.add.rectangle(524, 392, 190, 42, 0x3A1040).setDepth(11);
    confirmBg.setStrokeStyle(1, LAVENDER);
    const confirmTxt = this.add.text(524, 392, '확인', {
      fontSize: '16px', color: '#C8A0FF', fontFamily: FONT,
    }).setOrigin(0.5).setDepth(12);

    const cancelBg = this.add.rectangle(756, 392, 190, 42, 0x2A0A1A).setDepth(11);
    cancelBg.setStrokeStyle(1, ROSE);
    const cancelTxt = this.add.text(756, 392, '취소', {
      fontSize: '16px', color: '#FF1493', fontFamily: FONT,
    }).setOrigin(0.5).setDepth(12);

    const destroy = () => {
      overlay.destroy(); box.destroy(); msg.destroy();
      confirmBg.destroy(); confirmTxt.destroy();
      cancelBg.destroy(); cancelTxt.destroy();
    };

    confirmBg.setInteractive({ useHandCursor: true });
    confirmBg.on('pointerover', () => confirmBg.setFillStyle(0x5A2A6A));
    confirmBg.on('pointerout',  () => confirmBg.setFillStyle(0x3A1040));
    confirmBg.on('pointerdown', () => { destroy(); onConfirm(); });

    cancelBg.setInteractive({ useHandCursor: true });
    cancelBg.on('pointerover', () => cancelBg.setFillStyle(0x5A1A3A));
    cancelBg.on('pointerout',  () => cancelBg.setFillStyle(0x2A0A1A));
    cancelBg.on('pointerdown', () => destroy());
  }
}
