import {useState,useSyncExternalStore} from 'react';
import type {Character} from '../types/character';
import type {RelationshipGraph} from '../systems/relationships';
import {visibleRelationships,relationshipTypeRegistry} from '../systems/relationships';
import {RELATIONSHIP_METRICS} from '../data/relationships/config';
import type {RelationshipMetric} from '../types/relationship';
import {useOptionalRelationships} from './RelationshipContext';
const noop=()=>()=>{},zero=()=>0;
export default function CharacterRelationships({characterId,graph:provided,characters:providedCharacters,onInspect,debug=false}:{characterId:string;graph?:RelationshipGraph;characters?:readonly Character[];onInspect?:(id:string)=>void;debug?:boolean}){
 const shared=useOptionalRelationships(),graph=provided??shared?.graph;
 useSyncExternalStore(graph?.subscribe??noop,graph?.getSnapshot??zero,zero);useSyncExternalStore(shared?.world.subscribe??noop,shared?.world.getSnapshot??zero,zero);
 const characters=providedCharacters??shared?.world.getCharacters()??[],names=new Map(characters.map(c=>[c.id,c.name])),[query,setQuery]=useState(''),[type,setType]=useState('all');
 const inspect=onInspect??(!provided?shared?.inspectCharacter:undefined);
 const records=graph?.hasCharacter(characterId)?visibleRelationships(graph.getRelationshipsOf(characterId),debug):[],filtered=records.filter(r=>(type==='all'||r.relationshipTypeIds.includes(type))&&(names.get(r.targetCharacterId)??r.targetCharacterId).toLocaleLowerCase().includes(query.toLocaleLowerCase())),types=[...new Set(records.flatMap(r=>r.relationshipTypeIds))];
 return <section className="ac-character-relations ac-relationship-panel" aria-label="캐릭터 인간관계"><h3>인간관계</h3><p className="ac-note">{debug?'개발자 보기 · 비공개·비밀 포함':'공개된 관계만 표시'} · 감정과 관계 인식은 방향별로 독립적입니다.</p><div className="ac-relationship-filters"><input type="search" aria-label="관계 대상 검색" placeholder="상대 이름 검색" value={query} onChange={e=>setQuery(e.target.value)}/><select aria-label="관계 유형 필터" value={type} onChange={e=>setType(e.target.value)}><option value="all">모든 관계 유형</option>{types.map(id=><option key={id} value={id}>{relationshipTypeRegistry.get(id)?.name??id}</option>)}</select></div>{filtered.length?<ul>{filtered.map(r=><li key={r.targetCharacterId}><div><button disabled={!inspect} onClick={()=>inspect?.(r.targetCharacterId)}>{names.get(r.targetCharacterId)??r.targetCharacterId} {inspect?'↗':''}</button><span>{r.relationshipTypeIds.map(id=>relationshipTypeRegistry.get(id)?.name??id).join(' · ')||'유형 미지정'}</span></div><p>호감 {r.affection>0?'+':''}{r.affection} / 신뢰 {r.trust>0?'+':''}{r.trust} / 존경 {r.respect}</p><details><summary>상세 수치</summary><dl>{(Object.keys(RELATIONSHIP_METRICS) as RelationshipMetric[]).map(key=><div key={key}><dt>{RELATIONSHIP_METRICS[key].name}</dt><dd>{r[key]}</dd></div>)}</dl><p>상대 인지: {r.familiarity} {debug&&`· 공개 범위: ${r.visibility} · 출처: ${r.origin}`}</p></details></li>)}</ul>:<p className="ac-note">{records.length?'검색 조건에 맞는 관계 없음':'표시할 관계 없음 · 관계가 형성되지 않았거나 공개 정보가 없습니다.'}</p>}</section>;
}
