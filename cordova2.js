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
 * cordova platform add browser //添加平台
 * 				(cordova platform ls)
 * 				(cordova platform remove android)
 * 				(cordova platform update android)
 * 				(android ios --save)(--save表示更新config.xml配置文件)
 * cordova requirements //检查是否满足构建平台的要求
 * cordova build android //打包-打包失败(Requirements check failed for JSK 1.8)可能是cordova新版本导致(建议使用低版本)
 * 					  //打包时使用的内存大小设置: android/sdk/build-tools/android-4.3/dx.bat --> set defaultXmx=-Xmx1024M
 *            //实际是把文件放在了：项目/platform/android/app/src/main/www(里面有cordova.js)
 *            //打包输出: 项目目录/platform/android/build/output/xxx.apk
 * cordova run android //运行在手机(手机USB连到电脑)
 * 
 * cordova plugin command add cordova-plugin-camera --save //添加插件
 * 					   (add、remove、list)
 * 					   
 * 
 * 
 * 
 * 文件:
 * config.xml 配置文件 -- <platform name="android">
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