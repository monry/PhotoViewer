import Top from './index/top';
import Bottom from './index/bottom';
const keycode = require('keycode');

export default class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content">
        <Top ref="top" />
        <Bottom ref="bottom" />
      </div>
    );
  }

  componentDidMount() {
    const onKeyUp = Rx.Observable.fromEvent(window, 'keyup').share();
    this._keyboardEvents = {
      up   : onKeyUp.where((event) => 'up'    == keycode(event)).subscribe((event) => { this.refs.bottom.hide(); }),
      down : onKeyUp.where((event) => 'down'  == keycode(event)).subscribe((event) => { this.refs.bottom.show(); }),
      left : onKeyUp.where((event) => 'left'  == keycode(event)).subscribe((event) => { controller.previous(); }),
      right: onKeyUp.where((event) => 'right' == keycode(event)).subscribe((event) => { controller.next(); }),
      esc  : onKeyUp.where((event) => 'esc'   == keycode(event)).subscribe((event) => { this._quit(); }),
    };
  }

  componentWillUnmount() {
    this._keyboardEvents.forEach(
      (keyboardEvent) => {
        keyboardEvent.dispose();
      }
    );
  }

  _quit() {
    location.href = $('#container').attr('data-return-path');
  }

}
