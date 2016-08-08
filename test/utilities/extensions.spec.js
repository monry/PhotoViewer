import _ from 'js/utilities/extensions';

describe(
  'Number.prototype.zerofill',
  () => {
    it(
      'positive / length < digit / without decimal',
      (done) => {
        expect((5).zerofill(3)).to.equal("005");
        done();
      }
    );

    it(
      'positive / length < digit / with decimal',
      (done) => {
        expect((3.14).zerofill(3)).to.equal("003.14");
        done();
      }
    );

    it(
      'positive / length > digit / without decimal',
      (done) => {
        expect((12345).zerofill(3)).to.equal("12345");
        done();
      }
    );

    it(
      'positive / length > digit / with decimal',
      (done) => {
        expect((98765.4321).zerofill(3)).to.equal("98765.4321");
        done();
      }
    );

    it(
      'negative / length < digit / without decimal',
      (done) => {
        expect((-5).zerofill(3)).to.equal("-005");
        done();
      }
    );

    it(
      'negative / length < digit / with decimal',
      (done) => {
        expect((-3.14).zerofill(3)).to.equal("-003.14");
        done();
      }
    );

    it(
      'negative / length > digit / without decimal',
      (done) => {
        expect((-12345).zerofill(3)).to.equal("-12345");
        done();
      }
    );

    it(
      'negative / length > digit / with decimal',
      (done) => {
        expect((-98765.4321).zerofill(3)).to.equal("-98765.4321");
        done();
      }
    );
  }
);
