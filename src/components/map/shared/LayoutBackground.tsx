import { Fragment } from 'react';
import type { LocationLayout } from '../../../data/map-data.ts';

interface Props { layout: LocationLayout; w: number; h: number; }

export default function LayoutBackground({ layout, w, h }: Props) {
  const p = (v: number, dim: number) => (v / 100) * dim;
  return (
    <g className="layout-bg">
      {layout.regions?.map((r, i) => (
        <Fragment key={i}>
          <rect x={p(r.x,w)} y={p(r.y,h)} width={p(r.w,w)} height={p(r.h,h)}
                className={`lr lr-${r.style}`} />
          {r.label && (
            <text x={p(r.x,w)+4} y={p(r.y,h)+11} className="lr-label">{r.label}</text>
          )}
        </Fragment>
      ))}
      {layout.outline && (
        <rect x={p(layout.outline.x,w)} y={p(layout.outline.y,h)}
              width={p(layout.outline.w,w)} height={p(layout.outline.h,h)}
              className="layout-outline" />
      )}
      {layout.seps?.map((s, i) => (
        <Fragment key={i}>
          <line x1={p(s.x1,w)} y1={p(s.y1,h)} x2={p(s.x2,w)} y2={p(s.y2,h)}
                className={
                  s.style === 'bold'   ? 'layout-sep ls-bold'   :
                  s.style === 'dashed' ? 'layout-sep ls-dashed' : 'layout-sep'
                } />
          {s.label && (
            <text x={p(s.x1,w)+3} y={p(s.y1,h)-3} className="ls-label">{s.label}</text>
          )}
        </Fragment>
      ))}
    </g>
  );
}
