// HTML ファイルコピー
require('file?name=../[name].[ext]!./html/index.html');

// 自作ライブラリ読み込み
require('./js/utilities/extensions.js');

// jQuery プラグイン読み込み
require('jquery.scrollto');

// その他ライブラリ読み込み
require('rx-jquery');

global.Const = {};
window.$ = $;

import Index from 'js/controllers/index';
var index = new Index();
index.renderView();

