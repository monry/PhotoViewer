var classNames = require('classnames');

export default class Close extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={this._getClassNames()}>Close</p>
    );
  }

  _getClassNames() {
    return classNames(
      [
        'close',
      ],
      {}
    );
  }

}
