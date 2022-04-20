$(window).resize(function(){
    location.reload();
});

$(function(){
    Dots.generate({speed: 20000});
 });

 var burger = $('.menu-trigger');

burger.each(function (index) {
var $this = $(this);

$this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
    
})
});
//그래프
(function( $ ) {
"use strict";
$(function() {
    function animated_contents() {
        $(".gr-skill-bar > div ").each(function (i) {
            var $this  = $(this),
                skills = $this.data('width');

            $this.css({'width' : skills + '%'});

        });
    }
    
    if(jQuery().appear) {
        $('.gr-skill-bar').appear().on('appear', function() {
            animated_contents();
        });
    } else {
        animated_contents();
    }
});
}(jQuery));

$(function(){
    $(".content2").hide();

    $(".textboxmenu li:nth-of-type(1)").click(function(){
        $(".content1").fadeIn();
        $(".content2").fadeOut();
    });

    $(".textboxmenu li:nth-of-type(2)").click(function(){
        $(".content2").fadeIn();
        $(".content1").fadeOut();
    });
});

