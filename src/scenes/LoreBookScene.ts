import Phaser from 'phaser';
import { FONT } from '../theme';
import { TOC_GROUPS, type LoreEntry } from '../data/loreData';

// ── 레이아웃 상수 ─────────────────────────────────────────────────────────────
const LP_X = 42,  LP_W = 526;          // 왼쪽 페이지
const SP_X = 572, SP_W = 136;          // 책등
const RP_X = 712, RP_W = 526;          // 오른쪽 페이지
const PG_Y = 16,  PG_H = 688;          // 페이지 y 시작·높이 (하단 y = 704)
const PAGE_BOT = PG_Y + PG_H;          // 704

// TOC 마스크 (스크롤 영역)
const TOC_MX = LP_X + 14, TOC_MW = LP_W - 28;
const TOC_MY = PG_Y + 50, TOC_MH = PG_H - 60;

// Detail 마스크
const DT_MX = RP_X + 14, DT_MW = RP_W - 28;
const DT_MY = PG_Y + 14, DT_MH = PG_H - 24;

// 색상
const C_GOLD   = '#FFD700';
const C_PINK   = '#FF69B4';
const C_LPURP  = '#C8A0FF';
const C_DIM    = '#5A3A5A';
const C_WHITE  = '#F0E6FF';
const C_ROSE   = '#FFB6C1';
const C_GREEN  = '#80FFB0';
const C_HEAD   = '#FFE680';

const N_GOLD   = 0xFFD700;
const N_SPINE  = 0x2A1800;
const N_SPACCENT = 0x7A5010;
const N_BOOK   = 0x0A0520;
const N_PAGE   = 0x110828;
const N_SEP    = 0x2A1A3A;

// TOC 아이템 높이
const H_CAT  = 32;  // 대분류 헤더
const H_ACT  = 28;  // Act 서브헤더
const H_TYPE = 24;  // 일반/엘리트/보스 타입 라벨
const H_ITEM = 22;  // 개별 항목
const GAP    = 8;   // 대분류 사이 여백

// ── TOC 플랫 아이템 타입 ─────────────────────────────────────────────────────
type TocItemKind = 'cat' | 'act' | 'type' | 'entry';
interface TocFlatItem {
  kind: TocItemKind;
  text: string;
  entry?: LoreEntry;
}

function buildFlatToc(): { items: TocFlatItem[]; totalH: number } {
  const items: TocFlatItem[] = [];
  let h = 0;

  for (const g of TOC_GROUPS) {
    items.push({ kind: 'cat', text: g.header });
    h += H_CAT;
    if (g.entries) {
      for (const e of g.entries) { items.push({ kind: 'entry', text: `    ${e.title}`, entry: e }); h += H_ITEM; }
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
              items.push({ kind: 'entry', text: `      • ${e.title}`, entry: e });
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

// ── 씬 ───────────────────────────────────────────────────────────────────────
export class LoreBookScene extends Phaser.Scene {
  private tocContainer!: Phaser.GameObjects.Container;
  private tocScrollMin = 0;
  private tocScrollMax = TOC_MY;

  private detailContainer: Phaser.GameObjects.Container | null = null;
  private detailScrollMin = 0;
  private detailScrollMax = DT_MY;
  private detailMaskGfx!: Phaser.GameObjects.Graphics;

  private selectedId: string | null = null;
  private entryTexts: Array<{ text: Phaser.GameObjects.Text; entry: LoreEntry }> = [];

  private mouseX = 640;

  constructor() { super({ key: 'LoreBookScene' }); }

  create(): void {
    this.cameras.main.fadeIn(300, 0, 0, 0);
    this.drawBook();
    this.buildToc();
    this.drawDetailMask();
    this.showWelcome();
    this.addBackButton();

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

  // ── 책 배경 ────────────────────────────────────────────────────────────────

  private drawBook(): void {
    const g = this.add.graphics();

    // 그림자
    g.fillStyle(0x000000, 0.55);
    g.fillRoundedRect(36, 20, 1212, 690, 14);

    // 외곽 테두리
    g.fillStyle(N_BOOK);
    g.fillRoundedRect(30, PG_Y, 1220, PG_H, 12);
    g.lineStyle(2, N_SPACCENT, 0.9);
    g.strokeRoundedRect(30, PG_Y, 1220, PG_H, 12);

    // 왼쪽 페이지
    g.fillStyle(N_PAGE);
    g.fillRect(LP_X, PG_Y, LP_W, PG_H);
    g.lineStyle(1, N_SEP, 0.6);
    g.strokeRect(LP_X + 10, PG_Y + 10, LP_W - 20, PG_H - 20);

    // 책등
    g.fillStyle(N_SPINE);
    g.fillRect(SP_X, PG_Y, SP_W, PG_H);
    // 책등 금빛 선
    g.lineStyle(1, N_GOLD, 0.4);
    g.beginPath(); g.moveTo(SP_X + 14, PG_Y); g.lineTo(SP_X + 14, PAGE_BOT); g.strokePath();
    g.beginPath(); g.moveTo(SP_X + SP_W - 14, PG_Y); g.lineTo(SP_X + SP_W - 14, PAGE_BOT); g.strokePath();

    // 오른쪽 페이지
    g.fillStyle(N_PAGE);
    g.fillRect(RP_X, PG_Y, RP_W, PG_H);
    g.lineStyle(1, N_SEP, 0.6);
    g.strokeRect(RP_X + 10, PG_Y + 10, RP_W - 20, PG_H - 20);

    // 왼쪽 페이지 금테두리 상단
    g.lineStyle(1, N_GOLD, 0.35);
    g.beginPath(); g.moveTo(LP_X + 20, PG_Y + 46); g.lineTo(LP_X + LP_W - 20, PG_Y + 46); g.strokePath();

    // 별 장식 코너 (왼쪽 페이지)
    this.addStarDeco(LP_X + 28, PG_Y + 28);
    this.addStarDeco(LP_X + LP_W - 28, PG_Y + 28);
    this.addStarDeco(LP_X + 28, PAGE_BOT - 28);
    this.addStarDeco(LP_X + LP_W - 28, PAGE_BOT - 28);

    // 별 장식 코너 (오른쪽 페이지)
    this.addStarDeco(RP_X + 28, PG_Y + 28);
    this.addStarDeco(RP_X + RP_W - 28, PG_Y + 28);
    this.addStarDeco(RP_X + 28, PAGE_BOT - 28);
    this.addStarDeco(RP_X + RP_W - 28, PAGE_BOT - 28);

    // 책등 중앙 제목
    const spineTitle = this.add.text(SP_X + SP_W / 2, PG_Y + PG_H / 2, '별빛 마법서', {
      fontSize: '14px', color: C_GOLD, fontFamily: FONT, fontStyle: 'bold',
    }).setOrigin(0.5).setAngle(90);
    this.addStarDeco(SP_X + SP_W / 2, PG_Y + PG_H / 2 - 55);
    this.addStarDeco(SP_X + SP_W / 2, PG_Y + PG_H / 2 + 55);
    void spineTitle;

    // "목차" 헤더 텍스트
    this.add.text(LP_X + LP_W / 2, PG_Y + 28, '✦  목  차  ✦', {
      fontSize: '16px', color: C_GOLD, fontFamily: FONT, fontStyle: 'bold',
    }).setOrigin(0.5);
  }

  private addStarDeco(x: number, y: number): void {
    this.add.text(x, y, '✦', { fontSize: '10px', color: C_GOLD, fontFamily: FONT }).setOrigin(0.5).setAlpha(0.5);
  }

  // ── TOC 빌드 ───────────────────────────────────────────────────────────────

  private buildToc(): void {
    const { items, totalH } = buildFlatToc();

    // 마스크 그래픽
    const maskGfx = this.add.graphics();
    maskGfx.fillStyle(0xffffff, 1);
    maskGfx.fillRect(TOC_MX, TOC_MY, TOC_MW, TOC_MH);

    this.tocContainer = this.add.container(TOC_MX, TOC_MY);
    this.tocContainer.setMask(maskGfx.createGeometryMask());

    this.tocScrollMax = TOC_MY;
    this.tocScrollMin = TOC_MY - Math.max(0, totalH - TOC_MH);

    let y = 0;
    for (const item of items) {
      let txt: Phaser.GameObjects.Text;

      if (item.kind === 'cat') {
        txt = this.add.text(0, y, item.text, {
          fontSize: '14px', color: C_HEAD, fontFamily: FONT, fontStyle: 'bold',
        });
        y += H_CAT;

      } else if (item.kind === 'act') {
        txt = this.add.text(0, y, item.text, {
          fontSize: '12px', color: C_GOLD, fontFamily: FONT,
        });
        y += H_ACT;

      } else if (item.kind === 'type') {
        txt = this.add.text(0, y, item.text, {
          fontSize: '11px', color: C_LPURP, fontFamily: FONT,
        });
        y += H_TYPE;

      } else {
        // entry
        txt = this.add.text(0, y, item.text, {
          fontSize: '11px', color: '#A080CC', fontFamily: FONT,
        }).setInteractive({ useHandCursor: true });

        const entry = item.entry!;
        this.entryTexts.push({ text: txt, entry });

        txt.on('pointerover', () => {
          if (this.selectedId !== entry.id) txt.setColor(C_ROSE);
        });
        txt.on('pointerout', () => {
          if (this.selectedId !== entry.id) txt.setColor('#A080CC');
        });
        txt.on('pointerdown', () => this.selectEntry(entry));
        y += H_ITEM;
      }
      this.tocContainer.add(txt);
    }
    // 하단 여백
    y += GAP;
    this.tocScrollMin = TOC_MY - Math.max(0, y - TOC_MH);
  }

  private selectEntry(entry: LoreEntry): void {
    // 이전 선택 해제
    for (const t of this.entryTexts) {
      t.text.setColor(t.entry.id === entry.id ? C_PINK : '#A080CC');
    }
    this.selectedId = entry.id;
    this.showDetail(entry);
  }

  // ── Detail 마스크 (고정) ─────────────────────────────────────────────────

  private drawDetailMask(): void {
    this.detailMaskGfx = this.add.graphics();
    this.detailMaskGfx.fillStyle(0xffffff, 1);
    this.detailMaskGfx.fillRect(DT_MX, DT_MY, DT_MW, DT_MH);
  }

  // ── 웰컴 페이지 ───────────────────────────────────────────────────────────

  private showWelcome(): void {
    this.rebuildDetail(() => {
      const cx = DT_MW / 2;
      const items: Phaser.GameObjects.GameObject[] = [];
      items.push(this.add.text(cx, 80, '✦  별빛 마법서  ✦', {
        fontSize: '22px', color: C_GOLD, fontFamily: FONT, fontStyle: 'bold',
      }).setOrigin(0.5));
      items.push(this.add.text(cx, 122, '에스텔리아의 모든 기록', {
        fontSize: '13px', color: C_LPURP, fontFamily: FONT,
      }).setOrigin(0.5));
      this.addDetailSep(items, 152);
      items.push(this.add.text(cx, 200, '←  왼쪽 목차에서 항목을 선택하세요', {
        fontSize: '13px', color: C_DIM, fontFamily: FONT,
      }).setOrigin(0.5));
      items.push(this.add.text(cx, 300, '"모든 빛은 꺼지기 위해 켜지는 것인가,\n아니면 꺼지지 않기 위해 켜지는 것인가."', {
        fontSize: '12px', color: '#4A2A5A', fontFamily: FONT, align: 'center', lineSpacing: 6,
        wordWrap: { width: DT_MW - 40 },
      }).setOrigin(0.5));
      return { items, totalH: 350 };
    });
  }

  // ── Detail 렌더링 ─────────────────────────────────────────────────────────

  private showDetail(entry: LoreEntry): void {
    this.rebuildDetail(() => this.buildDetailContent(entry));
  }

  private rebuildDetail(builder: () => { items: Phaser.GameObjects.GameObject[]; totalH: number }): void {
    if (this.detailContainer) {
      this.detailContainer.destroy(true);
      this.detailContainer = null;
    }

    this.detailContainer = this.add.container(DT_MX, DT_MY);
    this.detailContainer.setMask(this.detailMaskGfx.createGeometryMask());

    const { items, totalH } = builder();
    this.detailContainer.add(items as Phaser.GameObjects.GameObject[]);

    this.detailScrollMax = DT_MY;
    this.detailScrollMin = DT_MY - Math.max(0, totalH - DT_MH);
    this.detailContainer.y = DT_MY;
  }

  private buildDetailContent(entry: LoreEntry): { items: Phaser.GameObjects.GameObject[]; totalH: number } {
    const items: Phaser.GameObjects.GameObject[] = [];
    const W = DT_MW - 8;
    let y = 0;

    // 제목
    items.push(this.add.text(0, y, entry.title, {
      fontSize: '20px', color: C_GOLD, fontFamily: FONT, fontStyle: 'bold',
      wordWrap: { width: W },
    }));
    y += this.textHeight(entry.title, 20, W) + 6;

    // 부제
    items.push(this.add.text(0, y, entry.subtitle, {
      fontSize: '11px', color: C_LPURP, fontFamily: FONT,
    }));
    y += 18;

    // 구분선
    this.addDetailSep(items, y + 4); y += 14;

    // 인용구
    if (entry.quote) {
      y += 4;
      items.push(this.add.text(0, y, entry.quote, {
        fontSize: '11px', color: C_PINK, fontFamily: FONT, fontStyle: 'italic',
        wordWrap: { width: W }, lineSpacing: 4,
      }));
      y += this.textHeight(entry.quote, 11, W) + 8;
    }

    // 메인 로어
    items.push(this.add.text(0, y, entry.lore, {
      fontSize: '12px', color: C_WHITE, fontFamily: FONT,
      wordWrap: { width: W }, lineSpacing: 5,
    }));
    y += this.textHeight(entry.lore, 12, W) + 14;

    // 스탯 블록 (몬스터)
    if (entry.stats) {
      this.addDetailSep(items, y); y += 12;
      items.push(this.add.text(0, y, '[ 기본 정보 ]', {
        fontSize: '12px', color: C_HEAD, fontFamily: FONT, fontStyle: 'bold',
      })); y += 18;

      const statG = this.add.graphics();
      statG.fillStyle(0x1A0A35, 1);
      statG.fillRoundedRect(0, y, W, 46, 4);
      statG.lineStyle(1, N_SPACCENT, 0.5);
      statG.strokeRoundedRect(0, y, W, 46, 4);
      items.push(statG);

      items.push(this.add.text(10, y + 8, `HP  ${entry.stats.hp}`, {
        fontSize: '14px', color: C_GREEN, fontFamily: FONT, fontStyle: 'bold',
      }));
      items.push(this.add.text(120, y + 8, `유형  ${entry.stats.type}`, {
        fontSize: '11px', color: C_LPURP, fontFamily: FONT,
        wordWrap: { width: W - 130 },
      }));
      if (entry.stats.weight !== undefined) {
        items.push(this.add.text(10, y + 28, `스폰 확률  ${entry.stats.weight}%`, {
          fontSize: '11px', color: C_DIM, fontFamily: FONT,
        }));
      }
      y += 58;
    }

    // 공격 패턴 (페이즈 1)
    if (entry.patterns) {
      this.addDetailSep(items, y); y += 12;
      const label = entry.phase2 ? '공격 패턴  —  페이즈 1' : '공격 패턴';
      items.push(this.add.text(0, y, `[ ${label} ]`, {
        fontSize: '12px', color: C_HEAD, fontFamily: FONT, fontStyle: 'bold',
      })); y += 20;
      y = this.addPatternList(items, entry.patterns, y, W);
    }

    // 페이즈 2
    if (entry.phase2) {
      y += 6;
      this.addDetailSep(items, y); y += 12;
      items.push(this.add.text(0, y, `[ 공격 패턴  —  페이즈 2 ]`, {
        fontSize: '12px', color: C_ROSE, fontFamily: FONT, fontStyle: 'bold',
      })); y += 18;
      items.push(this.add.text(0, y, `전환: ${entry.phase2.trigger}   |   ${entry.phase2.buff}`, {
        fontSize: '11px', color: C_DIM, fontFamily: FONT,
      })); y += 18;
      y = this.addPatternList(items, entry.phase2.patterns, y, W);
    }

    // 섹션 (주인공 / 세계관)
    if (entry.sections) {
      for (const sec of entry.sections) {
        this.addDetailSep(items, y); y += 12;
        items.push(this.add.text(0, y, `[ ${sec.heading} ]`, {
          fontSize: '12px', color: C_HEAD, fontFamily: FONT, fontStyle: 'bold',
        })); y += 18;
        items.push(this.add.text(0, y, sec.body, {
          fontSize: '12px', color: C_WHITE, fontFamily: FONT,
          wordWrap: { width: W }, lineSpacing: 5,
        }));
        y += this.textHeight(sec.body, 12, W) + 10;
      }
    }

    y += 20; // 하단 여백
    return { items, totalH: y };
  }

  // ── 보조 렌더 메서드 ──────────────────────────────────────────────────────

  private addDetailSep(items: Phaser.GameObjects.GameObject[], y: number): void {
    const g = this.add.graphics();
    g.lineStyle(1, N_SPACCENT, 0.5);
    g.beginPath(); g.moveTo(0, y); g.lineTo(DT_MW - 8, y); g.strokePath();
    items.push(g);
  }

  private addPatternList(
    items: Phaser.GameObjects.GameObject[],
    patterns: Array<{ name: string; effect: string }>,
    y: number,
    W: number,
  ): number {
    for (const p of patterns) {
      const g = this.add.graphics();
      g.fillStyle(0x1A0A35, 1);
      g.fillRoundedRect(0, y, W, 22, 3);
      items.push(g);
      items.push(this.add.text(8, y + 4, p.name, {
        fontSize: '11px', color: C_LPURP, fontFamily: FONT,
      }));
      items.push(this.add.text(W - 4, y + 4, p.effect, {
        fontSize: '11px', color: C_WHITE, fontFamily: FONT,
      }).setOrigin(1, 0));
      y += 26;
    }
    return y;
  }

  /** 텍스트 높이 추정 (wordWrap 적용 후 줄 수 × 줄 높이). */
  private textHeight(str: string, fontSize: number, maxW: number): number {
    const charsPerLine = Math.floor(maxW / (fontSize * 0.65));
    const lines = Math.ceil(str.length / charsPerLine) + (str.match(/\n/g)?.length ?? 0);
    return Math.max(lines, 1) * (fontSize + 6);
  }

  // ── 뒤로가기 버튼 ─────────────────────────────────────────────────────────

  private addBackButton(): void {
    const btn = this.add.text(RP_X + RP_W - 16, PG_Y + 8, '✕  닫기', {
      fontSize: '12px', color: C_DIM, fontFamily: FONT,
    }).setOrigin(1, 0).setInteractive({ useHandCursor: true });

    btn.on('pointerover', () => btn.setColor(C_PINK));
    btn.on('pointerout',  () => btn.setColor(C_DIM));
    btn.on('pointerdown', () => {
      this.cameras.main.fadeOut(250, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('HubScene'));
    });
  }
}
