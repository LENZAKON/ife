/**
 * Created by Lenovo on 2017/3/4.
 */
var $ = function (id) {
    return document.getElementById(id);
}

liandong();
function liandong() {
    var schoolArray = [];
    schoolArray['北京'] = [
        {txt:'清华', val:'清华'},
        {txt:'北大', val:'北大'},
        {txt:'上戏', val:'上戏'},
        {txt:'中戏', val:'中戏'},
        {txt:'人大', val:'人大'},
    ];
    schoolArray['浙江'] = [
        {txt:'交大', val:'交大'},
        {txt:'复旦', val:'复旦'},
        {txt:'工大', val:'工大'},
        {txt:'浙大', val:'浙大'}
    ];

    function removeOptions(selectObj) {
        if (typeof selectObj != 'object')
        {
            selectObj = document.getElementById(selectObj);
        }

        // 原有选项计数
        var len = selectObj.options.length;

        for (var i=0; i < len; i++)
        {
            // 移除当前选项
            selectObj.options[0] = null;  //options[0] 删除后，后面的选项就会补上，因此，我们只需要 selectObj.options[0] = null 。
        }
    }

    function setSchoolOptions(selectObj, optionList, firstOption, selected) {
        if (typeof selectObj != 'object'){
            selectObj = $(selectObj);
        }
        removeOptions(selectObj);

        // 选项计数
        var start = 0;

        // 如果需要添加第一个选项
        if (firstOption)
        {
            selectObj.options[0] = new Option(firstOption, '');
            // 选项计数从 1 开始
            start ++;
        }

        var len = optionList.length;
        for (var i=0; i < len; i++)
        {
            // 设置 option
            selectObj.options[start] = new Option(optionList[i].txt, optionList[i].val);
            // 选中项
            if(selected == optionList[i].val)
            {
                selectObj.options[start].selected = true;
            }
            // 计数加 1
            start ++;
        }
    }

    function setSchool(city) {
        setSchoolOptions('school',schoolArray[city],'-请选择-');
    }

    $("city").addEventListener("change",function () {
        if (this.value != ""){
            setSchool(this.options[this.selectedIndex].value);
        }
    })
}

$("atSchool").addEventListener("click",function () {
    $("div-school").style.display = "block";
    $("div-work").style.display = "none";
})

$("notAtSchool").addEventListener("click",function () {
    $("div-school").style.display = "none";
    $("div-work").style.display = "block";
})