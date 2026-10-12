import './assets/reset.css'
import './assets/style.css'
import $ from 'jquery'
import { LoadElements, playSound } from './playsound'
import { SCRIPT } from './Script'
import { SCRIPTHARD } from './ScriptHard'
import { endboxAnimation, loadingAnimation } from './animation'

const $maingamebox=$('.maingamebox')
const $startbox=$('.startbox')
const $endbox=$('.endbox')

const $GameImgBox=$('.GameImgBox')
const $AnswerBox=$('.AnswerBox')
const $InnerAnswerBox=$('.InnerAnswerBox')
const $character=$('.character')
const $Answer=$('.Answer')
const $heart=$('.heart')
const $OXEffect=$('.OXEffect')
const $QuestionText=$('.QuestionText')
const $startbutton=$('.startbutton')
const $Answer1=$('.Answer1')
const $Answer2=$('.Answer2')
const $Answer3=$('.Answer3')
const $heartbox=$('.heartbox')
const $Point=$('.Point')
const $MyPoint=$('.MyPoint')
const $loading=$('.loading')
const $loadingimg=$('.loadingimg')
const $EndPointBox=$('.EndPointBox')
$GameImgBox.css('background-image', 'url("./img/bar.png")');
$('.startimgbox').css('background-image', 'url("./img/startback.png")');
$AnswerBox.css('background-image','linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),url("./img/wood2.png")');
$character.attr('src',"./img/character3.png")
$Answer.css('background-image','linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),url("./img/button.png")');
$heart.attr('src',"./img/heart.png")
$loadingimg.attr('src',"./img/loading.png")
$('.Decorateimg').attr('src',"./img/Decorateimg1.png")
$('.endbox').css('background-image','linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url("./img/endback.png")');

$OXEffect.hide()

$maingamebox.hide()
$endbox.hide()
$loading.hide()
let Life=5
let point=0

let SelectedScript
let NowScript
let Correct
let CorrectReal

let nowmusic

//타이핑관련
let Conversationtext  // 현재 나온 타이핑
let currentCharIndex  // 현재 타이핑 위치
let typingSpeed = 45; // 타이핑 속도 (밀리초)
let skiptext=false
let WrongCheck=false
//타이핑효과
function typeCharacter() {
    if (currentCharIndex < Conversationtext.length && !skiptext) {
      $QuestionText.text($QuestionText.text() + Conversationtext.charAt(currentCharIndex));
      currentCharIndex++;
      setTimeout(typeCharacter, typingSpeed);
      playSound('typing',0.1)
    } 
    else {
      $QuestionText.text(Conversationtext); // 타이핑이 끝나면 전체 텍스트 표시
      $character.attr('src',"./img/character3.png")
      
      if(WrongCheck){
        WrongCheck=false
        setTimeout(function() {
          ChangeQuestion();
        }, 1000);
      }
      else{
        ShowAnswer()
        $Answer.css("pointer-events", "auto");
      }
      
    }
}
//텍스트 출력 초기화시키는곳
function PrintText(text){
    updateLifeImages()
    $QuestionText.text('');
    currentCharIndex=0;
    Conversationtext=text
    $character.attr('src',"./img/character2.png")
    typeCharacter();
}

//시작버튼
$startbutton.on('click', function() {
  playSound('start',0.4)
  $loading.show()
  $startbutton.css("pointer-events", "none");
  if($(this).is($('.easy'))){
    SelectedScript=SCRIPT
    $('.Difficulty').text("쉬움 난이도")
  }
  if($(this).is($('.hard'))){
    SelectedScript=SCRIPTHARD
    $('.Difficulty').text("어려움 난이도")
  }
  loadingAnimation($loading)
  setTimeout(function() {
    $startbox.hide()
    $maingamebox.show()
    setTimeout(function() {
      $loading.hide()
      ChangeQuestion()
      nowmusic=playSound('music',0.08,true)},1000)
  }, 2500);
  
  
})

//질문 바꾸기
function ChangeQuestion(){
  $Point.text(point+"점")
  $OXEffect.hide()
  $Answer.css("pointer-events", "none");
  let randomIndex = Math.floor(Math.random() * SelectedScript.length);
  NowScript=SelectedScript[randomIndex]
  Correct=NowScript["correct"]
  PrintText(NowScript["text"])
  $Answer.text("")
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//정답보이게
function ShowAnswer(){
  const answers = [NowScript[1], NowScript[2], NowScript[3]];
  shuffleArray(answers);
  
  $Answer1.text(answers[0]);
  $Answer2.text(answers[1]);
  $Answer3.text(answers[2]);
  CorrectReal=answers.indexOf(NowScript[Correct])+1;
}


//정답 클릭
$Answer.on('click', function() {
  if(($(this).is($Answer1) && CorrectReal===1) || ($(this).is($Answer2) && CorrectReal===2) || ($(this).is($Answer3) && CorrectReal===3)){
    $OXEffect.attr('src',"./img/O.png")
    playSound('Correct',0.5)
    point++
  }
  else{
    $OXEffect.attr('src',"./img/X.png")
    playSound('Wrong',0.4)
    WrongCheck=true
    Life--
  }
  $OXEffect.show()
  if(!EndCheck()){
    $Answer.css("pointer-events", "none");

    setTimeout(function() {
      if(WrongCheck){PrintText(NowScript["WrongText"]);}
      else{ChangeQuestion()}
      $OXEffect.hide();
    }, 1000);
  }
})



//생명 업데이트
function updateLifeImages() {
  $heartbox.empty()
  for (let i = 0; i < Life; i++) {
      $heartbox.append('<img class="heart" src="./img/heart.png">');
      console.log(1)
  }
}

//게임종료
function EndCheck(){
  if(Life===0){
    nowmusic.pause()
    $endbox.show()
    $maingamebox.hide()
    $MyPoint.text(point+"점")
    endboxAnimation($EndPointBox)
    return true
  }
  else{return false} 
}
LoadElements()
$Answer.css("pointer-events", "none");