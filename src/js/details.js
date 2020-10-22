$(function () {
    var params = getData();
    function getData() {
        var search = location.search;	//获取location的search属性，保存在search中
        var params = {};		//创建空对象params
        if (search != "") {		//如果search不是空字符串
            search.slice(1).split("&").forEach(	//?username=zhangdong&pwd=123456;//search去开头?，按&切割为数组，forEach
                function (val) {
                    var arr = val.split("=");		//将当前元素值按=切割，保存在arr中
                    params[arr[0]] = arr[1];		//向params中添加一个元素,属性名为arr[0],值为arr[1]
                }
            );
        }
        return params;		//返回params
    }
    console.log(params)


    $.ajax({
        url: `../json/${params.shuju}`,
        type: 'get',
        dataType: 'json',
        success: function (res) {
            var duixiang = res[params.number];
            console.log(duixiang);
            $('.detatils .swiper-slide').eq(0)
                .find('img')
                .attr('src', `${duixiang.img}`);

            $('.product-con>h2').html(duixiang.title);

            $('.price-info>span').html(`${duixiang.price}`);


        }
    })

    $('.option-box li').click(function () {
        $(this)  //你点击的那一个li
            .addClass('active') //添加类名
            .siblings() //所有兄弟元素(不包括自己)
            .removeClass('active') //移除类名
    })
})
