//베이스 사운드 함수
export function playSound(name,vol, loop = false) {
    const audio = new Audio('./'+name+'.mp3');
    audio.volume = vol;
    audio.loop = loop;
    audio.play();
    return audio;
}


//효과음
export function playEffectSound(effectname,effectvolume) {
    playSound("effect/"+effectname,effectvolume)
}
