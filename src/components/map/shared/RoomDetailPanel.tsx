import { ROOM_TYPE_LABEL }    from '../map-constants.ts';
import { useNavigationStore } from '../../../state/navigationStore.ts';
import { useMapUiStore }      from '../../../state/mapUiStore.ts';
import type { Room, LocationInfo } from '../../../data/map-data.ts';

interface Props { room: Room; loc: LocationInfo; }

export default function RoomDetailPanel({ room, loc }: Props) {
  const playerLocId  = useNavigationStore(s => s.playerLocId);
  const playerRoomId = useNavigationStore(s => s.playerRoomId);
  const moveToRoom   = useNavigationStore(s => s.moveToRoom);
  const selectRoom   = useMapUiStore(s => s.selectRoom);

  const isMyLoc   = loc.id === playerLocId;
  const isCurrent = isMyLoc && room.id === playerRoomId;
  const isAdj     = isMyLoc && !isCurrent &&
    loc.roomEdges.some(([a, b]) =>
      (a === playerRoomId && b === room.id) || (b === playerRoomId && a === room.id));

  const handleMove = () => {
    moveToRoom(room.id);
    selectRoom(room.id);
  };

  return (
    <>
      <div className="rds-back">
        <button className="rds-back-btn" onClick={() => selectRoom(null)}>← 목록으로</button>
      </div>
      <div className="rds-name">{room.name}</div>
      <span className={`rds-type rdt-${room.type}`}>{ROOM_TYPE_LABEL[room.type]}</span>
      {isCurrent && <div className="rds-pos-badge">◎ 현재 위치</div>}
      {!isCurrent && !isAdj && (
        <div className="rds-locked-note">⊘ 직접 연결된 구역이 아닙니다</div>
      )}
      {isAdj && (
        <button className="rds-move-btn" onClick={handleMove}>▶ 이 구역으로 이동</button>
      )}
      {room.connectsTo && (
        <div className="rds-world-exit">↗ 세계 이동 : <strong>{room.connectsTo}</strong></div>
      )}
      <div className="rds-sep" />
      <div className="rds-desc">{room.desc}</div>
    </>
  );
}
