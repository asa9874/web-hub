import $ from 'jquery'

//캐릭터 모습,위치 바꾸기
export function ChangeCharactor(target,character){
    if(character){
        if(character.position){
            if(character.position==='hidden'){
                target.hide()
            }
            else{
                target.show()
                target.css('left',character.position+'%')
            }
        }
    
        if(character.img){
            target.attr('src',"./character/"+character.img+".png")
        }
    }
}

