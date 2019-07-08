$(function(){

    $('#feature').on('change',function(){
        //获取当前文件
        var myfile=this.files[0]
        console.log(myfile);
        //创建formdata对象
        var formdata=new FormData()
        //追加参数
        formdata.append('abc',myfile)
        $.ajax({
            type:'post',
            url:'/uploadFile',
            data:formdata,
            processData:false,
            contentType:false,
            dataType:'json',
            success:function(res){
                console.log(res.img);
                $('[name=feature]').val(res.img)
                $('.thumbnail').attr('src','/uploads/'+res.img).show()
            }
        })
    })
    $('.row').on('submit',function(e){
        e.preventDefault()
        // console.log($('.row').serialize());
        $.ajax({
            type:'post',
            url:'/addPost',
            data:$('.row').serialize(),
            dataType:'json',
            success:function(res){
                if(res.code==200){
                    alert(res.msg)
                    location.href='posts'
                }
            }
        })
    })
    



})