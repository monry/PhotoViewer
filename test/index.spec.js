import Hello from '../src/js/index';

describe(
  'Hogehoge',
  () => {
    it(
      'test hoge',
      (done) => {
        assert.equal("hoge", "hoge");
        done();
      }
    );

    it(
      'test dom',
      (done) => {
        const wrapper = shallow(<Hello />);
        expect(wrapper.find('div')).to.have.length(1);
        done();
      }
    );
  }
);