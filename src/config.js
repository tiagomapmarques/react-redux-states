
const config = {
  ACTIONS_PREFIX: '',
  ACTIONS_SUFFIX: 'Actions',
  ACTIONS_SPLITTER: '/',
  INIT_FUNCTION: 'init',
};

const buildHelpers = newConfig => Object.assign({}, newConfig, {
  getActionsName: name => `${newConfig.ACTIONS_PREFIX}${name}${newConfig.ACTIONS_SUFFIX}`,
  getActionType: (typeName, typeAction) => ({
    type: `${typeName}${newConfig.ACTIONS_SPLITTER}${typeAction}`
  }),
})

const getConfig = newConfig => buildHelpers(Object.assign({}, config, newConfig));

module.exports = getConfig;
