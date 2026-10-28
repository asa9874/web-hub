import {skillRegistry} from '../data/skills';
import {GIFT_FIELD_NAMES} from '../data/giftCodex';
import './GiftCodex.css';
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
  <header><p className="ac-kicker">{entry.kind==='trait'?'SKILL RECORD':'GIFT RECORD'} <span>{RARITIES[entry.rarity].name}</span></p><h2>{entry.name}</h2><p className="ac-breadcrumb">{entry.kind==='trait'?`${CATEGORIES[entry.category]} / ${FAMILIES[entry.family].name} / ${entry.tier+1}단계`:`${GIFT_CATEGORIES[entry.category]} / 선천 · 고정 성능`}</p><button className="ac-copy" onClick={copy}>{copied?'링크 복사됨':'항목 링크 복사 ↗'}</button></header>
  {entry.kind==='gift'&&entry.codex?<><p className="ac-gift-lead">{entry.codex.summary}</p><section className="ac-gift-lore"><h3>권능의 기록</h3>{entry.lore.split(/(?<=\.)\s+/).filter(Boolean).map((text,i)=><p key={i}>{text}</p>)}</section><div className="ac-gift-facts"><section><h3>발동과 범위</h3><p>{entry.codex.scope}</p>{entry.codex.field&&<small>{GIFT_FIELD_NAMES[entry.codex.field]}</small>}</section><section><h3>한계와 약점</h3>{entry.codex.limits.map(text=><p key={text}>{text}</p>)}</section></div><details><summary>활용 장면</summary>{entry.codex.examples.map(text=><p key={text}>{text}</p>)}</details></>:<blockquote>{entry.lore}</blockquote>}
  <ImpactBadge impact={entry.impact}/>
  <section className="ac-gift-runtime"><h3>실제 게임 적용</h3>{entry.kind==='gift'&&entry.codex?<><strong data-runtime={entry.codex.runtime}>{entry.codex.runtime==='implemented'?'실행 연결':entry.codex.runtime==='partial'?'일부 실행 · 추가 연동 필요':'설정 등록 · 실행 연동 대기'}</strong>{entry.codex.implemented.length?<ul>{entry.codex.implemented.map(text=><li key={text}>{text}</li>)}</ul>:<p>현재 실제 게임 효과는 적용되지 않습니다.</p>}{entry.codex.pending.length>0&&<details><summary>추가 연결이 필요한 효과</summary>{entry.codex.pending.map(text=><p key={text}>{text}</p>)}</details>}{entry.codex.generation==='retired'&&<p>신규 생성에서 제외되었습니다. 기존 보유 ID와 효과는 보존됩니다.</p>}{entry.codex.generation==='pending'&&<p>실행이 연결될 때까지 신규 캐릭터에게 추첨되지 않습니다.</p>}<details><summary>규칙 정의 · 실행과 구분</summary><ul className="ac-effects">{entry.effects.map(effect=><li key={effect.id}>{effectText(effect)}</li>)}</ul></details></>:<ul className="ac-effects">{entry.effects.map(effect=><li key={effect.id}>{effectText(effect)}</li>)}</ul>}</section>
  <section><h3>{entry.kind==='trait'?'시작 스킬 기록 슬롯':'시작 추첨 확률'} <span>임시 모델</span></h3><p className="ac-probability">{formatChance(row?.probability??0)} <small>/ 적격 첫 슬롯</small></p><p>{row?'현재 기준의 추첨 풀에서 해당 슬롯이 이 항목을 고를 조건부 확률입니다.':'현재 기준의 시작 풀에는 포함되지 않습니다. 조건 미충족 또는 시작 획득 불가입니다.'}</p><p className="ac-note">{pool.length}개 적격 · {debug?`가중치 ${entry.birth.weight} / 총 ${total.toFixed(2)} · `:''}중복·상호 배타 항목을 제외한 다음 슬롯은 다시 정규화합니다. 전체 캐릭터 보유 확률이 아닙니다.</p>
   <div className="ac-distribution">{(entry.kind==='trait'?PROBABILITY.traitCounts:PROBABILITY.giftCounts).map(r=><span key={r.count}>{r.count}개 <b>{formatChance(r.probability)}</b></span>)}</div>
   {entry.birth.condition&&<p>시작 적격 조건: {conditionText(entry.birth.condition)}</p>}
   {entry.kind==='gift'&&<p className="ac-note">출생 시에만 결정됩니다. 훈련으로 새로 얻지 않으며, 기프트 자체의 단계·성장은 없습니다.</p>}
  </section>
  {entry.kind==='trait'&&<>
   <section><h3>실제 스킬 성장 조건</h3>{skillRegistry.get(entry.id)?.legacyOnly?<p>고유 설정·이전 보유 기록을 보존하는 항목입니다. 일반 수련으로 새로 습득하지 않습니다.</p>:<p>관련 계열의 실제 수련 {skillRegistry.get(entry.id)?.practiceMinutes}분 · 기초 숙련 {skillRegistry.get(entry.id)?.minRank} 이상 · 선행 스킬 숙련을 확인합니다. 현재 회차 스킬 트리에서 충족 여부와 분기 선택을 확인하세요.</p>}<p className="ac-note">스킬은 행동으로 습득·수련합니다. 시작 슬롯 수는 전체 보유 스킬 수의 상한이 아닙니다. 구형 추상 플래그·확률표를 실제 완료 사건으로 처리하지 않습니다.</p></section><details><summary>구형 도감의 설계 메모 · 실행 조건과 구분</summary>
   <section><h3>진행 중 획득 조건</h3>{entry.acquisitions.map((acquisition,i)=><p key={i}>{acquisition.note}<br/>{conditionText(acquisition.condition)}<br/><b>조건 충족 후 {formatChance(acquisition.chance)}</b></p>)}</section>
   <section><h3>진화 기록</h3>{previous.length?<><p className="ac-note">이전 단계</p><div className="ac-neighbors">{previous.map(p=><button key={p.id} onClick={()=>onSelect(p.id)}>← {p.name}</button>)}</div></>:<p className="ac-note">선행 진화 없음 · 시작점 또는 독립 특성</p>}
    {entry.evolutions.length?entry.evolutions.map(edge=><div className="ac-evolution" key={edge.to}><button onClick={()=>onSelect(edge.to)}>{traitRegistry.get(edge.to)?.name} →</button><p>{edge.note}<br/>조건 충족 후 진화: <b>{formatChance(edge.chance)}</b></p></div>):<p className="ac-note">등록된 다음 진화 없음</p>}
    <p className="ac-note">진화 시 이전 단계를 대체합니다. 계열의 효과를 단계별로 중첩하지 않습니다.</p>
   </section>
  </details></>}
  <section><h3>이벤트 영향 관계 <span>모두 예정 · 미구현</span></h3><p className="ac-note">ID·태그로 연결한 기획 참조입니다. 실제 이벤트나 결과를 실행하지 않습니다.</p><div className="ac-event-list">{relatedEvents(entry).map(event=><details key={event.id}><summary>{event.title}<span>예정</span></summary><p>관련 태그: {event.tags.filter(t=>entry.eventTags.includes(t)).join(', ')}</p><p>{entry.effects.map(effectText).join(' / ')}</p><small>해당 태그·판정이 일치할 때만 적용. 영향력 수치는 계산에 사용하지 않습니다.</small></details>)}</div></section>
  {debug&&<DebugPanel entry={entry} context={context}/>}
 </article>;
}
