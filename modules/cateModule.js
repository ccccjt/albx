//1、引入mysql
const mysql=require('mysql')

//2、创建连接
let connection= mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu' ,
    dateStrings:true,
})
//向外暴露
module.exports={
    //获得所有文章分类
    getCategories(callback){
        let sql=`select * from categories`
        connection.query(sql,(err,result)=>{
            if(err) return callback(err)
            
            // console.log(results);
            callback(null,result)
          })
    }

}