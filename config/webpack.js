// WebPack の設定
var webpack = require('webpack-stream');
var path = require('path');
var current = process.cwd();

module.exports = {
  output: {
    filename: 'index.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(current, 'src'),
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } },
      { test: /\.s?css$/, loaders: ['style', 'css', 'sass'] },
    ],
  },
  plugins: [
    new webpack.webpack.ProvidePlugin(
      {
        $: 'jquery',
        React: 'react',
        ReactDOM: 'react-dom',
        Rx: 'rx',
      }
    )
  ],
};
