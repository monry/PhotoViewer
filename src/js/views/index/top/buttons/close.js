var classNames = require('classnames');

export default class Close extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={this._getClassNames()}>&#x00d7;</p>
    );
  }

  componentDidMount() {
    this._onClick = this.$()
      .clickAsObservable()
      .subscribe(
        (event) => {
          location.href = Const.returnPath;
        }
      );
  }

  componentWillUnmount() {
  }

  _getClassNames() {
    return classNames(
      [
        'close',
      ],
      {}
    );
  }

}
