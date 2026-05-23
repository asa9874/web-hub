import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { Card, RestSceneData } from '../types';

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
    this.cameras.main.fadeIn(300, 0, 0, 0);
    this.renderBg();
    this.showChoice();
  }

  // ── 배경 (씬 전체 생존) ─────────────────────────────────────────────────

  private renderBg(): void {
    this.add.rectangle(W / 2, H / 2, W, H, 0x140a02);
    const glows: [number, number][] = [[160, 0.07], [100, 0.14], [55, 0.26]];
    glows.forEach(([r, a]) => {
      this.add.circle(W / 2, H / 2 + 50, r, 0xff6200).setAlpha(a);
    });
    this.add.text(W / 2, H - 18, '— 캠프파이어 —', {
      fontSize: '12px', color: '#2a1505',
    }).setOrigin(0.5);
  }

  // ── 동적 콘텐츠 관리 ────────────────────────────────────────────────────

  private track(...objs: Phaser.GameObjects.GameObject[]): void {
    this.content.push(...objs);
  }

  private clearContent(): void {
    this.content.forEach(o => (o as { destroy(): void }).destroy());
    this.content = [];
  }

  // ── 초기 선택 화면 ───────────────────────────────────────────────────────

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
      fontSize: '36px', color: '#ff9900', fontStyle: 'bold',
      stroke: '#1a0800', strokeThickness: 5,
    }).setOrigin(0.5);

    const hpTxt = this.add.text(W / 2, 128,
      `HP  ${playerHp} / ${playerMaxHp}`,
      { fontSize: '18px', color: '#ff7675' },
    ).setOrigin(0.5);

    this.track(title, hpTxt);

    this.renderActionCard(320, 390, {
      label: '휴식',
      sub: 'HP를 30% 회복합니다',
      detail: canRest
        ? `+ ${healAmt} HP  (${playerHp} → ${playerHp + healAmt})`
        : '이미 최대 HP입니다',
      detailColor: canRest ? '#00b894' : '#555555',
      accentColor: canRest ? 0xff6600 : 0x3a3a3a,
      enabled: canRest,
      onClick: () => this.showRestConfirm(healAmt),
    });

    this.renderActionCard(960, 390, {
      label: '단련',
      sub: '카드 1장을 업그레이드합니다',
      detail: canForge
        ? `업그레이드 가능  ${upgradable.length}장`
        : '업그레이드할 카드 없음',
      detailColor: canForge ? '#74b9ff' : '#555555',
      accentColor: canForge ? 0x0066ff : 0x3a3a3a,
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

    const bg = this.add.rectangle(cx, cy, CW, CH, 0x1c1005);
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
      color: cfg.enabled ? accentHex : '#444444',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    const sub = this.add.text(cx, cy - 10, cfg.sub, {
      fontSize: '15px',
      color: cfg.enabled ? '#cccccc' : '#444444',
      align: 'center',
    }).setOrigin(0.5);

    const detail = this.add.text(cx, cy + 70, cfg.detail, {
      fontSize: '16px',
      color: cfg.enabled ? cfg.detailColor : '#444444',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    this.track(bg, lbl, sub, detail);
  }

  // ── 휴식 확인 화면 ───────────────────────────────────────────────────────

  private showRestConfirm(healAmt: number): void {
    this.clearContent();
    const { playerHp, playerMaxHp } = GameState;

    const title = this.add.text(W / 2, 190, '휴식', {
      fontSize: '40px', color: '#ffcc66', fontStyle: 'bold',
    }).setOrigin(0.5);

    const msg = this.add.text(W / 2, 310,
      `HP  ${playerHp}  →  ${Math.min(playerMaxHp, playerHp + healAmt)}\n(+${healAmt})`,
      { fontSize: '28px', color: '#00b894', fontStyle: 'bold', align: 'center' },
    ).setOrigin(0.5);

    const confirmBg = this.add.rectangle(W / 2, 440, 200, 52, 0x27ae60);
    confirmBg.setStrokeStyle(2, 0x2ecc71);
    confirmBg.setInteractive({ useHandCursor: true });
    confirmBg.on('pointerover', () => confirmBg.setFillStyle(0x2ecc71));
    confirmBg.on('pointerout', () => confirmBg.setFillStyle(0x27ae60));
    confirmBg.on('pointerdown', () => { GameState.restHeal(); this.leave(); });
    const confirmTxt = this.add.text(W / 2, 440, '확인', {
      fontSize: '18px', color: '#fff', fontStyle: 'bold',
    }).setOrigin(0.5);

    const back = this.makeBackBtn(() => this.showChoice());
    this.track(title, msg, confirmBg, confirmTxt, ...back);
  }

  // ── 단련 카드 선택 화면 ──────────────────────────────────────────────────

  private showForge(): void {
    this.clearContent();

    const titleTxt = this.add.text(W / 2, 50,
      '단련 — 업그레이드할 카드를 선택하세요',
      { fontSize: '20px', color: '#88ccff', fontStyle: 'bold' },
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
        { fontSize: '13px', color: '#555555' },
      ).setOrigin(0.5);
      this.track(more);
    }

    const back = this.makeBackBtn(() => this.showChoice());
    this.track(...back);
  }

  private renderForgeCard(cx: number, cy: number, card: Card): void {
    const isUpgraded = card.upgraded === true;
    const canUpgrade = !isUpgraded && !!card.upgrade;

    const borderColor = isUpgraded ? 0xf0c040 : (canUpgrade ? 0x74b9ff : 0x383838);
    const bgColor = isUpgraded ? 0x2a2200 : (canUpgrade ? 0x1e2535 : 0x111111);

    const bg = this.add.rectangle(cx, cy, CARD_W, CARD_H, bgColor);
    bg.setStrokeStyle(2, borderColor);

    if (canUpgrade) {
      bg.setInteractive({ useHandCursor: true });
      bg.on('pointerover', () => bg.setStrokeStyle(3, 0xffffff));
      bg.on('pointerout', () => bg.setStrokeStyle(2, borderColor));
      bg.on('pointerdown', () => this.showUpgradeConfirm(card));
    }

    const badge = this.add.circle(cx - CARD_W / 2 + 14, cy - CARD_H / 2 + 14, 12, 0x6c5ce7);
    const costTxt = this.add.text(
      cx - CARD_W / 2 + 14, cy - CARD_H / 2 + 14,
      String(card.cost),
      { fontSize: '12px', color: '#fff', fontStyle: 'bold' },
    ).setOrigin(0.5);

    const displayName = card.name + (isUpgraded ? '+' : '');
    const nameTxt = this.add.text(cx, cy - CARD_H / 2 + 30, displayName, {
      fontSize: '12px',
      color: isUpgraded ? '#f0c040' : (canUpgrade ? '#dfe6e9' : '#555555'),
      fontStyle: 'bold',
      wordWrap: { width: CARD_W - 16 }, align: 'center',
    }).setOrigin(0.5);

    const descTxt = this.add.text(cx, cy + 10, card.description, {
      fontSize: '9px',
      color: isUpgraded ? '#c8a000' : (canUpgrade ? '#b2bec3' : '#444444'),
      wordWrap: { width: CARD_W - 14 }, align: 'center',
    }).setOrigin(0.5);

    const statusLabel = isUpgraded
      ? this.add.text(cx, cy + CARD_H / 2 - 12, '✓ 업그레이드됨', {
          fontSize: '8px', color: '#f0c040',
        }).setOrigin(0.5)
      : (!card.upgrade
          ? this.add.text(cx, cy + CARD_H / 2 - 12, '업그레이드 없음', {
              fontSize: '8px', color: '#333333',
            }).setOrigin(0.5)
          : null);

    this.track(bg, badge, costTxt, nameTxt, descTxt);
    if (statusLabel) this.track(statusLabel);
  }

  // ── 업그레이드 확인 오버레이 ─────────────────────────────────────────────

  private showUpgradeConfirm(card: Card): void {
    const upgCopy = { ...card };
    if (card.upgrade) card.upgrade(upgCopy);

    const overlay = this.add.rectangle(W / 2, H / 2, W, H, 0x000000)
      .setAlpha(0.75).setDepth(50);
    const panel = this.add.rectangle(W / 2, H / 2, 500, 340, 0x1a1f30)
      .setStrokeStyle(2, 0x74b9ff).setDepth(51);

    const titleTxt = this.add.text(W / 2, H / 2 - 130,
      `"${card.name}" 업그레이드`,
      { fontSize: '22px', color: '#ffffff', fontStyle: 'bold' },
    ).setOrigin(0.5).setDepth(52);

    const costChanged = upgCopy.cost !== card.cost;

    const beforeTxt = this.add.text(W / 2 - 110, H / 2 - 40,
      `현재\n${card.description}${costChanged ? `\n비용 ${card.cost}` : ''}`,
      { fontSize: '13px', color: '#aaaaaa', align: 'center', wordWrap: { width: 190 } },
    ).setOrigin(0.5).setDepth(52);

    const afterTxt = this.add.text(W / 2 + 110, H / 2 - 40,
      `업그레이드 후\n${upgCopy.description}${costChanged ? `\n비용 ${upgCopy.cost}` : ''}`,
      { fontSize: '13px', color: '#74b9ff', fontStyle: 'bold', align: 'center', wordWrap: { width: 190 } },
    ).setOrigin(0.5).setDepth(52);

    const yesBg = this.add.rectangle(W / 2 - 95, H / 2 + 115, 160, 48, 0x0984e3)
      .setStrokeStyle(2, 0x74b9ff).setDepth(52).setInteractive({ useHandCursor: true });
    const yesTxt = this.add.text(W / 2 - 95, H / 2 + 115, '업그레이드', {
      fontSize: '15px', color: '#fff', fontStyle: 'bold',
    }).setOrigin(0.5).setDepth(53);

    const noBg = this.add.rectangle(W / 2 + 95, H / 2 + 115, 160, 48, 0x2d3436)
      .setStrokeStyle(2, 0x636e72).setDepth(52).setInteractive({ useHandCursor: true });
    const noTxt = this.add.text(W / 2 + 95, H / 2 + 115, '취소', {
      fontSize: '15px', color: '#b2bec3',
    }).setOrigin(0.5).setDepth(53);

    const arrowTxt = this.add.text(W / 2, H / 2 - 40, '→', {
      fontSize: '22px', color: '#74b9ff',
    }).setOrigin(0.5).setDepth(52);

    const all = [overlay, panel, titleTxt, beforeTxt, arrowTxt, afterTxt, yesBg, yesTxt, noBg, noTxt];

    yesBg.on('pointerover', () => yesBg.setFillStyle(0x2196f3));
    yesBg.on('pointerout', () => yesBg.setFillStyle(0x0984e3));
    yesBg.on('pointerdown', () => {
      GameState.upgradeCard(card.id);
      all.forEach(o => o.destroy());
      this.leave();
    });

    noBg.on('pointerover', () => noBg.setFillStyle(0x3d4451));
    noBg.on('pointerout', () => noBg.setFillStyle(0x2d3436));
    noBg.on('pointerdown', () => all.forEach(o => o.destroy()));
  }

  // ── 유틸 ────────────────────────────────────────────────────────────────

  private makeBackBtn(cb: () => void): Phaser.GameObjects.GameObject[] {
    const btn = this.add.rectangle(W / 2, H - 44, 160, 40, 0x2d3436)
      .setStrokeStyle(1, 0x636e72).setInteractive({ useHandCursor: true });
    btn.on('pointerover', () => btn.setFillStyle(0x3d4451));
    btn.on('pointerout', () => btn.setFillStyle(0x2d3436));
    btn.on('pointerdown', cb);
    const txt = this.add.text(W / 2, H - 44, '← 돌아가기', {
      fontSize: '14px', color: '#b2bec3',
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
