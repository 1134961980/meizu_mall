$(function () {
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
        <a href="${'./phone.html'}" class="box_top_a">
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
        <a href="${'./acoustics.html'}" class="box_top_a">
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
        <a href="${'./Life_around.html'}" class="box_top_a">
         <img src='${lifeList[i].imgs}'>
         <span>${lifeList[i].name}</span>
         <p>${lifeList[i].money}</p>
        </a>
        </div>`).appendTo($("#life_list"))
    }

    // head 



    var adv = [
        {
            href: "#",
            imgs: './img/index/nav_pic1.png',
            name: '魅族&nbsp;11.11',
            bief: '签到赢魅族17'
        },
        {
            href: "#",
            imgs: './img/index/nav_pic2.png',
            name: '5G之家',
            bief: '电信套餐畅享大额补贴'
        },
        {
            href: "#",
            imgs: './img/index/nav_pic3.png',
            name: "魅族年度影响大赛",
            bief: "将生活一按成诗"
        },
        {
            href: "#",
            imgs: './img/index/nav_pic4.jpg',
            name: "mCycle",
            bief: "以旧换新双重礼"
        }
    ]
    for (var i = 0; i < adv.length; i++) {
        $(`<div class="box_adv">
        <a href="${adv[i].href}">
             <img src='${adv[i].imgs}'>
              <span>${adv[i].name}</span>
              <p>${adv[i].bief}</p>
              </a>
          </div>`).appendTo($("#adv_list"))
    }
    // adv


    var box_goods2 = [
        {
            href: "#",
            imgs: "./img/index/goods3.png",
            name: '魅族 17 AG星际灰',
            bief: '购机赠全新壳膜套装',
            money: '<s>￥</s>3699'
        },
        {
            href: "#",
            imgs: "./img/index/goods4.png",
            name: '魅族 17「AG原野绿」',
            bief: '购机赠全新壳膜套装',
            money: '<s>￥</s>3699'
        },
        {
            href: "#",
            imgs: "./img/index/goods3.png",
            name: '魅族 17 Pro「乌金」',
            bief: '购机赠全新壳膜套装',
            money: '<s>￥</s>4299'
        },
        {
            href: "#",
            imgs: "./img/index/goods3.png",
            name: '魅族 17 Pro「定白」',
            bief: '购机赠全新壳膜套装',
            money: '<s>￥</s>4299'
        }
    ]
    for (var i = 0; i < box_goods2.length; i++) {
        $(`<div class="box_goods2">
        <a href="${'./meizu_17_pro.html'}">
             <img src='${box_goods2[i].imgs}'>
              <span>${box_goods2[i].name}</span>
              <p>${box_goods2[i].bief}</p>
              <div class="price">${box_goods2[i].money}</div>
              </a>
          </div>`).appendTo($("#phone_goods2"))
    }
//   phone_banner
    $('#phone_banner').mouseover(function () {
        $('#phone_banner').css('opacity', '0.8')
    });
    $('#phone_banner').mouseout(function () {
        $('#phone_banner').css('opacity', '1')
    })
//  acoustics_banner
    $('#acoustics_banner').mouseover(function () {
        $('#acoustics_banner').css('opacity', '0.8')
    });
    $('#acoustics_banner').mouseout(function () {
        $('#acoustics_banner').css('opacity', '1')
    })
    

    // acoustics goods
    var  acoustics_goods=[
        {
            href:"#",
            imgs:'./img/index/headset_goods1.jpg',
            name:'魅族 EP3C 耳机',
            bief:'【价同双11 | 狂欢价89元】',
            current_price:'￥89',
            original_price:'￥129'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods5.jpg',
            name:'魅族 HD60 头戴式蓝牙耳机',
            bief:'【价同双11 | 狂欢价369元+3期免息】',
            current_price:'￥89',
            original_price:'￥129'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods9.jpg',
            name:'魅族 EP3C 耳机',
            bief:'【价同双11 | 狂欢价89元】',
            current_price:'￥369',
            original_price:'￥499'
        }
    ]
      for(var i=0;i<acoustics_goods.length;i++){
          $(`<li>
          <a href="${acoustics_goods[i].href}">
          <img src="${acoustics_goods[i].imgs}" alt="">
          <div class="part_goods_bief">
          <span>${acoustics_goods[i].name}</span>
          <p>${acoustics_goods[i].bief}</p>
          <em>
          ${acoustics_goods[i].current_price}
              <s>${acoustics_goods[i].original_price}</s>
            </em>
          </div>
          </a>
           </li>`).appendTo('#acoustics_goods_endlong')
      }
      var  acoustics_goods2=[
        {
            href:"#",
            imgs:'./img/index/headset_goods2.png',
            name:'魅族 HD60 降噪耳机',
            bief:'【价同双11 | 狂欢价799元+12期免息】',
            current_price:'￥799',
            original_price:'￥1099'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods3.png',
            name:'魅族 EP63NC 无线降噪耳机',
            bief:'【价同双11 | 狂欢价249元+3期免息】',
            current_price:'￥249',
            original_price:'￥499'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods4.png',
            name:'POP 真无线蓝牙耳机',
            bief:'【价同双11 | 狂欢价299元】',
            current_price:'￥299',
            original_price:'￥499'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods6.png',
            name:'魅族 HALO 激光蓝牙耳机',
            bief:'【价同双11 | 狂欢价309元+3期免息】',
            current_price:'￥309',
            original_price:'￥999'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods7.png',
            name:'魅族 EP63NC 无线降噪耳机',
            bief:'【价同双11 | 狂欢价249元+3期免息】',
            current_price:'￥249',
            original_price:'￥499'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods8.png',
            name:'POP 真无线蓝牙耳机',
            bief:'【价同双11 | 狂欢价299元】',
            current_price:'￥199',
            original_price:'￥499'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods12.png',
            name:'魅族 HALO 激光蓝牙耳机',
            bief:'【价同双11 | 狂欢价309元+3期免息】',
            current_price:'￥309',
            original_price:'￥999'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods11.jpg',
            name:'魅族 EP2X 耳机',
            bief:'【双11狂欢全场无门槛包邮】',
            current_price:'￥69',
            original_price:'￥129'
        },
        {
            href:"#",
            imgs:'./img/index/headset_goods10.png',
            name:'魅族 EP52 Lite 蓝牙耳机',
            bief:'生物纤维振膜 | 8小时续航 | IPX5级防水',
            current_price:'￥129',
            original_price:'￥299'
        }
    ]
    for(var i=0;i<acoustics_goods2.length;i++){
        $(`<li>
        <a href="${'./meizu_PoP2s.html'}">
        <img src="${acoustics_goods2[i].imgs}" alt="">
        <div class="part_goods_row_bief">
        <span>${acoustics_goods2[i].name}</span>
        <p>${acoustics_goods2[i].bief}</p>
        <em>
        ${acoustics_goods2[i].current_price}
            <s>${acoustics_goods2[i].original_price}</s>
          </em>
        </div>
        </a>
         </li>`).appendTo('#acoustics_goods_row')
    }
    var  part_goods=[
        {
            href:"#",
            imgs:'./img/index/parts_goods1.jpg',
            name:'魅族超充 GaN 三口充电器',
            bief:'【价同双11 | 狂欢价139元】',
            current_price:'￥139',
            original_price:'￥199'
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods5.jpg',
            name:'魅族无线超充板',
            bief:'【价同双11 | 狂欢价139元】',
            current_price:'￥139',
            original_price:'￥169'
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods13.jpg',
            name:'Pandaer 「17」系列 手机壳',
            bief:'【价同双11 | 狂欢价29元包邮】',
            current_price:'￥29',
            original_price:'￥49'
        }
    ]
      for(var i=0;i<part_goods.length;i++){
          $(`<li>
          <a href="${part_goods[i].href}">
          <img src="${part_goods[i].imgs}" alt="">
          <div class="part_goods_bief">
          <span>${part_goods[i].name}</span>
          <p>${part_goods[i].bief}</p>
          <em>
          ${part_goods[i].current_price}
              <s>${part_goods[i].original_price}</s>
            </em>
          </div>
          </a>
           </li>`).appendTo('#part_goods_endlong')
      }
      var  part_goods2=[
        {
            href:"#",
            imgs:'./img/index/parts_goods2.png',
            name:'魅族超充 GaN 三口充电器',
            bief:'【价同双11 | 狂欢价139元】',
            current_price:'￥139',
            original_price:'￥199'
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods3.png',
            name:'魅族无线超充板',
            bief:'【价同双11 | 狂欢价139元】',
            current_price:'￥139',
            original_price:'￥169'
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods4.png',
            name:'Pandaer 「17」夏日系列 壳膜套装',
            bief:'【价同双11 | 狂欢价49元包邮】',
            current_price:'￥49',
            original_price:'￥69'
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods8.png',
            name:'魅族中国红 Type-C 金属编织线',
            bief:'【双11狂欢全场无门槛包邮】',
            current_price:'￥39',
            original_price:''
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods6.png',
            name:'魅族双 USB-C 快充线',
            bief:'【价同双11 | 狂欢价39元包邮】',
            current_price:'￥39',
            original_price:'￥49'
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods7.png',
            name:'魅族 Type-C 游戏专用线',
            bief:'【双11狂欢全场无门槛包邮】',
            current_price:'￥49',
            original_price:''
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods14.png',
            name:'Pandaer 「17」系列 手机壳',
            bief:'【价同双11 | 狂欢价29元包邮】',
            current_price:'￥29',
            original_price:'￥49'
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods15.png',
            name:'魅族 Type-C 数据线',
            bief:'【双11狂欢全场无门槛包邮】',
            current_price:'￥49',
            original_price:''
        },
        {
            href:"#",
            imgs:'./img/index/parts_goods16.png',
            name:'Lifeme PD 快充线',
            bief:'【价同双11 | 狂欢价49元包邮】',
            current_price:'￥49',
            original_price:'￥69'
        }
    ]
      for(var i=0;i<part_goods2.length;i++){
          $(`<li>
          <a href="${part_goods2[i].href}">
          <img src="${part_goods2[i].imgs}" alt="">
          <div class="part_goods_row_bief">
          <span>${part_goods2[i].name}</span>
          <p>${part_goods2[i].bief}</p>
          <em>
          ${part_goods2[i].current_price}
              <s>${part_goods2[i].original_price}</s>
            </em>
          </div>
          </a>
           </li>`).appendTo('#part_goods_row')
      }
      var life_goods=[
        {
            href:"#",
            imgs:'./img/index/rim_goods5.jpg',
            name:'Lifeme 双肩包',
            bief:'【价同双11 | 狂欢价239元+加59元换购相机包】',
            current_price:'￥239',
            original_price:'￥299'
        },
        {
            href:"#",
            imgs:'./img/index/rim_goods9.jpg',
            name:'Lifeme 梨木伞',
            bief:'【双11狂欢价399元+12期免息】',
            current_price:'￥399',
            original_price:'￥499'
        }
      ]
      for(var i=0;i<life_goods.length;i++){
        $(`<li>
        <a href="${'./Life_around.html'}">
        <img src="${life_goods[i].imgs}" alt="">
        <div class="part_goods_bief">
        <span>${life_goods[i].name}</span>
        <p>${life_goods[i].bief}</p>
        <em>
        ${life_goods[i].current_price}
            <s>${life_goods[i].original_price}</s>
          </em>
        </div>
        </a>
         </li>`).appendTo('#life_goods_endlong')
      }
      var life_goods2=[
        {
            href:"#",
            imgs:'./img/index/rim_goods2.png',
            name:'魅族防飞溅声波电动牙刷',
            bief:'【价同双11 | 狂欢价179元】',
            current_price:'￥179',
            original_price:'￥299'
        },
        {
            href:"#",
            imgs:'./img/index/rim_goods3.png',
            name:'Pandaer 「17」系列 果冻包',
            bief:'【价同双11 | 狂欢价59元包邮】',
            current_price:'￥59',
            original_price:'￥99'
        },
        {
            href:"#",
            imgs:'./img/index/rim_goods6.png',
            name:'Lifeme 相机包',
            bief:'【价同双11 | 狂欢价99元】',
            current_price:'￥99',
            original_price:'￥129'
        },
        {
            href:"#",
            imgs:'./img/index/rim_goods11.png',
            name:'Pandaer 「17」系列 T恤',
            bief:'【价同双11 | 狂欢价79元包邮】',
            current_price:'￥79',
            original_price:'￥269'
        },
        {
            href:"#",
            imgs:'./img/index/rim_goods10.png',
            name:'Pandaer 魔术师帽衫',
            bief:'【价同双11 | 狂欢价169元】',
            current_price:'￥169',
            original_price:'￥399'
        },
        {
            href:"#",
            imgs:'./img/index/rim_goods8.png',
            name:'魅族声波电动牙刷刷头',
            bief:'【双11狂欢全场无门槛包邮】',
            current_price:'￥59',
            original_price:''
        }
    ]
      for(var i=0;i<life_goods2.length;i++){
        $(`<li>
        <a href="${life_goods2[i].href}">
        <img src="${life_goods2[i].imgs}" alt="">
        <div class="part_goods_row_bief">
        <span>${life_goods2[i].name}</span>
        <p>${life_goods2[i].bief}</p>
        <em>
        ${life_goods2[i].current_price}
            <s>${life_goods2[i].original_price}</s>
          </em>
        </div>
        </a>
         </li>`).appendTo('#life_goods_row')
    }
    $('#life_banner').mouseover(function () {
        $('#life_banner').css('opacity', '0.8')
    });
    $('#life_banner').mouseout(function () {
        $('#life_banner').css('opacity', '1')
    })
    var box_new=[
        {
            href:'#',
            img1:'./img/index/BBS_review1.png',
            img2:'./img/index/BBS_1_1.jpg',
            name:'我是大魔王',
            bief:'魅族 17Pro 定白率先上手体验，第一感觉就是，这很魅族！',
            model:'魅族 17Pro'
        },
        {
            href:'#',
            img1:'./img/index/BBS_review2.png',
            img2:'./img/index/BBS_1_2.jpg',
            name:'我是时间',
            bief:'不只是颜值出众，可谓是秀外慧中。',
            model:'魅族 17'
        },
        {
            href:'#',
            img1:'./img/index/BBS_review3.png',
            img2:'./img/index/BBS_1_3.jpg',
            name:'相思的泪',
            bief:'现在大家对手机拍照质量的需求越来越高，最受关注的就是焦段与画质。',
            model:'魅族 17Pro 摄影作品'
        },
        {
            href:'#',
            img1:'./img/index/BBS_review4.png',
            img2:'./img/index/BBS_1_4.jpg',
            name:'好想找老婆',
            bief:'魅族 17 Pro 6400W 全场景 AR 专业影像系统体验。',
            model:'魅族 17Pro 摄影作品'
        },
        {
            href:'#',
            img1:'./img/index/BBS_review5.png',
            img2:'./img/index/BBS_1_5.jpg',
            name:'风雨~栀子花',
            bief:'魅族 17 微距摄影，灵动绚烂。',
            model:'魅族 17 摄影作品'
        },
        {
            href:'#',
            img1:'./img/index/BBS_review6.png',
            img2:'./img/index/BBS_1_6.jpg',
            name:'三年二班邱小东',
            bief:'多一点耐心，多一点发现，多一点想象，去留意身边风景。',
            model:'魅族 17Pro 摄影作品'
        },
        {
            href:'#',
            img1:'./img/index/BBS_review7.png',
            img2:'./img/index/BBS_1_7.jpg',
            name:'幻听',
            bief:'魅族 17 Pro手持超级夜景实拍，镜头里的夜色如此美妙。',
            model:'魅族 17Pro 摄影作品'
        },
        {
            href:'#',
            img1:'./img/index/BBS_review8.png',
            img2:'./img/index/BBS_1_8.jpg',
            name:'别加香菜',
            bief:'陪你一路风光 陪你一起风光！',
            model:'魅族 情怀'
        },
    ]
    for(var i=0;i<box_new.length;i++){
        $(`<div class="box_new">
        <a href="${box_new[i].href}">
        <img src="${box_new[i].img1}" alt="">
        <div class="name_new">
        <s><img src="${box_new[i].img2}" alt=""></s>
        <i>${box_new[i].name}</i>
        </div>
        <p>${box_new[i].bief}</p>
        <span>${box_new[i].model}</span>
        </a>
        </div>`).appendTo('#community_news')
    }
    var box_trait=[
        {
            href:'#',
            imgs:'./img/index/system_list2.jpg',
            bief:'跨越使用小障碍'
        },
        {
            href:'#',
            imgs:'./img/index/system_list3.png',
            bief:'全新导入滤镜'
        },
        {
            href:'#',
            imgs:'./img/index/system_list4.png',
            bief:'全面提升续航能力'
        },
        {
            href:'#',
            imgs:'./img/index/system_list5.jpg',
            bief:'不得不知的小功能'
        },
        {
            href:'#',
            imgs:'./img/index/system_list6.jpg',
            bief:'快速挽救手机数据'
        },
        {
            href:'#',
            imgs:'./img/index/system_list7.jpg',
            bief:'全局振感，指尖回响'
        }
    ]
    for(var i=0;i<box_trait.length;i++){
        $(` <div class="box_trait">
        <a href="${box_trait[i].href}">
        <img src="${box_trait[i].imgs}" alt="">
        <span>${box_trait[i].bief}</span>
        </a>
        </div>`).appendTo('#Flyme_trait')
    }
    var box_video=[
        {
            href:'#',
            imgs:'./img/index/video1.jpg',
            bief:'以梦为舰，热爱起航：魅族 17 航母限定版重构热血旗舰'
        },
        {
            href:'#',
            imgs:'./img/index/video2.jpg',
            bief:'这艺术，科技极了：魅族 17 Pro 晓芳窑艺术典藏版'
        },
        {
            href:'#',
            imgs:'./img/index/video3.jpg',
            bief:'去噪，去躁：魅族 HD60降噪耳机'
        },
        {
            href:'#',
            imgs:'./img/index/video4.jpg',
            bief:'玩出我的热爱：魅族 16T 大屏娱乐旗舰'
        },
        {
            href:'#',
            imgs:'./img/index/video5.jpg',
            bief:'Flyme 8 概念视频'
        },
        {
            href:'#',
            imgs:'./img/index/video6.jpg',
            bief:'Flyme 8 功能视频'
        },
        {
            href:'#',
            imgs:'./img/index/video7.jpg',
            bief:'Flyme 8 功能视频'
        },
        {
            href:'#',
            imgs:'./img/index/video8.jpg',
            bief:'安全家庭'
        }  
    ]
    for(var i=0;i<box_video.length;i++){
        $(` <div class="box_video">
        <a href="${box_video[i].href}">
        <div class="video_top">
        <img src="${box_video[i].imgs}" alt="">
        <i></i>
        </div>
         <p>${box_video[i].bief}</p>
        </a>
        </div>`).appendTo('#video_show')
    }
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
    
})
