
$(document).ready(function () {
   let title = $('h2#activity-name').text();
   let author = $('a#js_name').text();
   let content = $('#js_content').html();
   let publish = getParam('times');
   console.log(publish);
   chrome.runtime.sendMessage({
      type: "POST",
      // url: "http://www.kuaidi100.com/query?type=yuantong&postid=123456",
      url: "http://community.test/api/article",
      data: {
         title,
         author,
         content,
         publish
      }
   }, function (response) {
      console.log('返回结果:',response);
   });
   /*const xhr = new XMLHttpRequest();
   xhr.open("GET", "http://www.kuaidi100.com/query?type=yuantong&postid=123456", true);
   xhr.onreadystatechange = function () {
      if (xhr.readyState == 4){
         console.log(JSON.parse(xhr.responseText));
      }
   }
   xhr.send();*/

});


// 获取URL指定参数值
function getParam(paramName) {
   paramValue = "", isFound = !1;
   if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
      arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
      while (i < arrSource.length && !isFound)
         arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
   }
   return paramValue == "" && (paramValue = null), paramValue
}