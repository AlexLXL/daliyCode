var years = [2017, 2018];
var myData = ['前山', '拱北', '白藤', '新青','三灶','平沙','南水','富山','南区'];
var dataMan = [4100, 5000, 4800, 5500];
var test = [1000, 2000, 3000, 4000];
var test1 = [2000, 3000, 6000, 10000];

//正负柱状图
option = {
    /* baseOption 开始 */
    baseOption: {
        timeline: {
            show: false,
            data: [], // timeline.data 中的每一项，对应于 options 数组中的每个 option。
        },
        backgroundColor: '#fff', // 背景色
        title: [
            {
                text: '产水量统计', // 标题文本
                top: '3%',
                left: 'center', // 标题距左侧距离
                textStyle: { // 标题文本样式
                    color: '#004078',
                    fontSize: 18
                },
            },
            {
                text: '公司总产水量:18000万吨', // 标题文本
                top: '3%',
                left: '3%', // 标题距左侧距离
                textStyle: { // 标题文本样式
                    color: '#007edf',
                    fontSize: 18
                },
            },
            {
                text: '公司任务完成率:70%', // 标题文本
                top: '3%',
                right: '3%', // 标题距左侧距离
                textStyle: { // 标题文本样式
                    color: '#007edf',
                    fontSize: 18
                },
            },
        ],
        legend: [
            { // 图例
                top: '5%', // 图例距离顶部距离
                left: '25%', // 图例距离左侧距离(此处水平居中)
                textStyle: { // 图例文本样式
                    color: '#000',
                },
                data: ['2018','2019'] // 图例的数据数组,一般对应系列名称,即 series.name
            },
            { // 图例
                top: '5%', // 图例距离顶部距离
                right: '25%', // 图例距离左侧距离(此处水平居中)
                textStyle: { // 图例文本样式
                    color: '#000',
                },
                data: ['生产任务','任务完成率'] // 图例的数据数组,一般对应系列名称,即 series.name
            }
        ],
        // tooltip: { // 提示框
        //     show: true,
        //     trigger: 'axis',
        //     axisPointer: { // 坐标轴指示器配置项。
        //         type: 'shadow', // 'line' 直线指示器;'shadow' 阴影指示器.
        //     },
        //     formatter: '{b}<br/>{a}: {c}元' // 提示框所提示的文本内容
        // },
        // 网格grid区域
        grid: [
            {
                show: false, // 男士grid区域
                left: '5%',
                top: '10%',
                bottom: '20%',
                containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
                width: '42%', // grid 组件的宽度。默认自适应。
            },
            {
                show: false, // 中间区域(本区,本市,省内,省外)
                left: '52.5%',
                top: '10%',
                bottom: '20%',
                //width: '10%',
                tooltip: {
                    show: false // 中间部分的提示框不显示也没必要显示
                }
            },
            {
                show: false, // 女士grid区域
                right: '5%',
                top: '10%',
                bottom: '20%',
                containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
                width: '42%', // grid 组件的宽度。默认自适应。
            }
        ],
        // X轴线配置
        xAxis: [
            {
                inverse: true, // 是否是反向坐标轴.[ default: false ]
                axisLine: {
                    show: false, // 轴线不显示
                },
                axisTick: {
                    show: false, // 轴线刻度不显示
                },
                axisLabel: { // 轴线刻度标签
                    show: false, // 显示刻度标签
                },
                splitLine: { // 垂直于X轴的分隔线
                    show: false, // 显示分隔线
                },
                // 强制设置坐标轴分割间隔
                interval: 2000,
                min: 0, // 最小值
                max: 8000 // 最大值
            },
            { // 中间区域
                gridIndex: 1,
                show: false, // 中间部分不显示X轴
            },
            { // 右侧区域
                gridIndex: 2,
                type: 'value',
                position: 'top',
                inverse: false, // 是否是反向坐标轴.[ default: false ]
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                // 强制设置坐标轴分割间隔
                interval: 2000,
                min: 0, // 最小值
                max: 8000 // 最大值
            }
        ],
        // Y轴线配置
        yAxis: [
            { // 左侧区域
                gridIndex: 0, // y 轴所在的 grid 的索引，默认位于第一个 grid。[ default: 0 ]
                type: 'category', // 轴线类型: 类目轴
                // 类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
                boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
                inverse: true, // 是否是反向坐标轴.[ default: false ]
                position: 'right', // y轴的位置。'left' or 'right'
                axisLine: {
                    show: false // y轴线不显示
                },
                axisTick: {
                    show: false, // y轴线刻度不显示
                    lineStyle: { // 刻度线样式
                        color: '#fff'
                    }
                },
                axisLabel: {
                    show: false, // 刻度标签不显示
                },
                data: myData // Y轴(这里是类目轴)的类目数据
            },
            {
                gridIndex: 1, // 中间区域
                type: 'category',
                boundaryGap: true,
                inverse: true,
                position: 'left', // y轴的位置。'left' or 'right'
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true, // 显示中间部分的Y轴刻度标签
                    textStyle: { // 标签样式
                        color: '#000',
                        fontSize: 18,
                    },
                },
                data: myData
            },
            { // 右侧区域
                gridIndex: 2,
                type: 'category',
                boundaryGap: true,
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: myData
            }
        ],
        series: []
    },
    options: [
        {
        series: [
            {
                name: '2018', // 系列名称
                type: 'bar',
                barGap: 0, // 柱间距离
                barWidth: 10, // 男士柱子宽度
                xAxisIndex: 0, // 对应在X轴的grid索引
                yAxisIndex: 0, // 对应在Y轴的grid索引
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        textStyle: { // 柱子上数字样式
                            color: '#000',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        color: '#199ed8', // 普通状态下柱条颜色
                    },
                },
                data: dataMan, // 系列中的数据内容数组
            },
            {
                name: '2019', // 系列名称
                type: 'bar',
                barGap: 0.3, // 柱间距离
                barWidth: 10, // 男士柱子宽度
                xAxisIndex: 0, // 对应在X轴的grid索引
                yAxisIndex: 0, // 对应在Y轴的grid索引
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        textStyle: { // 柱子上数字样式
                            color: '#000',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        color: '#68cc80', // 普通状态下柱条颜色
                    },
                },
                data: dataMan, // 系列中的数据内容数组
            },
            {
                name: '生产任务', // 系列名称
                type: 'bar',
                barWidth: 10, // 女士柱子宽度
                xAxisIndex: 2, // 对应在X轴的grid索引
                yAxisIndex: 2, // 对应在Y轴的grid索引
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        textStyle: { // 柱子上数字样式
                            color: '#fff',
                            fontSize: 10,
                        },
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        textStyle: { // 柱子上数字样式
                            color: '#fff',
                            fontSize: 10,
                        },
                    },
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        color: '#199ed8', // 普通状态下柱条颜色
                    },
                },
                data: test1, // 系列中的数据内容数组
            },
             {
                name: '任务完成率', // 系列名称
                type: 'bar',
                barGap: "-100%", /*这里设置包含关系，只需要这一句话*/
                barWidth: 10, // 女士柱子宽度
                xAxisIndex: 2, // 对应在X轴的grid索引
                yAxisIndex: 2, // 对应在Y轴的grid索引
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        textStyle: { // 柱子上数字样式
                            color: '#fff',
                            fontSize: 10,
                        },
                        formatter: (params) =>{
                            return (params.value / test1[params.dataIndex]).toFixed(2) * 100 + '%'
                        },
                    },
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        color: '#68cc80', // 普通状态下柱条颜色
                    },
                },
                data: test, // 系列中的数据内容数组
            },
        ]
    }]
};

//有中间线markLine的折线图(两条线))
item.echartOption = {
    tooltip:{
        show:true,
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel: {
            interval: 0,  //设置这里
            margin: 10
        },
        data: item.myDate
    },
    yAxis: {
        splitNumber: 8,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#003047',
                width: 1,
                type: 'solid'
            }
        },
    },
    grid: {
        x: 60,
        y: 50,
        x2: 40,
        y2: 60,
    },
    legend: {
        icon: 'roundRect',
        top: 20,
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 11,
        },
        data: ['化验浓度', '年均浓度']
    },
    series: [
        {
            name: '化验浓度',
            data: item.testmm,
            type: 'line',
            symbol: 'circle', //折线点设置为实心点
            symbolSize: 8, //折线点的大小
            itemStyle: {
                normal: {
                    color: "#06cbe7", //折线点的颜色
                    lineStyle: {
                        color: "#06cbe7" //折线的颜色
                    }
                }
            },
        },
        {
            name: '年均浓度',
            data: item.testmm,
            type: 'line',
            symbol: 'circle', //折线点设置为实心点
            symbolSize: 0, //折线点的大小
            itemStyle: {
                normal: {
                    color: "#68cc80", //折线点的颜色
                    lineStyle: {
                        color: "#68cc80", //折线的颜色
                        width: 0
                    }
                }
            },
            markLine: {
                silent:false,//是否响应鼠标事件
                symbol: "none", //去掉警戒线最后面的箭头
                data: [{
                    name:'平均值',
                    type : 'average',
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    lineStyle: { //警戒线的样式  ，虚实  颜色
                        normal: {
                            type: "solid",
                            color: "#68cc80",
                            width: 2
                        }
                    },
                    //yAxis: {type : 'average', name: '平均值'} // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                }]
            }
        },]
};
//折线图(多条线))
option = {
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#034d72',
            }
        },
        
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        splitNumber: 8,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#034d72'
            }
        },
         splitLine: {
            show: true,
            lineStyle:{
                 width: 1,
                type: 'solid'
            }
        },
    },
    legend:{
        icon:'roundRect',
        orient:'vertical',
        selectedMode:'single', //多条折现只显示一条
        top:'center',
        itemGap:30,
        right:0,
        align:'right',
        textStyle:{
            color:'#fff',
            fontWeight:'bold',
            fontSize: 16,
        },
        data:['COD','BOD','NH3N','SS','TP','TN']
    },
    series: [{
        name:'COD',
        data: [1211, 1222, 333,234, 225, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#00cc00",//折线点的颜色
               lineStyle: {
               color: "#00cc00"//折线的颜色
              }
            }
          },
          markLine : {
				symbol:"none",               //去掉警戒线最后面的箭头
				label:{
				    show:false,
					position:"start"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
				},
                data : [{
					silent:false,             //鼠标悬停事件  true没有，false有
					lineStyle:{               //警戒线的样式  ，虚实  颜色
                        type:"solid",
						color:"#68cc80",
						width:2
					},
					yAxis: 800           // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
				}]
            }
    },
    {
        name:'BOD',
        data: [320, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#009966",//折线点的颜色
               lineStyle: {
               color: "#009966"//折线的颜色
              }
            }
          }
    },
    {
        name:'NH3N',
        data: [820, 421, 901, 142, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#00cccc",//折线点的颜色
               lineStyle: {
               color: "#00cccc"//折线的颜色
              }
            }
          }
    },
    {
        name:'SS',
        data: [820, 932, 901, 934, 190, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#0066ff",//折线点的颜色
               lineStyle: {
               color: "#0066ff"//折线的颜色
              }
            }
          }
    },
    {
        name:'TP',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#0000ff",//折线点的颜色
               lineStyle: {
               color: "#0000ff"//折线的颜色
              }
            }
          }
    },
    {
        name:'TN',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#9900ff",//折线点的颜色
               lineStyle: {
               color: "#9900ff"//折线的颜色
              }
            }
          }
    }]
};

//仪表盘的圈
var option = {
    graphic:{
        type:"text",
        left:"center",
        top:"40%",
        style:{
            text:"km",
            textAlign:"center",
            fill:"#fff",
            fontSize:20,
            fontWeight:700
        },
    },
    series: [
        {
            name: '1',
            type: 'gauge',
            center: ['50%', '55%'], // 默认全局居中
            radius: '100%',
            min: 0,
            max: 400,
            splitNumber: 10,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [100 / 400, '#4F8BBF'],//根据实际数据动态改变
                        [1, '#DCDDDD'],

                    ],
                    width: 20, //半径
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 1
                }
            },
            pointer: {
                show:false
            },
            axisLabel: {
                //show:false,
                // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: 'transparent', //刻度数字颜色 隐藏
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: { // 坐标轴小标记
                length: 12, // 属性length控制线长
                lineStyle: { // 属性lineStyle控制线条样式
                    color: 'transparent', //坐标轴 小刻度线颜色
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: { // 分隔线
                length: 20, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 3,
                    color: 'transparent', //分割线
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            title: {
                offsetCenter:[0,0],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 25,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail: { //show : true ,
                offsetCenter:[0,"70%"],
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    color: '#fff'
                },
                formatter: '{value}条'
            },
            data: [
                data1
            ]
        }

    ]

}

//-------------------------------------------------

//tooltip显示类目所有选项，并把选中区域显示为shadow/line
var option = {
    title:[ //添加文字
        {
            text:"80%",
            left:"center",
            top:"50%",
            textStyle:{
                color:"#27D9C8",
                fontSize:36,
                align:"center"
            }
        }
    ],
    graphic:{ //添加文字2
        type:"text",
        left:"center",
        top:"40%",
        style:{
            text:"运动达标率",
            textAlign:"center",
            fill:"#333",
            fontSize:20,
            fontWeight:700
        }
    },
    xAxis: [{
        name:'投标人',  //x轴单位
        gridIndex: 0,
        type: "category",
        data: xdata,
        max : 200,
        min : 0,
        splitNumber: 5,//x轴分隔段数(会自动调整) //配合max和min设置   max/splitNumber=间隔值
        axisLine: { // x轴
            lineStyle:{
                color:'#272729',//x轴的颜色
                width:8,//轴线的宽度
            }
        },
        axisTick: { //影藏刻度线
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'   //坐标值的颜色
            },
            interval:0,  //强制显示所有标签 方案I
            margin: 10,

            rotate:"45",  //旋转    方案II

            formatter: function(value){  //方案III 垂直显示
                return value.split("").join("\n");  
            },
            formatter: function(params,index){  //方案III 间隔一个换行
                if (index % 2 != 0) {
                    return '\n' + params;
                }
                else {
                    return params;
                }  
            },
        },
        axisPointer: {
            type: 'shadow'//显示类目里面的所有子类
        },
        splitLine:{//设置网格
            show:false,//去除网格线
            lineStyle:{
                color:['#0087ED'],//网格线颜色
                width: 1,
                type: 'solid'
            }
        },
        splitArea : {show : true}//保留网格区域
    }],
    yAxis: [
        {
            name: '时长（min）',    //y轴单位
            axisLine: {
                lineStyle:{
                    color:'#272729',// y轴的颜色
                    width:8,//y轴线的宽度
                }
            },
        }
    ],
    grid:{//调整图标大小
        // x:25,
        // y:45,
        // x2:5,
        // y2:20,
        top:"20px",
        bottom:"20%",
        left:"20%",//grid 组件离容器左侧的距离。
        right:"30px",
        borderColor:"#c45455",//网格的边框颜色
        borderWidth:1
    },
    tooltip: {// 鼠标移入提示
        trigger: 'axis',
        axisPointer: {
            type : 'cross',// cross显示x轴的一条线
            crossStyle: {
                color: '#999'
            }
        },
        position: function (point, params, dom, rect, size) {//point是鼠标的位置
            return [point[0]+10, point[1] - 80];
        }
        formatter : function(params, ticket, callback) {
            if (params.value == undefined || params.value !== params.value) {
                params.value = 0;
            }
            return  params.seriesName +" <br />" + params.name + ":" + params.value + "%";        
        }
    },
    legend: {// 类目显示
        icon: 'roundRect',//设置标记类型('circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none')
        orient: 'vertical',
        selectedMode:'single', //多条折现只显示一条
        top: 'center',
        itemGap: 10,
        right: 0,
        textStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
        },
        data: ['COD', 'BOD', 'NH3N', 'SS', 'TP']
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},//数据视图-看一行行的数字
            magicType: {show: true, type: ['line', 'bar']},//图形类型转换
            restore: {show: true},//重置
            saveAsImage: {show: true}//下载保存为图片
        }
    },
    series: [
        {
            name: "温度",//鼠标放在折线点上显示的名称
            type: "line",//折线图
            symbol: 'circle',//折线点设置为实心点  (symbol: 'none',  //取消折点圆圈)
            symbolSize: 4,   //折线点的大小
            itemStyle: {
               normal: {
                 color: "#386db3",//折线点的颜色
                 lineStyle: {
                 color: "#386db3"//折线的颜色
                }
              }
            },
            // 折线上的数字
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter:'{c}%'
                }
            },
            // 折线颜色
            itemStyle: {
                normal: {
                    color: '#33CCFF',
                    lineStyle: {
                        color: '#33CCFF'
                    }
                }
            },
        },
        {
            barWidth: 20,
            data:  ["47", "59", "95", "74",],
            name: "总量",
            type: "bar",
            markPoint : {//显示最高点和最低点
                data : [//显示值-在x轴第几个-y轴什么高度显示
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
        },
        {
            barGap: "-100%", // 柱状图重贴但不互相叠加
            barWidth: 20,
            data: ["27", "24", "43", "10", ],
            name: "分量",
            type: "bar",
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果,左上-右上-右下-左下
                    barBorderRadius:[10, 10, 10, 10],
                    color:function(params) {// 柱状图颜色
                        // build a color map as your need.
                        var colorList = [	        	                              
                            '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',	        	                               
                            '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',	        	                               
                            '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,//柱状图label
                        position: 'top',//柱状图label位置
                        textStyle: {
                            color: 'black',//label颜色
                            fontWeight:'bolder',//label加粗
                            fontSize : '12',//label大小
                            fontFamily : '微软雅黑',
                        }
                    }
                },
                //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                emphasis: {
                    barBorderRadius: 30
                },
            },
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            itemStyle:{
                borderWidth:5, //圆环设置间隙
                borderColor:'#fff',//边框颜色要和底色一样
            },
            labelLine: {
                normal: {
                    length: 20,//饼图引导线的长度
                    length2: 70,//饼图引导线的长度
                    lineStyle: {
                        color: '#333'
                    }
                }
            },
        }
    ]
}

/**
 * 
 * 模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。 在 trigger 为 'axis' 的时候，会有多个系列的数据，此时可以通过 {a0}, {a1}, {a2} 这种后面加索引的方式表示系列的索引。 不同图表类型下的 {a}，{b}，{c}，{d} 含义不一样。 其中变量{a}, {b}, {c}, {d}在不同图表类型下代表数据含义为：
 * 
 * 折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
 * 散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
 * 地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
 * 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
 * 更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。
 * 
 * formatter: '{b0}: {c0}<br />{b1}: {c1}'    b就是x轴的值，c就是y轴的值
 */

// 两个x轴，设置第一个在上方-不显示-但显示图表所有的点
//             第二个是相对第一个的另一方-显示-显示部分x轴label
// 折线图显示所有的点，但只显示部分的x轴坐标
xAxis: [
    {
        show: false,
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel: {
            rotate:45,
            interval: 0,  //设置这里
            margin: 10,
        },
        position:'top',
        data: self.chart1.cutTotal.myDate
    },
    {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel: {
            rotate:45,
            // interval: 0,  //设置这里
            margin: 10,
        },
        data: self.chart1.cutTotal.myDate
    }
],

this.hwChart.setOption(option_hw);
this.swChart.setOption(option_sw);


this.hwChart = echarts.init(document.getElementById('chartCutTotal'));
this.swChart = echarts.init(document.getElementById('chartCutTotal'));
//window.onresize自适应
setTimeout(function (){
    window.onresize = function () {     //on绑定事件会覆盖（单一的）、addEventListener可以同时绑定同个
        this.hwChart.resize();
        this.swChart.resize();
    }
},200)



//数据格式(年份会增长)
proWater: {
    name: '平均日产水量',
    myDate: ['前山', '拱北', '白藤', '新青', '三灶', '平沙', '南水', '富山', '南区'],
    legendList:['2018年','2019年'],
    colorList:['#4ebce5','#68cc80'],
    data:{
        "2018": [8.3,5.7,3.7,2.4,5.3,3.9,3.8,2.0,0.0],
        "2019": [8.8,5.6,4.4,2.4,6.8,4.8,4.6,2.6,2.9],
    }
}

//立即可执行函数动态生成series
series: (function () {
    let newArr = [];
    let num = -1;
    for (var i in self.chart2.proWater.data){
        num++;
        newArr.push(
            {
                name:i + '年',
                type:'bar',
                label: {
                    normal: {
                        rotate:90,
                        show: true,
                        position: 'top',
                    }
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        barBorderRadius:[5, 5,0, 0],
                        color: self.chart2.proWater.colorList[num], // 普通状态下柱条颜色
                    },
                },
                data:self.chart2.proWater.data[i]
            },
        );
    }
    return newArr
})()


//触发resize事件（不支持ie）
setInterval(()=>{
    var myEvent = new Event('resize');  //不支持ie
    window.dispatchEvent(myEvent);
},1000)

// 柱状图重贴但不互相叠加 --- https://www.cnblogs.com/sllzhj/p/10711644.html
// 饼图线的设置 --- https://www.jianshu.com/p/b1330b60ca97


