// 导入nodejs中处理路径的包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 入口
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    // 插件
    plugins:[
        // 自动处理html文件
        new HtmlWebpackPlugin({
            title: "管理输出"
        }),
        // 清理 /dist 文件夹
        new CleanWebpackPlugin()
    ],
    // 出口
    output: {
        // 输出路径
        path: path.resolve(__dirname, 'dist'),
        // 输出文件名
        filename: '[name].bundle.js'
    }
}