import type {NpcAiEngine} from './npcAi';
import {personalSceneRegistry} from '../data/characters/personalScenes';

const reflections:Record<string,[string,string,string]>={
 'fixed-serena':['함께 생각해도 마지막 선택은 자신의 몫으로 남는다.','서로 다른 길을 걸어도 각자의 판단은 존중할 수 있다.','누군가에게 도움을 청하는 일은 아직 쉽지만은 않다.'],
 'fixed-adelia':['경쟁하면서도 함께 공부할 수 있다는 경험이 남았다.','남의 기대와 다른 자신의 기준을 찾아가는 중이다.','지고 싶지 않은 마음과 쉬어야 하는 마음은 아직 부딪힌다.'],
 'fixed-lumiel':['누군가와 생각을 나누던 시간이 연구의 즐거움 곁에 남았다.','흥미를 좇는 속도는 스스로 정한다.','하고 싶은 공부와 감당할 수 있는 일의 사이에서 답을 찾는 중이다.'],
 'fixed-lisette':['장난을 받아주는 웃음과 경계를 말해주는 목소리를 함께 기억한다.','떠들지 않는 호의도 자신의 방식이 될 수 있다.','진심을 말했어도 오해가 전부 풀린 것은 아니다.'],
 'fixed-nia':['함께 겨룰 상대가 있다는 사실은 다음 훈련의 이유가 된다.','다음 승부를 위한 발걸음은 스스로 내딛는다.','승부를 좋아하는 마음과 패배의 무게를 함께 안고 있다.'],
 'fixed-camilla':['상대의 사정을 듣는 일도 절차의 일부가 될 수 있다.','원칙과 판단의 책임은 자신의 몫으로 남긴다.','규칙을 지키는 일과 사람을 이해하는 일이 늘 같지는 않다.'],
 'fixed-miel':['누군가를 챙기고 도움을 받던 시간이 함께 남았다.','모든 모임에 함께하지 않아도 관계는 이어질 수 있다.','웃는 얼굴 뒤의 부담은 한 번의 대화로 사라지지 않는다.'],
 'fixed-estelle':['실제로 함께한 경험은 계산표 밖의 근거가 되었다.','신중함을 버리지 않고 다른 판단의 여지도 남긴다.','좋은 말보다 다음 행동을 지켜봐야 할 때도 있다.'],
 'fixed-fiona':['함께 검토한 과정은 다음 시도를 위한 기록이 된다.','자신의 연구를 자신의 목소리로 설명할 날을 준비한다.','실패를 잊는 대신 안전하게 다시 질문하는 중이다.'],
 'fixed-noel':['사실을 말하는 방식도 상대와 함께 배울 수 있다.','많이 말하지 않아도 자신의 뜻을 정리해 전한다.','옳은 말과 전해진 마음 사이에 아직 간격이 있다.'],
 'fixed-brina':['함께 검토한 관점이 혼자 놓쳤던 부분을 남겼다.','도전하고 싶은 작품과 책임질 부분을 스스로 정한다.','다음 시도까지 해결되지 않은 질문도 남아 있다.'],
 'fixed-elisia':['도움을 주던 사람에게도 도움을 받을 자리가 생긴다.','자신이 할 수 있는 몫을 스스로 정하는 연습을 한다.','다른 사람을 걱정하는 만큼 자신을 돌보기는 아직 어렵다.'],
 'fixed-thea':['함께 확인한 자료와 동료의 말도 여정의 일부다.','호기심을 잃지 않고 자신의 준비를 점검한다.','가고 싶은 마음과 돌아올 책임 사이의 질문은 계속된다.'],
 'fixed-violetta':['서로 다른 표현을 맞추는 과정에도 기준이 필요하다.','자신의 기준을 지키며 새로운 표현을 바라본다.','높은 기준이 누군가에게 닿는 방식은 여전히 고민거리다.'],
 'fixed-iris':['말을 끝까지 들어준 시간이 다음 인사의 힘이 된다.','관계를 지키면서도 자신의 마음을 말할 자리를 찾는다.','서로의 거리를 알아가는 데는 시간이 더 필요하다.'],
};

/** Read-only, evidence-gated projection. Never resolves a story or consumes RNG. */
export function getPersonalStoryView(ai:NpcAiEngine,ownerId:string,viewerId?:string,debug=false){
 const engine=ai.worldEvents,now=ai.clock.getSnapshot();
 const rows=(engine?.getInstances(true)??[]).filter(e=>engine!.definitions.find(d=>d.id===e.definitionId)?.personalScene?.ownerId===ownerId);
 const scenes=rows.flatMap(event=>{
  const definition=engine!.definitions.find(d=>d.id===event.definitionId)!,scene=definition.personalScene!;
  const memory=viewerId?ai.knowledge?.getEventKnowledge(viewerId,event.id+'/scene-choice'):undefined;
  const completion=viewerId?ai.knowledge?.getEventKnowledge(viewerId,event.id+'/completed'):undefined;
  const ownedRecord=!!viewerId&&event.participantCharacterIds.includes(viewerId)&&!!event.sceneDecision?.acknowledgedBy;
  if(!debug&&!memory&&!completion&&!ownedRecord)return [];
  const direct=debug||ownedRecord||!!memory&&['direct','witnessed'].includes(memory.memory.source);
  const choice=direct?scene.choices.find(c=>c.id===event.sceneDecision?.choiceId):undefined;
  return [{id:event.id,title:scene.title,at:event.endedAt??event.occurredAt??event.scheduledAt,status:event.status,choice:choice?(event.sceneDecision?.autonomous?'자율적으로 선택한 방향':choice.label):undefined,response:choice?(event.sceneDecision?.autonomous?scene.autonomous[choice.mode==='engage'?'cooperative':choice.mode==='withdraw'?'strained':'independent']:choice.response):undefined,autonomous:direct?event.sceneDecision?.autonomous:undefined,heard:!direct,interactionId:direct?event.interactionId:undefined,outcome:direct?event.outcomeId:undefined}];
 }).sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id));
 const last=scenes.at(-1),completed=scenes.filter(e=>e.status==='completed');
 // A spoken preference alone cannot produce a successful cooperative conclusion.
 const cooperative=completed.some(e=>e.interactionId);
 const direction=last&&['failed','cancelled','expired'].includes(last.status)?'unresolved':cooperative?'cooperative':'independent';
 const reflection=completed.length>=2&&last&&now-last.at>=7*1440?reflections[ownerId]?.[direction==='cooperative'?0:direction==='independent'?1:2]:undefined;
 return {scenes:scenes.slice(-12),direction,reflection,sourceEventIds:scenes.map(e=>e.id),knownCount:scenes.length};
}

export function getPersonalSceneRecall(ai:NpcAiEngine,ownerId:string,viewerId:string){
 const view=getPersonalStoryView(ai,ownerId,viewerId);
 const row=view.scenes.filter(s=>!s.heard&&s.response&&ai.clock.getSnapshot()-s.at>=1440).at(-1);
 return row?{eventId:row.id,text:'기록에 남은 말 · “'+row.response+'”'}:undefined;
}
export {personalSceneRegistry};
