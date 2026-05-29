import { useLogStore } from '../../state/logStore.ts';

export default function LogPanel() {
  const entries  = useLogStore(s => s.entries);
  const isOpen   = useLogStore(s => s.isOpen);
  const closeLog = useLogStore(s => s.closeLog);

  if (!isOpen) return null;

  return (
    <div id="log-panel">
      <div id="log-header">
        <span id="log-title">[ 기 록 지 ]</span>
        <span id="log-count">{entries.length}건</span>
        <button className="map-x" onClick={closeLog}>✕</button>
      </div>

      <div id="log-body">
        {entries.length === 0 ? (
          <div className="log-empty">아직 기록이 없습니다.</div>
        ) : (
          entries.map(entry => (
            <div key={entry.id} className="log-entry">
              <div className="log-meta">
                <span className="log-time">{entry.timeStr}</span>
                <span className="log-sep">│</span>
                <span className="log-scene">{entry.sceneTitle}</span>
              </div>
              <div className="log-choice">&gt; {entry.choice}</div>
              {entry.narrative && (
                <div className="log-narrative">{entry.narrative}</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
