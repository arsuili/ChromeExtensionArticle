$(document).ready(function () {
    console.log('这是注入的js脚本');
    let msgList = window.msgList.list;

    let author = $('.profile_nickname').text();
    let wechat_number = $('.profile_account').text();
    let desc = $('.profile_desc_value').attr('title');
    let headimg = $('.radius_avatar img').attr('src');

    $.post("http://community.test/api/user/register", {
        author,
        wechat_number,
        desc,
        headimg
    }, function (res) {
        if(res.code == 0) {
            let uid = res.data.uid;
            // 循环文章列表
            console.log(msgList);
            for (let i in msgList) {
                if(i == 0) {
                    let itemList = msgList[i].app_msg_ext_info.multi_app_msg_item_list;
                    let publish = msgList[i].comm_msg_info.datetime;
                    for (let j in itemList) {
                        let item = itemList[j];
                        $.post("http://community.test/api/article/createArticle", {
                            content_url: item.content_url,
                            cover: item.cover,
                            digest: item.digest,
                            fileid: item.fileid,
                            title: item.title,
                            uid,
                            publish
                        }, function () {
                            if(j == itemList.length - 1) {
                                console.log('第一篇文章结束了');
                                return;
                            }
                        });
                        if (i == msgList.length - 1) {
                            console.log('这是列表最后一条数据', i);
                            // window.history.back();
                        }
                    }
                }
            }
        }
    });
})