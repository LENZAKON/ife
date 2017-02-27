/**
 * Created by Lenovo on 2017/2/27.
 */

leftAdd();
rightAdd();
leftOut();
rightOut();
deldet();

//点击按钮进行添加
function leftAdd() {
    var liBtn = document.getElementById("left-in");
    var content = document.getElementById("content").value;
    var items = document.getElementsByTagName("section")[1];

    liBtn.onclick = function () {
        var content = document.getElementById("content").value;
        var item = document.getElementsByClassName("item")[0];
        //创建一个新的
        var insertItem = document.createElement("div");
        insertItem.setAttribute("class","item");
        var insertItemCon = document.createElement("p");
        insertItemCon.innerText = content;

        insertItem.appendChild(insertItemCon);
        items.insertBefore(insertItem,item);

        document.getElementById("content").value = "";
        deldet();
    }
}

function rightAdd() {

    var liBtn = document.getElementById("right-in");
    var items = document.getElementsByTagName("section")[1];

    liBtn.onclick = function () {
        var content = document.getElementById("content").value;
        var Allitem = document.getElementsByClassName("item");
        var item = Allitem[Allitem.length - 1];

        //创建一个新的
        var insertItem = document.createElement("div");
        insertItem.setAttribute("class","item");
        var insertItemCon = document.createElement("p");
        insertItemCon.innerText = content;

        insertItem.appendChild(insertItemCon);
        items.appendChild(insertItem);

        document.getElementById("content").value = "";

        deldet();
    }
}

function leftOut() {
    var liBtn = document.getElementById("left-out");

    liBtn.onclick = function () {

        var allItem = document.getElementsByClassName("item");
        var leftItem = allItem[0];

        leftItem.parentNode.removeChild(leftItem);

        document.getElementById("content").value = "";

        deldet();
    }
}

function rightOut() {
    var liBtn = document.getElementById("right-out");

    liBtn.onclick = function () {

        var allItem = document.getElementsByClassName("item");
        var rightItem = allItem[allItem.length - 1];

        rightItem.parentNode.removeChild(rightItem);

        document.getElementById("content").value = "";

        deldet();
    }
}


//点击队列进行删除
function deldet() {
    var AllItem = document.getElementsByClassName("item");
    var items = document.getElementById("items");

    for (var i = 0;i<AllItem.length;i++){

        AllItem[i].onclick = function () {
            items.removeChild(this);
        }
    }

}

