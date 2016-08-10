import Buttons from './top/buttons';
import Photos from './top/photos';

var keycode = require('keycode');
var classNames = require('classnames');

const ACCEPT_KEYS = [
  'left',
  'right',
];

export default class Top extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="top" className={this._getClassNames()}>
        <Photos />
        <Buttons />
      </div>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  _getClassNames() {
    return classNames(
      [],
      {}
    )
  }

}
