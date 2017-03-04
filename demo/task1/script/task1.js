/**
 * Created by Lenovo on 2017/3/4.
 */

var $ = function (id) {
    return document.getElementById(id);
};

$("btn").onclick = function () {
    var len = 0;
        if ($("input").value == ""){
          $("input").setAttribute("class","kong-input");
          $("attention").innerText = "名字不能为空";
          $("attention").setAttribute("class","kong-lable");
      }else {
          var content = $("input").value;
          for (var i=0;i<content.length;i++){
              if(content.charCodeAt(i)>=0x00 && content.charCodeAt(i)<=0xFF){
                  len ++;
              }else {
                  len += 2;
              }
          }
          if(len >3 && len <17){
              $("input").setAttribute("class","creact-input");
              $("attention").innerText = "名字格式正确";
              $("attention").setAttribute("class","creact-lable");

          }

      }

}