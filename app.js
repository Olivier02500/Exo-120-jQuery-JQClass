let square = $('.square');
let round = $('.round');
let diamond = $('.diamond');

$('#full').on('click',function (){
    round.addClass('color');
    square.addClass('color');
    diamond.addClass('color');
    $('.mid').addClass('color');
})

$('#empty').on('click',function (){
    round.removeClass('color');
    square.removeClass('color');
    diamond.removeClass('color');
    $('.mid').removeClass('color');
})

round.on('click' ,function (e){
    $(this).toggleClass('color ,colorNone');
})

square.on('click' ,function (e){
    $(this).toggleClass('color ,colorNone');
    $(this).siblings().toggleClass('color ,colorNone');

})

diamond.on('click' ,function (e){
    $(this).toggleClass('color ,colorNone');
    $(this).siblings().toggleClass('color ,colorNone');
    $('.mid').toggleClass('color ,colorNone');
})

