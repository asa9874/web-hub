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

## BGM

- Created with Suno AI
