window.addEventListener("load", function () {
	// 侧边栏固定模块
	var gud = document.querySelector(".gud");
	// 给他的子盒子添加事件
	gud.children[1].addEventListener("mouseover", function () {
		this.style.backgroundPosition = "-120px -239px";
	});
	gud.children[2].addEventListener("mouseover", function () {
		this.style.backgroundPosition = "-120px -199px";
	});
	gud.children[3].addEventListener("mouseover", function () {
		this.style.backgroundPosition = "-120px -41px";
	});
	// 鼠标离开 恢复原样
	gud.children[1].addEventListener("mouseout", function () {
		this.style.backgroundPosition = "-121px -119px";
	});
	gud.children[2].addEventListener("mouseout", function () {
		this.style.backgroundPosition = "-121px -159px";
	});
	gud.children[3].addEventListener("mouseout", function () {
		this.style.backgroundPosition = "-121px 0";
	});

	// 轮播图模块
	var container = document.querySelector(".body2_left");
	// 获取轮播图大盒子节点
	var w = document.querySelector(".body2_7");
	// 两个按钮的节点
	var btnL = document.querySelector(".btnL");
	var btnR = document.querySelector(".btnR");
	var num = 0;
	var index2 = 0;
	// 点击左侧按钮 让轮播图向左移动 612 px
	// (1) 鼠标经过 显示按钮 鼠标离开 隐藏按钮
	container.addEventListener("mouseover", function () {
		btnL.style.display = "block";
		btnR.style.display = "block";
	});
	container.addEventListener("mouseout", function () {
		btnL.style.display = "none";
		btnR.style.display = "none";
	});
	// (2)动态生成小圆圈
	var circles = document.querySelector(".circle");
	console.log(circles);
	for (i = 0; i < w.children.length; i++) {
		var lis = document.createElement("li");
		circles.append(lis);
		// 将创建好的li 添加一个自定义属性
		lis.setAttribute("data-index", i);
		// 给每个小圆圈添加一个点击事件
		lis.addEventListener("click", function () {
			// 排他思想
			for (i = 0; i < circles.children.length; i++) {
				circles.children[i].style.backgroundColor = "";
			}
			this.style.backgroundColor = "white";
			// 点击小圆圈 移动相应的图片
			var index = this.getAttribute("data-index");
			num = index;
			index2 = index;
			animtion(w, -(index * 612));
		});
	}
	// 将第一个小圆圈背景添加白色
	circles.children[0].style.backgroundColor = "white";
	// 无缝滚动 复制第一张图片的节点
	var first = w.children[0].cloneNode(true);
	w.append(first);
	// 点击左侧按钮 图片向左侧移动
	var flag = true;
	btnR.addEventListener("click", function () {
		// 节流阀
		if (flag) {
			flag = false;
			num++;
			if (num >= w.children.length) {
				num = 1;
				w.style.left = 0;
			}
			animtion(w, -(612 * num), function () {
				flag = true;
			});
			index2++;
			// 清除其他小圆圈的背景
			// 留下当前小圈圈的背景
			for (i = 0; i < circles.children.length; i++) {
				circles.children[i].style.backgroundColor = "";
			}
			if (index2 >= circles.children.length) {
				index2 = 0;
			}
			circles.children[index2].style.backgroundColor = "white";
		}
	});
	var num1 = 0;
	// index1 控制小圆圈的播放
	btnL.addEventListener("click", function () {
		if (flag) {
			flag = false;
			if (num == 0) {
				num = 5;
				w.style.left = -(5 * 612) + "px";
			}
			// console.log(flag)
			num--;
			animtion(w, -(612 * num), function () {
				flag = true;
			});
			// console.log(flag)
			// 点击右侧按钮 变量加一
			index2--;
			// 清除其他小圆圈的背景
			// 留下当前小圈圈的背景
			// 如果index2 < 0 则小圆圈要改为第四个
			if (index2 < 0) {
				index2 = 4;
			}
			for (i = 0; i < circles.children.length; i++) {
				circles.children[i].style.backgroundColor = "";
			}

			circles.children[index2].style.backgroundColor = "white";
		}
	});

	// 轮播图自动播放
	var time = setInterval(function () {
		btnR.click();
	}, 3000);
	// 鼠标离开 自动播放
	container.addEventListener("mouseout", function () {
		time = setInterval(function () {
			btnR.click();
		}, 3000);
	});
	// 鼠标经过 轮播图停止
	container.addEventListener("mouseover", function () {
		clearInterval(time);
	});

	// 热门模块
	var body2_1 = document.querySelector(".body2_1");
	// 排他思想
	fn(body2_1, "body2_1_animate");
	// 内容中心模块
	var body3_center_a1 = document.querySelector(".body3_center_a1");
	fn(body3_center_a1, "body3_center_a1_animate");
	// 英雄/皮肤模块
	var body3_right_center = document.querySelector(".body3_right_center");
	fn(body3_right_center, "body3_right_center_animate");
	// 赛事中心模块
	var body4_left_a3 = document.querySelector(".body4_left_a3");
	fn(body4_left_a3, "body4_left_a3_animate");
});
