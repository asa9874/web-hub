# 대화 · 골판지 무대 연출 인수인계

## 직접 확인

`테스트` → `테스트 위치`에서:

- 위 `NPC와 대화` 선택기를 고른 뒤 `선택 NPC 연출 리허설`: 두 인형 확대 → 꽃 두드리기 → 대화 복귀 → NPC 도망 추적 → 복귀. 같은 대본을 플로라/루미/세린/노엘/미라/이리스/포피에게 적용할 수 있다. 예제 대사와 상황은 임시 리허설이다.
- `말풍선 · 미라 · 접근` / `이리스 · 접근`: 근처에 가면 월드 종이 말풍선. `루미 · E`: E로 말을 건다. 걷기/점프/마법을 계속 사용할 수 있다.
- `골판지 동작`: 주인공 포함 8명 × 인사/가리키기/달리기/놀람 4자세를 직접 확인. 6초 뒤 자동 복귀하거나 `무대로 돌아가기` / Enter로 종료한다.
- 일반 NPC 대화는 초상화 UI로 고정한다. 보기 전환 버튼은 제거했고 인물은 좌우 바깥쪽/조금 아래에 배치해 대화창 뒤로 겹친다. 카메라 확대는 배경 인형 무대에 계속 적용한다. Esc/상단 버튼으로 대화와 연출 모두 정지/재개한다. 출력 중 다음 문장 입력은 계속 무시한다.

## 대사와 무언 연출을 섞는 방법

`dialogue.json`의 first/repeat/lit 배열과 `npc-dialogue.json`의 NPC 배열은 대사와 `{cue: ...}`를 섞을 수 있다. `stage-dialogue.json`은 선택 NPC를 `speaker: "npc"`로 치환하는 공통 리허설이다.

대사에 `direction`을 붙이면 타이핑과 동시에 카메라/포즈를 연출한다. 생략하면 화자/감정에 맞춰 두 인형 1.35배 또는 분노 화자 1.55배, 말하기/놀람/가리키기 포즈를 자동 지정한다.

```json
{
  "speaker": "witch",
  "emotion": "neutral",
  "segments": [{"text": "내가 한번 두드려 볼게."}],
  "direction": {
    "id": "look-at-flower",
    "seconds": 0.8,
    "camera": {"target": "pair", "zoom": 1.4},
    "actors": [{"who": "player", "pose": "point"}]
  }
}
```

텍스트 없는 동작은 별도 cue 항목으로 넣는다. 대화 컴포넌트를 제거하지 않고 투명/비활성화하여 인덱스/표정/출력 속도를 보존한다. cue 완료 콜백만 다음 항목을 자동 시작한다. 이 구간에서 Enter/Space를 눌러도 문장을 예약하거나 연출을 건너뛰지 않는다.

```json
{
  "cue": {
    "id": "run-away",
    "seconds": 2.8,
    "hideDialogue": true,
    "camera": {"target": "npc", "zoom": 1.4, "seconds": 0.6, "follow": true},
    "actors": [{"who": "npc", "pose": "run", "dx": 460, "seconds": 2.3, "facing": 1}],
    "effects": [{"at": 0.1, "target": "npc", "kind": "surprise"}]
  }
}
```

| 필드 | 의미 |
| --- | --- |
| seconds | cue 전체 시간(초). 배우/소품의 at + seconds보다 충분히 길게 지정 |
| camera.target | player / npc / pair / flower / bridge. 실제 인형/시계꽃/다리 위치를 사용 |
| camera.zoom / seconds | 1–2.2배 범위 / 카메라 이동 시간 |
| camera.follow | true: 이동 중인 배우를 계속 추적. 기본은 시작 시 구도를 고정 |
| actors.who | player는 주인공, npc는 현재 선택한 주 대화 NPC |
| actors.pose | talk / point / run / recoil / idle / strike. strike는 주인공의 기존 마법 동작, NPC는 손 내밀기 |
| actors.dx / dy | cue 시작 위치 기준 수평 이동 / 포물선 모양의 수직 동작 |
| actors.at / seconds / facing | 시작 지연 / 이동 시간 / 1 오른쪽, -1 왼쪽 |
| effects | at 시각에 tap / surprise / magic. 실제 종이 파티클과 효과음 연결 |
| prop | flower/bridge에 at 시각부터 dy/angle로 흔들기; seconds 후 원상 복귀 |

연출 중 주인공 물리/전투/퍼즐은 멈추고 인형의 표시 위치를 별도로 움직인다. 동작은 실제 Phaser 오브젝트/카메라를 변경한다. 탐험 충돌 지형을 임의 변경하거나 NPC를 영구 이동시키는 API는 아니다. 끝나면 기존 배우 위치로 돌아가고 카메라는 0.65초 동안 원래 구도로 복귀한다. 빠르게 다시 대화해도 최초 탐험 카메라 기준을 보존한다. 종료/취소/재시작에는 콜백 토큰과 소품 변형을 정리한다.

## 지나가며 읽는 NPC

`ambientDialogueData.ts`: id, npc, x/y, trigger(near/interact), radius, cooldown, seconds, lines. 기존 castData의 음색/인형을 재사용한다. 한 NPC당 한 말풍선, 문장은 순환한다. 접근형은 진입할 때 한 번 말하고 계속 서 있다고 반복하지 않는다. E형은 cooldown 후 다시 상호작용 가능하다. 멀어지거나 표시 시간이 지나면 사라진다. 모달/정지/커튼 중 시간은 멈춘다. 주 대화 연출에서는 주변 보조 인형/말풍선을 가려 구도를 확보한다. 힌트와 기존 체크포인트/플로라 상호작용 영역은 분리한다.

## 에셋과 교체

`public/witch-theater/acting/{witch,flora,lumi,serin,noel,mira,iris,poppy}-poses.png`: 실제 built-in imagegen으로 만든 8개 RGBA 시트, 각 시트의 왼쪽 위 talk / 오른쪽 위 point / 왼쪽 아래 run / 오른쪽 아래 recoil.

기존 각 캐릭터 인형을 참조했다. 정확한 지시는 `acting-image-prompts.json`. PNG 원본은 보존하며 GPU에는 최대896px 시트를 올린다. `prepareActingFrames`는 각 사분면의 알파 경계를 메모리에서 계산해 Phaser 프레임으로 등록하고, 실제 발 밑/지지대/좌우 반전을 연결한다. 시트 교체 시 2×2 순서와 캐릭터 정체성을 유지한다. 설정집에서도 4개 자세를 개별 Canvas 프레임으로 볼 수 있다. 이미지 파일을 수동으로 32개 복제해 관리하지 않는다.

| 파일 | 책임 |
| --- | --- |
| directionModel.ts / StageDirector.ts | 타입/보간/대상 구도 / 실제 카메라·인형·소품·완료/정리 |
| Dialogue.tsx / dialogueModel.ts | 대사와 cue 진행, 출력/감정/음색/정지/초상화 선택 |
| actingData.ts / ActingFrame.tsx | 32자세 등록/적용 / 설정집의 시트 프레임 보기 |
| AmbientSpeech.ts / ambientDialogueData.ts | 독립 보조 NPC/월드 종이 말풍선/트리거/시간 |
| TheaterScene.ts / ForgottenWitch.tsx | 기존 무대·React 생명주기·상태별 입력 연결 |

검증: `npm run test:witch-direction` (기본 preview4174, WITCH_TEST_URL 변경 가능). 순수 이동/구도 계약과 실제 접근/E/고유 음색/자유 조작, 확대/대화창 숨김/꽃 변형/정지/추적/복귀/32포즈/초상화/언마운트를 검사한다. 기존 witch, expansion, living, quality, defense, movement, motion, opening 회귀도 유지한다. 결과와 현재 커밋은 WORKLOG 및 git log에서 확인한다.
