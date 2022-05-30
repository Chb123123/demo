window.addEventListener("load", function () {
	// // 获取轮播图盒子节点
	// var container = document.querySelector(".container");
	// var banners = document.querySelector(".banners");
	// var num = 0; // 定义一个计时器
	// // 自动生成小圆点
	// var trigger = document.querySelector(".trigger");
	// for (var i = 0; i < banners.children.length; i++) {
	// 	var lis = document.createElement("li");
	// 	trigger.append(lis);
	// 	// 将小圆点设置一个自定义属性
	// 	lis.setAttribute("data-index", i);
	// 	// 将小圆点添加点击事件
	// 	lis.addEventListener("click", function () {
	// 		for (var j = 0; j < trigger.children.length; j++) {
	// 			// 将元素的类名清除
	// 			trigger.children[j].style.backgroundColor = "rgb(64, 166, 159)";
	// 			trigger.children[j].style.width = "0.24rem";
	// 		}
	// 		this.style.backgroundColor = "white";
	// 		this.style.width = "0.48rem";
	// 		// 获取自定义属性的序列号
	// 		var index = this.getAttribute("data-index");
	// 		num = index;
	// 		// 利用自定义属性调用动画
	// 		animtion(banners, -(index * banners.children[0].clientWidth));
	// 	});
	// }
	// // 克隆第一张图片到最后，制作无缝动画
	// var first = banners.children[0].cloneNode(true);
	// banners.append(first);
	// // 先将小圆点的第一个元素类名设为 trigger_style
	// trigger.children[num].style.backgroundColor = "white";
	// trigger.children[num].style.width = "0.48rem";
	// var banners_width = banners.children[0].clientWidth;
	// window.onresize = function () {
	// 	banners_width = banners.children[0].clientWidth; // 获取轮播图子元素的宽度
	// 	console.log(banners_width);
	// };

	// // 轮播图自动播放
	// var move = setInterval(function () {
	// 	num++;
	// 	if (num > trigger.children.length) {
	// 		banners.style.left = 0;
	// 		num = 1;
	// 	}
	// 	animtion(banners, -(num * banners_width));
	// }, 3000);

	// // 手指按下轮播图 轮播图停止播放
	// container.addEventListener("mouseover", function () {
	// 	clearInterval(move);
	// });
	// // 手指离开自动播放
	// container.addEventListener("mouseout", function () {
	// 	move = setInterval(function () {
	// 		num++;
	// 		if (num >= banners.children.length) {
	// 			banners.style.left = 0;
	// 			num = 1;
	// 		}
	// 		animtion(banners, -(num * banners_width));
	// 	}, 3000);
	// });

	// 返回顶部模块
	var goback = document.querySelector(".goback");
	var banner_bottom = document.querySelector(".banner_bottom");
	this.window.addEventListener("scroll", function () {
		if (this.window.pageYOffset >= banner_bottom.offsetTop) {
			goback.style.display = "block";
		} else {
			goback.style.display = "none";
		}
	});
	goback.addEventListener("click", function () {
		window.scroll(0, 0);
	});

	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	// 推荐好物轮播图模块
	// 获取轮播图容器
	var focusMap = document.querySelector(".focus-map");
	var times = 0; // 轮播图计时器
	var focus_container = document.querySelector(".focus_container");
	var focus_containerHeight = focus_container.children[0].clientHeight;
	var mv = setInterval(function () {
		times++;
		var transitionY = -times * focus_containerHeight;
		focus_container.style.transition = "all 0.8s";
		focus_container.style.transform = "translateY(" + transitionY + "px)";
	}, 3000);
	focus_container.addEventListener("transitionend", function () {
		if (times > focus_container.children.length - 2) {
			times = 0;
			var transitionY = -times * focus_containerHeight;
			focus_container.style.transition = "none";
			focus_container.style.transform = "translateY(" + transitionY + "px)";
		}
	});
});
