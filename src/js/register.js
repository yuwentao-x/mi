$(function () {
    $('.btn').eq(0).click(function () {
        var uName = $('#username').val();
        var uPass = $('#password').val();
        console.log(uName);
        console.log(uPass);
        $.ajax({
            url: '../interface/register.php',
            type: 'get',
            data: {
                username: uName,
                password: uPass
            },
            dataType: 'json',
            cache: false,
            success: function (res) {
                if (res.code == 1) {
                    $('.btn').val('账号创建成功，正在跳转至登陆页面...');
                    var timer1 = setTimeout(() => {
                        location.href = './login.html';
                        clearTimeout(timer1);
                    }, 2000);
                } else if (res.code == 0) {
                    alert('服务器错误');
                } else if (res.code == 2) {
                    console.log(2);
                    $('#btn_tip').html('已存在账户，请您直接登录');
                }
            },
            error: function () {
                alert('无法连接至服务器');
            }
        })
    })
})

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