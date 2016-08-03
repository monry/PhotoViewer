// Gulp の設定
var gulp = require('gulp');
var runSequence = require('run-sequence');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');

var watch = false;
const distribute_path = 'build/';

gulp.task(
  'init:browser-sync',
  () => {
    browserSync.init(
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
  'build',
  () => {
    const entry_point_path = 'src/entry.js';
    var config = require('./webpack.config.js');
    if (watch) {
      config.watch = true;
      config.devtool = '#inline-source-map';
    }

    gulp
      .src(entry_point_path)
      .pipe(webpack(config))
      .pipe(gulp.dest(`${distribute_path}js/`));
  }
);

gulp.task(
  'reload-browser',
  () => {
    browserSync.reload();
  }
);

gulp.task(
  'watch:source',
  (callback) => {
    watch = true;
    runSequence('build', callback);
  }
);

gulp.task(
  'watch:output',
  (callback) => {
    gulp.watch('build/**/*', [ 'reload-browser' ]);
  }
);

gulp.task(
  'default',
  (callback) => {
    runSequence('init:browser-sync', 'watch:output', callback);
    runSequence('watch:source', callback);
  }
);
