$(function () {
    var select_bo = true;
    $('#select_num').click(function () {
        if (select_bo == true) {
            $('#phone_all').stop().animate({ width: 295, height: 220 })
            $('#phone_all').css('display', 'block')
            select_bo = false;
        } else {
            $('#phone_all').stop().animate({ width: 0, height: 0 })
            $('#phone_all').css('display', 'none')
            select_bo = true;
        }
    })
    $('.big_cir').mousemove(function () {
        $('.big_cir').stop().animate({ width: 18, height: 18 }).animate({ width: 25, height: 25 })
    })
    $('.big_cir').mouseout(function () {
        $('.big_cir').stop().animate({ width: 25, height: 25 })
    })
    $('#xinLang').mouseover(function () {
        $('#xinLang').attr('src', './img/register/xinlang2.png')
    })
    $('#xinLang').mouseout(function () {
        $('#xinLang').attr('src', './img/register/xinlang1.png')
    })
    $('#weiXin').mouseover(function () {
        $('#weiXin').attr('src', './img/register/weixin2.png')
        $('.big_wei').css('display', 'block')
    })
    $('#weiXin').mouseout(function () {
        $('#weiXin').attr('src', './img/register/weixin1.png')
        $('.big_wei').css('display', 'none')
    })
    $('#QQ').mouseover(function () {
        $('#QQ').attr('src', './img/register/qq2.png')
    })
    $('#QQ').mouseout(function () {
        $('#QQ').attr('src', './img/register/qq1.png')
    })
    //更改国家号码
    $('#phone_all li').click(function (e) {
        console.log()
        $('#num').html($(this).children().html());
    });
    // 验证国家号码
    var re = 0;
    function verify_num() {
        if ($('#num').html() == 86) {
            re = /^(\+?0?86\-?)?1[345789]\d{9}$/;
            return re.test($('#cell_phone_number').val())
        }
        if ($('#num').html() == 886) {
            re = /^(\+?886\-?|0)?9\d{8}$/;
            console.log(re)
            return re.test($('#cell_phone_number').val())
        }
        if ($('#num').html() == 55) {
            re = /^(00){0,1}(55){1}\d{6,12}$/;
            return re.test($('#cell_phone_number').val())
        }
        if ($('#num').html() == 91) {
            re = /^(00){0,1}(91){1}\d{6,12}$/;
            return re.test($('#cell_phone_number').val())
        }
        if ($('#num').html() == 82) {
            re = /^(00){0,1}(82){1}0{0,1}[7,1](?:\d{8}|\d{9})$/;
            return re.test($('#cell_phone_number').val())
        }
    }
    $(".big_cir").click(function () {
        if(verify_num()==true){
            $('.hint').html('号码正确');
            $('.verify').css({
                display:'none'
            })
            $('.yanzheng').css({
                display:'block'
            })
            a=setInterval(timer,1000)
        }else{
            $('.hint').html('号码格式错误')
        }
    })
     var  timer_num=60;
     function timer(){
         --timer_num
        $('.timer').html(timer_num +'秒')
        if(timer_num<=0){
            clearInterval(a)
        }
     }


    //切换登录
    $('.computer').click(function(){
        $('.box_register').css('display','none');
        $('.box_register2').css('display','block')
    });
    $('.phone_click').click(function(){
        $('.box_register2').css('display','none')
        $('.box_register').css('display','block');
    })

    // 账号登录和二维码登录
    $('.phone_number_login').click(function(){
        $('.two-dimensional_code').css('display','none')
    });
    $('.two-dimensional_login').click(function(){
        $('.two-dimensional_code').css('display','block')
    })
})