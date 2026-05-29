import { create } from 'zustand';

export interface LogEntry {
  id:         number;
  timeStr:    string;  // 오전 07:47
  dateStr:    string;  // BL+2 · 11월 17일
  sceneTitle: string;
  choice:     string;
  narrative:  string;
}

interface LogState {
  entries:             LogEntry[];
  isOpen:              boolean;
  addEntry:            (entry: Omit<LogEntry, 'id'>) => void;
  updateLastNarrative: (narrative: string) => void;
  clear:               () => void;
  toggleLog:           () => void;
  closeLog:            () => void;
}

let _nextId = 0;

export const useLogStore = create<LogState>((set) => ({
  entries: [],
  isOpen:  false,

  addEntry: (entry) => set(s => ({
    entries: [{ ...entry, id: _nextId++ }, ...s.entries],
  })),

  updateLastNarrative: (narrative) => set(s => {
    const [first, ...rest] = s.entries;
    if (!first) return s;
    return { entries: [{ ...first, narrative }, ...rest] };
  }),

  clear:     () => { _nextId = 0; set({ entries: [] }); },
  toggleLog: () => set(s => ({ isOpen: !s.isOpen })),
  closeLog:  () => set({ isOpen: false }),
}));
