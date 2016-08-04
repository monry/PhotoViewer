import Root from 'js/views/index/_root';

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
        // Rootコンポーネントを#containerにマウント
        ReactDOM.render(
          <Root/>,
          $('#container').get(0)
        );
      }
    );
  }

}