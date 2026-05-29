import { useNavigationStore } from '../../../state/navigationStore.ts';
import LayoutBackground       from '../shared/LayoutBackground.tsx';
import type { LocationInfo }  from '../../../data/map-data.ts';

interface Props { loc: LocationInfo; w: number; h: number; activeRoomId: string | null; }

export default function RoomEdges({ loc, w, h, activeRoomId }: Props) {
  const playerLocId  = useNavigationStore(s => s.playerLocId);
  const playerRoomId = useNavigationStore(s => s.playerRoomId);

  if (!w || !h) return null;

  const rmap   = new Map(loc.rooms.map(r => [r.id, r]));
  const hotSet = activeRoomId
    ? new Set(loc.roomEdges.flatMap(([a, b]) =>
        (a === activeRoomId || b === activeRoomId) ? [a, b] : []))
    : new Set<string>();
  const adjSet = new Set(
    loc.roomEdges.flatMap(([a, b]) =>
      (a === playerRoomId || b === playerRoomId) ? [a, b] : []));

  return (
    <>
      {loc.layout && <LayoutBackground layout={loc.layout} w={w} h={h} />}
      {loc.roomEdges.map(([aid, bid]) => {
        const ra = rmap.get(aid), rb = rmap.get(bid);
        if (!ra || !rb) return null;
        const hot       = activeRoomId !== null && hotSet.has(aid) && hotSet.has(bid);
        const reachable = loc.id === playerLocId && adjSet.has(aid) && adjSet.has(bid);
        return (
          <line
            key={`${aid}-${bid}`}
            x1={(ra.cx / 100) * w} y1={(ra.cy / 100) * h}
            x2={(rb.cx / 100) * w} y2={(rb.cy / 100) * h}
            className={hot ? 're re-hot' : reachable ? 're re-reach' : 're'}
          />
        );
      })}
    </>
  );
}
