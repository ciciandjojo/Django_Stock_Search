var RADIUS = 2,//定义圆半径
MarginTop = 10,//距离上面的位置
MarfinLeft = 15,//距离左边的位置
COLOR = '#ff7a51';//球的颜色
window.onload = function() {
var canvas = document.getElementById('canvas');
canvas.width = '350';//画布大小
canvas.height = '70';
var context = canvas.getContext('2d');

setInterval(function(){//定时器
    var d = new Date();
    var h = d.getHours(); 
    var m = d.getMinutes();
    var s = d.getSeconds();
    canvas.height = canvas.height;
    render(context,h,m,s);
},1000); 
}
function render(cxt,h,m,s) {//画球
renderDigit(MarfinLeft ,  MarginTop, parseInt(h/10) , cxt)
renderDigit(MarfinLeft+15*(RADIUS+1), MarginTop, parseInt(h%10), cxt)
renderDigit(MarfinLeft+30*(RADIUS+1), MarginTop, 10, cxt)
renderDigit(MarfinLeft+39*(RADIUS+1), MarginTop, parseInt(m/10) , cxt)
renderDigit(MarfinLeft+54*(RADIUS+1), MarginTop, parseInt(m%10) , cxt)
renderDigit(MarfinLeft+69*(RADIUS+1), MarginTop, 10, cxt)
renderDigit(MarfinLeft+78*(RADIUS+1), MarginTop, parseInt(s/10) , cxt)
renderDigit(MarfinLeft+93*(RADIUS+1), MarginTop, parseInt(s%10) , cxt)
}
function renderDigit(x, y, num, cxt) {//每个数字的画法
cxt.fillStyle=COLOR;
for(var i = 0; i < digit[num].length; i ++ ) {
    for(var j = 0; j < digit[i].length; j++ ) {
        if(digit[num][i][j] == 1) {
            cxt.beginPath();
            cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
            cxt.closePath();
            cxt.fill();
        }
    }
}

}