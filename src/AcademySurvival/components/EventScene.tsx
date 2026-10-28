import {useSceneSound} from './GameAudio';
import {VisualModeContext,VisualSceneDialog} from './VisualScene';
import {useContext,useEffect,useRef,useState} from 'react';
import {EventSceneContext} from './eventSceneHooks';
import type {ReactNode} from 'react';
import type {ArtCharacter,CharacterExpression} from '../data/characterArt';
import DetailDialog from './DetailDialog';
import CharacterArt from './CharacterArt';
import './EventScene.css';
export interface EventSceneData {title:string;character?:ArtCharacter;expression?:CharacterExpression;background?:{src:string};speech?:string;message:string;kind?:'choice'|'result'}
export function EventSceneDialog({scene,children,onClose,dismissible=true}:{scene:EventSceneData;children:ReactNode;onClose:()=>void;dismissible?:boolean}){useSceneSound(scene.title+scene.message,scene.kind==='result'?'select':'event');const visual=useContext(VisualModeContext);if(visual)return <VisualSceneDialog scene={scene} onClose={onClose} dismissible={dismissible}>{children}</VisualSceneDialog>;return <DetailDialog title={scene.title} wide dismissible={dismissible} lockMessage="선택을 완료하면 계속됩니다." onClose={onClose}><section className="ac-event-scene" aria-label="이벤트 대화"><div className="ac-event-stage" style={scene.background?{backgroundImage:`linear-gradient(0deg,#111725bb,transparent),url("${scene.background.src}")`}:undefined}>{scene.character&&<CharacterArt character={scene.character} expression={scene.expression}/>}<span className="ac-event-chapter">{scene.kind==='result'?'행동 결과':'당신의 선택'}</span></div><div className="ac-event-dialogue"><strong>{scene.character?.name??'아카데미'}</strong>{scene.speech&&<blockquote style={{whiteSpace:'pre-line'}}>{scene.speech}</blockquote>}<p className="ac-event-system">{scene.message}</p></div><div className="ac-event-choices">{children}</div></section></DetailDialog>;}
type Answer='yes'|'no'|'confirm';
export function EventSceneProvider({children}:{children:ReactNode}){
 const [scene,setScene]=useState<EventSceneData>(),[resultsEnabled,setEnabled]=useState(()=>{try{return localStorage.getItem('academy.interaction-results')!=='off';}catch{return true;}}),resolve=useRef<((a:Answer)=>void)|null>(null);
 const finish=(answer:Answer)=>{resolve.current?.(answer);resolve.current=null;setScene(undefined);};
 useEffect(()=>()=>{resolve.current?.('no');},[]);
 const present=(next:EventSceneData)=>{resolve.current?.('no');setScene(next);return new Promise<Answer>(r=>{resolve.current=r;});};
 const setResultsEnabled=(enabled:boolean)=>{setEnabled(enabled);try{localStorage.setItem('academy.interaction-results',enabled?'on':'off');}catch{/* Session preference remains usable without storage. */}};
 return <EventSceneContext.Provider value={{present,resultsEnabled,setResultsEnabled}}>{children}{scene&&<EventSceneDialog scene={scene} onClose={()=>finish(scene.kind==='result'?'confirm':'no')}>{scene.kind==='result'?<button autoFocus onClick={()=>finish('confirm')}>확인</button>:<><button autoFocus onClick={()=>finish('yes')}>예 · 진행</button><button onClick={()=>finish('no')}>아니요 · 돌아가기</button></>}</EventSceneDialog>}</EventSceneContext.Provider>;
}
