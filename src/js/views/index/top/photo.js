var classNames = require('classnames');

export default class Photo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: controller.selectionIndex.value,
    };
    controller.selectionIndex.asObservable().subscribe(
      (selectionIndex) => {
        this.setState({index: selectionIndex});
      }
    );
  }

  render() {
    return (
      <div className={this._getClassNames()}>
        {this._renderImage('previous', this.state.index - 1)}
        {this._renderImage('main'    , this.state.index)}
        {this._renderImage('next'    , this.state.index + 1)}
      </div>
    );
  }

  setPhotoIndex(index) {
    this.setState({ index: index });
  }

  _renderImage(className, index) {
    if (0 > index || index >= Const.Image.count) {
      return;
    }
    return (
      <p className={className}><img src={this._getImagePath(index)} alt={this._getAlternativeText(index)} /></p>
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

  _getImagePath(index) {
    return "";
    //return `${Const.Image.directory.photo}${(index + 1).zerofill(3)}.${Const.Image.extension}`;
  }

  _getAlternativeText(index) {
    return `Photo ${index}`;
  }

}
