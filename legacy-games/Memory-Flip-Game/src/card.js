import { ReFlipCard } from "./animation";
import $ from 'jquery'


//카드 섞기
export function generateRandomList() {
    const numbers = [];
    for (let i = 1; i <= 15; i++) {
        numbers.push(i, i); 
        
    }
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

//뒤집어진 카드 돌리기
export function ReFlipAll(CardList){
    CardList.forEach((value, index) => {
        if (value === 1) {
            ReFlipCard(index);
            CardList[index]=0;
        }
    });
}

//카드 활성화
export function ButtonAble(){
    setTimeout(function() {
    $('.card').each(function(){
        $(this).css('pointer-events', 'auto');
    })
    }, 800);
}

//카드 비활성화
export function ButtonDisable(){
    $('.card').each(function(){
        $(this).css('pointer-events', 'none');
    })
}


