import type {Gift,GiftCategory,Rarity} from '../../types';
import type {GiftField,GiftPower} from '../../types/giftCodex';
import {gift,rule} from '../factories';
import {arms} from './arms';import {arcana} from './arcana';import {spacetime} from './spacetime';import {mind} from './mind';import {records} from './records';import {causality} from './causality';import {life} from './life';import {nature} from './nature';import {creation} from './creation';
export const GIFT_FIELD_NAMES:Record<GiftField,string>={arms:'전투·무예',arcana:'마법·초상',spacetime:'시간·공간',mind:'정신·감각',records:'기억·사회',causality:'운명·인과',life:'생명·육체',nature:'자연·환경',creation:'제작·창조'};
const categories:Record<GiftField,GiftCategory>={arms:'combat',arcana:'omen',spacetime:'space',mind:'information',records:'memory',causality:'fortune',life:'survival',nature:'daily',creation:'society'};
const powers:Record<string,GiftPower>={
 'level-sea':{kind:'steady-luck',checks:[]},'edge-toss':{kind:'extreme-luck',checks:[]},
 'needle-verdict':{kind:'precision',checks:['observe','craft']},
 'silent-proof':{kind:'exchange-weights',checks:['craft']},'testimony-anchor':{kind:'memory-anchor'},
};
const eventTags:Record<GiftField,string[]>={arms:['sword','duel'],arcana:['arcane','research'],spacetime:['explore','arcane'],mind:['study','will'],records:['memory','socialize'],causality:['fortune','explore'],life:['recovery','rescue'],nature:['explore','daily'],creation:['research','daily']};
const groups:Record<GiftField,string>={arms,arcana,spacetime,mind,records,causality,life,nature,creation};
export const newGiftCodex:Gift[]=Object.entries(groups).flatMap(([field,text])=>text.split('\n').filter(Boolean).map(line=>{
 const [id,name,rarity,principle,activation,limit,example]=line.split('|');if(!example)throw Error('기프트 원고 필드 누락: '+id);
 const power=powers[id],partial=id==='silent-proof',live=!!power&&!partial,scope=activation,description=[principle,limit,example].join(' '),implemented=power?[power.kind==='memory-anchor'?'중요도70 이상 직접 기억의 선명도·확신 감쇠 속도 절반':power.kind==='exchange-weights'?'기초 제작 공통 판정의 주·보조 능력 비중 교환':power.kind==='steady-luck'?'본인 공통 판정 운0':power.kind==='extreme-luck'?'본인 공통 판정 음수 운−10, 나머지9':'관찰·기초 제작의 차이0~2 근소 성공을 대성공으로 분류']:[];
 const g=gift('v1-'+id,categories[field as GiftField],name,description,rarity as Rarity,({common:22,uncommon:34,rare:49,epic:65,legendary:83})[rarity as Rarity],activation,rule('gift-v1-'+id,field==='records'?'remember':field==='spacetime'?'move':field==='life'?'transform':'reveal',name,1,'권능',scope,limit),[field,'gift-codex-v1',...eventTags[field as GiftField]]);
 return {...g,power,codex:{summary:principle.split('.')[0]+'.',principle,scope,limits:[limit],examples:[example],field:field as GiftField,runtime:partial?'partial':power?'implemented':'pending',implemented,pending:partial?['기초 제작 판정API만 연결됨. 실제 제작 행동의 판정 어댑터는 후속.']:power?[]:['해당 권능의 관측·동의·대상·결과를 처리할 실행 어댑터 필요. 현재 실제 효과 없음.'],generation:live?'active':'pending',review:'개별 집필 원고·명시적 한계·관련 기존 콘텐츠 중복 검토. 런타임 검증과 설정 검토를 구분한다.'},birth:{...g.birth,eligible:live,weight:live?g.birth.weight:0,excludes:['level-sea','edge-toss'].includes(id)?['gift-v1-'+(id==='level-sea'?'edge-toss':'level-sea')]:[]}} as Gift;
}));
