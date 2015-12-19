const assert = require('assert');
const config = require('./fixture/fixture.config');
const transform = require('./fixture/transform');

suite('webpack-loader', () => {
  test('should inline comment', done => {
    transform(config)
      .then(result => {
        assert.ok(result.indexOf('/* inlined comment */') > -1);
        done();
      })
      .catch(done);
  });
});
