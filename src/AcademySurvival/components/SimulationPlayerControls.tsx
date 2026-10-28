import {useEffect,useState} from 'react';
import type {WorldSimulation} from '../systems/worldSimulation';
import {createPlayerLife} from '../systems/playerLife';
import type {PlayerLife,PlayerLifeSave} from '../systems/playerLife';
import {DEFAULT_PLAYER_POLICY} from '../types/player';
/** Attaches the same decision adapter to the simulator's existing cloned world. */
export default function SimulationPlayerControls({controller,initial}:{controller:WorldSimulation;initial?:PlayerLifeSave}){
 const [life,setLife]=useState<PlayerLife>(),[error,setError]=useState('');
 useEffect(()=>{const player=controller.runtime.world.getCharacters().find(c=>c.kind==='player');if(!player||!controller.runtime.schedule.hasSchedule(player.id))return;const value=createPlayerLife(controller,player.id,initial,controller.runtime.ai.save().playerPolicies?.find(p=>p.characterId===player.id)?.policy??DEFAULT_PLAYER_POLICY);let active=true;queueMicrotask(()=>{if(active)setLife(value);});return()=>{active=false;value.dispose();};},[controller,initial]);
 if(!life)return null;
 const state=life.getState(),run=(fn:()=>void)=>{try{controller.pause();fn();controller.publish();setError('');}catch(e){setError(String(e));}};
 return <details><summary>플레이어 생활·행동 제어</summary><p>같은 샌드박스의 실제 플레이어를 제어합니다. 실제 게임에 반영되지 않습니다.</p><p>모드 {state.mode} · 방침 학업{state.policy.studyWeight}/훈련{state.policy.trainingWeight}/사교{state.policy.socialWeight}/휴식{state.policy.restWeight}</p><button onClick={()=>run(()=>life.setMode('automatic'))}>플레이어 자동 생활</button><button onClick={()=>run(()=>life.setMode('manual'))}>플레이어 수동 모드</button><button onClick={()=>run(()=>{life.act('self_study',60);})}>플레이어 학습 요청</button><button onClick={()=>run(()=>life.interrupt())}>플레이어 행동 중단</button>{state.pending.map(p=><article key={p.id}><p>{p.message}</p>{p.kind==='conversation'?<p>위 대화·사회생활 패널에서 직접 응답합니다.</p>:p.kind==='request'?<><button onClick={()=>run(()=>life.respond(p.id,'accept'))}>개발 수락</button><button onClick={()=>run(()=>life.respond(p.id,'decline'))}>개발 거절</button></>:<button onClick={()=>run(()=>life.respond(p.id,'continue'))}>개발 확인</button>}</article>)}{error&&<p role="alert">{error}</p>}</details>;
}
