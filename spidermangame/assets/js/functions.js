$(document).ready(function(){
  console.log('hi');
  //alert($('hi').text('hi'));
});

$('.game-button').mouseenter(function(){
    var offset = $(this).offset().top - $('.baby-spiderman').height() + 20;
    console.log(offset);
  $('.baby-spiderman').css({
    'transform':'translateY('+ offset +'px)',
    'transition':'all 1s ease-in-out'
  });
});

$('.game-button').mouseleave(function(){
    var offset = $(this).offset().top + 30;
    console.log(offset);
  $('.baby-spiderman').css({
    'transform':'translateY(-'+ offset +'px)',
    'transition':'all 1s ease-in-out'
  });
});

$('.game-button').click(function(){
    var offset = $(this).offset().top - $('.baby-spiderman').height() + 20;
    console.log(offset);
  $('.baby-spiderman').css({
    'transform':'translateY('+ offset +'px)',
    'transition':'all 1s ease-in-out'
  });
});
