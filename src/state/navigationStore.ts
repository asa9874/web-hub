import { create } from 'zustand';
import { LOCATIONS, type LocationInfo, type Room } from '../data/map-data.ts';

interface NavigationState {
  playerLocId:  string;
  playerRoomId: string;
  currentLoc:   () => LocationInfo | undefined;
  currentRoom:  () => Room | undefined;
  moveToRoom:   (roomId: string) => void;
  travelToLoc:  (destLocId: string) => void;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
  playerLocId:  'A1',
  playerRoomId: 'a1-302',

  currentLoc:  () => LOCATIONS.find(l => l.id === get().playerLocId),
  currentRoom: () => get().currentLoc()?.rooms.find(r => r.id === get().playerRoomId),

  moveToRoom: (roomId) => set({ playerRoomId: roomId }),

  travelToLoc: (destLocId) => {
    const destLoc = LOCATIONS.find(l => l.id === destLocId);
    if (!destLoc) return;
    const arrival =
      destLoc.rooms.find(r => r.connectsTo === get().playerLocId) ??
      destLoc.rooms.find(r => r.type !== 'danger' && r.type !== 'locked') ??
      destLoc.rooms[0];
    if (!arrival) return;
    set({ playerLocId: destLocId, playerRoomId: arrival.id });
  },
}));
