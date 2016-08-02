# Gulp の設定
gulp = require('gulp')
runSequence = require('run-sequence')
webpack = require('webpack-stream')
browserSync = require('browser-sync')

watch = false
distribute_path = 'build/'

gulp.task(
  'init:browser-sync',
  () ->
    browserSync.init(
      server:
        baseDir: 'build/'
        index: 'index.html'
    )
)

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
  'reload-browser',
  () ->
    browserSync.reload()
)

gulp.task(
  'watch:source',
  (callback) ->
    watch = true
    runSequence('build', callback)
)

gulp.task(
  'watch:output',
  (callback) ->
    gulp.watch('build/**/*', [ 'reload-browser' ])
)

gulp.task(
  'default',
  (callback) ->
    runSequence('init:browser-sync', 'watch:output', callback)
    runSequence('watch:source', callback)
)
