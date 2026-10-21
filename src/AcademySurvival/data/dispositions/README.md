# 성향·도덕·카르마 v1

도덕은 마음, 카르마는 행적, 성향은 사고방식이다. 명성·평판·영향력·전투력과 독립적이다. 기존 특성의 이름이나 `personality`/`tendencies` 소개 문장을 성향 ID로 자동 전환하지 않는다.

## 파일과 계약

| 위치 | 책임 |
| --- | --- |
| `types/morality.ts` | 정의, 캐릭터 필드, 변경 이력, 생성 요청·설정 타입 |
| `data/dispositions/index.ts` | 개별 작성한 100종, 추천·금지 ID 관계 |
| `data/dispositions/config.ts` | 5개 도덕 등급, 9개 카르마 등급, 행동 태그, 생성 설정 |
| `systems/morality.ts` | 공통 등급·범위·변경 API·콘텐츠와 보유 검증 |
| `systems/moralityGeneration.ts` | UI 독립 시드 주입형 가중 생성 |
| `components/DispositionCatalog.tsx` | 분류·설명·행동 태그 검색과 공통 팝업 상세 |
| `components/CharacterMoralityPanel.tsx` | 모든 캐릭터의 공통 표시·미설정 호환·공개 정책 |
| `verification-v1.json` | 고정 시드로 실제 생성한 표본·100명 통계. 실시간 데이터가 아닌 검증 기록 |

성향은 도덕·윤리15, 사고방식·철학15, 사회적 행동15, 욕망·동기15, 감정·심리15, 신념·권위·질서15, 특수·복합10, 총 **100종**이다. 각 항목의 설명·사고·행동·구체적 예시·도덕 관계·카르마 관계를 개별 작성했다. 원문 행을 정의 객체로 읽는 파서만 공유하며 문장 템플릿으로 콘텐츠를 만들지 않는다.

고유 ID는 `disposition-...`이며 이름 변경으로 바꾸지 않는다. 추천과 금지는 별도 양방향 관계이다. 현재 금지 쌍은 낙관/비관, 쾌락/금욕, 운명/자유의지 신봉이다. 냉혈한+이타주의자는 허용한다. 추천 관계는 생성 가중치만 보조하며 시너지·능력치 효과가 없다. 행동 태그는 향후 판단 엔진의 연결점이며 행동 확률이나 NPC AI를 현재 실행하지 않는다.

## 캐릭터 호환

공통 `Character`에 선택적인 도덕·카르마·성향·공개 정책·카르마 이력/초기 근거를 추가했다. 기존 레코드 누락은 도덕/카르마0, 성향 미설정으로 읽으며 원본을 변경하지 않는다. `FixedCharacterTemplate.moralityProfile`도 선택적이다. 세레나에게 성향을 새로 확정하지 않았다.

```ts
const profile = moralitySnapshot(character);
const issues = validateMoralityProfile(character); // 기존 미설정 허용
const strictIssues = validateMoralityProfile(newNpc, true); // 신규는 1~3개 필수
const next = applyKarmaChange(character, 50, '피난민 구조', 'event-rescue-001');
```

변경 API는 원본을 수정하지 않는다. 정수 변화량·사유가 필요하며 -1000~1000으로 포화한다. 이력에 요청 변화량과 실제 적용량, 이전/이후 값, 사유·선택적 출처를 남긴다. 도덕·성향·평판·영향력은 변경하지 않는다. 사건의 선악 판정과 변화량 산정, 자동 시간 변화, 저장은 호출할 미래 시스템의 책임이다.

`dispositionVisibility`에서 ID별 `secret`을 지정할 수 있다. 일반 상태창은 숨기고 DEBUG는 표시한다. 정보 획득과 공개 판정 엔진은 구현하지 않았다. 이미 공개한 원본을 서버에서 보호하는 기능과는 다르다.

## 생성 API

기존 `generateNpc`/`generateNpcs` 요청에 다음 선택 필드를 추가한다.

```ts
{
  moralityRange: {min: 70, max: 80},
  karmaRange: {min: -550, max: -500},
  requiredDispositionIds: ['disposition-altruist', 'disposition-coldblood'],
  dispositionCount: 3, // 또는 'random', 기본은 랜덤
}
```

- 생성기 버전 `npc-generation-v1.2`, 심리 설정 `morality-v1`.
- 개별 NPC 하위 시드의 `/morality` 난수 흐름만 소비한다. 기존 능력치·기프트 추첨 흐름에 난수를 끼워 넣지 않는다. 같은 NPC의 영향력 재시도 중에도 내면 프로필은 일정하다.
- Box–Muller 중심 분포를 사용한다. 기본 도덕 중심0/표준편차27. 생도 카르마 중심0/표준편차32/범위±150, 성인은 나이에 따라 표준편차를 조절하며 기본 범위±600이다. 범위 지정 시 중심은 지정 구간 중앙이다. 모든 결과는 유효한 정수 범위로 제한한다.
- 기본 성향 수1/2/3개 확률60/32/8%. 필수 ID가 있으면 그 개수 이상에서 재정규화한다. 지정 개수가 필수 ID보다 작거나 배타 ID가 들어오면 요청 오류로 종료한다. 무한 재추첨하지 않는다.
- 도덕·카르마 선호 구간에 맞으면 가중치×3, 추천 관계가 있으면×1.35. 구간 밖의 가중치도0이 아니므로 가치관과 행적의 불일치를 허용한다.
- 초기 카르마에는 생성용 과거사 요약을 남긴다. 지정 범위는 `request-override` 출처로 구별한다. 실행된 사건이나 확정 캠페인 기록으로 가장하지 않는다.
- 기존 영향력 계산식v1에 세 필드를 합산하지 않는다. 기존 직급·칭호·소속·능력치 정의를 수정하지 않는다.

## 확인 경로

- 성향 도감: `?view=catalog&kind=disposition`
- 상세 예시: `?view=catalog&kind=disposition&item=disposition-coldblood`
- 수치 체계: `?view=catalog&kind=numbers`
- 생성 테스트: `?view=npc-generator` → 도덕/카르마 범위, 포함 성향, 개수 선택

도감은 이름·본문·행동 예시·도덕/카르마 관계 설명을 검색한다. 카테고리와 행동 태그 필터를 지원한다. 결과에는 도덕/카르마 수치와 등급, 성향 이름을 표시한다. 실제 통계에는 평균·등급별 수·개수 분포·성향 빈도·조합 빈도가 포함되며 빈도 목록은 높은 순이다.

## 검증과 표본

```powershell
npm run test:academy-morality
npm run test:academy-morality-browser
npm run test:academy-npc
npm run test:academy-character
npm run test:academy-impact
npm run build
```

시드 `academy-morality-v1-audit`, 기본 랜덤 생도100명: 성공100/실패0, 도덕 평균+2.11, 카르마 평균+0.28. 성향1개63명/2개29명/3개8명. 도덕 중립52·이타27·이기19·양극단 각1, 카르마 중립87·선량8·불량5. 가장 많은 성향은 이 표본의 파멸주의자8회이며 이 비율을 기본 확률로 하드코딩하지 않는다. 전체 수치는 `verification-v1.json`을 참고한다.

성향100종·중복/관계/대칭/설명 검증, 모든 등급 경계, 포화와 불변 이력, 기존 미설정·비밀 표시, 1/10/100명 생성, 지정 범위·개수·필수 성향, 충돌 요청, 시드·하위 인덱스 재현, 기존 난수 흐름·영향력 불변을 검사한다. 브라우저는 새 도감/워커 생성/통계/상태창/모바일만 확인한다. 무관한 전체 게임 E2E는 실행하지 않는다.

향후 행동 선택기는 `behaviorTags`와 도덕·관계·위험·상태 등 문맥을 함께 받아야 한다. 성향 한 개로 행동을 확정하지 않는다. 도덕 변화, 사건별 카르마 판정, 공개 정보, 사건 이력 저장은 별도 모듈로 확장한다.

최종 검증: 타입 검사를 포함한 `npm run build` 통과, 프로젝트38개·OG39페이지·로컬 에셋 참조181개 검증. 기존 `.animate-*` CSS 경고와 큰 청크 안내는 유지된다. 관련 단위 검사4종과 신규 도감/생성기 브라우저 검증을 통과했으며 전체 게임 회귀검사는 실행하지 않았다.
