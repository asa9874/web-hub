# Witch Theater asset provenance

Generated with the built-in image_gen tool on 2026-10-13. No API key or remote service is used at game runtime. User-provided root ref.png is a design/material reference, not a game background. The reference remains untouched.

## Final assets

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

