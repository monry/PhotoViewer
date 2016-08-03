require('../scss/index.scss');

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello {this.props.name} !!</div>
    );
  }
}

$(
  () => {
    // Helloコンポーネントを#appにマウント
    ReactDOM.render(
      <Hello name="React.js" />,
      $('#container').get(0)
    );
  }
);
