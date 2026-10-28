# NPC 기억·정보 v1 구현 보고

## 구현 구조

- `types/memory.ts`: 기억·구조화 주장·관찰 사실·전달 계보·저장 타입.
- `data/memory/index.ts`: 보존·망각·주의·왜곡·효용 보정 설정과 도감 항목.
- `systems/npcMemory.ts`: 사건 구독, 개인 기억 생성, 인덱스, 망각/회상, 정보 공유/신뢰/왜곡, 저장 검증.
- `systems/memoryPresentation.ts`: 구조화 주장을 인물·활동 이름으로 표시하는 공통 표현 함수.
- `systems/actionEffects.ts`: 커밋 후 실제 도메인 사건 구독. 기존 결과 적용과 기억 회상을 분리한다.
- `systems/interactions.ts`, `types/interaction.ts`, `data/interactions/index.ts`: 실제 정보 대화5종과 대화 완료/정보 전달 결과 분리.
- `systems/npcAi.ts`, `types/npcAi.ts`: 자기 지식 기반 후보와 기억 효용 기여.
- `systems/motivationEngine.ts`, `systems/locationWorld.ts`: 조회 단위 경로 공유와 존재 여부 검사. 새 욕구/이동 엔진을 만들지 않는다.
- `systems/aiSandbox.ts`, `components/AiProvider.tsx`: 실세계 조합과 깊은 복제 샌드박스, 이전 저장 호환.
- `components/MemoryCatalog.tsx`, `MemoryTester.tsx`, `CharacterMemoryPanel.tsx`, `CharacterStatusPanel.tsx`: 도감·공통 팝업·테스트·개발자 인물 상세.
- `AcademySurvival.tsx`, `AcademySurvival.css`: 설정집21번째 탭과 좁은 화면 배치.
- `data/features/index.ts`:27시스템/150버전별 항목. 기억 v1의14항목과 v2/v3 각6개 제안.
- `scripts/test-academy-memory.mjs`, `test-academy-memory-browser.mjs`, `package.json`: 계약 검사·장기 통합/시간 재현·핵심 UI 명령.
- 기존 도감 브라우저 검사: 기존 시나리오를 유지하고 전체 탭 수 기대값만21로 갱신했다. 상호작용 카탈로그는23종이다.

## 동작과 API

`createNpcMemoryEngine(motivation, relationships, effects, interactions, options)`가 공통 시계·현재 활동·실제 위치·관계·목표를 읽는다. 위치/욕구를 기억 상태에 중복 저장하지 않는다.

`recordMemoryFromEvent`는 현재 발생한 사건만 관찰한다. 참여자는 직접 경험, 공개 사건의 정지·비수면 인물은 시드 기반 주의 판정으로 목격한다. 원격 NPC에게 복제하지 않는다. 과거 사건 재생은 저장된 당시 관찰 대상을 사용한다.

`getCharacterMemories`, `getRelevantMemories`, 인물/장소/분류 검색, `getKnownClaims`, `getBeliefAboutTopic`, `getNpcKnowledgeContext`는 소유자의 지식을 조회한다. `recallMemory`는 강화하고 `forgetMemory`는 접근 불가 상태로 표시하며 기존 관계·XP·카르마 효과를 재적용하지 않는다.

`shareInformation`은 실제 상호작용 요청이다. 수락·공동 대화 완료 후에만 보유 정보·신뢰·비밀·성향·위험·계보를 검사해 공유하거나 보류한다. `evaluateInformationTrust/Sharing`으로 판정을 미리 확인할 수 있다. 질문/확인은 상대가 아는 주장에 대한 응답이며 객관적 진실 조사기로 구현하지 않았다.

공개·제한·개인 비밀을 구분한다. 들은 정보는 출처 인물과 최대8명 계보를 갖는다. 잘못된 승자/심각도/시간/확신도 소문은 별도 주장이고 실제 사건 원본을 수정하지 않는다. 직접 기억과 모순되는 소문은 확신도를 낮춘다.

망각은 마지막 강화 시각 기준의 지연 계산이다. 인물당128개, 중요한 기억 상위32개 우선 보존, 일일 정리와14일 사건 중복 키를 사용한다. 소문을 정리해도 아직 참조되는 원본 사실은 남는다. 정리 이력과 중요 기억 초과 정리 수를 별도로 표시한다.

AI는 관련 자기 기억으로 점수를 최대±12 보정한다. 자기 정보와 현재 인지 가능한 상대만 정보 후보로 사용한다. 회상·후보 조회로 목표를 완료하거나 사건 효과를 재적용하지 않는다.

## 저장과 격리

`npc-memory-v1`에 기억·주장·사실·당시 관찰자·확신·비밀·출처·강화 시각·중복 키·전달 이력·시드·진단을 저장한다. 검증 후 교체하며 인덱스를 재구축한다. 기존 `ai-sandbox-v1`에 선택적인 `knowledge`를 추가해 이전 저장은 빈 기억부터 시작한다.

일반 캐릭터 UI에서는 내부 기억을 노출하지 않고 개발자 모드만 표시한다. 도감 테스트는 실제 엔진 조합의 별도 복제본이다. 초기화·닫기·JSON 교체로 원본 세계를 변경하지 않는다. 캠페인 영구 저장 슬롯은 기존 프로젝트에 없으므로 구현된 것으로 표시하지 않았다.

## 검증 결과

시드 `memory-month`,3학년 범재 검술 생도100명으로 실제 AI·일과·이동·욕구·관계·상호작용·결과를 함께30일 진행했다. 매일 세계 시각과 장소 참조, 인물별 기억 한도를 검사했다. 최종 통합 JSON을 새 샌드박스에 불러온 기억 데이터도 원본과 일치했다.

| 항목 | 실측 |
| --- | ---: |
| 기억·상호작용·결과 엔진 오류 | 0 |
| 누적 기억 생성 | 253,801 |
| 직접 / 목격 / 전해 들음 | 67,843 / 184,858 / 1,100 |
| 최종 보유 기억 | 12,800 (인물당 최대128) |
| 활성 / 흐릿함 / 자연 망각 상태 | 8,706 / 3,076 / 1,018 |
| 누적 정보 전달 / 공유 보류 | 1,418 / 631 |
| 시드 기반 소문 왜곡 | 16 |
| 보존 정리 / 그중 중요도75이상 초과 정리 | 241,001 / 1,180 |
| 보유 주장 / 원본 사실 / 중복 처리 키 | 8,359 / 8,350 / 26,145 |
| 보유 전달 이력 | 2,000 (상한) |
| 실제 완료 상호작용 / 결과 적용 | 5,352 / 42,110 |
| 실행+최종 저장·복원 | 8,996.90초 (약150분) |
| 통합 JSON 크기 | 90,738,165바이트 (약90.7MB) |
| 종료 시 프로세스 JS heap | 1,023MiB |

`shared`는 고유 주장/보유자 수가 아닌 누적 전달이다. `forgotten=0`은 명시적 망각 조작 건수이며 자연 망각 상태1,018개와 구분한다. 모든 중요한 기억을 영구 보존하지 않는다. 인물당128개 안에서 상위32개를 우선 보호하고 초과 중요 기억도 정리하며 이를 숨기지 않는다.

시간은 실제 통합 실행과 마지막 저장·복원을 포함하며, 최초 생성/선행 단위 테스트는 제외한다. 일부 빌드와 검사를 병행했으므로 독립 하드웨어 벤치마크가 아니다. JSON은 세계·관계·일과·욕구·AI·효과 원장·상호작용·기억 전체이며 기억만의 크기가 아니다. Heap은 단위 fixture와 복원 사본도 포함한 종료 시 사용량이고 최고 사용량은 측정하지 않았다.

안정성은 확인했지만100명 장기 고속 진행의 연산 비용과 저장량이 크다. 다음 성능 작업에서는 읽기 전용 인물/후보 조회, 결과 트랜잭션 스냅샷과 원장 표현, 배치 실행의 Worker 분리를 실측해야 한다. 현재 UI는 구간 사이에 렌더링을 양보하며 Worker 실행은 구현하지 않았다.

- 기억 계약: 참여·목격·수면/원격 제외, 기존 관찰 자격, 출처 계보, 실제 완료 대화 전달, 비밀 거절/공유, 잘못된 승자와 원본 사실 분리, 모순·신뢰, 질문/확인/정보 부재, 회상 무보상, 망각, 한도·인덱스, 잘못된 저장의 원자적 거부, 최선 출처 전달, 미등록 실행기 차단 통과.
-3명 자정 경계의 분 단위/일괄 진행, 최적화 켜기/끄기 스냅샷 비교 통과. 별도1명30일을1분×43,200회와30일 한 번으로 진행해 **전체 통합 스냅샷**이 일치했다.100명30일을 두 방식으로 반복한 검사로 표현하지 않는다.
- 일반 인물 UI가 기억을 읽지 않는 SSR 검사, 기억 도감/팝업·실제 정보 대화·모바일·JSON·초기화/원본 격리 브라우저 검사 통과.
- 기존 상호작용 단위/UI, AI 변경 범위 단위/UI(`AI_SKIP_BATCH=1`), 욕구·목표, 일과표, 장소, 캐릭터, 시간, 기능 노트 검사 통과. 기존 검사·CI 시나리오를 삭제/축소하지 않았다.
- 타입 검사·변경 범위 ESLint·전체 빌드 통과. 최종 루트 재빌드와 OG/배포 출력 검사에서38프로젝트·39OG페이지·181로컬 참조를 확인했다. 기존 `.animate-*` CSS 경고와 큰 청크 경고는 남아 있다.
- 장기 정상 사건 실행 뒤, 완료되지 않은 정보 대화의 위조 완료 알림이 기억을 만들거나 정보를 전달하지 못하도록 입력 검사를 앞단으로 옮겼다. 정상 경로는 유지하고 관련 계약·실제 정보 대화 UI·30일 시간 재현·타입/빌드를 다시 확인했다.
- 전체 게임 브라우저 회귀, 최고 heap, 브라우저 프레임 시간은 실행/측정하지 않았다. 변경 범위와 요청된 통합 시뮬레이션에 검증을 집중했다.

전체 원시 집계와 검사 범위는 [verification.json](verification.json)에 기록했다.

## 남은 범위

- 자연어/LLM 대화·사고, 의도적 거짓말, 고급 추론·진실 조사, 인상/평판, 조직 정보망, 장기 성격 변화는 후속 버전이다.
- 현재 명시적 의식 상태 모델은 수면/이동만 제공한다. 추가 의식·시야 규칙은 `canPerceive` 어댑터로 연결한다.
- 기억 저장량은 제한한다. 모든 중요한 경험을 영원히 저장하는 아카이브가 아니며 초과 정리도 계수한다.
- 직접 시간 설정은 중간 생활을 실행하지 않는다. 과거 복원은 전체 JSON/초기화로 수행한다.
- 테스트용 수동 믿음은 공식 세계 사건을 만들지 않는다. UI에서 이를 명시한다.
- 저장·진단 API는 로컬 개발 도구이며 서버 권한·암호화·플레이어 지식 시스템을 대체하지 않는다.


## 전체 변경 파일

- `package.json`
- `scripts/test-academy-ai-browser.mjs`
- `scripts/test-academy-character-browser.mjs`
- `scripts/test-academy-impact-browser.mjs`
- `scripts/test-academy-interactions-browser.mjs`
- `scripts/test-academy-interactions.mjs`
- `scripts/test-academy-knowledge-browser.mjs`
- `scripts/test-academy-memory-browser.mjs`
- `scripts/test-academy-memory.mjs`
- `scripts/test-academy-morality-browser.mjs`
- `scripts/test-academy-motivations-browser.mjs`
- `scripts/test-academy-organizations-browser.mjs`
- `scripts/test-academy-relationships-browser.mjs`
- `scripts/test-academy-schedules-browser.mjs`
- `scripts/test-academy-social-browser.mjs`
- `scripts/test-academy-status-browser.mjs`
- `scripts/test-academy-time-browser.mjs`
- `src/AcademySurvival/AGENTS.md`
- `src/AcademySurvival/AcademySurvival.css`
- `src/AcademySurvival/AcademySurvival.tsx`
- `src/AcademySurvival/README.md`
- `src/AcademySurvival/components/AiProvider.tsx`
- `src/AcademySurvival/components/CharacterMemoryPanel.tsx`
- `src/AcademySurvival/components/CharacterStatusPanel.tsx`
- `src/AcademySurvival/components/MemoryCatalog.tsx`
- `src/AcademySurvival/components/MemoryTester.tsx`
- `src/AcademySurvival/data/actionEffects/README.md`
- `src/AcademySurvival/data/actionEffects/config.ts`
- `src/AcademySurvival/data/ai/README.md`
- `src/AcademySurvival/data/features/README.md`
- `src/AcademySurvival/data/features/index.ts`
- `src/AcademySurvival/data/interactions/README.md`
- `src/AcademySurvival/data/interactions/index.ts`
- `src/AcademySurvival/data/memory/README.md`
- `src/AcademySurvival/data/memory/implementation-report.md`
- `src/AcademySurvival/data/memory/index.ts`
- `src/AcademySurvival/data/memory/verification.json`
- `src/AcademySurvival/systems/actionEffects.ts`
- `src/AcademySurvival/systems/aiSandbox.ts`
- `src/AcademySurvival/systems/interactions.ts`
- `src/AcademySurvival/systems/locationWorld.ts`
- `src/AcademySurvival/systems/memoryPresentation.ts`
- `src/AcademySurvival/systems/motivationEngine.ts`
- `src/AcademySurvival/systems/npcAi.ts`
- `src/AcademySurvival/systems/npcMemory.ts`
- `src/AcademySurvival/types/actionEffects.ts`
- `src/AcademySurvival/types/interaction.ts`
- `src/AcademySurvival/types/memory.ts`
- `src/AcademySurvival/types/npcAi.ts`
