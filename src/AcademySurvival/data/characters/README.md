# 현재 고정 학생 v1 (2026-10-25)

고정 학생15명. 새 게임 연결/개인 사건42개 실행 경로·20개 보류/저장 호환과 검증 범위는 [FIXED_STUDENTS_V1](../../../../docs/academy/FIXED_STUDENTS_V1.md)을 우선한다. 아래1인 기준 기록은 이전 작업 기록이며 현재 구현 상태를 뜻하지 않는다.

# 고정 등장인물과 공통 캐릭터 상태창

현재 등록 인물은 **세레나(Serena), 용사 1명**이다. 캐릭터 생성·회차 진행 없이 핵심 템플릿과 공통 상세 상태창을 검증하는 단계다.

## 구조

| 파일 | 책임 |
| --- | --- |
| `types/character.ts` | 공통 Character / CharacterIdentity / FixedCharacterTemplate / RandomAbilitySlot / 모드별 패널 props |
| `data/characters/serena.ts` | 고정 정체성·기준값/범위·확정 능력·랜덤 슬롯·상태 후보·배경 변수 |
| `data/characters/index.ts` | 템플릿 레지스트리. 향후 데이터 추가만으로 목록 반영 |
| `data/characterContent.ts` | 새 정식 특성 1개·기프트 3개. 세레나 전용 효과 경로 없음 |
| `data/knowledge/proficienciesHoly.ts` | 신성마법과 개별 10경지 설명 |
| `systems/characterRules.ts` | 읽기 전용 후보 풀·공통 적격성/중복·가중치 정규화 |
| `systems/characterValidation.ts` | 템플릿/실제 레코드의 필수값·ID·수치·참조·충돌 검사 |
| `components/CharacterStatusPanel.tsx` | 모든 캐릭터 종류가 사용하는 상태창 |
| `components/FixedCharacterCatalog.tsx` | 목록/검색, URL 선택, DEBUG 표시 모드 확인 |

`Character`는 기존 `CharacterKnowledge`를 확장한다. 능력치는 `stats`, 숙련도는 기존 명칭인 `proficiencyRanks`, 보유 능력은 `traitIds/giftIds`, 현재 상태는 기존 `StatusInstance[]`를 쓴다. 종류(player/random_npc/fixed_npc)는 식별용이며 별도의 능력치 체계나 효과 경로를 만들지 않는다. `templateId`는 고정 핵심 정보를 참조한다. 기존 nullable 관계 서술은 호환 기록으로 보존한다. 새 관계 수치는 Character에 중복 저장하지 않고 [인간관계 방향 그래프](../relationships/README.md)에서 조회한다.

## 세레나 구성과 콘텐츠 대응

| 기획 후보 | 실제 등록 항목 | 선택 이유 |
| --- | --- | --- |
| 불굴의 의지 | 부러지지 않은 이름 (`trait-will-name`) | 기존 의지 계열 상위 특성 |
| 상급 검술 | 되돌아오는 검선 (`trait-sword-line`) | 기존 검술 2단계 특성 |
| 정의로운 심성 | 사정을 듣는 저울 (`trait-x-exception-mercy`) | 규칙과 개인 사정을 함께 살피는 기존 특성 |
| 천부적인 마력 감응 | 천부적인 마력 감응 (`trait-mana-attunement`) | 일반 마력 제어·비전 학습 감각이므로 원소/정령/신성 친화와 구별해 정식 추가 |

고정 특성 4개 + 랜덤 특성 1개, 고정 기프트 3개다. 새벽의 계승자(880), 꺾이지 않는 별(820), 성검의 응답(910)을 기존 기프트 모델·레지스트리에 정식 등록했다. 기존 생존 기프트는 익수/낙하 같은 특정 상황에 한정되고, 기존 성유물 관련 능력은 계약 판독 등 다른 기능이어서 새 콘셉트를 대체하지 않았다. 기프트는 단계/진화가 없으며 다른 캐릭터가 보유해도 같은 조건과 효과 정의를 사용한다.

꺾이지 않는 별의 마지막 행동 기회는 고유 규칙 기술자(descriptor)다. 회차당 1회, 유효한 도피로·잔여 사용권 확인 뒤 회피 시도를 허용한다는 계약이며 무조건 생존·부활·회복이 아니다. **현재 사건 처리기나 사용권 소모 실행기는 없고 실제로 피해를 막지 않는다.** 새벽의 계승자의 동료 사기 보정도 관련 판정 데이터이며 다른 캐릭터의 수치를 이 UI에서 변경하지 않는다. 성검의 응답은 유물 적합성 승인과 해당 유물 컨텍스트가 필요하고, 세레나의 ID로 우회하지 않는다.

신성마법은 치유/결계와 범위가 달라 `proficiency-holy-magic`을 추가했다. 검술 달인 / 신성마법 정예 / 마력제어 정예 / 전술학 숙련 / 예법 정예 / 통솔술 숙련이다. 검술 특성의 진화 단계와 검술 숙련도의 경지는 동기화하지 않는다.

기준 능력치 STR88/AGI94/VIT83/MAG112/INT76/WIL118/CHA96과 개별 최소·최대 범위를 데이터에 둔다. 등급은 기존 `statGradeFor()`를 사용한다. 기준과 범위는 임시 밸런스이며 확률 분포·수치 추첨기를 도입한 것은 아니다. 실제 레코드에는 범위나 캐릭터 종류별 상한을 적용하지 않는다.

기본 상태는 비어 있다. 행복·자신감·졸림·불면은 기존 상태 ID를 참조하는 별도 미확정 후보이며, 상태 없음 가중치60과 후보15/10/10/5를 정의했다. 책임감·자책 가능성은 설정으로 남기고 고정 디버프를 부여하지 않았다. 외형은 임시 텍스트와 선택적 초상화 참조만 준비했으며 새 이미지는 생성하지 않았다.

## 슬롯과 회차 경계

랜덤 슬롯에는 종류·후보 ID·양수 가중치·추가 조건·무복원·회차 시작 1회 규칙을 기록한다. `randomSlotPool()`는 기존 `slotPool/compatible/meets`를 재사용해 출생 적격성·선행 조건·고정 보유·중복·상호 배타를 확인하고 슬롯 전용 가중치를 정규화한다. 가중치는 일반 희귀도 가중치에 덧곱하지 않는 명시적 후보 분포다. 조건이 바뀌면 남은 후보 사이의 조건부 확률도 달라진다.

**추첨 함수, Math.random 호출, 회차 생성, 저장소는 구현하지 않았다.** 미리보기에서는 `?`와 규칙만 표시하고 실제 후보 이름·결과는 공개하지 않는다(개발자 원본 DEBUG 제외). 미래 회차 관리기는 슬롯을 순서대로 한 번 결정하고 결과를 저장해야 한다. 후속 슬롯은 이미 고른 능력을 소유 목록에 포함하며 후보 부족 시 정책을 명시해야 한다. 새로고침마다 템플릿을 다시 추첨하면 안 된다.

## 공통 패널 사용

```tsx
// 미확정 슬롯과 기준/범위가 보이는 설정집
<CharacterStatusPanel mode="template" template={template} />
// 플레이어/랜덤 NPC/고정 NPC 모두 동일한 형태의 확정 레코드
<CharacterStatusPanel mode="actual" character={character} />
```

분리된 props 유니언으로 템플릿을 실제 레코드처럼 전달하는 실수를 줄인다. 실제 모드는 명시적인 보유 배열만 표시하며 미확정 슬롯을 보충하거나 재추첨하지 않는다. 빈 특성/기프트/숙련도/상태/관계도 자연스럽게 표시한다. 능력치 숫자는 전달받은 기본 수치이고 특성·상태 보정을 자동으로 가산한 유효 수치가 아니다.

도감 링크는 이름 대신 안정적인 ID를 사용하는 기존 쿼리 라우트다. 브라우저 뒤로가기로 인물 기록에 돌아올 수 있다. `?view=catalog&kind=character&item=fixed-serena`로 직접 접속한다.

DEBUG의 ‘공통 상태창 확인’은 명시적인 테스트 레코드를 플레이어/랜덤 NPC로 표시해 보는 도구다. 추가 고정 인물이 아니며, 세레나의 회차 결과를 미리 정한 것도 아니다. 실제 고정 NPC 레코드 역시 같은 컴포넌트로 렌더링하는 검사를 단위 테스트에 포함한다.

## 검증·인계

```powershell
npm ci
npm run dev
npm run test:academy-character
npm run test:academy
npm run test:academy-knowledge
npm run test:academy-status
npm run build
# 인물 UI의 화면/입력 확인이 필요할 때만
$env:ACADEMY_TEST_URL='http://127.0.0.1:5178/web-hub'
npm run test:academy-character-browser
```

캐릭터 검사는 세레나의 기준 수치/자동 등급/6개 숙련도/4+1 특성 슬롯/3기프트, 참조·중복·배타·조건부 가중치, 템플릿 불변성, 빈 레코드, 부위 상태, 두 표시 모드와 세 캐릭터 종류의 동일 규칙, 종류별 추가 상한 없음 및 잘못된 데이터 검출을 다룬다. 브라우저 검사는 인물 진입/검색/슬롯/새로고침 안정성/5도감 링크와 뒤로가기/실제 모드 확인/390px 배치/기존 탭 진입으로 한정한다. 기존 테스트는 삭제하지 않고 신규 데이터 수에 맞는 기대값만 갱신했다.

현재 전체 콘텐츠는 특성405·기프트403·능력치7·숙련도49·상태150·고정인물1이다. 기존 550개에 신성마법의 10문장을 더해 능력치·숙련도 설명은560개다. 추가할 인물은 동일한 템플릿 모델로 작성하고 `data/characters/index.ts`에 등록한다. 이미지·자율 행동·회차 진행·관계 시뮬레이션·전용 퀘스트는 이후 작업이다.

### 이번 작업 검증 결과

- `test:academy-character`: 참조·범위·슬롯·적격성·두 모드의 서버 렌더·세 종류의 같은 규칙·빈 레코드·잘못된 정의 검출 통과. 임의의 외부 템플릿을 패널에 전달해도 해당 데이터 자체를 검증한다.
- `test:academy`, `test:academy-knowledge`, `test:academy-status`: 새 공통 콘텐츠와 실제 참조 증가를 포함해 통과. 기존 상태 150종/38단계는 유지됐다.
- TypeScript·Academy ESLint·`npm run build` 통과. 38개 프로젝트·39개 OG 페이지·181개 로컬 참조 검사 통과.
- `test:academy-character-browser` 전체 통과. 인물 UI와 실제 연결/입력에 한정했으며 기존 게임 전체 E2E는 반복하지 않았다.
- 기존 공통 `.animate-*` CSS 경고와 번들 크기 경고는 남아 있다. Academy 지연 로딩 청크는 약549KB(압축204KB)다. 새 패키지·이미지·백엔드·DB 없음.

직급·칭호 확장 후 공통 Character는 `CharacterSocialIdentity`도 확장한다. 템플릿은 `social.fixed/randomSlots`를 가진다. 세레나는 용사·아카데미1학년과 3개 정식 칭호를 보유하며, 대표·소속·사실/인지 구분 계약은 [사회 요소 문서](../social/README.md)를 따른다. 기존 소개용 `identity.title` 문자열은 대표 직급의 근거로 사용하지 않는다.


공통 상태창에는 `character-impact-v1` 최종 영향력과6영역 기여도를 표시한다. 템플릿은 고정 보유와 기준 능력치/숙련도로만 계산하고 미확정 슬롯을 포함하지 않는다. 결과는 Character에 저장하지 않는다. 실제 레코드는 kind에 무관하게 같은 함수를 사용한다. DEBUG 직급 제거·칭호 박탈 테스트의 현재 보유 목록과 점수도 함께 갱신된다.


Character에 affiliations/primaryOrganizationId를 추가했다. 고정 템플릿의 affiliations도 같은 CharacterAffiliations 구조다. 기존 identity.affiliation 문자열은 소개 호환용이며 가입 근거가 아니다. 세레나는 기존 학적에 맞는 academy-main 직접 가입을 추가했고 능력/고정 핵심은 유지했다. 직접 가입/대표/비밀 공개·학적/필수직급 검증은 ../organizations/README.md를 따른다.
