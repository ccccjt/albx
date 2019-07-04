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
module.exports={
  getPostsList(obj,callback){
      let sql =`select posts.id pid,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id uid,users.nickname,categories.name
      from posts
      inner join users on posts.user_id = users.id
      inner join categories on posts.category_id = categories.id
      limit ${(obj.pagenum-1)*obj.pagesize},${obj.pagesize}`
      connection.query(sql,(err,results)=>{
        if(err) return callback(err)
        
        callback(null,results)
      })
    }
  }
