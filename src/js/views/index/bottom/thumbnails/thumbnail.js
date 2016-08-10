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

  componentDidMount() {
    this._onClick = Rx.Observable
      .fromEvent(ReactDOM.findDOMNode(this), 'click')
      .subscribe(
        (event) => {
          this.props._setSelectionIndex(this.props.index);
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

  _getImagePath() {
    return "";
    //return `${Const.Image.directory.thumbnail}${(this.props.index + 1).zerofill(3)}.${Const.Image.extension}`;
  }

  _getAlternativeText() {
    return `Photo ${(this.props.index + 1).zerofill(3)}`;
  }

}
