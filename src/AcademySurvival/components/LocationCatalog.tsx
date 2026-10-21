import {useState} from 'react';
import {locations} from '../data/locations';
import {useLocationWorld,useLocationRevision} from './LocationWorldContext';
import LocationTree from './LocationTree';
import LocationDetail from './LocationDetail';
import DetailDialog from './DetailDialog';
import LocationCharacterDialog from './LocationCharacterDialog';
export default function LocationCatalog({onTest}:{onTest:()=>void}){const world=useLocationWorld();useLocationRevision(world);const [selected,setSelected]=useState('academy'),[detail,setDetail]=useState<string|null>(null),[character,setCharacter]=useState<string|null>(null);return <section><header className="ac-location-heading"><div><h2>장소 도감</h2><p>{locations.length}개 장소 · 포함 계층과 실제 통행로는 별개입니다.</p></div><button className="ac-enter" onClick={onTest}>테스트</button></header><p className="ac-note">장소를 누르면 상세 팝업이 열립니다. 현재 등록된 인물은 본게임 이전의 기준 미리보기이며 세레나의 랜덤 슬롯을 확정하지 않습니다.</p><LocationTree selected={selected} onSelect={id=>{setSelected(id);setDetail(id);}}/>{detail&&!character&&<DetailDialog title="장소 상세" onClose={()=>setDetail(null)}><LocationDetail id={detail} onSelect={id=>{setSelected(id);setDetail(id);}} world={world} onCharacter={setCharacter}/></DetailDialog>}{character&&<LocationCharacterDialog character={world.getCharacter(character)} onClose={()=>setCharacter(null)}/>}</section>;}
