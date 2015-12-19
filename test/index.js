const assert = require('assert');
const config = require('./fixture/fixture.config');
const compile = require('./fixture/helper').compile;

suite('webpack-loader', () => {
  test('should inline comment', done => {
    compile(config)
      .then(result => {
        assert.ok(result.indexOf('/* inlined comment */') > -1);
        done();
      })
      .catch(done);
  });
});
