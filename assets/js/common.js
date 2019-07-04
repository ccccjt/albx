$(function(){
    var href=location.href
    var index=href.lastIndexOf('/')+1
    var index2=href.lastIndexOf('?')
    var routerName=''
    if(index2=-1){
        routerName=href.slice(index)
    }else{
        routerName=href.slice(index,index2)
    }
    if(routerName=='posts'||routerName=='post-add'||routerName=='categories'){
        $('#listPosts').attr('aria-expanded',true)
        $('#listPosts').removeClass()
        $('#menu-posts').addClass('in')
        $('#menu-posts').attr('aria-expanded',true)
    }
    if(routerName=='nav-menus'||routerName=='slides'||routerName=='settings'){
        $('#listSettings').attr('aria-expanded',true)
        $('#listSettings').removeClass()
        $('#menu-settings').addClass('in')
        $('#menu-settings').attr('aria-expanded',true)
    }
    $('#'+routerName).addClass('active')
})