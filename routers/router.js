//1、引入模块
const express=require('express')

//2、创建路由
const router =express.Router()
//4、引入控制器模块
const pageCtrl=require('../controllers/pageCtrl')
const postsCtrl=require('../controllers/postsCtrl')
const cateCtrl=require('../controllers/cateCtrl')
const uploadCtrl=require('../controllers/uploadCtrl')
const userCtrl=require('../controllers/userCtrl')

//3.1 处理路径判断，读取文件
// router.get('/'||'index',(req,res)=>{
//     res.render('index')
// })
// .get('/detail',(req,res)=>{
//     res.render('detail')
// })
// .get('/list',(req,res)=>{
//     res.render('list')
// })

//3.2路由只做路径的判断，渲染的工作交由控制器来做
// router.get('/',(req,res)=>{
//     //调用pageCtrl的方法显示页面
//     pageCtrl.showIndexPage(req,res)
// })
// .get('/detail',(req,res)=>{
//     pageCtrl.showDetailPage(req,res)
// })
// .get('/list',(req,res)=>{
//     pageCtrl.showListPage(req,res)
// })
//3.3上面代码优化
// 客户端主页
router.get('/',pageCtrl.showIndexPage)
//详情页面
.get('/detail',pageCtrl.showDetailPage)  
//分类页面
.get('/list',pageCtrl.showListPage)
//后台管理主页面
.get('/admin/index',pageCtrl.showAdminIndexPage)
//文章分类目录页面
.get('/admin/categories',pageCtrl.showAdminCategoriesPage)
//评论页面
.get('/admin/comments',pageCtrl.showAdminCommentsPage)
//登录页面
.get('/admin/login',pageCtrl.showAdminLoginPage)
//设置分类导航菜单
.get('/admin/nav-menus',pageCtrl.showAdminNav_menusPage)
//修改密码页面
.get('/admin/password-reset',pageCtrl.showAdminPassword_resetPage)
//文章之写文章页面
.get('/admin/post-add',pageCtrl.showAdminPost_addPage)
//文章之所有文章页面
.get('/admin/posts',pageCtrl.showAdminPostsPage)
//个人资料页面
.get('/admin/profile',pageCtrl.showAdminProfilePage)
//设置之网站设置
.get('/admin/settings',pageCtrl.showAdminSettingsPage)
//设置之图片轮播
.get('/admin/slides',pageCtrl.showAdminSlidesPage)
//用户页面
.get('/admin/users',pageCtrl.showAdminUsersPage)

//获取所有文章数据请求
.get('/getPostsList',postsCtrl.getPostsList)
//获取文章分类
.get('/getCategories',cateCtrl.getCategories)
//删除文章
.get('/delPostById',postsCtrl.delPostById)
//添加文章
.post('/addPost',postsCtrl.addPost)
//上传文件
.post('/uploadFile',uploadCtrl.uploadFile)
//验证用户信息
.post('/login',userCtrl.login)


//4、向外暴露
module.exports=router
