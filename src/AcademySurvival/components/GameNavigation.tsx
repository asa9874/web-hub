import {GAME_DESTINATIONS} from './gameNavigationData';
export default function GameNavigation({selected,onSelect}:{selected:string;onSelect:(id:string)=>void}){
 return <nav className="ac-game-nav" aria-label="플레이 메뉴">{GAME_DESTINATIONS.map((d,i)=><button key={d.id} type="button" aria-label={d.label} aria-pressed={selected===d.id} title={d.label+(i<9?' · Alt+'+(i+1):'')} data-secondary={i>=8} onClick={()=>onSelect(d.id)}><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d.icon}/></svg><span>{d.short}</span></button>)}</nav>;
}
