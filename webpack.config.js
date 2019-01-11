const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    host: "localhost",
    port: 8081
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Template',
      template: './src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin({ sourceMap: true })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /spec/],
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /spec/],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
};
