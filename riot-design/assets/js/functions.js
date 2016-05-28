$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if(wScroll > 400){
    $('#header').css({
      'transform': 'translate(0px, 10px)'
    });
    $('.section').css({
      'transform': 'translate(0px, -10px)'
    });
    console.log('hi');
  }
});
