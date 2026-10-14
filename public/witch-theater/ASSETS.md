# Witch Theater asset provenance

## 몬스터 / NPC / 구르기 확장 — 2026-10-14

- `monsters/*.png`: 새 일반 몬스터 19종과 보스 후보 1종. 기존 박수꾼을 포함해 일반 20종이다. `clapper-idle.png`를 재질/그림체 참고로 사용하고 캐릭터 정체성은 각각 다르게 설계했다. 움직임/공격은 `CombatStage.ts`의 변환과 `combatModel.ts`의 실제 패턴으로 표현하며 고정 프레임 시트가 아니다.
- `npcs/*.png`: 루미/세린/노엘/미라/이리스/포피 × neutral/joy/worry/angry/flustered/puppet, 총 36점. 기본 초상화는 기존 `witch-portrait.png`의 그림체를 참고했고 표정 변형은 각 기본 그림을 편집 대상으로 사용했다. puppet은 같은 NPC 정체성과 `witch-puppet.png`의 골판지 재질을 참고했다.
- `witch-roll.png`: 새 구르기 포즈 생성 원본. `witch-roll-clean.png`는 배경 정리 편집 결과이며 실제 게임/설정집은 clean 버전을 사용한다. 기존 witch-puppet.png의 정체성/복장을 유지했다. 회전과 빠른 이동/무적/화면 끝 막대는 코드에서 수행한다.
- 모든 생성은 built-in image_gen으로 개별 요청했다. 생성된 PNG의 알파를 그대로 보존해 복사했다. 외부 기본 저장 경로에 런타임 의존하지 않는다. 실제 제출 프롬프트는 `src/ForgottenWitch/codex/monster-image-prompts.json`(20), `npc-image-prompts.json`(36), `roll-image-prompts.json`(2)에 기록한다. 이 그림/이야기들은 아직 채택 여부가 미정이다.
- `objects/*.png`: 이미지 생성 도구를 사용한 새 그림이 아니라, 실제 `paper.ts`(14), `StageLighting.ts`(4), `rig.ts`(막대 미리보기 1)의 렌더링 코드에서 Playwright Canvas로 추출한 PNG 19개다. `npm run witch:export-props`로 재생성한다. 가져온 나무/입구 프레임/공용 UI 재질을 함께 표시해 설정집 사물은 총 22항목이다.
- BGM은 생성하지 않았다. `musicData.ts`의 6개 항목에 제목/설명/Suno용 영문 프롬프트만 준비했으며 그림은 기존 컷씬을 분위기 참고로 재사용한다. 무료 효과음은 기존 `audio/`의 CC0 파일을 계속 사용한다.
- 최종 아트 검수에서 이리스 인형 초안에 주인공 모자/지팡이가 섞인 것을 발견했다. `iris-puppet-v2.png`에서 이리스의 소리굽쇠/민트 리본 정체성으로 수정하고 `iris-puppet-v3.png`에서 두꺼운 골판지 외곽선과 SD 비율을 맞췄다. 게임과 설정집의 사용 버전은 v3이며 초안 2개는 제작 이력으로 남긴다. 실제 두 편집 프롬프트는 `codex/iris-puppet-correction.json`에 있다. 실사용 NPC 그림은 36개이며 제작 초안 포함 디렉터리는 38개다.

Generated with the built-in image_gen tool on 2026-10-13. No API key or remote service is used at game runtime. User-provided root ref.png is a design/material reference, not a game background. The reference remains untouched.


## Movement pose updates — 2026-10-13

Built-in image_gen edits using witch-puppet.png as the identity-preserving edit target and ref.png as a pose/material reference. Both new PNGs are copied unchanged, preserve generated transparency, contain no baked-in control rods, and are stored with the project for fresh clones.

- witch-walk.png — forward walking step.
- witch-jump.png — knees bent, airborne pose.
- Pose scale, facing-aware body pivot and rod joint: src/ForgottenWitch/poses.ts. Stage support rods are procedural in rig.ts; overlay support rods are procedural in DomPaperRods.tsx.
- Portable user reference: src/ForgottenWitch/codex/reference.png (a copy of ref.png, not rendered as the stage).

### witch-walk

```text
Use case: identity-preserve. Edit target: image 1 witch-puppet.png, the exact existing game puppet. Supporting reference: image 2 ref.png provides the walking and jumping pose vocabulary only. Create a new SINGLE transparent pose asset of the SAME apprentice witch. Preserve her exact face, half-lidded gray-violet eyes, long black hair, plum dress, cape, boots, broad pointed hat and lavender ribbon, star-tipped wooden wand, 2.7-head SD proportions, hand-painted paper texture and thick tan hand-cut cardboard perimeter. Match the existing colors and drawing quality. The whole hat, hair, both boots and wand must fit inside the frame, with SMALL balanced transparent margin. One isolated flat front-on cardboard cutout, slightly facing right; not a scene or a sprite sheet. No writing, shadow, glow, backdrop, labels or control rod. The rod is separately drawn in game code. Genuine transparent background. No photorealism, 3D or glitter; do not redesign the character.
Pose change only: a clear natural forward WALKING step to the right. Forward boot extended a little to the right and lowered to the foot baseline, rear boot trailing left with bent knee. Body upright, slight forward lean, cape and long hair sway gently backward. Wand held low and forward in her usual hand. Keep the head/hat proportions and the characteristic deadpan face. The pose must clearly differ from standing while staying a quiet puppet-theater walk.
```

### witch-jump

```text
Use case: identity-preserve. Edit target: image 1 witch-puppet.png, the exact existing game puppet. Supporting reference: image 2 ref.png provides the walking and jumping pose vocabulary only. Create a new SINGLE transparent pose asset of the SAME apprentice witch. Preserve her exact face, half-lidded gray-violet eyes, long black hair, plum dress, cape, boots, broad pointed hat and lavender ribbon, star-tipped wooden wand, 2.7-head SD proportions, hand-painted paper texture and thick tan hand-cut cardboard perimeter. Match the existing colors and drawing quality. The whole hat, hair, both boots and wand must fit inside the frame, with SMALL balanced transparent margin. One isolated flat front-on cardboard cutout, slightly facing right; not a scene or a sprite sheet. No writing, shadow, glow, backdrop, labels or control rod. The rod is separately drawn in game code. Genuine transparent background. No photorealism, 3D or glitter; do not redesign the character.
Pose change only: a clear mid-air JUMP pose. Both knees bent with boots lifted, one boot tucked slightly backward and the other forward, skirt and cape lifted slightly by motion, long hair trailing behind. A small upward body tilt, wand held close in her usual hand. Keep the modest dress, identical deadpan face and broad hat. This must read clearly as a jump when displayed only 200 pixels high. Keep her legs visible below the dress. No speed lines or magic effects.
```


## Title and dialogue polish — 2026-10-13

All artwork below was generated with the built-in image_gen tool and copied unchanged into this folder with its generated transparency. No third-party game screenshot is shipped as a product asset.

- witch-knee.png — original witch portrait extended to knee-up; used for the title and left dialogue actor.
- flora-knee.png — new knee-up Flora drawn using ONLY the original witch-portrait.png as the line-art/cel-shading style reference. A first Flora candidate retained too much of the earlier painted style and was rejected; the selected second version is used here.
- title-arch.png — independent transparent paper proscenium/curtain frame, with an empty center. The live stage, logo, menu, and character are separately rendered layers.
- Font: local public/fonts/WitchTitle-GowunBatang.ttf plus its OFL license. Title UI research is recorded in src/ForgottenWitch/codex/UI-REFERENCES.md.

### witch-knee

```text
Use case: identity-preserve. Create a premium 2D anime character illustration on genuine transparent background for a storybook game dialogue scene. Knee-up framing: show the ENTIRE head/hat, shoulders, torso, both arms, hips and thighs down to just above BOTH KNEES, with small safe margins. No cardboard perimeter; this is the detailed dialogue illustration. Clean confident economical line art, precise flat two-tone cel shadows, matte local colors, selectively softer hair highlights. Smooth flat skin, beautiful deliberate facial drawing. NO painterly airbrushing, no glossy skin, no 3D, no grain, no glow/halo/vignette/background, no text. Modest costume. Full illustration cutout, not cropped at the waist.
Image 1 witch-portrait.png is the exact character identity AND line-art/cel-shading style target. Extend and refine this same apprentice witch to knee-up, preserving her half-lidded gray-purple eyes, small deadpan mouth, waist-length straight black hair, broad pointed plum witch hat and lavender ribbon, short cape, star clasp, modest dark plum dress with subdued lavender bow, simple wooden star wand. Slightly facing right. Complete hat entirely inside frame. The hem and thighs should be visible above the knees, dark stockings. Calm, composed posture, one hand holds the wand at her side. Her other arm relaxed. Original anime character design, not chibi. Maintain the source's flat 2D drawn face, fine outlines and restrained palette. One isolated character only.
```

### title-arch

```text
Use case: illustration-story. Asset type: isolated transparent foreground proscenium arch for a handmade paper puppet theater title screen, landscape 16:9.
Reference image role: ref.png provides worn cardboard edges, muted plum and lavender, colored-pencil material only.
Primary request: A gorgeous miniature abandoned witch theater frame, made of thick layered cream/tan cardboard carved by hand, deep plum and dusty mauve paper curtains gathered on both sides, elegant upper draped curtain, narrow warm aged-gold trim, three tiny celestial ornaments at the crown: moon, star, flower. Refined theatrical decorative wood carvings at the upper corners, subtle crayon scuffs and paper fibers, soft dimensional paper edges. The center must be a LARGE EMPTY TRANSPARENT OPENING covering at least 75% of the width and 75% height, for a separately rendered stage and title. Very narrow ornate side wings only (about 8% each) and an ornate top border (about 10%). No bottom border. This is ONE isolated theater frame asset, NOT a full scene. Complete rectangular outer outline fits the image edges. Dramatic, beautifully hand-crafted, expensive art-book quality with restrained ornament. Palette dark plum #403348, lavender #75677F, aged cream #F3E5CE, dusty pink #E7AEB6, warm cardboard tan #D6B38C. Not photorealistic 3D.
Constraints: truly transparent center opening AND outside edges. No stage, trees, character, furniture, menu, text, logo, light glow, backdrop, vignette or casting shadows into the center opening. No pixel art or generic vector graphics.
```

### flora-knee

```text
Use case: illustration-story. Image 1 is STYLE reference ONLY: witch-portrait.png. Create a DIFFERENT female character, Flora, in exactly that clean Japanese 2D anime drawing language. Do not copy the witch's identity or costume.
Asset: one knee-up dialogue cutout. Mint bob haircut, pale green eyes, gentle small closed-mouth smile, cream-and-sage petal dress with dusty pink/lavender accents, a small flower clock hair ornament and chest brooch. Her face/eye proportions and economical ink outlines must match the reference witch: clean large but restrained anime eyes, small nose, subtly flushed flat skin, NOT a painterly realistic face. Keep anatomy natural and costume modest. Full head, shoulders, both hands, waist, hips and both thighs down to just ABOVE KNEES visible, with balanced margins. Slightly facing left. Her hands relaxed at waist.
STRICT RENDER: draw complete flat local-color regions and HARD-EDGED TWO-TONE CEL SHADOWS like the reference. Broad grouped mint hair shapes with simple flat shadow clusters, NO soft airbrush shading, NO brushy hair, NO realistic skin rendering, NO diffuse highlight haze. Exquisite deliberate line art, same ink weight and finish as the witch portrait. Fine details concentrated on face and brooch, large clean color areas in dress. No 3D gloss, grain, glow, scene, cast shadow, text or vignette. Fully transparent background. One character only, no frame, no sheet.
```

## Original prototype assets

- witch-puppet.png — SD cutout; separate code-rendered wooden rod below the feet.
- flora-puppet-clean.png — SD cutout; separate wooden rod.
- witch-portrait.png — detailed anime upper-body dialogue cutout.
- flora-portrait-clean.png — detailed anime upper-body dialogue cutout.
- paper-tree.png — independent tree flat, repeated with scale, facing, depth and parallax variations.
- cover.webp — screenshot of the actual running game, encoded by Sharp for the hub and OG generator.

Original flora-puppet.png and flora-portrait.png are retained as generation iterations. Original generated PNG files have been copied without pixel edits; generated alpha is preserved. No reference sheet is rendered as the stage. Runtime material props (paper/ground/bridge/moon/star/clock-flower/device/curtain) are separate seeded Canvas bitmap textures in src/ForgottenWitch/paper.ts; these are final procedural prototype assets, not missing-image placeholders. The paper UI reuses public/hub/pastel-paper.webp (see that folder's ASSETS.md). Audio cues are synthesized locally by Web Audio.

## Submitted generation prompts

### witch-puppet

```text
Use case: illustration-story. Asset type: a single transparent game character cutout for a 2D cardboard puppet theater. Reference image role: the attached ref.png is character design and material reference only, never reproduce its sheet layout.
Primary request: one complete 2.7-head-tall SD apprentice witch, facing slightly right, neutral pose, full body and broad hat entirely visible with a generous transparent margin. Long straight midnight black hair to waist, half-lidded gray-violet eyes, understated deadpan expression, broad pointed dark plum hat with muted lavender ribbon, simple dark plum dress, short cape, black ankle boots, small wooden star wand. Restrained decoration. Match the reference's charming anime face, hand-cut tan cardboard backing, exposed thick paper edge, subtle color-pencil and crayon scuffs. Matte plum, lavender gray, soft peach. Flat painted cutout viewed front-on, no perspective distortion.
Constraints: genuinely transparent background, one isolated character, no ground or cast shadow outside the cutout, no writing, no labels, no sheet panels. IMPORTANT no attached control rod: code will attach a separate wooden rod beneath the feet. No pixel art, no glossy 3D, no photographic person, no noisy speckling.
```

### flora-puppet

```text
Use case: illustration-story. Asset type: one transparent 2D SD cardboard puppet character cutout. Reference image role: ref.png provides handmade cardboard edge and colored-pencil material, not character identity.
Primary request: Flora, the clock-flower garden guide. One complete 2.7-head-tall female anime cardboard puppet, facing slightly left, full body visible, gentle unchanged smile, mint bob haircut, pale green eyes, modest cream and sage petal-shaped dress, a small flower clock brooch. Arms relaxed holding a tiny paper flower, simple shoes. Cut from thick tan cardboard with uneven hand-cut edge, painted with soft pastel pencil/crayon, layered cream paper highlights. Palette cream #F3E5CE, sage #A9C9B4, dusty pink #E7AEB6, lavender #B9A3D4. Clean intentional texture, not random noise.
Constraints: a single character centered with margin on genuinely transparent background. No lettering, sheet, ground, no control rod (separate rod added in code), no pixels, no vector icon, no realistic 3D.
```

### witch-portrait

```text
Use case: illustration-story. Asset type: high-quality transparent dialogue portrait, character upper-body cutout for a visual novel.
Reference image role: ref.png is identity and clothing reference. Render this same deadpan apprentice witch as a refined 2D anime upper-body illustration, NOT SD cardboard. Long straight black hair, half-closed gray-violet eyes, tiny reserved expression, broad pointed dark plum witch hat with muted lavender ribbon, short cape and simple modest plum dress. Waist-up with entire hat and shoulders inside canvas with margin, slightly facing right. Beautiful economical clean outlines, subtle facial expression, pastel cel shading, matte colors, restrained lavender rim light. Not glossy. Hands low and mostly outside the framing. Background fully transparent.
Constraints: one character only, no backing cardboard, no texture on skin, no writing, no scene, no photorealism, no 3D, no grain or synthetic glossy highlights, no random speckling.
```

### flora-portrait

```text
Use case: illustration-story. Asset type: high-quality transparent waist-up dialogue portrait for a visual novel.
Primary request: Flora, a kind clock-flower garden guide, upper-body adult female anime character, mint bob hair with neat fringe, pale green eyes, warm gentle smile that feels slightly too consistent, modest cream and sage petal dress with a small flower-shaped clock brooch. Slightly facing left. Entire head, shoulders, upper body visible with margin. Refined clean Japanese animation illustration, controlled pastel cel shading, delicate face and eyes, clear silhouette, matte soft cream, sage, dusty pink, lavender. This is a detailed anime portrait, not a chibi or cardboard puppet. Transparent background.
Constraints: one isolated character, no scene, no text, no cardboard backing, no grain, no noisy texture, no glossy skin, no 3D or realistic photo.
```

### Flora cutout cleanup (each original image separately)

```text
Use case: background-extraction. Edit the provided character image only: remove ALL background, the brown/gray backdrop, vignette, glow, halo and cast shadows outside the actual character. Preserve the exact character artwork, pose, face, outfit and for the puppet its tan cardboard outline. Output a single clean isolated character on genuinely fully transparent background. No glow, no backdrop tint, no shadows, no added objects or changed costume. Leave intact the bottom edge of the character. This will be layered over a bright cream theater stage.
```

### paper-tree

```text
Use case: illustration-story. Asset type: single transparent prop cutout for a handmade cardboard puppet theater game.
Reference image role: ref.png provides the thick tan hand-cut cardboard edge and worn colored-pencil treatment.
Primary request: one tall whimsical paper forest tree viewed flat from the front, complete crown and trunk with roots visible and generous margin. Layered sage-green and cream paper leaves in rounded, irregular cloud-like groups, small lavender leaf accents, warm cardboard tan long trunk with simple pencil bark lines, slightly crooked branches. Thick exposed cardboard edge, softly worn scissor-cut outline. Pastel #A9C9B4 #F3E5CE #D6B38C #B9A3D4. Gentle crayon rubbing and paper fibers. Charming theatrical handmade illustrated stage prop, restrained detail, broad grouped shapes. It must read clearly at 220 pixels wide. No realistic 3D.
Constraints: one isolated tree only on a genuinely transparent background, NO scene or floor, no character, no backdrop, no external cast shadow, NO halo/glow/vignette, no letters or labels, no pixel art, no smooth vector-icon look.
```

# 컷씬 후보 20점 추가 (2026-10-13)

## 테스트 전투 이미지 추가 (2026-10-14)

`witch-attack.png`, `game-over.png`, `clapper-idle.png`, `clapper-walk.png`, `clapper-attack.png`는 built-in image_gen의 개별 생성/편집 결과 원본이다. 마녀는 기존 witch-puppet.png, 몬스터 동작은 새 clapper-idle.png를 기준으로 몸/재질/정체성을 유지했다. 실제 프롬프트는 `src/ForgottenWitch/codex/combat-image-prompts.json`. 미사일은 기존 코드 기반 종이 별 텍스처와 절차적 막대를 사용한다. 효과음은 audio/README.md 및 원본 CC0 라이선스에 별도로 기록한다.

## 대화 감정 일러스트 추가

`expressions/`의 witch/flora × joy/worry/angry/flustered 8점은 built-in image_gen으로 개별 편집 생성했다. 각 캐릭터의 기존 `*-knee.png`가 편집 대상, `witch-portrait.png`가 그림체 참고이다. 몸/의상/손/무릎 구도는 유지하고 얼굴만 바꾼 요청이다. 기본 neutral은 기존 knee 그림을 재사용한다. 요청 시 transparent_background=true를 사용하고 결과의 alpha를 그대로 보존했다. 실제 제출 프롬프트 8개는 [expression-prompts.json](../../src/ForgottenWitch/codex/expression-prompts.json)에 저장한다. 원본 결과 PNG를 변형 없이 Git에 포함하며, 이번 대화의 표정·리듬·합성 말소리는 같은 감정 키를 사용한다.

`cutscenes/*.png`는 built-in `image_gen`으로 각 장면마다 별도 호출하여 생성한 고해상도 원본입니다. 스타일/인물 기준은 `witch-portrait.png`이며, 이 파일을 모든 호출의 referenced_image_paths에 사용했습니다. 출력은 불투명 풍경 일러스트입니다. 실제 제출 프롬프트 전부는 [illustrations.json](../../src/ForgottenWitch/illustrations.json)에 그대로 저장되어 있고 게임 갤러리 상세보기에서도 볼 수 있습니다. 17점은 일반 애니메이션 일러스트, 3점은 chibi 컷씬입니다. 스토리와 사용 여부는 미정이며 현재 플레이의 확정 사건이 아닙니다. 생성 결과 PNG는 변형 없이 저장소로 복사했습니다.



## 빠른 동작 프레임 — 2026-10-14

built-in image_gen으로 `witch-walk.png` / `witch-jump.png`를 각각 편집 대상으로 사용한 투명 PNG2점. 원본 파일을 유지하고 생성된 알파를 수정하지 않고 프로젝트로 복사했다. `witch-walk-alt.png`는 중간 걸음, `witch-fall.png`는 하강 준비이며 새 캐릭터 디자인이 아니다. 실제 제출 프롬프트는 src/ForgottenWitch/codex/movement-image-prompts.json. 포즈 높이/몸체 연결점은 poses.ts, 변환/거리 주기는 PlayerMotion.ts, 파티클은 StageLife.ts의 코드로 처리한다. 조종 막대나 파티클을 그림에 합성하지 않았다.
