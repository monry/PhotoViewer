// ファイルをコピー
require('file?name=../[name].[ext]!./html/index.html');
require('./scss/index.scss');

import Index from 'js/controllers/index';
var index = new Index();
index.renderView();

