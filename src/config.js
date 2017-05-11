
const config = {
  ACTIONS_PREFIX: '',
  ACTIONS_SUFFIX: 'Actions',
  ACTIONS_SPLITTER: '/',
  INIT_FUNCTION: 'init',
};

const getConfig = newConfig => Object.assign({}, config, newConfig);

module.exports = getConfig;
