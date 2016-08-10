import Photo from './photos/photo';

var classNames = require('classnames');

export default class Photos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: controller.selectionIndex.value,
    };
    controller.selectionIndex.asObservable().subscribe(
      (index) => {
        this.setState({ index: index });
      }
    );
  }

  render() {
    return (
      <div className={this._getClassNames()}>
        <Photo index={this.state.index - 1} />
        <Photo index={this.state.index} />
        <Photo index={this.state.index + 1} />
      </div>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  _getClassNames() {
    return classNames(
      [
        'photos'
      ],
      {}
    );
  }

}
