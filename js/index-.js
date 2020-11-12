// 1.柱状图模块1
(function () {
  // 实例化对象
  let myChart = echarts.init(document.querySelector('.bar .chart'));
  // 指定配置和数据
  let option = {
    // 修改柱子的颜色
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改柱状图图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    // 修改x轴的文字信息
    xAxis: [
      {
        type: "category",//修改刻度标签：文字类型
        // 修改x轴的文字
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          // 文字样式
          textStyle: {
            // 颜色
            color: "rgba(255,255,255,0.6)",
            // 字体大小
            fontSize: "12"
          }
        },
        // x轴样式不显示
        axisLine: {
          show: false,
          // 如果想要设置单独的线条样式
          lineStyle: {
            color: "red",
            width: 1,
            type: "solid"
          }
        }
      }
    ],
    yAxis: [
      {
        // 刻度类型：数值类型
        type: "value",
        // 修改刻度样式
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        // Y轴分割线
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    // 修改柱形图的柱子宽度、以及圆角
    series: [
      {
        name: "直接访问",
        // 柱子类型：
        type: "bar",
        // 柱宽度
        barWidth: "35%",
        // 柱子的高度
        data: [200, 300, 300, 900, 1500, 1200, 600],
        // 修改的样式
        itemStyle: {
          //柱子的 圆角 边框圆角
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  // 4：让我们的图标跟随屏幕制动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //   // 数据变化
  //   var dataAll = [
  //     { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
  //     { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  //   ];

  //   $(".bar h2 ").on("click", "a", function() {
  //     option.series[0].data = dataAll[$(this).index()].data;
  //     myChart.setOption(option);
  //   });
})();


// 2.柱状图模块二
(function () {
  myColor = ["#1089E7", "#F57474", "#56D0E3", "#F88448", "#887BF6"]
  let myChart = echarts.init(document.querySelector('.bar2 .chart'));

  option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    // 不显示X轴的相关信息
    xAxis: {
      show: false,
      // type: 'value',
      // boundaryGap: [0, 0.01]
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ['java', 'c#', 'vue.js', 'php', 'node.js'],
        //  不显示Y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff'
        }
      },
      {
        inverse: true,
        data: ['702', '350', '610', '793', '664'],
        //  不显示Y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            // 此时的Color可以改变柱子的颜色：
            color: function (params) {
              // dataIndex是当前柱子的索引号
              return myColor[params.dataIndex]
            }
          },
          // 柱子之间的距离
        },
        barCategoryGap: 50,
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          fotmatter: '{C}%'//会自动的解析我们的数据
        },
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: '#00c1de',
          barBorderRadius: 15,
          borderWidth: 3,
        }
      }
    ]
  };
  // 3.把配置给实例对象
  myChart.setOption(option)
  // 4.让图表跟随屏幕自动的去适应

})()


  // 3.折线图
  (function () {
    let mychart = echarts.init(document.querySelector('.line .chart'));

    option = {

      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    mychart.setOption(option)
  })()
