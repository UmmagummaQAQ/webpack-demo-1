const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
    ...base, // 把base所有属性抄过来，接着再去覆盖base属性
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    mode: 'development', // 开发模式
    module: {
        rules: [
            ...base.module.rules,
          {
            test: /\.css$/i, //正则表达式
            use: ["style-loader","css-loader"], // 开发环境build用JS生成CSS
          }
        ],
    },
};