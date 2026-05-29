import type { Scene } from '../../types/index.ts';
import { apartmentStart } from './apartment-start.ts';
import { txHub, txSceneLink, txItem, txDanger, txCond, txNpc, txSave } from './tx-scenes.ts';

export const scenes: Record<string, Scene> = {
  [apartmentStart.id]: apartmentStart,
  [txHub.id]:          txHub,
  [txSceneLink.id]:    txSceneLink,
  [txItem.id]:         txItem,
  [txDanger.id]:       txDanger,
  [txCond.id]:         txCond,
  [txNpc.id]:          txNpc,
  [txSave.id]:         txSave,
};
