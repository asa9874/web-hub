# 잊혀진 마녀의 극장 — 다른 PC / Codex 인수인계

이 문서는 대화 기록이나 기존 PC의 파일 없이 개발을 이어가기 위한 시작점이다. 경로는 모두 저장소 루트 기준이며 Windows 전용 절대 경로를 사용하지 않는다.

## 현재 상태

- 게임: 브라우저 플레이 가능한 첫 챕터 프로토타입 v0.1.
- 작업 브랜치: `feat/forgotten-witch-theater`.
- 시작 → 이동/점프 → 다리 드래그/실제 통과 → 플로라 대화/분기 → 조명 퍼즐 → 커튼/완료까지 연결되어 있다.
- 최근 변경: 모든 무대 소품의 화면 끝 지지대, 주인공 걷기/점프 포즈, 몸체 피벗과 좌우 반전, 인디 UI를 조사한 새 타이틀, 통일된 무릎 위 대화 그림, 기존 무대 반응, 이어받기 문서.
- 공개 Pages는 main/gh-pages 기준이다. 작업 브랜치 최신 상태는 아래 명령으로 로컬 실행한다. 최신 커밋은 `git log -5 --oneline`으로 확인한다.
- 원래 v0.1 구현 커밋: `8db7334`. 상세 변경 이유는 [WORKLOG.md](WORKLOG.md).

## 다른 PC에서 바로 실행

필요한 도구는 Git, Node.js 22.12 이상(기존 CI와 같은 Node 22 사용 가능), npm이다. 런타임 이미지/폰트/코드/사용자 레퍼런스는 Git에 포함되어 있다. 서버, 데이터베이스, API 키, Codex 생성 이미지 폴더를 옮길 필요가 없다.

처음 받는 경우:

```sh
git clone --branch feat/forgotten-witch-theater https://github.com/asa9874/web-hub.git
cd web-hub
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
```

이미 clone한 저장소에서 처음 이 브랜치를 받는 경우, 먼저 `git status`로 기존 수정사항을 확인한다. 수정사항이 있으면 먼저 자신의 작업을 보관/커밋한 뒤 전환한다.

```sh
git fetch origin
git switch --track origin/feat/forgotten-witch-theater
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
```

이미 같은 로컬 브랜치가 있는 경우:

```sh
git switch feat/forgotten-witch-theater
git pull --ff-only origin feat/forgotten-witch-theater
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
```

게임: http://127.0.0.1:5173/web-hub/games/forgotten-witch/

페이지를 열면 `극장에 들어가기`를 눌러 시작한다. 다른 프로그램이 5173 포트를 사용한다면 사용 가능한 포트로 실행하고 주소도 바꾼다. 자동 게임 테스트는 기본 5173을 사용하므로 포트를 바꿨다면 `WITCH_TEST_URL`도 맞춘다.

## 먼저 읽을 파일

1. [게임 README](../README.md): 조작, 흐름, 모듈, 테스트, 현재 아트 범위.
2. [작업 기록](WORKLOG.md): 무엇을 구현했고 왜 바꿨는지.
3. [사용자 레퍼런스](reference.png): 색감, 종이 질감, SD 캐릭터 디자인.
4. [에셋 생성 기록](../../../public/witch-theater/ASSETS.md): 실제 생성 프롬프트, 원본/파생 에셋.
   [UI 참고 조사](UI-REFERENCES.md)도 타이틀/대화 디자인 변경 전에 확인한다.
5. `src/ForgottenWitch/config.ts` → `model.ts` → `TheaterScene.ts`: 설정, 로직, 렌더링 순서.

## 어디를 수정할지

| 작업 | 파일 |
| --- | --- |
| 이동/점프 속도, 가속, 중력, coyote/buffer 시간 | `config.ts` |
| 충돌, 다리/문 잠금, 월드 진행 상태 | `model.ts` |
| 다리 스냅, 카메라, NPC 위치, 커튼/조명 | `config.ts`, `TheaterScene.ts` |
| 화면 끝 막대, 나무/달/별 등 소품 연결 | `rig.ts`, `TheaterScene.ts` |
| 포즈 이미지, 크기, 몸체 피벗/연결점 | `poses.ts`, `public/witch-theater/` |
| 팝업 판넬의 막대 | `DomPaperRods.tsx` |
| 타이틀 레이아웃/실제 메뉴/극장 프레임 | `TitleScreen.tsx`, `ForgottenWitch.css` |
| 먼지/착지/별/시계꽃 반응 | `StageLife.ts`, `TheaterScene.ts` |
| 대사/화자/감정/최초·재방문·조명 이후 분기 | `dialogue.json` |
| 대화창/팝업 드래그/엔진 생명주기 | `ForgottenWitch.tsx`, `ForgottenWitch.css` |
| 종이 소품 재질 | `paper.ts` |
| 로컬 합성 효과음 | `sound.ts` |
| 허브 카드/URL/OG 등록 | `src/projects/projects.json`, `src/main.tsx` |
| 실제 게임 플레이 회귀 테스트 | `scripts/test-witch.mjs` |

## 변경을 확인하는 순서

개발 서버를 켠 채 별도 터미널에서:

```sh
npx playwright install chromium
npm run test:witch
```

브라우저 테스트는 퍼즐을 직접 드래그하고 키보드를 누르며 검사한다. 게임 상태를 우회해서 성공시키는 방식이 아니다. 스크린샷/리포트는 `.build-projects/`에 생성되며 Git에 넣지 않는다.

빌드 및 기존 기능 검증:

```sh
npm run build
npm run test:history
npm run test:browser
```

`build`가 `test:dist`에 해당하는 경로/OG 검증까지 실행한다. Linux에서 Playwright 실행 환경이 없다면 `npx playwright install --with-deps chromium`을 사용한다.

production preview 확인은 별도 터미널에서 `npm run preview -- --host 127.0.0.1 --port 4173`를 켠 뒤:

```powershell
$env:WITCH_TEST_URL='http://127.0.0.1:4173/web-hub'
npm run test:witch
```

macOS/Linux:

```sh
WITCH_TEST_URL=http://127.0.0.1:4173/web-hub npm run test:witch
```

## 이어서 할 작업 / 지켜야 할 결정

- 사용자 플레이 피드백을 먼저 받고 이동/점프/스냅 및 포즈 크기를 조정한다.
- 표정별 고품질 초상화, 숲 소품 변형, 걷기 반대 발 포즈는 다음 아트 개선 후보다. 대화 그림은 기존 주인공 그림체를 기준으로 통일하며, 무릎 위까지 보이는 독립 레이어로 유지한다.
- 전투/체크포인트는 다음 버전에서 별도 설계한다. 이번 버전에 적/HP/인벤토리/서버/복잡한 저장을 추가하지 않는다.
- 실제 연결된 다리만 충돌해야 하며, 닫힌 커튼은 진입을 막아야 한다. 성공 문구만 바꾸는 퍼즐로 대체하지 않는다.
- 모든 조종 가능한 무대 소품에는 `rig.attach()`를 호출한다. 막대 연결점은 실제 이미지 변환/반전/패럴랙스를 따라가고 화면 끝을 넘어야 한다. 배경 종이/조명 효과/텍스트는 무대 소품에 포함하지 않는다.
- `poses.ts`의 몸체 연결점을 기준으로 반전 시 피벗도 함께 바꾼다. 이미지 전체 중심을 몸체 중심으로 간주하면 포즈 전환 때 몸과 막대가 어긋난다.
- 기존 허브/레거시 게임과 커밋 이력은 유지한다. `src/ForgottenWitch/AGENTS.md`의 작업 지침도 따른다.

## 흔한 확인 사항

- Windows PowerShell에서 `npm.ps1` 실행 정책 오류가 나면 같은 명령의 `npm`을 `npm.cmd`로 바꾼다. 시스템 실행 정책을 변경할 필요는 없다.
- 새 이미지는 `public/witch-theater/`에 넣고 `assetUrl()` 및 preload에 등록한다. Codex PC의 절대 경로를 런타임에서 사용하지 않는다.
- 화면 입력/오디오 정리는 Phaser SHUTDOWN과 DESTROY 모두에서 처리한다. React StrictMode의 두 번 실행, 재시작, 다른 페이지 이동을 확인한다.
- `npm run build`는 `.build-projects/`를 다시 만든다. 이 폴더에만 있는 파일을 제품 소스로 사용하지 않는다.
- 기존 `.animate-*` CSS 경고/큰 번들 경고와 외부 GIF 404 / noise SVG 402는 기존 프로젝트 범위다. 게임은 모든 에셋을 로컬에서 로딩한다.
- 세션 종료 전에 코드/에셋/문서를 커밋하고 사용자가 요청한 브랜치에 push한다. 다른 PC에서는 해당 브랜치를 `git pull --ff-only`로 받은 뒤 시작한다.
