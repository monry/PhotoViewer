import Thumbnails from './bottom/thumbnails';

export default class Bottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="bottom">
        <Thumbnails />
      </div>
    );
  }
}
