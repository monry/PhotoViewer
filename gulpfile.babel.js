// Gulp の設定
/** @var {Gulp} gulp */
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var compass = require('gulp-compass');
var runSequence = require('run-sequence');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');

const distribute_path = 'build/';

const Const = {
  Task: {
    buildJS : 'build-js',
    buildCSS: 'build-css',
    watchJS : 'watch-js',
    watchCSS: 'watch-css',
    bsInit  : 'browser-sync:init',
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
  Const.Task.buildJS,
  () => {
    const entry_point_path = 'src/entry.js';
    var config = require('./config/webpack.js');
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
  Const.Task.buildCSS,
  () => {
    const entry_point_path = 'src/css/index.css';
    var config = require('./config/compass.js');

    return gulp
      .src(entry_point_path)
      .pipe(plumber({
        errorHandler: notify.onError('<%= error.message %>')
      }))
      .pipe(compass(config))
      .pipe(browserSync.reload({stream: true}));
  }
);

gulp.task(
  Const.Task.watchJS,
  (callback) => {
    watch('./src/**/*.js', (event) => gulp.start(Const.Task.buildJS));
  }
);

gulp.task(
  Const.Task.watchCSS,
  (callback) => {
    watch('./src/**/*.scss', (event) => gulp.start(Const.Task.buildCSS));
  }
);

gulp.task(
  'default',
  (callback) => {
    runSequence(
      Const.Task.bsInit,
      [ Const.Task.buildJS, Const.Task.buildCSS ],
      [ Const.Task.watchJS, Const.Task.watchCSS ],
      callback
    );
  }
);
