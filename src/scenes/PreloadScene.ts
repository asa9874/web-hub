import Phaser from 'phaser';
import { bgm, BGM_PRELOAD_KEYS, BGM_PATHS } from '../audio/BGMManager';
import {
  BG_DEEP, BG_PANEL,
  PINK, ROSE, LAVENDER, GOLD,
  TEXT_PRIMARY, TEXT_SECONDARY, TEXT_GOLD,
  FONT,
} from '../theme';

const TIPS: string[] = [
  '덱의 카드 수를 줄이면 원하는 카드를 더 자주 뽑을 수 있어요.',
  '블록은 매 턴 시작 시 소멸합니다. 적의 공격 직전에 사용해야 가장 효과적이에요.',
  '엘리트 몬스터를 처치하면 강력한 유물을 획득할 수 있어요.',
  '휴식 지점에서는 HP를 회복하거나 카드를 강화할 수 있어요.',
  '마나는 매 턴 완전히 회복됩니다. 아끼지 말고 마음껏 사용해보세요!',
  '카드를 업그레이드하면 코스트가 줄어들거나 효과가 강화됩니다.',
  '보스전 전에는 반드시 휴식 지점에서 체력을 회복하세요.',
  '독 상태는 매 턴 HP를 깎아냅니다. 독 저항 유물을 노려보세요.',
  '같은 유형의 카드를 조합해 강력한 시너지를 만들어보세요.',
  '상점에서 불필요한 카드를 팔면 골드를 얻을 수 있어요.',
  '희귀 카드일수록 강력하지만, 덱의 일관성이 승리의 열쇠입니다.',
  '이동 경로를 전략적으로 선택하세요. 보스 전의 충분한 준비가 중요합니다.',
];

const CX = 640;
const BAR_W = 680;
const BAR_H = 20;
const BAR_R = 10;
const BAR_X = CX - BAR_W / 2;
const BAR_Y = 470;

export class PreloadScene extends Phaser.Scene {
  private barFill!: Phaser.GameObjects.Graphics;
  private pctText!: Phaser.GameObjects.Text;
  private tipText!: Phaser.GameObjects.Text;
  private shuffledTips: string[] = [];

  constructor() { super({ key: 'PreloadScene' }); }

  preload(): void {
    this.shuffledTips = [...TIPS].sort(() => Math.random() - 0.5);

    this.buildBackground();
    this.buildSigil();
    this.buildTitle();
    this.buildBar();
    this.buildTipBox();
    this.setupLoadEvents();
    this.loadAll();
  }

  create(): void {
    bgm.init(this.sys.game);
    this.cameras.main.fadeOut(600, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('TitleScene'));
  }

  // ── Background ────────────────────────────────────────────────────────────

  private buildBackground(): void {
    this.add.rectangle(CX, 360, 1280, 720, BG_DEEP);

    const orbs: [number, number, number, number, number][] = [
      [640, 300, 300, PINK,    0.05],
      [200, 520, 180, LAVENDER, 0.06],
      [1060, 170, 200, ROSE,   0.04],
      [140, 170, 130, GOLD,    0.03],
      [1130, 590, 160, LAVENDER, 0.05],
    ];
    for (const [x, y, r, c, a] of orbs) {
      const orb = this.add.circle(x, y, r, c).setAlpha(a);
      this.tweens.add({
        targets: orb,
        alpha: { from: a * 0.3, to: a },
        duration: Phaser.Math.Between(3000, 6000),
        yoyo: true, repeat: -1,
        delay: Phaser.Math.Between(0, 3000),
        ease: 'Sine.InOut',
      });
    }

    for (let i = 0; i < 110; i++) {
      const x = Phaser.Math.Between(0, 1280);
      const y = Phaser.Math.Between(0, 720);
      const r = Math.random() < 0.1 ? 2 : 1;
      const a = Phaser.Math.FloatBetween(0.1, 0.6);
      const star = this.add.circle(x, y, r, 0xFFFFFF).setAlpha(a);
      this.tweens.add({
        targets: star,
        alpha: { from: a * 0.1, to: a },
        duration: Phaser.Math.Between(1500, 4500),
        yoyo: true, repeat: -1,
        delay: Phaser.Math.Between(0, 4000),
        ease: 'Sine.InOut',
      });
    }
  }

  // ── Magical Sigil (center animation) ─────────────────────────────────────

  private buildSigil(): void {
    const cx = CX, cy = 285;

    // Outer ambient glow
    const glow = this.add.circle(cx, cy, 105, PINK, 0.06);
    this.tweens.add({
      targets: glow,
      alpha: { from: 0.03, to: 0.13 },
      scaleX: { from: 0.94, to: 1.09 },
      scaleY: { from: 0.94, to: 1.09 },
      duration: 2200, yoyo: true, repeat: -1, ease: 'Sine.InOut',
    });

    // Outer ring — rotates CW
    const outerCont = this.add.container(cx, cy);
    const outerRing = this.add.graphics();
    outerRing.lineStyle(1.5, GOLD, 0.55);
    outerRing.strokeCircle(0, 0, 84);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      outerRing.lineBetween(
        Math.cos(a) * 79, Math.sin(a) * 79,
        Math.cos(a) * 91, Math.sin(a) * 91,
      );
    }
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      outerRing.fillStyle(GOLD, 0.85);
      outerRing.fillCircle(Math.cos(a) * 84, Math.sin(a) * 84, 3.5);
    }
    outerCont.add(outerRing);
    this.tweens.add({ targets: outerCont, rotation: Math.PI * 2, duration: 14000, repeat: -1, ease: 'Linear' });

    // Inner ring — rotates CCW
    const innerCont = this.add.container(cx, cy);
    const innerRing = this.add.graphics();
    innerRing.lineStyle(1, LAVENDER, 0.7);
    innerRing.strokeCircle(0, 0, 55);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      innerRing.fillStyle(LAVENDER, 0.9);
      innerRing.fillCircle(Math.cos(a) * 55, Math.sin(a) * 55, 3);
    }
    innerCont.add(innerRing);
    this.tweens.add({ targets: innerCont, rotation: -Math.PI * 2, duration: 7500, repeat: -1, ease: 'Linear' });

    // Core ring — rotates CW fast
    const coreCont = this.add.container(cx, cy);
    const coreRing = this.add.graphics();
    coreRing.lineStyle(0.8, PINK, 0.45);
    coreRing.strokeCircle(0, 0, 32);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      coreRing.fillStyle(PINK, 0.7);
      coreRing.fillCircle(Math.cos(a) * 32, Math.sin(a) * 32, 2);
    }
    coreCont.add(coreRing);
    this.tweens.add({ targets: coreCont, rotation: Math.PI * 2, duration: 4200, repeat: -1, ease: 'Linear' });

    // Center ✦ symbol
    const star = this.add.text(cx, cy + 2, '✦', {
      fontSize: '34px', color: TEXT_GOLD, fontFamily: FONT,
      shadow: { offsetX: 0, offsetY: 0, color: '#FFD700', blur: 22, fill: true },
    }).setOrigin(0.5);
    this.tweens.add({
      targets: star,
      alpha: { from: 0.65, to: 1.0 },
      scaleX: { from: 0.93, to: 1.06 },
      scaleY: { from: 0.93, to: 1.06 },
      duration: 1800, yoyo: true, repeat: -1, ease: 'Sine.InOut',
    });
  }

  // ── Title ─────────────────────────────────────────────────────────────────

  private buildTitle(): void {
    this.load.once('complete', () => {
      const img = this.add.image(CX, 112, 'title_logo').setOrigin(0.5);
      const scale = Math.min(900 / img.width, 180 / img.height);
      img.setScale(scale);
    });

    const sub = this.add.text(CX, 155, '불러오는 중...', {
      fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);
    this.tweens.add({
      targets: sub, alpha: { from: 0.4, to: 0.85 },
      duration: 900, yoyo: true, repeat: -1, ease: 'Sine.InOut',
    });
  }

  // ── Loading bar ───────────────────────────────────────────────────────────

  private buildBar(): void {
    // Outer glow halo
    const frame = this.add.graphics();
    frame.fillStyle(PINK, 0.07);
    frame.fillRoundedRect(BAR_X - 6, BAR_Y - 6, BAR_W + 12, BAR_H + 12, BAR_R + 4);

    // Dark track
    frame.fillStyle(0x0D0322, 0.92);
    frame.fillRoundedRect(BAR_X, BAR_Y, BAR_W, BAR_H, BAR_R);

    // Gold border
    frame.lineStyle(1.5, GOLD, 0.65);
    frame.strokeRoundedRect(BAR_X, BAR_Y, BAR_W, BAR_H, BAR_R);

    // Corner diamond ornaments
    const deco = this.add.graphics();
    deco.fillStyle(GOLD, 0.85);
    const diamond = (gx: number, gy: number) => {
      const s = 5;
      deco.fillTriangle(gx, gy - s, gx + s, gy, gx, gy + s);
      deco.fillTriangle(gx, gy - s, gx - s, gy, gx, gy + s);
    };
    diamond(BAR_X - 10, BAR_Y + BAR_H / 2);
    diamond(BAR_X + BAR_W + 10, BAR_Y + BAR_H / 2);

    // Fill graphics (redrawn each progress event)
    this.barFill = this.add.graphics();

    // Percentage text
    this.pctText = this.add.text(CX, BAR_Y + BAR_H + 15, '0%', {
      fontSize: '12px', color: TEXT_GOLD, fontFamily: FONT,
    }).setOrigin(0.5);
  }

  private redrawBar(progress: number): void {
    this.barFill.clear();
    if (progress <= 0) return;

    const bx = BAR_X + 2;
    const by = BAR_Y + 2;
    const fw = Math.max(6, (BAR_W - 4) * progress);
    const fh = BAR_H - 4;

    this.barFill.fillGradientStyle(PINK, LAVENDER, ROSE, LAVENDER, 1);
    this.barFill.fillRoundedRect(bx, by, fw, fh, BAR_R - 1);

    // Leading shimmer
    const shimW = Math.min(22, fw * 0.15 + 6);
    this.barFill.fillStyle(0xFFFFFF, 0.35);
    this.barFill.fillRect(bx + fw - shimW, by + 1, shimW, fh - 2);
  }

  // ── Tip box ───────────────────────────────────────────────────────────────

  private buildTipBox(): void {
    const bw = 680, bh = 96;
    const bx = CX - bw / 2;
    const by = 542;

    const panel = this.add.graphics();
    panel.fillStyle(BG_PANEL, 0.72);
    panel.fillRoundedRect(bx, by, bw, bh, 10);
    panel.lineStyle(1, GOLD, 0.28);
    panel.strokeRoundedRect(bx, by, bw, bh, 10);

    // Thin accent line at top of panel
    panel.lineStyle(1.5, GOLD, 0.45);
    panel.lineBetween(bx + 30, by, bx + bw - 30, by);

    // Small ✦ corner accents
    const accentG = this.add.graphics();
    accentG.fillStyle(GOLD, 0.5);
    accentG.fillCircle(bx + 12, by + 12, 2.5);
    accentG.fillCircle(bx + bw - 12, by + 12, 2.5);
    accentG.fillCircle(bx + 12, by + bh - 12, 2.5);
    accentG.fillCircle(bx + bw - 12, by + bh - 12, 2.5);

    this.add.text(CX, by + 19, '✦  게임 팁  ✦', {
      fontSize: '12px', color: TEXT_GOLD, fontFamily: FONT,
    }).setOrigin(0.5);

    // Subtle divider
    const div = this.add.graphics();
    div.lineStyle(1, GOLD, 0.2);
    div.lineBetween(bx + 40, by + 33, bx + bw - 40, by + 33);

    this.tipText = this.add.text(CX, by + 60, '', {
      fontSize: '14px', color: TEXT_SECONDARY, fontFamily: FONT,
      wordWrap: { width: bw - 60 },
      align: 'center',
    }).setOrigin(0.5);
  }

  // ── Load event wiring ─────────────────────────────────────────────────────

  private setupLoadEvents(): void {
    // Show first tip immediately
    this.tipText.setText(this.shuffledTips[0]);

    let lastTipIdx = 0;
    this.load.on('progress', (v: number) => {
      this.redrawBar(v);
      this.pctText.setText(`${Math.round(v * 100)}%`);

      const idx = Math.min(Math.floor(v * 6), this.shuffledTips.length - 1);
      if (idx !== lastTipIdx) {
        lastTipIdx = idx;
        this.tipText.setText(this.shuffledTips[idx]);
      }
    });
  }

  // ── Asset manifest ────────────────────────────────────────────────────────

  private loadAll(): void {
    this.load.image('title_logo', 'images/ui/title.png');
    this.load.image('title_bg',   'images/bg/titlebg.png');

    // UI button SVGs
    this.load.svg('btn_primary',        'images/ui/btn_primary.svg',        { width: 340, height: 62 });
    this.load.svg('btn_end_turn_frame', 'images/ui/btn_end_turn_frame.svg', { width: 140, height: 46 });
    this.load.svg('btn_skip',           'images/ui/btn_skip.svg',           { width: 200, height: 46 });

    // Scene backgrounds
    this.load.image('bg_battle_1',  'images/bg/battle_act1.png');
    this.load.image('bg_battle_2',  'images/bg/battle_act2.png');
    this.load.image('bg_battle_3',  'images/bg/battle_act3.png');
    this.load.image('bg_panel',     'images/bg/battle_panel.png');
    this.load.image('bg_map_1',    'images/bg/map_act1.png');
    this.load.image('bg_map_2',    'images/bg/map_act2.png');
    this.load.image('bg_map_3',    'images/bg/map_act3.png');
    this.load.image('bg_rest',     'images/bg/rest_campfire.png');
    this.load.image('bg_shop',     'images/bg/shop_bg.png');
    this.load.image('bg_event',    'images/bg/event_bg.png');
    this.load.image('bg_victory',  'images/bg/victory_bg.png');
    this.load.image('bg_dialogue', 'images/bg/dialogue_bg.png');

    // Player
    this.load.image('player_standing', 'images/Player/Player_standing.png');
    this.load.image('player_attack',   'images/Player/Player_attack.png');

    // Monsters (key must match LoreBookScene's toBestiaryEntry id)
    const monsters: [string, string][] = [
      // Act 1 — Normal
      ['a1n1', 'images/monster/book/memory_ghost.png'],
      ['a1n2', 'images/monster/book/dark_knight.png'],
      ['a1n3', 'images/monster/book/shadow_cat.png'],
      ['a1n4', 'images/monster/book/star_absorber.png'],
      ['a1n5', 'images/monster/book/mirror_phantom.png'],
      // Act 1 — Elite
      ['a1e1', 'images/monster/book/corrupted_knight.png'],
      ['a1e2', 'images/monster/book/dark_priest.png'],
      ['a1e3', 'images/monster/book/abyss_beast.png'],
      // Act 1 — Boss
      ['a1b1', 'images/monster/book/dark_lord.png'],
      ['a1b2', 'images/monster/book/star_destroyer.png'],
      ['a1b3', 'images/monster/book/memory_king.png'],
      // Act 2 — Normal
      ['a2n1', 'images/monster/book/abyss_guard.png'],
      ['a2n2', 'images/monster/book/knowledge_collector.png'],
      ['a2n3', 'images/monster/book/twisted_doll.png'],
      ['a2n4', 'images/monster/book/echo_demon.png'],
      ['a2n5', 'images/monster/book/book_spirit.png'],
      // Act 2 — Elite
      ['a2e1', 'images/monster/book/tower_watcher.png'],
      ['a2e2', 'images/monster/book/fear_crystal.png'],
      ['a2e3', 'images/monster/book/abyss_mage.png'],
      // Act 2 — Boss
      ['a2b1', 'images/monster/book/shadow_titan.png'],
      ['a2b2', 'images/monster/book/fear_queen.png'],
      ['a2b3', 'images/monster/book/tower_master.png'],
      // Act 3 — Normal
      ['a3n1', 'images/monster/book/time_warden.png'],
      ['a3n2', 'images/monster/book/ancient_guard_doll.png'],
      ['a3n3', 'images/monster/book/star_judge.png'],
      ['a3n4', 'images/monster/book/dimension_rift.png'],
      ['a3n5', 'images/monster/book/constellation_fragment.png'],
      // Act 3 — Elite
      ['a3e1', 'images/monster/book/cosmic_warden.png'],
      ['a3e2', 'images/monster/book/constellation_guardian.png'],
      ['a3e3', 'images/monster/book/time_ruler.png'],
      // Act 3 — Boss
      ['a3b1', 'images/monster/book/star_heart_guardian.png'],
      ['a3b2', 'images/monster/book/lord_of_time.png'],
      ['a3b3', 'images/monster/book/ancient_one.png'],
    ];

    for (const [id, path] of monsters) {
      this.load.image(id, path);
    }

    this.loadBgm();
  }

  // Act 1 필수 트랙만 초기 로딩 — Act 2/3는 BGMManager가 백그라운드에서 fetch()
  private loadBgm(): void {
    for (const key of BGM_PRELOAD_KEYS) {
      const path = BGM_PATHS[key];
      if (path) this.load.audio(key, path);
    }
  }
}
