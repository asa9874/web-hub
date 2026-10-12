import $ from 'jquery';
import './styles/captcha.css';
import { betteryyes } from './bettery';


const elements = ['human1', 'human2', 'human3', 'human4', 'human5', 'robot1', 'robot2', 'robot3', 'robot4'];
const $advertise = $('.advertise')
const $popup = $('.popup')
let correct = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let shuffledElements = shuffleArray(elements);

$('.captchaimg').css('background-image', "url('./captcha.png')")
//$('.btn').hide()
$('.captcha').hide()
$('.warningtext').hide()
$('.captchacontainer').hide()
$('.captchawrongtext').hide()
$('.captchacontainer2').hide()
$('.catimg').css('background-image', "url('https://media.tenor.com/uXvLSFKpbyIAAAAi/glorp-cat.gif')")

//$('.popup').hide()

$advertise.on('click', function () {
    window.open(`https://www.youtube.com/watch?v=1AHzBNLA6mY`);
})

setTimeout(function () {
    $('.popupbox').addClass('show');
}, 0);

$('.nobtn').on('click', function () {
    $('.yesbtn').hide()
    $('.nobtn').hide()
    $('.captcha').show()
})

$(".nobtn").on("mouseenter", function () {
    // 마우스가 요소 위에 있을 때
    $(this).text("네");
});

$(".nobtn").on("mouseleave", function () {
    // 마우스가 요소를 벗어났을 때
    $(this).text("아니요");
});

$(".yesbtn").on("mouseenter", function () {
    // 마우스가 요소 위에 있을 때
    $(this).text("아니요");
});

$(".yesbtn").on("mouseleave", function () {
    // 마우스가 요소를 벗어났을 때
    $(this).text("네");
});

$(".form-check-input").on("change", function () {
    if ($(this).is(":checked")) {
        resetCaptcha()
        $(this).prop("disabled", true);
        $('.captchacontainer').show()
        $('.captchabox').removeClass('hide').addClass('show');
        $('.warningtext').hide()
        setTimeout(() => {
            $('.captchabox').removeClass('show').addClass('hide');
            $(this).prop("checked", false); // 10초 후 체크 해제
            $(this).prop("disabled", false);
            $('.warningtext').show()
            $('.captchacontainer').hide()
            $('.captchacontainer2').hide()
        }, 70000); //
    }
})

function resetCaptcha() {
    correct = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    shuffledElements = shuffleArray(elements);
    $('.select').removeClass('darkened');

    //캡챠 이미지 설정
    for (var i = 0; i < 9; i++) {
        $(`.select${i + 1}`).css('background-image', `url('./captcha/${shuffledElements[i]}.png')`);
        if (shuffledElements[i][0] == 'r') { correct[i] = 1; }
    }
    $('.captchawrongtext').hide()
    $('.captcha2').hide()
    $('.captchabutton').show()
    $(".form-check-input2").prop("disabled", false);
    $(".form-check-input2").prop("checked", false);
    $('.form-check-input3').val('');
}


//캡챠 셔플
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // 0에서 i 사이의 무작위 인덱스
        [array[i], array[j]] = [array[j], array[i]];  // 요소 교환
    }
    return array;
}


//캡챠 선택지 고르는거
$('.select').on("click", function () {
    $(this).toggleClass('darkened');
    // 현재 클릭한 요소
    var currentElement = $(this);

    // 요소의 클래스 리스트를 가져와서 배열로 변환
    var classList = currentElement.attr('class').split(/\s+/);

    // 두 번째 클래스 이름을 가져오기
    var secondClass = classList[1]; // 두 번째 클래스는 인덱스 1

    var now = secondClass.slice(6) - 1;
    if (clicked[now] === 0) {
        clicked[now] = 1
    }
    else {
        clicked[now] = 0
    }

    console.log(correct);
    console.log(clicked);
})

$('.captchabutton').on("click", function () {
    if (arraysEqual(correct, clicked)) {
        $('.captchawrongtext').hide()
        $('.captchabutton').hide()
        $('.captcha2').show()
    } else {
        $('.captchawrongtext').show()
    }
})

//리스트비교함수
function arraysEqual(arr1, arr2) {
    // 배열의 길이가 다르면 같은 배열이 아닙니다
    if (arr1.length !== arr2.length) return false;

    // 각 요소를 비교합니다
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}


$(".form-check-input2").on("change", function () {
    if ($(this).is(":checked")) {
        $(this).prop("disabled", true);
        $('.captchacontainer2').show()
    }
})


$('.captcha2img').css('background-image', "url('./Imrobot.png')")

$('#submitBtn').on('click', function () {
    // 입력된 텍스트 값을 가져옴
    var inputValue = $('.form-check-input3').val();
    if (inputValue === "나는robot이다") {
        $('.popup').hide()
        $('.captchacontainer').hide()
        $('.captchacontainer2').hide()
        betteryyes()
    }
});