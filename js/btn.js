$(function () {
    $('.burger-btn').on('click',function(){
        $('.burger-btn').toggleClass('close');
        $('.bg').toggleClass('slide-in'); // ζΈγζγ
        $('body').toggleClass('noscroll');
      });
  });
