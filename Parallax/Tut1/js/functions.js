$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform': 'translate(0px , '+ wScroll/2 +'%)'
  });

  $('.back-bird').css({
    'transform':'translate(0px, '+ wScroll/4 +'%)'
  });

  $('.fore-bird').css({
    'transform':'translate(0px, '+ wScroll/40 +'%)'
  });

  if(wScroll > $('.cloth-pics').offset().top - $(window).height() / 1.2){
    $('.cloth-pics figure').each(function(i){
      setTimeout(function(){
        $('.cloth-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }

  if(wScroll > $('.post-section').offset().top - $(window).height()){
    console.log('hi post');
    var offset = Math.min(0, (wScroll + $('window').height() -$('.post-section').offset().top + 200)) ;
    $('.post-1').css({ 'transform' : 'translate('+ offset +'px,'+ Math.abs(offset) * 0.3 +'px)'});
    $('.post-3').css({ 'transform' : 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset) * 0.3 +'px)'});
  }

  if(wScroll > $('.large-window').offset().top - $(window).height()){
    $('.large-window').css({'background-position' : 'center '+ (wScroll - $('window').height() + 200) +'px '});
  }
});
