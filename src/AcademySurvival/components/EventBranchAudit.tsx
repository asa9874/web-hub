import type {EventBranchAudit as Audit} from '../types/worldEvent';
/** Developer-only caller boundary: never pass this to the player knowledge view. */
export default function EventBranchAudit({audit}:{audit:Audit}){
 const total=audit.candidates.reduce((sum,c)=>sum+c.effectiveWeight,0);
 return <section aria-label="실제 분기 추첨 기록"><h4>당시 분기 판정</h4><p>추첨값 {audit.roll??'추첨하지 않음'} · 선택 {audit.selectedOutcomeId??'선택 없음'}</p><p>추첨 선택은 완료를 보장하지 않습니다. 실제 효과·활동 결과를 함께 확인하세요.</p>{audit.candidates.map(c=><p key={c.outcomeId}><b>{c.outcomeId}</b> · {c.conditionResults.every(Boolean)?'조건 충족':'조건 제외'} · 기본 {c.baseWeight} × 원인 보정 {c.multiplier} = {c.effectiveWeight} · 당시 {total?Math.round(c.effectiveWeight/total*1000)/10:0}%{c.outcomeId===audit.selectedOutcomeId?' · 추첨 선택':''}</p>)}</section>;
}
