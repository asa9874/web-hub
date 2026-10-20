import CharacterImpactPanel from './CharacterImpactPanel';
import type {CharacterImpactInput} from '../types/characterImpact';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import type {CharacterSocialIdentity,RandomSocialSlot} from '../types/social';
import {positionRegistry,titleRegistry,normalizeRepresentatives,setRepresentative,removePosition,changeTitleState} from '../systems/socialRules';
import {ORGANIZATIONS} from '../data/social/config';
type Props={social:CharacterSocialIdentity;slots?:RandomSocialSlot[];debug?:boolean;onChange?:(social:CharacterSocialIdentity)=>void;impactCharacter?:CharacterImpactInput;impactPreview?:boolean};
export default function CharacterSocialPanel({social,slots=[],debug,onChange,impactCharacter,impactPreview}:Props){
 const [local,setLocal]=useState(()=>normalizeRepresentatives(social)),shown=onChange?normalizeRepresentatives(social):local;
 const commit=(next:CharacterSocialIdentity)=>onChange?onChange(next):setLocal(next);
 const select=(kind:'position'|'title',id:string)=>{const next=setRepresentative(shown,kind,id);if(next)commit(next);};
 return <section className="ac-character-social"><h3>직급·신분과 칭호</h3><div className="ac-social-overview"><p>대표 직급: <b>{positionRegistry.get(shown.primaryPositionId??'')?.name??'없음'}</b></p><p>대표 칭호: <b>{titleRegistry.get(shown.primaryTitleId??'')?.name??'없음'}</b></p><small>대표 표시는 계산 가중치를 바꾸지 않습니다. 유효한 전체 보유 항목을 계산합니다.</small></div>
  {impactCharacter&&<CharacterImpactPanel character={{...impactCharacter,...shown}} preview={impactPreview} debug={debug}/>}
  <h4>직급·신분 {shown.positions.length}개</h4>{shown.positions.length?<ul>{shown.positions.map(p=><li key={p.definitionId+'@'+p.organizationId}><Link to={`?view=catalog&kind=position&item=${p.definitionId}`}>{positionRegistry.get(p.definitionId)?.name??p.definitionId} ↗</Link><small> · {ORGANIZATIONS.find(o=>o.id===p.organizationId)?.name??p.organizationId}</small>{debug&&<button onClick={()=>commit(removePosition(shown,p.definitionId,p.organizationId))}>보유 제거 테스트</button>}</li>)}</ul>:<p>보유 직급·신분 없음</p>}
  <h4>칭호 {shown.titles.filter(t=>t.state==='active').length}개 · 이력 보존</h4>{shown.titles.length?<ul>{shown.titles.map(t=><li key={t.definitionId} className={t.state==='active'?'':'ac-social-inactive'}><Link to={`?view=catalog&kind=title&item=${t.definitionId}`}>{titleRegistry.get(t.definitionId)?.name??t.definitionId} ↗</Link><small> · {({confirmed:'사실 확인',alleged:'외부의 주장·낙인',disputed:'사실 다툼'})[t.fact]} · {({public:'공개',group:'일부 인지',secret:'비공개'})[t.visibility]} · {({active:'유효',revoked:'박탈 이력',invalidated:'무효화 이력'})[t.state]}</small>{debug&&t.state==='active'&&titleRegistry.get(t.definitionId)?.loss.possible&&<button onClick={()=>commit(changeTitleState(shown,t.definitionId,'revoked'))}>박탈 테스트</button>}</li>)}</ul>:<p>보유 칭호 없음</p>}
  {slots.map(slot=><details className="ac-random-slot" key={slot.id}><summary><b>?</b> 미확정 {slot.kind==='position'?'직급':'칭호'} 슬롯</summary><p>{slot.description}</p><p>후보 {slot.candidates.length}개 · 회차 시작 1회 · 소속 범위·배타·중복 검사 후 가중치 추첨 예정</p></details>)}
  {debug&&<div className="ac-social-representative-test"><h4>대표 표시 설정</h4><p className="ac-note">{onChange?'호출자에게 변경 레코드를 전달합니다.':'이 패널 안의 임시 변경입니다. 원본 캐릭터·템플릿은 유지됩니다.'} 대표 선택은 보유 효과와 요소 영향력을 바꾸지 않습니다.</p>{shown.positions.length>0&&<label>대표 직급<select aria-label="대표 직급 변경" value={shown.primaryPositionId??''} onChange={e=>select('position',e.target.value)}>{[...new Set(shown.positions.map(p=>p.definitionId))].map(id=><option key={id} value={id}>{positionRegistry.get(id)?.name}</option>)}</select></label>}{shown.titles.some(t=>t.state==='active')&&<label>대표 칭호<select aria-label="대표 칭호 변경" value={shown.primaryTitleId??''} onChange={e=>select('title',e.target.value)}>{shown.titles.filter(t=>t.state==='active').map(t=><option key={t.definitionId} value={t.definitionId}>{titleRegistry.get(t.definitionId)?.name}</option>)}</select></label>}</div>}
 </section>;
}
