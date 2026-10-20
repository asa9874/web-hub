import { useId } from 'react';
import type { Trait } from '../types';
import {impactGrade} from '../systems/impact';
import {IMPACT_DOMAINS} from '../data/impactConfig';
import { FAMILIES, RARITIES } from '../data/config';
export default function TraitTree({nodes,selected,matches,onSelect}:{nodes:Trait[];selected:string;matches:Set<string>;onSelect:(id:string)=>void}) {
 const marker='academy-arrow-'+useId().replace(/:/g,''),tiers=[...new Set(nodes.map(n=>n.tier))].sort((a,b)=>a-b),rows=Math.max(...tiers.map(tier=>nodes.filter(n=>n.tier===tier).length));
 const width=Math.max(200,tiers.length*198-18),height=rows*112+16;
 const positions=new Map(nodes.map(node=>[node.id,{x:tiers.indexOf(node.tier)*198,y:nodes.filter(n=>n.tier===node.tier).findIndex(n=>n.id===node.id)*112+8}]));
 return <section className="ac-family" aria-label={FAMILIES[nodes[0].family].name+' 진화 트리'}>
  <header><h3>{FAMILIES[nodes[0].family].name}</h3><span>{nodes.length}개 · {nodes.some(n=>n.evolutions.length)?'진화 방향 →':'독립 특성'}</span></header>
  <div className="ac-tree-scroll" tabIndex={0} aria-label="트리 가로 스크롤"><div className="ac-tree" style={{width,height}}>
   <svg width={width} height={height} aria-hidden="true"><defs><marker id={marker} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L8 4L0 8" fill="none" stroke="currentColor"/></marker></defs>
    {nodes.flatMap(n=>n.evolutions.map(edge=>{const from=positions.get(n.id)!,to=positions.get(edge.to);return to?<path key={n.id+edge.to} d={`M${from.x+174} ${from.y+44} C${from.x+186} ${from.y+44},${to.x-14} ${to.y+44},${to.x-5} ${to.y+44}`} markerEnd={`url(#${marker})`}/>:null;}))}
   </svg>
   {nodes.map(node=>{const point=positions.get(node.id)!;return <button key={node.id} className={`ac-node ${matches.has(node.id)?'':'ac-context-node'}`} style={{left:point.x,top:point.y}} aria-pressed={selected===node.id} onClick={()=>onSelect(node.id)}><small>{String(node.tier+1).padStart(2,'0')} <span>{RARITIES[node.rarity].name}</span></small><strong>{node.name}</strong><small className="ac-node-impact" title={node.impact.domains.map(d=>IMPACT_DOMAINS[d]).join(' · ')}>{node.impact.baseImpact} · {impactGrade(node.impact.baseImpact)?.name}<span>{node.impact.domains.map(d=>IMPACT_DOMAINS[d]).join('/')}</span></small></button>;})}
  </div></div>
 </section>;
}
