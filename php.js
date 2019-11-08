/**
 * 1.打印输出
 * <body>
 * <h1>My first PHP page</h1>
 *     <?php
 *         echo "Hello World!";
 *     ?>
 * </body>
 * 
 * 2. "."连接符输出 
 * <body>
 * <h1>My first PHP page</h1>
 *     <?php
 *         echo "Hello" . "World!";
 *     ?>
 * </body>
 * 
 * 3.定义变量
 * <?php
 *     function myTest(){
 *         $y=10; // 局部变量
 *         echo "<p>测试函数内变量:<p>";
 *         echo "变量 x 为:" . $GLOBALS['x'];   // 访问全局变量$GLOBALS['x'];
 *         echo "<br>";
 *         echo "变量 y 为: $y";
 *     } 
 *     myTest();
 * 
 *     $a = 5; //全局变量
 *     $c = $a + $a;
 *     echo "变量c的值为: $c";
 * ?>
 * 
 * 5.EOF
 * 大概意思:不用拼接，按html输出文本
 * <?php
 *      $name="runoob";
 *      $a= <<<EOF
 *          "abc"$name
 *          "123"
 *      EOF;
 *      // 结束需要独立一行且前后不能空格
 *      echo $a;
 * ?>
 * 
 * 6.基本数据类型和类型判断
 * <?php
 *      $x = 5985;  // int
 *      $y = 2.3;   // float
 *      $z = true;  // bool
 *      $j="Hello world!";  // string
 *      $q=null;    //NULL
 *      $k=array("Volvo","BMW","Toyota");   // array
 *      var_dump($x);   // 类型判断
 * ?>
 * 
 * 7.常量
 * 全局的
 * <?php
 *      define(PI,3.14);
 *      define("GREETING", "欢迎访问 Runoob.com");
 *      function myTest() {
 *          echo GREETING;
 *      }
 *      myTest();    // 输出 "欢迎访问 Runoob.com"
 * ?>
 * 
 * 7.查找字符串是否包含
 * <?php
 *      echo strpos("Hello world!","world");    // 6(找不到false))
 * ?>
 * 
 * 8.二维数组
 * <?php
 * $cars = array
 * (
 *     1,
 *     array("BMW",60,59),
 *     array("Toyota",110,100)
 * );
 * print_r($cars); //print_r 打印数组结构
 * ?>                               ||
 *                                  Array
 *                                  (
 *                                      [0] => 1
 *                                      [1] => Array
 *                                          (
 *                                              [0] => BMW
 *                                              [1] => 60
 *                                              [2] => 59
 *                                          )
 *                                  
 *                                      [2] => Array
 *                                          (
 *                                              [0] => Toyota
 *                                              [1] => 110
 *                                              [2] => 100
 *                                          )
 *                                  
 *                                  )
 * 
 * 
 * <?php
 *      $cars=array("Volvo","BMW","Toyota");
 *      // 数组长度
 *      echo count($cars);      
 *      // 遍历数组        
 *      for($x=0;$x<$arrlength;$x++)    
 *      {
 *          echo $cars[$x];
 *          echo "<br>";
 *      }
 *      foreach ($array as $item)
 *      {
 *          要执行代码;
 *      }
 *      // 排序
 *      sort($numbers); // 升序
 *      rsort($cars);   // 降序
 * 
 *      $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
 *      asort($age);    // 按值升序
 *      arsort($age);   // 按值降序
 *      ksort($age);    // 按键升序
 * ?>
 * 
 * 9.$_SERVER['PHP_SELF'];
 *      $_SERVER 是一个包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组。
 *  $_REQUEST、$_POST、$_GET - 处理表单请求数据
 *      <html>
 *      <body>
 *          <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
 *          Name: <input type="text" name="fname">
 *          <input type="submit">
 *          </form>
 *           
 *          <?php 
 *          $name = $_REQUEST['fname']; 
 *          echo $name; 
 *          ?>
 *      </body>
 *      </html>
 * 
 * 10.函数
 *      <?php
 *           function add($x,$y)
 *           {
 *               $total=$x+$y;
 *               return $total;
 *           }
 *            
 *           echo "1 + 16 = " . add(1,16);
 *      ?>
 * 
 * 11.魔术常量
 *      __LINE__        文件当前行
 *      __FILE__        文件绝对路径
 *      __DIR__         文件所在目录
 *      __FUNCTION__    函数名(小写))
 *      __CLASS__       类名(区分大小写))
 *      __METHOD__      类的方法名
 *      __NAMESPACE__   当前命名空间的名称
 *          <?php
 *              echo '这是第 " '  . __LINE__ . ' " 行';
 *          ?>
 * 
 *      __TRAIT__       class代码复用
 *          <?php
 *              class Base {
 *                  public function sayHello() {
 *                      echo 'Hello ';
 *                  }
 *              }
 *               
 *              trait SayWorld {    // 相当于在上面父类，下面子类中插入了这个函数
 *                  public function sayHello() {
 *                      parent::sayHello();
 *                      echo 'World!';
 *                  }
 *              }
 *               
 *              class MyHelloWorld extends Base {
 *                  use SayWorld;   // 子类使用上面函数
 *              }
 *               
 *              $o = new MyHelloWorld();
 *              $o->sayHello();
 *          ?>
 * 
 * 12.命名空间
 * 
 * 
 * 
 * 
 * 
 * 注释:   // 
 *        /* * /
 * 
 * echo，print，print_r，var_dump 的区别
 *      1.echo
 *      输出一个或者多个字符串。
 *      2.print
 *      和 echo 最主要的区别： print 仅支持一个参数，并总是返回 1。
 *      3.print_r
 *      打印关于变量的易于理解的信息,如果给出的是 string、integer 或 float，将打印变量值本身。如果给出的是 array，将会按照一定格式显示键和元素。object 与数组类似。 记住，print_r() 将把数组的指针移到最后边。使用 reset() 可让指针回到开始处。
 *      4.var_dump
 *      此函数显示关于一个或多个表达式的结构信息，包括表达式的类型与值。数组将递归展开值，通过缩进显示其结构。
 *      5.var_dump 和 print_r 的区别
 *      var_dump 返回表达式的类型与值而 print_r 仅返回结果，相比调试代码使用 var_dump 更便于阅读。
 * 
 * 
 * 各种排序
 * 
 */