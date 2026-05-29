// 방 ID → 씬 ID 매핑
// 씬이 없는 방은 등록하지 않는다 (이동 시 씬 유지)
export const ROOM_SCENES: Readonly<Record<string, string>> = {

  // ── A1 폐허 아파트 ─────────────────────────────────────────────
  'a1-302': 'apartment_start',

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
