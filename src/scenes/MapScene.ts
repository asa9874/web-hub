import Phaser from 'phaser';
import { GameState } from '../GameState';
import { AchievementManager } from '../achievements/AchievementManager';
import type { MapNode } from '../types';
import {
  BG_DEEP, BG_DIVIDER,
  PINK,
  TEXT_SECONDARY, FONT,
} from '../theme';

// ── 레이아웃 상수 ─────────────────────────────────────────────────────────────
const COL_X       = [290, 640, 990];
const ROW_SPACING = 90;            // row 간격 (63 → 90으로 확대)
const ROW_TOP_PAD = 50;            // 컨테이너 상단 여백 (보스 위)
const ROW_BOT_PAD = 50;            // 컨테이너 하단 여백
const NODE_R      = 22;

// 스크롤 영역
const CONTENT_TOP = 70;            // 헤더 아래 맵 뷰포트 시작 y
const CONTENT_H   = 650;           // 맵 뷰포트 높이 (720 - 70)
const MAP_TOTAL_H = ROW_TOP_PAD + 9 * ROW_SPACING + ROW_BOT_PAD; // 50+810+50 = 910

const NODE_INFO: Record<string, { fill: number; stroke: number; label: string }> = {
  battle:   { fill: 0x2D1550, stroke: 0xC8A0FF, label: '전투'   },
  elite:    { fill: 0x3D0D50, stroke: 0xC050C0, label: '엘리트' },
  boss:     { fill: 0x3d0020, stroke: 0xFF1493, label: '보스'   },
  event:    { fill: 0x2D1550, stroke: 0xFF69B4, label: '이벤트' },
  shop:     { fill: 0x2d1a00, stroke: 0xFFD700, label: '상점'   },
  rest:     { fill: 0x001a0d, stroke: 0x4CAF70, label: '휴식'   },
  treasure: { fill: 0x2a2000, stroke: 0xFFD700, label: '보물'   },
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
    this.add.rectangle(640, 360, 1280, 720, BG_DEEP);
    this.add.rectangle(640, 2, 1280, 4, PINK).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, BG_DIVIDER).setOrigin(0.5, 1);
  }

  /**
   * 헤더 영역(y 0~68)을 배경색으로 덮는 불투명 오버레이.
   * 맵 컨테이너보다 나중에 렌더되므로 스크롤 시 노드가 헤더 뒤로 자연스럽게 숨는다.
   */
  private renderHeaderCover(): void {
    this.add.rectangle(640, 34, 1280, 68, BG_DEEP);
    this.add.rectangle(640, 2, 1280, 4, PINK).setOrigin(0.5, 0);
  }

  private renderHeader(): void {
    this.add.text(640, 28, 'Act 1  —  던전 탐험', {
      fontSize: '20px', color: '#FFB6C1', fontStyle: 'bold', fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.text(640, 52, `HP  ${GameState.playerHp} / ${GameState.playerMaxHp}   |   골드  ${GameState.gold} G`, {
      fontSize: '13px', color: TEXT_SECONDARY, fontFamily: FONT,
    }).setOrigin(0.5);

    this.add.rectangle(640, 65, 1280, 1, BG_DIVIDER);
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
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('HubScene'));
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

    // 연결선 (단일 Graphics)
    const g = this.add.graphics();
    map.forEach(rowNodes => {
      rowNodes.forEach(node => {
        const x1      = nodeX(node);
        const y1      = nodeY(node);
        const curDone = visited.has(`${node.row}_${node.col}`);

        node.connections.forEach(nc => {
          const nxt = (map[node.row + 1] ?? []).find(n => n.col === nc);
          if (!nxt) return;
          const pathDone = curDone && visited.has(`${nxt.row}_${nc}`);
          g.lineStyle(2, pathDone ? 0x8A4A8A : 0x3A1A3A, pathDone ? 0.85 : 0.3);
          g.beginPath();
          g.moveTo(x1, y1);
          g.lineTo(nodeX(nxt), nodeY(nxt));
          g.strokePath();
        });
      });
    });
    this.mapContainer.add(g);

    // 노드
    map.forEach(rowNodes => {
      rowNodes.forEach(node => this.renderNode(node, visited, avail));
    });
  }

  private renderNode(
    node: MapNode,
    visited: Set<string>,
    avail: Set<string>,
  ): void {
    const key       = `${node.row}_${node.col}`;
    const isVisited = visited.has(key);
    const isAvail   = avail.has(key);
    const info      = NODE_INFO[node.type] ?? NODE_INFO['battle'];

    const cx = nodeX(node);
    const cy = nodeY(node);

    const objs: Phaser.GameObjects.GameObject[] = [];

    // 글로우 (가용 노드)
    if (isAvail) {
      objs.push(this.add.circle(cx, cy, NODE_R + 8, info.stroke, 0.12));
    }

    // 노드 원
    const fill   = isVisited ? 0x120820 : (isAvail ? info.fill : 0x0E060E);
    const stroke = isVisited ? 0x3A2A3A  : (isAvail ? info.stroke : 0x2A1A2A);
    const sw     = isAvail ? 3 : 1;
    const circle = this.add.circle(cx, cy, NODE_R, fill);
    circle.setStrokeStyle(sw, stroke);
    objs.push(circle);

    // 아이콘 (첫 글자)
    const iconColor = isVisited ? '#3A2A3A' : (isAvail ? hexStr(info.stroke) : '#2A1A2A');
    objs.push(this.add.text(cx, cy, info.label.charAt(0), {
      fontSize: '13px', color: iconColor, fontStyle: 'bold',
    }).setOrigin(0.5));

    // 노드명 라벨
    const labelColor = isAvail ? hexStr(info.stroke) : (isVisited ? '#3A2A3A' : '#2A1A2A');
    objs.push(this.add.text(cx, cy + NODE_R + 9, info.label, {
      fontSize: '10px', color: labelColor,
    }).setOrigin(0.5));

    this.mapContainer.add(objs);

    // 인터랙션 (가용 & 미방문)
    if (isAvail && !isVisited) {
      circle.setInteractive({ useHandCursor: true });
      circle.on('pointerover', () => circle.setStrokeStyle(sw + 2, info.stroke));
      circle.on('pointerout',  () => circle.setStrokeStyle(sw, info.stroke));
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
          const mode = Math.random() < 0.5 ? 'elite_giant' : 'elite_spider';
          this.scene.start('BattleScene', { mode, returnScene: 'MapScene' });
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
    this.add.rectangle(640, 360, 1280, 720, 0x000000, 0.75).setDepth(10);

    this.add.text(640, 270, 'Act 1 클리어!', {
      fontSize: '52px', color: '#FFD700', fontStyle: 'bold', fontFamily: FONT,
      stroke: '#8B4500', strokeThickness: 5,
    }).setOrigin(0.5).setDepth(11);

    this.add.text(640, 355, '어둠의 군주를 물리쳤습니다.', {
      fontSize: '18px', color: '#C8A0CC', fontFamily: FONT,
    }).setOrigin(0.5).setDepth(11);

    const btn = this.add.text(640, 450, '[ 허브로 돌아가기 ]', {
      fontSize: '22px', color: '#FF69B4', fontFamily: FONT,
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(11);

    btn.on('pointerover', () => btn.setColor('#FFB6C1'));
    btn.on('pointerout',  () => btn.setColor('#FF69B4'));
    btn.on('pointerdown', () => {
      GameState.hardReset(); AchievementManager.reset();
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('HubScene'));
    });
  }
}
