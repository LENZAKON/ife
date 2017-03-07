/**
 * Created by Lenovo on 2017/3/7.
 */
//为table 设置数据

var data = [
    ["小明",80,90,70,240],
    ["小红",90,60,90,240],
    ["小亮",60,100,70,230]
];
var index ;
//升序
function compare1(value1,value2) {
    return value1[index] - value2[index];
}
//降序
function compare2(value1,value2) {
    return value2[index] - value1[index];
}

function showTable() {
    document.getElementsByTagName("tbody")[0].innerHTML = "";
    for (var i=0;i<3;i++){
        var trs = document.createElement("tr");
        for (var j=0;j<5;j++){
            var tds = document.createElement("td");
            tds.innerText = data[i][j];
            trs.appendChild(tds);
        }
        document.getElementsByTagName("tbody")[0].appendChild(trs);
    }
}

document.getElementsByTagName("table")[0].addEventListener("click",function (e) {
    var target = e.target;
    switch (target.className){
        case "ChineseUpSort":
            window.index = 1;
            data.sort(compare1);
            showTable();
            break;

        case "MathsUpSort":
            window.index = 2;
            data.sort(compare1);
            showTable();
            break;

        case "EngUpSort":
            window.index = 3;
            data.sort(compare1);
            showTable();
            break;

        case "totUpSort":
            window.index = 4;
            data.sort(compare1);
            showTable();
            break;

        case "ChineseDownSort":
            window.index = 1;
            data.sort(compare2);
            showTable();
            break;

        case "MathsDownSort":
            window.index = 2;
            data.sort(compare2);
            showTable();
            break;

        case "EngDownSort":
            window.index = 3;
            data.sort(compare2);
            showTable();
            break;

        case "totDownSort":
            window.index = 4;
            data.sort(compare2);
            showTable();
            break;
    }
})

window.onload = function () {
    showTable();
}
