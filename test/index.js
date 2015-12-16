const assert = require('assert');
const path = require('path');

const MemoryFileSystem = require('memory-fs');
const Webpack = require('webpack');

const config = require('./fixture/webpack.config');

suite('webpack-loader', () => {
  test('should inline comment', done => {
    const fs = new MemoryFileSystem();
    const compiler = new Webpack(config);

    compiler.outputFileSystem = fs;
    compiler.run((er) => {
      if (er) {
        return void done(er);
      }

      const bundle = path.join(__dirname, './fixture/index.bundle.js');
      const result = fs.readFileSync(bundle, 'utf8');

      try {
        assert.ok(result.indexOf('/* inlined comment */') > -1);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
