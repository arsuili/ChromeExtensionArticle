
$(document).ready(function(){
    var List = $('.news-list2>li p.tit>a');
    // 获取页码数
    var page = localStorage.getItem('page');
    if(!page)
        page = getParam('page');
    if(!page)
        page = 1;
    // 设置页面数
    localStorage.setItem('page', page);
    console.log('page:', page);
    // 循环公众号列表
    var listId = localStorage.getItem('listId');
    // 获取列表索引数
    if(!listId)
        listId = 0;
    console.log('listId:', listId);
    List.each(function (i,k) {
        if(i == listId) {
            console.log('进入这里了吗?');
            localStorage.setItem('listId', parseInt(i)+1);
            $(this).attr('target', '');
            var self = this;
            // 跳转到详情页
            setTimeout(function () {
                console.log(self);
                self.click();
            },1000)
        }else{
            localStorage.setItem('listId', 0);
            // 跳转下一页
            setTimeout(function () {
                locationNext()
            }, 2000);
        }
    });

    // 公众号文章列表页操作
    setTimeout(function () {
        getList();
    }, 2000)

});

// 进入公众号文章列表页
function getList() {
    console.log('文章列表页', 'aaa');
    var titleList = $('h4.weui_media_title');
    titleList.each(function (i, k) {
        if (i == 0) {
            let hrefs = $(k).attr('hrefs');
            console.log(hrefs);
            setTimeout(function () {
                window.location.href = hrefs;
            }, 2000);
        }
    })
    // window.history.back();
}

// 跳转下一页
function locationNext() {
    var page = getParam('page');
    console.log('本页页码数:', page);
    $('#pagebar_container a').each(function (i,k) {
        if(parseInt($(k).text()) == parseInt(page)+1){
            var self = this;
            setTimeout(function () {
                console.log('下一页链接地址:', $(self).attr('href'));
                // self.click();
            }, 3000)
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