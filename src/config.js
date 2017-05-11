
const configuration = {
  ACTIONS_PREFIX: '',
  ACTIONS_SUFFIX: 'Actions',
  INIT_FUNCTION: 'init',
  ACTION_SPLITTER: '/',
};

const configure = (config) => {
  config && Object.keys(configuration).forEach(key => {
    configuration[key] = config[key] !== undefined ? config[key] : configuration[key];
  });
};

module.exports = { configure, configuration };
