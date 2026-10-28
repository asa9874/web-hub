import {useState} from 'react';
import {rebalancePolicy} from '../systems/playerUi';
import type {PlaySession} from '../systems/playSession';
import {activityRegistry,activityStatusNames} from '../data/schedules';
import {needs,goalRegistry} from '../data/motivations';
import {formatGameDate,formatGameTime,toAbsoluteMinute} from '../systems/calendar';
import {interactionRegistry} from '../data/interactions';
export default function PlayerControls({session}:{session:PlaySession}){
 const life=session.life!,state=life.getState(),current=life.getCurrent(),busy=session.isAdvancing();
 const [policy,setPolicy]=useState(state.policy),[activity,setActivity]=useState('self_study'),[duration,setDuration]=useState(60),[date,setDate]=useState('427-3-2'),[error,setError]=useState('');
 const run=(fn:()=>void)=>{try{fn();setError('');}catch(e){setError(String(e instanceof Error?e.message:e));}};
 const command=(fn:Parameters<PlaySession['playerCommand']>[0])=>run(()=>session.playerCommand(fn));
 const advance=(n:number)=>{void session.advance(n,()=>new Promise(resolve=>requestAnimationFrame(()=>resolve()))).catch(e=>setError(String(e)));};
 const joint=session.world.runtime.interactions?.getActive(session.playerId);
 return <section className="ac-play-panel" aria-label="플레이어 생활·행동"><h2>나의 생활</h2>
  <div className="ac-player-current"><small>현재 활동</small><h3>{activityRegistry.get(current.activityId??'')?.name??'대기'}</h3><p>{activityStatusNames[current.status]}{current.actualStartTime!==undefined?' · '+formatGameTime(current.actualStartTime)+' 시작':''}{current.plannedEndTime!==undefined?' · '+formatGameTime(current.plannedEndTime)+' 종료 예정':''}</p>{current.reason&&<p className="ac-help">{current.reason}</p>}{joint&&<p className="ac-help">{interactionRegistry.get(joint.definitionId)?.name} · {joint.expectedEndAt?formatGameTime(joint.expectedEndAt)+' 종료 예정':'응답 대기'}</p>}</div><p className="ac-help">{state.directControl?'직접 선택한 행동 수행 중 · 완료 후 자동 생활 복귀':'기본 생활 · 자동으로 일정과 생활 방침을 따릅니다.'}</p>
  <details><summary>생활 방침 편집</summary><p>자유시간 선택 가중치입니다. 식사·수면·긴급 필요와 실제 이동 조건을 함께 고려합니다. 게이지를 조절하면 다른 항목을 비례 조정해 합계 100을 유지합니다.</p>
   {([['studyWeight','학업'],['trainingWeight','훈련'],['socialWeight','사교'],['restWeight','휴식']] as const).map(([key,label])=><label key={key}>{label}<output>{policy[key]}%</output><input aria-label={'방침 '+label} type="range" min="0" max="100" value={policy[key]} onChange={e=>setPolicy(rebalancePolicy(policy,key,Number(e.target.value)))}/></label>)}
   <label><input type="checkbox" checked={policy.attendScheduledClasses} onChange={e=>setPolicy({...policy,attendScheduledClasses:e.target.checked})}/>정규 수업 우선</label>
   <label>중요 기억 알림 기준<output>{policy.interruptionPolicy.minimumImportance}</output><input aria-label="중요 기억 알림 기준" type="range" min="0" max="100" value={policy.interruptionPolicy.minimumImportance} onChange={e=>setPolicy({...policy,interruptionPolicy:{...policy.interruptionPolicy,minimumImportance:Number(e.target.value)}})}/></label>
   {([['pauseForDanger','위험 상태'],['pauseForMajorPersonalEvents','중요 개인 사건'],['pauseForImportantNearbyEvents','인지한 주변 사건']] as const).map(([key,label])=><label key={key}><input type="checkbox" checked={policy.interruptionPolicy[key]} onChange={e=>setPolicy({...policy,interruptionPolicy:{...policy.interruptionPolicy,[key]:e.target.checked}})}/>{label}에서 중단</label>)}
   <button disabled={busy} onClick={()=>command(l=>l.setPolicy(policy))}>생활 방침 적용</button><p>현재 행동을 취소하지 않고 이후 판단에 반영합니다. 직접 요청의 동의는 항상 확인합니다.</p>
  </details>
  <h3>직접 행동</h3><div className="ac-action-form"><div className="ac-activity-grid" role="group" aria-label="플레이어 활동">{['self_study','reading','sword_training','magic_training','rest','sleep','breakfast','idle_wait'].map((id,i)=><button type="button" aria-pressed={activity===id} disabled={busy} key={id} onClick={()=>setActivity(id)}><span aria-hidden="true">{['▤','▥','⚔','✦','◒','☾','♨','◷'][i]}</span>{activityRegistry.get(id)!.name}</button>)}</div>
  <label>수행 시간(이동 별도)<input aria-label="플레이어 행동 분" type="number" min="1" max="1440" value={duration} onChange={e=>setDuration(Number(e.target.value))}/></label><button className="ac-action-start" disabled={busy||!!state.pending.length} onClick={()=>{void session.performAction(activity,duration).catch(e=>setError(e instanceof Error?e.message:String(e)));}}>행동 시작</button></div><div className="ac-action-buttons">
  <button disabled={busy} onClick={()=>command(l=>l.interrupt())}>행동 중단</button><button disabled={busy||!state.suspended} onClick={()=>run(()=>{session.playerCommand(l=>l.resume());void session.advanceToActionEnd().catch(e=>setError(String(e)));})}>남은 개인 활동 재개</button>
</div>
  <p className="ac-help">선택한 행동은 이동부터 완료까지 자동 진행됩니다. 중요한 선택이 필요하면 멈춥니다.</p>
  <details><summary>나의 욕구·목표</summary>{needs.map(n=><p key={n.id}>{n.name}: {Math.round(life.getNeeds().values[n.id])}</p>)}{life.getGoals().map(g=><p key={g.id}>{goalRegistry.get(g.goalDefinitionId)?.name} · {g.status} · {g.progress}%</p>)}</details>
  {session.getProgress()?.stopped&&<button disabled={busy||!!state.pending.length} onClick={()=>advance(session.getProgress()!.requested-session.getProgress()!.elapsed)}>남은 요청 진행</button>}<details><summary>날짜까지 진행</summary><input aria-label="진행 목표 날짜" value={date} onChange={e=>setDate(e.target.value)} placeholder="427-3-2"/><button disabled={busy||!!state.pending.length} onClick={()=>run(()=>{const [year,month,day]=date.split('-').map(Number),target=toAbsoluteMinute({year,month,day,hour:8,minute:0});advance(target-session.world.runtime.world.clock.getSnapshot());})}>해당 날짜08:00까지</button></details>
  <details><summary>최근 진행 요약</summary>{state.summaries.slice().reverse().map((s,i)=><article key={i}><p>{formatGameDate(s.from)} {formatGameTime(s.from)} → {formatGameDate(s.to)} {formatGameTime(s.to)} · 실제 {s.to-s.from}분</p><p>{Object.entries(s.activities).map(([id,n])=>(activityRegistry.get(id)?.name??id)+' '+n+'분').join(' · ')||'실제 활동 수행 없음'}</p><p>능력 변화 {JSON.stringify(s.stats)} · 숙련 변화 {JSON.stringify(s.proficiencies)}</p><p>욕구 변화 {JSON.stringify(s.needs)} · 관계 변경 {s.relationships?'있음':'없음'} · 보유 기억 증감(망각·보존 한도 영향) {s.records}</p></article>)}</details>
  {error&&<p role="alert">{error}</p>}
 </section>;
}
