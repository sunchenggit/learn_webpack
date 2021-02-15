// 导入nodejs中处理路径的包
const path = require('path')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

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
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(csv|tsv)$/i,
          use: ['csv-loader']
        },
        {
          test: /\.xml$/i,
          use: ['xml-loader']
        },
        {
          test: /\.toml$/i,
          type: 'json',
          parser: {
            parse: toml.parse
          }
        },
        {
          test: /\.yaml$/i,
          type: 'json',
          parser: {
            parse: yaml.parse
          }
        },
        {
          test: /\.json5$/i,
          type: 'json',
          parser: {
            parse: json5.parse
          }
        }
      ]
    }
}