import $ from 'jquery'
import { playEffectSound } from './playsound';

//애니메이션 시작
export function StartAnimation(target,animationname,animationduration){
    target.addClass(animationname)
    target.css('animation-duration', `${animationduration}ms`);
    setTimeout(function() {
        target.removeClass(animationname);
        void target[0].offsetWidth; 
    }, animationduration);
}

//스크립트로 애니메이션 작동 
export function Animation(animation){
    var name=animation[0]
    if(animation[1]){
        var len=animation[1]
    }
    
    if(name==='fadeinbackground'){
        StartAnimation($('.gamebackgroundimg'),'backgroundfadein',len)
    }
}


//게임 데이터 업데이트 애니메이션보여주기
export function UpdatingNumber(target, end, duration) {
    const $element = target
    const start=parseInt(target.text(),10)
    const range = end - start;
    if(range!=0){
        StartAnimation(target,'updatingnumber',500)
        if($(target).is('.money')){
            playEffectSound('money',0.2)
        }
        else if(range<0){
            healthAnimation()
        }
    }
    let startTime = null;
  
    function updateNumber(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(start + range * progress);
        $element.text(currentNumber);
  
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
  
    requestAnimationFrame(updateNumber);
}


export function healthAnimation(){
    var target=$('.healtheffect')
    var animationname='healthfadeinout'
    var animationduration=800
    target.show()
    target.addClass(animationname)
    target.css('animation-duration', `${animationduration}ms`);
    setTimeout(function() {
        target.removeClass(animationname);
        target.hide()
        void target[0].offsetWidth; 
        
    }, animationduration);
}