import { create } from 'zustand';

// ── 게임 시작 시각 ─────────────────────────────────────────────
// BLACK OCTOBER +2Y → 블랙 달력 2년차, 11월 17일 오전 07:42
const INITIAL = { year: 2, month: 11, day: 17, minuteOfDay: 7 * 60 + 42 };

const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

interface TimeState {
  year:        number;
  month:       number;
  day:         number;
  minuteOfDay: number;  // 0–1439

  advanceTime: (minutes: number) => void;
  setTime:     (t: Omit<TimeState, 'advanceTime' | 'setTime' | 'reset'>) => void;
  reset:       () => void;
}

export const useTimeStore = create<TimeState>((set) => ({
  ...INITIAL,

  advanceTime: (minutes) => set(s => {
    let total  = s.minuteOfDay + minutes;
    let { year, month, day } = s;
    while (total >= 24 * 60) {
      total -= 24 * 60;
      day++;
      const max = DAYS_IN_MONTH[month] ?? 30;
      if (day > max) { day = 1; month++; }
      if (month > 12) { month = 1; year++; }
    }
    return { year, month, day, minuteOfDay: total };
  }),

  setTime: (t) => set(t),
  reset:   ()  => set(INITIAL),
}));

// ── 순수 포맷 함수 ─────────────────────────────────────────────
export function formatGameTime(minuteOfDay: number): string {
  const h    = Math.floor(minuteOfDay / 60) % 24;
  const m    = minuteOfDay % 60;
  const ampm = h < 12 ? '오전' : '오후';
  const hh   = h % 12 === 0 ? 12 : h % 12;
  return `${ampm} ${String(hh).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function formatGameDate(year: number, month: number, day: number): string {
  return `BL+${year} · ${month}월 ${day}일`;
}
