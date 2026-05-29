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
import {
  b1NorthRoad, b1Rubble, b1Crossroads, b1AlleyRyumin, b1EastAlley,
  b2Entrance, b2Shelf, b2Storage,
  b5Crossroads, b5Building, b5ShopB,
} from './b1b2b5-scenes.ts';
import {
  b3Hall, b3Escalator, b3PlatformA, b3PlatformB, b3Tunnel,
  a2Tunnel, a2Checkpoint, a2Corridor, a2Main, a2Office,
} from './b3a2-scenes.ts';
import {
  b4Entrance, b4Emergency, b4Treatment,
  b4Corridor3f, b4Surgery303,
  b4Floor4f, b4DangerousHall, b4Facility,
} from './b4-scenes.ts';
import {
  b6Main, b6Library, b6Square, b6Engineering, b6LabDoseok,
  c1Road, c1Observation, c1Riverside, c1Depot,
} from './b6c1-scenes.ts';
import {
  a2Generator, a2SealedOffice, a2SealedOpen,
} from './a2-deep-scenes.ts';
import { txHub, txSceneLink, txItem, txDanger, txCond, txNpc, txSave } from './tx-scenes.ts';

export const scenes: Record<string, Scene> = {
  // ── 아파트 시작 ──
  [apartmentStart.id]:      apartmentStart,

  // ── A1 전환 씬 ──
  [corridorPeek.id]:        corridorPeek,
  [apartmentDiscovered.id]: apartmentDiscovered,

  // ── A1 방 씬 ──
  [a1Corridor4f.id]:        a1Corridor4f,
  [a1Roof.id]:              a1Roof,
  [a1RoofOpen.id]:          a1RoofOpen,
  [a1Corridor3f.id]:        a1Corridor3f,
  [a1Room301.id]:           a1Room301,
  [a1Room304.id]:           a1Room304,
  [a1Corridor2f.id]:        a1Corridor2f,
  [a1Room203.id]:           a1Room203,
  [a1Lobby.id]:             a1Lobby,
  [a1Mgmt.id]:              a1Mgmt,
  [a1B1f.id]:               a1B1f,
  [a1Elec.id]:              a1Elec,
  [a1Stor.id]:              a1Stor,

  // ── B1 망가진 골목 ──
  [b1NorthRoad.id]:         b1NorthRoad,
  [b1Rubble.id]:            b1Rubble,
  [b1Crossroads.id]:        b1Crossroads,
  [b1AlleyRyumin.id]:       b1AlleyRyumin,
  [b1EastAlley.id]:         b1EastAlley,

  // ── B2 폐편의점 ──
  [b2Entrance.id]:          b2Entrance,
  [b2Shelf.id]:             b2Shelf,
  [b2Storage.id]:           b2Storage,

  // ── B5 회색 거리 ──
  [b5Crossroads.id]:        b5Crossroads,
  [b5Building.id]:          b5Building,
  [b5ShopB.id]:             b5ShopB,

  // ── B3 지하철역 ──
  [b3Hall.id]:              b3Hall,
  [b3Escalator.id]:         b3Escalator,
  [b3PlatformA.id]:         b3PlatformA,
  [b3PlatformB.id]:         b3PlatformB,
  [b3Tunnel.id]:            b3Tunnel,

  // ── A2 지하 3구역 ──
  [a2Tunnel.id]:            a2Tunnel,
  [a2Checkpoint.id]:        a2Checkpoint,
  [a2Corridor.id]:          a2Corridor,
  [a2Main.id]:              a2Main,
  [a2Office.id]:            a2Office,
  [a2Generator.id]:         a2Generator,
  [a2SealedOffice.id]:      a2SealedOffice,
  [a2SealedOpen.id]:        a2SealedOpen,

  // ── B4 붕괴된 병원 ──
  [b4Entrance.id]:          b4Entrance,
  [b4Emergency.id]:         b4Emergency,
  [b4Treatment.id]:         b4Treatment,
  [b4Corridor3f.id]:        b4Corridor3f,
  [b4Surgery303.id]:        b4Surgery303,
  [b4Floor4f.id]:           b4Floor4f,
  [b4DangerousHall.id]:     b4DangerousHall,
  [b4Facility.id]:          b4Facility,

  // ── B6 연세대 폐허 ──
  [b6Main.id]:              b6Main,
  [b6Library.id]:           b6Library,
  [b6Square.id]:            b6Square,
  [b6Engineering.id]:       b6Engineering,
  [b6LabDoseok.id]:         b6LabDoseok,

  // ── C1 한강변 ──
  [c1Road.id]:              c1Road,
  [c1Observation.id]:       c1Observation,
  [c1Riverside.id]:         c1Riverside,
  [c1Depot.id]:             c1Depot,

  // ── TX 개발 테스트 ──
  [txHub.id]:               txHub,
  [txSceneLink.id]:         txSceneLink,
  [txItem.id]:              txItem,
  [txDanger.id]:            txDanger,
  [txCond.id]:              txCond,
  [txNpc.id]:               txNpc,
  [txSave.id]:              txSave,
};
