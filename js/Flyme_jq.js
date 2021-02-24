$(function(){
    var  nav_color_bo=true;
    var nav_color=function(){
        if(nav_color_bo==true){
            $('.meizu_logo').css('color','#fff');
            $(".nav_color a").css('color', '#fff');
            nav_color_bo=false;
        }else{
            $('.meizu_logo').css('color','rgb(0, 149, 255)');
            $(".nav_color a").css('color','rgb(0, 149, 255)');
            nav_color_bo=true;
        }
    }
    setInterval(nav_color,3000);
    var imgWidth=1798.64;
    var img_count=0;
      function change_show(){
          var dist=-img_count * imgWidth +'px';
          $('#img_show').stop().animate({
            left: dist
        }, 500);
        $('#point li').css('background-color','#fff');
        $('#point li').eq(img_count).css('background-color','rgba(255,255,255,0.1)');
      }
    function img_move(){
        img_count=img_count<2?(img_count+1):0;
        change_show();
    }
    $('#point li').click(function(){
        img_count=$(this).index();
        change_show();
    })
    setInterval(img_move,6000);

    // $('.flyme_con_1 img').mouseover(function(){
    //     var wValue=1.5 * $(this).width();
    //     var hValue=1.5 * $(this).height();		
    //     $(this).stop().animate({width: wValue,
    //                     height: hValue,
    //                     left:("-"+(0.5 * $(this).width())/2),
    //                     top:("-"+(0.5 * $(this).height())/2)});
    // }).mouseout(function(){
    //     $(this).stop().animate({width: "900",
    //                                  height: "600",
    //                                  left:"0px",
    //                                  top:"0px"} );
    // });

})