import {createLifePacing} from './lifePacing';
import type {PacingSave} from './lifePacing';
import {STUDENT_JOBS} from '../data/economy';
import {evaluateAdmission,assertStartingProfile,admissionClassForScore} from './admission';
import type {AdmissionSave} from '../types/admission';
import {DEFAULT_PLAYER_POLICY} from '../types/player';
import {createPlayerCharacter,createPlayerLife} from './playerLife';
import type {PlayerLifeSave} from './playerLife';
import type {PlayerCreation} from '../types/player';
import {createWorldSimulation} from './worldSimulation';
import type {WorldSimulationSave} from '../types/worldSimulation';
import {getPlayerView,getPlayerRecords} from './playerViews';
import type {PlayerRecord} from './playerViews';
import {DEFAULT_ABSOLUTE_MINUTE,assertAbsoluteMinute} from './calendar';
import type {CombatChoice} from '../types/combat';

export interface PlaySave {pacing?:PacingSave;admission?:AdmissionSave;version:'academy-play-v0.5';savedAt:string;playerId:string;world:WorldSimulationSave;playerLife?:PlayerLifeSave;journal?:PlayerRecord[];journalEpoch?:number;combatMode?:'automatic'|'manual'}
export interface SavePort {getItem:(key:string)=>string|null;setItem:(key:string,value:string)=>void}
export const PLAY_SLOT_PREFIX='web-hub.academy.play.v0.5.slot.';
const key=(slot:number)=>{if(!Number.isInteger(slot)||slot<1||slot>3)throw Error('저장 슬롯은1~3입니다.');return PLAY_SLOT_PREFIX+slot;};
export function listPlaySlots(storage:SavePort){return [1,2,3].map(slot=>{try{const raw=storage.getItem(key(slot));if(!raw)return {slot,empty:true};const data=JSON.parse(raw) as PlaySave;if(data?.version!=='academy-play-v0.5'||!data.world?.world?.world||typeof data.savedAt!=='string'||typeof data.world.name!=='string')throw Error('지원하지 않거나 손상된 저장');assertAbsoluteMinute(data.world.world.world.absoluteMinute);return {slot,empty:false,savedAt:data.savedAt,minute:data.world.world.world.absoluteMinute,name:data.world.name};}catch(e){return {slot,empty:false,error:e instanceof Error?e.message:String(e)};}});}
export function readPlaySave(storage:SavePort,slot:number):PlaySave{const raw=storage.getItem(key(slot));if(!raw)throw Error('비어 있는 저장 슬롯입니다.');return JSON.parse(raw) as PlaySave;}

/** Player-side command facade over the same world authority used by all providers. */
export function createPlaySession(options:{enableFixedStudents?:boolean;seed?:string;count?:number;player?:PlayerCreation;save?:PlaySave}={}){
 const saved=options.save;
 if(options.save!==undefined&&(!saved||saved.version!=='academy-play-v0.5'||typeof saved.playerId!=='string'||!saved.world))throw Error('지원하지 않거나 손상된 플레이 저장');
 if(saved&&(saved.playerLife===null||!saved.playerLife&&saved.world.world.ai.playerPolicies?.some(p=>p.characterId===saved.playerId)))throw Error('플레이어 생활 제어 저장이 누락되었습니다.');
 if(saved?.combatMode!==undefined&&!['automatic','manual'].includes(saved.combatMode))throw Error('전투 조작 설정 오류');
 const epoch=(saved?.journalEpoch??-1)+1;
 if(!Number.isSafeInteger(epoch)||epoch<0||saved?.journal&&(!Array.isArray(saved.journal)||saved.journal.length>200||new Set(saved.journal.map(r=>r.id)).size!==saved.journal.length||saved.journal.some(r=>!r||typeof r.id!=='string'||typeof r.source!=='string'||typeof r.message!=='string'||!['movement','information'].includes(r.kind)||!Number.isSafeInteger(r.at)||r.at<0||r.at>saved.world.world.world.absoluteMinute)))throw Error('플레이 기록 저장 형식 오류');
 if(!saved&&(!Number.isInteger(options.count??5)||(options.count??5)<1||(options.count??5)>(options.player?100:20)))throw Error('초기 NPC는 생활 모드1~100명, 기존 관찰 모드1~20명입니다.');
 const newPlayer=!saved&&options.player?createPlayerCharacter(options.seed??'play-v1',options.player):undefined;
 if(newPlayer&&options.player?.startingProfile&&!evaluateAdmission(newPlayer).passed)throw Error('입학 기준 미달: 입학 결과 화면에서 새 회차를 시작하세요.');
 const world=saved?createWorldSimulation({initial:saved.world}):createWorldSimulation({enableFixedStudents:options.enableFixedStudents??!!options.player,enableAcademics:!!options.player,playerPolicy:options.player?(options.player.policy??DEFAULT_PLAYER_POLICY):undefined,playerCharacter:newPlayer,name:options.player?'아카데미 생활 v1':'관찰 플레이 v0.5',seed:options.seed??'play-v0.5',count:options.player&&(options.enableFixedStudents??true)?Math.max(20,options.count??25):options.count??5,absoluteMinute:DEFAULT_ABSOLUTE_MINUTE});
 const player=world.runtime.world.getCharacters().filter(c=>c.kind==='player'),playerId=saved?.playerId??player[0]?.id;
 if(player.length!==1||player[0].id!==playerId){world.dispose();throw Error('기준 플레이어 참조가 올바르지 않습니다.');}
 if(saved?.admission===null){world.dispose();throw Error('입학 저장 형식 오류');}
 let admission:AdmissionSave|undefined=saved?.admission!==undefined?structuredClone(saved.admission):undefined;
 if(admission){
  try{assertStartingProfile(admission.profile);const p=admission.player;
   if(admission.version!=='academy-admission-v1'||p.version!=='academy-admission-v1'||p.characterId!==playerId||!p.passed||!['S','A','B','C','D','E','F'].includes(p.classId??'')||[p.score,p.foundation,p.practical,p.written,p.potential].some(n=>!Number.isInteger(n)||n<0||n>100)||p.classId!==admissionClassForScore(p.score)||p.score!==Math.round(p.foundation*.2+p.practical*.35+p.written*.2+p.potential*.25)||typeof p.explanation!=='string'||typeof p.strongestField!=='string'||!Array.isArray(admission.placements)||admission.placements.length>world.runtime.world.getCharacters().length||new Set(admission.placements.map(p=>p.characterId)).size!==admission.placements.length||!admission.placements.some(placement=>placement.characterId===playerId&&placement.classId===p.classId)||admission.placements.some(p=>!world.runtime.world.getCharacters().some(c=>c.id===p.characterId&&c.classId===p.classId)||!['S','A','B','C','D','E','F'].includes(p.classId)))throw Error('입학 저장 참조 오류');
  }catch(e){world.dispose();throw e;}
 }else if(!saved&&options.player?.startingProfile){
  const result=evaluateAdmission(player[0]),placements:AdmissionSave['placements']=[];
  for(const c of world.runtime.world.getCharacters().filter(c=>c.schoolYear>0)){
   const assessed=evaluateAdmission(c),classId=(['S','A','B','C','D','E','F'].includes(c.classId??'')?c.classId:assessed.classId??'F') as AdmissionSave['placements'][number]['classId'];
   // Already admitted NPCs retain their school membership; canonical explicit classes win.
   world.runtime.world.updateCharacter(c.id,current=>({...current,classId}));placements.push({characterId:c.id,classId});
  }
  admission={version:'academy-admission-v1',profile:structuredClone(options.player.startingProfile),player:result,placements};
 }
 if(!saved&&options.player?.economicBackground)world.runtime.ai.getEconomy()?.setInitialBackground(playerId,options.player.economicBackground);
 const life=saved?.playerLife||options.player?createPlayerLife(world,playerId,saved?.playerLife,options.player?.policy):undefined;
 life?.useAutomaticDefault();
 let pacing:ReturnType<typeof createLifePacing>|undefined;
 let revision=0,busy=false,cancel=false,disposed=false,error='',combatMode=saved?.combatMode??'manual',progress:{requested:number;elapsed:number;stopped:boolean}|undefined;
 let journal:PlayerRecord[]=structuredClone(saved?.journal??[]);
 const capture=()=>{const combined=new Map(journal.map(r=>[r.id,r]));for(const r of getPlayerRecords(world,playerId)){const id=r.kind==='movement'?`run/${epoch}/${r.id}`:r.id;combined.set(id,{...r,id});}journal=[...combined.values()].sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id)).slice(-200);};
 const listeners=new Set<()=>void>(),publish=()=>{revision++;listeners.forEach(fn=>fn());},unsubscribe=world.subscribe(()=>{capture();publish();});capture();
 const available=()=>{if(disposed)throw Error('종료된 플레이 세션');if(busy)throw Error('선택한 행동을 진행하고 있습니다. 잠시 기다려 주세요.');if(world.getFailure())throw Error('세계 처리 오류: 저장 복원 또는 새 세션이 필요합니다.');};
 function move(locationId:string){available();if(life){if(life.getState().pending.length)throw Error('대기 사건 응답이 필요합니다.');life.prepareDirectControl();}const result=world.command({type:'move',characterId:playerId,locationId});if(!result.accepted){life?.releaseDirectControl();throw Error(result.result);}return result;}
 async function advance(minutes:number,yieldControl:()=>Promise<void>=()=>new Promise(resolve=>setTimeout(resolve,0))){
  available();if(life?.hasPendingChoices())throw Error('사건 응답 대기 중입니다.');if(!Number.isSafeInteger(minutes)||minutes<0||!life&&minutes>7*1440)throw Error('현재 이후의 정수 분만 진행합니다. 관찰 세션은 한 번에7일 이하입니다.');assertAbsoluteMinute(world.runtime.world.clock.getSnapshot()+minutes);
  const baseline=life?.baseline();const request=world.command({type:'time_request',minutes});if(!request.accepted)throw Error(request.result);
  busy=true;cancel=false;error='';progress={requested:minutes,elapsed:0,stopped:false};publish();const start=world.runtime.world.clock.getSnapshot();let left=minutes,step=1,lastPublish=performance.now(),lastYield=lastPublish;
  try{while(left>0&&!cancel&&!disposed){const n=Math.min(left,step),at=performance.now(),previous=world.runtime.world.clock.getSnapshot();world.advance(n,false);capture();left=minutes-(world.runtime.world.clock.getSnapshot()-start);if(life?.hasPendingChoices()||world.runtime.ai.getCombat()?.isChoicePending()||world.runtime.world.clock.getSnapshot()-previous<n)cancel=true;step=Math.max(1,Math.min(240,Math.round(n*Math.min(2,12/Math.max(.1,performance.now()-at)))));progress.elapsed=world.runtime.world.clock.getSnapshot()-start;
    if(performance.now()-lastPublish>=250){publish();lastPublish=performance.now();}if(performance.now()-lastYield>=20){await yieldControl();lastYield=performance.now();}
   }}catch(e){error=e instanceof Error?e.message:String(e);throw e;}finally{busy=false;if(!disposed){capture();progress.elapsed=world.runtime.world.clock.getSnapshot()-start;progress.stopped=progress.elapsed<minutes;world.finishTimeRequest(request.id);if(baseline)life?.summarize(baseline);pacing?.onSettled();publish();}}
 }
 const playerCommand=(fn:(value:NonNullable<typeof life>)=>void)=>{available();if(!life)throw Error('새 플레이어 세션을 생성하세요.');try{fn(life);}finally{life.releaseDirectControl();capture();publish();}};
 async function resolveCombat(){const combat=world.runtime.ai.getCombat(),battle=combat?.getActive(playerId);if(!combat||!battle)return;combat.setManual(battle.id,playerId,false);publish();for(let turn=0;turn<=battle.maxRounds&&combat.getActive(playerId);turn++){if(life?.hasPendingChoices())break;const next=combat.getActive(playerId)!;await advance(Math.max(1,next.nextRoundAt-world.runtime.world.clock.getSnapshot()));if(cancel)break;}}
 async function settleInteraction(){const active=()=>world.runtime.interactions?.getActive(playerId);if(active()?.status==='proposed')await advance(1);const battle=world.runtime.ai.getCombat()?.getActive(playerId);if(battle){world.runtime.ai.getCombat()!.setManual(battle.id,playerId,combatMode==='manual');publish();if(combatMode==='automatic')await resolveCombat();return;}const interaction=active();if(interaction?.status==='active'&&interaction.expectedEndAt)await advance(Math.max(0,interaction.expectedEndAt-world.runtime.world.clock.getSnapshot()));}
 const finishDirect=()=>{life?.releaseDirectControl();publish();};
 async function resumeAfterChoice(){if(life?.hasPendingChoices())return;const active=world.runtime.interactions?.getActive(playerId);if(active){await settleInteraction();return;}const end=life?.getState().action?.endsAt??world.runtime.world.getCharacterReadSnapshot(playerId).location!.movement?.arrivalTime,remaining=end!==undefined?end-world.runtime.world.clock.getSnapshot():progress?.stopped?progress.requested-progress.elapsed:0;if(!end&&pacing?.current()?.status==='interrupted'){finishDirect();return;}if(remaining>0)await advance(remaining);finishDirect();}

 const pause=()=>{cancel=true;world.pause();};
 try{pacing=createLifePacing({world,life,playerId,advance,available,publish,stop:pause},saved?.pacing);}catch(e){life?.dispose();world.dispose();throw e;}
 return {world,playerId,advance,move,pause,life,pacing,getAdmission:()=>admission?structuredClone(admission):undefined,
  playerCommand,settleInteraction,resolveCombat,finishDirect,resumeAfterChoice,getCombatMode:()=>combatMode,setCombatMode:(mode:'automatic'|'manual')=>{available();combatMode=mode;publish();},
  work:async(jobId:string)=>{const economy=world.runtime.ai.getEconomy(),job=STUDENT_JOBS.find(j=>j.id===jobId);if(!economy||!job)throw Error('경제/일자리 연결 필요');const reasons=economy.workReasons(playerId,jobId);if(reasons.length)throw Error(reasons.join(' · '));try{playerCommand(l=>{l.act('student_work',job.minutes,job.locationId);economy.beginWork(playerId,jobId,l.getState().action!.entryId);});await advance(job.minutes);}finally{finishDirect();}},
  performAction:async(activityId:string,minutes:number,locationId?:string)=>{try{playerCommand(l=>l.act(activityId,minutes,locationId));const end=life!.getState().action!.endsAt;await advance(end-world.runtime.world.clock.getSnapshot());}finally{finishDirect();}},
  moveAndArrive:async(locationId:string)=>{try{move(locationId);const end=world.runtime.world.getCharacterReadSnapshot(playerId).location!.movement?.arrivalTime;if(end!==undefined)await advance(end-world.runtime.world.clock.getSnapshot());}finally{finishDirect();}},
  combatTurn:async(choice:CombatChoice)=>{available();const combat=world.runtime.ai.getCombat(),battle=combat?.getActive(playerId);if(!combat||!battle)throw Error('진행 중인 전투 없음');combat.queueAction(battle.id,playerId,choice);await advance(Math.max(1,battle.nextRoundAt-world.runtime.world.clock.getSnapshot()));},
  advanceUntil:(minute:number)=>{assertAbsoluteMinute(minute);return advance(minute-world.runtime.world.clock.getSnapshot());},
  advanceToActionEnd:()=>{const now=world.runtime.world.clock.getSnapshot(),state=life?.getState(),end=world.runtime.interactions?.getActive(playerId)?.expectedEndAt??state?.action?.endsAt??(world.runtime.ai.hasCharacter(playerId)?world.runtime.ai.getState(playerId).actionEndsAt:undefined);if(end===undefined||end<=now)throw Error('진행할 행동 종료 예약이 없습니다.');return advance(end-now);},
  getView:(locationId?:string)=>({...getPlayerView(world,playerId,locationId),records:structuredClone(journal).reverse().slice(0,60)}),previewMovement:(locationId:string)=>world.runtime.world.findRoute(playerId,locationId),
  getProgress:()=>progress?{...progress}:undefined,isAdvancing:()=>busy,getError:()=>error,
  save:(storage:SavePort,slot:number,savedAt=new Date().toISOString())=>{available();const data:PlaySave={version:'academy-play-v0.5',savedAt,playerId,world:world.snapshot(),...(life?{playerLife:life.save()}:{}),journal:structuredClone(journal),journalEpoch:epoch,combatMode,pacing:pacing!.save(),...(admission?{admission:structuredClone(admission)}:{})};storage.setItem(key(slot),JSON.stringify(data));return data;},
  subscribe:(fn:()=>void)=>{listeners.add(fn);return()=>{listeners.delete(fn);};},getSnapshot:()=>revision,
  retain:()=>world.retain(),dispose:()=>{if(disposed)return;disposed=true;cancel=true;unsubscribe();life?.dispose();world.dispose();listeners.clear();},
 };
}
export type PlaySession=ReturnType<typeof createPlaySession>;
