import type { Scene } from '../../types/index.ts';
import { apartmentStart } from './apartment-start.ts';
import {
  corridorPeek, apartmentDiscovered,
  a1Corridor4f, a1Roof, a1RoofOpen,
  a1Corridor3f, a1Room301, a1Room304,
  a1Corridor2f, a1Room203,
  a1Lobby, a1Mgmt,
  a1B1f, a1Elec, a1Stor,
} from './a1-scenes.ts';
import { txHub, txSceneLink, txItem, txDanger, txCond, txNpc, txSave } from './tx-scenes.ts';

export const scenes: Record<string, Scene> = {
  // ── 아파트 시작 ──
  [apartmentStart.id]:     apartmentStart,

  // ── A1 전환 씬 (방 매핑 없음) ──
  [corridorPeek.id]:       corridorPeek,
  [apartmentDiscovered.id]:apartmentDiscovered,

  // ── A1 방 씬 ──
  [a1Corridor4f.id]:       a1Corridor4f,
  [a1Roof.id]:             a1Roof,
  [a1RoofOpen.id]:         a1RoofOpen,
  [a1Corridor3f.id]:       a1Corridor3f,
  [a1Room301.id]:          a1Room301,
  [a1Room304.id]:          a1Room304,
  [a1Corridor2f.id]:       a1Corridor2f,
  [a1Room203.id]:          a1Room203,
  [a1Lobby.id]:            a1Lobby,
  [a1Mgmt.id]:             a1Mgmt,
  [a1B1f.id]:              a1B1f,
  [a1Elec.id]:             a1Elec,
  [a1Stor.id]:             a1Stor,

  // ── TX 개발 테스트 ──
  [txHub.id]:              txHub,
  [txSceneLink.id]:        txSceneLink,
  [txItem.id]:             txItem,
  [txDanger.id]:           txDanger,
  [txCond.id]:             txCond,
  [txNpc.id]:              txNpc,
  [txSave.id]:             txSave,
};
