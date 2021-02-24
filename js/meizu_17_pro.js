$(function(){

    $('#top_list .top_list1').mouseover(function(e){
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
       $('.top_list1').children(".top_list11").css('display','none');
       $('#head').css('background', '');
       $("#head").css('height', '82px')
    }) 
	
    
      $('#user').mouseover(function(){
          $("#user_area").css('display','block')
      });
      $('#user_area').mouseout(function(){
        $("#user_area").css('display','none')
    })
   
    // 导航栏定位
         $('body').mousemove(function(){
           if($(document).scrollTop()>90){
               $("#subnav").css({
                position:'fixed',
                top:'0',
                left:'50%',
                transform:'translateX(-50%)',
                opacity:'0.8'
               })
           }
           if($(document).scrollTop()<90){
            $("#subnav").css({
                position:'relative',
                top:'80px',
                opacity:'1'
               })
           }
       })
// 地址变更
  $('.chose_top .name_city').mouseover(function(e){
    $('.chose_top .name_city').css({
         border:'1px solid #999',
        'border-bottom':'1px solid #000',
    })
    $(this).css({
         border:'1px solid #000',
        'border-bottom':'1px solid #fff'
    })
  })
  $('.chose_top .frist').mouseover(function(e){
       $('.chose_bo').css({
           display:'none'
       });
       $('.chose_bo1').css({
        display:'block'
    });
  })
  $('.chose_top .name_city1').mouseover(function(e){
    $('.chose_bo').css({
        display:'none'
    });
    $('.chose_bo2').css({
     display:'block'
 })
})
 $('.chose_top .name_city2').mouseover(function(e){
    $('.chose_bo').css({
        display:'none'
    })
    $('.chose_bo3').css({
     display:'block'
      })
})
  var  delivery_address_bo=true;
   $('.delivery_address').click(function(){
       if(delivery_address_bo==true){
        $('.shop_news_5_extend').css({
            display:'block'
        })
        delivery_address_bo=false;
       } else{
        $('.shop_news_5_extend').css({
            display:'none'
        })
        delivery_address_bo=true;
       }
   })
   $('.chose_bo1 span').click(function(){
       $('#shen').html($(this).text()+'省')
       $('.chose_top .frist').html('&nbsp;' +$(this).text()+'省' + '▼')
   })
   $('.chose_bo2 span').click(function(){
    $('#shi').html($(this).text()+'市')
    $('.chose_top .name_city1').html('&nbsp;' +$(this).text()+'市' + '▼')
})
    //    变换图片
    $('#meizu17_small li').click(function(){
        $('#meizu17_big').html($(this).html())
        $('#meizu17_small li').css('box-shadow','')
        $(this).css('box-shadow','0px 5px 5px #ccc')
    });
    $('.li_2').click(function(e){
        console.log()
       if($(this).index()==0){
           $('.small_1 img').attr('src','./img/meizu17 pro/b1.jpg');
           $('#meizu17_big').html($('.small_1').html());
           $('.small_2 img').attr('src','./img/meizu17 pro/b2.jpg');
           $('.small_3 img').attr('src','./img/meizu17 pro/b3.jpg');
           $('.small_4 img').attr('src','./img/meizu17 pro/b4.jpg');
       }
       if($(this).index()==1){
        $('.small_1 img').attr('src','./img/meizu17 pro/meizu17 pro.jpg');
          $('#meizu17_big').html($('.small_1').html());
        $('.small_2 img').attr('src','./img/meizu17 pro/meizu17 pro22.jpg');
        $('.small_3 img').attr('src','./img/meizu17 pro/meizu17 pro33.jpg');
        $('.small_4 img').attr('src','./img/meizu17 pro/meizu17 pro44.jpg');
    }
    if($(this).index()==2){
        $('.small_1 img').attr('src','./img/meizu17 pro/b5.jpg');
           $('#meizu17_big').html($('.small_1').html());
           $('.small_2 img').attr('src','./img/meizu17 pro/b6.jpg');
           $('.small_3 img').attr('src','./img/meizu17 pro/b7.jpg');
           $('.small_4 img').attr('src','./img/meizu17 pro/b8.jpg');
    }
    if($(this).index()==3){
        $('.small_1 img').attr('src','./img/meizu17 pro/b9.jpg');
            $('#meizu17_big').html($('.small_1').html());
           $('.small_2 img').attr('src','./img/meizu17 pro/b10.jpg');
           $('.small_3 img').attr('src','./img/meizu17 pro/b11.jpg');
           $('.small_4 img').attr('src','./img/meizu17 pro/b12.jpg');
    }
    })
    $('.li_1').click(function(e){
        $('.li_1').css({
            border:'1px solid #999',
            color:'#666'
        });
         $(this).css({
             border:'1px solid #000',
             color:'#000'
            })
    });
    $('.li_2').click(function(e){
        $('.li_2').css({
            border:'1px solid #999',
            color:'#666'
        });
         $(this).css({
             border:'1px solid #000',
             color:'#000'
            })
    });
    $('.li_3').click(function(e){
        $('.li_3').css({
            border:'1px solid #999',
            color:'#666'
        });
         $(this).css({
             border:'1px solid #000',
             color:'#000'
            })
    });
    $('.li_4').click(function(e){
        $('.li_4').css({
            border:'1px solid #999',
            color:'#666'
        });
         $(this).css({
             border:'1px solid #000',
             color:'#000'
            })
    });
    $('.li_5').click(function(e){
        $('.li_5').css({
            border:'1px solid #999',
            color:'#666'
        });
         $(this).css({
             border:'1px solid #000',
             color:'#000'
            })
    });

       var phone_quantity=0;
    $('#subtract').click(function(){
        $('#quantity').html(--phone_quantity)
        if( $('#quantity').html()<0){
            $('#quantity').html('0')
        }
    })
    $('#plus').click(function(){
        $('#quantity').html(++phone_quantity)
    })
      // 分享换色
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