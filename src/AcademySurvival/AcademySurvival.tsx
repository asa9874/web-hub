import { Link, useSearchParams } from 'react-router-dom';
import type { Context, GiftCategory, Rarity } from './types';
import { CATEGORIES, EMPTY_CONTEXT, FAMILIES, GIFT_CATEGORIES, impactLabel, RARITIES } from './data/config';
import { entries, gifts, traits, validationIssues } from './systems/registry';
import { matches, sortGifts } from './systems/search';
import TraitTree from './components/TraitTree';
import EntryDetail from './components/EntryDetail';
import './AcademySurvival.css';

const CONTEXTS:Record<string,{name:string;context:Context}>={
 admission:{name:'일반 입학생',context:EMPTY_CONTEXT},
 swordsman:{name:'검술 60점 지원자',context:{...EMPTY_CONTEXT,stats:{sword:60}}},
 crisis:{name:'구조·위기 상황',context:{...EMPTY_CONTEXT,tags:['rescue','danger','injured','under-pressure'],stats:{will:35},flags:['companion-distress']}},
};
export default function AcademySurvival(){
 const [params,setParams]=useSearchParams(),catalog=params.get('view')==='catalog',kind=params.get('kind')==='gift'?'gift':'trait',query=params.get('q')??'',category=params.get('category')??'all',family=params.get('family')??'all',rarity=params.get('rarity')??'all',debug=params.get('debug')==='1';
 const context=CONTEXTS[params.get('context')??'admission']??CONTEXTS.admission;
 const clamp=(value:string|null,fallback:number)=>value===null||!Number.isFinite(Number(value))?fallback:Math.max(0,Math.min(100,Number(value)));
 const min=clamp(params.get('min'),0),max=Math.max(min,clamp(params.get('max'),100)),order=params.get('order')??'impact-desc';
 const update=(patch:Record<string,string|null>,replace=false)=>{const next=new URLSearchParams(window.location.search);Object.entries(patch).forEach(([key,value])=>{if(value===null||value==='')next.delete(key);else next.set(key,value);});setParams(next,{replace});};
 const switchKind=(next:string)=>update({kind:next,category:null,family:null,rarity:null,item:null,min:null,max:null});
 const select=(id:string)=>{update({item:id,kind:id.startsWith('gift-')?'gift':'trait'});if(matchMedia('(max-width:1100px)').matches)requestAnimationFrame(()=>document.getElementById('ac-detail')?.scrollIntoView({block:'start'}));};
 const source=kind==='trait'?traits:gifts;
 const results=source.filter(entry=>(category==='all'||entry.category===category)&&(rarity==='all'||entry.rarity===rarity)&&matches(entry,query)&&(entry.kind==='gift'?(entry.impact>=min&&entry.impact<=max):(family==='all'||entry.family===family)));
 const hitIds=new Set(results.map(r=>r.id)),selected=source.find(entry=>entry.id===params.get('item'))??results[0]??source[0];
 const shownFamilies=[...new Set(results.filter(t=>t.kind==='trait').map(t=>t.family))];
 const sorted=sortGifts(results.filter(g=>g.kind==='gift'),order);
 const reset=()=>update({category:null,family:null,rarity:null,min:null,max:null,q:null});
 return <main className="ac-page">
  <header className="ac-top"><Link to="/" className="ac-back">← WEB HUB</Link><button className="ac-brand" onClick={()=>update({view:null})}>아카데미에서 살아남기<span>ACADEMY SURVIVAL / ARCHIVE</span></button><span className="ac-edition">CONTENT EDITION 01</span></header>
  {!catalog?<section className="ac-intro">
   <div className="ac-intro-copy"><p className="ac-kicker">입학 기록실 / 콘텐츠 도감</p><h1>아카데미에서<br/><em>살아남기</em></h1><p className="ac-intro-description">같은 교복 아래, 서로 다른 재능과 비밀.<br/>검을 처음 쥔 학생부터 이름을 숨긴 기프트 보유자까지.</p><button className="ac-enter" onClick={()=>update({view:'catalog'})}>특성 &amp; 기프트 <span>기록 열람 →</span></button><p className="ac-scope">본게임은 준비 중입니다. 현재는 능력 데이터와 진화 기록을 열람할 수 있습니다.</p></div>
   <aside className="ac-volume" aria-label="도감 구성"><div className="ac-volume-mark" aria-hidden="true">A<span>Ⅰ</span></div><p>등록된 기록</p><div className="ac-volume-row"><span>TRAITS<small>성장하는 재능과 성향</small></span><strong>{traits.length}</strong></div><div className="ac-volume-row"><span>GIFTS<small>태어날 때 정해진 기적</small></span><strong>{gifts.length}</strong></div><div className="ac-volume-note">수치는 초기 밸런스안입니다.<br/>예정 이벤트는 실제 게임에 아직 구현되지 않았습니다.</div></aside>
   <div className="ac-intro-samples">{[traits[0],traits[43],gifts[90]].map(entry=><button key={entry.id} onClick={()=>update({view:'catalog',kind:entry.kind,item:entry.id})}><small>{entry.kind==='trait'?'특성':'기프트'}</small><strong>{entry.name}</strong><p>{entry.lore}</p><span>기록 보기 ↗</span></button>)}</div>
  </section>:<>
   <section className="ac-catalog-top"><div><p className="ac-kicker">RECORDS / {entries.length} ENTRIES</p><h1>특성 &amp; 기프트</h1></div><div className="ac-tabs" role="group" aria-label="도감 종류"><button aria-pressed={kind==='trait'} onClick={()=>switchKind('trait')}>특성 <span>{traits.length}</span></button><button aria-pressed={kind==='gift'} onClick={()=>switchKind('gift')}>기프트 <span>{gifts.length}</span></button></div><label className="ac-debug-toggle"><input type="checkbox" checked={debug} onChange={e=>update({debug:e.target.checked?'1':null})}/> DEBUG</label></section>
   <div className="ac-searchbar"><label><span>검색</span><input aria-label="도감 검색" type="search" value={query} placeholder="이름, 설명으로 찾기" onChange={e=>update({q:e.target.value},true)}/></label><span role="status" aria-live="polite">{results.length}개 일치</span><button onClick={reset}>필터 초기화</button></div>
   <div className="ac-workspace">
    <aside className="ac-sidebar"><details open><summary>분류 및 필터</summary><nav aria-label="대분류"><button aria-pressed={category==='all'} onClick={()=>update({category:null,family:null})}>전체 {kind==='trait'?'특성':'기프트'}</button>{Object.entries(kind==='trait'?CATEGORIES:GIFT_CATEGORIES).map(([key,name])=><div key={key}><button aria-pressed={category===key} onClick={()=>update({category:key,family:null})}>{name}<span>{source.filter(e=>e.category===key).length}</span></button>{kind==='trait'&&category===key&&<nav className="ac-subfamilies" aria-label="세부 계열">{Object.entries(FAMILIES).filter(([,f])=>f.category===key).map(([id,f])=><button key={id} aria-pressed={family===id} onClick={()=>update({family:id===family?null:id})}>{f.name}</button>)}</nav>}</div>)}</nav>
     <label>희귀도<select aria-label="희귀도 필터" value={rarity} onChange={e=>update({rarity:e.target.value==='all'?null:e.target.value})}><option value="all">모든 희귀도</option>{Object.keys(RARITIES).map(r=><option key={r} value={r}>{RARITIES[r as Rarity].name}</option>)}</select></label>
     {kind==='gift'&&<><fieldset className="ac-impact-filter"><legend>영향력 범위</legend><label>최소<input aria-label="최소 영향력" type="number" min="0" max={max} value={min} onChange={e=>update({min:String(Math.min(max,clamp(e.target.value,0)))},true)}/></label><label>최대<input aria-label="최대 영향력" type="number" min={min} max="100" value={max} onChange={e=>update({max:String(Math.max(min,clamp(e.target.value,100)))},true)}/></label></fieldset><label>정렬<select aria-label="기프트 정렬" value={order} onChange={e=>update({order:e.target.value})}><option value="impact-desc">영향력 높은 순</option><option value="impact-asc">영향력 낮은 순</option><option value="name">이름순</option></select></label></>}
     <p className="ac-sidebar-note">{kind==='trait'?'계열 안의 화살표는 진화를 나타냅니다. 검색 시 연결된 단계도 함께 표시합니다.':'영향력은 세계에 미칠 잠재력입니다. 전투력이나 획득 확률이 아닙니다.'}</p>
    </details>{debug&&<div className="ac-debug-context"><label>확률·효과 확인 기준<select value={params.get('context')??'admission'} onChange={e=>update({context:e.target.value})}>{Object.entries(CONTEXTS).map(([id,c])=><option key={id} value={id}>{c.name}</option>)}</select></label><p className={validationIssues.length?'ac-invalid':'ac-valid'}>{validationIssues.length?`${validationIssues.length}건 오류`:`${entries.length}개 데이터 검증 통과`}</p>{validationIssues.length>0&&<pre>{JSON.stringify(validationIssues,null,2)}</pre>}</div>}</aside>
    <section className="ac-results" aria-label={kind==='trait'?'특성 진화 목록':'기프트 목록'}><header className="ac-results-heading"><h2>{kind==='trait'?'계열별 진화 기록':'선천 기프트 목록'}</h2><span>{kind==='trait'?`${shownFamilies.length}개 계열`:'고정 성능 / 진화 없음'}</span></header>
     {results.length===0?<div className="ac-empty"><h3>일치하는 기록이 없습니다</h3><p>검색어나 필터 범위를 바꿔 보세요.</p><button onClick={reset}>전체 기록 보기</button></div>:kind==='trait'?shownFamilies.map(id=><TraitTree key={id} nodes={traits.filter(t=>t.family===id)} matches={hitIds} selected={selected.id} onSelect={select}/>):<ul className="ac-gift-list">{sorted.map(gift=><li key={gift.id}><button className="ac-gift-card" aria-pressed={selected.id===gift.id} onClick={()=>select(gift.id)}><div className="ac-gift-meta"><span>{GIFT_CATEGORIES[gift.category as GiftCategory]}</span><span>{RARITIES[gift.rarity].name}</span></div><h3>{gift.name}</h3><p>{gift.lore}</p><div className="ac-gift-bottom"><span>{impactLabel(gift.impact)}</span><b><small>IMPACT</small> {gift.impact}</b></div></button></li>)}</ul>}
    </section>
    <div id="ac-detail" className="ac-detail-container" key={selected.id}><EntryDetail entry={selected} debug={debug} context={context.context} onSelect={select}/></div>
   </div>
  </>}
  <footer className="ac-footer"><span>ACADEMY SURVIVAL · CONTENT ARCHIVE</span><span>설정·효과·확률은 개발 중이며 변경될 수 있습니다.</span></footer>
 </main>;
}
