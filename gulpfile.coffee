# Gulp の設定
gulp = require('gulp')
runSequence = require('run-sequence')
webpack = require('webpack-stream')

watch = false
distribute_path = 'build/'

gulp.task(
  'build',
  () ->
    entry_point_path = 'src/entry.coffee'
    config = require('./webpack.config.coffee')
    if (watch)
      config.watch = true
      config.devtool = '#inline-source-map'

    gulp
      .src(entry_point_path)
      .pipe(webpack(config))
      .pipe(gulp.dest("#{distribute_path}js/"))
)

gulp.task(
  'watch',
  (callback) ->
    watch = true
    runSequence('build', callback)
)
