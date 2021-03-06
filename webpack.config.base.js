const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// base里有6种属性
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'index.[contenthash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: '引入HTML',
          template: 'src/assets/index.html'
      })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"] // 把文件变为文件路径
            },
            {
                test: /\.styl$/,
                loader: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                  ],
            },
            {
                test: /\.less$/i,
                loader: [
                  "style-loader",
                  "css-loader",
                  "less-loader",
                ],
            },
          {
            test: /\.scss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                  loader:"sass-loader",
                  options:{
                      implementation:require('dart-sass'), 
                  }
              }
            ],
          },
        ],
      },
};