//定义任务函数task
function task(){
    //获得id为#block2_up>div.bg_lunbo下class为show的img
    var img=document.querySelector(
        "#block2_up>div.bg_lunbo>img.show"
    );
    //清除其class
    img.className="";
    //如果img有下一个兄弟
    if(img.nextElementSibling!=null)
    // 设置img的下一个兄弟的class为show
        img.nextElementSibling
            .className="show";
    else //否则
    // 设置img父元素的第一个子元素的class为show
        img.parentNode.firstElementChild
            .className="show";
}
var timer=setInterval(task,2000);
//找到id为slider的div
//var div=
//    document.getElementById("slider");
//为div绑定鼠标进入和鼠标移出事件:
//div.onmouseover=function(){
//    clearInterval(timer);
//    timer=null;
//}
//div.onmouseout=function(){
//    timer=setInterval(task,2000);
//}

//返回顶部按钮
$(window).scroll(function(){
    var t=$("body").scrollTop();
   // console.log(t);
    if(t>300){
        $("#retrue-top").addClass("retrue-top-start")
    }
    else if(t<=300){
        $("#retrue-top").removeClass("retrue-top-start");
    }
});
//打开模态框
$("#yuyue").click(function(){
    $("#madol").css("display","block");
});
//模拟点击操作
$("#submit div:first").click(function(){
    $("#yuyue").trigger("click");
});
//模态框的关闭
$("#madol").on("click",
    ".madol-bg>p",function(){
        ($(this).parent().parent()).css("display","none");
    });

//模块3的图片转换
//模块4
if(!window.jQuery){
    throw new Error('01.js插件库依赖于jQuery！');
}
jQuery.fn.tab=function(){
    this.mousemove(function(e){
        e.preventDefault();
        $(this).parent().addClass('show').siblings('.show').removeClass('show');
        var id = $(this).attr('href');
        $(id).addClass('show').siblings('.show').removeClass('show');
    });
};
$(function(){
    $('[data-toggle="tab"]').tab();
});



//注册
$('#submit :checkbox').click(function(){
    var $state = $(this).prop("checked");
    if($state){
        $("#submit :not(:checkbox)")
            .prop("disabled",false);
    }else{
        $("#submit :not(:checkbox)")
            .prop("disabled",true);
    }
});

$('#s_register').click(function(){
    var e_val=$('#s_email').val();
    var pwd_val=$('#s_pwd').val();
    if(e_val.length<6||e_val.length>32){
        $("#uname-msg").html("用户名不正确").addClass('s_err');
        return false;
    }else{
        $("#uname-msg").html("输入正确").addClass('s_succ').siblings('.s_err').removeClass('s_err');
    }
    if(pwd_val.length<6||pwd_val.length>12){
        $("#upwd-msg").html("密码不正确").addClass('s_err');
        return false;
    }else{
        $("#upwd-msg").html("输入正确").addClass('s_succ').siblings('.s_err').removeClass('s_err');
    }
    console.log(e_val+pwd_val);

});















