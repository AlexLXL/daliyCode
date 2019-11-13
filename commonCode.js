/**
 * 
 * vue：
 *      v-for遍历对象
 *          -(value,key,index) in user
 * 
 *      .sync修饰符(进行父子间数据传输简写)     //https://blog.csdn.net/badmoonc/article/details/82876294
 *          -子组件
 *                  <template>
 *                    <div>
 *                      <input :value="name" @input="abc" type="text">
 *                    </div>
 *                  </template>
 *                  <script>
 *                    export default {
 *                      props: {
 *                        name: {
 *                          type: String,
 *                          required: true
 *                        }
 *                      },
 *                      methods: {
 *                        abc(e) {
 *                          console.log(e.target.value);
 *                          this.$emit('update:name', e.target.value);//这个触发父组件的34行
 *                        }
 *                      }
 *                    }
 *                  </script>
 *          -父组件
 *                  <template>
 *                    <div>
 *                      <child :name.sync="name"></child>
 *                      <button @click="change">改变</button>
 *                    </div>
 *                  </template>
 *                  <script>
 *                  import child from './child'
 *                  export default {
 *                    components: {
 *                      child
 *                    },
 *                    data () {
 *                      return {
 *                        listItems: ['buy food', 'play games', 'sleep'],
 *                        name: 'xiaoming'
 *                      }
 *                    },
 *                    methods: {
 *                      change() {
 *                        this.name = '123';
 *                      }
 *                  }
 *                  </script>
 * 
 *          获取元素高度    //https://www.jianshu.com/p/434d55e86ab9
 *              var height= this.$refs.text.offsetHeight; //100
 * 
 * 
 * 
 * moment.js获取某年某月的开始/最后一天
 *      moment(日期).startOf('year/month').format("YYYY-MM-DD")//日期可以是 年月的格式 也可以是年月日的格式
 *      moment(日期).endOf('year/month').format("YYYY-MM-DD")//日期可以是 年月的格式 也可以是年月日的格式
 * 
 *      created()
 *      self.dateRange = [moment().startOf('month').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')];
 * 
 *      this.dateRange[0]?moment(this.dateRange[0]).format('YYYY-MM-DD HH:mm:ss'):''
 *      this.dateRange[1]?moment(this.dateRange[1]).format('YYYY-MM-DD 23:59:59'):''
 * 
 * 
 * 原生js:
 *      Dom
 *          使用childern、parentNode
 * 
 *      Date和Number
 *          var date = new Date();
 *          console.log(date.valueOf());    //1524815456865
 *          console.log(date.toString());   //Fri Apr 27 2018 15:50:56 GMT+0800 (CST)
 *          console.log(date.toLocaleString()); //2018/4/27 下午5:34:56
 *          
 *          var num = new Number(1337);
 *          console.log(num.valueOf());    //1337，返回一个 Number 对象的基本数字值
 *          console.log(num.toString());    //1337，字符串
 *          console.log(num.toLocaleString());    //1,337，把数字转换为字符串，使用本地数字格式顺序
 * 
 *      Array
 *          Array(100).fill(0); 快速声明长度100填充0的数组 fill(value,start,end)
 * 
 *      Number: String(value)转字符串   8.545555.toFixed(2)保留位数)(四舍五入)   Number(String(8.545555).slice(0, String(8.545555).indexOf('.') + 3))(不四舍五入) 
 *      String: +String      转数字
 * 
 * 		科学计数法转数字
			+new Number(4.7562498E7)
 * 
 * 
 * 
 */


 /**
 * 处理接口数据(每一个厂区有多个指标 -> 一个指标有多个厂区值(且返回数据中有无用数据用itemSort、interfaceSort1过滤，多种情况下过滤增加interfaceSort2))
 *      dealData(data, arrName, arrItemName,updateInterfaceSort1){ //处理图表传过来的数据,data数据，arrName放要用数据的数组名,arrItemName要使用的数据名,updateInterfaceSort1用于适应不同接口改变interfaceSort1
 *           var factorySort = ['前山', '拱北', '白藤', '新青', '三灶', '平沙', '南水', '富山', '南区'];//图表横向排序
 *           var itemSort = ['COD', 'BOD', 'NH3N', 'SS', 'TP', 'TN', 'PH'];//图表纵向排序
 *           var interfaceSort1 = ['出水CODcr','出水BOD₅','出水NH3-N','出水SS','出水TP','出水TN','出水pH'];//接口返回数据名字排序
 *           var interfaceSort2 = ['出水CODcr',"出水'BOD5  ",'出水氨氮','出水SS','出水TP','出水TN','出水pH'];//接口返回数据排序
 *           if(updateInterfaceSort1 == 'loadingTable2'){//接口返回数据名字排序
 *               interfaceSort1 = ['CODcr','BOD₅','氨氮','SS','TP','TN'];
 *           }
 *           var dataSort = data.reduce((add, item, index) => { add.splice(factorySort.indexOf(item.factoryName), 1, item); return add }, Array(data.length));
 *           //初始化数据(按实际需要)
 *           var dataColection = Array(itemSort.length);
 *           for (let i = 0; i < dataColection.length; i++) {
 *               dataColection[i] = {
 *                   "item": itemSort[i],
 *                   factory0: 0,
 *                   factory1: 0,
 *                   factory2: 0,
 *                   factory3: 0,
 *                   factory4: 0,
 *                   factory5: 0,
 *                   factory6: 0,
 *                   factory7: 0,
 *                   factory8: 0,
 *               }
 *           }
 *           dataSort.forEach((t1,i1) => {//分类数据
 *               t1[arrName].forEach((t3) => {
 *                   if(interfaceSort1.indexOf(t3[arrItemName]) > -1 || interfaceSort2.indexOf(t3[arrItemName]) > -1){
 *                       let num;
 *                       if(interfaceSort1.indexOf(t3[arrItemName]) > -1){
 *                           num = interfaceSort1.indexOf(t3[arrItemName]);
 *                       }else if(interfaceSort2.indexOf(t3[arrItemName]) > -1){
 *                           num = interfaceSort2.indexOf(t3[arrItemName]);
 *                       }
 *                       dataColection[num]["factory" + i1] = t3;
 *                   }
 *               })
 *           });
 *           return dataColection;
 *       },
 */

 // 小分页
     // <el-pagination
    //  small
    //  layout="prev, pager, next"
    //  :current-page.sync="currentMaintainPage"
    //  @current-change="handleMaintainChange"
    //  :total="totalRecordMaintenance">
    // </el-pagination>
 //
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

//向上滚动
    // @keyframes TaskScroll {
    //     from{
    //       top: 0;
    //     }
    //     to{
    //       top: -100%;
    //     }
    // }

    // &.openScroll{
    //     animation: TaskScroll 25s linear infinite;
    // }