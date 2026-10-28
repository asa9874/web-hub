# 공통 대화 계약 v1

의도/표현/규칙은 `index.ts`, DTO는 `types/conversation.ts`, 실행은 `systems/conversations.ts`다. 별도 NPC 시계·위치·관계 DB를 만들지 않는다. `InteractionEngine`의 실제 예약·동의·활동·효과 위에서 NPC/플레이어를 함께 실행한다.

28개 의도·10개 주제·6개 약속 유형. 기억/학사/정보 참조는 실제 근거가 있어야 한다. 일반 인사는 영구 기억을 생성하지 않는다. 표현은 순수 함수이며 정보 공개와 효과 멱등성을 보존한다. 기록은 당사자 투영과 명시적 개발 관찰을 구분한다. 약속은 공통 임시 일정·실제 이동·공동 활동으로 완료한다.

저장: `interaction-v1.conversations`의 선택적 `conversation-v1`. 구형 저장은 이전 모드를 유지한다. 상세600·집계90일·약속100, 활성 약속의 원인 대화 보호. 긴 대사를 영구 복제하지 않는다.

변경 시 `test:academy-conversations`, UI는 `test:academy-conversations-browser`(계약 검사의 실제 저장 fixture 사용). 상호작용/기억/플레이어/공통 저장과 시간 경계를 바꾸면 해당 단기 계약을 추가한다. 장기 스트레스는 별도 목적을 명시한다.

API·실제 검증·제한: [CONVERSATIONS_V1](../../../../docs/academy/CONVERSATIONS_V1.md).

문화·생활 v1: 선택적 `kind:culture` 제안과 공통 활동 override(정원/제작/기록/놀이/기존 식사·학습·훈련)를 지원한다. 실제 장소·동의·양쪽 하루 대기·완료 후 기억/친숙도/선호만 갱신하며 관련 계약은 `../culture/README.md`를 따른다.

고정 NPC 대화·리액션 v1: `data/dialogue/`, `systems/dialogueDirector.ts`.15프로필/390고유 문장/12실제 장면, 선택된 표현·최근 이력은 선택적 `dialogue-v1`에 저장. 원래 동의/효과/기억 정책을 유지한다. 전용 `test:academy-dialogue`, 범위/제한은 [NPC_DIALOGUE_V1](../../../../docs/academy/NPC_DIALOGUE_V1.md).
