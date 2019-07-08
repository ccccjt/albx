$(function(){
    $('.btn-primary').on('click',function(){
        var email=$('#email').val()
        var password=$('#password').val()

        $.ajax({
           type:'post',
           url:'/login',
           beforeSend:function(){
            if(!/\w+[@]\w+[.]\w+/.test(email)){
                $('.alert>span').text('邮箱格式错误')
                $('.alert').fadeIn(500).delay(2000).fadeOut(500)
                return false
            }
            if(password.trim().length==0){
                $('.alert>span').text('请输入密码')
                $('.alert').fadeIn(500).delay(2000).fadeOut(500)
                return false
            }
           },
           data:$('.login-wrap').serialize(),
           dataType:'json',
           success:function(res){
               console.log(res);
            if(res.code==200){
                location.href='index'
            }else{
                $('.alert>span').text(res.msg)
                $('.alert').fadeIn(500).delay(2000).fadeOut(500)
            }
           }
        })
    })
       







})