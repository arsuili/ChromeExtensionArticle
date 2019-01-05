
$(document).ready(function () {
   console.log('这里是详情页!');
   let title = $('h2#activity-name').text();
   console.log('title:', title);
   let author = $('a#js_name').text();
   console.log('author', author);
   let content = $('#js_content').html();
   console.log('content', content);
});