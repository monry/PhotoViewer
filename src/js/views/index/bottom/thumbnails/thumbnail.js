var classNames = require('classnames');

export default class Thumbnail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this._getClassNames()} data-index={this.props.index}>
        <p><img src={this._getImagePath()} alt={this._getAlternativeText()} /></p>
      </li>
    );
  }

  _getClassNames() {
    return classNames(
      [],
      {}
    );
  }

  _getImagePath() {
    return "";
    //return `${Const.Image.directory.thumbnail}${(this.props.index + 1).zerofill(3)}.${Const.Image.extension}`;
  }

  _getAlternativeText() {
    return `Photo ${(this.props.index + 1).zerofill(3)}`;
  }

}
