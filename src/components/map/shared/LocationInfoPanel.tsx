import { ZONE_CLS, EDGES }    from '../map-constants.ts';
import { LOCATIONS }           from '../../../data/map-data.ts';
import { useNavigationStore }  from '../../../state/navigationStore.ts';
import { useMapUiStore }       from '../../../state/mapUiStore.ts';
import DangerDisplay           from './DangerDisplay.tsx';
import type { LocationInfo }   from '../../../data/map-data.ts';

interface Props { loc: LocationInfo; }

export default function LocationInfoPanel({ loc }: Props) {
  const playerLocId  = useNavigationStore(s => s.playerLocId);
  const playerRoomId = useNavigationStore(s => s.playerRoomId);
  const currentRoom  = useNavigationStore(s => s.currentRoom());
  const travelToLoc  = useNavigationStore(s => s.travelToLoc);
  const { selectLoc, showInterior } = useMapUiStore();

  const zc        = ZONE_CLS[loc.zone];
  const isCurrent = loc.id === playerLocId;
  const canTravel = !isCurrent && currentRoom?.connectsTo === loc.id;
  const connLocs  = LOCATIONS.filter(l =>
    EDGES.some(([a, b]) => (a === loc.id && b === l.id) || (b === loc.id && a === l.id)));

  const handleTravel = () => travelToLoc(loc.id);
  const handleInterior = () => {
    const initRoom = loc.id === playerLocId ? playerRoomId : undefined;
    showInterior(loc, initRoom);
  };

  return (
    <div id="map-info-content">
      <div className="ip-head">
        <div className="ip-name">{loc.name}</div>
        <div className={`ip-code ${zc}`}>[{loc.id}]</div>
      </div>
      <span className={`ip-badge ${zc}`}>{loc.zone}</span>
      {isCurrent && <div className="ip-cur-badge">◎ 현재 위치</div>}
      <div className="ip-sep" />
      <div className="ip-field">
        <div className="ip-lbl">위험도</div>
        <div className="ip-danger"><DangerDisplay display={loc.dangerDisplay} /></div>
      </div>
      <div className="ip-field">
        <div className="ip-lbl">주요 NPC</div>
        <div className="ip-val">{loc.npc}</div>
      </div>
      {connLocs.length > 0 && (
        <div className="ip-field">
          <div className="ip-lbl">연결 구역</div>
          <div className="ip-conns">
            {connLocs.map(c => (
              <button key={c.id} className={`ip-conn ${ZONE_CLS[c.zone]}`}
                      onClick={() => selectLoc(c.id)}>
                <span className="ipc-id">{c.id}</span>
                <span className="ipc-name">{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="ip-actions">
        <button className="ip-enter" onClick={handleInterior}>
          <span>내부 지도 보기</span><span className="ip-arrow">→</span>
        </button>
        {canTravel && (
          <button className="ip-travel" onClick={handleTravel}>
            <span>이 구역으로 이동</span><span className="ip-arrow">▶</span>
          </button>
        )}
        {!isCurrent && !canTravel && (
          <div className="ip-locked-note">출구 노드에서만 이동 가능합니다</div>
        )}
      </div>
    </div>
  );
}
