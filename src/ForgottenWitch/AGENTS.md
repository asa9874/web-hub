# Forgotten Witch 작업 안내

이 디렉터리를 수정하기 전에 `README.md`, `codex/README.md`, `codex/WORKLOG.md`를 읽고 현재 작업 상태를 이어받는다. 에셋을 바꿀 때는 `codex/reference.png`와 `public/witch-theater/ASSETS.md`도 확인한다.

- React + TypeScript + 기존 `phaser3` alias를 유지한다. 다른 허브/레거시 게임의 기능이나 Git 이력을 변경하지 않는다.
- 핵심 표현은 손으로 만든 골판지 인형극이다. 무대 소품은 독립 개체로 배치하고 `StageRig.attach()`로 화면 끝에 연결한다. 고정 길이 캐릭터 막대로 되돌리지 않는다.
- 막대는 소품과 지형 뒤에서 가려져야 한다. 바닥 위에 다시 그리는 지지대 레이어를 추가하지 않는다. 게임 내부 UI는 Phaser와 같은 1280×720 좌표계에서 함께 스케일하며 viewport media query로 별도 재배치하지 않는다.
- 걷기/점프는 `poses.ts`의 실제 이미지와 크기/몸체 연결점을 사용한다. 반전한 연결점, 피벗, 패럴랙스를 함께 처리한다. 막대는 물리 충돌 영역에 포함하지 않는다.
- 새 이미지와 원본 레퍼런스는 저장소에 포함하고 상대 경로로 문서화한다. 특정 PC의 Codex 생성 폴더, API 키 또는 로컬 환경 설정에 의존하지 않는다.
- 인물 일러스트의 그림체는 원래 `witch-portrait.png`가 기준이다. 무릎 위까지 보이는 인물을 대화창 뒤 좌우 독립 레이어로 배치한다. 타이틀 변경은 `codex/UI-REFERENCES.md`의 실제 UI 조사도 참고한다.
- 대화는 출력 완료 후에만 진행한다. 출력 중 즉시 펼치기/입력 큐를 넣지 않는다. 감정은 neutral/joy/worry/angry/flustered로 표정·출력 속도·말소리를 연결한다. 구간별 cps/휴지/색/크기를 JSON 데이터로 유지한다.
- 게임 수정은 `npm run test:witch`로 실제 입력 플레이를 확인한다. 배포 경로/등록/공유 변경은 빌드 및 산출물 검증도 확인한다. 생명주기 변경은 재시작/언마운트/오디오 정리 검증을 유지한다.
- 몬스터/NPC/구르기 확장은 `npm run test:witch-expansion`도 검증한다. 리허설 선택 중에는 `testing` 상태로 물리/전투를 멈춘다. 캐릭터 표정/음색은 화자 ID로 연결하고 새 NPC 대사는 npc-dialogue.json에 둔다.
- 몬스터/보스는 castData.ts의 레지스트리와 공격 준비/실행/회복 상태를 사용한다. BOSSES의 bossPatterns로 공격 순환을 확장할 수 있다. 구르기도 moveActor 충돌을 통과하며 지속 시간 동안 피격을 막는다.
- 사물 목록은 objectData.ts에서 관리한다. 재료가 바뀌면 `npm run witch:export-props`로 실제 코드 기반 이미지를 추출한다. 음악 후보는 음원 미제작/설정 미확정 표기와 Suno 프롬프트를 유지한다.
- 완료 후 실제 변경 및 검증 결과를 `codex/WORKLOG.md`에 갱신하고 현재 구조/진행점이 바뀌면 README도 갱신한다.
- Git 작업은 현재 사용자의 지시 범위를 따른다. 원본 커밋 기록을 재작성하거나 force push하지 않는다. main 반영은 PR merge commit으로 진행한다.

- 생동감 요소/함정 변경은 test:witch-living도 확인한다. MovementEnvironment의 이전 플랫폼 높이·변위와 실제 탑승 충돌, 바람 이동, 닫힌 비밀 통로, 휴식 checkpoint를 유지한다. 단순 성공 UI로 대체하지 않는다. 장치·대기·반응 시간은 모달/커튼 중 정지하고, NPC 반응은 멀어지거나 debug 이동할 때 정리한다. 함정 손상은 damagePlayer의 구르기·무적 판정을 공유한다.
