// vue：
    // 数据传输
    // 1.sync修饰符(进行父子间数据传输简写)     //https://blog.csdn.net/badmoonc/article/details/82876294
    {
        // -子组件
        //         <template>
        //         <div>
        //             <input :value="name" @input="abc" type="text">
        //         </div>
        //         </template>
        //         <script>
        //         export default {
        //             props: {
        //             name: {
        //                 type: String,
        //                 required: true
        //             }
        //             },
        //             methods: {
        //             abc(e) {
        //                 console.log(e.target.value);
        //                 this.$emit('update:name', e.target.value);//这个触发父组件的34行
        //             }
        //             }
        //         }
        //         </script>
        // -父组件
        //         <template>
        //         <div>
        //             <child :name.sync="name"></child>
        //             <button @click="change">改变</button>
        //         </div>
        //         </template>
        //         <script>
        //         import child from './child'
        //         export default {
        //         components: {
        //             child
        //         },
        //         data () {
        //             return {
        //             listItems: ['buy food', 'play games', 'sleep'],
        //             name: 'xiaoming'
        //             }
        //         },
        //         methods: {
        //             change() {
        //             this.name = '123';
        //             }
        //         }
        //         </script>
    }
  
    // 基础
    // 1.v-for遍历对象
    {
        // v-for遍历对象
        //     -(value,key,index) in obj
        //   遍历数组
        //     -(item, index) in arr 
    }
    // 2.$refs获取高度`
    {
        // 获取元素高度    //https://www.jianshu.com/p/434d55e86ab9
        //        var height= this.$refs.text.offsetHeight; //100
    }
    // 3.键盘事件（原生）
    {
        // @keyup.enter.native="search"
        // @keydown.up.native
        // @keydown.down.native
    }
    // 4、页面渲染完
    {
        self.$nextTick(() => {
            console.log(111)
        })
    }

// elementui
    // 小分页
    {
        // <el-pagination
        //  small
        //  layout="prev, pager, next"
        //  :current-page.sync="currentMaintainPage"
        //  @current-change="handleMaintainChange"
        //  :total="totalRecordMaintenance">
        // </el-pagination>
        
        //  .btn-prev{
        //     background-color: transparent;
        //   }
        //   .el-pager{
        //     .number{
        //       background-color: transparent;
        //       color: #fff;
        //       &.active{
        //         border-color: transparent;
        //         border-bottom-color: #fff;
        //       }
        //     }
        //   }
        //   .el-pagination button.disabled{
        //     background-color: transparent;
        //   }
        //   .btn-next{
        //     background-color: transparent;
        //   }
        //  .el-pager li{
        //     background-color: transparent;
        //   }
    }
    // 自定义合计行
    {
        // 加上属性show-summary
        // :summary-method="getSummaries"

        // 方法: 
        // getSummaries(param) { //自定义合计行
        //     const { columns, data } = param;
        //     let sums =  columns.reduce((add,col,index) => {
        //         let sum = 0;
        //         data.forEach((sub) => {
        //             sum += sub[col.property];
        //         });
        //         //处理某列的计算方式
        //         if(col.label == '含水量(%)'){
        //             sum = (sum / data.length).toFixed(2)
        //         }
        //         //处理非数字，push结果
        //         if(isNaN(sum)){
        //             index == 0?add.push('合计'):add.push('')
        //         }else{
        //             add.push(sum);
        //         }
        //         return add
        //     },[]);
        //     return sums
        // }
    }
    // 表头样式
    {
        // :header-cell-style="{
        //     'background-color': '#f2f2f2',
        // }"
    }
    // input无法输入的问题
    {
        //this.$set(obj, 'propertyName', value)
        // this.$forceUpdate()
    }

// css
    //向上滚动
        {
            @keyframes TaskScroll {
                from{
                  top: 0;
                }
                to{
                  top: -100%;
                }
            }
    
            &.openScroll{
                animation: TaskScroll 25s linear infinite;
            }
        }
    // 伪类清除高度塌陷
        {
            // .clearfix:after{
            //     content:'.';
            //     display:block;
            //     height:0;
            //     clear:both;
            // }
        }
    // 伪类添加内容
        {
            // .test:after{
            //     display: block;
            //     content: "*当前设备类型、设备种类、备件类型下，已存在该备件名称";
            //     width: 99%;
            //     color: red;
            //     position: absolute;
            //     left: 39%;
            //     bottom: -17px
            // }
        }
    // 四周阴影（颜色、x偏移、y偏移、半径）
    {
        // .shadow{ 
        //     -webkit-box-shadow: #666 0px 0px 10px; 
        //     -moz-box-shadow: #666 0px 0px 10px; 
        //     box-shadow: #666 0px 0px 10px; 
        //     background: #EEFF99; 
        //     width:100px;
        //     height:100px;
        //     margin:200px auto;
        //  } 
    }
    // flex布局
    {
        display:flex;
        justify-content:center/space-between/space-around/flex-end;
        align-items:center;
        flex-direction:column/row;
    }

// 原生js:
    {
        // typeof判断类型
            // 'undefined'、'boolean'、'string'、'number'、'object'、'function'
        // instanceof用于判断一个变量是否某个对象的实例
            // var a=new Array()
            // a instanceof Array
            // a instanceof Object

            // function test(){};
            // var a=new test();
            // alert(a instanceof test) -- true
        // 单独判断null
            // !temp && typeof(temp)!="undefined" && temp!=0
        // 单独判断NaN
            // Number.isNaN(NaN)

        // 判断是否空对象 - Object.keys(b).length
        
        Dom
            使用childern、parentNode

        Date
            var date = new Date();
            console.log(date.valueOf());    //1524815456865
            console.log(date.toString());   //Fri Apr 27 2018 15:50:56 GMT+0800 (CST)
            console.log(date.toLocaleString()); //2018/4/27 下午5:34:56

        Array
            Array(100).fill(0); 快速声明长度100填充0的数组 fill(value,start,end)     例:[0,0,0,0].fill(1,1,3) --> [0, 1, 1, 0]
            var b = [1, 2, 3, 4].slice(0); 复制一个数组

        Number: 
            var num = new Number(1337);
            console.log(num.valueOf());    //1337，返回一个 Number 对象的基本数字值
            console.log(num.toString());    //1337，字符串
            console.log(num.toLocaleString());    //1,337，把数字转换为字符串，使用本地数字格式顺序

            String(value)   转字符串
            8.545555.toFixed(2)  保留位数(四舍五入)   
            Number(String(8.545555).slice(0, String(8.545555).indexOf('.') + 3))  保留位数(不四舍五入) 
            +new Number(4.7562498E7)  科学计数法转数字
            
        String: 
            +String   转数字 
    }
    // 定时器
    {
        setInterval(() => {}, 60 * 60 * 1000);
        setTimeout(() => {}, +new Date(24*60*60*1000) - Date.now())
    }
    // 去空格，转数组，转字符串
    {
        string.trim().split('$').join('$')
        string.replace(/\s*/g,"")
        // 去除最后的字符$
        if(str.charAt(str.length-1) == '$'){str = str.slice(0,-1)}
    }
    // promise(使用)
    {
        self.getBeforeBatchPromise= new Promise(function(resolve,reject){// 获取当前审批的被借调批次id[已删]
            resolve()
        })
        Promise.all([self.getBatchPromise, self.getBeforeBatchPromise]).then(function([ResultJson1,ResultJson2]){});

        // 通过返回promise来实现异步操作
        getBatch(repPartId, isOther){ // 备件id
            var batchPromise = new Promise(function(resolve,reject){
                resolve()
            })
            return batchPromise
        },
    }
    // 下载文档流
    {
        // request () {
        //     // 处理请求参数
        //     self.tableData.forEach((item) => {
        //         
        //     });
        //     let param = {
        //         token:serviceHelper.getToken(),
        //     };

        //     const req = new XMLHttpRequest();
        //     // 请求路径（改成自己的）
        //     req.open('POST', serviceHelper.getBasicPath() + '/repPartApply/downloadRepPartApplyById', true);
        //     // 设置返回的数据类型是blob（将文档流转化为blob）
        //     req.responseType = 'blob';
        //     // 设置请求传参的方式，因为我的项目只能FormData验证token，所以只能这样（改成自己的）
        //     req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //     req.onload = function() {
        //         const data = req.response;
        //         // 创建Blob，注意传的是数组
        //         const blob = new Blob([data]);
        //         // 将当前文件映射到这个url
        //         const blobUrl = window.URL.createObjectURL(blob);
        //         // 创建a标签并下载
        //         self.download(blobUrl) ;
        //     };
        //     // 拼凑出合法的formData参数：格式xxx/yyy?name=123&age=18（使用var a = new FormData();a.append(key,value)不符合我的项目的传参格式）
        //     let formData = '';
        //     for (let key in param) {
        //         if(typeof  key == 'object') formData += '&' + key + '=' + JSON.stringify(param[key])
        //         else formData += '&' + key + '=' + param[key]
        //     }
        //     req.send(formData.slice(1));
        // },
        // // 创建a标签下载
        // download(blobUrl) {
        //     // 创建a标签
        //     const a = document.createElement('a');
        //     // 文件名称（如果是动态的，可以用响应头里面的数据）
        //     a.download = '领料单.docx';
        //     // 设置a标签的href
        //     a.href = blobUrl;
        //     // 模拟点击
        //     a.click();
        // }
    }
    // 大屏缩放
        {
            // ---设置html，body的宽高1920*1080
            // ---index.html加下面代码
            // ---文字大小px就好---会缩放
            // 大屏的等比宽高缩放(原型1920*1080)(压缩文字)
            <script>
                var bodyNode = document.getElementsByTagName('body')[0];
                var ratioW = window.innerWidth / 1920;
                var ratioH = window.innerHeight / 1080;
                bodyNode.style.transform = "scale(" + ratioW + "," + ratioH + ")";
                bodyNode.style.transformOrigin = "left top";
            </script>

            // 大屏的按高等比缩放(原型1920*1080)(不会压缩文字，但会屏幕宽度太小，高度太大，会看不到两边)
            <script>
                var bodyNode = document.getElementsByTagName('body')[0];
                var ratioH = window.innerHeight / 1080;
                bodyNode.style.transform = "scale(" + ratioH + ")";
                bodyNode.style.transformOrigin = "left top";
                bodyNode.style.marginLeft = (window.innerWidth - bodyNode.clientWidth * ratioH) / 2 + "px";
            </script>
        }
    // forEach通过抛异常中断循环
    {
        submitProjectsCheck(type){
            let io = true;
            try {
                if(this.applyProjects.length == 0){
                    io = false;
                    self.$message({
                        type: 'warning',
                        message: "请选择需要提交的备件！"
                    });
                    return
                }
                this.applyProjects.forEach((p) => {
                    self.dataDict.applyProjects[type].forEach((i) => {
                        if (!p[i]) {
                            io = false;
                            self.$message({
                                type: 'warning',
                                message: "请填写全部必填的信息！"
                            });
                            throw "请填写全部必填的信息！"// 主动抛错的原因是终止当前forEach
                        }
                    });
                    self.dataDict.applyProjects.mustNum[type].forEach((n) => {
                        var reg = new RegExp(/^\d+$/);
                        if (!(reg.test(p[n]) && (p[n] >= 0))) {
                            io = false;
                            let hint = self.dataDict.applyProjects.mustNumDict[n] + "请输入 大于等于0 的数字";
                            self.$message({
                                type: 'warning',
                                message: hint
                            });
                            throw hint
                        }
                    })
                });
            }catch(err){
    
            }
            return io;
        },
    }
    // Object.assign
    {
        const target = { a: 1, b: 1 };
        const source1 = { b: 2, c: 2 };
        const source2 = { c: 3 };

        Object.assign(target, source1, source2);
        target // {a:1, b:2, c:3}
    }
    // event兼容写法
    {
        // var e = event || window.event || arguments.callee.caller.arguments[0];
    }
    // 删除对象属性
    {
        delete a.age;
    }
    // 请求缓存问题
    {
        // 1、在 URL 参数后加上 "?timestamp=" + new Date().getTime(); 
        // 2、URL 参数后加上 "?ran=" + Math.random(); //当然这里参数 ran可以任意取了 
        // 3、配置请求信息:https://www.cnblogs.com/yunshangwuyou/p/9581018.html
    }
    // jsonp解决跨域参考arcgis里的图层名
    // 获取本地json文件也是参考arcgis的图层名 // https://www.cnblogs.com/changcendoudou/p/7670963.html

    

// moment.js
    // 获取第一天/最后一天
    {
        moment().format("YYYY-MM-DD HH:mm:ss"); //当前时间
        moment("2020-1").startOf('year/month').format("YYYY-MM-DD")//日期可以是 年月的格式 也可以是年月日的格式
        moment("2020-1").endOf('year/month').format("YYYY-MM-DD")//日期可以是 年月的格式 也可以是年月日的格式
    }
    // 获取之前的时间
    {
        moment().subtract(1, "years").format("YYYY-MM-DD"); //当前时间的前1年时间
        moment().subtract(3, "months").format("YYYY-MM-DD"); //当前时间的前3个月时间
        moment().subtract(1, "weeks").format("YYYY-MM-DD"); //当前时间的前一个星期时间
        moment().subtract(10, "days").format("YYYY-MM-DD"); //当前时间的前10天时间
    }

    // 初始化数据
    {
        created(){
            self.dateRange = [moment().startOf('month').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')];
    
            this.dateRange[0]?moment(this.dateRange[0]).format('YYYY-MM-DD HH:mm:ss'):''
            this.dateRange[1]?moment(this.dateRange[1]).format('YYYY-MM-DD 23:59:59'):''
        }  
    } 



// 处理接口数据
    // 一个厂区包含所有属性 改成 一个属性包含所有厂区(该属性)
    {
        //  处理接口数据(每一个厂区有多个指标 -> 一个指标有多个厂区值(且返回数据中有无用数据用itemSort、interfaceSort1过滤，多种情况下过滤增加interfaceSort2))
        //       dealData(data, arrName, arrItemName,updateInterfaceSort1){ //处理图表传过来的数据,data数据，arrName放要用数据的数组名,arrItemName要使用的数据名,updateInterfaceSort1用于适应不同接口改变interfaceSort1
        //            var factorySort = ['前山', '拱北', '白藤', '新青', '三灶', '平沙', '南水', '富山', '南区'];//图表横向排序
        //            var itemSort = ['COD', 'BOD', 'NH3N', 'SS', 'TP', 'TN', 'PH'];//图表纵向排序
        //            var interfaceSort1 = ['出水CODcr','出水BOD₅','出水NH3-N','出水SS','出水TP','出水TN','出水pH'];//接口返回数据名字排序
        //            var interfaceSort2 = ['出水CODcr',"出水'BOD5  ",'出水氨氮','出水SS','出水TP','出水TN','出水pH'];//接口返回数据排序
        //            if(updateInterfaceSort1 == 'loadingTable2'){//接口返回数据名字排序
        //                interfaceSort1 = ['CODcr','BOD₅','氨氮','SS','TP','TN'];
        //            }
        //            var dataSort = data.reduce((add, item, index) => { add.splice(factorySort.indexOf(item.factoryName), 1, item); return add }, Array(data.length));
        //            //初始化数据(按实际需要)
        //            var dataColection = Array(itemSort.length);
        //            for (let i = 0; i < dataColection.length; i++) {
        //                dataColection[i] = {
        //                    "item": itemSort[i],
        //                    factory0: 0,
        //                    factory1: 0,
        //                    factory2: 0,
        //                    factory3: 0,
        //                    factory4: 0,
        //                    factory5: 0,
        //                    factory6: 0,
        //                    factory7: 0,
        //                    factory8: 0,
        //                }
        //            }
        //            dataSort.forEach((t1,i1) => {//分类数据
        //                t1[arrName].forEach((t3) => {
        //                    if(interfaceSort1.indexOf(t3[arrItemName]) > -1 || interfaceSort2.indexOf(t3[arrItemName]) > -1){
        //                        let num;
        //                        if(interfaceSort1.indexOf(t3[arrItemName]) > -1){
        //                            num = interfaceSort1.indexOf(t3[arrItemName]);
        //                        }else if(interfaceSort2.indexOf(t3[arrItemName]) > -1){
        //                            num = interfaceSort2.indexOf(t3[arrItemName]);
        //                        }
        //                        dataColection[num]["factory" + i1] = t3;
        //                    }
        //                })
        //            });
        //            return dataColection;
        //        },
    }
    //转中文一二三
    Vue.filter('formatZh', (value)=>{
        const z = '零一二三四五六七八九十';
        // let arr = value.split('');
        function to(s) {
            if (s >= 10) {
                let _s = s;
                s = s.split('').join('十');
                if (_s < 20) {
                    s = s.substr(1)
                }
            }
            return s.replace(/\d/g, (i, j) => ((j == 0 && i == 0) || (s.length - 1 === j && i == 0) ? '' : z[i]))
        }
        return to(value)
    })

