$('#header').load('header.html', function(){
    //页头内容已经异步加载完成
    if(sessionStorage['loginUname']){
        $('#welcome').html('欢迎：'+sessionStorage['loginUname']);
    }
});
$('#footer').load('footer.html');
console.log(sessionStorage['loginUname']);
//$('#welcome').html('欢迎：'+sessionStorage['loginUname']);
//轮播
$(document).ready(function(){
    var i=0;
    var clone=$('#lunbo li').first().clone();
    console.log(clone[0]);
    $('#lunbo').append(clone);
    var size =$("#lunbo li").size();
        $("#lunbo li").size();
    console.log(size);
    var t = setInterval(function () {i++; move();},2000);

    $(".center-bar li").first().addClass('on');

    $("#center1-content").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    }, function () {
        t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
    });

    /*鼠标滑入bar*/
    $('#center1-content .center-bar li').hover(function () {
        var index = $(this).index();//获取当前索引值
        console.log(index);
        i = index;
        $("#lunbo").stop().animate({ left: -index * 700 }, 500);
        $(this).addClass("on").siblings().removeClass("on");
    
    });
    //console.log(i);
    /*移动事件*/
    function move() {
        if (i == size-1) {
            $("#lunbo").css({ left:0});
            i =0;
        }
        $("#lunbo").stop().animate({ left: -i * 700 }, 500);
    
        if (i == size-1) {
            $("#center1-content .center-bar li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $("#center1-content .center-bar li").eq(i).addClass("on").siblings().removeClass("on");
        }
        }
});

//相框效果的点击事件
$(function(){
    $('#content-center4 .center4-title').click(function(){
        var index=$(this).parent().index();
        //console.log(index);
        $('#content-center4 .center4-list').each(function(i){
            //console.log(i);
            if(i==index-1){
                $(this).addClass('current').siblings('.current').removeClass('current');
            }
        });
    });
});

//游戏人物移入事件
$(function () {
   $('.block4 .main-nav a').mousemove(function (e) {
       e.preventDefault();
       $(this).parent().addClass('active').siblings('.active').removeClass('active');
       var index=$(this).parent().index();
       //console.log(index);
       $('.block4 .main-list>div').each(function (i) {
           if(i==index){
               $(this).addClass('show').siblings('.show').removeClass('show');
               $(this).removeClass('hide').siblings().addClass('hide');
           }
       })
   })
})


//顶部导航条
//$('#top-pic-new').hover(function () {
//    $(this).addClass('hover');
//    },function(){
//        $(this).removeClass('hover');
//})
$('#header ').on('mouseover mouseout','#top-pic-new', function (event) {
    if(event.type=="mouseover"){
        $(this).addClass('hover');
    }else if(event.type=="mouseout"){
        $(this).removeClass('hover');
    }

})

//视频
$(function () {
    var myPlayer = videojs('example_video_1');
    videojs("example_video_1").ready(function(){
        var myPlayer = this;
        myPlayer.play();
    });
});





