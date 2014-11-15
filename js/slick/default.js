$(function() {
  if (!$('html').hasClass('lt-ie7')) {
    $('.slick-wrapper .slick-inner').each(function() {
      $(this).slick({
        slide: 'img',  //轮播直接作用对象（可以是元素，可以是div）
        autoplay: true,//自动播放
        arrows: true,//轮播左右两边按钮
        dots: true //轮播下面的点点

      });
    });
  }
});