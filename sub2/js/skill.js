$(window).resize(function(){
    location.reload();
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

//파이차트
$(window).ready(function(){
   draw(100, '.pie-chart1', '#ff2a2a');
  draw(99, '.pie-chart2', '#ff7a2a');
  draw(110, '.pie-chart3','#43ff2a');
  draw(110, '.pie-chart4', '#2a89ff');
  draw(90, '.pie-chart5', '#202082');
  draw(80, '.pie-chart6','#e82aff');
});

function draw(max, classname, colorname){
   var i=1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i,classname,colorname);
          i++;
      } else{
        clearInterval(func1);
      }
    },20);
}
function color1(i, classname,colorname){
   $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
   });
}

$(function(){
        var cnt1=0;
  
        counterFn();
  
        function counterFn(){
          id1=setInterval(counterFn,20);
  
          function counterFn(){
            cnt1++;
            if(cnt1>99){
              clearInterval(id1);
            }else{
              $(".count1").text(cnt1+"%");
              $(".pie-chart").click(function(){
                  clearInterval(id1);
                  $(".count1").text("99%");
              });
            }
          }
        }


        var cnt2=0;
  
        counterFn2();
  
        function counterFn2(){
          id2=setInterval(counterFn2,20);
  
          function counterFn2(){
            cnt2++;
            if(cnt2>95){
              clearInterval(id2);
            }else{
              $(".count2").text(cnt2+"%");
              $(".pie-chart").click(function(){
                  clearInterval(id2);
                  $(".count2").text("95%");
              });
            }
          }
        }

       

        var cnt5=0;
  
        counterFn5();
  
        function counterFn5(){
          id5=setInterval(counterFn5,20);
  
          function counterFn5(){
            cnt5++;
            if(cnt5>90){
              clearInterval(id5);
            }else{
              $(".count5").text(cnt5+"%");
              $(".pie-chart").click(function(){
                  clearInterval(id5);
                  $(".count5").text("90%");
              });
            }
          }
        }

        var cnt6=0;
  
        counterFn6();
  
        function counterFn6(){
          id6=setInterval(counterFn6,20);
  
          function counterFn6(){
            cnt6++;
            if(cnt6>80){
              clearInterval(id6);
            }else{
              $(".count6").text(cnt6+"%");
              $(".pie-chart").click(function(){
                  clearInterval(id6);
                  $(".count6").text("80%");
              });
            }
          }
        }

        
      });
    
      $(function(){
		Dots2.generate({speed: 20000});
	 });

     var burger = $('.menu-trigger');

burger.each(function (index) {
    var $this = $(this);

    $this.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active-' + (index + 1));
        
    })
});