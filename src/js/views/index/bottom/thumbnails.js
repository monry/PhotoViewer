var classNames = require('classnames');
import Thumbnail from './thumbnails/thumbnail';

export default class Thumbnails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ol className={this._getClassNames()}>
        {this._getThumbnailList()}
      </ol>
    );
  }

  _getThumbnailList() {
    var thumbnailList = [];
    for (let i = 0; i < parseInt($('#container').attr('data-photo-count')); i++) {
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
