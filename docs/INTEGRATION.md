# Web Hub 통합 완료 보고

## 사전 분석

작업 전 트리는 깨끗했으며 main은 790c7cd94e61a86a426cfb30a566fad5621c43ec였다. Web Hub는 React 19, React Router 7 HashRouter, Vite 7, Tailwind 4를 사용했고 base는 /web-hub/였다. GitHub Actions는 없었으며 npm run deploy의 gh-pages 방식으로 배포했다.

병합 대상 main은 1825db04e07208c1b6e0d6c5cdb56160c3071971이며, 13개 하위 프로젝트가 있었다. Park와 Study_record는 직접 복사 가능한 HTML/CSS/JS, 나머지 11개는 Vanilla JS + Vite 프로젝트다. jquery와 matter-js가 실제 import되는 런타임 의존성이다. 자기 자신을 가리키는 file: 의존성과 각 프로젝트의 gh-pages/Vite 설치는 통합 빌드에 필요하지 않다. Bootstrap CDN, 외부 폰트, Tenor/Giphy 이미지 의존성은 보존했다.

프로젝트의 동적 이미지·오디오 경로는 대부분 문서 기준 ./ 경로다. 각 프로젝트를 별도 URL 디렉터리에 빌드하고 public 에셋을 그 루트에 배치해 파일명 충돌을 피한다. advertise/htmls의 두 보조 문서는 별도 HTML entry로 빌드하고 base 태그로 동적 에셋 경로를 보정한다. 리듬 게임의 기존 루트 오디오 preload는 effect 파일을 빌드에서 자동 복사해 처리한다.

## 최종 구조

```text
web-hub/
├── legacy-games/             # 원본 subtree와 원본 이력, 수정의 유일한 원천
├── src/
│   ├── projects/projects.json # 프로젝트 콘텐츠·경로·OG 중앙 데이터
│   ├── projects/registry.ts   # React 타입과 URL helper
│   ├── App.tsx               # 전체 페이지 반응형 카드 그리드
│   └── main.tsx              # BrowserRouter + 기존 #/ 링크 호환
├── scripts/
│   ├── build-projects.mjs
│   ├── generate-og-pages.mjs
│   ├── validate-dist.mjs
│   ├── verify-history.mjs
│   └── smoke-browser.mjs
├── docs/history-baseline.json
├── .github/workflows/verify.yml
├── .build-projects/          # 생성된 임시 소스와 테스트 결과, Git 제외
└── dist/                    # 생성된 최종 배포 파일, Git 제외
    ├── index.html
    ├── games/<slug>/index.html
    ├── tools/<slug>/index.html
    ├── experiments/<slug>/index.html
    ├── <기존 React 경로>/index.html
    ├── mga/<하위 경로>/index.html
    ├── og/*.png
    ├── 404.html
    └── .nojekyll
```

public/legacy에 수동 복사본을 만들지 않는다. 빌드마다 legacy-games를 임시 작업 폴더로 복사한 뒤 루트 Vite API로 번들링하거나 정적 파일을 dist로 복사한다. 과거 Vite 설정과 패키지 manifest는 원본으로 보존하고, 통합 빌드에서는 해당 설정을 로딩하지 않는다.

## 통합 HTML 프로젝트

아래 경로 앞에는 /web-hub를 붙인다.

| 원본 디렉터리 | 개별 URL |
| --- | --- |
| AiArtMuseum | `/experiments/ai-art-museum/` |
| Animation-quiz-game | `/games/animation-quiz/` |
| English_Voca_game | `/games/english-voca/` |
| Memory-Flip-Game | `/games/memory-flip/` |
| Park | `/experiments/park/` |
| Quiz-Game | `/games/computer-quiz/` |
| Rhythm-Game | `/games/rhythm-game/` |
| Study_record | `/tools/study-record/` |
| Text-Adventure-Game | `/games/text-adventure/` |
| advertise | `/experiments/advertise/` |
| avoid-game | `/games/avoid-game/` |
| fruit-game | `/games/fruit-game/` |
| inspection-game | `/games/inspection-game/` |

advertise/htmls/bettery.html과 captcha.html도 해당 프로젝트 URL 아래에 보존했다. avoid-game은 원본에서부터 WASD 이동만 구현한 미완성 프로젝트이며 그대로 포함했다.

## React 변경

App.tsx는 단순한 반응형 카드 그리드로 모든 31개 페이지를 표시한다. 제목·설명·경로·썸네일은 중앙 레지스트리에서 가져온다. 기존 React 프로젝트, Vanilla 프로젝트 13개, 히로인 정보 및 MGA 하위 페이지까지 메인에서 바로 이동할 수 있다. 모바일은 1열, 큰 화면은 최대 4열로 표시한다. React 카드는 Router Link, Vanilla 카드는 독립 문서로 이동하는 일반 링크를 사용한다.

main.tsx는 basename=/web-hub/인 BrowserRouter를 사용한다. 기존 /web-hub/#/network-quiz 같은 북마크는 시작 시 동일한 일반 경로로 변환한다. 기존 12개 루트 경로와 MGA의 7개 하위 경로에 각각 index.html을 생성하므로 직접 접근과 새로고침이 가능하다. 기존 페이지 구현은 유지했다.

## OG 방식

generate-og-pages.mjs가 모든 프로젝트의 초기 HTML head에 제목, 설명, og:type/title/description/image/url, 이미지 크기, twitter:card, canonical을 삽입한다. 기존 OG 태그는 제거 후 단일 값으로 교체한다. 크롤러는 JavaScript 실행 없이 이를 읽는다. React는 경로별 정적 초기 셸을 생성하고 BrowserRouter가 해당 화면을 실행한다.

홈을 포함해 32개 고유 OG PNG를 생성한다. 원본 이미지가 있으면 1200×630 크롭과 프로젝트 제목을 적용하고, 없으면 프로젝트별 색상·제목 카드로 생성한다. 기본 이미지도 og/default.png에 제공한다. React는 기존 public 이미지를 재사용하며 화면 콘텐츠의 서버 렌더링은 도입하지 않았다. 이미지와 og:url은 package.json의 homepage를 기준으로 절대 HTTPS URL을 생성한다.

## Git 이력 보존

squash 없는 subtree add를 사용했다. 두 저장소의 gh-pages 배포 브랜치도 파일 내용 변경 없는 ours merge로 부모에 연결해 개발·배포 이력을 모두 보존했다. Web Hub의 gh-pages는 orphan 이력이므로 allow-unrelated-histories로 연결했다.

| 기준 브랜치 | 작업 전 SHA | 도달 가능한 원본 커밋 수 |
| --- | --- | --- |
| web-hub/main | 790c7cd94e61a86a426cfb30a566fad5621c43ec | 19 |
| web-hub/gh-pages | 519db2944a8f40fa5e04e99f1aec229bb74f830b | 17 |
| javascript-web-games/main | 1825db04e07208c1b6e0d6c5cdb56160c3071971 | 175 |
| javascript-web-games/gh-pages | f64995149c28d3594d7675ecc7d12beab67404bb | 234 |

원본 main들의 merge-base --is-ancestor는 성공했고, 각 원본 ref의 rev-list SHA --not HEAD 결과는 빈 값이다. SHA와 기존 트리 경로를 재작성하지 않았다. 원본 저장소를 수정하지 않았고 force push나 원격 main 직접 push를 사용하지 않는다.

**PR은 반드시 Create a merge commit으로 병합한다. Squash and merge 또는 Rebase and merge는 사용하지 않는다.** main 병합 후 npm run test:history를 실행하면 네 기준 SHA 전체의 도달 가능성을 재검증한다. CI도 같은 검증을 수행하므로 이력을 잃은 병합을 감지한다.

## 빌드·검증

Node 22 권장. npm ci 후 npm run build 한 번으로 React 빌드, 13개 프로젝트 빌드/복사, OG HTML·PNG 생성, 로컬 에셋 참조 검증을 실행한다.

- TypeScript 및 전체 통합 빌드 통과.
- 통합 초기 전체 lint는 기존 코드의 18개 오류·9개 경고로 실패했다. 그리드 전환 후 변경한 App.tsx·main.tsx·registry.ts의 lint는 통과한다. 다른 기존 페이지의 lint 문제는 별도 유지보수 대상이다.
- 31개 레지스트리 진입점의 고유 OG 제목·설명·이미지, 절대 URL 및 PNG 크기 검증 통과.
- 원본 static public 에셋 파일 크기 및 진입 HTML의 class 마크업 보존 검증 통과.
- HTML/CSS 로컬 참조 143개 검증 통과.
- Chromium에서 홈 + 31개 진입점 + 2개 보조 HTML, 직접 접근·새로고침·기존 해시 북마크 검증 통과. 메인 카드 31개 표시, React·HTML 카드 실제 클릭 이동 및 모바일 가로 넘침 없음도 확인했다.
- 게임 시작·카드 생성·리듬 화면 전환·키보드 입력·영단어 답변·미술관 모달 실행 확인.
- Canvas가 있는 페이지의 Canvas 로딩 및 모든 원본 MP3의 브라우저 디코딩 검증 통과. 실제 스피커 음질·모바일 터치·모든 게임 분기는 수동 확인 대상이다.
- 브라우저 보고서와 화면 캡처는 .build-projects 안에 생성한다.

원본 코드의 재생 제한 오류와 undefined.mp3 요청을 수정했다. 영단어 게임에서 addFruit()를 인자 없이 재호출해 1초 후 발생하는 오류도 제거했다. 유효한 사용자 입력과 게임 동작은 보존했다.

기존 일정 화면의 외부 noise.svg는 HTTP 402, Cthulhu의 Giphy 링크는 HTTP 404를 반환했다. 메인의 외부 noise.svg 의존성은 그리드 전환으로 제거됐다. 로컬 파일 누락과 별도로 브라우저 보고서에 기록하며, 외부 URL의 가용성은 독립적으로 확인해야 한다. 기존 Japan CSS의 .animate-* 문법 경고와 큰 번들 경고도 남아 있다.

의존성은 호환 버전 범위 내에서 보안 수정했고 새 sharp는 0.35.5 이상을 사용한다. npm audit에는 기존 gh-pages → globby → fast-glob → micromatch → braces 체인의 high 항목 5개가 남는다. 이는 배포 CLI의 glob 처리이며 자동 major 변경이나 force fix는 수행하지 않았다.

## GitHub Pages 배포 및 실제 공유 확인

기존 gh-pages 배포 방식을 유지한다. 추가 GitHub Actions는 PR/main의 빌드·브라우저·이력 검증용이며 자동 배포하지 않는다.

1. PR을 merge commit 방식으로 main에 병합한다.
2. main에서 npm ci, npm run test:history, npm run deploy를 실행한다. Windows PowerShell에서는 npm.cmd를 사용할 수 있다.
3. deploy는 predeploy 전체 빌드 후 dist를 기존 gh-pages 브랜치에 게시한다. .nojekyll도 포함한다.
4. GitHub Settings → Pages에서 gh-pages 브랜치 / (root) 배포 설정을 유지한다.
5. 배포 후 아래 명령으로 서로 다른 두 페이지의 실제 응답을 확인한다.

```sh
curl -L https://asa9874.github.io/web-hub/games/rhythm-game/
curl -L https://asa9874.github.io/web-hub/games/memory-flip/
```

각 응답에서 고유 og:title/description/image/url을 확인하고 해당 이미지 URL이 200을 반환하는지 확인한다. 카카오 공유 디버거에서 URL별 캐시를 초기화한 뒤 실제 채팅에 두 링크를 공유해 제목·설명·이미지 차이를 확인한다. 초기 HTML의 OG 검증은 통과했지만 실제 Pages 게시와 카카오의 캐시·미리보기 확인은 PR 병합 이후 수행해야 한다.

## 새 프로젝트 추가

1. legacy-games/<원본 디렉터리>/에 원본을 추가한다. 별도 저장소 이력을 보존해야 하면 squash 없는 subtree add를 사용한다.
2. src/projects/projects.json에 id, title, description, category, path, thumbnail, ogImage, type을 등록한다. Vanilla 프로젝트는 type=static, source=<디렉터리>를 지정한다.
3. 경로는 /games/<slug>/, /tools/<slug>/, /experiments/<slug>/ 중 하나를 사용한다. public 에셋은 원본 프로젝트 public에 두고 문서 기준 상대경로로 참조한다.
4. 기존 이미지가 있으면 ogSource에 원본 프로젝트 기준 상대경로를 지정한다. 없으면 고유 제목 카드가 자동 생성된다. thumbnail은 /web-hub/og/<id>.png를 쓸 수 있다.
5. 추가 npm import가 있다면 루트 package.json에 실제 런타임 의존성만 추가한다.
6. npm run build, npm run test:browser로 검증한다. 허브 카드는 레지스트리에서 자동으로 추가된다.
7. 새 React 페이지는 기존 방식대로 main.tsx에 Route를 추가하고 같은 경로를 레지스트리에 등록한다. 모든 레지스트리 페이지는 메인 그리드에 표시된다.

정적 프로젝트까지 로컬 확인하려면 npm run build 후 npm run preview를 사용한다. npm run dev는 기존 React 개발 서버이며 generated OG와 Vanilla 배포 결과는 preview로 확인한다.
