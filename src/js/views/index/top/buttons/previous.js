var classNames = require('classnames');

export default class Previous extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={this._getClassNames()}>Previous</p>
    );
  }

  _getClassNames() {
    return classNames(
      [
        'previous'
      ],
      {}
    );
  }

}
