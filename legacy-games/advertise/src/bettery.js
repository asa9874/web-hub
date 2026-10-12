import $ from 'jquery';
import './styles/bettery.css';

export function betteryyes() {
    $('body').empty();
    $('body').append(`
    <div class="container">
    <div class="GoogleImg"></div>
    <div class="betteryTitle">귀하의 배터리는 (4) 바이러스에 의해서 심각한 손상을 입었습니다!</div>
    <div class="containerbettery">
        <div class="betterysub">최근접속한 성인사이트로부터의 (4)개의 유해한 바이러스로 인해, 28.1% 손상되는것을 감지했습니다. 곧 휴대폰의 SIM카드가 손상되고 연락처, 사진, 데이터, 애플리케이션 등이 충돌될것입니다.</div>
        <div class="robotimg"></div>
    </div>
    <div class="betteryprocess">지금 바이러스를 제거하지 않으면, 휴대폰에 심각한 손상의 원인이 됩니다. 다음은 실시해야 할 사항입니다.(단계별):</div>
    <div class="betteryprocess">1단계: 버튼을 누르고 Google Play 에서 무료로 "SuperBCleaner"를 설치하십시오!</div>
    <div class="betteryprocess">Step 2 단계: 앱을 열어 속도를 높히고 지금 배터리 문제를 해결하시비오!</div>
    <button type="button" class="btn btn-primary btnbettery">지금빠른 복구</button>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    `);

    alert(`
    경고!

    이 Samsung SM-G900A 바이러스에 감염되었으며 배터리가심각하게 손상되었습니다.바이러스를 제거하고 즉시 이 문제를 해결하십시오
    지금 제거하고 수정해야 합니다.이 창을 닫지 마십시오.

    종료한경우 위험에 노출될 수 있습니다.

    `)

    
    $('.GoogleImg').css('background-image', "url('./bettery/google.png')");
    $('.robotimg').css('background-image', "url('./bettery/robot.jpg')");
}

