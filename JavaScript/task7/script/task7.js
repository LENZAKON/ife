/**
 * Created by Lenovo on 2017/3/12.
 */
var $ = function (id) {
    return document.getElementById(id);
}
var root = $("root");
var child = root.children;
var clearInter;     //清除定时

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
             divList[i-1].style.backgroundColor = "white";
        }

    },800);
}

/*
为按钮设置监听事件
 */

$("caozuo").addEventListener("click",function (e) {
    var target = e.target;
    var divList = [];
    switch (target.id){
        case "pre":
            divList.push(root);
            pre_traversal(child,divList);
            break;

        case "cen":
            cen_traversal(root,divList);
            break;

        case "aft":
            aft_traversal(root,divList);
            break;
    }
    changeColor(divList);

})

/*
先序遍历
 */
function pre_traversal(child,divList) {
    for (var i=0;i<child.length;i++){
        divList.push(child[i]);
        pre_traversal(child[i].children,divList);
    }
}

/*
中序遍历
 */
function cen_traversal(root,divList) {
    if (root){
        cen_traversal(root.firstElementChild,divList);
        divList.push(root);
        cen_traversal(root.lastElementChild,divList);
    }
}

/*
后序遍历
 */
function aft_traversal(root,divList) {
    if (root){
        aft_traversal(root.firstElementChild,divList);
        aft_traversal(root.lastElementChild,divList);
        divList.push(root);
    }
}