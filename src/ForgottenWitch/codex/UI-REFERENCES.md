# 타이틀 / 대화 UI 참고 조사

조사일: 2026-10-13. 아래 평가는 실제 메뉴 스크린샷을 본 디자인 관찰이다. 외부 게임의 UI 에셋/로고/캐릭터를 제품에 복사하지 않고, 구성 원칙을 이 게임의 종이 극장과 주인공에 맞게 적용했다.

| 참고 게임 | 관찰한 구성 | 이 게임에 적용한 판단 |
| --- | --- | --- |
| Hades | 큰 타이틀, 간결한 세로 메뉴, 오른쪽 캐릭터, 배경보다 명확한 전경 | 왼쪽 책 표지 같은 큰 이름과 실제 시작/소리/허브 메뉴, 오른쪽 원본 주인공 일러스트. 없는 기능을 메뉴로 꾸미지 않음 |
| Hollow Knight | 어두운 배경의 밝은 타이틀, 얇은 장식, 조명과 작은 부유 입자 | 플럼색 무대와 크림색 타이틀 대비, 종이 극장 프레임, 조용한 빛/먼지, 선택 메뉴 반응 |
| GRIS | 제한된 색면, 여백, 얇은 원형 장식, UI와 작품 분위기의 통일 | 라벤더/세이지/크림 재질 유지, 캐릭터 뒤 작은 달 궤도, UI 밀도 제한 |

## 출처

- Hades 공식 작품/리뷰 소개: https://www.supergiantgames.com/games/hades/
- Hades 메뉴 관찰에 사용한 공개 스크린샷: https://user-images.githubusercontent.com/105693158/168931823-4c900049-f250-4dc7-9e1d-f43a9a8f973f.png
- Hollow Knight 공식 작품/리뷰 소개: https://www.hollowknight.com/
- Hollow Knight 메뉴 스크린샷 출처: https://gameswat.ch/gameshot/83887d3a-90a4-4fee-9710-bb7c09b453a6
- GRIS 메뉴 스크린샷을 확인한 리뷰: https://www.indiegameatlas.com/post/review-gris
- GRIS 2019 Webby Best Visual Design 수상 / Best Art Direction Honoree 확인: https://winners.webbyawards.com/2019/games/features/best-art-direction/80126/gris

스크린샷은 `.build-projects/`에서 로컬 관찰했고 Git/배포 에셋에 포함하지 않았다. 다른 PC에서도 위 URL로 레퍼런스를 확인할 수 있다.

## 대화 장면 결정

- 주인공 기존 `witch-portrait.png`를 모든 인물 일러스트의 선/눈/셀 채색 기준으로 사용.
- `witch-knee.png`, `flora-knee.png`는 무릎 위까지 보이는 투명 원본 그림. 이전 상반신 에셋은 원본 이력으로 보관.
- 인물은 대화창 안의 이미지가 아닌 독립 좌우 레이어이다. 인물 `z-index:2`, 종이 대화창 `z-index:4`. 하단 일부가 대화창 앞면에 가려지는 극장 구도.
- 화자만 밝기/채도가 강조되고 비화자는 약하게 낮아진다. 눈에 띄는 확대나 과장된 흔들림을 하지 않는다.
- 타이핑/즉시 펼치기/Enter·Space/재대화 분기는 기존 기능을 유지한다.

## 기존 플레이에 더한 반응

`StageLife.ts`는 표현 전용이다. 작은 빛 먼지, 매달린 별 흔들림, 발걸음/착지 입자, 조명 회복 후 시계꽃 바늘을 처리한다. 가까운 플레이어 쪽으로 플로라가 약간 기울고, 다리 연결 시 판넬이 짧게 떨린다. 조종 막대는 이 변형을 그대로 따라간다. 충돌·정답·진행 상태는 변경하지 않는다. reduced-motion 설정에서는 추가 부유/흔들림을 줄인다.

## 명도 / 가독성 보강

[Riot Games: VALORANT Shaders and Gameplay Clarity](https://www.riotgames.com/en/news/valorant-shaders-and-gameplay-clarity)는 배경과 캐릭터를 별도로 다루고, 명암 범위와 윤곽 강조를 제어해 가독성을 확보한다. 이 게임에는 3D 셰이더를 옮기지 않고 그 원칙을 2D 레이어에 적용했다: 먼 배경은 낮은 대비의 회보라색, 중간 나무는 낮은 밝기/채도, 실제 이동 지형은 밝은 크림 가장자리, 인형은 기존 밝은 종이 외곽선을 유지한다. 배경만 더 어둡게 두어 인물과 장치의 시선 우선순위를 만든다. 조명 퍼즐 해결 후의 따뜻한 광선은 별도 전경 연출로 유지한다.

## 비주얼노벨 대화 가독성 / 리듬

- DDLC 공식 사이트의 실제 대화 스크린샷 https://ddlc.moe/images/screen3.png 및 https://ddlc.moe/images/screen4.png 를 다운로드해 확인했다. 본문과 이름표/하단 조작 영역 분리, 텍스트의 명확한 대비, 화면 아래 고정된 읽기 영역을 참고했다. 외부 게임 이미지/글꼴/대사/UI 소재는 제품에 복사하지 않았다.
- Ren’Py 대화 문서 https://www.renpy.org/doc/html/dialogue.html : 캐릭터 이름/그림 연결 및 출력 완료 이후 진행 표시 구조.
- Ren’Py 텍스트 문서 https://www.renpy.org/doc/html/text.html : cps, pauses, color, size 등 구간별 표현 설계 참고. 이번 구현은 React/TypeScript 데이터 기반이며 Ren’Py를 설치하지 않는다.
- 이 게임에는 종이 가장자리/골판지 테두리를 유지하고 읽기 면의 거친 질감을 제거했다. 25px 본문과 1.75 행간, 독립 이름표, 고정 진행/속도 조절을 사용한다. 화면/인물/UI 좌표계는 기존 1280×720 스케일을 유지한다.
- 사용자 요구에 따라 출력 중 입력은 즉시 펼치기/다음 문장 모두 하지 않는다. 완료 후 버튼만 활성화되고 입력을 미리 큐에 넣지 않는다. 기본 캐릭터/감정 cps, 구간별 cps와 pauseAfterMs, 사용자 속도 배율을 함께 적용한다.
