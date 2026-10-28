import {generateWorldIdentity,describeWorldIdentity} from './worldIdentity';
import {generateCulturalProfile} from './cultureLife';
import type {WorldIdentityRequest} from '../types/worldLore';
import type {Character} from '../types/character';
import {fixedCharacters} from '../data/characters';
import {fixedStudentSpecializations,studentProfileRegistry} from '../data/characters/students';
import {randomSlotPool,templateContext,ownedEntries} from './characterRules';
import {seededRandom} from './seededRandom';
import type {RelationshipRecord} from '../types/relationship';

/** Only fresh campaigns call this. Loading a save never inserts missing people. */
export function createFixedStudents(seed:string):Character[]{return fixedCharacters.map(t=>{
 const c:Character={...structuredClone(t.identity),...structuredClone(t.social.fixed),...structuredClone(t.affiliations),...structuredClone(t.moralityProfile),id:t.id,templateId:t.id,kind:'fixed_npc',stats:Object.fromEntries(Object.entries(t.stats).map(([id,r])=>[id,r.base])) as Character['stats'],proficiencyRanks:Object.fromEntries(t.proficiencies.map(p=>[p.id,p.base])),traitIds:[...t.fixedTraitIds],giftIds:[...t.fixedGiftIds],statuses:structuredClone(t.statuses.fixed),relationships:[],classId:'academy-class-'+t.identity.schoolYear+'-1',specializationId:fixedStudentSpecializations[t.id]??'sword',location:{characterId:t.id,currentLocationId:'academy-plaza',homeLocationId:'academy-dorm',movement:null}};
 const identity:Record<string,WorldIdentityRequest>={'인간':{raceId:'human',originPolityId:'astel_empire'},'엘프':{raceId:'elf',subraceId:'elf-wood',originPolityId:'elosil_kingdom'},'드워프':{raceId:'dwarf',subraceId:'dwarf-mountain',originPolityId:'kardum_union'},'수인':{raceId:'beastkin',subraceId:'beastkin-cat',originPolityId:'lauren_confederation'},'마족':{raceId:'demonkin',subraceId:'demonkin-horned',originPolityId:'carmine_demon_realm'}};
 if(t.id!=='fixed-serena'){c.worldIdentity=generateWorldIdentity('fixed-definition/'+t.id,identity[c.species]);c.origin=describeWorldIdentity(c.worldIdentity)!.origin??c.origin;c.culturalProfile=generateCulturalProfile(c,'fixed-definition/'+t.id);}
 const rng=seededRandom(seed+'/'+t.id+'/fixed-slots');
 for(const slot of t.randomSlots){const pool=randomSlotPool(slot,{...templateContext(t),traits:c.traitIds,gifts:c.giftIds},ownedEntries(c));let roll=rng();const chosen=pool.find(row=>(roll-=row.probability)<0);if(chosen)(slot.kind==='trait'?c.traitIds:c.giftIds).push(chosen.entry.id);}
 return c;
});}
export function fixedStudentPreferences(id:string,activity:string){return (FIXED_ACTIVITY_PREFERENCES[id]??[]).includes(activity)?7:0;}
export const FIXED_ACTIVITY_PREFERENCES:Record<string,string[]>={
 'fixed-serena':['sword_training','train_together'],'fixed-adelia':['self_study','attend_class'],'fixed-lumiel':['magic_training','reading'],'fixed-lisette':['conversation'],'fixed-nia':['sword_training','sparring'],'fixed-camilla':['attend_class','sword_training'],'fixed-miel':['study_together','conversation'],'fixed-estelle':['office_work','conversation'],'fixed-fiona':['magic_training','self_study'],'fixed-noel':['reading'],'fixed-brina':['magic_training'],'fixed-elisia':['conversation','rest'],'fixed-thea':['reading','free_time'],'fixed-violetta':['self_study'],'fixed-iris':['reading','conversation'],
};
export function fixedStudentRelationships(at:number):RelationshipRecord[]{
 const pairs:[string,string,number,number,string][]=[['adelia','miel',-8,15,'acquaintance'],['lumiel','fiona',25,30,'colleague'],['camilla','nia',-12,20,'rival'],['estelle','thea',4,15,'acquaintance'],['lisette','noel',15,12,'acquaintance'],['brina','fiona',22,28,'colleague'],['violetta','miel',5,18,'acquaintance'],['elisia','iris',28,35,'acquaintance']];
 return pairs.flatMap(([a,b,affection,trust,type])=>[false,true].map(reverse=>({sourceCharacterId:'fixed-'+(reverse?b:a),targetCharacterId:'fixed-'+(reverse?a:b),affection:affection+(reverse?7:0),trust:trust+(reverse?-5:0),intimacy:20,respect:30,fear:0,relationshipTypeIds:['relation-'+type],familiarity:'known' as const,visibility:'public' as const,origin:'fixed' as const,createdAt:at,updatedAt:at})));
}
export function fixedSpeech(id:string,intent:string,reaction:string):string|undefined {
 if(id==='fixed-serena'&&['greet','check_in','small_talk','thank'].includes(intent))return reaction==='refused'?'지금은 어려워요. 끝내야 할 일이 있어서요.':intent==='thank'?'도와줘서 고마워요. 혼자서는 미처 보지 못했을 거예요.':'안녕하세요. 무리하고 있지는 않나요? 제 이야기도 잠깐 들어 줄래요?';
 const p=studentProfileRegistry.get(id);if(!p)return undefined;
 const lines:Record<string,[string,string,string]>={
 adelia:['자, 오늘은 어디까지 해낼 생각이야? 대충은 안 돼.','제법이네. 다음에는 내가 앞설 거야.','지금은 어렵겠어. 내 계획도 있으니까.'],
 lumiel:['음…… 무슨 일이야? 연구 이야기라면 깨어 있을게.','그 접근은 흥미로워. 가설을 같이 확인하자.','지금은 머릿속의 식을 놓치고 싶지 않아. 나중에.'],
 lisette:['후후, 그렇게 긴장할 일은 아닌데. 잠깐 이야기할래?','이번에는 장난 아니야. 정말 고마워.','아쉽지만 여기까지. 서로 싫은 건 하지 말자?'],
 nia:['오늘도 기세는 괜찮네? 실력도 좀 보여 줘.','흥, 제법이잖아. 다음에도 같이 해!','지금은 안 해. 나도 준비할 게 있거든.'],
 camilla:['할 말이 있다면 듣겠다. 약속 시간은 지키도록.','네 사정은 이해했다. 함께 방법을 찾자.','지금은 맡은 일이 있다. 다른 시간에 요청해 줘.'],
 miel:['같이 가자! 너도 끼면 훨씬 재밌을 거야.','좋아! 우리 무리하지 말고 같이 해 보자.','미안, 오늘은 내 시간도 챙겨야겠어. 다음에 보자!'],
 estelle:['잠시 의견을 들을 수 있을까요? 결정은 직접 하셔도 좋아요.','예상 밖이네요. 그 마음은 기억할게요.','이번 제안은 사양하겠어요. 서로의 사정을 존중하지요.'],
 fiona:['저기…… 기록을 조금 비교해 봐도 될까요?','아, 이 부분이 연결되네요! 같이 확인해 주셔서 고마워요.','죄송해요. 지금은 안전 점검을 끝내야 해요.'],
 noel:['할 말이 있어. 길지는 않아.','……고마워. 그건 진심이야.','지금은 싫어. 나중에 다시 물어봐.'],
 brina:['하하! 좋은 생각이 떠올랐어. 같이 점검해 볼래?','역시 같이 확인하길 잘했네! 내 실수도 찾아 줬어.','지금은 손을 뗄 수가 없어. 먼저 이것부터 끝낼게!'],
 elisia:['괜찮다면 이야기해 줄래? 천천히 해도 돼.','나도 도움을 받아도 되는 거겠지? 고마워.','미안해. 오늘은 나도 쉬어야 할 것 같아.'],
 thea:['저기 봤어? 먼저 자료부터 같이 확인하자!','좋아! 이번에는 준비도 확실히 해 두자.','지금은 어렵겠어. 위험하게 서두르지는 않을게.'],
 violetta:['시간을 내실 수 있나요? 허투루 쓰지는 않겠어요.','그 노력은 인정하겠어요. 다음에는 더 나아지겠지요.','지금은 제 연습 시간이에요. 다음에 말씀하시지요.'],
 iris:['저…… 잠깐 이야기해도 괜찮을까?','같이 있어 줘서 고마워. 네 시간도 소중한 거 알아.','오늘은 조금 쉬고 싶어. 나중에 내가 먼저 말 걸어도 될까?'],
 };
 if(!['greet','check_in','small_talk','thank','encourage','comfort'].includes(intent)&&reaction!=='refused')return undefined;
 const row=lines[p.key];return row?.[reaction==='refused'?2:reaction==='warm'||['thank','encourage','comfort'].includes(intent)?1:0];
}
