/**
 * Created by Lenovo on 2017/3/4.
 */
var $ = function (id) {
    return document.getElementById(id);
}

//获得焦点函数
focus();
function focus() {
    var sectionItems = document.getElementsByTagName("section");

    for (var i = 0;i<sectionItems.length;i++){
        sectionItems[i].addEventListener("focusin",function (e) {
            var target = e.target;
            switch (target.id){
                case "name":
                    $("lab-name").innerText = "必填，长度为4到16个字符";
                    $("name").setAttribute("class","get-input");
                    $("lab-name").setAttribute("class","get-lable");
                    break;
                case "pas":
                    $("lab-pas").innerText = "必填，长度为4到16个字符";
                    $("pas").setAttribute("class","get-input");
                    $("lab-pas").setAttribute("class","get-lable");
                    break;
                case  "pasword":
                    $("lab-pasword").innerText = "请再次输入相同密码";
                    $("pasword").setAttribute("class","get-input");
                    $("lab-pasword").setAttribute("class","get-lable");
                    break;
                case "adress":
                    $("lab-adress").innerText = "请输入正确的邮箱地址";
                    $("adress").setAttribute("class","get-input");
                    $("lab-adress").setAttribute("class","get-lable");
                    break;
                case "phone":
                    $("lab-phone").innerText = "请输入你的手机号";
                    $("phone").setAttribute("class","get-input");
                    $("lab-phone").setAttribute("class","get-lable");
                    break;
            }
        })
    }
}

//判断名字，密码是否正确
function judeg(id,netTarget) {
    var len = 0;
    if (id.value == ""){
        id.setAttribute("class","kong-input");
        netTarget.innerText = "不能为空";
        netTarget.setAttribute("class","kong-lable");
    }else {
        var content = id.value;
        for (var i=0;i<content.length;i++){
            if(content.charCodeAt(i)>=0x00 && content.charCodeAt(i)<=0xFF){
                len ++;
            }else {
                len += 2;
            }
        }
        if(len >3 && len <17){
            id.setAttribute("class","creact-input");
            netTarget.innerText = "格式正确";
            netTarget.setAttribute("class","creact-lable");
        }
    }
}

//判断第二次输入的密码是否和第一次相同
function  judgePas(id) {
    var content = id.value;
    if (content == $("pas").value){
        id.setAttribute("class","creact-input");
        $("lab-pasword").innerText = "密码正确";
        $("lab-pasword").setAttribute("class","creact-lable");
    }else {
        id.setAttribute("class","kong-input");
        $("lab-pasword").innerText = "密码不同";
        $("lab-pasword").setAttribute("class","kong-lable");
    }
}

//判断邮箱是否正确
function judgeAdd(id) {
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!myreg.test(id.value)){
        id.setAttribute("class","kong-input");
        $("lab-adress").innerText = "邮箱格式不正确";
        $("lab-adress").setAttribute("class","kong-lable");
    }else {
        id.setAttribute("class","creact-input");
        $("lab-adress").innerText = "密码正确";
        $("lab-adress").setAttribute("class","creact-lable");
    }
}

//判断手机格式是否正确
function judgePhone(id) {
    var mobile=/^((13[0-9]{1})|159|153)+\d{8}$/;
    if(!mobile.test(id.value)){
        id.setAttribute("class","kong-input");
        $("lab-phone").innerText = "手机格式不正确";
        $("lab-phone").setAttribute("class","kong-lable");
    }else {
        id.setAttribute("class","creact-input");
        $("lab-phone").innerText = "手机格式正确";
        $("lab-phone").setAttribute("class","creact-lable");
    }
}

//失去焦点时进行验证
outfocus();
function outfocus() {
    var sectionItems = document.getElementsByTagName("section");

    for (var i = 0;i<sectionItems.length;i++){

        sectionItems[i].addEventListener("focusout",function (e) {
            var target = e.target;

            switch (target.id){
                case "name":
                    judeg(target,$("lab-name"));
                    break;
                case "pas":
                    judeg(target,$("lab-pas"));
                    break;
                case  "pasword":
                    judgePas(target);
                    break;
                case "adress":
                    judgeAdd(target);
                    break;
                case "phone":
                    judgePhone(target);

                    break;
            }
        })
    }
}

//点击提交按钮时进行验证
$("btn").onclick = function () {
    var inp = document.getElementsByTagName("label");
    for (var i = 0; i < inp.length; i++) {
        var test1 = /^(rgb\(255,)/;
        var test2 = /^(rgb\(128,)/;
        if (test1.test(window.getComputedStyle(inp[i], null).getPropertyValue("border-color")) || test2.test(window.getComputedStyle(inp[i], null).getPropertyValue("border-color"))) {
            alert("提交失败");
            break;
        }
    }
    if (i == inp.length) {
        alert("提交成功");
    }
}






