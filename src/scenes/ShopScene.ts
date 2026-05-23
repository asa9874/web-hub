import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { Card, Relic, ShopSceneData } from '../types';

interface ShopCardItem { card: Card; price: number; soldOut: boolean; }
interface ShopRelicItem { relic: Relic; price: number; soldOut: boolean; }

const CARD_W = 190;
const CARD_H = 270;
const CARD_CY = 262;

export class ShopScene extends Phaser.Scene {
  private returnScene = 'HubScene';
  private shopCards: ShopCardItem[] = [];
  private shopRelic: ShopRelicItem | null = null;
  private content: Phaser.GameObjects.GameObject[] = [];

  constructor() { super({ key: 'ShopScene' }); }

  init(data: ShopSceneData): void {
    this.returnScene = data?.returnScene ?? 'HubScene';
  }

  create(): void {
    this.cameras.main.fadeIn(350, 0, 0, 0);
    this.generateInventory();
    this.renderBase();
    this.showMain();
  }

  // ── 인벤토리 생성 ─────────────────────────────────────────────────────────

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
  }

  // ── 콘텐츠 관리 ───────────────────────────────────────────────────────────

  private track<T extends Phaser.GameObjects.GameObject>(obj: T): T {
    this.content.push(obj);
    return obj;
  }

  private clearContent(): void {
    this.content.forEach(o => o.destroy());
    this.content = [];
  }

  // ── 정적 배경 (씬 생명주기 동안 1회) ──────────────────────────────────────

  private renderBase(): void {
    this.add.rectangle(640, 360, 1280, 720, 0x0d1117);
    this.add.rectangle(640, 2, 1280, 4, 0xf0a500).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, 0x21262d).setOrigin(0.5, 1);
  }

  // ── 메인 화면 ─────────────────────────────────────────────────────────────

  private showMain(): void {
    this.clearContent();

    // 헤더
    this.track(this.add.text(640, 46, '상점', {
      fontSize: '36px', color: '#f0a500', fontStyle: 'bold',
    }).setOrigin(0.5));

    this.track(this.add.text(640, 90, this.goldText(), {
      fontSize: '15px', color: '#fdcb6e',
    }).setOrigin(0.5));

    this.track(this.add.rectangle(640, 114, 1200, 1, 0x21262d));
    this.track(this.add.text(640, 130, '── 판매 카드 ──', {
      fontSize: '13px', color: '#7d8590',
    }).setOrigin(0.5));

    // 카드 슬롯
    const xs = [213, 640, 1067];
    this.shopCards.forEach((item, i) => this.renderCardSlot(xs[i], item));

    // 서비스 섹션
    this.track(this.add.rectangle(640, 430, 1200, 1, 0x21262d));
    this.track(this.add.text(640, 446, '── 서비스 ──', {
      fontSize: '13px', color: '#7d8590',
    }).setOrigin(0.5));

    this.renderRemovalService();
    if (this.shopRelic) this.renderRelicService(this.shopRelic);

    // 나가기 버튼
    const back = this.track(this.add.text(640, 692, '[ 나가기 ]', {
      fontSize: '16px', color: '#7d8590',
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }));
    back.on('pointerover', () => back.setColor('#e6edf3'));
    back.on('pointerout',  () => back.setColor('#7d8590'));
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

  // ── 카드 슬롯 렌더링 ──────────────────────────────────────────────────────

  private renderCardSlot(cx: number, item: ShopCardItem): void {
    const cy = CARD_CY;
    const dimBorder  = 0x30363d;
    const liveBorder = item.card.cardType === 'attack' ? 0x0984e3 : 0x00b894;
    const liveColor  = item.card.cardType === 'attack' ? '#0984e3' : '#00b894';

    const bg = this.track(this.add.rectangle(cx, cy, CARD_W, CARD_H, 0x161b22));
    bg.setStrokeStyle(1, item.soldOut ? dimBorder : liveBorder);

    // 코스트
    this.track(this.add.text(cx - CARD_W / 2 + 10, cy - CARD_H / 2 + 14,
      '●'.repeat(item.card.cost), {
        fontSize: '11px', color: item.soldOut ? '#444' : '#74b9ff',
      }).setOrigin(0, 0.5));

    // 종류 뱃지
    if (!item.soldOut) {
      this.track(this.add.text(cx, cy - CARD_H / 2 + 14,
        item.card.cardType === 'attack' ? '공격' : '스킬', {
          fontSize: '11px', color: liveColor,
        }).setOrigin(0.5));
    }

    // 이름
    this.track(this.add.text(cx, cy - 70,
      item.card.name + (item.card.upgraded ? '+' : ''), {
        fontSize: '17px',
        color: item.soldOut ? '#555' : '#e6edf3',
        fontStyle: 'bold',
      }).setOrigin(0.5));

    // 설명
    this.track(this.add.text(cx, cy - 10, item.card.description, {
      fontSize: '12px',
      color: item.soldOut ? '#3a3a3a' : '#7d8590',
      lineSpacing: 4, align: 'center',
      wordWrap: { width: CARD_W - 20 },
    }).setOrigin(0.5));

    if (item.soldOut) {
      this.track(this.add.text(cx, cy + 100, '매진', {
        fontSize: '18px', color: '#555', fontStyle: 'bold',
      }).setOrigin(0.5));
      return;
    }

    // 가격
    const canBuy = GameState.gold >= item.price;
    this.track(this.add.text(cx, cy + 78, `${item.price} G`, {
      fontSize: '15px',
      color: canBuy ? '#fdcb6e' : '#e17055',
      fontStyle: 'bold',
    }).setOrigin(0.5));

    // 구매 버튼
    const btnY = cy + 112;
    const btnBg = this.track(this.add.rectangle(cx, btnY, CARD_W - 24, 32,
      canBuy ? 0x1a3a5c : 0x1a1a1a));
    btnBg.setStrokeStyle(1, canBuy ? 0x74b9ff : 0x30363d);
    const btnTxt = this.track(this.add.text(cx, btnY, '구매', {
      fontSize: '14px', color: canBuy ? '#74b9ff' : '#555',
    }).setOrigin(0.5));

    if (canBuy) {
      (btnBg as Phaser.GameObjects.Rectangle).setInteractive({ useHandCursor: true });
      btnBg.on('pointerover', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x24527a);
        (btnTxt as Phaser.GameObjects.Text).setColor('#a8d4ff');
      });
      btnBg.on('pointerout', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x1a3a5c);
        (btnTxt as Phaser.GameObjects.Text).setColor('#74b9ff');
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

  // ── 서비스: 카드 제거 ─────────────────────────────────────────────────────

  private renderRemovalService(): void {
    const cx = 320, cy = 552, W = 510, H = 155;
    const cost = GameState.cardRemovalCost;
    const canAfford = GameState.gold >= cost;
    const hasCards = GameState.getAllRunCards().length > 0;
    const available = canAfford && hasCards;

    const bg = this.track(this.add.rectangle(cx, cy, W, H, 0x161b22));
    bg.setStrokeStyle(1, 0x30363d);

    this.track(this.add.text(cx, cy - 52, '카드 제거', {
      fontSize: '17px', color: '#e6edf3', fontStyle: 'bold',
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy - 22, '덱에서 카드 1장을 영구적으로 제거합니다.', {
      fontSize: '12px', color: '#7d8590',
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy + 8, `비용: ${cost} G`, {
      fontSize: '13px',
      color: available ? '#fdcb6e' : '#e17055',
      fontStyle: 'bold',
    }).setOrigin(0.5));

    const btnW = W - 60, btnY = cy + 50;
    const btnBg = this.track(this.add.rectangle(cx, btnY, btnW, 32,
      available ? 0x3a2010 : 0x1a1a1a));
    btnBg.setStrokeStyle(1, available ? 0xe17055 : 0x30363d);
    const btnTxt = this.track(this.add.text(cx, btnY, '카드 선택', {
      fontSize: '14px', color: available ? '#e17055' : '#555',
    }).setOrigin(0.5));

    if (available) {
      (btnBg as Phaser.GameObjects.Rectangle).setInteractive({ useHandCursor: true });
      btnBg.on('pointerover', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x5a3018);
        (btnTxt as Phaser.GameObjects.Text).setColor('#ff9f7f');
      });
      btnBg.on('pointerout', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x3a2010);
        (btnTxt as Phaser.GameObjects.Text).setColor('#e17055');
      });
      btnBg.on('pointerdown', () => this.showCardRemovalScreen());
    }
  }

  // ── 서비스: 유물 구매 ─────────────────────────────────────────────────────

  private renderRelicService(item: ShopRelicItem): void {
    const cx = 960, cy = 552, W = 510, H = 155;
    const tierHex = item.relic.tier === 'common' ? 0x74b9ff
      : item.relic.tier === 'rare' ? 0xfdcb6e : 0xe17055;
    const tierStr = item.relic.tier === 'common' ? '#74b9ff'
      : item.relic.tier === 'rare' ? '#fdcb6e' : '#e17055';

    const bg = this.track(this.add.rectangle(cx, cy, W, H, 0x161b22));
    bg.setStrokeStyle(1, item.soldOut ? 0x30363d : tierHex);

    if (item.soldOut) {
      this.track(this.add.text(cx, cy, '매진', {
        fontSize: '20px', color: '#555', fontStyle: 'bold',
      }).setOrigin(0.5));
      return;
    }

    const slotFull = GameState.equippedRelics.length >= GameState.MAX_RELICS;
    const canBuy = !slotFull && GameState.gold >= item.price;

    this.track(this.add.text(cx - W / 2 + 14, cy - 52,
      `[${item.relic.tier.toUpperCase()}]`, {
        fontSize: '11px', color: tierStr,
      }).setOrigin(0, 0.5));

    this.track(this.add.text(cx, cy - 52, item.relic.name, {
      fontSize: '17px', color: '#e6edf3', fontStyle: 'bold',
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy - 18, item.relic.description.replace(/\n/g, ' '), {
      fontSize: '12px', color: '#7d8590', align: 'center',
      wordWrap: { width: W - 40 },
    }).setOrigin(0.5));

    this.track(this.add.text(cx, cy + 14, `${item.price} G`, {
      fontSize: '13px', color: canBuy ? '#fdcb6e' : '#e17055', fontStyle: 'bold',
    }).setOrigin(0.5));

    const btnW = W - 60, btnY = cy + 50;
    const btnLabel = slotFull ? '슬롯 가득참' : '구매';
    const btnBg = this.track(this.add.rectangle(cx, btnY, btnW, 32,
      canBuy ? 0x1e3020 : 0x1a1a1a));
    btnBg.setStrokeStyle(1, canBuy ? tierHex : 0x30363d);
    const btnTxt = this.track(this.add.text(cx, btnY, btnLabel, {
      fontSize: '14px', color: canBuy ? tierStr : '#555',
    }).setOrigin(0.5));

    if (canBuy) {
      (btnBg as Phaser.GameObjects.Rectangle).setInteractive({ useHandCursor: true });
      btnBg.on('pointerover', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x2e4830);
        (btnTxt as Phaser.GameObjects.Text).setColor('#b0ffb8');
      });
      btnBg.on('pointerout', () => {
        (btnBg as Phaser.GameObjects.Rectangle).setFillStyle(0x1e3020);
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

  // ── 카드 제거 화면 ────────────────────────────────────────────────────────

  private showCardRemovalScreen(): void {
    this.clearContent();

    this.track(this.add.text(640, 46, '제거할 카드를 선택하세요', {
      fontSize: '22px', color: '#e17055', fontStyle: 'bold',
    }).setOrigin(0.5));

    this.track(this.add.text(640, 84, `제거 비용: ${GameState.cardRemovalCost} G   ●   덱에서 영구 삭제됩니다`, {
      fontSize: '14px', color: '#7d8590',
    }).setOrigin(0.5));

    const allCards = GameState.getAllRunCards();

    if (allCards.length === 0) {
      this.track(this.add.text(640, 380, '제거할 카드가 없습니다.', {
        fontSize: '18px', color: '#555',
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
          bg.setStrokeStyle(2, 0xe17055);
          bg.setFillStyle(0x2a1010);
        });
        bg.on('pointerout', () => {
          bg.setStrokeStyle(1, 0x30363d);
          bg.setFillStyle(0x161b22);
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
      fontSize: '16px', color: '#7d8590',
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }));
    back.on('pointerover', () => back.setColor('#e6edf3'));
    back.on('pointerout',  () => back.setColor('#7d8590'));
    back.on('pointerdown', () => this.showMain());
  }

  // ── 확인 오버레이 ─────────────────────────────────────────────────────────

  private showConfirmOverlay(message: string, onConfirm: () => void): void {
    const overlay = this.add.rectangle(640, 360, 1280, 720, 0x000000, 0.75).setDepth(10);
    const box     = this.add.rectangle(640, 360, 580, 210, 0x161b22).setDepth(11);
    box.setStrokeStyle(2, 0x6c5ce7);

    const msg = this.add.text(640, 318, message, {
      fontSize: '16px', color: '#e6edf3', align: 'center',
      wordWrap: { width: 520 },
    }).setOrigin(0.5).setDepth(12);

    const confirmBg = this.add.rectangle(524, 392, 190, 42, 0x1a3a5c).setDepth(11);
    confirmBg.setStrokeStyle(1, 0x74b9ff);
    const confirmTxt = this.add.text(524, 392, '확인', {
      fontSize: '16px', color: '#74b9ff',
    }).setOrigin(0.5).setDepth(12);

    const cancelBg = this.add.rectangle(756, 392, 190, 42, 0x2a1010).setDepth(11);
    cancelBg.setStrokeStyle(1, 0xe17055);
    const cancelTxt = this.add.text(756, 392, '취소', {
      fontSize: '16px', color: '#e17055',
    }).setOrigin(0.5).setDepth(12);

    const destroy = () => {
      overlay.destroy(); box.destroy(); msg.destroy();
      confirmBg.destroy(); confirmTxt.destroy();
      cancelBg.destroy(); cancelTxt.destroy();
    };

    confirmBg.setInteractive({ useHandCursor: true });
    confirmBg.on('pointerover', () => confirmBg.setFillStyle(0x24527a));
    confirmBg.on('pointerout',  () => confirmBg.setFillStyle(0x1a3a5c));
    confirmBg.on('pointerdown', () => { destroy(); onConfirm(); });

    cancelBg.setInteractive({ useHandCursor: true });
    cancelBg.on('pointerover', () => cancelBg.setFillStyle(0x5a1010));
    cancelBg.on('pointerout',  () => cancelBg.setFillStyle(0x2a1010));
    cancelBg.on('pointerdown', () => destroy());
  }
}
