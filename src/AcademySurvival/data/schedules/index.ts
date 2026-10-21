import type {ActivityDefinition,ScheduleEntry,ScheduleTemplate,ScheduleRole} from '../../types/schedule';
export const SCHEDULE_RULES={version:'schedule-v1' as const,maxAdvanceDays:31,maxLogs:5000,flexMinutes:8,routeLookaheadMinutes:180,emergencyPriority:100,rolePrecedence:['professor','guard','staff','student','demon-worker','civilian'] as ScheduleRole[]};
const activity=(id:string,name:string,type:ActivityDefinition['type'],description:string,tags:string[],locations:string[],priority:number,interruptible=true,actions:string[]=[]):ActivityDefinition=>({id,name,type,description,requiredPlaceTags:tags,defaultLocations:locations,defaultPriority:priority,interruptible,actionTags:actions,futureEffectKeys:[]});
export const activities:ActivityDefinition[]=[
 activity('sleep','취침','sleep','거주 구역에서 하루를 마친다. 수면 욕구나 회복 효과는 아직 계산하지 않는다.',['sleep'],['academy-dorm'],35,true,['sleep']),
 activity('wake_up','기상 및 준비','rest','거주지에서 일어나 하루의 준비를 한다.',['sleep','rest'],['academy-dorm'],30),
 ...(['breakfast','lunch','dinner'] as const).map((id,i)=>activity(id,['아침 식사','점심 식사','저녁 식사'][i],'meal','정해진 식사 장소에서 식사 시간을 보낸다. 욕구 변화는 후속 시스템에서 처리한다.',['eat'],['academy-dining'],50,true,['eat'])),
 activity('attend_class','수업 참석','class','실제 교실에 도착해야 참석으로 기록된다.',['classroom'],['academy-class-1-1'],80,false,['public-attendance','study']),
 activity('teach_class','수업 진행','class','배정된 강의실에서 수업을 진행한다.',['classroom'],['academy-class-1-1'],80,false,['public-attendance','speech']),
 activity('sword_training','검술 훈련','training','대련장에서 기본 훈련을 수행한다. 숙련도 경험치는 자동 지급하지 않는다.',['train'],['academy-arena'],40,true,['training']),
 activity('magic_training','마법 훈련','training','마법 훈련장에서 술식을 연습한다.',['magic-training'],['academy-magic-training'],40,true,['spell-practice']),
 activity('self_study','자율 학습','training','도서관이나 연구 공간에서 과제를 살핀다.',['study','research'],['academy-library'],40,true,['study']),
 activity('reading','독서','free','열람 가능한 장서를 읽는다.',['read'],['academy-library'],20,true,['reading']),
 activity('patrol','순찰','work','지정된 순찰 지점으로 이동해 근무한다. 경로는 실제 이동 그래프를 따른다.',['patrol','meet'],['academy-plaza'],90,false),
 activity('guard_duty','경비 근무','work','배정된 경비 초소에서 임무를 수행한다.',['guard'],['academy-guard-post'],90,false),
 activity('office_work','행정 업무','work','허가된 집무 공간에서 맡은 업무를 수행한다.',['administration','research'],['academy-admin-office'],90,false),
 activity('rest','휴식','rest','생활관이나 휴게 공간에서 쉰다.',['rest','sleep'],['academy-dorm'],30),
 activity('free_time','자유시간','free','지정한 장소에서 개인 시간을 보낸다. 친구 방문 등 자율 의사결정은 하지 않는다.',['rest','meet','read','socialize'],['academy-plaza'],20),
];
export const activityRegistry=new Map(activities.map(a=>[a.id,a]));
const e=(id:string,activityId:string,start:number,end:number,binding?:ScheduleEntry['binding'],mandatory=false):ScheduleEntry=>{const a=activityRegistry.get(activityId)!;return {id,activityId,startMinuteOfDay:start,endMinuteOfDay:end,binding,priority:a.defaultPriority,mandatory,interruptible:a.interruptible,conditions:[]};};
const weekday=[e('wake','wake_up',390,420,'home'),e('breakfast','breakfast',420,480,'meal'),e('morning-class','attend_class',510,720,'classroom',true),e('lunch','lunch',720,780,'meal'),e('afternoon-class','attend_class',780,960,'classroom',true),e('training','sword_training',960,1080,'training'),e('dinner','dinner',1080,1140,'meal'),e('leisure','free_time',1140,1320,'leisure'),e('sleep','sleep',1320,390,'home')];
const holiday=[e('wake','wake_up',480,540,'home'),e('breakfast','breakfast',540,600,'meal'),e('morning-free','free_time',600,720,'leisure'),e('lunch','lunch',720,780,'meal'),e('training','sword_training',780,1020,'training'),e('dinner','dinner',1020,1080,'meal'),e('rest','rest',1080,1140,'home'),e('leisure','free_time',1140,1380,'leisure'),e('sleep','sleep',1380,480,'home')];
const professor=[e('wake','wake_up',390,420,'home'),e('breakfast','breakfast',420,480,'meal'),{...e('prepare','office_work',480,510,'office'),priority:40,interruptible:true},e('lecture','teach_class',510,720,'classroom',true),e('lunch','lunch',720,780,'meal'),e('afternoon-lecture','teach_class',780,900,'classroom',true),e('research','self_study',900,1020,'office'),e('office','office_work',1020,1080,'office'),e('dinner','dinner',1080,1140,'meal'),e('rest','rest',1140,1320,'home'),e('sleep','sleep',1320,390,'home')];
const staff=[e('wake','wake_up',390,420,'home'),e('breakfast','breakfast',420,480,'meal'),e('office-am','office_work',510,720,'office',true),e('lunch','lunch',720,780,'meal'),e('office-pm','office_work',780,1020,'office',true),e('dinner','dinner',1080,1140,'meal'),e('rest','rest',1140,1320,'home'),e('sleep','sleep',1320,390,'home')];
const guard=[e('wake','wake_up',360,390,'home'),e('breakfast','breakfast',390,450,'meal'),e('patrol-am','patrol',480,600,'patrol',true),e('guard','guard_duty',600,720,'guard',true),e('lunch','lunch',720,780,'meal'),e('patrol-pm','patrol',780,900,'patrol',true),e('guard-pm','guard_duty',900,960,'guard',true),e('dinner','dinner',1020,1080,'meal'),e('rest','rest',1080,1320,'home'),e('sleep','sleep',1320,360,'home')];
const template=(id:string,name:string,role:ScheduleRole,entries:ScheduleEntry[],description:string):ScheduleTemplate=>({id,name,description,applicableRoles:[role],entries});
export const scheduleTemplates:ScheduleTemplate[]=[
 template('student-weekday','학생 평일','student',weekday,'학기 중 수업일. 수업은 고정 시각을 유지하고 선택 활동만 개인차를 둔다.'),
 template('student-holiday','학생 휴일','student',holiday,'주말에는 정규 수업 없이 늦은 기상과 자율 활동을 배치한다.'),
 template('student-vacation','학생 방학','student',holiday,'여름·겨울방학에는 수업을 넣지 않는다.'),
 template('student-preparation','입학 준비','student',holiday.map(x=>x.id==='training'?{...x,activityId:'self_study',binding:undefined,name:'입학 준비 학습'}:x),'2월에는 수업 대신 준비와 학습을 수행한다.'),
 template('student-exam-prep','평가 기간 대비','student',weekday.map(x=>x.id==='training'?{...x,activityId:'self_study',binding:undefined,name:'평가 대비 자율 학습'}:x),'시험일이 확정되지 않았으므로 정규 수업과 대비 학습을 사용한다. 매일 시험으로 처리하지 않는다.'),
 template('professor-weekday','교수 평일','professor',professor,'강의·연구·연구실 업무와 귀가. 강의실 이동 때문에 준비 업무가 충돌할 수 있다.'),
 template('professor-holiday','교수 휴일·방학','professor',holiday.map(x=>x.id==='training'?{...x,activityId:'self_study',binding:'office'}:x),'정규 강의가 없는 날에는 연구와 개인 시간을 보낸다.'),
 template('guard-day','경비 주간조','guard',guard,'주간 근무조의 순찰·초소·교대 휴식.'),
 template('guard-night','경비 야간조','guard',guard.map(x=>({...x,startMinuteOfDay:(x.startMinuteOfDay+720)%1440,endMinuteOfDay:(x.endMinuteOfDay+720)%1440})),'주간조와 12시간 차이를 둔 야간 근무조.'),
 template('staff-weekday','교직원 근무일','staff',staff,'기관의 행정 업무와 식사·귀가.'),
 template('staff-holiday','교직원 휴일','staff',holiday.map(x=>x.id==='training'?{...x,activityId:'reading',binding:undefined}:x),'휴일에는 지정된 근무를 기본 생성하지 않는다.'),
 template('demon-worker','마왕성 근무자','demon-worker',staff,'공통 절대 시간으로 근무하며 표시용 날짜만 심연력을 사용할 수 있다.'),
 template('civilian','일반 생활 기준','civilian',[e('free','free_time',480,1200,'leisure'),e('rest','rest',1200,480,'home')],'지원 직무가 확정되지 않은 인물의 최소 생활 계획. 거주지가 없으면 휴식 목적지 오류를 명시한다.'),
];
export const scheduleTemplateRegistry=new Map(scheduleTemplates.map(t=>[t.id,t]));
export const roleNames:Record<ScheduleRole,string>={student:'아카데미 학생',professor:'아카데미 교수',guard:'아카데미 경비병',staff:'일반 교직원','demon-worker':'마왕성 근무자',civilian:'일반 생활자'};

export const activityStatusNames={idle:'대기',planned:'시작 대기',traveling:'이동 중',active:'진행 중',completed:'완료',late:'지각 후 진행',skipped:'미수행',failed:'실패',interrupted:'중단'};
