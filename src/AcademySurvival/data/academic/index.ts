import type {CourseDefinition,SelectionMethod} from '../../types/academic';
import type {StatId} from '../../types/knowledge';
export const ACADEMIC_RULES={minCredits:6,maxCredits:18,defaultRoomCapacity:30,maxSectionsPerProfessor:6,lessonMinutes:90,professorGraceMinutes:15,lateMinutes:10,passingScore:60,retainedTerms:20,maxSessions:250,maxLogs:500,midtermDay:15,finalDay:20,gradingDay:30,gradingMinute:1080,slots:[540,645,810,915],gradeBands:[{min:95,label:'A+',points:4.5},{min:90,label:'A',points:4},{min:85,label:'B+',points:3.5},{min:80,label:'B',points:3},{min:75,label:'C+',points:2.5},{min:70,label:'C',points:2},{min:60,label:'D',points:1},{min:0,label:'F',points:0}]};
// Three distinct learning objectives per discipline; prerequisite chains express actual progression.
type Row=[string,string,string,StatId,[string,string,string],[string,string,string],CourseDefinition['education']];
const rows:Row[]=[
 ['blade','검술·무술','sword','AGI',['기초 검 자세','거리와 반격','검술 전술 설계'],['자세와 안전한 회수 동작','상대의 간격을 읽고 반격 시점 선택','다양한 무기 상대의 공방 계획 작성'],'practice'],
 ['shield','검술·무술','shield','VIT',['방패 방어 기초','호위 대형 실습','집단 방어 지휘'],['하중 분산과 방패 각도','이동하는 대상을 지키는 위치 교대','부대의 방어선 유지와 철수 판단'],'practice'],
 ['arcane','마법 이론','magic-theory','INT',['주문 해석 입문','마법 실험 설계','술식 오류 분석'],['기호와 변수의 의미','대조군을 갖춘 재현 가능한 실험','복합 술식의 실패 원인과 오차 추정'],'theory'],
 ['mana','마법 이론','mana-control','MAG',['마력 감각 훈련','마력 흐름 안정화','정밀 마력 분배'],['자신의 마력과 외부 신호 구별','변동하는 출력의 안정화','여러 술식에 손실을 줄여 동시 배분'],'practice'],
 ['flame','원소·응용 마법','fire','MAG',['화염 안전 입문','열원 제어 실습','고온 술식 최적화'],['가연물과 안전거리 판단','크기보다 열 전달을 제어','부수 피해와 마력 소모를 함께 최소화'],'practice'],
 ['water','원소·응용 마법','water','MAG',['수류 형상 기초','수압과 유동','복합 수계 응용'],['흐르는 물의 형태 유지','좁은 관로와 개방 수면의 차이','다른 환경에서 지속 가능한 수계 설계'],'practice'],
 ['ward','치유·지원','barrier','WIL',['결계 경계 읽기','분산 방호 구축','중첩 결계 설계'],['보호 범위와 취약 지점 확인','여러 대상을 위한 부담 분산','서로 간섭하지 않는 결계 층 설계'],'practice'],
 ['care','치유·지원','healing','INT',['치유 관찰 기초','회복 술식 조절','복합 손상 지원'],['증상과 추측을 구별해 기록','회복 강도를 대상 상태에 맞춤','위험한 손상의 우선순위와 협력 판단'],'practice'],
 ['reagent','연금술·제작','alchemy','INT',['시약 취급과 기록','반응 경로 분석','촉매 공정 설계'],['라벨과 취급 규칙','투입 순서에 따른 반응 비교','부산물과 수율을 고려한 공정 제안'],'practice'],
 ['herb','연금술·제작','herbalism','INT',['약초 동정 입문','생육 환경 조사','약재 품질 검증'],['닮은 식물의 구별과 채집 금기','서식 조건과 성분 차이 기록','오염과 보관 손실을 검증하는 방법'],'seminar'],
 ['device','마도공학','clockwork','INT',['기구 분해 관찰','동력 전달 실습','자동 장치 설계'],['구성 부품과 역할','마찰과 전달 손실 측정','오작동 시 안전하게 멈추는 기구 설계'],'practice'],
 ['circle','마도공학','magic-circles','INT',['마법진 기호학','회로 연결 검증','복합 마법진 검토'],['기호의 표준 표기','연결 관계의 오류 검출','큰 회로의 분리 검증과 안정성 분석'],'theory'],
 ['command','전술·군사','tactics','INT',['지형과 전술 기초','병력 운용 연습','작전안 비판 평가'],['지형에 따른 시야와 이동','보급과 예비대의 배치','불완전한 정보에서 작전 위험 검토'],'seminar'],
 ['history','역사·언어·학문','history','INT',['제국 사료 읽기','역사 자료 대조','역사 해석 논증'],['기록의 작성 맥락','서로 모순되는 사료의 비교','근거와 추정을 분리한 논증 작성'],'theory'],
 ['language','역사·언어·학문','ancient-languages','INT',['고대 문자 입문','비문 번역 실습','언어 계통 연구'],['문자와 발음의 대응','훼손된 문장의 복수 해석','여러 문헌의 계통과 차용 흔적 비교'],'seminar'],
 ['diplomacy','사회·정치·외교','negotiation','CHA',['협상 질문법','이해관계 조정','다자 합의 설계'],['주장 뒤의 필요를 질문','양보와 대안을 분리해 정리','여러 당사자가 지킬 수 있는 합의 설계'],'seminar'],
 ['civic','사회·정치·외교','administration','INT',['공문서와 절차','조직 업무 조정','제도 개선 분석'],['권한과 책임의 기록','중복 업무와 인계 문제 해결','실제 집행 비용을 고려한 제도 비교'],'theory'],
 ['wild','탐험·생존','survival','VIT',['야외 안전 기초','야영 자원 관리','악조건 귀환 계획'],['기상과 안전한 휴식 지점','식수와 체온을 위한 자원 배분','구조를 기다릴지 이동할지 판단'],'practice'],
 ['beast','탐험·생존','monster-lore','INT',['마물 흔적 관찰','생태와 행동 분석','위험 개체 조사'],['접촉 없이 남은 흔적 기록','먹이와 영역에 따른 행동 추정','불확실성을 남긴 안전 조사 계획'],'seminar'],
 ['frost','원소·응용 마법','ice','MAG',['냉각과 결빙 기초','빙결 형상 유지','저온 환경 술식'],['냉각과 물질 변화의 차이','성장 중인 결정의 균열 억제','동료를 해치지 않는 저온 영역 운용'],'practice'],
 ['spark','원소·응용 마법','lightning','MAG',['전하와 접지','전격 경로 제어','연쇄 방전 안전'],['접지와 절연의 안전 규칙','의도한 경로로 전류를 유도','여러 표적 사이의 불필요한 방전 억제'],'practice'],
 ['pure','마법 이론','arcane','MAG',['무속성 술식 기초','순수 마력 형상','속성 간섭 분석'],['속성과 무관한 마력 표현','형태를 유지하는 최소 조건','다른 속성 주문과 만날 때의 간섭 해석'],'practice'],
 ['bow','검술·무술','archery','AGI',['활시위와 조준','이동 표적 추적','장거리 사격 판단'],['호흡과 안전한 사선 확보','움직임을 읽고 조준점 수정','거리·바람·아군 위치를 함께 판단'],'practice'],
 ['holy','치유·지원','holy-magic','WIL',['신성술 의례 기초','지원 성가 운용','헌신과 술식 한계'],['의례 순서와 대상 동의','함께 수행하는 인원의 리듬 유지','감당할 수 있는 부담과 철수 기준'],'practice'],
 ['conceal','탐험·생존','stealth','AGI',['은폐와 발소리','시야 사각 이동','비접촉 잠입 계획'],['숨기기 쉬운 흔적과 어려운 흔적','관찰자의 시야를 벗어나는 경로','접촉과 충돌을 줄이는 출입 계획'],'practice'],
 ['close','검술·무술','dagger','AGI',['단검 안전 취급','근접 간격 전환','제압과 이탈 판단'],['짧은 날을 다루는 안전한 손 위치','공격보다 먼저 퇴로를 확보','과잉 피해 없이 접촉을 끝내는 판단'],'practice'],
 ['lead','전술·군사','leadership','CHA',['명령과 보고 기초','팀 역할 배분','위기 지휘 협의'],['구체적인 지시와 확인 보고','부하의 능력에 따른 임무 배분','불확실한 상황에서 의견을 모아 결정'],'seminar'],
 ['research','특수 연구','ritual','WIL',['의식 기록과 윤리','의식 변수 통제','의식 안전 심사'],['관찰 기록과 금지 행위','참여자와 환경 변수 통제','성과보다 피해 가능성을 먼저 검토'],'seminar'],
];
export const courses:CourseDefinition[]=rows.flatMap(([id,category,skill,stat,names,topics,education])=>names.map((name,index)=>({id:`course-${id}-${index+1}`,name,description:`${topics[index]}를 학습한다. ${index===0?'안전·관찰 과제':index===1?'비교 실습과 원인 설명':'독립 설계안의 검증과 비판'}으로 평가한다.`,category,level:index+1,recommendedYear:index+1,prerequisites:index?[`course-${id}-${index}`]:[],statId:stat,proficiencyId:'proficiency-'+skill,education,assessment:education==='theory'?'written':education==='practice'?'practical':'mixed',credits:2,capacity:index===0?30:index===1?20:12,requiredPlaceTags:education==='practice'&&['검술·무술','탐험·생존'].includes(category)?['train']:education==='practice'&&['원소·응용 마법','마법 이론','치유·지원'].includes(category)?['magic-training','classroom']:['classroom']})));
courses.push({id:'course-observation-basics',name:'관찰과 학습 기록',description:'관찰한 사실·추측·확인하지 못한 정보를 구분하고 실습 기록을 작성한다. 특정 전공 숙련도를 가정하지 않는 일반 능력치 기반 기초 과정이다.',category:'역사·언어·학문',level:1,recommendedYear:1,prerequisites:[],statId:'INT',education:'theory',assessment:'written',credits:2,capacity:30,requiredPlaceTags:['classroom']},{id:'course-academic-communication',name:'질문과 학술 소통',description:'모르는 내용을 구체적으로 질문하고 동료의 설명을 재구성한다. 별도 가상 숙련도 없이 일반 언어적 전달 능력을 평가한다.',category:'사회·정치·외교',level:1,recommendedYear:1,prerequisites:[],statId:'CHA',education:'seminar',assessment:'mixed',credits:2,capacity:30,requiredPlaceTags:['classroom']});
export const courseRegistry=new Map(courses.map(c=>[c.id,c]));
export const selectionMethods:SelectionMethod[]=['grade_based','skill_based','aptitude_based','first_come','lottery','professor_selection','mixed'];

export const academicPhaseNames={enrollment:'학적 확인',registration:'수강신청',semester_active:'학기 운영',midterm_period:'중간 평가',final_period:'기말 평가',grading:'성적 확정',vacation:'방학'};
export const selectionNames={grade_based:'성적 우선',skill_based:'숙련도 우선',aptitude_based:'적성 우선',first_come:'선착순',lottery:'추첨',professor_selection:'교수 선발',mixed:'혼합 선발'};
export const applicationNames={applied:'접수',accepted:'합격',waiting:'대기',rejected:'탈락',withdrawn:'취소'};
