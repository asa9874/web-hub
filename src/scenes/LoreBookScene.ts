import Phaser from 'phaser';
import { FONT } from '../theme';
import { TOC_GROUPS, type LoreEntry } from '../data/loreData';

// ── Layout constants ──────────────────────────────────────────────────────────
const LP_X = 42,  LP_W = 526;
const SP_X = 572, SP_W = 136;
const RP_X = 712, RP_W = 526;
const PG_Y = 16,  PG_H = 688;
const PAGE_BOT = PG_Y + PG_H;  // 704

const TOC_MX = LP_X + 14,  TOC_MW = LP_W - 28;  // 56, 498
const TOC_MY = PG_Y + 50,  TOC_MH = PG_H - 60;  // 66, 628

const DT_MX = RP_X + 14,   DT_MW = RP_W - 28;   // 726, 498
const DT_MY = PG_Y + 14,   DT_MH = PG_H - 24;   // 30, 664

// ── Parchment palette — numeric ───────────────────────────────────────────────
const N_COVER    = 0x3D1F0A;  // mahogany exterior
const N_SPINE_DK = 0x1A0800;  // spine center
const N_SPINE_HI = 0x5C2808;  // spine left highlight
const N_SPINE_AC = 0x8B6000;  // aged-gold spine stripes
const N_PARCH_L  = 0xEDD9A0;  // left page parchment
const N_PARCH_R  = 0xF5E8C0;  // right page (lighter)
const N_RULE     = 0xC8A870;  // faint rule lines
const N_GOLD_AGD = 0x8B6914;  // aged gold borders
const N_SEP      = 0xB89050;  // separator lines
const N_STAT_BG  = 0xDAC088;  // stat block background
const N_PAT_ODD  = 0xE8D0A0;  // pattern row (odd)
const N_PAT_EVN  = 0xF0DEB8;  // pattern row (even)

// ── Parchment palette — string ────────────────────────────────────────────────
const C_TITLE     = '#2C1208';
const C_SUBHEAD   = '#5C2A08';
const C_CAT       = '#6B1515';
const C_ACT       = '#7A4500';
const C_TYPE      = '#5A3A00';
const C_ENTRY     = '#3D2A10';
const C_ENTRY_HOV = '#B84010';
const C_ENTRY_SEL = '#8B1A1A';
const C_QUOTE     = '#7A4A00';
const C_LORE      = '#3A2815';
const C_SECTION   = '#4A2200';
const C_GOLD      = '#8B6914';
const C_HP        = '#1A5C1A';
const C_STAT_TYPE = '#1A1A5C';
const C_PHASE2    = '#8B1515';
const C_DIM       = '#9A8060';
const C_SPINE     = '#C8A040';

// ── TOC item heights ──────────────────────────────────────────────────────────
const H_CAT  = 34;
const H_ACT  = 28;
const H_TYPE = 24;
const H_ITEM = 22;
const GAP    = 10;

type TocItemKind = 'cat' | 'act' | 'type' | 'entry';
interface TocFlatItem { kind: TocItemKind; text: string; entry?: LoreEntry; }

function buildFlatToc(): { items: TocFlatItem[]; totalH: number } {
  const items: TocFlatItem[] = [];
  let h = 0;
  for (const g of TOC_GROUPS) {
    items.push({ kind: 'cat', text: g.header });
    h += H_CAT;
    if (g.entries) {
      for (const e of g.entries) {
        items.push({ kind: 'entry', text: `  ${e.title}`, entry: e });
        h += H_ITEM;
      }
    }
    if (g.sub) {
      for (const act of g.sub) {
        items.push({ kind: 'act', text: act.label });
        h += H_ACT;
        if (act.sub) {
          for (const typ of act.sub) {
            items.push({ kind: 'type', text: typ.label });
            h += H_TYPE;
            for (const e of typ.entries) {
              items.push({ kind: 'entry', text: `    • ${e.title}`, entry: e });
              h += H_ITEM;
            }
          }
        }
      }
    }
    h += GAP;
  }
  return { items, totalH: h };
}

// ── Scene ─────────────────────────────────────────────────────────────────────
export class LoreBookScene extends Phaser.Scene {
  private tocContainer!: Phaser.GameObjects.Container;
  private tocScrollMin = 0;
  private tocScrollMax = TOC_MY;

  private detailContainer: Phaser.GameObjects.Container | null = null;
  private detailScrollMin = 0;
  private detailScrollMax = DT_MY;

  // Stored once; reused across detail rebuilds so container.destroy() never kills them.
  private tocMask!: Phaser.Display.Masks.GeometryMask;
  private detailMask!: Phaser.Display.Masks.GeometryMask;

  private selectedId: string | null = null;
  private entryTexts: Array<{ text: Phaser.GameObjects.Text; entry: LoreEntry }> = [];
  private mouseX = 640;

  constructor() { super({ key: 'LoreBookScene' }); }

  create(): void {
    this.cameras.main.fadeIn(300, 0, 0, 0);
    // Render order: masks(depth 0) → backgrounds(depth 0, added after → on top) →
    // containers(depth 5) → covers(depth 10) → decorations(depth 15) → button(depth 20)
    this.createMasks();           // depth 0, added first → renders behind backgrounds
    this.drawPageBackgrounds();   // depth 0, added second → covers mask white rects
    this.buildToc();              // depth 5
    this.showWelcome();           // depth 5
    this.drawOverflowCovers();    // depth 10 — parchment rects over header/footer overflow zones
    this.drawBordersAndHeaders(); // depth 15
    this.addBackButton();         // depth 20
    this.setupInput();
  }

  // ── Masks ─────────────────────────────────────────────────────────────────

  private createMasks(): void {
    const tg = this.add.graphics();
    tg.fillStyle(0xffffff, 1);
    tg.fillRect(TOC_MX, TOC_MY, TOC_MW, TOC_MH);
    this.tocMask = tg.createGeometryMask();

    const dg = this.add.graphics();
    dg.fillStyle(0xffffff, 1);
    dg.fillRect(DT_MX, DT_MY, DT_MW, DT_MH);
    this.detailMask = dg.createGeometryMask();
  }

  // ── Page backgrounds ──────────────────────────────────────────────────────

  private drawPageBackgrounds(): void {
    const g = this.add.graphics().setDepth(0);

    // Drop shadow
    g.fillStyle(0x000000, 0.40);
    g.fillRoundedRect(38, 20, 1214, 696, 14);

    // Book exterior — mahogany
    g.fillStyle(N_COVER);
    g.fillRoundedRect(30, PG_Y, 1220, PG_H, 12);

    // Left page — aged parchment
    g.fillStyle(N_PARCH_L);
    g.fillRect(LP_X, PG_Y, LP_W, PG_H);

    // Left page rule lines (below TOC header zone)
    g.lineStyle(1, N_RULE, 0.18);
    for (let ly = TOC_MY + 10; ly < PAGE_BOT - 8; ly += 18) {
      g.beginPath(); g.moveTo(LP_X + 18, ly); g.lineTo(LP_X + LP_W - 18, ly); g.strokePath();
    }

    // Spine — dark mahogany with depth shading
    g.fillStyle(N_SPINE_DK);
    g.fillRect(SP_X, PG_Y, SP_W, PG_H);
    g.fillStyle(N_SPINE_HI);
    g.fillRect(SP_X, PG_Y, 10, PG_H);                  // left highlight
    g.fillStyle(0x080200);
    g.fillRect(SP_X + SP_W - 8, PG_Y, 8, PG_H);        // right shadow
    g.lineStyle(1, N_SPINE_AC, 0.8);
    g.beginPath(); g.moveTo(SP_X + 16, PG_Y + 16); g.lineTo(SP_X + 16, PAGE_BOT - 16); g.strokePath();
    g.beginPath(); g.moveTo(SP_X + SP_W - 16, PG_Y + 16); g.lineTo(SP_X + SP_W - 16, PAGE_BOT - 16); g.strokePath();
    g.lineStyle(1, N_SPINE_AC, 0.3);
    g.beginPath(); g.moveTo(SP_X + 10, PG_Y + 16); g.lineTo(SP_X + 10, PAGE_BOT - 16); g.strokePath();
    g.beginPath(); g.moveTo(SP_X + SP_W - 10, PG_Y + 16); g.lineTo(SP_X + SP_W - 10, PAGE_BOT - 16); g.strokePath();

    // Right page — lighter parchment
    g.fillStyle(N_PARCH_R);
    g.fillRect(RP_X, PG_Y, RP_W, PG_H);

    // Right page rule lines
    g.lineStyle(1, N_RULE, 0.13);
    for (let ly = DT_MY + 10; ly < PAGE_BOT - 8; ly += 18) {
      g.beginPath(); g.moveTo(RP_X + 18, ly); g.lineTo(RP_X + RP_W - 18, ly); g.strokePath();
    }

    // Page-edge depth shadows (skeuomorphic page thickness)
    g.fillStyle(0x000000, 0.05);
    g.fillRect(LP_X + LP_W - 14, PG_Y, 14, PG_H);  // left page right edge
    g.fillStyle(0x000000, 0.07);
    g.fillRect(RP_X, PG_Y, 16, PG_H);               // right page left edge
  }

  // ── TOC ───────────────────────────────────────────────────────────────────

  private buildToc(): void {
    const { items } = buildFlatToc();

    this.tocContainer = this.add.container(TOC_MX, TOC_MY).setDepth(5) as Phaser.GameObjects.Container;
    this.tocContainer.setMask(this.tocMask);

    let y = 0;
    for (const item of items) {
      let txt: Phaser.GameObjects.Text;

      if (item.kind === 'cat') {
        const bar = this.add.graphics();
        bar.fillStyle(N_GOLD_AGD, 0.12);
        bar.fillRect(0, y, TOC_MW - 4, H_CAT - 4);
        this.tocContainer.add(bar);
        txt = this.add.text(8, y + 8, item.text, {
          fontSize: '13px', color: C_CAT, fontFamily: FONT, fontStyle: 'bold',
        });
        y += H_CAT;

      } else if (item.kind === 'act') {
        txt = this.add.text(8, y + 6, item.text, {
          fontSize: '12px', color: C_ACT, fontFamily: FONT,
        });
        y += H_ACT;

      } else if (item.kind === 'type') {
        txt = this.add.text(10, y + 4, item.text, {
          fontSize: '11px', color: C_TYPE, fontFamily: FONT,
        });
        y += H_TYPE;

      } else {
        txt = this.add.text(10, y + 3, item.text, {
          fontSize: '11px', color: C_ENTRY, fontFamily: FONT,
        }).setInteractive({ useHandCursor: true });

        const entry = item.entry!;
        this.entryTexts.push({ text: txt, entry });
        txt.on('pointerover', () => { if (this.selectedId !== entry.id) txt.setColor(C_ENTRY_HOV); });
        txt.on('pointerout',  () => { if (this.selectedId !== entry.id) txt.setColor(C_ENTRY); });
        txt.on('pointerdown', () => this.selectEntry(entry));
        y += H_ITEM;
      }
      this.tocContainer.add(txt);
    }

    this.tocScrollMax = TOC_MY;
    this.tocScrollMin = TOC_MY - Math.max(0, y + GAP - TOC_MH);
  }

  private selectEntry(entry: LoreEntry): void {
    for (const t of this.entryTexts) {
      t.text.setColor(t.entry.id === entry.id ? C_ENTRY_SEL : C_ENTRY);
    }
    this.selectedId = entry.id;
    this.showDetail(entry);
  }

  // ── Detail — welcome ──────────────────────────────────────────────────────

  private showWelcome(): void {
    this.rebuildDetail(() => {
      const cx = DT_MW / 2;
      const items: Phaser.GameObjects.GameObject[] = [];
      let y = 60;

      const t1 = this.add.text(cx, y, '✦  별빛 마법서  ✦', {
        fontSize: '22px', color: C_GOLD, fontFamily: FONT, fontStyle: 'bold',
      }).setOrigin(0.5, 0);
      items.push(t1); y += t1.height + 8;

      const t2 = this.add.text(cx, y, '에스텔리아의 모든 기록', {
        fontSize: '13px', color: C_SUBHEAD, fontFamily: FONT,
      }).setOrigin(0.5, 0);
      items.push(t2); y += t2.height + 16;

      items.push(this.makeSep(y)); y += 18;

      const t3 = this.add.text(cx, y, '← 왼쪽 목차에서 항목을 선택하세요', {
        fontSize: '13px', color: C_DIM, fontFamily: FONT,
      }).setOrigin(0.5, 0);
      items.push(t3); y += t3.height + 60;

      const t4 = this.add.text(cx, y,
        '"모든 빛은 꺼지기 위해 켜지는 것인가,\n아니면 꺼지지 않기 위해 켜지는 것인가."', {
        fontSize: '12px', color: C_QUOTE, fontFamily: FONT, fontStyle: 'italic',
        align: 'center', lineSpacing: 6, wordWrap: { width: DT_MW - 60 },
      }).setOrigin(0.5, 0);
      items.push(t4); y += t4.height + 20;

      return { items, totalH: y };
    });
  }

  // ── Detail — entry ────────────────────────────────────────────────────────

  private showDetail(entry: LoreEntry): void {
    this.rebuildDetail(() => this.buildDetailContent(entry));
  }

  private rebuildDetail(builder: () => { items: Phaser.GameObjects.GameObject[]; totalH: number }): void {
    if (this.detailContainer) {
      this.detailContainer.destroy(true);
      this.detailContainer = null;
    }

    // depth 5 ensures cover rects (depth 10) always render on top, even after dynamic rebuilds
    this.detailContainer = this.add.container(DT_MX, DT_MY);
    this.detailContainer.setDepth(5);
    this.detailContainer.setMask(this.detailMask);

    const { items, totalH } = builder();
    this.detailContainer.add(items as Phaser.GameObjects.GameObject[]);

    this.detailScrollMax = DT_MY;
    this.detailScrollMin = DT_MY - Math.max(0, totalH - DT_MH);
    this.detailContainer.y = DT_MY;
  }

  private buildDetailContent(entry: LoreEntry): { items: Phaser.GameObjects.GameObject[]; totalH: number } {
    const items: Phaser.GameObjects.GameObject[] = [];
    const W = DT_MW - 20;
    let y = 8;

    // Title
    const tTitle = this.add.text(4, y, entry.title, {
      fontSize: '19px', color: C_TITLE, fontFamily: FONT, fontStyle: 'bold',
      wordWrap: { width: W },
    });
    items.push(tTitle); y += tTitle.height + 4;

    // Subtitle
    const tSub = this.add.text(4, y, entry.subtitle, {
      fontSize: '11px', color: C_SUBHEAD, fontFamily: FONT,
    });
    items.push(tSub); y += tSub.height + 10;

    items.push(this.makeSep(y)); y += 14;

    // Quote
    if (entry.quote) {
      y += 2;
      const tQ = this.add.text(12, y, entry.quote, {
        fontSize: '11px', color: C_QUOTE, fontFamily: FONT, fontStyle: 'italic',
        wordWrap: { width: W - 16 }, lineSpacing: 4,
      });
      items.push(tQ); y += tQ.height + 12;
    }

    // Lore
    const tLore = this.add.text(4, y, entry.lore, {
      fontSize: '12px', color: C_LORE, fontFamily: FONT,
      wordWrap: { width: W }, lineSpacing: 5,
    });
    items.push(tLore); y += tLore.height + 16;

    // Stats block
    if (entry.stats) {
      items.push(this.makeSep(y)); y += 12;

      const hStat = this.add.text(4, y, '[ 기본 정보 ]', {
        fontSize: '12px', color: C_SECTION, fontFamily: FONT, fontStyle: 'bold',
      });
      items.push(hStat); y += hStat.height + 6;

      const boxH = entry.stats.weight !== undefined ? 52 : 36;
      const statBg = this.add.graphics();
      statBg.fillStyle(N_STAT_BG, 1);
      statBg.fillRoundedRect(0, y, W, boxH, 4);
      statBg.lineStyle(1, N_GOLD_AGD, 0.5);
      statBg.strokeRoundedRect(0, y, W, boxH, 4);
      items.push(statBg);

      items.push(this.add.text(10, y + 8, `HP  ${entry.stats.hp}`, {
        fontSize: '14px', color: C_HP, fontFamily: FONT, fontStyle: 'bold',
      }));
      items.push(this.add.text(120, y + 10, `유형  ${entry.stats.type}`, {
        fontSize: '11px', color: C_STAT_TYPE, fontFamily: FONT,
        wordWrap: { width: W - 130 },
      }));
      if (entry.stats.weight !== undefined) {
        items.push(this.add.text(10, y + 30, `스폰 가중치  ${entry.stats.weight}%`, {
          fontSize: '11px', color: C_DIM, fontFamily: FONT,
        }));
      }
      y += boxH + 12;
    }

    // Attack patterns — phase 1
    if (entry.patterns) {
      items.push(this.makeSep(y)); y += 12;
      const label = entry.phase2 ? '공격 패턴  —  페이즈 1' : '공격 패턴';
      const hP = this.add.text(4, y, `[ ${label} ]`, {
        fontSize: '12px', color: C_SECTION, fontFamily: FONT, fontStyle: 'bold',
      });
      items.push(hP); y += hP.height + 6;
      y = this.addPatternList(items, entry.patterns, y, W);
    }

    // Phase 2
    if (entry.phase2) {
      y += 8;
      items.push(this.makeSep(y)); y += 12;
      const hP2 = this.add.text(4, y, '[ 공격 패턴  —  페이즈 2 ]', {
        fontSize: '12px', color: C_PHASE2, fontFamily: FONT, fontStyle: 'bold',
      });
      items.push(hP2); y += hP2.height + 4;

      const tTrig = this.add.text(4, y, `전환: ${entry.phase2.trigger}   |   ${entry.phase2.buff}`, {
        fontSize: '11px', color: C_DIM, fontFamily: FONT,
      });
      items.push(tTrig); y += tTrig.height + 6;
      y = this.addPatternList(items, entry.phase2.patterns, y, W);
    }

    // Sections (protagonist / world-building)
    if (entry.sections) {
      for (const sec of entry.sections) {
        items.push(this.makeSep(y)); y += 12;
        const hSec = this.add.text(4, y, `[ ${sec.heading} ]`, {
          fontSize: '12px', color: C_SECTION, fontFamily: FONT, fontStyle: 'bold',
        });
        items.push(hSec); y += hSec.height + 6;

        const tBody = this.add.text(4, y, sec.body, {
          fontSize: '12px', color: C_LORE, fontFamily: FONT,
          wordWrap: { width: W }, lineSpacing: 5,
        });
        items.push(tBody); y += tBody.height + 12;
      }
    }

    y += 24;
    return { items, totalH: y };
  }

  // ── Overflow covers (depth 10) ────────────────────────────────────────────
  // Parchment-colored rectangles placed ABOVE the scrollable containers.
  // Any content that escapes the GeometryMask boundary is physically hidden
  // by these covers, which always render on top (depth 10 > container depth 5).

  private drawOverflowCovers(): void {
    // Left page — top zone (TOC header area: PG_Y → TOC_MY)
    const tTH = TOC_MY - PG_Y;  // 50
    this.add.rectangle(LP_X + LP_W / 2, PG_Y + tTH / 2, LP_W, tTH, N_PARCH_L).setDepth(10);

    // Left page — bottom zone (TOC_MY+TOC_MH → PAGE_BOT)
    const tBY = TOC_MY + TOC_MH;         // 694
    const tBH = PAGE_BOT - tBY;          // 10
    if (tBH > 0) {
      this.add.rectangle(LP_X + LP_W / 2, tBY + tBH / 2, LP_W, tBH, N_PARCH_L).setDepth(10);
    }

    // Right page — top zone (PG_Y → DT_MY)
    const dTH = DT_MY - PG_Y;            // 14
    if (dTH > 0) {
      this.add.rectangle(RP_X + RP_W / 2, PG_Y + dTH / 2, RP_W, dTH, N_PARCH_R).setDepth(10);
    }

    // Right page — bottom zone (DT_MY+DT_MH → PAGE_BOT)
    const dBY = DT_MY + DT_MH;           // 694
    const dBH = PAGE_BOT - dBY;          // 10
    if (dBH > 0) {
      this.add.rectangle(RP_X + RP_W / 2, dBY + dBH / 2, RP_W, dBH, N_PARCH_R).setDepth(10);
    }

    // Spine — covers any container pixel that bleeds into spine area
    this.add.rectangle(SP_X + SP_W / 2, PG_Y + PG_H / 2, SP_W, PG_H, N_SPINE_DK).setDepth(10);
  }

  // ── Borders and decorations (depth 15) ───────────────────────────────────

  private drawBordersAndHeaders(): void {
    const g = this.add.graphics().setDepth(15);

    // Book exterior border
    g.lineStyle(2, N_GOLD_AGD, 0.85);
    g.strokeRoundedRect(30, PG_Y, 1220, PG_H, 12);

    // Inner page borders (decorative inset)
    g.lineStyle(1, N_GOLD_AGD, 0.28);
    g.strokeRect(LP_X + 10, PG_Y + 10, LP_W - 20, PG_H - 20);
    g.strokeRect(RP_X + 10, PG_Y + 10, RP_W - 20, PG_H - 20);

    // TOC header underline
    g.lineStyle(1, N_SEP, 0.8);
    g.beginPath(); g.moveTo(LP_X + 18, TOC_MY - 4); g.lineTo(LP_X + LP_W - 18, TOC_MY - 4); g.strokePath();

    // Spine horizontal accent lines (top and bottom)
    g.lineStyle(1, N_SPINE_AC, 0.55);
    g.beginPath(); g.moveTo(SP_X + 10, PG_Y + 20); g.lineTo(SP_X + SP_W - 10, PG_Y + 20); g.strokePath();
    g.beginPath(); g.moveTo(SP_X + 10, PAGE_BOT - 20); g.lineTo(SP_X + SP_W - 10, PAGE_BOT - 20); g.strokePath();

    // Corner stars
    this.addStarDeco(LP_X + 22, PG_Y + 20);
    this.addStarDeco(LP_X + LP_W - 22, PG_Y + 20);
    this.addStarDeco(LP_X + 22, PAGE_BOT - 20);
    this.addStarDeco(LP_X + LP_W - 22, PAGE_BOT - 20);
    this.addStarDeco(RP_X + 22, PG_Y + 20);
    this.addStarDeco(RP_X + RP_W - 22, PG_Y + 20);
    this.addStarDeco(RP_X + 22, PAGE_BOT - 20);
    this.addStarDeco(RP_X + RP_W - 22, PAGE_BOT - 20);

    // "목차" header text — above overflow covers (depth 10) at depth 15
    this.add.text(LP_X + LP_W / 2, PG_Y + 28, '✦  목  차  ✦', {
      fontSize: '15px', color: C_GOLD, fontFamily: FONT, fontStyle: 'bold',
    }).setOrigin(0.5).setDepth(15);

    // Spine — title and star accents
    this.add.text(SP_X + SP_W / 2, PG_Y + PG_H / 2, '별빛 마법서', {
      fontSize: '14px', color: C_SPINE, fontFamily: FONT, fontStyle: 'bold',
    }).setOrigin(0.5).setAngle(90).setDepth(15);
    this.addStarDeco(SP_X + SP_W / 2, PG_Y + PG_H / 2 - 58);
    this.addStarDeco(SP_X + SP_W / 2, PG_Y + PG_H / 2 + 58);
  }

  private addStarDeco(x: number, y: number): void {
    this.add.text(x, y, '✦', {
      fontSize: '10px', color: C_GOLD, fontFamily: FONT,
    }).setOrigin(0.5).setAlpha(0.55).setDepth(15);
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private makeSep(y: number): Phaser.GameObjects.Graphics {
    const g = this.add.graphics();
    g.lineStyle(1, N_SEP, 0.55);
    g.beginPath(); g.moveTo(0, y); g.lineTo(DT_MW - 20, y); g.strokePath();
    return g;
  }

  private addPatternList(
    items: Phaser.GameObjects.GameObject[],
    patterns: Array<{ name: string; effect: string }>,
    y: number,
    W: number,
  ): number {
    for (let i = 0; i < patterns.length; i++) {
      const p = patterns[i];
      const bg = this.add.graphics();
      bg.fillStyle(i % 2 === 0 ? N_PAT_ODD : N_PAT_EVN, 1);
      bg.fillRoundedRect(0, y, W, 26, 3);
      items.push(bg);

      items.push(this.add.text(8, y + 5, p.name, {
        fontSize: '11px', color: C_SUBHEAD, fontFamily: FONT, fontStyle: 'bold',
      }));
      items.push(this.add.text(W - 4, y + 5, p.effect, {
        fontSize: '11px', color: C_LORE, fontFamily: FONT,
      }).setOrigin(1, 0));
      y += 30;
    }
    return y;
  }

  // ── Back button (depth 20) ────────────────────────────────────────────────

  private addBackButton(): void {
    const btn = this.add.text(RP_X + RP_W - 16, PG_Y + 8, '✕  닫기', {
      fontSize: '12px', color: C_DIM, fontFamily: FONT,
    }).setOrigin(1, 0).setInteractive({ useHandCursor: true }).setDepth(20);

    btn.on('pointerover', () => btn.setColor(C_ENTRY_HOV));
    btn.on('pointerout',  () => btn.setColor(C_DIM));
    btn.on('pointerdown', () => {
      this.cameras.main.fadeOut(250, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('HubScene'));
    });
  }

  // ── Input ─────────────────────────────────────────────────────────────────

  private setupInput(): void {
    this.input.on('pointermove', (p: Phaser.Input.Pointer) => { this.mouseX = p.x; });
    this.input.on('wheel', (_p: unknown, _g: unknown, _dx: number, dy: number) => {
      if (this.mouseX < SP_X) {
        this.tocContainer.y = Phaser.Math.Clamp(
          this.tocContainer.y - dy * 0.5, this.tocScrollMin, this.tocScrollMax,
        );
      } else if (this.detailContainer) {
        this.detailContainer.y = Phaser.Math.Clamp(
          this.detailContainer.y - dy * 0.5, this.detailScrollMin, this.detailScrollMax,
        );
      }
    });
  }
}
