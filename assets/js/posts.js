$(function () {
  // 当前页
  let pagenum = 1
  //每页的数量
  let pagesize = 2
  init({})
  function init(query) {
    $.ajax({
      type: 'get',
      url: '/getPostsList',
      dataType: 'json',
      data: {
        pagenum,
        pagesize,
        ...query
      },
      success: function (res) {
        var html = template('postsListTem', res.data)
        $('tbody').html(html)
        // console.log(res);
        setPage(Math.ceil(res.data.total / pagesize))
      }
    })
  };
  (function () {
    $.ajax({
      type: 'get',
      url: '/getCategories',
      success: (res) => {
        // console.log(res);
        var html = '<option value="">所有分类</option>'
        for (let i = 0; i < res.length; i++) {
          html += `<option value="${res[i].slug}">${res[i].name}</option>`
        }
        $('#selector').html(html)
      }
    })
  })();
  $('#selector').on('change', () => {
    let query = {}
    query.status = $('#status').val()
    query.cate = $('#selector').val()
    init(query)
  })
  $('#status').on('change', () => {
    let query = {}
    query.status = $('#status').val()
    query.cate = $('#selector').val()
    init(query)
  })
  $('#btn-selector').on('click', () => {
    let query = {}
    query.status = $('#status').val()
    query.cate = $('#selector').val()
    init(query)
  })
  function setPage(count) {
    $(".pagination").bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,

      // 显示第几页：会添加对应的样式
      currentPage: pagenum,
      // 总页数:当前数据表的记录总数 / 每页所显示的记录数

      totalPages: count,//(cnt/pagesize)
      onPageClicked: function (event, originalEvent, type, page) {
        console.log(page)
        //这个page就是当前的合理页码值，只需要将全局的pagenum重置，并且重新获取数据就可以了
        pagenum = page
        init()
      }
    })
  }
  //删除文章————事件委托
  $('tbody').on('click', '.del-btn', function () {
    // console.log($(this));
    if (window.confirm('确认是否删除？')) {
      var id = $(this).data('id')
      console.log(id);
      $.ajax({
        type: 'get',
        url: '/delPostById',
        data: {
          id: id
        },
        success: (res) => {
          location.href = '127.0.0.1:3000/posts'
        }
      })
    }
  })


})


