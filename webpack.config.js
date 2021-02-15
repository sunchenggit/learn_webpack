// 导入nodejs中处理路径的包
const path = require('path')

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 输出路径
        path: path.resolve(__dirname, 'dist'),
        // 输出文件名
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        }
      ]
    }
}