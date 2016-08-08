import Close from './buttons/close';
import Next from './buttons/next';
import Previous from './buttons/previous';

var classNames = require('classnames');

export default class Buttons extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this._getClassNames()}>
        <Close />
        <Previous />
        <Next />
      </div>
    );
  }

  _getClassNames() {
    return classNames(
      [
        'buttons',
      ],
      {}
    );
  }

}
