
$(document).ready(function(){
    $('#query').val('望城');
    setTimeout(function () {
        console.log('3秒钟后');
        $('input.swz2').click();
    }, 3000)
    //获取产品信息，包括manifest.json所有项.
});