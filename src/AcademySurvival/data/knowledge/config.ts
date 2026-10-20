import type {ProficiencyCategory,RankLevel,StatGradeId} from '../../types/knowledge';
export const STAT_GRADE_BANDS:{grade:StatGradeId;title:string;min:number;max:number|null}[]=[
 {grade:'F',title:'결핍',min:0,max:9},{grade:'E',title:'범속',min:10,max:29},
 {grade:'D',title:'평범',min:30,max:49},{grade:'C',title:'수재',min:50,max:69},
 {grade:'B',title:'영재',min:70,max:89},{grade:'A',title:'천재',min:90,max:100},
 {grade:'S',title:'초인',min:101,max:120},{grade:'SS',title:'초월',min:121,max:150},
 {grade:'SSS',title:'신화',min:151,max:199},{grade:'EX',title:'규격 외',min:200,max:null},
];
export const PROFICIENCY_RANKS:{level:RankLevel;name:string;hanja:string}[]=[
 {level:0,name:'무지',hanja:'無知'},{level:1,name:'입문',hanja:'入門'},{level:2,name:'숙련',hanja:'熟練'},
 {level:3,name:'정예',hanja:'精銳'},{level:4,name:'달인',hanja:'達人'},{level:5,name:'대가',hanja:'大家'},
 {level:6,name:'종사',hanja:'宗師'},{level:7,name:'초월',hanja:'超越'},{level:8,name:'화경',hanja:'化境'},{level:9,name:'신역',hanja:'神域'},
];
export const PROFICIENCY_CATEGORIES:Record<ProficiencyCategory,string>={martial:'무술',elemental:'마법',application:'마법 응용',academic:'학문',social:'사회',exploration:'탐험',life:'생활'};
export const PROFICIENCY_EXPERIENCE_THRESHOLDS=null; // Deliberately undecided, not a zero-cost progression curve.
export type TenTexts=[string,string,string,string,string,string,string,string,string,string];
