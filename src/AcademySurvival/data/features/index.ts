import type {SystemFeatureNote,FeatureItem,FeatureStatus} from '../../types/features';
const root='src/AcademySurvival/';
const item=(id:string,name:string,description:string,path:string,test:string,status:FeatureStatus='implemented'):FeatureItem=>({id,name,description,status,verificationStatus:status==='implemented'?'passed':'not_run',evidencePaths:[path.startsWith('scripts/')?path:root+path,...test?[`scripts/${test}`]:[]],notes:status==='implemented'?['기존 작업의 해당 검사 기록에 근거. 현재 실행 여부와 구분한다.']:['코드로 확인 가능한 범위를 넘어 완료 처리하지 않는다.'],verificationScope:status==='implemented'?'recorded':'none'});
const system=(id:string,name:string,category:string,description:string,dependencies:string[],items:FeatureItem[],next:string[],future:string[],version='v1'):SystemFeatureNote=>({id,name,category,description,currentVersion:version,dependencies,versions:[{version,title:'현재 구현 범위',summary:description,origin:'code',items},{version:'v2',title:'확장 제안',summary:'아래 항목은 확정 구현 약속이 아닌 제안이다.',origin:'proposal',items:next.map((n,i)=>({...item(`${id}-v2-${i}`,n,n,'README.md','', 'planned'),notes:['제안 · 구현되지 않음']}))},{version:'v3',title:'장기 확장 제안',summary:'의존 시스템 검증 후 검토할 제안.',origin:'proposal',items:future.map((n,i)=>({...item(`${id}-v3-${i}`,n,n,'README.md','', 'planned'),notes:['제안 · 구현되지 않음']}))}]});
export const featureNotes:SystemFeatureNote[]=[
 system('story-graphs','동적 사건·히로인 서사 그래프','기록·관찰','기존 정의/인과/기억에서 읽는 설계·실제 회차·연대기. 별도 스토리 엔진이나 UI용 분기 카탈로그 없음.',['world-events','memory','heroine-routes'],[
 item('story-graph-data','조건·후속·합류 그래프 추출','실제 EventCondition/후속/합류/선택 조건을 읽고 노드를 공유한다. 가능 관계는 실제 발생 인과와 구분한다.','systems/storyGraph.ts','test-academy-story-graph.mjs'),
 item('story-graph-private','플레이어 발견 범위','직접 경험·목격·실제 습득 정보/당사자 장면 기록만 투영. 미래 제목/조건/추첨·타인 비밀 선택 제거, 전해 들은 사건은 실제 결과/장소/참가자 숨김.','systems/storyGraph.ts','test-academy-story-graph.mjs'),
 item('story-graph-ui','15인 공통 서사·연대기 UI','원형 노드/곡선 화살표·동일 깊이 분기/합류·초기 너비 맞춤. 세레나22개 및 기존14명 실제 정의를 공통 캔버스로 조회. 확대/스크롤 드래그·검색/종류/연도/중요도·선택/접기/80개 부분 표시·연대기→실제 노드. 다른14명의 신규 심화 루트 완성이 아님.','components/StoryGraph.tsx','test-academy-story-graph.mjs'),
 item('event-branch-audit','실제 분기 추첨 근거','기존 시드/확률/가중 선택을 보존하고 당시 조건별 통과·기본/원인 가중치·최종 가중치·추첨값·선택 결과를 선택 저장. 구형은 재추첨하지 않는다. 미발생한 모든 기회의 영구 감사는 후속.','systems/worldEvents.ts','test-academy-story-graph.mjs'),
 item('story-graph-scope','동적 콘텐츠 확장 범위','기존 합류/분기/차단/관계/기억을 재사용. 입학 평가를 새 대련 시험으로 바꾸거나 상대60/20/10/10 표를 강제하지 않음. 모든 행사/히로인에 새 분기를 대량 추가하는 작업은 후속.','systems/storyGraph.ts','test-academy-story-graph.mjs','partial'),
 ],['필요한 특정 콘텐츠부터 동적 배역 가중치 설계','미발생 기회 감사의 선택적 요약'],['다년 대규모 그래프 아카이브','다른14명 심화 서사 확장']),

 system('admission','게임 시작·입학 평가·엔딩 도감','플레이 흐름','공통 생성·영향력 위의 출발 선택과 실제 자질 입학 평가. 반별 교육·승강은 후속.',['generation','impact','academics','persistence','play-ui'],[
 item('start-quality','초기 자질·난이도·성장 방향','기존 출생 확률/배타와 유한16후보·실제 영향력 계산 재사용. 현재1학년 분포에 맞춰 목표 범위를 조정하며 성장 한계·세계 위험은 변경하지 않는다.','systems/admission.ts','test-academy-admission.mjs'),
 item('admission-exam','실제 능력 평가·S~F 배정','기초·실기·필기·전문 강점. 점수의 별도 확률 추첨 없음. 새 흐름의 플레이어와 학생 NPC만 배정, 고정 설정·구형 저장 보존. 반별 전용 교육과정과 학기별 승강은 미구현.','systems/admission.ts','test-academy-admission.mjs','partial'),
 item('start-presentation','자질 공개·입학식·평가 화면','기프트/특성별 공개·모두 공개·빠른 공개·재추첨·이전 단계, 생성된 실제 자질 요약. 합격 전에는 생활 세션 미생성.','components/GameStart.tsx','test-academy-admission.mjs'),
 item('ending-collection','BAD END 00·회차 간 도감','입학 실패 회차 종료, 최초 발견/회차/시각·재감상·미발견 제목/조건 비공개·별도 저장. 손상된 도감 덮어쓰기 금지.','systems/endingCollection.ts','test-academy-admission.mjs'),
 item('life-milestone','10년 생존 이정표','실제 시작 시각부터3600일 경과에만 수집. 종료 명령 없음. 검사는 경계 조건의 준비된 시각을 사용하며10년 전체 플레이 검증은 아님. 졸업/사망 등 다른 결말은 가짜 해금 없이 후속.','systems/endingCollection.ts','test-academy-admission.mjs','partial'),
 ],['반별 실제 교육과정·학기 승강','정식 졸업·사망 결과 도감 연결'],['다양한 확정 결말 연출','장기 회차 밸런스 검수']),

 system('academy-story-network','아카데미 사건망·개인 서사 연쇄','NPC 시뮬레이션','기존 개인50/교차12 재사용·신규 일상30(실행 연결16/의존 보류14). 전체92건의 완성 또는 장기 콘텐츠 검증을 뜻하지 않는다.',['fixed-students','world-events','conversations','memory','academics','daily-life'],[
 item('story-consequences','실제 원인 기반 후속 기회','발생 사건과 가능성을 분리하고 해금·변경·지연·우회·차단/만료를 공통 큐로 처리. 원인·실제 후속·차단자·결과·시간을 저장.','systems/worldEvents.ts','test-academy-story-network.mjs'),
 item('story-conditions','결과·경과 시간·실제 도메인 근거','인물별 선행 결과/경과 조건·정확한 실제 원인 신호·수강 중 미실시 평가 시간창을 판정.','types/worldEvent.ts','test-academy-story-network.mjs'),
 item('story-daily-content','일상30건과 교차12개 연결표','16개 실행 경로 연결,14개 외부 계약 부재로 차단. 방 재배정·연구 성과 등 지원되지 않는 결과는 지급하지 않음.','data/academyStories/index.ts','test-academy-story-network.mjs','partial'),
 item('story-roots','15개 서사 뿌리·기존 후속','확정 설정과 기존 ID 유지. 일부 공동 활동의 결과를 실제 관계에 따라 구분하며 20개 개인/교차 경로의 의존 보류는 유지.15명 전원 3종 고유 서사 완료 아님.','data/academyStories/roots.ts','test-academy-fixed-students.mjs','partial'),
 item('story-observer','개발자 사건망·가능 경로·후속 관찰','정의상 가능 그래프와 실제 인과 그래프 구분,원인·결과·미충족 조건·만료/차단 관찰. 화면 시각 검증은 별도 기록.','components/AcademyStoryNetwork.tsx','test-academy-story-network.mjs','needs_verification'),
 item('story-save','통합 저장·결정성·공개 차단','선택적 필드로 기존 저장 허용,대기 중 복원·분할/일괄·손상 저장 원자적 거부·공개 투영에서 미래 경로 제거.','systems/worldEvents.ts','test-academy-story-network.mjs'),
 item('story-long','다년 사건 밀도·콘텐츠 검수','30/360/720/1440일 전체 AI 시뮬레이션과15명 전용 고유 선택 장면 전체 검수는 미실행.','data/academyStories/README.md','','needs_verification'),
 ],['의존 기능 구현 후 보류 사건 연결','개인별 고유 다지선다·장기 여파 검수'],['졸업 이후 사건망','다년 콘텐츠 밀도 검증']),

 system('rift-crisis','균열의 시대 · 세계급 메인 이벤트','세계관·시간','기존 국가·지역 위의 비개입 지역 집계 수직 슬라이스. 전체 전쟁·외교·졸업 후 콘텐츠는 계획.',['world-lore','time','locations','schedules','memory','world-events','ai'],[
 item('rift-canon','네르바·에르하 공식 설계','마계와 별개인 물리 세계, 마력 순환 위기, 세 정치 세력/유실체, 세 구조체·10진실·30사건·5결과 정의.','data/riftCrisis/index.ts','test-academy-rift-crisis.mjs'),
 item('rift-regional','시간·지역·자원 기반 균열','상대 시각 전조·단계/용량·유한 자원·탐사/구축/호위·환경 피해·지역 조사/방위/봉쇄/복구. 개별 생물 전투·전선·피난 NPC 이동은 미구현.','systems/riftCrisis.ts','test-academy-rift-crisis.mjs','partial'),
 item('rift-events','실행14/설계30과 인과관계','명시적 지역 발생 기록만 기존 세계 이벤트 큐/DAG로 연결. 영 NPC 집계 사건은 인물 효과/상호작용/후속 강제 실행 금지.','systems/worldEvents.ts','test-academy-rift-crisis.mjs','partial'),
 item('rift-knowledge','직접 인지·정보 전달·스포일러 필터','실제 현장 관측·지역 기록/기존 소문 전달, 초기6단서와 지성 가능성. 문명 고유명/정치/침공 원인 공개는 후속 검증 필요.','systems/riftCrisis.ts','test-academy-rift-crisis.mjs','partial'),
 item('rift-field','실제 필드 활동·접근 통제','정상 이동/30분 완료·인지한 곳의 AI 후보·세계별 접근 규칙, 지도는 알고 있는 곳만 표시. 고정 학생 강제 배역 없음.','components/RiftCrisisPanel.tsx','test-academy-rift-crisis-browser.mjs'),
 item('rift-persistence','저장·비개입·분할 시간','선택 저장·구형 명시 연결·자원/참조 검증, 28일 영 NPC 지역 집계의 분/일괄 일치·봉쇄/활성 통로 복원.','types/riftCrisis.ts','test-academy-rift-crisis.mjs'),
 item('rift-chronology','427년 전조·10년 연대기','새 회차의 희소 전조/연도별 준비 기간과 조건 기반 확대. 졸업·진로의 실제 전환은 후속이며 연대기를 강제 종료 조건으로 사용하지 않음.','data/riftCrisis/chronology.ts','test-academy-rift-chronology.mjs','partial'),
 item('rift-prelude-evidence','초기 증거 보존·후속 비교','5개 전조 예약/미발생 구분·고유 사건/지역/측정 파형 보존, 실제 후속 표본과 비교하여 공통 DAG 원인 연결.','systems/riftChronology.ts','test-academy-rift-chronology.mjs'),
 item('rift-prelude-lesson','실제 수업·개별 지식 연결','완료된 학사 활동에서 보존 자료를 현재 열람. 당시 목격과 구분·공통 기억/정보 전달·개인 공개 투영 유지.','systems/riftCrisis.ts','test-academy-rift-chronology-lesson.mjs'),
 item('rift-future','외교·전쟁·진로·다년 검증','교신·대표권/조직 정치·상세 전선/주변 실제 구조체 전투·졸업 후 콘텐츠 및100NPC360~1440일은 미구현/미검증.','data/riftCrisis/index.ts','','needs_verification')
 ],['실제 통역·교신·대표권·복수 기관 연구','현장 구조체 구체화와 실제 전투 결과 어댑터'],['장기 외교·이주·재건·졸업 후 진로']),
 system('life-progress','플레이어 성장·명성·평판·장기 목표','게임플레이','공통 성장/목표·실제 사건과 개별 지식 위의 이력·업적·평가. 연구/제작/졸업 및 상세 평판 피드백은 부분 구현.',['character','motivation','memory','ai','academics','official-events','academy-groups'],[
 item('progress-growth','실제 성장 이력·보고','공통 XP 권위 유지, 월별 성장/원인과 날짜별 완료 활동 집계. 새로운 레벨·보상 없음.','systems/lifeProgress.ts','test-academy-life-progress.mjs'),
 item('progress-achievements','30개 업적 정의·객관적 획득','실제 공통 활동/전투/학사/조직/공식 행사 확인, 출처·연도·인물별 멱등 기록. 미구현 연구/제작/졸업은 보류.','data/lifeProgress/index.ts','test-academy-life-progress.mjs','partial'),
 item('progress-goals','25개 선택 목표·공통 Goal AI','플레이어 수동 선택·다중 목표·포기·공통 기한 실패/실제 증거·기존 Utility 후보. 미지원 조건 보류.','systems/lifeProgress.ts','test-academy-life-progress.mjs','partial'),
 item('progress-assessment','지식 기반 분야별 명성·개인 평가','직접/목격/전달받은 구조화 주장만 평가. 지역별 인지도는 개발자용 실제 지식 투영. 일반 UI는 공개 성과/공식 활동 기여만 공개. 상세 피드백·조직별 고급 규정 미구현.','systems/lifeProgress.ts','test-academy-life-progress.mjs','partial'),
 item('progress-ai','평가 기반 제안·기회','인지한 상대의 평가만 기존 사회 후보에 제한 보정, 이동/일정/동의·지역 LOD 유지. 전용 장편 협력 제안 없음.','systems/npcAi.ts','test-academy-life-progress.mjs','partial'),
 item('progress-ui','공통 상세·보고·격리 디버그','성장/목표/업적/명성 탭, 일·주·월 집계, NPC 비밀 필터·개발자 평가. 구형 저장은 명시 연결.','components/LifeProgressPanel.tsx','test-academy-life-progress-browser.mjs'),
 item('progress-save','저장·결정성','선택적 통합 저장, 성장/업적/중복 키/공통 목표·기억 기반 평가 복원, 분할 시간 일치.','types/lifeProgress.ts','test-academy-life-progress.mjs'),
 item('progress-long','30~720일 밸런스','신규 장기 검증 미실행. 고랭크 저난도 반복의 기존 감쇠와 장기 명성 분포는 후속 실측 대상.','systems/lifeProgress.ts','','needs_verification')
 ],['실제 연구·제작·졸업 어댑터','관찰 가능한 평판 피드백·정정 표현'],['다학년도 성장·평가 밸런스 검증']),
 system('official-events','아카데미 공식 행사·대련 대회·문화제','게임플레이','6유형/연례 행사 · 기존 세계 시계·이동·일과·판정·전투로 운영. 연구/제작 성과 어댑터는 부분 구현.',['academics','academy-groups','combat','items','world-events','memory','conversations'],[
 item('official-calendar','연도별 상태·신청·취소·연기','6유형/7회 일정, 학기말 성적 확정 뒤 표창. 등록/실제 명단/운영자 조건·취소 시 예약 해제.','systems/academyEvents.ts','test-academy-official-events.mjs'),
 item('official-tournament','공식 통합 부문 · 8/16인 대진','실제 등록 동의·이동·공통 비살상 전투, 5분 체크인 유예/부전승/기권·진출·공식 결과. 고정 NPC 우선권 없음.','systems/academyEvents.ts','test-academy-official-events.mjs'),
 item('official-festival','9개 부스 정의와 실제 운영','실제 동아리/시설/준비·운영 시간·방문·보유 준비물 확인. 미준비 공연/제작품을 성공으로 만들지 않음.','data/academyEvents/index.ts','test-academy-official-events.mjs','partial'),
 item('official-evidence','16개 상태 신호와 세계 사건','실제 공지/마감/갈등/불참/판정/친구/제안의 조건부 신호. FEST-04 자작 발명품 증거는 제작 원장 부재로 보류.','data/academyEvents/events.ts','test-academy-official-events.mjs','partial'),
 item('official-research','학술 발표·학기 표창','실제 자료 설명 수행과 전달 판정. 독창적 연구 결과·발표 전용 성과 심사 미구현은 수상 보류. 실제 성적 우수자는 학기 확정 기록을 참조.','systems/academyEvents.ts','test-academy-official-events.mjs','partial'),
 item('official-ui','학사 행사 탭·대진·부스·플레이어 출전','공통 이벤트 창 → 실제 경기장 이동 → 기존 전투 UI. 개발 시뮬레이터는 복제 세계로 동작.','components/OfficialEventsPanel.tsx','test-academy-official-events-browser.mjs'),
 item('official-save','중간 저장·분할 시간·인과관계','진행 경기/대진/작업 분 누적/새 인물 공지 대기/처리 키 보존. 구형 세계에는 과거 행사를 덧씌우지 않음.','types/academyEvent.ts','test-academy-official-events.mjs'),
 item('official-long','30~720일 장기 행사 분포','이번에는 짧은 실제 대회/문화제와 100NPC 등록까지만 검증. 다학년도 전체 AI 장기 결과는 미검증.','systems/academyEvents.ts','test-academy-official-events.mjs','needs_verification'),
 ],['제작/연구/음악 전문 결과 어댑터·행사 준비 선택지 확대'],['다학년도 행사 분포·단체전·경제 통합']),
 system('npc-dialogue','고정 인물 대화·리액션 연출','NPC 시뮬레이션','15명·390개 고유 대사와12개 실제 시간축 공동 장면. 기존 관계·지식·결과를 읽고 표현만 선택.',['conversations','fixed-students','memory','items','combat','world-events'],[
 item('speech-profiles','말투15개·상황10군·고유390문장','26개/인물. 조건과 사실 근거·호칭·감정·행동 묘사. 문자열로 효과를 판단하지 않음.','data/dialogue/index.ts','test-academy-dialogue.mjs'),
 item('speech-selection','관계·기억·반복 억제·결정성','단방향 관계·본인 결과/타인 결과·직접/전언 구분, 최근24개/인물·같은 선택 재렌더 안정.','systems/dialogueDirector.ts','test-academy-dialogue.mjs'),
 item('speech-scenes','실제 수락·4회 발화·12조합','LOD0만 실제 발화. 공동 활동·이동·중단·저장된 다음 발화 시각, 원거리 전문 비공개.','systems/dialogueDirector.ts','test-academy-dialogue.mjs'),
 item('speech-reactions','전투·평가·선물·기억 반응','실제 참여/목격·명시 정보에 한정. 선물 거절은 물건/관계 효과 없이 사실만 기록.','systems/conversations.ts','test-academy-dialogue.mjs'),
 item('speech-save','선택 결과/최근 이력·선택 저장','구형 기록을 가짜 발화로 재구성하지 않고, 선택 ID·출처·감정·진행 장면을 복원.','types/dialogue.ts','test-academy-dialogue.mjs'),
 item('speech-story','기존 개인 사건 연계','기존42개 실행 경로의 실제 세계 사건/참가자에만 반응.20개 보류 사건·전용 다지선다 서사 연출은 여전히 미완료.','systems/worldEvents.ts','test-academy-dialogue.mjs','partial'),
 item('speech-ui','화자·감정·문단·읽기·후보 디버그','같은 일반/개발 화면에서 표현. 읽기/모두 보기/후보 조회는 시간을 진행하지 않음.','components/DialogueView.tsx','test-academy-dialogue-browser.mjs'),
 item('speech-visual-scene','공통 이벤트 창·인물 원화','15고정+남녀모브,4표정과 초상85WebP. 로그 통합·결과 창 설정·전투 확인/취소·기존 응답 엔진 재사용.','components/EventScene.tsx','test-academy-presentation-browser.mjs'),
 item('speech-abilities','고정 학생 개별 능력·특성·기프트','세레나 기존 구성 유지,14명 전용 특성/기프트와 공통 판정. 신규 게임 초기값이며 이전 저장의 성장·능력을 덮어쓰지 않음.','data/characters/studentAbilities.ts','test-academy-presentation.mjs'),
 item('speech-long','30/360일 장기 분포','이번에는 장기 실행하지 않음. 기존 장기 통과를 이번 표현 기능의 증거로 쓰지 않음.','systems/dialogueDirector.ts','test-academy-dialogue.mjs','needs_verification'),
 ],['서사별 고유 선택지·표현 확대'],['장기 말투 변화·콘텐츠 분포 검증']),
 system('fixed-students','고정 학생 15인·개인 서사','NPC 시뮬레이션','15명 공통 생활·회차별 사건. 62개 콘텐츠 중42개 실행 경로 연결/20개 의존 어댑터 보류로 v1은 부분 구현.',['character','ai','world-events','memory','relationships','academics','daily-life','items'],[
 item('fixed-roster','15명·세레나 보존·안정 ID','새 플레이에서15명 생성, 세레나 수치/기프트/배경 유지, 구형 저장 재삽입 금지.','systems/fixedStudents.ts','test-academy-fixed-students.mjs'),
 item('fixed-profiles','개성·취향·말투·공통 AI 선호','14명 기획 원문/공식 종족 참조, 기존 세레나 보존. 효용 선호 보정은7점이며 의무/긴급 정책을 우회하지 않음.','data/characters/students.ts','test-academy-fixed-students.mjs'),
 item('fixed-living','실제 학사·기숙사·아이템·목표','기존 엔진 등록/실제 수업 개설·거주 배정·장기 목표. 목표 완료 판정 미지원은 보류.','systems/worldSimulation.ts','test-academy-fixed-students.mjs'),
 item('fixed-arcs','50개 개인·12개 다인물 콘텐츠','42개 경로 연결. 제작·연구·공연·편지 등의20개는 external 게이트로 차단. 전체62개 완성 아님.','data/characters/stories.ts','test-academy-fixed-students.mjs','partial'),
 item('fixed-choices','실제 상호작용·분기·인과','공통 수락/거절/완료/실패·실제 승패 신호. 서사별 전용 다지선다 선택지는 미구현.','systems/worldEvents.ts','test-academy-fixed-students.mjs','partial'),
 item('fixed-private','비공개 사건·기억·저장 재개','먼 인물 자동 목격 금지·공개 투영 제외·참가자/인과/예약 복원·분할 비교.','systems/worldEvents.ts','test-academy-fixed-students.mjs'),
 item('fixed-observer','인물 상세·개발 관찰','고정 목록/조건/미충족 이유/실제 이력과 참가자/현재 조건으로 요청. 일반 화면 서사 스포일러 숨김.','components/CharacterStories.tsx','test-academy-fixed-students-browser.mjs'),
 item('fixed-long','30일·360일·사건 분포','새로 검증하지 않음.25NPC10분,50/100NPC1분 검사는 장기 안정성·주간 성능 증거가 아님.','data/characters/stories.ts','test-academy-fixed-students.mjs','needs_verification'),
 ],['실제 제작·공연·연구·편지 수신 어댑터','서사별 선택지와 후속 성격 표현'],['학년별 장기 개인 서사 검증']),
 system('items','아이템·인벤토리·장비·선물·유물','게임플레이','등급·명성과 물리 소유권을 분리한 공통 아이템 원장.',['character','combat','interactions','memory','locations','time','ai','world-events'],[
 item('items-catalog','9단계·100종·생성 정책','30/22/18/12/9/5/3/1/0 정의. 기본 키트는 일반만 생성하며 세계 유일 생성 이력을 유지.','data/items/index.ts','test-academy-items.mjs'),
 item('items-ownership','인벤토리·소유권·보관','단일 물리 위치, 스택 출처/분할/병합, 현장 접근·개인 권한, 원소유자와 대여 점유 구분.','systems/items.ts','test-academy-items.mjs'),
 item('items-effects','장비·사용·실제 공통 효과','착용 8슬롯/양손 충돌, 기존 판정 상한/실제 전투·소비품·교재 활동 보조, 실패 원자 복구.','systems/items.ts','test-academy-items.mjs'),
 item('items-gifts','선물·대여·직접 동의','실제 만남/재고/개인 문화 취향·관계·필요/반복 보상 예산, 플레이어 수신 동의와 실제 반환.','systems/npcActions.ts','test-academy-items.mjs'),
 item('items-relics','개별 감정·제한 각성·명성','개인 지식과 세계 사실 분리, 별길 관측기1종의 지정 의식, ID/등급 유지, 공개 전투 이력.','systems/items.ts','test-academy-items.mjs'),
 item('items-world','기억·실제 아이템 세계 사건','정확한 ItemChanged 결과에만 반응하는 선물 회고/유물 연구/봉인 해제3사건, 비공개 정보 보호.','data/items/events.ts','test-academy-items.mjs'),
 item('items-save','선택적 저장·LOD·결정성','구형 미연결 저장 보존, 단일 원장/준비 큐 복원, 분할 시간·저장 이어 진행·LOD 전환 보존.','systems/aiSandbox.ts','test-academy-items.mjs'),
 item('items-ui','실제 인벤토리·상세·NPC 행동·개발 샌드박스','착용/사용/보관/선물 진입·3슬롯·도감·격리 관찰/명시 지급·모바일.','components/InventoryPanel.tsx','test-academy-items-browser.mjs'),
 item('items-ai','이벤트 기반 NPC 아이템 생활','활동 준비/획득 시 소지품 착용·유한 소비·실제 친구 선물·재회 반환. 원거리 물건 탐색/자동 운반·복잡한 장비 교체 평가는 후속.','systems/items.ts','test-academy-items.mjs','partial'),
 item('items-long','장기 누적·상점 경제·고급 효과','100NPC10분 단기 검사만 수행.30/360일·10년 미검증. 가격은 기준값이며 경제/절도/경매/장비 기술 해금은 미구현.','systems/items.ts','test-academy-items.mjs','needs_verification')],['상점·거래 제안/화폐 계약(제안)','개인별 장비 비교·실제 운반/대여 약속 고도화(제안)'],['역사 원문 보관·유물 정보 조사/정치 사건(제안)']),
 system('game-interface','게임 인터페이스·즉시 행동','게임플레이','단일 세계 시계의 실제 실행과 전투·지도·학사 조작 재구성.',['play-ui','player-life','combat','academics','locations'],[
 item('ui-automatic-default','자동 생활 기본·직접 행동 일시 개입','수동/일시정지/중복 생활 페이지 제거. 직접 행동/이동/공동 활동 후 자동 복귀·구형 저장·현장 HP 소수 회복, 좁은 화면의 동일 행동 패널.','systems/playerLife.ts','test-academy-player-auto.mjs'),
 item('ui-action-execution','행동·이동 즉시 완료 진행','직접 행동/기숙사/대화 실행 뒤 시간 버튼을 반복하지 않는다. 중요한 중단은 유지.','systems/playSession.ts','test-academy-ux.mjs'),
 item('ui-npc-action-hub','인물 상세의 통합 행동 메뉴','주변 인물 상세에서 카탈로그 상호작용·상세 대화·대련/실전 개시. 실제 위치/동의/예약을 재검사하고 자동 시간 진행.','systems/npcActions.ts','test-academy-npc-actions.mjs'),
 item('ui-player-resource-hud','나의 상태 자원·전투 기록','일반 전투·판정 메뉴 제거, 좌측 HP/SP/MP와 인물 상세 전투 방식 선택. 내 참여 전투는 사건 기록에서 상세 조회. 개발 판정 실험은 도감에 유지.','components/PlayerResources.tsx','test-academy-npc-actions-browser.mjs'),
 item('ui-turn-battle','전용 턴제 전투 팝업','고정 배경/최근 로그/양측 자원·가능 행동 카테고리/불가 사유, 선택 즉시 턴과 사전/도중 자동 종료.','components/CombatDialog.tsx','test-academy-ux-browser.mjs'),
 item('ui-node-map','Pan/Zoom 실제 연결 지도','노드·실제 엣지·선택 경로/도착 검사, 드래그 선택 충돌 방지·키보드/모바일.','components/LocationMap.tsx','test-academy-ux-browser.mjs'),
 item('ui-school-redesign','주간 학사 표·공통 과목 팝업','실제 확정 강의를 월~일 컬러 표로 표시, 개요/이수 지표와 선수/교수/평가 모달.','components/AcademicTimetable.tsx','test-academy-ux-browser.mjs'),
 item('ui-impact-cards','인물 영향력 정렬·색상','기존 영향력으로 안정 정렬,100점 간격10색과 수치 배지·공통 캐릭터 분류 이동.','systems/playerViews.ts','test-academy-ux-browser.mjs'),
 item('ui-shared-style','게임 공통 디자인·조작 상태','기존 주요 플레이에 잉크/금색·패널/팝업·포커스·내부 스크롤/짧은 피드백 통일. 개발 도구 전면 재배치는 후속.','components/GameInterface.css','test-academy-ux-browser.mjs','partial'),
 item('ui-week-performance','7일1초 성능 목표','100NPC 현재LOD1시간5.04→3.59초, 최종 저장/행동 동일.7일은30초 한도에서 중단, 목표 미달.','systems/locationRouting.ts','diagnose-academy-ux-performance.mjs','partial')],['전역 트랜잭션COW/dirty 예약 성능 개선(제안)','개발 도구의 복잡한 편집 화면 정리(제안)'],['오래된10년 저장·다양한 주간의 성능 검증(제안)']),

 system('combat','공통 판정·전투 시뮬레이션','게임플레이','능력치·숙련 중심 판정과 실제 세계 분 단위 라운드 전투.',['character','proficiency','statuses','time','locations','interactions','ai','memory','world-events'],[
 item('combat-checks','19개 공통 판정·정확한 확률','주65/보조35%의 절반+랭크×5±15보정, 단일20개 난수. 능력100 초과 보존.','systems/checks.ts','test-academy-combat.mjs'),
 item('combat-rounds','20기술·라운드·다인 전투','최대3팀/6명, 거리·방어·회피·반격·도주·항복·AI와 직접 조작.','systems/combat.ts','test-academy-combat.mjs'),
 item('combat-resources','공통HP·SP·MP·회복','대련은 별도 내구도/실제 자원 소비, 실전HP·일시 부상. 외부 효과는 트랜잭션 자원 어댑터.','systems/combat.ts','test-academy-combat.mjs'),
 item('combat-integration','실제 수락 대련·효과·기억·사건','기존 동의/공동 활동·XP/관계 단일 적용. 전투 결과2사건과 실제 참여/목격 기억.','systems/interactions.ts','test-academy-combat.mjs'),
 item('combat-save','예약 행동·자원·부상 저장','중간 저장/분할·점프 동등성, 구형 미연결 저장, 상세 조회의 순수성.','systems/aiSandbox.ts','test-academy-combat.mjs'),
 item('combat-ui','플레이·도감·격리 관찰/실험','상대 숨은 수치 보호, 버튼형 선택, 개발자 판정/팀 구성·중단, 모바일.','components/CombatPanel.tsx','test-academy-combat-browser.mjs'),
 item('combat-adapters','특수효과·장비·균형 확장','점수형 실제 효과와 중첩 지원. %p/SPECIAL_RULE 전용 실행·실물 무기/방어구·정식 밸런스는 미완성.','systems/checks.ts','test-academy-combat.mjs','partial'),
 item('combat-long','장기 통합 성능','100명 전체AI1시간 단일 진단1.93초(전투0건), 36개 단독 대련. 전투 다수/7일/30일·10년 미검증.','systems/combat.ts','diagnose-academy-combat.mjs','needs_verification')],['실물 장비·다양한 무기/거리별 밸런스(제안)','기프트·%p 전용 실행 어댑터(제안)'],['집단 전술·장기 전투 기록 압축(제안)']),

 system('academy-groups','동아리·학생회·학내 집단','NPC 시뮬레이션','정적 소속과 분리된 실제 회원·임기·시설 예약·공동 활동·선거 운영.',['character','organizations','time','schedules','ai','interactions','memory','world-events'],[
 item('groups-catalog','12개 동아리·학생회·3개 모임','목적·숙련도·모집 정책·시설·주간 시간이 다른16개 운영 정의.','data/academyGroups/index.ts','test-academy-groups.mjs'),
 item('groups-members','자율 가입·심사·탈퇴','개인 관심/능력/목표/친구와 학사 충돌, 정원·추천 심사. 플레이어는 직접 신청.','systems/academyGroups.ts','test-academy-groups.mjs'),
 item('groups-activity','시설 예약·실제 활동','기존 일과·출입·이동·공동 활동 사용. 실제 활동 시간으로 집계하며 보상을 복제하지 않는다.','systems/academyGroups.ts','test-academy-groups.mjs'),
 item('groups-elections','선거·임기·교체','후보 등록/투표/결과 고정·비밀 투표·당사자 수락. 학적 변경에 반응하되 자동 졸업 엔진을 새로 만들지 않는다.','systems/academyGroups.ts','test-academy-groups.mjs'),
 item('groups-operation','주간 운영·안건·집단 성장','주간 평가/회의 의견/공동 목표·정식 등록 신청·실제 교수 심사. 복잡한 시설 배정 행정/축제 실행은 미구현.','systems/academyGroups.ts','test-academy-groups.mjs','partial'),
 item('groups-events','28개 실제 상태 전이 신호','가입/활동/선거/정식 등록 등 조건부 운영 기록을 기존 세계 이벤트·개인 기억에 연결. 모든 종류의 장기 자연 발생을 검증한 것은 아니다.','data/academyGroups/events.ts','test-academy-groups.mjs','partial'),
 item('groups-ui','플레이·설정집·격리 관찰','상단 학내 집단 메뉴/공통 상세/시뮬레이터 관찰과 개발 명령. 가입 조작·고정 뷰포트·모바일 스모크 통과.','components/AcademyGroupsPanel.tsx','test-academy-groups-browser.mjs'),
 item('groups-save','저장·구형 세계 호환','groups 선택 필드. 구형 세계는 명시적 연결, 중복 회원/없는 인물/시설/선거 참조 검증.','systems/aiSandbox.ts','test-academy-groups.mjs'),
 item('groups-long','장기 세대 교체·성능','100명 전체AI1시간 측정 약2.86초로 목표/경고 초과.30일·360일 미실행.','scripts/diagnose-academy-groups.mjs','diagnose-academy-groups.mjs','needs_verification')],['학교 승인 행정·행사 실행 확대','등록 정책·선거 공약의 세부 실행'],['졸업생 동문 조직','여러 아카데미의 교류']),
 system('daily-life','아카데미 일상생활·기숙사','NPC 시뮬레이션','방/침대·거주 권한·룸메이트와 실제 이동/생활 경험을 기존 AI·일과·효과·기억에 연결한다.',['character','time','locations','schedules','motivation','ai','relationships','interactions','world-events','culture-life'],[
 item('life-housing','104실·184침대·거주 계약','학생56실/112자리·교수24개인실·교직원24실/48자리, 결정적 배정·정원/중복·퇴실·통학 경로. 현재 위치와 별도.','systems/dailyLife.ts','test-academy-daily-life.mjs'),
 item('life-access','입주·방문 권한','입주/직원·해당 방 방문 허가와08~22시 조합. 성별/종족 판정 없음.','data/dailyLife/index.ts','test-academy-daily-life.mjs'),
 item('life-roommates','룸메이트·방 변경','거주 배정으로 유도. 사적 그래프 태그는 기존 감정과 공개 범위를 보존. 퇴실해도 지인 관계/감정 유지.','systems/dailyLife.ts','test-academy-daily-life.mjs'),
 item('life-activities','실제 생활과 신규4활동','기존 수면/식사/성장/주말/방학 재사용. 정리·세탁·위생·산책과 기존 취미/편지 활동 연결. 실제 도착 후 효과는 기존 엔진만 적용.','data/schedules/index.ts','test-academy-daily-life.mjs'),
 item('life-events','증거 기반 생활 사건28종','직접 활동/이동/공동 활동에서만 신호. 일반 활동은 개인 집계, 세계 이벤트는 종류별 대표 신호와 의미 있는 공동 경험. 고향 소식/원격 편지 배달/실물 선물은 생성하지 않는다.','data/dailyLife/events.ts','test-academy-daily-life.mjs'),
 item('life-preferences','습관·공동 경험 선호','기존 AI 습관/문화 프로필 재사용. 정리·조용함 최소 선호와3회 공동 활동 뒤 작은 행동 선호, 실제 원인 없는 갈등 요청 거부.','systems/dailyLife.ts','test-academy-daily-life.mjs'),
 item('life-summary','사생활·일별 실제 활동 집계','실제 활동 전환 시 구간 집계, 날짜 경계 분할,14일/600로그/4000처리키 보존, 현재 구간 지연 조회.','systems/dailyLife.ts','test-academy-daily-life.mjs'),
 item('life-ui','플레이·상세·도감·시뮬레이터','방/침대/룸메이트/귀가·생활 행동/기록 필터/개발 배정·퇴실·습관·활동 명령/모바일/원본 격리.','components/DailyLifePanel.tsx','test-academy-daily-life-browser.mjs'),
 item('life-save','선택적 저장·구형 저장 전환','통합 저장에 dailyLife 추가. 구형 저장은 자동 재배정하지 않고 명시적 연결 가능. 중복 침대/잘못된 거주 참조 거부.','systems/aiSandbox.ts','test-academy-daily-life.mjs'),
 item('life-long','장기 성능·안정성','10명 하루/시간 분할,100명 전체AI1시간만 검증.100명1시간 약1.47초로 목표/경고 미달.30일·360일 미실행.','scripts/diagnose-academy-daily-life.mjs','diagnose-academy-daily-life.mjs','needs_verification')],['생활비·청소 당번·동아리·방 꾸미기(제안)','방 변경 신청·규율·벌점(제안)'],['외부 생활권·경제·가족 주거지(제안)','장기 생활 습관 변화(제안)']),

 system('culture-life','종족·문화·생활양식','NPC 시뮬레이션','14문화권의 생활 콘텐츠와 개인의 선호·거부·혼합 경험을 실제 공동 활동/기억에 연결한다.',['world-lore','ai','interactions','conversations','memory'],[
 item('culture-details','14문화·28인물 참고상','역사·생활·가족·인사·선물·교육·내부 다양성·명명 스타일. 종족/계통 생리와 문화적 선택을 분리.','data/culture/index.ts','test-academy-culture.mjs'),
 item('culture-content','음식18·의복12·취미18·선물18','설정/행동 콘텐츠와 실제 인벤토리를 구분. 식이 제한은 미확정.','data/culture/index.ts','test-academy-culture.mjs'),
 item('culture-profile','개인 문화 프로필·혼합 생성·저장','기존 문화 ID 유지·독립 시드·선호/거부/복수 문화·구형 고정 인물 미설정.','systems/cultureLife.ts','test-academy-culture.mjs'),
 item('culture-execution','24관습·개인 활동·공동 교류','실제 장소/동의/일정/시간/완료 증거·개인 취향 우선 선물·설명·거절·중복 제한.','systems/conversations.ts','test-academy-culture.mjs'),
 item('culture-learning','기억·친숙도·취미 변화','실제 완료 이후만 지식·개인 선호를 갱신. 회상에 관계 효과 중복 없음.','systems/cultureLife.ts','test-academy-culture.mjs'),
 item('culture-events','24개 학내 문화 이벤트','날짜 미확정·실제 참여/공동 활동 결과로 완료·공통 효과/기억·기존 이벤트 예산 유지.','data/culture/events.ts','test-academy-culture.mjs'),
 item('culture-ui','도감·캐릭터·격리 관찰/통제','상세 생활·개인 프로필·후보/조건·교류/선물·사건·선호 변경을 공통 명령에 기록.','components/CulturePanels.tsx','test-academy-culture-browser.mjs'),
 item('culture-long','장기 문화 안정성·성능','100NPC1시간 단기 진단. 30/360일·10년 검증과 7일 성능 목표 달성은 미확인.','systems/npcAi.ts','','needs_verification')],['인벤토리·제작/선물 소유권','실제 우편·여행·귀향'],['문화 동화·국가 경제','상세 언어·혈통']),
 system('world-lore','세계관·대륙·국가·종족','세계·시간·공간','같은 세계의 지리·정치·종족·문화와 개인 출신을 분리한 정적 참조 데이터. 국가 운영 AI는 포함하지 않는다.',['time','locations','organizations','generation'],[
 item('lore-catalog','6종족·19계통·3지리권·10국가','12지역·33정착지/주요 지점·14문화권·수명 참고·임시 명칭과 미확정 설정 구분.','data/worldLore/index.ts','test-academy-world-lore.mjs'),
 item('lore-relations','초기 외교·역사·갈등 씨앗','19쌍 정적 관계와 배경 씨앗. 전쟁/이벤트를 자동 발생시키지 않는다.','data/worldLore/index.ts','test-academy-world-lore.mjs'),
 item('lore-seed','멱등 시드·장소/조직 참조','기존 ID·33개 경로·상태 보존. 아르벤 학술도시와 같은 세계 마르카디아 연결.','data/worldLore/seeds.ts','test-academy-world-lore.mjs'),
 item('lore-generation','종족·출신·문화·시민권 생성','독립 시드와 유효 조합·외국 출신 허용. 능력치/성향/기프트 보정 없음.','systems/worldIdentity.ts','test-academy-world-lore.mjs'),
 item('lore-save','캐릭터·플레이어·구형 저장 호환','선택적 프로필·버전과 통합 저장. 고정/구형 인물 미설정 유지.','systems/aiSandbox.ts','test-academy-world-lore.mjs'),
 item('lore-ui','8개 도감·출신 설정·시뮬레이터 탐색','검색·필터·상세·현재 인구/정밀 활성 구분·공통 캐릭터 표시.','components/WorldLoreCatalog.tsx','test-academy-world-lore-browser.mjs'),
 item('lore-dynamic','국가 운영·세계 경제·전쟁 시뮬레이션','외부 지역은 장소 정의이며 새로운 이동 시간/국가 AI를 임의 생성하지 않는다.','data/worldLore/index.ts','','not_implemented')],['지도 좌표·미확정 지명 확정 후 장거리 교통','언어·종교·문화별 이름 규칙'],['국가 운영·외교 변화와 영토','외부 인구·경제 시뮬레이션']),
 system('conversations','NPC 대화·사회생활·플레이어 대화','NPC 시뮬레이션','공통 상호작용 위의 구조화된 대화·표현·당사자 선택·실제 약속 실행. 그룹 대화·고급 기만·장기 스트레스는 별도 범위다.',['ai','relationships','memory','player-life','academics','schedules','action-outcomes'],[
 item('conversation-shared','공통 대화 생명주기','실제 상호작용 예약·위치·활동·동의·시간과 공통 효과를 사용한다. 독립 시계나 별도 관계 DB 없음.','systems/conversations.ts','test-academy-conversations.mjs'),
 item('conversation-intents','28개 구조화된 의도·상황 선택','일상·학사·개인·관계·정보·협력·경쟁. 기억/수업/정보/약속의 실제 근거를 검증한다.','data/conversations/index.ts','test-academy-conversations.mjs'),
 item('conversation-reaction','성향·관계·기억·상태 반응','실제 성향·감정·관련 기억·피로 및 시드로 반응하며 의도별 결과를 공통 효과로 적용한다.','systems/conversations.ts','test-academy-conversations.mjs'),
 item('conversation-auto','NPC·플레이어 자동 사교','기존 Utility AI 후보와 실제 가까운 인물을 사용한다. 낯선 상대는 제한된 첫 만남 후보로 평가한다.','systems/interactions.ts','test-academy-academics.mjs'),
 item('conversation-knowledge','기억·정보 전달·출처·비밀','일상 인사는 영구 기억을 만들지 않는다. 의미 있는 대화와 실제 완료 정보 전달, 기존 출처·신뢰·왜곡 정책을 재사용한다.','systems/npcMemory.ts','test-academy-conversations.mjs'),
 item('conversation-player','직접 선택·중요 제안 중단·재개','직접 대화와 고백/약속/중요 비밀 제안은 당사자 선택 전 대기한다. 선택 전 결과 미적용·전체 JSON 복원.','systems/playerLife.ts','test-academy-conversations.mjs'),
 item('conversation-meetings','실제 약속·이동·공동 활동·불이행','공동 공부/훈련/대련/상담/식사/만남을 공통 임시 일정과 상호작용으로 실행한다. 도착/수락/활동 증거 없이 완료하지 않는다.','systems/conversations.ts','test-academy-conversations.mjs'),
 item('conversation-academic','공동 강의·교수 학사 주제','실제 공동 수강/담당 교수 관계를 확인한다. 다른 학생의 비공개 점수를 대사에 노출하지 않는다. 성적별 정교한 전용 상담은 후속.','systems/conversations.ts','test-academy-academics.mjs','partial'),
 item('conversation-presentation','시뮬레이션과 대사 표현 분리','결정적인 조건부 표현을 지연 렌더링한다. 표현용 해시는 세계 RNG나 상태를 변경하지 않는다.','systems/conversationPresentation.ts','test-academy-conversations.mjs'),
 item('conversation-ui','플레이·도감·사회 기록·격리 관찰','선택지/시간·인물/주제/장소/기간/중요도 필터·개인 기록·기존 시뮬레이터 개입과 명령 기록.','components/ConversationPanel.tsx','test-academy-conversations-browser.mjs'),
 item('conversation-save','저장·복원·보존 정책','interaction-v1의 선택적 conversation-v1. 기존 저장은 기존 모드 유지, 상세600·집계90일·약속100 제한.','types/conversation.ts','test-academy-conversations.mjs'),
 item('conversation-stress','장기 사회생활 안정성·성능','이번 검증은 실제 약속/분할 시간·100NPC1시간 진단 범위.50/100NPC30일·100NPC360일·10년은 미실행.','systems/conversations.ts','test-academy-conversations.mjs','needs_verification')],['3인 이상 대화·고급 말투·감정','개인 사교 습관·장기 갈등·화해','의도적 기만과 정보 검증'],['선택적 생성형 표현·집단 정치','장기간의 사회 서사·고급 소문']),
 system('academics','학사·수업·시험·수강신청','게임플레이','실제 교수·학생·경로·활동을 사용한 학기 운영. 과제 제출/전투 시험/전용 학사 사건·학년 장기 검증은 구분한다.',['time','schedules','action-outcomes','player-life','relationships','locations','world-events'],[
 item('academic-roles','공통 학생·교수·교직원 역할','기존 직급/소속에서 복수 학사 역할을 판정한다. 교원은 실제 캐릭터이며 임용·퇴직 콘텐츠는 후속.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-courses','과목86종·선수 조건','84개 전문 과정과2개 일반 능력치 기초. 기존 숙련도 참조·선수 이수·추천 학년을 검증한다.','data/academic/index.ts','test-academy-academics.mjs','implemented'),
 item('academic-calendar','학적·신청·학기·평가·성적 전환','공통 제국력 경계에서2/7월 신청·3/8월 개강·실제 평가일/기말 성적을 진행한다.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-offerings','실제 강의·교수·장소 자원','교수 전문성과 업무 상한·장소 용도·수용 인원·요일/시간 중복을 검증하여 개설한다.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-registration','학생·플레이어 신청','실제 학년/숙련/능력/목표/성향/관계/개인차·플레이어 방침으로 선호한다. 수동 신청·취소·순위 변경.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-selection','7종 경쟁 선발','성적/숙련/적성/선착순/추첨/교수/혼합. 마감에서 시간·이동·학점·선수 조건을 재검증한다.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-waitlist','대기·잔여석·재배정','신청 중 잠정 배정과 취소 승급. 최소 학점 부족은 잔여석으로 보완하고 자원 미달은 명시한다.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-attendance','실제 수업·출석·지각·결석','기존 일과·경로로 이동하고 실제 교수/학생 수행 구간의 겹침만 누적한다.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-substitute','교수 부재·휴강·현장 대체','15분 유예 후 전문성과 일정이 맞는 현장 교수를 찾고 없으면 휴강한다. 타 장소 교수를 순간 배치하지 않는다.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-growth','공통 성장·공동 수업 접점','공통 효과 엔진으로 실제 학습시간/교수 품질/과목 성장 적용. 같은 수업에서 실제30분 이상 겹친 제한된 동료 쌍의 친밀만1 반영.','systems/actionEffects.ts','test-academy-academics.mjs','implemented'),
 item('academic-evaluation','시험·수업 내 실기/과제 평가','실제 상태/출석/학습/피로·시드로 평가. 외부 과제 제출/채점과 정식 실전 전투 시험은 미연결.','systems/academics.ts','test-academy-academics.mjs','partial'),
 item('academic-grades','성적·학점·석차·진급 조건','A+~F·학점 가중 GPA·난도 보정 석차·학사 경고/우수·기본 진급 조건을 확정한다. 학년 자동 변경 없음.','systems/academics.ts','test-academy-academics.mjs','implemented'),
 item('academic-events','학사 도메인·기억·인과 후속','실제 학적/신청/휴강/평가/경고를 별도 AcademicChanged로 기록. 경고→실제 보완학습의 세계 이벤트2종과 DAG. 칭찬/경쟁 전용 사건은 미구현.','data/academic/events.ts','test-academy-academics.mjs','partial'),
 item('academic-player-decisions','직접 신청·평가 선택 대기','등록/중요 평가를 같은 세계 시각에서 멈추고 대기·확인·행동 중단과 저장을 연결한다.','systems/playerLife.ts','test-academy-academics.mjs','implemented'),
 item('academic-ui','플레이·도감·격리 시뮬레이터','학사 메뉴/과목 팝업/실제 강의·신청/시간표/성적·석차, 기존 시뮬레이터 관리자·원본 격리.','components/AcademicPanel.tsx','test-academy-academics-browser.mjs','implemented'),
 item('academic-save','통합 저장·장기 기록 한도','이전 학사 미포함 저장은 유지. 학사 포함 저장의 실행/신청/점수·성적·예약·이수 목록 복원과 중복 방지.','systems/aiSandbox.ts','test-academy-academics.mjs','implemented'),
 item('academic-long','학년·100명 장기 운영 검증','이번 실행은3명7일 분할 비교·10명 실제 수업/저장·개별 시험·학기 경계. 학년 전체·다년/대표 성능은 미검증.','systems/academics.ts','test-academy-academics.mjs','needs_verification')],['교수 연구·개인 지도·과제 제출','학과 교육 과정·장학금'],['교원 임용·전과·졸업 후 진로','학교 운영 예산']),
 system('player-life','플레이어 캐릭터·행동','게임플레이','공통 캐릭터·생활 실행기를 재사용하는 반자동 생활 v1. 전용 사건 분기와 다년 플레이 검증은 미완료.',['play-ui','ai','effects','interactions'],[
 item('player-creation','플레이어 생성·세계 등록','공통 시드 생성기의1학년 인물·이름/외형/능력 선호. 실제 위치·거주지·내면·일과 등록.','systems/playerLife.ts','test-academy-player.mjs','implemented'),
 item('player-policy','생활 방침','합계100·학업/훈련/사교/휴식. 공통 AI 후보의 자유시간 점수에 보정하며 의무·긴급·경로 규칙을 보존.','systems/npcAi.ts','test-academy-player.mjs','implemented'),
 item('player-automatic','자동 생활·공통 실행','선택→실제 이동→활동→기존 욕구/완료 성장 효과. 별도 보상 엔진 없음.','systems/playerLife.ts','test-academy-player.mjs','implemented'),
 item('player-manual','수동 활동·이동·공동 활동','공부/훈련/휴식/취침/식사/대기 및 현장 대화·공동 활동 요청. 실제 출입·시간·상대 수락 검사.','components/PlayerControls.tsx','test-academy-player.mjs','implemented'),
 item('player-control','제어 전환·행동 중단/재개','현재 개인 활동을 유지하며 자동/수동 전환. 중단 보상 없음·남은 시간만 재개. 공동 활동 중단은 공통 엔진으로 종료.','systems/playerLife.ts','test-academy-player.mjs','implemented'),
 item('player-time','자동 진행·중요 시각 중단','하루/주/유효 날짜/행동 종료·남은 요청 재개. 실제 기억·직접 요청을 경계90에서 확인해 정확한 공통 시각에서 중단.','systems/gameTime.ts','test-academy-player.mjs','implemented'),
 item('player-consent','직접 요청·플레이어 동의','실제 제안은 명시적 수락/거절까지 대기. 응답 때 공통 위치·상태를 재검증하고 양쪽 실행.','systems/interactions.ts','test-academy-player.mjs','implemented'),
 item('player-choice-limits','이벤트별 선택 분기','기억 확인/행동 중단과 직접 공동 활동 동의는 실행. 개별 세계 이벤트의 임의 개입·전용 결과 분기는 아직 미연결.','systems/playerLife.ts','test-academy-player.mjs','partial'),
 item('player-summary','실제 활동·변화 요약','요청 구간 실제 수행 분·욕구/능력/숙련도·관계 변경 유무·보유 기억 증감을14건 보존. 만난 인물/일별 상세 보고는 후속.','systems/playerLife.ts','test-academy-player.mjs','partial'),
 item('player-life-save','생활 저장·복원','기존 관찰3슬롯 호환, 플레이어 정책·공통 AI·일과 제어·개입 대기·개인 활동·요약을 함께 저장.','systems/playSession.ts','test-academy-player.mjs','implemented'),
 item('player-life-ui','플레이어 화면','생성→실제 학습 이동→방침→자동1시간→요약→저장/새로고침/복원·모바일.','components/PlayerControls.tsx','test-academy-player-browser.mjs','implemented'),
 item('player-life-simulator','기존 시뮬레이터 연결','동일 복제 세계에 생활 어댑터를 부착하고 플레이어 생성/제어/응답 테스트. 기존 세션 복제·수동 전환·플레이어 포함 새 세계·종료 후 원본 유지까지 브라우저 확인.','components/SimulationPlayerControls.tsx','test-academy-player-browser.mjs','implemented'),
 item('player-long','100명·360일 안정성','이번 검증은3명 하루와60분 분할 진행. 기존 장기 결과를 새 플레이어 검증으로 재사용하지 않음.','systems/playerLife.ts','test-academy-player.mjs','needs_verification')],['생활 세부 시간표·교류 우선순위','이벤트별 선택 결과 계약'],['다년 성장·경력·서사 연동']),
 system('play-ui','실제 관찰 플레이 UI','게임플레이','v0.5: 기존 기준 인물과 실제 세계 엔진으로 시작·진행·이동·관찰·저장을 연결한다. 완성된 플레이어 생활 시스템과 구분한다.',['world-simulation','archive','locations','memory'],[
 item('play-audio','아카데미 합성 효과음','Web Audio9종·조작/장면/자질/성장/주사위 실제 UI 연결. 첫 입력 활성·볼륨/음소거/중요 순간 설정·변주/중복 제한·세계 RNG 독립. 실제 브라우저 파형 확인, 장비별 청감 튜닝은 후속.','systems/gameAudio.ts','test-academy-audio.mjs','partial'),
 item('play-life-pacing','반복 생활 계획·장기 진행','기존 일정의16반복칸/생활방향·절대 목표 저장/중단/재개·12기간 보고·스킬 습득/진화 묶음 중단. 단기 실제 시계/저장 및 기존 플레이어·스킬 검사 통과. 100명 월/학기 실측과 장기 성능 개선은 미완료.','systems/lifePacing.ts','test-academy-pacing.mjs','partial'),
 item('play-dice-presentation','실제 판정의3D 주사위 연출','전투 선택→기존 명령1회→실제 CheckResult의D20. 수동/자동/스킵/설정·비공개 방어 보정 숨김. D100 투영 기반만, 시험/일반 이벤트 연동 후속.','components/DicePresentation.tsx','test-academy-dice.mjs','partial'),
 item('play-visual-mode','별도 비주얼 노벨·육성 플레이 v1','독립 무대/HUD·활동/만남/이동/실제 결과·VN선택/전투·공유 세션/저장·텍스트 전환. SSR/실제 명령/저장 검사 통과, 브라우저 시각 검증 미완료. 학사/장비/전체 스킬의 신규 비주얼 상세는 후속.','components/VisualGameplay.tsx','test-academy-visual-mode.mjs','partial'),
 item('play-experience','게임 안 상세·장면·조작 개선','경로 이동 없는 중첩 설명 팝업·공통 NPC 상태창·기록 한 줄/분류·합계100 방침 슬라이더·행동3열·생성 화면·공간 유형별 공유 배경·실제 요청 응답 팝업. 비밀 공개 규칙 유지.','components/Gameplay.tsx','test-academy-play-experience-browser.mjs'),
 item('play-viewport','고정 화면·패널 내부 스크롤','잉크 HUD/측면 메뉴·기록지 본문·독립 기록/행동/내용 스크롤·목적별 본문 확장·반응형 행동 서랍·Alt+1~9 이동.','components/AcademyGameDesign.css','test-academy-play-layout-browser.mjs'),
 item('play-authority','동일 세계·설정집 연속성','플레이 시계/위치/관계/일과/욕구/AI를 기존 Context에 주입하며 엔진을 재연결하지 않는다.','components/LiveWorldProviders.tsx','test-academy-play-browser.mjs'),
 item('play-clock-movement','시간 진행·중단·실제 이동','공통 시간/경로/출입 API. 중복 진행·진행 중 저장을 거부하고 브라우저에 제어권을 반환한다.','systems/playSession.ts','test-academy-play.mjs'),
 item('play-privacy','현재 인물·공개 투영·나의 기록','같은 장소의 정지 인물만 표시하고 주변 목록은 공개 투영을 사용한다. 선택한 인물의 능력/보유 항목은 공통 상세로 열며 비밀 소속/개인 기억/비공개 목표의 필터는 유지한다.','systems/playerViews.ts','test-academy-play.mjs'),
 item('play-save','로컬3슬롯·전체 세계 복원','전용 버전/키·손상/용량 오류·다른 슬롯 보존. 기존 통합 저장과 현재 인지 기록200건을 저장한다.','systems/playSession.ts','test-academy-play.mjs'),
 item('play-ui-flow','게임 시작·관찰·공개 설정집·모바일','새 세션→1시간→교실 이동→NPC 팝업→6시간→기록→저장/새로고침/이어하기. 공개 자료와 개발 도구 경계를 표시한다.','components/Gameplay.tsx','test-academy-play-browser.mjs'),
 item('play-journal','인지 기록 저장·재진입','실제로 얻은 기억과 자신의 이동만 보존한다. 로드 후 현재 위치로 과거 목격을 추정하지 않는다.','systems/playSession.ts','test-academy-play.mjs'),
 item('play-next','플레이어 생활·선택·전투·아이템','플레이어 생성/방침/실제 행동/직접 동의는 player-life에서 구현. 학사 신청·전투는 각각 연결 모듈을 사용한다. 인벤토리/상세 일일 보고는 후속이다.','components/Gameplay.tsx','','partial')],['정식 플레이어 생성·생활 의도 연결','선택 대기·직접 상호작용 계약'],['학사·전투·아이템 플레이 확장','장기 캠페인 사용성 검증'],'v0.5'),
 system('validation','시뮬레이션 자동 검증','기반 시스템','변경 영향·검사 레지스트리·공통 시나리오·읽기 전용 불변식·구조화된 재현 보고. 기존 테스트와 CI를 보존한다.',['world-simulation','archive'],[
 item('validation-impact','Git·역의존·명시 연동 선택','작업 트리/스테이징/기준 커밋·중앙 계약 승격·알 수 없는 변경의 안전 기본 검사.','scripts/academy-validation-registry.mjs','test-academy-validation.mjs'),
 item('validation-profiles','Quick·Standard·Extended·Full','기존 headless·관련 UI·타입/빌드 검사 연결. 장기·브라우저 조건 미충족은 미실행으로 보고한다.','scripts/academy-validation.mjs','test-academy-validation.mjs'),
 item('validation-invariants','공통 불변식·충돌 위치','실제 저장 계약·활동/공동 활동/위치/시간/중복 ID/DAG. 자동 수정하지 않으며 최초 차이 필드를 보고한다.','systems/worldInvariants.ts','test-academy-validation.mjs'),
 item('validation-scenarios','시드 재현·분할 진행·저장 연속성','실제 엔진 기반 이동·일과·욕구·AI·대화·기억·이벤트 연쇄. 단기 프로파일과 긴 실행을 구분한다.','systems/validationScenarios.ts','test-academy-validation.mjs'),
 item('validation-receipts','JSON·간결 출력·정확한 결과 재사용','내용/환경/설정 지문이 같은 성공 기록만 명시적으로 재사용. 실제 신규 실행과 구분한다.','scripts/academy-validation.mjs','test-academy-validation.mjs'),
 item('validation-ui','시뮬레이터 결과 조회·격리 재현','로컬 보고서 수동 가져오기·오류 상세·10명60분 이하 별도 세계 재현. 현재 세계를 덮어쓰지 않는다.','components/ValidationPanel.tsx','test-academy-validation-browser.mjs'),
 item('validation-missing','선행 미구현·장기 검증 범위','문화 활동은 not_available. 실제 약속은 공통 일정·대화/이동 시나리오로 연결했다. 수강신청과 실제 시험은 학사 단기 시나리오로 연결했다. 플레이어 자동 생활은 실제 단기 시나리오로 검증한다. 100명360일 실행은 미검증.','systems/validationScenarios.ts','','partial')],['실측 비용을 반영한 검사 분할','보고서 자동 CI 수집'],['장기 실행 체크포인트·회귀 추세 비교']),
 system('world-simulation','세계 시뮬레이션 통합 관리','기반 시스템','기존 엔진을 단일 시계에 조합하고 명령·저장·검사를 관리한다. 별도 세계 상태나 두 번째 스케줄러를 만들지 않는다.',['time','simulation-lod','world-events','action-outcomes'],[
 item('world-runner','단일 권위 상태·중앙 실행','기존 예약 경계를 순서대로 처리하고 같은 시각 재예약을 제한한다.','systems/worldSimulation.ts','test-academy-world-simulation.mjs'),
 item('world-stage-order','단계 순서·고정점·오류 차단','명시적 단계 ID·우선순위와 같은 시각 최대256회 제한. 오류 상태의 계속 진행과 안전 저장을 거부한다.','systems/gameTime.ts','test-academy-world-simulation.mjs'),
 item('world-commands','공통 API 명령·감사 기록','정상 이동·명시적 배치·활동·욕구·목표·관계·상태·사건·LOD. 승인과 거부를 기록하며 세계 사건으로 위장하지 않는다.','types/worldSimulation.ts','test-academy-world-simulation.mjs'),
 item('world-save','전체 엔진 저장·구형 복원·결정성','기존 통합 저장과 명령 이력을 감싸고 같은 시드·명령·분할 시간 진행을 검증한다.','systems/aiSandbox.ts','test-academy-world-simulation.mjs'),
 item('world-diagnose','관찰 전용 정합성 검사','위치·공동 활동·참조·수치·예약·DAG를 검사하고 자동 수정하지 않는다.','systems/worldSimulation.ts','test-academy-world-simulation.mjs'),
 item('world-long-validation','30/90/360일 장기 통합 안정성','이번 실행은10·50·100명10분과 소규모 하루 동등성. 장기 플레이·성능 목표는 미검증.','systems/worldSimulation.ts','','needs_verification')],['실측 병목별 장기 진행 최적화','실제 플레이어 선택 대기 계약 연결'],['장기 캠페인 저장 슬롯·지역 스트리밍']),
 system('world-observer','세계 관찰·통제 시뮬레이터','기반 시스템','단일 샌드박스에서 실제 세계 상태를 관찰하고 명시적인 개발 명령을 실행한다.',['world-simulation','archive'],[
 item('observer-controls','새 세계·재생·정지·배속·시간 진행','1/10/60/360배속과 시간·일·주·목표 시각·다음 예약. 렌더 갱신을 제한하고 브라우저에 제어권을 반환한다.','components/Simulation.tsx','test-academy-world-simulation-browser.mjs'),
 item('observer-views','인물·장소·조직·사건 관찰','기존 상세 팝업·장소 트리·실제 인원·연대기·SVG 인과관계 화면을 재사용한다.','components/WorldSimulationPanels.tsx','test-academy-world-simulation-browser.mjs'),
 item('observer-audit','통제·로그·검사·JSON','욕구·AI 통제와 명령 이력, 보존 범위 내 사건·활동·이동 로그. 전체 엔진 스냅샷 복원.','components/WorldSimulationPanels.tsx','test-academy-world-simulation-browser.mjs'),
 item('observer-isolation','원본 격리·모바일','실제 상태를 복제하고 종료 시 폐기한다. 새 세계·복원·모바일390px 및 원본 날짜·인원 보존 검사.','components/Simulation.tsx','test-academy-world-simulation-browser.mjs')],['검사별 병목 추적 UI','명령 리플레이 타임라인'],['장기 기록 보관·비교 관찰']),
 system('simulation-lod','NPC LOD·지역 활성화','NPC 시뮬레이션','동일 세계 상태 위에서 정밀도를 선택한다. 원거리 아카데미 일과·실제 이동·중요 사건을 보존하며 미실행 일상을 사후 생성하지 않는다.',['ai','world-events','locations','schedules','memory'],[
 item('lod-policy','4단계 정책·중요도·안전 전환','아카데미 최소1, 지속 인물 최소2, 실제 이동·공동 활동·세계 사건은 정밀 유지.','systems/npcSimulation.ts','test-academy-lod.mjs'),
 item('lod-regions','이동 그래프 반경·유예·지역 활성','플레이어 실제 이동 구간의 도착지를 준비하고 반경5/10분과30분 유예를 사용한다. 계층 전체를 활성화하지 않는다.','systems/npcSimulation.ts','test-academy-lod.mjs'),
 item('lod-residents','인구 집계·안정 주민 슬롯','10,000명 집계와 실제 생성 NPC를 분리한다. 개별화는 기존 생성기를 호출하고 같은 슬롯의 ID를 재사용한다.','systems/npcSimulation.ts','test-academy-lod.mjs'),
 item('lod-save','통합 저장·구형 호환·결정성','정책·전환·명령·지역·주민을 기존 통합 스냅샷에 추가한다. 동일 정책의 분할/일괄 및 복원 후 상태를 검증한다.','systems/aiSandbox.ts','test-academy-lod.mjs'),
 item('lod-observer','시뮬레이션 공간·격리 관찰','NPC 추가·실제 플레이어 이동·강등 방어·인구·팝업·시간·지역·초기화. 모바일과 원본 격리 검사.','components/Simulation.tsx','test-academy-lod-browser.mjs'),
 item('lod-academic','장기 학사·조직·전투 연동 범위','실행 중인 일과·약속·효과·사건은 유지한다. 학사 v1은 실제 시간표·성적을 연결했으며 LOD별 다년 학사 검증·자동 진급/졸업·선거·정식 전투는 미완료다.','systems/npcSchedules.ts','test-academy-lod.mjs','partial'),
 item('lod-long','30/360일·대량 휴면·장기 성능','짧은100명 측정과 동일 정책 결정성 검사를 장기 안정성 달성으로 확대 해석하지 않는다.','systems/npcSimulation.ts','diagnose-academy-lod.mjs','needs_verification')],['측정 병목에 따른 구간 적분·휴면 상태 지연 평가','실제 학사·조직·전투 계약 연결'],['장기 누적 저장 및 지역 스트리밍']),
 system('character','캐릭터 기본 모델','캐릭터·성장','플레이어·랜덤·고정 인물이 동일한 모델과 상세 패널을 사용한다.',[],[
 item('char-shared','공통 ID·모델·상태창','kind는 숨겨진 보정이나 별도 능력치 상한을 부여하지 않는다.','types/character.ts','test-academy-character.mjs'),
 item('char-fixed','고정 인물 템플릿','세레나의 고정·미확정 슬롯과 실제 캐릭터 모드를 분리한다.','systems/characterRegistry.ts','test-academy-character.mjs')],['추가 고정 인물 데이터'],['캐릭터 정보 공개 정책']),
 system('stats','능력치','캐릭터·성장','7개 능력치와 공통 수치 구간·등급 표시.',['character'],[
 item('stats-seven','7종 능력치·등급','STR/AGI/VIT/MAG/INT/WIL/CHA 정의와 범위별 고유 설명.','systems/knowledgeRegistry.ts','test-academy-knowledge.mjs'),
 item('stats-growth','실제 성장 처리','별도 action-effects-v1 임시 XP 규칙으로 완료 활동의 경험치를 누적하고 실제 수치를 올린다.','systems/actionEffects.ts','test-academy-interactions.mjs')],['성장 결과를 적용하는 명시적 API'],['성장 한계와 장기 밸런스']),
 system('proficiency','숙련도','캐릭터·성장','카탈로그 49종과 0~9 경지. 특성 진화와 독립적이다.',['character'],[
 item('skills-catalog','정의·경지·캐릭터 표시','실제 ID로 캐릭터의 숙련도를 조회한다.','systems/knowledgeRegistry.ts','test-academy-knowledge.mjs'),
 item('skills-xp','경험치와 자동 경지 상승','도감 임계값 null을 보존하며 별도의 버전별 런타임 XP 규칙으로 실제 경지를 갱신한다.','systems/actionEffects.ts','test-academy-interactions.mjs')],['경험치 규칙 확정'],['훈련 효과와 성장 평가']),
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
 item('academic','월별 학사 일정','공식 월별 기본 일정. 학사 v1이 실제 시험 시점·진급 자격을 추가하며 자동 진급/졸업은 미구현이다.','data/calendars/index.ts','test-academy-time.mjs')],['학사별 세부 행사 날짜'],['연도별 학사 변경']),
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
 item('save-campaign','실제 캠페인 저장 슬롯','관찰 플레이 v0.5의 브라우저3슬롯은 구현됐다. 이제 플레이어 생활/정책/대기 선택도 저장한다. 복잡한 캠페인·다년 저장 호환성 검증은 미완료다.','systems/playSession.ts','test-academy-play.mjs', 'partial')],['캠페인 저장소 어댑터'],['다중 슬롯·호환 정책']),
 system('effects','공통 효과·조건','기반 시스템','도감이 공유하는 효과 타입·조건·설명·검증과 일부 실행 어댑터.',['traits','gifts','statuses'],[
 item('effects-definitions','효과·조건 데이터와 계산','도감 정의의 효과 문구·확률·기본 계산을 재사용한다.','systems/effectResolver.ts','test-academy.mjs'),
 item('effects-all','모든 고유 규칙의 실제 실행','SPECIAL_RULE 정의가 실행 구현을 보장하지 않는다.','AGENTS.md','', 'partial')],['고유 효과 실행 어댑터'],['복합 사건의 효과 순서']),
 system('events','사건·퀘스트','게임플레이','기존 예정 개인 서사·퀘스트 참조의 실행은 미구현이다. 별도 카탈로그를 실행하는 세계 이벤트 v1과 구분한다.',['character','time'],[
 item('events-engine','기존 예정 서사·퀘스트 실행','기획 참조를 플레이 가능한 퀘스트로 표시하지 않는다. 세계 이벤트는 별도 시스템이다.','README.md','', 'not_implemented')],['명시적 사건 결과 모델'],['사건 연쇄·분기 퀘스트']),
 system('archive','설정집·공통 팝업','기반 시스템','데이터 ID 기반 작은 그리드와 재사용 가능한 상세 팝업.',['character'],[
 item('archive-popup','도감 검색·필터·팝업','인게임에서도 재사용할 제어형 상세 다이얼로그를 제공한다.','components/DetailDialog.tsx','test-academy-popup-reuse-browser.mjs')],['정보 공개 정책 통합'],['동적 기록과 발견 도감']),
 system('action-outcomes','행동 결과·효과','기반 시스템','결과 ID·원자적 적용·성장·관계·도메인 사건 기록. 시간 기반 욕구 효과와 완료 보상은 분리한다.',['stats','proficiency','statuses','motivation','relationships'],[
 item('outcome-types','공통 효과 타입·실패 검증','욕구/XP/관계/목표/상태/도덕/카르마/등록 처리기. HP/SP/MP는 전투 어댑터 연결 시 지원하고 미연결은 거부한다.','types/actionEffects.ts','test-academy-interactions.mjs'),
 item('outcome-atomic','미리보기·원자적 적용','전부 검증 후 커밋하며 실패 시 부분 상태를 남기지 않는다. 구독자 알림은 커밋 뒤 전달한다.','systems/domainTransaction.ts','test-academy-interactions.mjs'),
 item('outcome-growth','완료 활동의 실제 성장','버전별 임시 XP 규칙. 시간·피로·경지·특성·환경·지도·시드 편차. 특성 자동 진화 없음.','systems/actionEffects.ts','test-academy-interactions.mjs'),
 item('outcome-relations','방향성 관계·일일 한도','일일 지표별 절대 변화량 제한, 친밀도 감쇠와 역방향 독립성.','systems/actionEffects.ts','test-academy-interactions.mjs'),
 item('outcome-need-goal','욕구·목표와 보상 책임 분리','완료 시 식사·수면 회복 중복 금지. 실제 증거로 목표 재판정.','systems/motivationEngine.ts','test-academy-interactions.mjs'),
 item('outcome-once','중복 방지·저장·보존 정책','결과 지문·14일 원장·용량 초과 거부·저장 후 중복 차단.','systems/actionEffects.ts','test-academy-interactions.mjs'),
 item('outcome-events','타입 안전 도메인 사건','실제 활동/상호작용/성장/관계/목표/효과 결과만 기록. 세계 이벤트 엔진은 등록된 트리거만 별도로 처리한다.','types/actionEffects.ts','test-academy-interactions.mjs'),
 item('outcome-tester','효과 도감·샌드박스','실제 미리보기·적용·중복·오류·저장·초기화와 원본 격리.','components/InteractionTester.tsx','test-academy-interactions-browser.mjs')],['복합 조건부 효과','지속 효과','효과 간 연쇄 반응','환경 변화 효과'],['대규모 세계 상태 변화','세력 단위 결과','복잡한 사건 연쇄','고급 효과 규칙']),
 system('interactions','NPC 상호작용','NPC 시뮬레이션','18종 제안·수락·공동 활동·간이 결과와 실제 효과.',['action-outcomes','schedules','relationships','morality','locations'],[
 item('interaction-catalog','상호작용 카탈로그','활동·장소·시간·수락·결과·재시도 규칙을 등록한다.','data/interactions/index.ts','test-academy-interactions.mjs'),
 item('interaction-target','같은 장소·정지 대상 선정','실제 위치·이동·현재 활동·의무·피로·상호 잠금을 검사한다.','systems/interactions.ts','test-academy-interactions.mjs'),
 item('interaction-consent','제안·수락·거절','방향성 감정·성향·욕구·빈도·시드 판정. 거절로 관계를 자동 낮추지 않는다.','systems/interactions.ts','test-academy-interactions.mjs'),
 item('interaction-shared','공유 인스턴스·중단','양쪽 일정 실행 증거·완료 시각·참여 잠금·상태 전이·중단을 검증한다.','systems/interactions.ts','test-academy-interactions.mjs'),
 item('interaction-result','결과 판정·성장·관계','대화·공감·협력·갈등·회피·간이 경쟁. 영향력을 전투력으로 사용하지 않는다.','systems/interactions.ts','test-academy-interactions.mjs'),
 item('interaction-ai','기존 AI 연결','공통 후보와 실제 상호작용 엔진에 위임한다. 중복 공동 활동·보상을 생성하지 않는다.','systems/npcAi.ts','test-academy-interactions.mjs'),
 item('interaction-save','결정론·저장·실패 대기','동일 시드·작은/큰 시간 진행·실행 중 저장 복원·상호 쿨다운.','systems/aiSandbox.ts','test-academy-interactions.mjs'),
 item('interaction-tester','도감·팝업·테스트','준비·요청·수락/거절·결과·효과·로그·대량 생성·JSON·모바일.','components/InteractionCatalog.tsx','test-academy-interactions-browser.mjs')],['복잡한 대화','약속 및 만남 예약','다자간 상호작용','관계별 대화 맥락'],['집단 갈등','조직 간 사회적 상호작용','복잡한 협상','정치적 관계']),
 system('memory','NPC 기억·정보','NPC 시뮬레이션','사실·경험·믿음을 분리하고 실제 정보 대화와 자기 기억을 AI 판단에 연결한다.',['time','interactions','action-outcomes','relationships','morality'],[
 item('memory-facts','세계 사실과 믿음 분리','원본 사건·구조화 주장·소유자 기억을 독립 저장한다.','systems/npcMemory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-generation','실제 경험·목격 기억','당시 참여자·같은 장소·이동·수면·공개 범위·주의를 검사한다.','systems/npcMemory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-salience','개인별 중요도','사건·관계·성향·목표로 중요도를, 사건 결과로 감정 강도를 정한다.','systems/npcMemory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-decay','망각·회상','고정 시간 기준 선명도/확신도 감소·회상 강화·내용 불변.','systems/npcMemory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-search','인물·장소·주제·활동 인덱스','관련 기억만 검색하고 일반 AI 판단에서 전체 세계 기억을 훑지 않는다.','systems/npcMemory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-claims','구조화 주장·모순','동일 주제에 서로 다른 주장·확신도를 보존한다.','types/memory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-lineage','출처 계보','직접·목격·전해 들음·추론 및 전달 인물/시각을 보존한다.','types/memory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-share','완료 대화의 실제 전달','5종 정보 대화가 완료됐을 때 보유 정보·공유 판단을 적용한다.','systems/interactions.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-rumor','제한적 시드 왜곡','승자·심각도·시각·확신도만 변하며 원본 사건은 보존한다.','systems/npcMemory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-trust','정보 신뢰 판정','관계·계보·성향·직접 기억 모순으로 확신도를 평가한다.','systems/npcMemory.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-secret','비밀 공개 범위','공개·제한·개인 비밀. 실제 보유자만 알고 일반 UI는 내부 정보를 숨긴다.','components/CharacterMemoryPanel.tsx','test-academy-memory.mjs','needs_verification'),
 item('memory-ai','기억 기반 효용 보정','자기 지식·현재 인지 범위 안에서 후보 점수를 제한 보정한다.','systems/npcAi.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-persistence','보존·저장·중복 방지','인물별 한도·중요 기억 우선·사건 키·출처·시드·통합 스냅샷 검증.','systems/aiSandbox.ts','test-academy-memory.mjs','needs_verification'),
 item('memory-tester','기억·정보 도감과 샌드박스','생성·직접/목격/소문·가정 기억·전달/거절·왜곡·회상/망각·AI 점수·시간·복원.','components/MemoryTester.tsx','test-academy-memory-browser.mjs','needs_verification')],['인물에 대한 인상·평판','기억의 감정적 편향','소문 확산 경로 시각화','거짓말과 의도적 정보 조작','정보 검증 행동 확장','약속 기억'],['장기 경험 기반 성격 변화','집단 기억','조직 단위 정보망','정치적 정보전','비밀 거래','복잡한 추론 및 장기 계획']),
 system('world-events','세계 이벤트 시스템','세계·시간·공간','실제 상태·시간·행동에서 발생하는 사건 인스턴스와 시간축 인과관계 그래프.',['time','locations','ai','interactions','memory','action-outcomes'],[
 ...['12개 카테고리','이벤트 정의·인스턴스 분리','정기 이벤트','조건부 이벤트','확률 이벤트·동일 기회 중복 방지','행동 파생 이벤트','상태 머신','다단계 진행','사건 분기','AND/OR 합류','차단·취소','인과관계 DAG·시간 순서','공통 효과 적용·멱등성','NPC 기억 연동','NPC AI 의도·실제 공동 활동','저장·복원·보존 한도'].map((name,i)=>item('world-events-core-'+i,name,name,'systems/worldEvents.ts','test-academy-world-events.mjs','needs_verification')),
 ...['연대기 UI','시간축 인과관계 그래프 UI','격리 테스트 샌드박스'].map((name,i)=>item('world-events-ui-'+i,name,'SVG·필터·팝업·복제 세계·수동 준비·시간·JSON.','components/WorldEvents.tsx','test-academy-world-events-browser.mjs','needs_verification')),
 item('world-events-stress','100명·30일 통합 검증','일과·이동·욕구·효과·기억30일과 전체 AI9일을 구분한다. 전체 AI30일은 미완료.','data/worldEvents/verification.json','','partial')],['플레이어 선택지·사건 개입','장기 진행 사건','다중 NPC 협력·대립','복잡한 분기와 참여자 역할','소문·사건 고급 연동'],['조직 단위 대형 사건','국가·세계 사건','정치적 사건 연쇄','전쟁·재난','장기 세계 상태 변화']),
 system('feature-notes','설정집 기능 노트','기반 시스템','코드 근거·검증 범위·부분/미구현·의존성·제안을 분리한다.',['archive'],[
 item('notes-registry','타입 안전 레지스트리·상태 집계','기능 항목에서 시스템 상태를 계산하고 검색·분류·검증 상태로 필터한다.','data/features/index.ts','test-academy-features.mjs','needs_verification')],['검사 결과 수집 자동화'],['버전 간 기능 비교']),
];
const currentChecks=new Set(['test-academy-world-simulation.mjs','test-academy-world-simulation-browser.mjs','test-academy-lod.mjs','test-academy-lod-browser.mjs','test-academy-world-events.mjs','test-academy-features.mjs','test-academy-time.mjs','test-academy-ai.mjs','test-academy-memory.mjs','test-academy-interactions.mjs']);
const recordedChecks=new Set(['test-academy-memory.mjs','test-academy-memory-browser.mjs','test-academy-interactions.mjs','test-academy-interactions-browser.mjs','test-academy-ai.mjs','test-academy-ai-browser.mjs','test-academy-character.mjs','test-academy-locations.mjs','test-academy-time.mjs','test-academy-schedules.mjs','test-academy-motivations.mjs']);
for(const note of featureNotes)for(const feature of note.versions[0].items){const checks=feature.evidencePaths.map(path=>path.split('/').at(-1)!);if(checks.some(path=>currentChecks.has(path)||recordedChecks.has(path))&&['implemented','needs_verification'].includes(feature.status)){const current=checks.some(path=>currentChecks.has(path));feature.status='implemented';feature.verificationStatus='passed';feature.verificationScope=current?'current':'recorded';feature.notes=[current?'이번 변경 범위의 해당 검사 통과. 전체 게임 E2E를 뜻하지 않는다.':'기존 검증 기록. 이번 변경의 신규 실행과 구분한다.'];}}
export function systemStatus(note:SystemFeatureNote):FeatureStatus {const items=note.versions.find(v=>v.version===note.currentVersion)?.items??[];if(!items.length)return 'not_implemented';if(items.every(i=>i.status==='implemented'&&i.verificationStatus==='passed'))return 'implemented';if(items.every(i=>i.status==='not_implemented'))return 'not_implemented';if(items.some(i=>i.status==='partial'||i.status==='not_implemented'))return 'partial';return 'needs_verification';}
const worldStress=featureNotes.find(note=>note.id==='world-events')!.versions[0].items.find(feature=>feature.id==='world-events-stress')!;
for(const feature of featureNotes.find(note=>note.id==='validation')!.versions[0].items)if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['개발 도구 계약·짧은 실제 시나리오·핵심 UI 신규 검증. Extended/Full 전체와 장기 실행은 미실행.'];}
for(const feature of featureNotes.find(note=>note.id==='play-ui')!.versions[0].items)if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['v0.5 소규모 API·실제 브라우저 흐름 검증. 100명 장기·완성된 플레이어 생활은 미검증/미구현.'];}
worldStress.verificationStatus='manual';worldStress.verificationScope='recorded';worldStress.notes=['기존 기록: 100명30일 일과 기반 통합·저장 복원 통과. 이번 작업의 신규 실행이 아니다.','전체 AI100명9일/1명7일은 별도 검증 범위. 전체 AI100명30일은 미완료.'];
export const featureStatusNames:Record<FeatureStatus,string>={implemented:'구현 완료',partial:'부분 구현',not_implemented:'미구현',planned:'계획',needs_verification:'검증 필요'};

for(const feature of featureNotes.find(note=>note.id==='player-life')!.versions[0].items)if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['플레이어3명 NPC 단기 계약/실제 브라우저·하루 자동 생활/분할 시간·공동 활동 수락·거절·저장 검증. 100명360일은 미실행.'];}

for(const feature of featureNotes.find(note=>note.id==='academics')!.versions[0].items)if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['실제 학사 계약·7종 선발·소규모7일 단일/분할·저장·실제 UI/격리 검증. 학년 전체/100명 장기는 미실행.'];}

for(const feature of featureNotes.find(note=>note.id==='conversations')!.versions[0].items)if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['공통 대화 계약·선택/성향 차이·실제 정보/약속·중요 대기/저장·핵심 UI·관련 단기 통합 검증. 장기 사회생활 스트레스는 미실행.'];}

for(const feature of featureNotes.find(note=>note.id==='world-lore')!.versions[0].items)if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['세계관 계약·8가지 생성·기존 저장/학사/관계·멱등성·핵심 UI 검증. 장기 성능 검사는 수행하지 않음.'];}

for(const feature of featureNotes.find(n=>n.id==='culture-life')!.versions[0].items)if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['문화 계약·실제 현장 교류/시간·저장/구형·핵심 UI 검증. 30/360일·10년 스트레스는 미실행.'];}

{const feature=featureNotes.find(n=>n.id==='play-ui')!.versions[0].items.find(f=>f.id==='play-viewport')!;feature.verificationScope='current';feature.notes=['1440/1024/390/320/가로 화면의 문서 스크롤0·독립 패널 스크롤·상세 팝업·학사·저장·설정집 복귀와 기존 플레이어 UI 검증. 엔진 성능 검사가 아님.'];}

{const feature=featureNotes.find(n=>n.id==='play-ui')!.versions[0].items.find(f=>f.id==='play-experience')!;feature.verificationScope='current';feature.notes=['2026-10-24: 전용 UI 및 실제 요청 저장 fixture·404개 슬라이더 배분 계약·기존 고정뷰/저장 복구 검증. 장기 성능 검사가 아님.'];}

{for(const feature of featureNotes.find(n=>n.id==='daily-life')!.versions[0].items){if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['2026-10-25: 전용 계약/실제 공동 활동·저장·분할, 기존 장소·세계 이벤트·통합 세계·플레이 계약과 변경 UI 검증. 장기 검증과 구분.'];}}}

{for(const feature of featureNotes.find(n=>n.id==='combat')!.versions[0].items){if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['2026-10-25: 전용 전투 계약·실제 동의/저장/분할/자원 트랜잭션·Extended45검사와 핵심 UI 검증. 장기·전투 다수 성능은 미검증.'];}}}

{for(const feature of featureNotes.find(n=>n.id==='items')!.versions[0].items){if(feature.status==='implemented'){feature.verificationScope='current';feature.notes=['2026-10-25: 아이템 계약/실제 전투·세계 사건·LOD·분할/복원 및 핵심 브라우저·타입/빌드 검증.100NPC10분 단일 표본이며30/360일·10년 통과를 뜻하지 않는다.'];}}}

{for(const feature of featureNotes.find(n=>n.id==='life-progress')!.versions[0].items){if(feature.id!=='progress-long'){feature.verificationStatus='passed';feature.verificationScope='current';feature.notes=['2026-10-26: 전용 실제 훈련/저장·정보 제한/분할·대회 업적·핵심 UI 검사. 부분 구현 항목의 미지원 범위는 유지하며 장기 검증을 뜻하지 않음.'];}}}

{for(const feature of featureNotes.find(n=>n.id==='rift-crisis')!.versions[0].items){if(feature.id!=='rift-future'){feature.verificationStatus='passed';feature.verificationScope='current';feature.notes=['2026-10-26: 지역 집계 계약/실제 관측·저장·시간 분할·공개 제한 및 핵심 UI 검증. 부분 구현의 후속 의존성과100NPC 다년 미검증 상태는 유지한다.'];}}}

{for(const feature of featureNotes.find(n=>n.id==='rift-crisis')!.versions[0].items.filter(f=>['rift-chronology','rift-prelude-evidence','rift-prelude-lesson'].includes(f.id))){feature.notes=['2026-10-26: 0명 세부 NPC 지역 집계 427~430년/437년 지속·일/주 분할·저장 계약 및 10명 실제 수업 151분 연결 검사.100NPC 연간 생활/졸업·진로/전쟁은 검증하지 않았다.'];}}

{const feature=featureNotes.find(n=>n.id==='play-ui')!.versions[0].items.find(f=>f.id==='play-viewport')!;feature.notes=['2026-10-26: HUD/측면 메뉴/기록지/목적별 본문·공통 팝업 디자인 갱신. 변경 UI 실제 조작·1280/390/320px 프레임 확인, 관련 headless22건 및 타입/빌드. 전체 자동 브라우저 회귀는 재실행하지 않았으며 기존 한 줄 메뉴 검사를 새 레이아웃 계약으로 갱신했다.'];}

{for(const feature of featureNotes.find(n=>n.id==='academy-story-network')!.versions[0].items){if(['story-consequences','story-conditions','story-save'].includes(feature.id)){feature.verificationScope='current';feature.notes=['2026-10-26: 전용 사건망 계약과 기존 세계 사건·고정 학생 검사. 원인·분기/만료·저장·분할·정보 차단 검증.92개 전체 콘텐츠/다년 검증 아님.'];}if(feature.id==='story-observer'){feature.verificationStatus='manual';feature.verificationScope='current';feature.notes=['2026-10-26: 실제 개발자 화면92정의·ACA-06 가능 경로/원인 조건·ACA-02 보류 표시·콘솔 오류0 확인.모든 인물/중첩/해상도 시각 검수는 미완료.'];}}}

{const feature=featureNotes.find(n=>n.id==='play-ui')!.versions[0].items.find(f=>f.id==='play-viewport')!;feature.verificationStatus='passed';feature.notes.push('2026-10-27: 지도/100아이템 아트·상세/캐릭터8분류·기록/설정집·학사/저장 대비 정리.39항목 UI_UX_POLISH_CHECKLIST_V1.md. 새25NPC 실제 이동·소비·착용·저장/복원과390/320px 확인. 전투/VN 전체 재실행·장기 회귀는 미실행.');}

featureNotes.push(system('heroine-routes','히로인 자유 교류·선택적 심화 루트','인물·서사','세레나22사건: 기존 개인4/일상5/심화8/중요3/장기 재회2. 다른14명의 심화 루트는 확장하지 않는다.',['fixed-students','world-events','conversations','memory','relationships','play-ui'],[
 item('heroine-scene-runtime','공통 장면·선택·응답 저장','선택 의향과 실제 상호작용 완료를 분리. NPC 자율 선택·사건 결과/기억·그룹 간격·구형 예약 보충.','systems/worldEvents.ts','test-academy-personal-scenes.mjs'),
 item('heroine-serena-content','세레나22개 고유 사건','대사·선택/조건/후속 연결. 대표 분기 실행은 확인했으며 모든22개/모든 선택의 실제 완주는 미검증.','data/heroineRoutes/serena.ts','test-academy-serena-route.mjs','partial'),
 item('heroine-relations','우정·경쟁·상호 의향','실제 대련·상호 고백 완료·약속과 거절/거리두기. 준비된 관계의 통합 fixture 검증이며 새 회차 전체 완주가 아님.','systems/conversations.ts','test-academy-serena-route.mjs'),
 item('heroine-player-ui','현재 가능한 이야기와 알려진 기록','인물 상세→공통 장면→조건부 선택→반응→시간 진행, 저장 후 알려진 경험만 표시.','components/PersonalSceneDialog.tsx','test-academy-serena-route.mjs'),
 item('heroine-reunion','시간 경과 후 재회·회상','과거 실제 개인 사건/연락 공백과 같은 장소 조건.431년 준비 세계의 재회 검사. 졸업·진로의 완전한 전환은 미구현.','systems/personalStories.ts','test-academy-serena-route.mjs','partial'),
],['세레나 전체22사건의 모든 분기 장기 플레이 검증','검증한 공통 구조를 다른 인물의 심화 루트로 확장'],['실제 졸업·진로 전환 및 세계 위기 속 재회 콘텐츠']));
for(const f of featureNotes.find(n=>n.id==='heroine-routes')!.versions[0].items){f.verificationScope='current';f.verificationStatus=f.id==='heroine-player-ui'?'passed':f.status==='implemented'?'passed':'manual';f.notes=['2026-10-27: 세레나 대표 분기/상호작용·조건·저장과 실제 새25NPC 장면 조작 확인. 모든22사건/4년·10년 전체 AI 완주와 구분.'];}
featureNotes.push(system('gift-codex','기프트 원고·품질·실행 구분','캐릭터·성장','기존417+신규200. 원고 등록과 권능 실행을 구분하며 미연동 신규 기프트는 출생에서 제외한다.',['gifts','generation','combat','memory'],[
 item('gift-codex-content','신규200개 개별 원고','9분야/기존 등급·상세 원리/발동/한계/예시. 문장 구조 검사는 문학적 품질 보증이 아니다.','data/giftCodex/index.ts','test-academy-gift-codex.mjs'),
 item('gift-codex-audit','기존417개 구조 감사·호환','설명8개 개선/출생16개 퇴역·기존 효과/영향력 유지·고정 참조30개 보호. 전체 문학적 품질 재작성은 미완료.','data/giftCodex/legacy.ts','test-academy-gift-codex.mjs','partial'),
 item('gift-codex-checks','공통 판정 권능','운0/양극화/근소 성공 및 제작 비중API. 실제 실행3종과 제작API부분1종이며 나머지 권능 실행은 후속.','systems/checks.ts','test-academy-gift-codex.mjs','partial'),
 item('gift-codex-memory','중요 직접 기억의 닻','중요도70 이상 직접 기억 감쇠 절반. 수동 망각/보존한도/저장·세계 사실은 유지한다.','systems/npcMemory.ts','test-academy-gift-codex.mjs'),
 item('gift-codex-birth','실행 상태별 신규 생성','실행4개만 출생 적격·미연동196개 제외·상호 배타·생성 버전 갱신. 기존 세이브 ID 보존.','data/generation/config.ts','test-academy-gift-codex.mjs'),
 item('gift-codex-ui','기프트 도감 계층·실행 구분','요약/권능 기록/범위/한계·실제 적용/대기·퇴역. 원문 SPECIAL_RULE과 실제 실행 구분.','components/EntryDetail.tsx','test-academy-gift-codex.mjs'),
],['195개 미연동 권능의 실제 어댑터','기존417개 문학적 품질 검수·개선'],['기프트별 자율 활용·정보 인지·상호작용 콘텐츠']));
for(const f of featureNotes.find(n=>n.id==='gift-codex')!.versions[0].items){f.verificationScope='current';f.verificationStatus='passed';f.notes=['2026-10-27: 원고/기존 참조·출생·판정·기억/저장 전용 검사 및 관련 전투/기억 계약. 등록200개 전체 실행 완료와 구분.'];}

featureNotes.push(system('student-economy','학생 경제·생활비','생활·경제','기본 생활 보장과 선택적 소비. 정수 동화·유한 실제 재고·월 지원·실제 현장 근무를 기존 엔진에 연결한다.',['items','generation','academics','memory','play-ui'],[
 item('economy-money','화폐·독립 경제 배경','5배경/최소 동화 정수·영향력/능력과 독립. 새 게임에서 선택한다.','data/economy/index.ts','test-academy-economy.mjs'),
 item('economy-basics','무료 기본 생활','정규 학생 기본 식사·교육·공동 기숙사·기존 의료 무료 행동 유지. 선택 유료 서비스/졸업 후는 후속.','systems/economy.ts','test-academy-economy.mjs'),
 item('economy-market','3상점·22상품 원자 거래','실제 물품·돈·유한 상점 자금을 함께 commit/rollback. 장소/시간·소유/예약·무게·자금 검사.','systems/items.ts','test-academy-economy.mjs'),
 item('economy-aid','월 지원·장학금','월초 가정 지원/생활 장학·확정 학기 excellent 어댑터. 실제 우수 학기 전체 캠페인은 미검증.','systems/economy.ts','test-academy-economy.mjs','partial'),
 item('economy-work','3일자리·실제 근무','현장·의무 일정·긴급 욕구·정원·실제120분 확인. 중단 미지급/중간 복원. NPC 자율 구직은 후속.','systems/economy.ts','test-academy-economy.mjs'),
 item('economy-save','경제 저장·결정성·상한','기존 아이템 재고를 공유하고 초기 지급/로드 재추첨 금지. 구형 선택 연결·거래24/인물·근무128 상한.','systems/aiSandbox.ts','test-academy-economy.mjs'),
 item('economy-ui','생활비 수첩·소지금','상점/일자리·장학/원장·배경 선택·즉시 행동 UI/SSR. 실제 브라우저 검수는 연결 실패로 미완료.','components/EconomyPanel.tsx','test-academy-economy-ui.mjs','partial'),
],['NPC 자율 소비·구직·저축 및 경제 생활 방침','재입고·의뢰·후원·공동 구매·동아리 예산'],['지역 시장·가격 변동·환전·졸업 후 경제']));
for(const f of featureNotes.find(n=>n.id==='student-economy')!.versions[0].items){f.verificationScope='current';f.verificationStatus='passed';f.notes=['2026-10-27: 짧은 실제 재고/원자 복구·근무/월 지급·저장/새 실제 세션·SSR. 시각/입력·장기 자산 분포 및100NPC7일 경제 성능은 미검증.'];}

featureNotes.push(system('skill-overhaul','행동 기반 스킬·숙련·진화','캐릭터·성장','49기초 숙련+기존419계보/3전문. 실제 완료 행동·숙련·분기·NPC·노드 UI. 기프트 별도.',['traits','combat','action-outcomes','memory','play-ui'],[
 item('skill-learning','실제 행동 습득·개별 숙련','완료/성공 효과 권위·관련 계열·일180분/숙련 상한·중복/중단 제외. 일반·NPC 동일 규칙.','systems/skills.ts','test-academy-skills.mjs'),
 item('skill-evolution','선형 진화·전문 선택','실제 수련·선행 숙련·기초 역량·도전 경험. 이전 단계 대체/재습득 금지, 검술 전문은 공통 기초 유지.','data/skills/index.ts','test-academy-skills.mjs'),
 item('skill-combat','쾌검·중검·정밀 검술','기력/선행·방어 관통/재사용·실제 관찰 조건. 같은 후보/판정/자원으로 NPC도 선택.','data/combat/index.ts','test-academy-skills.mjs'),
 item('skill-builds','15인·랜덤 시작 빌드','기존 고정 능력/기프트/기초 숙련 유지·성향별 추가 시작 기록. 플레이어 전문화 직접/NPC 실제 자격 선택.','systems/skills.ts','test-academy-skills.mjs'),
 item('skill-persistence','저장·진행 이력·멱등성','Character skillBook 단일 권위·traitIds 호환 투영·개별 이력32·현재 시각 처리키·구형 명시 연결.','systems/aiSandbox.ts','test-academy-skills.mjs'),
 item('skill-node-ui','범용 노드 스킬 트리','분야/검색/보유·전체·72노드 부분 표시·연결/잠금·숨김·진화/확대/드래그·키보드. SSR 통과·실제 시각 검수는 별도.','components/SkillTree.tsx','test-academy-skills-ui.mjs','partial'),
 item('skill-legacy-adapters','기존419계보·고유 효과','ID/기프트 보존·47고유/구형 신규 수련 제외. 기존 일부 성장/고유 옵션·상위 제작/생활 도전의 실행 확대는 후속.','data/skills/index.ts','test-academy-skills.mjs','partial'),
],['다른 분야의 고유 전문 행동·도전 어댑터','기존 개별 효과의 실행 재검수','실제 브라우저·장기 성장 밸런스'],['장기 전문 경력·기술 전승']));
for(const f of featureNotes.find(n=>n.id==='skill-overhaul')!.versions[0].items){f.verificationScope='current';f.verificationStatus='passed';f.notes=['2026-10-27: 실제 수련·중단/중복/분할·NPC/15빌드·저장·3실제 전투 행동과 SSR 검사. 전체419개 고유 효과/상용 시각 완성도/10년 검증과 구분.'];}
{const old=featureNotes.find(n=>n.id==='traits');if(old){old.name='스킬 도감·구형 trait 호환';old.description='기존 안정적 ID/계보/효과 정의의 호환 레지스트리. 실제 수련·진화는 skill-overhaul 실행기를 사용한다.';}}
