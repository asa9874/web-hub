import type {GroupDefinition} from '../../types/academyGroup';
export const GROUP_RULES={version:'academy-groups-v1' as const,reviewMinutes:7*1440,maxGroups:32,maxInformal:8,formationCooldown:14*1440,minimumFounders:3,termMinutes:180*1440,maxLogs:600,maxMeetings:120,maxApplications:600,maxElections:12};
type Row=[string,string,string,string,string,string[],string[],string,number,number,'open'|'skill'|'recommendation'|'mixed',number];
const rows:Row[]=[
 ['sword','검술연구부','검술의 기본기를 함께 다듬고 대련을 준비한다.','sword_training','train_together',['sword'],['sword','competitor'],'academy-arena',1,990,'skill',1],
 ['battle-magic','전투마법연구회','안전한 실습과 공동 학습으로 전투 마법을 연구한다.','magic_training','study_together',['mana-control'],['magic'],'academy-magic-training',2,990,'skill',1],
 ['spirit','정령교류회','자연 관찰과 정령술 자료를 함께 학습한다.','walk_garden','casual_chat',['summoning'],['curious','nature'],'academy-life-garden',3,990,'open',0],
 ['alchemy','연금술연구부','실험 전 이론과 안전 절차를 공동 연구한다.','self_study','study_together',['alchemy'],['alchemy','curious'],'academy-library',4,990,'mixed',0],
 ['engineering','마도공학제작부','마도 장치의 설계를 토론하고 기초 제작을 연습한다.','crafting','casual_chat',['clockwork'],['crafting','curious'],'academy-life-lounge',5,840,'mixed',0],
 ['tactics','전술연구회','전술 자료를 분석하고 지휘 방식을 토론한다.','self_study','study_together',['tactics'],['tactics','strategist'],'academy-class-3-1',1,1110,'mixed',0],
 ['history','역사탐구회','기존 역사와 고문서를 읽고 근거를 비교한다.','reading','study_together',['history'],['curious','scholar'],'academy-library',2,1110,'open',0],
 ['literature','문예부','글을 쓰고 서로의 창작물을 검토한다.','letter_writing','casual_chat',[],['writing','idealistic'],'academy-life-study',3,1110,'open',0],
 ['music','음악예술부','문화 놀이와 연습으로 공연을 준비한다.','cultural_play','casual_chat',[],['social','art'],'academy-life-lounge',4,1110,'open',0],
 ['cooking','요리연구회','음식 문화를 나누고 공동 식사를 준비한다.','lunch','meal_together',['cooking'],['cooking','social'],'academy-dining',5,720,'open',0],
 ['astronomy','천문관측회','밤하늘을 관찰하고 천문 자료를 읽는다.','walk_garden','casual_chat',[],['curious','night'],'academy-life-garden',5,1200,'open',0],
 ['exploration','탐험연구회','안전한 탐험을 위한 생존 지식과 경로를 공부한다.','self_study','study_together',['survival'],['explorer','curious'],'academy-life-study',6,840,'recommendation',0],
];
export const groupDefinitions:GroupDefinition[]=rows.map(([id,name,purpose,activityId,interactionId,skills,interests,locationId,weekday,start,selection,minimumRank])=>({id:'club-'+id,name,purpose,kind:'club',activityId,interactionId,proficiencyIds:skills.map(x=>'proficiency-'+x),interests,locationId,weekday,start,end:start+60,capacity:id==='sword'?12:20,selection,minimumRank}));
groupDefinitions.push({id:'academy-council',organizationId:'academy-council',name:'학생회',purpose:'학생의 의견을 모으고 승인된 학내 행사를 조정한다.',kind:'student_council',activityId:'office_work',interactionId:'casual_chat',proficiencyIds:['proficiency-leadership'],interests:['leader','ambitious'],locationId:'academy-council-office',weekday:4,start:990,end:1050,capacity:12,selection:'mixed',minimumRank:0});
for(const [id,name,purpose,reference] of [['exam-study','시험 대비 스터디','수업 내용을 함께 복습한다.','club-history'],['salon','귀족 학생 사교 모임','예절과 서로 다른 가문의 관습을 이야기한다.','club-literature'],['free-research','자유 연구 모임','개인 연구의 궁금증을 공유한다.','club-alchemy']]){const base=groupDefinitions.find(x=>x.id===reference)!;groupDefinitions.push({...base,id:'informal-'+id,name,purpose,kind:'informal_group',selection:'open',minimumRank:0,capacity:8});}
export const groupDefinitionRegistry=new Map(groupDefinitions.map(d=>[d.id,d]));
export const GROUP_SIGNALS=[['recruitment','회원 모집 시작'],['oversubscribed','정원 초과 심사'],['joined','회원 가입'],['left','회원 탈퇴'],['meeting-planned','정기 활동 예약'],['meeting-completed','정기 활동 완료'],['meeting-cancelled','정기 활동 취소'],['goal-proposed','공동 목표 제안'],['goal-completed','공동 목표 달성'],['disagreement','회원 의견 차이'],['cooperation','합동 활동 협의'],['competition','건전한 조직 경쟁'],['graduated','회원 자격 종료'],['succession','후임 임원 선출'],['advisor','지도 교수 배정'],['facility-denied','시설 예약 거절'],['reputation','활동 평판 변화'],['suspended','운영 일시 중단'],['formed','비공식 집단 결성'],['dissolved','집단 해산'],['candidate','학생회장 후보 등록'],['election','학생회 선거 공고'],['inaugurated','학생회 임기 시작'],['policy','학생회 정책 제안'],['petition','학생 건의 접수'],['submitted','학교에 건의 제출'],['registered','정식 동아리 등록'],['registration-rejected','동아리 등록 거절']] as const;
