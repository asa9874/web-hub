# 아이템·인벤토리·장비·선물·유물 v1

2026-10-25. 기존에는 실제 소유권/장비/상점 재고 엔진이 없었다. 기존 전투 자원·판정·효과 트랜잭션·생활 활동·방향 관계·개인 문화 선호·도메인 사건/기억·세계 사건·통합 저장·격리 시뮬레이터를 재사용했다. 별도 시계·NPC 전용 인벤토리·화폐 경제는 만들지 않았다.

## 구현

- `types/item.ts`, `data/items/{index,events}.ts`, `systems/items.ts`: 정의100종과 단일 실제 원장, 9등급,4품질,0~100상태/명성,고유성/생성 상한. 등급별 정의30/22/18/12/9/5/3/1/0. 기본 지급은 일반5종이고 신화/전설 자동 생성은0개다. 기본 NPC 검사에서는 실제 고급 이상도0개다.
- 물리 위치는 휴대/착용/시설/지면 중 하나, 소유자와 대여 점유자는 별개다. 본인 물건만 장비·보관·소비하며 시설 위치/개인·소속 권한을 검사한다. 보관함에 접근하려면 실제 장소로 이동해야 한다. 중복 제안 예약·수량 분할·병합·출처·양손 충돌/8슬롯·용량/무게 제한을 검증한다.
- `use/equip/unequip/store/recover/discard/merge/propose/respond/appraise/awaken`과 조회 API는 같은 엔진을 쓴다. 사용·선물·반환·각성은 기존 효과 엔진의 동기 트랜잭션 참가자로 원장과 효과를 함께 커밋/복구한다. 미리보기·장비 조회는 RNG나 자원을 쓰지 않는다.
- 장비의 점수 보정은 최대6점이며 기존 최종±15점 상한 안에 포함한다. 실제 전투·감정·개발 확률 조회와 연결했다. 회복약은 기존 HP/MP 어댑터, 음식은 욕구 효과, 교재/도구는 실제 완료 학습/생활 성장 보조5%로 동작한다. 읽을 때마다 책이 소모되지 않는다. 소비품 사용은 즉시 효과를 확정하고 일반 플레이는5분을 기존 세계 시계로 진행한다.
- 선물은 같은 장소의 실제 휴대품에만 제안한다. NPC 수락 판단은 대상→제공자 관계·개인 문화 선호·음식 필요·중복·부담을 읽는다. 종족 고정 취향은 없다. 상대별 보상7일1회와 공통 관계 일일 예산을 함께 지킨다. 플레이어 수신은 팝업에서 직접 수락/거절한다. 대여는 원소유자를 유지하고 전체 스택을 반환한다. 기한이 지났어도 원거리 순간 반환하지 않는다.
- NPC는 활동 시작/획득 준비 경계에서 자기 물건만 확인하고 착용·유한 소모·친구 선물·재회 반환을 처리한다. 매분 전체 소지품·전체 인맥을 돌지 않는다. 신규 NPC의 욕구 등록 이전에는 준비를 경계로 미뤄 기존 등록 순서를 보존한다. 고정 인물의 미확정 유품/가문 유물을 생성하지 않는다.
- `ItemChanged`는 실제 변경 뒤 개인/제한 범위로 발행한다. 당사자 기억과 정확한 결과 필터를 사용하는 세계 사건3종(선물에 담긴 의미/되찾은 유물의 연구 단서/별길 관측기의 봉인 해제)을 연결했다. 과거 회수 사실이 있다는 이유로 후일 감정을 새 발견으로 오인하지 않는다. 공공 전투에 실제 착용한 물건은 참가자별1회 이력·명성+1/상태-1을 반영하며 등급은 유지한다.
- 감정은 공통 관찰 판정이며 개인별 지식이다. 실패해도 정체가 공개되지 않고 하루1회만 시도한다. **봉인된 별길 관측기**1종만 각성 가능: 실제 심연 서고,마력 제어3 이상,룬 분말1개,본인 소유/감정 완료. 효과는 관찰 판정+3, ID/유물 등급은 유지한다. 조건·전용 효과는 일반 상세에 무단 공개하지 않는다. 다른 물건은 사용/명성으로 각성하지 않는다.
- `AiSandboxSave.items?`에 원장·제안/대여·발급/생성 상한·개인 감정·시드·준비 큐·이력·쿨다운을 저장한다. 구형 저장에는 자동 지급하지 않고 명시적 연결을 제공한다. 초기 지급은 멱등이다. LOD 원장 사본을 만들지 않는다.
- 상세 이력은 최근24건, 완료 제안/반환 기록256건이다. 소유자별 최초/최근 보유와 이전 횟수 요약·활성 대여·세계 유일 생성 원장은 남는다. 중요한 물건의 모든 과거 문장·연대기를 무한히 보관하는 시스템은 아니다.

## 화면과 조작

`InventoryPanel.tsx`, `Inventory.css`, `CharacterItems.tsx`: 상단 **소지품·장비**, 8슬롯/품목 그리드·분류/검색/정렬·상세 팝업·장비/사용/보관/회수/감정/해제, 캐릭터 상세의 관찰 가능한 장비. NPC 비공개 인벤토리는 일반 화면에 노출하지 않는다. 선물/양도/하루 대여/반환은 직전 작업의 공통 `npcActions` 메뉴 안에 통합했다. 별도 NPC 선택 화면을 만들지 않았다.

설정집 **아이템·장비**의 `[테스트]`는 기존 격리 세계 시뮬레이터를 연다. **아이템 관찰·실험** 탭에서 인물 선택/전체 실제 인스턴스/소유·장비·대여·등급·명시 지급·감정·소유권 검사를 수행한다. 시간/배치/초기화/JSON복원은 기존 시뮬레이터 기능을 재사용한다. 실제 슬롯은 변경되지 않는다.

## 검증과 제한

- `scripts/test-academy-items.mjs`:100종 분포/ID·생성 상한·양도/스택·실패 원자 복구·선물 거절/보상 제한·대여/반환/원격 방지·보관·양손/공통 보정 상한·실제 전투의 장비 적용/명성·감정 개인차/각성·잘못된 저장·구형 저장·실제 기억/세계 사건·LOD전환·10NPC60분 분할/일괄·중간 저장 일치·100NPC10분 전량AI 검사. 원본 `test-results/academy-items/final-contract.log`, `results.json`.
- `test-academy-items-browser.mjs`: 실제 착용/해제/사용·인물 상세 선물 메뉴·슬롯 저장/복원·개발자 지급 격리·모바일 가로 넘침/런타임 오류. 스크린샷 `test-results/academy-items/{inventory,item-detail,mobile}.png`.
- 초기 관련 회귀검사에서 등록 순서 오류를 발견해 수정했고 학사만 먼저 재검증했다(`academics-recheck.log`). 남은38개 headless/타입/빌드 검사는 `regression-remaining/report.json`, 예약 시계/이동/욕구/AI/상호작용/세계 사건/분할/복원/하루9개 시나리오는 `scenarios/report.json`에 별도 기록한다. 이전 검사나 건너뛴 검사를 이번 통과로 합산하지 않는다.
- 100NPC 단기 검사는 생성 제외 Node 엔진 단일 표본,플레이어1명 추가,현재 LOD정책·AI 활성이다. 전원 강제0단계/7일 성능 결과가 아니다. 실제 시간/물량/아이템 원장 JSON크기는 `results.json`에 기록한다. 505개 인스턴스(수량808개)가 생성 전후 유지되고 전설·신화0개다. 전체 저장 크기나 누수 없음의 장기 증명과 구분한다.
- 최종 단기 표본(Windows/Node22.18.0,seed `item-100-short`):10분 **978ms**,아이템 원장 JSON **291,383바이트**. 생성/브라우저 렌더 제외 단일 표본이며 평균/p95나 성능 목표 달성 결과가 아니다. 시간/장소/일과/욕구/AI/관계/상호작용/효과/기억/세계 사건/LOD/전투/아이템이 연결되며, 학사·기숙사·동아리 운영은 이 단기 fixture에서 활성화하지 않았다. 실제 게임의 모든 모듈 부하를 측정한 결과로 일반화하지 않는다. 전투 이력 원문과 소유권 요약을 분리하고 변경 아이템만 깊게 복사하는 트랜잭션 저널을 사용한다. 기존 전체 세계/효과 엔진의 구조적 성능 한계는 해결했다고 주장하지 않는다.
- 추가 확정 검증: 실제 아이템 사건3종의 결과 필터/전투 보정·1회 명성/상태/LOD 전환을 계약에 포함했고 최종 브라우저도 다시 통과했다. 기능 노트는42개 시스템/366개 항목으로 경로·상태·의존성을 검사했다. 최종 타입·Vite·산출물38개 프로젝트/187개 로컬 참조 검사도 통과했으며 기존 큰 청크 경고는 남는다.
-30/360일·10년 STRESS는 미실행. 새 누적 위험은 긴 상세 로그 대신 유한 발급/유한 재고·인덱스·요약 보존으로 제한하고 단기 불변식부터 검증했다. 기존 장기 검증 결과를 새 아이템 장기 통과로 재사용하지 않는다.
- **후속/부분 범위:** 상점/화폐/가격·도난/압수·경매·제작/강화, 범용 기술 해금/자원 소모 장비, 종족별 비인간형 체형 데이터, 개인 목표별 고급 장비 교체 평가, 원거리 물건 탐색/자동 운반/보관함 선택, 자동 대여 요청/약속 갈등, 생활 재료 레시피, 유물 역사 전문 감정/정보망, 모든 과거 이력 원문 보관은 미구현이다. 슬롯 허용 정책·기준 가치·명시적 생성/이전·구조화된 도메인 사건 API까지만 제공한다.

## 변경 경계

공통 수정: `aiSandbox/npcAi/worldSimulation`의 선택 모듈 연결, `actionEffects`의 선택적 트랜잭션 참가자/실제 활동 보조, `checks/combat` 장비 조회 어댑터, `npcMemory/worldEvents`의 실제 도메인 유형/정확한 트리거 결과 필터. UI는 `Gameplay/AcademySurvival/WorldSimulationPanels/CharacterStatusPanel/npcActions`에 연결했다. `types/{item,actionEffects,worldEvent,worldSimulation}`·기능 노트·검사 레지스트리·실제 카탈로그 수 검사를 갱신했다. 기존 시계/경로/전투 규칙·다른 변경을 되돌리지 않았다.

신규 파일 목록(저장소 루트 기준):

- `src/AcademySurvival/types/item.ts`
- `src/AcademySurvival/data/items/{index.ts,events.ts,README.md}`
- `src/AcademySurvival/systems/items.ts`
- `src/AcademySurvival/components/{InventoryPanel.tsx,Inventory.css,CharacterItems.tsx}`
- `scripts/test-academy-items{,-browser}.mjs`
- `docs/academy/ITEMS_V1.md`

수정 파일 목록(위 공통 수정 외 포함):

- `src/AcademySurvival/systems/{aiSandbox,actionEffects,checks,combat,npcAi,npcMemory,npcActions,worldEvents,worldSimulation}.ts`
- `src/AcademySurvival/types/{actionEffects,worldEvent,worldSimulation}.ts`
- `src/AcademySurvival/components/{Gameplay,WorldSimulationPanels,CharacterStatusPanel,CombatPanel}.tsx`, `src/AcademySurvival/AcademySurvival.tsx`
- `src/AcademySurvival/data/{worldEvents/index.ts,features/index.ts,worldEvents/README.md,actionEffects/README.md}`
- `scripts/{academy-validation-registry,test-academy-world-events}.mjs`, `package.json`
- `docs/academy/{PROJECT_CONTEXT,IMPLEMENTATION_STATUS}.md`
