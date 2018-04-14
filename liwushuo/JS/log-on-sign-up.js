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
    var b = /^1[3|5|7|8]\d{9}/;
    console.log(a);
    if(!b.test(a)){
        username.css("border","red 1px solid");
        username.css("box-shadow","0 0 4px red")
    }else{
        username.css("border","not specified");
        username.css("box-shadow","none");
    }

}
function checkSignUp(){
    var usernameSignUp=$("#username-sign");
    var c=usernameSignUp.val();
    var b = /^1[3|5|7|8]\d{9}/;
    if(!b.test(c)){
        usernameSignUp.css("border","red 1px solid");
        usernameSignUp.css("box-shadow","0 0 4px red")
    }else{
        usernameSignUp.css("border","not specified");
        usernameSignUp.css("box-shadow","none");
    }
    var paw=$("#password-sign");
    var pawT=$("#password-sign-twice");
    console.log(paw.val(),pawT.val());
    if(!paw.val()===pawT.val()){
        paw.css("border","red 1px solid");
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

