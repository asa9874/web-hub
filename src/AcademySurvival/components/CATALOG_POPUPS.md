# 설정집 팝업 재사용

## 구성

- `DetailDialog.tsx`: 콘텐츠 종류와 라우팅을 모르는 공통 팝업 틀. 네이티브 `dialog`를 포털로 표시하며 배경 입력 차단, Tab 포커스 제한, Esc/닫기/바깥 클릭, 본문 스크롤 잠금 및 호출 요소 포커스 복귀를 담당한다.
- `CatalogEntryDialog.tsx`: `{kind, id}`로 기존 도감 데이터를 조회하고 같은 상세 컴포넌트를 표시한다. 도감 전체나 목록을 숨겨서 렌더링하지 않는다. 잘못된 ID는 오류 안내를 표시한다.
- `EntryDetail`, `KnowledgeEntryDetail`, `StatusDetail`, `SocialDetail`, `OrganizationDetail`, `FixedCharacterDetail`: 기존 상세 내용의 렌더러. 확률·효과·진화·경지·DEBUG·상태 적용 테스트를 유지한다.

목록은 상세를 자동으로 선택하지 않는다. 항목을 클릭하면 연다. 특성은 기본 이름순 작은 카드이며, 정렬에서 **진화 트리**를 선택할 수 있다. 목록 카드에는 문학적 설명을 넣지 않는다.

## 인게임에서 도감 열기

앱의 기존 React Router 안에서 다음처럼 사용한다. 팝업 API에는 URL 변경이나 게임 상태 변경이 없다. 호출 화면은 계속 마운트되며 일시정지 여부도 게임이 결정한다.

```tsx
import {useState} from 'react';
import CatalogEntryDialog from './CatalogEntryDialog';
import type {CatalogEntryReference} from './CatalogEntryDialog';

function GameOverlay() {
  const [reference, setReference] = useState<CatalogEntryReference | null>(null);
  return <>
    <button onClick={() => setReference({kind: 'stat', id: 'STR'})}>
      근력 설명
    </button>
    {reference && <CatalogEntryDialog
      reference={reference}
      onNavigate={setReference}
      onClose={() => setReference(null)}
    />}
  </>;
}
```

`kind`: `trait`, `gift`, `stat`, `proficiency`, `status`, `character`, `position`, `title`, `organization`. `debug`와 실제 판정 참조용 `context`는 선택적이다. 팝업 내부의 도감 연결도 `onNavigate`로 처리한다. 기프트/특성의 링크 복사는 표시한 데이터 ID를 기준으로 정식 설정집 주소를 만든다.

실제 플레이어/NPC 상태창에도 같은 틀을 사용할 수 있다.

```tsx
<DetailDialog title={character.name} onClose={closeStatus}>
  <CharacterStatusPanel mode="actual" character={character} />
</DetailDialog>
```

`DetailDialog`는 열려 있는 동안 마운트하고 닫으면 언마운트한다. 여러 팝업을 중첩하지 않고 현재 `reference`를 바꾼다. 상세 전환 시 스크롤은 위로 돌아가며 임시 DEBUG 상태는 초기화한다. 다른 URL의 외부 링크와 새 탭 modifier 키는 가로채지 않는다.

## 설정집 연결

`AcademySurvival.tsx`가 `kind`/`item` 쿼리를 팝업 상태로 연결한다. 기존 개별 URL, 새로고침 및 브라우저 뒤로가기를 유지한다. 닫을 때는 `item`만 지워 검색·필터·정렬을 보존한다. NPC 생성 테스트의 도감 링크는 결과를 유지한 채 위에 팝업을 연다.

조직도는 루트별 열과 연결선이 있는 중첩 목록이다. 카드 선택과 펼치기 버튼을 분리하고, 전체 접기/펼치기·검색 시 상위 경로 열기·키보드 이동을 유지한다. 조직 데이터와 영향력 계산은 변경하지 않는다.

## 변경 범위 검증

```powershell
npm run test:academy-popup-browser
npm run test:academy-popup-reuse-browser
npm run build
```

브라우저 검증 기본 주소는 `http://127.0.0.1:5178/web-hub`이며 `ACADEMY_TEST_URL`로 변경할 수 있다. 팝업/카드/조직도 변경에 해당하는 시나리오만 실행한다. 기존 브라우저 시나리오도 팝업을 먼저 닫고 필터·탭을 조작하도록 갱신했다.
