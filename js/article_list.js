
$(document).ready(function () {

    //创建一个元素
    var script = document.createElement('script');
    var script1 = document.createElement('script');

    //test.js就是你插件目录下的脚本文件,这个文件里的代码是可以访问页面的函数和变量的
    script.src = chrome.extension.getURL('../injection/jquery-1.8.3.min.js');
    script1.src = chrome.extension.getURL('../injection/spider.js');

    //将脚本插入body元素中,此时register.js文件的内容就会自动加载并运行了
    document.body.append(script);
    setTimeout(function () {
        document.body.append(script1);
    }, 500);

    console.log('进入公众号文章列表');
    setTimeout(function () {
        getList();
    }, 1500)
});


// 进入公众号文章列表页
function getList() {
    console.log('文章列表页', 'aaa111');
    let author = $('.profile_nickname').text();
    let wechat_number = $('.profile_account').text();
    let desc = $('.profile_desc_value').attr('title');
    let headimg = $('.radius_avatar img').attr('src');
    console.log(headimg);
    console.log('作者', author);
    // 获取作者ID
    /*chrome.runtime.sendMessage({
        type: "POST",
        // url: "http://www.kuaidi100.com/query?type=yuantong&postid=123456",
        url: "http://community.test/api/user/register",
        data: {
            author,
            wechat_number,
            desc,
            headimg
        }
    }, function (response) {
        if (response.code == 0){
            console.log('成功', response.data);
            let uid = response.data.uid;
            var titleList = $('h4.weui_media_title');
            titleList.each(function (i, k) {
                if (i == 0) {
                    let hrefs = $(k).attr('hrefs');
                    let times = $(k).siblings('p.weui_media_extra_info').text();
                    console.log('获取文章详情链接', hrefs);
                    console.log('文章发布时间:', times);
                    let start = hrefs.indexOf('#');
                    setTimeout(function () {
                        // 跳转到文章详情
                        let url = pj(hrefs, start, '&times='+encodeURI(encodeURI(times))+'&uid='+uid);
                        // window.location.href = url;
                    }, 2000);
                }
            });
        }
    });*/

    // 返回上一页（即公众号列表）
    // window.history.back();
}

function pj(str, start, newStr){
    return str.slice(0, start) + newStr + str.slice(start)
}