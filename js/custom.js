$(document).ready(function(){
    $('body,html').stop().animate({'scrollTop':0},1500,'swing');
    $(window).on('scroll',function(){
        //브라우져 scrollTop
        var scroll = $(this).scrollTop();
        // h1에 현재 scrollTop 값을 담음

        /*
        // 긴버전
        $('h1').text(scroll);
        $('section>article').eq(0).css({'transform':'translateZ('+scroll+'px)'});
        $('section>article').eq(1).css({'transform':'translateZ('+parseInt(-5000+scroll)+'px)'});
        $('section>article').eq(2).css({'transform':'translateZ('+parseInt(-10000+scroll)+'px)'});
        $('section>article').eq(3).css({'transform':'translateZ('+parseInt(-15000+scroll)+'px)'});
        $('section>article').eq(4).css({'transform':'translateZ('+parseInt(-20000+scroll)+'px)'});
        */

        //for문 ()안의 조건을 비교해서 {}를 실행
        //i는 article
        for(var i=0; i<5; i++) {
            $('section>article').eq(i).css({'transform':'translateZ('+parseInt((-5000*i)+scroll)+'px)'});
            // 특정 스크롤 구간에서 활성화
            if(scroll>=i*5000 && scroll<(i+1)*5000){
                $('.scrollNavi li').removeClass('on');
                $('.scrollNavi li').eq(i).addClass('on');
                $('article').removeClass();
                $('article').eq(i).addClass('on');
            }
        }
    });
        // 스크롤 네비게이션 클릭 시 스크롤 이동
        $('.scrollNavi li').on('click',function(){
            var a = $(this).index();
            $('body,html').stop().animate({'scrollTop':5000*a},1500,'swing');
        });

        // 화면에 마우스 move시 콘텐츠 움직이기
        $('body').on('mousemove', function(e){
            var posX = e.pageX/100;
            var posY = e.pageX/150;
            $('.obj11').css({'left':-270-posX,'bottom':-100-posY});
            $('.obj12').css({'righr':-593+posX,'top':-85-posY});
            $('.obj13').css({'left':15+posX,'bottom':150+posY});

            $('.obj21').css({'right':-710-posX,'bottom':-420-posY});
            $('.obj22').css({'right':-240+posX,'top':264+posY});

            $('.obj31').css({'right':110-posX,'bottom':70-posY});
            $('.obj32').css({'left':100-posX,'bottom':-160+posY});

            $('.obj41').css({'left':350+posX,'bottom':-150-posY});
            $('.obj42').css({'right':167+posX,'bottom':-255-posY});
            $('.obj43').css({'right':-60+posX,'bottom':-120+posY});

            $('.obj51').css({'left':-100-posX,'bottom':100-posY});
            $('.obj52').css({'right':30+posX,'bottom':170-posY});
            $('.obj53').css({'right':160+posX,'bottom':100-posY});
        })
});
// 글자애니메이션 Splitting 데모사이트 그대로 작성 따라하기
$(function(){
    Splitting();
});














