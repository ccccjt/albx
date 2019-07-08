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
                // console.log(data);
                res.json({
                    code:200,
                    msg:'数据查询成功',
                    data:data
                })
            }
        })
    },
    //删除文章
    delPostById(req,res){
    let id=req.query.id
    // console.log(id);
    postsModule.delPostById(id,err=>{
        if(err) res.json({
            code:400,
            msg:'删除失败',
            err:err
        })
        res.json({
            code:200,
            msg:'删除成功',
        })
    })
  },
  addPost(req,res){
    let obj=req.body
    // console.log('_____________');
    // console.log(obj);
    // console.log('_____________');
    obj.id=null
    obj.likes=0
    obj.views=0
    obj.user_id=req.session.currentUser.id
    postsModule.addPost(obj,err=>{
        if(err){
            res.json({
                code:400,
                msg:'文章新增失败'
            })
        }else{
            res.json({
                code:200,
                msg:'文章新增成功'
            })
        }
    })
  }

}

