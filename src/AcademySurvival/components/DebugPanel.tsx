import type { Context, Entry } from '../types';
import { resolveEffects } from '../systems/effectResolver';
import { validationIssues, relatedEvents, specialRules } from '../systems/registry';
import {knowledgeReferencesForEntry} from '../systems/knowledgeRegistry';
import {Link} from 'react-router-dom';
export default function DebugPanel({entry,context}:{entry:Entry;context:Context}) {
 const issues=validationIssues.filter(issue=>issue.id===entry.id||issue.id==='catalog');
 return <section className="ac-debug"><h3>DEBUG / 내부 참조</h3><p className={issues.length?'ac-invalid':'ac-valid'}>{issues.length?issues.map(i=>i.message).join(' · '):'데이터 유효 · 참조 검사 통과'}</p>
  <dl><div><dt>ID</dt><dd>{entry.id}</dd></div><div><dt>이벤트 태그</dt><dd>{entry.eventTags.join(', ')}</dd></div><div><dt>추첨 가중치</dt><dd>{entry.birth.weight} · 적격 {String(entry.birth.eligible)}</dd></div></dl>
  <details><summary>요소 영향력 메타데이터</summary><pre>{JSON.stringify(entry.impact,null,2)}</pre></details>
  <details><summary>효과 타입 · 보정 수치</summary><pre>{JSON.stringify(entry.effects,null,2)}</pre></details>
  <details><summary>능력치·숙련도 정의 참조</summary>{knowledgeReferencesForEntry(entry.id).length?<ul>{knowledgeReferencesForEntry(entry.id).map(def=><li key={def.id}><Link to={`?view=catalog&kind=${def.kind}&item=${def.id}&debug=1`}>{def.name} · {def.id} ↗</Link></li>)}</ul>:<p>명시적 효과 대상과 일치하는 정의 미연결</p>}<p>읽기용 참조만 연결되며 숙련도 경지나 특성을 자동 변경하지 않습니다.</p></details>
  {specialRules[entry.id]&&<details><summary>고유 규칙 · 발동 키 · 고정 파라미터</summary><pre>{JSON.stringify(specialRules[entry.id],null,2)}</pre></details>}
  <details><summary>현재 컨텍스트의 효과 해석</summary><pre>{JSON.stringify(resolveEffects([entry],context),null,2)}</pre><p>조건부 효과는 아래 컨텍스트가 충족한 것만 집계합니다. 고유 규칙은 향후 이벤트 어댑터에 전달할 정의이며 실행하지 않습니다.</p></details>
  <details><summary>추첨 조건 · 획득 · 진화 원본</summary><pre>{JSON.stringify({birth:entry.birth,...(entry.kind==='trait'?{exclusiveGroup:entry.exclusiveGroup,acquisitions:entry.acquisitions,evolutions:entry.evolutions}:{}),context},null,2)}</pre></details>
  <details><summary>예정 이벤트 조건</summary><pre>{JSON.stringify(relatedEvents(entry),null,2)}</pre></details>
 </section>;
}
