import type {EconomicBackground} from '../../types/economy';
export const ECONOMIC_BACKGROUNDS:Record<EconomicBackground,{name:string;initial:[number,number];allowance:number}>={
 wealthy:{name:'풍족한 지원',initial:[30000,80000],allowance:20000},comfortable:{name:'안정적인 가정',initial:[12000,30000],allowance:10000},ordinary:{name:'평범한 가정',initial:[4000,12000],allowance:4000},hardship:{name:'어려운 가정',initial:[1000,4000],allowance:1000},unsupported:{name:'후원 없음',initial:[0,1000],allowance:0},
};
export const SHOPS=[
 {id:'campus-store',name:'학교 매점',locationId:'academy-dining',open:8,close:21,stock:['bread','apple','biscuit','tea','writing-kit','notebook','ribbon','wood-charm']},
 {id:'book-stall',name:'도서관 서적 판매대',locationId:'academy-library',open:9,close:20,stock:['magic-textbook','sword-primer','lamp']},
 {id:'market-equipment',name:'중앙시장 장비·재료점',locationId:'capital-market',open:9,close:19,stock:['wood-sword','iron-sword','dagger','practice-staff','leather-armor','health-draught','mana-draught','rune-powder','herb','ore-sample']},
] as const;
export const STUDENT_JOBS=[
 {id:'library-assistant',name:'도서관 자료 정리',locationId:'academy-library',minutes:120,wage:400,open:9,close:20,capacity:2,stat:'INT',min:15},
 {id:'dining-assistant',name:'식당 보조',locationId:'academy-dining',minutes:120,wage:350,open:8,close:20,capacity:3,stat:'VIT',min:15},
 {id:'arena-assistant',name:'훈련장 관리',locationId:'academy-arena',minutes:120,wage:500,open:8,close:19,capacity:2,stat:'STR',min:20},
] as const;
/** Copper prices; existing baseValue is an item valuation, not an established currency contract. */
export const STUDENT_PRICES:Record<string,number>={bread:20,apple:15,biscuit:30,tea:25,'writing-kit':300,notebook:100,ribbon:300,'wood-charm':500,'magic-textbook':1500,'sword-primer':1200,lamp:800,'wood-sword':800,'iron-sword':6500,dagger:3000,'practice-staff':1800,'leather-armor':4500,'health-draught':600,'mana-draught':700,'rune-powder':400,herb:300,'ore-sample':500};
export function studentPrice(definitionId:string){const value=STUDENT_PRICES[definitionId.replace(/^item-/, '')];if(value===undefined)throw Error('학생 상점 가격이 없는 물품');return value;}
export function formatMoney(copper:number){if(!Number.isSafeInteger(copper)||copper<0)throw Error('금액은 음이 아닌 안전한 정수 동화여야 합니다.');return [Math.floor(copper/10000)?Math.floor(copper/10000)+'G':'',Math.floor(copper%10000/100)?Math.floor(copper%10000/100)+'S':'',copper%100||copper===0?copper%100+'C':''].filter(Boolean).join(' ');}
