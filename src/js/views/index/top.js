import Buttons from './top/buttons';

var keycode = require('keycode');
var classNames = require('classnames');

const ACCEPT_KEYS = [
  'left',
  'right',
];

export default class Top extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHoge: false,
      isFuga: false,
    };
  }

  render() {
    return (
      <div id="top" className={this._getClassNames()}>
        <Buttons />
      </div>
    );
  }

  componentDidMount() {
    const onKeyUp = Observable.fromEvent(window, 'keyup')
      .where((event) => 0 <= ACCEPT_KEYS.indexOf(keycode(event)))
      .map((event) => keycode(event))
      .publish();
    this._onKeyUp = {
      'left' : onKeyUp.where((key) => 'left'  == key).subscribe(
        (_) => {
          this.setState({ isHoge: !this.state.isHoge });
        }
      ),
      'right': onKeyUp.where((key) => 'right' == key).subscribe(
        (_) => {
          this.setState({ isFuga: !this.state.isFuga });
        }
      ),
    };
    onKeyUp.connect();
  }

  componentWillUnmount() {
    Object.keys(this._onKeyUp).forEach(
      (key) => {
        this._onKeyUp[key].dispose();
      }
    );
  }

  _getClassNames() {
    return classNames(
      [
        'original',
        'piyo',
      ],
      {
        'hoge': this.state.isHoge,
        'fuga': this.state.isHoge && this.state.isFuga,
      }
    )
  }

}
