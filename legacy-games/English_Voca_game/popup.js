import { playSound } from "./coin";

document.addEventListener('DOMContentLoaded', function() {
    // 팝업을 화면 중앙에 표시
    playSound("cutesound",0.3);
    document.getElementById('popup').style.display = 'flex';
    
    // 닫기 버튼 클릭 시 팝업 닫기
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
        playSound("cutesound",0.3);
    });

    // 팝업 바깥 클릭 시 팝업 닫기
    document.getElementById('popup').addEventListener('click', function(event) {
        
        if (event.target === document.getElementById('popup')) {
            document.getElementById('popup').style.display = 'none';
            playSound("cutesound",0.3);
        }
    });
});