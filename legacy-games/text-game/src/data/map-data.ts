export type RoomType = 'normal' | 'npc' | 'item' | 'danger' | 'locked' | 'exit';

export interface Room {
  readonly id: string;
  readonly name: string;
  readonly desc: string;
  readonly cx: number;
  readonly cy: number;
  readonly type: RoomType;
}

export interface LocationInfo {
  readonly id: string;
  readonly name: string;
  readonly zone: '생존 구역' | '회색 구역' | '경계 구역' | '심층 구역';
  readonly dangerDisplay: string;
  readonly npc: string;
  readonly rooms: readonly Room[];
  readonly roomEdges: readonly [string, string][];
}

// ── A1 폐허 아파트 ────────────────────────────────────────────────────────────
const A1_R: readonly Room[] = [
  { id:'a1-roof',  name:'옥상',        desc:'탁 트인 전망 · 이세아 조우 가능 (잠김)',  cx:50, cy:4,  type:'npc'    },
  { id:'a1-4f',    name:'4층 복도',    desc:'일부 붕괴 — 우회 경로 필요',             cx:50, cy:15, type:'danger' },
  { id:'a1-401',   name:'401호',       desc:'접근 가능 · 내부 빈 공간',               cx:22, cy:15, type:'normal' },
  { id:'a1-406',   name:'406호',       desc:'접근 가능 · 내부 빈 공간',               cx:78, cy:15, type:'normal' },
  { id:'a1-3f',    name:'3층 복도',    desc:'창문 빛 유일 · 302호·304호 연결',        cx:50, cy:28, type:'normal' },
  { id:'a1-302',   name:'302호 ★',    desc:'주인공 방 · 진통제·라이터·노트 보관',    cx:20, cy:28, type:'item'   },
  { id:'a1-301',   name:'301호',       desc:'이웃 주민 흔적 · 내부 접근 가능',        cx:65, cy:28, type:'normal' },
  { id:'a1-304',   name:'304호',       desc:'닫힌 문 너머에서 소리가 남',             cx:84, cy:28, type:'danger' },
  { id:'a1-2f',    name:'2층 복도',    desc:'대부분 잠김 · 203호만 열려 있음',        cx:50, cy:42, type:'normal' },
  { id:'a1-203',   name:'203호 ※',    desc:'열린 문 · 벽에 생존 기록 메모',          cx:20, cy:42, type:'item'   },
  { id:'a1-1f',    name:'1층 로비',    desc:'우편함·엘리베이터(고장)·계단실',         cx:50, cy:56, type:'normal' },
  { id:'a1-mgmt',  name:'관리실',      desc:'마스터키 · 건물 도면 보관',              cx:20, cy:56, type:'item'   },
  { id:'a1-exit',  name:'출입구',      desc:'→ B1 망가진 골목',                      cx:80, cy:56, type:'exit'   },
  { id:'a1-b1f',   name:'지하 주차장', desc:'전기실·창고 · 깊은 쪽에서 이상한 소리', cx:50, cy:72, type:'danger' },
  { id:'a1-elec',  name:'전기실',      desc:'배전반 · 건물 전원 제어 가능',           cx:25, cy:72, type:'item'   },
  { id:'a1-stor',  name:'창고',        desc:'물자 보관 · 일부 잔류',                  cx:75, cy:72, type:'item'   },
];
const A1_E: readonly [string,string][] = [
  ['a1-roof','a1-4f'],
  ['a1-4f','a1-401'],['a1-4f','a1-406'],['a1-4f','a1-3f'],
  ['a1-3f','a1-302'],['a1-3f','a1-301'],['a1-3f','a1-304'],['a1-3f','a1-2f'],
  ['a1-2f','a1-203'],['a1-2f','a1-1f'],
  ['a1-1f','a1-mgmt'],['a1-1f','a1-exit'],['a1-1f','a1-b1f'],
  ['a1-b1f','a1-elec'],['a1-b1f','a1-stor'],
];

// ── A2 지하 3구역 ──────────────────────────────────────────────────────────────
const A2_R: readonly Room[] = [
  { id:'a2-tun',   name:'B3 터널',       desc:'→ B3 지하철역 (허가 필요)',               cx:5,  cy:18, type:'exit'   },
  { id:'a2-gate',  name:'검문소 A2-01',  desc:'철문·창구 · 오기범 허가 필요',            cx:22, cy:18, type:'locked' },
  { id:'a2-hall',  name:'입구 복도',     desc:'벽에 생존자 이름·그림 빼곡히',            cx:42, cy:18, type:'normal' },
  { id:'a2-main',  name:'메인 홀',       desc:'배급카운터·공지게시판 · 오후 비공식 시장', cx:62, cy:18, type:'npc'    },
  { id:'a2-resA',  name:'거주구역 A',    desc:'가족 세대 ~30세대 · 서하 거주',           cx:50, cy:38, type:'npc'    },
  { id:'a2-resB',  name:'거주구역 B',    desc:'단독 침대 ~70개 · 정보 거래',             cx:72, cy:38, type:'normal' },
  { id:'a2-med',   name:'의료실',        desc:'진료대 3개·약품장 · 한재이 역할',         cx:85, cy:28, type:'npc'    },
  { id:'a2-sup',   name:'배급 창고',     desc:'자물쇠 3중 잠금 · 오기범 관리',           cx:85, cy:45, type:'locked' },
  { id:'a2-off',   name:'오기범 집무실', desc:'지도·무전기·서랍 · 신호장비 문서(숨김)',  cx:85, cy:62, type:'npc'    },
  { id:'a2-gen',   name:'발전기실',      desc:'대형 발전기 2기 · 철판 뒤 숨겨진 통로',  cx:85, cy:78, type:'item'   },
  { id:'a2-seal',  name:'봉인 사무실',   desc:'자물쇠 2중 봉인 · 신호장비 보관 (핵심)', cx:85, cy:93, type:'locked' },
];
const A2_E: readonly [string,string][] = [
  ['a2-tun','a2-gate'],['a2-gate','a2-hall'],['a2-hall','a2-main'],
  ['a2-main','a2-resA'],['a2-main','a2-resB'],['a2-main','a2-med'],
  ['a2-med','a2-sup'],['a2-sup','a2-off'],['a2-off','a2-gen'],['a2-gen','a2-seal'],
];

// ── B1 망가진 골목 ────────────────────────────────────────────────────────────
const B1_R: readonly Room[] = [
  { id:'b1-nb5',  name:'→ B5 회색거리', desc:'북쪽 — B5 회색 거리 방향',               cx:50, cy:5,  type:'exit'   },
  { id:'b1-n',    name:'북쪽 도로',     desc:'B1-03 · 개방 구역 · 은신처 없음',         cx:50, cy:20, type:'normal' },
  { id:'b1-rub',  name:'잔해 더미',     desc:'B1-05 · 숨겨진 지하통로 입구',            cx:22, cy:38, type:'item'   },
  { id:'b1-crs',  name:'중앙 교차점',   desc:'B1-02 · 경고판 뒷면 메모 — 지하통로 위치',cx:52, cy:38, type:'item'   },
  { id:'b1-e',    name:'동쪽 골목',     desc:'B1-04 · 야간 타락자 2인조 출몰',          cx:80, cy:38, type:'danger' },
  { id:'b1-alley',name:'뒷골목',        desc:'B1-06 · 류민 조우 · 폭 1m · 탈출 불가', cx:22, cy:60, type:'npc'    },
  { id:'b1-na1',  name:'→ A1 아파트',  desc:'서쪽 — A1 폐허 아파트 방향',             cx:5,  cy:52, type:'exit'   },
  { id:'b1-nb3',  name:'→ B3 지하철',  desc:'지하 — B3 지하철역 (숨겨진 경로)',        cx:22, cy:80, type:'exit'   },
  { id:'b1-nb2',  name:'→ B2 편의점',  desc:'동쪽 — B2 폐편의점 방향',                cx:80, cy:60, type:'exit'   },
];
const B1_E: readonly [string,string][] = [
  ['b1-nb5','b1-n'],
  ['b1-n','b1-rub'],['b1-n','b1-crs'],['b1-n','b1-e'],
  ['b1-rub','b1-alley'],
  ['b1-crs','b1-na1'],
  ['b1-alley','b1-nb3'],
  ['b1-e','b1-nb2'],
];

// ── B2 폐편의점 ──────────────────────────────────────────────────────────────
const B2_R: readonly Room[] = [
  { id:'b2-nb1',  name:'→ B1 골목',  desc:'북쪽 — B1 망가진 골목 방향',      cx:50, cy:5,  type:'exit'   },
  { id:'b2-ent',  name:'입구',       desc:'자동문 반파 · 야간 타락자 출몰 가능',cx:50, cy:22, type:'normal' },
  { id:'b2-shf',  name:'진열대',     desc:'대부분 비어있음 · 일부 물자 잔류',  cx:28, cy:42, type:'item'   },
  { id:'b2-ctr',  name:'계산대',     desc:'빈 카운터 · 정보 단서 가능',        cx:65, cy:42, type:'normal' },
  { id:'b2-stf',  name:'직원 공간',  desc:'뒷문으로 연결',                    cx:65, cy:60, type:'normal' },
  { id:'b2-stor', name:'창고',       desc:'추가 물자 · 잠긴 캐비닛',           cx:28, cy:60, type:'item'   },
  { id:'b2-back', name:'뒷문',       desc:'골목 방향 탈출로',                 cx:50, cy:78, type:'exit'   },
  { id:'b2-nb3',  name:'→ B3 지하철',desc:'남쪽 — B3 지하철역 방향',          cx:50, cy:93, type:'exit'   },
];
const B2_E: readonly [string,string][] = [
  ['b2-nb1','b2-ent'],
  ['b2-ent','b2-shf'],['b2-ent','b2-ctr'],
  ['b2-ctr','b2-stf'],['b2-shf','b2-stor'],
  ['b2-stf','b2-back'],['b2-stor','b2-back'],
  ['b2-back','b2-nb3'],
];

// ── B3 지하철역 ───────────────────────────────────────────────────────────────
const B3_R: readonly Room[] = [
  { id:'b3-gin',  name:'지상 남쪽 입구',   desc:'지상 접근 가능 유일 입구',                    cx:38, cy:5,  type:'exit'   },
  { id:'b3-hall', name:'대합실 B3-02',     desc:'바닥 "3구역 →" 메모 · 자판기 1대 열려있음',  cx:50, cy:22, type:'item'   },
  { id:'b3-esc',  name:'에스컬레이터',     desc:'B3-03 · 정지 · 도보 가능 · 메모 끼워짐',    cx:50, cy:40, type:'normal' },
  { id:'b3-plA',  name:'플랫폼 A',         desc:'B3-04 · A2 터널 램프 신호 · 측면 유지보수문', cx:28, cy:58, type:'normal' },
  { id:'b3-stg',  name:'자재 창고',        desc:'B3-07 · 철근·공구·안전모',                   cx:8,  cy:58, type:'item'   },
  { id:'b3-tun',  name:'유지보수 터널',    desc:'B3-06 · 벽면 좌표 메모 · 비상 외부출구(잠김)', cx:8, cy:78, type:'item'   },
  { id:'b3-plB',  name:'플랫폼 B ⚠',      desc:'B3-05 · 조명 전무 · 부정 농도 ★★★★ · 봉인 너머 소리', cx:72, cy:58, type:'danger' },
  { id:'b3-a2t',  name:'→ A2 지하 3구역', desc:'지하 터널 · 허가 필요',                       cx:28, cy:88, type:'exit'   },
];
const B3_E: readonly [string,string][] = [
  ['b3-gin','b3-hall'],
  ['b3-hall','b3-esc'],
  ['b3-esc','b3-plA'],['b3-esc','b3-plB'],
  ['b3-plA','b3-stg'],['b3-plA','b3-tun'],['b3-plA','b3-a2t'],
];

// ── B4 붕괴된 병원 ────────────────────────────────────────────────────────────
const B4_R: readonly Room[] = [
  { id:'b4-roof', name:'옥상 헬리패드', desc:'헬기 없음 · 심층 구역 경계 원거리 조망',     cx:50, cy:4,  type:'normal' },
  { id:'b4-4f',   name:'4층 소아과 ⚠', desc:'진입 강력 비권장 · 어린아이 소리처럼 들림', cx:50, cy:15, type:'danger' },
  { id:'b4-3f',   name:'3층 수술실 복도',desc:'타락자 배회 드묾 (이유 불명)',             cx:50, cy:28, type:'normal' },
  { id:'b4-303',  name:'수술실 303 ★',  desc:'이주원 청진기·메모 · 핵심 스토리 아이템',  cx:80, cy:28, type:'item'   },
  { id:'b4-2f',   name:'2층 내과',      desc:'타락자 다수 배회 · 진입 비권장',            cx:50, cy:42, type:'danger' },
  { id:'b4-er',   name:'1층 응급실',    desc:'마지막 업무 일지 (5시47분) · 자동문 반열림', cx:50, cy:57, type:'item'   },
  { id:'b4-tr',   name:'처치실',        desc:'B4-02 · 생리식염수·붕대 잔류 · 커튼 뒤 ?', cx:22, cy:57, type:'item'   },
  { id:'b4-cor',  name:'복도 ⚠',        desc:'B4-03 · 타락자 2개체 · 손톱 자국',         cx:50, cy:71, type:'danger' },
  { id:'b4-med',  name:'약품보관실',    desc:'B4-04 · 잠금 해제 필요 · 항생제·소독약',   cx:80, cy:71, type:'locked' },
  { id:'b4-fac',  name:'지하 시설실',   desc:'배전반 · 1층 전자잠금 해제 가능',           cx:28, cy:85, type:'item'   },
  { id:'b4-mor',  name:'지하 영안실 ☠', desc:'부정 농도 극도 · 진입 절대 금지',           cx:72, cy:85, type:'danger' },
];
const B4_E: readonly [string,string][] = [
  ['b4-roof','b4-4f'],['b4-4f','b4-3f'],
  ['b4-3f','b4-303'],['b4-3f','b4-2f'],
  ['b4-2f','b4-er'],
  ['b4-er','b4-tr'],['b4-er','b4-cor'],['b4-er','b4-fac'],
  ['b4-cor','b4-med'],
  ['b4-fac','b4-mor'],
];

// ── B5 회색 거리 ──────────────────────────────────────────────────────────────
const B5_R: readonly Room[] = [
  { id:'b5-nc1',  name:'→ C1 한강변',  desc:'북쪽 — C1 한강변 방향',                cx:50, cy:5,  type:'exit'   },
  { id:'b5-crs',  name:'교차로',        desc:'완전 노출 구역 · 야간 타락자 다수',     cx:50, cy:25, type:'danger' },
  { id:'b5-nb6',  name:'→ B6 연세대',  desc:'서쪽 — B6 연세대 폐허 방향',           cx:10, cy:25, type:'exit'   },
  { id:'b5-nb4',  name:'→ B4 병원',    desc:'동쪽 — B4 붕괴된 병원 방향',           cx:90, cy:25, type:'exit'   },
  { id:'b5-shpA', name:'상가 잔해 A',   desc:'서쪽 상가 · 은신 가능',                cx:22, cy:48, type:'normal' },
  { id:'b5-shpB', name:'상가 잔해 B',   desc:'중앙 상가 · 폐건물 통로',              cx:50, cy:48, type:'normal' },
  { id:'b5-shpC', name:'상가 잔해 C',   desc:'동쪽 상가 · 붕괴 심함',               cx:78, cy:48, type:'normal' },
  { id:'b5-bld',  name:'폐건물',        desc:'내부 은신 가능 · 2층 원거리 조망',     cx:50, cy:68, type:'normal' },
  { id:'b5-nb1',  name:'→ B1 골목',    desc:'남쪽 — B1 망가진 골목 방향',           cx:50, cy:88, type:'exit'   },
];
const B5_E: readonly [string,string][] = [
  ['b5-nc1','b5-crs'],['b5-crs','b5-nb6'],['b5-crs','b5-nb4'],
  ['b5-crs','b5-shpA'],['b5-crs','b5-shpB'],['b5-crs','b5-shpC'],
  ['b5-shpB','b5-bld'],['b5-bld','b5-nb1'],
];

// ── B6 연세대 폐허 ────────────────────────────────────────────────────────────
const B6_R: readonly Room[] = [
  { id:'b6-ng',   name:'북문',          desc:'→ C1 한강변',                          cx:50, cy:5,  type:'exit'   },
  { id:'b6-eng',  name:'공학관 B6-05',  desc:'이공계 건물 · 지하 계단 진입점',        cx:25, cy:22, type:'item'   },
  { id:'b6-med',  name:'의과대학관',    desc:'잠김 · 접근 불가',                      cx:75, cy:22, type:'locked' },
  { id:'b6-lab',  name:'지하 연구실 ★', desc:'B6-06 · 정도석 거주 · 차폐 구조 · 스핑크스 문서', cx:25, cy:42, type:'npc' },
  { id:'b6-soc',  name:'사회과학관',    desc:'비어있음',                              cx:18, cy:60, type:'normal' },
  { id:'b6-lib',  name:'도서관 B6-04',  desc:'지하 서고 보존 良 · 의학교재·논문 사본', cx:50, cy:60, type:'item'   },
  { id:'b6-sq',   name:'중앙 광장',     desc:'B6-02 · 조각상·게시판',                cx:80, cy:60, type:'normal' },
  { id:'b6-main', name:'본관 B6-03',    desc:'1F행정실 2F강의실 3F연구실',            cx:50, cy:78, type:'normal' },
  { id:'b6-gate', name:'정문 B6-01',    desc:'→ B5 회색 거리',                       cx:50, cy:93, type:'exit'   },
];
const B6_E: readonly [string,string][] = [
  ['b6-ng','b6-eng'],['b6-ng','b6-med'],['b6-ng','b6-sq'],
  ['b6-eng','b6-lab'],['b6-eng','b6-soc'],
  ['b6-soc','b6-lib'],['b6-lib','b6-sq'],
  ['b6-lib','b6-main'],['b6-sq','b6-main'],
  ['b6-main','b6-gate'],
];

// ── C1 한강변 ─────────────────────────────────────────────────────────────────
const C1_R: readonly Room[] = [
  { id:'c1-nc2',  name:'→ C2 심층 경계', desc:'북쪽 — C2 심층 구역 경계 방향',                 cx:50, cy:4,  type:'exit'   },
  { id:'c1-obs',  name:'관측 지점 C1-06',desc:'이세아 조우 가능 · 고가도로 위 8m · 은별 방향 조망', cx:50, cy:16, type:'npc'  },
  { id:'c1-rd',   name:'강변북로 C1-01', desc:'4차선 도로 · 방호벽 따라 부분 은신',             cx:50, cy:30, type:'normal' },
  { id:'c1-walk', name:'강변산책로 C1-02',desc:'검게 변한 강물 바로 인접 · 접촉 절대 금지',      cx:22, cy:47, type:'danger' },
  { id:'c1-dep',  name:'강변 창고 C1-05',desc:'구명조끼·방수장비·조명탄·밧줄 · 이세아 흔적',   cx:78, cy:47, type:'item'   },
  { id:'c1-riv',  name:'한강 (검은 강)',  desc:'수면 접촉 즉시 오염 · 강 건너편에 무언가 보임',  cx:50, cy:63, type:'danger' },
  { id:'c1-br1',  name:'한강대교 C1-03', desc:'30% 구간 통과 가능 · 접근할수록 부정 농도 상승', cx:22, cy:80, type:'normal' },
  { id:'c1-br2',  name:'잠수교 C1-04',   desc:'수면 근접형 · 50% 이후 생존 불가 · 진입 금지',  cx:78, cy:80, type:'locked' },
  { id:'c1-nb5',  name:'→ B5 회색거리',  desc:'남쪽 — B5 회색 거리 방향',                      cx:28, cy:93, type:'exit'   },
  { id:'c1-nb6',  name:'→ B6 연세대',    desc:'남서쪽 — B6 연세대 폐허 방향',                  cx:72, cy:93, type:'exit'   },
];
const C1_E: readonly [string,string][] = [
  ['c1-nc2','c1-obs'],['c1-obs','c1-rd'],
  ['c1-rd','c1-walk'],['c1-rd','c1-dep'],
  ['c1-walk','c1-riv'],['c1-riv','c1-br1'],['c1-riv','c1-br2'],
  ['c1-walk','c1-nb5'],['c1-dep','c1-nb6'],
];

// ── C2 심층 구역 경계 ─────────────────────────────────────────────────────────
const C2_R: readonly Room[] = [
  { id:'c2-nd1',  name:'→ D1 부정의 탑', desc:'북쪽 심층 — 마법소녀 동반 필수',              cx:50, cy:5,  type:'exit'   },
  { id:'c2-line', name:'경계선 ☠',       desc:'붉은 천 표식 · 이 선 넘으면 타락 가속 즉시',   cx:50, cy:22, type:'danger' },
  { id:'c2-vent', name:'분출구 C2-03 ☠', desc:'절대 접근 금지 · 반경 10m 즉각 타락 · 주기 짧아짐', cx:80, cy:38, type:'danger' },
  { id:'c2-obs',  name:'경계선 관측 C2-01',desc:'어제보다 5m 더 남쪽에 있음 (경계가 밀리는 중)', cx:50, cy:38, type:'item'   },
  { id:'c2-base', name:'은별 거점 C2-02', desc:'폐건물 1층 · 침구·성냥·식량 · 날짜별 후퇴 기록', cx:25, cy:58, type:'npc'  },
  { id:'c2-nc1',  name:'→ C1 한강변',    desc:'남쪽 — C1 한강변 방향',                       cx:50, cy:88, type:'exit'   },
];
const C2_E: readonly [string,string][] = [
  ['c2-nd1','c2-line'],
  ['c2-line','c2-vent'],['c2-line','c2-obs'],
  ['c2-obs','c2-base'],
  ['c2-base','c2-nc1'],
];

// ── D1 부정의 탑 인근 ─────────────────────────────────────────────────────────
const D1_R: readonly Room[] = [
  { id:'d1-deep',name:'심층 구역',        desc:'사방이 심층 구역 · 타락자 밀집',               cx:50, cy:4,  type:'danger' },
  { id:'d1-sq',  name:'탑 광장 D1-01',   desc:'바닥 패턴 변형 · 하나의 흔적 (닳은 자국)',     cx:50, cy:18, type:'normal' },
  { id:'d1-hana',name:'하나의 흔적',      desc:'검게 탄 바닥 (원형 3m) · 가끔 따뜻해짐',      cx:22, cy:30, type:'npc'    },
  { id:'d1-1f',  name:'탑 1층 상업구역', desc:'멈춘 시계들 · 오래 있으면 생각이 느려짐',      cx:50, cy:40, type:'danger' },
  { id:'d1-2f',  name:'탑 2층 전망대',   desc:'심연 목소리 가장 또렷 · 부정적 감정 증폭',     cx:50, cy:56, type:'danger' },
  { id:'d1-3f',  name:'탑 3층 특수구역', desc:'스핑크스 마지막 기록 · 특수 열쇠 필요',        cx:50, cy:70, type:'locked' },
  { id:'d1-sub', name:'지하 심연의 핵',   desc:'D1-03 · 최종 스토리 분기점 · 특수 조건 필수', cx:50, cy:86, type:'danger' },
  { id:'d1-nc2', name:'→ C2 심층 경계',  desc:'남쪽 — C2 심층 구역 경계 방향',               cx:50, cy:96, type:'exit'   },
];
const D1_E: readonly [string,string][] = [
  ['d1-deep','d1-sq'],['d1-sq','d1-hana'],['d1-sq','d1-1f'],['d1-sq','d1-nc2'],
  ['d1-1f','d1-2f'],['d1-2f','d1-3f'],['d1-3f','d1-sub'],
];

// ── LOCATIONS ─────────────────────────────────────────────────────────────────

export const LOCATIONS: readonly LocationInfo[] = [
  { id:'A1', name:'폐허 아파트',     zone:'생존 구역', dangerDisplay:'★★☆☆☆', npc:'이세아 (드물게)', rooms:A1_R, roomEdges:A1_E },
  { id:'A2', name:'지하 3구역',      zone:'생존 구역', dangerDisplay:'★☆☆☆☆', npc:'오기범, 서하',    rooms:A2_R, roomEdges:A2_E },
  { id:'B1', name:'망가진 골목',     zone:'회색 구역', dangerDisplay:'★★★☆☆', npc:'류민 (드물게)',   rooms:B1_R, roomEdges:B1_E },
  { id:'B2', name:'폐편의점',        zone:'회색 구역', dangerDisplay:'★★★☆☆', npc:'—',               rooms:B2_R, roomEdges:B2_E },
  { id:'B3', name:'지하철역 (폐역)', zone:'회색 구역', dangerDisplay:'★★★☆☆', npc:'이세아 (드물게)', rooms:B3_R, roomEdges:B3_E },
  { id:'B4', name:'붕괴된 병원',     zone:'회색 구역', dangerDisplay:'★★★★☆', npc:'이주원 (흔적)',   rooms:B4_R, roomEdges:B4_E },
  { id:'B5', name:'회색 거리',       zone:'회색 구역', dangerDisplay:'★★★★☆', npc:'이세아 (드물게)', rooms:B5_R, roomEdges:B5_E },
  { id:'B6', name:'연세대 폐허',     zone:'회색 구역', dangerDisplay:'★★★☆☆', npc:'정도석',          rooms:B6_R, roomEdges:B6_E },
  { id:'C1', name:'한강변',          zone:'경계 구역', dangerDisplay:'★★★★☆', npc:'이세아',          rooms:C1_R, roomEdges:C1_E },
  { id:'C2', name:'심층 구역 경계',  zone:'경계 구역', dangerDisplay:'★★★★★', npc:'은별',            rooms:C2_R, roomEdges:C2_E },
  { id:'D1', name:'부정의 탑 인근',  zone:'심층 구역', dangerDisplay:'★★★★★+',npc:'하나, 심연',      rooms:D1_R, roomEdges:D1_E },
];
