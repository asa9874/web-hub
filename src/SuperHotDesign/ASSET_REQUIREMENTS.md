# MGA 포털 이미지 자산 요구사항

현재 구현은 `public/VisualNovel`의 기존 자산으로 동작하도록 연결되어 있습니다.
아래 항목은 페이지 완성도를 더 높이기 위해 개발자가 추후 직접 추가하면 좋은 권장 이미지 목록입니다.

## 1) 필수 우선순위 (P0)

| 이미지 키 | 권장 파일명 | 권장 해상도 | 형식 | 사용 위치 |
|---|---|---:|---|---|
| mga_hero_command_city | `mga_hero_command_city.webp` | 2560x1440 | WebP | 메인 히어로 배경 |
| mga_alert_wall | `mga_alert_wall.webp` | 1920x1080 | WebP | 경보센터 상단 배너 |
| mga_shelter_interior | `mga_shelter_interior.webp` | 1920x1080 | WebP | 시민 대피 가이드 카드 |
| mga_chronicle_shift | `mga_chronicle_shift.webp` | 1920x1080 | WebP | 연대기 첫 섹션 패럴랙스 배경 |

## 2) 굿즈 쇼케이스 전용 (P1)

| 이미지 키 | 권장 파일명 | 권장 해상도 | 형식 | 대응 상품 |
|---|---|---:|---|---|
| mga_goods_aurora_drink | `mga_goods_aurora_drink.webp` | 1200x1200 | WebP/PNG | 오로라 스파클링 드링크 |
| mga_goods_pulse_lightstick | `mga_goods_pulse_lightstick.webp` | 1200x1200 | WebP/PNG | 네온 펄스 응원봉 |
| mga_goods_snow_blanket | `mga_goods_snow_blanket.webp` | 1200x1200 | WebP/PNG | 스노우 벨 안심 담요 |
| mga_goods_seraph_badge | `mga_goods_seraph_badge.webp` | 1200x1200 | WebP/PNG | 코드 세라프 보안 뱃지 |
| mga_goods_ember_capsule | `mga_goods_ember_capsule.webp` | 1200x1200 | WebP/PNG | 엠버 로즈 캡슐 캔디 |
| mga_goods_mist_pass | `mga_goods_mist_pass.webp` | 1200x1200 | WebP/PNG | 미스트 라크 우선 입장 패스 |

## 3) 마법소녀 프로필 확장 (P2)

| 이미지 키 | 권장 파일명 패턴 | 권장 해상도 | 형식 | 설명 |
|---|---|---:|---|---|
| mga_profile_public_* | `mga_profile_public_[code].webp` | 1080x1350 | WebP | 변신 후 공식 프로필용 |
| mga_profile_private_* | `mga_profile_private_[code].webp` | 1080x1350 | WebP | 비공개 일상 프로필용 |

## 4) 배치 위치 제안

- 경로: `public/MGA/`
- 하위 폴더:
  - `public/MGA/Background/`
  - `public/MGA/Goods/`
  - `public/MGA/Profile/Public/`
  - `public/MGA/Profile/Private/`

## 5) 품질 가이드

- 색감: 핑크/로즈 계열 하이라이트 + 저채도 블랙 배경
- 조명: 네온 림라이트, 하이라이트 번짐 최소 2px
- 압축: WebP 품질 75~82 권장
- 텍스트 포함 이미지 금지 (다국어 대응을 위해 UI에서 텍스트 렌더링)
