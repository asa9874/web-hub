import {useEffect,useRef,useState} from 'react';
import {LIVING_TESTS} from './livingData';
import type {LivingTest} from './livingData';
import {TEST_AREAS} from './config';
import type {TestArea} from './config';
import {MONSTERS,BOSSES,NPCS,PATTERN_LABELS,monsterById} from './castData';
import type {NpcId} from './castData';
import {ACTING_CAST,ACTING_POSES,ACTING_LABELS} from './actingData';
import type {ActingPose} from './actingData';
import {SPEAKERS} from './dialogueModel';
import type {Speaker} from './dialogueModel';
import {AMBIENT_NPCS} from './ambientDialogueData';
export default function TestPanel({quality,monsterId,npcId,onArea,onMonster,onNpc,onLiving,onDirection,onBubble,onPose,onClose}:{quality?:{p95Ms:number;textureMiB:number};monsterId:string;npcId:NpcId;onArea:(area:TestArea)=>void;onMonster:(id:string)=>void;onNpc:(id:NpcId)=>void;onLiving:(id:LivingTest)=>void;onDirection:(id:NpcId)=>void;onBubble:(id:string)=>void;onPose:(id:Speaker,pose:ActingPose)=>void;onClose:()=>void}){
  const [monster,setMonster]=useState(monsterId),[npc,setNpc]=useState<NpcId>(npcId);
  const [actor,setActor]=useState<Speaker>('witch'),[pose,setPose]=useState<ActingPose>('talk');
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{const previous=document.activeElement as HTMLElement|null;root.current?.querySelector('button')?.focus({preventScroll:true});return()=>previous?.focus({preventScroll:true});},[]);
  return <nav ref={root} className="wt-test-panel wt-test-lab" aria-label="기능별 테스트 이동" onKeyDown={e=>{e.stopPropagation();if(e.key==='Escape')onClose();if(e.key==='Tab'){const items=Array.from(root.current?.querySelectorAll<HTMLElement>('button,select')??[]),i=items.indexOf(document.activeElement as HTMLElement);e.preventDefault();items[(i+(e.shiftKey?-1:1)+items.length)%items.length]?.focus();}}}>
    <header><strong>무대 리허설</strong><button onClick={onClose}>닫기 · Esc</button></header>
    <small>선택 중에는 무대가 멈춥니다. 이동한 곳이 재등장 시작점이 됩니다.</small>
    <div>{TEST_AREAS.filter(a=>a.id!=='dialogue').map(area=><button key={area.id} onClick={()=>onArea(area.id)}>{area.label}</button>)}</div>
    <section><label>몬스터 전투<select aria-label="테스트할 몬스터" value={monster} onChange={e=>setMonster(e.target.value)}><optgroup label="일반 몬스터 · 20종">{MONSTERS.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</optgroup><optgroup label="보스 후보">{BOSSES.map(b=><option key={b.id} value={b.id}>{b.name} · BOSS</option>)}</optgroup></select></label><p>{PATTERN_LABELS[monsterById(monster).pattern]} · HP {monsterById(monster).hp}</p><button onClick={()=>onMonster(monster)}>선택 몬스터 소환</button></section>
    <section><label>NPC와 대화<select aria-label="소환할 NPC" value={npc} onChange={e=>setNpc(e.target.value as NpcId)}><option value="flora">플로라</option>{NPCS.map(n=><option key={n.id} value={n.id}>{n.name}</option>)}</select></label><p>골판지 인형 · 다섯 감정 · 고유 말소리</p><button onClick={()=>onNpc(npc)}>선택 NPC 소환</button></section>
    <section><strong>대화 · 무대 연출</strong><p>위에서 선택한 NPC로 확대 → 소품 두드리기 → 도망 추적 → 대화 복귀를 확인합니다.</p><button onClick={()=>onDirection(npc)}>선택 NPC 연출 리허설</button><div className="wt-speech-test-buttons">{AMBIENT_NPCS.map(n=><button key={n.id} onClick={()=>onBubble(n.id)}>말풍선 · {SPEAKERS[n.npc].name} · {n.trigger==='near'?'접근':'E'}</button>)}</div></section>
    <section><label>골판지 동작<select aria-label="동작을 볼 인물" value={actor} onChange={e=>setActor(e.target.value as Speaker)}>{ACTING_CAST.map(id=><option key={id} value={id}>{SPEAKERS[id].name}</option>)}</select></label><label>자세<select aria-label="테스트할 골판지 동작" value={pose} onChange={e=>setPose(e.target.value as ActingPose)}>{ACTING_POSES.map(p=><option key={p} value={p}>{ACTING_LABELS[p]}</option>)}</select></label><button onClick={()=>onPose(actor,pose)}>선택 동작 보기</button></section>
    <section className="wt-living-tests"><strong>생동감 · 함정 실험실</strong><div>{LIVING_TESTS.map(t=><button key={t.id} onClick={()=>onLiving(t.id)}>{t.label}</button>)}</div></section>
    <section className="wt-quality-readout"><strong>조작감 확인</strong><p>Space 짧게: 낮은 점프 · 길게: 높은 점프<br/>이동 발판: 기울어진 끝에서 점프 / 순간이동<br/>전투: 타격 순간 멈춤 · 방향과 범위 예고</p>{quality&&<small>직전 180프레임 P95 {quality.p95Ms}ms · 무대 이미지 RGBA 약 {quality.textureMiB}MiB<br/>기기별 실제 측정치이며 전체 브라우저 메모리는 포함하지 않습니다.</small>}</section>
    <small>F / J 마법 · Shift / K 순간이동 · Q / L 방어 · Space 점프</small>
  </nav>;
}
