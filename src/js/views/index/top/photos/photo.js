var classNames = require('classnames');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.index < 0 || this.props.index >= Const.Image.count) {
      return null;
    }
    return (
      <ReactCSSTransitionGroup transitionName="sample" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
        <p className={this._getClassNames()} style={this._getStyle()}><img src={this._getImagePath()} alt={this._getAlternativeText()} /></p>
      </ReactCSSTransitionGroup>
    );
  }

  _getClassNames() {
    return classNames(
      [
        'photo',
      ],
      {
        'previous': this.props.index == controller.selectionIndex.value - 1,
        'main'    : this.props.index == controller.selectionIndex.value,
        'next'    : this.props.index == controller.selectionIndex.value + 1,
      }
    );
  }

  _getStyle() {
    if ($(document).width() / $(document).height() > Const.Image.aspectRatio.x / Const.Image.aspectRatio.y) {
      return {
        width: $(document).width() * 0.8,
        height: $(document).width() * 0.8 * (Const.Image.aspectRatio.y / Const.Image.aspectRatio.x),
      }
    }
    return {
      width: $(document).height() * 0.8 * (Const.Image.aspectRatio.x / Const.Image.aspectRatio.y),
      height: $(document).height() * 0.8,
    }
  }

  _getImagePath() {
    return "";
    //return `${Const.Image.directory.photo}${(this.props.index + 1).zerofill(3)}.${Const.Image.extension}`;
  }

  _getAlternativeText() {
    return `Photo ${this.props.index + 1}`;
  }

}
