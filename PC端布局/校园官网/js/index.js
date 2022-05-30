$(function () {
    // 导航栏鼠标经过当前标签变颜色
    $('.nav a').on({
        mouseover: function () {
            $(this).addClass('nav-style').parent().siblings().children().removeClass('nav-style')
            // 鼠标经过当前的 li 下拉菜单显示 鼠标离开 下来菜单隐藏
            var index = $(this).parent().index()
            // console.log(index)
            $(this).parent().children('.nav-menu').stop().slideDown(100)
        },
        // 鼠标离开 下拉菜单收起
        mouseout: function () {
            $(this).parent().children('.nav-menu').stop().slideUp(200)
        }
    })
    // 鼠标移动 导航栏 下拉菜单显示
    $('.nav').on('mouseout', function () {
        $(this).children().children('.nav-menu').hide()
    })
    // 轮播图大模块
    // 鼠标经过小圆点 对应的图片显示出来 
    $(".cat-dost").children().on("mouseover",function(){
        $(this).css("background-color","#0065ab").siblings().css('background-color','white')
        $('.cat-map').children().eq($(this).index()).stop().fadeTo(300,1).siblings().stop().fadeTo(300,0)
    })
    // 鼠标悬停在 大轮播图上面 轮播图动画跳转
    $(".cat-map").on("muserover",function(){
        clearInterval()
    })
    // 校园要闻轮播图模块
    var num = 0;
    $('.top').on('mouseover', 'li', function () {
        // console.log($(this).index())
        var index = $(this).index()
        num = index
        $(this).css('background-color', 'rgb(235, 91, 84)').siblings().css('background-color', 'white')
        $('.cat6_1_10').stop().animate({
            left: -670 * index
        }, 500)
    })
    // 鼠标经过轮播图 计数器停止 鼠标离开 计数器打开
    var times = setInterval(function () {
        num++
        if (num > 5) {
            num = 1;
            $('.cat6_1_10').css('left', '0')
        }
        $('.cat6_1_10').stop().animate({
            left: -670 * num
        }, 400)
        $('.top').children('li').eq(num).css('background-color', 'rgb(235, 91, 84)').siblings().css('background-color', 'white')
        if (num == 5) {
            $('.top').children('li').eq(0).css('background-color', 'rgb(235, 91, 84)').siblings().css('background-color', 'white')
        }
    }, 5000)
    // 鼠标经过 停止轮播图
    $('.cat6').on('mouseover', function () {
        clearInterval(times)
    })
    $('.cat6').on('mouseout', function () {
        times = setInterval(function () {
            num++

            if (num > 5) {
                num = 1;

                $('.cat6_1_10').css('left', '0')
            }
            $('.cat6_1_10').stop().animate({
                left: -670 * num
            }, 500)
            $('.top').children('li').eq(num).css('background-color', 'rgb(235, 91, 84)').siblings().css('background-color', 'white')
            if (num == 5) {
                $('.top').children('li').eq(0).css('background-color', 'rgb(235, 91, 84)').siblings().css('background-color', 'white')
            }
        }, 2000)
    })
    // 专题模块
    // 鼠标经过专题模块 焦点图停止滚动
    var num1 = 0;
    // 鼠标点击左箭头 图片向左滑动
    $('.btn-left').on('click', function () {
        num1++
        if (num1 > 4) {
            num1 = 1;
            $('.gd-map').css('left', '0')
        }
        // console.log(num1)
        $('.gd-map').animate({
            left: -328 * num1,
        })
    })
    // 鼠标点击右箭头 图片向右移动
    $('.btn-right').on('click', function () {
        num--
        if (num < 0) {
            num = 3;
            $('.gd-map').css('left', '1320px')
        }
        $('.gd-map').animate({
            left: -328 * num
        })
    })
    // 鼠标离开 轮播图自动播放
    var times1 = setInterval(function () {
        $('.btn-left').click()
    }, 3000)
    // 鼠标经过轮播图 轮播图停止播放
    $('.gd-map').on({
        mouseover: function () {
            clearInterval(times1)
        },
        mouseout: function () {
            times1 = setInterval(function () {
                $('.btn-left').click()
            }, 5000)
        }
    })
    // 侧边栏模块
    // 点击 关闭按钮 侧边栏收起
    var state = true
    $('.closure').on('click', function () {
        if (state) {
            // state = false;
            $('.fixed-none').fadeTo(100, 1)
            $('.fixed_nav').hide(500)
        }
    })
    $('.fixed-none').on('click', function () {
        // state = false;
        $('.fixed-none').fadeTo(100, 0)
        $('.fixed_nav').show(500)
    })
    // 鼠标经过右侧固定导航栏 导航栏下的图片显示
    $(".fixed_nav").children("li").on({
        mouseover: function () {
            $(this).children('.fixed_nav_map').stop().show()
        },
        mouseout: function() {
            $(this).children('.fixed_nav_map').stop().hide()
        }
    })
})