$(function(){
// 盒子出现
var top_list_set=setInterval(top_list_color,6000);
var top_list_set_count = 0;

 $('#top_list .top_list1').mouseover(function(e){
     clearInterval(top_list_set);
 
     $('.top_color').css({
        color:'#333',
    });
    $(this).children(".top_list11").css('display','block');
    $("#head").css('height', '268px')
    if($(this).index()==9){
        $("#head").css('height', '400px')
    }
    $('#head').css('background', 'white');
    $('#meizu_color').attr('src',"./img/index/meizu_logo.png");
    $('#user_color').attr('src','./img/index/user2.png');
    $('#car_color').attr('src','./img/index/shop_car2.png');
 }) 
 $('#head').mouseout(function(e){
    clearInterval(top_list_set);
   top_list_set=setInterval(top_list_color,6000);
   $('.top_list1').children(".top_list11").css('display','none');
   $('#head').css('background', '');
   $("#head").css('height', '268px')
}) 

// 首行字体变色换图
function top_list_color(){
    
    if( top_list_set_count++ % 2 ){
        console.log(11111)
        $('.top_color').css({
           color:'#333'
        });
        $('#meizu_color').attr('src',"./img/index/meizu_logo.png");
          $('#user_color').attr('src','./img/index/user2.png');
          $('#car_color').attr('src','./img/index/shop_car2.png');
    }else{
        // console.log(2222)
        $('.top_color').css({
           color:'#fff'
        })
        $('#meizu_color').attr('src',"./img/index/meizu_logo (2).png");
        $('#user_color').attr('src','./img/index/user1.png');
        $('#car_color').attr('src','./img/index/shop_car1.png');
    }
    
  
}
// 登录扩展
  $('#user').mouseover(function(){
      $("#user_area").css('display','block')
  });
  $('#user_area').mouseout(function(){
    $("#user_area").css('display','none')
})
 //  购物车扩展
 $('.shop_car').mouseover(function(){
     $(".shop_car_big").css('display','block')
 });
 $('.shop_car').mouseout(function(){
     $(".shop_car_big").css('display','none')
 });
    // banner图
    var timer = null;
    var imgShow = 0; //图片下标
    var itemWidth = 2523;
    var imgCount = $('#banner_point li').length;

    //定时器
    timer = setInterval(imgMove, 6000);

    function imgMove() {
        //如果最后一张就是第0张否则就+1
        imgShow = imgShow < imgCount - 2 ? (imgShow + 1) : 0;
        changeImgShow();
    };
    //点击改变背景图
    $('#banner_point li').click(function (e) {
        clearInterval(timer);
        imgShow = $(this).index();
        changeImgShow();
    });

    //js写法划入，划出
    $('.banner')[0].onmouseover = function () {
        clearInterval(timer);
    };
    $('.banner')[0].onmouseout = function () {
        timer = setInterval(imgMove, 6000);
    };


    //提出方法，显示当前图片，和下面方块
    function changeImgShow() {
        var dist = -imgShow * itemWidth + "px";
        $("#banner_img").stop().animate({
            left: dist
        }, 400);
        $('#banner_point li').css({
            'background-color': '#fff'
        });
        $('#banner_point li').eq(imgShow).css({
            'background-color': 'rgba(255,255,255,0.1)'
        })
    }
    //底部分享
    $('.share1 img').mouseover(function(){
        $(this).attr('src','./img/index/share1 (2).png')
        $('.xiao_big').css('display','block')
    })
    $('.share1 img').mouseout(function(){
        $(this).attr('src','./img/index/weixiao.png')
        $('.xiao_big').css('display','none')
    })
    $('.share2 img').mouseover(function(){
        $(this).attr('src','./img/index/weixin2.png')
        $('.wei_big').css('display','block')
    })
    $('.share2 img').mouseout(function(){
        $(this).attr('src','./img/index/weixin1.png')
        $('.wei_big').css('display','none')
    })
    $('.share3 img').mouseover(function(){
        $(this).attr('src','./img/index/qq2.png')
    })
    $('.share3 img').mouseout(function(){
        $(this).attr('src','./img/index/qq1.png')
    })
    $('.share4 img').mouseover(function(){
        $(this).attr('src','./img/index/xinlang2.png')
    })
    $('.share4 img').mouseout(function(){
        $(this).attr('src','./img/index/xinlang1.png')
    })
})
