var classNames = require('classnames');
import Thumbnails from './bottom/thumbnails';

export default class Bottom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }

  render() {
    return (
      <div id="bottom" className={this._getClassNames()}>
        <Thumbnails visibility={this.state.visibility} />
      </div>
    );
  }

  show() {
    this.setState({ visibility: true });
  }

  hide() {
    this.setState({ visibility: false });
  }

  _getClassNames() {
    return classNames(
      [],
      {
        'show': this.state.visibility,
        'hide': !this.state.visibility,
      }
    );
  }

}
