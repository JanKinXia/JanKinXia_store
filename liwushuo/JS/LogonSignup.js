/*固定屏幕*/
/*$(".login").click(function () {
    var body=$("body");
    body.css("position","fixed");
    body.css("left","0");
    body.css("right","0");
});*/

/*检测手机号码、邮箱*/
function check() {
    var username=$("#username");
    var a=username.val();
    var b = /(^1[3|5|7|8]\d{9})|(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)/;
    if(!b.test(a)){
        username.addClass("error-input");
    }else{
        username.removeClass("error-input");
    }

}
function checkSignUp(){
    var usernameSignUp=$("#username-sign");
    var c=usernameSignUp.val();
    var b = /(^1[3|5|7|8]\d{9})|(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)/;
    if(!b.test(c)){
        usernameSignUp.addClass("error-input");
    }else{
        usernameSignUp.removeClass("error-input");
    }
    var paw=$("#password-sign");
    var pawT=$("#password-sign-twice");
    if(!(paw.val()===pawT.val())){//!先匹配值
        paw.addClass("error-input");
        pawT.addClass("error-input");
    }else{
        paw.removeClass("error-input");
        pawT.removeClass("error-input");
    }
}
/*切换登录方式*/
var SignUp=$(".sign-up");
var LogOn=$(".log-on");
var formLogOn=$(".losu-form");
var formSignUp=$(".sign-up-form");
SignUp.click(function () {
    LogOn.css("background-color","#dedede");
    SignUp.css("background-color","#FAFAFA");
    formSignUp.css("display","block");
    formLogOn.css("display","none");
});
LogOn.click(function () {
    LogOn.css("background-color","#FAFAFA");
    SignUp.css("background-color","#dedede");
    formLogOn.css("display","block");
    formSignUp.css("display","none");
});
/*
修改登录框不在输入状态时样式
 */
$(".username").on("click",function () {
    $(".username").removeClass("error-input");
});
$(".password").click(function () {
    $(".password").removeClass("error-input");
});

