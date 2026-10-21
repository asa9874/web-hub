import type {StatusDefinition} from '../types/status';
import {BODY_PARTS,DURATIONS,POLARITIES,STATUS_CATEGORIES,STATUS_SUBCATEGORIES} from '../data/statuses/config';
import {statusEffectText} from '../data/statuses/define';
import {statuses,statusEvents,statusIssues,statusRegistry} from '../systems/statusRegistry';
import StatusTester from './StatusTester';
import {normalize} from '../systems/search';
type Update=(patch:Record<string,string|null>,replace?:boolean)=>void;
const kinds={worsen:'악화',improve:'호전',treat:'치료·해제',special:'특수 변화'};
function Relations({definition,select}:{definition:StatusDefinition;select:(id:string)=>void}){
 const incoming=statuses.flatMap(from=>from.transitions.filter(t=>t.to===definition.id).map(t=>({from,t})));
 return <section className="ac-status-relations"><h3>조건부 변화 경로</h3><p className="ac-note">화살표는 가능 경로입니다. 조건 충족 뒤 별도 사건 판정이 필요하며 자동 적용하지 않습니다.</p>
  {incoming.length>0&&<><h4>이전 상태</h4><ul>{incoming.map(({from,t})=><li key={t.id}><button onClick={()=>select(from.id)}>{from.name}</button><span aria-hidden="true"> → </span><span>{definition.name}</span><small>{t.trigger.description}</small></li>)}</ul></>}
  {definition.transitions.length?<ul>{definition.transitions.map(t=><li key={t.id}><span className="ac-path-kind">{kinds[t.kind]}</span><span>{definition.name}</span><span className="ac-path-arrow" aria-hidden="true"> → </span>{t.to?<button onClick={()=>select(t.to!)}>{statusRegistry.get(t.to)?.name}</button>:<strong>상태 해제</strong>}<small>{t.stageId?`${definition.stages.find(s=>s.id===t.stageId)?.name} 단계에서 · `:''}{t.trigger.description}{t.body==='preserve'?' · 호환 부위만 유지':''}{t.loop?` · 의도된 순환: ${t.loop.reason}`:''}</small></li>)}</ul>:<p>등록한 상태 간 변화 경로 없음. 아래 지속·회복 조건을 참고하세요.</p>}
 </section>;
}
export default function StatusCatalog({params,update}:{params:URLSearchParams;update:Update}){
 const q=params.get('q')??'',cat=params.get('category')??'all',sub=params.get('sub')??'all',pol=params.get('polarity')??'all',duration=params.get('duration')??'all',staged=params.get('staged')??'all',debug=params.get('debug')==='1';
 const list=statuses.filter(s=>(cat==='all'||cat===s.categoryId)&&(sub==='all'||sub===s.subcategoryId)&&(pol==='all'||pol===s.polarity)&&(duration==='all'||(duration==='permanent'?s.duration.type==='permanent':s.duration.type!=='permanent'))&&(staged==='all'||(staged==='yes'?!!s.stages.length:!s.stages.length))&&normalize(s.name).includes(normalize(q))).sort((a,b)=>a.name.localeCompare(b.name,'ko'));
 const selected=list.find(s=>s.id===params.get('item'))??(params.get('item')?statusRegistry.get(params.get('item')!):undefined);
 const select=(id:string)=>update({item:id});
 const reset=()=>update({q:null,category:null,sub:null,polarity:null,duration:null,staged:null});
 const subcategories=[...new Set(statuses.filter(s=>cat==='all'||s.categoryId===cat).map(s=>s.subcategoryId))];
 return <>
  <div className="ac-searchbar"><label><span>검색</span><input type="search" aria-label="상태 이름 검색" value={q} placeholder="상태 이름 검색" onChange={e=>update({q:e.target.value},true)}/></label><span role="status">{list.length}개 일치 · 이름순</span><button onClick={reset}>필터 초기화</button></div>
  <div className="ac-workspace ac-status-workspace"><aside className="ac-sidebar"><details open><summary>상태 분류 및 필터</summary><nav aria-label="상태 대분류"><button aria-pressed={cat==='all'} onClick={()=>update({category:null,sub:null,item:null})}>전체 상태 150</button>{Object.entries(STATUS_CATEGORIES).map(([id,name])=><button key={id} aria-pressed={cat===id} onClick={()=>update({category:id,sub:null,item:null})}>{name}<span>{statuses.filter(s=>s.categoryId===id).length}</span></button>)}</nav>
   <label>세부 분류<select aria-label="상태 세부 분류" value={sub} onChange={e=>update({sub:e.target.value,item:null})}><option value="all">전체</option>{subcategories.map(id=><option key={id} value={id}>{STATUS_SUBCATEGORIES[id as keyof typeof STATUS_SUBCATEGORIES]}</option>)}</select></label>
   <label>성격<select aria-label="상태 극성" value={pol} onChange={e=>update({polarity:e.target.value,item:null})}><option value="all">모든 성격</option>{Object.entries(POLARITIES).map(([id,name])=><option key={id} value={id}>{name}</option>)}</select></label>
   <label>지속<select aria-label="상태 지속 필터" value={duration} onChange={e=>update({duration:e.target.value,item:null})}><option value="all">전체</option><option value="temporary">비영구 (특수·조건부 포함)</option><option value="permanent">영구</option></select></label>
   <label>단계<select aria-label="상태 단계 필터" value={staged} onChange={e=>update({staged:e.target.value,item:null})}><option value="all">전체</option><option value="yes">단계 있음</option><option value="no">단계 없음</option></select></label>
   <p className="ac-sidebar-note">심각도·좌우 부위는 별도 상태 수로 세지 않습니다. 이름순으로 탐색합니다.</p></details>{debug&&<p className={statusIssues.length?'ac-invalid':'ac-valid'}>{statusIssues.length?`${statusIssues.length}건 오류`:'150종 상태 검증 통과'}</p>}</aside>
   <section className="ac-results" aria-label="상태 목록"><header className="ac-results-heading"><h2>사건이 남긴 흔적</h2><span>{list.length}종</span></header>{list.length?<ul className="ac-status-list">{list.map(s=><li key={s.id}><button aria-pressed={s.id===selected?.id} className={`ac-status-card ac-polarity-${s.polarity}`} onClick={()=>select(s.id)}><div><span>{STATUS_CATEGORIES[s.categoryId]}</span><span>{POLARITIES[s.polarity]}</span></div><h3>{s.name}</h3><small>{s.stages.length?`${s.stages.length}단계`:'단계 없음'} · {DURATIONS[s.duration.type]}{s.allowedBodyParts.length?' · 부위 지정':''}</small></button></li>)}</ul>:<div className="ac-empty"><h3>일치하는 상태가 없습니다</h3><button onClick={reset}>전체 상태 보기</button></div>}</section>

  </div>
 </>;
}

export function StatusDetail({selected,debug,select}:{selected:StatusDefinition;debug:boolean;select:(id:string)=>void}){return <><article className={`ac-detail ac-status-detail ac-polarity-${selected.polarity}`}><header><p className="ac-kicker">STATUS / {POLARITIES[selected.polarity]}</p><h2>{selected.name}</h2><p>{STATUS_CATEGORIES[selected.categoryId]} · {STATUS_SUBCATEGORIES[selected.subcategoryId as keyof typeof STATUS_SUBCATEGORIES]}</p></header><blockquote>{selected.description}</blockquote>
    <section><h3>시스템 효과</h3><ul>{selected.effects.map(e=><li key={e.id}>{statusEffectText(e)}</li>)}</ul><p className="ac-note">수치는 임시 밸런스 정의입니다. 판정 점수와 성공 확률은 다릅니다.</p></section>
    <section><h3>단계·심각도</h3>{selected.stages.length?selected.stages.map(stage=><details key={stage.id} open className="ac-status-stage"><summary>{stage.order+1}. {stage.name}</summary><p>{stage.description}</p><ul>{stage.effects.map(e=><li key={e.id}>{statusEffectText(e)}</li>)}</ul>{stage.next&&<p className="ac-note">→ {selected.stages.find(s=>s.id===stage.next?.stageId)?.name}: {stage.next.trigger.description}</p>}</details>):<p>단계 없음 · 개조 사양이나 부위는 적용 인스턴스로 관리합니다.</p>}</section>
    <section><h3>적용 부위</h3><p>{selected.allowedBodyParts.length?selected.allowedBodyParts.map(p=>BODY_PARTS[p]).join(' · '):'부위 지정 없음'}</p><p className="ac-note">재질 규칙: {({any:'재질 제한 없음',organic:'생체 부위만',mechanical:'의체·기계 부위',missing:'부위 상실'})[selected.material]}</p></section>
    <section><h3>지속·발생·회복</h3><p><b>{DURATIONS[selected.duration.type]}</b>{selected.duration.hours!==null?` · 초기 ${selected.duration.hours}시간`:''}</p><p>{selected.duration.note}</p><h4>발생</h4>{selected.onset.map((t,i)=><p key={i}>{t.description}</p>)}<h4>호전·해제 또는 별도 사건</h4>{selected.recovery.map((t,i)=><p key={i}>{t.description}</p>)}<h4>악화</h4>{selected.worsening.length?selected.worsening.map((t,i)=><p key={i}>{t.description}</p>):<p className="ac-note">별도 공통 악화 조건 없음. 단계·변화 경로가 있으면 해당 조건을 사용합니다.</p>}</section>
    <Relations definition={selected} select={select}/><section><h3>동시 보유·충돌</h3><p>{selected.stacking.scope==='body'?'같은 부위마다':'캐릭터마다'} 최대 {selected.stacking.max}개 중첩 · {selected.stacking.effects==='per-stack'?'중첩마다 효과 적용':'효과 한 번 적용'}</p><p>{selected.conflicts.group?`배타 그룹 ${selected.conflicts.group} · 우선순위 ${selected.conflicts.priority} · ${selected.conflicts.replaceOnHigher?'더 높은 우선순위만 교체 가능':'자동 교체 안 함'}`:'전역 상호 배타 그룹 없음. 신체 재질·동일 부위 규칙은 별도로 검사합니다.'}</p></section>
    <section><h3>관련 이벤트 · 예정</h3>{statusEvents(selected.id).length?statusEvents(selected.id).map(e=><p key={e.id}>{e.title} <small>미구현</small></p>):<p>연결된 예정 이벤트 없음</p>}<p className="ac-note">태그가 일치하는 기존 이벤트 정의만 연결합니다. 실행 엔진은 없습니다.</p></section>
    {debug&&<section className="ac-debug"><h3>DEBUG / 상태 정의</h3><p className={statusIssues.some(i=>i.id===selected.id)?'ac-invalid':'ac-valid'}>{statusIssues.filter(i=>i.id===selected.id).map(i=>i.message).join(' · ')||'데이터 유효 · 참조 검사 통과'}</p><p>{selected.id}</p><details><summary>단계·효과·부위·조건·충돌·변화 원본</summary><pre>{JSON.stringify(selected,null,2)}</pre></details><details><summary>이벤트 ID·태그 참조</summary><pre>{JSON.stringify(statusEvents(selected.id),null,2)}</pre></details></section>}
   </article>{debug&&<StatusTester selected={selected}/>}</>;}
