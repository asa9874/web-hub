# NPC 상호작용 v1 + 행동 결과·효과 v1 — 구현 보고

## 결과

18종 상호작용, 11종 공통 효과 타입, 17종 도메인 사건, 22종 공통 활동을 사용한다. 설정집20탭과 기능 노트26시스템/124버전별 항목으로 확장했다. 기존 제국력·이동·일과·욕구·목표·방향성 관계·시드 RNG를 재사용한다. 두 신규 도감은 간결한 카드 → 재사용 상세 팝업 → 실제 엔진 샌드박스 흐름이다.

## 엔진과 데이터

- `types/interaction.ts`, `data/interactions/index.ts`, `systems/interactions.ts`: 18종 정의, 대상 선정, 수락·거절, 공유 상태 머신, 공동 활동 완료/중단, 간이 결과 판정.
- `types/actionEffects.ts`, `data/actionEffects/config.ts`, `systems/actionEffects.ts`: 효과 유니언, 완료 성장 프로필, 사전 검증·미리보기·실제 적용, 잔여 XP, 원장, 도메인 사건.
- `systems/domainTransaction.ts`: 동기식 커밋/롤백과 커밋 후 구독자 알림. 원본 상태가 절반만 보이는 것을 방지한다. 이미 완료된 커밋의 구독자 오류는 재적용 사유가 아닌 별도 진단이다.
- `npcAi.ts`는 주입한 상호작용 엔진에 사회 후보·요청·공유 상태·통계를 위임한다. 기존 사회 실행기와 중복 처리하지 않는다.
- `npcSchedules.ts`는 승인된 자율 의도·실제 실행 변경 조회·소유자 확인 종료를 제공한다. `motivationEngine.ts`는 실제 목표 완료 구독과 결과 반영 후 재판정을 제공한다. 능력/관계/욕구 계산기를 재작성하지 않았다.
- `aiSandbox.ts`는 세계·실행·관계·욕구/목표·AI·상호작용·효과/성장 시드를 같이 복원한다. 생성기에서 성장 유형을 선택적 공통 Character 필드로 보존한다. 기존 고정 설정 파일은 바꾸지 않았다.

각 API·상태 전이·상한·저장/보존 계약은 [상호작용 계약](README.md), [효과 계약](../actionEffects/README.md)에 정리했다.

## 실제 동작

같은 장소에 정지한 두 인물만 제안할 수 있다. 중요한 일정·수면·업무·출입·피로·중복 참여를 검사하고, 1분 뒤 상대의 독립적인 방향성 감정·욕구·성향·빈도와 시드로 수락을 결정한다. 거절 자체에는 관계 벌점이 없다. 회피는 상대의 동의를 요구하지 않는 일방적 비접촉 행동이다.

양쪽이 하나의 인스턴스와 각자의 실제 일정 실행을 사용한다. 실제 완료 증거를 확인해야 결과를 지급한다. 중단 시 전체 완료 XP를 주지 않는다. 대화/공감/협력/갈등/회피/간이 경쟁 결과를 처리한다. 대련은 능력·검술 경지·피로·시드 기반 승패이며 영향력이나 kind 보정을 쓰지 않는다.

시간 기반 욕구 변화는 기존 엔진만 적용하고 완료 시 중복 회복하지 않는다. 완료 XP는 별도의 임시 버전 규칙으로 실제 능력치/경지를 갱신한다. 카탈로그 XP 임계값 null과 특성 진화 규칙은 보존한다. 방향별 관계 변화는 하루 지표별 절대12 한도와 친밀도 감쇠를 적용한다. 표시 목표 진행도100만으로 미구현 사건을 달성하지 않는다.

결과 ID+지문으로 중복 보상을 차단하고 저장 후에도 유지한다. 같은 템플릿의 완료 ID는 캐릭터 ID까지 포함한다. 키 보존14일·30,000개, 사건 표시5,000개·결과 표시1,500개와 누적 통계를 분리한다. 자원은 실제 시스템이 없어 명시적 미지원 오류로 반환한다.

## 100명·7일 실측

시드 `interaction-week`, 제국력427년3월1일19:00부터10,080분. 코호트는3학년 검술 전공 범재100명이며 이름·성향·특성·기프트·인맥·목표와 개인 편차는 실제 생성기 규칙이다. 여러 전공/학년/성장 유형 생성 자체는 기존 NPC 생성 단위 검사로 별도 확인했다.

| 항목 | 실제 결과 |
| --- | ---: |
| 요청 | 1,406 |
| 수락 / 거절 | 687 / 719 |
| 완료 / 중단 / 종료 시 진행 중 | 641 / 44 / 2 |
| 상호작용 실패 | 0 |
| 효과 결과 적용 / 적용 실패 | 9,518 / 0 |
| 방향별 관계 지표 변화 | 1,380 |
| 숙련 XP 지급 / 실제 경지 상승 | 1,178 / 33 |
| 능력치 XP 지급 / 실제 수치 상승 | 1,659 / 100 |
| 실제 수치가 성장한 인물 | 99명 |
| 목표 완료 / GoalCompleted 사건 | 93 / 93 |
| 누적 도메인 사건 | 45,748 |

유효 위치·이동 중 공동 활동 금지·활성 중복 참여 없음·욕구0~100 정수·경지0~9·세계 시간 정확한 증가·누적 집계를 검사했다. [전체 실측 JSON](verification.json)에 종류별 요청 분포와 실제 욕구/목표 통계를 보관했다. 과거 원장은 표시 이력 한도로 일부 생략되므로 누적 건수와 구분한다.

평균 허기61.31/피로13.73/수면60.33/사회88.12/오락99.03/성장22.85. 긴급 욕구를 하나 이상 가진 인물98명이고 목표 실패72개가 남았다. 이는 효과 적용 오류와 별개인 초기 AI 우선순위·활동 시간·목표 기한의 밸런스 과제다. 모든 욕구가 자동으로 충족된다고 보고하지 않는다.

## 실행한 검증

- `npm run test:academy-interactions` 통과: 18종 실제 제안/수락 또는 거절/완료, 전이·공유 예약·이동/원격 거부·중단, 효과 미리보기·원자성·고의 커밋 실패 롤백·커밋 후 구독자 오류, 잘못된 참조/대상/방향, XP 상한/경지 감쇠·각 NPC 완료 보상, 방향성 관계/일일 한도, 실제 상태/도덕/카르마/전용 효과, 목표 실제 조건, 중복/저장·실행 중 이어 진행, 작은/큰 시간 진행과 통합 AI 어댑터 재현성.
- `INTERACTION_BATCH=1 INTERACTION_COUNT=100 INTERACTION_MINUTES=10080` 통합 검사 통과. 이후 실패 기록·소유자 종료·입력 경계의 보강은 해당 단위 검사로 확인했으며 통과한 7일 분포를 이유 없이 반복하지 않았다.
- `test:academy-character`, `test:academy-npc`, `test:academy-locations`, `test:academy-relationships`, `test:academy-schedules`, `test:academy-motivations`, `test:academy-features` 통과. 기존 일과/욕구 검사의10/50/100명·주간 시나리오도 그대로 수행했다.
- `AI_SKIP_BATCH=1 npm run test:academy-ai` 통과: 기존 AI 의무/긴급·인지·출입·사회 거절·행동 지속·저장·6시간 분할 일치. 기존 AI의 장시간 대량 검사는 이번 신규 통합100명·7일 검사와 중복되므로 재실행하지 않았다.
- `test:academy-interactions-browser`, `test:academy-ai-browser` 통과. 도감/팝업/생성/준비/요청/시간/미리보기/실제 적용/중복/실패/성장 상세/JSON/390px/초기화/종료 원본 보존. 신규 도감 카드와 팝업의 실제 화면도 확인했다.
- TypeScript, 변경 핵심 모듈 ESLint, `git diff --check` 통과. `npm run build` 전체 프로젝트 빌드 및 최종 변경 후 루트 재빌드/OG 재생성/산출물 참조 검증 통과. 38프로젝트·39OG페이지. 기존 `.animate-*` CSS 구문과 큰 청크 경고는 남아 있다.
- 기존 브라우저 검사의 탭 수 기대값만18→20으로 갱신했다. 시나리오·CI는 삭제/축소하지 않았다. 그 외 게임의 장시간 전체 브라우저 회귀는 변경 범위 밖이라 실행하지 않았다.

## UI·확장 범위

`InteractionCatalog`, `InteractionTester`, `CharacterOutcomePanel`을 공통 팝업과 상태창에 연결했다. 테스트 화면에서 AI를 끈 수동 준비 또는 실제 AI 자동 실행,10/50/100명 생성, 시간 진행, 인물 선택·욕구/목표 조작, 결과 비교·실제 사건 필터, 원본과 독립적인 저장/복원을 제공한다. NPC 내부 성장·상호작용 정보는 개발자 모드에서 열람한다.

상세 대화 문장·기억/소문/정보, 만남 예약·다자간 활동·복잡한 협상/정치, 정식 전투/부상·자원, 세계 이벤트 발동/선택지·캠페인 영구 슬롯은 구현하지 않았다. 기능 노트의 해당 v2/v3 항목은 제안이다. AI 초기 밸런스와 고급 성장 규칙은 후속 조정 지점이다.

## 추가·수정 파일

- `package.json`
- `scripts/test-academy-ai-browser.mjs`
- `scripts/test-academy-character-browser.mjs`
- `scripts/test-academy-features.mjs`
- `scripts/test-academy-impact-browser.mjs`
- `scripts/test-academy-interactions-browser.mjs`
- `scripts/test-academy-interactions.mjs`
- `scripts/test-academy-knowledge-browser.mjs`
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
- `src/AcademySurvival/components/CharacterOutcomePanel.tsx`
- `src/AcademySurvival/components/CharacterStatusPanel.tsx`
- `src/AcademySurvival/components/InteractionCatalog.tsx`
- `src/AcademySurvival/components/InteractionTester.tsx`
- `src/AcademySurvival/data/actionEffects/README.md`
- `src/AcademySurvival/data/actionEffects/config.ts`
- `src/AcademySurvival/data/ai/README.md`
- `src/AcademySurvival/data/features/README.md`
- `src/AcademySurvival/data/features/index.ts`
- `src/AcademySurvival/data/interactions/README.md`
- `src/AcademySurvival/data/interactions/index.ts`
- `src/AcademySurvival/data/interactions/verification.json`
- `src/AcademySurvival/data/motivations/index.ts`
- `src/AcademySurvival/data/schedules/README.md`
- `src/AcademySurvival/data/schedules/index.ts`
- `src/AcademySurvival/systems/actionEffects.ts`
- `src/AcademySurvival/systems/aiSandbox.ts`
- `src/AcademySurvival/systems/domainTransaction.ts`
- `src/AcademySurvival/systems/interactions.ts`
- `src/AcademySurvival/systems/locationWorld.ts`
- `src/AcademySurvival/systems/motivationEngine.ts`
- `src/AcademySurvival/systems/npcAi.ts`
- `src/AcademySurvival/systems/npcGeneration.ts`
- `src/AcademySurvival/systems/npcSchedules.ts`
- `src/AcademySurvival/systems/relationships.ts`
- `src/AcademySurvival/types/actionEffects.ts`
- `src/AcademySurvival/types/character.ts`
- `src/AcademySurvival/types/interaction.ts`
- `src/AcademySurvival/types/npcAi.ts`
- `src/AcademySurvival/data/interactions/implementation-report.md` (이 보고서)
