const MemoryFileSystem = require('memory-fs');
const Webpack = require('webpack');

/**
 * @param  {object} config
 * @return {promise}
 */
module.exports = function transform(config) {
  return new Promise((resolve, reject) => {
    const fs = new MemoryFileSystem();
    const compiler = new Webpack(config);

    compiler.outputFileSystem = fs;
    compiler.run((er) => {
      if (er) {
        return void reject(er);
      }

      const result = fs.readFileSync(config.destination, 'utf8');
      resolve(result);
    });
  });
};
