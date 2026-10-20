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

게임 메인 메뉴의 `일러스트레이션`에 미확정 컷씬 후보 20점과 제목/설명/실제 생성 프롬프트를 모았습니다. [작품 데이터](src/ForgottenWitch/illustrations.json)와 이미지 원본도 Git에 포함됩니다.

주인공의 부드러운 무대 조명·그림자, 달/별의 은은한 빛, 순차 점등, 네 레이어의 패럴랙스와 저속 환경 움직임을 적용했습니다. 조명/환경 조정 위치는 게임 README와 Codex 인수인계 문서에서 확인할 수 있습니다.

메인 메뉴의 `극장에 들어가기`는 도서관부터 첫 챕터까지 실제 오프닝을 실행하며, `테스트`는 기능 리허설을 바로 실행합니다. 기능별 테스트 이동, F/J 매직 미사일, 골판지 몬스터·3라이프·커튼 재등장, 감정 표정/말소리/대사 속도, 임시 설정집을 추가했습니다. 무료 효과음의 출처와 라이선스도 저장소에 포함됩니다.

리허설에서는 일반 몬스터 20종/보스 후보와 NPC를 선택해 소환할 수 있습니다. Shift/K 구르기는 빠른 이동과 짧은 무적을 제공합니다. 새 NPC 6명은 기본·4감정 초상화/인형/고유 음색을 갖추고, 설정집에 사물 22항목과 음악 후보 6개의 Suno 프롬프트를 제공합니다. 모든 설정은 미확정이며 BGM 음원은 아직 없습니다. 확장 검증은 `npm run test:witch-expansion`입니다.

이미 저장소가 있는 PC의 브랜치 전환/업데이트 및 테스트 방법은 [이어받기 문서](src/ForgottenWitch/codex/README.md)를 참고하세요. GitHub Pages의 공개 버전은 main/gh-pages 기준이고, 위 작업 브랜치의 최신 게임은 로컬에서 실행해 확인합니다.

## BGM

- Created with Suno AI


마녀의 극장에는 SD 인형 로딩 화면과 실제 에셋 진행률, 화면 이동 커튼, 대화·퍼즐·막간 페이드, 구역 자막과 작은 피격/UI 반응이 추가되었습니다. `npm run test:witch-motion`으로 로딩·전환·입력 복구를 검증합니다. 상세 구현과 이어받기 안내는 [게임 문서](src/ForgottenWitch/README.md#로딩과-무대-전환-2026-10-14)에 정리했습니다.


마녀의 이동을 약20% 빠르게 다듬고 실제 걷기·하강 이미지2점을 추가했습니다. 발걸음/점프/착지/제동/구르기/발사에 작은 종이 파티클이 연결되며, `npm run test:witch-movement`로 확인합니다. 수치·이미지 출처·이어받기는 게임 README와 codex 문서에 정리했습니다.


마녀의 극장 `테스트 위치`에 생동감·함정 실험실을 추가했습니다. 소품/NPC 반응, 마법 장치, 바람, 탑승 발판, 체크포인트, 비밀 무대, 대기 동작 및 전투 피드백을 체험할 수 있습니다. 설정집은 함정 카테고리를 포함한7개이며 사물31종을 제공합니다. 구현/조작/이어받기는 게임 README와 codex 문서, 검증은 `npm run test:witch-living`입니다.

기존 게임 품질 개선으로 가변 점프/새 동작3점/타격 정지/실제 공격 예고/기울기 발판/개별 NPC 반응/퍼즐 잡기 위치·드롭 강조/카메라·UI·효과음 보강을 적용했습니다. 원본 PNG를 보존한 렌더 이미지 크기 제한과 프레임 시간 측정은 테스트 메뉴에서 확인합니다. 상세14항목/다른 PC 이어받기/신규 `npm run test:witch-quality`는 [게임 README](src/ForgottenWitch/README.md)에 있습니다.

최신 개발 브랜치에서는 구르기를 Shift/K 전방 순간이동으로 교체하고 Q/L 전신 쉴드·게이지·밀림·지연 회복을 추가했습니다. 현재 조작/설정값/테스트는 [게임 README](src/ForgottenWitch/README.md)의 최신 조작 항목을 확인합니다.

오프닝은 도서관 탐색 → 책 일러스트 → 추락 크레딧 → 종이 위 착지 → 공간 튜토리얼 → 거대한 문/챕터 공개로 이어집니다. 재시청·컷신 스킵·장면별 진입을 지원하며 생성 그림과 실제 프롬프트도 Git에 포함합니다. 검증은 `npm run test:witch-opening`, 세부 구조는 [게임 README](src/ForgottenWitch/README.md)를 참고하세요.

마녀의 극장 대화에 실제 무대 카메라와 인형 동작 연출을 추가했습니다. 테스트 위치의 연출 리허설/말풍선 NPC/동작 보기에서 체험합니다. 주인공·NPC 7명의32자세와 생성 프롬프트도 포함합니다. [데이터 작성·이어받기](src/ForgottenWitch/codex/DIALOGUE-DIRECTION.md), 검증은 `npm run test:witch-direction`입니다.
Chapter 01 개발 빌드는 오프닝 뒤 6지역/자유 순서3에피소드/직접 조작하는 공연/꽃 선물과 배웅으로 이어집니다. 브라우저 진행 저장, 챕터 재플레이, 지역 직접 진입을 지원합니다. [Chapter 01 인수인계](src/ForgottenWitch/codex/CHAPTER-01.md), 검증은 npm run test:witch-chapter입니다.
NEON TRADER: /web-hub/games/neon-trader/ — 30일 가상 거래·빚 상환 캠페인. 구현/실행/검증/에셋 프롬프트는 src/NeonTrader/README.md에 정리했다.

아카데미에서 살아남기: `/web-hub/games/academy-survival/` — 특성 405개·기프트 403개·능력치 7종·숙련도 49종·상태 150종·고정 등장인물 세레나·직급200종·칭호200종의 설정집. 요소 영향력은0~1,000 메타데이터로 통일했다. 능력치·숙련도 설명 560개, 상태 단계 설명 38개와 공통 캐릭터 상태창을 포함한다. [데이터 구조·확률·효과 계약·검증 및 이어받기](src/AcademySurvival/README.md). 본게임은 아직 구현하지 않았다.


아카데미 설정집 상단에 개발용 **NPC 생성 테스트**를 추가했습니다. 시드 기반7전공/5성장 유형/4학년의 NPC를1~100명 생성하고 공통 상태창·영향력v1·실제 통계를 확인합니다. 결과는 게임 저장에 추가하지 않습니다. 자세한 API와 재현 표본은 `src/AcademySurvival/data/generation/README.md`를 참고하세요.
