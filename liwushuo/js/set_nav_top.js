$(document).ready(function () {
    var nav=$(".nav-top"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=80){
            nav.addClass("fixednav");
            $(".nav-search").css("display","block");
            $(".back-top").css("display","block");
        }else{
            nav.removeClass("fixednav");
            $(".nav-search").css("display","none");
            $(".back-top").css("display","none");
        }
    });
});
$(document).ready(function () {
    var sc=$(document);
    $(".back-top").click(function () {
        sc.scrollTop(0);
    })
});