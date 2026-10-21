import { useEffect, useRef, useState } from 'react';
import type { Context, Entry } from '../types';
import { CATEGORIES, FAMILIES, GIFT_CATEGORIES, RARITIES, PROBABILITY } from '../data/config';
import { gifts, traits, previousTraits, relatedEvents, traitRegistry } from '../systems/registry';
import { formatChance, slotPool } from '../systems/probability';
import { conditionText } from '../systems/conditions';
import { effectText } from '../systems/effectResolver';
import DebugPanel from './DebugPanel';
import ImpactBadge from './ImpactBadge';

export default function EntryDetail({entry,debug,context,onSelect}:{entry:Entry;debug:boolean;context:Context;onSelect:(id:string)=>void}) {
 const [copied,setCopied]=useState(false),copyTimer=useRef(0);
 useEffect(()=>()=>window.clearTimeout(copyTimer.current),[]);
 const pool=slotPool<Entry>(entry.kind==='trait'?traits:gifts,context),row=pool.find(r=>r.entry.id===entry.id),total=pool.reduce((sum,row)=>sum+row.weight,0),previous=entry.kind==='trait'?previousTraits(entry.id):[];
 const copy=async()=>{try{const url=new URL(`${import.meta.env.BASE_URL}games/academy-survival/`,location.origin);url.search=new URLSearchParams({view:'catalog',kind:entry.kind,item:entry.id}).toString();await navigator.clipboard.writeText(url.href);setCopied(true);window.clearTimeout(copyTimer.current);copyTimer.current=window.setTimeout(()=>setCopied(false),1800);}catch{setCopied(false);}};
 return <article className="ac-detail" aria-label="선택 항목 상세">
  <header><p className="ac-kicker">{entry.kind==='trait'?'TRAIT RECORD':'GIFT RECORD'} <span>{RARITIES[entry.rarity].name}</span></p><h2>{entry.name}</h2><p className="ac-breadcrumb">{entry.kind==='trait'?`${CATEGORIES[entry.category]} / ${FAMILIES[entry.family].name} / ${entry.tier+1}단계`:`${GIFT_CATEGORIES[entry.category]} / 선천 · 고정 성능`}</p><button className="ac-copy" onClick={copy}>{copied?'링크 복사됨':'항목 링크 복사 ↗'}</button></header>
  <blockquote>{entry.lore}</blockquote>
  <ImpactBadge impact={entry.impact}/>
  <section><h3>시스템 효과</h3>{entry.kind==='gift'&&<p className="ac-activation">{entry.activation}</p>}<ul className="ac-effects">{entry.effects.map(effect=><li key={effect.id}>{effectText(effect)}</li>)}</ul></section>
  <section><h3>시작 추첨 확률 <span>임시 모델</span></h3><p className="ac-probability">{formatChance(row?.probability??0)} <small>/ 적격 첫 슬롯</small></p><p>{row?'현재 기준의 추첨 풀에서 해당 슬롯이 이 항목을 고를 조건부 확률입니다.':'현재 기준의 시작 풀에는 포함되지 않습니다. 조건 미충족 또는 시작 획득 불가입니다.'}</p><p className="ac-note">{pool.length}개 적격 · {debug?`가중치 ${entry.birth.weight} / 총 ${total.toFixed(2)} · `:''}중복·상호 배타 항목을 제외한 다음 슬롯은 다시 정규화합니다. 전체 캐릭터 보유 확률이 아닙니다.</p>
   <div className="ac-distribution">{(entry.kind==='trait'?PROBABILITY.traitCounts:PROBABILITY.giftCounts).map(r=><span key={r.count}>{r.count}개 <b>{formatChance(r.probability)}</b></span>)}</div>
   {entry.birth.condition&&<p>시작 적격 조건: {conditionText(entry.birth.condition)}</p>}
   {entry.kind==='gift'&&<p className="ac-note">출생 시에만 결정됩니다. 훈련으로 새로 얻지 않으며, 기프트 자체의 단계·성장은 없습니다.</p>}
  </section>
  {entry.kind==='trait'&&<>
   <section><h3>진행 중 획득 조건</h3>{entry.acquisitions.map((acquisition,i)=><p key={i}>{acquisition.note}<br/>{conditionText(acquisition.condition)}<br/><b>조건 충족 후 {formatChance(acquisition.chance)}</b></p>)}</section>
   <section><h3>진화 기록</h3>{previous.length?<><p className="ac-note">이전 단계</p><div className="ac-neighbors">{previous.map(p=><button key={p.id} onClick={()=>onSelect(p.id)}>← {p.name}</button>)}</div></>:<p className="ac-note">선행 진화 없음 · 시작점 또는 독립 특성</p>}
    {entry.evolutions.length?entry.evolutions.map(edge=><div className="ac-evolution" key={edge.to}><button onClick={()=>onSelect(edge.to)}>{traitRegistry.get(edge.to)?.name} →</button><p>{edge.note}<br/>조건 충족 후 진화: <b>{formatChance(edge.chance)}</b></p></div>):<p className="ac-note">등록된 다음 진화 없음</p>}
    <p className="ac-note">진화 시 이전 단계를 대체합니다. 계열의 효과를 단계별로 중첩하지 않습니다.</p>
   </section>
  </>}
  <section><h3>이벤트 영향 관계 <span>모두 예정 · 미구현</span></h3><p className="ac-note">ID·태그로 연결한 기획 참조입니다. 실제 이벤트나 결과를 실행하지 않습니다.</p><div className="ac-event-list">{relatedEvents(entry).map(event=><details key={event.id}><summary>{event.title}<span>예정</span></summary><p>관련 태그: {event.tags.filter(t=>entry.eventTags.includes(t)).join(', ')}</p><p>{entry.effects.map(effectText).join(' / ')}</p><small>해당 태그·판정이 일치할 때만 적용. 영향력 수치는 계산에 사용하지 않습니다.</small></details>)}</div></section>
  {debug&&<DebugPanel entry={entry} context={context}/>}
 </article>;
}
