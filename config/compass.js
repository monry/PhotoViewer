var path = require('path');
var current = process.cwd();

module.exports = {
  project: current,
  comments: false,
  css: 'build/PhotoViewer/css/',
  sass: 'src/css/',
  require: [
    'ceaser-easing',
  ],
};
