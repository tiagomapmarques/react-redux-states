const config = require('./config')();

const strip = (string, configuration) => {
  const prefix = (configuration && configuration.ACTIONS_PREFIX) || config.ACTIONS_PREFIX;
  const suffix = (configuration && configuration.ACTIONS_SUFFIX) || config.ACTIONS_SUFFIX;
  let result = string;

  if (result.indexOf(prefix) === 0) {
    result = result.substring(prefix.length);
  }

  const lengthWithoutSuffix = result.length - suffix.length;
  if (result.indexOf(suffix) === lengthWithoutSuffix) {
    result = result.substring(0, lengthWithoutSuffix);
  }
  return result;
};

const actionsToDispatchables = (actionsObject, dispatch) => Object.keys(actionsObject)
  .reduce((accumulator, key) => Object.assign({}, accumulator, {
    [key]: (...args) => dispatch(actionsObject[key](...args)),
  }), {});

const actionSelector = (actions, configuration) => (...args) => dispatch => {
  const selected = Object.keys(actions)
    .filter(key => args.indexOf(strip(key, configuration)) >= 0)
    .reduce((accumulator, key) => Object.assign({}, accumulator, {
      [key]: actionsToDispatchables(actions[key], dispatch),
    }), {});
  const init = (configuration && configuration.INIT_FUNCTION) || config.INIT_FUNCTION;
  Object.keys(selected).forEach(item => {
    selected[item][init] && typeof selected[item][init] === 'function' && selected[item][init]();
  });
  return selected;
};

module.exports = actionSelector;
