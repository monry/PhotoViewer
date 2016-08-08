import Root from 'js/views/index';

export default class Index {

  /**
   * コンストラクタ
   */
  constructor() {
    console.log("Controller Index initialized!");
  }

  /**
   * View を描画する
   */
  renderView() {
    $(
      () => {
        // 設定を読み込む
        this._loadSetting();

        // Rootコンポーネントを#containerにマウント
        ReactDOM.render(
          <Root/>,
          $('#container').get(0)
        );
      }
    );
  }

  /**
   * div#container ノードに定義されている設定を読み込む
   *
   * @private
   */
  _loadSetting() {
    const $container = $('#container');
    Const.Image = {
      count    : parseInt($container.attr('data-image-count')),
      extension: $container.attr('data-image-extension'),
      directory: {
        photo    : $container.attr('data-image-directory-photo'),
        thumbnail: $container.attr('data-image-directory-thumbnail'),
      },
    };
  }

}