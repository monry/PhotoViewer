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
      <ReactCSSTransitionGroup
        transitionName="photo"
        transitionEnter={true}
        transitionEnterTimeout={500}
        transitionLeave={true}
        transitionLeaveTimeout={500}
      >
        <div className={this._getClassNames()} key={this.props.index} style={this._getStyle()}><p style={this._getStyle()}><img src={this._getImagePath()} alt={this._getAlternativeText()} /></p></div>
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
    if ($(document).width() > $(document).height()) {
      return {
        width : $(document).height() * 0.8,
        height: $(document).height() * 0.8,
      }
    }
    return {
      width : $(document).width() * 0.8,
      height: $(document).width() * 0.8,
    }
  }

  _getImagePath() {
    return `${Const.Image.directory.photo}${(this.props.index + 1).zerofill(3)}.${Const.Image.extension}`;
  }

  _getAlternativeText() {
    return `Photo ${this.props.index + 1}`;
  }

}
