
        // 슬레이더 
        function slide() {

            $('#slider ul').stop().animate({ 'marginLeft':'-100%' }, function () {

                $('#slider li:first').appendTo('#slider ul');

                $('#slider ul').css({ 'marginLeft': '0px' });

            });
        }

        setInterval(slide, 5000);
    





        // 화제
        $(function(){
            $('.topic_button button:nth-of-type(1)').click(function(){
                $('.topic_collection ul').animate({'marginLeft':'0px'});
                $(this).addClass('click');
                $('.topic_button button').not(this).removeClass('click');
            });
            $('.topic_button button:nth-of-type(2)').click(function(){
                $('.topic_collection ul').animate({'marginLeft':'-222.06px'});
                $(this).addClass('click');
                $('.topic_button button').not(this).removeClass('click');
            });
            $('.topic_button button:nth-of-type(3)').click(function(){
                $('.topic_collection ul').animate({'marginLeft':'-444.12px'});
                $(this).addClass('click');
                $('.topic_button button').not(this).removeClass('click');
            });
        });
        // 아동
        $(function(){
            $('.child_button button:nth-of-type(1)').click(function(){
                $('.child_collection ul').animate({'marginLeft':'0px'});
                $(this).addClass('click');
                $('.child_button button').not(this).removeClass('click');
            });
            $('.child_button button:nth-of-type(2)').click(function(){
                $('.child_collection ul').animate({'marginLeft':'-222.06px'});
                $(this).addClass('click');
                $('.child_button button').not(this).removeClass('click');
            });
            $('.child_button button:nth-of-type(3)').click(function(){
                $('.child_collection ul').animate({'marginLeft':'-444.12px'});
                $(this).addClass('click');
                $('.child_button button').not(this).removeClass('click');
            });
        });
        // 취업/수험서
        $(function(){
            $('.test_button button:nth-of-type(1)').click(function(){
                $('.test_collection ul').animate({'marginLeft':'0px'});
                $(this).addClass('click');
                $('.test_button button').not(this).removeClass('click');
            });
            $('.test_button button:nth-of-type(2)').click(function(){
                $('.test_collection ul').animate({'marginLeft':'-222.06px'});
                $(this).addClass('click');
                $('.test_button button').not(this).removeClass('click');
            });
            $('.test_button button:nth-of-type(3)').click(function(){
                $('.test_collection ul').animate({'marginLeft':'-444.12px'});
                $(this).addClass('click');
                $('.test_button button').not(this).removeClass('click');
            });
        });

        // 베스트 3가지
        $(function(){
            $('.best_title .title1').click(function(){
                $('.Kyobo_box_ins1').stop().fadeIn();
                $('.best_box_ins').not('.Kyobo_box_ins1').stop().hide()
                $(this).addClass('title-click');
                $('.best_title .title').not(this).removeClass('title-click');
            });
            $('.best_title .title2').click(function(){
                $('.Internet_box_ins2').stop().fadeIn();
                $('.best_box_ins').not('.Internet_box_ins2').stop().hide()
                $(this).addClass('title-click');
                $('.best_title .title').not(this).removeClass('title-click');
            });
            $('.best_title .title3').click(function(){
                $('.Foreign_box_ins3').stop().fadeIn();
                $('.best_box_ins').not('.Foreign_box_ins3').stop().hide()
                $(this).addClass('title-click');
                $('.best_title .title').not(this).removeClass('title-click');
            });
        });
        // 이주의 베스트
        $(function(){
            $('.best_week-button button:nth-of-type(1)').click(function(){
                $(this).addClass('click');
                $('.best_week-button button').not(this).removeClass('click');
                $('.week-box1').fadeIn();
                $('.week-box').not('.week-box1').hide();
            });
            $('.best_week-button button:nth-of-type(2)').click(function(){
                $(this).addClass('click');
                $('.best_week-button button').not(this).removeClass('click');
                $('.week-box2').fadeIn();
                $('.week-box').not('.week-box2').hide();
            });
            $('.best_week-button button:nth-of-type(3)').click(function(){
                $(this).addClass('click');
                $('.best_week-button button').not(this).removeClass('click');
                $('.week-box3').fadeIn();
                $('.week-box').not('.week-box3').hide();
            });
            $('.best_week-button button:nth-of-type(4)').click(function(){
                $(this).addClass('click');
                $('.best_week-button button').not(this).removeClass('click');
                $('.week-box4').fadeIn();
                $('.week-box').not('.week-box4').hide();
            });
        });

        // 온리 교보
        $(function(){
            $('#only button:nth-of-type(1)').click(function(){
                $('.only_in ul li:last').prependTo('.only_in ul');
                $('.only_in ul').css({'marginLeft':'-100%'});
                $('.only_in ul').stop().animate({'marginLeft':'0px'});
            });
            $('#only button:nth-of-type(2)').click(function(){
                $('.only_in ul').stop().animate({'marginLeft':'-100%'},function(){
                    $('.only_in ul li:first').appendTo('.only_in ul');
                    $('.only_in ul').css({marginLeft:0});
                });
            });
        });