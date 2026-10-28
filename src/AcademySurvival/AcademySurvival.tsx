import {GameAudioProvider} from './components/GameAudio';
import SkillTree from './components/SkillTree';import {skillDefinitions} from './data/skills';
import {ItemCatalog} from './components/InventoryPanel';
import CombatPanel from './components/CombatPanel';
import AcademyGroupsPanel from './components/AcademyGroupsPanel';
import DailyLifeCatalog from './components/DailyLifeCatalog';
import WorldLoreCatalog from './components/WorldLoreCatalog';
import ConversationPanel from './components/ConversationPanel';
import AcademicPanel from './components/AcademicPanel';
import {useAiEngine} from './components/aiHooks';
import Simulation from './components/Simulation';
import Gameplay,{PlayLauncher} from './components/Gameplay';
import {PlaySessionProvider} from './components/PlaySessionContext';
import {usePlaySession} from './components/playSessionHooks';
import LiveWorldProviders from './components/LiveWorldProviders';
import {WorldEventCatalog,WorldEventTester} from './components/WorldEvents';
import MemoryCatalog from './components/MemoryCatalog';
import MemoryTester from './components/MemoryTester';
import InteractionCatalog from './components/InteractionCatalog';
import InteractionTester from './components/InteractionTester';
import {AiProvider} from './components/AiProvider';
import AiCatalog from './components/AiCatalog';
import AiTester from './components/AiTester';
import FeatureNotes from './components/FeatureNotes';
import {MotivationProvider} from './components/MotivationProvider';
import MotivationCatalog from './components/MotivationCatalog';
import MotivationTester from './components/MotivationTester';
import {ScheduleProvider} from './components/ScheduleContext';
import ScheduleCatalog from './components/ScheduleCatalog';
import ScheduleTester from './components/ScheduleTester';
import LocationCharacterDialog from './components/LocationCharacterDialog';
import {RelationshipProvider,useRelationships} from './components/RelationshipContext';
import RelationshipCatalog from './components/RelationshipCatalog';
import RelationshipTester from './components/RelationshipTester';
import {locations} from './data/locations';
import {LocationWorldProvider} from './components/LocationWorldContext';
import LocationCatalog from './components/LocationCatalog';
import LocationTester from './components/LocationTester';
import {GameTimeProvider} from './components/GameTimeContext';
import GameTimeBar from './components/GameTimeBar';
import CalendarCatalog from './components/CalendarCatalog';
import TimeTester from './components/TimeTester';
import DispositionCatalog from './components/DispositionCatalog';
import {dispositions} from './systems/morality';
import { Link, useSearchParams } from 'react-router-dom';
import type { Context, GiftCategory, Rarity } from './types';
import {EMPTY_CONTEXT,GIFT_CATEGORIES,impactLabel,RARITIES} from './data/config';
import { entries, gifts, traits, validationIssues } from './systems/registry';
import { matches, sortGifts } from './systems/search';
import OrganizationCatalog from './components/OrganizationCatalog';
import {organizations} from './systems/organizations';
import NpcGenerator from './components/NpcGenerator';
import NumericSystems from './components/NumericSystems';
import CatalogEntryDialog,{catalogEntryReference} from './components/CatalogEntryDialog';
import KnowledgeCatalog from './components/KnowledgeCatalog';
import StatusCatalog from './components/StatusCatalog';
import FixedCharacterCatalog from './components/FixedCharacterCatalog';
import {fixedCharacters} from './systems/characterRegistry';
import {statuses} from './systems/statusRegistry';
import {stats,proficiencies} from './systems/knowledgeRegistry';
import SocialCatalog from './components/SocialCatalog';
import ImpactFilters from './components/ImpactFilters';
import {positions,titles} from './systems/socialRegistry';
import {impactGrade} from './systems/impact';
import './AcademySurvival.css';
import './components/AcademyGameDesign.css';
import './components/GamePolish.css';

const CONTEXTS:Record<string,{name:string;context:Context}>={
 admission:{name:'일반 입학생',context:EMPTY_CONTEXT},
 swordsman:{name:'검술 60점 지원자',context:{...EMPTY_CONTEXT,stats:{sword:60}}},
 crisis:{name:'구조·위기 상황',context:{...EMPTY_CONTEXT,tags:['rescue','danger','injured','under-pressure'],stats:{will:35},flags:['companion-distress']}},
};
export default function AcademySurvival(){return <GameAudioProvider><PlaySessionProvider><AcademyWorld/></PlaySessionProvider></GameAudioProvider>;}
function AcademyWorld(){const {session,generation}=usePlaySession();return session?<LiveWorldProviders key={generation} session={session}><AcademyContent/></LiveWorldProviders>:<GameTimeProvider><LocationWorldProvider><RelationshipProvider><ScheduleProvider><MotivationProvider><AiProvider><AcademyContent/></AiProvider></MotivationProvider></ScheduleProvider></RelationshipProvider></LocationWorldProvider></GameTimeProvider>;}
function AcademyContent(){
 const relationshipContext=useRelationships();
 const useAiEngineValueGroups=useAiEngine().getGroups();
 const {session}=usePlaySession(),officialEngine=useAiEngine().getAcademyEvents(),academicEngine=useAiEngine().getAcademics(),conversationInteractions=useAiEngine().interactions;
 const [params,setParams]=useSearchParams(),catalog=params.get('view')==='catalog',timeTesterView=params.get('view')==='time-tester',generatorView=params.get('view')==='npc-generator',kind=params.get('kind')==='gift'?'gift':'trait',query=params.get('q')??'',category=params.get('category')??'all',family=params.get('family')??'all',rarity=params.get('rarity')??'all',debug=params.get('debug')==='1';
 const context=CONTEXTS[params.get('context')??'admission']??CONTEXTS.admission;
 const combatEngine=useAiEngine().getCombat(),combatView=params.get('kind')==='combat';
 const groupsView=params.get('kind')==='academy-groups';
 const dailyLifeView=params.get('kind')==='daily-life';
 const worldLoreView=params.get('kind')==='world-lore',academicView=params.get('kind')==='academic',conversationView=params.get('kind')==='conversation';
 const worldEventView=params.get('kind')==='world-event',worldEventTesterView=params.get('view')==='world-event-tester';
 const memoryView=params.get('kind')==='memory',memoryTesterView=params.get('view')==='memory-tester';
 const interactionView=params.get('kind')==='interaction',outcomeView=params.get('kind')==='outcome',interactionTesterView=params.get('view')==='interaction-tester',outcomeTesterView=params.get('view')==='outcome-tester';
 const aiView=params.get('kind')==='ai',aiTesterView=params.get('view')==='ai-tester',featuresView=params.get('kind')==='features';
 const motivationView=params.get('kind')==='motivation',motivationTesterView=params.get('view')==='motivation-tester';
 const scheduleView=params.get('kind')==='schedule',scheduleTesterView=params.get('view')==='schedule-tester';
 const relationshipView=params.get('kind')==='relationship',relationshipTesterView=params.get('view')==='relationship-tester';
 const locationView=params.get('kind')==='location',locationTesterView=params.get('view')==='location-tester';
 const calendarView=params.get('kind')==='calendar';
 const dispositionView=params.get('kind')==='disposition';
 const organizationView=params.get('kind')==='organization';
 const itemView=params.get('kind')==='items';
 const numericView=params.get('kind')==='numbers';
 const socialKind=params.get('kind')==='position'?'position':params.get('kind')==='title'?'title':null;
 const statusView=params.get('kind')==='status',characterView=params.get('kind')==='character';
 const referenceKind=params.get('kind')==='stat'?'stat':params.get('kind')==='proficiency'?'proficiency':null;
 const clamp=(value:string|null,fallback:number)=>value===null||!Number.isFinite(Number(value))?fallback:Math.max(0,Math.min(1000,Number(value)));
 const min=clamp(params.get('min'),0),max=Math.max(min,clamp(params.get('max'),1000)),order=params.get('order')??(kind==='trait'?'name':'impact-desc');
 const update=(patch:Record<string,string|null>,replace=false)=>{const next=new URLSearchParams(window.location.search);Object.entries(patch).forEach(([key,value])=>{if(value===null||value==='')next.delete(key);else next.set(key,value);});setParams(next,{replace});};
 const switchKind=(next:string)=>update({kind:next,category:null,family:null,rarity:null,item:null,min:null,max:null,q:null,sub:null,polarity:null,duration:null,staged:null,grade:null,domain:null,acquire:null,group:null,visibility:null,order:null,condition:null,behavior:null});
 const select=(id:string)=>update({item:id,kind:id.startsWith('gift-')?'gift':'trait'});
 const source=kind==='trait'?traits:gifts;
 const results=source.filter(entry=>(category==='all'||entry.category===category)&&(rarity==='all'||entry.rarity===rarity)&&matches(entry,query)&&entry.impact.baseImpact>=min&&entry.impact.baseImpact<=max&&(params.get('grade')===null||params.get('grade')==='all'||impactGrade(entry.impact.baseImpact)?.id===params.get('grade'))&&(params.get('domain')===null||params.get('domain')==='all'||entry.impact.domains.includes(params.get('domain') as never))&&(entry.kind==='gift'||family==='all'||entry.family===family));
 const selectedId=params.get('item')??'';
 const sorted=sortGifts(results.filter(g=>g.kind==='gift'),order);
 const reset=()=>update({category:null,family:null,rarity:null,min:null,max:null,q:null,grade:null,domain:null});
 const reference=catalogEntryReference(params),playing=params.get('view')==='play'&&!!session,launching=!params.get('view')||params.get('view')==='play'&&!session;
 return <main className={"ac-page ac-compact-catalog"+(playing?' ac-playing':'')+(launching?' ac-launching':'')} onClickCapture={event=>{
  if((event.target as Element).closest('dialog'))return;
  const link=(event.target as Element).closest<HTMLAnchorElement>('a[href]');
  if(!link||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
  const url=new URL(link.href),next=catalogEntryReference(url.searchParams);
  if(url.origin===location.origin&&url.pathname===location.pathname&&next){event.preventDefault();update({kind:next.kind,item:next.id});}
 }}>
  {!playing&&(launching?<header className="ac-top ac-title-tools"><Link to="/" className="ac-back">← WEB HUB</Link><details className="ac-launch-tools"><summary>설정집·개발 도구</summary><div><button onClick={()=>update({view:'catalog',kind:'calendar',item:null})}>세계 설정집</button><button onClick={()=>update({view:'npc-generator'})}>NPC 생성 테스트</button><button onClick={()=>update({view:'time-tester',item:null})}>시간 테스트</button><button onClick={()=>update({view:'simulation',item:null})}>시뮬레이션</button></div></details></header>:<header className="ac-top"><Link to="/" className="ac-back">← WEB HUB</Link><button className="ac-brand" onClick={()=>update({view:null})}>아카데미에서 살아남기<span>ACADEMY SURVIVAL / ARCHIVE</span></button><button className="ac-generator-link" onClick={()=>update({view:'npc-generator'})}>NPC 생성 테스트</button><button className="ac-generator-link" onClick={()=>update({view:'time-tester',item:null})}>시간 테스트</button><button className="ac-generator-link" onClick={()=>update({view:'simulation',item:null})}>시뮬레이션</button><GameTimeBar onOpenCalendar={()=>update({view:'catalog',kind:'calendar',item:null})}/><span className="ac-edition">CONTENT EDITION 01</span></header>)}
  {!params.get('view')&&<PlayLauncher onPlay={()=>update({view:'play',item:null})}/>}
  {session&&params.get('view')!=='play'&&<p className="ac-note">플레이 세션을 유지하고 있습니다. <button onClick={()=>update({view:'play',item:null})}>플레이로 돌아가기</button> · 설정집·테스트 화면은 개발 자료이며 플레이어 시야와 구분됩니다.</p>}
  {params.get('view')==='play'?(session?<Gameplay session={session} onArchive={()=>update({view:'catalog',kind:'calendar',item:null})} onSimulator={()=>update({view:'simulation',item:null})}/>:<PlayLauncher onPlay={()=>update({view:'play',item:null})}/>):params.get('view')==='simulation'?<Simulation onClose={()=>update({view:'catalog',kind:'features'})}/>:worldEventTesterView?<WorldEventTester onClose={()=>update({view:'catalog',kind:'world-event',item:null})}/>:memoryTesterView?<MemoryTester onClose={()=>update({view:'catalog',kind:'memory',item:null})}/>:interactionTesterView||outcomeTesterView?<InteractionTester effectsOnly={outcomeTesterView} onClose={()=>update({view:'catalog',kind:outcomeTesterView?'outcome':'interaction',item:null})}/>:aiTesterView?<AiTester onClose={()=>update({view:'catalog',kind:'ai',item:null})}/>:motivationTesterView?<MotivationTester onClose={()=>update({view:'catalog',kind:'motivation',item:null})}/>:scheduleTesterView?<ScheduleTester onClose={()=>update({view:'catalog',kind:'schedule',item:null})}/>:relationshipTesterView?<RelationshipTester onClose={()=>update({view:'catalog',kind:'relationship',item:null})}/>:locationTesterView?<LocationTester onClose={()=>update({view:'catalog',kind:'location',item:null})}/>:timeTesterView?<TimeTester/>:generatorView?<NpcGenerator/>:!catalog?<section className="ac-intro">
   <div className="ac-intro-copy"><p className="ac-kicker">입학 기록실 / 세계관 설정집</p><h1>아카데미에서<br/><em>살아남기</em></h1><p className="ac-intro-description">같은 교복 아래, 서로 다른 재능과 비밀.<br/>검을 처음 쥔 학생부터 이름을 숨긴 기프트 보유자까지.</p><button className="ac-enter" onClick={()=>update({view:'catalog'})}>설정집 <span>기록 열람 →</span></button><p className="ac-scope">새 생활에서 캐릭터를 생성하고 자동·수동으로 교정을 살아갑니다. 정식 전투·아이템·상세 학사 평가와 다년 플레이 검증은 후속 범위입니다.</p></div>
   <aside className="ac-volume" aria-label="도감 구성"><div className="ac-volume-mark" aria-hidden="true">A<span>Ⅰ</span></div><p>등록된 기록</p><div className="ac-volume-row"><span>SKILLS<small>행동으로 익히는 성장 계보</small></span><strong>{skillDefinitions.length}</strong></div><div className="ac-volume-row"><span>GIFTS<small>태어날 때 정해진 기적</small></span><strong>{gifts.length}</strong></div><div className="ac-volume-row"><span>ATTRIBUTES<small>공통 바탕과 등급</small></span><strong>{stats.length}</strong></div><div className="ac-volume-row"><span>PROFICIENCIES<small>독립적인 기술의 경지</small></span><strong>{proficiencies.length}</strong></div><div className="ac-volume-row"><span>STATUSES<small>사건이 남긴 변화</small></span><strong>{statuses.length}</strong></div><div className="ac-volume-row"><span>CHARACTERS<small>회차를 잇는 고정 인물</small></span><strong>{fixedCharacters.length}</strong></div><div className="ac-volume-note">수치는 초기 밸런스안입니다.<br/>고정 인물의 예정 서사 기록은 실제 실행 이벤트와 구분됩니다.</div></aside>
   <div className="ac-intro-samples">{[traits[0],traits[43],gifts[90]].map(entry=><button key={entry.id} onClick={()=>update({view:'catalog',kind:entry.kind,item:entry.id})}><small>{entry.kind==='trait'?'스킬':'기프트'}</small><strong>{entry.name}</strong><p>{entry.lore}</p><span>기록 보기 ↗</span></button>)}</div>
  </section>:<>
   <section className="ac-catalog-top"><div><p className="ac-kicker">RECORDS / {entries.length+stats.length+proficiencies.length+statuses.length+fixedCharacters.length+positions.length+titles.length+organizations.length+dispositions.length+locations.length} ENTRIES</p><h1>설정집</h1></div><div className="ac-tabs" role="group" aria-label="도감 종류"><button aria-pressed={!academicView&&!worldEventView&&!memoryView&&!interactionView&&!outcomeView&&!aiView&&!featuresView&&!motivationView&&!scheduleView&&!relationshipView&&!locationView&&!calendarView&&!dispositionView&&!organizationView&&!numericView&&!socialKind&&!characterView&&!statusView&&!referenceKind&&kind==='trait'} onClick={()=>switchKind('trait')}>특성 <span>{traits.length}</span></button><button aria-pressed={!academicView&&!worldEventView&&!memoryView&&!interactionView&&!outcomeView&&!aiView&&!featuresView&&!motivationView&&!scheduleView&&!relationshipView&&!locationView&&!calendarView&&!dispositionView&&!organizationView&&!numericView&&!socialKind&&!characterView&&!statusView&&!referenceKind&&kind==='gift'} onClick={()=>switchKind('gift')}>기프트 <span>{gifts.length}</span></button><button aria-pressed={referenceKind==='stat'} onClick={()=>switchKind('stat')}>능력치 <span>{stats.length}</span></button><button aria-pressed={referenceKind==='proficiency'} onClick={()=>switchKind('proficiency')}>숙련도 <span>{proficiencies.length}</span></button><button aria-pressed={statusView} onClick={()=>switchKind('status')}>상태 <span>{statuses.length}</span></button><button aria-pressed={characterView} onClick={()=>switchKind('character')}>고정 등장인물 <span>{fixedCharacters.length}</span></button><button aria-pressed={socialKind==='position'} onClick={()=>switchKind('position')}>직급·신분 <span>{positions.length}</span></button><button aria-pressed={socialKind==='title'} onClick={()=>switchKind('title')}>칭호 <span>{titles.length}</span></button><button aria-pressed={dispositionView} onClick={()=>switchKind('disposition')}>성향 <span>{dispositions.length}</span></button><button aria-pressed={itemView} onClick={()=>switchKind('items')}>아이템·장비</button><button aria-pressed={combatView} onClick={()=>switchKind('combat')}>공통 판정·전투</button><button aria-pressed={groupsView} onClick={()=>switchKind('academy-groups')}>동아리·학생회</button><button aria-pressed={dailyLifeView} onClick={()=>switchKind('daily-life')}>기숙사·일상생활</button><button aria-pressed={worldLoreView} onClick={()=>switchKind('world-lore')}>세계관</button><button aria-pressed={conversationView} onClick={()=>switchKind('conversation')}>대화·사회생활</button><button aria-pressed={academicView} onClick={()=>switchKind('academic')}>학사·수업</button><button aria-pressed={worldEventView} onClick={()=>switchKind('world-event')}>세계 이벤트</button><button aria-pressed={memoryView} onClick={()=>switchKind('memory')}>NPC 기억·정보</button><button aria-pressed={interactionView} onClick={()=>switchKind('interaction')}>NPC 상호작용</button><button aria-pressed={outcomeView} onClick={()=>switchKind('outcome')}>행동 결과·효과</button><button aria-pressed={featuresView} onClick={()=>switchKind('features')}>기능 노트</button><button aria-pressed={aiView} onClick={()=>switchKind('ai')}>NPC 자율 행동 AI</button><button aria-pressed={motivationView} onClick={()=>switchKind('motivation')}>욕구·목표</button><button aria-pressed={scheduleView} onClick={()=>switchKind('schedule')}>NPC 일과표</button><button aria-pressed={relationshipView} onClick={()=>switchKind('relationship')}>인간관계</button><button aria-pressed={locationView} onClick={()=>switchKind('location')}>장소 <span>{locations.length}</span></button><button aria-pressed={calendarView} onClick={()=>switchKind('calendar')}>시간·달력</button><button aria-pressed={numericView} onClick={()=>switchKind('numbers')}>수치 체계</button><button aria-pressed={organizationView} onClick={()=>switchKind('organization')}>소속 <span>{organizations.length}</span></button></div><label className="ac-debug-toggle"><input type="checkbox" checked={debug} onChange={e=>update({debug:e.target.checked?'1':null})}/> DEBUG</label></section>
   {itemView?<ItemCatalog onTest={()=>update({view:'simulation',item:null})}/>:combatView?<CombatPanel engine={combatEngine} onTest={()=>update({view:'simulation',item:null})}/>:groupsView?<AcademyGroupsPanel engine={useAiEngineValueGroups} onTest={()=>update({view:'simulation',item:null})}/>:dailyLifeView?<DailyLifeCatalog onTest={()=>update({view:'simulation',item:null})}/>:worldLoreView?<WorldLoreCatalog onTest={()=>update({view:'simulation',item:null})}/>:conversationView?<ConversationPanel interactions={conversationInteractions} debug={debug} onTest={()=>update({view:'simulation',item:null})}/>:academicView?<AcademicPanel officialEngine={officialEngine} engine={academicEngine} debug onTest={()=>update({view:'simulation',item:null})}/>:worldEventView?<WorldEventCatalog debug={debug} onTest={()=>update({view:'world-event-tester',item:null})}/>:memoryView?<MemoryCatalog onTest={()=>update({view:'memory-tester',item:null})}/>:interactionView||outcomeView?<InteractionCatalog effects={outcomeView} onTest={()=>update({view:outcomeView?'outcome-tester':'interaction-tester',item:null})}/>:featuresView?<FeatureNotes/>:aiView?<AiCatalog onTest={()=>update({view:'ai-tester',item:null})}/>:motivationView?<MotivationCatalog debug={debug} onDebug={value=>update({debug:value?'1':null})} onTest={()=>update({view:'motivation-tester',item:null})}/>:scheduleView?<ScheduleCatalog onTest={()=>update({view:'schedule-tester',item:null})}/>:relationshipView?<RelationshipCatalog debug={debug} onTest={()=>update({view:'relationship-tester',item:null})}/>:locationView?<LocationCatalog onTest={()=>update({view:'location-tester',item:null})}/>:calendarView?<CalendarCatalog onOpenTester={()=>update({view:'time-tester',item:null})}/>:dispositionView?<DispositionCatalog params={params} update={update}/>:organizationView?<OrganizationCatalog params={params} update={update}/>:numericView?<NumericSystems/>:socialKind?<SocialCatalog kind={socialKind} params={params} update={update}/>:characterView?<FixedCharacterCatalog params={params} update={update}/>:statusView?<StatusCatalog params={params} update={update}/>:referenceKind?<KnowledgeCatalog kind={referenceKind} params={params} update={update} />:<>
   {kind==='gift'&&<div className="ac-searchbar"><label><span>검색</span><input aria-label="도감 검색" type="search" value={query} placeholder="이름, 설명으로 찾기" onChange={e=>update({q:e.target.value},true)}/></label><span role="status" aria-live="polite">{results.length}개 일치</span><button onClick={reset}>필터 초기화</button></div>}
   <div className={kind==='trait'?'ac-workspace ac-skill-catalog-workspace':'ac-workspace'}>
    {kind==='gift'&&<aside className="ac-sidebar"><details open><summary>분류 및 필터</summary><nav aria-label="기프트 분류"><button aria-pressed={category==='all'} onClick={()=>update({category:null,family:null})}>전체 기프트</button>{Object.entries(GIFT_CATEGORIES).map(([key,name])=><button key={key} aria-pressed={category===key} onClick={()=>update({category:key,family:null})}>{name}</button>)}</nav><label>희귀도<select aria-label="희귀도 필터" value={rarity} onChange={e=>update({rarity:e.target.value==='all'?null:e.target.value})}><option value="all">모든 희귀도</option>{Object.keys(RARITIES).map(r=><option key={r} value={r}>{RARITIES[r as Rarity].name}</option>)}</select></label><ImpactFilters params={params} update={update} sortLabel="기프트 정렬"/></details>{debug&&<div className="ac-debug-context"><p>{validationIssues.length?`${validationIssues.length}건 오류`:`${entries.length}개 데이터 검증 통과`}</p></div>}</aside>}
    <section className="ac-results" aria-label={kind==='trait'?'스킬 계보':'기프트 목록'}><header className="ac-results-heading"><h2>{kind==='trait'?'행동으로 쌓는 성장의 계보':'선천 기프트 목록'}</h2><span>{kind==='trait'?`${skillDefinitions.length}개 스킬 정의`:'고정 성능 / 진화 없음'}</span></header>
     {kind==='trait'?<SkillTree catalog debug={debug}/>:results.length===0?<div className="ac-empty"><h3>일치하는 기록이 없습니다</h3><button onClick={reset}>전체 기록 보기</button></div>:<ul className="ac-gift-list">{sorted.map(gift=><li key={gift.id}><button className="ac-gift-card" aria-pressed={selectedId===gift.id} onClick={()=>select(gift.id)}><div className="ac-gift-meta"><span>{GIFT_CATEGORIES[gift.category as GiftCategory]}</span><span>{RARITIES[gift.rarity].name}</span></div><h3>{gift.name}</h3><div className="ac-gift-bottom"><span>{impactLabel(gift.impact.baseImpact)}</span><b><small>IMPACT</small> {gift.impact.baseImpact}</b></div></button></li>)}</ul>}
    </section>

   </div>
   </>}
  </>}
  {reference&&<CatalogEntryDialog reference={reference} debug={debug} context={context.context} onNavigate={next=>update({kind:next.kind,item:next.id})} onClose={()=>update({item:null},true)}/> }
  {relationshipContext.inspected&&<LocationCharacterDialog character={relationshipContext.world.getCharacter(relationshipContext.inspected)} graph={relationshipContext.graph} characters={relationshipContext.world.getCharacters()} debug={debug} onClose={relationshipContext.closeInspector}/>}
  {!playing&&<footer className="ac-footer"><span>ACADEMY SURVIVAL · CONTENT ARCHIVE</span><span>{calendarView||timeTesterView?'제국력·심연력은 공식 세계관 설정입니다.':'설정·효과·확률은 개발 중이며 변경될 수 있습니다.'}</span></footer>}
 </main>;
}
