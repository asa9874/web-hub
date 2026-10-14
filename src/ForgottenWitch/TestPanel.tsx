import {useEffect,useRef,useState} from 'react';
import {LIVING_TESTS} from './livingData';
import type {LivingTest} from './livingData';
import {TEST_AREAS} from './config';
import type {TestArea} from './config';
import {MONSTERS,BOSSES,NPCS,PATTERN_LABELS,monsterById} from './castData';
import type {NpcId} from './castData';
export default function TestPanel({monsterId,npcId,onArea,onMonster,onNpc,onLiving,onClose}:{monsterId:string;npcId:NpcId;onArea:(area:TestArea)=>void;onMonster:(id:string)=>void;onNpc:(id:NpcId)=>void;onLiving:(id:LivingTest)=>void;onClose:()=>void}){
  const [monster,setMonster]=useState(monsterId),[npc,setNpc]=useState<NpcId>(npcId);
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{const previous=document.activeElement as HTMLElement|null;root.current?.querySelector('button')?.focus({preventScroll:true});return()=>previous?.focus({preventScroll:true});},[]);
  return <nav ref={root} className="wt-test-panel wt-test-lab" aria-label="기능별 테스트 이동" onKeyDown={e=>{e.stopPropagation();if(e.key==='Escape')onClose();if(e.key==='Tab'){const items=Array.from(root.current?.querySelectorAll<HTMLElement>('button,select')??[]),i=items.indexOf(document.activeElement as HTMLElement);e.preventDefault();items[(i+(e.shiftKey?-1:1)+items.length)%items.length]?.focus();}}}>
    <header><strong>무대 리허설</strong><button onClick={onClose}>닫기 · Esc</button></header>
    <small>선택 중에는 무대가 멈춥니다. 이동한 곳이 재등장 시작점이 됩니다.</small>
    <div>{TEST_AREAS.filter(a=>a.id!=='dialogue').map(area=><button key={area.id} onClick={()=>onArea(area.id)}>{area.label}</button>)}</div>
    <section><label>몬스터 전투<select aria-label="테스트할 몬스터" value={monster} onChange={e=>setMonster(e.target.value)}><optgroup label="일반 몬스터 · 20종">{MONSTERS.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</optgroup><optgroup label="보스 후보">{BOSSES.map(b=><option key={b.id} value={b.id}>{b.name} · BOSS</option>)}</optgroup></select></label><p>{PATTERN_LABELS[monsterById(monster).pattern]} · HP {monsterById(monster).hp}</p><button onClick={()=>onMonster(monster)}>선택 몬스터 소환</button></section>
    <section><label>NPC와 대화<select aria-label="소환할 NPC" value={npc} onChange={e=>setNpc(e.target.value as NpcId)}><option value="flora">플로라</option>{NPCS.map(n=><option key={n.id} value={n.id}>{n.name}</option>)}</select></label><p>골판지 인형 · 다섯 감정 · 고유 말소리</p><button onClick={()=>onNpc(npc)}>선택 NPC 소환</button></section>
    <section className="wt-living-tests"><strong>생동감 · 함정 실험실</strong><div>{LIVING_TESTS.map(t=><button key={t.id} onClick={()=>onLiving(t.id)}>{t.label}</button>)}</div></section>
    <small>F / J 마법 · Shift / K 구르기 · Space 점프</small>
  </nav>;
}
