var classNames = require('classnames');

export default class Next extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enabled: controller.selectionIndex.value < Const.Image.count,
    };
  }

  render() {
    return (
      <p className={this._getClassNames()}><span>&#x25b6;</span></p>
    );
  }

  componentDidMount() {
    this.$().clickAsObservable().subscribe(
      (event) => {
        controller.next();
      }
    );
    controller.selectionIndex.asObservable().subscribe(
      (value) => {
        this.setState({ enabled: value < Const.Image.count });
      }
    )
  }

  componentWillUnmount() {
  }

  _getClassNames() {
    return classNames(
      [
        'move',
        'next',
      ],
      {
        'disabled': !this.state.enabled,
      }
    );
  }

}
