import Phaser from 'phaser';
import { GameState } from '../GameState';
import { AchievementManager } from '../achievements/AchievementManager';
import type { MapNode } from '../types';
import { TEXT_SECONDARY, FONT } from '../theme';
import { getActTheme } from '../data/actTheme';

// ── 레이아웃 상수 ─────────────────────────────────────────────────────────────
const COL_X       = [130, 385, 640, 895, 1150]; // 5열 (col 0–4)
const ROW_SPACING = 110;           // row 간격 확대
const ROW_TOP_PAD = 50;            // 컨테이너 상단 여백 (보스 위)
const ROW_BOT_PAD = 50;            // 컨테이너 하단 여백
const NODE_R      = 22;

// 스크롤 영역
const CONTENT_TOP = 70;            // 헤더 아래 맵 뷰포트 시작 y
const CONTENT_H   = 650;           // 맵 뷰포트 높이 (720 - 70)
const MAP_TOTAL_H = ROW_TOP_PAD + 9 * ROW_SPACING + ROW_BOT_PAD; // 50+990+50 = 1090

const NODE_LABELS: Record<string, string> = {
  battle: '전투', elite: '엘리트', boss: '보스',
  event: '이벤트', shop: '상점', rest: '휴식', treasure: '보물',
};

/** row → 컨테이너-로컬 y (보스=상단, 시작=하단) */
function rowY(row: number): number {
  return ROW_TOP_PAD + (9 - row) * ROW_SPACING;
}

/** 노드 컨테이너-로컬 x (지터 적용) */
function nodeX(node: MapNode): number {
  return COL_X[node.col] + node.jitterX;
}

/** 노드 컨테이너-로컬 y (지터 적용) */
function nodeY(node: MapNode): number {
  return rowY(node.row) + node.jitterY;
}

function hexStr(n: number): string {
  return '#' + n.toString(16).padStart(6, '0');
}

export class MapScene extends Phaser.Scene {
  private mapContainer!: Phaser.GameObjects.Container;
  private scrollMin = 0;
  private scrollMax = 0;

  constructor() { super({ key: 'MapScene' }); }

  create(): void {
    // 1. 전투 결과 처리 (act complete 감지 정확도를 위해 먼저 처리)
    if (GameState.currentMapNode) {
      if (GameState.lastBattleWon) {
        const { row, col } = GameState.currentMapNode;
        GameState.markNodeVisited(row, col);
      }
      GameState.currentMapNode = null;
      GameState.lastBattleWon = false;
    }

    // 2. 맵 초기화 (없으면 새로 생성)
    if (GameState.mapNodes.length === 0) GameState.initMap();

    this.cameras.main.fadeIn(300, 0, 0, 0);

    this.renderBackground();
    this.setupScrollableMap(); // 맵 컨테이너 먼저 생성 (낮은 렌더 순서)
    this.renderHeaderCover();  // 헤더 영역 불투명 오버레이 (맵 노드가 헤더 뒤로 숨음)
    this.renderHeader();       // 헤더 텍스트
    this.renderAbandonButton();
    this.addScrollHint();

    if (this.isActComplete()) this.showActComplete();
  }

  // ── 스크롤 컨테이너 설정 ──────────────────────────────────────────────────

  private setupScrollableMap(): void {
    // 스크롤 범위
    this.scrollMax = CONTENT_TOP;                                     // 70
    this.scrollMin = CONTENT_TOP - Math.max(0, MAP_TOTAL_H - CONTENT_H); // -190

    // 컨테이너 초기 위치: 하단(출발 row) 표시
    this.mapContainer = this.add.container(0, this.scrollMin);

    this.renderMapContent();

    // 마우스 휠: 위로 굴리면 보스 방향 표시
    this.input.on('wheel', (_ptr: unknown, _gos: unknown, _dx: number, dy: number) => {
      this.mapContainer.y = Phaser.Math.Clamp(
        this.mapContainer.y - dy * 0.5,
        this.scrollMin,
        this.scrollMax,
      );
    });
  }

  // ── 배경·헤더 ─────────────────────────────────────────────────────────────

  private renderBackground(): void {
    const theme = getActTheme(GameState.currentAct);
    this.add.rectangle(640, 360, 1280, 720, theme.bg);
    this.add.rectangle(640, 2, 1280, 4, theme.topAccent).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, theme.bottomBorder).setOrigin(0.5, 1);
  }

  /**
   * 헤더 영역(y 0~68)을 배경색으로 덮는 불투명 오버레이.
   * 맵 컨테이너보다 나중에 렌더되므로 스크롤 시 노드가 헤더 뒤로 자연스럽게 숨는다.
   */
  private renderHeaderCover(): void {
    const theme = getActTheme(GameState.currentAct);
    this.add.rectangle(640, 34, 1280, 68, theme.bg);
    this.add.rectangle(640, 2, 1280, 4, theme.topAccent).setOrigin(0.5, 0);
  }

  private renderHeader(): void {
    const theme = getActTheme(GameState.currentAct);
    const ACT_TITLES: Record<number, string> = {
      1: 'Act 1  —  던전 탐험',
      2: 'Act 2  —  심연의 탑',
      3: 'Act 3  —  고대의 전당',
    };
    this.add.text(640, 28, ACT_TITLES[GameState.currentAct] ?? `Act ${GameState.currentAct}`, {
      fontSize: '20px', color: theme.titleColor, fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.text(640, 52, `HP  ${GameState.playerHp} / ${GameState.playerMaxHp}   |   골드  ${GameState.gold} G`, {
      fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.rectangle(640, 65, 1280, 1, getActTheme(GameState.currentAct).bottomBorder);
  }

  private renderAbandonButton(): void {
    const btn = this.add.text(1240, 28, '런 포기', {
      fontSize: '12px', color: '#5A3A5A', fontFamily: FONT,
    }).setOrigin(1, 0.5).setInteractive({ useHandCursor: true });

    btn.on('pointerover', () => btn.setColor('#FF69B4'));
    btn.on('pointerout',  () => btn.setColor('#5A3A5A'));
    btn.on('pointerdown', () => {
      GameState.hardReset(); AchievementManager.reset();
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('TitleScene'));
    });
  }

  private addScrollHint(): void {
    const hint = this.add.text(640, 714, '↑ 스크롤로 상단 탐색', {
      fontSize: '11px', color: '#4A2A4A', fontFamily: FONT,
    }).setOrigin(0.5, 1);

    this.time.delayedCall(2200, () => {
      this.tweens.add({ targets: hint, alpha: 0, duration: 900 });
    });
  }

  // ── 맵 렌더링 (컨테이너 내부) ─────────────────────────────────────────────

  private renderMapContent(): void {
    const map     = GameState.mapNodes;
    const visited = new Set(GameState.visitedNodeKeys);
    const avail   = new Set(
      GameState.getAvailableMapNodes().map(n => `${n.row}_${n.col}`),
    );

    // 엣지 분류: inactive | visited | navigable
    type EdgeState = 'inactive' | 'visited' | 'navigable';
    type EdgeData  = { x1: number; y1: number; x2: number; y2: number; state: EdgeState };
    const edges: EdgeData[] = [];

    map.forEach(rowNodes => {
      rowNodes.forEach(node => {
        const x1       = nodeX(node);
        const y1       = nodeY(node);
        const nodeKey  = `${node.row}_${node.col}`;
        const curVisit = visited.has(nodeKey);

        node.connections.forEach(nc => {
          const nxt = (map[node.row + 1] ?? []).find(n => n.col === nc);
          if (!nxt) return;
          const nxtKey   = `${nxt.row}_${nc}`;
          let state: EdgeState;
          if      (curVisit && avail.has(nxtKey))   state = 'navigable';
          else if (curVisit && visited.has(nxtKey))  state = 'visited';
          else                                        state = 'inactive';
          edges.push({ x1, y1, x2: nodeX(nxt), y2: nodeY(nxt), state });
        });
      });
    });

    // 멀티패스 렌더링 (z-order: inactive → visited → glow → core)
    const theme = getActTheme(GameState.currentAct);
    const gInactive  = this.add.graphics();
    const gVisited   = this.add.graphics();
    const gGlow      = this.add.graphics();
    const gNavigable = this.add.graphics();

    for (const e of edges) {
      if (e.state === 'inactive') {
        gInactive.lineStyle(4, theme.pathInactive, 0.5);
        this.drawBezierInto(gInactive, e.x1, e.y1, e.x2, e.y2);
      } else if (e.state === 'visited') {
        gVisited.lineStyle(5, theme.pathVisited, 0.85);
        this.drawBezierInto(gVisited, e.x1, e.y1, e.x2, e.y2);
      } else {
        gGlow.lineStyle(18, theme.pathGlow, 0.25);
        this.drawBezierInto(gGlow, e.x1, e.y1, e.x2, e.y2);
        gNavigable.lineStyle(6, theme.pathNavigable, 1.0);
        this.drawBezierInto(gNavigable, e.x1, e.y1, e.x2, e.y2);
      }
    }

    this.mapContainer.add([gInactive, gVisited, gGlow, gNavigable]);

    // 노드
    map.forEach(rowNodes => {
      rowNodes.forEach(node => this.renderNode(node, visited, avail));
    });
  }

  /** 베지어 S-커브 (16세그먼트). 제어점을 수직 중앙에 배치해 자연스러운 곡선 생성. */
  private drawBezierInto(
    g: Phaser.GameObjects.Graphics,
    x1: number, y1: number,
    x2: number, y2: number,
  ): void {
    const midY = (y1 + y2) / 2;
    const cp1x = x1, cp1y = midY;
    const cp2x = x2, cp2y = midY;

    g.beginPath();
    for (let i = 0; i <= 16; i++) {
      const t  = i / 16;
      const mt = 1 - t;
      const bx = mt*mt*mt*x1 + 3*mt*mt*t*cp1x + 3*mt*t*t*cp2x + t*t*t*x2;
      const by = mt*mt*mt*y1 + 3*mt*mt*t*cp1y + 3*mt*t*t*cp2y + t*t*t*y2;
      if (i === 0) g.moveTo(bx, by);
      else         g.lineTo(bx, by);
    }
    g.strokePath();
  }

  private renderNode(
    node: MapNode,
    visited: Set<string>,
    avail: Set<string>,
  ): void {
    const key       = `${node.row}_${node.col}`;
    const isVisited = visited.has(key);
    const isAvail   = avail.has(key);
    const theme     = getActTheme(GameState.currentAct);
    const nc        = theme.nodeColors[node.type] ?? theme.nodeColors['battle'];
    const label     = NODE_LABELS[node.type] ?? node.type;

    const cx = nodeX(node);
    const cy = nodeY(node);

    const objs: Phaser.GameObjects.GameObject[] = [];

    // 글로우 (가용 노드)
    if (isAvail) {
      objs.push(this.add.circle(cx, cy, NODE_R + 8, nc.stroke, 0.14));
    }

    // 노드 원
    const fill   = isVisited ? theme.nodeVisitedFill   : (isAvail ? nc.fill   : theme.nodeInactiveFill);
    const stroke = isVisited ? theme.nodeVisitedStroke : (isAvail ? nc.stroke : theme.nodeInactiveStroke);
    const sw     = isAvail ? 3 : 1;
    const circle = this.add.circle(cx, cy, NODE_R, fill);
    circle.setStrokeStyle(sw, stroke);
    objs.push(circle);

    // 아이콘 (첫 글자)
    const visitedHex   = hexStr(theme.nodeVisitedStroke);
    const inactiveHex  = hexStr(theme.nodeInactiveStroke);
    const iconColor = isVisited ? visitedHex : (isAvail ? hexStr(nc.stroke) : inactiveHex);
    objs.push(this.add.text(cx, cy, label.charAt(0), {
      fontSize: '13px', color: iconColor, fontStyle: 'bold',
    }).setOrigin(0.5));

    // 노드명 라벨
    const labelColor = isAvail ? hexStr(nc.stroke) : (isVisited ? visitedHex : inactiveHex);
    objs.push(this.add.text(cx, cy + NODE_R + 9, label, {
      fontSize: '10px', color: labelColor,
    }).setOrigin(0.5));

    this.mapContainer.add(objs);

    // 인터랙션 (가용 & 미방문)
    if (isAvail && !isVisited) {
      circle.setInteractive({ useHandCursor: true });
      circle.on('pointerover', () => circle.setStrokeStyle(sw + 2, nc.stroke));
      circle.on('pointerout',  () => circle.setStrokeStyle(sw, nc.stroke));
      circle.on('pointerdown', () => this.enterNode(node));
    }
  }

  // ── 노드 진입 ─────────────────────────────────────────────────────────────

  private enterNode(node: MapNode): void {
    this.cameras.main.fadeOut(280, 0, 0, 0);
    this.cameras.main.once('camerafadeoutcomplete', () => {
      GameState.currentMapNode = { row: node.row, col: node.col };

      switch (node.type) {
        case 'battle':
          this.scene.start('BattleScene', { mode: 'default', returnScene: 'MapScene' });
          return;
        case 'elite': {
          this.scene.start('BattleScene', { mode: 'elite', returnScene: 'MapScene' });
          return;
        }
        case 'boss':
          this.scene.start('BattleScene', { mode: 'boss', returnScene: 'MapScene' });
          return;
        default:
          break;
      }

      // 비전투 노드: 즉시 방문 처리
      GameState.markNodeVisited(node.row, node.col);
      GameState.currentMapNode = null;

      if      (node.type === 'event')    this.scene.start('EventScene', { returnScene: 'MapScene' });
      else if (node.type === 'shop')     this.scene.start('ShopScene',  { returnScene: 'MapScene' });
      else if (node.type === 'rest')     this.scene.start('RestScene',  { returnScene: 'MapScene' });
      else if (node.type === 'treasure') {
        this.scene.start('CardRewardScene', {
          cards: GameState.getRandomRewardCards(3),
          returnScene: 'MapScene',
        });
      }
    });
  }

  // ── Act 클리어 ────────────────────────────────────────────────────────────

  private isActComplete(): boolean {
    return GameState.visitedNodeKeys.some(k => k.startsWith('9_'));
  }

  private showActComplete(): void {
    const act = GameState.currentAct;

    this.add.rectangle(640, 360, 1280, 720, 0x000000, 0.82).setDepth(10);

    const ACT_BOSS_NAMES: Record<number, string> = {
      1: '암흑 군주를 물리쳤습니다.',
      2: '그림자 타이탄을 물리쳤습니다.',
      3: '고대인을 물리쳤습니다. 세계가 구원받았습니다!',
    };

    if (act < 3) {
      // ── 액트 전환 오버레이 ────────────────────────────────────────────────
      this.add.text(640, 255, `Act ${act} 클리어!`, {
        fontSize: '52px', color: '#FFD700', fontStyle: 'bold', fontFamily: FONT,
        stroke: '#8B4500', strokeThickness: 5,
      }).setOrigin(0.5).setDepth(11);

      this.add.text(640, 330, ACT_BOSS_NAMES[act] ?? '', {
        fontSize: '18px', color: '#C8A0CC', fontFamily: FONT,
      }).setOrigin(0.5).setDepth(11);

      const ACT_NEXT_NAMES: Record<number, string> = {
        2: 'Act 2  —  심연의 탑',
        3: 'Act 3  —  고대의 전당',
      };
      this.add.text(640, 380, `다음: ${ACT_NEXT_NAMES[act + 1] ?? ''}`, {
        fontSize: '15px', color: '#FF69B4', fontFamily: FONT,
      }).setOrigin(0.5).setDepth(11);

      this.add.text(640, 418, `HP ${GameState.playerHp} / ${GameState.playerMaxHp}   |   골드 ${GameState.gold} G   |   유물 ${GameState.equippedRelics.length}개`, {
        fontSize: '13px', color: '#8A6A8A', fontFamily: FONT,
      }).setOrigin(0.5).setDepth(11);

      const nextBtn = this.add.text(640, 475, `[ Act ${act + 1}으로 진행 ]`, {
        fontSize: '24px', color: '#FF69B4', fontStyle: 'bold', fontFamily: FONT,
      }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(11);

      nextBtn.on('pointerover', () => nextBtn.setColor('#FFB6C1'));
      nextBtn.on('pointerout',  () => nextBtn.setColor('#FF69B4'));
      nextBtn.on('pointerdown', () => {
        GameState.currentAct++;
        GameState.initMap();
        this.cameras.main.fadeOut(350, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => this.scene.restart());
      });

    } else {
      // ── 최종 승리 오버레이 (Act 3 클리어) ────────────────────────────────
      this.add.text(640, 210, '🏆 최종 승리! 🏆', {
        fontSize: '56px', color: '#FFD700', fontStyle: 'bold', fontFamily: FONT,
        stroke: '#8B4500', strokeThickness: 6,
      }).setOrigin(0.5).setDepth(11);

      this.add.text(640, 295, ACT_BOSS_NAMES[3], {
        fontSize: '18px', color: '#C8A0CC', fontFamily: FONT,
      }).setOrigin(0.5).setDepth(11);

      this.add.text(640, 340, '모든 액트를 완료했습니다!', {
        fontSize: '15px', color: '#FF69B4', fontFamily: FONT,
      }).setOrigin(0.5).setDepth(11);

      // 최종 통계
      const stats = [
        `최종 HP:  ${GameState.playerHp} / ${GameState.playerMaxHp}`,
        `보유 골드:  ${GameState.gold} G`,
        `수집 유물:  ${GameState.equippedRelics.length}개`,
        `총 전투 승리:  ${GameState.totalBattlesWon}회`,
      ];
      stats.forEach((line, i) => {
        this.add.text(640, 390 + i * 26, line, {
          fontSize: '14px', color: '#8A6A8A', fontFamily: FONT,
        }).setOrigin(0.5).setDepth(11);
      });

      const hubBtn = this.add.text(640, 530, '[ 메인 메뉴로 돌아가기 ]', {
        fontSize: '22px', color: '#FF69B4', fontFamily: FONT,
      }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(11);

      hubBtn.on('pointerover', () => hubBtn.setColor('#FFB6C1'));
      hubBtn.on('pointerout',  () => hubBtn.setColor('#FF69B4'));
      hubBtn.on('pointerdown', () => {
        GameState.hardReset(); AchievementManager.reset();
        this.cameras.main.fadeOut(350, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('TitleScene'));
      });
    }
  }
}
