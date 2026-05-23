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

/** 노드 시각 오프셋 범위 */
const JITTER_X = 45;
const JITTER_Y = 18;

function activeCols(mask: number): number[] {
  return [0, 1, 2].filter(c => (mask >> c) & 1);
}

type Edge = [number, number]; // [srcCol, dstCol]

/** 두 엣지가 시각적으로 교차하는지 확인 */
function crossesEdge(e1: Edge, e2: Edge): boolean {
  // (c1-c2)와 (n1-n2)의 부호가 반대이면 교차
  return (e1[0] - e2[0]) * (e1[1] - e2[1]) < 0;
}

/**
 * StS 스타일 연결 생성:
 * - 노드당 최대 2개 연결
 * - 교차 엣지 없음
 * - 모든 노드에 최소 1개 연결 보장
 */
function buildConnections(row: number, rand: () => number): number[][] {
  const curCols  = activeCols(ROW_COL_MASK[row]);
  const nextCols = activeCols(ROW_COL_MASK[row + 1] ?? 0);
  if (nextCols.length === 0) return curCols.map(() => []);

  // 거리 ≤1 조건을 만족하는 후보 엣지 전부 수집
  const candidates: Edge[] = [];
  curCols.forEach(c => {
    nextCols.filter(nc => Math.abs(nc - c) <= 1).forEach(nc => {
      candidates.push([c, nc]);
    });
  });

  // 시드 셔플로 다양성 확보
  const shuffled = shuffle(candidates, rand);

  // 탐욕적 할당: 교차 없음 & 출발 노드당 최대 2개
  const accepted: Edge[] = [];
  const srcCount: Record<number, number> = {};

  for (const edge of shuffled) {
    const [c] = edge;
    if ((srcCount[c] ?? 0) >= 2) continue;
    if (accepted.some(ae => crossesEdge(ae, edge))) continue;
    accepted.push(edge);
    srcCount[c] = (srcCount[c] ?? 0) + 1;
  }

  // 연결이 0개인 출발 노드에 가장 가까운 다음 col 강제 연결
  for (const c of curCols) {
    if ((srcCount[c] ?? 0) === 0) {
      const closest = nextCols.reduce((best, nc) =>
        Math.abs(nc - c) < Math.abs(best - c) ? nc : best,
      );
      accepted.push([c, closest]);
    }
  }

  return curCols.map(c =>
    accepted.filter(([ac]) => ac === c).map(([, nc]) => nc).sort((a, b) => a - b),
  );
}

export function generateMap(seed: number): MapNode[][] {
  const rand = makeLcg(seed);

  return ROW_TYPE_POOLS.map((pool, row) => {
    const cols     = activeCols(ROW_COL_MASK[row]);
    const types    = row === 9 ? [...pool] : shuffle([...pool], rand);
    const connSets = row < 9 ? buildConnections(row, rand) : cols.map(() => []);
    const isBoss   = row === 9;

    return cols.map((col, i) => ({
      type: types[i] as NodeType,
      row,
      col,
      connections: connSets[i],
      jitterX: isBoss ? 0 : (rand() * 2 - 1) * JITTER_X,
      jitterY: isBoss ? 0 : (rand() * 2 - 1) * JITTER_Y,
    }));
  });
}
