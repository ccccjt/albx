//1、引入mysql
const mysql = require('mysql')

//2、创建连接
let connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu',
  dateStrings: true,
})
module.exports = {
  getPostsList(obj, callback) {
    var sql = `select posts.id pid,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id uid,users.nickname,categories.name
    from posts
    inner join users on posts.user_id = users.id
    inner join categories on posts.category_id = categories.id
    where 1=1  `
    // 这里可以根据判断结构拼接筛选条件
    if (obj.cate) {
      // 拼接分类条件
      sql += ` and categories.slug = '${obj.cate}' `
    }
    if (obj.status) {
      // 拼接状态条件
      sql += ` and posts.status = '${obj.status}' `
    }
    sql += ` order by posts.id desc
limit ${(obj.pagenum - 1) * obj.pagesize},${obj.pagesize}`

    connection.query(sql, (err, result) => {
      if (err) {  
        callback(err)
      } else {
        // console.log(result)
        // 这条语句 可以获取posts表中的总记录数
        sql = 'select count(*) cnt from posts'
        connection.query(sql, (err1, data1) => {
          if (err1) {
            callback(err1)
          } else {
            // 我们又需要返回查询出的数据，又需要返回查询出总记录数
            callback(null, { result: result, total: data1[0].cnt })
          }
        })
      }
    })
  },
  //删除文章
  delPostById(id,callback){
    var sql = `var sql = 'delete from posts where id =${id}`
    connection.query(sql,(err,result)=>{
      if(err) callback(err)
      callback(null)
    })
  }


}
