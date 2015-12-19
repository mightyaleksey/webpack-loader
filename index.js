/**
 * Simple loader
 *
 * @param  {string} source
 * @return {string}
 */
module.exports = function (source) {
  // In case of async transformations
  // var callback = this.async();

  // Flag itself cacheable if possible
  // this.cacheable();
  // Mark dependencies if a loader uses external resources
  // this.addDependency(externalPath);
  return '/* inlined comment */\n' + source;
};
