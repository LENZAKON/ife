/**
 * Created by Lenovo on 2017/3/13.
 */
var $ = function (id) {
    return document.getElementById(id);
}
var root = $("root");
var child = [];
var clearInter;
var childList = root.childNodes;
var allDiv = document.getElementsByTagName("div");

(function () {
    for (var i=0;i<childList.length;i++){
        if (childList[i].nodeType != 3){
            child.push(childList[i]);
        }
    }
})()

function reset() {
    for (var i=0;i<allDiv.length;i++){
        allDiv[i].style.backgroundColor = "white";
    }
}

/*
 改变背景颜色
 */
function changeColor(divList) {
    var i=0; //控制颜色
    clearInter = setInterval(function () {
        if (i < divList.length){
            if (i>0){
                divList[i-1].style.backgroundColor = "white";
            }
            divList[i++].style.backgroundColor = "blue";
        }else {
            clearInterval(clearInter);
            if (i >=child.length - 1){
                divList[i-1].style.backgroundColor = "white";
            }

        }

    },800);
}


//查询方法
function changeGetBC(divList,nodeText) {
    var i=0; //控制颜色
    clearInter = setInterval(function () {
        if (i < divList.length){
            if (i>0){
                divList[i-1].style.backgroundColor = "white";
            }
            if (nodeText[i].replace(/(^\s*)|(\s*$)/g,"") == $("neirong").value){
                divList[i].style.backgroundColor = "red";
                clearInterval(clearInter);
                divList = [];
                nodeText = [];
            }
            divList[i++].style.backgroundColor = "blue";
        }
        else if (i == divList.length ){
            divList[i-1].style.backgroundColor = "white";
            alert("找不到");
            i = divList.length+1;  //退出if 语句
        }

    },800);

}

//遍历操作
$("caozuo").addEventListener("click",function (e) {
    var target = e.target;
    var divList = [];
    var nodeText = [];
    switch (target.id){
        case "pre":
            reset();
            divList.push(root);
            pre_traversal(child,divList,nodeText);
            break;
        case "breadbtn":
            reset();
            divList.push(root);
            breadOrder(child,divList,nodeText);
            break;
    }
    changeColor(divList);
})

//深度查询操作
$("query").onclick = function () {
    reset();
    var divList = [];
    var nodeText = [];
    divList.push(root);
    nodeText.push(root.firstChild.nodeValue);
    pre_traversal(child,divList,nodeText);
    changeGetBC(divList,nodeText);
}

//广度查询
$("breadquery").onclick = function () {
    reset();
    var divList = [];
    var nodeText = [];
    divList.push(root);
    nodeText.push(root.firstChild.nodeValue);
    breadOrder(child,divList,nodeText);
    changeGetBC(divList,nodeText);
}

/*
 深度优先遍历
 */
function pre_traversal(child,divList,nodeText) {
    for (var i=0;i<child.length;i++){
        divList.push(child[i]);
        nodeText.push(child[i].firstChild.nodeValue);
        pre_traversal(child[i].children,divList,nodeText);
    }
}

/*
广度优先遍历
 */
function breadOrder(child,divList,nodeText) {
    for (var i=0;i<child.length;i++){
        divList.push(child[i]);
        nodeText.push(child[i].firstChild.nodeValue);
    }
    for (var i=0;i<child.length;i++)
    {
        breadOrder(child[i].children,divList,nodeText);
    }
}

//点击改变特殊格式
$("root").addEventListener("click",function (e) {
    for(var i=0;i<allDiv.length;i++){
        allDiv[i].style.backgroundColor = "white";
    }
    var targrt = e.target;
    targrt.style.backgroundColor = "green";
})

//点击删除按钮进行删除
$("delete").onclick = function () {
    for(var i=0;i<allDiv.length;i++){
        if (allDiv[i].style.backgroundColor == "green"){
            allDiv[i].parentNode.removeChild(allDiv[i]);
        }
    }
}

//点击添加
$("add").onclick = function () {
    for(var i=0;i<allDiv.length;i++){
        if (allDiv[i].style.backgroundColor == "green"){
            var content = $("add_content").value;
            var div = document.createElement("div");
            var divContent = document.createTextNode(content);
            div.appendChild(divContent);
            allDiv[i].appendChild(div);
        }
    }
}
