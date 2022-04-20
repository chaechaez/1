        // 헤더 nav
        $(function(){
            $('#menu .main_nav .main_li a').mouseover(function(){
                $(this).siblings('.sub_ul').stop().show();
            });
            $('#menu .main_nav .main_li a').mouseout(function(){
                $(this).siblings('.sub_ul').stop().hide();
            });
            $('.sub_ul').mouseover(function(){
                $(this).show();
            });
            $('.sub_ul').mouseout(function(){
                $('.sub_ul').hide();
            });
        });


        
        // #헤더광고  ///////////////

        $(function(){
            $('.arrow img[alt="left"]').click(function(){
                $('.event_box ul li:last').prependTo('.event_box ul');
                $('.event_box ul').css({'marginLeft':'-100%'});
                $('.event_box ul').stop().animate({'marginLeft':'0px'});
            });
            $('.arrow img[alt="right"]').click(function(){
                $('.event_box ul').stop().animate({'marginLeft':'-100%'},function(){
                    $('.event_box ul li:first').appendTo('.event_box ul');
                    $('.event_box ul').css({marginLeft:0});
                });
            });
        });

        // 헤더 카테고리 메뉴
        $(function(){
            $('#menu .sub_menu').click(function(){
                $('.sub_menu_main').fadeToggle();
            });
        });
