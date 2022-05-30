$(function () {
	// 立即执行函数 可以减少命名冲突
	(function () {
		// 禁止鼠标右键菜单
		// contextmenu 主要控制应该何时显示上下文菜单，主要由于程序员取消默认的上下文菜单
		document.addEventListener("contextmenu", function (e) {
			e.preventDefault();
		});
		// 禁止鼠标选中(selectstart 开始选中)
		document.addEventListener("selectstart", function (event) {
			event.preventDefault();
		});
		// 点击设备监控栏 相应的样式发生改变
		$(".fault-head").on("click", "a", function () {
			$(this).addClass("fault-style").siblings("a").removeClass("fault-style");
			if ($(this).index() == 0) {
				$(".fault-container").show();
				$(".abnormal-container").hide();
			} else {
				$(".fault-container").hide();
				$(".abnormal-container").show();
			}
		});
		$(".fault-detail-ul").on("mouseover", "li", function () {
			$(this).children(".dots").show();
		});
		$(".fault-detail-ul").on("mouseout", "li", function () {
			$(this).children(".dots").hide();
		});
		// 克隆 故障监控模块的 li 让他形成无缝滚动
		var clone = $(".fault-detail-ul").children("li").clone();
		$(".fault-detail-ul").append(clone);
		var clone1 = $(".abnormal-detail-ul").children("li").clone();
		$(".abnormal-detail-ul").append(clone1);
	})();
	(function () {
		// 将样式引入到页面
		var mycharts = echarts.init(document.querySelector(".cal-1"));
		var option = {
			textStyle: {
				color: '#00FAFA',
			},
			series: [
				{
					name: "Area Mode",
					type: "pie",
					radius: ['10%', '70%'],
					center: ['50%', '50%'],
					roseType: "area",
					itemStyle: {
						borderRadius: 5,
					},
					data: [
						{ value: 30, name: "吉安" },
						{ value: 28, name: "泰和" },
						{ value: 26, name: "九江" },
						{ value: 24, name: "长沙" },
						{ value: 22, name: "南昌" },
						{ value: 20, name: "赣州" },
						{ value: 18, name: "萍乡" },
						{ value: 36, name: "福建" },
					],
					label: {
						fontSize: 10
					},
					labelLine: {
						// 连接图像的线段
						length: 6,
						// 连接文字的线段
						length2: 8
					},
				},
			],
		};
		window.onresize = mycharts.resize
		mycharts.setOption(option);
	})();
	(function () {
		var myChart = echarts.init(document.querySelector('.cal-3'))
		// prettier-ignore
		let dataAxis = ['北京', '上海', '长沙', '南昌', '赣州', '厦门', '天津', '武汉', '江西', '吉安', '泰和', '小龙'];
		// prettier-ignore
		let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
		let yMax = 500;
		let dataShadow = [];
		for (let i = 0; i < data.length; i++) {
			dataShadow.push(yMax);
		}
		var option = {
			// title: {
			//   text: '特性示例：渐变色 阴影 点击缩放',
			//   subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
			// },
			grid: {
				top: 10,
				left: 40,
				right: 0,
				bottom: 20
			},
			textStyle: {
				color: '#00FAFA',
			},
			xAxis: {
				data: dataAxis,
				axisLabel: {
					inside: false,
					color: '#fff'
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				z: 10
			},
			yAxis: {
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: '#999'
				}
			},
			dataZoom: [
				{
					type: 'inside'
				}
			],
			series: [
				{
					type: 'bar',
					// showBackground: true,
					itemStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{ offset: 0, color: '#00F5F8' },
							{ offset: 0.5, color: '#188df0' },
							{ offset: 1, color: 'blue' }
						])
					},
					color: 'blue',
					emphasis: {
						itemStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{ offset: 0, color: '#2378f7' },
								{ offset: 0.5, color: '#2378f7' },
								{ offset: 1, color: 'blue' }
							])
						}
					},
					data: data
				}
			]
		};
		// Enable data zoom when user click bar.
		const zoomSize = 6;
		myChart.on('click', function (params) {
			console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
			myChart.dispatchAction({
				type: 'dataZoom',
				startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
				endValue:
					dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
			});
		});
		myChart.setOption(option)
	})();
	// 销售模块
	(function () {
		var myChart = echarts.init(document.querySelector('.channel-right-cal'))
		var option = {
			legend: {
				top: 0,
				bottom: 0,
				left: 0,
				textStyle: {
					color: 'red'
				},
			},
			series: [
				{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 1,
					splitNumber: 8,
					axisLine: {
						lineStyle: {
							width: 6,
							color: [
								[0.2, '#12274D'],
								[0.5, '#00E3F3'],
								[0.75, '#1476F2'],
								[1, '#010BFD']
							]
						}
					},
					pointer: {
						icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
						length: '12%',
						width: 20,
						offsetCenter: [0, '-70%'],
						itemStyle: {
							color: 'auto'
						}
					},
					axisTick: {
						length: 12,
						lineStyle: {
							color: 'auto',
							width: 2
						}
					},
					splitLine: {
						length: 20,
						lineStyle: {
							color: 'auto',
							width: 5
						}
					},
					axisLabel: {
						color: '#464646',
						fontSize: 20,
						distance: -60,
						formatter: function (value) {
							if (value === 0.875) {
								return '';
							} else if (value === 0.625) {
								return '';
							} else if (value === 0.375) {
								return '';
							} else if (value === 0.125) {
								return '';
							}
							return '';
						}
					},
					title: {
						offsetCenter: [0, '-20%'],
						fontSize: 30
					},
					detail: {
						fontSize: 50,
						offsetCenter: [0, '0%'],
						valueAnimation: true,
						formatter: function (value) {
							return Math.round(value * 100) + '%';
						},
						color: 'red'
					},
				}
			]
		};
		myChart.setOption(option)
	})();
	// 全国排行模块
	(function () {
		var num = 0;
		// 鼠标经过各省热销 当前显示的背景变成透明
		$('.tronphy-cal-center').on('mouseover', 'li', function () {
			$(this).addClass('tronphy-cal-center-style').siblings().removeClass()
			$('.trophy-detail').eq($(this).index()).show().siblings().hide()
			num = $(this).index()
		})

		setInterval(function () {
			$('.tronphy-cal-center').children().eq(num).addClass('tronphy-cal-center-style').siblings().removeClass()
			$('.trophy-detail').eq(num).show().siblings().hide()
			num++
			if (num >= 5) {
				num = 0
			}
		}, 1000)
	})();
	// 销售统计模块
	(function () {
		var num = 1;
		var times = setInterval(function () {
			$('.Statistics .head').children('span').eq(num).addClass('Statistics-style').siblings('span').removeClass()
			num++
			if (num >= 4) {
				num = 0
			}
		}, 1000)
		$('.Statistics .head').on('mouseover', 'span', function () {
			$(this).addClass('Statistics-style').siblings('span').removeClass()
			num = $(this).index()
			clearInterval(times)
		})

		// 鼠标离开 销售统计 计数器开始
		$('.Statistics .head').on('mouseout', 'span', function () {
			clearInterval(times)
			times = setInterval(function () {
				$('.Statistics .head').children('span').eq(num).addClass('Statistics-style').siblings('span').removeClass()
				num++
				if (num >= 4) {
					num = 0
				}
			}, 1000)
		})
	})();
	(function () {
		var myChart = echarts.init(document.querySelector('.chanel-left-cal'))
		const dataBJ = [
			[55, 9, 56, 0.46, 18, 6, 1],
			[25, 11, 21, 0.65, 34, 9, 2],
			[56, 7, 63, 0.3, 14, 5, 3],
			[33, 7, 29, 0.33, 16, 6, 4],
			[42, 24, 44, 0.76, 40, 16, 5],
			[82, 58, 90, 1.77, 68, 33, 6],
			[74, 49, 77, 1.46, 48, 27, 7],
			[78, 55, 80, 1.29, 59, 29, 8],
			[267, 216, 280, 4.8, 108, 64, 9],
			[185, 127, 216, 2.52, 61, 27, 10],
			[39, 19, 38, 0.57, 31, 15, 11],
			[41, 11, 40, 0.43, 21, 7, 12],
			[64, 38, 74, 1.04, 46, 22, 13],
			[108, 79, 120, 1.7, 75, 41, 14],
			[108, 63, 116, 1.48, 44, 26, 15],
			[33, 6, 29, 0.34, 13, 5, 16],
			[94, 66, 110, 1.54, 62, 31, 17],
			[186, 142, 192, 3.88, 93, 79, 18],
			[57, 31, 54, 0.96, 32, 14, 19],
			[22, 8, 17, 0.48, 23, 10, 20],
			[39, 15, 36, 0.61, 29, 13, 21],
			[94, 69, 114, 2.08, 73, 39, 22],
			[99, 73, 110, 2.43, 76, 48, 23],
			[31, 12, 30, 0.5, 32, 16, 24],
			[42, 27, 43, 1, 53, 22, 25],
			[154, 117, 157, 3.05, 92, 58, 26],
			[234, 185, 230, 4.09, 123, 69, 27],
			[160, 120, 186, 2.77, 91, 50, 28],
			[134, 96, 165, 2.76, 83, 41, 29],
			[52, 24, 60, 1.03, 50, 21, 30],
			[46, 5, 49, 0.28, 10, 6, 31]
		];
		const dataGZ = [
			[26, 37, 27, 1.163, 27, 13, 1],
			[85, 62, 71, 1.195, 60, 8, 2],
			[78, 38, 74, 1.363, 37, 7, 3],
			[21, 21, 36, 0.634, 40, 9, 4],
			[41, 42, 46, 0.915, 81, 13, 5],
			[56, 52, 69, 1.067, 92, 16, 6],
			[64, 30, 28, 0.924, 51, 2, 7],
			[55, 48, 74, 1.236, 75, 26, 8],
			[76, 85, 113, 1.237, 114, 27, 9],
			[91, 81, 104, 1.041, 56, 40, 10],
			[84, 39, 60, 0.964, 25, 11, 11],
			[64, 51, 101, 0.862, 58, 23, 12],
			[70, 69, 120, 1.198, 65, 36, 13],
			[77, 105, 178, 2.549, 64, 16, 14],
			[109, 68, 87, 0.996, 74, 29, 15],
			[73, 68, 97, 0.905, 51, 34, 16],
			[54, 27, 47, 0.592, 53, 12, 17],
			[51, 61, 97, 0.811, 65, 19, 18],
			[91, 71, 121, 1.374, 43, 18, 19],
			[73, 102, 182, 2.787, 44, 19, 20],
			[73, 50, 76, 0.717, 31, 20, 21],
			[84, 94, 140, 2.238, 68, 18, 22],
			[93, 77, 104, 1.165, 53, 7, 23],
			[99, 130, 227, 3.97, 55, 15, 24],
			[146, 84, 139, 1.094, 40, 17, 25],
			[113, 108, 137, 1.481, 48, 15, 26],
			[81, 48, 62, 1.619, 26, 3, 27],
			[56, 48, 68, 1.336, 37, 9, 28],
			[82, 92, 174, 3.29, 0, 13, 29],
			[106, 116, 188, 3.628, 101, 16, 30],
			[118, 50, 0, 1.383, 76, 11, 31]
		];
		const dataSH = [
			[91, 45, 125, 0.82, 34, 23, 1],
			[65, 27, 78, 0.86, 45, 29, 2],
			[83, 60, 84, 1.09, 73, 27, 3],
			[109, 81, 121, 1.28, 68, 51, 4],
			[106, 77, 114, 1.07, 55, 51, 5],
			[109, 81, 121, 1.28, 68, 51, 6],
			[106, 77, 114, 1.07, 55, 51, 7],
			[89, 65, 78, 0.86, 51, 26, 8],
			[53, 33, 47, 0.64, 50, 17, 9],
			[80, 55, 80, 1.01, 75, 24, 10],
			[117, 81, 124, 1.03, 45, 24, 11],
			[99, 71, 142, 1.1, 62, 42, 12],
			[95, 69, 130, 1.28, 74, 50, 13],
			[116, 87, 131, 1.47, 84, 40, 14],
			[108, 80, 121, 1.3, 85, 37, 15],
			[134, 83, 167, 1.16, 57, 43, 16],
			[79, 43, 107, 1.05, 59, 37, 17],
			[71, 46, 89, 0.86, 64, 25, 18],
			[97, 71, 113, 1.17, 88, 31, 19],
			[84, 57, 91, 0.85, 55, 31, 20],
			[87, 63, 101, 0.9, 56, 41, 21],
			[104, 77, 119, 1.09, 73, 48, 22],
			[87, 62, 100, 1, 72, 28, 23],
			[168, 128, 172, 1.49, 97, 56, 24],
			[65, 45, 51, 0.74, 39, 17, 25],
			[39, 24, 38, 0.61, 47, 17, 26],
			[39, 24, 39, 0.59, 50, 19, 27],
			[93, 68, 96, 1.05, 79, 29, 28],
			[188, 143, 197, 1.66, 99, 51, 29],
			[174, 131, 174, 1.55, 108, 50, 30],
			[187, 143, 201, 1.39, 89, 53, 31]
		];
		const lineStyle = {
			width: 1,
			opacity: 0.5
		};
		option = {
			// backgroundColor: '#161627',
			// title: {
			//   text: 'AQI - Radar',
			//   left: 'center',
			//   textStyle: {
			//     color: '#eee'
			//   }
			// },
			legend: {
				bottom: 5,
				// data: ['Beijing', 'Shanghai', 'Guangzhou'],
				itemGap: 20,
				textStyle: {
					color: '#fff',
					fontSize: 12
				},
				selectedMode: 'single'
			},
			radar: {
				indicator: [
					{ name: '北京', max: 300 },
					{ name: '上海', max: 250 },
					{ name: '武汉', max: 300 },
					{ name: '长沙', max: 5 },
					{ name: '南昌', max: 200 },
					{ name: '赣州', max: 100 }
				],
				shape: 'circle',
				splitNumber: 5,
				axisName: {
					color: 'rgb(255,255,255)'
				},
				splitLine: {
					lineStyle: {
						color: [
							'rgba(238, 197, 102, 0.1)',
							'rgba(238, 197, 102, 0.2)',
							'rgba(238, 197, 102, 0.4)',
							'rgba(238, 197, 102, 0.6)',
							'rgba(238, 197, 102, 0.8)',
							'rgba(238, 197, 102, 1)'
						].reverse()
					}
				},
				splitArea: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(238, 197, 102, 0.5)'
					}
				}
			},
			series: [
				{
					name: 'Beijing',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataBJ,
					symbol: 'none',
					itemStyle: {
						color: '#F9713C'
					},
					areaStyle: {
						opacity: 0.1
					}
				},
				{
					name: 'Shanghai',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataSH,
					symbol: 'none',
					itemStyle: {
						color: '#B3E4A1'
					},
					areaStyle: {
						opacity: 0.05
					}
				},
				{
					name: 'Guangzhou',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataGZ,
					symbol: 'none',
					itemStyle: {
						color: 'rgb(238, 197, 102)'
					},
					areaStyle: {
						opacity: 0.05
					}
				}
			]
		};
		myChart.setOption(option)
	})();
});

