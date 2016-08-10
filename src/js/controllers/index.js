import Root from 'js/views/index';

export default class Index {

  /**
   * コンストラクタ
   */
  constructor() {
    console.log("Controller Index initialized!");
    this.selectionIndex = new Rx.ReactiveProperty(0);
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
   * 次の写真を表示
   */
  next() {
    if (this.selectionIndex.value + 1 >= Const.Image.count) {
      return;
    }
    this.selectionIndex.value++;
  }

  /**
   * 前の写真を表示
   */
  previous() {
    if (this.selectionIndex.value <= 0) {
      return;
    }
    this.selectionIndex.value--;
  }

  /**
   * 指定の写真を表示
   *
   * @param {Number} index 写真番号
   */
  jump(index) {
    if (0 <= index && index < Const.Image.count) {
      this.selectionIndex.value = index;
    }
  }

  /**
   * div#container ノードに定義されている設定を読み込む
   *
   * @private
   */
  _loadSetting() {
    const $container = $('#container');
    Const = {
      Image: {
        count    : parseInt($container.attr('data-image-count')),
        extension: $container.attr('data-image-extension'),
        directory: {
          photo    : $container.attr('data-image-directory-photo'),
          thumbnail: $container.attr('data-image-directory-thumbnail'),
        },
        aspectRatio: {
          x: parseInt($container.attr('data-image-aspect-ratio-x')),
          y: parseInt($container.attr('data-image-aspect-ratio-y')),
        }
      },
      returnPath: $container.attr('data-return-path'),
    };
  }

}