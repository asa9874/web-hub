import Phaser from 'phaser';
import { GameState } from '../GameState';
import type { MapNode } from '../types';

// ── 레이아웃 상수 ─────────────────────────────────────────────────────────────
const COL_X  = [290, 640, 990];
const ROW_Y_BASE = 648;
const ROW_SPACING = 63;
const NODE_R = 22;

const NODE_INFO: Record<string, { fill: number; stroke: number; label: string }> = {
  battle:   { fill: 0x1a2840, stroke: 0x4a7fc1, label: '전투'   },
  elite:    { fill: 0x2d0640, stroke: 0x9b59b6, label: '엘리트' },
  boss:     { fill: 0x3d0000, stroke: 0xe74c3c, label: '보스'   },
  event:    { fill: 0x0d0d2a, stroke: 0x6c5ce7, label: '이벤트' },
  shop:     { fill: 0x2d1a00, stroke: 0xf0a500, label: '상점'   },
  rest:     { fill: 0x001a0d, stroke: 0x27ae60, label: '휴식'   },
  treasure: { fill: 0x2a2000, stroke: 0xfdcb6e, label: '보물'   },
};

function rowY(row: number): number {
  return ROW_Y_BASE - row * ROW_SPACING;
}

function hexStr(n: number): string {
  return '#' + n.toString(16).padStart(6, '0');
}

export class MapScene extends Phaser.Scene {
  constructor() { super({ key: 'MapScene' }); }

  create(): void {
    // 1. 전투 결과 처리 (먼저 처리해야 act complete 감지가 정확함)
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
    this.renderHeader();
    this.renderAbandonButton();
    this.renderMap();

    if (this.isActComplete()) this.showActComplete();
  }

  // ── 배경·헤더 ─────────────────────────────────────────────────────────────

  private renderBackground(): void {
    this.add.rectangle(640, 360, 1280, 720, 0x090d14);
    this.add.rectangle(640, 2, 1280, 4, 0x6c5ce7).setOrigin(0.5, 0);
    this.add.rectangle(640, 718, 1280, 2, 0x21262d).setOrigin(0.5, 1);
  }

  private renderHeader(): void {
    this.add.text(640, 28, 'Act 1  —  던전 탐험', {
      fontSize: '20px', color: '#c8a2ff', fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(640, 52, `HP  ${GameState.playerHp} / ${GameState.playerMaxHp}   |   골드  ${GameState.gold} G`, {
      fontSize: '13px', color: '#7d8590',
    }).setOrigin(0.5);

    this.add.rectangle(640, 65, 1280, 1, 0x21262d);
  }

  private renderAbandonButton(): void {
    const btn = this.add.text(1240, 28, '런 포기', {
      fontSize: '12px', color: '#444455',
    }).setOrigin(1, 0.5).setInteractive({ useHandCursor: true });

    btn.on('pointerover', () => btn.setColor('#e17055'));
    btn.on('pointerout',  () => btn.setColor('#444455'));
    btn.on('pointerdown', () => {
      GameState.hardReset();
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('HubScene'));
    });
  }

  // ── 맵 렌더링 ─────────────────────────────────────────────────────────────

  private renderMap(): void {
    const map     = GameState.mapNodes;
    const visited = new Set(GameState.visitedNodeKeys);
    const avail   = new Set(
      GameState.getAvailableMapNodes().map(n => `${n.row}_${n.col}`),
    );

    // 연결선 (단일 Graphics로 효율화)
    const g = this.add.graphics();
    map.forEach(rowNodes => {
      rowNodes.forEach(node => {
        const x1 = COL_X[node.col];
        const y1 = rowY(node.row);
        const curDone = visited.has(`${node.row}_${node.col}`);

        node.connections.forEach(nc => {
          const nxt = (map[node.row + 1] ?? []).find(n => n.col === nc);
          if (!nxt) return;

          const pathDone = curDone && visited.has(`${nxt.row}_${nc}`);
          g.lineStyle(2, pathDone ? 0x4a4a6a : 0x1a1a28, pathDone ? 0.85 : 0.3);
          g.beginPath();
          g.moveTo(x1, y1);
          g.lineTo(COL_X[nc], rowY(nxt.row));
          g.strokePath();
        });
      });
    });

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

    const cx = COL_X[node.col];
    const cy = rowY(node.row);

    // 글로우 (가용 노드)
    if (isAvail) {
      this.add.circle(cx, cy, NODE_R + 8, info.stroke, 0.12);
    }

    // 노드 원
    const fill   = isVisited ? 0x0d0d1a : (isAvail ? info.fill : 0x0a0a0f);
    const stroke = isVisited ? 0x252535  : (isAvail ? info.stroke : 0x18181e);
    const sw     = isAvail ? 3 : 1;
    const circle = this.add.circle(cx, cy, NODE_R, fill);
    circle.setStrokeStyle(sw, stroke);

    // 아이콘 (첫 글자)
    const iconColor = isVisited ? '#252535' : (isAvail ? hexStr(info.stroke) : '#1c1c28');
    this.add.text(cx, cy, info.label.charAt(0), {
      fontSize: '13px', color: iconColor, fontStyle: 'bold',
    }).setOrigin(0.5);

    // 노드명 라벨
    const labelColor = isAvail ? hexStr(info.stroke) : (isVisited ? '#252535' : '#1c1c28');
    this.add.text(cx, cy + NODE_R + 9, info.label, {
      fontSize: '10px', color: labelColor,
    }).setOrigin(0.5);

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
      fontSize: '52px', color: '#f9ca24', fontStyle: 'bold',
      stroke: '#7a5a00', strokeThickness: 5,
    }).setOrigin(0.5).setDepth(11);

    this.add.text(640, 355, '어둠의 군주를 물리쳤습니다.', {
      fontSize: '18px', color: '#adb5bd',
    }).setOrigin(0.5).setDepth(11);

    const btn = this.add.text(640, 450, '[ 허브로 돌아가기 ]', {
      fontSize: '22px', color: '#6c5ce7',
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(11);

    btn.on('pointerover', () => btn.setColor('#a29bfe'));
    btn.on('pointerout',  () => btn.setColor('#6c5ce7'));
    btn.on('pointerdown', () => {
      GameState.hardReset();
      this.cameras.main.fadeOut(280, 0, 0, 0);
      this.cameras.main.once('camerafadeoutcomplete', () => this.scene.start('HubScene'));
    });
  }
}
