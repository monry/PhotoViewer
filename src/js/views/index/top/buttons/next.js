var classNames = require('classnames');

export default class Next extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={this._getClassNames()}>Next</p>
    );
  }

  _getClassNames() {
    return classNames(
      [
        'next',
      ],
      {}
    );
  }

}
