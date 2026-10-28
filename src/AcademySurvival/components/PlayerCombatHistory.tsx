import {useState} from 'react';
import type {CombatEngine} from '../types/combat';
import {formatGameDate,formatGameTime} from '../systems/calendar';
export default function PlayerCombatHistory({engine,playerId,onInspect}:{engine?:CombatEngine;playerId:string;onInspect:(id:string)=>void}){
 const [selected,setSelected]=useState('');if(!engine)return null;
 const rows=engine.getBattles().filter(b=>b.fighters.some(f=>f.characterId===playerId)).slice(-30).reverse(),chosen=rows.find(b=>b.id===selected),name=(id:string)=>engine.ai.world.getCharacterReadSnapshot(id).name;
 return <section className="ac-player-combat-history" aria-label="나의 전투 기록"><h3>전투 기록</h3>{!rows.length&&<p className="ac-help">직접 참여한 전투가 없습니다.</p>}{rows.map(b=><details key={b.id} open={b.id===chosen?.id} onToggle={e=>{if(e.currentTarget.open)setSelected(b.id);else if(selected===b.id)setSelected('');}}><summary>{formatGameDate(b.startedAt)} {formatGameTime(b.startedAt)} · {b.mode==='sparring'?'대련':'실전'} · {b.status==='active'?'진행 중':b.outcome==='draw'?'무승부':b.outcome==='interrupted'?'중단':b.fighters.find(f=>f.characterId===playerId)?.team===b.winningTeam?'승리':'패배'} · {b.round}라운드</summary><div><p>{engine.ai.world.catalog.getLocation(b.locationId).name}</p><p>{b.fighters.map(f=><button key={f.characterId} onClick={()=>onInspect(f.characterId)}>{name(f.characterId)}</button>)}</p><div className="ac-combat-log" role="log">{b.logs.map((l,i)=><p key={i}>{l.round}턴 · {name(l.actorId)} · {l.message}</p>)}</div></div></details>)}</section>;
}
