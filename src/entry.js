// 共通ライブラリ読み込み
require('file?name=../[name].[ext]!./html/index.html');
require('js/utilities/extensions.js');

import Index from 'js/controllers/index';
var index = new Index();
index.renderView();

