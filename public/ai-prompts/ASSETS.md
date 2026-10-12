# AI그림 프롬프트 작품

이 페이지의 목적은 다양한 생성 프롬프트와 실제 결과물을 함께 보관하고, 이후 비슷한 그림체를 만들 때 참고하고 재사용하는 것입니다. 작품 추가 시 실제 사용한 전체 프롬프트와 원본 결과물을 반드시 함께 남깁니다. 스타일 지시문은 전체 프롬프트의 실제 일부를 저장하며, 재사용할 핵심 조건을 한국어 메모로 설명합니다.

**창작 원칙: 각 스타일에 가장 적합한 장면과 구도를 개별 설계합니다. 서로 다른 그림체를 같은 장면에 반복 적용하지 않습니다.** 상세 원칙은 `src/AIPrompts/README.md`에 기록합니다.

Built-in `image_gen` was used for both original artworks. Images were visually reviewed and encoded to WebP (quality 92) without resizing or editing. Generated PNG originals remain in the Codex generated_images directory.

The exact prompts are also recorded in `src/AIPrompts/artworks.json` and displayed on the gallery page. Add a new artwork there and place its image in this directory.

Each artwork has a `category` ID (`surrealism` or `animation`). Category definitions live in `src/AIPrompts/AIPrompts.tsx`. Category views use `?category=surrealism` and `?category=animation`, so refresh and browser history retain the selected collection. The artwork navigator is generated from the selected collection and appears during scrolling, fading out after 1.8 seconds of inactivity.

## 잔향

Saved image: `public/ai-prompts/ribbon.webp`

```text
Use case: stylized-concept
Asset type: original artwork for a black contemporary art gallery, portrait orientation 4:5.
Primary request: A solitary white marble sculpture of a gently folded ribbon, suspended above a shallow pool of still black water inside a vast dark gallery. A narrow beam of cool white light falls from above, tracing the polished curve, its faint reflection barely visible below. Precise chiaroscuro, sculptural negative space, contemporary fine-art photography, subtle stone grain and realistic soft light falloff. Restrained monochrome black, ivory and silver. Full-bleed artwork, no frame, no letters, no signature, no watermark, no interface. Quiet, austere and physically believable.
```

## 유리 동백

Saved image: `public/ai-prompts/camellia.webp`

```text
Use case: stylized-concept
Asset type: original artwork for a black contemporary art gallery, portrait orientation 4:5.
Primary request: A translucent white camellia floating in a pitch-black void, its thin layered petals resembling delicate handmade glass. A subtle cold white rim light reveals the edges and soft internal scattering; tiny suspended droplets surround the flower sparingly. Fine-art macro photography meets surreal botanical sculpture, high detail without excessive sharpness, soft luminous center, broad black negative space. Strict monochrome black, pearl white and silver, no colored glow. Full-bleed artwork, no frame, no typography, no signature, no watermark, no interface.
```

## Archive — original shared-scene study

The former shared railway-scene collection is archived in `public/ai-prompts/archive/rain-series.json`. Its original images and exact prompts are retained for provenance. It is superseded in the gallery by the style-specific scene collection below.

Four original images were generated with the built-in `image_gen` tool, using a shared Scene and Composition and four distinct Style instructions. PNG originals are copied unchanged into this directory and are offered by the image download links. WebP previews preserve the pixel image losslessly; the other previews use quality 92. No visual editing or resizing was applied.

Each entry stores the exact submitted `prompt`, an exact `stylePrompt` substring for style-only copying, a Korean `reuseNote`, dimensions, preview path and original PNG path. Replace Scene for a different subject, retain Style to reuse the rendering approach. The prompt is a reference, not a guarantee of an identical future image.

### 픽셀 그림체

Preview: `public/ai-prompts/rain-pixel.webp`

Original: `public/ai-prompts/rain-pixel.png`

Dimensions: 1672 × 941

```text
Scene: An original adult woman with a short black bob, an ochre raincoat and a navy shoulder bag stands under a red umbrella on a small Japanese railway platform at blue hour after rain. A stationary cream-and-dark-green local train sits behind her, with wet platform reflections, overhead wires and distant houses. She looks quietly toward the tracks; no other foreground characters.
Composition: A single full-bleed landscape image, 16:9 composition, medium-wide eye-level view, the woman on the left third and the train stretching behind her. No titles, no captions, no subtitles, no logos, no watermark, no interface.
Style: Authentic 16-bit pixel art, a clearly visible uniform square pixel grid, deliberate pixel clusters, stepped diagonal silhouettes, limited 32-color palette, crisp one-pixel outlines and selective ordered dithering. Construct it as a 320-by-180 pixel scene displayed with nearest-neighbor scaling. Represent reflections and rain as discrete pixel clusters. No anti-aliasing, no smooth gradients, no painterly strokes, no realistic texture.
```

### 일본 전통 만화

Preview: `public/ai-prompts/rain-manga.webp`

Original: `public/ai-prompts/rain-manga.png`

Dimensions: 1672 × 941

```text
Scene: An original adult woman with a short black bob, an ochre raincoat and a navy shoulder bag stands under a red umbrella on a small Japanese railway platform at blue hour after rain. A stationary cream-and-dark-green local train sits behind her, with wet platform reflections, overhead wires and distant houses. She looks quietly toward the tracks; no other foreground characters.
Composition: A single full-bleed landscape image, 16:9 composition, medium-wide eye-level view, the woman on the left third and the train stretching behind her. No titles, no captions, no subtitles, no logos, no watermark, no interface.
Style: Classic Japanese black-and-white manga ink illustration, hand-drawn G-pen linework with thick-to-thin contour variation, precise architectural perspective, expressive but restrained character drawing. Pure black ink and white paper with halftone screentones, cross-hatching and solid black shadow areas. Translate the umbrella and coat to monochrome tonal separation. One standalone panel, not a multi-panel page. No color, no gray digital airbrush gradients, no glossy painting, no text or speech balloons.
```

### 일본 라이트노벨

Preview: `public/ai-prompts/rain-light-novel.webp`

Original: `public/ai-prompts/rain-light-novel.png`

Dimensions: 1672 × 941

```text
Scene: An original adult woman with a short black bob, an ochre raincoat and a navy shoulder bag stands under a red umbrella on a small Japanese railway platform at blue hour after rain. A stationary cream-and-dark-green local train sits behind her, with wet platform reflections, overhead wires and distant houses. She looks quietly toward the tracks; no other foreground characters.
Composition: A single full-bleed landscape image, 16:9 composition, medium-wide eye-level view, the woman on the left third and the train stretching behind her. No titles, no captions, no subtitles, no logos, no watermark, no interface.
Style: Contemporary Japanese light-novel color illustration, elegant fine linework, luminous layered digital painting, finely articulated eyes and hair highlights, carefully designed fabric folds, detailed atmospheric background and softly blended painterly shading. Polished standalone interior color plate, rich yet controlled blue-hour colors, warm amber station lights and an understated red umbrella accent. No book cover typography, no logos, no photorealism, no 3D rendering, no rough pixel edges.
```

### 애니메이션 캡처

Preview: `public/ai-prompts/rain-anime-frame.webp`

Original: `public/ai-prompts/rain-anime-frame.png`

Dimensions: 1672 × 941

```text
Scene: An original adult woman with a short black bob, an ochre raincoat and a navy shoulder bag stands under a red umbrella on a small Japanese railway platform at blue hour after rain. A stationary cream-and-dark-green local train sits behind her, with wet platform reflections, overhead wires and distant houses. She looks quietly toward the tracks; no other foreground characters.
Composition: A single full-bleed landscape image, 16:9 composition, medium-wide eye-level view, the woman on the left third and the train stretching behind her. No titles, no captions, no subtitles, no logos, no watermark, no interface.
Style: A believable still frame from an original hand-drawn Japanese 2D television anime, consistent economical linework, simple flat local colors, crisp two-tone cel shading on the character, simplified hair masses, hand-painted background art. Cinematic 16:9 episode composition, restrained blue-hour palette, modest film grain and subtle broadcast softness. A quiet in-between narrative moment rather than a promotional illustration. Avoid lavish layered character painting, excessive hair strands, glossy skin, poster composition, subtitles, channel marks, photorealism and 3D rendering.
```

## Current animation collection

Generated with the built-in `image_gen` tool. Each medium has its own subject, composition and aspect ratio. Final PNG originals are copied unchanged; previews use lossless WebP for pixel art and quality 92 for the others. No visual edits or resizing were applied. The light-novel image was regenerated once with flatter 2D drawing instructions; only the selected final prompt is listed here.

### 폐허 속 온실 — 픽셀 그림체

Preview: `public/ai-prompts/greenhouse-pixel.webp`

Original: `public/ai-prompts/greenhouse-pixel.png`

Dimensions: 1536 × 1024

Reuse: 픽셀은 읽기 쉬운 게임 공간과 타일 구조에 맞춥니다. 큰 픽셀 덩어리·24색 팔레트·여백을 유지하고, 장면도 탐험 가능한 환경으로 설계하세요.

```text
Scene: A small abandoned stone observatory has been converted into a secret greenhouse at night. In a readable side-view cutaway, warm lanterns illuminate a potting bench, neatly grouped plants, a little water tank and a spiral of ivy around a broken arch. A tiny adult gardener sprite on a ladder tends a hanging plant; the distant night sky is indigo, and a few fireflies are discrete bright pixels. Build the environment as an inviting explorable room from an original handcrafted 2D adventure game, with a coherent practical layout.
Composition: One landscape 3:2 image. Orthographic side view with a few clear depth planes, broad readable silhouettes and deliberate calm empty areas. The greenhouse room is the focal point; the small gardener is only a scale cue. No text, HUD, logos, signature or watermark.
Style: Hand-crafted 16-bit game environment pixel art with large, unmistakable square pixels on one consistent logical grid. Design as a 240-by-160 logical pixel canvas enlarged with nearest-neighbor scaling. Use deliberate connected pixel clusters, stepped contours, a restricted 24-color indigo, moss-green and warm-amber palette, selective ordered dithering only in a few shadow transitions, and tile-like architectural rhythm. Prioritize readable shape design over dense noisy detail. No anti-aliasing, no painterly blending, no smooth bloom, no photographic texture, no glossy 3D surfaces, no scattered single-pixel noise.
```

### 폭우 속 발도 — 일본 전통 만화

Preview: `public/ai-prompts/bridge-manga.webp`

Original: `public/ai-prompts/bridge-manga.png`

Dimensions: 1122 × 1402

Reuse: 만화는 강한 동작과 명암 대비가 드러나는 장면을 고릅니다. 큰 검정 면·선 굵기 변화·빈 흰 영역으로 동작을 먼저 읽히게 하고 스크린톤은 필요한 곳에만 씁니다.

```text
Scene: A lone adult ronin in profile makes one decisive sword draw on an old wooden bridge in a violent rainstorm. His forward knee is bent, the scabbard is held in his left hand at the hip, and his right hand leads a single clearly defined katana blade outward. A broad dark cloak whips into a strong arc behind him; the bridge railing recedes in simple perspective. Rain and a few reed leaves sweep diagonally across the open white sky. The emotional focus is a concentrated eye and the precise instant of movement, not a battle crowd.
Composition: One portrait 4:5 black-and-white manga illustration, one standalone panel. Strong low-angle diagonal staging, the figure fills most of the panel, one dominant blade direction, a clean silhouette with clear limb overlap. Keep the background sparse so the action reads instantly. No speech balloons, lettering, sound effects, panel collage, logos or watermark.
Style: Confident traditional Japanese manga pen-and-ink drawing on clean white paper. Economical G-pen contours with intentional thick-to-thin variation, broad solid-black cloak shapes, sharp white cutouts, controlled screentone patches, purposeful speed strokes and a few carefully placed cross-hatched shadow areas. Human draftsmanship: clear anatomy, thoughtfully simplified folds, asymmetrical expressive face, selective detail around the focal eye and hands, quiet unrendered areas elsewhere. Strict black and white; no painted grayscale gradients, no photorealistic rendering, no uniformly scratchy microtexture, no glossy digital highlights, no extra limbs or duplicated blades.
```

### 별지도를 펼치는 밤 — 일본 라이트노벨

Preview: `public/ai-prompts/library-light-novel.webp`

Original: `public/ai-prompts/library-light-novel.png`

Dimensions: 1122 × 1402

Reuse: 라이트노벨은 인물의 표정과 관계를 읽을 수 있는 삽화 장면에 맞춥니다. 선의 강약·절제된 채색·큰 여백을 유지하고 과한 장식과 광택을 덜어내세요.

```text
Style: A distinctly hand-drawn Japanese light-novel color illustration, unmistakably 2D anime drawing. Crisp expressive variable-weight outlines, graphic flat color shapes with only one or two restrained cel-shadow tones, selective translucent watercolor accents, carefully designed adult character acting and economical grouped hair strands. Pale ivory negative space, muted ultramarine fabric, warm tan paper. Hair, skin, cloth, books and architecture must remain drawn shapes, not physically rendered materials. Simplify the background into a few lightly outlined color blocks; reserve detail for the face, hands and star diagrams. No photorealistic or semi-realistic painting, no rendered skin, no glossy eyeballs, no 3D lighting, no pore or cloth texture, no photographic bokeh, no volumetric shafts, no ornate accessory overload, no glitter and no cinematic rim glow.
Scene: An original adult apprentice astronomer with a simple dark chestnut braid, an ivory blouse and a deep blue tunic sits sideways on a library window ledge. An open star atlas rests on her knees; one hand rests on the book and the other holds a loose diagram sheet by its corner. She looks back toward a person outside the frame with a small curious smile. The room is suggested by just a few simplified book spines and one brass orrery; outside are a handful of pale blue rooftop silhouettes. Diagram lines only, no legible letters.
Composition: One portrait 4:5 light-novel interior color plate, character-focused medium shot, asymmetric window frame, an easy readable pose and large quiet ivory areas. Keep shapes deliberately simplified and the 2D drawing visible. No title, typography, logo, watermark or decorative border.
```

### 라디오가 켜진 아침 — 애니메이션 캡처

Preview: `public/ai-prompts/kitchen-anime-frame.webp`

Original: `public/ai-prompts/kitchen-anime-frame.png`

Dimensions: 1672 × 941

Reuse: 애니 캡처는 이야기 중간의 자연스러운 연기와 생활 공간에 맞춥니다. 2단 셀 채색·간결한 캐릭터 선·그림처럼 칠한 배경을 구분하고 포스터 조명을 피하세요.

```text
Scene: A quiet narrative still in a small lived-in apartment kitchen on a breezy summer morning. An adult woman with a loose short ponytail and a plain sage-green T-shirt stands at the stove, half turning her head toward an old radio on the counter as if an unexpected familiar song has begun. She holds a wooden spatula loosely in one hand; a small frying pan sits safely on the stove. An open window, a gently moving cream curtain, a chipped blue mug and two neatly hung towels establish the room without clutter. Her mouth is slightly open mid-reaction; she is not posing for the viewer.
Composition: One landscape 16:9 frame from the middle of an original 2D television anime scene. Eye-level medium-wide observational shot, character slightly right of center, an ordinary kitchen layout with consistent perspective and breathing room. A moment of character acting, not a poster or cover. No subtitles, credits, channel logo, borders or watermark.
Style: Convincing hand-drawn 2D anime production still. Economical consistent character contour lines, simple grouped hair shapes, matte flat colors and crisp two-value cel shadows. Readable modest facial expression and natural unposed body language. Hand-painted background with simplified gouache-like color blocks, selective soft edges, understated late-morning daylight and restrained warm-gray, cream and sage colors. Slight broadcast softness while preserving clean drawing. Deliberately simplify secondary objects and keep character and background rendering distinct. No dramatic rim glow, glossy skin, hyper-detailed hair strands, cinematic teal-orange grading, heavy film effects, deep bokeh, painterly character shading, photorealism, 3D appearance or lavish promotional illustration polish.
```

## Subculture character collection

Ten new original images were generated with the built-in `image_gen` tool. Each style uses its own suitable scene and composition. All images were visually inspected. PNG originals are copied unchanged; new WebP previews use lossless encoding without resizing or visual editing, preserving edges without additional compression artifacts. Existing works remain available after this new collection.

Each record saves the exact submitted prompt, stylePrompt, qualityPrompt, reuseNote, dimensions and both image paths. Style-only copying combines the original style and clean-rendering instructions, leaving out Scene and Composition. Quality instructions discourage random speckling, film grain, paper noise, fine crawling textures and over-sharpening; intentional manga screentone is distinct from such noise.

### 07. 궤도 정거장의 편지 — 일본 애니메이션 BD

Preview: `public/ai-prompts/bd-orbital-letter.webp`

Original: `public/ai-prompts/bd-orbital-letter.png`

Dimensions: 1672 × 941

Reuse: BD 장면은 작은 표정 변화와 시선에 맞춥니다. 선과 2단 셀 채색을 깨끗하게 유지하고, 배경의 큰 여백으로 얼굴과 손을 읽히게 합니다.

```text
Style: Premium clean Japanese 2D anime Blu-ray episode still, polished drawing corrections, appealing original adult bishoujo character design, precise economical outlines, crisp two-tone cel shadows, simply grouped silver hair, restrained lavender and deep navy local colors. A painted background simplified into broad shapes, clean dark areas and a single gentle edge light. Pristine digital master quality without grain, background blur, scan artifacts or poster effects.
Scene: An original beautiful adult woman in her twenties, with a silver bob, clear violet eyes and a plain navy flight uniform, sits beside the large observation window of an orbital station. She has just opened a cream envelope, holding the single folded sheet naturally with both hands, and glances toward a blue planet with a quiet almost-smile. The room is suggested by one seat, a soft panel light and the broad window; a reflection of her face is extremely faint, not a second face. The letter has no visible writing.
Composition: Landscape 16:9, an intimate eye-level medium-close episode shot. Her face and hands occupy the right third; the blue planet and large calm dark space balance the left. Quiet acting rather than a promotional pose.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 08. 일식을 가르는 마법 — 고대조 마법 작화

Preview: `public/ai-prompts/magic-eclipse.webp`

Original: `public/ai-prompts/magic-eclipse.png`

Dimensions: 1122 × 1402

Reuse: 마법 장면은 큰 명암 덩어리와 한 방향의 힘으로 설계합니다. 효과를 입자 대신 연결된 기하 형태로 제한하면 지글거림을 덜어낼 수 있습니다.

```text
Style: High-contrast Japanese animation climax key drawing with graphic cel rendering. Bold confident linework, huge controlled black and white shape masses, electric cyan as the only saturated accent, sharply separated light and shadow. Flat skin and cloth colors, a few purposeful motion strokes and clear anatomy. No volumetric fog, endless magic glyphs, glitter storms, texture noise or realistic material rendering.
Scene: An original adult female mage with a sharp black bob, amber eyes, a white fitted tunic and a long plain black cloak stands on a ruined circular dais. She raises one open palm toward a vast eclipsed sun; three broad cyan geometric arcs, clearly drawn as connected bands rather than particles, cut through the black sky. Her other arm is held low for balance. Wind sweeps the cloak in one large curve, her determined profile exposed. Architecture is reduced to a few giant stone silhouettes.
Composition: Portrait 4:5, dramatic low-angle full figure with a single powerful rising diagonal. Arrange white face, hand and tunic against the cloak's solid black silhouette; keep magic shapes sparse, legible and geometric.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 09. 빛을 놓은 왕관 — 시네마틱 다크 판타지

Preview: `public/ai-prompts/cinematic-fallen-crown.webp`

Original: `public/ai-prompts/cinematic-fallen-crown.png`

Dimensions: 1672 × 941

Reuse: 타락의 분위기는 과한 효과 대신 표정·시선·상징으로 만듭니다. 왕관과 날개의 실루엣, 넓은 어두운 여백을 유지하고 사진 같은 렌즈 효과를 피합니다.

```text
Style: Cinematic hand-drawn 2D anime psychological drama still, mature original bishoujo character drawing, controlled thin contours, layered but flat cel shadows, desaturated ivory and slate with one quiet gold accent. Clear readable face, solid wing silhouettes and simplified architectural perspective. Use composition and value staging for atmosphere rather than fog, lens flare, shallow-depth photography, glossy fantasy painting or microdetail.
Scene: An original beautiful adult queen in her late twenties, with pale blond hair tied simply back and a modest ivory-and-charcoal ceremonial dress, sits alone on the broad steps of an empty cathedral. She slowly removes a small gold crown with one hand and looks down at it; her other hand rests on her lap. Behind her, a pair of shadow-like black wings spreads as large smooth symbolic shapes, suggesting the moment she abandons her former ideals. The mood is tragic and restrained, without violence, nudity or gore. A single narrow window casts a pale rectangle of light.
Composition: Landscape 16:9, cinematic medium-wide slightly elevated view with the queen left of center, low horizon of cathedral steps and vast dark negative space. The emotional focus is her downcast face and the crown, not costume ornament.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 10. 닫힌 악보의 오후 — 비주얼노벨 이벤트 CG

Preview: `public/ai-prompts/visual-novel-piano.webp`

Original: `public/ai-prompts/visual-novel-piano.png`

Dimensions: 1536 × 1024

Reuse: 이벤트 CG는 인물과의 관계가 느껴지는 시선과 자세가 핵심입니다. 큰 부드러운 음영만 남기고 머리카락·눈의 반짝임을 제한합니다.

```text
Style: High-end Japanese visual-novel event CG in distinctly drawn 2D style, elegant varying outlines, attractive original adult bishoujo design, carefully grouped hair strands, matte flat base colors with gentle broad soft shading and limited clean highlights. A restrained cream, lavender and dusty-blue palette, believable natural hand placement. Avoid porcelain skin, huge glassy eyes, ornate accessories, sparkle overlays, dense texture and photorealistic lighting.
Scene: An original adult woman in her twenties with long lavender hair loosely tied at the nape, soft gray eyes and a simple cream cardigan over a blue dress sits sideways at an upright piano in a sunlit apartment. She has just closed the plain sheet-music folder and turns toward someone outside the frame with a warm slightly teasing smile. One hand rests on the folder, the other on the edge of the bench, both clearly visible. A blue curtain and a vase with two stems suggest the room without clutter.
Composition: Landscape 3:2 intimate medium shot, character acting and eye contact as the focal point, asymmetric piano framing, a large simple pale window area and restrained secondary props.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 11. 지붕 위의 배달원 — 서브컬처 게임 스플래시

Preview: `public/ai-prompts/game-splash-courier.webp`

Original: `public/ai-prompts/game-splash-courier.png`

Dimensions: 1122 × 1402

Reuse: 스플래시는 축소해도 읽히는 전신 실루엣과 동세에 맞춥니다. 인물과 배경의 디테일 밀도를 다르게 두고, 소품과 효과는 움직임을 설명하는 것만 남깁니다.

```text
Style: Premium subculture mobile-game character splash art expressed through confident clean 2D anime lines and graphic cel color blocks. Dynamic but anatomically coherent gesture, selective detail at the face and satchel, broad navy, ivory and coral color masses, flat simplified architectural shapes. No armor clutter, floating accessory fragments, particle explosion, texture-heavy painting, plastic shine or 3D rendering.
Scene: An original adult female courier with short coral-pink hair, determined teal eyes, a practical navy jumpsuit, a red scarf and a compact messenger satchel leaps between two low rooftops in an original bright city. One knee leads, the trailing leg extends clearly, one hand balances outward and the other secures the satchel strap. A single long red scarf makes the main motion arc. Background rooftops and two simplified signs without letters form a readable diagonal route. The character is fully clothed and athletic, not sexualized.
Composition: Portrait 4:5 full-figure character splash illustration, strong diagonal motion, clear separated limbs and one dominant scarf curve. The character silhouette must be readable at thumbnail size; background stays secondary.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 12. 격납고의 마지막 점검 — 90년대 OVA 셀 작화

Preview: `public/ai-prompts/ova-hangar.webp`

Original: `public/ai-prompts/ova-hangar.png`

Dimensions: 1672 × 941

Reuse: OVA 느낌은 노이즈가 아니라 선 굵기·색 조합·셀 명암으로 재사용합니다. 기계는 실루엣 중심으로 단순화하고 복원된 마스터처럼 깨끗한 화면을 지정합니다.

```text
Style: Late-1990s Japanese OVA hand-painted cel aesthetic recreated as a pristine clean restoration. Slightly thicker confident outlines, disciplined two-tone cel shading, mature expressive anime facial proportions, grouped auburn hair shapes and a restrained teal, warm-gray and rust palette. Broad opaque painted background shapes with purposeful hard edges. No actual scan grain, dust, scratches, chromatic fringing, analog noise, glossy modern fantasy rendering or intricate mechanical microtexture.
Scene: An original adult female mechanic with a short auburn ponytail, dark eyes and a teal work jacket rolls up one sleeve while inspecting a white ceramic control panel in a quiet hangar. Her other hand holds a single wrench at her side. A large dormant humanoid machine is visible only as a broad shoulder and head silhouette in the background, not a forest of mechanical parts. A rectangular overhead lamp and an open hangar door provide the simple light setup. Her expression is tired but confident.
Composition: Landscape 16:9 medium shot, mechanic in the foreground left, machine silhouette receding on the right, clear silhouette separation and economical background staging.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 13. 꽃집을 여는 아침 — 순정만화 흑백 펜화

Preview: `public/ai-prompts/shojo-flower-shop.webp`

Original: `public/ai-prompts/shojo-flower-shop.png`

Dimensions: 1122 × 1402

Reuse: 순정만화는 표정과 부드러운 선, 검정 머리카락과 흰 여백의 대비에 맞춥니다. 망점은 규칙적인 면으로 쓰고 무작위 점이나 반짝임을 흩뿌리지 않습니다.

```text
Style: Refined traditional Japanese shojo manga ink drawing, delicate but assured variable-weight contours, luminous expressive eyes with only two controlled highlights, graceful adult character anatomy, solid black grouped hair and a few clean screentone shapes. Pure black ink and white background with designed halftone patches, not random stippling. No gray airbrush shading, scattered sparkle dots, uniformly etched detail, photographic texture or color.
Scene: An original adult woman in her twenties with a softly waved dark bob and a modest white blouse opens the tall glass door of a small flower shop. She holds a modest bouquet of three roses wrapped in plain paper against her chest, looking back with a shy amused smile. Her free hand rests naturally on the door handle. A few broad leaf shapes and the simple door frame surround her; flowers are grouped and readable rather than a dense wallpaper. No writing appears in the window.
Composition: Portrait 4:5, intimate upper-body composition with a gentle door-frame diagonal, generous clean white space and a small intentional ornamental floral corner. One standalone illustration, not a comic page.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 14. 달을 위한 하프 — 아르누보 애니 일러스트

Preview: `public/ai-prompts/art-nouveau-oracle.webp`

Original: `public/ai-prompts/art-nouveau-oracle.png`

Dimensions: 1122 × 1402

Reuse: 장식 일러스트는 큰 원형 프레임과 머리카락의 곡선에 맞춥니다. 세 가지 평면 색과 반복 형태를 유지하고 미세한 금속 장식이나 종이 노이즈는 넣지 않습니다.

```text
Style: Original adult bishoujo character illustration combining clean 2D anime face drawing with Art Nouveau contour rhythm and flat screenprint-like color design. Smooth confident dark contours, three limited matte inks of midnight blue, warm ivory and muted lavender, simplified flowing fabric and botanical shapes. Carefully designed ornamental repetition instead of tiny filigree. Perfectly clean solid color fields; no paper grain, print distress, speckling, watercolor noise, gradients, metallic shine or 3D depth.
Scene: An original adult female oracle with long dark-blue hair grouped into three broad flowing locks and a high-neck ivory gown sits beside a small crescent-shaped harp. Her hands are placed calmly near the strings; her face is in a graceful three-quarter profile. A large circular moon disk behind her and four broad iris leaves frame the scene. The gown is modest, the ornament restrained, and all forms have a deliberate clear silhouette.
Composition: Portrait 4:5, elegant nearly symmetrical editorial composition with an asymmetric hair curve, one dominant circular frame and broad flat negative spaces. No text or decorative lettering.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 15. 찻주전자의 연금술사 — SD 캐릭터 게임 일러스트

Preview: `public/ai-prompts/sd-tea-alchemist.webp`

Original: `public/ai-prompts/sd-tea-alchemist.png`

Dimensions: 1254 × 1254

Reuse: SD는 작게 보아도 읽히는 표정·소품·접촉 관계가 핵심입니다. 큰 면과 한 단계 그림자로 제한하고 입자나 사실적인 금속 반사를 제거합니다.

```text
Style: High-quality subculture-game SD character illustration with crisp vector-like 2D contours, charming carefully balanced facial features, smooth matte flat colors and one simple cel shadow per shape. Restrained plum, mint, cream and muted copper palette. Clean coherent hands and contact with props, large grouped hair shapes, intentionally simplified details. No gradients, noise, paper texture, realistic metal reflections, glossy sticker effects, tiny confetti or 3D figurine appearance.
Scene: An original adult alchemist character represented in charming three-head-tall super-deformed proportions, with round glasses, a short plum-colored bob and a modest mint apron, stands on a small step stool beside an oversized round copper teapot. She uses both hands to carefully pour one tiny measuring cup of tea into the pot, with a delighted concentrated expression. Three large herb jars, two broad leaves and one smooth curled steam ribbon provide the only surrounding props. Cute adult character design, no sexualization.
Composition: Square 1:1 isolated character-and-prop vignette on a pale ivory field, clear contact points, big readable shapes and generous margins. No text, badges or UI.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```

### 16. 눈이 그친 뒤 — 절제된 수채 애니 삽화

Preview: `public/ai-prompts/watercolor-winter.webp`

Original: `public/ai-prompts/watercolor-winter.png`

Dimensions: 1122 × 1402

Reuse: 수채 분위기는 큰 투명 색면과 가장자리의 강약으로 만듭니다. 눈·종이 알갱이 대신 비워 둔 흰 영역을 사용하고 인물의 시선에 초점을 맞춥니다.

```text
Style: Carefully drawn Japanese anime character illustration with clean variable line weight and restrained translucent watercolor-like color washes. Smooth broad pigment fields, selective soft edges and only a few crisp focal contours at eyes and hands. Muted slate blue, ivory and coral, matte simple shapes, grouped hair and economical background drawing. Watercolor mood without paper texture, granulation, random paint specks or gritty scans. No glow, bokeh, realistic skin, glittering snow, heavy digital painting or photographic rendering.
Scene: An original adult violinist with a simple dark braid, calm brown eyes, a long slate-blue coat and a muted coral scarf pauses beside a small stone bridge after snowfall. She carries a closed violin case in one hand and gently catches the end of her scarf with the other. Her slight smile suggests she has noticed someone arriving beyond the frame. A few roof silhouettes and broad unbroken snow banks suggest the town; the snowfall has already stopped, so there are no floating snow particles.
Composition: Portrait 4:5, quiet three-quarter medium-full figure, off-center bridge curve, large untouched pale areas and one warm scarf accent against cool surroundings.
Clean rendering: Render as clean, deliberate 2D drawing. Use coherent anatomy, clear hand poses, grouped hair shapes, matte skin, controlled edge hierarchy and intentional empty areas. No stochastic speckling, no crawling microtexture, no film grain, no paper noise, no dither, no chromatic aberration, no sharpening halos, no scattered glitter, no excessive bloom, no synthetic glossy skin, no photographic or 3D surfaces. No text, watermark, signature, logo, subtitles or interface.
```
