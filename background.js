chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    var defaults = {
        async: false,
        success: function (data) {
            if (typeof (request.success) === 'function'){
                request.success(data);
            }
            if (typeof (sendResponse) === 'function'){
                sendResponse(data);
            }
        }
    }
    $.ajax($.extend({}, request, defaults || {}));

});

function test()
{
    alert('我是background！');
}