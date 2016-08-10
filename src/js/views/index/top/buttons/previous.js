var classNames = require('classnames');

export default class Previous extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enabled: controller.selectionIndex.value > 0,
    };
  }

  render() {
    return (
      <p className={this._getClassNames()}><span>&#x25c0;</span></p>
    );
  }

  componentDidMount() {
    this.$().clickAsObservable().subscribe(
      (event) => {
        controller.previous();
      }
    );
    controller.selectionIndex.asObservable().subscribe(
      (value) => {
        this.setState({ enabled: value > 0 });
      }
    )
  }

  componentWillUnmount() {
  }

  _getClassNames() {
    return classNames(
      [
        'move',
        'previous'
      ],
      {
        'disabled': !this.state.enabled,
      }
    );
  }

}
