import type {CharacterWorldIdentity,WorldIdentityRequest,RaceId} from '../types/worldLore';
import {WORLD_LORE_GENERATION as G,WORLD_LORE_VERSION,races,raceRegistry,subraceRegistry,polities,polityRegistry,lorePlaces,lorePlaceRegistry,regionRegistry,cultureRegistry} from '../data/worldLore';
import {seededRandom} from './seededRandom';
export function worldIdentityRequestIssues(request:WorldIdentityRequest):string[]{const errors:string[]=[];
 if(request.raceId&&request.raceId!=='random'&&!raceRegistry.has(request.raceId))errors.push('알 수 없는 종족');
 const sub=request.subraceId&&request.subraceId!=='random'?subraceRegistry.get(request.subraceId):undefined;if(request.subraceId&&request.subraceId!=='random'&&!sub)errors.push('알 수 없는 하위 계통');if(sub&&request.raceId&&request.raceId!=='random'&&sub.raceId!==request.raceId)errors.push('종족과 하위 계통 불일치');
 if(request.originPolityId&&request.originPolityId!=='random'&&!polityRegistry.has(request.originPolityId))errors.push('알 수 없는 출신 국가');
 const place=request.originSettlementId?lorePlaceRegistry.get(request.originSettlementId):undefined;if(request.originSettlementId&&!place)errors.push('알 수 없는 출신 정착지');if(place&&request.originPolityId&&request.originPolityId!=='random'&&place.polityId!==request.originPolityId)errors.push('출신 국가와 정착지 불일치');
 if(request.cultureIds&&(!Array.isArray(request.cultureIds)||request.cultureIds.length<1||request.cultureIds.length>4||new Set(request.cultureIds).size!==request.cultureIds.length||request.cultureIds.some(id=>!cultureRegistry.has(id))))errors.push('혼합 문화권 참조/개수 오류');
 if(request.cultureId&&request.cultureId!=='random'&&!cultureRegistry.has(request.cultureId))errors.push('알 수 없는 문화권');if(request.citizenshipPolityIds&&(new Set(request.citizenshipPolityIds).size!==request.citizenshipPolityIds.length||request.citizenshipPolityIds.some(id=>!polityRegistry.has(id))))errors.push('시민권 참조 또는 중복 오류');return errors;
}
export function generateWorldIdentity(seed:string,request:WorldIdentityRequest={}):CharacterWorldIdentity{
 const errors=worldIdentityRequestIssues(request);if(errors.length)throw Error(errors.join(' · '));const random=seededRandom(seed+'/world-lore-v1'),pick=<T,>(a:readonly T[])=>a[Math.floor(random()*a.length)],sub=request.subraceId&&request.subraceId!=='random'?subraceRegistry.get(request.subraceId):undefined;
 const raceId:RaceId=sub?.raceId??(request.raceId&&request.raceId!=='random'?request.raceId:pick(races.flatMap(r=>Array.from({length:G.raceWeights[r.id]},()=>r.id))));
 const originPlace=request.originSettlementId?lorePlaceRegistry.get(request.originSettlementId):undefined;
 const explicit=request.originPolityId&&request.originPolityId!=='random'?polityRegistry.get(request.originPolityId):undefined;
 // All countries retain nonzero eligibility; these are tunable background frequencies, not racial rules.
 const weighted=polities.flatMap(p=>Array.from({length:p.centralRaceIds.includes(raceId)?G.centralRaceCountryWeight:G.otherRaceCountryWeight},()=>p));const polity=explicit??(originPlace?.polityId?polityRegistry.get(originPlace.polityId)!:pick(weighted));
 const places=lorePlaces.filter(p=>p.polityId===polity.id&&['city','port','village','meeting_ground'].includes(p.kind)),place=originPlace??pick(places),race=raceRegistry.get(raceId)!;
 return {version:WORLD_LORE_VERSION,raceId,...(sub||race.subraceIds.length?{subraceId:sub?.id??pick(race.subraceIds)}:{}),originPolityId:polity.id,originRegionId:place.regionId,originSettlementId:place.id,cultureIds:request.cultureIds?[...request.cultureIds]:[request.cultureId&&request.cultureId!=='random'?request.cultureId:pick(polity.cultureIds)],citizenshipPolityIds:request.citizenshipPolityIds?[...request.citizenshipPolityIds]:[polity.id]};
}
/** Missing legacy identity stays unset. No race/citizenship inference from names, jobs or morality. */
export function characterWorldIdentityIssues(profile:CharacterWorldIdentity|undefined):string[]{
 if(profile===undefined)return [];if(!profile||profile.version!==WORLD_LORE_VERSION)return ['세계관 정체성 버전 오류'];const errors:string[]=[];
 if(profile.raceId&&!raceRegistry.has(profile.raceId))errors.push('종족 참조 오류');if(profile.subraceId&&(!subraceRegistry.has(profile.subraceId)||subraceRegistry.get(profile.subraceId)!.raceId!==profile.raceId))errors.push('하위 계통 참조 오류');
 if(profile.originPolityId&&!polityRegistry.has(profile.originPolityId))errors.push('출신 국가 참조 오류');if(profile.originRegionId&&!regionRegistry.has(profile.originRegionId))errors.push('출신 지역 참조 오류');
 const place=profile.originSettlementId?lorePlaceRegistry.get(profile.originSettlementId):undefined;if(profile.originSettlementId&&!place)errors.push('출신 정착지 참조 오류');if(place&&(place.regionId!==profile.originRegionId||place.polityId!==profile.originPolityId))errors.push('출신지 참조 불일치');if(profile.originRegionId&&profile.originPolityId&&!regionRegistry.get(profile.originRegionId)?.polityIds.includes(profile.originPolityId))errors.push('국가·지역 소속 불일치');
 if(!Array.isArray(profile.cultureIds)||new Set(profile.cultureIds).size!==profile.cultureIds.length||profile.cultureIds.some(id=>!cultureRegistry.has(id)))errors.push('문화권 참조 오류');if(!Array.isArray(profile.citizenshipPolityIds)||new Set(profile.citizenshipPolityIds).size!==profile.citizenshipPolityIds.length||profile.citizenshipPolityIds.some(id=>!polityRegistry.has(id)))errors.push('시민권 참조 오류');return errors;
}
export function describeWorldIdentity(profile:CharacterWorldIdentity|undefined){if(!profile)return null;return {race:profile.raceId?raceRegistry.get(profile.raceId)?.name:'미설정',subrace:profile.subraceId?subraceRegistry.get(profile.subraceId)?.name:'미설정',origin:profile.originSettlementId?lorePlaceRegistry.get(profile.originSettlementId)?.name:profile.originRegionId?regionRegistry.get(profile.originRegionId)?.name:'미설정',polity:profile.originPolityId?polityRegistry.get(profile.originPolityId)?.name:'미설정',cultures:profile.cultureIds.map(id=>cultureRegistry.get(id)!.name),citizenships:profile.citizenshipPolityIds.map(id=>polityRegistry.get(id)!.name),lifespan:profile.raceId?raceRegistry.get(profile.raceId)?.lifespan:undefined};}
export const worldRaceIds=races.map(r=>r.id);
