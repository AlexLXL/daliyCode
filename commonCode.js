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
 * 
 * 
 */