//1、引入核心模块
const express= require('express')
// const fs=require('fs')
//4.4引入路由模块
const router=require('./router')
//2、创建服务器
const app=express()

//设置静态资源托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
app.use('/node_modules',express.static('node_modules'))


//设置ejs模板引擎
app.set('view engine','ejs')
app.set('views','./views')

//3、监听
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})
//4.1、监听请求,未用ejs模板
// app.get('/',(req,res)=>{
//     fs.readFile(__dirname+'/index.html',(err,data)=>{
//         if(err)  return res.end('404')   
//         res.end(data)
//     })
// })
//4.2 监听请求，使用ejs模板
// app.get('/'||'index',(req,res)=>{
//     res.render('index')
// })
// .get('/detail',(req,res)=>{
//     res.render('detail')
// })
// .get('/list',(req,res)=>{
//     res.render('list')
// })
// .get('/',(req,res)=>{
//     res.render('index')
// })
// 4.3 把路径的判断交给路由模块来做
app.use(router)