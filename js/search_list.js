
$(document).ready(function(){
    //获取产品信息，包括manifest.json所有项.
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
    {
        // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
        $('#query').val(request.kw);
        sendResponse('我收到了你的消息！');
        setTimeout(function () {
            console.log('1.5秒钟后');
            $('input.swz2').click();
        }, 1500)
    });
});