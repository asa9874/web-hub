import {IMPACT_DOMAINS,IMPACT_GRADES} from '../data/impactConfig';
type Props={params:URLSearchParams;update:(patch:Record<string,string|null>,replace?:boolean)=>void;sortLabel:string};
export default function ImpactFilters({params,update,sortLabel}:Props){
 const numeric=(key:string,fallback:number)=>{const raw=params.get(key);return raw===null||!Number.isFinite(Number(raw))?fallback:Math.max(0,Math.min(1000,Number(raw)));};
 const min=numeric('min',0),max=Math.max(min,numeric('max',1000));
 return <><fieldset className="ac-impact-filter"><legend>요소 영향력 범위</legend><label>최소<input aria-label="최소 영향력" type="number" min="0" max={max} value={min} onChange={e=>update({min:String(Math.min(max,Math.max(0,Number(e.target.value))))},true)}/></label><label>최대<input aria-label="최대 영향력" type="number" min={min} max="1000" value={max} onChange={e=>update({max:String(Math.max(min,Math.min(1000,Number(e.target.value))))},true)}/></label></fieldset>
  <label>영향력 등급<select aria-label="영향력 등급" value={params.get('grade')??'all'} onChange={e=>update({grade:e.target.value})}><option value="all">모든 등급</option>{IMPACT_GRADES.map(g=><option value={g.id} key={g.id}>{g.name} · {g.min}~{g.max}</option>)}</select></label>
  <label>영향력 분야<select aria-label="영향력 분야" value={params.get('domain')??'all'} onChange={e=>update({domain:e.target.value})}><option value="all">모든 분야</option>{Object.entries(IMPACT_DOMAINS).map(([id,name])=><option key={id} value={id}>{name}</option>)}</select></label>
  <label>정렬<select aria-label={sortLabel} value={params.get('order')??(sortLabel==='기프트 정렬'?'impact-desc':sortLabel==='특성 정렬'?'name':'name')} onChange={e=>update({order:e.target.value})}><option value="name">이름순</option><option value="impact-desc">영향력 높은 순</option><option value="impact-asc">영향력 낮은 순</option>{sortLabel==='특성 정렬'&&<option value="tree">진화 트리</option>}</select></label>
 </>;
}
