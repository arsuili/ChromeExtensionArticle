// 搜索公众号关键字列表页
$(document).ready(function(){
    console.log('进入公众号列表');
    var List = $('.news-list2>li p.tit>a');
    // 获取页码数
    var page = (getParam('page') ? getParam('page') : 1);
    console.log('页码数，page:', page);
    // 设置页面数
    localStorage.setItem('page', page);

    // 获取列表索引数
    var listId = localStorage.getItem('listId') ?
    localStorage.getItem('listId') : 0;
    // localStorage.setItem('listId', 0);
    console.log('列表ID，listId:', listId);
    // return;
    // 循环公众号列表
    List.each(function (i,k) {
        console.log('列表ID，listId:', listId);
        if(i == listId) {
            console.log('获取公众号文章列表链接地址');
            $(this).attr('target', '');
            var self = this;
            // 跳转到详情页
            setTimeout(function () {
                // 点击进入公众号文章列表
                listId = parseInt(i)+1;
                localStorage.setItem('listId', listId);
                self.click();
            },5000)
        }else{
            console.log('切换下一页并还原listID');
            localStorage.setItem('listId', 0);
            // 跳转下一页
            setTimeout(function () {
                locationNext();
            }, 3000);
        }
    });

});


// 跳转下一页
function locationNext() {
    var page = (getParam('page') ? getParam('page') : 1);
    console.log('本页页码数:', page);
    $('#pagebar_container a').each(function (i,k) {
        if(parseInt($(k).text()) == parseInt(page)+1){
            // 设置页面数
            let current_page = parseInt($(k).text());
            localStorage.setItem('page', current_page);
            var self = this;
            setTimeout(function () {
                console.log('下一页链接地址:', $(self).attr('href'));
                self.click();
            }, 4000)
        }
    })
}

// 获取URL指定参数值
function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}