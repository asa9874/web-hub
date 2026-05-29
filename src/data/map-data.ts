export type RoomType = 'normal' | 'npc' | 'item' | 'danger' | 'locked' | 'exit';

export interface Room {
  readonly id: string;
  readonly name: string;
  readonly desc: string;
  readonly cx: number;
  readonly cy: number;
  readonly type: RoomType;
  readonly connectsTo?: string; // world location ID this exit leads to
}

export interface LocationInfo {
  readonly id: string;
  readonly name: string;
  readonly zone: '생존 구역' | '회색 구역' | '경계 구역' | '심층 구역';
  readonly dangerDisplay: string;
  readonly npc: string;
  readonly rooms: readonly Room[];
  readonly roomEdges: readonly [string, string][];
  readonly layout?: LocationLayout;
}

// ── Layout overlay types ──────────────────────────────────────────────────────
export type LayoutRegionStyle =
  'floor' | 'basement' | 'rooftop' | 'outdoor' | 'road' | 'water' | 'danger-zone'
  | 'zone-safe' | 'zone-grey' | 'zone-border' | 'zone-deep';

export interface LayoutRegion {
  readonly style: LayoutRegionStyle;
  readonly label?: string;
  readonly x: number; readonly y: number;
  readonly w: number; readonly h: number;
}

export interface LayoutSep {
  readonly x1: number; readonly y1: number;
  readonly x2: number; readonly y2: number;
  readonly style?: 'dashed' | 'bold';
  readonly label?: string;
}

export interface LocationLayout {
  readonly outline?: { readonly x: number; readonly y: number; readonly w: number; readonly h: number };
  readonly regions?: readonly LayoutRegion[];
  readonly seps?: readonly LayoutSep[];
}

// ── A1 폐허 아파트 ── 측면 단면도 (옥상→지하, 좌우 날개) ──────────────────────
const A1_LAYOUT: LocationLayout = {
  outline: { x:5, y:0, w:90, h:73 },
  regions: [
    { style:'rooftop',  label:'옥상',   x:5, y:0,  w:90, h:8  },
    { style:'floor',    label:'4F',     x:5, y:8,  w:90, h:12 },
    { style:'floor',    label:'3F',     x:5, y:20, w:90, h:12 },
    { style:'floor',    label:'2F',     x:5, y:32, w:90, h:12 },
    { style:'floor',    label:'1F',     x:5, y:44, w:90, h:12 },
    { style:'basement', label:'B1 지하',x:5, y:56, w:90, h:17 },
  ],
  seps: [
    { x1:5, y1:8,  x2:95, y2:8  },
    { x1:5, y1:20, x2:95, y2:20 },
    { x1:5, y1:32, x2:95, y2:32 },
    { x1:5, y1:44, x2:95, y2:44 },
    { x1:5, y1:56, x2:95, y2:56, style:'bold', label:'GL' },
  ],
};

const A1_R: readonly Room[] = [
  { id:'a1-roof',  name:'옥상',        desc:'탁 트인 전망 · 이세아 조우 가능 (잠김)',  cx:50, cy: 4, type:'npc'    },
  { id:'a1-4f',    name:'4층 복도',    desc:'일부 붕괴 — 우회 경로 필요',             cx:50, cy:14, type:'danger' },
  { id:'a1-401',   name:'401호',       desc:'접근 가능 · 내부 빈 공간',               cx:20, cy:14, type:'normal' },
  { id:'a1-406',   name:'406호',       desc:'접근 가능 · 내부 빈 공간',               cx:80, cy:14, type:'normal' },
  { id:'a1-3f',    name:'3층 복도',    desc:'창문 빛 유일 · 302호·304호 연결',        cx:50, cy:26, type:'normal' },
  { id:'a1-302',   name:'302호 ★',    desc:'주인공 방 · 진통제·라이터·노트 보관',    cx:16, cy:26, type:'item'   },
  { id:'a1-301',   name:'301호',       desc:'이웃 주민 흔적 · 내부 접근 가능',        cx:70, cy:26, type:'normal' },
  { id:'a1-304',   name:'304호',       desc:'닫힌 문 너머에서 소리가 남',             cx:86, cy:31, type:'danger' },
  { id:'a1-2f',    name:'2층 복도',    desc:'대부분 잠김 · 203호만 열려 있음',        cx:50, cy:38, type:'normal' },
  { id:'a1-203',   name:'203호 ※',    desc:'열린 문 · 벽에 생존 기록 메모',          cx:16, cy:38, type:'item'   },
  { id:'a1-1f',    name:'1층 로비',    desc:'우편함·엘리베이터(고장)·계단실',         cx:50, cy:50, type:'normal' },
  { id:'a1-mgmt',  name:'관리실',      desc:'마스터키 · 건물 도면 보관',              cx:16, cy:50, type:'item'   },
  { id:'a1-exit',  name:'출입구',      desc:'→ B1 망가진 골목',                      cx:84, cy:50, type:'exit',   connectsTo:'B1' },
  { id:'a1-b1f',   name:'지하 주차장', desc:'전기실·창고 · 깊은 쪽에서 이상한 소리', cx:50, cy:64, type:'danger' },
  { id:'a1-elec',  name:'전기실',      desc:'배전반 · 건물 전원 제어 가능',           cx:22, cy:64, type:'item'   },
  { id:'a1-stor',  name:'창고',        desc:'물자 보관 · 일부 잔류',                  cx:78, cy:64, type:'item'   },
  { id:'a1-test',  name:'[DEV] 비밀 통로', desc:'→ TX 테스트 공간 (개발 전용)',       cx:50, cy:71, type:'exit',   connectsTo:'TX' },
];
const A1_E: readonly [string,string][] = [
  ['a1-roof','a1-4f'],
  ['a1-4f','a1-401'],['a1-4f','a1-406'],['a1-4f','a1-3f'],
  ['a1-3f','a1-302'],['a1-3f','a1-301'],['a1-3f','a1-304'],['a1-3f','a1-2f'],
  ['a1-2f','a1-203'],['a1-2f','a1-1f'],
  ['a1-1f','a1-mgmt'],['a1-1f','a1-exit'],['a1-1f','a1-b1f'],
  ['a1-b1f','a1-elec'],['a1-b1f','a1-stor'],['a1-b1f','a1-test'],
];

// ── A2 지하 3구역 ── 수평 진입로 + 동쪽 수직 서비스 통로 ─────────────────────
const A2_LAYOUT: LocationLayout = {
  regions: [
    { style:'basement', label:'주 통로',     x:0,  y:7,  w:68, h:16 },
    { style:'floor',    label:'거주구역',    x:37, y:27, w:28, h:18 },
    { style:'basement', label:'서비스 통로', x:67, y:7,  w:23, h:88 },
  ],
  seps: [
    { x1:67, y1:23, x2:67, y2:95, style:'dashed' },
    { x1:37, y1:27, x2:67, y2:27 },
    { x1:37, y1:45, x2:67, y2:45 },
  ],
};

const A2_R: readonly Room[] = [
  { id:'a2-tun',   name:'B3 터널',       desc:'→ B3 지하철역 (허가 필요)',               cx: 5, cy:15, type:'exit',   connectsTo:'B3' },
  { id:'a2-gate',  name:'검문소 A2-01',  desc:'철문·창구 · 오기범 허가 필요',            cx:20, cy:15, type:'locked' },
  { id:'a2-hall',  name:'입구 복도',     desc:'벽에 생존자 이름·그림 빼곡히',            cx:37, cy:15, type:'normal' },
  { id:'a2-main',  name:'메인 홀',       desc:'배급카운터·공지게시판 · 오후 비공식 시장', cx:55, cy:15, type:'npc'    },
  { id:'a2-resA',  name:'거주구역 A',    desc:'가족 세대 ~30세대 · 서하 거주',           cx:47, cy:36, type:'npc'    },
  { id:'a2-resB',  name:'거주구역 B',    desc:'단독 침대 ~70개 · 정보 거래',             cx:63, cy:36, type:'normal' },
  { id:'a2-med',   name:'의료실',        desc:'진료대 3개·약품장 · 한재이 역할',         cx:78, cy:15, type:'npc'    },
  { id:'a2-sup',   name:'배급 창고',     desc:'자물쇠 3중 잠금 · 오기범 관리',           cx:78, cy:32, type:'locked' },
  { id:'a2-off',   name:'오기범 집무실', desc:'지도·무전기·서랍 · 신호장비 문서(숨김)',  cx:78, cy:50, type:'npc'    },
  { id:'a2-gen',   name:'발전기실',      desc:'대형 발전기 2기 · 철판 뒤 숨겨진 통로',  cx:78, cy:68, type:'item'   },
  { id:'a2-seal',  name:'봉인 사무실',   desc:'자물쇠 2중 봉인 · 신호장비 보관 (핵심)', cx:78, cy:86, type:'locked' },
];
const A2_E: readonly [string,string][] = [
  ['a2-tun','a2-gate'],['a2-gate','a2-hall'],['a2-hall','a2-main'],
  ['a2-main','a2-resA'],['a2-main','a2-resB'],['a2-main','a2-med'],
  ['a2-med','a2-sup'],['a2-sup','a2-off'],['a2-off','a2-gen'],['a2-gen','a2-seal'],
];

// ── B1 망가진 골목 ── 위에서 본 교차로 구조 ──────────────────────────────────
const B1_LAYOUT: LocationLayout = {
  regions: [
    { style:'road',    label:'북남 도로', x:42, y:0,  w:16, h:48 },
    { style:'road',    label:'동서 도로', x:0,  y:32, w:100, h:16 },
    { style:'road',    label:'',          x:42, y:48, w:16, h:20 },
    { style:'outdoor', label:'뒷골목',   x:14, y:60, w:20, h:16 },
    { style:'basement',label:'지하 통로',x:14, y:76, w:20, h:24 },
  ],
  seps: [
    { x1:14, y1:76, x2:34, y2:76, style:'dashed', label:'지하입구' },
  ],
};

const B1_R: readonly Room[] = [
  { id:'b1-nb5',  name:'→ B5 회색거리', desc:'북쪽 — B5 회색 거리 방향',               cx:50, cy: 4, type:'exit',   connectsTo:'B5' },
  { id:'b1-n',    name:'북쪽 도로',     desc:'B1-03 · 개방 구역 · 은신처 없음',         cx:50, cy:20, type:'normal' },
  { id:'b1-na1',  name:'→ A1 아파트',  desc:'서쪽 — A1 폐허 아파트 방향',              cx: 5, cy:40, type:'exit',   connectsTo:'A1' },
  { id:'b1-rub',  name:'잔해 더미',     desc:'B1-05 · 숨겨진 지하통로 입구',            cx:24, cy:40, type:'item'   },
  { id:'b1-crs',  name:'중앙 교차점',   desc:'B1-02 · 경고판 뒷면 메모 — 지하통로 위치',cx:50, cy:40, type:'item'   },
  { id:'b1-e',    name:'동쪽 골목',     desc:'B1-04 · 야간 타락자 2인조 출몰',          cx:76, cy:40, type:'danger' },
  { id:'b1-nb2',  name:'→ B2 편의점',  desc:'동쪽 — B2 폐편의점 방향',                cx:94, cy:40, type:'exit',   connectsTo:'B2' },
  { id:'b1-alley',name:'뒷골목',        desc:'B1-06 · 류민 조우 · 폭 1m · 탈출 불가', cx:24, cy:62, type:'npc'    },
  { id:'b1-nb3',  name:'→ B3 지하철',  desc:'지하 — B3 지하철역 (숨겨진 경로)',        cx:24, cy:84, type:'exit',   connectsTo:'B3' },
];
const B1_E: readonly [string,string][] = [
  ['b1-nb5','b1-n'],
  ['b1-n','b1-rub'],['b1-n','b1-crs'],['b1-n','b1-e'],
  ['b1-na1','b1-crs'],
  ['b1-rub','b1-alley'],
  ['b1-alley','b1-nb3'],
  ['b1-e','b1-nb2'],
];

// ── B2 폐편의점 ── 위에서 본 편의점 평면도 ───────────────────────────────────
const B2_LAYOUT: LocationLayout = {
  outline: { x:12, y:14, w:76, h:73 },
  regions: [
    { style:'outdoor', label:'입구 전면',  x:12, y:14, w:76, h:10 },
    { style:'floor',   label:'매장 내부',  x:12, y:24, w:76, h:46 },
    { style:'floor',   label:'후방 구역',  x:12, y:70, w:76, h:17 },
  ],
  seps: [
    { x1:12, y1:24, x2:88, y2:24 },
    { x1:12, y1:70, x2:88, y2:70, style:'dashed' },
    { x1:50, y1:24, x2:50, y2:70, style:'dashed' },
  ],
};

const B2_R: readonly Room[] = [
  { id:'b2-nb1',  name:'→ B1 골목',  desc:'북쪽 — B1 망가진 골목 방향',      cx:50, cy: 5, type:'exit',   connectsTo:'B1' },
  { id:'b2-ent',  name:'입구',       desc:'자동문 반파 · 야간 타락자 출몰 가능',cx:50, cy:22, type:'normal' },
  { id:'b2-shf',  name:'진열대',     desc:'대부분 비어있음 · 일부 물자 잔류',  cx:25, cy:42, type:'item'   },
  { id:'b2-ctr',  name:'계산대',     desc:'빈 카운터 · 정보 단서 가능',        cx:68, cy:35, type:'normal' },
  { id:'b2-stor', name:'창고',       desc:'추가 물자 · 잠긴 캐비닛',           cx:25, cy:62, type:'item'   },
  { id:'b2-stf',  name:'직원 공간',  desc:'뒷문으로 연결',                    cx:68, cy:58, type:'normal' },
  { id:'b2-back', name:'뒷문',       desc:'골목 방향 탈출로',                 cx:50, cy:78, type:'exit'   },
  { id:'b2-nb3',  name:'→ B3 지하철',desc:'남쪽 — B3 지하철역 방향',          cx:50, cy:94, type:'exit',   connectsTo:'B3' },
];
const B2_E: readonly [string,string][] = [
  ['b2-nb1','b2-ent'],
  ['b2-ent','b2-shf'],['b2-ent','b2-ctr'],
  ['b2-ctr','b2-stf'],['b2-shf','b2-stor'],
  ['b2-stf','b2-back'],['b2-stor','b2-back'],
  ['b2-back','b2-nb3'],
];

// ── B3 지하철역 ── 지하구조 단면도 (지상→대합실→승강장→유지보수) ───────────────
const B3_LAYOUT: LocationLayout = {
  regions: [
    { style:'outdoor',     label:'지상',          x:0,  y:0,  w:100, h:12 },
    { style:'floor',       label:'대합실층',       x:0,  y:12, w:100, h:22 },
    { style:'floor',       label:'에스컬레이터',   x:0,  y:34, w:100, h:14 },
    { style:'basement',    label:'승강장 A',       x:0,  y:48, w:51,  h:30 },
    { style:'danger-zone', label:'승강장 B ⚠',    x:52, y:48, w:48,  h:30 },
    { style:'basement',    label:'유지보수 터널',  x:0,  y:78, w:51,  h:22 },
  ],
  seps: [
    { x1:0,  y1:12, x2:100, y2:12, style:'bold', label:'지하입구' },
    { x1:0,  y1:34, x2:100, y2:34 },
    { x1:0,  y1:48, x2:100, y2:48 },
    { x1:51, y1:48, x2:51,  y2:78, style:'dashed' },
    { x1:0,  y1:78, x2:51,  y2:78, style:'dashed' },
  ],
};

const B3_R: readonly Room[] = [
  { id:'b3-gin',  name:'지상 남쪽 입구',   desc:'지상 접근 가능 유일 입구',                    cx:40, cy: 5, type:'exit',   connectsTo:'B2' },
  { id:'b3-hall', name:'대합실 B3-02',     desc:'바닥 "3구역 →" 메모 · 자판기 1대 열려있음',  cx:50, cy:22, type:'item'   },
  { id:'b3-esc',  name:'에스컬레이터',     desc:'B3-03 · 정지 · 도보 가능 · 메모 끼워짐',    cx:50, cy:40, type:'normal' },
  { id:'b3-plA',  name:'플랫폼 A',         desc:'B3-04 · A2 터널 램프 신호 · 측면 유지보수문', cx:28, cy:60, type:'normal' },
  { id:'b3-stg',  name:'자재 창고',        desc:'B3-07 · 철근·공구·안전모',                   cx: 8, cy:60, type:'item'   },
  { id:'b3-tun',  name:'유지보수 터널',    desc:'B3-06 · 벽면 좌표 메모 · 비상 외부출구(잠김)', cx: 8, cy:83, type:'item'   },
  { id:'b3-plB',  name:'플랫폼 B ⚠',      desc:'B3-05 · 조명 전무 · 부정 농도 ★★★★ · 봉인 너머 소리', cx:72, cy:60, type:'danger' },
  { id:'b3-a2t',  name:'→ A2 지하 3구역', desc:'지하 터널 · 허가 필요',                       cx:28, cy:88, type:'exit',   connectsTo:'A2' },
];
const B3_E: readonly [string,string][] = [
  ['b3-gin','b3-hall'],
  ['b3-hall','b3-esc'],
  ['b3-esc','b3-plA'],['b3-esc','b3-plB'],
  ['b3-plA','b3-stg'],['b3-plA','b3-tun'],['b3-plA','b3-a2t'],
];

// ── B4 붕괴된 병원 ── 측면 단면도 (옥상→지하, 동서 날개) ─────────────────────
const B4_LAYOUT: LocationLayout = {
  outline: { x:5, y:0, w:90, h:88 },
  regions: [
    { style:'rooftop',     label:'옥상',         x:5, y:0,  w:90, h:8  },
    { style:'danger-zone', label:'4층 소아과',   x:5, y:8,  w:90, h:12 },
    { style:'floor',       label:'3층 수술실',   x:5, y:20, w:90, h:12 },
    { style:'danger-zone', label:'2층 내과',     x:5, y:32, w:90, h:12 },
    { style:'floor',       label:'1층 응급',     x:5, y:44, w:90, h:14 },
    { style:'floor',       label:'1층 복도',     x:5, y:58, w:90, h:14 },
    { style:'basement',    label:'지하',         x:5, y:72, w:90, h:16 },
  ],
  seps: [
    { x1:5, y1:8,  x2:95, y2:8  },
    { x1:5, y1:20, x2:95, y2:20 },
    { x1:5, y1:32, x2:95, y2:32 },
    { x1:5, y1:44, x2:95, y2:44 },
    { x1:5, y1:58, x2:95, y2:58 },
    { x1:5, y1:72, x2:95, y2:72, style:'bold', label:'GL' },
  ],
};

const B4_R: readonly Room[] = [
  { id:'b4-roof', name:'옥상 헬리패드', desc:'헬기 없음 · 심층 구역 경계 원거리 조망',     cx:50, cy: 4, type:'normal' },
  { id:'b4-4f',   name:'4층 소아과 ⚠', desc:'진입 강력 비권장 · 어린아이 소리처럼 들림', cx:50, cy:14, type:'danger' },
  { id:'b4-3f',   name:'3층 수술실 복도',desc:'타락자 배회 드묾 (이유 불명)',             cx:38, cy:26, type:'normal' },
  { id:'b4-303',  name:'수술실 303 ★',  desc:'이주원 청진기·메모 · 핵심 스토리 아이템',  cx:76, cy:26, type:'item'   },
  { id:'b4-2f',   name:'2층 내과',      desc:'타락자 다수 배회 · 진입 비권장',            cx:50, cy:38, type:'danger' },
  { id:'b4-er',   name:'1층 응급실',    desc:'마지막 업무 일지 (5시47분) · 자동문 반열림', cx:40, cy:51, type:'item'   },
  { id:'b4-tr',   name:'처치실',        desc:'B4-02 · 생리식염수·붕대 잔류 · 커튼 뒤 ?', cx:14, cy:51, type:'item'   },
  { id:'b4-exit', name:'병원 출입구',   desc:'→ B5 회색 거리 방향',                      cx:80, cy:51, type:'exit',   connectsTo:'B5' },
  { id:'b4-cor',  name:'복도 ⚠',        desc:'B4-03 · 타락자 2개체 · 손톱 자국',         cx:55, cy:64, type:'danger' },
  { id:'b4-med',  name:'약품보관실',    desc:'B4-04 · 잠금 해제 필요 · 항생제·소독약',   cx:80, cy:64, type:'locked' },
  { id:'b4-fac',  name:'지하 시설실',   desc:'배전반 · 1층 전자잠금 해제 가능',           cx:28, cy:80, type:'item'   },
  { id:'b4-mor',  name:'지하 영안실 ☠', desc:'부정 농도 극도 · 진입 절대 금지',           cx:72, cy:80, type:'danger' },
];
const B4_E: readonly [string,string][] = [
  ['b4-roof','b4-4f'],['b4-4f','b4-3f'],
  ['b4-3f','b4-303'],['b4-3f','b4-2f'],
  ['b4-2f','b4-er'],
  ['b4-er','b4-tr'],['b4-er','b4-exit'],['b4-er','b4-cor'],['b4-er','b4-fac'],
  ['b4-cor','b4-med'],
  ['b4-fac','b4-mor'],
];

// ── B5 회색 거리 ── 위에서 본 도시 교차로 ────────────────────────────────────
const B5_LAYOUT: LocationLayout = {
  regions: [
    { style:'road',    label:'북남 도로', x:42, y:0,  w:16, h:100 },
    { style:'road',    label:'동서 도로', x:0,  y:18, w:100, h:16  },
    { style:'outdoor', label:'상가 A',   x:6,  y:40, w:28,  h:20  },
    { style:'outdoor', label:'상가 B',   x:38, y:40, w:24,  h:20  },
    { style:'outdoor', label:'상가 C',   x:66, y:40, w:28,  h:20  },
    { style:'floor',   label:'폐건물',   x:36, y:62, w:28,  h:16  },
  ],
};

const B5_R: readonly Room[] = [
  { id:'b5-nc1',  name:'→ C1 한강변',  desc:'북쪽 — C1 한강변 방향',                cx:50, cy: 4, type:'exit',   connectsTo:'C1' },
  { id:'b5-nb6',  name:'→ B6 연세대',  desc:'서쪽 — B6 연세대 폐허 방향',           cx: 8, cy:26, type:'exit',   connectsTo:'B6' },
  { id:'b5-crs',  name:'교차로',        desc:'완전 노출 구역 · 야간 타락자 다수',     cx:50, cy:26, type:'danger' },
  { id:'b5-nb4',  name:'→ B4 병원',    desc:'동쪽 — B4 붕괴된 병원 방향',           cx:92, cy:26, type:'exit',   connectsTo:'B4' },
  { id:'b5-shpA', name:'상가 잔해 A',   desc:'서쪽 상가 · 은신 가능',                cx:22, cy:50, type:'normal' },
  { id:'b5-shpB', name:'상가 잔해 B',   desc:'중앙 상가 · 폐건물 통로',              cx:50, cy:50, type:'normal' },
  { id:'b5-shpC', name:'상가 잔해 C',   desc:'동쪽 상가 · 붕괴 심함',               cx:78, cy:50, type:'normal' },
  { id:'b5-bld',  name:'폐건물',        desc:'내부 은신 가능 · 2층 원거리 조망',     cx:50, cy:70, type:'normal' },
  { id:'b5-nb1',  name:'→ B1 골목',    desc:'남쪽 — B1 망가진 골목 방향',           cx:50, cy:90, type:'exit',   connectsTo:'B1' },
];
const B5_E: readonly [string,string][] = [
  ['b5-nc1','b5-crs'],['b5-nb6','b5-crs'],['b5-crs','b5-nb4'],
  ['b5-crs','b5-shpA'],['b5-crs','b5-shpB'],['b5-crs','b5-shpC'],
  ['b5-shpB','b5-bld'],['b5-bld','b5-nb1'],
];

// ── B6 연세대 폐허 ── 위에서 본 캠퍼스 지도 (북→남) ─────────────────────────
const B6_LAYOUT: LocationLayout = {
  outline: { x:5, y:3, w:90, h:93 },
  regions: [
    { style:'outdoor', label:'북문 구역',       x:5,  y:3,  w:90, h:15 },
    { style:'floor',   label:'공학관',          x:5,  y:18, w:40, h:30 },
    { style:'floor',   label:'의과대학관',      x:55, y:18, w:40, h:14 },
    { style:'outdoor', label:'캠퍼스 중앙',     x:5,  y:48, w:90, h:20 },
    { style:'floor',   label:'도서관·중앙광장', x:5,  y:68, w:90, h:22 },
    { style:'floor',   label:'본관',            x:25, y:74, w:50, h:16 },
  ],
  seps: [
    { x1:5,  y1:18, x2:95, y2:18 },
    { x1:5,  y1:48, x2:95, y2:48 },
    { x1:5,  y1:68, x2:95, y2:68 },
    { x1:45, y1:18, x2:45, y2:48, style:'dashed' },
  ],
};

const B6_R: readonly Room[] = [
  { id:'b6-ng',   name:'북문 → C1',    desc:'북쪽 한강변 방향',                      cx:50, cy: 5, type:'exit',   connectsTo:'C1' },
  { id:'b6-eng',  name:'공학관 B6-05',  desc:'이공계 건물 · 지하 계단 진입점',        cx:25, cy:26, type:'item'   },
  { id:'b6-med',  name:'의과대학관',    desc:'잠김 · 접근 불가',                      cx:75, cy:26, type:'locked' },
  { id:'b6-lab',  name:'지하 연구실 ★', desc:'B6-06 · 정도석 거주 · 차폐 구조 · 스핑크스 문서', cx:25, cy:40, type:'npc' },
  { id:'b6-soc',  name:'사회과학관',    desc:'비어있음',                              cx:18, cy:60, type:'normal' },
  { id:'b6-lib',  name:'도서관 B6-04',  desc:'지하 서고 보존 良 · 의학교재·논문 사본', cx:50, cy:60, type:'item'   },
  { id:'b6-sq',   name:'중앙 광장',     desc:'B6-02 · 조각상·게시판',                cx:78, cy:60, type:'normal' },
  { id:'b6-main', name:'본관 B6-03',    desc:'1F행정실 2F강의실 3F연구실',            cx:50, cy:82, type:'normal' },
  { id:'b6-gate', name:'정문 → B5',     desc:'남쪽 회색거리 방향',                   cx:50, cy:94, type:'exit',   connectsTo:'B5' },
];
const B6_E: readonly [string,string][] = [
  ['b6-ng','b6-eng'],['b6-ng','b6-med'],['b6-ng','b6-sq'],
  ['b6-eng','b6-lab'],['b6-eng','b6-soc'],
  ['b6-soc','b6-lib'],['b6-lib','b6-sq'],
  ['b6-lib','b6-main'],['b6-sq','b6-main'],
  ['b6-main','b6-gate'],
];

// ── C1 한강변 ── 위에서 본 지도 (북C2→남B5/B6, 동서로 강이 흐름) ─────────────
const C1_LAYOUT: LocationLayout = {
  regions: [
    { style:'outdoor', label:'강변 북측',     x:0, y:0,  w:100, h:40 },
    { style:'road',    label:'강변북로',      x:24,y:22, w:52,  h:12 },
    { style:'water',   label:'한강 (검은 강)',x:0, y:54, w:100, h:18 },
    { style:'outdoor', label:'강변 남측',     x:0, y:72, w:100, h:28 },
  ],
  seps: [
    { x1:0, y1:40, x2:100, y2:40, style:'dashed' },
    { x1:0, y1:54, x2:100, y2:54, style:'bold' },
    { x1:0, y1:72, x2:100, y2:72, style:'bold' },
  ],
};

const C1_R: readonly Room[] = [
  { id:'c1-nc2',  name:'→ C2 심층 경계', desc:'북쪽 — C2 심층 구역 경계 방향',                 cx:50, cy: 4, type:'exit',   connectsTo:'C2' },
  { id:'c1-obs',  name:'관측 지점 C1-06',desc:'이세아 조우 가능 · 고가도로 위 8m · 은별 방향 조망', cx:50, cy:16, type:'npc'  },
  { id:'c1-rd',   name:'강변북로 C1-01', desc:'4차선 도로 · 방호벽 따라 부분 은신',             cx:50, cy:28, type:'normal' },
  { id:'c1-walk', name:'강변산책로 C1-02',desc:'검게 변한 강물 바로 인접 · 접촉 절대 금지',      cx:22, cy:46, type:'danger' },
  { id:'c1-dep',  name:'강변 창고 C1-05',desc:'구명조끼·방수장비·조명탄·밧줄 · 이세아 흔적',   cx:78, cy:46, type:'item'   },
  { id:'c1-riv',  name:'한강 (검은 강)',  desc:'수면 접촉 즉시 오염 · 강 건너편에 무언가 보임',  cx:50, cy:62, type:'danger' },
  { id:'c1-br1',  name:'한강대교 C1-03', desc:'30% 구간 통과 가능 · 접근할수록 부정 농도 상승', cx:22, cy:78, type:'normal' },
  { id:'c1-br2',  name:'잠수교 C1-04',   desc:'수면 근접형 · 50% 이후 생존 불가 · 진입 금지',  cx:78, cy:78, type:'locked' },
  { id:'c1-nb5',  name:'→ B5 회색거리',  desc:'남쪽 — B5 회색 거리 방향',                      cx:28, cy:93, type:'exit',   connectsTo:'B5' },
  { id:'c1-nb6',  name:'→ B6 연세대',    desc:'남서쪽 — B6 연세대 폐허 방향',                  cx:72, cy:93, type:'exit',   connectsTo:'B6' },
];
const C1_E: readonly [string,string][] = [
  ['c1-nc2','c1-obs'],['c1-obs','c1-rd'],
  ['c1-rd','c1-walk'],['c1-rd','c1-dep'],
  ['c1-walk','c1-riv'],['c1-riv','c1-br1'],['c1-riv','c1-br2'],
  ['c1-walk','c1-nb5'],['c1-dep','c1-nb6'],
];

// ── C2 심층 구역 경계 ── 경계선 위아래로 위험지대와 거점 ─────────────────────
const C2_LAYOUT: LocationLayout = {
  regions: [
    { style:'danger-zone', label:'심층 구역',  x:0,  y:0,  w:100, h:28 },
    { style:'danger-zone', label:'분출구 ☠',   x:65, y:28, w:35,  h:24 },
    { style:'outdoor',     label:'경계 지대',  x:0,  y:28, w:65,  h:72 },
    { style:'floor',       label:'',           x:65, y:52, w:35,  h:48 },
  ],
  seps: [
    { x1:0, y1:28, x2:100, y2:28, style:'bold', label:'경계선' },
  ],
};

const C2_R: readonly Room[] = [
  { id:'c2-nd1',  name:'→ D1 부정의 탑', desc:'북쪽 심층 — 마법소녀 동반 필수',              cx:50, cy: 5, type:'exit',   connectsTo:'D1' },
  { id:'c2-line', name:'경계선 ☠',       desc:'붉은 천 표식 · 이 선 넘으면 타락 가속 즉시',   cx:50, cy:22, type:'danger' },
  { id:'c2-vent', name:'분출구 C2-03 ☠', desc:'절대 접근 금지 · 반경 10m 즉각 타락 · 주기 짧아짐', cx:82, cy:38, type:'danger' },
  { id:'c2-obs',  name:'경계선 관측 C2-01',desc:'어제보다 5m 더 남쪽에 있음 (경계가 밀리는 중)', cx:50, cy:38, type:'item'   },
  { id:'c2-base', name:'은별 거점 C2-02', desc:'폐건물 1층 · 침구·성냥·식량 · 날짜별 후퇴 기록', cx:25, cy:62, type:'npc'  },
  { id:'c2-nc1',  name:'→ C1 한강변',    desc:'남쪽 — C1 한강변 방향',                       cx:50, cy:88, type:'exit',   connectsTo:'C1' },
];
const C2_E: readonly [string,string][] = [
  ['c2-nd1','c2-line'],
  ['c2-line','c2-vent'],['c2-line','c2-obs'],
  ['c2-obs','c2-base'],
  ['c2-base','c2-nc1'],
];

// ── D1 부정의 탑 ── 측면 단면도 (광장→탑 층별→지하) ─────────────────────────
const D1_LAYOUT: LocationLayout = {
  outline: { x:30, y:38, w:40, h:44 },
  regions: [
    { style:'danger-zone', label:'심층 구역',  x:0,  y:0,  w:100, h:14 },
    { style:'outdoor',     label:'탑 광장',    x:14, y:14, w:72,  h:24 },
    { style:'floor',       label:'탑 1층',     x:30, y:38, w:40,  h:18 },
    { style:'floor',       label:'탑 2층',     x:30, y:56, w:40,  h:14 },
    { style:'floor',       label:'탑 3층',     x:30, y:70, w:40,  h:12 },
    { style:'basement',    label:'지하 심연',  x:14, y:82, w:72,  h:18 },
  ],
  seps: [
    { x1:14, y1:14, x2:86, y2:14 },
    { x1:14, y1:38, x2:86, y2:38, style:'bold' },
    { x1:30, y1:56, x2:70, y2:56 },
    { x1:30, y1:70, x2:70, y2:70 },
    { x1:14, y1:82, x2:86, y2:82, style:'bold' },
  ],
};

const D1_R: readonly Room[] = [
  { id:'d1-deep',name:'심층 구역',        desc:'사방이 심층 구역 · 타락자 밀집',               cx:50, cy: 7, type:'danger' },
  { id:'d1-sq',  name:'탑 광장 D1-01',   desc:'바닥 패턴 변형 · 하나의 흔적 (닳은 자국)',     cx:50, cy:22, type:'normal' },
  { id:'d1-hana',name:'하나의 흔적',      desc:'검게 탄 바닥 (원형 3m) · 가끔 따뜻해짐',      cx:22, cy:29, type:'npc'    },
  { id:'d1-1f',  name:'탑 1층 상업구역', desc:'멈춘 시계들 · 오래 있으면 생각이 느려짐',      cx:50, cy:47, type:'danger' },
  { id:'d1-2f',  name:'탑 2층 전망대',   desc:'심연 목소리 가장 또렷 · 부정적 감정 증폭',     cx:50, cy:63, type:'danger' },
  { id:'d1-3f',  name:'탑 3층 특수구역', desc:'스핑크스 마지막 기록 · 특수 열쇠 필요',        cx:50, cy:76, type:'locked' },
  { id:'d1-sub', name:'지하 심연의 핵',   desc:'D1-03 · 최종 스토리 분기점 · 특수 조건 필수', cx:50, cy:89, type:'danger' },
  { id:'d1-nc2', name:'→ C2 심층 경계',  desc:'남쪽 — C2 심층 구역 경계 방향',               cx:50, cy:97, type:'exit',   connectsTo:'C2' },
];
const D1_E: readonly [string,string][] = [
  ['d1-deep','d1-sq'],['d1-sq','d1-hana'],['d1-sq','d1-1f'],['d1-sq','d1-nc2'],
  ['d1-1f','d1-2f'],['d1-2f','d1-3f'],['d1-3f','d1-sub'],
];

// ── TX 테스트 공간 ── 허브 중심 방사형 배치 ──────────────────────────────────
//
//          [gate]       ← A1 연결
//            |
//  [scene] [hub] [item]
//  [danger]  |   [cond]
//  [npc]         [save]
//
const TX_LAYOUT: LocationLayout = {
  regions: [
    { style:'outdoor', label:'[DEV] 진입구', x:30, y: 0, w:40, h: 8 },
    { style:'floor',   label:'허브 구역',    x:20, y:40, w:60, h:20 },
    { style:'floor',   label:'',             x: 0, y: 8, w:100, h:84 },
  ],
  seps: [
    { x1:0, y1: 8, x2:100, y2: 8 },
    { x1:0, y1:40, x2:100, y2:40, style:'dashed' },
    { x1:0, y1:60, x2:100, y2:60, style:'dashed' },
  ],
};

const TX_R: readonly Room[] = [
  { id:'tx-gate',   name:'[OUT] A1 연결구',    desc:'→ A1 폐허 아파트 지하 주차장',               cx:50, cy: 4, type:'exit',   connectsTo:'A1' },
  { id:'tx-hub',    name:'허브',                desc:'모든 테스트 방과 직접 연결된 중심 구역',       cx:50, cy:50, type:'normal' },
  { id:'tx-scene',  name:'씬 연결 테스트',      desc:'맵 이동 → 씬 자동 전환 기능 테스트',         cx:18, cy:22, type:'npc'    },
  { id:'tx-item',   name:'아이템 테스트',        desc:'아이템 획득·소지·사용·효과 기능 테스트',      cx:82, cy:22, type:'item'   },
  { id:'tx-danger', name:'위험 패널티 테스트',   desc:'danger 방 진입 패널티 기능 테스트',          cx: 8, cy:50, type:'danger' },
  { id:'tx-cond',   name:'조건부 선택지 테스트', desc:'아이템·스탯 조건부 선택지 잠금 기능 테스트',  cx:92, cy:50, type:'npc'    },
  { id:'tx-npc',    name:'NPC 대화 테스트',     desc:'NPC 조우 시스템·대화 트리 기능 테스트',       cx:18, cy:78, type:'npc'    },
  { id:'tx-save',   name:'저장/기록지 테스트',  desc:'저장·불러오기·기록지 패널 기능 테스트',       cx:82, cy:78, type:'normal' },
];

// 모든 테스트방이 허브에 직접 연결 (별(star) 위상)
const TX_E: readonly [string, string][] = [
  ['tx-gate',   'tx-hub'],
  ['tx-hub',    'tx-scene'],
  ['tx-hub',    'tx-item'],
  ['tx-hub',    'tx-danger'],
  ['tx-hub',    'tx-cond'],
  ['tx-hub',    'tx-npc'],
  ['tx-hub',    'tx-save'],
];

// ── LOCATIONS ─────────────────────────────────────────────────────────────────

export const LOCATIONS: readonly LocationInfo[] = [
  { id:'A1', name:'폐허 아파트',     zone:'생존 구역', dangerDisplay:'★★☆☆☆', npc:'이세아 (드물게)', rooms:A1_R, roomEdges:A1_E, layout:A1_LAYOUT },
  { id:'A2', name:'지하 3구역',      zone:'생존 구역', dangerDisplay:'★☆☆☆☆', npc:'오기범, 서하',    rooms:A2_R, roomEdges:A2_E, layout:A2_LAYOUT },
  { id:'B1', name:'망가진 골목',     zone:'회색 구역', dangerDisplay:'★★★☆☆', npc:'류민 (드물게)',   rooms:B1_R, roomEdges:B1_E, layout:B1_LAYOUT },
  { id:'B2', name:'폐편의점',        zone:'회색 구역', dangerDisplay:'★★★☆☆', npc:'—',               rooms:B2_R, roomEdges:B2_E, layout:B2_LAYOUT },
  { id:'B3', name:'지하철역 (폐역)', zone:'회색 구역', dangerDisplay:'★★★☆☆', npc:'이세아 (드물게)', rooms:B3_R, roomEdges:B3_E, layout:B3_LAYOUT },
  { id:'B4', name:'붕괴된 병원',     zone:'회색 구역', dangerDisplay:'★★★★☆', npc:'이주원 (흔적)',   rooms:B4_R, roomEdges:B4_E, layout:B4_LAYOUT },
  { id:'B5', name:'회색 거리',       zone:'회색 구역', dangerDisplay:'★★★★☆', npc:'이세아 (드물게)', rooms:B5_R, roomEdges:B5_E, layout:B5_LAYOUT },
  { id:'B6', name:'연세대 폐허',     zone:'회색 구역', dangerDisplay:'★★★☆☆', npc:'정도석',          rooms:B6_R, roomEdges:B6_E, layout:B6_LAYOUT },
  { id:'C1', name:'한강변',          zone:'경계 구역', dangerDisplay:'★★★★☆', npc:'이세아',          rooms:C1_R, roomEdges:C1_E, layout:C1_LAYOUT },
  { id:'C2', name:'심층 구역 경계',  zone:'경계 구역', dangerDisplay:'★★★★★', npc:'은별',            rooms:C2_R, roomEdges:C2_E, layout:C2_LAYOUT },
  { id:'D1', name:'부정의 탑 인근',  zone:'심층 구역', dangerDisplay:'★★★★★+',npc:'하나, 심연',      rooms:D1_R, roomEdges:D1_E, layout:D1_LAYOUT },
  { id:'TX', name:'테스트 공간',    zone:'생존 구역', dangerDisplay:'☆☆☆☆☆', npc:'[DEV]',           rooms:TX_R, roomEdges:TX_E, layout:TX_LAYOUT },
];
