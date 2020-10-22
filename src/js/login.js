$(function () {
    $('.login_type').click(function () {
        $(this).addClass('now')
            .siblings('.login_type')
            .removeClass('now')
            .parent()
            .next()
            .children()
            .removeClass('tabs_con_now')
            .eq($(this).index())
            .addClass('tabs_con_now');
    })

    $('.ft_nav').children('a').click(function () {
        if ($(this).index() < 3) {
            $(this).addClass('active')
                .siblings()
                .removeClass('active');
        }

    })

})

$(function () {
    console.log(333);
    $('.btn').eq(0).click(function () {
        var uName = $('#username').val();
        var uPass = $('#password').val();
        $.ajax({
            url: '../interface/login.php',
            type: 'get',
            data: {
                username: uName,
                password: uPass
            },
            dataType: 'json',
            cache: false,
            success: function (res) {
                if (res.code == 1) {
                    console.log(1);
                    $('.btn').val('登录成功，正在跳转...');
                    var timer1 = setTimeout(() => {
                        location.href = './mi-index.html';
                        clearTimeout(timer1);
                    }, 2000)
                } else {
                    $('.btn-tip').html('用户名密码错误');
                    $('#password').val('').focus();
                }
            },
            error: function () {
                alert('无法连接至服务器');
            }
        })
    })
})


