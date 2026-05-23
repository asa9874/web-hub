import type { MapNode, NodeType } from '../types';

/** 선형 합동 생성기 — 시드 기반 결정론적 난수 */
function makeLcg(seed: number): () => number {
  let s = (seed ^ 0xdeadbeef) >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * 각 row에서 활성화된 col (0,1,2) 마스크.
 * bit 0 = col 0, bit 1 = col 1, bit 2 = col 2
 */
const ROW_COL_MASK = [
  0b111, // row 0: 전투 시작 — 3노드
  0b111, // row 1
  0b111, // row 2
  0b101, // row 3: 2노드 (col 0, 2) — 엘리트 보장
  0b111, // row 4
  0b111, // row 5
  0b101, // row 6: 2노드 (col 0, 2) — 엘리트 보장
  0b111, // row 7
  0b111, // row 8: 보스 직전
  0b010, // row 9: 1노드 (col 1) — 보스
];

/** 각 row의 노드 타입 풀 (셔플 대상) */
const ROW_TYPE_POOLS: NodeType[][] = [
  ['battle', 'battle', 'battle'],   // row 0
  ['battle', 'battle', 'event'],    // row 1
  ['battle', 'event', 'shop'],      // row 2
  ['elite', 'event'],               // row 3 (2노드)
  ['battle', 'battle', 'treasure'], // row 4
  ['battle', 'event', 'shop'],      // row 5
  ['elite', 'rest'],                // row 6 (2노드)
  ['battle', 'event', 'shop'],      // row 7
  ['rest', 'shop', 'treasure'],     // row 8
  ['boss'],                         // row 9
];

function activeCols(mask: number): number[] {
  return [0, 1, 2].filter(c => (mask >> c) & 1);
}

/** 각 col에서 다음 row의 연결 col 목록 (거리 ≤1인 활성 col만) */
function connectionsForRow(row: number): number[][] {
  const curCols  = activeCols(ROW_COL_MASK[row]);
  const nextCols = activeCols(ROW_COL_MASK[row + 1] ?? 0);
  return curCols.map(c => nextCols.filter(nc => Math.abs(nc - c) <= 1));
}

export function generateMap(seed: number): MapNode[][] {
  const rand = makeLcg(seed);

  return ROW_TYPE_POOLS.map((pool, row) => {
    const cols     = activeCols(ROW_COL_MASK[row]);
    const types    = row === 9 ? [...pool] : shuffle([...pool], rand);
    const connSets = row < 9 ? connectionsForRow(row) : cols.map(() => []);

    return cols.map((col, i) => ({
      type: types[i] as NodeType,
      row,
      col,
      connections: connSets[i],
    }));
  });
}
