import { create } from 'zustand';
import type { LocationInfo } from '../data/map-data.ts';

interface MapUiState {
  isOpen:         boolean;
  view:           'global' | 'interior';
  activeLocId:    string | null;
  activeRoomId:   string | null;
  curInteriorLoc: LocationInfo | null;

  openMap:      () => void;
  closeMap:     () => void;
  showGlobal:   () => void;
  showInterior: (loc: LocationInfo, initialRoomId?: string) => void;
  selectLoc:    (locId: string | null) => void;
  selectRoom:   (roomId: string | null) => void;
}

export const useMapUiStore = create<MapUiState>((set) => ({
  isOpen:         false,
  view:           'global',
  activeLocId:    null,
  activeRoomId:   null,
  curInteriorLoc: null,

  openMap:      () => set({ isOpen: true, view: 'global', activeLocId: null }),
  closeMap:     () => set({ isOpen: false }),
  showGlobal:   () => set({ view: 'global', activeRoomId: null }),
  showInterior: (loc, initialRoomId) => set({
    view: 'interior',
    curInteriorLoc: loc,
    activeRoomId: initialRoomId ?? null,
  }),
  selectLoc:  (locId)  => set({ activeLocId: locId }),
  selectRoom: (roomId) => set({ activeRoomId: roomId }),
}));
