//这个模块用于文件上传
const formidable=require('formidable')
const path=require('path')

module.exports={
    uploadFile(req,res){
       //1、创建文件上传对象
        var form = new formidable.IncomingForm()
        //2、设置编码：这个模块可以实现文件上传和普通键值对数据上传
        form.encoding='utf-8'
        //3、设置文件上传储存路径
        form.uploadDir=__dirname+'/../uploads'
        //4、设置是否保留文件拓展名
        form.keepExtensions=true
        //5、实现文件上传操作
        //5.1 form.parse(请求报文对象,上传完成时的回调函数)，请求报文中有文件数据
        //5.2 回调函数的三个参数：
        //5.2.1 err：错误信息
        //5.2.2 fields：字段：传递普通键值对，它是一个对象
        //5.2.3 files：文件：文件上传成功后的相关信息
        form.parse(req,(err,fields,files)=>{
            if(err) res.json({
                code:400,
                msg:'文件上传失败',
                err:err
            })
            console.log(path.basename(files.abc.path));
            res.json({
                code:200,
                msg:'文件上传成功',
                img:path.basename(files.abc.path)
            })
        })
    }

}