const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production', // 生产环境
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            {
              test: /\.css$/i, //正则表达式
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                  publicPath: "../",
                // hmr:process.env.NODE_ENV === 'development',非开发不需要用此行命令
                  },
                },
                "css-loader",
              ], // 生产环境用方法二生成css，可以做缓存
            },
        ],
    },
};