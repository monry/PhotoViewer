var classNames = require('classnames');
var keycode = require('keycode');
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
    controller.selectionIndex.asObservable().subscribe(
      (selectionIndex) => {
        this._setSelectionIndex(selectionIndex);
      }
    );
    $('div#bottom > ol.thumbnails').css({ width: Const.Image.count * $('div#bottom > ol.thumbnails > li:last-child').outerWidth(true) });
  }

  componentWillUnmount() {
    this._keyboardEvents.forEach(
      (keyboardEvent) => {
        keyboardEvent.dispose();
      }
    );
  }

  _setSelectionIndex(selectionIndex) {
    this.setState({ selectionIndex: selectionIndex });
    //noinspection JSUnresolvedFunction
    $('div#bottom')
      .scrollTo(
        `li:eq(${this.state.selectionIndex})`,
        250,
        {
          margin: true,
        }
      );
  }

  _getThumbnailList() {
    var thumbnailList = [];
    for (let i = 0; i < Const.Image.count; i++) {
      thumbnailList.push(<Thumbnail key={i} index={i} selectionIndex={this.state.selectionIndex} _setSelectionIndex={this._setSelectionIndex.bind(this)} />);
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
