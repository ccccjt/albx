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
    login(obj,callback){
        var sql=`SELECT * FROM users WHERE email='${obj.email}'`
        connection.query(sql,(err,results)=>{
            console.log(results);
            if(err) callback(err)
            callback(null,results[0])
        })
    }
}