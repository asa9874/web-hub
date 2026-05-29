import { useContainerSize }  from '../../../hooks/useContainerSize.ts';
import { useMapUiStore }     from '../../../state/mapUiStore.ts';
import RoomNode              from './RoomNode.tsx';
import RoomEdges             from './RoomEdges.tsx';
import RoomDetailPanel       from '../shared/RoomDetailPanel.tsx';
import type { LocationInfo, Room } from '../../../data/map-data.ts';

interface Props { loc: LocationInfo; }

function DefaultSidebar({ loc }: { loc: LocationInfo }) {
  const sections: { title: string; rooms: readonly Room[]; cls: string }[] = [
    { title: 'NPC 조우',   rooms: loc.rooms.filter(r => r.type === 'npc'),                        cls: 'ints-npc'         },
    { title: '주요 아이템', rooms: loc.rooms.filter(r => r.type === 'item'),                       cls: 'ints-item-item'   },
    { title: '위험 구역',   rooms: loc.rooms.filter(r => r.type === 'danger' || r.type === 'locked'), cls: 'ints-item-danger' },
  ].filter(s => s.rooms.length > 0);

  if (sections.length === 0) {
    return <div className="ints-empty">구역을 클릭하면<br/>상세 정보가 표시됩니다</div>;
  }

  return (
    <>
      {sections.map(({ title, rooms, cls }) => (
        <div key={title} className="ints-sec">
          <div className="ints-title">{title}</div>
          <ul className="ints-list">
            {rooms.map(r => (
              <li key={r.id} className={`ints-item ${cls}`}>
                <strong>{r.name}</strong><br/>
                <span className="ints-desc">{r.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default function InteriorMap({ loc }: Props) {
  const { ref, size } = useContainerSize<HTMLDivElement>();
  const activeRoomId  = useMapUiStore(s => s.activeRoomId);
  const activeRoom    = activeRoomId ? (loc.rooms.find(r => r.id === activeRoomId) ?? null) : null;

  return (
    <div id="map-int-body">
      <div id="map-int-graph-section">
        <div id="map-int-graph-container" ref={ref}>
          <svg id="map-int-svg" style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none', overflow:'visible' }}>
            <RoomEdges loc={loc} w={size.w} h={size.h} activeRoomId={activeRoomId} />
          </svg>
          {loc.rooms.map(room => (
            <RoomNode key={room.id} room={room} loc={loc} />
          ))}
        </div>
      </div>
      <div id="map-int-sidebar">
        {activeRoom
          ? <RoomDetailPanel room={activeRoom} loc={loc} />
          : <DefaultSidebar loc={loc} />
        }
      </div>
    </div>
  );
}
