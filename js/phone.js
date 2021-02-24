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
         img:'./img/phone/A1.jpg',
         name:'魅族 16th Plus',
         bief:'骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.5英寸屏幕 | 4×4 MIMO 天线 | mEngine | 超线性双扬声器',
         money:'799' 
       },
       {
        href:'#',
        img:'./img/phone/A2.jpg',
        name:'魅蓝 6T',
        bief:'双摄全面屏，游戏长续航',
        money:'979' 
      },
      {
        href:'#',
        img:'./img/phone/A13.jpg',
        name:'魅族 V8 高配版',
        bief:'Helio P22 处理器 | 5.7 英寸全面屏 | 后置双摄组合 | 双色温双闪光灯 | 人脸+指纹双解锁',
        money:'1099' 
      },
      {
        href:'#',
        img:'./img/phone/A4.jpg',
        name:'魅族 16Xs',
        bief:'极边全面屏 | 4800W AI三摄 | 疾速屏下指纹 | 4000mAh大电池 | 高通骁龙675 | Onemind 3.0 | 绚丽多彩新色系',
        money:'1099' 
      },
      {
        href:'#',
        img:'./img/phone/A5.jpg',
        name:'魅蓝 E3',
        bief:'骁龙636处理器 全系6G大运存',
        money:'1269' 
      },
      {
        href:'#',
        img:'./img/phone/A6.jpg',
        name:'魅族 16s Pro',
        bief:'高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄 | 极边全面屏 | Flyme8 尝鲜体验 | 极速屏下指纹 | 全功能NFC',
        money:'2699' 
      },
      {
        href:'#',
        img:'./img/phone/A7.JPG',
        name:'【联通5G套餐】魅族 17',
        bief:'【联通5G资费套餐享50%补贴】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
        money:'4299' 
      },
      {
        href:'#',
        img:'./img/phone/A8.JPG',
        name:'魅族 17 航母限定版',
        bief:'高通骁龙 865 + UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 定制三星 Super AMOLED 90 帧直屏 | 4500mAh 超大电池 + 30W 快充 | 智能全功能 NFC',
        money:'4488' 
      },
      {
        href:'#',
        img:'./img/phone/A9.JPG',
        name:'【超值套餐】魅族 17 Pro',
        bief:'【听觉盛宴 超值套餐】高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 煅烧陶瓷机身 | mSmart 5G 快省稳系统方案',
        money:'4499' 
      }
   ]
   //排序
   var sort_bo=true;
   $('#sort').click(function(){
        if(sort_bo==true){
            console.log(goods[8])
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
           <a href='${goods[i].href}'> 
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
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003408.png',
            name:'魅族防飞溅声波电动牙刷',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003410.png',
            name:'Lifeme 双肩包',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003412.png',
            name:'Lifeme 梨木伞',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003429.png',
            name:'Lifeme 梨木伞',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003447.png',
            name:'魅族 &nbsp; 17',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003449.png',
            name:'Lifeme 双肩包',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003451.png',
            name:'魅族 &nbsp; 17',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003453.png',
            name:'魅族防飞溅声波电动牙刷',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003455.png',
            name:'魅族防飞溅声波电动牙刷',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003457.png',
            name:'魅族 &nbsp; 17',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003459.png',
            name:'Lifeme 双肩包',
            money:'3699'
        },
        {
            img:'./img/Life around/ia_100000003461.png',
            name:'Lifeme 梨木伞',
            money:'3699'
        }
    ]
    for(var i=0;i<goods2.length;i++){
        $(`<div class='goods2'>
        <a href='#'> 
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