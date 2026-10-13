# Witch Theater asset provenance

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

