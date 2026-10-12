import $ from 'jquery'
import { NextPerson, StartLoading} from './maingame';
import { PlayBgm } from './playsound';
import { SwitchScreen } from './switchscreen';

$('.GameStartButton').on('click', function() {
    SwitchScreen()
    setTimeout(function() {
        $('.gamestartbox').hide()
        $('.maingamebox').show()
        PlayBgm('bgm1')
    },2000);
});
LoadElements()
export function LoadElements(){
    // 오디오 파일 미리 로드
    var audioFiles = [
        "bgm/bgm1.mp3",
        "effect/stamp.mp3",
        "effect/switch.mp3",
        "effect/type.mp3"
    ];
    var preloadedAudio = [];

    for (var i = 0; i < audioFiles.length; i++) {
        preloadedAudio[i] = new Audio('./sound/' + audioFiles[i]);
        preloadedAudio[i].load();  // 오디오 파일을 명시적으로 로드
    }

    // 이미지 파일 미리 로드
    var images = [
        "angry.png", "background.png", "book.png", "graduate.png", "no.png", "nostamp.png",
        "startimg.png", "switch.png", "switchimg.png", "title.png", "wall3.png", "yes.png",
        "yesstamp.png",
        "character/maid/maid (1).png", "character/maid/maid (2).png", "character/maid/maid (3).png",
        "character/maid/maid (4).png", "character/maid/maid (5).png", "character/maid/maid (6).png",
        "character/maid/maid (7).png", "character/maid/maid (8).png", "character/maid/maid (9).png",
        "character/maid/maid (10).png", "character/maid/maid (11).png", "character/maid/maid (12).png",
        "character/maid/maid (13).png", "character/maid/maid (14).png", "character/maid/maid (15).png",
        "character/maid/maid (16).png", "character/maid/maid (17).png", "character/maid/maid (18).png",
        "character/maid/maid (19).png", "character/maid/maid (20).png",
        "character/soilder/soilder (1).png", "character/soilder/soilder (2).png", "character/soilder/soilder (3).png",
        "character/soilder/soilder (4).png", "character/soilder/soilder (5).png", "character/soilder/soilder (6).png",
        "character/soilder/soilder (7).png", "character/soilder/soilder (8).png", "character/soilder/soilder (9).png",
        "character/soilder/soilder (10).png", "character/soilder/soilder (11).png", "character/soilder/soilder (12).png",
        "character/soilder/soilder (13).png", "character/soilder/soilder (14).png", "character/soilder/soilder (15).png",
        "character/soilder/soilder (16).png", "character/soilder/soilder (17).png", "character/soilder/soilder (18).png",
        "character/soilder/soilder (19).png", "character/soilder/soilder (20).png",
        "character/witch/witch (1).png", "character/witch/witch (2).png", "character/witch/witch (3).png",
        "character/witch/witch (4).png", "character/witch/witch (5).png", "character/witch/witch (6).png",
        "character/witch/witch (7).png", "character/witch/witch (8).png", "character/witch/witch (9).png",
        "character/witch/witch (10).png", "character/witch/witch (11).png", "character/witch/witch (12).png",
        "character/witch/witch (13).png", "character/witch/witch (14).png", "character/witch/witch (15).png",
        "character/witch/witch (16).png", "character/witch/witch (17).png", "character/witch/witch (18).png",
        "character/witch/witch (19).png", "character/witch/witch (20).png"
    ];
    var preloadedImages = [];

    for (var i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = "./img/" + images[i];
    }
}