// 방 ID → 씬 ID 매핑
// 씬이 없는 방은 등록하지 않는다 (이동 시 씬 유지)
export const ROOM_SCENES: Readonly<Record<string, string>> = {

  // ── A1 폐허 아파트 ─────────────────────────────────────────────
  'a1-302':  'apartment_start',
  'a1-4f':   'a1_corridor_4f',
  'a1-roof': 'a1_roof',
  'a1-3f':   'a1_corridor_3f',
  'a1-301':  'a1_room_301',
  'a1-304':  'a1_room_304',
  'a1-2f':   'a1_corridor_2f',
  'a1-203':  'a1_room_203',
  'a1-1f':   'a1_lobby',
  'a1-mgmt': 'a1_mgmt',
  'a1-b1f':  'a1_b1f',
  'a1-elec': 'a1_elec',
  'a1-stor': 'a1_stor',

  // ── B1 망가진 골목 ─────────────────────────────────────────────
  'b1-n':     'b1_north_road',
  'b1-rub':   'b1_rubble',
  'b1-crs':   'b1_crossroads',
  'b1-alley': 'b1_alley_ryumin',
  'b1-e':     'b1_east_alley',

  // ── B2 폐편의점 ────────────────────────────────────────────────
  'b2-ent':  'b2_entrance',
  'b2-shf':  'b2_shelf',
  'b2-stor': 'b2_storage',

  // ── B5 회색 거리 ───────────────────────────────────────────────
  'b5-crs':  'b5_crossroads',
  'b5-bld':  'b5_building',
  'b5-shpB': 'b5_shop_b',

  // ── B3 지하철역 ────────────────────────────────────────────────
  'b3-hall': 'b3_hall',
  'b3-esc':  'b3_escalator',
  'b3-plA':  'b3_platform_a',
  'b3-plB':  'b3_platform_b',
  'b3-tun':  'b3_tunnel',

  // ── A2 지하 3구역 ──────────────────────────────────────────────
  'a2-tun':  'a2_tunnel',
  'a2-gate': 'a2_checkpoint',
  'a2-hall': 'a2_corridor',
  'a2-main': 'a2_main',
  'a2-off':  'a2_office',

  // ── TX 테스트 공간 ─────────────────────────────────────────────
  'tx-hub':    'tx_hub',
  'tx-scene':  'tx_scene_link',
  'tx-item':   'tx_item',
  'tx-danger': 'tx_danger',
  'tx-cond':   'tx_cond',
  'tx-npc':    'tx_npc',
  'tx-save':   'tx_save',
};

// 역매핑: 씬 ID → 방 ID (씬 전환 시 위치바 자동 이동)
export const SCENE_ROOMS: Readonly<Record<string, string>> =
  Object.fromEntries(Object.entries(ROOM_SCENES).map(([room, scene]) => [scene, room]));
