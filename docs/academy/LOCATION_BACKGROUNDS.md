# 장소 배경 아트

2026-10-25. 기존 중앙광장을 유지하고 공간 유형별 배경24종을 추가한다. 장소 데이터/이동/시간/저장 규칙은 바꾸지 않는다.

## 공유 기준

`src/AcademySurvival/data/locationBackgrounds.ts`가 실제 `locations`를 읽어214개 장소를25종 배경에 연결한다. ID별 예외를 우선하고 생활실/층/자연환경 유형으로 공유한다. 장소명·거주자·출입 규칙은 이미지에 새기지 않는다.

모든 파일은 `public/academy/backgrounds/`에 있다.

| 파일 (`-v1.webp`) | 공유 공간 |
| --- | --- |
| `academy-plaza-detailed` | 중앙광장 전용, 기존 첫 그림 유지 |
| `classroom` | 학년별 교실·공동 학습실 |
| `library` | 도서관·심연 서고 |
| `corridor` | 교사동 복도·생활관 층 |
| `dining` | 학생/생활관/마왕성 식당 |
| `training` | 대련장·아침단련장·마왕군 훈련장 |
| `magic` | 마법 훈련장 |
| `shared-bedroom` | 학생·교직원 공동실·마왕성 거주실 |
| `single-bedroom` | 교수 개인실·통학 거주지 |
| `lounge` | 생활관 휴게실·학생회관 공용 공간 |
| `washroom`, `laundry`, `garden` | 공동 욕실·세탁실·정원 |
| `office` | 교수/학생회/행정/경비/마왕성 집무 공간 |
| `academy-gate` | 아카데미·정문·교사동 외관 |
| `dormitory` | 학생·교수·교직원 생활관 외관 |
| `market` | 수도 시장·도시 거리 |
| `castle`, `throne-room` | 성채 외관·알현실 |
| `landscape` | 평원·광역 지역 개관 |
| `forest`, `mountains`, `coast` | 숲·산악·해안/섬 지역 |
| `village`, `underground` | 정착지·지하 도시/광산 |

공유 그림은 지역의 대표 분위기이며 정식 지형도나 고유 건축 설정을 추가하는 자료가 아니다. 마계를 별도 불지옥 차원으로 묘사하지 않는다. 신규 장소는 이 분류를 검토하고 필요한 경우 예외를 추가한다. 런타임에 추가되어 정적 매핑에 없는 장소나 이미지 로드 실패 시 기존 단색 슬롯을 유지한다.

## 화풍·프롬프트

내장 `image_gen`에 `academy-plaza-detailed-v1.webp`를 **화풍 참조**로 제공했다. 첫 번째의 조금 세밀한2D 판타지 일러스트, 아이보리 석재·슬레이트 블루·세이지·목재, 부드러운 명암을 유지한다. 사람·동물·문자·UI 없이 가로3:1, 눈높이, 전경은 캐릭터 레이어를 위한 빈 공간이다.

공통 프롬프트:

> Create ONE finished game background, NOT a collage. Use the attached academy plaza ONLY as an art-style reference; depict the new scene rather than copying the plaza. Match its moderately detailed 2D fantasy illustration: clean broad color shapes, fine but restrained architectural detail, soft painted shadows, warm ivory stone, slate blue, muted wood and sage green, elegant readable scenery, not photorealistic or 3D and not ultra-minimal geometric art. Very wide panoramic 3:1 composition, eye-level, lower foreground kept open for later character sprites. ABSOLUTELY NO people, characters, human silhouettes, animals, text, captions, logos, interface or watermark. Empty environment only.

이후 각 파일의 공간을 명시한다. 예: 교실은 나무 책상/빈 칠판/아치 창/넓은 통로, 공동실은 침대2개/책상2개, 개인실은 침대1개/책상1개, 시장은 빈 가판대/상점, 자연 지역은 해당 숲길·산길·해안 구도. 사실적인 사진·3D·과도하게 단순한 기하학 그림은 제외한다.

생성 PNG 원본은 `C:/Users/pjkpj/.codex/generated_images/01a12fa4-dddc-7751-8caf-46ea06cba017/`에 보존한다. 게임에는1800×600 WebP(quality85)를 사용한다. 기존 광장은2172×724를 유지한다. 각 장면의 전체 프롬프트와 원본 경로는 `test-results/academy-backgrounds/generated-*.json`, 검수용 모음은 `contact-sheet.jpg`에 기록한다.

## 검증 범위

이번 실행:214개 장소/25종 파일 참조,3:1비율, 교실 공유·공동실/개인실 구분 검사 통과. 전체 WebP4,378,268바이트(약4.18MiB). 최종 Vite 빌드9.91초 및 dist 참조 검사 통과. 기존 번들 크기 경고는 남아 있다.

전체 장소 연결/파일 존재/이미지 비율/유형별 공유 검사는 `test-results/academy-backgrounds/audit.json`, 빌드 결과는 `build.log`에 기록한다. 이미지 모음으로 인물·문자 유무와 공간 구분을 육안 확인한다. 기존 `SceneBackdrop`와 CSS는 수정하지 않아 로드 실패 단색·고정 비율 계약을 유지한다. 엔진 변경이 없어 장기 시뮬레이션과 전체 브라우저 회귀는 실행하지 않는다.
