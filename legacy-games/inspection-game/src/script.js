import $ from 'jquery'
import { playEffectSound } from './playsound'

$('.backgroundimg').css('background-image',"url('./img/wall2.png')")


//
const $conversation=$('.conversation')
const $namebox=$('.namebox')
const $skipbox=$('.skipbox')

//타이핑관련
let Conversationtext  // 현재 나온 타이핑
let currentCharIndex  // 현재 타이핑 위치
let typingSpeed = 60; // 타이핑 속도 (밀리초)
let skiptext=false


//타이핑효과
function typeCharacter() {
if (currentCharIndex < Conversationtext.length && !skiptext) {
    $conversation.text($conversation.text() + Conversationtext.charAt(currentCharIndex));
    playEffectSound('type',0.3)
    currentCharIndex++;
    setTimeout(typeCharacter, typingSpeed);
} 
else {
    $skipbox.hide();
    $conversation.text(Conversationtext); // 타이핑이 끝나면 전체 텍스트 표시
    $('.textbox').css('pointer-events', 'auto');
}
}
  
//텍스트 출력 초기화시키는곳
function PrintText(name,text){
$conversation.text('');
currentCharIndex=0;
$namebox.text(name)
Conversationtext=text
$('.textbox').css('pointer-events', 'none');
skiptext=false
typeCharacter();
}

//PrintText("asd","asdaaasdasdasdsd")

//스킵기능
$skipbox.on('click', function() {
    skiptext=true
    $skipbox.hide();
})

