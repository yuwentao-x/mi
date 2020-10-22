var mySwiper = new Swiper('.home-hero-swiper', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    effect: 'fade',


    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})
//鼠标覆盖停止自动切换
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}

//鼠标离开开始自动切换
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
}



var mySwiper = new Swiper('.swiper-2', {
    // direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 14,


    // 如果需要分页器
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})

