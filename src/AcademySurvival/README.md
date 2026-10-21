# 아카데미에서 살아남기 — 설정집

본게임 이전 단계의 **실제 콘텐츠 정의와 열람 UI**다. 특성 405개, 기프트 403개, 특성 계열 49개, 공통 예정 이벤트 참조 21개를 포함한다. 검술·마법·신체뿐 아니라 성향/단점, 영향력 0의 일상 능력까지 직접 작성했다. 요소 영향력은 0~1,000으로 통일했으며 캐릭터 최종 영향력은 별도 버전 설정의 v1 순수 함수로 계산한다. 고유 요소 평가와 구분하며 원본 레코드에 저장하지 않는다.

설정집에는 **능력치 7종·숙련도 49종**도 포함한다. 능력치의 등급 설명 70개와 숙련도의 경지 설명 490개, 합계 **560개의 고유 문장**을 작성했다. 특성·기프트와 숙련도는 독립적인 정의다.

**상태 150종**과 별도 단계 설명 **38개**를 추가했다. 상태 정의와 적용 인스턴스를 분리하며, DEBUG에서 임시 적용·제거·단계/부위 변경·중복/충돌·효과 계산을 확인한다. [상태 데이터 및 적용 계약](data/statuses/README.md)을 먼저 읽고 확장한다.

고정 등장인물은 **세레나 1명**이다. 공통 `Character` 타입과 `CharacterStatusPanel`을 플레이어·랜덤 NPC·고정 인물 모두에 사용하며, 템플릿의 랜덤 슬롯은 결과를 정하지 않고 `?`로 표시한다. [캐릭터 데이터·상태창 인계](data/characters/README.md)에 재사용 방법을 정리했다.

직급·신분 **200종**, 칭호 **200종**을 추가했다. 모든 특성405개·기프트403개에도 버전이 있는 영향력 메타데이터를 적용했다. [사회적 요소·영향력 계약](data/social/README.md)에 분포와 보유/대표/마이그레이션 규칙을 정리했다.

## 실행

```powershell
npm ci
npm run dev
```

- 진입: `/web-hub/games/academy-survival/` → **설정집**. 허브 게임 목록에서도 이동한다.
- 도감 바로 가기: `/web-hub/games/academy-survival/?view=catalog`.
- 개별 항목: `?view=catalog&kind=gift&item=gift-world-small-error`. 선택/검색/필터/DEBUG가 URL에 남아 새로고침·뒤로가기·링크 복사를 지원한다.
- 능력치: `?view=catalog&kind=stat&item=STR`. 숙련도: `?view=catalog&kind=proficiency&item=proficiency-sword`. 기존 특성·기프트 URL은 그대로 유효하다.
- 상태: `?view=catalog&kind=status&item=status-rabbit-form`. `&debug=1`이면 원본 정의와 임시 적용 패널이 열린다. 임시 인스턴스는 페이지 새로고침 또는 DEBUG 종료 시 사라진다.
- 고정 등장인물: `?view=catalog&kind=character&item=fixed-serena`. DEBUG에서 공통 상태창의 실제 레코드 모드를 확인할 수 있다. 확인용 레코드는 회차 생성이나 세레나의 랜덤 결과가 아니다.
- 직급·신분: `?view=catalog&kind=position`. 칭호: `?view=catalog&kind=title`.
- 읽기 전용 콘텐츠 도감이다. 게임 플레이/날짜 진행/전투/실제 이벤트/성장 시뮬레이션/기프트 시너지를 제공하지 않는다.

## 파일 구조와 데이터 추가

| 위치 | 책임 |
| --- | --- |
| `types/index.ts` | Trait / Gift / Effect / Condition / Evolution / EventReference / SpecialRule |
| `data/traits.ts` | 특성별 이름·고유 설명·효과, ID 기반 진화 경로와 분기 |
| `data/gifts.ts` | 기프트별 콘셉트·발동 조건·효과·제약·영향력 |
| `data/config.ts` | 분류·49계열·희귀도 가중치·시작 개수 분포·계열별 효과 튜닝·공통 배율 |
| `data/factories.ts` | 타입이 있는 효과 작성 헬퍼, 공통 기본값, 고유 규칙 등록 |
| `data/events.ts` | 21개 **예정 이벤트**의 ID·태그·조건 |
| `data/ruleLabels.ts` | 고유 규칙의 기계용 타깃과 한국어 표시명 매핑 |
| `systems/registry.ts` | 레지스트리, 시스템 설명 생성, 예정 이벤트 ID/태그 자동 연결 |
| `systems/probability.ts` | 적격성·상호 배타·가중치 정규화, 비복원 시작 추첨 |
| `systems/conditions.ts` | 공통 조건 AST 해석. 능력치/플래그/태그/특성/AND/OR/NOT |
| `systems/effectResolver.ts` | 효과 중복 방지, 단위별 누적·배율 계산, 조건부 해금/고유 규칙 전달 |
| `systems/validation.ts` | 데이터 수·중복·참조·진화 DAG·확률·효과·이벤트 검증 |
| `components/` | ID 기반 분기 트리, 공통 상세, DEBUG 원본/해석 결과 |
| `types/knowledge.ts` | 능력치·숙련도 정의 및 실제 캐릭터 보유 수치의 별도 타입 |
| `data/knowledge/config.ts` | 공통 등급 범위·경지 이름·분류, 미확정 경험치 설정 |
| `data/knowledge/stats.ts` | 기본 능력치 7종과 개별 등급 설명 70개 |
| `data/knowledge/proficiencies*.ts` | 7개 대분류, 49개 기술 및 개별 경지 설명 490개 |
| `systems/knowledgeRegistry.ts` | 정의 조회, 수치별 등급, 실제 효과·예정 이벤트 참조 |
| `systems/knowledgeValidation.ts` | 범위·순서·중복 문장·참조·데이터 수 검사 |
| `components/KnowledgeCatalog.tsx` | 능력치·숙련도 검색/분류/경지 읽기/상세/DEBUG |
| `types/status.ts` / `data/statuses/` | 상태·단계·부위·지속·충돌·효과·조건부 변화 경로 |
| `systems/statusRegistry.ts` / `statusValidation.ts` | 150종 레지스트리·실제 예정 이벤트 참조·정의 검증 |
| `systems/statusApplication.ts` | 임시 인스턴스 검사·변경·충돌·부위별 효과·행동 금지 |
| `components/StatusCatalog.tsx` / `StatusTester.tsx` | 상태 탐색/상세/관계 및 DEBUG 임시 테스트 |
| `types/character.ts` / `data/characters/` | 공통 Character·고정 템플릿·미확정 슬롯·세레나 |
| `data/characterContent.ts` | 정식 추가 특성 1개·기프트 3개 (공통 도감에 등록) |
| `systems/characterRules.ts` / `characterValidation.ts` | 읽기 전용 슬롯 적격성·가중치/중복/참조 검사 |
| `components/CharacterStatusPanel.tsx` / `FixedCharacterCatalog.tsx` | 공통 2모드 상태창·고정 인물 목록 |

새 항목은 대응 데이터 파일에서 헬퍼로 작성한다. ID는 이름 변경 시에도 유지한다. 새 계열은 config에 추가하고, 진화는 대상 ID를 연결한다. 기프트에는 단계·진화 필드를 추가하지 않는다. 고유 규칙을 추가할 때 표시명과 테스트도 보완한다. 명세에 맞는 콘텐츠 품질은 사람이 검토해야 하며, 스키마 검사만으로 독창성을 증명하지 않는다.

시스템 설명은 효과 데이터에서 생성한다. 수치 변경 후 UI 문구가 예전 수치를 유지하는 일을 막기 위한 선택이다. 문학적 인게임 설명과 발동 상황·제약은 개별 창작 문장으로 별도 보존한다.

## 확률의 의미

- 시작 특성 개수: 1개 98%, 2개 1.9%, 3개 0.1%. 기프트 개수 임시안: 0개 87%, 1개 12.9%, 2개 0.1%.
- 각 항목의 `birth`에 적격 여부·가중치·조건·상호 배타 ID가 명시된다. 희귀도는 기본 가중치를 정하고, 영향력은 가중치에 사용하지 않는다.
- 상세의 확률은 **현재 컨텍스트에서 적격 첫 슬롯을 뽑을 때의 조건부 확률**이다. 캐릭터 전체의 보유 확률이 아니다. 0개 기프트 출생 확률이나 2·3슬롯을 합산한 보유율로 오해하지 않도록 UI에 표시했다.
- 슬롯마다 기존 보유/이미 뽑은 항목/상호 배타 계열을 제외하고 다시 정규화한다. 양방향 배타 ID와 `exclusiveGroup`을 함께 지원한다. 근면·태만 및 오만·소심은 서로 배타적이다.
- 진화 단계는 누적 보유하지 않고 이전 단계를 대체하도록 정의한다. 실제 진화 실행기는 이번 범위에서 만들지 않는다.
- 진행 중 획득 확률과 진화 확률은 별도 데이터다. `null`은 **미설정**이며 0이나 확정으로 변환하지 않는다. 진화 조건이 맞아도 별도의 조건부 추첨이 필요하다.
- DEBUG의 기준 컨텍스트를 바꾸면 검술 60점 조건의 극희귀 시작 특성 같은 적격성 차이를 확인할 수 있다.

## 효과 엔진 계약

`resolveEffects(entries, context)`는 단위가 구분된 보정 버킷과 해금 목록을 반환한다. STAT은 가산, GROWTH/ACTION/EVENT는 배율 곱, CHECK는 점수와 %p를 분리한다. `applyPercentagePoints(.4, 10) = .5`, `applyWeight(10, 1.5) = 15`이다. 점수를 자동으로 성공 확률로 바꾸지 않는다. 같은 소스 ID+효과 ID는 동일 해석에서 한 번만 적용한다.

특수 기프트의 고유 규칙은 trigger/operation/target/value/unit/limit/restriction을 가진 정의다. 해당 trigger 플래그가 있을 때만 resolver가 규칙을 전달한다. **현재 도감은 고유 규칙의 이동·기억 수정·세계 변경을 실제 실행하지 않는다.** 그런 실행은 미래 이벤트 엔진의 어댑터 책임이다. 공통 판정/조건/해금/가중치로 표현 가능한 기프트는 공통 효과를 썼으며, 감각 기록·대상 이동·기억 삭제 같은 예외만 고유 규칙으로 분리했다. 구조화된 핵심 연산 외의 세부 제약/쿨다운 설명은 어댑터 구현 시 정식 조건/자원 필드로 구체화해야 한다.

모든 이벤트는 `status: planned`다. DEBUG의 이벤트 관계 표는 기획 참조이며 실제 실행 이력이 아니다. 효과 대상 판정/상황이 맞을 때만 적용해야 하며, 관련 태그가 있다는 이유로 모든 효과를 모든 이벤트에 더하면 안 된다. EVENT_WEIGHT는 확률 그 자체가 아니므로 실제 이벤트 풀에서 다른 가중치와 함께 정규화해야 한다.

## 검증 및 인계

```powershell
npm run test:academy
npm run test:academy-knowledge
npm run test:academy-status
npm run test:academy-character
npm run test:academy-social
npm run build
# 실제 화면을 바꿔 확인해야 할 때만:
$env:ACADEMY_TEST_URL='http://127.0.0.1:5178/web-hub'
npm run test:academy-browser
node scripts/test-academy-knowledge-browser.mjs
npm run test:academy-status-browser
npm run test:academy-character-browser
npm run test:academy-social-browser
```

엔진/데이터 검사는 808개 콘텐츠와 2만 회 추첨의 중복·상호 배타 방지, 확률 정규화, 조건/단위/중복 해석, 분기/단독/순환 감지, 검색·3종 정렬, 잘못된 데이터 검출을 확인한다. 기존 도감 브라우저 검사 스크립트는 허브 진입, 405개 노드, 분기/상세 이전 이동, 조건부 시작 확률, 403개 기프트 필터/정렬, DEBUG, 링크 복원, 빈 목록, 390px 가로 트리와 상세 이동을 다룬다. 각 개발 작업에서는 변경된 기능의 시나리오만 선택해 실행한다.

개발 중 검사는 전반부와 남은 시나리오를 나누어 확인했다. 재실행이 필요한 미완료 부분만 `ACADEMY_BROWSER_CASE=remaining`으로 실행할 수 있다. 기존 게임 전체 E2E는 영향 범위 밖이어서 실행하지 않았다. 기존 CI와 테스트는 유지한다. 신규 의존성 없음. 이미지 생성 없이 코드 기반 문양으로 OG 표지를 추가했다.

콘텐츠 확장 01에서 특성·기프트를 각각 300개 추가했다. 분류별 의도와 품질 검토는 [확장 기록](data/expansion/README.md)에 정리했다.

능력치·숙련도 추가 규칙과 연동 경계는 [정의 데이터 인계 문서](data/knowledge/README.md)를 참고한다. 이번 확장의 검사는 해당 데이터와 설정집 화면에 한정하며 기존 게임 전체 E2E는 실행하지 않는다.


## 캐릭터 영향력 v1

설정집의 **수치 체계** 탭(`?view=catalog&kind=numbers`)에 현재 공식을 표시한다. 공통 상태창에서 여섯 영역의 기여도와 최종 점수를 확인한다. 템플릿은 기준값·고정 항목만 계산하고 미확정 슬롯을 제외한다.

- 계산: `systems/characterImpact.ts`의 `calculateCharacterImpact(character, catalogs, config)`.
- 설정: `data/characterImpactConfig.ts`의 `CHARACTER_IMPACT_V1`, 현재 선택은 `ACTIVE_CHARACTER_IMPACT_CONFIG`.
- 카탈로그 어댑터: `systems/characterImpactCatalogs.ts`. 계산기 자체는 레지스트리 singleton·React·저장소에 의존하지 않는다.
- 결과: `impact`, 공통 `grade`, `contributions`, `domainScores`, `issues`, `version`. 미보유는0, 잘못된 참조·수치는 진단으로 반환한다. UI에서도 확인 가능하다.
- 최대 기여도: 능력치180 / 숙련도170 / 특성150 / 기프트180 / 직급170 / 칭호150.
- 상위 요소는1 / 0.25 / 0.1 / 나머지0.05로 감쇠하고 영역 원점수1000에서 제한한다. 능력치는 계산용0~200 제한 후 상위3평균70%+전체7평균30%. 숙련도는 경지/9×1000을 같은 감쇠 규칙으로 계산한다. 합계는 마지막에 한 번 반올림한다.
- 박탈/무효화 칭호는 제외한다. 공개·비밀·누명 여부에는 v1 별도 배율이 없다. 대표 변경은 점수를 바꾸지 않는다. 같은 정의의 서로 다른 조직 직급은 별도 보유로 계산한다. 중복된 동일 기록은 한 번만 계산하고 진단한다.
- 동일 원인의 서로 다른 요소는 아직 중복 보정하지 않는다. 상태·관계·재산·조직 규모·세계 사건은 별도 영역으로 반영하지 않는다. v2는 새 설정·계산기로 교체하되 캐릭터 레코드는 유지한다.

샘플: 세레나 고정 기준726(국가급), 기존 최상위 기프트만 보유178, 제국 황제 직급만 보유150. 합성 검증의 능력치·숙련도 최대350, 여섯 영역 최대1000, 빈 캐릭터0이다. 사회적 잠재력 평가이며 전투 결과를 보장하지 않는다.

`npm run test:academy-impact`와 `npm run test:academy-character` 통과. 경계·감쇠/평균/최종 반올림·무보유·진단·재현성·세 종류 공통 적용·설정 교체·상태창/수치 페이지 SSR을 검증했다. `test:academy-impact-browser`는726표시→용사 임시 제거596→새로고침726, 대표 변경 불변, 실제 레코드 두 유형의 동일 점수, 수치 탭/새로고침/390px 배치를 확인했다. 영향 없는 전체 게임 E2E는 생략했다.


이번 v1 변경의 타입 검사·Academy ESLint·`npm run build`도 통과했다. 산출물 검증은38프로젝트/39OG페이지/181로컬참조다. 기존 `.animate-*` CSS 및500KB 초과 번들 경고는 남아 있으며 Academy 청크는741.85KB(gzip271.42KB)다. 콘텐츠 자체가 바뀌지 않은 특성/기프트/상태 전체 검사와 전체 게임 E2E는 반복하지 않았다.


## NPC 생성 엔진 v1

상단 **NPC 생성 테스트** 버튼 또는 `?view=npc-generator`에서 임시 NPC1/10/50/100명을 생성한다. 공통 상태창·실제 통계·목표 범위 실패 진단을 제공하며 Worker에서 실행/취소한다. 엔진/프로필/테스트 UI를 분리했고 같은 시드·조건·인덱스는 재현된다. 7전공·5성장 유형·4학년 기준·초기 비생도 프로필이 있다. 기존 직급·칭호·상태·출생 추첨·영향력v1 규칙을 재사용한다.

[생성 API·확률·근거·시드 계약·실제100명 통계와5명 표본·검증·확장](data/generation/README.md)을 확인한다. 고정 등장인물·실제 게임 저장은 변경하지 않는다. 본게임의 회차 생성이나 NPC 자율 행동을 구현한 것은 아니다.


## 소속 시스템 v1

설정집에 **소속** 탭(`?view=catalog&kind=organization`)을 추가했다. 제국19/마계14의33개 조직을 계층·검색·설정 상세로 열람하며 루트/깊이는 확장 가능하다. 캐릭터는 직접 가입/대표/비밀 소속을 별도 보유하고 직급의 가입 의무를 검사한다. NPC 생성기와 공통 상태창도 같은 구조를 사용한다. 조직 영향력은 캐릭터 영향력v1에 합산하지 않는다.

[조직 정의·전체 트리·기존 범위 호환·가입/직급/생성/공개 계약과 검증](data/organizations/README.md)을 먼저 읽고 확장한다.
## 상세 팝업·목록 밀도 개선

- 상세는 우측 고정 패널 대신 공통 팝업으로 표시한다. 기존 개별 항목 URL은 동일하게 팝업을 연다. 닫으면 검색·필터·정렬은 유지한다.
- 특성·기프트와 다른 도감 목록은 설명 없는 작은 카드로 표시한다. 특성 기본 정렬은 이름순이며 기존 진화 트리는 정렬 메뉴에서 제공한다.
- 조직도는 루트별 연결선이 있는 트리 카드로 표시한다. 조직 카드 클릭은 상세 팝업, +/− 버튼은 하위 조직 펼치기·접기다.
- 인게임에서도 같은 상세 팝업을 쓸 수 있도록 데이터 ID 기반의 제어형 컴포넌트로 분리했다. [재사용 API 및 인계 문서](components/CATALOG_POPUPS.md)를 참고한다.
- 실제 브라우저 검증: 공통 팝업 9종·405/403 카드·진화 트리·33개 조직도·검색·키보드·직접 URL·뒤로가기·390px 화면, NPC 결과 유지, 팝업 내부 상태 적용을 통과했다. 변경된 인물/소속/능력치·숙련도/상태/직급·칭호/영향력의 기존 브라우저 시나리오도 통과했다.
- 빌드는 타입 검사와 정적 배포 에셋 검증을 포함한다. 데이터·게임 로직은 변경하지 않아 전체 게임 회귀검사와 무관한 엔진 단위 테스트는 생략했다.
- 최종 빌드 통과: 프로젝트 38개·OG 페이지 39개·로컬 참조 181개 검증. 기존 `.animate-*` CSS 경고와 큰 청크 안내는 남아 있다.
- 기존 특성·기프트 브라우저 검사의 모바일 구간은 기본 화면을 트리로 가정하던 테스트를 수정한 뒤 해당 후반 시나리오만 재실행해 통과했다. 생성 테스트에서 연 상세의 링크 복사도 정식 도감 주소/ID로 확인했다.

### 인물 목록·팝업 요약 개선

인물 목록은 이니셜/초상화와 역할·이름·학년·종족으로 구성한 작은 그리드 카드다. 인물 팝업은 넓은 요약 상태창을 기본으로 사용하며, 전체 설명 버튼으로 인물 설정과 항목별 문구를 복원한다. 공통 패널의 `density` 옵션으로 인게임에서도 같은 배치를 재사용할 수 있다. 1440×1000 핵심 영역 동시 표시·전체 설명 토글·390px 가로 넘침 없음 확인, `test:academy-character` 통과. 전체 게임 회귀검사는 UI 변경 범위 밖이라 생략했다.
