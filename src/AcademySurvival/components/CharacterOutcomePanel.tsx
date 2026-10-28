import {useSyncExternalStore} from 'react';
import {useOptionalAi} from './aiHooks';
import type {NpcAiEngine} from '../systems/npcAi';
import {interactionRegistry} from '../data/interactions';
import {statRegistry,proficiencyRegistry} from '../systems/knowledgeRegistry';
const noop=()=>()=>{},zero=()=>0;
export default function CharacterOutcomePanel({id,engine:provided,debug=false}:{id:string;engine?:NpcAiEngine|null;debug?:boolean}){
 const shared=useOptionalAi(),engine=provided===null?null:provided??shared,interactions=engine?.interactions,effects=interactions?.effects;
 useSyncExternalStore(effects?.subscribe??noop,effects?.getSnapshot??zero,zero);useSyncExternalStore(interactions?.subscribe??noop,interactions?.getSnapshot??zero,zero);
 if(!effects||!engine?.hasCharacter(id)||!debug)return null;
 const growth=effects.getGrowth(id),current=interactions?.getActive(id),rows=[...Object.entries(growth.statXp).map(([key,n])=>[statRegistry.get(key as never)?.name??key,n]),...Object.entries(growth.proficiencyXp).map(([key,n])=>[proficiencyRegistry.get(key)?.name??key,n])];
 return <section aria-label="캐릭터 행동 결과"><h3>상호작용·성장 기록 <small>개발자</small></h3><p>{current?`${interactionRegistry.get(current.definitionId)?.name} · ${current.status}`:'공동 활동 없음'}</p><p>누적 잔여 XP: {rows.length?rows.map(([name,n])=>`${name} ${n}`).join(' · '):'아직 없음'}</p><details><summary>최근 실제 결과</summary>{effects.getCharacterActionHistory(id).slice(-8).reverse().map(row=><p key={row.outcome.id}>{row.outcome.outcomeType}: {row.changes.map(c=>`${c.field} ${c.before} → ${c.after}`).join(' · ')||'수치 변경 없음'}</p>)}</details></section>;
}
