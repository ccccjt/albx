const userModule=require('../modules/userModule')

module.exports={
    login(req,res){
        var obj=req.body
        console.log(obj);
        userModule.login(obj,(err,data)=>{
            console.log(data);
            if(err){
                res.json({
                    code:400,
                    msg:'服务器错误',
                })
            }else{
                if(data){
                    if(data.password==obj.password){
                        //账号密码都正确时，在请求头写入登录的验证，以及当前用户的数据，方便后续更新用户数据
                        req.session.isLogin='true'
                        //当前用户数据
                        req.session.currentUser=data
                        res.json({
                            code:200,
                            msg:'登录成功，欢迎您'+data.nickname,
                        })
                    }else{
                        res.json({
                            code:400,
                            msg:'密码错误'
                        })
                    }
                }else{
                    res.json({
                        code:400,
                        msg:'邮箱不存在'
                    })
                }
               
            }
        })
    }
    
}