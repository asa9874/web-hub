import { create } from 'zustand';

interface DevState {
  isOpen: boolean;
  toggle: () => void;
  close:  () => void;
}

export const useDevStore = create<DevState>((set) => ({
  isOpen: false,
  toggle: () => set(s => ({ isOpen: !s.isOpen })),
  close:  () => set({ isOpen: false }),
}));
