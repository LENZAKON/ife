/**
 * Created by Lenovo on 2017/2/28.
 */

var number = [];
var $ = function (id) {
    return document.getElementById(id);
}

function show(number) {
    var innerContent="";
    for (var i=0;i<number.length;i++){
        innerContent += "<li id='"+i+"'style='height:"+number[i]*5+"px;'>"+number[i]+"</li>";

    }
    $("result").innerHTML = innerContent;
    $("input").value = "";

}

//点击按钮添加或删除队列
$("button").addEventListener("click",function (e) {
    var target = e.target;
    var content = $("input").value;
    switch (target.id){
        case "left-in":{
            if(number.length > 60)  {
                alert("队列已经过长");
            }
            if (parseInt(content)<10 || parseInt(content)>100 || isNaN(parseInt(content))){
                alert("请输入10 - 100的数字");
            }
            else {
                number.unshift(parseInt(content));
                show(number);
            }
            break;
        }

        case "right-in":{
            if(number.length > 60)  {
                alert("队列已经过长");
            }
            if (parseInt(content)<10 || parseInt(content)>100 || isNaN(parseInt(content))){
                alert("请输入10 - 100的数字");
            }
            else {
                number.push(parseInt(content));

                show(number);
            }
            break;
        }

        case "left-out":{
            number.shift();
            show(number);
            break;
        }

        case "right-out":{
            number.pop();
            show(number);
            break;
        }

    }
})

$("result").addEventListener("click",function (e) {
    if (e.target.nodeName == "LI"){
        var tar=parseInt(e.target.getAttribute("id"))　　//得到被点击元素的id属性，之前id绑定的是该元素在数组中的序号
        number.splice(tar,1);     //删除数组number中的元素，1代表只删除一个元素
        show(number);
    }
})

//随机生成10个数
$("random").onclick = function () {
    number = [];
    for(var i = 0;i<10;i++){
        number.push(parseInt(Math.random()*90+10));
    }
    show(number);
}

//冒泡排序
$("sort").onclick = function () {
    var temp;
    for(var i = 0;i<number.length - 1;i++){
        for(var j = 0;j<number.length-1 - i;j++){
            if(number[j] > number[j+1]){
                temp = number[j];
                number[j] = number[j+1];
                number[j+1] = temp;
            }
        }
    }
    show(number);
}





