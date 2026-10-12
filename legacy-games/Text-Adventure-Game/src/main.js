import '../reset.css'
import '../style.css'
import '../animation.css'
import $ from 'jquery'
import { SCRIPT } from './Script'
import { PlayBgm,PlayVoice,playEffectSound } from './playsound'
import { ChangeCharactor } from './charactor'
import { Animation, UpdatingNumber } from './animation'
import { goEvent, SuccessChoice, health, ChoiceEffect, money, eventlist } from './event'
import { ChoiceList } from './ChoiceScript'

const $test=$('.test')
const $GameStartBox=$('.GameStartBox');
const $OpeningSkipBox=$('.OpeningSkipBox')
const $gamebox=$('.gamebox')
const $gamebackgroundimg=$('.gamebackgroundimg')
const $backgroundimg=$('.backgroundimg')
const $conversation=$('.conversation')
const $character=$('.character')
const $object=$('.object')
const $character1=$('.character1')
const $character2=$('.character2')
const $character3=$('.character3')
const $namebox=$('.namebox')
const $choicebox=$('.choicebox')
const $choice=$('.choice')
const $choice1=$('.choice1')
const $choice2=$('.choice2')
const $choice3=$('.choice3')
const $choiceimg=$('.choiceimg')
const $choiceimg1=$('.choiceimg1')
const $choiceimg2=$('.choiceimg2')
const $choiceimg3=$('.choiceimg3')
const $health=$('.health')
const $money=$('.money')
const $skipbox=$('.skipbox')
const $healtheffect=$('.healtheffect')
const $startbox=$('.startbox')
const $textbox=$('.textbox')

//현재 대화순서
let NowConversation=-1;
let nowScript;

//선택지
let choicecheck;      //선택지 골랐는지 확인
let choiceevent;      //어떤 선택지사항인지
let choicenow=0;      //어떤 선택지고름?
let choicesuccess           //선택지 성공여부


let currentBgm;       //현재 Bgm 넣는 변수
let currentVoice;     //현재 목소리 넣는 변수

//타이핑관련
let Conversationtext  // 현재 나온 타이핑
let currentCharIndex  // 현재 타이핑 위치
let typingSpeed = 60; // 타이핑 속도 (밀리초)
let skiptext=false

//초기세팅
$backgroundimg.css('background-image', 'url("./backgroundimg/back.png")');
$textbox.css('background-image','linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),url("./elements/4.png")')
$choice.css('background-image','linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),url("./elements/choice.png")')

$gamebox.hide()
$character.hide();
$choicebox.hide();
$healtheffect.hide();
$choiceimg.hide()



//타이핑효과
function typeCharacter() {
  if (currentCharIndex < Conversationtext.length && !skiptext) {
    //목소리 없으면 타이핑소리로 대체
    if(!nowScript.voice){
      playEffectSound('type',0.3)
    }
    $conversation.text($conversation.text() + Conversationtext.charAt(currentCharIndex));
    currentCharIndex++;
    setTimeout(typeCharacter, typingSpeed);
  } 
  else {
    $skipbox.hide();
    $conversation.text(Conversationtext); // 타이핑이 끝나면 전체 텍스트 표시
    $('.textbox').css('pointer-events', 'auto');
    if((nowScript.choice)){
      ShowChoicebox(nowScript.choice)
    }
  }
}

//텍스트 출력 초기화시키는곳
function PrintText(name,text){
  $conversation.text('');
  currentCharIndex=0;
  $namebox.text(name)
  Conversationtext=text
  $('.textbox').css('pointer-events', 'none');
  $skipbox.show();
  skiptext=false
  typeCharacter();
}


//선택지 열기
function ShowChoicebox(choicenumber){
    $choicebox.show();
    choiceevent=ChoiceList[choicenumber]
    $choice1.text(choiceevent[1]["text"])
    $choice2.text(choiceevent[2]["text"])
    $choice3.text(choiceevent[3]["text"])


    if(choiceevent[1]['shop']){
      $choiceimg1.text(SCRIPT[NowConversation+1][1]["success"]["effect"]["money"])
      $choiceimg1.show()
    }else{$choiceimg1.hide()}
    if(choiceevent[2]['shop']){
      $choiceimg2.text(SCRIPT[NowConversation+1][2]["success"]["effect"]["money"])
      $choiceimg2.show()
    }else{$choiceimg2.hide()}
    if(choiceevent[3]['shop']){
      $choiceimg3.text(SCRIPT[NowConversation+1][3]["success"]["effect"]["money"])
      $choiceimg3.show()
    }else{$choiceimg3.hide()}
}


//스킵기능
$skipbox.on('click', function() {
  skiptext=true
})

//선택지 고름
$('.choice').on('click', function() {
  playEffectSound('button',0.4)
  nowScript.voice=null
  $choicebox.hide();

  if ($(this).is($choice1)) {choicenow = 1;} 
  else if ($(this).is($choice2)) {choicenow = 2;} 
  else if ($(this).is($choice3)) {choicenow = 3;} 
  
  choicesuccess=SuccessChoice(SCRIPT[NowConversation+1][choicenow],choiceevent[choicenow])
  NextConversation()
  
});





//바꾸기,체크 함수
function ChangeElements(){
  //소리바꾸기
  currentVoice=PlayVoice(currentVoice,nowScript.voice,1)
  currentBgm=PlayBgm(currentBgm,nowScript.bgm)
  playEffectSound(nowScript.soundeffect,0.3)
  
  //오브젝트,캐릭터
  ChangeCharactor($character1,nowScript.character1)
  ChangeCharactor($character2,nowScript.character2)
  ChangeCharactor($character3,nowScript.character3)
  ChangeCharactor($object,nowScript.object)

  
  if(nowScript.background) {
    $gamebackgroundimg.css('background-image',"url('./backgroundimg/"+nowScript.background+".png')")
  }
  if(nowScript.name){
    $namebox.text(nowScript.name)
    $namebox.show()
  }
  else{
    $namebox.hide()
  }

  if(nowScript.animation){
    Animation(nowScript.animation)
  }
  if(nowScript.goscript){
    NowConversation=goEvent(nowScript.goscript)
  }

  if(nowScript.typingSpeed){
    typingSpeed=nowScript.typingSpeed
  }
  else{
    typingSpeed=60
  }
  if(nowScript.effect){
    ChoiceEffect(nowScript.effect)
    
  }

  UpdatingNumber($health,health,250)
  UpdatingNumber($money,money,250)
  
}


//다음대화로 이동하기
function NextConversation(){
  NowConversation+=1;
  
  if(SCRIPT[NowConversation].Scripttext){
    nowScript=SCRIPT[NowConversation]
  }
  else{
    nowScript=SCRIPT[NowConversation][choicenow][choicesuccess]
  }


  PrintText(nowScript.name,nowScript.Scripttext)
  //바꾸기
  ChangeElements()
}



//텍스트 란 클릭
$('.textbox').on('click', function() {
  NextConversation()
});



//게임시작
$GameStartBox.on('click', function() {
  NextConversation();
  $startbox.hide()
  $gamebox.show()
  
});

//오프닝스킵
$OpeningSkipBox.on('click', function() {
  NowConversation=5
  NextConversation();
  $startbox.hide()
  $gamebox.show()
  $test.text(eventlist)
});
