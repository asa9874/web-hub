import $ from 'jquery'
import { ShowSwitchScreen } from './switchscreen';
import { playEffectSound } from './playsound';
import { ShowResult } from './result';




//로딩
let loadingWidth = 100;
const decreaseRate = 100; 
const decreaseStep = 0.10;   //기본0.2
let loadingInterval
function decreaseLoadingBar() {
  if (loadingWidth > 0) {
      loadingWidth -= decreaseStep;
      const red = Math.min(255, 255 - Math.floor(255 * (loadingWidth / 100)));
      const green = Math.min(255, Math.floor(255 * (loadingWidth / 100)));
      const color = `rgb(${red}, ${green}, 0)`;

      $('.timebar').css({
          'width': loadingWidth + '%',
          'background-color': color
      });
    
  } else {
    
    clearInterval(loadingInterval); // 로딩바가 0이 되면 타이머를 멈춥니다.
    ShowResult()
    setTimeout(function() {
      $('.maingamebox').hide()
    }, 1000);
  }
}

//로딩 시작
export function StartLoading(){
  loadingWidth = 100;
  loadingInterval=setInterval(decreaseLoadingBar, decreaseRate);
}


let goal=20
let nowpoint=0



//사람 데이터 관련변수
let randomDepartment  
let randomName  
let randomGrade 
let randomAcademy 
let randomClub  
let randomLocation

//다음사람
export function NextPerson(){
    //문서 등장 애니메이션
    $('.studentcard').removeClass('hide').addClass('show');
    $('.character').hide()
    $('.character').removeClass('come').addClass('unpass');
    $('.stamp').hide()
    
    //캐릭터 등장 애니메이션
    setTimeout(function() {
      $('.character').show()
      $('.character').removeClass('unpass').removeClass('pass').addClass('come');
      $('.studentcard').removeClass('hide').addClass('show');
    }, 100);

    //버튼on
    setTimeout(function() {
      $('.choosebutton').css("pointer-events", "auto");
    }, 800);
    
    ChangePerson()
}

export function CheckCorrect(){
  if(DAY1["grade"][randomGrade]){
    $('.angryNotification').removeClass('hide').addClass('show');
    setTimeout(function() {
      $('.angryNotification').removeClass('show').addClass('hide');
    },2000);
    nowpoint-=2
  }
  nowpoint++
  
  $('.goal').text(`${nowpoint}/${goal}`)
  const red = Math.min(255, 255 - Math.floor(255 * (nowpoint / goal)));
  const green = Math.min(255, Math.floor(255 * (nowpoint / goal)));
  const color = `rgb(${red}, ${green}, 0)`;
  
  $('.status').css("background-color", color)
}

//조건
//true 무조건 거부
const DAY1={"grade":{"대학원생":true}}






//사람바꾸기
function ChangePerson(){
  randomDepartment  = DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)];
  randomName  = NAMES[Math.floor(Math.random() * NAMES.length)];
  randomGrade  = GRADES[Math.floor(Math.random() * GRADES.length)];
  randomAcademy  = ACADEMY_NAMES[Math.floor(Math.random() * ACADEMY_NAMES.length)];
  randomClub  = CLUB_NAMES[Math.floor(Math.random() * CLUB_NAMES.length)];
  randomLocation  = FANTASY_LOCATIONS[Math.floor(Math.random() * FANTASY_LOCATIONS.length)];

  const randomNumber = Math.floor(Math.random() * 20) + 1;
  var studentimg=`./img/character/${randomDepartment}/${randomDepartment} (${randomNumber}).png`

  //캐릭터 이미지,배경
  $('.studentcardimg').css('background-image',`url('${studentimg}')`)
  $('.studentcardimg').css('background-color',`${BACKCOLORS[randomDepartment]}`)
  $('.characterimg').attr('src',studentimg)

  //캐릭터 정보
  $('.studentname').text(randomName)
  $('.studentgrade').text(randomGrade)
  $('.studentacademy').text(randomAcademy)
  $('.studentname').text(randomName)
  $('.studentclub').text(randomClub)
  $('.studentlocation').text(randomLocation)
  $('.studentdepartment').text(DEPARTMENTSNAME[randomDepartment])
}




//데이터들
const DEPARTMENTS = ["maid", "soilder", "witch"];
const BACKCOLORS={"maid":"rgb(209, 208, 208)", "soilder":"rgb(110, 219, 125)", "witch":"rgb(238, 149, 238)"}
const DEPARTMENTSNAME={"maid":"메이드 학과", "soilder":"군인학과", "witch":"마녀학과"}


const NAMES = [
  "엘리아나 드 라크루아",
  "마르셀라 드 몬테로",
  "세레나 폰 레겐스",
  "벨리나 데 아바",
  "로사린 판 드레이크",
  "에리카 드 발렌타",
  "카린느 폰 그라시아",
  "리아나 드 세비야",
  "알렉산드라 판 스타인",
  "아델린 드 레오니스",
  "엘리사 폰 블랑크",
  "소피아 데 라이트",
  "미라벨 판 로더",
  "클로에 드 드루아",
  "자일라 폰 에버스",
  "마리안 드 세라핀",
  "줄리아 드 몬드",
  "가브리엘라 폰 드레이크",
  "로렌느 드 크로이",
  "아리아 드 발렌타인",
  "다프네 폰 아스트리드",
  "이사벨 드 플로레",
  "안드레아나 판 루체",
  "클레오 드 엘리오스",
  "세리나 폰 발렌타",
  "루시아 드 록슬리",
  "리디아 드 벨로스",
  "엘로이즈 폰 비엘",
  "마르가리타 드 벨몬트",
  "리아나 데 알바",
  "아멜리아 판 스트로하임",
  "로레나 드 드루아",
  "테레사 폰 그레이스",
  "사브리나 드 로렌",
  "벨레나 판 에스테",
  "미하엘라 드 시에라",
  "알리시아 드 헤이즐",
  "비앙카 폰 엘로스",
  "에바 드 레니아",
  "카롤리나 판 다윈",
  "하이디 드 린",
  "엘로디 드 몽페라",
  "아멜리아 드 드라크",
  "오드리 폰 로젠",
  "카밀라 드 베르사이",
  "마델린 판 포르자",
  "리안 드 플로르",
  "로사 드 그라시아",
  "클로딘 폰 스텔라",
  "엘레나 드 노르드",
  "카미유 드 이시스",
  "조안 드 아르카",
  "아리아나 판 블룸",
  "릴리아 드 카르멘",
  "제니퍼 폰 셀린",
  "로즈마리 드 크레센트",
  "미나 드 페르노",
  "셀레스 폰 오르티스",
  "제라드 드 레브",
  "조셉ine 드 드로",
  "루나 판 아드리안",
  "페이비스 드 헤이즈",
  "비비안 폰 마르세이",
  "클레어 드 아마릴리스",
  "리아 드 브리세",
  "마르타 드 라운",
  "베로니카 폰 실베스터",
  "에블린 드 칼라",
  "라일라 드 브로디",
  "미란다 판 이베라",
  "페르난다 드 그레이스",
  "엘리자 드 리버",
  "루시드 폰 델라",
  "모니카 드 팔라딘",
  "이사벨라 판 노르",
  "리아 드 헬리오스",
  "매리엘 드 마르벨",
  "마르가렛 판 스트로마",
  "알레시아 드 바르텐",
  "클라라 폰 앙드레아",
  "알렉시아 드 스텔라",
  "벨라 드 네비스",
  "로렌 드 블레이크",
  "티아나 판 베르크",
  "리자 드 스미르",
  "카르멘 드 드레이크",
  "베르니스 폰 하르트",
  "마야 드 라크로스",
  "로레나 드 세라핀",
  "엘라 드 헤이즈",
  "미란다 폰 아스트라",
  "아델 드 클레이",
  "페르디아 드 로스",
  "로지 드 플래터",
  "레아나 판 루나",
  "셀리아 드 라이트",
  "하나 드 아벨",
  "이사벨 드 베라",
  "마리벨 폰 엘릭스",
  "페이 드 그레이스",
  "알리나 드 리버",
  "세레나 판 로시",
  "자라 드 마르코",
  "루나 드 메이라",
  "엘렌 드 노스",
  "벨라 드 브란",
  "마리아 폰 라그란",
  "카라 드 하이든",
  "레오나 드 스타인",
  "오르카 드 에벨",
  "로지 드 그라시아",
  "리아나 폰 드루아",
  "다니엘라 드 린드",
  "미라 드 레나",
  "벨라 드 아리아",
  "소피아 드 스트라",
  "엘리나 폰 세라핀",
  "로사 드 안드라",
  "페리드 판 노르",
  "릴리안 드 카스트",
  "마르그리트 드 레인",
  "베로니카 드 스텔라"
];

const GRADES=[
  "1학년",
  "2학년",
  "3학년",
  "4학년",
  "대학원생"
];

const ACADEMY_NAMES = [
  "오로라 마법학교",
  "셀레스티아 아카데미",
  "에버글로우 학원",
  "루미나르 마법학교",
  "셀레스트리움 아카데미",
  "아르카디아 마법학교",
  "노바리온 학원",
  "스텔라시아 아카데미",
  "엠버하트 마법학교",
  "리젠시아 아카데미",
  "그리핀홀 학원",
  "아스펜타 마법학교",
  "벨라스카 아카데미",
  "바이올렛 스펠리움",
  "에테리움 학원",
  "나이트폴 마법학교",
  "에레보스 아카데미",
  "아이라의 마법학교",
  "로렌시아 학원",
  "하이브리드 스쿨",
  "라디안트 아카데미",
  "세레니타 마법학교",
  "엘도라 학원",
  "미스트로 마법학교",
  "벨몬트 아카데미",
  "아이리스 스쿨",
  "오르페우스 학원",
  "알테아 마법학교",
  "테라브라이트 아카데미",
  "시그마르 마법학교",
  "소렌시아 학원",
  "알테리온 아카데미",
  "레아의 마법학교",
  "드래곤리치 아카데미",
  "윈드로즈 학원",
  "에덴스카 마법학교",
  "에일린 아카데미",
  "리브리아 학원",
  "아르코니스 마법학교",
  "세레브리스 아카데미",
  "제나르 학원",
  "루미에르 마법학교",
  "로만티카 아카데미",
  "카일리온 학원",
  "베르시아 마법학교",
  "테르노스 아카데미",
  "세바스티아 학원",
  "펜드래곤 마법학교",
  "이글라스 아카데미",
  "엘리온 학원",
  "하트윈드 마법학교",
  "델라리아 아카데미",
  "미르디안 학원",
  "실베스트라 마법학교",
  "안젤로리아 아카데미"
];

const CLUB_NAMES = [
  "마법의 꽃잎 클럽",
  "작은 마법사들의 모임",
  "별빛 요정들",
  "드래곤 애완 클럽",
  "마법의 혼합실",
  "포춘 리더스",
  "신비의 문 열기",
  "마법의 고양이들",
  "엘프의 숲 탐험대",
  "작은 주문 공작소",
  "루미너스 크리에이터",
  "마법약 수집가들",
  "환상의 동물 친구들",
  "별빛 공예 클럽",
  "미니 마법사 연대기",
  "무지개 주문 만들기",
  "마법의 비밀 일기",
  "요정의 마법 학습회",
  "꿈꾸는 마법사들",
  "빛의 탐험대",
  "호랑이 요정 소사이어티",
  "마법의 조각가들",
  "환상의 친구들",
  "희망의 주술사",
  "비밀의 마법 조합",
  "마법의 바다 탐험대",
  "빛나는 스펠 크루",
  "작은 마법 실험실",
  "무지개 요정 클럽",
  "별의 숲 탐험대",
  "달빛 요정의 집",
  "마법의 정원 가꾸기",
  "환상 동물 공작소",
  "스펠의 비밀 레시피",
  "요정의 파티 플래너",
  "천사의 마법 예술",
  "비밀의 주문 연구회",
  "마법의 향기 연구소",
  "별빛 문학 클럽",
  "소원의 주문 연구소",
  "신비의 장난감 만들기",
  "환상 여행 클럽",
  "마법의 보석 수집가들",
  "무지개 마법 실험실",
  "달빛 악기 연주회",
  "작은 주문 마스터들",
  "마법의 그림 그리기",
  "요정의 장식 공방",
  "별의 조각 연구회",
  "마법의 미스터리 해결단",
  "환상의 뮤지컬 팀",
  "소원의 마법 창작소",
  "별빛 요정의 모험",
  "마법의 장난감 클럽",
  "비밀의 주문 연대기",
  "스펠의 미로 탐험대",
  "요정의 비밀 회의",
  "천사의 마법 패션",
  "마법의 색상 연구소",
  "환상 요정 탐험대",
  "별빛 마법 조합",
  "달의 주문 연구소",
  "신비의 마법 보물",
  "미래의 마법사들",
  "마법의 별빛 장식",
  "작은 요정의 축제",
  "마법의 서사시 팀",
  "별의 마법 연구회",
  "환상의 마법 학교",
  "소원의 마법 장비",
  "빛의 주문 팀",
  "달빛 마법 소풍",
  "작은 마법사들의 비밀",
  "천사의 마법 비밀",
  "별빛 미스터리 해결단",
  "마법의 꿈 연구소",
  "환상의 주문 창작소",
  "빛의 요정 탐험대",
  "마법의 비밀 수집가들",
  "별빛 마법 의상",
  "소원의 요정 모임",
  "달의 마법 아틀리에",
  "작은 주문 연대기",
  "마법의 요정 연구소",
  "빛나는 마법 탐험대",
  "천사의 주문 연구회",
  "환상의 별빛 공방",
  "미래의 마법 탐험대",
  "달빛 요정의 비밀",
  "별의 마법 수집가들",
  "소원의 마법 소풍",
  "마법의 신비로운 탐험",
  "천사의 주문 창작소",
  "빛의 요정 공방",
  "작은 마법의 세계",
  "달빛 마법의 축제",
  "별의 요정 연구회",
  "환상의 마법 축제",
  "빛나는 마법의 일기",
  "천사의 마법 공방",
  "소원의 주문 소풍",
  "별빛 요정의 세계"
];

const FANTASY_LOCATIONS = [
  "세레나타 왕국",
  "벨로리아 수도",
  "아르카디움 도시",
  "엘리시안 왕국",
  "드래곤스카이 왕국",
  "미스티크 수도",
  "루미나리아 도시",
  "카르페디움 왕국",
  "오로라의 성",
  "스톰하운드 수도",
  "네비리아 도시",
  "크레센트 왕국",
  "라디안트 수도",
  "에델로리아 왕국",
  "하이페리온 도시",
  "블루문 수도",
  "로제리아 왕국",
  "테르노스 수도",
  "에리오스 도시",
  "펜드래곤 왕국",
  "마르벨 수도",
  "아르테미스 도시",
  "엘도라 왕국",
  "알레시아 수도",
  "그레이시아 도시",
  "이클립스 왕국",
  "벨몬트 수도",
  "루시안 왕국",
  "다프네의 성",
  "제나르 도시",
  "오벨리아 수도",
  "레오나르 왕국",
  "미라벨 도시",
  "아스트라왕국",
  "윈드로즈 수도",
  "로마르 왕국",
  "세레스 도시",
  "하르모니 왕국",
  "에델마르 수도",
  "루나리아 도시",
  "브랜디스 왕국",
  "리베리아 수도",
  "크리스탈 왕국",
  "솔라리움 도시",
  "스카이로즈 수도",
  "테라스 왕국",
  "엘리시움 도시",
  "네크로폴리스 왕국",
  "시리우스 수도",
  "벨로스 왕국",
  "그리핀 하이즈 도시",
  "아르카리아 수도",
  "루미너스 왕국",
  "레온하르트 도시",
  "제니스 왕국",
  "사이퍼 수도",
  "벨루스 왕국",
  "하이든 도시",
  "아이리스 수도",
  "제노바 왕국",
  "미스트리온 도시",
  "엘스미어 수도",
  "레바스 왕국",
  "루넨시아 도시",
  "시라스 왕국",
  "안젤리카 수도",
  "리베리움 도시",
  "피아르 왕국",
  "아일리아 수도",
  "크레스트 왕국",
  "사르베리움 도시",
  "카르디아 왕국",
  "테르비안 수도"
];










