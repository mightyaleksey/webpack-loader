/**
 * Simple loader
 *
 * @param  {string} source
 * @return {string}
 */
module.exports = function (source) {
  return '/* inlined comment */\n' + source;
};
