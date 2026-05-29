import { ZONE_CLS }           from '../map-constants.ts';
import { useNavigationStore }  from '../../../state/navigationStore.ts';
import { useMapUiStore }       from '../../../state/mapUiStore.ts';
import DangerDisplay           from '../shared/DangerDisplay.tsx';
import type { LocationInfo }   from '../../../data/map-data.ts';

interface Props {
  loc: LocationInfo;
  pos: { cx: number; cy: number };
}

export default function WorldMapNode({ loc, pos }: Props) {
  const playerLocId = useNavigationStore(s => s.playerLocId);
  const currentRoom = useNavigationStore(s => s.currentRoom());
  const activeLocId = useMapUiStore(s => s.activeLocId);
  const selectLoc   = useMapUiStore(s => s.selectLoc);

  const isCurrent = loc.id === playerLocId;
  const canTravel = !isCurrent && currentRoom?.connectsTo === loc.id;
  const isActive  = loc.id === activeLocId;

  const statusCls = isCurrent ? 'mn-current' : canTravel ? 'mn-travel' : 'mn-locked';

  return (
    <button
      className={`map-node ${ZONE_CLS[loc.zone]} ${statusCls}${isActive ? ' active' : ''}`}
      data-id={loc.id}
      style={{ left: `${pos.cx}%`, top: `${pos.cy}%` }}
      onClick={() => selectLoc(loc.id)}
    >
      <div className="nc">{loc.id}</div>
      <div className="nn">{loc.name}</div>
      <div className="nd"><DangerDisplay display={loc.dangerDisplay} /></div>
    </button>
  );
}
