
/*显示导航栏菜单*/
$(document).ready(function () {
    $(".nav-li-bar:eq(1)").hover(function () {
        $(".menu-panel:eq(0)").css("display","block");
    },function () {
        $(".menu-panel:eq(0)"). css("display","none");
    });
    $(".nav-li-bar:eq(2)").hover(function () {
        $(".menu-panel:eq(1)").css("display","block");
    },function () {
        $(".menu-panel:eq(1)"). css("display","none");
    });
    $(".nav-li-bar:eq(3)").hover(function () {
        $(".menu-panel:eq(2)").css("display","block");
    },function () {
        $(".menu-panel:eq(2)"). css("display","none");
    });
    $(".download-android-logo").hover(function () {
        $(".dl-and-way").css("display","block");
    },function () {
        $(".dl-and-way").css("display","none");
    });
});

/*删除登录框*/
$("#delete").click(function () {
    $(".log-on-sign-up").css("display","none");
});

/*显示登录框*/
$(".login").click(function () {
    $(".log-on-sign-up").css("display","block");
});


/*显示ul标签

 */
function showUl() {
    var li=$("<li></li>");li.addClass("content-show");
    var a=$("<a></a>");a.attr("href","index.html");a.css("cursor","pointer");
    var divImage=$("<div></div>");divImage.addClass("content-image");
    var divIcon=$("<div></div>");divIcon.addClass("icon-new");
    var divTitle=$("<div></div>");divTitle.addClass("content-title");
    var divExa=$("<div></div>");divExa.addClass("content-example");
    var ul=$("<ul></ul>");ul.addClass('show-bottom');
    var liLike=$("<li></li>");liLike.addClass("content-like");
    var iLike=$("<i></i>");iLike.addClass("icon-like");
    var spanLike=$("<span></span>");spanLike.addClass("number-like");liLike.append(iLike);liLike.append(spanLike);
    var liComment=$("<li></li>");liComment.addClass("content-comment");
    var iComment=$("<i></i>");iComment.addClass("icon-comment");
    var spanComment=$("<span></span>");spanComment.addClass("number-comment");liComment.append(iComment);liComment.append(spanComment);
    var liShare=$("<li></li>");liShare.addClass("content--share");
    var iShare=$("<i></i>");iShare.addClass("icon-share");
    var spanShare=$("<span></span>");spanShare.addClass("number-share");liShare.append(iShare);liShare.append(spanShare);
    var content=$(".content-ul");
    ul.append(liLike);ul.append(liComment);ul.append(liShare);
    divImage.append(divIcon);
    a.append(divImage);
    a.append(divTitle);
    a.append(divExa);
    a.append(ul);
    li.append(a);
    content.append(li);
    mock();
}
var count=0;
function sh() {
    count++;
    console.log(count);
    if(count>3){
        $(".bottom-div").text("没有更多了~");
    }else{
        for(var i=0;i<6;i++){
            showUl();
        }
    }
}
/*
设置导航栏
 */
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