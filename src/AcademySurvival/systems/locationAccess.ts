import type {Character} from '../types/character';
import type {AccessRule,MovementMode} from '../types/location';
import {organizationWithin} from './organizations';
import {meets} from './conditions';
import {assertAbsoluteMinute,MINUTES_PER_DAY} from './calendar';
import {locationCatalog} from './locationRegistry';
import type {LocationCatalog} from './locationRegistry';
import {MOVEMENT_V1} from '../data/locations/config';
import {statusRegistry} from './statusRegistry';
export function evaluateAccessRule(character:Character,r:AccessRule,time:number):boolean{
 assertAbsoluteMinute(time);
 switch(r.type){
 case 'time':{const minute=time%MINUTES_PER_DAY,parse=(s:string)=>Number(s.slice(0,2))*60+Number(s.slice(3)),start=parse(r.start),end=parse(r.end);return start<end?minute>=start&&minute<end:start>end?minute>=start||minute<end:false;}
 case 'position':return character.positions.some(p=>r.positionIds.includes(p.definitionId)&&(!r.organizationId||organizationWithin(p.organizationId,r.organizationId)));
 case 'organization':return character.affiliations.some(a=>r.organizationIds.some(id=>organizationWithin(a.organizationId,id)));
 case 'permission':return character.accessPermissions?.includes(r.permissionId)??false;
 case 'condition':return meets(r.condition,{stats:character.stats,traits:character.traitIds,gifts:character.giftIds,flags:character.accessPermissions??[],tags:character.accessTags??[]});
 case 'all':return r.rules.every(rule=>evaluateAccessRule(character,rule,time));
 case 'any':return r.rules.some(rule=>evaluateAccessRule(character,rule,time));
 case 'not':return !evaluateAccessRule(character,r.rule,time);
 }
}
export const accessDenials=(c:Character,rules:AccessRule[],time:number)=>rules.filter(r=>!evaluateAccessRule(c,r,time)).map(r=>r.description);
export function canEnterLocation(c:Character,id:string,time:number,catalog:LocationCatalog=locationCatalog,from?:string){
 const already=new Set(from?catalog.getLocationPath(from).map(l=>l.id):[]);
 const reasons=catalog.getLocationPath(id).filter(l=>!already.has(l.id)).flatMap(l=>accessDenials(c,l.accessRules,time).map(reason=>`${l.name}: ${reason}`));return {ok:!reasons.length,reasons};
}
export function canTraverseConnection(c:Character,id:string,time:number,catalog:LocationCatalog=locationCatalog){const edge=catalog.edges.get(id);if(!edge)return {ok:false,reasons:['존재하지 않는 이동 연결']};const reasons=accessDenials(c,edge.accessRules,time);return {ok:!reasons.length,reasons};}
export function mobilityReasons(c:Character,mode:MovementMode){
 const reasons:string[]=[];if(!['walk','run','ride','teleport'].includes(mode))return ['지원하지 않는 이동 방식'];if(mode!=='walk'&&!c.movementModes?.includes(mode))reasons.push(`${mode} 이동 수단·사용 자격이 없습니다.`);
 for(const s of c.statuses){const d=statusRegistry.get(s.definitionId);if(!d){reasons.push(`상태 참조 오류: ${s.definitionId}`);continue;}const effects=[...d.effects,...(d.stages.find(stage=>stage.id===s.stageId)?.effects??[])];for(const e of effects){if(e.type==='BLOCK_ACTION'&&['walk','locomotion','movement',...(mode==='run'?['sprint']:[])].includes(e.action)||e.type==='BODY_FUNCTION'&&['locomotion','all'].includes(e.function)&&e.mode==='disabled'&&(!s.bodyPartId||['whole','left-leg','right-leg','left-foot','right-foot'].includes(s.bodyPartId)))reasons.push(e.reason);}}
 return [...new Set(reasons)];
}
export function travelFactor(c:Character,mode:MovementMode){
 const agility=1-Math.max(-MOVEMENT_V1.agilityLimit,Math.min(MOVEMENT_V1.agilityLimit,((c.stats.AGI??50)-MOVEMENT_V1.agilityBaseline)*MOVEMENT_V1.agilityPerPoint));
 const modifiers=new Map<string,number>();for(const s of c.statuses){if(s.definitionId==='status-muscle-soreness'||s.definitionId==='status-fracture'){if(s.bodyPartId&&!['whole','torso','left-leg','right-leg','left-foot','right-foot'].includes(s.bodyPartId))continue;}const value=MOVEMENT_V1.statusMultipliers[s.definitionId];if(value)modifiers.set(s.definitionId,value);}
 return MOVEMENT_V1.mode[mode]*agility*[...modifiers.values()].reduce((a,b)=>a*b,1);
}
