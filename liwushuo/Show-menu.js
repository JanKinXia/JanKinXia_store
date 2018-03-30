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


