import type {NpcAiEngine} from './npcAi';
import type {WorldEventEngine} from './worldEvents';
import type {WorldEventDefinition,WorldEventInstance,EventCondition} from '../types/worldEvent';
import {personalStoryContent} from '../data/characters/stories';
import {getPersonalStoryView} from './personalStories';

export interface StoryGraphNode {
 id:string;title:string;state:string;importance:number;kind:string;at?:number;year?:number;
 definitionId?:string;instanceId?:string;place?:string;participants?:string[];result?:string;
 choice?:string;response?:string;reason?:string;memories?:{id:string;source:string;confidence:number}[];
 conditions?:{text:string;met:boolean}[];rules?:unknown;audit?:WorldEventInstance['branchAudit'];
}
export interface StoryGraphEdge {id:string;source:string;target:string;kind:string;label:string;actual:boolean}
export interface StoryGraph {nodes:StoryGraphNode[];edges:StoryGraphEdge[];scope:'player'|'developer'}
export function storyDefinitions(engine:WorldEventEngine,ownerId?:string){
 const authored=new Set(personalStoryContent.filter(r=>!ownerId||r.ownerId===ownerId).map(r=>r.id));
 return engine.definitions.filter(d=>ownerId?d.personalScene?.ownerId===ownerId||authored.has(d.id)||d.participantRules.actorId===ownerId&&d.category==='personal_story':d.category==='personal_story'||d.tags.includes('academy-story')||d.category==='world');
}
const references=(c:EventCondition,gate='AND'):{id:string;gate:string}[]=>c.type==='event'||c.type==='scene_choice'?[{id:c.definitionId,gate}]:c.type==='all'||c.type==='any'?c.conditions.flatMap(row=>references(row,c.type==='all'?'AND':'OR')):c.type==='not'?references(c.condition,'NOT'):c.type==='target'?references(c.condition,gate):[];
/** Definition links are possibilities, never fabricated historical relations. */
export function designStoryEdges(definitions:WorldEventDefinition[]):StoryGraphEdge[]{
 const ids=new Set(definitions.map(d=>d.id)),edges=new Map<string,StoryGraphEdge>();
 const add=(source:string,target:string,kind:string,label:string)=>{if(source===target||!ids.has(source)||!ids.has(target))return;const id=JSON.stringify([source,target,kind,label]);edges.set(id,{id,source,target,kind,label,actual:false});};
 for(const d of definitions){
  for(const c of [...d.participantRules.conditions,...d.triggerRules.flatMap(t=>t.conditions),...d.stages.flatMap(s=>[...s.entryConditions,...s.completionConditions]),...d.outcomeRules.flatMap(o=>o.conditions),...(d.personalScene?.choices.flatMap(c=>c.conditions??[])??[])])for(const ref of references(c))add(ref.id,d.id,ref.gate==='NOT'?'blocks':'requires',ref.gate+' 조건');
  for(const f of d.followUpRules){const target=f.consequence?.redirectDefinitionId??f.definitionId;add(d.id,target,f.relation,`${f.consequence?.kind??f.relation} · ${Math.round(f.probability*100)}%`);for(const c of [...f.conditions,...(f.consequence?.activationConditions??[])])for(const ref of references(c))add(ref.id,target,ref.gate==='NOT'?'blocks':'requires',ref.gate+' 후속 조건');for(const id of f.join?.definitionIds??[])add(id,target,'contributes',f.join!.mode==='all'?'AND 합류':'OR 합류');}
 }
 return [...edges.values()];
}
const kindOf=(d:WorldEventDefinition)=>d.personalScene?.kind??(d.category==='world'?'world':d.category==='personal_story'?'personal':d.category);
const recordNode=(engine:WorldEventEngine,e:WorldEventInstance,d:WorldEventDefinition):StoryGraphNode=>({id:e.id,instanceId:e.id,definitionId:d.id,title:d.name,state:e.status,importance:d.importance,kind:kindOf(d),at:e.occurredAt??e.scheduledAt,place:e.locationId?engine.world.catalog.getLocation(e.locationId).name:undefined,participants:e.participantCharacterIds.map(id=>engine.world.getCharacterReadSnapshot(id).name),result:e.outcomeId?d.outcomeRules.find(o=>o.id===e.outcomeId)?.name:undefined,reason:e.reason,audit:e.branchAudit});
export function getDeveloperStoryGraph(engine:WorldEventEngine,ownerId?:string,mode:'design'|'run'='design'):StoryGraph{
 const defs=storyDefinitions(engine,ownerId),byDef=new Map(defs.map(d=>[d.id,d])),instances=engine.getInstances(true).filter(e=>byDef.has(e.definitionId));
 if(mode==='design'){
  const latest=new Map<string,WorldEventInstance>();for(const e of instances)latest.set(e.definitionId,e);
  const viewer=engine.world.getCharacters().find(c=>c.kind==='player')?.id,opportunities=ownerId&&viewer?new Set(engine.getPersonalOpportunities(ownerId,viewer).map(d=>d.id)):new Set<string>();
  return {scope:'developer',nodes:defs.map(d=>{const last=latest.get(d.id),checks=d.participantRules.conditions.map(c=>({text:JSON.stringify(c),met:engine.evaluateCondition(c,{actorId:ownerId??d.participantRules.actorId,targetId:viewer})}));return {id:d.id,definitionId:d.id,title:d.name,state:last?.status??(opportunities.has(d.id)?'available':d.participantRules.conditions.some(c=>c.type==='external')?'deferred':checks.every(c=>c.met)?'unoccurred':'locked'),importance:d.importance,kind:kindOf(d),at:last?.occurredAt,conditions:checks,rules:{participants:d.participantRules,triggers:d.triggerRules,outcomes:d.outcomeRules,followUps:d.followUpRules,choices:d.personalScene?.choices},reason:last?.reason};}),edges:designStoryEdges(defs)};
 }
 const nodes=instances.map(e=>recordNode(engine,e,byDef.get(e.definitionId)!)),edges:StoryGraphEdge[]=[];
 for(const e of instances)for(const plan of e.consequences??[]){if(!byDef.has(plan.definitionId)||plan.status==='occurred')continue;const d=byDef.get(plan.definitionId)!,id=`opportunity/${e.id}/${plan.ruleId}`;nodes.push({id,definitionId:d.id,title:d.name,state:plan.status==='waiting'?'waiting':plan.status,importance:d.importance,kind:kindOf(d),at:plan.earliestAt,reason:plan.reason});edges.push({id,source:e.id,target:id,kind:plan.status==='blocked'?'blocks':'enables',label:'후속 기회',actual:false});}
 const ids=new Set(nodes.map(n=>n.id));for(const r of engine.getRelations(true))if(ids.has(r.sourceEventId)&&ids.has(r.targetEventId))edges.push({id:r.id,source:r.sourceEventId,target:r.targetEventId,kind:r.type,label:r.reason,actual:true});
 return {scope:'developer',nodes,edges};
}
/** Whitelist projection: no definitions, future paths, private participants or internal rolls. */
export function getPlayerStoryGraph(ai:NpcAiEngine,ownerId:string,viewerId:string):StoryGraph{
 const engine=ai.worldEvents;if(!engine||!ai.world.hasCharacter(viewerId))return {scope:'player',nodes:[],edges:[]};
 const view=getPersonalStoryView(ai,ownerId,viewerId),known=new Set(view.sourceEventIds),defs=new Map(storyDefinitions(engine,ownerId).map(d=>[d.id,d]));
 const nodes:StoryGraphNode[]=[];
 for(const e of engine.getInstances(true)){
  const d=defs.get(e.definitionId);if(!d)continue;
  const choiceMemory=ai.knowledge?.getEventKnowledge(viewerId,e.id+'/scene-choice'),completion=ai.knowledge?.getEventKnowledge(viewerId,e.id+'/completed'),memory=choiceMemory??completion;
  const ownActive=e.status==='active'&&e.participantCharacterIds.includes(viewerId)&&e.occurredAt!==undefined;
  if(!known.has(e.id)&&!ownActive&&!memory)continue;
  const direct=ownActive||e.participantCharacterIds.includes(viewerId)&&!!e.sceneDecision?.acknowledgedBy||!!memory&&['direct','witnessed'].includes(memory.memory.source);
  const decision=direct?d.personalScene?.choices.find(c=>c.id===e.sceneDecision?.choiceId):undefined;
  nodes.push({id:e.id,instanceId:e.id,title:d.name,state:direct?e.status:'heard',importance:d.importance,kind:kindOf(d),at:direct?e.occurredAt??e.scheduledAt:memory?.memory.createdAt,place:direct&&e.locationId?engine.world.catalog.getLocation(e.locationId).name:undefined,participants:direct?e.participantCharacterIds.map(id=>engine.world.getCharacterReadSnapshot(id).name):undefined,result:direct&&e.outcomeId?d.outcomeRules.find(o=>o.id===e.outcomeId)?.name:undefined,choice:decision&&!e.sceneDecision?.autonomous?decision.label:undefined,response:decision&&!e.sceneDecision?.autonomous?decision.response:undefined,memories:memory?[{id:memory.memory.id,source:memory.memory.source,confidence:memory.memory.confidence}]:[],reason:direct?undefined:'전해 들은 기록입니다. 실제 결과와 선택은 확인되지 않았습니다.'});
 }
 const directIds=new Set(nodes.filter(n=>n.state!=='heard').map(n=>n.id)),edges=engine.getRelations(true).filter(r=>directIds.has(r.sourceEventId)&&directIds.has(r.targetEventId)).map(r=>({id:r.id,source:r.sourceEventId,target:r.targetEventId,kind:r.type,label:'실제 사건 연결',actual:true}));
 return {scope:'player',nodes,edges};
}
/** Stable layered layout; merges share one node. Cyclic design references use a bounded fallback. */
export function layoutStoryGraph(nodes:Pick<StoryGraphNode,'id'|'at'>[],edges:Pick<StoryGraphEdge,'source'|'target'>[]){
 const ids=new Set(nodes.map(n=>n.id)),remaining=new Map(nodes.map(n=>[n.id,0])),children=new Map<string,string[]>(),levels=new Map(nodes.map(n=>[n.id,0]));
 const pairs=new Set<string>();for(const e of edges){const pair=e.source+'\0'+e.target;if(!ids.has(e.source)||!ids.has(e.target)||pairs.has(pair))continue;pairs.add(pair);remaining.set(e.target,remaining.get(e.target)!+1);children.set(e.source,[...(children.get(e.source)??[]),e.target]);}
 const ready=nodes.filter(n=>remaining.get(n.id)===0).map(n=>n.id).sort(),done=new Set<string>();
 while(ready.length){const id=ready.shift()!;done.add(id);for(const child of children.get(id)??[]){levels.set(child,Math.max(levels.get(child)!,levels.get(id)!+1));remaining.set(child,remaining.get(child)!-1);if(remaining.get(child)===0)ready.push(child);}}
 let fallback=Math.max(0,...levels.values())+1;for(const n of nodes)if(!done.has(n.id))levels.set(n.id,fallback++);
 const groups=new Map<number,typeof nodes>();for(const n of [...nodes].sort((a,b)=>levels.get(a.id)!-levels.get(b.id)!||(a.at??0)-(b.at??0)||a.id.localeCompare(b.id))){const level=levels.get(n.id)!;groups.set(level,[...(groups.get(level)??[]),n]);}
 // Keep a causal depth on one horizontal layer; never wrap siblings into a card grid.
 const widest=Math.max(1,...[...groups.values()].map(g=>g.length)),width=Math.max(600,widest*180+80);
 const positions=new Map<string,{x:number;y:number}>();
 const parents=new Map<string,string[]>();for(const e of edges)if(ids.has(e.source)&&ids.has(e.target))parents.set(e.target,[...(parents.get(e.target)??[]),e.source]);
 let row=0;for(const group of groups.values()){
  const center=(id:string)=>{const known=(parents.get(id)??[]).flatMap(id=>positions.has(id)?[positions.get(id)!.x]:[]);return known.length?known.reduce((a,b)=>a+b,0)/known.length:width/2;};
  group.sort((a,b)=>center(a.id)-center(b.id)||a.id.localeCompare(b.id));
  const left=(width-(group.length-1)*180)/2;
  group.forEach((n,i)=>positions.set(n.id,{x:left+i*180,y:90+row*205}));row++;
 }
 return {positions,width,height:Math.max(320,row*205+20),cyclicFallback:nodes.length-done.size};
}
