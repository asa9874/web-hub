import $ from 'jquery'
import { playEffectSound } from './playsound';

export function ShowSwitchScreen(){
    $('.switchscreenbox').show()
    $('.switchscreen').removeClass('hide').addClass('show');
}

export function HideSwitchScreen(){
    $('.switchscreen').removeClass('show').addClass('hide');
    setTimeout(function() {
        $('.switchscreenbox').hide()
    }, 1000);
}

export function SwitchScreen(){
    ShowSwitchScreen()
    playEffectSound('switch',0.5)
    setTimeout(function() {
        HideSwitchScreen()
    }, 2000);

    setTimeout(function() {
        $('.switchscreen').removeClass('hide').addClass('startingpoint');
        $('.switchscreen').removeClass('startingpoint')
    }, 3000);
}


