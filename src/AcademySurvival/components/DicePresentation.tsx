import {useGameAudio} from './GameAudio';
import {createContext,useContext,useEffect,useRef,useState} from 'react';
import type {ReactNode} from 'react';
import type {DiceReadout,DiceSettings} from '../systems/dicePresentation';
import {readDiceSettings} from '../systems/dicePresentation';
import DiceMesh from './DiceMesh';
import './DicePresentation.css';
interface DiceRequest {title:string;important:boolean;manual:boolean;execute:()=>Promise<DiceReadout[]>}
interface DiceApi {settings:DiceSettings;update:(s:DiceSettings)=>void;perform:(request:DiceRequest)=>Promise<void>}
const Context=createContext<DiceApi|null>(null);
export const useDice=()=>useContext(Context);
const STORAGE='academy.dice.presentation.v1';
export function DiceProvider({children}:{children:ReactNode}){
 const [settings,setSettings]=useState<DiceSettings>(()=>{try{return readDiceSettings(localStorage.getItem(STORAGE));}catch{return readDiceSettings(null);}}),[request,setRequest]=useState<DiceRequest>(),[rows,setRows]=useState<DiceReadout[]>([]),[phase,setPhase]=useState<'ready'|'rolling'|'result'>('ready'),[error,setError]=useState('');
 const audio=useGameAudio();
 const resolve=useRef<(()=>void)|null>(null),running=useRef(false),dialog=useRef<HTMLDialogElement>(null),results=useRef<HTMLDivElement>(null),timer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined),mounted=useRef(true),settingsRef=useRef(settings);settingsRef.current=settings;
 const finish=()=>{if(running.current)return;clearTimeout(timer.current);resolve.current?.();resolve.current=null;setRequest(undefined);setRows([]);};
 useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;clearTimeout(timer.current);resolve.current?.();};},[]);
 useEffect(()=>{if(!request)return;const el=dialog.current;el?.showModal();return()=>{el?.close();};},[request]);
 const roll=async()=>{if(!request||running.current||phase!=='ready')return;running.current=true;setPhase('rolling');audio?.play('dice');setError('');const began=performance.now();try{const result=await request.execute();if(!mounted.current)return;setRows(result);const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches,delay=settingsRef.current.frequency==='result'||reduced?0:Math.max(0,(settingsRef.current.fast?450:1050)-(performance.now()-began));timer.current=setTimeout(()=>setPhase('result'),delay);}catch(e){if(mounted.current){setError(e instanceof Error?e.message:String(e));setPhase('result');}}finally{running.current=false;}};
 const perform=async(next:DiceRequest)=>{if(resolve.current)throw Error('이전 주사위 결과를 먼저 확인하세요.');if(settingsRef.current.frequency==='important'&&!next.important){await next.execute();return;}setRows([]);setError('');setPhase('ready');setRequest(next);return new Promise<void>(done=>{resolve.current=done;});};
 const update=(s:DiceSettings)=>{setSettings(s);try{localStorage.setItem(STORAGE,JSON.stringify(s));}catch{/* Keep session preferences. */}};
 useEffect(()=>{if(phase==='result'){if(rows.length)audio?.play(['성공','대성공','부분 성공'].includes(rows[0].outcome)?'success':['실패','치명적 실패'].includes(rows[0].outcome)?'failure':'event');results.current?.focus({preventScroll:true});if(results.current)results.current.scrollTop=0;if(dialog.current)dialog.current.scrollTop=0;}},[phase]);
 const auto=request&&(!request.manual||!settings.manual||settings.frequency==='result');
 useEffect(()=>{if(auto&&phase==='ready')void roll();});
 return <Context.Provider value={{settings,update,perform}}>{children}{request&&<dialog ref={dialog} className="ac-dice-dialog" aria-label="운명의 주사위" onCancel={e=>{e.preventDefault();if(phase==='ready'){finish();}else if(phase==='result')finish();}}><section className="ac-dice-stage"><header><small>THE MOMENT OF POSSIBILITY</small><h2>{request.title}</h2><span>{phase==='ready'?'당신의 실력, 그리고 한 번의 기회':phase==='rolling'?'결과를 확인하고 있습니다…':'기록된 판정 결과'}</span></header><div className="ac-dice-tray" onPointerUp={()=>{if(phase==='ready')void roll();}}>{rows[0]?.sides===100?<><DiceMesh sides={10} value={Math.floor((rows[0].value%100)/10)} rolling={phase==='rolling'} fast={settings.fast}/><DiceMesh sides={10} value={rows[0].value%10} rolling={phase==='rolling'} fast={settings.fast}/></>:<DiceMesh value={rows[0]?.value??1} rolling={phase==='rolling'} fast={settings.fast}/>}<div className="ac-dice-ring"/></div>
 {phase==='ready'?<button className="ac-dice-roll" autoFocus onClick={()=>void roll()}>주사위 굴리기 <span>↗</span></button>:phase==='rolling'?<button disabled={running.current} onClick={()=>{clearTimeout(timer.current);setPhase('result');}}>빠르게 결과 공개</button>:<div ref={results} tabIndex={-1} className="ac-dice-results" aria-live="polite">{rows.map(row=><article key={row.id}><h3>{row.title}<b>D{row.sides} · {row.value}</b></h3><strong data-outcome={row.outcome}>{row.outcome}</strong><dl>{row.lines.map((line,i)=><div key={i}><dt>{line.label}</dt><dd>{line.value}</dd></div>)}</dl></article>)}{!rows.length&&!error&&<p>이 행동에는 주사위 판정이 없었습니다. 기존 규칙으로 처리했습니다.</p>}{error&&<p role="alert">{error}</p>}<button className="ac-dice-roll" onClick={finish}>계속 →</button></div>}
 <footer>{phase==='ready'&&<button onClick={finish}>돌아가기 · 행동하지 않음</button>}<span>연출은 확률과 판정 결과를 바꾸지 않습니다</span></footer></section></dialog>}</Context.Provider>;
}
export function DiceSettingsPanel(){const api=useDice();if(!api)return null;const s=api.settings;return <fieldset className="ac-dice-settings"><legend>주사위 연출</legend><label>연출 빈도<select value={s.frequency} onChange={e=>api.update({...s,frequency:e.target.value as DiceSettings['frequency']})}><option value="always">직접 선택한 판정 적극 연출</option><option value="important">중요 판정만 · 기본</option><option value="result">결과만 표시</option></select></label><label><input type="checkbox" checked={s.manual} onChange={e=>api.update({...s,manual:e.target.checked})}/>직접 굴리기</label><label><input type="checkbox" checked={s.fast} onChange={e=>api.update({...s,fast:e.target.checked})}/>빠른 연출</label></fieldset>;}
