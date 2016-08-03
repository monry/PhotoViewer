// ファイルをコピー
require('file?name=../[name].[ext]!./html/index.html');
require('./scss/index.scss');

import Root from './js/views/index/_root';

$(
  () => {
    // Helloコンポーネントを#appにマウント
    ReactDOM.render(
      <Root/>,
      $('#container').get(0)
    );
  }
);
