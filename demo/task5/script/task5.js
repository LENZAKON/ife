/**
 * Created by Lenovo on 2017/3/10.
 */

//绘制方框
(function () {
    var canvas_1 = document.getElementById("canvas_1");
    var ctx = canvas_1.getContext("2d");

    ctx.beginPath();

    for (var i=1;i<12;i++){
        ctx.moveTo(30,30*i);
        ctx.lineTo(330,30*i);
        ctx.moveTo(30*i,30);
        ctx.lineTo(30*i,330);
    }
    ctx.closePath();
    ctx.stroke();


    //绘制数字
    ctx.textAlign = "center";
    ctx.textBaseline = "middle"
    for (var i=1;i<11;i++){
        ctx.fillText(i,30*i+15,18);
        ctx.fillText(i,17,30*i+11);
    }
    ctx.closePath();
})();

var $ = function (id) {
    return document.getElementById(id);
}

var tar ={
    left:function () {
        var left = $("red_mod").style.left;
        var left_1 = left.split("px")[0];
        if (parseInt(left_1) > 39){
            $("red_mod").style.left = parseInt(left_1)-30+"px";
        }
    },
    top:function () {
        var top = $("red_mod").style.top;
        var top_1 = top.split("px")[0];
        if (parseInt(top_1) > 39){
            $("red_mod").style.top = parseInt(top_1)-30+"px";
        }
    },
    right:function () {
        var left = $("red_mod").style.left;
        var left_1 = left.split("px")[0];
        if (parseInt(left_1) < 309){
            $("red_mod").style.left = parseInt(left_1)+30+"px";
        }
    },
    bot:function () {
        var top = $("red_mod").style.top;
        var top_1 = top.split("px")[0];
        if (parseInt(top_1) < 309){
            $("red_mod").style.top = parseInt(top_1)+30+"px";
        }
    }

}

$("btn").addEventListener("click",function () {

            switch ($("order").value) {
                case "TRA LEF":
                    tar.left();
                    break;
                case "TRA TOP":
                    tar.top();
                    break;
                case "TRA RIG":
                    tar.right();
                    break;
                case "TRA BOT":
                    tar.bot();
                    break;
                case "MOV LEF":
                    tar.left();
                    $("red_mod").style.transform = "rotate(-90deg)";
                    break;
                case "MOV TOP":
                    tar.top();
                    $("red_mod").style.transform = "rotate(0deg)";
                    break;
                case "MOV RIG":
                    tar.right();
                    $("red_mod").style.transform = "rotate(90deg)";
                    break;
                case "MOV BOT":
                    tar.bot();
                    $("red_mod").style.transform = "rotate(180deg)";
                    break;

            }
})
