$(function(){
    let pagenum=1
    let pagesize=2
    init()
   function init(){
    $.ajax({
      type:'get',
      url:'/getPostsList',
      dataType:'json',
      data:{
        pagenum,
        pagesize,
      },
      success:function(res){
        var html=template('postsListTem',res)
        $('tbody').html(html)
      }
    })
   }
      $(".pagination").bootstrapPaginator({
         //设置版本号
         bootstrapMajorVersion: 3,
              // 显示第几页：会添加对应的样式
              currentPage: pagenum,
              // 总页数:当前数据表的记录总数 / 每页所显示的记录数
              totalPages:5,//(cnt/pagesize)
              onPageClicked: function (event,originalEvent,type,page) {
                console.log(page)
                // 我们发现，这个page就是当前的合理页码值，我们只需要将全局的pagenum重置，并且重新获取数据就可以了
                pagenum = page
               init()
         }
    })
})

