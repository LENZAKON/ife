/**
 * Created by Lenovo on 2017/3/5.
 */

var $ = function (id) {
    return document.getElementById(id);
}

$("lin").onclick = function () {
    $("float").style.display = "block";
    $("page").style.display = "block";
    $("con").style.display = "inline-block";
    $("lin").style.display = "none";
}

$("btn").onclick = $("float").onclick = function () {
    $("float").style.display = "none";
    $("page").style.display = "none";
    $("con").style.display = "none";
    $("lin").style.display = "block";
}



