import {useState} from 'react';
import type {KnowledgeDefinition} from '../types/knowledge';
import {PROFICIENCY_CATEGORIES,PROFICIENCY_EXPERIENCE_THRESHOLDS,PROFICIENCY_RANKS} from '../data/knowledge/config';
import {TARGET_NAMES} from '../data/config';
import {stats,proficiencies,knowledgeIssues,effectReferencesFor,derivedReferencesFor,eventReferencesFor} from '../systems/knowledgeRegistry';
import {normalize} from '../systems/search';
import type {EffectReference} from '../systems/knowledgeRegistry';
type Update=(patch:Record<string,string|null>,replace?:boolean)=>void;
const range=(min:number,max:number|null)=>max===null?`${min} 이상`:`${min}~${max}`;
const tagName=(tag:string)=>TARGET_NAMES[tag]??({wind:'바람',earth:'대지',water:'물',cold:'한랭',heat:'고열',terrain:'지형',formation:'대형',night:'야간',camp:'야영',metal:'금속',rain:'비',ambush:'기습',siege:'공성',retreat:'퇴각',ritualmagic:'의식술',citizenship:'공동체 실무',daily:'일상',forest:'숲',residue:'잔류 마력'} as Record<string,string>)[tag]??tag;
function References({references,onOpen}:{references:EffectReference[];onOpen:(id:string)=>void}){
 const grouped=new Map<string,EffectReference[]>();references.forEach(ref=>{const list=grouped.get(ref.sourceId)??[];list.push(ref);grouped.set(ref.sourceId,list);});
 return <ul className="ac-reference-list">{[...grouped].map(([id,refs])=><li key={id}><button onClick={()=>onOpen(id)}>{refs[0].sourceName} ↗</button><small>{refs[0].sourceKind==='trait'?'특성':'기프트'} · {refs.some(r=>r.conditions.length)?'조건부 포함 · ':''}{[...new Set(refs.map(r=>r.type==='STAT_MODIFIER'?'능력치 보정':r.type==='GROWTH_MODIFIER'?'성장 효율':'판정 보정'))].join(' / ')}</small></li>)}</ul>;
}
function KnowledgeDetail({definition,debug,onOpen,onStat}:{definition:KnowledgeDefinition;debug:boolean;onOpen:(id:string)=>void;onStat:(id:string)=>void}){
 const refs=effectReferencesFor(definition),derived=derivedReferencesFor(definition),events=eventReferencesFor(definition),issues=knowledgeIssues.filter(i=>i.id===definition.id||i.id==='knowledge');
 return <article className="ac-detail ac-knowledge-detail" aria-label="능력치·숙련도 상세"><header><p className="ac-kicker">{definition.kind==='stat'?'ATTRIBUTE DEFINITION':'PROFICIENCY DEFINITION'}</p><h2>{definition.name}</h2><p className="ac-breadcrumb">{definition.kind==='stat'?definition.id:PROFICIENCY_CATEGORIES[definition.categoryId]} · 정의 데이터</p></header><blockquote>{definition.description}</blockquote>
  {definition.kind==='proficiency'&&<section><h3>관련 기본 능력치</h3><div className="ac-stat-links">{definition.relatedStats.map(id=><button key={id} onClick={()=>onStat(id)}>{stats.find(s=>s.id===id)?.name} <small>{id}</small></button>)}</div><p className="ac-note">기술을 뒷받침하는 설계 참조입니다. 수치·등급을 합산하거나 숙련도를 자동 계산하지 않습니다.</p></section>}
  <section><h3>관련 판정</h3><div className="ac-knowledge-tags">{definition.checkTags.map(tag=><span key={tag}>{tagName(tag)}</span>)}</div><p className="ac-note">아직 판정 실행기는 없습니다. 높은 등급의 문학적 표현은 확정 성공이나 절대 능력의 규칙이 아닙니다.</p></section>
  <section><h3>특성·기프트 효과 참조 <span>{refs.length?'연결됨':'미연결'}</span></h3><p className="ac-note">등록한 관련 효과 대상과 정확히 일치하는 실제 참조입니다. 열람용 연결이며 효과를 실행하거나 수치를 자동 동기화하지 않습니다.</p>{refs.length?<details className="ac-reference-group"><summary>{new Set(refs.map(r=>r.sourceId)).size}개 콘텐츠 · 효과 {refs.length}개</summary><References references={refs} onOpen={onOpen}/></details>:<p>현재 일치하는 효과 데이터가 없습니다.</p>}</section>
  {derived.length>0&&<section><h3>파생 지표 연계 <span>예정</span></h3><p className="ac-note">{definition.kind==='stat'?definition.derivedTargets.map(tagName).join(' · '):''}는 기본 능력치와 같은 수치가 아닙니다. 아래 효과의 존재만 확인했으며 변환식은 미설정입니다.</p><details className="ac-reference-group"><summary>{derived.length}개 기존 효과 · 수치 변환 미구현</summary><References references={derived} onOpen={onOpen}/></details></section>}
  <section><h3>이벤트 참조 <span>{events.length?'예정 · 미구현':'미연결'}</span></h3>{events.length?events.map(event=><p key={event.id}>{event.title}</p>):<p>일치하는 이벤트 태그가 아직 없습니다.</p>}<p className="ac-note">데이터에 존재하는 예정 이벤트만 연결합니다. 실제 발생이나 실행을 의미하지 않습니다.</p></section>
  {definition.kind==='proficiency'&&<section><h3>특성과 독립적인 경지</h3><p>검술 종사와 기초 검술 특성, 검술 입문과 고급 검술 특성은 함께 존재할 수 있습니다. 서로의 단계나 보유 여부를 자동으로 바꾸지 않습니다.</p><p>경험치 임계값: <b>미설정</b></p></section>}
  {debug&&<section className="ac-debug"><h3>DEBUG / 정의와 실제 참조</h3><p className={issues.length?'ac-invalid':'ac-valid'}>{issues.length?issues.map(i=>i.message).join(' · '):'데이터 유효 · 참조 검사 통과'}</p><dl><div><dt>ID</dt><dd>{definition.id}</dd></div><div><dt>판정 태그</dt><dd>{definition.checkTags.join(', ')}</dd></div><div><dt>명시적 대상</dt><dd>{definition.effectTargets.join(', ')||'없음'}</dd></div></dl>
   <details><summary>등급·경지와 정의 원본</summary><pre>{JSON.stringify(definition,null,2)}</pre></details><details><summary>효과 ID · 타입 · 조건 · 출처</summary><pre>{JSON.stringify(refs,null,2)}</pre></details><details><summary>파생 연결 후보 · 변환 미설정</summary><pre>{JSON.stringify(derived,null,2)}</pre></details><details><summary>예정 이벤트 ID·조건</summary><pre>{JSON.stringify(events,null,2)}</pre></details>{definition.kind==='proficiency'&&<p>숙련도 경험치: {String(PROFICIENCY_EXPERIENCE_THRESHOLDS)} (미설정)</p>}
  </section>}
 </article>;
}
export default function KnowledgeCatalog({kind,params,update,onOpenEntry}:{kind:'stat'|'proficiency';params:URLSearchParams;update:Update;onOpenEntry:(id:string)=>void}){
 const query=params.get('q')??'',category=params.get('category')??'all',debug=params.get('debug')==='1',source:KnowledgeDefinition[]=kind==='stat'?stats:proficiencies;
 const terms=normalize(query).split(/\s+/).filter(Boolean),visible=source.filter(definition=>{
  const categoryMatches=definition.kind==='stat'||category==='all'||definition.categoryId===category;
  const texts=definition.kind==='stat'?definition.grades:definition.ranks;
  const haystack=normalize([definition.name,definition.id,definition.description,...texts.map(row=>row.flavorText)].join(' '));return categoryMatches&&terms.every(term=>haystack.includes(term));
 });
 const selected=source.find(def=>def.id===params.get('item'))??visible[0]??source[0];
 const [collapsed,setCollapsed]=useState<Set<string>>(()=>new Set());
 const rows=selected.kind==='stat'?selected.grades.map((grade,index)=>({key:grade.grade,title:grade.title,subtitle:range(grade.min,grade.max),text:grade.flavorText,index})):selected.ranks.map(rank=>({key:String(rank.level),title:rank.name,subtitle:PROFICIENCY_RANKS[rank.level].hanja,text:rank.flavorText,index:rank.level}));
 const toggle=(key:string)=>setCollapsed(previous=>{const next=new Set(previous);if(next.has(key))next.delete(key);else next.add(key);return next;});
 const toggleAll=(close:boolean)=>setCollapsed(previous=>{const next=new Set(previous);rows.forEach(row=>{const key=selected.id+'/'+row.key;if(close)next.add(key);else next.delete(key);});return next;});
 const select=(id:string)=>{update({item:id});if(matchMedia('(max-width:1100px)').matches)requestAnimationFrame(()=>document.getElementById('ac-knowledge-reading')?.scrollIntoView({block:'start'}));};
 const reset=()=>update({q:null,category:null});
 return <>
  <div className="ac-searchbar"><label><span>검색</span><input aria-label="능력치·숙련도 검색" type="search" value={query} placeholder={kind==='stat'?'능력치 이름·설명 검색':'기술명·경지 설명 검색'} onChange={e=>update({q:e.target.value},true)}/></label><span role="status" aria-live="polite">{visible.length}개 일치</span><button onClick={reset}>필터 초기화</button></div>
  <div className="ac-workspace ac-knowledge-workspace">
   <aside className="ac-sidebar"><details open><summary>{kind==='stat'?'기본 능력치':'숙련도 분류'}</summary>{kind==='proficiency'&&<nav aria-label="숙련도 대분류"><button aria-pressed={category==='all'} onClick={()=>update({category:null,item:null})}>전체 기술 <span>{proficiencies.length}</span></button>{Object.entries(PROFICIENCY_CATEGORIES).map(([id,name])=><div key={id}><button aria-pressed={category===id} onClick={()=>update({category:id,item:null})}>{name}<span>{proficiencies.filter(p=>p.categoryId===id).length}</span></button></div>)}</nav>}
    <nav className="ac-knowledge-nav" aria-label={kind==='stat'?'능력치 빠른 이동':'숙련도 빠른 이동'}>{visible.map(definition=><button key={definition.id} aria-pressed={selected.id===definition.id} onClick={()=>select(definition.id)}>{definition.name}{definition.kind==='stat'&&<small>{definition.id}</small>}</button>)}</nav>
    <p className="ac-sidebar-note">{kind==='stat'?'기본 능력치는 캐릭터의 공통 바탕입니다. 정의와 실제 보유 수치는 별도로 관리합니다.':'경지는 기술의 숙달을 뜻합니다. 특성의 진화 단계 및 기프트와 강제로 동기화하지 않습니다.'}</p></details>
    {debug&&<div className="ac-debug-context"><p className={knowledgeIssues.length?'ac-invalid':'ac-valid'}>{knowledgeIssues.length?`${knowledgeIssues.length}건 오류`:`${stats.length}종 능력치 · ${proficiencies.length}종 숙련도 검증 통과`}</p><p>고유 등급·경지 설명 {stats.reduce((n,s)=>n+s.grades.length,0)+proficiencies.reduce((n,p)=>n+p.ranks.length,0)}개</p></div>}
   </aside>
   <section className="ac-results ac-rank-reading" id="ac-knowledge-reading" key={selected.id} aria-label="등급·경지 설명"><header className="ac-results-heading"><h2>{selected.name} {selected.kind==='stat'?selected.id:''}</h2><span>{selected.kind==='stat'?'수치별 10등급':'독립된 10경지'}</span></header>
    {visible.length===0?<div className="ac-empty"><h3>일치하는 기록이 없습니다</h3><p>검색어와 분류를 바꿔 보세요.</p><button onClick={reset}>전체 기록 보기</button></div>:<><div className="ac-rank-intro"><p>{selected.description}</p>{!visible.some(d=>d.id===selected.id)&&<p className="ac-note">현재 선택한 항목은 필터 결과 밖에 있습니다.</p>}<div className="ac-rank-tools"><button onClick={()=>toggleAll(false)}>모두 펼치기</button><button onClick={()=>toggleAll(true)}>모두 접기</button></div><small>경지의 비유적 성취는 확정 효과가 아닙니다. 구체적인 판정 규칙은 별도 설계합니다.</small></div>
     <div className="ac-rank-list">{rows.map(row=>{const key=selected.id+'/'+row.key,open=!collapsed.has(key),bodyId='knowledge-'+selected.id+'-'+row.key;return <section className={`ac-rank-row ${row.index>=6?'ac-rank-upper':''}`} key={row.key}><h3><button aria-expanded={open} aria-controls={bodyId} onClick={()=>toggle(key)}><span className="ac-rank-code">{row.key}</span><strong>{row.title}</strong><small>{row.subtitle}</small><span aria-hidden="true">{open?'−':'+'}</span></button></h3><p id={bodyId} hidden={!open}>{row.text}</p></section>;})}</div>
    </>}
   </section>
   <div id="ac-detail" className="ac-detail-container" key={'detail-'+selected.id}><KnowledgeDetail definition={selected} debug={debug} onOpen={onOpenEntry} onStat={id=>update({kind:'stat',item:id,category:null,q:null})}/></div>
  </div>
 </>;
}
