//1、引入模块
// const express=require('express')

//向外暴露
module.exports={
    // 显示页面方法
    showIndexPage(req,res){
        res.render('index')
    },
    showDetailPage(req,res){
        res.render('detail')
    },
    showListPage(req,res){
        res.render('list')
    },
    showAdminIndexPage(req,res){
        res.render('admin/index')
    },
    showAdminCategoriesPage(req,res){
        res.render('admin/categories')
    },
    showAdminCommentsPage(req,res){
        res.render('admin/comments')
    },
    showAdminLoginPage(req,res){
        res.render('admin/login')
    },
    showAdminNav_menusPage(req,res){
        res.render('admin/nav-menus')
    },
    showAdminPassword_resetPage(req,res){
        res.render('admin/password-reset')
    },
    showAdminPost_addPage(req,res){
        res.render('admin/post-add')
    },
    showAdminPostsPage(req,res){
        res.render('admin/posts')
    },
    showAdminProfilePage(req,res){
        res.render('admin/profile')
    },
    showAdminSettingsPage(req,res){
        res.render('admin/settings')
    },
    showAdminSlidesPage(req,res){
        res.render('admin/slides')
    },
    showAdminUsersPage(req,res){
        res.render('admin/users')
    }
}