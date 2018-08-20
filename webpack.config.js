const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/app/app.js'
  },
  output: {
    filename: 'baunilhamodal.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/example/index.html",
      filename: "./example/index.html",
      inject: 'head'
    }),
    new MiniCssExtractPlugin({
      filename: "baunilhamodal.css",
      chunkFilename: "[id].css"
    })
  ]
};