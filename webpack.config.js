const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //默认入口
  output: {
    path: path.resolve(__dirname, 'dist'), //默认存储位置为dist文件夹
    filename: '[name].[contenthash].js',
  },
};