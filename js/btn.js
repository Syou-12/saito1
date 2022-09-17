$(function () {
    $('.burger-btn').on('click',function(){
        $('.burger-btn').toggleClass('close');
        $('.bg').toggleClass('slide-in'); // 書き換え
        $('body').toggleClass('noscroll');
      });
  });
