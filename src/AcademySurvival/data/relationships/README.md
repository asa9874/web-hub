# 인간관계 시스템 v1

## 데이터 계약

인간관계는 `Character` 정의와 분리된 **희소 방향 그래프**다. `RelationshipRecord`는 source/target ID, 호감·신뢰(-100~100), 친밀·존경·두려움(0~100), 관계 유형 ID 배열, 인지, 공개 범위, 출처, 선택적 절대 분 시각을 갖는다. 같은 방향은 하나만 저장하며 레코드가 없으면 관계 미형성이다. 자기 자신·미존재 인물·미존재 유형·중복 유형·소수/범위 밖 수치를 거부한다. `unknown`은 명시적으로 요청했을 때만 저장할 수 있으며 모든 낯선 인물 쌍을 미리 만들지 않는다.

기존 `Character.relationships`의 nullable `affinity`와 서술 문장은 호환용 기록으로 유지한다. 새 감정 수치로 변환하거나 새 그래프에 중복 저장하지 않는다. 기존 고정 캐릭터의 `targetRole`도 실제 캐릭터 ID로 임의 확정하지 않는다. 관계 그래프를 공통 상태창에 주입하거나 앱 컨텍스트를 통해 조회한다.

## 카탈로그 / 상호성

관계 유형 **50종**: 가족12·친분9·갈등6·사제/권력8·애정/혼인5·특수10. 요청 목록 외에 생명의 은인에 대응하는 역방향 **구명 수혜자**를 추가했다. 각 항목은 고유 설명·분류·태그·역방향 ID·대칭 여부·상호성 정책을 가진다.

- 유형명은 **출발 인물이 대상에게 갖는 역할·인식**이다. A→B 부모는 A가 B의 부모라는 뜻이다.
- 가족/입양/혼인, 합의된 연인, 사제·지휘 역할, 채권·채무, 공유한 방·학급·어린 시절, 공범·공통 비밀 등 사실 유형은 `reciprocity: required`다.
- 친구·절친·라이벌·원수·짝사랑·감시 등 인식은 `perceptual`이다. 역방향 정의나 `symmetric: true`만으로 상대에게 같은 인식을 강요하지 않는다.
- 필수 역방향 생성/수정/제거는 두 레코드가 모두 검증된 후 원자적으로 적용한다. 기존 반대편 감정·다른 인식 유형은 보존한다. 새 역방향 감정은 전부0이며 복사하지 않는다.
- 사실 유형을 제거하면 대응 역방향 유형만 제거한다. 자동 대응으로 생긴 레코드가 유형도 감정도 남지 않았을 때만 삭제한다. 독립적으로 작성한 반대편 기록은 남긴다.
- 공개 범위는 레코드 단위다. 사실 연결이 있으면 역방향도 같은 범위를 유지해 한쪽만 비밀을 누설하지 않도록 한다. 유형별 서로 다른 공개 범위는 후속 확장이다.

수치의 표시 기준은 `config.ts`에서 관리한다. 표시용 앵커이며 행동 AI나 성공 확률의 자동 보정으로 사용하지 않는다.

## 파일

| 파일 | 책임 |
| --- | --- |
| `types/relationship.ts` | 방향 레코드, 수치, 카탈로그, 생성 옵션, 로그 타입 |
| `data/relationships/index.ts`, `config.ts` | 50종 정의, 공식 수치 범위·앵커, 생성 밀도·접점/성향 보정 |
| `systems/relationships.ts` | 검증·희소 인덱스·원자 수정·가시성·통계·행동 시스템용 조회 |
| `systems/relationshipGeneration.ts` | 시드 기반 접점 후보 샘플링과 독립 감정 생성 |
| `components/RelationshipContext.tsx` | 활성 장소 세계의 캐릭터 ID/시각과 연결된 앱 그래프 |
| `components/CharacterRelationships.tsx` | 공통 상태창의 검색/유형 필터/전체 수치/대상 이동 |
| `components/RelationshipCatalog.tsx` | 수치 체계, 유형 분류·검색·팝업, 실제 활동 세계 관계 조회 |
| `components/RelationshipTester.tsx` | 실제 엔진을 호출하는 독립 샌드박스 |
| `components/LocationCharacterDialog.tsx` | 공통 인물 팝업에서 상대 인물/도감 왕복, 이전 인물로 돌아가기 |
| `components/NpcGenerator.tsx`, `systems/npcGeneration.ts` | 기존 Worker/일괄·단일 NPC 생성과 그래프 결과 연결 |
| `components/LocationTester.tsx` | 장소 샌드박스도 관계 복제본과 생성 결과 유지 |

그 밖에 Character의 선택적 `classId/specializationId`, NPC 배치 결과 타입, 루트 설정집 탭/테스트 경로, CSS와 검증 명령을 확장했다. 기존 브라우저 검사의 탭 개수 기대값은 새 탭을 포함한14개로 갱신했다. 기존 검사/CI를 삭제하지 않았다.

## 순수 API

```ts
const graph = createRelationshipGraph(characterIds, records, {now: () => absoluteMinute});
graph.createRelationship({sourceCharacterId: a, targetCharacterId: b,
  relationshipTypeIds: ['relation-friend'], affection: 25});
graph.getRelationship(a, b);
graph.getRelationshipsOf(a); // outgoing
// incoming 조회도 별도 제공
 graph.getMutualRelationship(a, b); // forward / reverse
 graph.updateRelationship(a, b, {trust: 40});
 graph.addRelationshipType(a, b, 'relation-rival');
 graph.removeRelationshipType(a, b, 'relation-rival');
 const change = graph.applyRelationshipDelta(a, b, {affection: 5, trust: -3}, '약속을 지킴');
 // change.adjustments: 각 수치의 requested / applied. 범위 제한을 숨기지 않음.
 graph.removeRelationship(a, b);
 graph.getFriendsOf(a);
 graph.getRivalsOf(a);
 graph.getHostileCharactersOf(a);
 graph.getTrustedCharactersOf(a);
 graph.getKnownCharactersOf(a);
```

직접 입력은 잘못된 값을 거부한다. 변화량 API만 명시적인 clamp를 수행하고 요청/실제 적용량을 반환·기록한다. 부모를 생성해도 자녀의 애정이 자동 증가하지 않는다. 수정 API로 인물 ID·출처·시각을 바꾸지 못한다. 시각은 주입한 게임 절대 분만 사용하고 현실 시각/Math.random에 의존하지 않는다. 생성 시각보다 과거로 수정하는 입력은 거부한다.

`getRecords()`는 정렬된 깊은 복제본이다. 초기 입력/조회/교체 배열을 외부에서 변경해도 그래프를 바꾸지 않는다. source→target Map과 incoming 인덱스를 사용하므로 캐릭터별 조회는 해당 인물의 연결 수에 비례한다. `setCharacterIds()`는 삭제된 캐릭터의 모든 방향 참조를 정리한다. `replaceRecords()`는 전체 검증 후 교체하며 잘못된 데이터는 기존 그래프를 변경하지 않는다.

친구/라이벌 조회는 해당 인식 태그를 사용하고, 적대 조회는 명시적 적대 유형 또는 호감 임계값, 신뢰 조회는 신뢰60 이상을 사용한다. `known`만 행동 후보에 포함한다. 결과는 방향 레코드이며 행동을 결정하거나 대화·추적·전투를 실행하지 않는다. 정보 공개 판정과는 별개인 엔진 내부 조회다.

## 초기 인맥 생성

`generateInitialRelationships(characters, options)`는 원본 캐릭터를 변경하지 않고 `{version, seed, records, consideredPairs, diagnostics}`를 반환한다.

1. 인물 ID 정렬, 기존 관계의 참조/상호성 검증.
2. 실제 직접/상위 소속, 실제 classId·homeLocationId, 정지 중 현재 장소, 실제 전공으로 후보 버킷 구성.
3. 확정 시드 우선 적용. 정식 세레나 관계는 미확정이므로 현재 `fixedRelationshipSeeds`는 빈 배열이다.
4. 인물별 독립 시드로 최대48명의 후보를 제한 샘플링. 일부는 낮은 확률의 무접점 후보다. 모든 N×N 조합을 순회하지 않는다.
5. 접점 확률에 같은 학년/전공/실제 특성/나이, 기존 성향·도덕·카르마·실제 직급의 영향력을 작은 편향으로 적용한다. 어떤 성향도 결과를 확정하지 않는다.
6. 기본 평균 목표6, 새 인맥 최대10명. 사교/은둔에 편차를 주고 양쪽 인맥 수를 검사한다. 기존에 더 많은 관계를 가진 인물은 보존하되 새 연결을 강제 추가하지 않는다. 평균0은 새 관계 생성을 하지 않는다.
7. 방향별 별도 난수로 감정과 인식을 만든다. 친구·지인·동료·경쟁, 허용 시 드문 적대·짝사랑을 지원한다. 같은 방/반 사실은 실제 ID가 있을 때만 대응 유형을 만든다. 가족·혼인·사제 등의 새로운 사실은 수동 등록 또는 확정 시드를 사용한다.

기본 친분 접점은 서로 알고 지내는 양방향 레코드를 만들되 감정·인식은 다르다. 한쪽만 아는 관계는 API/수동 테스트로 생성할 수 있다. 기존 관계와 확정 시드는 우선 보존하며 적대·연애 옵션은 새 무작위 관계에 적용한다. 허용된 연애 생성은 설정의 나이/나이 차이 안에서 일방 애정 인식을 만들며 연애 진행을 시뮬레이션하지 않는다.

NPC 프로필에서 이미 확정된 전공 ID를 Character에도 보관한다. 없는 반·거주지·개인사를 만들어 넣지 않는다. 의심 성향은 초기 신뢰, 경쟁 성향은 라이벌 가능성, 정의 성향은 실제 부정 카르마 상대에 대한 반감에 편향을 준다. 이는 초기 세계 구성용 확률이며 타인의 비밀을 알아내는 지식 엔진이 아니다.

`generateNpcs()`는 기존 캐릭터 결과와 별도의 `batch.relationships`를 반환한다. 기존 `generateNpc()`의 인덱스별 결과 계약은 보존한다. 단일 인물과 관계 결과가 함께 필요하면 `generateNpcWithRelationships()` 또는 count1의 배치 API를 쓴다. 기존 인맥까지 포함하려면 `context.relationshipCharacters/relationshipOptions.existingRecords`를 전달한다. 반대편 인물도 함께 전달해야 하며 없는 대상은 검증 오류다.

## UI / 공개 여부 / 격리

설정집 → **인간관계** → **테스트**, 직접 경로 `?view=relationship-tester`.

- 도감에는5수치의 범위/의미/앵커와50유형 검색·분류·역방향 상세 팝업이 있다. 현재 활동 인물을 선택해 관계를 조회한다.
- 공통 캐릭터 상태창은 상대 이름·유형·주요 수치와 전체 수치 펼침, 이름 검색·유형 필터, 상대 상세/이전 인물 이동을 지원한다. 간결한 팝업에서도 관계 목록이 보인다.
- **일반 보기는 public만 필터한 뒤 목록/필터를 만든다.** 비밀의 존재나 개수를 표시하지 않는다. 개발자 보기에서만 private/secret을 추가한다. 당사자의 인식과 플레이어의 지식은 다른 개념이다. `visibleRelationships`는 선택적으로 관찰자 자신의 발신 레코드를 허용할 수 있으나 향후 세밀한 정보 공개 어댑터가 필요하다.
- 테스트 진입 시 실제 활동 세계의 인물과 그래프를 깊은 복제로 격리한다.5수치/복수 유형/인지/공개 범위 생성·수정·삭제, 호감 변화량 적용과 요청량/실제량, 양방향 비교, NPC0/1/10/50/100명 추가, 시드/밀도/적대/연애/보존 옵션, 관계 통계, 로그, 초기화/종료를 제공한다.
- 통계는 실제 레코드에서 계산한다. 친구/라이벌/적대는 방향 레코드 수, 상호 관계는 양방향 레코드가 존재하는 쌍 수, 일방 관계는 반대 기록이 없는 레코드 수다. 감정 평균과 인물당 발신 관계 수를 표시한다.
- 테스트 기록은 실제 저장·활동 세계에 합치지 않는다. NPC 생성기와 장소 테스트도 각각의 임시 그래프를 사용한다. 실제 게임 저장 어댑터와 세계 초기화 파이프라인은 이 API를 나중에 호출할 수 있다.

## 검증 / 표본 (2026-10-21)

- `test:academy-relationships`:50종 정의·역방향·범위, 자기 자신/중복/미존재 ID 거부, 방향별 감정 독립, 부모↔자녀와 모든 필수 유형의 원자 정합성, 일방 애정·적대·신뢰 조회, 명시적 clamp, 삭제/참조 정리/복제/교체 실패 보존, 시드·입력 순서 재현성, 고정 시드 우선, 기존 관계 보존, 실제 반/방 접점, 기본 인물 종류 동등성, 비밀 정보의 일반/DEBUG 상태창 SSR 검증 통과.
- 100명 표본:742방향 레코드, 인물당 평균7.42명, 친구147방향·라이벌131방향·적대8방향·상호371쌍. 후보 판정967쌍. 호감13.11/신뢰16.12/친밀22.94/존경31.50/두려움9.12 평균. 기본 접점 생성은 양방향 인지이므로 이 표본의 일방 레코드는0이다.
- 1,000명 검사:7,562방향 레코드, 인물당 새 인맥10명 이하, 후보 검사 상한48N, 유효 참조·희소 구조 통과.
- `test:academy-relationships-browser`: 유형/수치 도감, 팝업, 방향 독립 수정, 사실 관계 대응, 비밀 범위, 명시적 clamp, 삭제, NPC100명 생성·통계·상대 팝업 왕복,390px·초기화·종료 격리 통과.
- 관련 `test:academy-character`, `test:academy-npc`, `test:academy-locations` 통과. 기존 장소 브라우저 시나리오 및 별도 NPC Worker 관계 전달/상대 이동도 확인했다.
- `npm run build` 통과: TypeScript·Vite 및38개 프로젝트·39개 메타데이터/OG 페이지·181개 로컬 참조 검증. 기존 `.animate-*` CSS 선택자와 큰 청크 경고는 유지된다.
- 전체 게임 브라우저 회귀검사는 실행하지 않는다. 변경하지 않은 전투·시간·영향력·성향·소속 엔진 자체를 불필요하게 반복 검사하지 않는다. 기존 NPC/캐릭터 검사의 실제 참조 검증을 통해 연동을 확인한다.

## 확장 경계

관계 엔진은 NPC 대화, 자율 인맥/연애 진행, 결혼·출산, 소문, 사건 해석, 기억, 감정의 자동 변화, 행동 AI를 구현하지 않는다. 미래 이벤트는 `applyRelationshipDelta`, 일과/행동 후보는 friends/rivals/trusted/known 조회와 장소 엔진의 직접 인원 조회를 조합한다. 공개 정보 정책은 별도 어댑터로, 실제 저장은 버전이 있는 세계 관계 배열로 연결한다. 관계 점수를 캐릭터 영향력이나 전투력에 더하지 않는다.
