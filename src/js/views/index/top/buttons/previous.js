var classNames = require('classnames');

export default class Previous extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={this._getClassNames()}><span>&#x25c0;</span></p>
    );
  }

  _getClassNames() {
    return classNames(
      [
        'move',
        'previous'
      ],
      {}
    );
  }

}
