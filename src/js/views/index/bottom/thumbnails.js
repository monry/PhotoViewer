var classNames = require('classnames');
var keycode = require('keycode');
var jump = require('jump.js');
import Thumbnail from './thumbnails/thumbnail';

export default class Thumbnails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectionIndex: 0,
    };
  }

  render() {
    return (
      <ol className={this._getClassNames()}>
        {this._getThumbnailList()}
      </ol>
    );
  }

  componentDidMount() {
    const onKeyUp = Rx.Observable.fromEvent(window, 'keyup').where((event) => this.props.visibility).share();
    this._keyboardEvents = {
      left : onKeyUp.where((event) => 'left'  == keycode(event)).subscribe((event) => { this._changeSelectionIndex(-1); }),
      right: onKeyUp.where((event) => 'right' == keycode(event)).subscribe((event) => { this._changeSelectionIndex( 1); }),
    };
  }

  componentWillUnmount() {
    this._keyboardEvents.forEach(
      (keyboardEvent) => {
        keyboardEvent.dispose();
      }
    );
  }

  _changeSelectionIndex(amount) {
    this.setState({ selectionIndex: this.state.selectionIndex + amount });
    console.log(this.state.selectionIndex);
    jump(`ol.thumbnails li[data-index="${this.state.selectionIndex}"]`, { duration: 500 });
  }

  _getThumbnailList() {
    var thumbnailList = [];
    for (let i = 0; i < Const.Image.count; i++) {
      thumbnailList.push(<Thumbnail key={i} index={i} />);
    }
    return thumbnailList;
  }

  _getClassNames() {
    return classNames(
      [
        'thumbnails'
      ],
      {}
    );
  }

}
