
//베이스 사운드 함수
export function playSound(name,vol=1, loop = false) {
    const audio = new Audio('./sound/'+name+'.mp3');
    audio.volume = vol;
    audio.loop = loop;
    audio.play();
    return audio;
}

export function LoadElements(){
    // 오디오 파일 미리 로드
    var audioFiles = ["start.mp3", "Correct.mp3", "music.mp3", "typing.mp3", "Wrong.mp3"];
    var preloadedAudio = [];

    for (var i = 0; i < audioFiles.length; i++) {
        preloadedAudio[i] = new Audio('./sound/' + audioFiles[i]);
        preloadedAudio[i].load();  // 오디오 파일을 명시적으로 로드
    }

    // 이미지 파일 미리 로드
    var images = ["loading.png", "bar.png", "button.png", "character2.png", "character3.png", "heart.png", "O.png", "X.png", "wood2.png","endback.png","startback.png","Decorateimg1.png"];
    var preloadedImages = [];

    for (var i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = "./img/" + images[i];
    }
}
