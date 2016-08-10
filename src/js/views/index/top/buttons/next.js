var classNames = require('classnames');

export default class Next extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={this._getClassNames()}><span>&#x25b6;</span></p>
    );
  }

  _getClassNames() {
    return classNames(
      [
        'move',
        'next',
      ],
      {}
    );
  }

}
