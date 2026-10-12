//베이스 사운드 함수
export function playSound(name,vol, loop = false) {
    const audio = new Audio('./'+name+'.mp3');
    audio.volume = vol;
    audio.loop = loop;
    audio.play();
    return audio;
}


//사운드 중지함수
export function stopSound(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // 재생 위치를 처음으로 되돌림
    }
}

//효과음
export function playEffectSound(effectname,effectvolume) {
    playSound("effect/"+effectname,effectvolume)
}

export function PlayVoice(currentVoice,voicename,volume){
    if(voicename){
        if (currentVoice) {
            currentVoice.pause();
            currentVoice.currentTime = 0;
        }
        currentVoice=playSound("voice/"+voicename,volume)
        return currentVoice;
    }
}


//브금 소리크기
const BGMLIST={
    'peaceful': 0.2,
    'surprise':0.1,
    'Destroyed World':0.2,
}

//브금
export function PlayBgm(currentBgm,bgmname){
    if (bgmname){
        if (currentBgm && bgmname) {
            currentBgm.pause();
            currentBgm.currentTime = 0;
        }
        currentBgm = playSound("music/" + bgmname, BGMLIST[bgmname], true);
    }
    return currentBgm;
}