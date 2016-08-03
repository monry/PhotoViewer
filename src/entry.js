// ファイルをコピー
require('file?name=../[name].[ext]!./html/index.html');
require('./scss/index.scss');

import Root from './js/views/index/_root';

$(
  () => {
    // Rootコンポーネントを#containerにマウント
    ReactDOM.render(
      <Root/>,
      $('#container').get(0)
    );
  }
);
