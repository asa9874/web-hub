# Web Hub 한글 폰트

- Jua (주아체): https://github.com/google/fonts/tree/main/ofl/jua
- Gowun Dodum (고운돋움체): https://github.com/google/fonts/tree/main/ofl/gowundodum

Google Fonts 원본 TTF를 다운로드해 fontTools와 Brotli로 WOFF2 컨테이너에 무손실 압축했다. 글리프를 제거하거나 디자인을 수정하지 않았다. 브라우저에서 외부 CDN 없이 로컬 파일을 사용한다. 주아체는 제목과 메뉴, 고운돋움체는 설명과 검색창에 적용한다. 각 폰트의 SIL Open Font License 1.1 전문을 함께 배포한다.

원본 크기 → WOFF2: Jua 2,119,352 → 369,312 bytes; Gowun Dodum 7,229,088 → 445,888 bytes.

## 거친 파스텔 재질 버전

- Kirang Haerang (기랑해랑): https://github.com/google/fonts/tree/main/ofl/kiranghaerang — 불규칙한 굵은 제목과 메뉴
- Gaegu Bold (개구체 Bold): https://github.com/google/fonts/tree/main/ofl/gaegu — 손글씨 본문, 검색창

SIL OFL 1.1 라이선스 전문을 각 파일과 함께 배포한다. 원본 글리프를 보존한 WOFF2 압축본이다. 이전 버전의 주아체·고운돋움체 파일도 보관한다.

## 잊혀진 마녀의 극장 타이틀

- Gowun Batang (고운바탕): https://github.com/google/fonts/tree/main/ofl/gowunbatang
- 파일: `WitchTitle-GowunBatang.ttf`, `GowunBatang-OFL.txt`.
- Google Fonts CSS의 `text=` 서브셋으로 게임 타이틀/챕터에 쓰는 한글만 다운로드했다. CSS 응답의 실제 포맷이 TrueType이므로 TTF로 보관한다. 게임에서는 외부 폰트 서버 요청 없이 사용한다.
- 포함 문자: `잊혀진마녀의극장첫번째막이오르지않는숲`. 타이틀 문자를 추가할 때 서브셋도 갱신하거나 기존 로컬 고운돋움 폴백을 사용한다.

## 극장 대화 / 읽기 UI

- SUITE Variable: https://sun.fo/suite/ / https://github.com/sun-typeface/SUITE
- `SUITE-Variable.woff2`는 공식 배포 `@2/fonts/variable/woff2/`의 원본이며 `SUITE-OFL.txt`에 SIL OFL 라이선스를 포함한다. 외부 CDN 요청 없이 self-host한다.
- 게임 본문/이름표/메뉴/HUD는 둥근 SUITE, 큰 타이틀은 기존 고운바탕, 종이 장식 제목은 기존 기랑해랑을 사용한다. 대화 본문은 1280×720 기준 25px/1.75 행간, 500 weight이다.
