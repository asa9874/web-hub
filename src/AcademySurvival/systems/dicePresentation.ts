import {combatTechniques} from '../data/combat';
import type {CheckResult} from '../types/check';
import type {PlaySession} from './playSession';
import type {CombatChoice} from '../types/combat';
export type DiceFrequency='always'|'important'|'result';
export interface DiceSettings {frequency:DiceFrequency;manual:boolean;fast:boolean}
export const DEFAULT_DICE_SETTINGS:DiceSettings={frequency:'important',manual:true,fast:false};
export interface DiceReadout {id:string;title:string;sides:20|100;value:number;outcome:string;lines:{label:string;value:string}[]}
const outcomes={great_success:'대성공',success:'성공',partial_success:'부분 성공',failure:'실패',critical_failure:'치명적 실패'};
/** Presentation only: the engine's integer sample is shown on a D20 without resampling. */
export function checkDice(result:CheckResult,title:string):DiceReadout{
 const raw=result.rawLuckRoll??result.luckRoll;
 if(!Number.isInteger(raw)||raw< -10||raw>9)throw Error('표시할 공통 판정 난수 범위 오류');
 return {id:result.id,title,sides:20,value:raw+11,outcome:outcomes[result.outcome],lines:[
  {label:'능력 점수',value:String(result.actor.abilityScore)},{label:'숙련 점수',value:String(result.actor.proficiencyScore)},{label:'기프트·상태·상황 등 합산 보정',value:String(result.actor.modifierTotal)},
  {label:'주사위 운 보정 · 눈 − 11',value:String(raw)},...(result.luckRoll!==raw?[{label:'기프트 적용 후 운 보정',value:String(result.luckRoll)}]:[]),
  {label:'최종 내 판정 점수',value:String(result.actor.score+result.luckRoll)},
  ...(result.targetId?[{label:'대항 판정',value:'상대의 비공개 능력·보정은 숨김'}]:[{label:'목표 점수',value:String(result.targetScore)}]),
  ...(result.cost?[{label:'부분 성공의 대가',value:result.cost}]:[]),...(result.consequence?[{label:'결과',value:result.consequence}]:[])]};
}
/** For an already recorded, player-visible percentile draw. Never infers a winner from the face. */
export function percentileDice(id:string,title:string,roll:number,resolvedLabel:string):DiceReadout{
 if(!id||!Number.isFinite(roll)||roll<0||roll>=1)throw Error('기록된 백분위 난수 범위 오류');
 return {id,title,sides:100,value:Math.floor(roll*100)+1,outcome:resolvedLabel,lines:[{label:'기록된 원본 추첨값',value:roll.toFixed(6)},{label:'표시 방식',value:'D100 눈은 원본 값을 100구간으로 표시 · 결과 재판정 없음'}]};
}
export function readDiceSettings(raw:string|null):DiceSettings{try{const r=JSON.parse(raw??'null');return r&&['always','important','result'].includes(r.frequency)&&typeof r.manual==='boolean'&&typeof r.fast==='boolean'?{frequency:r.frequency,manual:r.manual,fast:r.fast}:{...DEFAULT_DICE_SETTINGS};}catch{return {...DEFAULT_DICE_SETTINGS};}}
/** Commit the existing command exactly once; expose only this player's newly recorded checks. */
export async function executeCombatDice(session:PlaySession,choice:CombatChoice):Promise<DiceReadout[]>{
 const engine=session.world.runtime.ai.getCombat(),battle=engine?.getActive(session.playerId);if(!engine||!battle)throw Error('진행 중인 전투 없음');
 const seen=new Set(battle.logs.flatMap(l=>l.check?[l.check.id]:[]));await session.combatTurn(choice);
 return engine.getBattle(battle.id).logs.flatMap(l=>l.actorId===session.playerId&&l.check&&!seen.has(l.check.id)?[checkDice(l.check,l.message)]:[]);
}

export const isDiceCombatChoice=(choice:CombatChoice)=>{const kind=combatTechniques.find(t=>t.id===choice.techniqueId)?.kind;return !!kind&&['strike','observe','escape','heal'].includes(kind);};
