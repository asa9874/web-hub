import { EDGES, NODE_POS, WORLD_LAYOUT } from '../map-constants.ts';
import LayoutBackground from '../shared/LayoutBackground.tsx';

interface Props { w: number; h: number; activeLocId: string | null; }

export default function WorldMapEdges({ w, h, activeLocId }: Props) {
  if (!w || !h) return null;

  const hotSet = activeLocId
    ? new Set(EDGES.flatMap(([a, b]) => (a === activeLocId || b === activeLocId) ? [a, b] : []))
    : new Set<string>();

  return (
    <>
      <LayoutBackground layout={WORLD_LAYOUT} w={w} h={h} />
      {EDGES.map(([a, b]) => {
        const pa = NODE_POS[a], pb = NODE_POS[b];
        if (!pa || !pb) return null;
        const hot = activeLocId !== null && hotSet.has(a) && hotSet.has(b);
        return (
          <line
            key={`${a}-${b}`}
            x1={(pa.cx / 100) * w} y1={(pa.cy / 100) * h}
            x2={(pb.cx / 100) * w} y2={(pb.cy / 100) * h}
            className={hot ? 'me me-hot' : 'me'}
            filter={hot ? 'url(#eglow)' : undefined}
          />
        );
      })}
    </>
  );
}
