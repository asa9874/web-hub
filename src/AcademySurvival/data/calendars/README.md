# 시간·달력 v1 — 공식 세계관 설정

제국력과 심연력의 연호·기원·구조·연도 차이·심연력 월 이름 및 월별 학사 기본 일정은 **정식 설정**이다. 임시 표시용 예시가 아니다. 개별 시험일·입학식 날짜와 진급 판정은 아직 확정하지 않았다.

## 구조

| 위치 | 역할 |
| --- | --- |
| `types/calendar.ts` | 날짜·달력·변경 알림·저장·예약 일정 타입 |
| `data/calendars/index.ts` | 두 공식 달력, 심연력10개월, 시작 시나리오, 요일 기준, 시간대·계절·학사 일정 |
| `systems/calendar.ts` | 순수 날짜 검증·절대 분 변환·양방향 환산·요일/계절/시간대/학사 판정 |
| `systems/gameTime.ts` | 명시적으로 소유하는 시계, 변경 알림, 버전 저장/복원 |
| `systems/timeScheduler.ts` | 구간별 경계 수·경계 순회·반복 예약 시점 조회 |
| `components/GameTimeContext.tsx` | 게임 세션의 단일 시계와 React 구독 |
| `components/GameTimeBar.tsx` | 게임 상단 날짜·상세 팝업·공통 시간 정보 |
| `components/CalendarCatalog.tsx` | 공식 설정집, 양방향 환산기, 월 달력, 학사 일정 |
| `components/TimeTester.tsx` | 게임 시계와 분리된 개발자 테스트·JSON 가져오기/내보내기 |

외부 라이브러리, JavaScript `Date`, 실제 시스템 시각, 타임존, 서머타임에 의존하지 않는다. 자동 타이머나 백엔드는 없다.

## 공식 기준과 지원 범위

- 제국력: 제국 건국 기원, 12개월×30일=360일, 24시간×60분. 윤년 없음.
- 심연력: 초대 마왕 즉위 기원, 10개월×36일=360일. 연도는 제국력+2700, 연초는 동일하다. 시간이 다르게 흐르는 설정이 아니다.
- 흑월·혈월·회월·명월·독월·마월·적월·환월·심월·종월은 표시 명칭이다. 저장할 때는 월 번호를 사용한다.
- 기본 시작: 제국력427년3월1일08:00, 절대 분 **220925280**. 기존 아카데미에 확정된 시작 날짜나 시간 엔진은 없었으며 `SCENARIO_TIME`으로 분리했다.
- 제국력427년3월1일은 월요일이다. 요일은 절대 일수로 계산한다. 360일 뒤 같은 월일은 목요일이다.
- 지원: 제국력1~999999년, 심연력2701~1002699년. 절대 분0~518399481599. 기원 전/음수 시간은 v1 지원 범위 밖이다. 심연력의 기원 자체를 바꾸는 것이 아니라 엔진의 지원 범위를 제한한 것이다.
- 잘못된 날짜·소수·NaN·범위 초과 진행은 오류로 거부한다. 날짜를 자동 이월하거나 포화 보정하지 않는다. 최대 시각에서1분 진행도 실패하며 현재 값은 유지된다.

## 순수 함수

```ts
const minute = toAbsoluteMinute({year: 427, month: 3, day: 1, hour: 8, minute: 0});
toImperialDate(minute);
toAbyssDate(minute);
imperialToAbyss({year: 427, month: 3, day: 12}); // 3127 / 2 / 36 / 00:00
abyssToImperial({year: 3127, month: 2, day: 36});
getWeekday(minute);
getSeason(toImperialDate(minute));
getTimePeriod(toImperialDate(minute));
getAcademicPeriod(toImperialDate(minute));
getElapsedMinutes(start, end); // signed end - start
getDaysUntil(target, from);   // 달력상의 자정 경계 수 차이, 과거는 음수
advanceTime(minute, 1440);    // 순수 계산, 원본 변경 없음
```

날짜만 입력하면 시·분은0이다. 환산 결과는 항상 시·분을 포함하며 입력한 시간도 유지한다. 계절·학사 판정에는 **제국력 날짜**를 전달한다. 심연력 월 이름에 계절을 직접 대응시키지 않는다.

## 단일 시계와 저장

```ts
const clock = createGameClock(); // 기본 시나리오, 또는 고정 절대 분 주입
clock.getGameDateTime();
clock.getGameDateTime('abyss');
const result = clock.advanceTime(60);
if (result.listenerErrors.length) { /* 호출자가 진단·재처리 */ }
clock.setGameDateTime({year: 427, month: 12, day: 30, hour: 23, minute: 59});
const save = clock.save();
// {version: 'academy-time-v1', absoluteMinute: ...}
clock.load(save);
```

시·분·표시 날짜를 중복 저장하지 않는다. 다른 게임 저장 모델에는 이 작은 시간 객체를 하위 필드로 추가하면 된다. 누락된 시간 필드(`undefined`)는 기본 시작 시각으로 읽는다. 손상된 값·미지원 버전은 거부한다. 미래 버전 마이그레이션은 `deserializeGameTime` 앞에 명시적 어댑터를 둔다. 현재 자동 저장이나 기존 NPC/캐릭터 저장 변경은 없다.

React에서는 앱의 `GameTimeProvider` 안에서 `useGameClock()`을 사용한다. 상단 날짜는 같은 시계를 구독한다. 저장에서 복원한 시계를 Provider에 주입할 수도 있다. 시계는 첫 마운트에서 정하며 새 시계로 교체하려면 게임 세션을 다시 마운트한다. 페이지 내 설정집/생성 테스트 이동은 게임 시계를 다시 만들지 않는다. 앱 새로고침 후 자동 복원은 저장 시스템이 아직 없으므로 하지 않는다.

## 중간 일정 누락 방지 인터페이스

```ts
const unsubscribe = clock.subscribeChanges(change => {
  // change: {from, to, elapsedMinutes, reason, direction}
  for (const at of iterateTimeBoundaries(change, 'day')) {
    // 실제 일일 처리기는 이후 연결
  }
  for (const occurrence of scheduledOccurrences(change, [
    {id: 'daily-check', at: firstCheckMinute, everyMinutes: 1440},
    {id: 'one-off', at: examMinute},
  ])) {
    // 실행·완료 기록은 소비자의 책임
  }
});
```

시간 진행 구간은 **(from,to]**다. 시작 시각은 제외하고 도착 시각은 포함하므로 연속 진행에서 중복하지 않는다. 현재 시각에 이미 도달한 작업의 최초 실행은 별도로 초기화해야 한다.

- 큰 진행도 전체 구간을 한 알림으로 전달한다. 7일 진행을 1일의 알림으로 축약하지 않는다.
- `iterateTimeBoundaries`는 시간/일/월/주/연의 모든 중간 경계를 순서대로 지연 생성한다. 월별 경계는 학사 전환에 연결 가능하다.
- `scheduledOccurrences`는 일회성·반복 일정(`until` 포함)을 시각순으로 조회한다. 같은 시각은 ID순이다. ID 중복이나0분 반복은 거부한다. 실제 수업일과 이벤트를 하드코딩하지 않는다.
- 매우 큰 구간에서 예약 발생도 많다면 소비자가 iterator를 나누어 처리하고 체크포인트를 저장해야 한다. 시간 엔진은 임의의20개 등으로 발생을 자르지 않는다. 테스트기 로그만 화면상 최근20건으로 제한한다.
- 직접 설정/불러오기/복원은 `set/load/reset`이다. 기본 일정 조회는 `advance`만 대상으로 한다. 시점 이동까지 재생하려면 `includeSeeks=true`를 명시한다. 뒤로 이동하는 구간은 예약을 재실행하지 않는다.
- 알림 중 같은 시계를 다시 변경하는 재진입은 거부한다. 각 구독자 예외는 다른 알림을 막지 않고 반환값의 `listenerErrors`로 보고한다. 시각은 이미 변경되며 자동 롤백은 없다. 실패한 작업 재처리와 중복 방지는 미래 이벤트 처리기의 책임이다.

현재 NPC 행동·상태 지속 시간 감소·수업·시험·진급을 실행하지 않는다. 준비한 구간/예약 API를 통해 독립적으로 연결한다. 학년은 시간 엔진이 자동 변경하지 않는다.

## 조직·UI 연결

조직 정의의 선택적 `calendarId`는 달력 ID 참조다. 제국=`imperial`, 마계=`abyss`. `organizationCalendarId`는 가까운 상위 조직의 공식 달력을 조회한다. 새 루트나 하위 조직은 별도 달력을 지정하거나 기존 달력을 공유할 수 있다. 존재하지 않는 달력 ID를 참조하면 조직 검증 오류다. 공식 연호 미지정 조직은 임의로 제국력에 귀속시키지 않는다.

- 설정집: `?view=catalog&kind=calendar`
- 개발자 테스트: `?view=time-tester`
- 상단 날짜 클릭: 같은 게임 시각의 제국력/심연력·요일·계절·학사 정보
- 환산기와 테스트기는 게임 시계를 변경하지 않는다. 개발자 테스트기는 별도 시계를 소유하며 페이지를 떠나면 임시 테스트 상태가 해제된다.

## 검증

`test:academy-time`: 공식 예시6건을 고정 기대값으로 검증했다. 제국력1·426·427·428·999999년의 연중360일 전체 양방향 왕복3600건, 절대 분 표본10000건, 시간대/계절/학사 경계, 잘못된 날짜/범위, 월·연말, 10만 년 진행, 구독과 예외, 중간 예약·경계·저장/버전, 조직 달력 참조 검사를 통과했다.

`test:academy-time-browser`: 상단 날짜·상세, 30/36일 월 달력, 양방향 환산과 오류, 7일 알림, 연말·심연력 월말, 10만 년 진행, JSON 복원과 미지원 버전 거부, 게임/테스트 시계 분리, 조직 상세 연결, 390px 화면을 확인했다.

기존 소속·캐릭터·NPC·영향력 관련 단위 검사도 통과했다. 무관한 게임의 전체 브라우저 회귀검사는 실행하지 않는다.

최종 타입 검사와 빌드 통과. 프로젝트38개·OG39페이지·로컬 참조181개 검증을 완료했다. 기존 `.animate-*` CSS 경고와 큰 청크 안내는 남아 있으며 이번 작업과 무관한 전체 게임 회귀검사는 생략했다.
