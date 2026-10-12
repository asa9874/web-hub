import './assets/style.css'
import $ from 'jquery'


//시작화면
//$('.gamestartbox').hide()
$('.startimg').css('background-image',"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),url('./img/startimg.png')")
$('.starttitle').attr('src',"./img/title.png")
$('.startsubtitle').attr('src',"./img/subtitle.png")

//메인게임
$('.maingamebox').hide()
$('.studentcardimg').css('background-image',"url('./img/character/witch/witch (4).png')")
$('.characterbox').css('background-image',"linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)),url('./img/wall3.png')")
$('.character').attr('src',"./img/character/witch/witch (4).png")
$('.characterimg').attr('src',"./img/character/witch/witch (4).png")
$('.yesimg').attr('src',"./img/yes.png")
$('.noimg').attr('src',"./img/no.png")
$('.angrychairman').attr('src',"./img/angry.png")
$('.stamp').attr('src',"./img/nostamp.png")
$('.timebarimg').attr('src',"./img/nostamp.png")
$('.book').attr('src',"./img/book.png")

//$('.notificationbox').hide()

$('.notificationContentImg1').css('background-image',"url('./img/graduate.png')")



//스크립트
$('.scriptbox').hide()



//화면전환
$('.switchscreenbox').hide()
$('.switchimg').attr('src',"./img/switch.png")


//점수화면
$('.resultbox').hide()