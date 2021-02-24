$(function () {

    $('#User_mall').mouseover(function () {
        $('#extend').css({
            transform: ' rotateX(180deg)'
        })
        $("#user_dw").css({
            display: 'block'
        })
    });
    $('#nav_r').mouseout(function () {
        $('#extend').css({
            transform: ' rotateX(0)'
        })
        $("#user_dw").css({
            display: 'none'
        })
    })
    var goods = [
        {
            img: './img/Flyme/phone_goods.png',
            name: '魅族 17 pro',
            bief: '全网通公开版 定白 12+256GB',
            money: '4699.00'
        },
        {
            img: './img/Flyme/bag.png',
            name: 'Lifeme 双肩包',
            bief: '森林',
            money: '239.00'
        }
    ]
    for (var i = 0; i < goods.length; i++) {
        $(`<div class='goods_news'>
        <div class="discounts" id="discounts">
         <div class="price_raise">加价购</div>
         <div class="raise_word">
         <span>另加29元起，即可换购超值商品</span>
          <i><a href="#">立即加购 ></a></i>
         </div>
        </div>
        <div class="good" id="good">
        <input type="checkbox" class="chose chose_1">
        <div class="phone_type">
             <div class="goods_pic">
             <img src="${goods[i].img}" alt="">
          </div> 
          <div class="type_word">
          <span>${goods[i].name}</span>
          <i>${goods[i].bief}</i>
          </div>
          </div>
          <div class='good_r'>
            <div class="money">
            ￥<span>${goods[i].money}</span>
                </div>
                <div class="phone_num">
                    <div class="subtract">-</div>
                    <input type="text" class="quantity" id="quantity" value="1">
                    <div class="plus">+</div>
                </div>
                <div class="money2" id="money2">
                  ￥ <span>${goods[i].money}</span>
                </div>
                <div class="compile" id="compile">
                    <span>--</span>
             </div>
            </div> 
            </div> 
          </div>`).appendTo('.order2')
    }
    // 复选框
    // 商品总数
    function price() {
        var total = 0
        for (var i = 0; i < $('.money2').length; i++) {
            if ($('.chose').eq(i + 2).prop('checked') == true) {
                total += Number($('.money2').eq(i).children('span').html())
            }
        }
        return total + '.00'
    }

    //删除
    var del_bo = true;
    $('#cap_r .last').click(function () {
        if (del_bo == true) {
            $('#cap_r .last').html('完成');
            $('#compile span').html('删除')
            del_bo = false;
        } else {
            $('#cap_r .last').html('编辑');
            $('#compile span').html('--')
            del_bo = true;
        }
    })
    $('#compile span').click(function () {
        if ($(this).html() == '删除') {
            $(this).parent().parent().parent().parent().eq(0).html('')

            $('#aggregate').html(Number($('#aggregate').html()) - Number($(this).parent().siblings('.money2').children('span').html()))
            if ($('#aggregate').html() < 0) {
                $('#aggregate').html('0.00')
            }
        }
    })

    $('.goods_del').click(function () {
        for (var i = 0; i < $('.chose_1').length; i++) {
            if ($('.chose_1').eq(i).prop('checked') == true) {
                $('#aggregate').html(Number($('#aggregate').html()) - Number($('.chose_1').eq(i).siblings('.good_r').children('.money2').children('span').html()))
                $('.chose_1').eq(i).parent().parent().eq(i).html('')
                if ($('#aggregate').html() < 0) {
                    $('#aggregate').html('0.00')
                }
            }
        }
    })
    $('.chose').change(function () {
        var chose_num = Number($('.chose_num').html());
        var aggregate = Number($('#aggregate').html());
        var aggregate1 = Number($(this).siblings('.good_r').children('.money2').children('span').html())
        if ($(this).prop('checked') == true) {
            $('.chose_num').html(++chose_num)
            $('#aggregate').html(aggregate + aggregate1 + '.00')
        } else {
            $('.chose_num').html(--chose_num)
            $('#aggregate').html(aggregate - aggregate1 + '.00')                
        }
    })
    $('.chose').eq(0).change(function (e) {
        var check = $(this).prop('checked')
        $('.chose').prop('checked', check)
        if ($('.chose').eq(0).prop('checked') == true) {
            $('.chose_num').html(goods.length)
            $('#aggregate').html(price())
        } else {
            $('.chose_num').html('0')
            $('#aggregate').html('0.00')
        }
    })
    $('.chose').eq($('.chose').length - 1).change(function (e) {
        var check = $(this).prop('checked')
        $('.chose').prop('checked', check)
        if ($('.chose').eq($('.chose').length - 1).prop('checked') == true) {
            $('#aggregate').html(price())
            $('.chose_num').html(goods.length)
        } else {
            $('#aggregate').html('0.00')
            $('.chose_num').html('0')
        }
    })
    $('.chose').change(function () {
        var num = 0;
        for (var i = 0; i < $('.chose_1').length; i++) {
            if ($('.chose_1').eq(i).prop('checked') == true) {
                ++num
            }
        }
        if (num == $('.chose_1').length) {
            $('.chose').eq(0).prop('checked', true)
            $('.chose').eq($('.chose').length - 1).prop('checked', true)
        } else {
            $('.chose').eq(0).prop('checked', false)
            $('.chose').eq($('.chose').length - 1).prop('checked', false)
        }
    })
    // 商品数量和价格
    var num = 1;
    $('.subtract').click(function () {
        if (num < 2) {
            num = 2;
        }
        $(this).parent().children('.quantity').val(--num)
        $(this).parent().siblings('.money2').children('span').html(num * Number($(this).parent().siblings('.money').children('span').html()) + '.00')
        if ($(this).parent().parent().siblings('.chose').prop('checked') == true) {
            console.log(price())
            $('#aggregate').html(price())
        }
    })
    $('.plus').click(function () {
        $(this).parent().children('.quantity').val(++num)
        $(this).parent().siblings('.money2').children('span').html(num * Number($(this).parent().siblings('.money').children('span').html()) + '.00')
        if ($(this).parent().parent().siblings('.chose').prop('checked') == true) {
            $('#aggregate').html(price())
        }
    })
    $('.quantity').change(function () {
        num = $('.quantity').val()
        $(this).parent().siblings('.money2').children('span').html(num * Number($(this).parent().siblings('.money').children('span').html()) + '.00')
        if ($(this).parent().parent().siblings('.chose').prop('checked') == true) {
            $('#aggregate').html(price())
        }
    })

    $(window).mousemove(function () {
        if ($(window).scrollTop() > 50) {
            $('.goods_all').css({
                position: 'relative',
                left: '0'
            })
        }
        if (Number($('#aggregate').html()) != 0) {
            $('.goods_discounts span').css({
                background: '#E02B41'
            })
        } else {
            $('.goods_discounts span').css({
                background: '#999'
            })
        }
        if ($(window).scrollTop() < 50) {
            $('.goods_all').css({
                position: 'fixed',
                bottom: '0',
                left: '55px'
            })
        }
    })

    var footstep_serve = [
        {
            href: '#',
            imgs: './img/index/foot1.png',
            bief: '满90免运费'
        },
        {
            href: '#',
            imgs: './img/index/foot2.png',
            bief: '100+ 城市次日送达'
        },
        {
            href: '#',
            imgs: './img/index/foot3.png',
            bief: '7天无理由退货'
        },
        {
            href: '#',
            imgs: './img/index/foot4.png',
            bief: '15天换货保障'
        },
        {
            href: '#',
            imgs: './img/index/foot5.png',
            bief: '1年免费保修'
        },
        {
            href: '#',
            imgs: './img/index/foot6.png',
            bief: '上门快修'
        }
    ]
    for (var i = 0; i < footstep_serve.length; i++) {
        $(`<li>
        <a href="${footstep_serve[i].href}">
        <img src="${footstep_serve[i].imgs}" alt="">
        <span>${footstep_serve[i].bief}</span>
        </a>
        </li>`).appendTo('#footstep_serve')
    }
    // 分享换色
    $('.share1 img').mouseover(function () {
        $(this).attr('src', './img/index/share1 (2).png')
        $('.xiao_big').css('display', 'block')
    })
    $('.share1 img').mouseout(function () {
        $(this).attr('src', './img/index/weixiao.png')
        $('.xiao_big').css('display', 'none')
    })
    $('.share2 img').mouseover(function () {
        $(this).attr('src', './img/index/weixin2.png')
        $('.wei_big').css('display', 'block')
    })
    $('.share2 img').mouseout(function () {
        $(this).attr('src', './img/index/weixin1.png')
        $('.wei_big').css('display', 'none')
    })
    $('.share3 img').mouseover(function () {
        $(this).attr('src', './img/index/qq2.png')
    })
    $('.share3 img').mouseout(function () {
        $(this).attr('src', './img/index/qq1.png')
    })
    $('.share4 img').mouseover(function () {
        $(this).attr('src', './img/index/xinlang2.png')
    })
    $('.share4 img').mouseout(function () {
        $(this).attr('src', './img/index/xinlang1.png')
    })
})