# 추가 게임 통합

void-game, text-game, deck-game을 squash 없는 subtree로 legacy-games/ 아래에 추가했다. 원본 저장소를 수정하지 않았으며 기존 SHA를 유지했다. text-game과 deck-game의 feature·gh-pages 이력도 ours merge로 연결했다. 기준 SHA는 history-baseline.json에 기록한다.

| 프로젝트 | URL | 런타임 |
| --- | --- | --- |
| VOID · 탄막 슈팅 | /web-hub/games/void-game/ | Phaser 3.88.2 |
| 심연 · 텍스트 생존 게임 | /web-hub/games/text-game/ | Vanilla TypeScript |
| 덱 빌딩 게임 | /web-hub/games/deck-game/ | Phaser 4.1.0 |

## 구조 및 빌드

원본은 legacy-games/{void-game,text-game,deck-game}/에 보관한다. src/projects/projects.json을 사용하는 메인 그리드가 34개 프로젝트를 자동 표시한다. src/projects/registry.ts에는 빌드 설정 타입을 추가했으며 다른 React 페이지는 수정하지 않았다.

Phaser는 phaser3·phaser4 npm alias로 원본 버전을 각각 설치한다. scripts/build-projects.mjs는 dependencyAliases를 Vite resolve.alias에 연결한다. typecheck:true 프로젝트는 임시 tsconfig로 TypeScript 6 검사를 수행한다. 원본 설정은 보존하며 생성 파일은 .build-projects/와 dist/에 작성한다.

npm run build로 React와 16개 static 프로젝트, 프로젝트별 초기 HTML OG 및 1200×630 PNG를 생성한다. 새 게임에는 게임용 이미지가 없어 제목 카드를 생성한다. 이후 ogSource를 등록해 교체할 수 있다. 이미지와 페이지 URL은 절대 HTTPS 주소이다.

## 검증 및 배포

npm run test:history로 13개 기준 SHA 및 전체 조상을 검사한다. npm run build로 신규 게임 타입 검사, 34개 프로젝트 OG/이미지 및 149개 로컬 HTML/CSS 에셋 참조를 검증한다. npm run test:browser는 전체 직접 접근·새로고침, 그리드 링크, 기존 게임/오디오, 새 게임 Canvas 클릭·키보드 및 텍스트 선택지·지도 동작을 검사한다. Phaser 화면은 캡처로 추가 확인한다. 전체 게임 분기와 실물 모바일 조작은 수동 확인 대상이다.

PR을 merge commit으로 병합한 뒤 main에서 npm run test:history, npm run deploy를 실행한다. 기존 gh-pages 배포를 사용하며 force push와 main 직접 push는 사용하지 않는다. 배포 후 실제 페이지 HTML·OG 이미지를 확인한다. 카카오 공유 디버거에서 캐시 초기화 후 공유 미리보기를 확인할 수 있다. 기존 CSS 문법 및 큰 번들 경고는 남아 있다.

## 이후 추가

새 저장소를 squash 없는 subtree로 legacy-games/<id>에 넣고 레지스트리에 static/source/path/OG 정보를 등록한다. 런타임은 루트 package.json에 설치한다. 동일 패키지의 서로 다른 버전은 npm alias와 dependencyAliases로 연결한다. TypeScript 6 프로젝트는 typecheck:true로 등록한다. 기준 SHA를 history-baseline.json에 기록하고 빌드·브라우저·이력 검증 후 merge commit PR로 반영한다.
