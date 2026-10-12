import './reset.css'
import './style.css'
import './animation.css'
import $ from 'jquery'
import { ANIMATIONS } from './animation'
import './devtoolblock'
const $box1 = $('.box1');
const $box2 = $('.box2');

const $year1 =$('.year1');
const $year2 =$('.year2');
const $lifezone=$('.lifezone');
const $titletext=$('.titletext');
const $score=$('.score');
const $introduce=$('.introduce');
let year1Date=new Date($year1.text()).getTime()
let year2Date=new Date($year2.text()).getTime()

let tempyear1,tempyear2
$('.backgroundimg').css('background-image', 'url("./sakura.png")');
const $LifeCount = $('.LifeCount')

$box1.hide();
$box2.hide();
$lifezone.hide();
$titletext.hide();
$score.hide();



//랜덤 애니 선택함수
function randomAnime(){
    $('.box').each(function() {
        const index = Math.floor(Math.random() * ANIMATIONS.length);
        $(this).find('.anime-img').attr('src', ANIMATIONS[index].AnimationImg);
        $(this).find('.anime-year').text(ANIMATIONS[index]['AnimationYear'])
        $(this).find('.anime-name').text(ANIMATIONS[index]['AnimationName'])
    });

    year1Date=new Date($year1.text()).getTime()
    year2Date=new Date($year2.text()).getTime()

    //F12방지용
    tempyear1=$year1.text()
    tempyear2=$year2.text()
    $year1.text("안녕? 안보이지요~")
    $year2.text("안녕? 안보이지요~")
}   


//애니 나온 년도 보이게하는 함수
function AnimeYearVisible(){
    //F12방지용
    $year1.text(tempyear1)
    $year2.text(tempyear2)

    
    $year1.toggleClass('visible');
    $year2.toggleClass('visible');
    setTimeout(function() {
        $year2.toggleClass('visible'); 
        $year1.toggleClass('visible');
        randomAnime();
        
    }, 3500);
}

//버튼 비활성화만들기
function Clickable(){
    $('.box1, .box2').css('pointer-events', 'none');
    setTimeout(function() {
        $('.box1, .box2').css('pointer-events', 'auto');
    }, 5000);
}



//애니메이션 지우는 작업
function RemoveAnimation(){
    setTimeout(function() {
        $box1.removeClass('animatemove1');
        $box1.removeClass('animatehidden');
        $box2.removeClass('animatemove2');
        $box2.removeClass('animatehidden');
        
        void $box1[0].offsetWidth; 
        void $box2[0].offsetWidth; 
    }, 5000);
    
}


//상자움직이기
function MoveBox(){
    if(year1Date<=year2Date){
        $box1.addClass('animatemove1');
        $box2.addClass('animatehidden');
    }
    else{
        $box2.addClass('animatemove2');
        $box1.addClass('animatehidden');
    }
}


//정답확인
function CheckCorrect(box){
    const $box = $(box);
    const lifeCountValue =parseInt($LifeCount.text(), 10)
    const scoreValue =parseInt($score.text(), 10)

    if($box.is($box1) && year1Date>year2Date){
        $LifeCount.text(lifeCountValue-1);
    }
    else if($box.is($box2) && year2Date>year1Date){
        $LifeCount.text(lifeCountValue-1);
    }
    else{
        $score.text(scoreValue+1)
    }

    //패배조건
    if (parseInt($LifeCount.text(), 10) === 0) {
        GameOver()
    }
}


//생명 업데이트
function updateLifeImages() {
    const lifeCountValue = parseInt($LifeCount.text(), 10)
    $lifezone.empty(); // 기존 이미지 제거

    for (let i = 0; i < lifeCountValue; i++) {
        $lifezone.append('<img class="life" src="https://media.tenor.com/_-ql-hIEuY4AAAAi/zero-two.gif">');
    }
    $('.life').addClass('animatebounce');
}


//게임오버
function GameOver(){
    $box1.hide();
    $box2.hide();
    $lifezone.hide();
    $titletext.hide();
    $score.hide();

    $introduce.show();
    $('.introducetitle').text("게임 오바.")
    $('.introducecontent').text("너의 점수는 "+parseInt($score.text(), 10)+'점이다.')
    $('.startbutton').text("다시시작")
    $('.introduceimage').attr('src', 'https://media1.tenor.com/m/ITuWS_FU7cQAAAAC/anime.gif');

    $introduce.addClass('animaterecomeintroducebox')
    setTimeout(function() {
        $introduce.removeClass('animaterecomeintroducebox');
        void $introduce[0].offsetWidth; 
    }, 1000);
}






//버튼 누를때1
$('.box1').on('click', function() {
    Clickable();
    RemoveAnimation()
    AnimeYearVisible()
    MoveBox()
    CheckCorrect(this)
    updateLifeImages();
})

//버튼 누를때2
$('.box2').on('click', function() {
    Clickable();
    RemoveAnimation()
    AnimeYearVisible()
    MoveBox()   
    CheckCorrect(this)
    updateLifeImages();
})




//시작버튼
$('.startbutton').on('click', function() {
    
    
    //초기설정
    $score.text(0);
    $LifeCount.text(5);

    //보이게
    updateLifeImages()
    $introduce.addClass('animateremoveintroducebox')
    setTimeout(function() {
        $introduce.hide();
        $box1.show();
        $box2.show();
        $lifezone.show();
        $score.show();
        $titletext.show();
        randomAnime()

        

        //애니메이션작동
        $lifezone.addClass('animatestartgametitle')
        $titletext.addClass('animatestartgametitle')
        $box1.addClass('animatestartgamebox');
        $box2.addClass('animatestartgamebox');
        $('.backgroundimg').css('opacity', 0.6);

        //애니제거
        setTimeout(function() {
            $box1.removeClass('animatestartgamebox');
            $box2.removeClass('animatestartgamebox');
            $introduce.removeClass('animateremoveintroducebox');
            void $introduce[0].offsetWidth; 
            void $box1[0].offsetWidth; 
            void $box2[0].offsetWidth; 
        }, 2000);
    }, 1000);

    
});
