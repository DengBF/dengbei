//$('#header').load('header.html', function(){
//    //页头内容已经异步加载完成
//    $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
//});
$('#header').load('header.html');
$('.login>a').click(function(){
    $(this).addClass("active");
    $(this).siblings('a.active').removeClass("active");
});
$('.phone_btn').click(function(){
   $('.mail').css('display','none');
   $('.phone').css('display','block');
});
$('.mail_btn').click(function(){
   $('.phone').css('display','none');
   $('.mail').css('display','block');
});
$('.register_into').click(function(){
   $('.login_container').css('display','none');
   $('.register_container').css('display','block');
});
//$('.into_login').click(function(){
//   $('.login_container').css('display','block');
//   $('.register_container').css('display','none');
//});
$('.pic_login').click(function(){
    $('.login_container').css('display','none');
    $('.pic').css('display','block');
});
$('.return_login').click(function(){
    $('.login_container').css('display','block');
    $('.pic').css('display','none');
});
//**********************注册**********************
$('.mail_phone input[type="text"]').blur(function(){
    var reg1=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
    var reg2=/^[1][358][0-9]{9}$/;
    var account=$(this).val();
    if(!reg1.test(account)&&account!==""){
        if(!reg2.test(account)&&account!==""){
            $('.reg_words1 i').html('格式错误').css('color','#e4393a');
        }else if(account==""||reg2.test(account)){
            $('.reg_words1 i').html("");
        }
    }else if(account==""||reg1.test(account)){
        $('.reg_words1 i').html("");
    }
});
$('.psd input[type="password"]').blur(function(){
    var reg=/\w{6,8}/g;
    var psd=$(this).val();
    if(!reg.test(psd)&&psd!==""){
        $('.reg_words2 i').html('密码错误').css('color','#e4393a');
    }else{
        $('.reg_words2 i').html("");
    }
});
$('.affirm_psd input[type="password"]').blur(function(){
    var prevPsd=$('.psd input[type="password"]').val();
    var psd=$(this).val();
    if(prevPsd!==psd&&psd!==""){
        $('.reg_words3 i').html('密码错误').css('color','#e4393a')
    }else if(prevPsd==psd){
        $('.reg_words3 i').html("");
    }
});
$('.getPsd').click(function(){
    var n=Math.floor(Math.random()*(90000)+10000);
    $(this).html(n);
});
$('.reg input[type="text"]').blur(function(){
    var psd=$('.getPsd').html();
    var inPsd=$(this).val();
    if(inPsd!==psd&&inPsd!==""){
        $('.reg_words4 i').html('验证码错误').css('color','#e4393a')
    }else if(inPsd==psd){
        $('.reg_words4 i').html("");
    }
});
$('.into_login').click(function(e){
    e.preventDefault();
    var account=$('.mail_phone input[type="text"]').val();
    var password=$('.psd input[type="password"]').val();
    var affirmPsd=$('.affirm_psd input[type="password"]').val();
    var reg=$('.reg input[type="text"]').val();
    var prereg=$('.getPsd').html();
    var reg1=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
    var reg2=/^[1][358][0-9]{9}$/;
    var reg3=/\w{6,8}/g;
    if(account===""){
        $('.reg_words1 i').html('内容不能为空').css('color','#e4393a');
    }else if(!reg1.test(account)){
        if(!reg2.test(account)){
            $('.reg_words1 i').html('格式错误').css('color','#e4393a');
        }else if(reg2.test(account)){
            $('.reg_words1 i').html("");
        }
    }
    if(reg1.test(account)){
        $('.reg_words1 i').html("");
    }else if(password===""){
        $('.reg_words2 i').html('内容不能为空').css('color','#e4393a');
    }else if(!reg3.test(password)){
        $('.reg_words2 i').html('密码错误').css('color','#e4393a');
    }else if(reg3.test(password)){
        $('.reg_words2 i').html("");
    }
    if(affirmPsd===""){
        $('.reg_words3 i').html('内容不能为空').css('color','#e4393a');
    }else if(affirmPsd!==password){
        $('.reg_words3 i').html('密码错误').css('color','#e4393a');
    }else if(affirmPsd===password){
        $('.reg_words3 i').html("");
    }
    if(reg===""){
        $('.reg_words4 i').html('内容不能为空').css('color','#e4393a');
    }else if(reg!==prereg){
        $('.reg_words4 i').html('密码错误').css('color','#e4393a');
    }else if(reg===prereg){
        $('.reg_words4 i').html("");
    }
    if((reg1.test(account)||reg2.test(account))&&reg3.test(password)&&affirmPsd===password&&reg===prereg){
        $.ajax({
            type:'POST',
            url:'/user/register',
            data:{account:account,password:password},
            success:function(row){
                console.log(row);
                console.log(row);
                if(row.msg=='hasRegister'){
                    $('.reg_words5 i').html('已经注册，请直接登录！').css('color','#e4393a');
                }else{
                    $('.reg_words5 i').html('注册成功').css('color','#e4393a');
                }
            }
        });
    }
});
//******************************登录********************************
$('.password input').focus(function(){
    $(this).attr('placeholder','6-8位数字');
});
$('.password input').blur(function(){
    $(this).attr('placeholder','密码');
});
    var reg1=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
    var reg2=/^[1][358][0-9]{9}$/;
    var reg3=/\w{6,8}/g;
    $('.phone .account input[type="text"]').blur(function() {
        var account=$(this).val();
        if(account!=''){
           if(!reg1.test(account)){
               if(!reg2.test(account)){
                   $('.text_phone i').html('格式错误').css('color','#e4393a');
               }
           }
        }else{
            $('.text_phone i').html('内容不能为空').css('color', '#e4393a');
        }
    });
    $('.password input[type="password"]').blur(function(){
        var password=$(this).val();
        if(password===""){
            $('.password i').html('内容不能为空').css('color','#e4393a');
        }else if(!reg3.test(password)&&password!==""){
            $('.password i').html('密码为6-8位数字').css('color','#e4393a');
        }else{
            $('.password i').html("");
        }
    });
$('.phone .login_into').click(function(){
    var account=$('.text_phone input[type="text"]').val();
    var password=$('.password input[type="password"]').val();
    $.ajax({
        type:'POST',
        url:'/user/login',
        data:{account:account,password:password},
        success:function(result){
             console.log(result);
            if(result.code===200){
                alert('登录成功！3s自动跳转到用户中心');
                setTimeout(function(){
                    location.href='main.html';
                },3000);
                sessionStorage['loginUname']=account;
                console.log( sessionStorage['loginUname']);
                sessionStorage['loginUid']=result.uid;

            }else{
                alert('登录失败！原因:'+result.msg);
            }
        }
    })
});
