# WebPack の設定
webpack = require('webpack-stream')
path = require('path')
current = process.cwd()

module.exports =
  output:
    filename: "main.js"
  resolve:
    extensions: ['', '.js', '.coffee']
    root: path.join(current, './src')
  module:
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' }
    ]
  plugins: [
    new webpack.webpack.ProvidePlugin(
      $: 'jquery'
    )
  ]
