import './assets/reset.css';
import './assets/style.css';
import './assets/animation.css';
import $ from 'jquery'
import { FlipCard, ReFlipCard, UpdatingNumber } from './animation';
import { FairComputer, SmartComputer, randomComputer } from './computer';
import { ButtonAble, ButtonDisable, ReFlipAll, generateRandomList } from './card';

const $playerscore=$('.playerscore');
const $computerscore=$('.computerscore');
const $GameStartButton=$('.GameStartButton');
const $startbox=$('.startbox')
const $gamebox=$('.gamebox')
const $GameOverBox=$('.GameOverBox')
const $WinLoseText=$('.WinLoseText')
const $playercharacter=$('.playercharacter')
const $computercharacter=$('.computercharacter')
const $startimg=$('.startimg')
//0 안뒤집어짐 ,1뒤집어짐, -1 없어짐
const CardList=[]                           //카드인덱스는 0~29까지임
const CardFairList = generateRandomList()   //짝카드 리스트

$gamebox.hide()
$gamebox.css('background-image', 'url("./img/gamebackground.png');
$GameOverBox.hide()



//점수
let playerscore=0
let computerscore=0
$playerscore.text(playerscore)
$computerscore.text(computerscore)

//선택된 카드 수,객체
let CountSeletedCard=0;
let SeletedCard1;
let SeletedCard2;

//컴퓨터
let PlayerTurn=true;            //플레이어 턴true 컴퓨터턴 false
let ComputerCountBrain={}       //컴퓨터 페어 찾기
let ComputerCardBrain=[]        //카드 알고있는지 0 모름 1 알고있음
let Computerintelligence=1      //컴퓨터 성공확률 1~0 (100%~0%)
for (let i = 1; i <= 15; i++) {ComputerCountBrain[i] = [];  }
for (let i = 0; i <= 30; i++) {ComputerCardBrain.push(0);  }








//점수 업데이트
function UpdateScore(){
    if(PlayerTurn){
        UpdatingNumber($playerscore,playerscore,500)
        playerscore+=2
    }
    else{
        UpdatingNumber($computerscore,computerscore,500)
        computerscore+=2
    }
}


//게임종료
function EndGame(){
    const allCardsChecked = CardList.every(value => value === -1);
    if(allCardsChecked){
        $gamebox.hide()
        $GameOverBox.show()
        if(playerscore>computerscore){
            $WinLoseText.text("너는 이기다!")
        }
        else if(playerscore<computerscore){
            $WinLoseText.text("너는 지다!")
        }
        else{
            $WinLoseText.text("비기다?")
        }

    }
}

//카드 선택하기
function SelectCard(target){
    const cardSideBack = target.find('.card-side-back');
    cardSideBack.text(CardFairList[target.attr('class').match(/\d+/g)]);
    cardSideBack.css('background-image', 'url("./cardimg/card ('+CardFairList[target.attr('class').match(/\d+/g)]+').png")');
    FlipCard(target);
    CardList[target.attr('class').match(/\d+/g)]=1
    CountSeletedCard++;
    if(!SeletedCard1){SeletedCard1=target}
    else{SeletedCard2=target}
    if(CountSeletedCard===2){
        ButtonDisable()
        setTimeout(function() {CheckFairCard()},500)
    }
}


//페어카드 확인
function CheckFairCard(){
    CountSeletedCard=0
    var Card1Number=SeletedCard1.attr('class').match(/\d+/g);   //카드 인덱스번호
    var Card2Number=SeletedCard2.attr('class').match(/\d+/g);   //카드 인덱스번호
    if(CardFairList[Card1Number]===CardFairList[Card2Number]){
        SeletedCard1.css('visibility','hidden')
        SeletedCard2.css('visibility','hidden')
        CardList[Card1Number]= -1
        CardList[Card2Number]= -1
        ComputerCountBrain[CardFairList[Card1Number]]=[]
        UpdateScore()
    }
    else{
        
        PlayerTurn= !PlayerTurn
        if(ComputerCardBrain[Card1Number]!=1){
            ComputerCountBrain[CardFairList[Card1Number]].push(Card1Number)
            ComputerCardBrain[Card1Number]=1
        }
        if(ComputerCardBrain[Card2Number]!=1){
            ComputerCountBrain[CardFairList[Card2Number]].push(Card2Number)
            ComputerCardBrain[Card2Number]=1
        }
        
    }
    setTimeout(function() {
        SeletedCard1.find('.card-side-back').text("");
        SeletedCard2.find('.card-side-back').text("");
        SeletedCard1.find('.card-side-back').css('background-image','')
        SeletedCard2.find('.card-side-back').css('background-image','')
        SeletedCard1=""
        SeletedCard2=""
        
    }, 800);
    ReFlipAll(CardList)
    EndGame()
    PlayerChange()
}

//턴바꾸기
function PlayerChange(){
    if(PlayerTurn){
        console.log("<플레이어 턴>")
        $playercharacter.css('background-color','red');
        $computercharacter.css('background-color','black');
        ButtonAble()
    }
    else{
        console.log("<컴퓨터 턴>")
        $computercharacter.css('background-color','red');
        $playercharacter.css('background-color','black');
        setTimeout(function() {
            ButtonDisable()
            ComputerPlay()
        }, 2000);
    }
    
}


//컴퓨터 플레이
function ComputerPlay(){
    var twocards;
    twocards=FairComputer(ComputerCountBrain)
    if(!twocards || !SmartComputer(Computerintelligence)){twocards=randomComputer(CardList)}
    console.log("뽑을카드:"+twocards)
    SelectCard($(`.card${twocards[0]}`))
    setTimeout(function() {
        SelectCard($(`.card${twocards[1]}`))
    }, 800);
    
}



//카드 클릭
$('.cardbox').on('click', '.card', function() {
    SelectCard($(this))
    $(this).css('pointer-events', 'none');
});

//게임시작버튼
$GameStartButton.on('click',function(){
    $gamebox.show()
    $startbox.hide()
    $startimg.hide()
    var cardnumber=0
    for (var row=1;row<=5;row++){
        $('.cardbox').append(`<div class="cardrow cardrow${row}"></div>`)
        for (var col=1;col<=6;col++){
            CardList[cardnumber]=0
            $(`.cardrow${row}`).append(`<div class="card card${cardnumber}">
            <div class="card-side card-side-front"></div>
            <div class="card-side card-side-back"></div>
            </div>`);
            cardnumber++;
        }
    }
    $('.card-side-front').css('background-image', 'url("./cardimg/cardback.png');
    if($(this).is($('.EasyStart'))){
        Computerintelligence=0.2
        $computercharacter.attr('src', './char/easy.png');
    }
    if($(this).is($('.NORMALStart'))){
        Computerintelligence=0.4
        $computercharacter.attr('src', './char/normal.png');
    }
    if($(this).is($('.HARDStart'))){
        Computerintelligence=0.7
        $computercharacter.attr('src', './char/hard.png');
    }
    if($(this).is($('.LUNATICStart'))){
        Computerintelligence=1
        $computercharacter.attr('src', './char/lunatic.png');
    }
    console.log("컴퓨터의 지능:"+Computerintelligence)
});

