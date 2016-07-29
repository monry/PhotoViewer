# Gulp の設定
gulp = require('gulp')
runSequence = require('run-sequence')
webpack = require('webpack-stream')

watch = false

gulp.task(
  'build:js',
  () ->
    entry_point_path = 'src/coffee/main.cjsx'
    distribute_path = 'assets/js/'
    config = require('./webpack.config.coffee')
    if (watch)
      config.watch = true
      config.devtool = '#inline-source-map'

    gulp
      .src(entry_point_path)
      .pipe(webpack(config))
      .pipe(gulp.dest(distribute_path))
)

gulp.task(
  'watch:js',
  (callback) ->
    watch = true
    runSequence('build:js', callback)
)
