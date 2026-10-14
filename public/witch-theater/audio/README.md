# 게임 효과음 출처 / 사용 조건

Kenney의 공식 무료 배포에서 선택한 원본 OGG 파일이다. 세 팩 모두 Creative Commons Zero(CC0)로 개인/상업 프로젝트 사용과 재배포를 허용한다. 각 팩의 원본 License.txt를 함께 포함한다. 파일 내용은 변형하지 않고 게임 역할에 맞게 이름만 바꿨다. 런타임에 낮은 음량으로 재생한다.

| 파일 | 원본 / 공식 페이지 |
|---|---|
| paper.ogg | RPG Audio / bookFlip2.ogg |
| footstep.ogg | RPG Audio / footstep03.ogg |
| curtain.ogg | RPG Audio / cloth3.ogg |
| cast.ogg | Interface Sounds / pluck_001.ogg |
| solve.ogg | Interface Sounds / confirmation_002.ogg |
| ui.ogg | Interface Sounds / click_002.ogg |
| gameover.ogg | Interface Sounds / error_003.ogg |
| hit.ogg | Impact Sounds / impactSoft_medium_000.ogg |
| hurt.ogg | Impact Sounds / impactWood_light_000.ogg |

출처: https://kenney.nl/assets/rpg-audio / https://kenney.nl/assets/interface-sounds / https://kenney.nl/assets/impact-sounds

음량 꺼짐 및 오디오 인스턴스 정리를 따른다. 파일 로딩 실패 시 기존 짧은 합성 효과음을 fallback으로 사용하고, 읽기 전용 audio 상태에 실패를 기록한다. 캐릭터의 감정별 말소리와 먼 박수는 기존 로컬 합성음을 유지한다.
