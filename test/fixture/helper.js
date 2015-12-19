const debug = require('debug')('loader');
const MemoryFileSystem = require('memory-fs');
const Webpack = require('webpack');

/**
 * @param  {object} config
 * @return {promise}
 */
function compile(config) {
  return new Promise((resolve, reject) => {
    const fs = new MemoryFileSystem();
    const compiler = new Webpack(config);

    compiler.outputFileSystem = fs;
    compiler.run((er, stats) => {
      if (er) {
        return void reject(er);
      }

      debug(`time ${stats.endTime - stats.startTime}ms`);
      const result = fs.readFileSync(config.destination, 'utf8');
      resolve(result);
    });
  });
};

exports.compile = compile;
