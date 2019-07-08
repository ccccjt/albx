//1、引入核心模块
const express= require('express')

//4.4引入路由模块
const router=require('./routers/router')
//4.5引入body-parse插件
const bodyParser=require('body-parser')
//5、使用session来实现状态保持：判断是否登录
const session = require('express-session')
//2、创建服务器
const app=express()

//设置静态资源托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
app.use('/node_modules',express.static('node_modules'))

// 添加body-parser的配置
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

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
//5.1使用session中间件
app.use(session({
    //对session加密：加盐，可以设置一个只有自己知道的字符串，ms5加密
    secret:'md5加密，百度一下你就知道',
    //重新保存：强制会话保存即使是未修改的，默认为true，
    resave:false,
    //强制未初始化的session保存到数据库
    saveUninitialized:false
}))
    //5.2 设置登录验证，下面这个中间件在每次请求时都经过
    app.use(function(req,res,next){
        //设置不需要登录也可以操作的页面
        if(req.session.isLogin &&req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin')){
            //这几个条件分别是：是否有req.session.isLogin这个属性，且这个属性的值为'true'（登录成功才会写入这个属性）；请求的路径是否为登录页面，请求的路径是否包含后台页面前缀，-1则是不包含
            next()  //next()满足条件才能继续操作
        }else{
            //若是没有登录且进入了其他页面则返回登录页面：重定向
            //res.redirect()
            res.redirect('/admin/login')
        }
    })


// 4.3 把路径的判断交给路由模块来做
app.use(router)