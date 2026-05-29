import { useTimeStore, formatGameDate, formatGameTime } from '../../state/timeStore.ts';

export default function GameDateBar() {
  const year        = useTimeStore(s => s.year);
  const month       = useTimeStore(s => s.month);
  const day         = useTimeStore(s => s.day);
  const minuteOfDay = useTimeStore(s => s.minuteOfDay);

  return (
    <div id="game-date-bar">
      <span className="gdb-date">{formatGameDate(year, month, day)}</span>
      <span className="gdb-sep">·</span>
      <span className="gdb-time">{formatGameTime(minuteOfDay)}</span>
    </div>
  );
}
