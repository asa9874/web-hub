# Sound.md — 게임 사운드 설계서

> 게임: **Aestelia — 별빛 덱빌더 로그라이크**  
> 주제: 마법소녀 다크판타지 / 별빛·달빛·성좌  
> 플랫폼: Phaser 4.1 (Web Audio API 기반, 향후 에셋 파일 교체 예정)

---

## 1. SFX (효과음) 목록

### 1-1. 카드 관련

| SFX ID | 메서드명 | 트리거 위치 | 음향 특성 | 구현 상태 |
|---|---|---|---|---|
| `sfx_card_pickup` | `playCardPickup()` | 카드 드래그 시작 | 짧고 가벼운 상승음 (380→420 Hz, 60ms) | ✅ 오실레이터 |
| `sfx_card_draw` | `playCardDraw()` | 턴 시작 드로우 / 드로우 포션 | 부드러운 상승음 (600→740 Hz, 70ms) | ✅ 오실레이터 |
| `sfx_card_discard` | `playCardDiscard()` | 카드 버림 더미 애니 완료 | 낮고 부드러운 하강음 | ❌ 미구현 |
| `sfx_card_add` | `playCardAdd()` | 카드 보상 선택 / 상점 구매 | 밝은 2음 상승 (피치 업) | ❌ 미구현 |
| `sfx_card_exhaust` | `playCardExhaust()` | 소진(exhaust) 카드 사용 | 낮게 꺼지는 소멸음 | ❌ 미구현 |

### 1-2. 전투 관련

| SFX ID | 메서드명 | 트리거 위치 | 음향 특성 | 구현 상태 |
|---|---|---|---|---|
| `sfx_attack` | `playAttack()` | 공격 카드 사용 | 날카로운 사각파 하강 (260→180 Hz, 120ms) | ✅ 오실레이터 |
| `sfx_defend` | `playDefend()` | 기술/방어 카드 사용 | 맑은 방형파 (440 Hz, 100ms) | ✅ 오실레이터 |
| `sfx_hit_light` | — | 일반 피격 | 짧고 둔탁한 충격음 | ❌ 미구현 |
| `sfx_hit_heavy` | — | 중타격 (≥15 dmg) | 저음 충격 + 잔향 | ❌ 미구현 |
| `sfx_block_gain` | — | 방어도 부여 | 금속성 방패 클링 | ❌ 미구현 |
| `sfx_player_death` | — | 플레이어 HP 0 | 느린 하강 + 에코 | ❌ 미구현 |
| `sfx_monster_death` | `playMonsterDeath()` | 적 HP 0 → 사망 트윈 | 사각파 하강 (210→70 Hz, 300ms) | ✅ 오실레이터 |
| `sfx_boss_phase` | `playBossPhase()` | 보스 페이즈 전환 | 무거운 저음 충격 (100→60 Hz, 550ms) | ✅ 오실레이터 |
| `sfx_boss_roar` | — | 보스 등장 | 낮고 울리는 포효 | ❌ 미구현 |
| `sfx_victory` | `playVictory()` | 전투 승리 | 3음 상승 팡파르 (C5→G5→C6) | ✅ 오실레이터 |
| `sfx_game_over` | — | 게임 오버 | 낮고 긴 하강 멜로디 | ❌ 미구현 |

### 1-3. 상태이상 관련

| SFX ID | 메서드명 | 트리거 위치 | 음향 특성 | 구현 상태 |
|---|---|---|---|---|
| `sfx_poison` | `playPoison()` | 독 피해 발생 | 낮고 음울한 하강음 (175→130 Hz, 220ms) | ✅ 오실레이터 |
| `sfx_strength_up` | — | 힘 상태이상 부여 | 강렬한 상승 포효 | ❌ 미구현 |
| `sfx_vulnerable` | — | 취약 상태이상 부여 | 균열음 (노이즈 느낌) | ❌ 미구현 |
| `sfx_weak` | — | 약화 상태이상 부여 | 낮게 흐려지는 음 | ❌ 미구현 |
| `sfx_star_aura` | — | 별기(starAura) 부여 | 맑고 반짝이는 벨 | ❌ 미구현 |
| `sfx_constellation` | — | 성좌(constellation) 부여 | 부드럽고 신비로운 상승음 | ❌ 미구현 |

### 1-4. 아이템·포션·유물

| SFX ID | 메서드명 | 트리거 위치 | 음향 특성 | 구현 상태 |
|---|---|---|---|---|
| `sfx_potion` | `playPotion()` | 포션 사용 | 생기 있는 상승음 (440→660 Hz) | ✅ 오실레이터 |
| `sfx_heal` | `playHeal()` | HP 회복 | 밝은 상승 사인파 (523→659 Hz) | ✅ 오실레이터 |
| `sfx_relic_acquire` | — | 유물 획득 | 신비로운 3음 화음 + 반짝임 | ❌ 미구현 |
| `sfx_gold_gain` | — | 골드 획득 | 경쾌한 코인 클링 (고음 2회) | ❌ 미구현 |
| `sfx_shop_buy` | — | 상점 구매 | 구매 성공 확인음 | ❌ 미구현 |
| `sfx_shop_no_gold` | — | 골드 부족 | 짧고 낮은 오류음 | ❌ 미구현 |

### 1-5. UI / 씬 전환

| SFX ID | 메서드명 | 트리거 위치 | 음향 특성 | 구현 상태 |
|---|---|---|---|---|
| `sfx_achievement` | `playAchievement()` | 도전 과제 달성 팝업 | 3음 팡파르 (C5→G5→C6, 상승) | ✅ 오실레이터 |
| `sfx_btn_click` | — | 버튼 클릭 전반 | 경쾌하고 짧은 클릭음 | ❌ 미구현 |
| `sfx_btn_hover` | — | 버튼 호버 | 아주 짧고 부드러운 틱 | ❌ 미구현 |
| `sfx_map_node_select` | — | 맵 노드 선택 | 맑은 핑 + 잔향 | ❌ 미구현 |
| `sfx_turn_end` | — | 턴 종료 버튼 클릭 | 확정적인 중저음 탁음 | ❌ 미구현 |
| `sfx_dialogue_blip` | — | 다이얼로그 텍스트 타이핑 | 짧고 중립적인 틱 (캐릭터별 피치 변주) | ❌ 미구현 |
| `sfx_rest_heal` | — | 휴식 처 회복 | 평화롭고 따뜻한 코드 상승 | ❌ 미구현 |
| `sfx_scene_transition` | — | 씬 페이드인/아웃 | 부드러운 사운드스케이프 스윕 | ❌ 미구현 |

---

## 2. BGM (배경음악) 목록 & SUNO AI 프롬프트

> **공통 스타일 가이드라인**  
> 장르 키워드: `anime OST`, `magical girl`, `dark fantasy`, `orchestral`, `piano-led`  
> 분위기 키워드: `bittersweet`, `moonlight`, `starry`, `melancholic hope`  
> 금지 요소: 보컬 (기본 인스트루멘탈 요청), 너무 밝거나 어린이 느낌의 팝

---

### BGM-01_타이틀 테마_별이 부서진 밤.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | TitleScene |
| **반복** | 루프 |
| **길이** | 2분 30초 내외 |
| **분위기** | 신비롭고 쓸쓸한 오프닝. 부서진 별빛의 잔해 속 고요함. 기대감과 슬픔이 공존. |

```
[Instrumental]
[Genre: anime OST, dark magical girl, orchestral piano]
[Mood: mysterious, melancholic, bittersweet, nostalgic]
[Instruments: solo piano (main melody), cello section, soft choir (wordless "ah"), harp arpeggios, distant bells, subtle electronic shimmer]
[Tempo: 72 BPM, 4/4]
[Key: D minor]

Opening with sparse solo piano playing a gentle, melancholic waltz-like theme in D minor. The melody is hauntingly beautiful — simple but emotionally resonant. After 16 bars, a soft cello section enters in harmony. Around the halfway point, a wordless choir ("ah") swells briefly like a forgotten memory surfacing. Harp arpeggios add ethereal shimmer throughout. The piece ends quietly, fading with distant bells and a final piano note left ringing. Reminiscent of Yuki Kajiura or Hiroyuki Sawano's quieter works.
```

---

### BGM-02_허브 테마_루나의 방.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | HubScene (런 사이 허브 메뉴) |
| **반복** | 루프 |
| **길이** | 2분 내외 |
| **분위기** | 아늑하고 평온함. 전투 사이의 짧은 안식. 어딘가 외롭지만 따뜻한 분위기. |

```
[Instrumental]
[Genre: anime OST, cozy fantasy, lo-fi orchestral]
[Mood: peaceful, lonely-but-warm, reflective, intimate]
[Instruments: acoustic guitar (fingerpicking), soft piano, light woodwinds (flute), ambient pad, very soft percussion (brush snare), occasional chime]
[Tempo: 80 BPM, 3/4 waltz feel]
[Key: G major with some minor transitions]

A gentle fingerpicked acoustic guitar carries the main melody in a soft waltz tempo. A piano adds countermelodies. Flute occasionally solos with a wandering, improvisational feel. The overall texture is warm and sparse — like sitting in a moonlit room between adventures. Subtle ambient pads add depth without overwhelming the acoustic warmth. Reminiscent of cozy game OSTs like those from Spiritfarer or Hollow Knight's Dirtmouth.
```

---

### BGM-03_맵 탐험 테마_별자리를 따라서.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | MapScene |
| **반복** | 루프 |
| **길이** | 2분 30초 내외 |
| **분위기** | 탐험의 설렘과 약간의 긴장감. 미지의 경로를 선택하는 순간의 두근거림. |

```
[Instrumental]
[Genre: anime OST, adventure fantasy, light orchestral]
[Mood: adventurous, slightly tense, hopeful curiosity, wandering]
[Instruments: light strings (pizzicato), marimba or xylophone, piano, soft brass (distant horn calls), harp, light percussion]
[Tempo: 92 BPM, 4/4]
[Key: E minor]

Opens with pizzicato strings creating a forward momentum. Marimba or xylophone provides a playful, exploratory melody. Distant French horn calls suggest unknown paths ahead. A piano weaves through mid-range harmonies. The piece has a slightly nervous energy — like choosing between dangerous paths on a glowing constellation map. Light percussion gives it movement without feeling aggressive. Inspired by Yasunori Mitsuda's exploration themes.
```

---

### BGM-04_일반 전투 테마_달빛 공세.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (일반 전투) |
| **반복** | 루프 |
| **길이** | 2분~2분 30초 |
| **분위기** | 빠르고 긴장감 있는 전투. 마법소녀의 칼날 같은 에너지. 어둡지만 화려함. |

```
[Instrumental]
[Genre: anime battle OST, dark magical girl, action orchestral]
[Mood: intense, fierce, magical, driven, energetic]
[Instruments: electric guitar (rhythm and lead), driving string section, dramatic piano runs, taiko drums or heavy percussion, choir (staccato "ha" hits), synth bass]
[Tempo: 148 BPM, 4/4]
[Key: B minor]

Opens with aggressive electric guitar riff immediately establishing the combat energy. Strings play driving sixteenth-note patterns underneath. Dramatic piano runs provide melodic moments between the percussion hits. Taiko-style drum hits create impactful beats. Staccato choir "ha" hits sync with the rhythm during peak sections. The piece has a magical girl anime battle feel — fierce but with an underlying elegance. Reminiscent of Yuki Kajiura's Sword Art Online or Madoka Magica battle tracks. No breakdowns — constant forward momentum.
```

---

### BGM-05_엘리트 전투 테마_성운의 검.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (elite 모드) |
| **반복** | 루프 |
| **길이** | 2분 30초 |
| **분위기** | 일반 전투보다 더 어둡고 위협적. 강적과 맞서는 긴박함. 전자음과 오케스트라의 혼합. |

```
[Instrumental]
[Genre: dark anime OST, elite battle, hybrid orchestral-electronic]
[Mood: tense, ominous, urgent, powerful, slightly oppressive]
[Instruments: distorted strings (col legno effects), heavy synth bass, pounding drums, electric guitar (djent-style), dark piano, bass choir (wordless), industrial percussion]
[Tempo: 158 BPM, 4/4]
[Key: C# minor]

Opens with distorted strings and heavy synth bass creating immediate oppressive atmosphere. Djent-style electric guitar adds industrial aggression. Pounding drums with electronic processing underneath create a relentless rhythm. A low bass choir adds darkness. Occasional piano melodic lines cut through the noise with desperate beauty — a reminder of what's at stake. The piece feels like fighting an overwhelmingly powerful enemy in a corrupted space. More chaotic and less elegant than the standard battle theme.
```

---

### BGM-06_보스 전투 테마_기억의 심연.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (boss 모드) |
| **반복** | 루프 (페이즈 2 전환 시 강도 상승 가능) |
| **길이** | 3분+ |
| **분위기** | 웅장하고 비장함. 타이틀 테마의 멜로디가 왜곡·변형되어 등장. 절망과 결의가 교차. |

```
[Instrumental]
[Genre: epic anime boss battle OST, dark orchestral, symphonic metal]
[Mood: epic, desperate, tragic, overwhelming, climactic]
[Instruments: full orchestra (strings, brass, woodwinds), choir (dramatic Latin-style chanting), electric guitar, massive drums, pipe organ, solo piano (appears briefly, playing the main theme distorted), timpani]
[Tempo: 138 BPM, 4/4, with a 3/4 section for the phase 2 buildup]
[Key: D minor (same as title theme, but more chaotic)]

Opens with timpani and brass creating a massive, overwhelming atmosphere. The choir chants dramatically as the full orchestra builds. Around the midpoint, the main title theme melody appears — but corrupted, played on distorted piano or strings in an unsettling way, suggesting the protagonist's lost memories manifest as the enemy. The piece combines symphonic metal energy with orchestral drama. Bass choir and pipe organ add weight. The 3/4 section creates a dizzying, waltz-in-chaos feel for phase 2. Inspired by Hiroyuki Sawano's epic compositions.
```

---

### BGM-07_승리 팡파르_별빛 귀환.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | VictoryScene (전투 후 승리) |
| **반복** | 비루프 (1회 재생) |
| **길이** | 30~45초 |
| **분위기** | 짧고 감동적인 승리의 여운. 과하게 밝지 않고, 조금 지쳐있지만 해냈다는 안도감. |

```
[Instrumental]
[Genre: anime OST, victory jingle, short orchestral fanfare]
[Mood: relieved, quietly triumphant, warm, bittersweet victory]
[Instruments: brass fanfare (muted), piano melody, soft strings, harp glissando, chime]
[Tempo: 96 BPM, 4/4]
[Key: D major (relative major of the title theme D minor)]
[Duration: 35 seconds, no loop]

A short, emotionally resonant victory fanfare. Opens with a soft brass motif — triumphant but muted, not overly celebratory. Piano enters with a gentle, ascending melody. Strings warm up the harmony. A harp glissando and chime mark the peak. The piece ends with a held note, leaving space to breathe. The shift from D minor (title/boss theme) to D major gives a sense of light breaking through darkness — earned, not given.
```

---

### BGM-08_게임 오버 테마_흩어진 별.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | 게임 오버 화면 (TitleScene 복귀 전) |
| **반복** | 비루프 (1회 재생) |
| **길이** | 40~60초 |
| **분위기** | 슬프고 조용한 실패. 별이 하나씩 꺼지는 느낌. 좌절보다는 체념과 아쉬움. |

```
[Instrumental]
[Genre: anime OST, game over theme, melancholic short piece]
[Mood: sorrowful, quiet defeat, resignation, fading]
[Instruments: solo piano (sparse, slowing), soft string fade-out, distant echo]
[Tempo: 60 BPM slowing to 52 BPM, 4/4]
[Key: D minor]
[Duration: 50 seconds, no loop]

Opens with a single piano playing the main title melody — but slowly, with longer pauses between notes, as if remembering. Soft strings enter quietly and then fade. The piece decelerates gradually, like a clock winding down. Final note held long with reverb, then silence. No percussion. Pure emotional simplicity. The feeling of a star going out.
```

---

### BGM-09_상점 테마_별빛 상단.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | ShopScene |
| **반복** | 루프 |
| **길이** | 1분 30초 내외 |
| **분위기** | 기묘하고 quirky하지만 친근한. 수상한 상인의 분위기. 약간의 신비로움. |

```
[Instrumental]
[Genre: anime OST, fantasy shop theme, quirky lighthearted]
[Mood: whimsical, slightly mysterious, friendly, curious]
[Instruments: accordion or music box, pizzicato strings, light percussion (finger snaps, triangle), clarinet or oboe melody, jazzy upright bass, occasional harp twinkle]
[Tempo: 104 BPM, 3/4 or 6/8 feel]
[Key: F major with chromatic flourishes]

A whimsical, slightly off-kilter theme for a mysterious shop. The accordion or music box carries a charming, slightly eerie melody. Pizzicato strings and upright bass create a light, bouncing groove. A clarinet or oboe adds a wandering melody line. Occasional chromatic notes hint that this shopkeeper knows more than they let on. Occasional harp twinkles suggest magical wares on display. Think Hollow Knight's Salubra or a Studio Ghibli market scene.
```

---

### BGM-10_휴식 처 테마_달이 기다리는 곳.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | RestScene |
| **반복** | 루프 |
| **길이** | 2분 내외 |
| **분위기** | 진심으로 평화롭고 포근함. 잠깐의 숨고르기. 달빛 아래 모닥불 같은 안정감. |

```
[Instrumental]
[Genre: anime OST, rest theme, ambient acoustic]
[Mood: peaceful, restorative, safe, warm, contemplative]
[Instruments: classical guitar (fingerpicking), soft piano, breathy flute, nature ambience (very subtle wind), ambient pad (barely audible), chime drops]
[Tempo: 66 BPM, free-flowing, rubato feel]
[Key: A major]

A profoundly calm piece built on classical guitar fingerpicking in a free-flowing style. Piano adds sparse, breathing harmonies. A breathy flute occasionally plays long tones like a distant wind. The piece feels like a safe clearing under moonlight — no urgency, no threat. Chime drops appear like falling stars. Subtle nature ambience (gentle wind, distant cricket) embedded in the reverb tail. The tempo doesn't drive — it drifts. Inspired by Joe Hisaishi's quieter moments.
```

---

### BGM-11_이벤트 테마_기억 속 갈림길.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | EventScene (랜덤 이벤트) |
| **반복** | 루프 |
| **길이** | 1분 30초~2분 |
| **분위기** | 결정의 무게. 무언가가 숨겨진 듯한 긴장감. 신비롭지만 약간 불안. |

```
[Instrumental]
[Genre: anime OST, event/choice theme, mysterious atmospheric]
[Mood: mysterious, tense choice, uncertain, slightly eerie, curious]
[Instruments: celesta or music box, low strings (sustained, slightly dissonant), solo violin (wandering), soft piano, quiet electronic pulses, ambient pads]
[Tempo: 84 BPM, loose 4/4]
[Key: B minor with ambiguous modulations]

A mysterious, atmospheric piece that creates a sense of standing at a crossroads. Celesta or music box plays a slightly unsettling, child-like melody — suggesting something innocent hiding something darker. Low strings sustain dissonant harmonies underneath. A solo violin wanders melodically, questioning. Quiet electronic pulses add a modern unease. Ambient pads blur the tonal center. The piece should feel like reading a strange message left by someone unknown — curious and slightly threatening.
```

---

### BGM-12_로어북 테마_아이스텔리아의 역사.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | LoreBookScene |
| **반복** | 루프 |
| **길이** | 2분~2분 30초 |
| **분위기** | 고요하고 학술적이며 신비로운. 오래된 책장을 넘기는 분위기. |

```
[Instrumental]
[Genre: anime OST, library/lore theme, ambient orchestral]
[Mood: contemplative, scholarly, mysterious, ancient, peaceful curiosity]
[Instruments: harpsichord or piano (baroque feel), soft strings, contrabass (pizzicato), ambient reverb pads, occasional flute ornaments, distant choir hum]
[Tempo: 76 BPM, 4/4, gentle and measured]
[Key: E minor]

A measured, contemplative piece evoking the reading of ancient texts. A harpsichord or piano with baroque ornamentation carries the main melody — dignified and slightly archaic. Soft strings provide harmonic foundation. Pizzicato contrabass marks quiet time. Distant choir hum emerges occasionally like spirits of the past. The piece breathes slowly with natural pauses. Reverb adds the sense of a vast, echoing library. Inspired by the music of Dragon's Dogma or Bravely Default's exploration themes.
```

---

### BGM-13_다이얼로그 컷씬 테마_루나의 기억.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | DialogueScene (스토리 컷씬) |
| **반복** | 루프 |
| **길이** | 2분 30초 |
| **분위기** | 감정의 파동. 캐릭터의 내면을 반영하는 섬세한 서정. 기억과 정체성의 테마. |

```
[Instrumental]
[Genre: anime OST, cutscene/dialogue theme, emotional piano-led]
[Mood: emotional, intimate, nostalgic, searching, fragile hope]
[Instruments: solo piano (main voice), solo violin (response voice), soft cello, harp (sparse fills), distant wordless soprano (very quiet, like a memory)]
[Tempo: 88 BPM, rubato sections, 4/4 with free passages]
[Key: D minor to F major transitions]

A deeply emotional, intimate conversation between piano and violin — representing Luna and Lumia's relationship. The piano plays the main melody, the violin responds like an answering voice. Passages of rubato (free tempo) allow the music to breathe like speech. A distant, barely-audible soprano appears in the emotional peak — a ghost of a memory. The piece moves from D minor's searching sadness toward F major's fragile hope, but never fully resolves. Reminiscent of Yuki Kajiura's intimate character themes.
```

---

### BGM-14_Act 2 필드 테마_첨탑의 공명.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | MapScene (Act 2 — 별의 첨탑) |
| **반복** | 루프 |
| **길이** | 2분 30초 |
| **분위기** | 더 높은 곳으로 오를수록 커지는 위압감. 아름답지만 차갑고 위험한 분위기. |

```
[Instrumental]
[Genre: anime OST, dark fantasy exploration, ominous atmospheric]
[Mood: ominous grandeur, cold beauty, ascending tension, dangerous wonder]
[Instruments: strings (tremolo, col legno), glass harmonica or singing bowls, piano (sparse, high register), bass clarinet, low brass (distant, sustained), wind machine (subtle)]
[Tempo: 80 BPM, 4/4 with free passages]
[Key: F# minor]

Tremolo strings create an unsettling shimmer. Glass harmonica or singing bowls add an otherworldly, crystalline quality — like the sound of stars close enough to touch. High register piano notes fall like drops into still water. Bass clarinet and low brass create an underlying dread. Wind machine (or its synthesis equivalent) suggests altitude and exposure. The piece evokes standing at the top of an impossible tower, beautiful and terrifying, with the world far below. Colder and more threatening than the Act 1 exploration theme.
```

---

### BGM-15_Act 3 필드 테마_성천원의 침묵.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | MapScene (Act 3 — 성천원) |
| **반복** | 루프 |
| **길이** | 2분 30초 |
| **분위기** | 신성하고 위압적인 고요. 최종 결전을 앞둔 압도적인 정적. |

```
[Instrumental]
[Genre: anime OST, sacred ancient place, ambient orchestral climax]
[Mood: sacred, overwhelming stillness, pre-climax tension, awe, dread]
[Instruments: choir (Latin chant, very quiet and distant), organ (sustained, minimal), solo cello (low melody), deep percussion (very sparse hits), ambient reverb, crystalline synth tones]
[Tempo: very slow, 52 BPM, almost free-tempo]
[Key: D minor (returns to the root key of the title theme)]

An oppressive, sacred silence. A choir sings barely-audible Latin phrases in the far distance. A pipe organ holds long, unresolved chords. A solo cello plays a mournful, slow descent. Occasional deep percussion hits land with the weight of fate. Crystalline synth tones shimmer like ancient stars. The piece feels like standing in the hall of something ancient that has been waiting — aware of you. The connection back to the title theme's D minor key signals that all things return to this moment.
```

---

### BGM-16_보스 전투_암흑 군주_케인의 타락.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 1 보스 — 암흑 군주 케인 아스타르) |
| **반복** | 루프 (페이즈 2 전환 시 강도 상승 가능) |
| **길이** | 3분+ |
| **분위기** | 한때 도시를 지켰던 기사의 비극적 타락. 고귀함과 어둠이 충돌. 빛을 증오하면서도 그리워하는 아이러니. |

```
[Instrumental]
[Genre: dark anime boss battle OST, fallen knight theme, tragic orchestral]
[Mood: tragic nobility, corrupted honor, dark grandeur, bitter betrayal]
[Instruments: heavy war drums, dark brass fanfare (distorted), choir (low Latin chant), electric guitar (heavy, distorted), full strings (driving), solo trumpet (muted, distant — representing former glory), pipe organ]
[Tempo: 144 BPM, 4/4]
[Key: A minor]

Opens with a militant war drum cadence — the ghost of a knight's march, now corrupted. Low brass and distorted guitar establish oppressive weight. A muted solo trumpet briefly echoes a noble fanfare in the distance, immediately swallowed by dark strings and choir chanting. The piece captures a warrior who once stood for something and lost it — each musical phrase hints at former glory before twisting into darkness. Pipe organ surges in phase 2, overwhelming the remaining traces of nobility. The crystalline darkness in his wings is reflected in high, glassy string harmonics cutting through the heavy low-end. Reminiscent of Nier Automata's boss themes meets Yuki Kajiura's darkness.
```

---

### BGM-17_보스 전투_별빛 파괴자_이사벨라의 공백.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 1 보스 — 별빛 파괴자 이사벨라 루에스) |
| **반복** | 루프 |
| **길이** | 3분+ |
| **분위기** | 기억을 잃은 마법소녀. 루나와 닮았지만 눈 속에 아무것도 없음. 아름다우나 공허한 공포. |

```
[Instrumental]
[Genre: dark magical girl OST, corrupted lullaby, cold electronic orchestral]
[Mood: hollow beauty, emotionless dread, uncanny valley, cold perfection]
[Instruments: distorted music box (main motif — corrupted lullaby), cold synth pads, dissonant strings (col legno), icy celesta, industrial noise pulses, distant wordless soprano (empty, flat affect), glass harmonica]
[Tempo: 126 BPM, 4/4 with irregular phrase lengths]
[Key: F minor (modal, ambiguous)]

Opens with a music box playing what sounds like a gentle magical girl theme — but slowed, pitched down, and slightly wrong, like a lullaby heard through broken glass. Cold synth pads replace warmth with void. Dissonant col legno strings create a sense of wrongness — something that looks human but isn't. The wordless soprano sings identically every repeat, with no dynamic variation, no feeling — representing empty eyes that reflect light but contain nothing. Black star fragment attacks are represented by sudden bursts of industrial noise and glass-shattering sounds. The piece evokes the horror of meeting someone who looks exactly like someone you love but contains no soul. Inspired by Nier Automata's 2B themes meets Madoka's Walpurgisnacht.
```

---

### BGM-18_보스 전투_기억 도적왕_천 개의 얼굴.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 1 보스 — 기억 도적왕) |
| **반복** | 루프 |
| **길이** | 3분+ |
| **분위기** | 도시의 모든 잃어버린 기억이 하나로 뭉쳐 왕좌에 앉음. 끊임없이 변하는 얼굴. 수천 개의 목소리. |

```
[Instrumental]
[Genre: psychological horror OST, fragmented orchestral, chorus of memories]
[Mood: chaotic layering, identity dissolution, collective dread, haunting familiarity]
[Instruments: layered vocal fragments (wordless, many voices overlapping), shifting string textures (constantly changing articulation), piano (fragments of different melodies interrupting each other), bass drum, vibraphone, cluster chords in brass, distorted choir]
[Tempo: 118 BPM, shifting between 4/4 and 3/4 irregularly]
[Key: C minor with constant modal shifts]

The piece is built on constant interruption and layering — no single melody survives more than 8 bars before another emerges over it, representing the thousands of absorbed memories all speaking at once. Voices overlap in wordless fragments, each trying to be heard. Piano phrases start as recognizable emotional patterns (joy, sorrow, childhood) before being cut off and absorbed into the mass. The crown of orbiting memory crystals is represented by vibraphone and celesta figures that appear and disappear. Phase 2 erupts in a terrifying full-choir swell where all memories scream simultaneously. The piece should feel like trying to remember something important while thousands of other people's memories flood your mind. Inspired by Taro Yoko's psychological boss themes.
```

---

### BGM-19_보스 전투_공포의 여왕_리라의 결정.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 2 보스 — 공포의 여왕 리라 아세나) |
| **반복** | 루프 |
| **길이** | 3분+ |
| **분위기** | 공포로 수정화된 마법소녀. 심장은 아직 뛴다. 아름다운 자수정 결정체 속에 갇힌 존재. 공포 자체가 무기이자 감옥. |

```
[Instrumental]
[Genre: dark magical girl OST, crystalline horror, tragic beautiful]
[Mood: fearful beauty, crystalline fragility, desperate power, trapped anguish]
[Instruments: glass harmonica (main motif — crystalline, eerie), trembling solo violin (represents her beating heart), harp (shattered, irregular arpeggios), high strings (sustained, tense), cold electronic pulses representing fear, explosive brass hits (overwhelming fear attacks), resonating crystal bowl sounds]
[Tempo: 108 BPM, 3/4 waltz feel (beautiful yet unstable)]
[Key: Eb minor]

Opens with glass harmonica playing a delicate, eerily beautiful theme — the crystalline prison that is simultaneously her armor and her cage. A trembling solo violin enters beneath, representing her still-beating heart and lingering humanity. The 3/4 waltz rhythm creates beauty that feels wrong — like dancing in fear. The contrast between crystalline high tones and deep bass horror pulses represents the duality of fear as weapon and imprisonment. Brass attacks hit like sudden overwhelming waves of terror. Phase 2 shatters the glass harmonica motif with explosive dissonance before fragments reassemble into something darker. Her one exposed arm and face — still human — are represented by brief moments of unadorned solo violin before the crystal sound swallows them again.
```

---

### BGM-20_보스 전투_그림자 타이탄_공포의 결정체.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 2 보스 — 그림자 타이탄) |
| **반복** | 루프 |
| **길이** | 3분+ |
| **분위기** | 인류 수백 년의 공포가 5미터 흑수정 거인으로 응결. 얼어붙는 기운. 압도적 질량. 무지성의 공포. |

```
[Instrumental]
[Genre: dark industrial boss OST, massive orchestral, oppressive doom metal]
[Mood: overwhelming mass, primal terror, cold crushing weight, inhuman scale]
[Instruments: 8 string bass guitar (ultra-low), massive taiko drums (8+ layers), distorted cello section, industrial metal percussion, sub-bass synth (felt more than heard), freezing synth drones (high frequency contrasting), low brass cluster chords, no melody — rhythmic and textural]
[Tempo: 96 BPM, 4/4 with crushing downbeats]
[Key: E minor (mostly drone-based)]

Unlike other boss themes, this piece deliberately eschews melody — there is no humanity left here. The texture is entirely rhythmic and tectonic: massive layered taiko drums create seismic impact. Ultra-low bass guitar and sub-bass synth generate physical pressure. Freezing high-frequency drones contrast with the crushing low end to represent the entity's aura — the cold radiating from black crystal. Brief fragments of human voices (screaming, murmuring) appear and disappear inside the mix, like faces pressing against the crystal surface — the absorbed fears still trapped within. Ground-cracking crystalline fracture sounds punctuate heavy beats. Phase 2 doubles all rhythmic elements and adds a massive choir of undifferentiated human screaming. There is no hope in this music — only mass and inevitability.
```

---

### BGM-21_보스 전투_탑의 주인_암브로시우스의 묘비.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 2 보스 — 탑의 주인 마기스터 암브로시우스) |
| **반복** | 루프 |
| **길이** | 3분+ |
| **분위기** | 500년 전 탑을 세운 전설의 마법사. 연구 중 고대인에게 잠식. 탑 자체가 그의 마법 회로. 학자의 비극적 최후. |

```
[Instrumental]
[Genre: dark academic boss OST, baroque-to-cosmic horror, corrupted wizard theme]
[Mood: ancient wisdom corrupted, scholarly tragedy, cosmic horror dawning, forbidden knowledge]
[Instruments: harpsichord (opening — baroque, dignified, then increasingly distorted), church organ (dominating, escalating), strings (baroque phrasing that deteriorates into dissonance), bass clarinet, deep bells, choral voices (Latin scholarly chant), synth representing the tower's ancient magical circuits, timpani]
[Tempo: 120 BPM, 4/4, with baroque-style ornamentation in opening]
[Key: B minor (opening) shifting to atonal (phase 2)]

Opens with a dignified harpsichord playing a baroque-influenced theme — the ghost of a legendary wizard who spent 500 years in pursuit of knowledge. The music is initially structured and intelligent, befitting a master of ancient arts. But as it progresses, wrong notes appear, the tower's ancient stone magic interferes, and the harpsichord becomes increasingly corrupted. Church organ swells represent the moment 500 years ago when he touched the Ancient One's will and was consumed. Latin choral phrases suggest ancient academic texts being recited endlessly. Phase 2 sees the baroque structure completely collapse into cosmic dissonance — his body fused with the tower walls, his mind gone, only the magical circuits of a 500-year-old obsession remaining. Inspired by Castlevania's scholarly boss themes meets Bloodborne's cosmic horror OST.
```

---

### BGM-22_보스 전투_고대인_만물귀원.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 3 보스 — 고대인) |
| **반복** | 루프 |
| **길이** | 3분+ |
| **분위기** | 악이 아닌 우주의 법칙 그 자체. "모든 것은 시작으로 돌아간다." 그 주변의 물리법칙이 뒤틀림. 압도적 무관심. |

```
[Instrumental]
[Genre: cosmic horror OST, primordial ambient boss, alien orchestral]
[Mood: incomprehensible vastness, indifferent cosmos, primordial law, awe without malice]
[Instruments: sine wave drones (layered, pure tones — representing universal constants), massive choir (wordless, inhuman vowels), reversed orchestral samples, crystalline synth (high frequency), deep space rumble (sub-bass), occasional full orchestra hit (like a universe being reset), no traditional melody or rhythm — pulsing and expansive]
[Tempo: no fixed tempo — pulsing at cosmic scale]
[Key: not applicable — pure harmonic series and overtones]

This piece has no traditional structure because the Ancient One transcends human musical concepts. It is built on sine wave drones corresponding to the harmonic series — mathematically pure, utterly alien. The choir does not sing words or even emotional vowels — it produces sound as a physical phenomenon. Reversed orchestral samples suggest time running backwards. Massive sub-bass rumbles represent the weight of a consciousness that has existed since creation. Periodic full-orchestra hits are like moments of universal reset — brief, cataclysmic, then silence. The player should feel not that they are fighting a villain, but that they have accidentally collided with a fundamental law of existence. Inspired by Interstellar OST meets Evangelion's final battle themes.
```

---

### BGM-23_보스 전투_시간의 군주_크로노스의 영역.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 3 보스 — 시간의 군주 크로노스 벡터) |
| **반복** | 루프 |
| **길이** | 3분+ |
| **분위기** | 시공간 법칙의 화신. 과거·현재·미래가 동시에 존재. 피격 후 0.2초 뒤 사라졌다 나타남. 논리적이고 냉혹한 운명. |

```
[Instrumental]
[Genre: time-distortion boss OST, mechanical precision meets cosmic, rhythmically complex]
[Mood: inevitable fate, temporal logic, cold omniscience, structured but shifting]
[Instruments: mechanical clock percussion (multiple overlapping time signatures), prepared piano (hitting strings directly for metallic clock sounds), strings (same phrase played at 3 different speeds simultaneously), brass (rational, march-like), synth representing time axis distortion, vibraphone (precise, mathematical), electronic stutter/glitch effects]
[Tempo: 152 BPM main pulse, but with 3:4:5 polyrhythm layers]
[Key: D major (orderly, logical) with sudden atonal interruptions]

The defining feature is polyrhythm — three rhythmic layers running simultaneously at different speeds, representing past, present, and future existing concurrently. The mechanical clock percussion is precise and unforgiving. A prepared piano creates metallic, clock-like tones. The strings play the same musical phrase at three different tempos layered atop each other — the same moment seen from different temporal positions. Brass marches with rational authority. The 0.2-second disappearance between hits is represented by sudden rhythmic gaps, brief silence, then reappearance. Phase 2 introduces electronic time-distortion effects: glitches, stutters, brief moments where the music plays backward before snapping forward. The hourglass energy is embodied by music that accelerates and then suddenly resets. Cold, precise, inevitable — not cruel, just beyond human time.
```

---

### BGM-24_보스 전투_별의 심장 수호자_최초의 계약.mp3

| 항목 | 내용 |
|---|---|
| **사용 씬** | BattleScene (Act 3 보스 — 별의 심장 수호자) |
| **반복** | 루프 |
| **길이** | 3분+ |
| **분위기** | 태고부터 이어진 계약의 첫 번째 마법소녀. 모든 기억을 잃고 의무만 남음. 봉인이 풀릴 때 별빛 눈물을 흘림. 가장 오래되고 가장 슬픈 존재. |

```
[Instrumental]
[Genre: ancient tragic magical girl OST, primordial lullaby, sorrowful climax]
[Mood: ancient sorrow, duty without self, tearful resolution, sacred tragedy, final contract]
[Instruments: solo piano (simple, child-like melody — but ancient, the first magical girl's lullaby), distant wordless soprano (representing memory that no longer exists), harp (slow, tear-drop arpeggios), solo cello (deep, aching), full orchestra (builds from silence to overwhelming), choir (ancient prayer, non-Latin — invented sacred language), crystalline bell tree (sealing glyphs releasing)]
[Tempo: 84 BPM, 3/4, free in emotional passages]
[Key: C major (pure, ancient — the "first" key, the beginning of all music)]

Opens with solo piano playing the simplest possible melody — a child's lullaby that has existed since the beginning of the world. This is the song sung at the very first magical girl contract, now played by memory-depleted hands that no longer know why they remember it. A distant soprano hums wordlessly — not a character's voice, but the echo of a person who no longer exists. Harp tear-drops fall at irregular intervals like starlight tears from eyes that cannot cry with meaning. As sealing glyphs release one by one, bell tree crystalline tones mark each broken seal, and the orchestra builds. Phase 2 erupts as all seals break simultaneously — an overwhelmingly massive full-orchestra explosion carrying the weight of ages, the duty of an entire civilization, the sacrifice of a child who became ancient. The choir sings in an invented ancient language — the language of the original contract, lost to time, known only by muscle memory. The piece should destroy the player emotionally — not because of a villain, but because of a name that was never known. The most tragic theme in the game.
```

---

## 3. 구현 우선순위

### SFX 구현 우선순위

| 우선순위 | SFX | 이유 |
|---|---|---|
| ⭐⭐⭐ 긴급 | `sfx_btn_click`, `sfx_turn_end` | 모든 씬에서 사용 빈도 최고 |
| ⭐⭐⭐ 긴급 | `sfx_block_gain` | 방어도 부여가 핵심 게임플레이 피드백 |
| ⭐⭐ 높음 | `sfx_relic_acquire`, `sfx_gold_gain` | 보상 쾌감과 직결 |
| ⭐⭐ 높음 | `sfx_hit_heavy`, `sfx_player_death` | VFX 시스템과 쌍으로 효과 극대화 |
| ⭐⭐ 높음 | `sfx_star_aura`, `sfx_constellation` | 게임 고유 상태이상 피드백 |
| ⭐ 보통 | `sfx_dialogue_blip`, `sfx_card_discard` | 폴리시 레이어 |
| ⭐ 낮음 | `sfx_boss_roar`, `sfx_game_over` | 드물게 발생 |

### BGM 구현 우선순위

| 우선순위 | BGM | 이유 |
|---|---|---|
| ⭐⭐⭐ 긴급 | BGM-04 일반 전투 | 전투가 게임 핵심, 재생 빈도 최고 |
| ⭐⭐⭐ 긴급 | BGM-01 타이틀 | 첫인상 결정 |
| ⭐⭐ 높음 | BGM-06 보스 전투 | 클라이맥스 경험 직결 |
| ⭐⭐ 높음 | BGM-07 승리 팡파르 | 플레이 루프 보상 피드백 |
| ⭐⭐ 높음 | BGM-03 맵 탐험 | 맵이 게임 흐름의 허브 |
| ⭐ 보통 | BGM-02 허브, BGM-09 상점, BGM-10 휴식 | 분위기 완성 |
| ⭐ 보통 | BGM-05 엘리트 전투 | 04와 구분되는 레이어 |
| ⭐ 낮음 | BGM-11~15 | 스토리·씬별 심화 연출 |
| ⭐ 낮음 | BGM-16~24 보스 개별 테마 | 각 보스전 몰입감 극대화 (BGM-06 범용 보스 브금 이후 교체) |

---

## 4. SUNO AI 사용 가이드

1. **[suno.com](https://suno.com)** 에서 Create → Custom 모드 선택
2. **Style of Music** 란에 `[Genre]`, `[Mood]`, `[Instruments]` 태그 내용 입력
3. **Lyrics** 란에 `[Instrumental]` 입력 (보컬 없음)
4. **프롬프트 본문** 내용을 Description에 붙여넣기
5. 생성 후 길이가 짧으면 **Extend** 기능으로 루프 구간 연장
6. 루프 포인트 맞추기: 시작과 끝 4마디의 화음이 일치하는 버전 선택

> **팁**: SUNO는 같은 프롬프트로도 결과가 달라지므로 3~5회 생성 후 가장 잘 맞는 버전 선택 권장.  
> `[Tempo]`, `[Key]`는 정확히 따르지 않을 수 있으나 분위기 가이드로 유효함.
