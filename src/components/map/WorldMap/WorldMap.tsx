import { useContainerSize }  from '../../../hooks/useContainerSize.ts';
import { useMapUiStore }     from '../../../state/mapUiStore.ts';
import { LOCATIONS }         from '../../../data/map-data.ts';
import { NODE_POS }          from '../map-constants.ts';
import WorldMapNode          from './WorldMapNode.tsx';
import WorldMapEdges         from './WorldMapEdges.tsx';
import LocationInfoPanel     from '../shared/LocationInfoPanel.tsx';

export default function WorldMap() {
  const { ref, size } = useContainerSize<HTMLDivElement>();
  const activeLocId   = useMapUiStore(s => s.activeLocId);
  const activeLoc     = activeLocId ? (LOCATIONS.find(l => l.id === activeLocId) ?? null) : null;

  return (
    <div id="map-gb">
      <div id="map-graph-section">
        <div id="map-graph-container" ref={ref}>
          <svg id="map-svg" style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none', overflow:'visible' }}>
            <defs>
              <filter id="eglow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge>
                  <feMergeNode in="b"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <WorldMapEdges w={size.w} h={size.h} activeLocId={activeLocId} />
          </svg>
          {LOCATIONS.map(loc => {
            const pos = NODE_POS[loc.id];
            if (!pos) return null;
            return <WorldMapNode key={loc.id} loc={loc} pos={pos} />;
          })}
        </div>
      </div>

      <div id="map-info-section">
        {activeLoc ? (
          <LocationInfoPanel loc={activeLoc} />
        ) : (
          <div id="map-info-default">
            <div className="mid-kicker">// WORLD SCAN</div>
            <div className="mid-hint">
              지도에서 노드를 클릭하면<br/>상세 정보가 표시됩니다
            </div>
            <div className="mid-grid">
              <div className="mg-cell"><div className="mg-n z-safe">2</div><div className="mg-l">생존 구역</div></div>
              <div className="mg-cell"><div className="mg-n z-grey">6</div><div className="mg-l">회색 구역</div></div>
              <div className="mg-cell"><div className="mg-n z-border">2</div><div className="mg-l">경계 구역</div></div>
              <div className="mg-cell"><div className="mg-n z-deep">1</div><div className="mg-l">심층 구역</div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
