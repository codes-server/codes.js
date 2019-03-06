module.exports = {
  // Core
  Client: require('./client/CodesClient'),
  Plugins: require('./plugins/index'),

  // Version
  version: require('../package.json').version,
};
