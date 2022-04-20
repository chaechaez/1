$(function(){
    $(".nav").hide();
    $(".menu-trigger").click(function(){
        $(".nav").animate({width:"toggle"},500);
    });
});