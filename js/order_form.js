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
   var pList = [
    {
        href: "#",
        imgs: './img/index/ia_300000123.jpg',
        name: "魅族 17「AG梦幻独角兽」",
        money: "￥3699"
    },
    {
        href: "#",
        imgs: './img/index/ia_300000124.jpg',
        name: '魅族 17「AG星际灰」',
        money: '￥3699'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000125.jpg',
        name: '魅族 17「AG原野绿」',
        money: '￥3699'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000126.jpg',
        name: '魅族 17 Pro「月白天青」',
        money: '￥4299'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000127.jpg',
        name: '魅族 17 Pro「天青」',
        money: '￥4299'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000124.jpg',
        name: '魅族 17 Pro「乌金」',
        money: '￥4299'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000124.jpg',
        name: '魅族 17 Pro「定白」',
        money: '￥4299'
    }
]
for (var i = 0; i < pList.length; i++) {
    $(`<div class=box_top>
    <a href="${pList[i].href}" class="box_top_a">
     <img src='${pList[i].imgs}'>
     <span>${pList[i].name}</span>
     <p>${pList[i].money}</p>
    </a>
    </div>`).appendTo($("#phone_list"))
}

var aList = [
    {
        href: "#",
        imgs: './img/index/ia_300000130.jpg',
        name: '【新品】魅族 POP2s 真无线耳机',
        money: '￥299'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000131.jpg',
        name: '【新品】MEIZU UR LIVE 特调版',
        money: '￥1299'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000132.jpg',
        name: '魅族 HD60 降噪耳机',
        money: '￥799'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000133.jpg',
        name: '魅族 HD60 头戴式蓝牙耳机',
        money: '￥369'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000134.jpg',
        name: '魅族 HIFI 解码耳放',
        money: '￥99'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000135.jpg',
        name: '魅族 EP63NC 无线降噪耳机 ',
        money: '￥249'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000136.jpg',
        name: '魅族 EP3C 耳机',
        money: '￥89'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000137.jpg',
        name: 'MEIZU UR 高端定制耳机  预约',
        money: '￥200'
    }
]
for (var i = 0; i < aList.length; i++) {
    $(`<div class=box_top>
    <a href="${aList[i].href}" class="box_top_a">
     <img src='${aList[i].imgs}'>
     <span>${aList[i].name}</span>
     <p>${aList[i].money}</p>
    </a>
    </div>`).appendTo($("#acoustics_list"))
}
var partList = [
    {
        href: "#",
        imgs: './img/index/ia_300000138.jpg',
        name: '魅族超充 USB-C 移动电源',
        money: '￥139'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000139.jpg',
        name: '魅族超充 GaN 三口充电器',
        money: '￥139'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000140.jpg',
        name: '魅族无线超充板',
        money: '￥139'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000141.jpg',
        name: 'Pandaer 「17」夏日系列 壳膜套装',
        money: '￥49'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000142.jpg',
        name: 'Pandaer 「17」系列 手机壳',
        money: '￥29'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000143.jpg',
        name: '魅族 17 系列 液态硅胶壳',
        money: '￥89'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000144.jpg',
        name: '魅族 Type-C 数据线',
        money: '￥49'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000145.jpg',
        name: '魅族双 USB-C 快充线',
        money: '￥39'
    }
]
for (var i = 0; i < partList.length; i++) {
    $(`<div class=box_top>
    <a href="${partList[i].href}" class="box_top_a">
     <img src='${partList[i].imgs}'>
     <span>${partList[i].name}</span>
     <p>${partList[i].money}</p>
    </a>
    </div>`).appendTo($("#part_list"))
}
var lifeList = [
    {
        href: "#",
        imgs: './img/index/ia_300000146.jpg',
        name: 'Lifeme 双肩包',
        money: '￥239'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000147.jpg',
        name: 'Pandaer 「17」系列 T恤',
        money: '￥269'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000148.jpg',
        name: 'Pandaer 「17」系列 果冻包',
        money: '￥59'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000149.jpg',
        name: '【新品】Lifeme 相机包',
        money: '￥99'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000150.jpg',
        name: '魅族防飞溅声波电动牙刷',
        money: '￥179'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000151.jpg',
        name: '魅族极简都市双肩包',
        money: '￥179'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000152.jpg',
        name: 'Pandaer readnap T恤',
        money: '￥199'
    },
    {
        href: "#",
        imgs: './img/index/ia_300000153.jpg',
        name: 'Flyme 8 暗夜流光卫衣 ',
        money: '￥269'
    }
]
for (var i = 0; i < lifeList.length; i++) {
    $(`<div class=box_top>
    <a href="${lifeList[i].href}" class="box_top_a">
     <img src='${lifeList[i].imgs}'>
     <span>${lifeList[i].name}</span>
     <p>${lifeList[i].money}</p>
    </a>
    </div>`).appendTo($("#life_list"))
} 
$('.name input').blur(function(){
    var name=$('.name input').val()
    if(name.length>15){
        $('.name input').val('请输入正确地名字')
        $('.name input').css({
            color:'red'
        })
    }else{
        $('.name input').css({
            color:'#666'
        })
    }
})
$('.phone_num input').change(function(){
    var name=$('.phone_num input').val()
    if(name.length>11){
        $('.phone_num input').val('请输入正确地号码')
        $('.phone_num input').css({
            color:'red'
        })
    }else{
        $('.phone_num input').css({
            color:'#666'
        })
    }
})






$('.address').mouseover(function(){
   $(this).css({
     border:'1px solid #00c3f5'
   })
 })
 $('.address').mouseout(function(){
    $(this).css({
      border:'1px solid #eee'
    })
  })
  $('.sure').click(function(){
      if($('.address').length>=8){
          return
      }
      if($('.check_box').prop('checked')==true){
        $(`<div class="address">
        <ul>
        <li class="address_name">${$('.name input').val()}</li>
        <li class="address_locat">${$('.sild_con24 input').val()}</li>
        <li class="address_num">${$('.phone_num input').val()}</li>
        <li class="address_del"><i>修改</i>/<i class="del">删除</i></li>
        <span>设为默认</span>
        </ul>
       </div>`).prependTo($('.address_area'))
      }else {$(`<div class="address">
       <ul>
       <li class="address_name">${$('.name input').val()}</li>
       <li class="address_locat">${$('.sild_con24 input').val()}</li>
       <li class="address_num">${$('.phone_num input').val()}</li>
       <li class="address_del"><i>修改</i>/<i class="del">删除</i></li>
       <span>设为默认</span>
       </ul>
      </div>`).appendTo($('.address_area'))}
  })

  $('body').on('click','.del',function(){
    $(this).parent().parent().remove();
   })
   $('body').on('click','.amend',function(){
      address_name=$(this).parent().siblings('.address_name')
      address_locat=$(this).parent().siblings('.address_locat')
      address_num=$(this).parent().siblings('.address_num')
       $('.alert_name input').val($(this).parent().siblings('.address_name').html());
       $('.alert_locat input').val($(this).parent().siblings('.address_locat').html());
       $('.alert_num input').val($(this).parent().siblings('.address_num').html());
        alert_show();
   })

   $('.alert_sure').click(function(){
      alert_none();
      address_name.html($('.alert_name input').val());
      address_locat.html($('.alert_locat input').val());
      address_num.html($('.alert_num input').val())
   })
   $('.alert_cancel').click(function(){
    alert_none();
   })
   function alert_show(){
    $('.alert_address').css({
        display:'block'
    });
    $('.cover').css({
        display:'block',
        height:document.body.clientHeight+'px'
    })
   }
   function alert_none(){
    $('.alert_address').css({
        display:'none'
    });
    $('.cover').css({
        display:'none',
        height:''
    })
   }

   $('body').on('mouseover','.address',function(){
    $(this).children().children('span').css('display','inline-block')
  })
  $('body').on('mouseout','.address',function(){
    $(this).children().children('span').css('display','none')
  })
  $('body').on('click','.address span',function(){
      $('.address span').html('设为默认')
      $(this).html('默认地址')
      $(this).parent().parent().prependTo($('.address_area'))
  })
  




//    切换订单导航栏
   $('.Otitle_1 li').click(function(){
    $('.Otitle_1 li').css({
        color: '#666',
        border:'0'
    })
    $(this).css({
        color: '#00c3f5',
        'border-bottom': 'solid 2px #00c3f5'
    })
      if($(this).index()>1){
        $('.blank').css('display','block')
      }else{
        $('.blank').css('display','none')
      }
   })
    
function pay_show(){
    $('.sild_con2').css({
        display:'none'
    });
    $('.order_mine').css({
     display:'block'
 })
}
function locat_show(){
    $('.sild_con2').css({
        display:'block'
    });
    $('.order_mine').css({
     display:'none'
 })
}

   //切换订单和地址
   $('.location_3').click(function(){
       if($(this).index()==1){
        pay_show()
        $(this).css('color','#00c3f5');
        $('.location_3').eq(1).css('color','#666')
       }
       if($(this).index()==4){
        locat_show()
        $(this).css('color','#00c3f5');
        $('.location_3').eq(0).css('color','#666')
    }
   })

    // 取消订单
     $('.no_pay').click(function(){
         $('.pic_word').html('')
     })
 

//    获取当前时间
var myDate = new Date;
var year = myDate.getFullYear(); //获取当前年
var mon = myDate.getMonth() + 1; //获取当前月
var date = myDate.getDate(); //获取当前日
var h = myDate.getHours();//获取当前小时数(0-23)
var m = myDate.getMinutes();//获取当前分钟数(0-59)
var s = myDate.getSeconds();//获取当前秒
var week = myDate.getDay();
var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
$("#time").html(year + "-" + mon + "-" + date +'\xa0\xa0\xa0\xa0'+h+':'+m+':'+ s + weeks[week]);



var footstep_serve=[
    {
        href:'#',
        imgs:'./img/index/foot1.png',
        bief:'满90免运费'
    },
    {
        href:'#',
        imgs:'./img/index/foot2.png',
        bief:'100+ 城市次日送达'
    },
    {
        href:'#',
        imgs:'./img/index/foot3.png',
        bief:'7天无理由退货'
    },
    {
        href:'#',
        imgs:'./img/index/foot4.png',
        bief:'15天换货保障'
    },
    {
        href:'#',
        imgs:'./img/index/foot5.png',
        bief:'1年免费保修'
    },
    {
        href:'#',
        imgs:'./img/index/foot6.png',
        bief:'上门快修'
    }
]
for(var i=0;i<footstep_serve.length;i++){
    $(`<li>
    <a href="${footstep_serve[i].href}">
    <img src="${footstep_serve[i].imgs}" alt="">
    <span>${footstep_serve[i].bief}</span>
    </a>
    </li>`).appendTo('#footstep_serve')
}

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