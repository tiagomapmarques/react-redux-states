const config = require('./config').configuration;

const prefix = config.ACTIONS_PREFIX;
const suffix = config.ACTIONS_SUFFIX;
const init = config.INIT_FUNCTION;

const strip = string => {
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

const actionSelector = actions => (...args) => dispatch => {
  const selected = Object.keys(actions)
    .filter(key => args.indexOf(strip(key)) >= 0)
    .reduce((accumulator, key) => Object.assign({}, accumulator, {
      [key]: actionsToDispatchables(actions[key], dispatch),
    }), {});
  Object.keys(selected).forEach(item => {
    selected[item][init] && typeof selected[item][init] === 'function' && selected[item][init]();
  });
  return selected;
};

module.exports = actionSelector;
