
$(document).ready(function () {
   let title = $('h2#activity-name').text();
   let author = $('a#js_name').text();
   let content = $('#js_content').html();
   $.ajax({
      type: "POST",
      url: "http://community.test/api/article",
      data: {
         title: title,
         author: author
      },
      success: function(ret){
         console.log(ret);
      },
      error: function (err) {
         console.log(err);
      }
   });
});