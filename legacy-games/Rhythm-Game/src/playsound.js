import { KeyBoxScale } from "./animation";

//베이스 사운드 함수
export function playSound(name,vol=1, loop = false) {
    const audio = new Audio('./'+name+'.mp3');
    audio.volume = vol;
    audio.loop = loop;
    audio.play();
    return audio;
}

const arrow={1:"up",2:"down",3:"left",4:"right"}

//소리이름, 간격ms ,횟수
export function playListSound(ArrowList,Interval=1000,count=1){
    let countnow=-1
    let nIntervId
    playEffectSound()
    if(count!=1){nIntervId=setInterval(playEffectSound,Interval)}
    function playEffectSound() {
        countnow++
        if(countnow===count){clearInterval(nIntervId)}
        playSound("effect/"+arrow[ArrowList[countnow]])
        KeyBoxScale(arrow[ArrowList[countnow]]);
    }
}

export function loadSound(){
    new Audio('./up.mp3');
    new Audio('./down.mp3');
    new Audio('./left.mp3');
    new Audio('./right.mp3');
}