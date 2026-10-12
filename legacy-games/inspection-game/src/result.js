import $ from 'jquery'
import { playEffectSound } from './playsound';

export function ShowResult(){
    $('.resultbox').show()
    $('.resultplate').removeClass('hide').addClass('show');
}

export function HideResult(){
    $('.resultplate').removeClass('show').addClass('hide');
    setTimeout(function() {
        $('.resultplate').hide()
    }, 1000);
}