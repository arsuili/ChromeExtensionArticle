$(document).ready(function(){
    var details = chrome.app.getDetails();
    console.log(details);

    var html = "<p><img src='"+details.browser_action.default_icon+"'></p>"+
        "<div class=\"content\">\n" +
        "    <input style='width: 88%;height: 22px;border: 1px solid #abcdef;' type=\"text\" name=\"kw\" id='kw' placeholder=\"输入关键字\">\n" +
        "</div>"+
        "<h2>"+details.name+"</h2>"+
        "<p>版本:v"+details.version+"</p>"+
        "<p>作者:crazy</p>"+
        "<p>@copyright 2019, 不可用于商业用途</p>";
    $("#about-box").html(html);

    $(document).keyup(function(event){
        if(event.keyCode ==13){
            /*var bg = chrome.extension.getBackgroundPage();
            bg.test();*/
            var kw = $("#kw").val();
            sendMessageToContentScript({kw:kw}, function(response)
            {
                console.log('来自content的回复：'+response);
            });
        }
    });
});

function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}
