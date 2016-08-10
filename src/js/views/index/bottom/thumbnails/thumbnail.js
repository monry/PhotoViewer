var classNames = require('classnames');

export default class Thumbnail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this._getClassNames()} style={this._getStyle()} data-index={this.props.index}>
        <p style={this._getStyle()}><img src={this._getImagePath()} alt={this._getAlternativeText()} /></p>
      </li>
    );
  }

  componentDidMount() {
    this._onClick = this.$()
      .clickAsObservable()
      .subscribe(
        (event) => {
          controller.jump(this.props.index);
        }
      );
  }

  componentWillUnmount() {
    this._onClick.dispose();
  }

  _getClassNames() {
    return classNames(
      [],
      {
        'selected': this.props.selectionIndex == this.props.index,
      }
    );
  }

  _getStyle() {
    return {
      width: ($(document).height() * 0.4 * 0.5),
      height: ($(document).height() * 0.4 * 0.5),
    };
  }

  _getImagePath() {
    return `${Const.Image.directory.thumbnail}${(this.props.index + 1).zerofill(3)}.${Const.Image.extension}`;
  }

  _getAlternativeText() {
    return `Photo ${(this.props.index + 1).zerofill(3)}`;
  }

}
