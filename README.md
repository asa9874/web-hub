# Web Hub

React 게임·도구와 기존 Vanilla 웹 프로젝트를 함께 제공하는 개인 웹 허브입니다.

```sh
npm ci
npm run build
npm run preview
```

통합 구조, 전체 프로젝트 URL, 이력 검증, 배포 및 신규 프로젝트 추가 방법은 [통합 보고서](docs/INTEGRATION.md)를 참고하세요.

**통합 PR은 merge commit으로 병합해야 원본 커밋 SHA가 main에 보존됩니다. Squash/Rebase merge를 사용하지 마세요.**

- 프로젝트 중앙 데이터: src/projects/projects.json
- 이력 검증: npm run test:history
- 산출물 검증: npm run test:dist
- 브라우저 검증: npx playwright install chromium 후 npm run test:browser
- Pages 배포: main 병합 후 npm run deploy

## 잊혀진 마녀의 극장 개발

골판지 인형극 스타일의 횡스크롤 퍼즐 어드벤처 v0.1. 이동/점프, 다리 드래그, 플로라 대화, 조명 퍼즐과 커튼 개방까지 플레이할 수 있습니다. 게임 코드와 모든 런타임 이미지는 저장소에 포함됩니다. API 키·백엔드·별도 에셋 다운로드는 필요 없습니다.

- [게임 README](src/ForgottenWitch/README.md): 실행, 조작, 구조 및 검증.
- [다른 PC / Codex 이어받기](src/ForgottenWitch/codex/README.md): 현재 상태, 작업 지점, Git 절차와 변경 원칙.
- [작업 기록](src/ForgottenWitch/codex/WORKLOG.md): 완료한 기능과 수정 이유.
- [이미지 생성 기록](public/witch-theater/ASSETS.md): 실제 프롬프트와 에셋 출처.

필요 환경: Git, Node.js 22.12 이상(기존 CI는 Node 22), npm. 다른 PC에서 새 게임 작업 브랜치를 처음 받는 경우:

```sh
git clone --branch feat/forgotten-witch-theater https://github.com/asa9874/web-hub.git
cd web-hub
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
```

게임 주소: http://127.0.0.1:5173/web-hub/games/forgotten-witch/

이미 저장소가 있는 PC의 브랜치 전환/업데이트 및 테스트 방법은 [이어받기 문서](src/ForgottenWitch/codex/README.md)를 참고하세요. GitHub Pages의 공개 버전은 main/gh-pages 기준이고, 위 작업 브랜치의 최신 게임은 로컬에서 실행해 확인합니다.

## BGM

- Created with Suno AI
