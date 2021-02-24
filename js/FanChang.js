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
    var goods=[
        {
            href:'#',
            img:'./img/index/headset_goods11.jpg',
            name:'魅族 HIFI 解码耳放',
            bief:'高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐发烧友必备',
            money:'￥99',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/headset_goods12.png',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/headset_goods2.png',
            name:'EP63NC 无线降噪耳机',
            bief:'AMS 芯片智能降噪 | Qualcomm apt-X™ 高清音质 | 蓝牙一拖二连接 | 11小时超长续航 | 快充15分钟畅听3小时',
            money:'￥109',
            money2:'￥199'
        },
        {
            href:'#',
            img:'./img/index/headset_goods3.png',
            name:'HD60 头戴式蓝牙耳机',
            bief:'40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/headset_goods4.png',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/headset_goods5.jpg',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/headset_goods6.png',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/headset_goods12.png',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/rim_goods7.png',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/rim_goods5.jpg',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/rim_goods9.jpg',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        },
        {
            href:'#',
            img:'./img/index/rim_goods6.png',
            name:'魅族无线超充板',
            bief:'魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
            money:'￥139',
            money2:'￥169'
        }
    ]
    for(var i=0;i<goods.length;i++){
        $(`<div class=goods>
        <a href="${goods[i].href}">
         <img src='${goods[i].img}'>
         <span>${goods[i].name}</span>
         <p>${goods[i].bief}</p>
         <div class="money">
         <i>${goods[i].money}</i>
        <s>${goods[i].money2}</s>
        </div>
        <div class="shop">立即购买</div>
        </a>
        </div>`).appendTo($("#shop_goods"))
    }
        $(window).mousemove(function(){
         console.log($(document).scrollTop());
         if($(document).scrollTop()>514){
            $('#sild_nav').css({
                display:'block',
                position: 'fixed',
                top:'60px',
                right: '50px'
            }) 
         }else{
            $('#sild_nav').css({
                display:'none',
                position: 'absolute',
                top:'514px',
                right: '50px'
            }) 
         }
     })
})