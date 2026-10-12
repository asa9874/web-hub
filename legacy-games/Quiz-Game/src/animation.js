import $ from 'jquery'


//애니메이션 시작
export function StartAnimation(target, animationName, animationDuration) {
  target.addClass(animationName);
  target.css('animation-duration', `${animationDuration}ms`);
}

export function loadingAnimation(target) {
  StartAnimation(target, 'loadingAnimation', 3000); // 지속 시간을 1000ms로 설정
}

export function endboxAnimation(target) {
  StartAnimation(target, 'endboxAnimation', 3000); // 지속 시간을 1000ms로 설정
}
