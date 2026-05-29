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
