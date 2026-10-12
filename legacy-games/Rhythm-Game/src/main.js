import './assets/reset.css'
import './assets/style.css'
import './assets/animation.css'
import $ from 'jquery'
import { loadSound, playListSound, playSound } from './playsound'
import { KeyBoxScale, StartAnimation } from './animation'

const $gamebox=$('.gamebox')
const $startbox=$('.startbox')
const $endbox=$('.endbox')

let ArrowList=[]
let NowArrow=0
let KeyAllow=false
$gamebox.hide()
$endbox.hide()
loadSound()
$(document).on('keydown', function(event) {
    if(KeyAllow){
        var direction
        switch(event.key) {
            case 'ArrowUp':
                direction='up'
                break;
            case 'ArrowDown':
                direction='down'
                break;
            case 'ArrowLeft':
                direction='left'
                break;
            case 'ArrowRight':
                direction='right'
                break;
        }
        playSound('effect/'+direction)
        KeyBoxScale(direction)

        var correct = CheckCorrect(direction)

        NowArrow++
        console.log(NowArrow,ArrowList.length)
        if(correct && NowArrow===ArrowList.length){
            NowArrow=0
            KeyDisable()
            setTimeout(function() {
                ComputerStart()
            }, 1000);
        }
    }
});

//정답인지아닌지 체크
function CheckCorrect(direction){
    const arrow={"up":1,"down":2,"left":3,"right":4}
    if(arrow[direction]!=ArrowList[NowArrow]){
        $gamebox.hide()
        $endbox.show()
        $('.point').text(ArrowList.length+"점")
        KeyDisable()
        return false
    }
    return true

}



function MakeRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber
}


$('.startbutton').on('click', function() {
    $gamebox.show()
    $startbox.hide()
    setTimeout(function() {ComputerStart()},1000)
    
});

function ComputerStart(){
    ArrowList.push(MakeRandomNumber())
    playListSound(ArrowList,500,ArrowList.length)
    setTimeout(function() {
        KeyDisable()
    }, ArrowList.length*500);
}


//버튼 비활성화
export function KeyDisable(){
    KeyAllow = !KeyAllow;
}

