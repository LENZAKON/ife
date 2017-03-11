/**
 * Created by Lenovo on 2017/3/10.
 */
var direction = ["front", "right", "back", "left"];//正面所对应的方向
var dir = 0;//方向下标

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


$("btn").addEventListener("click",function () {

            switch ($("order").value) {
                case "Go":
                    var top = $("red_mod").style.top;
                    var top_1 = top.split("px")[0];
                    var left = $("red_mod").style.left;
                    var left_1 = left.split("px")[0];
                    if (direction[dir] == "right" && parseInt(left_1) < 309){
                        $("red_mod").style.left = parseInt(left_1)+30+"px";
                    }
                    if (direction[dir] == "left" && parseInt(left_1) > 39){
                        $("red_mod").style.left = parseInt(left_1)-30+"px";
                    }
                    if (direction[dir] == "front" && parseInt(top_1) > 39){
                        $("red_mod").style.top = parseInt(top_1)-30+"px";
                    }
                    if (direction[dir] == "back" && parseInt(top_1) < 309){
                        $("red_mod").style.top = parseInt(top_1)+30+"px";
                    }
                    break;

                case "TUN RIG":
                    var trans = $("red_mod").style.transform;
                    var spl_1 = trans.split("rotate(");
                    var spl_2 = spl_1[1].split("dge)");
                     $("red_mod").style.transform = "rotate("+(parseInt(spl_2[0])+90)+"deg)";
                     dir++;
                     dir = dir%4;
                    break;

                case "TUN LEF":
                    var trans = $("red_mod").style.transform;
                    var spl_1 = trans.split("rotate(");
                    var spl_2 = spl_1[1].split("dge)");
                     $("red_mod").style.transform = "rotate("+(parseInt(spl_2[0])-90)+"deg)";
                     dir--;
                     if (dir<0) dir = dir+4;
                    break;

                case "TUN BAC":
                    var trans = $("red_mod").style.transform;
                    var spl_1 = trans.split("rotate(");
                    var spl_2 = spl_1[1].split("dge)");
                    $("red_mod").style.transform = "rotate("+(parseInt(spl_2[0])+180)+"deg)";
                    dir = dir-2;
                    if (dir<0) dir = dir+4;
                    break;
            }

})


