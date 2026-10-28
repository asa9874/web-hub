import type {PlaySession} from '../systems/playSession';
export default function PlayerResources({session,onInitialize,onRecovery}:{session:PlaySession;onInitialize:()=>void;onRecovery:()=>void}){
 const engine=session.world.runtime.ai.getCombat(),r=engine?.getResources(session.playerId);
 if(!r)return <section className="ac-player-resources" aria-label="나의 전투 자원"><h3>전투 자원</h3><p>이 저장에는 전투 자원이 연결되지 않았습니다.</p><button disabled={session.isAdvancing()} onClick={onInitialize}>전투 시스템 연결</button></section>;
 return <section className="ac-player-resources" aria-label="나의 전투 자원">{(['hp','sp','mp'] as const).map(key=>{const max=r[key==='hp'?'maxHP':key==='sp'?'maxSP':'maxMP'];return <div key={key} data-resource={key}><label htmlFor={'player-resource-'+key}>{({hp:'체력',sp:'기력',mp:'마력'})[key]}<b>{r[key]}<small> / {max}</small></b></label><meter id={'player-resource-'+key} min={0} max={max} value={r[key]}/></div>;})}{r.hp<r.maxHP&&session.life&&<button disabled={session.isAdvancing()} onClick={onRecovery}>현장에서 30분 회복</button>}</section>;
}
