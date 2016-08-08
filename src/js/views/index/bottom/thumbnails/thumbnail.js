var classNames = require('classnames');

export default class Thumbnail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this._getClassNames()}>
        <p><img src="" alt="Photo {this.prop.index.zerofill(3)}" /></p>
      </li>
    );
  }

  _getClassNames() {
    return classNames(
      [],
      {}
    );
  }

}
