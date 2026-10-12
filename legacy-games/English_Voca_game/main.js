import {Voca} from "./english.js"
import { addFruit,playSound } from "./coin.js";

const valuesList = Object.keys(Voca);
const buttons = document.querySelectorAll('#btn1, #btn2, #btn3, #btn4');
const englishVocaElement = document.getElementById('english-voca'); // id가 english-voca인 요소 선택

let corret="";
function englishinit(){
    buttons.forEach(button => {
        // VOCA 리스트에서 무작위로 요소 선택
        const randomIndex = Math.floor(Math.random() * valuesList.length);
        const randomWord = valuesList[randomIndex];
        
        // 버튼의 텍스트 설정
        button.innerText = randomWord;
        
    });
}

function koreaninit(){
    // 무작위로 하나의 버튼 선택
    const randomIndex = Math.floor(Math.random() * buttons.length);
    const randomButton = buttons[randomIndex];

    // 선택된 버튼의 텍스트(단어) 가져오기
    const randomWord = randomButton.innerText;

    // 선택된 단어의 (값) 가져오기
    const englishDefinition = Voca[randomWord];

    // english-voca 요소에 설정
    englishVocaElement.innerText = englishDefinition;
    corret=englishDefinition;
}

//로드
document.addEventListener('DOMContentLoaded', englishinit());
document.addEventListener('DOMContentLoaded', koreaninit());


//버튼 클릭함수 주입
buttons.forEach(button => {
    button.addEventListener('click', function() {
        checkCorrect(button);
    });
});

//정답확인
function checkCorrect(button) {
    var balltype=0;

    //버튼 비활성화
    buttons.forEach(button => {button.disabled = true;});

    //정답아닐때 빨간색
    if(Voca[button.innerText]!=corret){
        balltype=1;
        button.style.backgroundColor="#fc5757"
        playSound("bad",0.5)
    }
    //정답
    else{playSound("good",0.3)}

    //정답 답안에 초록색(항상실행)
    buttons.forEach(button => {
        if(Voca[button.innerText]===corret){button.style.backgroundColor="#00ff51"}
    });

    //시간지난후 버튼활성화, 색초기화
    setTimeout(()=>{
        addFruit(balltype);
        buttons.forEach(button => { button.style.backgroundColor="#fbeee0"});
        englishinit();
        koreaninit();
        buttons.forEach(button => {button.disabled = false;});
    },1000);
}

