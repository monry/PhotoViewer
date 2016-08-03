// Gulp の設定
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var runSequence = require('run-sequence');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');

const distribute_path = 'build/';

const Const = {
  Task: {
    build : 'build',
    bsInit: 'browser-sync:init',
    watch : 'watch',
  }
};

gulp.task(
  Const.Task.bsInit,
  () => {
    return browserSync.init(
      {
        server: {
          baseDir: 'build/',
          index: 'index.html',
        }
      }
    );
  }
);

gulp.task(
  Const.Task.build,
  () => {
    const entry_point_path = 'src/entry.js';
    var config = require('./webpack.config.js');
    config.devtool = 'source-map';

    return gulp
      .src(entry_point_path)
      .pipe(plumber({
        errorHandler: notify.onError('<%= error.message %>')
      }))
      .pipe(webpack(config))
      .pipe(gulp.dest(`${distribute_path}js/`))
      .pipe(browserSync.reload({stream: true}));
  }
);

gulp.task(
  Const.Task.watch,
  (callback) => {
    gulp.watch('./src/**/*', [Const.Task.build]);
  }
);

gulp.task(
  'default',
  (callback) => {
    runSequence(Const.Task.bsInit, Const.Task.watch, callback);
  }
);
