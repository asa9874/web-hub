import StoryGraph from './StoryGraph';
import {useState} from 'react';
import type {WorldEventEngine} from '../systems/worldEvents';
import {academyStoryContent,academyStoryId} from '../data/academyStories';
import {academyStoryRoots} from '../data/academyStories/roots';
import {formatGameDate,formatGameTime} from '../systems/calendar';
import './AcademyStoryNetwork.css';

/** Only mounted by the developer observer. Never used as a player knowledge projection. */
export default function AcademyStoryNetwork({engine,characterId}:{engine:WorldEventEngine;characterId?:string}){
 const [selected,setSelected]=useState(''),[allGraph,setAllGraph]=useState(false),root=academyStoryRoots.find(r=>r.ownerId===characterId),definitions=engine.definitions;
 const focus=definitions.find(d=>d.id===selected)??definitions.find(d=>d.id===root?.definitionId)??definitions.find(d=>d.id===academyStoryId('ACA-01'))!;
 const instances=engine.getInstances(true),owned=instances.filter(e=>!characterId||e.participantCharacterIds.includes(characterId));
 const plans=owned.flatMap(e=>(e.consequences??[]).map(p=>({source:e,plan:p}))).slice(-32).reverse();
 const states={waiting:'조건 대기',occurred:'실제 발생',blocked:'차단',expired:'만료'};
 return <section className="ac-story-network" aria-label="아카데미 사건망 · 개발자 전용"><h3>아카데미 사건망</h3><p>개발자 전용입니다. 실제 결과와 미발생 가능성을 구분하며, 조건 조회는 난수나 효과를 실행하지 않습니다.</p>{root&&<p><b>{root.code} · {root.theme}</b> — 실행 가능 여부는 아래 조건과 의존 기능을 따릅니다.</p>}
 <label>관찰할 사건<select value={focus.id} onChange={e=>setSelected(e.target.value)}>{definitions.filter(d=>d.tags.includes('academy-story')||d.tags.includes('fixed-student')).map(d=><option key={d.id} value={d.id}>{d.name} · {d.tags.find(t=>/^[A-Z]+-\d+$/.test(t))}</option>)}</select></label>
 <p>점선은 정의상 가능한 경로이며 발생 사실이 아닙니다. 실제 인과관계는 기존 ‘사건·인과관계’에서 확인합니다.</p>
 <div className="ac-schedule-controls"><button aria-pressed={!allGraph} onClick={()=>setAllGraph(false)}>선택 인물 그래프</button><button aria-pressed={allGraph} onClick={()=>setAllGraph(true)}>아카데미·세계 서사 전체</button></div><StoryGraph key={allGraph?"academy":characterId??"academy"} engine={engine} ownerId={allGraph?undefined:characterId} debug/>

 <h4>{focus.name} · 현재 조건</h4><p>{focus.description}</p><ul>{focus.participantRules.conditions.map((condition,i)=><li key={i}><code>{JSON.stringify(condition)}</code> — {engine.evaluateCondition(condition,{actorId:characterId})?'충족':'미충족 또는 상대 지정 필요'}</li>)}</ul><details><summary>후속 규칙·지연·변경·차단</summary><pre>{JSON.stringify(focus.followUpRules,null,2)}</pre></details>
 <h4>실제 원인에서 생긴 후속 기회 · 최근 {plans.length} 건</h4>{!plans.length&&<p>해당 인물의 후속 기회가 아직 없습니다.</p>}{plans.map(({source,plan})=><article key={source.id+'/'+plan.ruleId}><b>{definitions.find(d=>d.id===plan.definitionId)?.name} · {states[plan.status]}</b><p>원인 {source.id} · 결과 {source.outcomeId??source.status} · {plan.reason}</p><p>{formatGameDate(plan.earliestAt)} {formatGameTime(plan.earliestAt)} 이후 / {formatGameDate(plan.expiresAt)} 까지</p>{plan.resultEventId&&<p>실제 후속 {plan.resultEventId}</p>}</article>)}
 <details><summary>신규 일상 30건 · 연결·보류 이유</summary>{academyStoryContent.map(row=><article key={row.code}><b>{row.code} · {row.name}</b><p>{row.blocked?'미구현 · '+row.blocked:row.limitation?'연결·제한 있음 · '+row.limitation:'기존 실행 경로 연결'}</p></article>)}</details>
 </section>;
}
