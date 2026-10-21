import {INITIAL_LOCATIONS} from '../locations/config';
import {MORALITY_GENERATION_V1} from '../dispositions/config';
import type {NpcGenerationConfig} from '../../types/npcGeneration';
import {PROBABILITY} from '../config';
import {SPECIALIZATIONS,BACKGROUNDS,STARTING_STATES} from './profiles';
export const ACADEMY_GROWTH_BANDS:NpcGenerationConfig['years']={
 1:{average:[30,45],primary:[1,2],positionId:'position-academy-year-one',age:[16,18]},
 2:{average:[40,55],primary:[2,3],positionId:'position-academy-year-two',age:[17,19]},
 3:{average:[50,65],primary:[3,4],positionId:'position-academy-year-three',age:[18,20]},
 4:{average:[60,75],primary:[4,5],positionId:'position-academy-year-four',age:[19,21]},
};
export const NPC_GENERATION_V1:NpcGenerationConfig={
 morality:MORALITY_GENERATION_V1,initialLocations:INITIAL_LOCATIONS,
 version:'npc-generation-v1.4',maxCount:100,maxAttempts:16,maxBatchAttempts:1600,statMin:0,statMax:250,coreOffset:12,supportOffset:2,nonCoreOffset:-10,noise:9,personalSpread:4,variantBonus:1,rareTalentChance:0.015,rareTalentBonus:20,rareRankChance:0.002,rareRankBonus:1,maxRank:9,
 years:ACADEMY_GROWTH_BANDS,adult:{average:[40,65],primary:[2,4],age:[22,48]},
 growth:{ordinary:{name:'범재',weight:76,shift:0,coreBonus:0,rankShift:0,rareTraitBoost:1,unusualBonus:0},talented:{name:'수재',weight:14,shift:16,coreBonus:8,rankShift:1,rareTraitBoost:2,unusualBonus:0},genius:{name:'천재',weight:1,shift:45,coreBonus:18,rankShift:3,rareTraitBoost:5,unusualBonus:0},weak:{name:'둔재',weight:7,shift:-18,coreBonus:0,rankShift:-1,rareTraitBoost:0.4,unusualBonus:0},unusual:{name:'이단아',weight:2,shift:4,coreBonus:0,rankShift:0,rareTraitBoost:2,unusualBonus:45}},
 specializations:SPECIALIZATIONS,traitCounts:PROBABILITY.traitCounts.map(r=>({...r})),giftCounts:PROBABILITY.giftCounts.map(r=>({...r})),
 relatedTraitMultiplier:18,relatedGiftMultiplier:2,impactPenalty:2,secondaryChance:0.78,hobbyChance:0.3,backgroundChance:0.8,statusChance:0.12,preferenceMultiplier:2.5,
 aliases:{strength:'STR',endurance:'VIT',mana:'MAG',will:'WIL',focus:'WIL',intellect:'INT',charisma:'CHA',perception:'AGI'},
 names:{given:['엘린','리안','유나','노엘','미레','카인','아델','이안','루카','소피','레온','니아','로웬','하린','키라','테오','에린','다나','리오','루나','세린','유리','라일','벨라','타라','아린','네브','메이','오웬','나린'],family:['베르나','로웰','바르트','오르네','브렌','실베르','아셀','에던','레인','하벨','칼른','위르','벨른','마렌','페르','코렌','아스트','솔렌','리델','오르트']},
 genders:['여성','남성'],personalities:['말하기 전에 한 번 더 생각한다.','경쟁에서는 진지하지만 결과에는 정직하다.','관심 있는 주제 앞에서는 말이 빨라진다.','다른 사람의 부탁을 거절하는 연습 중이다.','수업의 작은 농담을 오래 기억한다.','계획표를 세워 두고 가끔은 길을 바꾼다.'],objectives:['자신의 힘으로 생활비를 마련하고 싶다.','지난번에 놓친 과제를 끝까지 완성하려 한다.','믿을 수 있는 동료를 만나고 싶다.','고향으로 돌아가 배운 것을 나누고 싶다.'],
 backgrounds:BACKGROUNDS,statuses:STARTING_STATES,studentAdmissionTitleId:'title-matriculated',citizen:{positionId:'position-citizen',organizationId:'city-court'},academyId:'academy-main',adultOrganizationId:'river-town',
};
