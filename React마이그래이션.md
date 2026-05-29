# React 마이그래이션 계획서

> **원칙**: 각 Phase가 끝날 때마다 앱이 완전히 동작해야 한다.  
> 절대 두 Phase를 동시에 진행하지 않는다.

---

## 진행 현황

| Phase | 상태 | 완료일 | 비고 |
|-------|------|--------|------|
| Phase 1 — 개발 환경 전환 | ✅ 완료 | 2026-05-29 | react 19.2, zustand 5.0, @vitejs/plugin-react 6.0 |
| Phase 2 — 진입점 & 루트 뼈대 | ✅ 완료 | 2026-05-29 | main.tsx + App.tsx (JSX 셸 + 레거시 useEffect) |
| Phase 3 — 게임 상태 (Context) | ✅ 완료 | 2026-05-29 | GameContext.tsx + useGameStore.ts, GameProvider로 App 감싸기 |
| Phase 4 — 맵 위치 상태 (Zustand) | ✅ 완료 | 2026-05-29 | navigationStore.ts — playerLocId/playerRoomId + moveToRoom/travelToLoc |
| Phase 5 — 레이아웃 셸 | ✅ 완료 | 2026-05-29 | LeftPanel / CenterPanel / RightPanel / PanelTitle 분리 |
| Phase 6 — 좌측 패널 | ✅ 완료 | 2026-05-29 | PlayerAvatar / StatRow / StatsSection / InventorySection |
| Phase 7 — 중앙 패널 | ✅ 완료 | 2026-05-29 | LocationBar / SceneHeader / SceneAsciiArt / SceneText / ChoiceButton / ChoicesSection + useTypewriter |
| Phase 8 — 우측 패널 | ✅ 완료 | 2026-05-29 | NavPanel — openMap onClick 연결, 레거시 store/render 완전 제거 |
| Phase 9 — 맵 Hybrid 래핑 | ✅ 완료 | 2026-05-29 | MapOverlay.tsx + render-map.ts 이동 시 navigationStore 동기화 |
| Phase 10 — 맵 완전 React 전환 | ✅ 완료 | 2026-05-29 | render-map.ts 삭제, WorldMap/InteriorMap 완전 React 전환 |
| Phase 11 — 스타일 정리 | ✅ 완료 | 2026-05-29 | 미사용 3규칙 제거 (.map-hidden / .rds-adj-badge / @keyframes blink-cursor) |
| Phase 12 — 최적화 & 정리 | ⏳ 대기 | — | |

---

## 현황 요약

| 분류 | 파일 | 처리 방침 |
|------|------|-----------|
| 진입점 | `main.ts`, `ui/game-shell.ts` | 완전 교체 |
| UI 렌더러 | `ui/render-*.ts` | React 컴포넌트로 전환 |
| 맵 오버레이 | `ui/render-map.ts` | Phase 9(래핑) → Phase 10(완전 전환) |
| 상태 | `state/store.ts` | Context + useReducer로 교체 |
| 맵 위치 상태 | `render-map.ts` 내 전역변수 | Zustand 스토어로 분리 |
| 유틸리티 | `utils/typewriter.ts` | `useTypewriter` 훅으로 재작성 |
| 엔진 | `engine/*.ts` | **수정 없음** (순수 함수) |
| 데이터 | `data/*.ts` | **수정 없음** (순수 데이터) |
| 타입 | `types/index.ts` | **수정 없음** + React 타입 추가 |
| 스타일 | `style.css` | 유지 (CSS Modules 전환은 선택) |

---

## ✅ Phase 1 — 개발 환경 전환 `[완료 · 2026-05-29]`

### 목표
기존 코드를 건드리지 않고 React 개발 환경을 추가 세팅한다.

### 설치 명령

```bash
npm install react react-dom
npm install -D @types/react @types/react-dom @vitejs/plugin-react
npm install zustand
```

### `vite.config.ts` 수정

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### `tsconfig.json` 수정 (compilerOptions에 추가)

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["ES2020", "DOM", "DOM.Iterable"]
  }
}
```

### 검증
- `npm run dev` 실행 후 기존 앱이 그대로 동작하면 성공
- React/Zustand 패키지는 설치됐지만 아직 사용 안 함

### ✅ 실제 수행 결과

| 항목 | 결과 |
|------|------|
| `npm install react react-dom` | ✅ react 19.2.6 / react-dom 19.2.6 |
| `npm install -D @types/react @types/react-dom @vitejs/plugin-react` | ✅ @types/react 19.2.15 / @vitejs/plugin-react 6.0.2 |
| `npm install zustand` | ✅ zustand 5.0.14 |
| `vite.config.ts` 생성 (`react()` 플러그인) | ✅ |
| `tsconfig.json` — `"jsx": "react-jsx"` 추가 | ✅ |
| `tsconfig.json` — `"DOM.Iterable"` lib 추가 | ✅ |
| `tsconfig.json` — `erasableSyntaxOnly` 제거 (React 호환) | ✅ |
| `npx tsc --noEmit` | ✅ 오류 없음 |
| `npx vite build` | ✅ 46.98 kB / 111ms (기존 코드 정상 빌드) |

---

## ✅ Phase 2 — 앱 진입점 & 루트 컴포넌트 뼈대 `[완료 · 2026-05-29]`

### 목표
`index.html` → `main.tsx` → `App.tsx` 연결.  
기존 `main.ts` 로직을 **아직 이전하지 않고** 새 진입점만 뼈대 생성.

### 파일 구조

```
src/
├── main.tsx          ← 신규 (React root mount)
├── App.tsx           ← 신규 (3단 그리드 레이아웃 뼈대)
├── main.ts           ← 잠시 유지 (Phase 8까지)
```

### `index.html` 수정

```html
<!-- 기존 <script type="module" src="/src/main.ts"> 를 아래로 교체 -->
<script type="module" src="/src/main.tsx"></script>
```

### `src/main.tsx` 생성

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';

const root = document.getElementById('app')!;
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `src/App.tsx` 생성 (임시 뼈대)

```tsx
export default function App() {
  return (
    <div id="game-container">
      {/* Phase별로 컴포넌트 채워나감 */}
      <aside id="left-panel">  </aside>
      <main  id="center-panel"></main>
      <aside id="right-panel"> </aside>
    </div>
  );
}
```

### 검증
- 3단 그리드 빈 화면이 보이면 성공
- CSS(`#game-container` 그리드)는 그대로 적용돼야 함

### ✅ 실제 수행 결과

| 항목 | 결과 |
|------|------|
| `index.html` — 진입점 `main.ts` → `main.tsx` | ✅ |
| `src/main.tsx` 생성 — `createRoot` + `<App />` (StrictMode 제외) | ✅ |
| `src/App.tsx` 생성 — `game-shell.ts` HTML 구조를 JSX로 1:1 전환 | ✅ |
| `App.tsx` — `useEffect` + `useRef` 가드로 레거시 게임 엔진 초기화 | ✅ |
| `npx tsc --noEmit` | ✅ 오류 없음 |
| `npx vite build` | ✅ 236 kB (React 런타임 포함, 정상) |
| 게임 전체 동작 확인 (씬 렌더링, 선택지, 위치바, 맵) | ✅ |
| 콘솔 에러 | ✅ 없음 |

> **note**: `main.ts`와 `game-shell.ts`는 이 시점에서 사용되지 않는 파일이 됨.  
> Phase 8 완료 후 삭제 예정.

---

## Phase 3 — 게임 상태 레이어 (Context + useReducer)

### 목표
`state/store.ts`의 `GameStore`를 React Context로 교체한다.  
엔진 코드(`engine/*.ts`)는 그대로 사용한다.

### 새 파일: `src/state/GameContext.tsx`

```
역할: PlayerState를 Context로 공급
      dispatch를 Context로 공급
      scenes는 초기화 시 주입
```

**구조 설계**

```tsx
// src/state/GameContext.tsx
import { createContext, useContext, useReducer } from 'react';
import type { PlayerState, GameAction } from '../types';
import { calculateOutcome } from '../engine/rng';
import { applyOutcome }     from '../engine/state-mutations';
import { resolveScene }     from '../engine/scene-resolver';
import { scenes }           from '../data/scenes';

const INITIAL_STATE: PlayerState = {
  hp: 100, maxHp: 100,
  corruption: 0, maxCorruption: 100,
  inventory: [],
  currentSceneId: 'apartment_start',
  isAlive: true,
};

function reducer(state: PlayerState, action: GameAction): PlayerState {
  switch (action.type) {
    case 'CHOOSE': {
      const scene   = resolveScene(state.currentSceneId, scenes);
      const choice  = scene.choices.find(c => c.id === action.choiceId);
      if (!choice) return state;
      return applyOutcome(state, calculateOutcome(choice));
    }
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

// Context 생성 및 훅 export
```

### 새 훅: `src/state/useGameStore.ts`

```ts
// PlayerState와 dispatch를 반환하는 단순 래퍼 훅
export function useGameStore() {
  const { state, dispatch } = useGameContext();
  return { state, dispatch };
}
```

### `App.tsx` 업데이트

```tsx
import { GameProvider } from './state/GameContext';

export default function App() {
  return (
    <GameProvider>
      <div id="game-container">...</div>
    </GameProvider>
  );
}
```

### 검증
- `useGameStore()` 훅이 state를 반환하면 성공
- 아직 UI에 연결 안 해도 됨 (콘솔로 확인)

---

## Phase 4 — 맵/내비게이션 상태 레이어 (Zustand)

### 목표
현재 `render-map.ts`의 전역 변수(`playerLocId`, `playerRoomId`)를  
Zustand 스토어로 분리한다.  
이 상태는 LocationBar와 MapOverlay 양쪽에서 접근해야 한다.

### 새 파일: `src/state/navigationStore.ts`

```ts
import { create } from 'zustand';
import { LOCATIONS } from '../data/map-data';

interface NavigationState {
  playerLocId:  string;
  playerRoomId: string;

  // 파생 데이터 (getter)
  currentLoc:  () => ReturnType<typeof LOCATIONS.find>;
  currentRoom: () => /* Room | undefined */;

  // 액션
  moveToRoom:  (roomId: string) => void;
  travelToLoc: (locId: string) => void;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
  playerLocId:  'A1',
  playerRoomId: 'a1-302',

  currentLoc:  () => LOCATIONS.find(l => l.id === get().playerLocId),
  currentRoom: () => get().currentLoc()?.rooms.find(r => r.id === get().playerRoomId),

  moveToRoom: (roomId) => set({ playerRoomId: roomId }),

  travelToLoc: (destLocId) => {
    const destLoc = LOCATIONS.find(l => l.id === destLocId);
    if (!destLoc) return;
    const arrival = destLoc.rooms.find(r => r.connectsTo === get().playerLocId)
      ?? destLoc.rooms.find(r => r.type !== 'danger' && r.type !== 'locked')
      ?? destLoc.rooms[0];
    set({ playerLocId: destLocId, playerRoomId: arrival.id });
  },
}));
```

### 검증
- `useNavigationStore.getState()` 콘솔 확인
- 상태 변경 시 리렌더링 여부 확인

---

## Phase 5 — 레이아웃 셸 & 공통 컴포넌트

### 목표
3단 그리드를 React 컴포넌트로 명확하게 구조화한다.

### 파일 구조

```
src/components/
├── layout/
│   ├── LeftPanel.tsx
│   ├── CenterPanel.tsx
│   └── RightPanel.tsx
└── ui/
    └── PanelTitle.tsx    ← 공통 패널 헤더
```

### `App.tsx` 최종 구조

```tsx
import LeftPanel   from './components/layout/LeftPanel';
import CenterPanel from './components/layout/CenterPanel';
import RightPanel  from './components/layout/RightPanel';
import MapOverlay  from './components/map/MapOverlay';  // Phase 9에서

export default function App() {
  return (
    <GameProvider>
      <div id="game-container">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
      <MapOverlay />   {/* Phase 9에서 추가 */}
    </GameProvider>
  );
}
```

### 검증
- 3단 레이아웃 구조가 DOM에 올바르게 렌더링되면 성공

---

## Phase 6 — 좌측 패널 컴포넌트

### 목표
`render-stats.ts`, `render-inventory.ts`를 React 컴포넌트로 전환.

### 파일 구조

```
src/components/left/
├── PlayerAvatar.tsx     ← ASCII 아바타 (정적)
├── StatsSection.tsx     ← HP/오염도 바
├── StatRow.tsx          ← 단일 스탯 행
└── InventorySection.tsx ← 소지품 목록
```

### `StatRow.tsx` 예시

```tsx
interface StatRowProps {
  label:    string;
  barText:  string;
  barClass: string;
  numeric:  string;
}

export default function StatRow({ label, barText, barClass, numeric }: StatRowProps) {
  return (
    <div className="stat-row">
      <div className="stat-label-text">{label}</div>
      <span className={`stat-bar-ascii ${barClass}`}>{barText}</span>
      <div className="stat-numeric">{numeric}</div>
    </div>
  );
}
```

### `StatsSection.tsx` 예시

```tsx
import { useGameStore } from '../../state/useGameStore';
import StatRow from './StatRow';

export default function StatsSection() {
  const { state } = useGameStore();
  // HP 바 계산 로직 (render-stats.ts에서 이식)
  return (
    <div id="stats-section">
      <div className="panel-title">[ 생존 상태 ]</div>
      <div id="stats-inner">
        <StatRow label="생 명 력" ... />
        <StatRow label="오 염 도" ... />
      </div>
    </div>
  );
}
```

### 이식 대상 로직 (`render-stats.ts` → `StatsSection.tsx`)

```
buildBar(filled, total, fillChar, emptyChar)  →  순수 함수로 파일 상단에 유지
HP 바 CSS 클래스 결정 로직                    →  순수 함수로 추출
오염도 바 CSS 클래스 결정 로직                →  순수 함수로 추출
```

### 검증
- HP가 바뀌면 스탯 바가 리렌더링되는지 확인

---

## Phase 7 — 중앙 패널 컴포넌트

### 목표
씬 텍스트, 아스키아트, 선택지를 React로 전환.  
타이핑 효과를 `useTypewriter` 훅으로 재구현.

### 파일 구조

```
src/components/center/
├── LocationBar.tsx       ← 현재위치 표시바 (Zustand 연결)
├── SceneHeader.tsx       ← LocationBar + SceneTitle
├── SceneAsciiArt.tsx     ← 아스키아트
├── SceneText.tsx         ← 씬 설명 + 나레이션 (typewriter 포함)
└── ChoicesSection.tsx    ← 선택지 버튼 목록
    └── ChoiceButton.tsx  ← 단일 선택지 버튼
```

### `useTypewriter` 훅 설계

```ts
// src/hooks/useTypewriter.ts
import { useEffect, useRef } from 'react';

export function useTypewriter(text: string, speedMs: number, enabled = true) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || !enabled) return;
    // typewriter.ts의 로직을 그대로 이식
    const cancel = typewrite(ref.current, text, speedMs);
    return cancel; // cleanup = cancel animation
  }, [text, speedMs, enabled]);

  return ref;
}
```

### `SceneText.tsx` 핵심 구조

```tsx
export default function SceneText() {
  const { state }       = useGameStore();
  const scene           = resolveScene(state.currentSceneId, scenes);
  const [narrative, setNarrative] = useState('');

  const descRef  = useTypewriter(scene.description, 18, /* sceneChanged */);
  const narrRef  = useTypewriter(narrative, 28, !!narrative);

  return (
    <div id="scene-text-section">
      <div id="scene-description" ref={descRef} />
      <div id="narrative-result"  ref={narrRef} />
    </div>
  );
}
```

> **주의**: 나레이션 텍스트는 GameAction CHOOSE의 결과값이므로  
> dispatch 후 반환값을 별도 상태로 관리해야 한다.  
> `useReducer`의 리듀서는 순수해야 하므로 narrative는 Context 외부 또는  
> 별도 `narrativeStore` (Zustand)로 분리한다.

### `narrativeStore.ts` (Zustand, 단순)

```ts
export const useNarrativeStore = create<{
  text: string;
  setNarrative: (t: string) => void;
}>((set) => ({
  text: '',
  setNarrative: (text) => set({ text }),
}));
```

### `LocationBar.tsx`

```tsx
import { useNavigationStore } from '../../state/navigationStore';

export default function LocationBar() {
  const { playerLocId, playerRoomId, currentLoc, currentRoom } = useNavigationStore();
  return (
    <div id="location-bar">
      <span className="loc-icon">◈</span>
      <span id="loc-main">{playerLocId}  {currentLoc()?.name ?? '—'}</span>
      <span className="loc-sep">─</span>
      <span id="loc-room">{currentRoom()?.name ?? '—'}</span>
    </div>
  );
}
```

### `ChoiceButton.tsx`

```tsx
interface Props { choice: Choice; onChoose: (c: Choice) => void; }

export default function ChoiceButton({ choice, onChoose }: Props) {
  const pct = choice.type === 'rng'
    ? Math.round(choice.successProbability * 100)
    : null;
  return (
    <button className="choice-btn" data-type={choice.type}
            onClick={() => onChoose(choice)}>
      <span className="choice-label">{choice.label}</span>
      {pct !== null && (
        <span className="choice-chance">[성공 확률: {pct}%]</span>
      )}
    </button>
  );
}
```

### 검증
- 씬 이동 시 타이핑 효과가 동작하는지 확인
- 선택지 클릭 시 상태가 바뀌고 나레이션이 출력되는지 확인

---

## Phase 8 — 우측 패널 컴포넌트

### 목표
내비게이션 버튼을 React로 전환.

### 파일 구조

```
src/components/right/
└── NavPanel.tsx
```

### `NavPanel.tsx` 예시

```tsx
export default function NavPanel() {
  const openMap = () => {/* Phase 9 연결 */};
  return (
    <aside id="right-panel">
      <div className="panel-title">[ 메 뉴 ]</div>
      <nav id="nav-panel">
        <button className="nav-btn" onClick={openMap}>지  도</button>
        <button className="nav-btn">기 록 지</button>
        {/* ... */}
        <button className="nav-btn nav-btn--danger">처음으로</button>
      </nav>
    </aside>
  );
}
```

### 기존 `main.ts` 제거
Phase 8이 끝나면 `main.ts`와 모든 `render-*.ts`(맵 제외)가 불필요해진다.

### 검증
- 전체 게임 UI가 React 컴포넌트로 동작하면 성공
- 맵만 아직 미구현

---

## Phase 9 — 맵 오버레이: Hybrid 래핑 방식

### 목표
`render-map.ts`의 기존 코드를 **그대로 유지**하면서  
React 컴포넌트로 감싼다. (useEffect + ref 패턴)

이 단계의 핵심: **동작하는 맵이 React 앱 안에 존재하는 것**

### 전략

```
render-map.ts (기존 코드 유지)
     ↑
     │  import { initMap, openMap, closeMap, setPlayerPosition }
     │
MapOverlay.tsx (React 컴포넌트)
     │
     └── useEffect로 mount 시 initMap() 호출
         Zustand navigationStore 변화 감지 → setPlayerPosition() 호출
```

### `src/components/map/MapOverlay.tsx`

```tsx
import { useEffect, useRef } from 'react';
import { initMap, openMap, closeMap, setPlayerPosition } from '../../ui/render-map';
import { useNavigationStore } from '../../state/navigationStore';

// render-map.ts 내 initMap()은 DOM을 직접 생성하므로
// React root 밖 별도 div에 마운트하거나 ref 컨테이너를 사용

export default function MapOverlay() {
  const initialized = useRef(false);
  const { playerLocId, playerRoomId } = useNavigationStore();

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    initMap();
  }, []);

  // navigationStore의 이동이 render-map.ts에 동기화
  useEffect(() => {
    setPlayerPosition(playerLocId, playerRoomId);
  }, [playerLocId, playerRoomId]);

  return null; // render-map.ts가 DOM을 직접 관리
}
```

### 단, `render-map.ts`의 이동 로직 수정이 필요함

현재 `render-map.ts`는 내부에서 직접 `playerLocId`/`playerRoomId`를 변경한다.  
Phase 9에서는 이 변경이 **Zustand 스토어를 통해서**만 이뤄지도록 수정:

```ts
// render-map.ts 내 moveToRoom/travelToLoc 로직 교체
import { useNavigationStore } from '../state/navigationStore';

// 기존: playerRoomId = room.id;
// 변경: useNavigationStore.getState().moveToRoom(room.id);

// 기존: playerLocId = destLoc.id; playerRoomId = arrival.id;
// 변경: useNavigationStore.getState().travelToLoc(destLoc.id);
```

### `NavPanel.tsx`에서 맵 열기 연결

```tsx
import { useMapStore } from '../../state/mapUiStore'; // isOpen 상태

<button className="nav-btn" onClick={openMap}>지  도</button>
```

### 검증
- 맵 버튼 클릭 → 맵 오버레이 열림
- 내부지도에서 "▶ 이동" → LocationBar 업데이트
- 세계지도 이동 → LocationBar 업데이트

---

## Phase 10 — 맵 오버레이: 완전 React 전환

> **주의**: 가장 복잡한 Phase. 충분한 시간을 확보하고 진행할 것.

### 목표
`render-map.ts`의 DOM 조작 코드를 모두 React JSX로 교체.

### 파일 구조

```
src/components/map/
├── MapOverlay.tsx          ← 최상위 (isOpen, global/interior 전환)
├── WorldMap/
│   ├── WorldMap.tsx        ← SVG + 노드 렌더링
│   ├── WorldMapNode.tsx    ← 개별 위치 노드
│   ├── WorldMapEdges.tsx   ← SVG 연결선
│   └── WorldMapLayout.tsx  ← 지리적 배경 SVG
├── InteriorMap/
│   ├── InteriorMap.tsx     ← 내부지도 컨테이너
│   ├── RoomNode.tsx        ← 개별 방 노드
│   ├── RoomEdges.tsx       ← SVG 연결선
│   └── LayoutBackground.tsx← 구조적 배경 SVG
└── shared/
    ├── LocationInfoPanel.tsx
    ├── RoomDetailPanel.tsx
    └── DangerDisplay.tsx
```

### 핵심 설계 포인트

#### SVG 연결선
기존의 `drawEdges()`/`drawRoomEdges()`는 SVG를 명령형으로 그린다.  
React에서는 `<line>` 요소를 선언적으로 렌더링하되,  
**노드의 실제 픽셀 위치는 `ref + ResizeObserver`로 계산**한다.

```tsx
// RoomEdges.tsx 핵심 구조
function RoomEdges({ loc, containerRef }) {
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const obs = new ResizeObserver(([entry]) => {
      setDims({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [containerRef]);

  return (
    <svg style={{ position:'absolute', inset:0, pointerEvents:'none' }}
         viewBox={`0 0 ${dims.w} ${dims.h}`}>
      {loc.roomEdges.map(([a, b]) => (
        <RoomEdgeLine key={`${a}-${b}`} from={a} to={b}
                      rooms={loc.rooms} dims={dims} ... />
      ))}
    </svg>
  );
}
```

#### 레이아웃 배경 (LayoutBackground)
기존 `drawLayoutBg()`의 SVG rect/line/text를 JSX로 선언:

```tsx
function LayoutBackground({ layout, w, h }) {
  return (
    <g className="layout-bg">
      {layout.regions?.map((r, i) => (
        <React.Fragment key={i}>
          <rect x={r.x/100*w} y={r.y/100*h}
                width={r.w/100*w} height={r.h/100*h}
                className={`lr lr-${r.style}`} />
          {r.label && (
            <text x={r.x/100*w+4} y={r.y/100*h+11} className="lr-label">
              {r.label}
            </text>
          )}
        </React.Fragment>
      ))}
      {/* outline, seps 동일 패턴 */}
    </g>
  );
}
```

#### 이동 상태 관리
모든 이동 로직이 `navigationStore`로 통합됨:
- `moveToRoom(roomId)` → RoomNode 클릭 → 사이드바에 이동 버튼 → 버튼 클릭 시 호출
- `travelToLoc(locId)` → WorldMapNode 클릭 → 이동 버튼 → 버튼 클릭 시 호출

### 검증
- 전체 맵 기능이 React 컴포넌트로 동작
- `render-map.ts` 파일 삭제 후에도 앱 정상 동작

---

## Phase 11 — 스타일 정리

### 목표
글로벌 CSS를 정리하고, 선택적으로 CSS Modules로 전환.

### 옵션 A: 글로벌 CSS 유지 (권장 — 작업량 최소)
`style.css`를 그대로 유지하되 미사용 클래스만 제거.

### 옵션 B: CSS Modules 부분 전환
컴포넌트별 `.module.css` 파일 생성.  
전역 스타일(`:root`, `body`, 터미널 테마)은 `style.css`에 유지.

```
style.css              ← 전역 (root, body, CRT, scrollbar)
components/
  left/StatsSection.module.css
  center/SceneText.module.css
  map/WorldMap.module.css
```

### 검증
- 스타일이 깨지지 않으면 성공

---

## Phase 12 — 레거시 코드 제거 & 최적화

### 목표
더 이상 사용하지 않는 파일을 제거하고 성능을 최적화한다.

### 삭제 대상 파일

```
src/main.ts              ← main.tsx로 대체됨
src/ui/game-shell.ts     ← App.tsx로 대체됨
src/ui/render-scene.ts   ← SceneText.tsx로 대체됨
src/ui/render-choices.ts ← ChoicesSection.tsx로 대체됨
src/ui/render-stats.ts   ← StatsSection.tsx로 대체됨
src/ui/render-inventory.ts ← InventorySection.tsx로 대체됨
src/ui/render-map.ts     ← Phase 10 완료 후 삭제
```

### 성능 최적화

```tsx
// 선택지 버튼 — choices 배열이 안 바뀌면 리렌더 없음
const ChoicesSection = memo(function ChoicesSection({ choices, onChoose }) {...});

// 아바타 — 정적이므로 절대 리렌더 불필요
const PlayerAvatar = memo(function PlayerAvatar() {...});

// 개별 방 노드 — roomId가 안 바뀌면 리렌더 없음
const RoomNode = memo(function RoomNode({ room, state, onClick }) {...});
```

### 최종 `tsconfig.json` 점검

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### 검증
- `npm run build` 오류 없음
- 번들 사이즈 이전 대비 크게 증가하지 않음

---

## 전체 Phase 요약표

| Phase | 작업 | 예상 난이도 | 기존 기능 유지 |
|-------|------|------------|--------------|
| 1 | 개발환경 전환 | ⭐ | ✅ |
| 2 | 진입점 & 루트 뼈대 | ⭐ | ✅ |
| 3 | 게임 상태 (Context) | ⭐⭐ | ✅ |
| 4 | 맵 위치 상태 (Zustand) | ⭐⭐ | ✅ |
| 5 | 레이아웃 셸 | ⭐ | ✅ |
| 6 | 좌측 패널 | ⭐⭐ | ✅ |
| 7 | 중앙 패널 + useTypewriter | ⭐⭐⭐ | ✅ |
| 8 | 우측 패널 + 레거시 제거 일부 | ⭐ | ✅ |
| 9 | 맵 Hybrid 래핑 | ⭐⭐⭐ | ✅ |
| 10 | 맵 완전 React 전환 | ⭐⭐⭐⭐⭐ | ✅ |
| 11 | 스타일 정리 | ⭐⭐ | ✅ |
| 12 | 최적화 & 정리 | ⭐⭐ | ✅ |

---

## 불변 원칙

1. **각 Phase 완료 후 `npm run dev` + 육안 확인** 필수
2. **Phase 10 진입 전 반드시 git commit** (롤백 포인트)
3. **엔진 코드 수정 금지** — `engine/*.ts`는 순수 함수이므로 그대로 사용
4. **데이터 수정 금지** — `data/*.ts`는 그대로 사용
5. **한 번에 하나의 컴포넌트** — 파일 단위로 이전, 묶음 이전 금지
6. **TypeScript strict 모드 준수** — `any` 타입 사용 금지

---

## 참고: 의존성 그래프 (이전 순서 근거)

```
types/index.ts                        (변경 없음)
data/map-data.ts, data/scenes/*.ts    (변경 없음)
engine/*.ts                           (변경 없음)
         ↓
state/GameContext.tsx  (Phase 3)       ← engine + types 의존
state/navigationStore.ts (Phase 4)    ← map-data 의존
         ↓
components/left/*   (Phase 6)         ← GameContext 의존
components/center/* (Phase 7)         ← GameContext + navigationStore 의존
components/right/*  (Phase 8)         ← 독립적
         ↓
components/map/*    (Phase 9-10)      ← navigationStore + map-data 의존
```
