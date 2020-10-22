showCart();
function showCart() {
    $.ajax({
        url: '../interface/showlist.php',
        async: false,
        success: function (res) {
            console.log(res);
            if (res.code) {
                var arr = res.data;
                if (res.data) {
                    //如果有商品,table显示,div隐藏
                    $('.cart-wrap').show();
                    $('.empty-cart-top').hide();

                    $('.item-table').empty();
                    var allPrice = 0;
                    var allNum = 0;
                    var selectedNum = 0;
                    $.each(arr, function (index, item) {
                        $('.item-table').append(`
                        <div class="item-row clearfix" id="${item.product_id}">
                            <div class="col col-check">
                                <i class="iconfont icon-checkbox icon-checkbox-selected">√</i>
                            </div>
                        <div class="col col-img">
                            <a href="#"><img src="${item.product_img}" alt="" width="80" height="80"></a>
                        </div>
                        <div class="col col-name">
                            <h3 class="name"><a href="#">${item.product_name}</a></h3>
                        </div>
                        <div class="col col-price">
                            ${item.product_price}元
                            <p class="pre-info"></p>
                        </div>
                        <div class="col col-num">
                            <div class="change-goods-num clearfix">
                            <a href="#" class="jian">-</a>
                            <input type="text" autocomplete="off" class="good-num" value="${item.product_num}">
                            <a href="#" class="add">+</a>
                            </div>
                        </div>
                        <div class="col col-total">
                            ${(item.product_price * item.product_num).toFixed(2)}元
                            <p class="pre-info"></p>
                        </div>
                        <div class="col col-action">
                            <a href="#" class="del">x</a>
                        </div>
                        </div>`)

                        allNum += parseInt(item.product_num);
                        allPrice += item.product_price * item.product_num;
                        selectedNum = allNum;
                        console.log(selectedNum);


                    })
                    $('#all-num').html(allNum);
                    $('#allPrice').html(allPrice);
                    $('#selected-num').html(selectedNum);

                    $('.icon-checkbox').click(function () {
                        $('.icon-checkbox').toggleClass('icon-checkbox-selected');

                        // showCart();
                    })
                }
            } else {
                $('.cart-wrap').hide();
                $('.empty-cart-top').show();
            }
        },
        dataType: 'json',
        cache: false
    })


}

$(function () {


})


$('.item-table').click(function (e) {
    var target = e.target;

    if ((target.className == 'add') || (target.className == 'jian')) {
        $.ajax({
            url: '../interface/updatewq.php',
            data: {
                type: target.className,
                id: $(target).parents('.item-row').attr('id')
            },
            success: function (res) {
                // console.log(res);
                if (res.code) {
                    showCart()
                }
            },
            dataType: 'json'
        })
    } else if (target.className == 'del') {
        $.ajax({
            url: '../interface/delwq.php',
            data: {
                id: $(target).parents('.item-row').attr('id').trim()
            },

            success: function (res) {
                // console.log($(target).parents('.item-row').attr('id'));
                // console.log(res);
                if (res.code) {
                    showCart();
                }
            },
            dataType: 'json'
        })
    }

})

$(function () {
    $.ajax({
        url: '../json/cart.json',
        data: 'get',
        dataType: 'json',
        cache: false,
        async: false,
        success: function (res) {
            $.each(res, function (i, v) {
                $('.recommend-list').append(
                    `<li class="recommend-item" id="${v.id}">
                <a href="#">
                    <img src="${v.img}" alt="">
                    <div class="recommend-name">${v.title}</div>
                    <div class="recommend-price"><span>${v.price}</span>元</div>
                    <div class="recommend-tips">${v.tips}</div>
                </a>
                <div class="recommend-action">
                    <a href="javascript:void(0)"
                        class="btn btn-small btn-line-primary">加入购物车</a>
                </div>
                <div class="recommend-notice">
                    <a class="btn btn-block btn-green btn-notice">成功加入购物车</a>
                </div>
            </li>`
                )
            })
        }
    })

    $('.btn-line-primary').click(function () {
        console.log(2);
        $.ajax({
            url: '../interface/addwq.php',
            data: {
                id: $(this).parent().parent().attr('id'),
                name: $(this).parent().siblings().children('.recommend-name').text(),
                price: $(this).parent().siblings().children('.recommend-price').children('span').text(),
                img: $(this).parent().siblings().children('img').attr('src'),
                num: 1
            },
            success: function (res) {
                console.log(res);
                console.log();
                if (res.code) {
                    location.reload();
                }
            }, dataType: 'json'
        })
    })
})