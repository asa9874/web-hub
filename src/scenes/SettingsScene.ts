import Phaser from 'phaser';
import { bgm } from '../audio/BGMManager';
import {
  BG_DEEP, BG_PANEL,
  PINK, LAVENDER, GOLD,
  TEXT_SECONDARY, TEXT_GOLD, FONT,
} from '../theme';

const CX = 640;
const CY = 360;
const PANEL_W = 540;
const PANEL_H = 320;
const PANEL_X = CX - PANEL_W / 2;
const PANEL_Y = CY - PANEL_H / 2;

const TRACK_W = 380;
const TRACK_H = 10;
const TRACK_X = CX - TRACK_W / 2;
const KNOB_R = 12;

export class SettingsScene extends Phaser.Scene {
  private bgmFill!: Phaser.GameObjects.Graphics;
  private bgmKnob!: Phaser.GameObjects.Arc;
  private bgmLabel!: Phaser.GameObjects.Text;

  private sfxFill!: Phaser.GameObjects.Graphics;
  private sfxKnob!: Phaser.GameObjects.Arc;
  private sfxLabel!: Phaser.GameObjects.Text;

  constructor() { super({ key: 'SettingsScene' }); }

  create(): void {
    this.renderOverlay();
    this.renderPanel();
    this.renderBgmSlider();
    this.renderSfxSlider();
    this.renderCloseBtn();
  }

  // ── 배경 오버레이 ─────────────────────────────────────────────────────────

  private renderOverlay(): void {
    const overlay = this.add.rectangle(CX, CY, 1280, 720, BG_DEEP, 0.75)
      .setInteractive();
    overlay.on('pointerup', () => this.close());
  }

  // ── 패널 ──────────────────────────────────────────────────────────────────

  private renderPanel(): void {
    const g = this.add.graphics();

    // 외부 글로우
    g.fillStyle(PINK, 0.05);
    g.fillRoundedRect(PANEL_X - 8, PANEL_Y - 8, PANEL_W + 16, PANEL_H + 16, 18);

    // 패널 배경
    g.fillStyle(BG_PANEL, 0.97);
    g.fillRoundedRect(PANEL_X, PANEL_Y, PANEL_W, PANEL_H, 14);

    // 테두리
    g.lineStyle(1.5, GOLD, 0.5);
    g.strokeRoundedRect(PANEL_X, PANEL_Y, PANEL_W, PANEL_H, 14);

    // 상단 강조선
    g.lineStyle(2, PINK, 0.6);
    g.lineBetween(PANEL_X + 40, PANEL_Y, PANEL_X + PANEL_W - 40, PANEL_Y);

    // 패널 클릭 블로킹 (오버레이 클릭 닫기 방지)
    this.add.rectangle(CX, CY, PANEL_W, PANEL_H, 0, 0)
      .setInteractive()
      .on('pointerup', () => { /* absorb */ });

    this.add.text(CX, PANEL_Y + 36, '⚙  설정', {
      fontSize: '22px', color: TEXT_GOLD, fontFamily: FONT, fontStyle: 'bold',
      shadow: { offsetX: 0, offsetY: 0, color: '#FFD700', blur: 12, fill: true },
    }).setOrigin(0.5);

    // 구분선
    g.lineStyle(1, GOLD, 0.2);
    g.lineBetween(PANEL_X + 30, PANEL_Y + 64, PANEL_X + PANEL_W - 30, PANEL_Y + 64);
  }

  // ── BGM 슬라이더 ──────────────────────────────────────────────────────────

  private renderBgmSlider(): void {
    const rowY = PANEL_Y + 116;

    this.add.text(PANEL_X + 44, rowY - 22, 'BGM 볼륨', {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
    });

    this.bgmFill = this.add.graphics();
    this.bgmLabel = this.add.text(PANEL_X + PANEL_W - 44, rowY - 22, '', {
      fontSize: '14px', color: TEXT_GOLD, fontFamily: FONT,
    }).setOrigin(1, 0);

    // 트랙 배경
    const trackBg = this.add.graphics();
    trackBg.fillStyle(0x1a0a2e, 1);
    trackBg.fillRoundedRect(TRACK_X, rowY - TRACK_H / 2, TRACK_W, TRACK_H, 5);
    trackBg.lineStyle(1, LAVENDER, 0.3);
    trackBg.strokeRoundedRect(TRACK_X, rowY - TRACK_H / 2, TRACK_W, TRACK_H, 5);

    this.bgmKnob = this.add.circle(0, rowY, KNOB_R, PINK, 1).setDepth(10);

    this.updateSlider('bgm', bgm.bgmVolume);
    this.setupSliderDrag('bgm', rowY);
  }

  // ── SFX 슬라이더 ─────────────────────────────────────────────────────────

  private renderSfxSlider(): void {
    const rowY = PANEL_Y + 218;

    this.add.text(PANEL_X + 44, rowY - 22, 'SFX 볼륨', {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
    });

    this.sfxFill = this.add.graphics();
    this.sfxLabel = this.add.text(PANEL_X + PANEL_W - 44, rowY - 22, '', {
      fontSize: '14px', color: TEXT_GOLD, fontFamily: FONT,
    }).setOrigin(1, 0);

    const trackBg = this.add.graphics();
    trackBg.fillStyle(0x1a0a2e, 1);
    trackBg.fillRoundedRect(TRACK_X, rowY - TRACK_H / 2, TRACK_W, TRACK_H, 5);
    trackBg.lineStyle(1, LAVENDER, 0.3);
    trackBg.strokeRoundedRect(TRACK_X, rowY - TRACK_H / 2, TRACK_W, TRACK_H, 5);

    this.sfxKnob = this.add.circle(0, rowY, KNOB_R, LAVENDER, 1).setDepth(10);

    this.updateSlider('sfx', bgm.sfxVolume);
    this.setupSliderDrag('sfx', rowY);
  }

  // ── 슬라이더 업데이트 ─────────────────────────────────────────────────────

  private updateSlider(type: 'bgm' | 'sfx', vol: number): void {
    const isBgm = type === 'bgm';
    const rowY = isBgm ? PANEL_Y + 116 : PANEL_Y + 218;
    const fill = isBgm ? this.bgmFill : this.sfxFill;
    const knob = isBgm ? this.bgmKnob : this.sfxKnob;
    const label = isBgm ? this.bgmLabel : this.sfxLabel;

    const fillW = Math.max(KNOB_R, TRACK_W * vol);
    fill.clear();
    fill.fillGradientStyle(PINK, LAVENDER, PINK, LAVENDER, 1);
    fill.fillRoundedRect(TRACK_X, rowY - TRACK_H / 2, fillW, TRACK_H, 5);

    knob.setX(TRACK_X + TRACK_W * vol);
    label.setText(`${Math.round(vol * 100)}%`);
  }

  // ── 드래그 설정 ───────────────────────────────────────────────────────────

  private setupSliderDrag(type: 'bgm' | 'sfx', rowY: number): void {
    const zone = this.add.zone(CX, rowY, TRACK_W + KNOB_R * 4, KNOB_R * 5)
      .setInteractive();

    let dragging = false;

    zone.on('pointerdown', (ptr: Phaser.Input.Pointer) => {
      dragging = true;
      this.applyDrag(type, ptr.x);
    });

    this.input.on('pointermove', (ptr: Phaser.Input.Pointer) => {
      if (!dragging) return;
      this.applyDrag(type, ptr.x);
    });

    this.input.on('pointerup', () => { dragging = false; });
  }

  private applyDrag(type: 'bgm' | 'sfx', ptrX: number): void {
    const raw = (ptrX - TRACK_X) / TRACK_W;
    const vol = Math.max(0, Math.min(1, raw));

    if (type === 'bgm') {
      bgm.setBgmVolume(vol);
      this.updateSlider('bgm', vol);
    } else {
      bgm.setSfxVolume(vol);
      this.updateSlider('sfx', vol);
    }
  }

  // ── 닫기 버튼 ─────────────────────────────────────────────────────────────

  private renderCloseBtn(): void {
    const bx = PANEL_X + PANEL_W - 20;
    const by = PANEL_Y + 20;

    const btn = this.add.text(bx, by, '✕', {
      fontSize: '20px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(20);

    btn.on('pointerover', () => btn.setStyle({ color: '#FF6B9D' }));
    btn.on('pointerout',  () => btn.setStyle({ color: '#8080A0' }));
    btn.on('pointerup',   () => this.close());

    // 닫기 안내 텍스트
    this.add.text(CX, PANEL_Y + PANEL_H - 22, '배경 클릭 또는 ✕ 로 닫기', {
      fontSize: '11px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5).setAlpha(0.5);
  }

  private close(): void {
    this.scene.stop();
  }
}

/** 어느 씬에서나 호출 가능한 설정 버튼 헬퍼 */
export function addSettingsButton(scene: Phaser.Scene, x = 1248, y = 36): void {
  const btn = scene.add.text(x, y, '⚙', {
    fontSize: '22px',
    color: '#C8A0C8',
    fontFamily: FONT,
    shadow: { offsetX: 0, offsetY: 0, color: '#C8A0C8', blur: 8, fill: false },
  }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(100);

  btn.on('pointerover', () => btn.setStyle({ color: TEXT_GOLD }));
  btn.on('pointerout',  () => btn.setStyle({ color: '#C8A0C8' }));
  btn.on('pointerup',   () => {
    if (!scene.scene.isActive('SettingsScene')) {
      scene.scene.launch('SettingsScene');
    }
  });
}
