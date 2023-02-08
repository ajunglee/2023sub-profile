$(document).ready(function(){

    /*slick slider*/
    $('#main_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slide_nav'
    });
    $('#slide_nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#main_slide',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

/*    var now = 0;
    var img = 2;
    $('.pol_slide_frame > li').eq(0).siblings().hide();
    $('.mini_slide_frame > li').eq(0).siblings().hide();
    $('.memo_txt > li').eq(0).siblings().hide();
    $('.memo_link > li').eq(0).siblings().hide();

  function slide(){
    if (now == img){
      $('.pol_slide_frame > li').eq(now).fadeOut(2000);
      $('.pol_slide_frame > li').eq(0).fadeIn(1000);
      $('.mini_slide_frame > li').eq(now).fadeOut(2000);
      $('.mini_slide_frame > li').eq(0).fadeIn(1000);
      $('.memo_txt > li').eq(now).fadeOut();
      $('.memo_txt > li').eq(0).fadeIn(1000);
      $('.memo_link > li').eq(now).fadeOut();
      $('.memo_link > li').eq(0).fadeIn(1000);
      now = 0;
    }
    else{
      $('.pol_slide_frame > li').eq(now).fadeOut(2000);
      $('.pol_slide_frame > li').eq(now+1).fadeIn(1000);
      $('.mini_slide_frame > li').eq(now).fadeOut(2000);
      $('.mini_slide_frame > li').eq(now+1).fadeIn(1000);
      $('.memo_txt > li').eq(now).fadeOut();
      $('.memo_txt > li').eq(now+1).fadeIn(1000);
      $('.memo_link > li').eq(now).fadeOut();
      $('.memo_link > li').eq(now+1).fadeIn(1000);
      now++;
    }
  }

  setInterval(slide, 3000);*/

    /*section3 slide*/

    $('.slide_btn > li:nth-child(1)').click(function(){
        $('.pol_slide_frame > li:nth-child(1)').fadeIn();
        $('.pol_slide_frame > li:nth-child(2)').hide();
        $('.pol_slide_frame > li:nth-child(3)').hide();
        $('.mini_slide_frame > li:nth-child(1)').fadeIn();
        $('.mini_slide_frame > li:nth-child(2)').hide();
        $('.mini_slide_frame > li:nth-child(3)').hide();
        $('.memo_txt > li:nth-child(1)').fadeIn();
        $('.memo_txt > li:nth-child(2)').hide();
        $('.memo_txt > li:nth-child(3)').hide();
        $('.memo_link > li:nth-child(1)').fadeIn();
        $('.memo_link > li:nth-child(2)').hide();
        $('.memo_link > li:nth-child(3)').hide();
    });
    $('.slide_btn > li:nth-child(2)').click(function(){
        $('.pol_slide_frame > li:nth-child(1)').hide();
        $('.pol_slide_frame > li:nth-child(2)').fadeIn();
        $('.pol_slide_frame > li:nth-child(3)').hide();
        $('.mini_slide_frame > li:nth-child(1)').hide();
        $('.mini_slide_frame > li:nth-child(2)').fadeIn();
        $('.mini_slide_frame > li:nth-child(3)').hide();
        $('.memo_txt > li:nth-child(1)').hide();
        $('.memo_txt > li:nth-child(2)').fadeIn();
        $('.memo_txt > li:nth-child(3)').hide();
        $('.memo_link > li:nth-child(1)').hide();
        $('.memo_link > li:nth-child(2)').fadeIn();
        $('.memo_link > li:nth-child(3)').hide();
    });
    $('.slide_btn > li:nth-child(3)').click(function(){
        $('.pol_slide_frame > li:nth-child(1)').hide();
        $('.pol_slide_frame > li:nth-child(2)').hide();
        $('.pol_slide_frame > li:nth-child(3)').fadeIn();
        $('.mini_slide_frame > li:nth-child(1)').hide();
        $('.mini_slide_frame > li:nth-child(2)').hide();
        $('.mini_slide_frame > li:nth-child(3)').fadeIn();
        $('.memo_txt > li:nth-child(1)').hide();
        $('.memo_txt > li:nth-child(2)').hide();
        $('.memo_txt > li:nth-child(3)').fadeIn();
        $('.memo_link > li:nth-child(1)').hide();
        $('.memo_link > li:nth-child(2)').hide();
        $('.memo_link > li:nth-child(3)').fadeIn();
    });

    /*video pop_up*/
    $('.tv').click(function(){
        $('.pop_wrap').css({
            display:"block"
        });
    });
    $('.close').click(function(){
        $('.pop_wrap').css({
            display:"none"
        });
    });
    $(".close").on("click", function(){
	   $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });

    $(function() { // 보이기 | 숨기기
	$(window).scroll(function() {
    if ($(this).scrollTop() > 3500) { //250 넘으면 버튼이 보여짐니다.
      $('.top_btn').fadeIn();
    } else {
      $('.top_btn').fadeOut();
    }
    }); // 버튼 클릭시
    $(".top_btn").click(function() {
  	 $('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다.
  	 }, 400); // 속도 400
  	 return false;
    });
    
});
    $('.menu-trigger').click(function(){
          $(this).toggleClass('active');
            $('.m_menu').slideToggle(400);
        });
});
