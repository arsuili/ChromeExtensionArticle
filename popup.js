$(document).ready(function(){
    var details = chrome.app.getDetails();
    console.log(details);

    var html = "<p><img src='"+details.browser_action.default_icon+"'></p>"+
        "<div class=\"content\">\n" +
        "    <input style='width: 88%;height: 22px;border: 1px solid #abcdef;' type=\"text\" name=\"kw\" placeholder=\"输入关键字\">\n" +
        "</div>"+
        "<h2>"+details.name+"</h2>"+
        "<p>版本:v"+details.version+"</p>"+
        "<p>作者:crazy</p>"+
        "<p>@copyright 2019, 不可用于商业用途</p>";
    $("#about-box").html(html);
});