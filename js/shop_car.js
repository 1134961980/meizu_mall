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
})