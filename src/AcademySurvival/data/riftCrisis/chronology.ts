import type {WorldEventDefinition} from '../../types/worldEvent';
export const worldChronology=[
 {years:'427',title:'평화로운 첫해 · 작은 이상 징후'},
 {years:'428',title:'주요 관측과 공식 조사 가능'},
 {years:'429–430',title:'국지적 확대와 지성의 단서 가능'},
 {years:'431–433',title:'졸업 전후 · 방위·연구·외교의 전환기'},
 {years:'434–436',title:'지역별 장기 상태 형성 가능'},
 {years:'436 이후',title:'자유 진행 · 강제 종료 없음'},
] as const;
// Windows control sparse presentation, not mandatory invasion dates or outcomes.
export const riftPreludeDefinitions=[
 {id:'measurement',months:[3,4],name:'설명되지 않는 측정값',text:'지역 관측 장치에서 불규칙한 마력 측정값이 기록되었다. 장비 이상인지 원인은 확인되지 않았다.',kind:'observation'},
 {id:'report',months:[5,6],name:'분류되지 않은 생물 목격담',text:'현지 관측원이 기존 분류에 없는 생물을 보았다고 보고했다. 정체와 관련성은 검증되지 않은 목격담이다.',kind:'report'},
 {id:'material',months:[7,8],name:'미세한 교란과 낯선 잔여물',text:'미세한 마력 교란 지점에서 낯선 잔여물이 회수되었다. 성분과 유래는 조사 중이다.',kind:'sample'},
 {id:'discussion',months:[9,10],name:'일치하지 않는 연구 가설',text:'보존된 지역 측정 자료의 반복 반응이 확인되었다. 연구 담당자들의 해석은 아직 일치하지 않는다.',kind:'hypothesis'},
 {id:'risk',months:[11,12],name:'설명되지 않는 국소 반응',text:'관측 지점에서 국소적인 이상 반응이 재확인되었다. 광역 위협이나 원인은 확인되지 않았다.',kind:'observation'},
] as const;
export const preludeWorldDefinitions:WorldEventDefinition[]=[...riftPreludeDefinitions.map(d=>({id:d.id,name:d.name})),{id:'revisit',name:'과거 측정 기록의 재검토'}].map(d=>({id:'rift-prelude/'+d.id,name:d.name,description:'실제 관측 기록과 보존 자료. 원인과 미래 결과는 미확인.',category:'world',scale:'region',importance:75,tags:['rift-crisis','regional-occurrence'],triggerRules:[],participantRules:{count:0,conditions:[]},stages:[{id:'record',name:'관측 자료 보존',durationMinutes:1,timeoutMinutes:1,entryConditions:[],completionConditions:[],failureConditions:[],effects:[],nextStageIds:[]}],outcomeRules:[{id:'recorded',name:'자료 기록',conditions:[],weight:1,effects:[]}],followUpRules:[],cooldownMinutes:0,participantCooldownMinutes:0,maxOccurrences:5,visibility:'private'}));
