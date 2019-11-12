/**
 * 
 * 环境安装
 * 安装JDK
 * 安装Android Studio(包含SDK Manager)
 * 配置环境变量 ANDROID_HOME  D:\android-sdk-windows(系统的)
 * SDK Manager安装特定版本的android版本
 *        |Tools 的 Andeoid SDK Tools和Android SDK Platform-tools和Android SDK Build-tools(一个)
 *        |android-25 的 SDK Platform
 * 
 * npm install -g cordova  //全局安装cordova
 * cordova -v
 * 
 * cordova create projectName foo.com appName //创建项目
 * cd ProjectName
 * cordova platform add browser --save//添加平台
 * 				(cordova platform ls)
 * 				(cordova platform remove android)
 * 				(cordova platform update android)
 * 				(android ios --save)(--save表示更新config.xml配置文件)
 * cordova requirements //检查是否满足构建平台的要求
 * cordova build (打包的时候注意安卓的版本，现在手机的是7.1.2，所以我添加平台装了个7.1.1 cordova platform add android@7.1.1 --save)
 * cordova build android //打包-打包失败(Requirements check failed for JSK 1.8)可能是cordova新版本导致(建议使用低版本)
 * 					  	//打包时使用的内存大小设置: android/sdk/build-tools/android-4.3/dx.bat --> set defaultXmx=-Xmx1024M
 *            			//实际是把文件放在了：项目/platform/android/app/src/main/www(里面有cordova.js)
 *            			//打包输出: 项目目录/platform/android/build/output/xxx.apk
 * 						//打包时需使用纯英文路径
 * cordova run android //运行在手机(手机USB连到电脑)
 *
 *
 *  通过yarn build 打包vue项目，把打包好的文件拉到cordova项目的www文件夹
 * vue+cordova遇到的问题:
 * 
 *      1.main.js加上这个 // 会导致在web端看不到组件的内容-可以删了或者在app里面设置
 *          document.addEventListener('deviceready',function () {
 *             new Vue({
 *                 render: h => h(App),
 *             }).$mount('#app')
 *          )
 *		2.index.html内容显示，组件不显示--->原因:打包后html引用js是/开头(正确路径应该是js/index.js 不是/js/index.js)
 *			解决方法: a.打完包手动删除/
 *					  b.配置vue-cli的webpack配置-脚手架3更目录添加vue.config.js的配置(脚手架2网上很多)
 *								module.exports = {
 *   								publicPath: '', // 基本路径（取消"/"）
 *   								outputDir: '../www', // 输出文件目录
 *   								configureWebpack: {
 *       								resolve: {  // 配置3.x使用vue.esm.js
 *           									extensions: ['.js', '.vue', '.json'],
 *           									alias: {
 *               									'vue$': 'vue/dist/vue.esm.js',
 *           									}
 *       								},
 *   								}
 *								}
 *
 *      3.照相机配置-Camera.DestinationType.DATA_URL的Camera报错
 *          解决方法:取消eslint(新建脚手架的时候不选择)或package.json里面删除eslint的依赖包，然后重新下包 / 网上的配置
 *
 *
 *
 *
 *
 *
 * cordova plugin command add cordova-plugin-camera --save //添加插件
 * 					   (add、remove、list)
 * 					   
 * 
 * 
 * 
 * 文件:
 * config.xml 配置文件 -- 修改app名字:<name>plane1</name>
 
						修改图标:
						 <platform name="android">
 *                          <allow-intent href="market:*" />
 *                          <icon src="res/icon.png"> //不同平台设置不同，看开发文档documentation/Customize iconss
 *                       </platform>
 
						
 
 
 
 
 * hooks 存放cordova命令脚本文件
 * platforms 各个平台的原生代码工程
 * plugins 插件目录
 * www 源码目录
 * 
 * 用了:
 * mint-ui
 * vue-ydui
 * vant
 * 
 * PC端可以用
 * ant design、
 * element-ui、
 * iView(有中后台模板)
 * 
 * 
 * cordova emulate android //在制定模拟器运行
 * 
 * 
 * index.js文件:
 * document.addEventListener("deviceready",function(){
 *  alert("设备api准备就绪！")
 * })
 * 
 * 
 
 
 
 
 * 
 */