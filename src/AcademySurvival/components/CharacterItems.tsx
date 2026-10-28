import ItemArt from './ItemArt';
import type {ItemEngine} from '../types/item';
import {EQUIPMENT_SLOTS} from '../types/item';
import './Inventory.css';
import './EventScene.css';
import {SLOT_NAMES,RARITY_NAMES} from '../data/items';
export default function CharacterItems({engine,characterId,debug=false}:{engine?:ItemEngine;characterId:string;debug?:boolean}){
 if(!engine)return null;const player=engine.ai.world.getCharacters().find(c=>c.kind==='player'),viewer=player?.id??characterId,own=viewer===characterId;
 const rows=engine.getInventory(characterId).filter(i=>own||debug||i.location.kind==='equipped');
 const slots=[...EQUIPMENT_SLOTS,'reserved1','reserved2'] as const;
 return <section className="ac-character-items"><h3>{own?'소지품·장비':'관찰한 장비'}</h3><div className="ac-observed-equipment" aria-label="관찰 장비 2행 5열">{slots.map(slot=>{const i=rows.find(i=>i.location.kind==='equipped'&&i.location.slot===slot);let v;try{v=i?engine.getView(viewer,i.id,debug):undefined;}catch{/* Never reveal an unavailable item. */}return <article key={slot} className={'ac-observed-slot'+(!v?' is-empty':'')}><small>{slot==='reserved1'?'보조 공간':slot==='reserved2'?'추가 공간':SLOT_NAMES[slot]}</small><ItemArt definitionId={v?.definition?.id}/><strong>{v?.name??(slot.startsWith('reserved')?'확장 예정':'확인된 장비 없음')}</strong>{v?.definition&&<small>{RARITY_NAMES[v.definition.rarity]}</small>}</article>;})}</div>{(own||debug)&&<details><summary>소지품</summary>{rows.filter(i=>i.location.kind!=='equipped').map(i=>{const v=engine.getView(viewer,i.id,debug);return <p key={i.id}>{v.name} · {i.quantity}개</p>;})}</details>}{!own&&!debug&&<p className="ac-help">관찰 가능한 착용 장비만 표시합니다. 비공개 소지품은 열람할 수 없습니다.</p>}</section>;
}
