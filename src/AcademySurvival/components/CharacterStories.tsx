import StoryGraph from './StoryGraph';
import {getPersonalStoryView,getPersonalSceneRecall} from '../systems/personalStories';
import {speechProfileRegistry} from '../data/dialogue';
import './CharacterStories.css';
import {useState} from 'react';
import type {NpcAiEngine} from '../systems/npcAi';
import {studentProfileRegistry} from '../data/characters/students';
import {personalStoryContent} from '../data/characters/stories';
import {formatGameDate,formatGameTime} from '../systems/calendar';
const status:Record<string,string>={active:'진행',pending:'대기',scheduled:'예약',completed:'완료',failed:'실패',cancelled:'취소',expired:'만료'};
/** Public character flavor and explicitly developer-only arc observation. No ordinary spoilers. */
export default function CharacterStories({id,ai,debug=false,showGraph=true}:{id:string;ai?:NpcAiEngine|null;debug?:boolean;showGraph?:boolean}){
 const [message,setMessage]=useState(''),p=studentProfileRegistry.get(id),rows=[...personalStoryContent,...(ai?.worldEvents?.definitions??[]).filter(d=>d.tags.includes('heroine-route')).map(d=>({code:d.personalScene!.id,name:d.name,id:d.id,ownerId:d.personalScene!.ownerId,deferred:undefined}))].filter(s=>s.ownerId===id),events=ai?.worldEvents;
 if(!p&&!rows.length)return null;
 const viewer=ai?.world.getCharacters().find(c=>c.kind==='player')?.id,view=ai?getPersonalStoryView(ai,id,viewer,debug):undefined,recall=ai&&viewer?getPersonalSceneRecall(ai,id,viewer):undefined;
 return <section className="ac-personal-stories" aria-label="고정 인물과 개인 서사"><h3>인물의 목소리</h3>{speechProfileRegistry.has(id)&&<p>{speechProfileRegistry.get(id)!.sentenceStyle}</p>}{p&&<><p>{p.concept}</p><p>{p.likes.join(' · ')}</p><details><summary>말투</summary><p style={{whiteSpace:'pre-line'}}>{p.speech}</p></details></>}
 {view&&view.knownCount>0&&<section aria-label="알려진 개인 서사"><h4>함께 알게 된 이야기</h4>{recall&&<blockquote>{recall.text}</blockquote>}{view.reflection&&<p>{view.reflection}</p>}<details><summary>알려진 기록 · {view.knownCount}건</summary>{view.scenes.slice().reverse().map(e=><article key={e.id}><h4>{e.title}</h4><small>{formatGameDate(e.at)} · {e.heard?'전해 들은 기록':status[e.status]}{e.autonomous?' · 자율 진행':''}</small>{e.choice&&<p>{e.choice}</p>}{e.response&&<blockquote>{e.response}</blockquote>}</article>)}</details><p className="ac-note">이 기록은 당신이 알게 된 경험입니다. 상대의 인생이나 관계가 끝났다는 뜻은 아닙니다.</p></section>}
 {showGraph&&events&&ai&&<StoryGraph key={id+String(debug)} engine={events} ai={ai} ownerId={id} viewerId={viewer} debug={debug}/>}
 {debug&&<details><summary>개인 서사 관찰 · 개발자 전용 ({rows.length})</summary><p>실제 사건·참가자·결과는 회차 저장의 세계 이벤트에서 조회합니다. 미충족 조건을 우회하지 않습니다.</p>{rows.map(row=>{const instances=events?.getInstances(true).filter(e=>e.definitionId===row.id&&e.participantCharacterIds.includes(id))??[],def=events?.definitions.find(d=>d.id===row.id);return <article key={row.id}><h4>{row.code} · {row.name}</h4>{def?.personalScene&&<details><summary>v2 장면·선택지 {def.personalScene.choices.length}개</summary>{def.personalScene.opening.map((l,i)=><p key={i}>{l.speaker}: {l.text}</p>)}{def.personalScene.choices.map(c=><p key={c.id}>{c.label} → {c.response} · {c.interactionId??c.mode}</p>)}</details>}<p>{row.deferred?'연동 보류 · '+row.deferred:instances.length?instances.map(e=>status[e.status]).join(' · '):'아직 발생하지 않음'}</p>{def&&<details><summary>조건과 결과</summary><ul>{def.participantRules.conditions.map((c,i)=><li key={i}>{JSON.stringify(c)} · {events!.evaluateCondition(c,{actorId:id})?'충족':'미충족 또는 상대 지정 필요'}</li>)}</ul></details>}{instances.map(e=><p key={e.id}>{formatGameDate(e.scheduledAt)} {formatGameTime(e.scheduledAt)} · {e.participantCharacterIds.map(n=>ai?.world.getCharacterReadSnapshot(n).name??n).join(' / ')} · {e.outcomeId??e.reason}</p>)}{events&&<button disabled={!!row.deferred} onClick={()=>{try{const result=events.requestEvent(row.id,{actorId:id});setMessage(result?'조건 확인 후 사건 시작 · '+result.id:'현재 조건·장소·참가자·재시도 예산 미충족');}catch(e){setMessage(String(e));}}}>현재 조건으로 테스트</button>}</article>;})}{message&&<p role="status">{message}</p>}</details>}
 </section>;
}
