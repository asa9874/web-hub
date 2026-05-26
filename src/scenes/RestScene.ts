import Phaser from 'phaser';
import { GameState } from '../GameState';
import { bgm } from '../audio/BGMManager';
import type { Card, RestSceneData } from '../types';
import {
  BG_DEEP, BG_PANEL, BG_HOVER,
  BORDER_DIM,
  PINK, ROSE, PINK_SOFT, LAVENDER, GOLD, GREEN,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_PINK, FONT,
} from '../theme';

const W = 1280;
const H = 720;
const COLS = 5;
const CARD_W = 112;
const CARD_H = 148;
const CARD_GAP = 18;
const MAX_CARDS = 15;

export class RestScene extends Phaser.Scene {
  private returnScene = 'HubScene';
  private content: Phaser.GameObjects.GameObject[] = [];

  constructor() {
    super({ key: 'RestScene' });
  }

  init(data: RestSceneData): void {
    this.returnScene = data?.returnScene ?? 'HubScene';
  }

  create(): void {
    bgm.play('bgm10');
    this.cameras.main.fadeIn(300, 0, 0, 0);
    this.renderBg();
    this.showChoice();
  }

  private renderBg(): void {
    this.add.rectangle(W / 2, H / 2, W, H, BG_DEEP);
    if (this.textures.exists('bg_rest')) {
      this.add.image(W / 2, H / 2, 'bg_rest').setDisplaySize(1280, 720).setAlpha(0.65);
    }
    // magical campfire glow — pink/purple tones
    const glows: [number, number][] = [[160, 0.07], [100, 0.14], [55, 0.26]];
    glows.forEach(([r, a]) => {
      this.add.circle(W / 2, H / 2 + 50, r, PINK).setAlpha(a);
    });
    this.add.text(W / 2, H - 18, '— 캠프파이어 —', {
      fontSize: '12px', color: '#4A2A4A', fontFamily: FONT,
    }).setOrigin(0.5);
  }

  private track(...objs: Phaser.GameObjects.GameObject[]): void {
    this.content.push(...objs);
  }

  private clearContent(): void {
    this.content.forEach(o => (o as { destroy(): void }).destroy());
    this.content = [];
  }

  private showChoice(): void {
    this.clearContent();

    const { playerHp, playerMaxHp } = GameState;
    const healAmt = Math.min(
      Math.floor(playerMaxHp * 0.3),
      playerMaxHp - playerHp,
    );
    const canRest = healAmt > 0;

    const upgradable = GameState.getAllRunCards().filter(c => !c.upgraded && !!c.upgrade);
    const canForge = upgradable.length > 0;

    const title = this.add.text(W / 2, 72, '캠프파이어', {
      fontSize: '36px', color: TEXT_PINK, fontStyle: 'bold', fontFamily: FONT,
      stroke: '#3A0A2A', strokeThickness: 5,
    }).setOrigin(0.5);

    const hpTxt = this.add.text(W / 2, 128,
      `HP  ${playerHp} / ${playerMaxHp}`,
      { fontSize: '18px', color: '#FF7675', fontFamily: FONT },
    ).setOrigin(0.5);

    this.track(title, hpTxt);

    this.renderActionCard(320, 390, {
      label: '휴식',
      sub: 'HP를 30% 회복합니다',
      detail: canRest
        ? `+ ${healAmt} HP  (${playerHp} → ${playerHp + healAmt})`
        : '이미 최대 HP입니다',
      detailColor: canRest ? '#4CAF70' : '#555577',
      accentColor: canRest ? PINK : 0x3A2A3A,
      enabled: canRest,
      onClick: () => this.showRestConfirm(healAmt),
    });

    this.renderActionCard(960, 390, {
      label: '단련',
      sub: '카드 1장을 업그레이드합니다',
      detail: canForge
        ? `업그레이드 가능  ${upgradable.length}장`
        : '업그레이드할 카드 없음',
      detailColor: canForge ? '#C8A0FF' : '#555577',
      accentColor: canForge ? LAVENDER : 0x3A2A3A,
      enabled: canForge,
      onClick: () => this.showForge(),
    });
  }

  private renderActionCard(
    cx: number,
    cy: number,
    cfg: {
      label: string;
      sub: string;
      detail: string;
      detailColor: string;
      accentColor: number;
      enabled: boolean;
      onClick: () => void;
    },
  ): void {
    const CW = 400, CH = 260;
    const strokeColor = cfg.accentColor;

    const bg = this.add.rectangle(cx, cy, CW, CH, BG_PANEL);
    bg.setStrokeStyle(2, strokeColor);

    if (cfg.enabled) {
      bg.setInteractive({ useHandCursor: true });
      bg.on('pointerover', () => bg.setStrokeStyle(3, 0xffffff));
      bg.on('pointerout', () => bg.setStrokeStyle(2, strokeColor));
      bg.on('pointerdown', () => cfg.onClick());
    }

    const accentHex = '#' + cfg.accentColor.toString(16).padStart(6, '0');

    const lbl = this.add.text(cx, cy - 80, cfg.label, {
      fontSize: '30px',
      color: cfg.enabled ? accentHex : '#444466',
      fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    const sub = this.add.text(cx, cy - 10, cfg.sub, {
      fontSize: '15px',
      color: cfg.enabled ? TEXT_SECONDARY : '#444466', fontFamily: FONT,
      align: 'center',
    }).setOrigin(0.5);

    const detail = this.add.text(cx, cy + 70, cfg.detail, {
      fontSize: '16px',
      color: cfg.enabled ? cfg.detailColor : '#444466',
      fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.track(bg, lbl, sub, detail);
  }

  private showRestConfirm(healAmt: number): void {
    this.clearContent();
    const { playerHp, playerMaxHp } = GameState;

    const title = this.add.text(W / 2, 190, '휴식', {
      fontSize: '40px', color: TEXT_PINK, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    const msg = this.add.text(W / 2, 310,
      `HP  ${playerHp}  →  ${Math.min(playerMaxHp, playerHp + healAmt)}\n(+${healAmt})`,
      { fontSize: '28px', color: '#4CAF70', fontStyle: 'bold', align: 'center', fontFamily: FONT },
    ).setOrigin(0.5);

    const confirmBg = this.add.rectangle(W / 2, 440, 200, 52, GREEN);
    confirmBg.setStrokeStyle(2, 0x66CF90);
    confirmBg.setInteractive({ useHandCursor: true });
    confirmBg.on('pointerover', () => confirmBg.setFillStyle(0x66CF90));
    confirmBg.on('pointerout', () => confirmBg.setFillStyle(GREEN));
    confirmBg.on('pointerdown', () => { GameState.restHeal(); this.leave(); });
    const confirmTxt = this.add.text(W / 2, 440, '확인', {
      fontSize: '18px', color: '#fff', fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    const back = this.makeBackBtn(() => this.showChoice());
    this.track(title, msg, confirmBg, confirmTxt, ...back);
  }

  private showForge(): void {
    this.clearContent();

    const titleTxt = this.add.text(W / 2, 50,
      '단련 — 업그레이드할 카드를 선택하세요',
      { fontSize: '20px', color: '#C8A0FF', fontStyle: 'bold', fontFamily: FONT },
    ).setOrigin(0.5);
    this.track(titleTxt);

    const allCards = GameState.getAllRunCards();
    const display = allCards.slice(0, MAX_CARDS);

    const totalSpanX = (COLS - 1) * (CARD_W + CARD_GAP);
    const startX = W / 2 - totalSpanX / 2;
    const startY = 155;

    display.forEach((card, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const cx = startX + col * (CARD_W + CARD_GAP);
      const cy = startY + row * (CARD_H + CARD_GAP);
      this.renderForgeCard(cx, cy, card);
    });

    if (allCards.length > MAX_CARDS) {
      const rows = Math.ceil(MAX_CARDS / COLS);
      const overflowY = startY + rows * (CARD_H + CARD_GAP) - CARD_GAP / 2;
      const more = this.add.text(W / 2, overflowY,
        `+ ${allCards.length - MAX_CARDS}장 더`,
        { fontSize: '13px', color: '#555577', fontFamily: FONT },
      ).setOrigin(0.5);
      this.track(more);
    }

    const back = this.makeBackBtn(() => this.showChoice());
    this.track(...back);
  }

  private renderForgeCard(cx: number, cy: number, card: Card): void {
    const isUpgraded = card.upgraded === true;
    const canUpgrade = !isUpgraded && !!card.upgrade;

    const borderColor = isUpgraded ? GOLD : (canUpgrade ? LAVENDER : 0x3A2A3A);
    const bgColor = isUpgraded ? 0x2A1A00 : (canUpgrade ? BG_PANEL : 0x120810);

    const bg = this.add.rectangle(cx, cy, CARD_W, CARD_H, bgColor);
    bg.setStrokeStyle(2, borderColor);

    if (canUpgrade) {
      bg.setInteractive({ useHandCursor: true });
      bg.on('pointerover', () => bg.setStrokeStyle(3, 0xffffff));
      bg.on('pointerout', () => bg.setStrokeStyle(2, borderColor));
      bg.on('pointerdown', () => this.showUpgradeConfirm(card));
    }

    const badge = this.add.circle(cx - CARD_W / 2 + 14, cy - CARD_H / 2 + 14, 12, PINK);
    const costTxt = this.add.text(
      cx - CARD_W / 2 + 14, cy - CARD_H / 2 + 14,
      String(card.cost),
      { fontSize: '12px', color: '#fff', fontStyle: 'bold', fontFamily: FONT },
    ).setOrigin(0.5);

    const displayName = card.name + (isUpgraded ? '+' : '');
    const nameTxt = this.add.text(cx, cy - CARD_H / 2 + 30, displayName, {
      fontSize: '12px',
      color: isUpgraded ? '#FFD700' : (canUpgrade ? TEXT_PRIMARY : '#555577'),
      fontStyle: 'bold', fontFamily: FONT,
      wordWrap: { width: CARD_W - 16 }, align: 'center',
    }).setOrigin(0.5);

    const descTxt = this.add.text(cx, cy + 10, card.description, {
      fontSize: '9px',
      color: isUpgraded ? '#C8A060' : (canUpgrade ? TEXT_SECONDARY : '#444466'),
      wordWrap: { width: CARD_W - 14 }, align: 'center', fontFamily: FONT,
    }).setOrigin(0.5);

    const statusLabel = isUpgraded
      ? this.add.text(cx, cy + CARD_H / 2 - 12, '✓ 업그레이드됨', {
          fontSize: '8px', color: '#FFD700', fontFamily: FONT,
        }).setOrigin(0.5)
      : (!card.upgrade
          ? this.add.text(cx, cy + CARD_H / 2 - 12, '업그레이드 없음', {
              fontSize: '8px', color: '#333355', fontFamily: FONT,
            }).setOrigin(0.5)
          : null);

    this.track(bg, badge, costTxt, nameTxt, descTxt);
    if (statusLabel) this.track(statusLabel);
  }

  private showUpgradeConfirm(card: Card): void {
    const upgCopy = { ...card };
    if (card.upgrade) card.upgrade(upgCopy);

    const overlay = this.add.rectangle(W / 2, H / 2, W, H, 0x000000)
      .setAlpha(0.75).setDepth(50);
    const panel = this.add.rectangle(W / 2, H / 2, 500, 340, BG_PANEL)
      .setStrokeStyle(2, LAVENDER).setDepth(51);

    const titleTxt = this.add.text(W / 2, H / 2 - 130,
      `"${card.name}" 업그레이드`,
      { fontSize: '22px', color: TEXT_PRIMARY, fontStyle: 'bold', fontFamily: FONT },
    ).setOrigin(0.5).setDepth(52);

    const costChanged = upgCopy.cost !== card.cost;

    const beforeTxt = this.add.text(W / 2 - 110, H / 2 - 40,
      `현재\n${card.description}${costChanged ? `\n비용 ${card.cost}` : ''}`,
      { fontSize: '13px', color: TEXT_SECONDARY, align: 'center', wordWrap: { width: 190 }, fontFamily: FONT },
    ).setOrigin(0.5).setDepth(52);

    const afterTxt = this.add.text(W / 2 + 110, H / 2 - 40,
      `업그레이드 후\n${upgCopy.description}${costChanged ? `\n비용 ${upgCopy.cost}` : ''}`,
      { fontSize: '13px', color: '#C8A0FF', fontStyle: 'bold', align: 'center', wordWrap: { width: 190 }, fontFamily: FONT },
    ).setOrigin(0.5).setDepth(52);

    const yesBg = this.add.rectangle(W / 2 - 95, H / 2 + 115, 160, 48, ROSE)
      .setStrokeStyle(2, PINK_SOFT).setDepth(52).setInteractive({ useHandCursor: true });
    const yesTxt = this.add.text(W / 2 - 95, H / 2 + 115, '업그레이드', {
      fontSize: '15px', color: '#fff', fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5).setDepth(53);

    const noBg = this.add.rectangle(W / 2 + 95, H / 2 + 115, 160, 48, BG_PANEL)
      .setStrokeStyle(2, BORDER_DIM).setDepth(52).setInteractive({ useHandCursor: true });
    const noTxt = this.add.text(W / 2 + 95, H / 2 + 115, '취소', {
      fontSize: '15px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5).setDepth(53);

    const arrowTxt = this.add.text(W / 2, H / 2 - 40, '→', {
      fontSize: '22px', color: '#C8A0FF', fontFamily: FONT,
    }).setOrigin(0.5).setDepth(52);

    const all = [overlay, panel, titleTxt, beforeTxt, arrowTxt, afterTxt, yesBg, yesTxt, noBg, noTxt];

    yesBg.on('pointerover', () => yesBg.setFillStyle(PINK));
    yesBg.on('pointerout', () => yesBg.setFillStyle(ROSE));
    yesBg.on('pointerdown', () => {
      GameState.upgradeCard(card.id);
      all.forEach(o => o.destroy());
      this.leave();
    });

    noBg.on('pointerover', () => noBg.setFillStyle(BG_HOVER));
    noBg.on('pointerout', () => noBg.setFillStyle(BG_PANEL));
    noBg.on('pointerdown', () => all.forEach(o => o.destroy()));
  }

  private makeBackBtn(cb: () => void): Phaser.GameObjects.GameObject[] {
    const btn = this.add.rectangle(W / 2, H - 44, 160, 40, BG_PANEL)
      .setStrokeStyle(1, BORDER_DIM).setInteractive({ useHandCursor: true });
    btn.on('pointerover', () => btn.setFillStyle(BG_HOVER));
    btn.on('pointerout', () => btn.setFillStyle(BG_PANEL));
    btn.on('pointerdown', cb);
    const txt = this.add.text(W / 2, H - 44, '← 돌아가기', {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);
    return [btn, txt];
  }

  private leave(): void {
    this.cameras.main.fadeOut(300, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.scene.start(this.returnScene);
    });
  }
}
