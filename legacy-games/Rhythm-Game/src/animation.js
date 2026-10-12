import $ from 'jquery'

const $upbox=$('.upbox')
const $downbox=$('.downbox')
const $leftbox=$('.leftbox')
const $rightbox=$('.rightbox')

//애니메이션 시작
export function StartAnimation(target,animationname,animationduration){
    target.addClass(animationname)
    target.css('animation-duration', `${animationduration}ms`);
    setTimeout(function() {
        target.removeClass(animationname);
        void target[0].offsetWidth; 
    }, animationduration);
}


export function KeyBoxScale(target){
    var RealTarget
    switch(target){
        case "up":
            RealTarget=$upbox
            break;
        case "down":
            RealTarget=$downbox
            break;
        case "left":
            RealTarget=$leftbox
            break;
        case "right":
            RealTarget=$rightbox
            break;
    }
    StartAnimation(RealTarget,'KeyScale',300)
}