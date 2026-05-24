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

const JITTER_X = 30;
const JITTER_Y = 12;

type Edge = [number, number]; // [srcCol, dstCol]

/** 두 엣지가 시각적으로 교차하는지 확인 */
function crossesEdge(e1: Edge, e2: Edge): boolean {
  return (e1[0] - e2[0]) * (e1[1] - e2[1]) < 0;
}

/**
 * Row 0, 9: 고정 cols [0, 2, 4] (정확히 3노드).
 * Row 1–8: 무작위 3–5노드 — [0,1,2,3,4]에서 n개 선택 후 정렬.
 */
function pickActiveCols(row: number, rand: () => number): number[] {
  if (row === 0 || row === 9) return [0, 2, 4];
  const r = rand();
  const n = r < 0.4 ? 3 : r < 0.75 ? 4 : 5;
  return shuffle([0, 1, 2, 3, 4], rand).slice(0, n).sort((a, b) => a - b);
}

/**
 * 희소 연결 생성: 소스당 최대 1개 아웃고잉 엣지.
 * |srcCol − dstCol| ≤ 1 인접 연결만 허용 (기본).
 * 교차 엣지 없음. 모든 소스에 최소 1개 연결 보장.
 */
function buildConnections(srcCols: number[], dstCols: number[], rand: () => number): number[][] {
  if (dstCols.length === 0) return srcCols.map(() => []);

  const candidates: Edge[] = [];
  srcCols.forEach(c => {
    dstCols.filter(nc => Math.abs(nc - c) <= 1).forEach(nc => {
      candidates.push([c, nc]);
    });
  });

  const shuffled = shuffle(candidates, rand);
  const accepted: Edge[] = [];
  const srcCount: Record<number, number> = {};

  for (const edge of shuffled) {
    const [c] = edge;
    if ((srcCount[c] ?? 0) >= 1) continue;
    if (accepted.some(ae => crossesEdge(ae, edge))) continue;
    accepted.push(edge);
    srcCount[c] = (srcCount[c] ?? 0) + 1;
  }

  // 연결이 없는 소스: 가장 가까운 목적지로 폴백
  for (const c of srcCols) {
    if ((srcCount[c] ?? 0) === 0) {
      const closest = dstCols.reduce((best, nc) =>
        Math.abs(nc - c) < Math.abs(best - c) ? nc : best,
      );
      accepted.push([c, closest]);
    }
  }

  return srcCols.map(c =>
    accepted.filter(([ac]) => ac === c).map(([, nc]) => nc).sort((a, b) => a - b),
  );
}

/**
 * base 풀(3개)을 n개로 패딩.
 * 초과 슬롯은 'battle'로 채운다.
 */
function buildPool(base: NodeType[], n: number): NodeType[] {
  const padded: NodeType[] = [...base];
  while (padded.length < n) padded.push('battle');
  return padded.slice(0, n);
}

// ── 액트별 기본 노드 풀 (3-element base; 추가 노드는 'battle'로 패딩) ────────

/** Act 1 — 던전 탐험 */
const ACT1_POOLS: NodeType[][] = [
  ['battle', 'battle', 'battle'],    // row 0 (고정 3노드)
  ['battle', 'battle', 'event'],     // row 1
  ['battle', 'event',  'shop'],      // row 2
  ['elite',  'event',  'battle'],    // row 3
  ['battle', 'battle', 'treasure'],  // row 4
  ['battle', 'event',  'shop'],      // row 5
  ['elite',  'rest',   'battle'],    // row 6
  ['battle', 'event',  'shop'],      // row 7
  ['rest',   'shop',   'treasure'],  // row 8
  ['boss',   'boss',   'boss'],      // row 9 (고정 3노드 — 암흑 군주)
];

/** Act 2 — 심연의 탑 */
const ACT2_POOLS: NodeType[][] = [
  ['battle', 'battle', 'battle'],
  ['battle', 'battle', 'shop'],
  ['battle', 'elite',  'event'],
  ['elite',  'shop',   'battle'],
  ['battle', 'battle', 'treasure'],
  ['battle', 'elite',  'shop'],
  ['elite',  'rest',   'battle'],
  ['battle', 'event',  'shop'],
  ['rest',   'elite',  'treasure'],
  ['boss',   'boss',   'boss'],      // 그림자 타이탄
];

/** Act 3 — 고대의 전당 */
const ACT3_POOLS: NodeType[][] = [
  ['battle', 'battle', 'battle'],
  ['battle', 'elite',  'event'],
  ['elite',  'battle', 'shop'],
  ['elite',  'rest',   'battle'],
  ['battle', 'elite',  'treasure'],
  ['elite',  'battle', 'rest'],
  ['elite',  'shop',   'battle'],
  ['battle', 'event',  'elite'],
  ['rest',   'shop',   'treasure'],
  ['boss',   'boss',   'boss'],      // 고대인 (최종 보스)
];

const ACT_POOLS: NodeType[][][] = [ACT1_POOLS, ACT2_POOLS, ACT3_POOLS];

/**
 * 던전 맵 생성.
 * @param seed 결정론적 시드
 * @param act  액트 번호 (1 | 2 | 3)
 */
export function generateMap(seed: number, act: number = 1): MapNode[][] {
  const rand  = makeLcg(seed);
  const pools = ACT_POOLS[Math.max(0, act - 1)] ?? ACT1_POOLS;

  // 각 row의 활성 cols를 미리 계산 (연결 생성에 다음 row 정보 필요)
  const rowCols: number[][] = Array.from({ length: 10 }, (_, row) =>
    pickActiveCols(row, rand),
  );

  return pools.map((basePool, row) => {
    const cols   = rowCols[row];
    const n      = cols.length;
    const isBoss = row === 9;
    const isFixed = row === 0 || row === 9;

    // row 0·9는 기본 풀 그대로 사용, 중간 row는 패딩 후 셔플
    const pool = isFixed
      ? [...basePool]
      : shuffle(buildPool(basePool, n), rand);

    const connSets = row < 9
      ? buildConnections(cols, rowCols[row + 1] ?? [], rand)
      : cols.map(() => []);

    return cols.map((col, i) => ({
      type:        pool[i] as NodeType,
      row,
      col,
      connections: connSets[i],
      jitterX:     isBoss ? 0 : (rand() * 2 - 1) * JITTER_X,
      jitterY:     isBoss ? 0 : (rand() * 2 - 1) * JITTER_Y,
    }));
  });
}
