import { useNavigationStore } from '../../../state/navigationStore.ts';
import { useMapUiStore }      from '../../../state/mapUiStore.ts';
import type { Room, LocationInfo } from '../../../data/map-data.ts';

interface Props { room: Room; loc: LocationInfo; }

export default function RoomNode({ room, loc }: Props) {
  const playerLocId  = useNavigationStore(s => s.playerLocId);
  const playerRoomId = useNavigationStore(s => s.playerRoomId);
  const activeRoomId = useMapUiStore(s => s.activeRoomId);
  const selectRoom   = useMapUiStore(s => s.selectRoom);

  const isMyLoc    = loc.id === playerLocId;
  const isCurrent  = isMyLoc && room.id === playerRoomId;
  const isAdjacent = isMyLoc && !isCurrent &&
    loc.roomEdges.some(([a, b]) =>
      (a === playerRoomId && b === room.id) || (b === playerRoomId && a === room.id));
  const isActive    = room.id === activeRoomId;
  const isWorldExit = !!room.connectsTo;

  const statusCls = isCurrent ? 'rn-current' : isAdjacent ? 'rn-adjacent' : 'rn-locked';

  return (
    <button
      className={`room-node rt-${room.type}${isWorldExit ? ' rn-world-exit' : ''} ${statusCls}${isActive ? ' active' : ''}`}
      data-rid={room.id}
      style={{ left: `${room.cx}%`, top: `${room.cy}%` }}
      onClick={() => selectRoom(room.id)}
    >
      <div className="rn-name">{room.name}</div>
      {isWorldExit && <div className="rn-dest">↗ {room.connectsTo}</div>}
    </button>
  );
}
