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
})