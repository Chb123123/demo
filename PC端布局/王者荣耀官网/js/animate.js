function animtion(ojb, target, callback) {
	// 先清除以前的计时器
	clearInterval(ojb.move);
	ojb.move = setInterval(function () {
		// 定义元素的步长
		var setp = (target - ojb.offsetLeft) / 10;
		if (setp > 0) {
			setp = Math.ceil(setp);
		} else {
			setp = Math.floor(setp);
		}
		// if (setp <= 0) {
		// 	Math.floor(setp);
		// } else {
		// 	Math.ceil(setp);
		// }
		// 判断元素是否到达指定位置 如果到达则停止计时器
		if (ojb.offsetLeft == target) {
			clearInterval(ojb.move);
		}

		if (callback) {
		callback();
	}
		ojb.style.left = ojb.offsetLeft + setp + "px";
	}, 15);
	// 判断是否有回调函数，如果有，则调用函数
	
}

// 排他思想
// farther 父盒子元素
// className 要改的类名
function fn(farther, style) {
	for (var i = 0; i < farther.children.length; i++) {
		farther.children[i].addEventListener("mouseover", function () {
			for (var j = 0; j < farther.children.length; j++) {
				farther.children[j].className = "";
			}
			this.className = style;
		});
	}
}
