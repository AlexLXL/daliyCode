module.exports = {
    publicPath: '', // 基本路径
    outputDir: '../www', // 输出文件目录
    configureWebpack: {
        resolve: {  // 配置3.x使用vue.esm.js
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
            }
        },
    }
}