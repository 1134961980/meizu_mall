$(function(){
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