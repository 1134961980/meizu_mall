
//封装一个函数，选出全部符合条件的类名，给一个新数组  解决ie8不兼容问题
function elementsByClassName(nodes, classStr) {  //nodes 父盒子   classStr要找的类名
    var oDiv = nodes.getElementsByTagName('*');  // *全部的
    var res = [];
    for (var i = 0; i < oDiv.length; i++) {
        if (oDiv[i].className == classStr) {
            res.push(oDiv[i])
        }
    }
    return res;
}

//得到html中的节点
function $(str) {
    switch (str.charAt(0)) {
        case '#':
            return document.getElementById(str.slice(1));
            break;
        case '.':
            return elementsByClassName(document, str.slice(1));
            break;
        case '[':
            return document.getElementsByName(str.slice(6, str.length - 1))
            break;
        default:
            if(document.getElementsByTagName(str).length==1){
                solo=document.getElementsByTagName(str)[0]
                return solo;
            }
            return document.getElementsByTagName(str)
    }
}

// 获取两个数之间的随机数
function random_num(a, b) {
    if (a > b) {
        max = a;
        a = b;
        b = max;
    }
    var c = parseInt(Math.random() * (b - (a - 1)) + a);
    return c
}

//  显示当前时间，格式为（*年*月*日  星期*  *：*：*）
function replenish_0(n){
      return n<10? '0'+n:n
}
function mine_time() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var day = d.getDay();
    var week = ['日', '一', '二', '三', '四', '五', '六']
    return year + '年' +replenish_0( month) + '月' +replenish_0(date) + '日' + ' '
        + '星期' + week[day] + replenish_0(hour) + ':' + replenish_0(min) + ':' + replenish_0(sec);
}

//随机选色
function colors() {
    var a = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")"
    return a ;
}

// 获取 数据类型
// var toStr=Object.prototype.toString;
// 用法
// console.log(toStr.call('数据').slice(8,-1))
function getType(val){
    return  Object.prototype.toString.call(val).slice(8,-1)
}

// 盒子拖拽
function  run(dom){
        dom.onmousedown=function(e){
            var mLeft=e.clientX-this.offsetLeft;
            var mTop=e.clientY-this.offsetTop;
           dom.onmousemove=function(e){
               dom.style.left=e.clientX-mLeft+'px'
               dom.style.top=e.clientY-mTop+'px'
           
        }
        dom.onmouseup=function(){
            dom.onmousemove='null'
         }
      }
    }