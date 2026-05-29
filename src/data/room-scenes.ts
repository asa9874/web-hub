// 방 ID → 씬 ID 매핑
// 씬이 없는 방은 등록하지 않는다 (이동 시 씬 유지)
export const ROOM_SCENES: Readonly<Record<string, string>> = {

  // ── A1 폐허 아파트 ─────────────────────────────────────────────
  'a1-302':  'apartment_start',   // 302호 — 시작
  'a1-4f':   'a1_corridor_4f',    // 4층 복도 (danger)
  'a1-roof': 'a1_roof',           // 옥상 — 이세아 조우
  'a1-3f':   'a1_corridor_3f',    // 3층 복도
  'a1-301':  'a1_room_301',       // 301호
  'a1-304':  'a1_room_304',       // 304호 (danger)
  'a1-2f':   'a1_corridor_2f',    // 2층 복도
  'a1-203':  'a1_room_203',       // 203호 — 생존 기록 메모
  'a1-1f':   'a1_lobby',          // 1층 로비
  'a1-mgmt': 'a1_mgmt',           // 관리실 — 마스터키
  'a1-b1f':  'a1_b1f',            // 지하 주차장 (danger)
  'a1-elec': 'a1_elec',           // 전기실
  'a1-stor': 'a1_stor',           // 창고

  // ── TX 테스트 공간 ─────────────────────────────────────────────
  'tx-hub':    'tx_hub',
  'tx-scene':  'tx_scene_link',
  'tx-item':   'tx_item',
  'tx-danger': 'tx_danger',
  'tx-cond':   'tx_cond',
  'tx-npc':    'tx_npc',
  'tx-save':   'tx_save',
};

// 역매핑: 씬 ID → 방 ID (씬 전환 시 위치바 자동 이동에 사용)
export const SCENE_ROOMS: Readonly<Record<string, string>> =
  Object.fromEntries(Object.entries(ROOM_SCENES).map(([room, scene]) => [scene, room]));
