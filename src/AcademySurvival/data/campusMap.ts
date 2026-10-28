/** Presentation coordinates only. Routes, access, distance and travel time remain in LocationWorld. */
export const campusMapPositions:Record<string,{x:number;y:number;zone:string;labelOffset?:number}>={
 'academy-class-building':{x:595,y:150,zone:'학습'},'academy-library':{x:275,y:195,zone:'학습'},
 'academy-magic-training':{x:965,y:215,zone:'실습'},'academy-plaza':{x:620,y:365,zone:'교정'},
 'academy-arena':{x:1000,y:440,zone:'훈련'},'academy-morning':{x:1050,y:590,zone:'훈련'},
 'academy-dining':{x:435,y:430,zone:'생활'},'academy-dorm':{x:255,y:480,zone:'거주'},
 'academy-student-hall':{x:790,y:590,zone:'교류'},'academy-gate':{x:600,y:720,zone:'입구'},
 'academy-guard-post':{x:710,y:710,zone:'입구',labelOffset:-60},'academy-admin-office':{x:735,y:225,zone:'행정'},
 'academy-staff-residence':{x:105,y:325,zone:'거주'},'academy-life-garden':{x:265,y:635,zone:'휴식'},
};
export const CAMPUS_MAP_IMAGE=import.meta.env.BASE_URL+'academy/maps/campus-v1.webp';
