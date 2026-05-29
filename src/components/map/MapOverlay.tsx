import { useEffect }          from 'react';
import { useMapUiStore }      from '../../state/mapUiStore.ts';
import { useNavigationStore } from '../../state/navigationStore.ts';
import { ZONE_CLS }           from './map-constants.ts';
import WorldMap               from './WorldMap/WorldMap.tsx';
import InteriorMap            from './InteriorMap/InteriorMap.tsx';

export default function MapOverlay() {
  const { isOpen, view, curInteriorLoc, closeMap, showGlobal } = useMapUiStore();
  const playerLocId = useNavigationStore(s => s.playerLocId);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMap(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeMap]);

  if (!isOpen) return null;

  const loc = curInteriorLoc;

  return (
    <div id="map-overlay">

      {/* ══ GLOBAL MAP ══ */}
      {view === 'global' && (
        <div id="map-global-view">
          <div id="map-gh">
            <div className="mgh-l">
              <span className="mgh-title">세 계 지 도</span>
              <span className="mgh-sub">POST-APOCALYPSE · BLACK OCTOBER +2Y</span>
            </div>
            <div className="mgh-legend">
              <span className="mleg z-safe">◆ 생존</span>
              <span className="mleg z-grey">◆ 회색</span>
              <span className="mleg z-border">◆ 경계</span>
              <span className="mleg z-deep">◆ 심층</span>
            </div>
            <button className="map-x" onClick={closeMap}>✕</button>
          </div>
          <WorldMap />
        </div>
      )}

      {/* ══ INTERIOR MAP ══ */}
      {view === 'interior' && loc && (
        <div id="map-interior-view">
          <div id="map-int-hdr">
            <button className="map-back" onClick={showGlobal}>← 돌아가기</button>
            <div className="mit-wrap">
              <span className="mit-label">내 부 지 도</span>
              <span id="map-int-title">{loc.name}{'  '}·{'  '}[{loc.id}]</span>
            </div>
            <span className="mit-cur-badge">
              {loc.id === playerLocId ? '◎ 현재 위치' : ''}
            </span>
            <span className={`mit-zone ${ZONE_CLS[loc.zone]}`}>{loc.zone}</span>
            <button className="map-x" onClick={closeMap}>✕</button>
          </div>
          <InteriorMap loc={loc} />
        </div>
      )}

    </div>
  );
}
