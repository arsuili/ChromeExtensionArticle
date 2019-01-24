// 公众号搜索首页
$(document).ready(function(){
    // 监听popup.js发送过来的消息内容
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        // 将发送过来的搜索关键字赋值给搜索框
        $('#query').val(request.kw);
        // 响应消息
        sendResponse('我收到了你的消息！');
        // 延迟1.5秒后自动跳转到搜索结果页
        setTimeout(function () {
            $('input.swz2').click();
        }, 3000)
    });
});