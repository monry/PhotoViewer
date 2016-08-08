import Root from 'js/views/index';
import Top from 'js/views/index/top';
import Bottom from 'js/views/index/bottom';

describe(
  '<Index />',
  () => {
    it(
      'has div#content',
      (done) => {
        const wrapper = shallow(<Root />);
        expect(wrapper.find('div#content')).to.have.length(1);
        done();
      }
    );

    it(
      'correct node',
      (done) => {
        const wrapper = shallow(<Root />);
        expect(wrapper.contains(<div id="content"><Top /><Bottom /></div>)).to.equal(true);
        done();
      }
    );
  }
);
