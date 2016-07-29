# WebPack の設定
webpack = require('webpack-stream')
path = require('path')
current = process.cwd()

module.exports =
  output:
    filename: "main.js"
  resolve:
    extensions: ['', '.cjsx', '.js', '.coffee']
    root: path.join(current, './src')
  module:
    loaders: [
      { test: /\.cjsx$/, loaders: ["coffee-loader", "cjsx-loader"]}
      { test: /\.coffee$/, loader: 'coffee-loader' }
    ]
  plugins: [
    new webpack.webpack.ProvidePlugin(
      $: 'jquery'
      React: 'react'
      ReactDOM: 'react-dom'
    )
  ]
