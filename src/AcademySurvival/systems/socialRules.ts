import type {CharacterSocialIdentity,PositionHolding,TitleHolding,RandomSocialSlot} from '../types/social';
import type {Context} from '../types';
import {meets} from './conditions';
import {positions,titles} from '../data/social';
import {ORGANIZATIONS} from '../data/social/config';
export const positionRegistry=new Map(positions.map(p=>[p.id,p]));
export const titleRegistry=new Map(titles.map(t=>[t.id,t]));
export const emptySocial=():CharacterSocialIdentity=>({positions:[],titles:[]});
export function positionConflict(candidate:PositionHolding,owned:PositionHolding[]):string|null{
 const d=positionRegistry.get(candidate.definitionId),org=ORGANIZATIONS.find(o=>o.id===candidate.organizationId);
 if(!d||!org||org.type!==d.organizationType)return '직급 또는 소속 참조가 맞지 않습니다';
 for(const other of owned){if(other.organizationId!==candidate.organizationId)continue;
  if(other.definitionId===candidate.definitionId)return '동일 기관의 같은 직급 중복';
  if(d.exclusiveGroupId&&d.exclusiveGroupId===positionRegistry.get(other.definitionId)?.exclusiveGroupId)return '동일 소속·직위 슬롯의 배타 충돌';
 }
 return null;
}
export function normalizeRepresentatives(social:CharacterSocialIdentity):CharacterSocialIdentity{
 const positions=social.positions.filter(p=>positionRegistry.has(p.definitionId)),active=social.titles.filter(t=>t.state==='active'&&titleRegistry.has(t.definitionId));
 return {...social,primaryPositionId:positions.some(p=>p.definitionId===social.primaryPositionId)?social.primaryPositionId:positions[0]?.definitionId,primaryTitleId:active.some(t=>t.definitionId===social.primaryTitleId)?social.primaryTitleId:active[0]?.definitionId};
}
export function setRepresentative(social:CharacterSocialIdentity,kind:'position'|'title',id:string):CharacterSocialIdentity|null{
 if(kind==='position'?!social.positions.some(p=>p.definitionId===id):!social.titles.some(t=>t.definitionId===id&&t.state==='active'))return null;
 return {...social,[kind==='position'?'primaryPositionId':'primaryTitleId']:id};
}
export function removePosition(social:CharacterSocialIdentity,id:string,organizationId?:string){return normalizeRepresentatives({...social,positions:social.positions.filter(p=>p.definitionId!==id||(organizationId!==undefined&&p.organizationId!==organizationId))});}
export function changeTitleState(social:CharacterSocialIdentity,id:string,state:TitleHolding['state']){if(state==='revoked'&&!titleRegistry.get(id)?.loss.possible)return social;return normalizeRepresentatives({...social,titles:social.titles.map(t=>t.definitionId===id?{...t,state}:t)});}
// All holdings, never just representatives. No impact aggregation or automatic effect execution.
export function socialSources(social:CharacterSocialIdentity){return {positions:social.positions.flatMap(p=>{const definition=positionRegistry.get(p.definitionId);return definition?[{...p,definition}]:[];}),titles:social.titles.filter(t=>t.state==='active').flatMap(t=>{const definition=titleRegistry.get(t.definitionId);return definition?[{...t,definition}]:[];})};}
export function socialSlotPool(slot:RandomSocialSlot,context:Context,social:CharacterSocialIdentity){
 const candidates=slot.candidates.filter(c=>Number.isFinite(c.weight)&&c.weight>0&&(!c.condition||meets(c.condition,context))&&(slot.kind==='position'?!positionConflict({definitionId:c.entryId,organizationId:c.organizationId??''},social.positions):titleRegistry.has(c.entryId)&&!social.titles.some(t=>t.definitionId===c.entryId)));
 const total=candidates.reduce((sum,c)=>sum+c.weight,0);return candidates.map(c=>({...c,probability:c.weight/total}));
}
