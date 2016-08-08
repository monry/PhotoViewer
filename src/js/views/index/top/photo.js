var classNames = require('classnames');

export default class Photo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this._getClassNames()}></div>
    );
  }

  _getClassNames() {
    return classNames(
      [
        'photo',
      ],
      {}
    );
  }

}
