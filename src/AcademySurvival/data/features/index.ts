import type {SystemFeatureNote,FeatureItem,FeatureStatus} from '../../types/features';
const root='src/AcademySurvival/';
const item=(id:string,name:string,description:string,path:string,test:string,status:FeatureStatus='implemented'):FeatureItem=>({id,name,description,status,verificationStatus:status==='implemented'?'passed':'not_run',evidencePaths:[path.startsWith('scripts/')?path:root+path,...test?[`scripts/${test}`]:[]],notes:status==='implemented'?['기존 작업의 해당 검사 기록에 근거. 현재 실행 여부와 구분한다.']:['코드로 확인 가능한 범위를 넘어 완료 처리하지 않는다.'],verificationScope:status==='implemented'?'recorded':'none'});
const system=(id:string,name:string,category:string,description:string,dependencies:string[],items:FeatureItem[],next:string[],future:string[],version='v1'):SystemFeatureNote=>({id,name,category,description,currentVersion:version,dependencies,versions:[{version,title:'현재 구현 범위',summary:description,origin:'code',items},{version:'v2',title:'확장 제안',summary:'아래 항목은 확정 구현 약속이 아닌 제안이다.',origin:'proposal',items:next.map((n,i)=>({...item(`${id}-v2-${i}`,n,n,'README.md','', 'planned'),notes:['제안 · 구현되지 않음']}))},{version:'v3',title:'장기 확장 제안',summary:'의존 시스템 검증 후 검토할 제안.',origin:'proposal',items:future.map((n,i)=>({...item(`${id}-v3-${i}`,n,n,'README.md','', 'planned'),notes:['제안 · 구현되지 않음']}))}]});
export const featureNotes:SystemFeatureNote[]=[
 system('character','캐릭터 기본 모델','캐릭터·성장','플레이어·랜덤·고정 인물이 동일한 모델과 상세 패널을 사용한다.',[],[
 item('char-shared','공통 ID·모델·상태창','kind는 숨겨진 보정이나 별도 능력치 상한을 부여하지 않는다.','types/character.ts','test-academy-character.mjs'),
 item('char-fixed','고정 인물 템플릿','세레나의 고정·미확정 슬롯과 실제 캐릭터 모드를 분리한다.','systems/characterRegistry.ts','test-academy-character.mjs')],['추가 고정 인물 데이터'],['캐릭터 정보 공개 정책']),
 system('stats','능력치','캐릭터·성장','7개 능력치와 공통 수치 구간·등급 표시.',['character'],[
 item('stats-seven','7종 능력치·등급','STR/AGI/VIT/MAG/INT/WIL/CHA 정의와 범위별 고유 설명.','systems/knowledgeRegistry.ts','test-academy-knowledge.mjs'),
 item('stats-growth','실제 성장 처리','훈련에 따른 영구 능력치 상승 엔진은 없다.','data/knowledge/README.md','', 'not_implemented')],['성장 결과를 적용하는 명시적 API'],['성장 한계와 장기 밸런스']),
 system('proficiency','숙련도','캐릭터·성장','카탈로그 49종과 0~9 경지. 특성 진화와 독립적이다.',['character'],[
 item('skills-catalog','정의·경지·캐릭터 표시','실제 ID로 캐릭터의 숙련도를 조회한다.','systems/knowledgeRegistry.ts','test-academy-knowledge.mjs'),
 item('skills-xp','경험치와 자동 경지 상승','경험치 임계값은 미확정이며 실제 훈련 성장은 구현하지 않았다.','data/knowledge/README.md','', 'not_implemented')],['경험치 규칙 확정'],['훈련 효과와 성장 평가']),
 system('traits','특성','캐릭터·성장','405종 정의·출생/획득 조건·진화 참조·영향력 메타데이터.',['character'],[
 item('traits-data','특성·진화·확률','도감에서 진화 그래프와 출현 조건·효과를 열람한다.','systems/registry.ts','test-academy.mjs'),
 item('traits-evolve','사건에 따른 자동 획득·진화','진화 참조가 실행 이벤트 엔진을 뜻하지 않는다.','data/expansion/README.md','', 'not_implemented')],['사건 기반 획득 처리'],['장기 성장 사건']),
 system('gifts','기프트(은총)','캐릭터·성장','프로젝트의 정식 능력 이름은 기프트다. 은총이라는 별도 시스템을 중복 생성하지 않는다.',['character'],[
 item('gifts-data','403종 선천 능력·고정 영향력','ID·설명·효과·선천 적격성을 관리하며 성장·진화하지 않는다.','systems/registry.ts','test-academy.mjs')],['효과 실행 어댑터 확장'],['정보 공개와 고유 사건 연결']),
 system('statuses','상태','캐릭터·성장','150종 정의와 단계·부위·적용 인스턴스·충돌 규칙.',['character'],[
 item('statuses-apply','적용·제거·단계·부위','개발 패널에서 중첩·충돌·효과 목록을 검증한다.','systems/statusApplication.ts','test-academy-status.mjs'),
 item('statuses-duration','지속·회복 자동 실행','정의의 지속/전이 조건은 있으나 전체 치료·질병 시뮬레이션은 없다.','data/statuses/README.md','', 'partial')],['시간 기반 상태 전이 어댑터'],['치료·질병 진행']),
 system('impact','캐릭터 영향력','캐릭터·성장','전투력과 다른 잠재 파급력 점수. 6개 영역 감쇠 합산을 버전 설정으로 계산한다.',['stats','proficiency','traits','gifts','positions','titles'],[
 item('impact-v1','교체 가능한 v1 계산기','능력치180/숙련도170/특성150/기프트180/직급170/칭호150. 원본에 영구 저장하지 않는다.','systems/characterImpact.ts','test-academy-impact.mjs')],['동일 원인 중복 평가 개선'],['재산·관계·조직을 고려한 v2 산식']),
 system('generation','NPC 생성','NPC 시뮬레이션','7전공·5성장 유형·4학년과 시드별 개인 난수 스트림.',['character','impact','organizations','morality','motivation'],[
 item('generation-seeded','조건·대량·목표 영향력 생성','조건을 보존해 제한 재시도하고 실패 시 최근접 후보와 진단을 제공한다.','systems/npcGeneration.ts','test-academy-npc.mjs'),
 item('generation-preview','Worker 테스트·통계','100명까지 생성하고 공통 상태창과 실제 통계를 표시한다.','components/NpcGenerator.tsx','test-academy-npc-browser.mjs')],['교수·기사 생성 프로필 정교화'],['지역·세력별 생성 규칙'] ,'v1.6'),
 system('organizations','조직·소속','사회·조직','제국·마계 2개 초기 루트, 33개 조직. 계층 깊이는 고정하지 않는다.',['character'],[
 item('org-tree','계층·복수·대표·비밀 소속','직접 소속만 저장하고 조상은 조회하며 조직 영향력은 캐릭터 v1에 합산하지 않는다.','systems/organizations.ts','test-academy-organizations.mjs')],['가입·탈퇴 사건'],['외교·재정·세력 시뮬레이션']),
 system('positions','직급·신분','사회·조직','201종과 소속 관할·배타 직위 슬롯, 다중 보유와 대표 항목.',['organizations','character'],[
 item('position-rules','직급·배타·영향력','직급 부여와 조직 가입은 독립이며 상호 일관성만 검증한다.','systems/socialRules.ts','test-academy-social.mjs'),
 item('position-auto','자동 승진·박탈','관계 데이터가 자동 정치·임명 엔진을 뜻하지 않는다.','data/social/README.md','', 'not_implemented')],['명시적 임명·박탈 사건'],['정치와 권한 평가']),
 system('titles','칭호','사회·조직','200종 업적·명성 칭호와 공개 인식·사실·보존 이력의 구분.',['character'],[
 item('titles-rules','다중 보유·대표·유효성','칭호 영향력과 실제 캐릭터 영향력을 분리한다.','systems/socialRules.ts','test-academy-social.mjs'),
 item('titles-events','자동 획득 이벤트','칭호 정의의 조건을 자동 실행하는 범용 사건 엔진은 없다.','data/social/README.md','', 'not_implemented')],['실제 업적 결과 연결'],['소문과 사실 인식 모델']),
 system('morality','도덕·카르마·성향','사회·조직','도덕은 마음, 카르마는 행적, 100종 성향은 사고방식.',['character'],[
 item('morality-values','수치·범위·성향 조합','도덕 ±100, 카르마 ±1000, 성향 1~3개와 배타 대칭·가중 생성.','systems/morality.ts','test-academy-morality.mjs'),
 item('karma-api','사유 있는 카르마 변경','실제 사건의 선악 판정은 외부 시스템이 담당한다.','systems/morality.ts','test-academy-morality.mjs')],['행적 사건 어댑터'],['장기 가치관 변화']),
 system('relationships','인간관계','사회·조직','희소 방향 그래프, 50유형과 독립 감정 5종.',['character','morality','organizations'],[
 item('relations-directed','생성·수정·상호 사실·공개 범위','인식적 친구/라이벌과 혈연 사실의 역방향 정합성을 구분한다.','systems/relationships.ts','test-academy-relationships.mjs'),
 item('relations-gen','초기 인맥·샌드박스','접점 기반 제한 후보로 시드 인맥을 만들며 모든 쌍을 저장하지 않는다.','systems/relationshipGeneration.ts','test-academy-relationships.mjs')],['상호작용 결과 감정 변화'],['기억·소문·오해']),
 system('time','시간·달력','세계·시간','동일한 절대 분을 제국력과 심연력으로 표현한다.',[],[
 item('calendar-convert','공식 달력·환산·시간대','12×30일과10×36일, +2700년·공식 월 이름·왕복 변환.','systems/calendar.ts','test-academy-time.mjs'),
 item('clock-events','단일 시계·중간 이벤트·구간 훅','큰 시간 진행도 중간 이동·일과·욕구 시점을 처리한다.','systems/gameTime.ts','test-academy-time.mjs'),
 item('academic','월별 학사 일정','구체적인 시험 날짜·진급 판정은 아직 없다.','data/calendars/index.ts','test-academy-time.mjs')],['구체적인 학사 사건 날짜'],['연도별 학사 변경']),
 system('locations','장소·이동','세계·시간','42개 장소와33개 이동 연결. 포함 트리와 이동 그래프는 독립적이다.',['character','time','organizations','positions'],[
 item('places-tree','깊이 제한 없는 장소 조회','현재 위치·직접/하위 인원·이동 중 인원을 분리한다.','systems/locationWorld.ts','test-academy-locations.mjs'),
 item('places-route','실제 경로·이동 소요·동시 도착','정적인 지형·방식·상태 보정과 시간 의존 경로를 사용한다.','systems/locationRouting.ts','test-academy-locations.mjs'),
 item('places-access','복합 출입·도착 시각 검사','시간/신분/소속/허가 및 AND/OR/NOT, 이동 도중 무효화 안전 정지.','systems/locationAccess.ts','test-academy-locations.mjs')],['활동별 수용량 예약'],['동적 폐쇄·점유·파괴']),
 system('schedules','NPC 일과표','NPC 시뮬레이션','13개 역할·학사 템플릿과 실제 이동·지각·미수행·중단/재개.',['time','locations','character'],[
 item('schedule-run','예약 실행과 역할별 일과','공통 절대 시각의 이벤트 큐를 사용하며 활동 전에 도착한다.','systems/npcSchedules.ts','test-academy-schedules.mjs'),
 item('schedule-control','AI 실행 의도 연결','기본 정의를 변조하지 않고 별도 자율 의도를 동일 실행기에 전달한다.','systems/npcSchedules.ts','test-academy-ai.mjs','needs_verification')],['일과 예외 사건 확대'],['장기 직무 배정']),
 system('motivation','욕구·목표','NPC 시뮬레이션','10욕구·55목표, 정밀 구간 적분과 실증 조건·진행도 구분.',['character','schedules','relationships'],[
 item('needs-integral','욕구 변화·민감도·긴급도','1분 누적과 큰 진행이 같고 실제 수행 구간만 충족한다.','systems/motivationEngine.ts','test-academy-motivations.mjs'),
 item('goals-actual','목표 생성·판정·후보','미구현 외부 조건은 보류하며 표시 진행도100만으로 완료하지 않는다.','systems/motivationRules.ts','test-academy-motivations.mjs')],['목표 사건 어댑터 확대'],['장기 목표 변화·선택']),
 system('ai','NPC 자율 행동 AI','NPC 시뮬레이션','일과·욕구·목표 의도를 효용 비교해 실제 활동으로 전달한다.',['schedules','motivation','relationships','morality','locations'],[
 item('ai-utility','정규화 효용·습관·지속·실패 재계획','설정 가중치·중복 동기 감쇠·의무/긴급 정책·개인 시드 선택.','systems/npcAi.ts','test-academy-ai.mjs','needs_verification'),
 item('ai-social','인지 제한·공동 활동','현재 장소의 알려진 상대에게 요청·수락/거절·양쪽 활동·종료를 처리한다.','systems/npcAi.ts','test-academy-ai.mjs','needs_verification'),
 item('ai-sandbox','AI 도감·실제 엔진 테스트','원본과 분리한 생성·강제 선택·점수·실패·로그·시간 진행.','components/AiCatalog.tsx','test-academy-ai-browser.mjs','needs_verification')],['대화·상호작용 결과와 기억'],['장기 계획과 다중 목표 조정']),
 system('persistence','저장·복원 기반','기반 시스템','시간·위치·관계·일과 실행·동기·AI 상태의 버전별 직렬화.',['time','locations','schedules','motivation'],[
 item('save-runtime','런타임 스냅샷·중복 로드 검증','샌드박스와 엔진 저장 어댑터를 제공한다.','systems/motivationEngine.ts','test-academy-motivations.mjs'),
 item('save-campaign','실제 캠페인 저장 슬롯','브라우저 영구 캠페인 저장소·회차 시스템은 아직 없다.','README.md','', 'not_implemented')],['캠페인 저장소 어댑터'],['다중 슬롯·호환 정책']),
 system('effects','공통 효과·조건','기반 시스템','도감이 공유하는 효과 타입·조건·설명·검증과 일부 실행 어댑터.',['traits','gifts','statuses'],[
 item('effects-definitions','효과·조건 데이터와 계산','도감 정의의 효과 문구·확률·기본 계산을 재사용한다.','systems/effectResolver.ts','test-academy.mjs'),
 item('effects-all','모든 고유 규칙의 실제 실행','SPECIAL_RULE 정의가 실행 구현을 보장하지 않는다.','AGENTS.md','', 'partial')],['고유 효과 실행 어댑터'],['복합 사건의 효과 순서']),
 system('events','사건·퀘스트','게임플레이','예정 사건은 기획 참조이며 범용 실행기로 확인되지 않았다.',['character','time'],[
 item('events-engine','사건·퀘스트 실행','예정 이벤트 목록을 플레이 가능한 사건으로 표시하지 않는다.','README.md','', 'not_implemented')],['명시적 사건 결과 모델'],['사건 연쇄·분기 퀘스트']),
 system('combat','전투·성장 결과','게임플레이','훈련·대련 활동과 실제 전투 승패·부상 판정은 다르다.',['character','stats','proficiency','statuses'],[
 item('combat-engine','전투 판정·대련 승패','AI의 연습 대련은 공동 활동이며 전투 결과를 생성하지 않는다.','data/schedules/index.ts','', 'not_implemented')],['전투 결과 계약'],['전투 행동 AI']),
 system('archive','설정집·공통 팝업','기반 시스템','데이터 ID 기반 작은 그리드와 재사용 가능한 상세 팝업.',['character'],[
 item('archive-popup','도감 검색·필터·팝업','인게임에서도 재사용할 제어형 상세 다이얼로그를 제공한다.','components/DetailDialog.tsx','test-academy-popup-reuse-browser.mjs')],['정보 공개 정책 통합'],['동적 기록과 발견 도감']),
 system('feature-notes','설정집 기능 노트','기반 시스템','코드 근거·검증 범위·부분/미구현·의존성·제안을 분리한다.',['archive'],[
 item('notes-registry','타입 안전 레지스트리·상태 집계','기능 항목에서 시스템 상태를 계산하고 검색·분류·검증 상태로 필터한다.','data/features/index.ts','test-academy-features.mjs','needs_verification')],['검사 결과 수집 자동화'],['버전 간 기능 비교']),
];
const currentChecks=new Set(['test-academy-ai.mjs','test-academy-ai-browser.mjs','test-academy-features.mjs','test-academy-character.mjs','test-academy-locations.mjs','test-academy-time.mjs','test-academy-schedules.mjs','test-academy-motivations.mjs']);
for(const note of featureNotes)for(const feature of note.versions[0].items)if(feature.evidencePaths.some(path=>currentChecks.has(path.split('/').at(-1)!))&&['implemented','needs_verification'].includes(feature.status)){feature.status='implemented';feature.verificationStatus='passed';feature.verificationScope='current';feature.notes=['이번 변경 범위의 해당 단위 검사 또는 핵심 UI 검사 통과. 전체 게임 E2E 통과를 뜻하지 않는다.'];}
export function systemStatus(note:SystemFeatureNote):FeatureStatus {const items=note.versions.find(v=>v.version===note.currentVersion)?.items??[];if(!items.length)return 'not_implemented';if(items.every(i=>i.status==='implemented'&&i.verificationStatus==='passed'))return 'implemented';if(items.every(i=>i.status==='not_implemented'))return 'not_implemented';if(items.some(i=>i.status==='partial'||i.status==='not_implemented'))return 'partial';return 'needs_verification';}
export const featureStatusNames:Record<FeatureStatus,string>={implemented:'구현 완료',partial:'부분 구현',not_implemented:'미구현',planned:'계획',needs_verification:'검증 필요'};
