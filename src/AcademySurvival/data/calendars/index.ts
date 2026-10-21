import type {CalendarDefinition,GameDateTime} from '../../types/calendar';
export const TIME_RULES={version:'academy-time-v1' as const,minutesPerHour:60,hoursPerDay:24,daysPerWeek:7,daysPerYear:360,minImperialYear:1,maxImperialYear:999999,maxTimelineEvents:1000000};
export const CALENDARS:readonly CalendarDefinition[]=[
 {id:'imperial',name:'제국력',formalName:'제국력(帝國曆)',epoch:'제국 건국',official:true,monthsPerYear:12,daysPerMonth:30,yearOffset:0,history:'제국의 건국을 기원으로 삼는 공식 연호다. 제국의 행정·학사·공문서에서 사용하며 게임 내부 표준 시간의 기준이다. 1년은 360일, 열두 달은 각각 30일이다. 윤년은 없다.'},
 {id:'abyss',name:'심연력',formalName:'심연력(深淵曆)',epoch:'초대 마왕 즉위',official:true,monthsPerYear:10,daysPerMonth:36,yearOffset:2700,history:'초대 마왕의 즉위를 기원으로 삼는 마계의 공식 연호다. 제국력보다 연도 숫자가 2700년 앞서며 연초와 1년의 길이는 같다. 마계에서 시간이 다르게 흐르는 것이 아니라 같은 시점을 다른 달력으로 기록한다.',monthNames:[{name:'흑월',symbol:'어둠과 시작'},{name:'혈월',symbol:'피와 투쟁'},{name:'회월',symbol:'재와 소멸'},{name:'명월',symbol:'망자와 영혼'},{name:'독월',symbol:'독과 변이'},{name:'마월',symbol:'마력과 의식'},{name:'적월',symbol:'전쟁과 정복'},{name:'환월',symbol:'환상과 기만'},{name:'심월',symbol:'심연과 비밀'},{name:'종월',symbol:'종언과 재생'}]},
];
export const calendarRegistry:ReadonlyMap<string,CalendarDefinition>=new Map(CALENDARS.map(c=>[c.id,c]));
export const SCENARIO_TIME={id:'academy-default-v1',calendarId:'imperial' as const,start:{year:427,month:3,day:1,hour:8,minute:0} satisfies GameDateTime};
export const WEEKDAYS=['월요일','화요일','수요일','목요일','금요일','토요일','일요일'] as const;
export const WEEKDAY_ANCHOR={date:{year:427,month:3,day:1},index:0};
export const SEASONS=[{id:'spring',name:'봄',months:[3,4,5]},{id:'summer',name:'여름',months:[6,7,8]},{id:'autumn',name:'가을',months:[9,10,11]},{id:'winter',name:'겨울',months:[12,1,2]}] as const;
// Minute-of-day intervals are [start,end); deep night has two disjoint spans.
export const TIME_PERIODS=[{id:'dawn',name:'새벽',ranges:[[300,480]]},{id:'morning',name:'오전',ranges:[[480,720]]},{id:'noon',name:'정오',ranges:[[720,780]]},{id:'afternoon',name:'오후',ranges:[[780,1080]]},{id:'evening',name:'저녁',ranges:[[1080,1320]]},{id:'night',name:'심야',ranges:[[1320,1440],[0,300]]}] as const;
export const ACADEMIC_SCHEDULE=[
 {month:1,name:'겨울방학',term:'방학',kind:'vacation'},
 {month:2,name:'입학 준비 기간',term:'입학 준비',kind:'preparation'},
 {month:3,name:'입학식 및 1학기 개강',term:'1학기',kind:'opening'},
 {month:4,name:'정규 수업',term:'1학기',kind:'classes'},
 {month:5,name:'1학기 중간 평가',term:'1학기',kind:'midterm'},
 {month:6,name:'1학기 기말 평가',term:'1학기',kind:'final'},
 {month:7,name:'여름방학',term:'방학',kind:'vacation'},
 {month:8,name:'2학기 개강',term:'2학기',kind:'opening'},
 {month:9,name:'정규 수업',term:'2학기',kind:'classes'},
 {month:10,name:'2학기 중간 평가',term:'2학기',kind:'midterm'},
 {month:11,name:'2학기 기말 평가',term:'2학기',kind:'final'},
 {month:12,name:'겨울방학',term:'방학',kind:'vacation'},
] as const;
export const OFFICIAL_CONVERSIONS=[
 {imperial:{year:427,month:1,day:1},abyss:{year:3127,month:1,day:1}},
 {imperial:{year:427,month:2,day:1},abyss:{year:3127,month:1,day:31}},
 {imperial:{year:427,month:3,day:1},abyss:{year:3127,month:2,day:25}},
 {imperial:{year:427,month:3,day:12},abyss:{year:3127,month:2,day:36}},
 {imperial:{year:427,month:6,day:1},abyss:{year:3127,month:5,day:7}},
 {imperial:{year:427,month:12,day:30},abyss:{year:3127,month:10,day:36}},
] as const;
