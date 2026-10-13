import { useEffect, useRef } from 'react';
// The opening puppet and puzzle cutouts live in DOM overlays, outside Phaser.
// Draw supports in their own screen coordinates, including a captured drag ghost.
export default function DomPaperRods() {
  const svg=useRef<SVGSVGElement>(null),path=useRef<SVGPathElement>(null);
  useEffect(()=>{
    let frame=0;
    const draw=()=>{
      const root=svg.current?.parentElement,stage=root?.closest('.wt-overlay');
      if(root&&stage&&svg.current&&path.current){
        const bounds=stage.getBoundingClientRect();
        svg.current.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
        const targets=root.querySelectorAll<HTMLElement>('[data-paper-rod]');
        let d='';
        for(const target of targets){
          const box=target.getBoundingClientRect(),x=(box.left+box.right)/2-bounds.left;
          const y=box.top+box.height*.75-bounds.top;
          d+=`M ${x} ${y} L ${x} ${bounds.height+16} `;
        }
        path.current.setAttribute('d',d);
        svg.current.dataset.rodCount=String(targets.length);
      }
      frame=requestAnimationFrame(draw);
    };
    frame=requestAnimationFrame(draw);
    return ()=>cancelAnimationFrame(frame);
  },[]);
  return <svg className="wt-dom-rods" ref={svg} aria-hidden="true" preserveAspectRatio="none"><path ref={path} fill="none" stroke="#aa825d" strokeWidth="7" /></svg>;
}
