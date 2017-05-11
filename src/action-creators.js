const config = require('./config').configuration;

const prefix = config.ACTION_PREFIX;
const suffix = config.ACTION_SUFFIX;
const init = config.INIT_FUNCTION;

const strip = string => {
  let result = string;
  if (result.indexOf(config.ACTION_PREFIX) === 0) {
    result = result.substring(config.ACTION_PREFIX.length);
  }
  const lengthWithoutSuffix = result.length - config.ACTION_PREFIX.length;
  if (result.indexOf(config.ACTION_SUFFIX) === lengthWithoutSuffix) {
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
