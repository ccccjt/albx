
//引入分类数据库模块
const cateModule=require('../modules/cateModule')


//向外暴露
module.exports={
    //获得文章分类
    getCategories(req,res){
        cateModule.getCategories((err,result)=>{
            if(err) console.log(err);
            res.json(result)
        })
    }
}
