const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: './src/app/baunilhamodal.js'
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
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
          },
        ],
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/example/index.html",
      filename: "./index.html"
    })
  ]
};