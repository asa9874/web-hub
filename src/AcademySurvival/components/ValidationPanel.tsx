import {useState} from 'react';
import type {ValidationReport,ScenarioResult} from '../types/validation';
import {runValidationScenario} from '../systems/validationScenarios';
import DetailDialog from './DetailDialog';

export default function ValidationPanel(){
 const [report,setReport]=useState<ValidationReport>(),[text,setText]=useState(''),[error,setError]=useState(''),[detail,setDetail]=useState<ScenarioResult>(),[replayed,setReplayed]=useState(false);
 const load=(raw:string)=>{try{
  if(raw.length>10*1024*1024)throw Error('보고서는10MB 이하만 표시합니다. 전체 원본은 CLI 결과 폴더에서 확인하세요.');
  const data=JSON.parse(raw) as ValidationReport;
  const string=(v:unknown)=>typeof v==='string',number=(v:unknown)=>typeof v==='number'&&Number.isFinite(v);
  if(data?.version!=='academy-validation-v1'||!Array.isArray(data.results)||data.results.length>1000||!string(data.profile)||!string(data.status)||!number(data.elapsedMs)||!data.summary||!['passed','failed','skipped','reused'].every(k=>number(data.summary[k as keyof typeof data.summary]))||data.results.some(r=>!r||!string(r.id)||!string(r.status)||r.error!==undefined&&!string(r.error)||r.reproduce!==undefined&&!string(r.reproduce)||r.elapsedMs!==undefined&&!number(r.elapsedMs)||r.scenario&&(!string(r.scenario.id)||!string(r.scenario.seed)||!string(r.scenario.status)||!number(r.scenario.durationMinutes)||!number(r.scenario.npcCount)||!Array.isArray(r.scenario.issues)||r.scenario.issues.some(i=>!i||!string(i.code)||!string(i.severity)||!string(i.message)||!number(i.worldTime)||i.characterIds!==undefined&&(!Array.isArray(i.characterIds)||!i.characterIds.every(string))||i.activityIds!==undefined&&(!Array.isArray(i.activityIds)||!i.activityIds.every(string))||i.locationId!==undefined&&!string(i.locationId)||i.suspectedSystem!==undefined&&!string(i.suspectedSystem)))))throw Error('검증 보고서 형식 오류');
  setReport(data);setError('');
 }catch(e){setError(e instanceof Error?e.message:String(e));}};
 const replay=(scenario:ScenarioResult)=>{try{
  const p=scenario.reproduction;if(!p||typeof p.scenario!=='string'||typeof p.seed!=='string'||!Number.isSafeInteger(p.count)||p.count<1||p.count>10||!Number.isSafeInteger(p.minutes)||p.minutes<1||p.minutes>60||p.scenario==='academy-day')throw Error('화면 재현은10명·60분 이하입니다. 원래 규모의 CLI 재현 명령을 사용하세요.');
  const {result}=runValidationScenario(p.scenario,{seed:p.seed,count:p.count,minutes:p.minutes});setDetail(result);setReplayed(true);setError('');
 }catch(e){setError(e instanceof Error?e.message:String(e));}};
 return <section><h2>자동 검증 · 최근 가져온 CLI 결과</h2>
  <p>로컬 CLI의 report.json을 가져옵니다. 브라우저는 로컬 파일에 자동 접근하거나 셸 검사를 실행하지 않습니다. 보고서와 재현 세계는 현재 시뮬레이터·실제 저장 데이터와 분리됩니다.</p>
  <label>검증 보고서 파일<input aria-label="검증 보고서 파일" type="file" accept=".json,application/json" onChange={e=>{const f=e.target.files?.[0];if(f)void f.text().then(load).catch(x=>setError(String(x)));}}/></label>
  <textarea aria-label="검증 보고서 JSON" value={text} onChange={e=>setText(e.target.value)}/><button onClick={()=>load(text)}>검증 결과 가져오기</button>
  {error&&<p role="alert">{error}</p>}
  {report&&<><p aria-label="검증 요약">{report.profile} · {report.status} · {report.elapsedMs}ms · 신규 성공 {report.summary.passed} / 실패 {report.summary.failed} / 미실행 {report.summary.skipped} / 기존 결과 재사용 {report.summary.reused}</p>
   {report.results.map((r,i)=><article key={r.id+'/'+i}><h3>{r.id} · {r.status}</h3><p>{r.elapsedMs??0}ms · {r.error}</p>{r.reproduce&&<code>{r.reproduce}</code>}
    {r.scenario&&<><p>시드 {r.scenario.seed} · NPC {r.scenario.npcCount} · 실제 진행 {r.scenario.durationMinutes}분</p><button onClick={()=>{setDetail(r.scenario);setReplayed(false);}}>실패·상태 상세</button><button onClick={()=>replay(r.scenario!)}>격리된 시드로 재현</button></>}
   </article>)}
  </>}
  {detail&&<DetailDialog title={replayed?'격리 재현 결과':'검증 상태 상세'} wide onClose={()=>setDetail(undefined)}><p>{detail.id} · {detail.status} · {detail.seed} · {detail.durationMinutes}분</p><p>위반 사실과 관련 시스템 후보를 구분합니다. 스냅샷은 현재 세계에 적용되지 않습니다.</p>{detail.issues.map((issue,i)=><article key={i}><h3>{issue.code} · {issue.severity}</h3><p>{issue.message} · 세계 시각 {issue.worldTime}</p><p>NPC {issue.characterIds?.join(', ')??'없음'} · 장소 {issue.locationId??'없음'} · 활동 {issue.activityIds?.join(', ')??'없음'}</p><pre>{JSON.stringify({path:issue.path,expected:issue.expected,actual:issue.actual,suspectedSystem:issue.suspectedSystem},null,2)}</pre></article>)}<details><summary>원본 상태·재현 정보</summary><pre>{JSON.stringify(detail,null,2)}</pre></details></DetailDialog>}
 </section>;
}
