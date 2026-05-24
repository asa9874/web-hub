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
 * 모든 액트에서 동일한 구조적 레이아웃 사용.
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

// ── 액트별 노드 타입 풀 ────────────────────────────────────────────────────────

/** Act 1 — 던전 탐험: 입문 난이도, 이벤트·상점 균형 */
const ACT1_POOLS: NodeType[][] = [
  ['battle', 'battle', 'battle'],    // row 0
  ['battle', 'battle', 'event'],     // row 1
  ['battle', 'event', 'shop'],       // row 2
  ['elite', 'event'],                // row 3 (2노드)
  ['battle', 'battle', 'treasure'],  // row 4
  ['battle', 'event', 'shop'],       // row 5
  ['elite', 'rest'],                 // row 6 (2노드)
  ['battle', 'event', 'shop'],       // row 7
  ['rest', 'shop', 'treasure'],      // row 8
  ['boss'],                          // row 9 — 암흑 군주
];

/** Act 2 — 심연의 탑: 중간 난이도, 엘리트 비중 증가, 상점 의존도 상승 */
const ACT2_POOLS: NodeType[][] = [
  ['battle', 'battle', 'battle'],    // row 0
  ['battle', 'battle', 'shop'],      // row 1 (이벤트 → 상점)
  ['battle', 'elite', 'event'],      // row 2 (엘리트 조기 등장)
  ['elite', 'shop'],                 // row 3 (2노드: 엘리트 + 상점)
  ['battle', 'battle', 'treasure'],  // row 4
  ['battle', 'elite', 'shop'],       // row 5 (엘리트 + 상점)
  ['elite', 'rest'],                 // row 6 (2노드)
  ['battle', 'event', 'shop'],       // row 7
  ['rest', 'elite', 'treasure'],     // row 8 (보스 직전에도 엘리트!)
  ['boss'],                          // row 9 — 그림자 타이탄
];

/** Act 3 — 고대의 전당: 최고 난이도, 엘리트 다수, 회복 희소 */
const ACT3_POOLS: NodeType[][] = [
  ['battle', 'battle', 'battle'],    // row 0
  ['battle', 'elite', 'event'],      // row 1 (row 1부터 엘리트)
  ['elite', 'battle', 'shop'],       // row 2
  ['elite', 'rest'],                 // row 3 (2노드: 엘리트 + 휴식)
  ['battle', 'elite', 'treasure'],   // row 4 (엘리트 + 보물)
  ['elite', 'battle', 'rest'],       // row 5 (엘리트 + 휴식)
  ['elite', 'shop'],                 // row 6 (2노드: 엘리트 + 상점)
  ['battle', 'event', 'elite'],      // row 7 (row 7에도 엘리트)
  ['rest', 'shop', 'treasure'],      // row 8 (최종 준비)
  ['boss'],                          // row 9 — 고대인 (최종 보스)
];

const ACT_POOLS: NodeType[][][] = [ACT1_POOLS, ACT2_POOLS, ACT3_POOLS];

/** 노드 시각 오프셋 범위 */
const JITTER_X = 45;
const JITTER_Y = 18;

function activeCols(mask: number): number[] {
  return [0, 1, 2].filter(c => (mask >> c) & 1);
}

type Edge = [number, number]; // [srcCol, dstCol]

/** 두 엣지가 시각적으로 교차하는지 확인 */
function crossesEdge(e1: Edge, e2: Edge): boolean {
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

  const candidates: Edge[] = [];
  curCols.forEach(c => {
    nextCols.filter(nc => Math.abs(nc - c) <= 1).forEach(nc => {
      candidates.push([c, nc]);
    });
  });

  const shuffled = shuffle(candidates, rand);
  const accepted: Edge[] = [];
  const srcCount: Record<number, number> = {};

  for (const edge of shuffled) {
    const [c] = edge;
    if ((srcCount[c] ?? 0) >= 2) continue;
    if (accepted.some(ae => crossesEdge(ae, edge))) continue;
    accepted.push(edge);
    srcCount[c] = (srcCount[c] ?? 0) + 1;
  }

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

/**
 * 던전 맵 생성.
 * @param seed 결정론적 시드
 * @param act  액트 번호 (1 | 2 | 3) — 노드 타입 풀 결정
 */
export function generateMap(seed: number, act: number = 1): MapNode[][] {
  const rand = makeLcg(seed);
  const pools = ACT_POOLS[Math.max(0, act - 1)] ?? ACT1_POOLS;

  return pools.map((pool, row) => {
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
