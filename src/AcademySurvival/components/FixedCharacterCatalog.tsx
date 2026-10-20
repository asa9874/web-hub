import {useState} from 'react';
import {fixedCharacters} from '../systems/characterRegistry';
import CharacterStatusPanel from './CharacterStatusPanel';
import type {Character} from '../types/character';
import {makeInstance} from '../systems/statusApplication';
type Props={params:URLSearchParams;update:(patch:Record<string,string|null>,replace?:boolean)=>void};
// Fixed, explicit UI fixtures. Not registered NPCs and never campaign slot results.
const testRecord:Character={id:'panel-demo-record',kind:'player',name:'상태창 검증 레코드',age:17,gender:'미지정',species:'인간',origin:'검증용 데이터',schoolYear:1,affiliation:'상태창 테스트',title:'공통 레코드 예시',introduction:'회차 생성 없이 확정 레코드의 표시만 확인합니다.',summary:'고정 인물과 같은 Character 타입을 사용합니다.',background:['게임 인물이 아닌 UI 확인용 레코드다.'],personality:['차분함'],values:['기록의 일관성'],weaknesses:[],appearance:{description:'외형 이미지가 없는 레코드',provisional:true},objective:'같은 데이터가 캐릭터 종류와 무관하게 같은 규칙으로 표시되는지 확인',tendencies:[],stats:{STR:30,AGI:42,VIT:50,MAG:69,INT:100,WIL:121,CHA:200},proficiencyRanks:{'proficiency-sword':1},traitIds:[],giftIds:[],statuses:[makeInstance('status-fracture','demo-arm-fracture','crack','left-arm')],relationships:[]};
export default function FixedCharacterCatalog({params,update}:Props){
 const q=params.get('q')??'',debug=params.get('debug')==='1',list=fixedCharacters.filter(t=>(t.identity.name+' '+t.identity.englishName+' '+t.role).toLocaleLowerCase().includes(q.trim().toLocaleLowerCase())),selected=fixedCharacters.find(t=>t.id===params.get('item'))??list[0];
 const [demo,setDemo]=useState<'template'|'player'|'random_npc'>('template');
 return <>
  <div className="ac-searchbar"><label><span>검색</span><input type="search" aria-label="고정 등장인물 검색" value={q} placeholder="이름 또는 역할" onChange={e=>update({q:e.target.value},true)}/></label><span role="status">{list.length}명</span><button onClick={()=>update({q:null})}>검색 초기화</button></div>
  <div className="ac-character-layout"><aside className="ac-character-list" aria-label="고정 등장인물 목록">{list.length?list.map(t=><button className="ac-character-card" key={t.id} aria-pressed={selected?.id===t.id} onClick={()=>{update({item:t.id});setDemo('template');if(matchMedia('(max-width:720px)').matches)requestAnimationFrame(()=>document.getElementById('ac-character-reading')?.scrollIntoView({block:'start'}));}}><small>{t.role}</small><h2>{t.identity.name}</h2><span>{t.identity.schoolYear}학년 · {t.identity.species} · {t.identity.affiliation}</span><p>{t.identity.summary}</p></button>):<div className="ac-empty"><h3>일치하는 인물이 없습니다</h3><button onClick={()=>update({q:null})}>전체 인물 보기</button></div>}<p className="ac-note">모든 회차에 등장하도록 기획된 인물입니다. 여기서는 핵심 설정과 미확정 슬롯만 열람합니다.</p></aside>
   <div id="ac-character-reading">{debug&&<section className="ac-character-demo"><label>공통 상태창 확인<select aria-label="공통 상태창 표시 테스트" value={demo} onChange={e=>setDemo(e.target.value as typeof demo)}><option value="template">템플릿 미리보기</option><option value="player">실제 레코드 모드 · 플레이어 예시</option><option value="random_npc">실제 레코드 모드 · 랜덤 NPC 예시</option></select></label><p>실제 모드 예시는 회차 생성이나 세레나의 랜덤 슬롯 확정이 아닙니다. 동일한 명시적 레코드의 kind만 바꾸어 공통 UI를 확인합니다.</p></section>}
    {debug&&demo!=='template'?<CharacterStatusPanel mode="actual" character={{...testRecord,kind:demo}} debug/>:selected?<CharacterStatusPanel mode="template" template={selected} debug={debug}/>:<p className="ac-note">인물을 선택하세요.</p>}
   </div>
  </div>
 </>;
}
