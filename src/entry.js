// ファイルをコピー
require('file?name=../[name].[ext]!./html/index.html');
require('./scss/index.scss');

// ココが凄く微妙…。
global.Observable = Rx.Observable;

import Index from 'js/controllers/index';
var index = new Index();
index.renderView();

