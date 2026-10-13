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
