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
};