import Top from './top';
import Bottom from './bottom';
var keycode = require('keycode');

export default class Root extends React.Component {

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
    this._onKeyUp = Observable.fromEvent(window, 'keyup')
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
