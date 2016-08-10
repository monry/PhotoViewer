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

  componentDidMount() {
    this._onMouseOver = this.$().mouseoverAsObservable().subscribe(
      (event) => {
        this.show();
      }
    );
    this._onMouseOut = this.$().mouseoutAsObservable().subscribe(
      (event) => {
        this.hide();
      }
    );
  }

  componentWillUnmount() {
    this._onMouseOver.dispose();
    this._onMouseOut.dispose();
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
