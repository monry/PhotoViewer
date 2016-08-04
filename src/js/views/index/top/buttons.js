import Close from './buttons/close';

var classNames = require('classnames');

export default class Buttons extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this._getClassNames()}><Close /></div>
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
