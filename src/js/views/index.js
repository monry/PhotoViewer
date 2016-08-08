import Top from './index/top';
import Bottom from './index/bottom';
var keycode = require('keycode');

export default class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content">
        <Top/>
        <Bottom/>
      </div>
    );
  }

  componentDidMount() {
    this._onKeyUp = Rx.Observable.fromEvent(window, 'keyup')
      .where((event) => 'esc' == keycode(event))
      .subscribe(
        (event) => {
          console.log('back-to-top');
        }
      );
  }

  componentWillUnmount() {
    this._onKeyUp.dispose();
  }

}
