# 세계관·대륙·국가·종족 v1

2026-10-24. 아이디어 노트를 정적 세계관 데이터와 기존 공통 엔진의 참조 확장으로 구현했다. 외부 국가의 생활 AI·경제·전쟁은 이번 범위가 아니다.

## 실제 데이터와 연결

6종족(인간·마족·수인·엘프·드워프·그린스킨), 19계통, 에르디아/마르카디아/세피라 3지리권, 10정치 세력, 12지역, 33정착지·주요 지점, 10문화권, 19초기 외교 관계를 등록했다. 명칭이 미확정인 수도·마을은 임시 명칭으로 표시한다.

- 아카데미의 기존 `academy` ID는 에르디아 → 아스텔 제국 → 제국 수도권 → 아르벤 학술도시 아래로 연결한다. 기존 황궁/시장의 수도는 황도 라디온이다.
- `demon-land`는 같은 세계의 마르카디아, 기존 `demon-domain`은 카르메인 마왕령, 마왕성은 해당 수도 아래다. 기존 조직 `demon-realm`은 마계 문명권이며 단일 국가가 아니다.
- 장소 총96개, 조직42개(기존33개 보존+국가 조직9개). 기존 이동33연결·소요 시간·출입 규칙은 유지한다. 새 외부 장소는 이동 경로 미설정으로 실제 통행 불가다. 도시 사이의 기존15분 경로는 기존 밸런스이며 새 지도 거리의 실측값이 아니다.
- 공식 시간은 기존 제국력427/심연력3127 및 단일 절대 분이다. 다른 국가의 미확정 공식 달력은 공란이며 표준 표시와 구분한다.
- 신규 NPC/플레이어는 별도 난수 스트림으로 종족·계통·출신·문화·국가 시민권을 생성한다. 종족/국적을 바꿔도 능력·숙련·특성·기프트·도덕·카르마·영향력 난수는 바뀌지 않는다. 기존 이름/나이 생성은 유지한다.
- 기존 도시의 등록 시민 직급은 관할 법적 신분이고 신규 국가 시민권과 별개다. 국가/종족으로 조직 가입이나 직급을 추정하지 않는다.
- 구형 저장·고정 인물은 구조화 배경을 미설정으로 둔다. 신규 통합 스냅샷에 선택적 세계관 버전과 캐릭터 프로필을 저장한다. 미래 미지원 버전은 명시적으로 거부한다.
- 설정집8분류·검색·지리권 필터·상세/세계 탐색, 공통 캐릭터 상세, 실제 NPC worker 생성 입력, 플레이어 생성 입력을 연결한다. 기존 격리 시뮬레이터의 세계 탐색에서 실제 직접 인원과 정밀 활성 인원을 구분한다. 공개 도감은 전체 NPC 상태를 제공하지 않는다.

## 이번 작업 파일

- 신규 타입/데이터: `types/worldLore.ts`, `data/worldLore/index.ts`, `data/worldLore/seeds.ts`, 해당 README.
- 신규 공통 기능: `systems/worldIdentity.ts`, `systems/worldLoreValidation.ts`.
- 신규 UI: `components/WorldLoreCatalog.tsx`, `WorldIdentityControls.tsx`, `WorldIdentityPanel.tsx`.
- 기존 연결: `types/{character,npcGeneration,organization,location,player}.ts`, `data/{organizations,locations}/index.ts`, `systems/{npcGeneration,characterValidation,locationWorld,playerLife,aiSandbox}.ts`.
- 기존 UI: `AcademySurvival.tsx`, `components/{NpcGenerator,Gameplay,CharacterStatusPanel,OrganizationCatalog,Simulation}.tsx`.
- 검사/문서: `scripts/test-academy-world-lore{,-browser}.mjs`, 기존 장소/조직 검사의 새 계층/정의 기대값, `academy-validation-registry.mjs`, `package.json`, 기능 노트 및 컨텍스트/현황/절차 문서.

위 src 경로는 `src/AcademySurvival/` 기준이다. 작업 전부터 있던 다른 기능의 변경은 이 목록에 포함하지 않는다.

## 검증과 한계

- `test-results/academy-world-lore/contracts.json`: 참조 무결성, 중복/잘못된 ID 거부, 멱등 시드, 8종 실제 생성(교수는 기존 명시적 역할 fixture), 독립 난수, 이동 미설정 거부, 고정 인물 불변, 구형/신규 저장과 학사/관계 복원·20분 연속성.
- 관련 NPC·캐릭터·조직·장소 검사는 각각 `test-results/academy-world-lore-*.log`. 기존 테스트를 삭제하거나 축소하지 않았으며 정식 세계관의 경로/깊이/조직 수 기대값만 갱신했다.
- 핵심 브라우저 결과 `test-results/academy-world-lore/browser.json`, 화면 PNG 및 로그. 타입·기능 노트·빌드는 같은 접두사의 로그에 기록한다.
- 외부 국가 운영/인구/경제·정치 변화·장거리 교통·언어별 이름·노화/사망은 미구현이다. 수명 설명이나 초기 외교만으로 실행했다고 표시하지 않는다.
- 타입 검사·신규8개 소스 lint·기능 노트37시스템/292항목·자동 검사 레지스트리59개·빌드(38진입/185참조) 통과. 빌드20초, 기존 CSS 선택자/큰 청크 경고는 남아 있다. 재사용 가능한 요약은 `src/AcademySurvival/data/worldLore/verification.json`이다.
- 이번 변경은 정적 카탈로그·선택적 캐릭터 필드다. 새 NPC나 경로/사건/주기 실행을 추가하지 않으므로 기존 장기 실행을 반복하지 않았다. 100명 장기 성능 목표 달성을 새로 검증한 것은 아니다.
