import type {CombatTechnique} from '../../types/combat';
export const COMBAT_RULES={version:'combat-v1' as const,roundMinutes:1,maxRounds:20,maxParticipants:6,maxPerTeam:3,maxRecent:120,maxImportant:40,maxDetailedLogs:160,sparringVitalityFactor:.35,greatDamageFactor:1.3,guardFactor:.5,barrierFactor:.55,counterFactor:.4,restRates:{hp:2,sp:24,mp:12},sleepRates:{hp:6,sp:60,mp:36}};
const technique=(id:string,name:string,kind:CombatTechnique['kind'],category:CombatTechnique['category'],target:CombatTechnique['target'],sp:number,mp:number,checkId?:string,proficiencyId?:string,minRank=0,damage=0,accuracy=0,ranges:CombatTechnique['ranges']=[0,1,2],cooldown=0,initiative=0):CombatTechnique=>({id,name,kind,category,target,sp,mp,checkId,proficiencyId,minRank,damage,accuracy,ranges,cooldown,initiative,description:name+' · '+(kind==='strike'?'실제 대항 판정으로 적중과 피해를 결정한다.':'현재 라운드의 전술과 자원을 조정한다.')});
export const combatTechniques:CombatTechnique[]=[
 {...technique('skill-quick-cut','쾌검 · 연속 공방','strike','physical','enemy',4,0,'physical-attack','proficiency-sword',2,-4,1,[0],0,8),requiredSkillId:'skill-swift-sword',description:'기력4 · 빠른 선행 검격. 낮은 일격 피해로 지속 공방을 노린다.'},
 {...technique('skill-breaking-cut','중검 · 파쇄 일격','strike','physical','enemy',16,0,'physical-attack','proficiency-sword',2,12,-4,[0],2,-5),requiredSkillId:'skill-heavy-sword',guardPierce:.5,description:'기력16 · 느린 강타. 방어 자세의 피해 경감 절반을 관통하지만 재사용까지2라운드 필요.'},
 {...technique('skill-measured-cut','정밀 · 관찰 찌르기','strike','physical','enemy',9,0,'physical-attack','proficiency-sword',2,4,5,[0,1],1,0),requiredSkillId:'skill-precise-sword',requiresObservation:true,description:'기력9 · 실제 상대 분석 후 근접·중거리의 빈틈을 찌른다. 관찰 기회가 없으면 사용 불가.'},
 technique('attack','기본 공격','strike','physical','enemy',6,0,'physical-attack','proficiency-sword',0,0,0,[0]),
 technique('heavy','강공격','strike','physical','enemy',12,0,'physical-attack','proficiency-sword',2,7,-3,[0],1,-3),
 technique('quick','신속 공격','strike','physical','enemy',7,0,'physical-attack','proficiency-sword',1,-2,3,[0],0,4),
 technique('feint','견제 공격','strike','physical','enemy',5,0,'physical-attack','proficiency-sword',1,-3,4,[0,1]),
 technique('guard','방어 자세','guard','defensive','self',2,0),technique('evade','적극 회피','evade','defensive','self',5,0),
 technique('counter','반격 자세','counter','defensive','self',5,0,undefined,'proficiency-sword',2,0,0,[0]),
 technique('mana-bolt','기본 마력탄','strike','magic','enemy',0,8,'magic-attack','proficiency-mana-control',1,1,0,[0,1,2]),
 technique('fire','화염 공격','strike','magic','enemy',0,14,'fire-attack','proficiency-fire',2,6,0,[1,2],2),
 {...technique('ice','냉기 공격','strike','magic','enemy',0,12,'ice-attack','proficiency-ice',2,1,1,[1,2],2),slow:4},
 {...technique('lightning','번개 공격','strike','magic','enemy',0,16,'lightning-attack','proficiency-lightning',3,3,2,[1,2],3),stagger:true},
 technique('barrier','마법 방벽','barrier','defensive','self',0,8,undefined,'proficiency-barrier',1),
 technique('focus','마력 집중','focus','utility','self',2,0,undefined,'proficiency-mana-control',1),
 technique('heal','간단한 회복 마법','heal','magic','ally',0,12,'healing','proficiency-healing',1,0,0,[0,1],2),
 technique('observe','상대 분석','observe','utility','enemy',3,0,'observe'),technique('distance','거리 조절','distance','utility','enemy',2,0),
 technique('escape','도주 시도','escape','utility','enemy',8,0,'escape'),technique('surrender','항복','surrender','utility','self',0,0),
 technique('protect','동료 보호','protect','defensive','ally',4,0,undefined,undefined,0,0,0,[0]),technique('wait','호흡 정돈','wait','utility','self',0,0),
];
export const combatTechniqueRegistry=new Map(combatTechniques.map(t=>[t.id,t]));
