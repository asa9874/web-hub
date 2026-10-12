import $ from 'jquery'


//애니메이션 시작
export function StartAnimation(target,animationname,animationduration){
    target.addClass(animationname)
    target.css('animation-duration', `${animationduration}ms`);

}

export function FlipCard(target){
    StartAnimation(target,'cardflip',500)
}


export function ReFlipCard(index){
    var target=$(`.card${index}`)
    target.removeClass('cardflip')
    StartAnimation(target,'cardBackflip',800)
    setTimeout(function() {
        target.removeClass('cardBackflip');
        void target[0].offsetWidth; 
    }, 800);
}



//게임 데이터 업데이트 애니메이션보여주기
export function UpdatingNumber(target,start, duration) {
    const $element = target
    const range = 2;
    StartAnimation(target,'updatingnumber',300)
    
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
    setTimeout(function() {
        target.removeClass('updatingnumber');
        void target[0].offsetWidth; 
    }, 300);

}