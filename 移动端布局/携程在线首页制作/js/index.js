window.addEventListener("load", function () {
	if ("addEventListener" in document) {
		document.addEventListener(
			"DOMContentLoaded",
			function () {
				FastClick.attach(document.body);
			},
			false
		);
	}
	// 获取焦点图模块盒子
	var container = document.querySelector(".special_container");
	var special = document.querySelector(".special");
	var dots = document.querySelector(".dots");
	var specialWidth = container.clientWidth;
	var index = 0;
	var move = setInterval(function () {
		index++;
		var transitionX = -index * specialWidth;
		special.style.transition = "all 0.5s";
		special.style.transform = "translateX(" + transitionX + "px)";
	}, 2000);
	special.addEventListener("transitionend", function () {
		if (index >= 3) {
			index = 0;
			var transitionX = -index * specialWidth;
			special.style.transition = "none";
			special.style.transform = "translateX(" + transitionX + "px)";
		} else if (index < 0) {
			index = 2;
			var transitionX = -index * specialWidth;
			special.style.transition = "none";
			special.style.transform = "translateX(" + transitionX + "px)";
		}
		// 小圆点跟随变化
		// 把小圆点中带有 dots_style 清除
		dots.querySelector(".dots_style").classList.remove("dots_style");
		// 让当前索引号的小圆点 加上 dots_style 完成鼠标跟随效果
		dots.children[index].classList.add("dots_style");
	});
	// 手指按下轮播图 计时器停止
	// 手指触摸轮播图 获取触摸手指的坐标
	var staerX = 0;
	var moveX = 0; // 计算移动距离 后面会使用
	var flay = false; // 用来判断用户是否拖动图片
	container.addEventListener("touchstart", function (event) {
		staerX = event.targetTouches[0].pageX; // 获取手指点击屏幕的坐标
		clearInterval(move);
	});
	container.addEventListener("touchmove", function (event) {
		// 计算移动距离  移动的坐标减去初始的坐标
		moveX = event.targetTouches[0].pageX - staerX;
		// console.log(moveX);
		// 移动盒子 ： 盒子原来的位置 + 手指移动的距离
		var transition1 = -index * specialWidth + moveX;
		special.style.transform = "none";
		special.style.transform = "translateX(" + transition1 + "px)";
		flay = true; // 用户拖动了图片
		event.preventDefault(); // 阻止滚动屏幕的行为
	});
	// 手指离开 根据移动的距离判断是回弹还是播放上一张
	container.addEventListener("touchend", function () {
		// 如果用户拖动了图片 则进行判断 如果没有 则跳过 这样可以提高电脑资源
		if (flay) {
			// 如果移动的距离大于了 50 像素 就播放上一张或下一张
			if (Math.abs(moveX) > 50) {
				if (moveX > 0) {
					// 如果是右滑 moveX 是正值
					index--;
				} else {
					index++;
				}
				var translatex = -index * specialWidth;
				special.style.transition = "all 0.5s";
				special.style.transform = "translateX(" + translatex + "px)";
			} else {
				// 如果移动距离小于 50 像素 图片就回弹
				var translatex = -index * specialWidth;
				special.style.transition = "all 0.5s";
				special.style.transform = "translateX(" + translatex + "px)";
			}
		}
		// 手指离开 自动播放轮播图
		clearInterval(move); // 先清除之前的计时器 防止多个计时器运行
		move = setInterval(function () {
			index++;
			var transitionX = -index * specialWidth;
			special.style.transition = "all 0.5s";
			special.style.transform = "translateX(" + transitionX + "px)";
		}, 2000);
	});
});
