import {DEFAULT_ABSOLUTE_MINUTE} from './calendar';
import type {SavePort} from './playSession';
export const ENDING_COLLECTION_KEY='web-hub.academy.endings.v1';
export const ENDING_DEFINITIONS=[
 {id:'bad-00',category:'bad',title:'BAD END 00 — 닫혀버린 교문',description:'입학 평가에서 최소 합격 기준에 도달하지 못했다.',lines:['“유감스럽지만, 귀하는 본 아카데미의 입학 기준을 충족하지 못하였습니다.”','화려했던 입학식이 끝나고, 학생들은 하나둘 교문 안으로 사라졌다.','당신에게 허락된 자리는 없었다.','그렇게 아카데미 생활은 시작되기도 전에 끝났다.'],hidden:true},
 {id:'ten-years',category:'milestone',title:'열 번의 계절을 넘어',description:'한 회차에서 제국력 10년, 3,600일의 삶을 이어 갔다. 삶은 계속된다.',lines:['수많은 계절이 지나갔다.','이것은 끝이 아니라, 당신이 걸어온 길의 한 이정표다.'],hidden:true},
] as const;
export type EndingId=typeof ENDING_DEFINITIONS[number]['id'];
export interface EndingDiscovery {id:EndingId;firstDiscoveredAt:string;runId:string;worldMinute:number}
export interface EndingCollection {version:'academy-endings-v1';discoveries:EndingDiscovery[]}
export function readEndingCollection(storage:SavePort):EndingCollection{
 const raw=storage.getItem(ENDING_COLLECTION_KEY);if(!raw)return {version:'academy-endings-v1',discoveries:[]};
 let data:EndingCollection;try{data=JSON.parse(raw) as EndingCollection;}catch{throw Error('엔딩 도감 저장을 읽을 수 없습니다. 기존 기록은 덮어쓰지 않습니다.');}
 if(data?.version!=='academy-endings-v1'||!Array.isArray(data.discoveries)||data.discoveries.length>ENDING_DEFINITIONS.length||new Set(data.discoveries.map(d=>d.id)).size!==data.discoveries.length||data.discoveries.some(d=>!d||!ENDING_DEFINITIONS.some(e=>e.id===d.id)||typeof d.firstDiscoveredAt!=='string'||!Number.isFinite(Date.parse(d.firstDiscoveredAt))||typeof d.runId!=='string'||d.runId.length>500||!Number.isSafeInteger(d.worldMinute)||d.worldMinute<0))throw Error('엔딩 도감 저장이 손상되었습니다. 기존 기록은 덮어쓰지 않습니다.');
 return data;
}
export function discoverEnding(storage:SavePort,id:EndingId,runId:string,worldMinute:number,at=new Date().toISOString()){
 const data=readEndingCollection(storage);
 if(!ENDING_DEFINITIONS.some(e=>e.id===id)||!runId||runId.length>500||!Number.isSafeInteger(worldMinute)||worldMinute<0||!Number.isFinite(Date.parse(at)))throw Error('엔딩 발견 기록 오류');
 if(data.discoveries.some(d=>d.id===id))return data;
 data.discoveries.push({id,firstDiscoveredAt:at,runId,worldMinute});storage.setItem(ENDING_COLLECTION_KEY,JSON.stringify(data));return data;
}

/** Derived from real elapsed game minutes; never ends or advances a run. */
export function recordLongLifeMilestone(storage:SavePort,runId:string,minute:number){
 if(minute<DEFAULT_ABSOLUTE_MINUTE+3600*1440)return false;
 discoverEnding(storage,'ten-years',runId,minute);return true;
}
