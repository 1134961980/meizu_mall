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
   var goods=[
    {
      href:'#',
      img:'./img/acoustics/a1.jpg',
      name:'Pandaer 「17」系列 果冻包',
      bief:'【限时特惠59元】潮酷印花 | 超大容量 | 透亮设计',
      money:'99' 
    },
    {
     href:'#',
     img:'./img/acoustics/a2.jpg',
     name:'魅族极简都市双肩包',
     bief:'650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅',
     money:'179' 
   },
   {
     href:'#',
     img:'./img/acoustics/A3.jpg',
     name:'Pandaer readnap T恤',
     bief:'潮趣设计 | 100％精织纯棉 | 多重潮流工艺 | Mixcolor混色搭配 | 情侣装',
     money:'199' 
   },
   {
     href:'#',
     img:'./img/acoustics/A4.jpg',
     name:'Pandaer 鼠年圆领卫衣',
     bief:'【珍稀现货】金鼠限定/ 优质棉料 / 挺括亲肤 / 保暖舒适 / 情侣装',
     money:'199' 
   },
   {
     href:'#',
     img:'./img/acoustics/A5.jpg',
     name:'Flyme 8 暗夜流光卫衣',
     bief:'Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光 | 点亮梦想 |  情侣装',
     money:'269' 
   },
   {
     href:'#',
     img:'./img/acoustics/A6.jpg',
     name:'Lifeme 双肩包',
     bief:'【限时特惠239元 | 加59元换购相机包】创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭配',
     money:'299' 
   },
   {
     href:'#',
     img:'./img/acoustics/A7.jpg',
     name:'魅族防飞溅声波电动牙刷',
     bief:'【限时特惠229元 | 护齿套装268元】智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护',
     money:'299' 
   },
   {
     href:'#',
     img:'./img/acoustics/A8.jpg',
     name:'2020福来我发新春大礼盒',
     bief:'Flyme 原创设计/ 鼠年春节套装 / 复古潮流 / 棒球衫 / 怀旧礼包 / 情侣装',
     money:'488' 
   },
   {
     href:'#',
     img:'./img/acoustics/A9.jpg',
     name:'Lifeme 梨木伞',
     bief:'【限时特惠449元+12期免息】高定时装压花伞布 | 隔绝99% UV | 进口环保拒水涂层 | 8骨静音防风伞架 | 千足纯银徽章 | 优质花梨木伞柄',
     money:'499' 
   }
]
 //排序
 var sort_bo=true;
 $('#sort').click(function(){
      if(sort_bo==true){
          for(var i=0;i<goods.length;i++){
              for(var j=0;j<goods.length;j++){
                if(Number(goods[i].money)>Number(goods[j].money)){
                      var te=goods[i];
                      goods[i]=goods[j];
                      goods[j]=te;
                  }
              }
          }
          sort_bo=false;
      }else{    
          for(var i=0;i<goods.length;i++){
              for(var j=0;j<goods.length;j++){
                  if(Number(goods[i].money)<Number(goods[j].money)){
                      var te=goods[i];
                      goods[i]=goods[j];
                      goods[j]=te;
                  }
              }
          }
          sort_bo=true;
      }
      goods_change();
 })

var goods_change=function(){ 
  $('#goods_all').html('')
   for(var i=0;i<goods.length;i++){
     $(`<div class='goods'>
         <a href='${'./meizu_PoP2s.html'}'> 
         <img src="${goods[i].img}" alt="">
         <div class="good_news">
         <span>${goods[i].name}</span>
         <p>${goods[i].bief}</p>
         <i>￥<em>${goods[i].money}</em></i>
         </div>
         </a>
        </div>`).appendTo($('#goods_all'))
 }
}
goods_change();
  var goods2=[
      {
          img:'./img/Life around/ia_100000003406.png',
          name:'魅族 &nbsp; 17',
          money:'99'
      },
      {
          img:'./img/Life around/ia_100000003408.png',
          name:'魅族防飞溅声波电动牙刷',
          money:'699'
      },
      {
          img:'./img/Life around/ia_100000003410.png',
          name:'Lifeme 双肩包',
          money:'399'
      },
      {
          img:'./img/Life around/ia_100000003412.png',
          name:'Lifeme 梨木伞',
          money:'399'
      },
      {
          img:'./img/Life around/ia_100000003429.png',
          name:'Lifeme 梨木伞',
          money:'369'
      },
      {
          img:'./img/Life around/ia_100000003447.png',
          name:'魅族 &nbsp; 17',
          money:'699'
      },
      {
          img:'./img/Life around/ia_100000003449.png',
          name:'Lifeme 双肩包',
          money:'3699'
      },
      {
          img:'./img/Life around/ia_100000003451.png',
          name:'魅族 &nbsp; 17',
          money:'99'
      },
      {
          img:'./img/Life around/ia_100000003453.png',
          name:'魅族防飞溅声波电动牙刷',
          money:'99'
      },
      {
          img:'./img/Life around/ia_100000003455.png',
          name:'魅族防飞溅声波电动牙刷',
          money:'369'
      },
      {
          img:'./img/Life around/ia_100000003457.png',
          name:'魅族 &nbsp; 17',
          money:'399'
      },
      {
          img:'./img/Life around/ia_100000003459.png',
          name:'Lifeme 双肩包',
          money:'399'
      },
      {
          img:'./img/Life around/ia_100000003461.png',
          name:'Lifeme 梨木伞',
          money:'699'
      }
  ]
  for(var i=0;i<goods2.length;i++){
      $(`<div class='goods2'>
      <a href='./meizu_PoP2s.html'> 
      <img src="${goods2[i].img}" alt="">
      <div class="goods2_news">
      <div class="goods2_name">${goods2[i].name}</div>
      <div class="goods2_money">
      <span>￥</span>
      <em>3699</em>
      </div>
      </div>
      </a>
     </div>`).appendTo($('.goods2_move'))
  }
  $('.goods_point li').click(function(){
      $('.goods_point li').css({
          background:'#fff'
      })
      $(this).css({
          background:'#a1a1a1'
      })
      if($(this).index()==0){
          $('.goods2_move').stop().animate({left:0})
      }
      if($(this).index()==1){
          $('.goods2_move').stop().animate({left:-1240})
      }
      if($(this).index()==2){
          $('.goods2_move').stop().animate({left:-2480})
      }
  })
 
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