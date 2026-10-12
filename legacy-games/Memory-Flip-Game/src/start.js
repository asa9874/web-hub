import $ from 'jquery'

const $EasyStart=$('.EasyStart')
const $NORMALStart=$('.NORMALStart')
const $HARDStart=$('.HARDStart')
const $LUNATICStart=$('.LUNATICStart')
const $gamestartimg1=$('.gamestartimg1')
const $gamestartimg2=$('.gamestartimg2')
const $gamestartimg3=$('.gamestartimg3')
const $gamestartimg4=$('.gamestartimg4')

$gamestartimg1.attr('src', './char/easy.png');
$gamestartimg2.attr('src', './char/normal.png');
$gamestartimg3.attr('src', './char/hard.png');
$gamestartimg4.attr('src', './char/lunatic.png');

$EasyStart.on('mouseenter',function(){
    $('.startimg').css('background-color', 'black')
    $gamestartimg1.css({
        'left':'25%',
        'height': '800px', 
        'width': '500px'    
    })
    
    $gamestartimg1.css('opacity','1')
    $gamestartimg2.css('opacity','0')
    $gamestartimg3.css('opacity','0')
    $gamestartimg4.css('opacity','0')


    $EasyStart.on('mouseleave', function() {
        $('.startimg').css('background-color', 'antiquewhite');
        $gamestartimg1.css({
            'left':'0%',
            'height': '600px',  
            'width': '400px'    
        })
        $gamestartimg1.css('opacity','0.4')
        $gamestartimg2.css('opacity','0.4')
        $gamestartimg3.css('opacity','0.4')
        $gamestartimg4.css('opacity','0.4')
    });
})

$NORMALStart.on('mouseenter',function(){
    $('.startimg').css('background-color', 'green')
    $gamestartimg2.css({
        'left':'25%',
        'height': '800px', 
        'width': '500px'    
    })
    $gamestartimg2.css('opacity','1')
    $gamestartimg1.css('opacity','0')
    $gamestartimg3.css('opacity','0')
    $gamestartimg4.css('opacity','0')


    $NORMALStart.on('mouseleave', function() {
        $('.startimg').css('background-color', 'antiquewhite');
        $gamestartimg2.css({
            'left':'15%',
            'height': '600px',  
            'width': '400px'    
        })
        $gamestartimg1.css('opacity','0.4')
        $gamestartimg2.css('opacity','0.4')
        $gamestartimg3.css('opacity','0.4')
        $gamestartimg4.css('opacity','0.4')
    });
})

$HARDStart.on('mouseenter',function(){
    $('.startimg').css('background-color', '#f54272')
    $gamestartimg3.css({
        'left':'25%',
        'height': '800px', 
        'width': '500px'   
    })
    $gamestartimg3.css('opacity','1')
    $gamestartimg1.css('opacity','0')
    $gamestartimg2.css('opacity','0')
    $gamestartimg4.css('opacity','0')

    $HARDStart.on('mouseleave', function() {
        $('.startimg').css('background-color', 'antiquewhite');
        $gamestartimg3.css({
            'left':'35%',
            'height': '600px',  
            'width': '400px'    
        })
        $gamestartimg1.css('opacity','0.4')
        $gamestartimg2.css('opacity','0.4')
        $gamestartimg3.css('opacity','0.4')
        $gamestartimg4.css('opacity','0.4')
    });
})

$LUNATICStart.on('mouseenter',function(){
    $gamestartimg4.css({
        'left':'25%',
        'height': '800px',  
        'width': '500px'   
    })
    
    $('.startimg').css('background-color', 'lightblue')
    $gamestartimg4.css('opacity','1')
    $gamestartimg1.css('opacity','0')
    $gamestartimg2.css('opacity','0')
    $gamestartimg3.css('opacity','0')

    $LUNATICStart.on('mouseleave', function() {
        $('.startimg').css('background-color', 'antiquewhite');
        $gamestartimg4.css({
            'left':'55%',
            'height': '600px',  
            'width': '400px'    
        })
        $gamestartimg1.css('opacity','0.4')
        $gamestartimg2.css('opacity','0.4')
        $gamestartimg3.css('opacity','0.4')
        $gamestartimg4.css('opacity','0.4')
    });
})

