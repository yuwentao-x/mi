// 秒杀
function showTime() {
    var nowTime = new Date();
    var y = nowTime.getFullYear();
    var m = nowTime.getMonth();
    var d = nowTime.getDate();

    var target = new Date(y, m, d + 1);

    nowTime = nowTime.getTime();
    target = target.getTime();

    var differentTime = target - nowTime;

    differentTime = parseInt(differentTime / 1000);

    var day = differentTime / (24 * 60 * 60);
    day = Math.floor(day);

    var afterHours = differentTime - day * 24 * 60 * 60;
    var hours = parseInt(afterHours / 3600);

    var afterMinutes = afterHours - hours * 3600;

    var minutes = Math.floor(afterMinutes / 60);

    var seconds = afterMinutes - minutes * 60;

    var arr = [
        parseInt(hours / 10), hours % 10,
        parseInt(minutes / 10), minutes % 10,
        parseInt(seconds / 10), seconds % 10,
    ]

    $('.countdown>span:nth-of-type(1)').text(arr[0].toString() + arr[1]);
    $('.countdown>span:nth-of-type(2)').text(arr[2].toString() + arr[3]);
    $('.countdown>span:nth-of-type(3)').text(arr[4].toString() + arr[5]);
}

showTime();

setInterval(function () {
    showTime();
}, 1000)



// 商城下弹菜单栏
$(function () {
    $('.nav-list>.nav-item').each(function (index, item) {
        if (index <= 6) {
            $(item).hover(function () {
                $.ajax({
                    url: `../json/header-menu${index + 1}.json`,
                    type: 'get',
                    dataType: 'json',
                    cache: false,
                    success: function (res) {
                        $.each(res, function (i, v) {
                            $('.header-nav-menu li').eq(i)
                                .find('img')
                                .attr("src", v.img);

                            $('.header-nav-menu li').eq(i)
                                .find('.title')
                                .html(v.title);

                            $('.header-nav-menu li').eq(i)
                                .find('.price')
                                .html(v.price);

                            $('.header-nav-menu li').eq(i)
                                .find('a')
                                .attr("href", `./Details.html?shuju=header-menu${index + 1}.json&number=${i}`)
                        })
                        $('.header-nav-menu').css('border-bottom', '1px solid #e0e0e0');
                    }
                })
                $('.header-nav-menu').stop();
                $('.header-nav-menu').slideDown(229);
            }, function () {
                $('.header-nav-menu').stop();
                $('.header-nav-menu').slideUp();
            })
        }
    })
    $('.header-nav-menu').hover(function () {
        $('.header-nav-menu').stop();
        $('.header-nav-menu').slideDown(229);
    }, function () {
        $('.header-nav-menu').stop();
        $('.header-nav-menu').slideUp();
    })

})




// 回到顶部
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.back-top').css('visibility', "visible");
            $('.xm-product-box').css({
                position: "fixed",
                top: 0,
                left: 0
            })
        } else {
            $('.back-top').css('visibility', "hidden");
            $('.xm-product-box').css('position', 'relative');
        }
    })

    $('.back-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    })

})



// 加入购物车
$(function () {
    $('#addToCart').eq(0).click(function () {
        $.ajax({
            url: '../interface/addwq.php',
            data: {
                id: 'P30',
                name: '华为P30至尊版',
                price: $('.all-price').text(),
                img: '../images/details-swiper-2.jpg',
                num: 1
            },
            success: function (res) {
                if (res.code) {
                    alert('加入购物车成功')
                }
            },
            dataType: 'json'

        })
    })
})

