# PROJECT_CONTEXT — 아카데미

확인 기준: `6a2df8d` (2026-10-22). 경로는 저장소 루트 기준이다. 이 안내로 관련 파일을 찾은 뒤 실제 심볼과 호출부를 확인한다.

## 구조

- web-hub는 React 19 / TypeScript / Vite 허브와 여러 게임을 함께 빌드한다. 루트 `package.json`, `docs/INTEGRATION.md`가 허브 진입점이다.
- 아카데미 UI: `src/AcademySurvival/AcademySurvival.tsx`, CSS 및 `components/`. 공통 상세는 `CharacterStatusPanel.tsx`, AI 문맥은 `AiProvider.tsx`.
- `types/`: 공통 캐릭터 및 시스템 타입. `data/`: 카탈로그·설정·시스템별 README 계약. `systems/`: UI와 독립된 엔진.
- 기존 시드 RNG·공통 엔진의 위치는 관련 타입/함수 참조 검색으로 찾는다. 새 대체 엔진을 먼저 만들지 않는다.

## 필요한 시스템만 읽기

| 작업 | 진입 경로 (`src/AcademySurvival/` 아래) |
| --- | --- |
| 인물 원화·이벤트 창 | `data/characterArt.ts`, `components/{EventScene,CharacterArt,eventSceneHooks}.tsx/ts`, `data/characters/studentAbilities.ts` —17종4표정/85WebP·로그 필터/공통 선택·결과/전투 연출·새 게임 능력 구성. `CHARACTER_PRESENTATION_V1.md` |
| 히로인·동적 사건 그래프 | `systems/storyGraph.ts`, `components/{StoryGraph,HeroineGraphCatalog,EventBranchAudit}.tsx` —15인 선택/세레나22+기존 연계·실제 정의 추출·발견 정보/개발자 분리·80부분 그래프/연대기·완료 시 분기 감사 저장. `STORY_GRAPH_V1.md`, `test:academy-story-graph`. |
| 세레나 자유 교류·심화 루트 | `data/heroineRoutes/serena.ts`, `types/personalScene.ts`, `systems/{worldEvents,personalStories}.ts`, `components/{HeroineOpportunities,PersonalSceneDialog}.tsx` — 기존 개인4+신규18, 선택/응답 저장·공통 상호작용/기억·상호 교제/약속·일상/심화 간격·알려진 기록. `SERENA_ROUTE_V1.md`. 졸업/진로·전체22분기 완주는 미검증/후속. |
| 고정 NPC 대화·리액션 | `data/dialogue/`, `systems/dialogueDirector.ts`, `components/DialogueView.tsx` —15프로필/390고유 대사/12실제 시간축 장면·기억 조건/선택 저장. `NPC_DIALOGUE_V1.md` |
| 아카데미 사건망·후속 기회 | `data/academyStories/README.md`, `systems/worldEvents.ts`, `components/AcademyStoryNetwork.tsx` —기존62+신규30 정의(58연결/34보류), 실제 원인 기반 해금/지연/변경/우회/차단·만료·선택 저장·개발자 관찰. `ACADEMY_STORY_NETWORK_V1.md` |
| 고정 학생·개인 서사 | `data/characters/students.ts`, `stories.ts`, `systems/fixedStudents.ts`, `components/CharacterStories.tsx` —15명/62개 콘텐츠(42실행 경로·20보류), 새 게임만 명단 삽입. `FIXED_STUDENTS_V1.md` |
| 새 게임·입학·엔딩 도감 | `components/{GameStart,EndingGallery}.tsx`, `systems/{admission,endingCollection}.ts` —4출발/5방향·공통 생성/자질 공개·실제 입학 평가/S~F 배정·BAD END00/별도 수집 저장. 반별 교육/승강은 후속. `START_ADMISSION_V1.md`, `test:academy-admission`. |
| 캐릭터·생성·영향력 | `data/characters/`, `data/generation/`, `systems/characterImpact.ts`, `types/` |
| 인물 대상 행동·전투 진입 | `systems/npcActions.ts`, `components/NpcActionPanel.tsx` — 주변 인물 상세에서 기존 카탈로그 행동 통합. 자원은 `PlayerResources`, 전투 이력은 `PlayerCombatHistory`. `GAME_INTERFACE_V1.md` |
| 경제·학생 생활 | `data/economy/README.md`, `systems/economy.ts`, `components/EconomyPanel.tsx` —정수 동화/5배경·3상점22물품/실제 원자 매매·월 지원/2장학·3일자리·저장. 자율 소비/구직·재입고/지역 시장·졸업 후는 후속. `ECONOMY_V1.md`, `test:academy-economy`. |
| 아이템·인벤토리·장비·선물 | `data/items/README.md`, `types/item.ts`, `systems/items.ts`, `components/InventoryPanel.tsx` —100종/단일 소유 원장·공통 효과/판정·직접 동의·선택 저장. `docs/academy/ITEMS_V1.md` |
| 스킬·수련·분기 | `data/skills/README.md`, `systems/{skills,skillRules}.ts`, `components/SkillTree.tsx` —49기초+기존419계보+검술3전문. 실제 완료/숙련/대체·NPC 선택/저장·숨김/노드 UI. 기프트 별도, 고유 설정47개 신규 수련 제외·기존 효과 일부 어댑터 제한 유지. `SKILL_OVERHAUL_V1.md`, `test:academy-skills`. |
| 능력치·숙련도·스킬·기프트 | `data/knowledge/`, `data/traits.ts`, `data/gifts.ts` |
| 기프트 확장·실행 상태 | `data/giftCodex/README.md`, `systems/{registry,checks,npcMemory}.ts` —기존417+신규200, 설명8개 개선/신규 생성16개 퇴역·고정 참조30개 보호. 신규 실행4/부분1/대기195, 미연동 신규 출생 제외. `GIFT_CODEX_V1.md`, `test:academy-gift-codex`. |
| 상태·효과·직급·칭호 | `data/statuses/`, `data/social/`, `data/actionEffects/` |
| 소속·성향·관계 | `data/organizations/`, `data/dispositions/`, `data/relationships/` |
| 시간·학사 일정 | `data/calendars/` 및 해당 엔진 참조. 단일 절대 분, JS Date 현실 달력 사용 금지 |
| 학사·수업·수강신청 | `data/academic/README.md`, `types/academic.ts`, `systems/academics.ts`, `components/AcademicPanel.tsx` — 86과목·실제 개설/선발/수업/평가·선택적 통합 저장. `docs/academy/ACADEMICS_V1.md` |
| 성장·업적·명성·생활 목표 | `data/lifeProgress/README.md`, `systems/lifeProgress.ts`, `components/LifeProgressPanel.tsx` — 공통 XP/Goal·개별 정보 기반 이력,30업적/25선택 목표, 상태창/보고·선택 저장. 연구/제작/졸업·상세 평판 피드백은 부분 구현. `docs/academy/LIFE_PROGRESS_V1.md` |
| 공식 행사·대회·문화제 | `data/academyEvents/README.md`, `systems/academyEvents.ts`, `components/OfficialEventsPanel.tsx` —6유형/연간7회·실제 공통 전투 대진·9부스 준비/운영·학사 탭·선택적 통합 저장. 제작/음악/독창 연구 연동은 부분 구현. `docs/academy/OFFICIAL_EVENTS_V1.md` |
| 종족·문화·생활양식 | `data/culture/README.md`, `systems/cultureLife.ts`, `components/CulturePanels.tsx` —14문화/24관습·실제 공동 활동/개인 선호·기억·학내24사건.`docs/academy/CULTURE_LIFE_V1.md` |
| 세계관·종족·출신 | `data/worldLore/README.md`, `systems/worldIdentity.ts`, `worldLoreValidation.ts`, `components/WorldLoreCatalog.tsx` — 정적6종족/10국가·멱등 장소/조직 시드·선택적 캐릭터 배경. `docs/academy/WORLD_LORE_V1.md` |
| 일상생활·기숙사 | `data/dailyLife/README.md`, `systems/dailyLife.ts`, `components/DailyLifePanel.tsx` —104실/184침대·거주 권한/룸메이트·실제 구간 집계/28생활 사건·선택적 통합 저장. `docs/academy/DAILY_LIFE_V1.md` |
| 동아리·학생회·학내 집단 | `data/academyGroups/README.md`, `systems/academyGroups.ts`, `components/AcademyGroupsPanel.tsx` —12동아리/학생회/3모임·회원/임기/시설/실제 활동/선거·선택적 통합 저장. `docs/academy/ACADEMY_GROUPS_V1.md` |
| 장소·이동 | `data/locations/`, `systems/locationWorld.ts` — 포함 트리와 이동 그래프 분리 |
| 일과·욕구·목표 | `data/schedules/`, `data/motivations/`, `systems/motivationEngine.ts` |
| AI·통합 저장 | `data/ai/`, `systems/npcAi.ts`, `systems/aiSandbox.ts` — `snapshotAi` / `createAiSandbox` |
| 상호작용·결과 | `data/interactions/`, `systems/interactions.ts`, `systems/actionEffects.ts` |
| 대화·사회생활·약속 | `data/conversations/README.md`, `types/conversation.ts`, `systems/conversations.ts`, `conversationPresentation.ts`, `components/ConversationPanel.tsx` — 공통 상호작용의 의미/표현·당사자 선택·실제 약속, 선택적 저장. `docs/academy/CONVERSATIONS_V1.md` |
| 공통 판정·전투 | `data/combat/README.md`, `systems/checks.ts`, `systems/combat.ts`, `components/CombatPanel.tsx` — 실제 수락 대련/선택적 저장. `docs/academy/COMBAT_V1.md` |
| 기억·개별 정보 | `data/memory/README.md`, `systems/npcMemory.ts`, `systems/memoryPresentation.ts` |
| 균열의 시대·지역 위기 | `data/riftCrisis/README.md`, `systems/riftCrisis.ts`, `components/RiftCrisisPanel.tsx` —30사건 설계/14실행 지역 집계·유한 자원/봉쇄 후 분석·개별 지식·세계 소식/지도·선택 저장. 상세 전쟁/교신/정치/졸업 연동은 후속. `docs/academy/RIFT_CRISIS_V1.md`, `RIFT_CHRONOLOGY_V1.md` —427년5전조·과거 증거/후속 비교·새 회차 다년 페이싱·구형 정책 명시 전환 |
| 세계 이벤트·인과관계 | `data/worldEvents/README.md`, `systems/worldEvents.ts`, `systems/eventQueue.ts`, `components/WorldEvents.tsx` |
| NPC LOD·지역 활성화 | `data/simulation/README.md`, `systems/npcSimulation.ts`, `components/Simulation.tsx` — 같은 세계 상태의 정밀도 정책. 원거리 아카데미 최소1 |
| 통합 세계 실행·관찰·통제 | `systems/worldSimulation.ts`, `types/worldSimulation.ts`, `components/WorldSimulationPanels.tsx` — 기존 엔진 조합·명령·전체 JSON·읽기 전용 검사. `docs/academy/WORLD_SIMULATION_V1.md` |
| 장기 생활 계획·진행 | `systems/lifePacing.ts`, `components/LifePlanner.tsx` —공통 일정16반복칸/생활방향·다음/일/주/월/학기/연 진행·절대 목표 저장/재개·12실제 보고/스킬중단. `PACING_V1.md`, `test:academy-pacing`. 100명 장기 성능 목표 미달성/미검증. |
| 플레이어 생활·행동 v1 | `systems/playerLife.ts`, `types/player.ts`, `components/PlayerControls.tsx` — 공통 AI/일과/이동/효과 위의 방침·수동 제어·개입 대기. `docs/academy/PLAYER_LIFE_V1.md` |
| 게임 인터페이스·즉시 실행 | `components/{LocationMap,CombatDialog,AcademicTimetable,CourseDialog}.tsx`, `GameInterface.css`, `systems/playSession.ts` — `performAction/moveAndArrive/settleInteraction/combatTurn/resolveCombat`. `docs/academy/GAME_INTERFACE_V1.md` |
| 지도·아이템 아트·UI 점검 | `data/{campusMap,itemArt}.ts`, `systems/spatialMapPresentation.ts`, `components/{LocationMap,ItemArt}.tsx`, `components/GamePolish.css` — 캠퍼스 안내도/실내·지역 탐색,100아이콘/4아틀라스, 목적별 상세 분류·대비 보정. `UI_UX_POLISH_CHECKLIST_V1.md`, `UI_ASSET_PROMPTS_V1.md` |
| 합성 효과음 | `systems/gameAudio.ts`, `components/GameAudio.tsx` —WebAudio9종/조작·자질·성장·이벤트·주사위, 브라우저 설정/첫 입력·음소거/중요 순간·세계 RNG 독립. `AUDIO_V1.md`, `test:academy-audio`. |
| 판정 주사위 연출 v1 | `systems/dicePresentation.ts`, `components/{DicePresentation,DiceMesh}.tsx` —기존 전투 기록 D20/실제 명령1회·공통 설정/스킵/상대 비공개·소프트웨어3D. D100은 기록 투영 기반만/시험·이벤트 자동연동 후속. `DICE_PRESENTATION_V1.md`, `test:academy-dice`. |
| 신규 비주얼 플레이 v1 | `components/{VisualGameplay,VisualScene,VisualCombat}.tsx`, `VisualGameplay.css` —독립 무대/HUD·활동/만남/이동/성장/기록/저장·VN선택/전투. 기존 `PlaySession` 공유/텍스트 전환. 장비·학사·전체 스킬 상세의 비주얼 전용 화면은 후속. `VISUAL_MODE_V1.md`, `test:academy-visual-mode`. |
| 일반 플레이 UI v0.5 | `components/Gameplay.tsx`, `PlaySessionContext.tsx`, `LiveWorldProviders.tsx`, `systems/playSession.ts`, `playerViews.ts` — 실제 세션·공개 투영·3슬롯·고정 뷰포트/내부 스크롤(`docs/academy/GAMEPLAY_LAYOUT.md`). `docs/academy/GAMEPLAY_UI_V0_5.md`, `GAME_UI_REDESIGN_V1.md` —잉크 HUD/측면 메뉴·기록지 본문·목적별 확장/공통 팝업 |
| 자동 검증·검사 선택 | `scripts/academy-validation.mjs`, `scripts/academy-validation-registry.mjs`, `systems/validationScenarios.ts`, `systems/worldInvariants.ts` — 사용법·범위는 `docs/academy/VALIDATION_V1.md` |
| 기능 현황·증거 | `data/features/index.ts`, `data/features/README.md` |

## 읽는 순서

1. 관련 행의 README와 타입을 확인한다.
2. `rg --files src/AcademySurvival`로 파일명, `rg -n 'symbol' <관련 디렉터리>`로 정의와 호출부를 찾는다.
3. 필요한 범위를 읽고 변경·의존 관계를 확정한다. 변경되지 않은 대형 파일을 반복 출력하지 않는다.

## 검증과 기록

- npm 명령의 실제 정의는 `package.json`의 `test:academy*`를 확인한다. 검증 선택은 [TASK_PROTOCOL](TASK_PROTOCOL.md).
- 기억 최종 검증: `src/AcademySurvival/data/memory/verification.json` 및 `implementation-report.md`. 이미 통과한 장기 실행을 관행적으로 반복하지 않는다.
- 세계 이벤트 v1은 기존21종·학사2종·학내 문화24종의 명시적 카탈로그를 실행한다. 범용 자연어 대화 생성기·다년 캠페인 검증과 혼동하지 않는다. 전투 v1은 별도 공통 라운드 엔진으로 연결된다. [IMPLEMENTATION_STATUS](IMPLEMENTATION_STATUS.md) 참고.
