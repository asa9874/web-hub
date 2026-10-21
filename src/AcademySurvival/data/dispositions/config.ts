import type {MoralityGenerationConfig,DispositionCategory} from '../../types/morality';
export const DISPOSITION_CATEGORIES:Record<DispositionCategory,string>={ethics:'도덕·윤리',philosophy:'사고방식·철학',social:'사회적 행동',motivation:'욕망·동기',emotion:'감정·심리',order:'신념·권위·질서',complex:'특수·복합'};
export const MORALITY_GRADES=[
 {min:-100,max:-60,name:'극단적 이기성',description:'자신의 목적을 위해 타인의 피해를 가볍게 여기는 내면적 경향'},
 {min:-59,max:-20,name:'이기적',description:'자신의 이익과 안전을 우선하는 가치 판단'},
 {min:-19,max:19,name:'중립적',description:'상황과 관계에 따라 타인과 자신의 이익을 저울질함'},
 {min:20,max:59,name:'이타적',description:'타인의 고통을 배려하며 도움을 주려는 가치관'},
 {min:60,max:100,name:'강한 이타성',description:'개인의 손해를 감수하면서 타인의 안녕을 매우 중시함'},
] as const;
export const KARMA_GRADES=[
 {min:-1000,max:-800,name:'재앙',description:'역사적인 규모의 피해를 남긴 행적'},
 {min:-799,max:-500,name:'대악인',description:'심각하고 광범위한 피해를 일으킨 행적'},
 {min:-499,max:-200,name:'악인',description:'반복적이거나 중대한 악행의 누적'},
 {min:-199,max:-50,name:'불량',description:'타인에게 해를 끼친 행위가 남아 있음'},
 {min:-49,max:49,name:'중립',description:'선악의 뚜렷한 행적이 적거나 서로 상쇄된 기록'},
 {min:50,max:199,name:'선량',description:'주변에 도움이 된 비교적 긍정적인 행적'},
 {min:200,max:499,name:'선인',description:'의미 있는 선행을 지속적으로 남김'},
 {min:500,max:799,name:'대선인',description:'수많은 사람을 구하거나 큰 선행을 실천한 기록'},
 {min:800,max:1000,name:'성인',description:'역사에 남을 규모의 선행'},
] as const;
export const MORALITY_LIMITS={min:MORALITY_GRADES[0].min,max:MORALITY_GRADES[MORALITY_GRADES.length-1].max};
export const KARMA_LIMITS={min:KARMA_GRADES[0].min,max:KARMA_GRADES[KARMA_GRADES.length-1].max};
export const MORALITY_GENERATION_V1:MoralityGenerationConfig={version:'morality-v1',counts:[{count:1,probability:.6},{count:2,probability:.32},{count:3,probability:.08}],moralSpread:27,studentKarmaSpread:32,adultKarmaSpread:125,studentKarmaRange:{min:-150,max:150},adultKarmaRange:{min:-600,max:600},preferenceBoost:3,compatibleBoost:1.35};
export const BEHAVIOR_TAGS={help:'직접 도움',report:'중재 요청',avoid:'회피',observe:'관찰',exploit:'상황 이용',punish:'응징',negotiate:'협상',cooperate:'협력',lead:'주도',follow:'추종',investigate:'조사',verify:'검증',risk:'위험 감수',prepare:'대비',preserve:'현상 유지',reform:'변혁',protect:'보호',control:'통제',recognition:'인정 추구',pleasure:'쾌락 추구',restrain:'자제',acquire:'획득',compete:'경쟁',conceal:'은폐',express:'감정 표현',sacrifice:'희생',dissent:'불복',loyalty:'충성',autonomy:'자율',retaliate:'보복',trust:'신뢰',doubt:'의심',create:'창작',transcend:'한계 탐구'} as const;
