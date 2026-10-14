# 잊혀진 마녀의 극장 — 다른 PC / Codex 인수인계

이 문서는 대화 기록이나 기존 PC의 파일 없이 개발을 이어가기 위한 시작점이다. 경로는 모두 저장소 루트 기준이며 Windows 전용 절대 경로를 사용하지 않는다.

## 현재 상태

- 게임: 브라우저 플레이 가능한 첫 챕터 프로토타입 v0.1.
- 작업 브랜치: `feat/forgotten-witch-theater`.
- 시작 → 이동/점프 → 다리 드래그/실제 통과 → 플로라 대화/분기 → 조명 퍼즐 → 커튼/완료까지 연결되어 있다.
- 최근 변경: 감정별 초상화/말소리와 대사 출력 리듬, 읽기 쉬운 종이 UI, 로컬 CC0 효과음, 기능별 테스트 이동, 3라이프 전투와 전체 커튼 재등장, 임시 설정집과 마녀의 노트. 기존 화면 끝 지지대/포즈/조명/갤러리도 유지한다.
- 추가 확장: 일반 몬스터 20종과 보스 후보, 몬스터/NPC 선택 리허설, 새 NPC 6명의 감정 그림/고유 음색, 구르기 무적, 사물 22항목 및 음악 6항목의 Suno 프롬프트. 모든 설정과 음악은 후보 단계다.
- 최신 연출: 실제 에셋 로딩/SD 소극장, 화면 이동 커튼, 모달 입퇴장, 구역 자막과 입력 복구. 로딩 중 이탈도 정리한다. 아래 최신 이어받기 항목 참고.
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

페이지를 열면 `테스트`를 눌러 시작한다. 본공연의 `극장에 들어가기`는 아직 비활성화다. `테스트 위치`에서 기능별 이동이 가능하다. 다른 프로그램이 5173 포트를 사용한다면 사용 가능한 포트로 실행하고 주소도 바꾼다. 자동 게임 테스트는 기본 5173을 사용하므로 포트를 바꿨다면 `WITCH_TEST_URL`도 맞춘다.

## 먼저 읽을 파일

1. [게임 README](../README.md): 조작, 흐름, 모듈, 테스트, 현재 아트 범위.
2. [작업 기록](WORKLOG.md): 무엇을 구현했고 왜 바꿨는지.
3. [사용자 레퍼런스](reference.png): 색감, 종이 질감, SD 캐릭터 디자인.
4. [에셋 생성 기록](../../../public/witch-theater/ASSETS.md): 실제 생성 프롬프트, 원본/파생 에셋.
   [UI 참고 조사](UI-REFERENCES.md)도 타이틀/대화 디자인 변경 전에 확인한다.
5. `src/ForgottenWitch/config.ts` → `model.ts` → `TheaterScene.ts`: 설정, 로직, 렌더링 순서.

## 어디를 수정할지

몬스터/NPC 수치와 디자인: `castData.ts`; 패턴/보스/구르기 판정: `combatModel.ts`; 소환 UI: `TestPanel.tsx`; 새 대사: `npc-dialogue.json`; 사물 목록: `objectData.ts`; 음악 프롬프트: `musicData.ts`. 사물 이미지 재추출은 `npm run witch:export-props`, 확장 검증은 `npm run test:witch-expansion`이다.

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
| 주인공 빛/그림자/달·별 발광/순차 점등 | `StageLighting.ts` |
| 대사/화자/감정/최초·재방문·조명 이후 분기 | `dialogue.json` |
| 구간별 cps/휴지/색/크기/진행 잠금/속도 조절 | `dialogueModel.ts`, `Dialogue.tsx` |
| 캐릭터/감정별 합성 말소리 | `dialogueModel.ts`, `sound.ts` |
| 감정 초상화 / 실제 편집 프롬프트 | `public/witch-theater/expressions/`, `codex/expression-prompts.json` |
| 대화창/팝업 드래그/엔진 생명주기 | `ForgottenWitch.tsx`, `ForgottenWitch.css` |
| 종이 소품 재질 | `paper.ts` |
| 로컬 합성 효과음 | `sound.ts` |
| 허브 카드/URL/OG 등록 | `src/projects/projects.json`, `src/main.tsx` |
| 실제 게임 플레이 회귀 테스트 | `scripts/test-witch.mjs` |
| 일러스트 목록/이름/설명/생성 프롬프트 | `illustrations.json`, `Illustrations.tsx` |
| 컷씬 후보 실제 이미지 | `public/witch-theater/cutscenes/` |
| 테스트 위치/순간이동 | `config.ts` TEST_AREAS, `TheaterScene.ts` teleport |
| 전투 수치/몬스터 AI/투사체 | `combatModel.ts`, `CombatStage.ts` |
| 라이프 / 게임 오버 커튼 | `Lives.tsx`, `GameOver.tsx` |
| 설정집 / 마녀의 노트 | `CodexBook.tsx`, `codexData.ts` |
| 무료 효과음 / 출처 / 라이선스 | `public/witch-theater/audio/`, `sound.ts` |

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
- 숲 소품 변형과 추가 공격/구르기 이미지 프레임은 다음 아트 개선 후보다. 걷기 중간 걸음과 하강 포즈는 추가했다. 현재 두 캐릭터의 기본/기쁨/걱정/분노/당황 초상화가 있으며, 추가 대화 그림도 기존 주인공 그림체를 기준으로 통일하고 무릎 위까지 보이는 독립 레이어로 유지한다.
- 최신 사용자 요청으로 테스트 전투/3라이프/런타임 재등장을 추가했다. 인벤토리/서버/복잡한 영구 저장은 범위 밖이다.
- 실제 연결된 다리만 충돌해야 하며, 닫힌 커튼은 진입을 막아야 한다. 성공 문구만 바꾸는 퍼즐로 대체하지 않는다.
- 모든 조종 가능한 무대 소품에는 `rig.attach()`를 호출한다. 막대 연결점은 실제 이미지 변환/반전/패럴랙스를 따라가고 화면 끝을 넘어야 한다. 배경 종이/조명 효과/텍스트는 무대 소품에 포함하지 않는다.
- 막대 깊이는 지형(depth 6)보다 낮게 유지한다. 바닥 앞에 막대를 다시 그리는 레이어는 사용하지 않는다.
- 게임 내부 UI는 1280×720 논리 좌표를 ResizeObserver로 함께 스케일한다. 확대 시 별도로 reflow하는 viewport 기반 크기나 media query를 내부에 넣지 않는다. UI 리사이즈/zoom 회귀 검증을 유지한다.
- 갤러리의 20점은 미확정 컷씬 후보이다. 실제 플레이의 스토리로 자동 반영하지 않는다. 상세 프롬프트는 실제 image_gen 제출 문자열을 저장한다.
- 조명은 약한 로컬 그라데이션과 원본의 얇은 그림자로 유지한다. bloom/네온/지형 충돌에 영향을 주는 환경 애니메이션을 추가하지 않는다. StageLife의 저속 sway/드문 3초 미스터리 동작은 탐험 시간 기준이며 reduced-motion을 따른다.
- 사용자 최신 요구에 따라 대사는 출력 완료 후에만 진행한다. 즉시 펼치기나 입력 큐로 되돌리지 않는다. 감정 키가 표정/출력 기본 cps/말소리 pitch·gain·duration을 함께 제어한다. segment별 리듬과 강조, 사용자 속도는 게임 README의 예시를 참고한다.
- `poses.ts`의 몸체 연결점을 기준으로 반전 시 피벗도 함께 바꾼다. 이미지 전체 중심을 몸체 중심으로 간주하면 포즈 전환 때 몸과 막대가 어긋난다.
- 기존 허브/레거시 게임과 커밋 이력은 유지한다. `src/ForgottenWitch/AGENTS.md`의 작업 지침도 따른다.

## 흔한 확인 사항

- Windows PowerShell에서 `npm.ps1` 실행 정책 오류가 나면 같은 명령의 `npm`을 `npm.cmd`로 바꾼다. 시스템 실행 정책을 변경할 필요는 없다.
- 새 이미지는 `public/witch-theater/`에 넣고 `assetUrl()` 및 preload에 등록한다. Codex PC의 절대 경로를 런타임에서 사용하지 않는다.
- 화면 입력/오디오 정리는 Phaser SHUTDOWN과 DESTROY 모두에서 처리한다. React StrictMode의 두 번 실행, 재시작, 다른 페이지 이동을 확인한다.
- `npm run build`는 `.build-projects/`를 다시 만든다. 이 폴더에만 있는 파일을 제품 소스로 사용하지 않는다.
- 기존 `.animate-*` CSS 경고/큰 번들 경고와 외부 GIF 404 / noise SVG 402는 기존 프로젝트 범위다. 게임은 모든 에셋을 로컬에서 로딩한다.
- 세션 종료 전에 코드/에셋/문서를 커밋하고 사용자가 요청한 브랜치에 push한다. 다른 PC에서는 해당 브랜치를 `git pull --ff-only`로 받은 뒤 시작한다.


## 최신 이어받기: 로딩 / 화면 전환

- `StageMotion.tsx` / `StageMotion.css`: 로딩 SD 극장, 전환 커튼, 모달 퇴장, 구역 자막과 작은 UI 반응.
- `useStageTransition.ts`: 중복 전환 방지, 실제 작업을 가려진 구간에서 실행, unmount 타이머 정리. 새로운 화면 이동은 `travel()`로 연결한다.
- `TheaterScene.motionLock()`은 커튼 중 입력/물리/전투/환경 시간 정지. `softLockUntil`은 퇴장 페이드 동안 입력 중복 방지. DOM만 가리는 전환을 추가하지 않는다.
- `TheaterSound.prepare()`는 실제 파일 다운로드, `unlock()`은 사용자 입력 이후 디코딩. BGM 후보에는 실제 파일이 없다는 상태를 유지한다.
- 테스트는 전환/퇴장/로딩 DOM이 사라진 뒤 실제 입력한다. `npm run test:witch-motion`을 기존 두 Witch 테스트와 함께 실행한다. CI에도 등록했다.


## 최신 이어받기: 빠른 동작 / 입자

이동 수치는 config.ts에서 조절한다. PlayerMotion.ts는 실제 거리 기반 걷기 주기와 동작 이벤트/몸 기울기를 담당하며 일시정지 중 업데이트하지 않는다. 새 걷기/하강 PNG는 poses.ts와 Phaser preload, 설정집에 등록했다. 프레임별 몸 중심·발끝·반전과 막대를 함께 검수한다. StageLife.motion()은 작은 종이 입자이며 수명/90개 상한/reduced-motion/모달 정지/순간이동 정리를 유지한다. 신규 검증은 `npm run test:witch-movement`. 실사용 이미지2점과 실제 프롬프트 movement-image-prompts.json을 Git으로 함께 받는다.


## 최신 이어받기: 생동감 10요소 / 함정

- livingData.ts: 실험실 이동 버튼 9개(전투 2요소는 기존 몬스터 선택), 함정 설정3종. livingModel.ts는 바람/이동 발판/장치/함정/NPC 반응/숨겨진 문/대기를 관리한다. LivingStage.ts는 독립 소품과 막대/표시를 렌더링한다.
- moveActor의 선택적 MovementEnvironment가 실제 바람 이동, 움직이는 발판 탑승, 비밀 통로 충돌을 담당한다. 기존 호출은 같은 물리를 유지한다. 플랫폼은 이전 높이/변위를 보관해야 탑승자가 함께 움직인다.
- 체크포인트는 world.restPoint/Scene.respawnPoint를 함께 설정한다. E 휴식으로 라이프3 회복. debug 이동은 해당 테스트 시작점으로 다시 지정하며, 새 공연은 장치/발견/체크포인트를 초기화한다.
- combatModel의 stagger/knock/deathAge와 warning 이벤트, CombatStage의 준비 표시/접힘 퇴장은 모든 몬스터에 공통이다. damagePlayer는 적/함정의 무적·구르기 판정을 공유한다.
- 함정 카테고리3, 사물31. 그림 변경 시 witch:export-props, 신규 검증 test:witch-living. 새 PNG2점의 실제 프롬프트는 idle-image-prompts.json.
- 완료 기록/실행 결과는 WORKLOG.md의 최신 항목을 참고한다. 낮은 우선순위였던 조종사 실수와 객석 상황 반응은 이번 범위에 넣지 않았다.
