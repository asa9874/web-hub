# UI 아트 제작 기록 v1

내장 imagegen으로 생성한 캠퍼스 지도와 아이템 100종의 배포 에셋이다. 아래는 재생성에 사용할 수 있도록 정리한 프롬프트이며, 생성 요청 원문을 그대로 보존한 대화 로그는 아니다. 원본 PNG는 Codex generated_images에 있고 런타임에는 WebP만 사용한다.

## 아이템 공통 프롬프트

A single square sprite sheet, exactly 5 columns by 5 rows, 25 separate fantasy academy RPG item illustrations. One object centered in each cell with 18–20% padding. Strict row-major order. No text, labels, frames, grid lines, people or UI. Uniform dark teal background #202b2d. Refined detailed hand-painted fantasy object art, clear silhouettes, restrained brass and natural colours, upper-left lighting, three-quarter perspective. Keep the same style, scale and lighting across all four sheets.

셀 좌표는 `src/AcademySurvival/data/itemArt.ts`에서 아이템 ID에 고정 연결한다. 미확인 물건에는 실제 그림을 노출하지 않는다.

### 시트 0

배포: `public/academy/items/items-atlas-v1-0.webp`

- 행 1: wood-sword (나무 훈련검), iron-sword (철제 장검), dagger (여행 단검), shortbow (연습 단궁), practice-staff (훈련용 지팡이)
- 행 2: leather-armor (가죽 갑옷), student-uniform (학생 제복), winter-coat (겨울 외투), writing-kit (필기구 세트), magic-textbook (기초 마법 교재)
- 행 3: sword-primer (검술 입문서), notebook (학습 노트), bread (호밀 빵), water (식수 병), apple (붉은 사과)
- 행 4: biscuit (버터 과자), tea (따뜻한 허브 차), bandage (깨끗한 붕대), health-draught (응급 회복약), mana-draught (희석 마력수)
- 행 5: rune-powder (기초 룬 분말), herb (건조 약초), ore-sample (철광석 표본), towel (면 수건), comb (나무 빗)

### 시트 1

배포: `public/academy/items/items-atlas-v1-1.webp`

- 행 1: lamp (독서등), ribbon (기념 리본), wood-charm (손조각 나무 부적), copper-brooch (동제 브로치), pouch (동전 주머니)
- 행 2: steel-sword (균형 강철검), steel-dagger (정밀 단검), longbow (층목 장궁), oak-staff (참나무 집중봉), buckler (강철 소형방패)
- 행 3: chain-shirt (사슬 조끼), gloves (훈련 장갑), boots (여행 장화), leather-cap (가죽 모자), silver-ring (은제 반지)
- 행 4: focus-pendant (집중 목걸이), alchemy-text (연금술 실습서), history-atlas (제국 역사 지도집), advanced-sword (대련 전술서), health-tonic (정제 회복제)
- 행 5: mana-tonic (정제 마력제), trail-meal (휴대 식사), flower-box (압화 편지 상자), craft-kit (소형 공예 도구), crystal-shard (정제 수정 조각)

### 시트 2

배포: `public/academy/items/items-atlas-v1-2.webp`

- 행 1: silk-thread (은빛 명주실), inkstone (청석 벼루), rune-blade (룬각 장검), frost-bow (서리목 활), silver-staff (은심 집중봉)
- 행 2: ward-shield (방호 문양 방패), ward-robe (기초 방호 로브), steady-ring (정심 반지), quiet-boots (무음 직조 장화), rune-gloves (술식 장갑)
- 행 3: recovery-elixir (농축 회복약), mana-elixir (농축 마력약), forest-tea (숲향 숙성차), research-codex (술식 구조 연구서), monster-ecology (심층 생태 도감)
- 행 4: moon-crystal (월광 수정), ember-core (잔화 결정), music-box (회전 오르골), glass-letter (흑유리 서신함), seal-case (밀봉 문서함)
- 행 5: artisan-sword (일곱 겹 단조검), balanced-rapier (중심축 세검), resonance-staff (공명환 지팡이), joint-armor (분절 관절갑), weave-cloak (이중직 방호망토)

### 시트 3

배포: `public/academy/items/items-atlas-v1-3.webp`

- 행 1: mirror-shield (편광 거울방패), precision-lens (정밀 관측 렌즈), silver-instrument (은현 휴대 악기), annotated-tome (다중 주석 마도서), gold-compass (교차축 나침반)
- 행 2: stasis-vial (안정화 시료병), artisan-pen (유량 조절 만년필), dawn-sword (여명의 파수검), storm-spear (폭풍의 의식창), deep-staff (심층 조율봉)
- 행 3: oath-armor (서약 수호갑), clear-crown (청명 관), guardian-ring (수호 고리), hero-codex (영웅의 전술 원전), ever-lamp (불침의 연구등)
- 행 4: pledge-medal (계승의 증표), sealed-astrolabe (봉인된 별길 관측기), archive-key (침묵 서고의 열쇠), ancient-blade (기억석 도검), echo-robe (잔향의 로브)
- 행 5: origin-tablet (기원 관측판), star-legacy (별길 계승검), abyss-mirror (심연의 증언경), first-oath (첫 서약의 인장), root-loom (근원의 직조틀)

## 캠퍼스 프롬프트

Landscape 3:2 fantasy academy campus guide map, near top-down view. No people, labels, text, interface or lettering. Refined flat-colour storybook illustration with delicate architectural detail; cream stone, slate roofs, sage lawns, parchment paths. Grand classroom building upper centre (50%,20%), library (23%,28%), magic practice complex (80%,28%), arena (82%,60%), dormitory (22%,65%), dining hall (42%,58%), central plaza (52%,48%), student union (68%,79%), main gate (50%,92%), faculty residences (8%,47%), garden (16%,88%). Connected walkways, perimeter walls and distinct functional grounds. Consistent with the academy location background art.

배포: `public/academy/maps/campus-v1.webp` (1536×1024). 건물 선택/실내 탐색/경로는 SVG와 기존 장소 엔진이 담당한다. 그림은 정확한 축척·통행 권한·이동 시간의 권위가 아니다.

## 최적화

생성 후 크기 조절과 WebP 인코딩만 수행했다. 아이템은 1500×1500 시트 4장, 지도 1장으로 합계 1,873,382바이트다. 각 물건은 독립 그림을 갖지만 브라우저 요청은 시트별로 공유한다. 누락된 그림에도 고정 크기 대체 영역을 유지한다.
