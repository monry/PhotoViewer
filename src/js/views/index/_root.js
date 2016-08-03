import Top from './top';
import Bottom from './bottom';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content">
        <Top/>
        <Bottom/>
      </div>
    );
  }
}
