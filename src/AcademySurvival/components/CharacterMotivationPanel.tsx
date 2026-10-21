import {useState,useSyncExternalStore} from 'react';
import type {MotivationEngine} from '../systems/motivationEngine';
import type {CharacterMotivationState} from '../types/motivation';
import {needs,goalRegistry} from '../data/motivations';
import {horizonNames,goalStatusNames} from '../systems/motivationPresentation';
import {useOptionalMotivation} from './motivationHooks';
import GoalDialog from './GoalDialog';
const noop=()=>()=>{},zero=()=>0;
export default function CharacterMotivationPanel({characterId,engine:provided,data,debug=false,owner=false}:{characterId:string;engine?:MotivationEngine|null;data?:CharacterMotivationState;debug?:boolean;owner?:boolean}){
 const shared=useOptionalMotivation(),engine=provided===null?null:provided??shared;useSyncExternalStore(engine?.subscribe??noop,engine?.getSnapshot??zero,zero);const state=engine?.hasCharacter(characterId)?engine.getCharacterState(characterId):data,[selected,setSelected]=useState<string|null>(null),reveal=debug||owner;
 const visible=state?.goals.filter(g=>reveal||g.visibility==='public')??[],current=selected?state?.goals.find(g=>g.id===selected):null;
 return <section className="ac-character-motivation" aria-label="캐릭터 욕구와 목표"><h3>욕구 · 목표</h3>{!state?<p>현재 욕구·목표 데이터 미설정</p>:<>{reveal||state.needs.visibility==='public'?<div className="ac-need-bars">{needs.map(n=><div key={n.id}><span>{n.name}</span><meter min={0} max={100} value={state.needs.values[n.id]}/><b>{state.needs.values[n.id]}</b>{debug&&<small>민감도 {state.needs.sensitivities[n.id]} · 긴급도 {engine?.hasCharacter(characterId)?engine.getNeedUrgency(characterId,n.id):'미계산'}</small>}</div>)}</div>:<p>NPC의 내면 정보는 비공개입니다.</p>}{(['long','medium','short'] as const).map(h=>visible.some(g=>goalRegistry.get(g.goalDefinitionId)?.horizon===h)&&<div key={h}><h4>{horizonNames[h]} 목표</h4>{visible.filter(g=>goalRegistry.get(g.goalDefinitionId)?.horizon===h).map(g=><button className="ac-goal-chip" key={g.id} onClick={()=>setSelected(g.id)}>{goalRegistry.get(g.goalDefinitionId)?.name} · {goalStatusNames[g.status]} · {g.progress}%</button>)}</div>)}{visible.length===0&&<p>{reveal?'등록된 목표 없음':'공개된 목표 없음'}</p>}{debug&&state.diagnostics.map(text=><p key={text}>{text}</p>)}</>}{current&&<GoalDialog id={current.goalDefinitionId} instance={current} debug={debug} onClose={()=>setSelected(null)}/>}</section>;
}
