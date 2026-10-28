# 학사·수업·시험·수강신청 v1

2026-10-24 구현 기록. 과거 기획 및 이전 장기 실행 결과와 이번 검증을 구분한다.

## 실제 구현

- `data/academic/index.ts`: 86과목(실제 숙련도 28분야 × 3단계 + INT/CHA 기반 일반 교양 2개). 이름만 있는 강의가 아니라 선수과목·권장 학년·학점·평가·장소 태그를 갖는다. 일반 교양에 가상의 숙련도나 주특기 XP를 부여하지 않는다.
- `types/academic.ts`: 과목 정의, 학기별 개설 강의, 신청/대기, 실제 수업, 출석, 평가, 성적표와 실행 저장을 분리한다.
- `systems/academics.ts`: 실제 교수 전문성/부담과 강의실·시간 자원으로 개설한다. 86과목 전부가 매번 개설되는 것은 아니다. 자원 부족·최저 학점 미달을 표시하며 교수·좌석·출석을 생성하지 않는다.
- 7종 선발(성적/숙련/적성/선착순/추첨/교수 선발/혼합), 시드 기반 동점 처리, 희망 순위·시간 중복·이동 여유·학점 상한·대기 승계를 검사한다. 이전 성적이 없는 학생은 중립 기준을 쓴다. NPC는 실제 전공·성향·목표·접점을 참고하며 플레이어는 자동/직접 신청을 선택한다.
- 2월1일 00~08시 학적 확인, 2월/7월 신청, 3~6월/8~11월 수업. 신청 중 매일18시 잠정 선발과 최종 마감을 구분한다. 관리자 마감 후 다음 날 임의 재개하지 않는다.
- 확정 시간표만 공통 일과 엔진에 전달한다. 실제 이동·출입·도착·수업 수행을 재사용한다. 교수와 학생이 같은 수업을 수행한 겹친 시간만 출석/학습으로 계산한다. 교수 지각 유예15분, 현장에 실제 있는 적격 대체 교수 또는 휴강. 일반 활동 보상과 학사 보상은 중복 적용하지 않는다.
- 실제 수업 중간/기말 평가, 수업 내 실습·과제 증거, 출석을 종합한다. 중간은5/10월15일 이후 첫 해당 강의, 기말은6/11월20일 이후 첫 해당 강의다. 미참여는0점이며6/11월30일18시 성적 확정은 멱등적이다. 성적/학점/GPA/석차/학사 경고 및 진급 **자격**을 제공한다. 자동 진급·졸업은 수행하지 않는다.
- 실제 같은 수업30분 이상을 공유한 제한된 동급생 쌍은 공통 효과 엔진으로 친밀도만1 증가한다. 대화·호감·신뢰를 임의 생성하지 않는다.
- `AcademicChanged` 도메인 사실과 별도로 학사 경고→실제 자율학습 점검 2개 세계 이벤트를 연결했다. 경고를 기억하고 후속 학습은 실제 활동이 있어야 완료한다. 미수행은 만료/실패한다. 기존21개와 합쳐 실행 이벤트23개다.

## 연결·공개·저장 계약

`AcademicHost`를 통해 기존 세계/일과/욕구/상호작용 엔진을 참조한다. 단일 시계 우선순위24 타임라인에서 다음 수업·종료·유예·학사 경계를 예약하며 NPC별 시계나 매분 전체 학사 재평가를 추가하지 않는다. 구간 적분은 실제 활동 변화를 따른다.

새 생활 시작은 학사를 활성화한다. 학사 저장이 없는 기존 세션은 기존 일과를 유지한다. `snapshotAi`/`createAiSandbox`/통합 세계 JSON/플레이3슬롯에 선택적 `academic-v1`을 포함한다. 세부 이력20학기·최근 수업250개/14일·로그500개를 보존하고, 선수과목 확인용 이수 과목 ID는 별도로 유지한다. 다년 저장 크기 검증은 아직 수행하지 않았다.

일반 `getStudentView`는 자신의 신청·평가·출석·성적만 투영한다. 타인의 대기 순서·성적을 공개하지 않는다. 공개 강의/수강 명단과 숫자 집계는 볼 수 있다. 전체 관리자 정보는 격리된 시뮬레이터에서 확인한다.

## UI와 API

- 실제 플레이 **학사** 탭, 설정집 학사 도감, **학사 테스트**→기존 격리 시뮬레이터. 과목 검색/상세·강의 신청/취소/순위·개인 시간표·성적/석차를 제공한다.
- 관리자: 실제 자원 검증을 거친 강의 개설/취소·정원·교수 변경·신청 마감·현재 수업 평가 지정·정상 성적 확정. 과거 출석을 조작해 채우지 않는다.
- 주요 API: `createAcademicEngine`, `academicPeriod`, `academicCatalogIssues`, `roles`, `eligibility`, `apply`, `withdraw`, `autoApply`, `closeRegistration`, `getState`, `getStudentView`, `getRankings`, `getSectionRank`, `setPlayerRegistration`, `getPendingDecision`, `acknowledgeDecision`, `admin`, `save`, `connect`.
- 플레이어 신청/평가 선택은 기존 생활 대기·저장·시간 중단 계약을 사용한다.

## 이번 검증과 한계

`test-results/academy-academics/contracts.json`: 86과목, 10NPC 고정 시드에서 실제9강의, 실제90분 수업, 7선발 방식/대기 승계, 무교수 휴강, 실제 평가와 선택 대기, 전체 JSON 복원, 2시간 분할 및 **3NPC 7일 일괄/10,080회 분 진행** 동등성, 학기 전환, 성적 확정 멱등성. 7일 소규모 결정성 검사이며100NPC 성능 검사가 아니다.

`test:academy-academics-browser`: 실제10NPC 생활·과목/시간표·시간 진행·저장/복원·시뮬레이터 신청/격리·390px 화면. 관련 플레이어/AI/효과/기억/세계 이벤트/자동검증 계약, 기능 레지스트리·타입·빌드는 해당 실행 로그를 확인한다. 브라우저 전체 회귀는 수행하지 않는다.

이번 실행 통과: 학사 계약/핵심 브라우저, 플레이어 계약(100NPC+플레이어 초기 등록 포함, 장기 실행 아님), AI 단기 계약(`AI_SKIP_BATCH=1`), 상호작용/효과, 기억, 세계 이벤트, 자동검증 인프라55개 등록, 기능 레지스트리35시스템/264항목, 앱/도구 타입 검사, 변경 학사·기능 노트 ESLint, diff 공백 검사. 빌드26.47초·38프로젝트 진입/185로컬 참조 검사 통과. 기존 큰 청크와 `.animate-*` CSS 최소화 경고는 남아 있다. 원본 로그: 저장소 루트 `test-results/academy-academics-*.log`, 화면 캡처: `test-results/academy-academics/{desktop,mobile}.png`.

부분 구현: 과제는 수업 내 수행 증거이며 외부 제출 시스템이 아니다. 실기는 실제 수업 실습이며 정식 전투 실기 판정이 아니다. 교수 준비도/별도 교수 숙련도 대신 실제 전문성·CHA·상태를 사용한다. 칭찬·복잡한 학업 갈등 사건, 학사 행정 NPC의 자율 운영, 전학·유급·졸업 처리는 후속이다. 고정 캐릭터의 미확정 설정은 추가하지 않았다.

미검증: 학년 전체/100NPC 장기 학사·360일·10년 저장 안정성,100NPC 전체 AI의 하루/7일 성능 목표. 기존30일 결과를 이번 학사 검증으로 재사용하지 않는다. 이벤트 기반 경계와 제한 보존은 설계 선택이며 목표 달성 실측으로 표현하지 않는다.

## 이번 변경 파일

신규: `types/academic.ts`, `data/academic/index.ts`, `data/academic/events.ts`, `data/academic/README.md`, `systems/academics.ts`, `components/AcademicPanel.tsx`, `scripts/test-academy-academics{,-browser}.mjs`, 이 문서.

연동 수정(경로는 `src/AcademySurvival/` 기준): `systems/{npcSchedules,actionEffects,npcMemory,npcAi,aiSandbox,worldSimulation,playSession,playerLife,validationScenarios}.ts`, `types/actionEffects.ts`, `data/{schedules,worldEvents,features}/index.ts`, `components/{Gameplay,Simulation}.tsx`, `AcademySurvival.tsx`. 검사 등록: `package.json`, `scripts/academy-validation-registry.mjs`, 관련 player/world-events/validation 계약 스크립트. 관련 진입·현황 문서도 갱신했다. 작업 전부터 있던 변경 파일 전체를 이 작업의 변경으로 간주하지 않는다.
