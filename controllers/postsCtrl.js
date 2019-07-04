//引入文章数据库模块
const postsModule=require('../modules/postsModule')
//向外暴露
module.exports={
    getPostsList(req,res){
        let obj =req.query
        console.log(obj);
        postsModule.getPostsList(obj,(err,data)=>{
            if(err){
                res.json({
                    code:400,
                    msg:'数据查询失败',
                    aaa:err
                })
            }else{
                res.json({
                    code:400,
                    msg:'数据查询成功',
                    data:data
                })
            }
        })
    }
}

