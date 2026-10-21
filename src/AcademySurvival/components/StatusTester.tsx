import {useRef,useState} from 'react';
import type {BodyPartId,StatusDefinition,StatusInstance} from '../types/status';
import {statuses,statusRegistry} from '../systems/statusRegistry';
import {actionAvailability,applyStatus,makeInstance,removeStatus,resolveStatuses,validateInstance} from '../systems/statusApplication';
import {BODY_PARTS} from '../data/statuses/config';
import {EMPTY_CONTEXT} from '../data/config';
import {statusEffectText} from '../data/statuses/define';
function InstanceRow({instance,onChange,onRemove}:{instance:StatusInstance;onChange:(i:StatusInstance)=>void;onRemove:()=>void}){
 const d=statusRegistry.get(instance.definitionId)!;
 return <li className="ac-status-instance"><div><strong>{d.name}</strong><small>{instance.id} · {instance.stacks}중첩{instance.remainingHours!==undefined?` · ${instance.remainingHours}시간 남음`:''}</small></div>
 {d.stages.length>0&&<label>단계<select aria-label={`${instance.id} 단계`} value={instance.stageId} onChange={e=>onChange({...instance,stageId:e.target.value})}>{d.stages.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></label>}
 {d.bodyRequired&&<label>부위<select aria-label={`${instance.id} 부위`} value={instance.bodyPartId} onChange={e=>onChange({...instance,bodyPartId:e.target.value as BodyPartId})}>{d.allowedBodyParts.map(p=><option key={p} value={p}>{BODY_PARTS[p]}</option>)}</select></label>}
 <button onClick={onRemove} aria-label={`${instance.id} 제거`}>제거</button></li>;
}
export default function StatusTester({selected}:{selected:StatusDefinition}){
 const [instances,setInstances]=useState<StatusInstance[]>([]),[chosen,setChosen]=useState(''),[part,setPart]=useState(''),[stage,setStage]=useState(''),[message,setMessage]=useState('저장하지 않는 임시 캐릭터입니다. 시간·회복·변화는 자동 실행되지 않습니다.');
 const counter=useRef(0),definition=statusRegistry.get(chosen)||selected;
 const chosenPart=definition.allowedBodyParts.includes(part as BodyPartId)?part:definition.allowedBodyParts[0]??'';
 const chosenStage=definition.stages.some(s=>s.id===stage)?stage:definition.stages[0]?.id??'';
 const apply=(candidate:StatusInstance,editingId?:string)=>{const result=applyStatus(instances,candidate,editingId);setMessage(result.message);if(result.ok)setInstances(result.instances);};
 const add=()=>apply(makeInstance(definition.id,'test-'+(++counter.current),chosenStage||undefined,(chosenPart||undefined) as BodyPartId|undefined));
 const effects=resolveStatuses(instances,EMPTY_CONTEXT);
 const twoHanded=actionAvailability(instances,'two-handed-weapon',['left-hand','right-hand'],'grip');
 const vocal=actionAvailability(instances,'vocal-casting',[],'speech');
 return <section className="ac-status-tester" aria-label="개발용 상태 적용 테스트"><h3>DEBUG / 임시 상태 적용</h3><p className="ac-note">목록에서 선택한 상태를 바로 시험하거나 다른 상태를 함께 붙여 보세요. 구조 변화는 부위의 생체 손상을 교체합니다. 의체 제거는 같은 부위의 의체 손상도 제거합니다. 실제 시술·회복 엔진은 아닙니다.</p>
  <div className="ac-status-test-controls"><label>적용할 상태<select aria-label="테스트 상태" value={definition.id} onChange={e=>{setChosen(e.target.value);setPart('');setStage('');}}>{statuses.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></label><button onClick={()=>{setChosen(selected.id);setPart('');setStage('');}}>선택한 기록 사용</button>
   {definition.stages.length>0&&<label>단계<select aria-label="테스트 단계" value={chosenStage} onChange={e=>setStage(e.target.value)}>{definition.stages.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></label>}
   {definition.bodyRequired&&<label>신체 부위<select aria-label="테스트 부위" value={chosenPart} onChange={e=>setPart(e.target.value)}>{definition.allowedBodyParts.map(p=><option key={p} value={p}>{BODY_PARTS[p]}</option>)}</select></label>}
   <button onClick={add}>임시 적용</button><button onClick={()=>{setInstances([]);setMessage('임시 캐릭터 초기화 완료');}}>전체 초기화</button></div>
  <p role="status" className="ac-status-test-message">{message}</p><ul className="ac-status-instances">{instances.map(i=><InstanceRow key={i.id} instance={i} onChange={next=>apply(next,i.id)} onRemove={()=>{setInstances(removeStatus(instances,i.id));setMessage('제거 완료 · 의체의 의존 손상도 함께 정리');}}/>)}</ul>
  <div className="ac-status-action-result"><p>양손 무기: <b>{twoHanded.allowed?'금지 없음':'수행 불가'}</b>{twoHanded.reasons.join(' · ')}</p><p>음성 영창: <b>{vocal.allowed?'금지 없음':'수행 불가'}</b>{vocal.reasons.join(' · ')}</p><small>‘금지 없음’은 능력·장비·자원 조건의 충족이나 성공을 뜻하지 않습니다.</small></div>
  <details open><summary>적용 효과 · 단위별 공통 계산</summary><p className="ac-note">부위 효과는 별도 버킷입니다. 왼팔의 판정 불이익을 오른손이나 전신 판정에 자동 합산하지 않습니다.</p><pre>{JSON.stringify({common:effects.common,byBody:effects.byBody},null,2)}</pre></details><details open><summary>행동·부위 제한 / 자원 변화·고유 규칙 정의</summary><ul>{effects.extensions.map((row,index)=><li key={index}>{row.instanceId} {row.bodyPartId?BODY_PARTS[row.bodyPartId]:''} · {statusEffectText(row.effect)}{row.stacks>1?` ×${row.stacks}중첩`:''}</li>)}</ul><p className="ac-note">자원 변화율과 고유 규칙은 정의만 표시합니다. 자동 시간 처리·사건 실행은 하지 않습니다.</p></details>
  <p className="ac-valid">인스턴스 검증: {instances.every(i=>!validateInstance(i))?'통과':'오류'}</p>
 </section>;
}
