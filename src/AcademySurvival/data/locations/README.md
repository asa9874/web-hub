# 장소·캐릭터 이동 v1

## 데이터와 상태의 경계

- `index.ts`: 실제 장소 **42개**, 이동 연결 **33개**. 세계 아래 제국·마계가 있고, 아카데미 교실/복도/기숙사 층·방과 마왕성 실내를 포함한다. 조직은 기존 실제 ID를 참조하며 조직 계층을 장소 계층으로 복사하지 않는다.
- `config.ts`: 버전 `location-v1`, 기본 보행 속도70m/분, 이동 방식·지형·AGI·상태 보정, 탐색 예산, NPC 초기 위치를 관리한다.
- 장소 정의에 인물을 저장하지 않는다. 활성 `Character.location`이 유일한 현재 위치의 원천이다. 기존 비활성/템플릿 레코드는 위치 미설정을 허용하고, 활성 세계 등록은 유효한 위치를 필수 검증한다.
- 실제 본게임/회차 저장은 아직 없다. 앱 세계는 메모리상의 플레이어 기준 인물과 세레나의 **고정 보유만** 복제한 개발 기준 인물을 등록한다. 세레나의 회차 랜덤 슬롯·미설정 성향은 추첨하지 않는다. 공통 상태창에 기준 미리보기임을 명시한다.

## 모듈

| 경로 | 책임 |
| --- | --- |
| `types/location.ts` | 장소/연결/출입 규칙/위치/구간 이동/로그의 공통 타입 |
| `systems/locationRegistry.ts` | 반복문 기반 계층 조회, 전체 경로, 부모/자식/깊이 및 초기 카탈로그 검증 |
| `systems/locationAccess.ts` | 시간·신분·소속·허가·공통 Condition과 AND/OR/NOT, 이동 가능 상태 및 배율 |
| `systems/locationRouting.ts` | 예상 통과 시각을 반영한 시간 라벨 Dijkstra, 경로/소요 시간/거부 사유 |
| `systems/locationWorld.ts` | 활성 캐릭터 복제 소유, 인원 조회, 이동 요청/취소/도착, 로그, 스냅샷 |
| `systems/locationInitialState.ts` | 본게임 이전 개발 기준 인물. 고정 인물 정의는 변경하지 않음 |
| `components/LocationWorldContext.tsx` | 기존 GameTimeProvider 시계를 사용하는 앱 세계 |
| `components/LocationCatalog.tsx`, `LocationTree.tsx`, `LocationDetail.tsx` | 장소 트리, 검색·조상 경로 확장, 재사용 상세 팝업/인원 조회 |
| `components/LocationTester.tsx` | 독립 시계·캐릭터 복제본을 사용하는 샌드박스 |
| `components/LocationCharacterDialog.tsx` | 공통 캐릭터 상태창 및 도감 참조를 임시 상태를 잃지 않고 왕복 |

## 엔진의 읽기 스냅샷

`getCharacterReadSnapshot(id)`는 인물 변경 전까지 재사용하는 깊게 동결된 분리 스냅샷이다. 읽기에만 사용한다. 이동·경유·도착·취소·배치·등록·인물 변경은 지연된 도메인 관찰자 알림보다 먼저 캐시를 무효화하며, 이전 스냅샷은 과거 값으로 남는다. 캐시는 저장하지 않는다.

`getCharacter/getCharacters/getCharacterLocation`의 기존 편집 가능한 복사 계약은 유지한다. 로컬 수정·편집·효과의 트랜잭션 백업은 해당 API를 사용한다. 내부 원본을 외부로 노출하거나 상태 변경 없이 공유 스냅샷을 수정하지 않는다. `npm run test:academy-read-snapshots`는 중첩 격리·커밋/롤백·인물별 무효화·이동 경계를 검사한다. 실측은 `docs/academy/PERFORMANCE_OPTIMIZATION_V1.md` 참고.

## 계층과 그래프

`createLocationCatalog(definitions, connections)`가 중복/자기 부모/미존재 부모/순환, 조직·달력·직급·특성 참조와 경로 수치를 거부한다. 조회는 임의 깊이를 지원한다. 정적 카탈로그 변경은 전체 재검증·교체로 한다. 자식을 가진 부모 삭제는 `canDelete`가 거부한다. 실제 삭제 기능은 없다. 캐릭터/이동 연결 참조를 이전하지 않은 장소 삭제도 허용해서는 안 된다.

장소의 포함 관계로 통행로를 자동 생성하지 않는다. `academy` 같은 범위 노드에는 직접 경로가 없으며 실제 이동은 정문/광장/건물 등 연결된 지점 사이에서 수행한다. 제국과 마계 사이 이동 수단은 정의하지 않았으므로 경로가 없다.

`findRoute(character, fromId, toId, departureMinute, mode, catalog)`는 경로별 예상 시각을 함께 탐색한다. 같은 노드에 더 이른 시각에 도착했다고 나중의 다른 경로를 제거하면 개방 시간을 놓칠 수 있으므로 시간 라벨을 구분한다. 양의 비용을 기준으로 가장 빠른 유효 경로를 반환한다. 대기를 대신하는 반복 순환 경로는 허용하지 않으며, 유한 단순 경로 탐색은20,000라벨/7일 예산 초과 시 명시적인 진단을 반환한다. 실패를 성공 경로로 꾸미지 않는다. 출입 조건 캐시는 사용하지 않는다.

## 시간 계산과 출입

각 구간 기본 비용은 `max(baseTravelMinutes, distanceMeters / 70)`이다. 여기에 이동 방식, 지형, 제한된 AGI(기준50, 최대±10%), 기존 상태 ID 보정을 곱한다. 동일 상태 중복 인스턴스는 배율을 중복 곱하지 않으며 팔의 골절을 보행 부상으로 취급하지 않는다. 비순간이동 구간 원시 비용은 최소1분이다. 구간마다 누적 원시 비용을 유지하고 누적 도착 시각을 올림하여 최종 합계가 `ceil(sum(cost))`가 되도록 한다.

기본 허용 수단은 도보다. 달리기·탑승·순간이동은 `movementModes` 자격과 연결의 `allowedModes`가 모두 필요하다. 현재 정식 데이터에는 도보/달리기 경로만 있고 기준 인물에게 추가 수단을 부여하지 않는다. 상태의 `BLOCK_ACTION` 및 하체/전신 `BODY_FUNCTION disabled`도 이동을 거부한다. 일반 보행에 관한 상태 상호작용 외에 탈것·의체 등의 복합 해석은 후속 어댑터에서 확장한다.

시간은 시작 포함/종료 미포함, 자정 횡단 지원이다. 연결과 새로 진입하는 장소/조상의 조건을 **해당 구간 출발 및 도착 시각** 모두 검사한다. 이미 체류 중인 상위 공간을 매번 재입장시키지 않으며 폐관 후 퇴장은 허용한다. 교수 신분은 관할 조직까지 확인하며 소속은 조상 조직을 인정한다. 성별은 기숙사 입장 판정에 사용하지 않는다.

승인된 이동의 속도/소요 시간은 예약 시 고정한다. 이동 중 자격·상태 변경은 다음 통과 조건을 재검사하며, 불가하면 마지막 정상 도착 장소에 정지한다. 이동 도중 속도를 재적분하거나 다른 길을 자동 선택하지 않는다. 동적인 통금·통로 변경도 도착 때 재확인한다. 수용 인원은 실제 도착 때 검사하며 동시 도착은 안정적인 등록 순서로 처리한다.

## 공통 API / 세계 시간

```ts
const world = createLocationWorld({clock, characters});
world.registerCharacter(generated.character); // 위치가 없는 활성 인물은 거부
world.findRoute(characterId, destinationId, 'walk');
world.requestMovement(characterId, destinationId, 'walk');
world.cancelMovement(characterId);
world.advanceTime(30); // 기존 단일 시계 API에 한 번만 위임
world.getCharacterLocation(characterId);
world.getCharactersAtLocation(locationId);
world.getCharactersInLocationTree(locationId);
world.getLocationPopulation(locationId); // direct / includingDescendants
world.getTravelers(locationId); // 정지 인원에서 제외된 이동자
world.updateCharacter(id, c => ({...c, accessPermissions: ['professor-office']}));
world.snapshot(); // version, absoluteMinute, deep-cloned characters
```

React·DOM·저장소에 의존하지 않는다. 인물별 시계 진행이나 매 프레임 위치 갱신이 없다. 세계 시계 변경 구간에서 도착 예정 구간만 시간순으로 처리하고 중간 경유를 생략하지 않는다. 로그도 예약 도착 시각으로 기록한다. `set/load/reset`은 일반 시간 진행과 구분하며 남은 이동을 취소한다. 시계 알림 안에서 전역 시간을 재진행하지 않는다.

스냅샷은 절대 분과 직렬화 가능한 캐릭터/이동 예약을 담는다. 조회/등록/스냅샷은 깊은 복제로 외부 객체 변경을 차단한다. 원본 캐릭터의 위치를 직접 바꾸는 `updateCharacter`는 거부한다. 회차 저장에 연결할 때 저장 버전, 참조 유효성, 예약 시각 정책을 검증하는 저장 어댑터를 별도 제공해야 한다.

## UI 및 샌드박스

설정집 → **장소** → **테스트**, 또는 `?view=location-tester`.

- 장소 검색은 일치 항목과 조상 경로를 표시한다. 노드명 선택/개별 접기 버튼을 분리하고 키보드로 조작 가능하다. 전체 펼치기/접기 제공.
- 도감 상세는 기존 요청대로 팝업이다. `LocationDetail`은 인게임에서도 같은 컴포넌트를 쓸 수 있다. 공통 캐릭터 상태창에서도 장소를 클릭해 상세를 확인한다.
- 테스트는 앱 세계의 스냅샷에서 **새 시계와 깊은 복제 인물**을 만들고, 같은 `createLocationWorld` 엔진을 호출한다. 원본과 저장소는 변경하지 않는다. 초기화는 진입 당시 스냅샷으로, 종료는 폐기한다.
- 플레이어/NPC 선택, 고정 인물 조회, NPC 검색,10명 생성(기존 시드 생성 엔진), 복수 선택·일괄 강제 배치·정상 이동, 개인별 경로/거리/소요 시간/예상 도착, 취소, 도착까지 세계 시간 진행을 제공한다.
- 개발 강제 배치는 `allowForcePlacement`로 생성한 샌드박스만 가능하며 경로/출입/수용 인원을 명시적으로 우회한다. 정상 세계 API는 거부한다.
- 교수 신분/연구실 허가/학생회 소속/기숙사 허가/마왕성 집무 허가와 탈진 상태를 샌드박스에서 시험할 수 있다. 출입 판단과 이동 비용을 UI에 복제하지 않는다.
- 장소/인물/도감 상세를 왕복해도 샌드박스를 유지한다. 날짜 설정,1·5·30분/1·6시간/1일 및 사용자 지정 진행, 최신1,000건 로그를 제공한다.
- NPC 생성 기본 위치는 프로필 설정의 생도 중앙광장/비생도 중앙시장이다. 새 생성 결과도 Character의 동일한 위치 모델을 사용하고 기존 NPC 테스트 표와 상태창에 표시된다.

## 검증 (2026-10-21)

- `npm run test:academy-locations`:36장소·27연결 데이터,1,200단계 계층, 부모/순환/참조/수치 오류, 최단·단방향·거리·지형·모드·상태·나중 도착 경로, 시간/신분/소속/허가/AND·OR·NOT/자정/도착 시각 조건, 이동·취소·경유·수용 인원·시간 되감기·날짜 경계·동시10명·대량 진행·깊은 복제·재현성 통과.
- `npm run test:academy-locations-browser`: 정상 이동 A, 시간 제한 B, NPC10명 생성·배치·동시 도착,30분 단일 진행, 상세 팝업 왕복,390px 레이아웃, 초기화/종료 격리 통과. 별도 변경 범위 브라우저 확인으로 교수/허가/학생회·실시간 자격 박탈·탈진 배율도 통과.
- 관련 `test:academy-npc`, `test:academy-character`, `test:academy-time` 통과. 기존 NPC1/10/50/100명, 고정 인물·양쪽 상태창 모드와 시드 재현성 유지.
- `npm run build` 통과: TypeScript 및 Vite,38개 프로젝트·39개 메타데이터/OG 페이지·181개 로컬 참조 검증. 기존 `.animate-*` CSS 선택자 및 큰 청크 경고는 남아 있다.
- 전체 게임 E2E/배포 회귀는 범위 밖이므로 실행하지 않는다. CI/기존 테스트는 유지한다. 기존 브라우저 테스트의 도감 탭 개수 기대값만 신규 장소 탭을 포함한13개로 갱신했다.

## 후속 확장

자율 일정/만남/사건은 장소 조회·예약 이동 API를 호출하는 별도 시스템으로 추가한다. 이동 그래프의 장거리 이동 수단, 대기·재탐색, 이동 도중 속도 재계산, 강제 퇴장, 날씨, NPC 과거 위치 이력, 공간 인덱스 및 실제 회차 저장은 아직 구현하지 않는다. 조직 영향력이나 도덕·성향을 이동 허가로 자동 해석하지 않는다.

일과표 v1은 공통 시계의 `subscribeTimeline` 우선0에서 이동을, 우선10에서 일정을 처리한다. 마법 훈련장·경비 초소·행정실·교직원 숙소·마왕성 식당/숙소6곳과 실제 연결6개를 추가했다. [일과 계약](../schedules/README.md) 참고.
