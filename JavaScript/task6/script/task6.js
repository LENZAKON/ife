/**
 * Created by Lenovo on 2017/3/3.
 */

var number = [];
var $ = function (id) {
    return document.getElementById(id);
}

function showRight() {

    for (var i = 0;i<number.length;i++){
        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("id","item");

        var innerP = document.createElement("p");
        innerP.innerText = number[i];

        innerDiv.appendChild(innerP);
        $("items").appendChild(innerDiv);

    }
     $("input").value = "";
}

function showLeft() {
    for (var i = number.length-1 ;i>=0;i--){

        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("id","item");

        var innerP = document.createElement("p");
        innerP.innerText = number[i];

        innerDiv.appendChild(innerP);
        var firstItem = document.getElementsByTagName("div")[0];
        $("items").insertBefore(innerDiv,firstItem);

    }
    $("input").value = "";
}

//分割字符串
function splicString() {
    var content = $("input").value;
    var con = content.split(/[\s\n\r，,、\t ]/g);
    number = con;

}

$("buttom").addEventListener("click",function (e) {
    var taget = e.target;
    switch (taget.id){
        case "left-in":
            splicString();
            showLeft();
            break;
        case "right-in":
            splicString();
            showRight();
            break;
        case "left-out":
            var leftItem = document.getElementsByTagName("div")[0];
            $("items").removeChild(leftItem);
            break;
        case "right-out":
            var allItem = document.getElementsByTagName("div");
            var rightItem = allItem[allItem.length - 1];
            $("items").removeChild(rightItem);
            break;
    }
})


//模糊查询，修改字体颜色
$("query-button").onclick = function () {
    var queryCon = $("query").value;
    var content = [];
    var tagP = document.getElementsByTagName("p");
    for (var i=0;i<tagP.length;i++){
        content.push(tagP[i].innerText);
    }
    for (var i=0;i<content.length;i++){
        if(content[i].search(queryCon) != -1){
            tagP[i].setAttribute("style","color:white");
        }
    }
    $("query").value = "";
}


